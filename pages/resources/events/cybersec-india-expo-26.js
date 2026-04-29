import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function CyberSecIndiaExpo26() {
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
        <title>CyberSec India Expo 2026 — SecComply at India's Leading Cybersecurity Trade Show | Mumbai</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="SecComply joined CyberSec India Expo 2026 in Mumbai — the 2nd edition of India's flagship cybersecurity trade show. Two days of CISO conversations, GRC panel discussions, and the people building India's national cyber resilience." />
        <meta property="og:title" content="CyberSec India Expo 2026 — SecComply Recap" />
        <meta property="og:description" content="Two days at India's flagship cybersecurity trade show. The conversations, the panels, and what we took away from Mumbai." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/events/cybersec-india-expo-26" />
        <link rel="canonical" href="https://seccomply.net/resources/events/cybersec-india-expo-26" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Event","name":"CyberSec India Expo 2026 (CSIE 2026)","startDate":"2026-04-23T09:00+05:30","endDate":"2026-04-24T18:00+05:30","eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"Bombay Exhibition Centre","address":{"@type":"PostalAddress","addressLocality":"Mumbai","addressCountry":"IN"}},"description":"India's flagship cybersecurity trade show, 2nd edition. Theme: Advancing India's National Cyber Resilience in a Digital-First Economy.","organizer":{"@type":"Organization","name":"Media Fusion","url":"https://cybersecindiaexpo.com/"}}) }} />
      </Head>

      <style jsx global>{`
        :root {
          --bg: #020617;
          --surface: #0a1628;
          --surface-2: #091826;
          --accent: #E8632B;
          --accent-soft: rgba(232, 99, 43, 0.15);
          --accent-border: rgba(232, 99, 43, 0.3);
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
          background: linear-gradient(135deg, rgba(232,99,43,0.08) 0%, rgba(10,22,40,0.95) 100%);
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
          background: radial-gradient(circle, rgba(232,99,43,0.15), transparent 60%);
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
          box-shadow: 0 8px 24px rgba(232,99,43,0.3);
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
          box-shadow: 0 10px 30px rgba(232,99,43,0.1);
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
          background: rgba(232,99,43,0.04);
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
          background: linear-gradient(135deg, rgba(232,99,43,0.12) 0%, rgba(10,22,40,0.95) 100%);
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
                <span className="status-badge status-edition">⭐ 2nd Edition</span>
                <span className="status-badge status-date">📅 23-24 April 2026</span>
              </div>
              <h1>CyberSec India <em>Expo 2026</em></h1>
              <p className="event-tagline">India's flagship cybersecurity trade show returned to Mumbai for its second edition — two days of CISO conversations, GRC panel discussions, hands-on workshops, and the people quietly building India's national cyber resilience. SecComply was on the floor.</p>

              <div className="event-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">📍 Venue</span>
                  <span className="meta-value">Bombay Exhibition Centre,<br/>Goregaon, Mumbai</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🗓️ Dates</span>
                  <span className="meta-value">23–24 April 2026<br/>Two-day Confex + Expo</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🏢 Title Partner</span>
                  <span className="meta-value">63 SATS Cybertech</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🎤 Format</span>
                  <span className="meta-value">In-person · Conference + Trade Show</span>
                </div>
              </div>

              <div className="event-actions">
                <a href="https://cybersecindiaexpo.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">View Official Event Page →</a>
                <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-secondary">📅 Talk to Our Team</a>
              </div>
            </div>

            <div className="event-hero-visual">
              <img src="/event-images/cybersec-india-26/cybersec-hero.jpeg" alt="SecComply team at CyberSec India Expo 2026, Bombay Exhibition Centre" />
            </div>
          </div>
        </div>

        {/* ═══ STATS ═══ */}
        <div className="stats-row reveal">
          <div className="stat-card"><div className="stat-num">3,400+</div><div className="stat-lbl">Inaugural attendees</div></div>
          <div className="stat-card"><div className="stat-num">45+</div><div className="stat-lbl">Expert speakers</div></div>
          <div className="stat-card"><div className="stat-num">65+</div><div className="stat-lbl">Exhibitors</div></div>
          <div className="stat-card"><div className="stat-num">2</div><div className="stat-lbl">Days, Mumbai</div></div>
        </div>

        {/* ═══ THEME CARD ═══ */}
        <div className="theme-card reveal">
          <div className="theme-card-label">2026 Conference Theme</div>
          <h3>"Advancing India's National Cyber Resilience in a Digital-First Economy"</h3>
          <p>The 2026 edition centred on a single, sharp question — how India secures a digital-first economy with AI-enabled defence, Zero Trust architectures, and future-ready quantum security. Across two days, the conference brought together CISOs, regulators, technologists, and policy leaders working on exactly that problem at scale.</p>
        </div>

        {/* ═══ HIGHLIGHTS ═══ */}
        <h2 className="section-heading">What Made This One <em>Different</em></h2>
        <p className="section-intro">
          CSIE has only existed for two editions, but it has already established itself as one of the few Indian cybersecurity events that genuinely brings the operators into the room — not just the vendor floor. Four observations from the two days.
        </p>
        <div className="session-highlights reveal">
          <div className="highlight-card">
            <div className="highlight-num">01</div>
            <div className="highlight-body">
              <h4>The GRC Conversation Got Sharper</h4>
              <p>The panel "Cyber Resilience by Design — How GRC Enables India's Shift to Threat-Led Security" went directly at the operational reality compliance teams now face. Less framework theatre, more honest discussion of what threat-led security looks like once you have to evidence it.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">02</div>
            <div className="highlight-body">
              <h4>CERT-In and Government Voices in the Room</h4>
              <p>With Digital India and MeitY among the supporters, the agenda gave real airtime to government technology leadership — UIDAI, Department of Telecommunications, MyGov. That is a different audience composition than most commercial cybersecurity events.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">03</div>
            <div className="highlight-body">
              <h4>BFSI and Critical Infrastructure Front and Centre</h4>
              <p>NSE Clearing, Kotak Mahindra, Mastercard South Asia, RPG Group, Tata Communications, TVS Holdings — the speaker list reflected the verticals where India's most consequential security work is actually being done. The hallway conversations matched.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">04</div>
            <div className="highlight-body">
              <h4>The Awards Floor Recognised the Right People</h4>
              <p>The CyberSec India Awards 2026 spotlighted teams strengthening India's digital backbone across innovation, OT/ICS, privacy and compliance, and leadership — not just headline brands. A cleaner signal-to-noise ratio than most awards.</p>
            </div>
          </div>
        </div>

        {/* ═══ GALLERY ═══ */}
        <h2 className="section-heading">From the <em>Floor</em></h2>
        <p className="section-intro">
          A few moments from two days at the Bombay Exhibition Centre — panel discussions, conference stages, and the conversations between sessions that often matter the most.
        </p>
        <div className="gallery-wrap reveal">
          <div className="gallery-item">
            <img src="/event-images/cybersec-india-26/booth-engagement.jpeg" alt="SecComply team engaging with attendees at the CyberSec India Expo 2026 trade show" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/cybersec-india-26/panel-grc.jpeg" alt="GRC panel discussion: Cyber Resilience by Design — How GRC Enables India's Shift to Threat-Led Security" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/cybersec-india-26/conference-stage.jpeg" alt="CyberSec India Expo 2026 conference stage with delegates listening on translation headsets" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/cybersec-india-26/team-1.jpeg" alt="SecComply team networking with senior cybersecurity leadership at CyberSec India Expo 2026" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/cybersec-india-26/team-2.jpeg" alt="SecComply team meeting fellow practitioners at CyberSec India Expo 2026" />
          </div>
        </div>

        {/* ═══ TOPICS ═══ */}
        <h2 className="section-heading">The Conversations <em>Worth Tracking</em></h2>
        <p className="section-intro">
          Across the two days, six themes kept resurfacing in panels, hallway conversations, and exhibitor demos. These are the threads we believe will shape Indian enterprise security through the rest of 2026 and into 2027.
        </p>
        <div className="topics-grid reveal">
          <div className="topic-card">
            <div className="topic-icon">🛡️</div>
            <h4>Threat-Led GRC</h4>
            <p>The shift from compliance-driven controls to threat-driven controls — and what that demands of evidence systems, internal audit, and the CISO–DPO relationship.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🤖</div>
            <h4>AI Defence Architectures</h4>
            <p>How Indian enterprises are operationalising AI on the defensive side without giving up explainability — particularly in BFSI and government.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🔐</div>
            <h4>Zero Trust Identity</h4>
            <p>Identity-first security as the new perimeter, with phishing-resistant authentication and device posture as the operating mode for cloud-native enterprises.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">⚖️</div>
            <h4>DPDP Operationalisation</h4>
            <p>One full year into enforcement — practical lessons on consent infrastructure, breach notification readiness, and the cross-mapping with global frameworks.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🏭</div>
            <h4>OT / ICS Security</h4>
            <p>Manufacturing, energy, and infrastructure security teams treating OT as a first-class concern alongside IT — and the converged governance that requires.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🔮</div>
            <h4>Quantum-Ready Cryptography</h4>
            <p>The post-quantum migration timeline, what NIST's standardisation means for Indian organisations, and the inventories CISOs need to start building now.</p>
          </div>
        </div>

        {/* ═══ AUDIENCE ═══ */}
        <div className="who-we-met reveal">
          <h2 className="section-heading" style={{marginTop: 0}}>Who We <em>Met</em></h2>
          <p className="section-intro" style={{marginBottom: 0}}>
            CSIE 2026's audience composition was distinctly weighted toward operators — the people running security and compliance programmes day to day, not just the people buying tools. Across the two days, the rooms broke down roughly like this.
          </p>
          <div className="audience-grid">
            <div className="audience-pill">
              <div className="audience-icon">🛡️</div>
              <div className="audience-pill-title">CISOs &amp; Heads of Security</div>
              <div className="audience-pill-sub">BFSI, telecom, infra</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">📊</div>
              <div className="audience-pill-title">DPOs &amp; Privacy Leads</div>
              <div className="audience-pill-sub">DPDP-focused</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🏛️</div>
              <div className="audience-pill-title">Govt &amp; Regulators</div>
              <div className="audience-pill-sub">UIDAI, DoT, MyGov</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">⚙️</div>
              <div className="audience-pill-title">SOC &amp; SecOps Leads</div>
              <div className="audience-pill-sub">Detection &amp; response</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">⚖️</div>
              <div className="audience-pill-title">GRC &amp; Audit Teams</div>
              <div className="audience-pill-sub">VP &amp; Director level</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">💼</div>
              <div className="audience-pill-title">CIO / CTO</div>
              <div className="audience-pill-sub">Enterprise IT</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🚀</div>
              <div className="audience-pill-title">Startup Founders</div>
              <div className="audience-pill-sub">Cyber-native</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🎓</div>
              <div className="audience-pill-title">Academia &amp; Training</div>
              <div className="audience-pill-sub">EC-Council, ICTA</div>
            </div>
          </div>
        </div>

        {/* ═══ TAKEAWAYS ═══ */}
        <h2 className="section-heading">What We <em>Took Away</em></h2>
        <p className="section-intro" style={{marginBottom: '2rem'}}>
          Two days, several panels, dozens of conversations. The themes below are the ones we expect to come back to repeatedly in client engagements through the rest of the year.
        </p>
        <div className="takeaways-grid reveal">
          <div className="takeaway-card">
            <div className="tk-num">01 / FOUR</div>
            <h4>Compliance Has Stopped Being a Calendar</h4>
            <p>Across multiple panels, the same idea kept surfacing — the once-a-year audit cycle is becoming insufficient. CISOs and DPOs are rebuilding their programmes for continuous evidence, with framework cross-mapping baked in from day one, not retrofitted.</p>
          </div>
          <div className="takeaway-card">
            <div className="tk-num">02 / FOUR</div>
            <h4>The DPDP Reality Check Has Arrived</h4>
            <p>One full year into enforcement, the conversation has shifted from "what does the law say" to "what does it cost to actually operate it." Consent infrastructure, vendor management, and breach response timelines are the three areas getting most of the attention.</p>
          </div>
          <div className="takeaway-card">
            <div className="tk-num">03 / FOUR</div>
            <h4>BFSI Sets the Pace, Others Follow</h4>
            <p>BFSI delegates were clearly the most mature in their thinking — particularly on Zero Trust, threat-led GRC, and AI governance. Other verticals are watching closely. The patterns being established in BFSI compliance will likely shape what the rest of the market does within 18 months.</p>
          </div>
          <div className="takeaway-card">
            <div className="tk-num">04 / FOUR</div>
            <h4>Quantum Is No Longer Theoretical</h4>
            <p>It used to be the speculative panel at the end of the day. In 2026, post-quantum migration is being discussed alongside cryptographic inventory, risk-tiered timelines, and concrete programme milestones — particularly for organisations with long data-retention obligations.</p>
          </div>
        </div>

        {/* ═══ CTA BANNER ═══ */}
        <div className="cta-events-banner reveal">
          <h3>Were You at <em>CSIE 2026?</em></h3>
          <p>If we crossed paths in Mumbai — or if any of the themes above are alive on your roadmap — we would be glad to continue the conversation. Book a slot with our team for a no-pressure scoping call.</p>
          <div className="cta-events-btns">
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Conversation →</a>
            <a href="https://cybersecindiaexpo.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">View Official Event Site ↗</a>
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