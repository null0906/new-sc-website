import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect, useState } from 'react'

export default function EventsIndex() {
  const [activeTab, setActiveTab] = useState('past')

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
        <meta name="description" content="SecComply at industry-leading cybersecurity events across India. Past events, upcoming appearances, and on-demand webinars covering compliance, ISO 27001, SOC 2, DPDP, and GDPR." />
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
          --accent: #0081f2;
          --accent-soft: rgba(0, 129, 242, 0.15);
          --accent-border: rgba(0, 129, 242, 0.3);
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
          background: rgba(0, 129, 242,0.08);
          border-color: var(--accent-border);
          box-shadow: 0 0 0 1px var(--accent-border), 0 8px 24px rgba(0, 129, 242,0.12);
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
          color: rgba(0, 129, 242,0.75);
        }
        .pulse-dot-tab {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cy);
          margin-right: 5px;
          vertical-align: middle;
          box-shadow: 0 0 0 0 rgba(6,214,160,0.6);
          animation: pulse-tab 1.7s infinite;
        }
        @keyframes pulse-tab {
          0% { box-shadow: 0 0 0 0 rgba(6,214,160,0.6); }
          70% { box-shadow: 0 0 0 6px rgba(6,214,160,0); }
          100% { box-shadow: 0 0 0 0 rgba(6,214,160,0); }
        }
        @media (max-width: 700px) {
          .events-tabs { flex-direction: column; gap: .4rem; }
          .events-tab { flex: none; text-align: left; }
        }

        /* ═══ TAB PANEL ═══ */
        .events-panel {
          margin-bottom: 4rem;
          animation: fadeIn 0.35s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ═══ PAST EVENTS GRID ═══ */
        .past-events-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .past-events-grid { grid-template-columns: 1fr; }
        }
        .past-event-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }
        .past-event-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-border);
          box-shadow: 0 18px 42px rgba(0,0,0,0.4), 0 0 0 1px var(--accent-border);
        }
        .past-event-media {
          position: relative;
          aspect-ratio: 16/9;
          background: #000;
          overflow: hidden;
        }
        .past-event-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          transition: transform 0.5s ease;
        }
        .past-event-card:hover .past-event-media img {
          transform: scale(1.04);
        }
        .past-event-corner-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: .4rem .8rem;
          border-radius: 8px;
          font-size: .7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          z-index: 3;
          backdrop-filter: blur(8px);
          background: var(--accent);
          color: white;
          box-shadow: 0 4px 16px rgba(0, 129, 242,0.4);
        }
        .past-event-corner-badge.b-attended {
          background: var(--bl);
          box-shadow: 0 4px 16px rgba(129,140,248,0.4);
        }
        .past-event-corner-badge.b-award {
          background: var(--cy);
          box-shadow: 0 4px 16px rgba(6,214,160,0.4);
        }
        .past-event-body {
          padding: 1.75rem 1.85rem 1.85rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .past-event-date {
          font-size: .78rem;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: .65rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .past-event-body h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin: 0 0 .85rem;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }
        .past-event-body p {
          color: var(--text-body);
          font-size: .94rem;
          line-height: 1.65;
          margin: 0 0 1.25rem;
          flex: 1;
        }
        .past-event-meta-row {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-bottom: 1.4rem;
        }
        .past-event-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: .35rem;
          padding: .35rem .7rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 7px;
          font-size: .76rem;
          color: var(--text-body);
          font-weight: 600;
        }
        .past-event-cta {
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          color: var(--accent);
          font-weight: 700;
          font-size: .92rem;
          margin-top: auto;
        }
        .past-event-card:hover .past-event-cta {
          color: var(--text-primary);
        }

        /* ═══ UPCOMING (single featured panel) ═══ */
        .panel-featured {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 0;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
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
        .panel-featured-media.upcoming-graphic {
          background: linear-gradient(160deg, #0a1f3a 0%, #061425 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .panel-featured-media.upcoming-graphic::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 30% 20%, rgba(0, 129, 242,0.15), transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(129,140,248,0.12), transparent 55%);
        }
        .upcoming-mark {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }
        .upcoming-mark .um-day {
          font-size: 5rem;
          font-weight: 900;
          color: var(--accent);
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: -.25rem;
          text-shadow: 0 4px 30px rgba(0, 129, 242,0.4);
        }
        .upcoming-mark .um-month {
          font-size: 1.2rem;
          font-weight: 800;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .upcoming-mark .um-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-border), transparent);
          margin: 1rem 0;
        }
        .upcoming-mark .um-edition {
          font-size: .7rem;
          color: var(--text-muted);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: .5rem;
        }
        .upcoming-mark .um-name {
          font-size: 1rem;
          color: var(--text-primary);
          font-weight: 700;
          line-height: 1.4;
          max-width: 280px;
          margin: 0 auto;
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
          box-shadow: 0 4px 16px rgba(0, 129, 242,0.4);
        }
        .panel-corner-badge.upcoming-badge {
          background: var(--cy);
          box-shadow: 0 4px 16px rgba(6,214,160,0.4);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .panel-corner-badge.upcoming-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: white;
          animation: pulse-tab 1.7s infinite;
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
          box-shadow: 0 8px 24px rgba(0, 129, 242,0.3);
        }

        /* Coming-soon panel */
        .events-panel-shell {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          overflow: hidden;
        }
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
          background: radial-gradient(circle at 30% 30%, rgba(129,140,248,0.07), transparent 55%),
                      radial-gradient(circle at 70% 70%, rgba(0, 129, 242,0.04), transparent 55%);
          pointer-events: none;
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
        .cs-tag.violet {
          background: rgba(129,140,248,0.12);
          color: var(--bl);
          border: 1px solid rgba(129,140,248,0.35);
        }
        .cs-tag.orange {
          background: rgba(0, 129, 242,0.12);
          color: var(--accent);
          border: 1px solid var(--accent-border);
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
          background: linear-gradient(135deg, rgba(0, 129, 242,0.12) 0%, rgba(10,22,40,0.95) 100%);
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
          box-shadow: 0 8px 24px rgba(0, 129, 242,0.3);
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
        <h1>Webinars &amp; Events</h1>
        <p>Meet SecComply at the industry's most influential cybersecurity gatherings. See where we have been, where we are going next, and what is on the way.</p>
      </section>

      <div className="event-wrap">

        {/* ═══ TAB BAR ═══ */}
        <div className="events-tabs reveal" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'past'}
            className={`events-tab ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            <span className="events-tab-title">Past Events</span>
            <span className="events-tab-meta">Where We Have Been</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'upcoming'}
            className={`events-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <span className="events-tab-title"><span className="pulse-dot-tab"></span>Upcoming Events</span>
            <span className="events-tab-meta">Where We Are Going Next</span>
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
        {activeTab === 'past' && (
          <div className="events-panel" key="past" role="tabpanel">
            <div className="past-events-grid">

              {/* Mumbai Tech Week 2026 */}
              <Link href="/resources/events/mumbai-tech-week-26" className="past-event-card">
                <div className="past-event-media">
                  <span className="past-event-corner-badge b-attended">⭐ Attended</span>
                  <img src="/event-images/mumbai-tech-week-26/05.jpg" alt="SecComply at Mumbai Tech Week 2026, Jio World Convention Centre" />
                </div>
                <div className="past-event-body">
                  <div className="past-event-date">📅 29–30 May 2026</div>
                  <h3>Mumbai Tech Week 2026</h3>
                  <p>India&apos;s largest technology festival — 2nd edition. Two days of &quot;AI in Action&quot; at the Jio World Centre, and the trust-and-security questions behind AI at scale.</p>
                  <div className="past-event-meta-row">
                    <span className="past-event-meta-pill">📍 Mumbai</span>
                    <span className="past-event-meta-pill">🏢 Jio World Convention Centre</span>
                  </div>
                  <span className="past-event-cta">Read the Recap →</span>
                </div>
              </Link>

              {/* DSCI FinSec Conclave 2026 */}
              <Link href="/resources/events/finsec-conclave-26" className="past-event-card">
                <div className="past-event-media">
                  <span className="past-event-corner-badge b-attended">⭐ Attended</span>
                  <img src="/event-images/finsec-conclave-26/01.jpg" alt="SecComply at the DSCI FinSec Conclave 2026, The Westin Powai Lake, Mumbai" />
                </div>
                <div className="past-event-body">
                  <div className="past-event-date">📅 28–29 May 2026</div>
                  <h3>DSCI FinSec Conclave 2026</h3>
                  <p>India&apos;s premier financial-sector security conclave by DSCI — 8th edition. Privacy operationalisation, third-party risk, fraud defence, and AI security across BFSI.</p>
                  <div className="past-event-meta-row">
                    <span className="past-event-meta-pill">📍 Mumbai</span>
                    <span className="past-event-meta-pill">🏢 The Westin, Powai Lake</span>
                  </div>
                  <span className="past-event-cta">Read the Recap →</span>
                </div>
              </Link>

              {/* DxFS 2026 — Hyderabad */}
              <Link href="/resources/events/dxfs-hyderabad-26" className="past-event-card">
                <div className="past-event-media">
                  <span className="past-event-corner-badge b-attended">⭐ Attended</span>
                  <img src="/event-images/dxfs-hyderabad-26/01.jpg" alt="SecComply at ICAI DxFS 2026, Novotel Hyderabad Convention Centre" />
                </div>
                <div className="past-event-body">
                  <div className="past-event-date">📅 22–23 May 2026</div>
                  <h3>DxFS 2026 — Hyderabad</h3>
                  <p>ICAI&apos;s Digital Transformation Finance Summit — 2nd edition. Where the assurance profession meets cybersecurity, data protection, forensic accounting, and digital assurance.</p>
                  <div className="past-event-meta-row">
                    <span className="past-event-meta-pill">📍 Hyderabad</span>
                    <span className="past-event-meta-pill">🏢 Novotel HICC</span>
                  </div>
                  <span className="past-event-cta">Read the Recap →</span>
                </div>
              </Link>

              {/* CIO AXIS CISO & Cyber Pioneers 2026 — most recent past event */}
              <Link href="/resources/events/ciso-cyber-pioneers-26" className="past-event-card">
                <div className="past-event-media">
                  <span className="past-event-corner-badge b-award">🏆 Award Winner</span>
                  <img src="/event-images/infosec-maestros-26/01-hero-shivani-keynote.jpg" alt="Shivani Tikadia delivering the keynote at CISO & Cyber Pioneers 2026, Radisson Blu Plaza, Delhi" />
                </div>
                <div className="past-event-body">
                  <div className="past-event-date">📅 8 May 2026</div>
                  <h3>CIO AXIS CISO &amp; Cyber Pioneers 2026</h3>
                  <p>The 15th edition of CIO AXIS&apos;s flagship cybersecurity awards. SecComply attended as Strategic Compliance Automation Partner — Shivani Tikadia delivered the keynote &quot;The Kingdom &amp; The Crown&quot;, Sanil Nadkarni received the Cyber Pioneer Award, and the team hosted a sponsor booth.</p>
                  <div className="past-event-meta-row">
                    <span className="past-event-meta-pill">📍 Radisson Blu Plaza, Delhi</span>
                    <span className="past-event-meta-pill">🏆 Cyber Pioneer Award</span>
                    <span className="past-event-meta-pill">🎤 Keynote + Panel</span>
                  </div>
                  <span className="past-event-cta">Read the Recap →</span>
                </div>
              </Link>

              {/* CyberSec India Expo 2026 */}
              <Link href="/resources/events/cybersec-india-expo-26" className="past-event-card">
                <div className="past-event-media">
                  <span className="past-event-corner-badge b-attended">⭐ Attended</span>
                  <img src="/event-images/cybersec-india-26/cybersec-hero.jpeg" alt="SecComply at CyberSec India Expo 2026, Bombay Exhibition Centre, Mumbai" />
                </div>
                <div className="past-event-body">
                  <div className="past-event-date">📅 23–24 April 2026</div>
                  <h3>CyberSec India Expo 2026</h3>
                  <p>India's flagship cybersecurity trade show — 2nd edition. Two days of CISO conversations, GRC panel discussions, and the people building India's national cyber resilience.</p>
                  <div className="past-event-meta-row">
                    <span className="past-event-meta-pill">📍 Mumbai</span>
                    <span className="past-event-meta-pill">🏢 Bombay Exhibition Centre</span>
                  </div>
                  <span className="past-event-cta">Read the Recap →</span>
                </div>
              </Link>

              {/* IdentityShield 26 */}
              <Link href="/resources/events/identityshield-26" className="past-event-card">
                <div className="past-event-media">
                  <span className="past-event-corner-badge">⭐ Featured</span>
                  <img src="/event-images/shivani-podium-1.jpg" alt="Shivani Tikadia speaking at IdentityShield Summit 2026" />
                </div>
                <div className="past-event-body">
                  <div className="past-event-date">📅 16–17 January 2026</div>
                  <h3>IdentityShield Summit '26</h3>
                  <p>India's premier AI-powered identity security summit, powered by miniOrange. Our CEO Shivani Tikadia took the arcon stage as a featured speaker alongside leaders shaping the future of identity-first cybersecurity.</p>
                  <div className="past-event-meta-row">
                    <span className="past-event-meta-pill">📍 India</span>
                    <span className="past-event-meta-pill">🎤 Featured Speaker</span>
                  </div>
                  <span className="past-event-cta">Explore the Event →</span>
                </div>
              </Link>

            </div>
          </div>
        )}

        {activeTab === 'upcoming' && (
          <div className="events-panel events-panel-shell" key="upcoming" role="tabpanel">
            <div className="panel-coming-soon">
              <div className="cs-icon">📅</div>
              <span className="cs-tag orange">📍 Next Appearances</span>
              <h2>Next Appearances Being Finalised</h2>
              <p>We are confirming our next round of speaking engagements, sponsorships, and panel appearances across India and globally. Drop us a note to be the first to know when they are announced.</p>
              <a href="mailto:info@seccomply.net?subject=Notify%20me%20about%20SecComply%20upcoming%20events" className="cs-notify">
                ✉️ Notify me when announced →
              </a>
            </div>
          </div>
        )}

        {activeTab === 'webinars' && (
          <div className="events-panel events-panel-shell" key="webinars" role="tabpanel">
            <div className="panel-coming-soon">
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