import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const BOOK_URL = 'https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/'

const toneColor = { red: 'var(--red)', amber: 'var(--yellow)', green: 'var(--green)' }

function ScoreRing({ score, tone }) {
  const r = 64
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - score / 100)
  const color = toneColor[tone] || 'var(--accent)'
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" className="ring">
      <circle cx="80" cy="80" r={r} fill="none" stroke="rgb(var(--p-white-rgb) / .08)" strokeWidth="12" />
      <circle
        cx="80" cy="80" r={r} fill="none" stroke={color} strokeWidth="12" strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={offset} transform="rotate(-90 80 80)"
        style={{ transition: 'stroke-dashoffset 1s var(--ease-out)' }}
      />
      <text x="80" y="74" textAnchor="middle" fontSize="34" fontWeight="800" fill="var(--white)">{score}</text>
      <text x="80" y="98" textAnchor="middle" fontSize="12" fill="var(--text-secondary)">/ 100</text>
      <style jsx>{`.ring{display:block;margin:0 auto}`}</style>
    </svg>
  )
}

export default function Scanner() {
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done | error
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const run = async (e) => {
    e.preventDefault()
    setError('')
    if (!url.trim()) return setError('Please enter your website URL.')
    setStatus('loading')
    setResult(null)
    try {
      const res = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim(), email: email.trim() || undefined }),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus('error')
        setError(data.error || 'Scan failed. Please try again.')
        return
      }
      setResult(data)
      setStatus('done')
    } catch {
      setStatus('error')
      setError('Network error. Please try again.')
    }
  }

  const reset = () => { setResult(null); setStatus('idle'); setError('') }

  return (
    <>
      <Head>
        <title>Free DPDP Scanner | SecComply</title>
        <meta name="description" content="Free DPDP scanner — enter your website URL and get a 0–100 readiness score across six DPDP signals in about 30 seconds. Automated and indicative, not a legal audit." />
        <link rel="canonical" href="https://seccomply.net/resources/assessments/scanner" />
      </Head>

      <main className="scan-page">
        <section className="scan-hero">
          <Link href="/resources/assessments" className="scan-back">← Back to Assessments</Link>
          <span className="scan-badge">⚡ ~30 seconds · no signup</span>
          <h1>DPDP <span className="accent">Scanner</span></h1>
          <p>Drop in your website URL. We check six DPDP signals and return a 0–100 score with one fix for each gap.</p>

          <form className="scan-form" onSubmit={run}>
            <input
              type="text" value={url} onChange={(e) => setUrl(e.target.value)}
              placeholder="yourcompany.com" aria-label="Website URL" autoComplete="off"
            />
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Email (optional)" aria-label="Email (optional)" autoComplete="off"
            />
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Scanning…' : 'Run the Scanner'}
            </button>
          </form>
          {error && <p className="scan-error">{error}</p>}
          <p className="scan-disclaimer">⚖️ Automated, heuristic &amp; indicative — not a legal audit. We only read your public page; we can’t see content behind a login or rendered by JavaScript.</p>
        </section>

        {status === 'loading' && (
          <section className="scan-loading">
            <div className="scan-spinner" />
            <p>Fetching and analysing your site…</p>
          </section>
        )}

        {status === 'done' && result && (
          <section className="scan-results">
            <div className="scan-scorecard">
              <ScoreRing score={result.score} tone={result.tone} />
              <div className="scan-scoremeta">
                <span className={`scan-band scan-band-${result.tone}`}>{result.band}</span>
                <p className="scan-scored-url">{result.url}</p>
                <p className="scan-bandkey">0–40 High Risk · 41–70 Developing · 71–100 Mature</p>
              </div>
            </div>

            <h2 className="scan-h2">Signal breakdown</h2>
            <ul className="scan-signals">
              {result.signals.map((s) => (
                <li key={s.key} className={s.passed ? 'pass' : 'fail'}>
                  <div className="scan-sig-head">
                    <span className="scan-sig-mark">{s.passed ? '✓' : '✗'}</span>
                    <span className="scan-sig-label">{s.label}</span>
                    <span className="scan-sig-pts">{s.earned}/{s.points}</span>
                  </div>
                  {!s.passed && s.fix && <p className="scan-sig-fix"><strong>Fix:</strong> {s.fix}</p>}
                </li>
              ))}
            </ul>

            {result.bonus?.some((b) => b.present) && (
              <>
                <h2 className="scan-h2">Bonus flags <span className="scan-h2-note">(not scored)</span></h2>
                <div className="scan-bonus">
                  {result.bonus.map((b) => (
                    <span key={b.key} className={`scan-chip ${b.present ? 'on' : 'off'}`}>
                      {b.present ? '●' : '○'} {b.label}
                    </span>
                  ))}
                </div>
              </>
            )}

            <div className="scan-cta">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="scan-btn-primary">📅 Book a consultation call →</a>
              <Link href="/resources/assessments/assessment" className="scan-btn-outline">Run the full 10-question assessment →</Link>
              <button className="scan-btn-ghost" onClick={reset}>Scan another site</button>
            </div>
          </section>
        )}
      </main>

      <style jsx>{`
        .scan-page { max-width:880px; margin:0 auto; padding:2rem 1.5rem 5rem; }
        .scan-hero { text-align:center; }
        .scan-back { display:inline-block; color:var(--text-muted); font-size:.9rem; text-decoration:none; margin-bottom:1.5rem; }
        .scan-back:hover { color:var(--accent); }
        .scan-badge {
          display:inline-block; padding:.35rem .9rem; border-radius:var(--radius-full);
          background:rgb(var(--teal-rgb) / .12); color:var(--teal); border:1px solid rgb(var(--teal-rgb) / .3);
          font-size:.74rem; font-weight:700; letter-spacing:.04em; margin-bottom:1rem;
        }
        .scan-hero h1 { font-size:clamp(2.2rem,5vw,3.2rem); font-weight:800; margin:0 0 .75rem; color:var(--white); }
        .scan-hero > p { color:var(--text-secondary); font-size:1.05rem; max-width:560px; margin:0 auto 2rem; line-height:1.6; }
        .accent { background:var(--gradient-accent); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .scan-form { display:flex; gap:.6rem; max-width:620px; margin:0 auto; flex-wrap:wrap; }
        .scan-form input {
          flex:1; min-width:180px; background:var(--bg-card); border:1px solid var(--border-hover);
          border-radius:10px; padding:.85rem 1rem; color:var(--white); font-size:.95rem; font-family:inherit; outline:none;
        }
        .scan-form input:focus { border-color:var(--accent); }
        .scan-form button {
          background:var(--gradient-accent); color:#fff; border:none; border-radius:10px;
          padding:.85rem 1.5rem; font-size:.95rem; font-weight:700; cursor:pointer; font-family:inherit; white-space:nowrap;
        }
        .scan-form button:disabled { opacity:.6; cursor:not-allowed; }
        .scan-error { color:var(--red); font-size:.9rem; margin:1rem 0 0; }
        .scan-disclaimer { font-size:.76rem; color:var(--text-muted); max-width:560px; margin:1.5rem auto 0; line-height:1.55; }

        .scan-loading { text-align:center; padding:3rem 0; }
        .scan-spinner {
          width:44px; height:44px; border-radius:50%; margin:0 auto 1rem;
          border:3px solid rgb(var(--p-white-rgb) / .1); border-top-color:var(--accent); animation:spin .8s linear infinite;
        }
        @keyframes spin { to { transform:rotate(360deg); } }
        .scan-loading p { color:var(--text-secondary); }

        .scan-results { margin-top:2.5rem; }
        .scan-scorecard {
          display:flex; align-items:center; gap:2rem; flex-wrap:wrap; justify-content:center;
          background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:2rem;
        }
        .scan-scoremeta { text-align:left; }
        .scan-band { display:inline-block; padding:.3rem .8rem; border-radius:var(--radius-full); font-size:.8rem; font-weight:800; text-transform:uppercase; letter-spacing:.05em; margin-bottom:.6rem; }
        .scan-band-red { background:var(--red-dim); color:var(--red); }
        .scan-band-amber { background:var(--yellow-dim); color:var(--yellow); }
        .scan-band-green { background:var(--green-dim); color:var(--green); }
        .scan-scored-url { color:var(--white); font-weight:600; margin:0 0 .4rem; word-break:break-all; font-size:.95rem; }
        .scan-bandkey { color:var(--text-muted); font-size:.78rem; margin:0; }

        .scan-h2 { font-size:1.15rem; font-weight:700; color:var(--white); margin:2.25rem 0 1rem; }
        .scan-h2-note { font-size:.8rem; color:var(--text-muted); font-weight:500; }
        .scan-signals { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:.7rem; }
        .scan-signals li { background:var(--bg-card); border:1px solid var(--border); border-left:3px solid var(--red); border-radius:12px; padding:1rem 1.1rem; }
        .scan-signals li.pass { border-left-color:var(--green); }
        .scan-sig-head { display:flex; align-items:center; gap:.7rem; }
        .scan-sig-mark { width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:.8rem; font-weight:800; flex-shrink:0; }
        .pass .scan-sig-mark { background:var(--green-dim); color:var(--green); }
        .fail .scan-sig-mark { background:var(--red-dim); color:var(--red); }
        .scan-sig-label { flex:1; color:var(--white); font-weight:600; font-size:.95rem; }
        .scan-sig-pts { color:var(--text-secondary); font-size:.85rem; font-weight:700; font-family:var(--font-mono); }
        .scan-sig-fix { margin:.6rem 0 0; padding-left:2.4rem; color:var(--text-secondary); font-size:.86rem; line-height:1.55; }
        .scan-sig-fix strong { color:var(--accent); }

        .scan-bonus { display:flex; flex-wrap:wrap; gap:.5rem; }
        .scan-chip { padding:.4rem .8rem; border-radius:var(--radius-full); font-size:.8rem; border:1px solid var(--border); }
        .scan-chip.on { background:rgb(var(--accent-rgb) / .1); color:var(--accent-light); border-color:rgb(var(--accent-rgb) / .3); }
        .scan-chip.off { color:var(--text-muted); }

        .scan-cta { margin-top:2.5rem; display:flex; flex-direction:column; align-items:center; gap:.9rem; }
        .scan-btn-primary { background:var(--gradient-accent); color:#fff; padding:.9rem 1.7rem; border-radius:10px; font-weight:700; text-decoration:none; }
        .scan-btn-outline { color:var(--accent); border:1px solid var(--accent-border,rgb(var(--accent-rgb) / .3)); padding:.75rem 1.4rem; border-radius:10px; font-weight:600; text-decoration:none; font-size:.92rem; }
        .scan-btn-ghost { background:none; border:none; color:var(--text-muted); font-size:.88rem; cursor:pointer; text-decoration:underline; font-family:inherit; }
      `}</style>
    </>
  )
}
