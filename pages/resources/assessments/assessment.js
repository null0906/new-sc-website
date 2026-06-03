import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import LeadForm from '../../../components/LeadForm'

const BOOK_URL = 'https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/'

const INDUSTRIES = [
  'Fintech & Banking', 'Healthcare & Pharma', 'E-commerce & Retail', 'SaaS & Technology',
  'Education & EdTech', 'Manufacturing', 'Real Estate & PropTech', 'Logistics & Supply Chain',
  'Media & Entertainment', 'Travel & Hospitality', 'Professional Services', 'Other',
]

// 10 questions across 8 domains, per the DPDP Funnel PRD.
const QUESTIONS = [
  { id: 'q1', domain: 'Notice & Consent', dpdp: 'Sec 5 · Rule 3', weight: 3,
    text: 'Do you give a clear privacy notice (purpose, withdrawal, rights, complaint to the Board) at or before collecting personal data?',
    risk: 'No clear privacy notice at the point of collection — data principals aren’t told the purpose, their rights or how to complain.' },
  { id: 'q2', domain: 'Notice & Consent', dpdp: 'Sec 6(4)–(6)', weight: 3,
    text: 'Can consent be withdrawn as easily as it was given, and does processing stop when it is?',
    risk: 'Consent can’t be withdrawn as easily as it’s given, so processing may continue without a valid basis.' },
  { id: 'q3', domain: 'Data Principal Rights', dpdp: 'Sec 11 · 12', weight: 3,
    text: 'Do you have a working process for handling access, correction and erasure requests?',
    risk: 'No working process to handle access, correction and erasure requests from data principals.' },
  { id: 'q4', domain: 'Data Principal Rights', dpdp: 'Sec 13 · Rule 9', weight: 2,
    text: 'Have you published a DPO / grievance contact with a defined response timeline?',
    risk: 'No published DPO or grievance contact with a response timeline for complaints.' },
  { id: 'q5', domain: "Children's Data", dpdp: 'Sec 9 · Rule 10', weight: 2, allowNA: true,
    text: 'Do you obtain verifiable parental consent for children’s data and avoid targeting children?',
    risk: 'Children’s data is processed without verifiable parental consent, or children may be targeted.' },
  { id: 'q6', domain: 'Security Safeguards', dpdp: 'Sec 8(5) · Rule 6', weight: 3,
    text: 'Do you have reasonable safeguards — encryption, access control, logging and backups?',
    risk: 'Reasonable security safeguards (encryption, access control, logging, backups) aren’t fully in place.' },
  { id: 'q7', domain: 'Breach Management', dpdp: 'Sec 8(6) · Rule 7', weight: 3,
    text: 'Do you have a breach-response process to notify affected individuals and the Board without delay?',
    risk: 'No defined breach-response process to notify affected individuals and the Board without delay.' },
  { id: 'q8', domain: 'Retention & Erasure', dpdp: 'Sec 8(7) · Rule 8', weight: 2,
    text: 'Have you defined retention periods and a deletion process for personal data?',
    risk: 'Retention periods and a deletion process aren’t defined, so data is kept longer than needed.' },
  { id: 'q9', domain: 'Processor Governance', dpdp: 'Sec 8(2)', weight: 2, allowNA: true,
    text: 'Do you have written contracts with processors carrying data-protection terms?',
    risk: 'Processor relationships lack written contracts carrying data-protection terms.' },
  { id: 'q10', domain: 'Accountability', dpdp: 'Sec 8', weight: 2,
    text: 'Do you maintain a data inventory / record of processing (what, where, why, who)?',
    risk: 'No data inventory / record of processing — you can’t show what data you hold, where and why.' },
]

const DOMAINS = [
  'Notice & Consent', 'Data Principal Rights', "Children's Data", 'Security Safeguards',
  'Breach Management', 'Retention & Erasure', 'Processor Governance', 'Accountability',
]

const OPTIONS = [
  { label: 'Yes, fully', value: 1 },
  { label: 'Partially', value: 0.5 },
  { label: 'No, not yet', value: 0 },
  { label: 'Not applicable', value: 'na' },
]

function bandFor(score) {
  if (score <= 40) return { band: 'High Risk', tone: 'red' }
  if (score <= 70) return { band: 'Developing', tone: 'amber' }
  return { band: 'Mature', tone: 'green' }
}

function computeResults(answers) {
  const applicable = QUESTIONS.filter((q) => answers[q.id] !== 'na' && answers[q.id] != null)
  const wSum = applicable.reduce((s, q) => s + q.weight, 0)
  const aSum = applicable.reduce((s, q) => s + q.weight * answers[q.id], 0)
  const overall = wSum ? Math.round((aSum / wSum) * 100) : 0

  const domains = DOMAINS.map((d) => {
    const qs = QUESTIONS.filter((q) => q.domain === d && answers[q.id] !== 'na' && answers[q.id] != null)
    const dw = qs.reduce((s, q) => s + q.weight, 0)
    const da = qs.reduce((s, q) => s + q.weight * answers[q.id], 0)
    return { domain: d, score: dw ? Math.round((da / dw) * 100) : null }
  })

  const gaps = QUESTIONS
    .filter((q) => answers[q.id] !== 'na' && answers[q.id] != null && answers[q.id] < 1)
    .sort((a, b) => b.weight - a.weight || answers[a.id] - answers[b.id])
    .slice(0, 3)
    .map((q) => ({ risk: q.risk, dpdp: q.dpdp, domain: q.domain }))

  return { overall, ...bandFor(overall), domains, gaps }
}

function ScoreRing({ score, tone }) {
  const r = 64
  const circ = 2 * Math.PI * r
  const color = { red: 'var(--red)', amber: 'var(--yellow)', green: 'var(--green)' }[tone] || 'var(--accent)'
  return (
    <svg width="170" height="170" viewBox="0 0 170 170">
      <circle cx="85" cy="85" r={r} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="13" />
      <circle cx="85" cy="85" r={r} fill="none" stroke={color} strokeWidth="13" strokeLinecap="round"
        strokeDasharray={circ} strokeDashoffset={circ * (1 - score / 100)} transform="rotate(-90 85 85)"
        style={{ transition: 'stroke-dashoffset 1s var(--ease-out)' }} />
      <text x="85" y="80" textAnchor="middle" fontSize="38" fontWeight="800" fill="var(--white)">{score}</text>
      <text x="85" y="104" textAnchor="middle" fontSize="13" fill="var(--text-secondary)">/ 100</text>
    </svg>
  )
}

export default function Assessment() {
  const [step, setStep] = useState('gate') // gate | industry | questions | results
  const [industry, setIndustry] = useState('')
  const [answers, setAnswers] = useState({})
  const [idx, setIdx] = useState(0)

  const q = QUESTIONS[idx]
  const total = QUESTIONS.length
  const answered = answers[q?.id]

  const choose = (value) => {
    setAnswers((a) => ({ ...a, [q.id]: value }))
    setTimeout(() => {
      if (idx < total - 1) setIdx(idx + 1)
      else setStep('results')
    }, 180)
  }

  const results = step === 'results' ? computeResults(answers) : null

  return (
    <>
      <Head>
        <title>Free DPDP Assessment | SecComply</title>
        <meta name="description" content="A free 10-question DPDP readiness assessment across 8 domains. Get your overall score, a per-domain breakdown and your top 3 gaps mapped to DPDP Act sections in about 5 minutes." />
        <link rel="canonical" href="https://seccomply.net/resources/assessments/assessment" />
      </Head>

      <main className="as2">
        {/* ── GATE: contact form ── */}
        {step === 'gate' && (
          <section className="as2-narrow">
            <Link href="/resources/assessments" className="as2-back">← Back to Assessments</Link>
            <span className="as2-badge">🧭 ~5 minutes · 10 questions</span>
            <h1>Free DPDP <span className="accent">Assessment</span></h1>
            <p className="as2-lede">A quick contact form first, then 10 questions across 8 DPDP domains. You’ll get an overall score, a per-domain breakdown and your top 3 gaps mapped to DPDP Act sections.</p>
            <div className="as2-card">
              <LeadForm
                source="assessment"
                submitLabel="Start the assessment →"
                onSuccess={() => setStep('industry')}
              />
            </div>
          </section>
        )}

        {/* ── INDUSTRY ── */}
        {step === 'industry' && (
          <section className="as2-narrow">
            <span className="as2-badge">Almost there</span>
            <h1>What’s your <span className="accent">industry</span>?</h1>
            <p className="as2-lede">This helps us frame your results. We’ve already captured your organisation name and size.</p>
            <div className="as2-industries">
              {INDUSTRIES.map((ind) => (
                <button key={ind} className={`as2-ind ${industry === ind ? 'sel' : ''}`} onClick={() => setIndustry(ind)}>
                  {ind}
                </button>
              ))}
            </div>
            <button className="as2-next" disabled={!industry} onClick={() => setStep('questions')}>
              Begin the 10 questions →
            </button>
          </section>
        )}

        {/* ── QUESTIONS ── */}
        {step === 'questions' && q && (
          <section className="as2-narrow">
            <div className="as2-progress">
              <div className="as2-progress-bar" style={{ width: `${(idx / total) * 100}%` }} />
            </div>
            <div className="as2-qmeta">
              <span>Question {idx + 1} of {total}</span>
              <span className="as2-qdomain">{q.domain} · {q.dpdp}</span>
            </div>
            <h2 className="as2-qtext">{q.text}</h2>
            <div className="as2-options">
              {OPTIONS.filter((o) => o.value !== 'na' || q.allowNA).map((o) => (
                <button
                  key={o.label}
                  className={`as2-opt ${answered === o.value ? 'sel' : ''}`}
                  onClick={() => choose(o.value)}
                >
                  {o.label}
                </button>
              ))}
            </div>
            <button className="as2-prev" disabled={idx === 0} onClick={() => setIdx(idx - 1)}>← Back</button>
          </section>
        )}

        {/* ── RESULTS ── */}
        {step === 'results' && results && (
          <section className="as2-results">
            <span className="as2-badge">Your DPDP readiness</span>
            <div className="as2-scorecard">
              <ScoreRing score={results.overall} tone={results.tone} />
              <div>
                <span className={`as2-band as2-band-${results.tone}`}>{results.band}</span>
                <p className="as2-bandkey">0–40 High Risk · 41–70 Developing · 71–100 Mature</p>
                {industry && <p className="as2-ind-tag">Industry: {industry}</p>}
              </div>
            </div>

            <h3 className="as2-h3">Readiness by domain</h3>
            <div className="as2-bars">
              {results.domains.map((d) => (
                <div key={d.domain} className="as2-bar-row">
                  <span className="as2-bar-label">{d.domain}</span>
                  <div className="as2-bar-track">
                    {d.score == null ? (
                      <span className="as2-bar-na">N/A</span>
                    ) : (
                      <div className={`as2-bar-fill ${bandFor(d.score).tone}`} style={{ width: `${d.score}%` }} />
                    )}
                  </div>
                  <span className="as2-bar-pct">{d.score == null ? '—' : `${d.score}%`}</span>
                </div>
              ))}
            </div>

            {results.gaps.length > 0 && (
              <>
                <h3 className="as2-h3">Your top {results.gaps.length} gap{results.gaps.length > 1 ? 's' : ''}</h3>
                <ol className="as2-gaps">
                  {results.gaps.map((g, i) => (
                    <li key={i}>
                      <p className="as2-gap-risk">{g.risk}</p>
                      <span className="as2-gap-sec">{g.domain} · {g.dpdp}</span>
                    </li>
                  ))}
                </ol>
              </>
            )}

            <div className="as2-results-cta">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="as2-bookbtn">
                📅 Book a consultation call →
              </a>
            </div>
            <p className="as2-disclaimer">⚖️ Indicative self-assessment — not a legal audit or opinion.</p>
          </section>
        )}
      </main>

      <style jsx>{`
        .as2 { max-width:760px; margin:0 auto; padding:2rem 1.5rem 5rem; }
        .as2-narrow, .as2-results { text-align:center; }
        .as2-back { display:inline-block; color:var(--text-muted); font-size:.9rem; text-decoration:none; margin-bottom:1.25rem; }
        .as2-back:hover { color:var(--accent); }
        .as2-badge { display:inline-block; padding:.35rem .9rem; border-radius:var(--radius-full); background:rgba(129,140,248,.12); color:#818cf8; border:1px solid rgba(129,140,248,.3); font-size:.74rem; font-weight:700; margin-bottom:1rem; }
        .as2 h1 { font-size:clamp(2rem,5vw,3rem); font-weight:800; margin:0 0 .75rem; color:var(--white); }
        .accent { background:var(--gradient-accent); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .as2-lede { color:var(--text-secondary); font-size:1.02rem; line-height:1.6; max-width:560px; margin:0 auto 2rem; }
        .as2-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:2rem; text-align:left; }

        .as2-industries { display:grid; grid-template-columns:repeat(2,1fr); gap:.6rem; margin:0 auto 2rem; max-width:560px; }
        @media (max-width:560px){ .as2-industries { grid-template-columns:1fr; } }
        .as2-ind { padding:.85rem 1rem; background:var(--bg-card); border:1px solid var(--border-hover); border-radius:10px; color:var(--text-primary); font-size:.9rem; cursor:pointer; font-family:inherit; transition:all .15s ease; }
        .as2-ind:hover { border-color:var(--accent); }
        .as2-ind.sel { background:rgba(0, 129, 242,.12); border-color:var(--accent); color:var(--white); font-weight:600; }
        .as2-next, .as2-submit { background:var(--gradient-accent); color:#fff; border:none; border-radius:10px; padding:.9rem 1.7rem; font-size:.95rem; font-weight:700; cursor:pointer; font-family:inherit; }
        .as2-next:disabled { opacity:.5; cursor:not-allowed; }

        .as2-progress { height:6px; background:rgba(255,255,255,.08); border-radius:var(--radius-full); overflow:hidden; margin-bottom:1.5rem; }
        .as2-progress-bar { height:100%; background:var(--gradient-accent); border-radius:var(--radius-full); transition:width .3s var(--ease-out); }
        .as2-qmeta { display:flex; justify-content:space-between; align-items:center; font-size:.8rem; color:var(--text-muted); margin-bottom:1rem; flex-wrap:wrap; gap:.5rem; }
        .as2-qdomain { color:var(--accent-light); font-weight:600; }
        .as2-qtext { font-size:1.35rem; font-weight:700; color:var(--white); line-height:1.45; margin:0 0 1.75rem; }
        .as2-options { display:flex; flex-direction:column; gap:.7rem; max-width:480px; margin:0 auto 1.5rem; }
        .as2-opt { padding:1rem 1.25rem; background:var(--bg-card); border:1px solid var(--border-hover); border-radius:12px; color:var(--text-primary); font-size:.98rem; cursor:pointer; font-family:inherit; transition:all .15s ease; text-align:left; }
        .as2-opt:hover { border-color:var(--accent); transform:translateY(-1px); }
        .as2-opt.sel { background:rgba(0, 129, 242,.12); border-color:var(--accent); color:var(--white); font-weight:600; }
        .as2-prev { background:none; border:none; color:var(--text-muted); font-size:.9rem; cursor:pointer; font-family:inherit; }
        .as2-prev:disabled { opacity:.4; cursor:not-allowed; }

        .as2-scorecard { display:flex; align-items:center; justify-content:center; gap:2rem; flex-wrap:wrap; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:2rem; margin:1rem 0 2rem; text-align:left; }
        .as2-band { display:inline-block; padding:.3rem .8rem; border-radius:var(--radius-full); font-size:.8rem; font-weight:800; text-transform:uppercase; letter-spacing:.05em; margin-bottom:.6rem; }
        .as2-band-red { background:var(--red-dim); color:var(--red); }
        .as2-band-amber { background:var(--yellow-dim); color:var(--yellow); }
        .as2-band-green { background:var(--green-dim); color:var(--green); }
        .as2-bandkey { color:var(--text-muted); font-size:.78rem; margin:0 0 .4rem; }
        .as2-ind-tag { color:var(--text-secondary); font-size:.85rem; margin:0; }

        .as2-h3 { font-size:1.1rem; font-weight:700; color:var(--white); margin:2rem 0 1rem; text-align:left; }
        .as2-bars { display:flex; flex-direction:column; gap:.65rem; }
        .as2-bar-row { display:flex; align-items:center; gap:.85rem; }
        .as2-bar-label { width:150px; flex-shrink:0; text-align:left; font-size:.82rem; color:var(--text-secondary); }
        .as2-bar-track { flex:1; height:12px; background:rgba(255,255,255,.06); border-radius:var(--radius-full); overflow:hidden; position:relative; }
        .as2-bar-fill { height:100%; border-radius:var(--radius-full); transition:width .8s var(--ease-out); }
        .as2-bar-fill.red { background:var(--red); }
        .as2-bar-fill.amber { background:var(--yellow); }
        .as2-bar-fill.green { background:var(--green); }
        .as2-bar-na { font-size:.7rem; color:var(--text-muted); padding-left:.5rem; line-height:12px; }
        .as2-bar-pct { width:42px; flex-shrink:0; text-align:right; font-size:.82rem; font-weight:700; color:var(--white); font-family:var(--font-mono); }

        .as2-gaps { list-style:none; counter-reset:gap; padding:0; margin:0; display:flex; flex-direction:column; gap:.7rem; text-align:left; }
        .as2-gaps li { counter-increment:gap; background:var(--bg-card); border:1px solid var(--border); border-left:3px solid var(--accent); border-radius:12px; padding:1rem 1.1rem 1rem 2.8rem; position:relative; }
        .as2-gaps li::before { content:counter(gap); position:absolute; left:1rem; top:1rem; width:22px; height:22px; border-radius:50%; background:rgba(0, 129, 242,.15); color:var(--accent); font-size:.78rem; font-weight:800; display:flex; align-items:center; justify-content:center; }
        .as2-gap-risk { margin:0 0 .4rem; color:var(--white); font-size:.92rem; line-height:1.5; }
        .as2-gap-sec { font-size:.76rem; color:var(--accent-light); font-weight:600; }

        .as2-results-cta { text-align:center; margin:2.5rem 0 1rem; }
        .as2-bookbtn { display:inline-flex; align-items:center; gap:.5rem; background:var(--gradient-accent); color:#fff; padding:1rem 2rem; border-radius:10px; font-weight:700; text-decoration:none; font-size:1rem; }
        .as2-disclaimer { text-align:center; font-size:.76rem; color:var(--text-muted); margin:0; }
      `}</style>
    </>
  )
}
