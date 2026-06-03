import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { useEffect } from 'react'

export default function AssessmentsIndex() {
  useEffect(() => {
    try {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.textContent = `(function(){
        const revealObs = new IntersectionObserver(e=>{e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
        document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));
      })();`
      document.body.appendChild(s)
      return () => { if(s.parentNode) s.parentNode.removeChild(s) }
    } catch(e) { console.error('Script error:', e) }
  }, [])

  return (
    <Layout>
      <Head>
        <title>DPDP Compliance Assessments | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Two free DPDP compliance tools from SecComply — a 30-second URL scanner and a 5-minute 10-question assessment. Find your gaps under the Digital Personal Data Protection Act 2023 before the Data Protection Board does." />
        <meta name="keywords" content="DPDP assessment, DPDP scanner, DPDP compliance check, free DPDP assessment India, DPDP gap analysis, DPDP readiness, Digital Personal Data Protection Act assessment" />
        <meta property="og:title" content="DPDP Compliance Assessments — SecComply" />
        <meta property="og:description" content="Free tools to check where you stand under India's DPDP Act. Scanner in 30 seconds, full assessment in 5 minutes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seccomply.net/resources/assessments" />
        <link rel="canonical" href="https://seccomply.net/resources/assessments" />
      </Head>

      <style jsx global>{`
        :root {
          --bg: #020617;
          --surface: #0a1628;
          --surface-2: #0f1f3a;
          --accent: #E8632B;
          --accent-soft: rgba(232, 99, 43, 0.15);
          --accent-border: rgba(232, 99, 43, 0.3);
          --text-primary: #f8fafc;
          --text-body: #c8d6e5;
          --text-muted: #94a3b8;
          --cy: #06d6a0;
          --bl: #818cf8;
          --am: #ffb703;
        }
        body {
          background: var(--bg);
          color: var(--text-primary);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          color: var(--text-muted);
          font-size: .95rem;
          padding: 1.5rem 2rem 0;
          text-decoration: none;
          max-width: 1200px;
          margin: 0 auto;
        }
        .back-link:hover { color: var(--accent); }

        .as-hero {
          text-align: center;
          padding: 3rem 2rem 2.5rem;
          max-width: 880px;
          margin: 0 auto;
        }
        .as-hero .as-icon {
          font-size: 3.5rem;
          margin-bottom: 1.25rem;
          display: inline-block;
        }
        .as-hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 800;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff 0%, #c8d6e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .as-hero p {
          font-size: 1.08rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0 auto;
          max-width: 680px;
        }
        .as-hero .as-disclaimer {
          margin-top: 1.25rem;
          display: inline-block;
          padding: .35rem .85rem;
          font-size: .72rem;
          color: var(--text-muted);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          letter-spacing: 0.04em;
        }

        .as-wrap { max-width: 1200px; margin: 0 auto; padding: 1rem 2rem 0; }

        /* --- TWO MAIN ASSESSMENT CARDS --- */
        .as-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 900px) { .as-grid { grid-template-columns: 1fr; } }

        .as-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 2rem 2rem 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .as-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #FF8A50);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(.16,1,.3,1);
        }
        .as-card:hover::before { transform: scaleX(1); }
        .as-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-border);
          box-shadow: 0 18px 42px rgba(0,0,0,0.4), 0 0 0 1px var(--accent-border);
        }

        .as-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .as-card-tag {
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          padding: .35rem .8rem;
          border-radius: 100px;
          font-size: .72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .as-card-tag.quick {
          background: rgba(6,214,160,0.12);
          color: var(--cy);
          border: 1px solid rgba(6,214,160,0.3);
        }
        .as-card-tag.deep {
          background: rgba(129,140,248,0.12);
          color: var(--bl);
          border: 1px solid rgba(129,140,248,0.3);
        }
        .as-card-time {
          font-size: .78rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .as-card-icon { font-size: 2.6rem; line-height: 1; }
        .as-card h2 {
          font-size: 1.6rem;
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .as-card-sub {
          font-size: .95rem;
          color: var(--accent);
          font-weight: 700;
          margin: -.4rem 0 0;
        }
        .as-card-desc {
          color: var(--text-body);
          font-size: .95rem;
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        .as-card-bullets {
          list-style: none;
          padding: 0;
          margin: .25rem 0;
          display: flex;
          flex-direction: column;
          gap: .45rem;
        }
        .as-card-bullets li {
          font-size: .86rem;
          color: var(--text-body);
          display: flex;
          align-items: flex-start;
          gap: .55rem;
          line-height: 1.5;
        }
        .as-card-bullets li::before {
          content: '✓';
          color: var(--accent);
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .as-card-cta {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .85rem 1.4rem;
          background: var(--accent);
          color: white;
          border-radius: 10px;
          font-weight: 700;
          text-decoration: none;
          font-size: .92rem;
          margin-top: .5rem;
          align-self: flex-start;
          transition: all 0.2s ease;
        }
        .as-card:hover .as-card-cta {
          background: #D9541F;
          gap: .8rem;
        }

        /* --- COMPARISON TABLE --- */
        .as-compare {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 2rem 2.25rem;
          margin-bottom: 3rem;
        }
        .as-compare h3 {
          font-size: 1.3rem;
          font-weight: 800;
          margin: 0 0 .4rem;
          letter-spacing: -0.01em;
        }
        .as-compare > p {
          color: var(--text-muted);
          font-size: .92rem;
          margin: 0 0 1.5rem;
        }
        .as-compare-table {
          width: 100%;
          border-collapse: collapse;
        }
        .as-compare-table th {
          text-align: left;
          padding: .85rem 1rem .85rem 0;
          font-size: .78rem;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-bottom: 1px solid rgba(232,99,43,0.18);
          vertical-align: bottom;
        }
        .as-compare-table th:first-child {
          color: var(--text-muted);
        }
        .as-compare-table td {
          padding: .85rem 1rem .85rem 0;
          font-size: .9rem;
          color: var(--text-body);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          vertical-align: top;
        }
        .as-compare-table td:first-child {
          color: var(--text-primary);
          font-weight: 600;
          width: 28%;
        }
        .as-compare-table tr:last-child td { border-bottom: none; }
        @media (max-width: 720px) {
          .as-compare-table { font-size: .85rem; }
          .as-compare-table th, .as-compare-table td { padding: .7rem .55rem .7rem 0; }
          .as-compare-table td:first-child { width: 34%; }
        }

        /* --- NEXT-STEP / RELATED CARDS --- */
        .as-next-label {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 2rem 0 1.25rem;
        }
        .as-next-label h3 {
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0;
          white-space: nowrap;
        }
        .as-next-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(232,99,43,0.18);
        }
        .as-next-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 760px) { .as-next-grid { grid-template-columns: 1fr; } }
        .as-next-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 1.5rem 1.6rem;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          gap: .5rem;
          transition: all 0.25s ease;
        }
        .as-next-card:hover {
          border-color: var(--accent-border);
          transform: translateY(-2px);
        }
        .as-next-card-icon { font-size: 1.5rem; line-height: 1; }
        .as-next-card h4 {
          font-size: 1.02rem;
          font-weight: 700;
          margin: 0;
          color: var(--text-primary);
        }
        .as-next-card p {
          font-size: .85rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
          flex: 1;
        }
        .as-next-card-link {
          font-size: .8rem;
          color: var(--accent);
          font-weight: 700;
          margin-top: .3rem;
          display: inline-flex;
          align-items: center;
          gap: .35rem;
        }

        /* --- CTA BANNER --- */
        .as-cta-banner {
          background: linear-gradient(135deg, rgba(232,99,43,0.12) 0%, rgba(10,22,40,0.95) 100%);
          border: 1px solid var(--accent-border);
          border-radius: 20px;
          padding: 2.75rem;
          text-align: center;
          margin: 1rem 0 3rem;
        }
        .as-cta-banner h3 {
          font-size: 1.6rem;
          font-weight: 800;
          margin: 0 0 .75rem;
        }
        .as-cta-banner h3 em { color: var(--accent); font-style: normal; }
        .as-cta-banner p {
          color: var(--text-body);
          font-size: 1rem;
          max-width: 620px;
          margin: 0 auto 1.75rem;
          line-height: 1.6;
        }
        .as-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .9rem 1.7rem;
          background: var(--accent);
          color: white;
          border-radius: 10px;
          font-weight: 700;
          text-decoration: none;
          font-size: .95rem;
          transition: all 0.2s ease;
        }
        .as-cta-btn:hover {
          background: #D9541F;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(232,99,43,0.3);
        }

        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <Link href="/resources" className="back-link">← Back to Resources</Link>

      <section className="as-hero">
        <div className="as-icon">🎯</div>
        <h1>DPDP Compliance Assessments</h1>
        <p>Two free tools to find out where you stand under India&apos;s Digital Personal Data Protection Act, 2023 — in 30 seconds or 5 minutes. No legal opinion, no sales pitch up front; just a score, the gaps, and the next step.</p>
        <span className="as-disclaimer">⚖️ Heuristic &amp; indicative — not a legal audit</span>
      </section>

      <div className="as-wrap">

        {/* --- TWO MAIN ASSESSMENT CARDS --- */}
        <div className="as-grid">

          {/* DPDP Scanner */}
          <Link href="/scanner" className="as-card reveal">
            <div className="as-card-head">
              <span className="as-card-tag quick">⚡ Quick Check</span>
              <span className="as-card-time">~30 seconds</span>
            </div>
            <span className="as-card-icon">🛰️</span>
            <h2>DPDP Scanner</h2>
            <div className="as-card-sub">URL in, score out</div>
            <p className="as-card-desc">
              Drop in your website URL. The scanner checks six DPDP signals — consent banner, privacy policy, cookie policy, grievance redressal, data principal rights workflow, and Data Protection Officer contact — and returns a 0–100 score with one fix for each failed signal.
            </p>
            <ul className="as-card-bullets">
              <li>No signup, no contact form</li>
              <li>6 weighted signals (100-point scale)</li>
              <li>Per-signal pass / fail with remediation</li>
              <li>Bonus flags: age gate, multi-language notice, trackers</li>
            </ul>
            <span className="as-card-cta">Run the Scanner →</span>
          </Link>

          {/* Free DPDP Assessment */}
          <Link href="/assessment" className="as-card reveal">
            <div className="as-card-head">
              <span className="as-card-tag deep">🧭 Deep Dive</span>
              <span className="as-card-time">~5 minutes</span>
            </div>
            <span className="as-card-icon">🧭</span>
            <h2>Free DPDP Assessment</h2>
            <div className="as-card-sub">10 questions across 8 domains</div>
            <p className="as-card-desc">
              A 10-question structured assessment covering notice &amp; consent, data principal rights, children&apos;s data, security safeguards, breach management, retention, processor governance, and accountability. Get your overall score, a per-domain breakdown, and your top 3 gaps with the specific DPDP sections they map to.
            </p>
            <ul className="as-card-bullets">
              <li>One question per screen, progress saved</li>
              <li>Per-domain bar chart of readiness</li>
              <li>Top 3 gaps mapped to DPDP Act sections</li>
              <li>Light contact gating — work email only</li>
            </ul>
            <span className="as-card-cta">Start the Assessment →</span>
          </Link>

        </div>

        {/* --- COMPARISON TABLE --- */}
        <div className="as-compare reveal">
          <h3>Which one should I run?</h3>
          <p>Different inputs, different outputs. Most teams run both — Scanner first for an external view, Assessment next for the internal picture.</p>
          <table className="as-compare-table">
            <thead>
              <tr>
                <th></th>
                <th>DPDP Scanner</th>
                <th>Free Assessment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Input</td>
                <td>Your website URL</td>
                <td>10 questions about your programme</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>~30 seconds</td>
                <td>~5 minutes</td>
              </tr>
              <tr>
                <td>Signup</td>
                <td>Not required</td>
                <td>Light contact form first</td>
              </tr>
              <tr>
                <td>Result</td>
                <td>6-signal score (0–100)</td>
                <td>Overall score + 8-domain bars + top 3 gaps</td>
              </tr>
              <tr>
                <td>Best for</td>
                <td>Quick external view of your public site</td>
                <td>Internal readiness check across the programme</td>
              </tr>
              <tr>
                <td>What it can&apos;t do</td>
                <td>See what&apos;s behind your login or in your processes</td>
                <td>Replace a legal review or a paid audit</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* --- NEXT STEPS --- */}
        <div className="as-next-label"><h3>If you want to go further</h3></div>
        <div className="as-next-grid">
          <Link href="/pricing" className="as-next-card reveal">
            <div className="as-card-head">
              <span className="as-next-card-icon">💰</span>
            </div>
            <h4>Service Pricing</h4>
            <p>DPDP Sprint, ISO 27001, SOC 2 readiness, and CISO-as-a-Service. Request pricing and our team emails you within one business day.</p>
            <span className="as-next-card-link">View pricing →</span>
          </Link>

          <Link href="/scope-questionnaire" className="as-next-card reveal">
            <div className="as-card-head">
              <span className="as-next-card-icon">📋</span>
            </div>
            <h4>Scope Questionnaire</h4>
            <p>For paid engagements — a structured questionnaire covering processing purposes, data inventory, processors, transfers, and SDF status. We review and book a call.</p>
            <span className="as-next-card-link">Request the questionnaire →</span>
          </Link>
        </div>

        {/* --- CTA BANNER --- */}
        <div className="as-cta-banner reveal">
          <h3>Want a <em>real</em> review, not a heuristic one?</h3>
          <p>Book a 30-minute consultation. We&apos;ll walk through your assessment results, identify what would actually move the needle, and outline the shortest path from your current state to DPDP-ready.</p>
          <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="as-cta-btn">
            📅 Book a consultation call →
          </a>
        </div>

      </div>
    </Layout>
  )
}
