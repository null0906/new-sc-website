import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function InfoSecMaestros26() {
  useEffect(() => {
    try {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.textContent = `(function(){
        const revealObs = new IntersectionObserver(e=>{e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
        document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

        /* Countdown to 8 May 2026 09:00 IST */
        const target = new Date('2026-05-08T09:00:00+05:30').getTime();
        const cdEl = document.getElementById('countdown');
        function tick(){
          const now = Date.now();
          const diff = target - now;
          if(!cdEl) return;
          if(diff <= 0){
            cdEl.innerHTML = '<div class="cd-live">🔴 Event is live today</div>';
            return;
          }
          const d = Math.floor(diff/86400000);
          const h = Math.floor((diff%86400000)/3600000);
          const m = Math.floor((diff%3600000)/60000);
          const s = Math.floor((diff%60000)/1000);
          cdEl.innerHTML =
            '<div class="cd-cell"><span class="cd-num">'+d+'</span><span class="cd-lbl">Days</span></div>'+
            '<div class="cd-cell"><span class="cd-num">'+String(h).padStart(2,'0')+'</span><span class="cd-lbl">Hours</span></div>'+
            '<div class="cd-cell"><span class="cd-num">'+String(m).padStart(2,'0')+'</span><span class="cd-lbl">Minutes</span></div>'+
            '<div class="cd-cell"><span class="cd-num">'+String(s).padStart(2,'0')+'</span><span class="cd-lbl">Seconds</span></div>';
        }
        tick();
        const cdInterval = setInterval(tick, 1000);
        window.__cdInt = cdInterval;
      })();`
      document.body.appendChild(s)
      return () => {
        if (s.parentNode) s.parentNode.removeChild(s)
        if (window.__cdInt) clearInterval(window.__cdInt)
      }
    } catch (e) { console.error('Script error:', e) }
  }, [])

  return (
    <Layout>
      <Head>
        <title>InfoSec Maestros 2026 — SecComply at the 15th CISO &amp; Cyber Pioneers Awards &amp; Confex | Delhi · May 8</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="SecComply joins the 15th CISO & Cyber Pioneers Awards & Confex 2026 (InfoSec Maestros) as Strategic Compliance Automation Partner. CEO Shivani Tikadia on the speaker line-up. 8 May 2026 · Radisson Blu Plaza, Delhi Airport." />
        <meta property="og:title" content="InfoSec Maestros 2026 — SecComply at the 15th CISO Confex, Delhi" />
        <meta property="og:description" content="Strategic Compliance Automation Partner at India's premier CISO summit. 100+ CISOs, 15 panel themes, AI-driven security workshops. Meet us at Radisson Blu Plaza, Delhi — 8 May 2026." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/events/infosec-maestros-26" />
        <link rel="canonical" href="https://seccomply.net/resources/events/infosec-maestros-26" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Event","name":"15th CISO & Cyber Pioneers Awards & Confex 2026 (InfoSec Maestros)","startDate":"2026-05-08T09:00+05:30","endDate":"2026-05-08T20:00+05:30","eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"Radisson Blu Plaza Hotel, Delhi Airport","address":{"@type":"PostalAddress","addressLocality":"New Delhi","addressCountry":"IN"}},"image":"https://seccomply.net/event-images/infosec-maestros-26-cover.jpg","description":"India's premier CISO and cybersecurity leadership conference. SecComply joins as Strategic Compliance Automation Partner with CEO Shivani Tikadia on the speaker line-up.","organizer":{"@type":"Organization","name":"CIO Axis","url":"https://infosecmaestros.cioaxis.com/"},"performer":[{"@type":"Person","name":"Shivani Tikadia","jobTitle":"CEO & Founder, SecComply"}],"sponsor":{"@type":"Organization","name":"SecComply","url":"https://seccomply.net"}}) }} />
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
          background: linear-gradient(135deg, rgba(232,99,43,0.10) 0%, rgba(10,22,40,0.95) 100%);
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
          background: radial-gradient(circle, rgba(232,99,43,0.2), transparent 60%);
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
        .status-upcoming {
          background: rgba(6,214,160,0.14);
          color: var(--cy);
          border: 1px solid rgba(6,214,160,0.35);
        }
        .status-partner {
          background: var(--accent-soft);
          color: var(--accent);
          border: 1px solid var(--accent-border);
        }
        .status-date {
          background: rgba(129,140,248,0.12);
          color: var(--bl);
          border: 1px solid rgba(129,140,248,0.3);
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cy);
          box-shadow: 0 0 0 0 rgba(6,214,160,0.6);
          animation: pulse 1.7s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(6,214,160,0.6); }
          70% { box-shadow: 0 0 0 8px rgba(6,214,160,0); }
          100% { box-shadow: 0 0 0 0 rgba(6,214,160,0); }
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

        /* ═══ COUNTDOWN ═══ */
        .countdown-box {
          background: rgba(232,99,43,0.06);
          border: 1px solid var(--accent-border);
          border-radius: 14px;
          padding: 1.25rem 1rem;
          margin-bottom: 1.75rem;
        }
        .cd-label {
          font-size: .7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
          text-align: center;
          margin-bottom: .85rem;
        }
        #countdown {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: .5rem;
        }
        .cd-cell {
          background: rgba(0,0,0,0.25);
          border-radius: 10px;
          padding: .75rem .25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: .2rem;
        }
        .cd-num {
          font-size: 1.65rem;
          font-weight: 800;
          color: var(--text-primary);
          font-variant-numeric: tabular-nums;
          line-height: 1;
        }
        .cd-lbl {
          font-size: .65rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          font-weight: 700;
        }
        .cd-live {
          padding: .85rem;
          font-weight: 800;
          color: var(--accent);
          text-align: center;
          font-size: 1rem;
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

        /* Hero visual side */
        .event-hero-visual {
          position: relative;
          background: linear-gradient(160deg, #0a1f3a 0%, #061425 100%);
          overflow: hidden;
          min-height: 440px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2.5rem 2rem;
        }
        .visual-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 30% 20%, rgba(232,99,43,0.12), transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(129,140,248,0.10), transparent 55%);
          pointer-events: none;
        }
        .hero-event-mark {
          position: relative;
          z-index: 2;
          text-align: center;
          width: 100%;
          max-width: 320px;
        }
        .hero-event-mark .ed-day {
          font-size: 5.5rem;
          font-weight: 900;
          color: var(--accent);
          line-height: 1;
          letter-spacing: -0.04em;
          text-shadow: 0 4px 30px rgba(232,99,43,0.4);
          margin-bottom: -.25rem;
        }
        .hero-event-mark .ed-month {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.4em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .hero-event-mark .ed-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-border), transparent);
          margin: 1.5rem 0;
        }
        .hero-event-mark .ed-edition {
          font-size: .8rem;
          color: var(--text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: .75rem;
        }
        .hero-event-mark .ed-name {
          font-size: 1.15rem;
          color: var(--text-primary);
          font-weight: 700;
          line-height: 1.4;
        }
        .speaker-tag {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          background: rgba(10,22,40,0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(232,99,43,0.3);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          z-index: 3;
        }
        .speaker-tag-label {
          font-size: .65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: .25rem;
        }
        .speaker-tag-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: .15rem;
        }
        .speaker-tag-title { font-size: .85rem; color: var(--text-muted); }

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

        /* ═══ KEYNOTE PANEL ═══ */
        .keynote-panel {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 2.5rem;
          margin-bottom: 3rem;
          display: grid;
          grid-template-columns: 0.9fr 1.2fr;
          gap: 2.5rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .keynote-panel { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.75rem; }
        }
        .keynote-image {
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 3/4;
          position: relative;
          background: #000;
          max-height: 560px;
        }
        .keynote-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
        }
        .keynote-content h3 { font-size: 1.6rem; font-weight: 800; margin: 0 0 .5rem; }
        .keynote-role {
          display: inline-block;
          padding: .25rem .75rem;
          background: var(--accent-soft);
          color: var(--accent);
          border-radius: 6px;
          font-size: .8rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
        }
        .keynote-content p {
          color: var(--text-body);
          line-height: 1.75;
          margin: 0 0 1rem;
          font-size: .98rem;
        }
        .keynote-quote {
          border-left: 3px solid var(--accent);
          padding: .5rem 0 .5rem 1.25rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: var(--text-primary);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* Themes / panels we're tracking */
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

        /* ═══ AGENDA TIMELINE ═══ */
        .agenda-wrap {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 2rem 2.25rem;
          margin-bottom: 3rem;
          position: relative;
        }
        .agenda-row {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 1.25rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          align-items: flex-start;
        }
        .agenda-row:last-child { border-bottom: none; }
        .agenda-row.is-seccomply {
          background: linear-gradient(90deg, rgba(232,99,43,0.06), transparent 70%);
          border-radius: 8px;
          padding: 1rem 1rem;
          margin: .25rem -1rem;
          border-left: 3px solid var(--accent);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .agenda-time {
          font-size: .85rem;
          font-weight: 700;
          color: var(--accent);
          font-variant-numeric: tabular-nums;
        }
        .agenda-detail h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 .25rem;
          line-height: 1.4;
        }
        .agenda-detail p {
          font-size: .85rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.5;
        }
        .seccomply-pill {
          display: inline-block;
          padding: .15rem .55rem;
          background: var(--accent);
          color: white;
          border-radius: 4px;
          font-size: .65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          margin-left: .5rem;
          vertical-align: middle;
          text-transform: uppercase;
        }
        @media (max-width: 700px) {
          .agenda-row { grid-template-columns: 1fr; gap: .35rem; }
          .agenda-time { font-size: .8rem; }
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

        /* Booth strip */
        .booth-strip {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 2rem;
          background: linear-gradient(135deg, rgba(232,99,43,0.06) 0%, var(--surface) 100%);
          border: 1px solid var(--accent-border);
          border-radius: 18px;
          padding: 2.25rem;
          margin-bottom: 3rem;
          align-items: center;
        }
        @media (max-width: 800px) { .booth-strip { grid-template-columns: 1fr; } }
        .booth-strip h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin: 0 0 .85rem;
          color: var(--text-primary);
        }
        .booth-strip h3 em { color: var(--accent); font-style: normal; }
        .booth-strip p {
          color: var(--text-body);
          font-size: .98rem;
          line-height: 1.7;
          margin: 0 0 1.25rem;
        }
        .booth-cta-row { display: flex; gap: .65rem; flex-wrap: wrap; }
        .booth-side {
          background: rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: .85rem;
        }
        .booth-fact {
          display: flex;
          gap: .75rem;
          align-items: flex-start;
        }
        .booth-fact-icon {
          font-size: 1.15rem;
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: var(--accent-soft);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .booth-fact-text strong {
          display: block;
          color: var(--text-primary);
          font-weight: 700;
          font-size: .9rem;
          margin-bottom: .15rem;
        }
        .booth-fact-text span {
          color: var(--text-muted);
          font-size: .82rem;
          line-height: 1.5;
        }

        /* Why we show up */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 800px) { .why-grid { grid-template-columns: 1fr; } }
        .why-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 1.85rem;
          transition: all 0.3s ease;
        }
        .why-card:hover {
          border-color: var(--accent-border);
          transform: translateY(-3px);
        }
        .why-card .why-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: .82rem;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: .85rem;
          letter-spacing: 0.1em;
        }
        .why-card h4 {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 .65rem;
          color: var(--text-primary);
          line-height: 1.35;
        }
        .why-card p {
          font-size: .9rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
        }

        /* CTA / Social */
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
                <span className="status-badge status-upcoming"><span className="pulse-dot"></span> Upcoming</span>
                <span className="status-badge status-partner">⭐ Strategic Compliance Automation Partner</span>
                <span className="status-badge status-date">📅 8 May 2026</span>
              </div>
              <h1>InfoSec Maestros <em>2026</em></h1>
              <p className="event-tagline">SecComply joins the <strong>15th CISO &amp; Cyber Pioneers Awards &amp; Confex</strong> as Strategic Compliance Automation Partner — the conference that brings together India's top 100 CISOs, central and state government technology leadership, and the architects of enterprise security across BFSI, manufacturing, healthcare, and critical infrastructure.</p>

              <div className="event-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">📍 Venue</span>
                  <span className="meta-value">Radisson Blu Plaza Hotel,<br/>Delhi Airport</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🗓️ Date</span>
                  <span className="meta-value">Friday, 8 May 2026<br/>09:00 AM – Late evening</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🏢 Organiser</span>
                  <span className="meta-value">CIO Axis</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🎤 Format</span>
                  <span className="meta-value">In-person · Confex + Awards</span>
                </div>
              </div>

              <div className="countdown-box">
                <div className="cd-label">⏱️ Until We Meet in Delhi</div>
                <div id="countdown"></div>
              </div>

              <div className="event-actions">
                <a href="https://infosecmaestros.cioaxis.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">View Official Event Page →</a>
                <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-secondary">📅 Book a Meeting With Us</a>
              </div>
            </div>

            <div className="event-hero-visual">
              <div className="visual-overlay"></div>
              <div className="hero-event-mark">
                <div className="ed-day">08</div>
                <div className="ed-month">MAY</div>
                <div className="ed-line"></div>
                <div className="ed-edition">15th Edition</div>
                <div className="ed-name">CISO &amp; Cyber Pioneers<br/>Awards &amp; Confex 2026</div>
              </div>
              <div className="speaker-tag">
                <div className="speaker-tag-label">🎤 SecComply on Stage</div>
                <div className="speaker-tag-name">Shivani Tikadia</div>
                <div className="speaker-tag-title">CEO &amp; Founder, SecComply</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ STATS ═══ */}
        <div className="stats-row reveal">
          <div className="stat-card"><div className="stat-num">100+</div><div className="stat-lbl">Top India CISOs</div></div>
          <div className="stat-card"><div className="stat-num">7</div><div className="stat-lbl">Panel Discussions</div></div>
          <div className="stat-card"><div className="stat-num">15</div><div className="stat-lbl">Strategic Themes</div></div>
          <div className="stat-card"><div className="stat-num">1</div><div className="stat-lbl">Day, Full Stage</div></div>
        </div>

        {/* ═══ KEYNOTE / SPEAKER PREVIEW ═══ */}
        <h2 className="section-heading">Our CEO on the <em>Speaker Line-up</em></h2>
        <div className="keynote-panel reveal">
          <div className="keynote-image">
            <img src="/assets/images/shivani.png" alt="Shivani Tikadia, CEO & Founder of SecComply" />
          </div>
          <div className="keynote-content">
            <h3>Shivani Tikadia</h3>
            <span className="keynote-role">CEO &amp; Founder, SecComply</span>
            <p>
              Shivani is a seasoned cybersecurity advisor with <strong>10+ years of experience</strong>, trusted by <strong>100+ organisations including 50+ Fortune 500 companies</strong>. She is known for helping businesses translate complex security and compliance requirements into practical, scalable, and business-aligned solutions.
            </p>
            <p>
              At InfoSec Maestros 2026, Shivani joins the speaker line-up alongside CERT-In leadership, Group CISOs from Boston Consulting Group, Tata Advanced Systems, Genpact, HT Media, Mankind Pharma, J&amp;K Bank, and Samsung R&amp;D — sharing the operational reality of modern compliance programmes and what it takes to run one in a regulator-ready way.
            </p>
            <div className="keynote-quote">
              "Compliance is not a checkbox. It is the operating system of trust — and you build it the same way you build any reliable system: with documentation, rehearsal, and honest measurement."
            </div>
            <p>
              Beyond consulting, Shivani actively contributes to the cybersecurity ecosystem through her YouTube channel <strong>The Nadkarnees</strong>, where she regularly shares expert insights, discussions, and podcasts on cybersecurity, governance, risk, compliance, and emerging industry trends — bridging the gap between technical security and business leadership.
            </p>
          </div>
        </div>

        {/* ═══ WHY IT MATTERS ═══ */}
        <h2 className="section-heading">Why This Confex <em>Matters</em></h2>
        <p className="section-intro">
          The 15th edition of CIO Axis's flagship CISO summit lands at a moment when Indian enterprises are simultaneously rolling out AI in production, navigating the DPDP Act's first full year of enforcement, and preparing for ISO 27001:2022 transition deadlines. Few rooms put all those threads together. This one does.
        </p>
        <div className="session-highlights reveal">
          <div className="highlight-card">
            <div className="highlight-num">01</div>
            <div className="highlight-body">
              <h4>The CISO Vision Track</h4>
              <p>The opening keynote sets the tone — &quot;CISOs Vision 2026 — Staying Ahead of Threats, AI, and Beyond.&quot; Where security leadership goes next, told by the people defining it.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">02</div>
            <div className="highlight-body">
              <h4>AI vs AI Defence Panel</h4>
              <p>One of the day's most-anticipated sessions — &quot;AI vs AI: Defenders vs Attackers in the Automation Arms Race.&quot; Practitioner perspectives, not vendor demos.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">03</div>
            <div className="highlight-body">
              <h4>Data Security &amp; Privacy: The C-Suite Tightrope</h4>
              <p>A panel that goes directly at the question every Indian compliance leader is wrestling with — DPDP enforcement, GDPR overlap, customer expectations, and where the C-suite draws the line.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">04</div>
            <div className="highlight-body">
              <h4>15th CISO &amp; Cyber Pioneers Awards</h4>
              <p>The awards that recognise India's most consequential security leadership work over the past year — the Hall of Fame recognitions every CISO watches.</p>
            </div>
          </div>
        </div>

        {/* ═══ CONFEX THEMES ═══ */}
        <h2 className="section-heading">The Conversations <em>We Are Tracking</em></h2>
        <p className="section-intro">
          Fifteen strategic themes anchor the day's agenda. These are the seven we believe will shape how Indian compliance and security teams operate over the next two years.
        </p>
        <div className="topics-grid reveal">
          <div className="topic-card">
            <div className="topic-icon">🤖</div>
            <h4>AI / ML Security</h4>
            <p>Adversarial ML, model integrity, and the CISO's growing AI accountability — both as a defence and an attack surface.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🔒</div>
            <h4>Zero Trust Identity</h4>
            <p>Identity-first security as the new perimeter — the model that's quietly becoming the default for cloud-native enterprises.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🛡️</div>
            <h4>Data Protection &amp; Privacy</h4>
            <p>DPDP enforcement, cross-border transfer mechanics, and the operational architecture behind privacy-by-design.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">⚡</div>
            <h4>Resilience &amp; Recovery</h4>
            <p>Beyond prevention — SecOps maturity, ransomware playbooks, and the recovery time objectives boards are now asking about.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">☁️</div>
            <h4>Cloud-Native Complexity</h4>
            <p>SaaS sprawl, shadow AI, and what governance over a thousand-app stack actually looks like in practice.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🏭</div>
            <h4>IT / OT Convergence</h4>
            <p>Critical infrastructure, IoT, and the security dialogue between operational technology and traditional IT security teams.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">⚖️</div>
            <h4>Compliance Automation</h4>
            <p>Continuous evidence, framework cross-mapping, and the question of how to meet ISO 27001, SOC 2, DPDP, and HIPAA in parallel.</p>
          </div>
        </div>

        {/* ═══ AGENDA TIMELINE ═══ */}
        <h2 className="section-heading">The Day at <em>a Glance</em></h2>
        <p className="section-intro">
          A condensed view of the published agenda. Sessions and timings are subject to change by the organiser — refer to the <a href="https://infosecmaestros.cioaxis.com/" target="_blank" rel="noopener noreferrer" style={{color:'var(--accent)',textDecoration:'underline'}}>official event page</a> for the live schedule on the day.
        </p>
        <div className="agenda-wrap reveal">
          <div className="agenda-row">
            <div className="agenda-time">08:00 AM</div>
            <div className="agenda-detail"><h4>Delegate Registration &amp; Breakfast</h4><p>Networking opens. Technology showcase floor live.</p></div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">09:00 AM</div>
            <div className="agenda-detail"><h4>Lamp Lighting &amp; Welcome Note</h4><p>Inauguration ceremony.</p></div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">09:30 AM</div>
            <div className="agenda-detail"><h4>Opening Keynote — CISOs Vision 2026</h4><p>Yusuf Hashmi, Group CISO, Jubilant Bhartia Group.</p></div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">09:45 AM</div>
            <div className="agenda-detail"><h4>Panel — AI vs AI: Defenders vs Attackers in the Automation Arms Race</h4><p>Moderated by Jaspreet Singh, Chief Revenue Officer, Grant Thornton Bharat.</p></div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">11:45 AM</div>
            <div className="agenda-detail"><h4>Panel — Data Security &amp; Privacy: The C-Suite Tightrope</h4><p>Moderated by Ritika Naik, Consultant, Ernst &amp; Young.</p></div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">02:00 PM</div>
            <div className="agenda-detail"><h4>15th CISO &amp; Cyber Pioneers Awards — Part 1</h4><p>Recognition of India's leading security practitioners.</p></div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">02:45 PM</div>
            <div className="agenda-detail"><h4>Panel — Resilience vs Prevention: SecOps, Ransomware, and Rapid Recovery</h4><p>Moderated by Rajiv Nandwani, Global Cyber Security Director, Boston Consulting Group.</p></div>
          </div>
          <div className="agenda-row is-seccomply">
            <div className="agenda-time">03:30 PM</div>
            <div className="agenda-detail">
              <h4>SecComply Presentation <span className="seccomply-pill">Our Slot</span></h4>
              <p>The 30,000-foot view of where compliance automation is going — and the architecture behind continuous, audit-ready evidence across DPDP, ISO 27001, ISO 27701, SOC 2, and HIPAA.</p>
            </div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">04:00 PM</div>
            <div className="agenda-detail"><h4>Panel — The IT / OT Collision: Securing Critical Infrastructure &amp; IoT</h4><p>Manufacturing, energy, and infrastructure security leaders on a converged perimeter.</p></div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">05:30 PM</div>
            <div className="agenda-detail"><h4>Panel — Post-Generative AI Security: Are CISOs Losing Control?</h4><p>Moderated by Apoorba Patranabish, Partner, Grant Thornton Bharat.</p></div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">06:15 PM</div>
            <div className="agenda-detail"><h4>Panel — Cloud-Native Complexity: Managing SaaS Risks &amp; Shadow AI</h4><p>Moderated by Kanishk Gaur, CEO, Athenian Tech.</p></div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">07:00 PM</div>
            <div className="agenda-detail"><h4>15th CISO &amp; Cyber Pioneers Awards — Part 2</h4><p>The full awards ceremony continues.</p></div>
          </div>
          <div className="agenda-row">
            <div className="agenda-time">07:15 PM</div>
            <div className="agenda-detail"><h4>Networking Cocktails &amp; Dinner</h4><p>The day closes with the conversation that often matters most.</p></div>
          </div>
        </div>

        {/* ═══ AUDIENCE ═══ */}
        <div className="who-we-met reveal">
          <h2 className="section-heading" style={{marginTop: 0}}>Who's <em>in the Room</em></h2>
          <p className="section-intro" style={{marginBottom: 0}}>
            The InfoSec Maestros audience is curated to senior decision-makers — not a generalist tech crowd. If you sit anywhere in the security or risk function at a mid-to-large Indian enterprise, this is the room.
          </p>
          <div className="audience-grid">
            <div className="audience-pill">
              <div className="audience-icon">🛡️</div>
              <div className="audience-pill-title">CISOs</div>
              <div className="audience-pill-sub">Top 100 of India</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🏛️</div>
              <div className="audience-pill-title">Govt &amp; CERT-In</div>
              <div className="audience-pill-sub">Central + State</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">📊</div>
              <div className="audience-pill-title">DPOs &amp; Privacy Leads</div>
              <div className="audience-pill-sub">DPDP enforcement era</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">⚙️</div>
              <div className="audience-pill-title">SOC Managers</div>
              <div className="audience-pill-sub">Operational front line</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">💼</div>
              <div className="audience-pill-title">CIOs &amp; CTOs</div>
              <div className="audience-pill-sub">Tech leadership</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">⚖️</div>
              <div className="audience-pill-title">Risk &amp; Compliance</div>
              <div className="audience-pill-sub">VP &amp; Director level</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🔍</div>
              <div className="audience-pill-title">Cyber Investigators</div>
              <div className="audience-pill-sub">Legal &amp; forensics</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🤝</div>
              <div className="audience-pill-title">Solution Providers</div>
              <div className="audience-pill-sub">Curated partner ecosystem</div>
            </div>
          </div>
        </div>

        {/* ═══ BOOTH / MEETING STRIP ═══ */}
        <div className="booth-strip reveal">
          <div>
            <h3>Find Us at the <em>SecComply Stand</em></h3>
            <p>If you are attending InfoSec Maestros 2026, drop by the SecComply stand or block a slot in advance. We will be running live demonstrations of the platform that our partners use to maintain continuous compliance — and short, no-pressure advisory sessions for CISOs evaluating where to invest in compliance automation in the next budget cycle.</p>
            <div className="booth-cta-row">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-primary">Block a 1:1 Slot →</a>
              <a href="mailto:info@seccomply.net?subject=InfoSec%20Maestros%202026%20-%20Meeting%20Request" className="btn-secondary">✉️ Email the Team</a>
            </div>
          </div>
          <div className="booth-side">
            <div className="booth-fact">
              <div className="booth-fact-icon">🎯</div>
              <div className="booth-fact-text"><strong>Live platform walkthrough</strong><span>The full SecComply compliance automation flow — DPDP, ISO 27001, ISO 27701, SOC 2, HIPAA in one view.</span></div>
            </div>
            <div className="booth-fact">
              <div className="booth-fact-icon">🤝</div>
              <div className="booth-fact-text"><strong>Free 30-min advisory</strong><span>Bring your current compliance posture. Leave with a concrete next-step plan.</span></div>
            </div>
            <div className="booth-fact">
              <div className="booth-fact-icon">📋</div>
              <div className="booth-fact-text"><strong>Compliance gap kit</strong><span>Take home a printed scorecard of where you stand against the frameworks your customers are asking about.</span></div>
            </div>
          </div>
        </div>

        {/* ═══ WHY WE SHOW UP ═══ */}
        <h2 className="section-heading">Why We <em>Show Up</em></h2>
        <p className="section-intro" style={{marginBottom: '2rem'}}>
          SecComply has signed on as Strategic Compliance Automation Partner for a specific reason — this is the room where the next eighteen months of Indian enterprise compliance gets decided. Four reasons we make this a priority.
        </p>
        <div className="why-grid reveal">
          <div className="why-card">
            <div className="why-num">01 / FOUR</div>
            <h4>Standing With the People Setting the Bar</h4>
            <p>Being on the same partner roster as Proofpoint, Silverfort, Forcepoint, and Microsoft sends a signal. We are not building a compliance tool for the compliance team to tolerate — we are building it for the security and engineering leaders making procurement decisions in this room.</p>
          </div>
          <div className="why-card">
            <div className="why-num">02 / FOUR</div>
            <h4>India-First, Not India-Adapted</h4>
            <p>The DPDP Act is India's reality. Most global compliance platforms bolted DPDP support onto a GDPR-first product. SecComply was built India-first, with cross-mapping to global frameworks — and this is the audience that immediately understands the difference.</p>
          </div>
          <div className="why-card">
            <div className="why-num">03 / FOUR</div>
            <h4>Listening Before Selling</h4>
            <p>Industry events get noisy. We are deliberately not running a hard-sell motion. The sessions are an opportunity to listen — what is genuinely broken in the way large Indian enterprises run compliance today, and what would actually change that.</p>
          </div>
          <div className="why-card">
            <div className="why-num">04 / FOUR</div>
            <h4>Building the Compliance Conversation</h4>
            <p>Compliance has been a back-office function for too long. Events like InfoSec Maestros are where it shifts to the front of the boardroom — and that shift is the precondition for everything we are building.</p>
          </div>
        </div>

        {/* ═══ CTA BANNER ═══ */}
        <div className="cta-events-banner reveal">
          <h3>Will You Be at <em>InfoSec Maestros 2026?</em></h3>
          <p>If you are attending in Delhi on 8 May, let us know — we will block a slot, share what we are showing on stage, and make sure we get face time during the day. The networking gaps are short and book up fast.</p>
          <div className="cta-events-btns">
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-primary">Reserve a Meeting Slot →</a>
            <a href="https://infosecmaestros.cioaxis.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">View Official Event Site ↗</a>
          </div>
        </div>

        {/* ═══ SOCIAL ═══ */}
        <div className="social-connect reveal">
          <h3>Follow the Run-Up — and the Recap</h3>
          <p>We will be sharing pre-event takes, on-the-day photos, and the full post-event recap across our social channels.</p>
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