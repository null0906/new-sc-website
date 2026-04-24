import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function EventsIndex() {
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
        <title>Webinars & Events | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="SecComply at industry-leading cybersecurity events. Explore past events, upcoming appearances, and on-demand webinars covering compliance, ISO 27001, SOC 2, DPDP, and GDPR." />
        <meta property="og:title" content="Webinars & Events — SecComply" />
        <meta property="og:description" content="Catch SecComply at the industry's most influential cybersecurity gatherings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seccomply.net/resources/events" />
        <link rel="canonical" href="https://seccomply.net/resources/events" />
      </Head>

      <style jsx global>{`
        :root {
          --bg: #020617;
          --surface: #0a1628;
          --accent: #E8632B;
          --accent-soft: rgba(232, 99, 43, 0.15);
          --accent-border: rgba(232, 99, 43, 0.3);
          --text-primary: #f8fafc;
          --text-body: #c8d6e5;
          --text-muted: #94a3b8;
          --cy: #06d6a0;
          --bl: #818cf8;
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

        .hero-events {
          text-align: center;
          padding: 3rem 2rem 2.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .hero-events .event-icon {
          font-size: 3.5rem;
          margin-bottom: 1.25rem;
          display: inline-block;
        }
        .hero-events h1 {
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 800;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff 0%, #c8d6e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-events p {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .event-wrap { max-width: 1200px; margin: 0 auto; padding: 2rem; }

        /* ═══ EVENT CARDS GRID ═══ */
        .event-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 900px) {
          .event-cards-grid { grid-template-columns: 1fr; }
        }
        .event-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
          text-decoration: none;
          color: inherit;
        }
        .event-card.clickable { cursor: pointer; }
        .event-card.clickable:hover {
          transform: translateY(-8px);
          border-color: var(--accent-border);
          box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px var(--accent-border), 0 0 80px rgba(232,99,43,0.15);
        }
        .event-card.featured {
          border-color: var(--accent-border);
          background: linear-gradient(160deg, rgba(232,99,43,0.10) 0%, var(--surface) 60%);
        }
        .event-card.featured::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(232,99,43,0.12), transparent 60%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .event-card.featured:hover::before { opacity: 1; }

        .event-card-media {
          aspect-ratio: 16/10;
          position: relative;
          overflow: hidden;
          background: #000;
        }
        .event-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .event-card.clickable:hover .event-card-media img { transform: scale(1.08); }
        .event-card-media::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(10,22,40,0.6) 100%);
          pointer-events: none;
        }
        .event-card-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0a1628 0%, #060f1d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .event-card-placeholder::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(232,99,43,0.08), transparent 50%),
                      radial-gradient(circle at 70% 60%, rgba(129,140,248,0.06), transparent 50%);
        }
        .event-card-placeholder-icon {
          font-size: 3.5rem;
          opacity: 0.35;
          position: relative;
          z-index: 2;
        }
        .event-card-corner-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: .4rem .85rem;
          border-radius: 8px;
          font-size: .72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          z-index: 3;
          backdrop-filter: blur(8px);
        }
        .badge-featured {
          background: var(--accent);
          color: white;
          box-shadow: 0 4px 16px rgba(232,99,43,0.4);
        }
        .badge-upcoming {
          background: rgba(6,214,160,0.15);
          color: var(--cy);
          border: 1px solid rgba(6,214,160,0.4);
        }
        .badge-ondemand {
          background: rgba(129,140,248,0.15);
          color: var(--bl);
          border: 1px solid rgba(129,140,248,0.4);
        }
        .event-card-body {
          padding: 1.75rem 1.75rem 1.85rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .event-card-date {
          font-size: .78rem;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: .65rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .event-card-body h3 {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0 0 .75rem;
          line-height: 1.25;
          color: var(--text-primary);
        }
        .event-card-body p {
          font-size: .92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0 0 1.5rem;
          flex: 1;
        }
        .event-card-cta {
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          color: var(--accent);
          font-weight: 700;
          font-size: .9rem;
          text-decoration: none;
          margin-top: auto;
          transition: gap 0.2s ease;
        }
        .event-card.clickable:hover .event-card-cta { gap: .8rem; }
        .event-card-cta-muted {
          color: var(--text-muted);
          font-weight: 600;
          font-size: .88rem;
          margin-top: auto;
        }

        .social-connect {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 2.5rem 2.25rem;
          margin: 2rem 0 2rem;
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
        }
        .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }

        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <Link href="/resources" className="back-link">← Back to Resources</Link>

      <section className="hero-events">
        <div className="event-icon">🎤</div>
        <h1>Webinars & Events</h1>
        <p>Meet SecComply at the industry's most influential cybersecurity gatherings. See where we have been, who we have met, and what is coming next.</p>
      </section>

      <div className="event-wrap">

        <div className="event-cards-grid reveal">

          {/* Event 1 — IdentityShield '26 (internal detail page) */}
          <Link href="/resources/events/identityshield-26" className="event-card clickable featured">
            <div className="event-card-media">
              <span className="event-card-corner-badge badge-featured">⭐ Featured</span>
              <img src="/event-images/shivani-podium-1.jpg" alt="Shivani Tikadia speaking at IdentityShield Summit 2026" />
            </div>
            <div className="event-card-body">
              <div className="event-card-date">📅 16-17 January 2026</div>
              <h3>IdentityShield Summit '26</h3>
              <p>India's premier AI-powered identity security summit, powered by miniOrange. Our CEO Shivani Tikadia took the arcon stage as a featured speaker.</p>
              <span className="event-card-cta">Explore the Event →</span>
            </div>
          </Link>

          {/* Event 2 — Upcoming Placeholder */}
          <div className="event-card">
            <div className="event-card-media">
              <span className="event-card-corner-badge badge-upcoming">📅 Upcoming</span>
              <div className="event-card-placeholder">
                <span className="event-card-placeholder-icon">🎤</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-date" style={{color: 'var(--cy)'}}>🔜 Announcing Soon</div>
              <h3>More Events Coming</h3>
              <p>Summits, workshops, and industry roundtables across India and globally. Follow us on LinkedIn to get the schedule first.</p>
              <span className="event-card-cta-muted">Details coming soon</span>
            </div>
          </div>

          {/* Event 3 — Webinars Placeholder */}
          <div className="event-card">
            <div className="event-card-media">
              <span className="event-card-corner-badge badge-ondemand">🎥 On-Demand</span>
              <div className="event-card-placeholder">
                <span className="event-card-placeholder-icon">▶️</span>
              </div>
            </div>
            <div className="event-card-body">
              <div className="event-card-date" style={{color: 'var(--bl)'}}>🎬 Library In Production</div>
              <h3>Deep-Dive Webinars</h3>
              <p>ISO 27001, SOC 2, DPDP, GDPR — recorded sessions covering the operational realities of compliance at scale.</p>
              <span className="event-card-cta-muted">Library launching soon</span>
            </div>
          </div>
        </div>

        <div className="social-connect reveal">
          <h3>Follow the Journey</h3>
          <p>More events, more content, more conversations — follow us where the dialogue continues.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/seccomply/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>💼</span> LinkedIn
            </a>
            <a href="https://www.youtube.com/@thenadkarnees" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>▶️</span> The Nadkarnees (YouTube)
            </a>
            <a href="https://twitter.com/seccomply" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>𝕏</span> Twitter / X
            </a>
            <a href="https://www.instagram.com/seccomply.net/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span>📷</span> Instagram
            </a>
          </div>
        </div>

        <div className="cta-events-banner reveal">
          <h3>Want SecComply at <em>Your Next Event?</em></h3>
          <p>We speak, sponsor, and exhibit at cybersecurity events across India and globally. Whether you are organising a summit, a workshop, or an invite-only roundtable — we would love to be part of it.</p>
          <div className="cta-events-btns">
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Meeting →
            </a>
            <a href="mailto:info@seccomply.net" className="btn-secondary">
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
