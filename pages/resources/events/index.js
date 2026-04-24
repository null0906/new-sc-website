import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect, useState } from 'react'

export default function EventsIndex() {
  const [activeTab, setActiveTab] = useState('identityshield')

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

        /* ═══ TAB BAR ═══ */
        .events-tabs {
          display: flex;
          gap: .5rem;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: .65rem;
          margin-bottom: 2rem;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .events-tabs::-webkit-scrollbar { display: none; }
        .events-tab {
          flex: 1;
          min-width: 0;
          padding: 1rem 1.25rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 11px;
          cursor: pointer;
          text-align: center;
          transition: all 0.25s ease;
          color: var(--text-primary);
          font-family: inherit;
          white-space: nowrap;
        }
        .events-tab:hover:not(.active) {
          background: rgba(255,255,255,0.03);
        }
        .events-tab.active {
          background: rgba(232,99,43,0.08);
          border-color: var(--accent-border);
          box-shadow: 0 0 0 1px var(--accent-border), 0 8px 24px rgba(232,99,43,0.12);
        }
        .events-tab-title {
          display: block;
          font-size: 1rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: .2rem;
          letter-spacing: -0.01em;
        }
        .events-tab.active .events-tab-title {
          color: var(--accent);
        }
        .events-tab-meta {
          display: block;
          font-size: .78rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .events-tab.active .events-tab-meta {
          color: rgba(232,99,43,0.75);
        }
        @media (max-width: 700px) {
          .events-tabs { flex-direction: column; gap: .4rem; }
          .events-tab { flex: none; text-align: left; }
        }

        /* ═══ TAB PANEL ═══ */
        .events-panel {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 4rem;
          animation: fadeIn 0.35s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Featured event panel — IdentityShield */
        .panel-featured {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 0;
        }
        @media (max-width: 900px) {
          .panel-featured { grid-template-columns: 1fr; }
        }
        .panel-featured-media {
          position: relative;
          min-height: 360px;
          background: #000;
          overflow: hidden;
        }
        .panel-featured-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
        }
        .panel-featured-media::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 60%, rgba(10,22,40,0.4) 100%);
          pointer-events: none;
        }
        @media (max-width: 900px) {
          .panel-featured-media { min-height: 260px; }
        }
        .panel-corner-badge {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          padding: .45rem .9rem;
          border-radius: 8px;
          font-size: .72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          z-index: 3;
          backdrop-filter: blur(8px);
          background: var(--accent);
          color: white;
          box-shadow: 0 4px 16px rgba(232,99,43,0.4);
        }
        .panel-featured-body {
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .panel-date {
          font-size: .82rem;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: .85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .panel-featured-body h2 {
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          font-weight: 800;
          margin: 0 0 1rem;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .panel-featured-body p {
          color: var(--text-body);
          font-size: 1rem;
          line-height: 1.65;
          margin: 0 0 1.5rem;
        }
        .panel-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: .6rem;
          margin-bottom: 1.75rem;
        }
        .panel-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          padding: .45rem .85rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          font-size: .82rem;
          color: var(--text-body);
          font-weight: 600;
        }
        .panel-cta {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .9rem 1.6rem;
          background: var(--accent);
          color: white;
          border-radius: 10px;
          font-weight: 700;
          text-decoration: none;
          font-size: .95rem;
          transition: all 0.2s ease;
          align-self: flex-start;
        }
        .panel-cta:hover {
          background: #D9541F;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(232,99,43,0.3);
        }

        /* Coming-soon panel */
        .panel-coming-soon {
          padding: 4rem 2.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .panel-coming-soon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, rgba(6,214,160,0.06), transparent 55%),
                      radial-gradient(circle at 70% 70%, rgba(129,140,248,0.05), transparent 55%);
          pointer-events: none;
        }
        .panel-coming-soon.variant-webinar::before {
          background: radial-gradient(circle at 30% 30%, rgba(129,140,248,0.07), transparent 55%),
                      radial-gradient(circle at 70% 70%, rgba(232,99,43,0.04), transparent 55%);
        }
        .cs-icon {
          font-size: 3.5rem;
          margin-bottom: 1.25rem;
          opacity: 0.85;
          position: relative;
        }
        .cs-tag {
          display: inline-block;
          padding: .4rem .9rem;
          border-radius: 999px;
          font-size: .72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1rem;
          position: relative;
        }
        .cs-tag.green {
          background: rgba(6,214,160,0.12);
          color: var(--cy);
          border: 1px solid rgba(6,214,160,0.35);
        }
        .cs-tag.violet {
          background: rgba(129,140,248,0.12);
          color: var(--bl);
          border: 1px solid rgba(129,140,248,0.35);
        }
        .panel-coming-soon h2 {
          font-size: clamp(1.6rem, 3vw, 2rem);
          font-weight: 800;
          margin: 0 0 .85rem;
          position: relative;
          letter-spacing: -0.01em;
        }
        .panel-coming-soon > p {
          color: var(--text-muted);
          font-size: 1.02rem;
          line-height: 1.65;
          max-width: 540px;
          margin: 0 auto 1.75rem;
          position: relative;
        }
        .cs-notify {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .8rem 1.4rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 600;
          font-size: .9rem;
          transition: all 0.2s ease;
          position: relative;
        }
        .cs-notify:hover {
          background: var(--accent-soft);
          border-color: var(--accent-border);
          color: var(--accent);
          transform: translateY(-1px);
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

        {/* ═══ TAB BAR ═══ */}
        <div className="events-tabs reveal" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'identityshield'}
            className={`events-tab ${activeTab === 'identityshield' ? 'active' : ''}`}
            onClick={() => setActiveTab('identityshield')}
          >
            <span className="events-tab-title">IdentityShield '26</span>
            <span className="events-tab-meta">Past Event · Featured</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'upcoming'}
            className={`events-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <span className="events-tab-title">Upcoming Events</span>
            <span className="events-tab-meta">Coming Soon</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'webinars'}
            className={`events-tab ${activeTab === 'webinars' ? 'active' : ''}`}
            onClick={() => setActiveTab('webinars')}
          >
            <span className="events-tab-title">On-Demand Webinars</span>
            <span className="events-tab-meta">Coming Soon</span>
          </button>
        </div>

        {/* ═══ TAB PANELS ═══ */}
        {activeTab === 'identityshield' && (
          <div className="events-panel" key="identityshield" role="tabpanel">
            <div className="panel-featured">
              <div className="panel-featured-media">
                <span className="panel-corner-badge">⭐ Featured</span>
                <img src="/event-images/shivani-podium-1.jpg" alt="Shivani Tikadia speaking at IdentityShield Summit 2026" />
              </div>
              <div className="panel-featured-body">
                <div className="panel-date">📅 16-17 January 2026</div>
                <h2>IdentityShield Summit '26</h2>
                <p>India's premier AI-powered identity security summit, powered by miniOrange. Our CEO Shivani Tikadia took the arcon stage as a featured speaker alongside leaders shaping the future of identity-first cybersecurity.</p>
                <div className="panel-meta-row">
                  <span className="panel-meta-pill">📍 India</span>
                  <span className="panel-meta-pill">🎤 Featured Speaker</span>
                  <span className="panel-meta-pill">🤝 Powered by miniOrange</span>
                </div>
                <Link href="/resources/events/identityshield-26" className="panel-cta">
                  Explore the Event →
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="events-panel" key="upcoming" role="tabpanel">
            <div className="panel-coming-soon">
              <div className="cs-icon">🎤</div>
              <span className="cs-tag green">📅 Announcing Soon</span>
              <h2>More Events Coming</h2>
              <p>Summits, workshops, and industry roundtables across India and globally — we are finalising the next set of speaking engagements and partner events. Follow us on LinkedIn to get the schedule first.</p>
              <a href="https://www.linkedin.com/company/seccomply/" target="_blank" rel="noopener noreferrer" className="cs-notify">
                💼 Follow on LinkedIn →
              </a>
            </div>
          </div>
        )}

        {activeTab === 'webinars' && (
          <div className="events-panel" key="webinars" role="tabpanel">
            <div className="panel-coming-soon variant-webinar">
              <div className="cs-icon">▶️</div>
              <span className="cs-tag violet">🎬 Library In Production</span>
              <h2>Deep-Dive Webinars</h2>
              <p>ISO 27001, SOC 2, DPDP, GDPR — recorded sessions covering the operational realities of compliance at scale. Our on-demand library is being produced now and will go live shortly.</p>
              <a href="mailto:info@seccomply.net?subject=Notify%20me%20when%20webinars%20launch" className="cs-notify">
                ✉️ Notify me at launch →
              </a>
            </div>
          </div>
        )}

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