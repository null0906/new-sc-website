import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function FinSecConclave26() {
  useEffect(() => {
    try {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.textContent = `(function(){
        const revealObs = new IntersectionObserver(e=>{e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
        document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));
      })();`
      document.body.appendChild(s)
      return () => { if (s.parentNode) s.parentNode.removeChild(s) }
    } catch (e) { console.error('Script error:', e) }
  }, [])

  return (
    <Layout>
      <Head>
        <title>DSCI FinSec Conclave 2026 — SecComply at India's Premier Financial Security Conclave | Mumbai</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="SecComply attended the DSCI Financial Security Conclave (FinSec) 2026 — the 8th edition of India's premier BFSI cybersecurity gathering at The Westin, Powai Lake, Mumbai. Two days on privacy operationalisation, third-party risk, fraud defence, and AI security in finance." />
        <meta property="og:title" content="DSCI FinSec Conclave 2026 — SecComply Recap" />
        <meta property="og:description" content="Two days at India's premier financial-sector security conclave by DSCI. The BFSI security and privacy conversations that matter." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/events/finsec-conclave-26" />
        <link rel="canonical" href="https://seccomply.net/resources/events/finsec-conclave-26" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Event","name":"DSCI Financial Security Conclave 2026 (FinSec 2026)","startDate":"2026-05-28T09:00+05:30","endDate":"2026-05-29T18:00+05:30","eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"The Westin Mumbai Powai Lake","address":{"@type":"PostalAddress","addressLocality":"Mumbai","addressCountry":"IN"}},"description":"India's premier financial-sector cybersecurity conclave, 8th edition, by the Data Security Council of India.","organizer":{"@type":"Organization","name":"Data Security Council of India (DSCI)","url":"https://www.dsci.in/"}}) }} />
      </Head>

      <style jsx global>{`
        :root {
          --bg: #020617;
          --surface: #0a1628;
          --surface-2: #091826;
          --accent: #FF6000;
          --accent-soft: rgba(255, 96, 0, 0.15);
          --accent-border: rgba(255, 96, 0, 0.3);
          --text-primary: #f8fafc;
          --text-body: #c8d6e5;
          --text-muted: #94a3b8;
          --cy: #06d6a0;
          --bl: #818cf8;
          --yl: #ffb703;
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

        .event-wrap { max-width: 1200px; margin: 0 auto; padding: 2rem; }

        /* ═══ HERO CARD ═══ */
        .event-hero-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 96, 0,0.08) 0%, rgba(10,22,40,0.95) 100%);
          border: 1px solid var(--accent-border);
          border-radius: 24px;
          overflow: hidden;
          margin-bottom: 3rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .event-hero-card::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 96, 0,0.15), transparent 60%);
          pointer-events: none;
        }
        .event-hero-inner {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 0;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 900px) { .event-hero-inner { grid-template-columns: 1fr; } }
        .event-hero-content { padding: 3rem 2.75rem; }
        .event-status-row {
          display: flex;
          align-items: center;
          gap: .75rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          padding: .35rem .9rem;
          border-radius: 999px;
          font-size: .75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .status-attended {
          background: rgba(129,140,248,0.12);
          color: var(--bl);
          border: 1px solid rgba(129,140,248,0.35);
        }
        .status-edition {
          background: var(--accent-soft);
          color: var(--accent);
          border: 1px solid var(--accent-border);
        }
        .status-date {
          background: rgba(255,255,255,0.04);
          color: var(--text-body);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .event-hero-content h1 {
          font-size: 2.4rem;
          font-weight: 800;
          margin: 0 0 .75rem;
          line-height: 1.15;
        }
        .event-hero-content h1 em { color: var(--accent); font-style: normal; }
        .event-tagline {
          font-size: 1.05rem;
          color: var(--text-body);
          line-height: 1.6;
          margin: 0 0 1.75rem;
        }
        .event-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.75rem;
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .meta-item { display: flex; flex-direction: column; gap: .25rem; }
        .meta-label {
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          font-weight: 600;
        }
        .meta-value {
          font-size: .95rem;
          color: var(--text-primary);
          font-weight: 500;
        }
        .event-actions { display: flex; gap: .75rem; flex-wrap: wrap; }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .85rem 1.6rem;
          background: var(--accent);
          color: white;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          font-size: .95rem;
          transition: all 0.2s ease;
        }
        .btn-primary:hover {
          background: #D9541F;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(255, 96, 0,0.3);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .85rem 1.6rem;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          font-size: .95rem;
          transition: all 0.2s ease;
          cursor: pointer;
          font-family: inherit;
        }
        .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }

        /* Hero photo side */
        .event-hero-visual {
          position: relative;
          background: #061425;
          overflow: hidden;
          min-height: 440px;
        }
        .event-hero-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
        }
        .event-hero-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(10,22,40,0.4) 0%, transparent 30%);
          pointer-events: none;
        }

        .section-heading {
          font-size: 1.85rem;
          font-weight: 800;
          margin: 3rem 0 1.5rem;
          color: var(--text-primary);
        }
        .section-heading em { color: var(--accent); font-style: normal; }
        .section-intro {
          font-size: 1rem;
          color: var(--text-body);
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 850px;
        }

        /* Stats */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 700px) { .stats-row { grid-template-columns: repeat(2, 1fr); } }
        .stat-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 1.5rem 1.25rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: var(--accent-border);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 96, 0,0.1);
        }
        .stat-num {
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--accent);
          margin-bottom: .25rem;
          line-height: 1;
        }
        .stat-lbl {
          font-size: .8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        /* Theme card */
        .theme-card {
          background: linear-gradient(135deg, rgba(129,140,248,0.06), rgba(10,22,40,0.95));
          border: 1px solid rgba(129,140,248,0.25);
          border-radius: 18px;
          padding: 2rem 2.25rem;
          margin-bottom: 3rem;
        }
        .theme-card-label {
          font-size: .7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bl);
          margin-bottom: .75rem;
        }
        .theme-card h3 {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0 0 .85rem;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }
        .theme-card p {
          color: var(--text-body);
          font-size: .98rem;
          line-height: 1.7;
          margin: 0;
        }

        /* Highlight cards */
        .session-highlights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 800px) { .session-highlights { grid-template-columns: 1fr; } }
        .highlight-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 1.75rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          transition: all 0.3s ease;
        }
        .highlight-card:hover {
          border-color: var(--accent-border);
          transform: translateY(-3px);
        }
        .highlight-num {
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
          flex-shrink: 0;
          min-width: 50px;
        }
        .highlight-body h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 .5rem;
          color: var(--text-primary);
        }
        .highlight-body p {
          font-size: .9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        /* Gallery grid */
        .gallery-wrap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 800px) { .gallery-wrap { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) { .gallery-wrap { grid-template-columns: 1fr; } }
        .gallery-item {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 4/5;
          background: #000;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255,255,255,0.06);
        }
        .gallery-item:hover { transform: translateY(-4px); }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Topics grid */
        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .topic-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        .topic-card:hover {
          border-color: var(--accent-border);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .topic-icon { font-size: 1.5rem; margin-bottom: .75rem; }
        .topic-card h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0 0 .5rem;
          color: var(--text-primary);
        }
        .topic-card p {
          font-size: .88rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
        }

        /* Audience pills */
        .who-we-met {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 2.5rem;
          margin-bottom: 3rem;
        }
        .audience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin-top: 1.75rem;
        }
        .audience-pill {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 1rem 1.25rem;
          text-align: center;
          transition: all 0.25s ease;
        }
        .audience-pill:hover {
          border-color: var(--accent-border);
          background: rgba(255, 96, 0,0.04);
        }
        .audience-icon { font-size: 1.6rem; margin-bottom: .35rem; }
        .audience-pill-title {
          font-size: .9rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: .1rem;
        }
        .audience-pill-sub { font-size: .78rem; color: var(--text-muted); }

        /* Takeaways */
        .takeaways-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 800px) { .takeaways-grid { grid-template-columns: 1fr; } }
        .takeaway-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 1.85rem;
          transition: all 0.3s ease;
        }
        .takeaway-card:hover {
          border-color: var(--accent-border);
          transform: translateY(-3px);
        }
        .takeaway-card .tk-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: .82rem;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: .85rem;
          letter-spacing: 0.1em;
        }
        .takeaway-card h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 .65rem;
          color: var(--text-primary);
          line-height: 1.35;
        }
        .takeaway-card p {
          font-size: .9rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
        }

        .cta-events-banner {
          background: linear-gradient(135deg, rgba(255, 96, 0,0.12) 0%, rgba(10,22,40,0.95) 100%);
          border: 1px solid var(--accent-border);
          border-radius: 20px;
          padding: 2.75rem;
          text-align: center;
          margin: 3rem 0;
        }
        .cta-events-banner h3 { font-size: 1.75rem; font-weight: 800; margin: 0 0 .75rem; }
        .cta-events-banner h3 em { color: var(--accent); font-style: normal; }
        .cta-events-banner p {
          color: var(--text-body);
          font-size: 1.02rem;
          max-width: 620px;
          margin: 0 auto 1.75rem;
          line-height: 1.6;
        }
        .cta-events-btns { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }

        .social-connect {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 2.5rem 2.25rem;
          margin: 2rem 0 3rem;
          text-align: center;
        }
        .social-connect h3 { font-size: 1.4rem; font-weight: 800; margin: 0 0 .5rem; }
        .social-connect p { color: var(--text-muted); margin: 0 0 1.5rem; font-size: .95rem; }
        .social-links { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .7rem 1.2rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 600;
          font-size: .9rem;
          transition: all 0.2s ease;
        }
        .social-link:hover {
          background: var(--accent-soft);
          border-color: var(--accent-border);
          color: var(--accent);
          transform: translateY(-1px);
        }

        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <Link href="/resources/events" className="back-link">← Back to Webinars &amp; Events</Link>

      <div className="event-wrap">

        {/* ═══ HERO CARD ═══ */}
        <div className="event-hero-card reveal">
          <div className="event-hero-inner">
            <div className="event-hero-content">
              <div className="event-status-row">
                <span className="status-badge status-attended">📍 Past Event · Attended</span>
                <span className="status-badge status-edition">⭐ 8th Edition</span>
                <span className="status-badge status-date">📅 28-29 May 2026</span>
              </div>
              <h1>DSCI <em>FinSec Conclave 2026</em></h1>
              <p className="event-tagline">India's premier financial-sector security gathering returned for its eighth edition at The Westin, Powai Lake — two days hosted by the Data Security Council of India on how cybersecurity has become a strategic enabler of trust and resilience across an increasingly interconnected, data-rich BFSI landscape. SecComply was in the room.</p>

              <div className="event-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">📍 Venue</span>
                  <span className="meta-value">The Westin Mumbai,<br/>Powai Lake</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🗓️ Dates</span>
                  <span className="meta-value">28–29 May 2026<br/>Two-day conclave</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🏢 Organiser</span>
                  <span className="meta-value">Data Security Council of India (DSCI)</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🎤 Focus</span>
                  <span className="meta-value">BFSI security &amp; privacy · In-person</span>
                </div>
              </div>

              <div className="event-actions">
                <a href="https://www.dsci.in/event/finsec-conclave-2026/" target="_blank" rel="noopener noreferrer" className="btn-primary">View Official Event Page →</a>
                <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-secondary">📅 Talk to Our Team</a>
              </div>
            </div>

            <div className="event-hero-visual">
              <img src="/event-images/finsec-conclave-26/01.jpg" alt="SecComply CEO Shivani Tikadia at the DSCI FinSec Conclave 2026 partner wall, The Westin Powai Lake, Mumbai" />
            </div>
          </div>
        </div>

        {/* ═══ STATS ═══ */}
        <div className="stats-row reveal">
          <div className="stat-card"><div className="stat-num">8th</div><div className="stat-lbl">Edition</div></div>
          <div className="stat-card"><div className="stat-num">2</div><div className="stat-lbl">Days, Mumbai</div></div>
          <div className="stat-card"><div className="stat-num">BFSI</div><div className="stat-lbl">Sector Focus</div></div>
          <div className="stat-card"><div className="stat-num">10+</div><div className="stat-lbl">Theme Tracks</div></div>
        </div>

        {/* ═══ THEME CARD ═══ */}
        <div className="theme-card reveal">
          <div className="theme-card-label">2026 Conclave Theme</div>
          <h3>Cybersecurity as a Strategic Enabler of Trust &amp; Resilience</h3>
          <p>As digital financial ecosystems expand, FinSec 2026 made the case that the future of financial services will be defined not just by technological sophistication, but by the ability to securely scale and protect interconnected, data-rich platforms. Across two days, banks, neo-banks, insurers, securities firms, and fintechs worked through what that actually demands — from privacy operationalisation to quantum readiness.</p>
        </div>

        {/* ═══ HIGHLIGHTS ═══ */}
        <h2 className="section-heading">What Made This One <em>Matter</em></h2>
        <p className="section-intro">
          FinSec is one of the few Indian events where the BFSI security conversation is allowed to get specific — less keynote theatre, more operational reality. Four observations from the two days at Powai.
        </p>
        <div className="session-highlights reveal">
          <div className="highlight-card">
            <div className="highlight-num">01</div>
            <div className="highlight-body">
              <h4>Privacy Operationalisation Got Real</h4>
              <p>A year into DPDP, the BFSI conversation has moved from "what does the law require" to "how do we run it across hundreds of systems and vendors." Consent infrastructure, data inventories, and breach-notification readiness dominated the privacy track.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">02</div>
            <div className="highlight-body">
              <h4>Third-Party &amp; Supply-Chain Risk Front and Centre</h4>
              <p>With financial platforms now stitched together from dozens of fintech and SaaS partners, supply-chain and third-party risk was treated as a board-level concern — not a procurement checkbox. TPRM maturity was a recurring theme.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">03</div>
            <div className="highlight-body">
              <h4>Fraud Defence and Ransomware Readiness</h4>
              <p>Intelligence-driven SecOps, financial fraud defence, and ransomware readiness-and-recovery were discussed with the candour of teams who have actually had to respond — recovery time objectives, tabletop discipline, and the cost of getting it wrong.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">04</div>
            <div className="highlight-body">
              <h4>Quantum and AI Entered the Mainstream Agenda</h4>
              <p>Quantum in finance and AI/agentic-AI security were no longer the speculative closing panels. They sat alongside RegTech and compliance automation as things BFSI security leaders are actively planning for, not just watching.</p>
            </div>
          </div>
        </div>

        {/* ═══ GALLERY ═══ */}
        <h2 className="section-heading">From the <em>Conclave</em></h2>
        <p className="section-intro">
          A few moments from two days at The Westin, Powai Lake — the partner showcase, the venue, and the conversations between sessions.
        </p>
        <div className="gallery-wrap reveal">
          <div className="gallery-item">
            <img src="/event-images/finsec-conclave-26/01.jpg" alt="SecComply CEO Shivani Tikadia at the DSCI FinSec Conclave 2026 partner wall, The Westin Powai Lake" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/finsec-conclave-26/02.jpg" alt="The DSCI FinSec Conclave 2026 welcome standee at The Westin Powai Lake, Mumbai" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/finsec-conclave-26/05.jpg" alt="SecComply at the FinSec Conclave 2026 photo backdrop" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/finsec-conclave-26/06.jpg" alt="The SecComply team at the DSCI FinSec Conclave 2026" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/finsec-conclave-26/03.jpg" alt="The Westin Powai Lake venue overlooking the lake during FinSec Conclave 2026" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/finsec-conclave-26/04.jpg" alt="A SecComply team member at The Westin Powai Lake, FinSec Conclave 2026" />
          </div>
        </div>

        {/* ═══ TOPICS ═══ */}
        <h2 className="section-heading">The Conversations <em>Worth Tracking</em></h2>
        <p className="section-intro">
          Six themes ran through the FinSec 2026 agenda and the hallway conversations. These are the threads we believe will define BFSI security through the rest of the year.
        </p>
        <div className="topics-grid reveal">
          <div className="topic-card">
            <div className="topic-icon">⚖️</div>
            <h4>Privacy Operationalisation</h4>
            <p>Turning DPDP from policy into running infrastructure across BFSI — consent, purpose limitation, data inventories, and the audit trail to prove it.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🔗</div>
            <h4>Supply Chain &amp; Third-Party Risk</h4>
            <p>Managing the security of dozens of fintech and SaaS partners stitched into a single financial platform — and the TPRM maturity it demands.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🛡️</div>
            <h4>Financial Fraud Defence</h4>
            <p>Intelligence-driven SecOps and fraud-defence strategies for an environment where attackers move at the speed of real-time payments.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🔮</div>
            <h4>Quantum in Finance</h4>
            <p>The post-quantum migration timeline and the cryptographic inventory financial institutions with long data-retention obligations need to start now.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🤖</div>
            <h4>AI &amp; Agentic AI Security</h4>
            <p>Securing AI as it moves from analytics to autonomous action in finance — model risk, explainability, and accountability at scale.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">⚙️</div>
            <h4>RegTech &amp; Compliance Automation</h4>
            <p>Continuous, automated compliance and evidence collection replacing the once-a-year audit scramble across regulated financial entities.</p>
          </div>
        </div>

        {/* ═══ AUDIENCE ═══ */}
        <div className="who-we-met reveal">
          <h2 className="section-heading" style={{marginTop: 0}}>Who We <em>Met</em></h2>
          <p className="section-intro" style={{marginBottom: 0}}>
            FinSec's audience is heavily weighted toward the people running security and privacy programmes inside regulated financial institutions. Across the two days, the rooms broke down roughly like this.
          </p>
          <div className="audience-grid">
            <div className="audience-pill">
              <div className="audience-icon">🛡️</div>
              <div className="audience-pill-title">BFSI CISOs</div>
              <div className="audience-pill-sub">Banks, insurers, NBFCs</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">📊</div>
              <div className="audience-pill-title">DPOs &amp; Privacy Leads</div>
              <div className="audience-pill-sub">DPDP-focused</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🚨</div>
              <div className="audience-pill-title">Fraud &amp; Risk Heads</div>
              <div className="audience-pill-sub">Defence &amp; resilience</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">⚙️</div>
              <div className="audience-pill-title">SOC &amp; SecOps Leads</div>
              <div className="audience-pill-sub">Intelligence-driven</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">💳</div>
              <div className="audience-pill-title">Fintech Founders</div>
              <div className="audience-pill-sub">Neo-banks &amp; payments</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🏛️</div>
              <div className="audience-pill-title">Regulators &amp; Policy</div>
              <div className="audience-pill-sub">Govt &amp; academia</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">⚖️</div>
              <div className="audience-pill-title">GRC &amp; Audit Teams</div>
              <div className="audience-pill-sub">VP &amp; Director level</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">💼</div>
              <div className="audience-pill-title">CIOs / CDOs / CPOs</div>
              <div className="audience-pill-sub">Financial services</div>
            </div>
          </div>
        </div>

        {/* ═══ TAKEAWAYS ═══ */}
        <h2 className="section-heading">What We <em>Took Away</em></h2>
        <p className="section-intro" style={{marginBottom: '2rem'}}>
          Two days, several panels, dozens of conversations. The themes below are the ones we expect to come back to repeatedly in BFSI engagements through the rest of the year.
        </p>
        <div className="takeaways-grid reveal">
          <div className="takeaway-card">
            <div className="tk-num">01 / FOUR</div>
            <h4>Security Has Become a Trust Strategy</h4>
            <p>The framing across the conclave was unambiguous — in financial services, security is no longer a cost of doing business but the foundation of customer trust and the licence to scale. Boards are starting to treat it that way.</p>
          </div>
          <div className="takeaway-card">
            <div className="tk-num">02 / FOUR</div>
            <h4>Privacy Is an Operating Discipline Now</h4>
            <p>DPDP has moved privacy out of the legal team and into operations. The institutions ahead of the curve are running consent, data mapping, and breach readiness as continuous processes, cross-mapped to global frameworks.</p>
          </div>
          <div className="takeaway-card">
            <div className="tk-num">03 / FOUR</div>
            <h4>Your Vendors Are Your Risk Surface</h4>
            <p>As financial platforms become ecosystems of partners, third-party risk is the fastest-growing exposure. Mature TPRM — continuous, evidence-based, not annual — is becoming table stakes.</p>
          </div>
          <div className="takeaway-card">
            <div className="tk-num">04 / FOUR</div>
            <h4>Quantum and AI Are Now Planning Items</h4>
            <p>Post-quantum cryptography and AI security have crossed from "interesting" to "on the roadmap." For institutions with long retention obligations, the inventory and migration work starts now, not later.</p>
          </div>
        </div>

        {/* ═══ CTA BANNER ═══ */}
        <div className="cta-events-banner reveal">
          <h3>Were You at <em>FinSec 2026?</em></h3>
          <p>If we crossed paths at The Westin — or if any of these BFSI security and privacy themes are live on your roadmap — we would be glad to continue the conversation. Book a no-pressure scoping call with our team.</p>
          <div className="cta-events-btns">
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Conversation →</a>
            <a href="https://www.dsci.in/event/finsec-conclave-2026/" target="_blank" rel="noopener noreferrer" className="btn-secondary">View Official Event Site ↗</a>
          </div>
        </div>

        {/* ═══ SOCIAL ═══ */}
        <div className="social-connect reveal">
          <h3>Follow the Recap</h3>
          <p>We are sharing photos, quick takes, and longer-form analysis from the event across our social channels.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/seccomply/" target="_blank" rel="noopener noreferrer" className="social-link"><span>💼</span> LinkedIn</a>
            <a href="https://www.youtube.com/@thenadkarnees" target="_blank" rel="noopener noreferrer" className="social-link"><span>▶️</span> The Nadkarnees</a>
            <a href="https://twitter.com/seccomply" target="_blank" rel="noopener noreferrer" className="social-link"><span>𝕏</span> Twitter / X</a>
            <a href="https://www.instagram.com/seccomply.net/" target="_blank" rel="noopener noreferrer" className="social-link"><span>📷</span> Instagram</a>
          </div>
        </div>

      </div>
    </Layout>
  )
}
