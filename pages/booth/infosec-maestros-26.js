import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function BoothInfosecMaestros26() {
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    try {
      const obs = new IntersectionObserver(e => {
        e.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible') })
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
      return () => obs.disconnect()
    } catch (e) { console.error(e) }
  }, [])

  return (
    <>
      <Head>
        <title>SecComply Booth — InfoSec Maestros 2026 | Fill &amp; Win</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Welcome to the SecComply booth at InfoSec Maestros 2026. Fill our compliance gap assessment, win a reward." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <style jsx global>{`
        :root {
          --bg: #020617;
          --surface: #0a1628;
          --surface-2: #091826;
          --accent: #E8632B;
          --accent-2: #FF8A50;
          --accent-soft: rgba(232, 99, 43, 0.15);
          --accent-border: rgba(232, 99, 43, 0.3);
          --text-primary: #f8fafc;
          --text-body: #c8d6e5;
          --text-muted: #94a3b8;
          --cy: #06d6a0;
          --bl: #818cf8;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body {
          background: var(--bg);
          color: var(--text-primary);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }
        body {
          background:
            radial-gradient(circle at 15% 10%, rgba(232,99,43,0.12), transparent 40%),
            radial-gradient(circle at 85% 90%, rgba(129,140,248,0.08), transparent 45%),
            #020617;
          background-attachment: fixed;
        }

        /* ═══ MAIN ═══ */
        .booth-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }
        @media (max-width: 700px) {
          .booth-wrap { padding: 1.5rem 1rem 3rem; }
        }

        /* Welcome */
        .welcome-card {
          background: linear-gradient(135deg, rgba(232,99,43,0.10) 0%, rgba(10,22,40,0.9) 100%);
          border: 1px solid var(--accent-border);
          border-radius: 20px;
          padding: 2rem 1.75rem;
          margin-bottom: 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .welcome-card::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(232,99,43,0.18), transparent 60%);
          pointer-events: none;
        }
        .welcome-emoji { font-size: 2.5rem; line-height: 1; margin-bottom: .85rem; }
        .welcome-card h1 {
          font-size: clamp(1.6rem, 5vw, 2rem);
          font-weight: 800;
          margin-bottom: .75rem;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        .welcome-card h1 em {
          color: var(--accent);
          font-style: normal;
        }
        .welcome-card p {
          color: var(--text-body);
          font-size: .98rem;
          line-height: 1.6;
          max-width: 540px;
          margin: 0 auto;
        }

        /* Event chip */
        .event-chip {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 1.35rem 1.5rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.25s ease;
        }
        .event-chip:hover {
          border-color: var(--accent-border);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(232,99,43,0.08);
        }
        .event-chip-mark {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: linear-gradient(160deg, #0a1f3a, #061425);
          border: 1px solid var(--accent-border);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .event-chip-mark .ec-day {
          font-size: 1.3rem;
          font-weight: 900;
          color: var(--accent);
          line-height: 1;
        }
        .event-chip-mark .ec-month {
          font-size: .6rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          margin-top: 2px;
        }
        .event-chip-body {
          flex: 1;
          min-width: 0;
        }
        .event-chip-label {
          font-size: .68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: .25rem;
        }
        .event-chip-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: .2rem;
        }
        .event-chip-meta {
          font-size: .8rem;
          color: var(--text-muted);
        }
        .event-chip-arrow {
          font-size: 1.2rem;
          color: var(--accent);
          flex-shrink: 0;
        }

        /* Reward callout */
        .reward-card {
          background: linear-gradient(135deg, rgba(255,183,3,0.08), rgba(232,99,43,0.06));
          border: 1px solid rgba(255,183,3,0.3);
          border-radius: 18px;
          padding: 1.75rem 1.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .reward-card::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,183,3,0.12), transparent 60%);
          pointer-events: none;
        }
        .reward-tag {
          display: inline-flex;
          align-items: center;
          gap: .35rem;
          padding: .35rem .9rem;
          border-radius: 999px;
          background: rgba(255,183,3,0.15);
          color: #ffb703;
          border: 1px solid rgba(255,183,3,0.4);
          font-size: .7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: .85rem;
          position: relative;
        }
        .reward-card h2 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: .5rem;
          letter-spacing: -0.01em;
          position: relative;
        }
        .reward-card h2 em {
          background: linear-gradient(135deg, #ffb703, var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: normal;
        }
        .reward-card > p {
          color: var(--text-body);
          font-size: .92rem;
          line-height: 1.55;
          max-width: 480px;
          margin: 0 auto;
          position: relative;
        }

        /* CTA button — primary action */
        .cta-block {
          margin: 1rem 0 2rem;
          text-align: center;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .65rem;
          padding: 1.1rem 2rem;
          background: linear-gradient(135deg, var(--accent), var(--accent-2));
          color: white;
          border-radius: 14px;
          font-weight: 700;
          text-decoration: none;
          font-size: 1.05rem;
          transition: all 0.25s ease;
          box-shadow: 0 8px 28px rgba(232,99,43,0.4);
          width: 100%;
          max-width: 380px;
          letter-spacing: -0.01em;
          position: relative;
          overflow: hidden;
        }
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.6s ease;
        }
        .cta-button:hover::before { left: 100%; }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(232,99,43,0.5);
        }
        .cta-button:active { transform: translateY(0); }
        .cta-sub {
          font-size: .82rem;
          color: var(--text-muted);
          margin-top: .85rem;
          letter-spacing: 0.02em;
        }

        /* ═══ STEPS ═══ */
        .steps-heading {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
          text-align: center;
        }
        .steps-heading em {
          color: var(--accent);
          font-style: normal;
        }
        .steps-list {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 1.25rem 1.25rem .5rem;
          margin-bottom: 1.5rem;
          position: relative;
        }
        .step {
          display: flex;
          gap: 1rem;
          padding: 1rem .25rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          align-items: flex-start;
          position: relative;
        }
        .step:last-child { border-bottom: none; }
        .step-num {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--accent-soft);
          color: var(--accent);
          font-weight: 800;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid var(--accent-border);
        }
        .step.is-done .step-num {
          background: var(--cy);
          color: white;
          border-color: var(--cy);
        }
        .step.is-done .step-num::before { content: '✓'; }
        .step.is-done .step-num span { display: none; }
        .step-body {
          flex: 1;
          min-width: 0;
          padding-top: 4px;
        }
        .step-body h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
          margin-bottom: .2rem;
        }
        .step-body p {
          font-size: .85rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
        }
        .step-frameworks {
          display: flex;
          flex-wrap: wrap;
          gap: .35rem;
          margin-top: .5rem;
        }
        .step-fw-pill {
          font-size: .68rem;
          font-weight: 700;
          padding: .22rem .55rem;
          border-radius: 6px;
          letter-spacing: 0.02em;
        }
        .fw-1 { background: rgba(232,99,43,0.12); color: var(--accent); }
        .fw-2 { background: rgba(6,214,160,0.12); color: var(--cy); }
        .fw-3 { background: rgba(129,140,248,0.12); color: var(--bl); }
        .fw-4 { background: rgba(59,130,246,0.12); color: #3b82f6; }
        .fw-5 { background: rgba(239,68,68,0.12); color: #ef4444; }
        .fw-6 { background: rgba(20,184,166,0.12); color: #14b8a6; }

        /* Confirm step */
        .confirm-row {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 1.1rem 1.2rem;
          display: flex;
          align-items: center;
          gap: .9rem;
          margin: .75rem 0 .5rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .confirm-row.is-checked {
          background: rgba(6,214,160,0.06);
          border-color: rgba(6,214,160,0.4);
        }
        .confirm-check {
          width: 24px;
          height: 24px;
          border-radius: 7px;
          border: 2px solid rgba(255,255,255,0.25);
          background: transparent;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: transparent;
          font-weight: 800;
          font-size: .9rem;
        }
        .confirm-row.is-checked .confirm-check {
          background: var(--cy);
          border-color: var(--cy);
          color: white;
        }
        .confirm-text {
          font-size: .92rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        .confirm-row.is-checked .confirm-text {
          color: var(--cy);
        }

        /* Reward unlock card */
        .reward-unlock {
          background: linear-gradient(135deg, rgba(6,214,160,0.08), rgba(232,99,43,0.05));
          border: 1px solid rgba(6,214,160,0.35);
          border-radius: 18px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .reward-unlock.is-visible {
          opacity: 1;
          max-height: 600px;
          padding: 1.75rem 1.5rem;
        }
        .reward-unlock h3 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--cy);
          margin-bottom: .55rem;
        }
        .reward-unlock p {
          color: var(--text-body);
          font-size: .9rem;
          line-height: 1.55;
          margin-bottom: 1rem;
        }
        .reward-instructions {
          background: rgba(0,0,0,0.25);
          border-radius: 10px;
          padding: .85rem 1rem;
          font-size: .85rem;
          color: var(--text-body);
          line-height: 1.5;
        }
        .reward-instructions strong { color: var(--text-primary); }

        /* Footer note */
        .footer-note {
          text-align: center;
          padding: 1.5rem 1rem;
          color: var(--text-muted);
          font-size: .8rem;
          line-height: 1.5;
        }
        .footer-note a {
          color: var(--accent);
          text-decoration: none;
          font-weight: 600;
        }
        .footer-note a:hover { text-decoration: underline; }

        .reveal { opacity: 0; transform: translateY(15px); transition: all 0.55s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <main className="booth-wrap">

        {/* WELCOME */}
        <div className="welcome-card reveal">
          <h1>Welcome to the <em>SecComply Booth</em></h1>
          <p>Glad you stopped by. We are at <strong>InfoSec Maestros 2026</strong> as Strategic Compliance Automation Partner — and we built a quick way for you to walk away with something useful (and a reward).</p>
        </div>

        {/* EVENT LINK CHIP */}
        <a href="/resources/events/infosec-maestros-26" className="event-chip reveal" target="_blank" rel="noopener noreferrer">
          <div className="event-chip-mark">
            <div className="ec-day">08</div>
            <div className="ec-month">MAY</div>
          </div>
          <div className="event-chip-body">
            <div className="event-chip-label">About This Event</div>
            <div className="event-chip-title">InfoSec Maestros 2026 · 15th CISO Confex</div>
            <div className="event-chip-meta">Radisson Blu Plaza, Delhi · Read the full coverage</div>
          </div>
        </a>

        {/* REWARD CALLOUT */}
        <div className="reward-card reveal">
          <span className="reward-tag">Booth Exclusive</span>
          <h2>Fill &amp; Win <em>Rewards</em></h2>
          <p>Take 2 minutes to assess your compliance readiness against the framework that matters most to you. Submit the form, show us at the booth, and collect your reward.</p>
        </div>

        {/* STEPS */}
        <h3 className="steps-heading">How it <em>works</em></h3>
        <div className="steps-list reveal">

          <div className="step">
            <div className="step-num"><span>1</span></div>
            <div className="step-body">
              <h4>Tap the orange button at the bottom</h4>
              <p>It opens our compliance gap assessment hub in a new tab. Come back here when you are done.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num"><span>2</span></div>
            <div className="step-body">
              <h4>Pick the framework you care about</h4>
              <p>Choose any one — or multiple if you have time. Each is roughly ~2 minutes.</p>
              <div className="step-frameworks">
                <span className="step-fw-pill fw-1">DPDPA</span>
                <span className="step-fw-pill fw-2">ISO 27001</span>
                <span className="step-fw-pill fw-3">ISO 27701</span>
                <span className="step-fw-pill fw-4">SOC 2</span>
                <span className="step-fw-pill fw-5">VAPT</span>
                <span className="step-fw-pill fw-6">HIPAA</span>
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-num"><span>3</span></div>
            <div className="step-body">
              <h4>Fill in the 10 questions</h4>
              <p>Quick yes/no responses. Submit the form when you reach the end.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-num"><span>4</span></div>
            <div className="step-body">
              <h4>Confirm you have submitted</h4>
              <p>Tick the box below once your form is in.</p>

              <div
                className={`confirm-row ${confirmed ? 'is-checked' : ''}`}
                onClick={() => setConfirmed(!confirmed)}
                role="checkbox"
                aria-checked={confirmed}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setConfirmed(!confirmed) } }}
              >
                <div className="confirm-check">{confirmed ? '✓' : ''}</div>
                <div className="confirm-text">Yes, I have submitted my assessment</div>
              </div>
            </div>
          </div>

          <div className="step">
            <div className="step-num"><span>5</span></div>
            <div className="step-body">
              <h4>Show us at the booth &amp; collect your reward</h4>
              <p>Walk over to the SecComply stand, show the SecComply team your submission confirmation, pick up your reward — and click a quick photo with us!</p>
            </div>
          </div>

        </div>

        {/* REWARD UNLOCK PANEL */}
        <div className={`reward-unlock ${confirmed ? 'is-visible' : ''}`}>
          <h3>You're set — head to the booth</h3>
          <p>Show this confirmation to any SecComply team member at the booth.</p>
          <div className="reward-instructions">
            <strong>What's next:</strong> Walk over to the SecComply stand on the showcase floor, show your submitted form on your device, collect your reward, and grab a quick photo with the team. See you there!
          </div>
        </div>

        {/* PRIMARY CTA */}
        <div className="cta-block reveal">
          <a
            href="https://seccomply.net/resources/tools/compliance-gap-assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Start the Assessment
          </a>
          <div className="cta-sub">Opens the framework picker · Takes ~2 minutes</div>
        </div>

        {/* FOOTER NOTE */}
        <div className="footer-note">
          Need help? Find any team member wearing a <strong style={{color:'var(--accent)'}}>SecComply</strong> badge.<br/>
          Or reach us at <a href="mailto:info@seccomply.net">info@seccomply.net</a>
        </div>

      </main>
    </>
  )
}