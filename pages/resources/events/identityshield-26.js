import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function IdentityShield26() {
  useEffect(() => {
    try {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.textContent = `(function(){
        const revealObs = new IntersectionObserver(e=>{e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
        document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

        /* Lightbox */
        const lightbox=document.getElementById('eventLightbox');
        const lbImg=document.getElementById('lbImg');
        document.querySelectorAll('.mosaic-item').forEach(item=>{
          item.addEventListener('click',function(){
            const img=this.querySelector('img');
            lbImg.src=img.src;
            lbImg.alt=img.alt||'';
            lightbox.classList.add('active');
            document.body.style.overflow='hidden';
          });
        });
        if(lightbox){
          lightbox.addEventListener('click',function(e){
            if(e.target===lightbox||e.target.classList.contains('lb-close')){
              lightbox.classList.remove('active');
              document.body.style.overflow='';
            }
          });
        }
        document.addEventListener('keydown',function(e){
          if(e.key==='Escape'&&lightbox&&lightbox.classList.contains('active')){
            lightbox.classList.remove('active');
            document.body.style.overflow='';
          }
        });

        /* Parallax tilt on mosaic cards */
        document.querySelectorAll('.mosaic-item').forEach(card=>{
          card.addEventListener('mousemove',function(e){
            const rect=this.getBoundingClientRect();
            const x=e.clientX-rect.left;
            const y=e.clientY-rect.top;
            const cx=rect.width/2;
            const cy=rect.height/2;
            const rx=((y-cy)/cy)*-4;
            const ry=((x-cx)/cx)*4;
            this.style.transform='perspective(1000px) rotateX('+rx+'deg) rotateY('+ry+'deg) translateY(-6px)';
          });
          card.addEventListener('mouseleave',function(){
            this.style.transform='';
          });
        });
      })();`
      document.body.appendChild(s)
      return () => { if(s.parentNode) s.parentNode.removeChild(s) }
    } catch(e) { console.error('Script error:', e) }
  }, [])

  return (
    <Layout>
      <Head>
        <title>IdentityShield Summit '26 | SecComply at miniOrange Event</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="SecComply at IdentityShield Summit 2026 — powered by miniOrange. Our CEO Shivani Tikadia took the arcon stage as a featured speaker, and our team hosted a booth. See the keynote, booth, and gallery." />
        <meta property="og:title" content="IdentityShield '26 — SecComply Event Coverage" />
        <meta property="og:description" content="CEO Shivani Tikadia speaks at India's premier AI-powered identity security summit. 5,000+ attendees. 2 days. One stage." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/events/identityshield-26" />
        <link rel="canonical" href="https://seccomply.net/resources/events/identityshield-26" />
      </Head>

      <style jsx global>{`
        :root {
          --bg: #020617;
          --surface: #0a1628;
          --surface-2: #091826;
          --accent: #0081f2;
          --accent-soft: rgba(0, 129, 242, 0.15);
          --accent-border: rgba(0, 129, 242, 0.3);
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
          background: linear-gradient(135deg, rgba(0, 129, 242,0.10) 0%, rgba(10,22,40,0.95) 100%);
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
          background: radial-gradient(circle, rgba(0, 129, 242,0.2), transparent 60%);
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
        .status-featured {
          background: var(--accent-soft);
          color: var(--accent);
          border: 1px solid var(--accent-border);
        }
        .status-date {
          background: rgba(6,214,160,0.12);
          color: var(--cy);
          border: 1px solid rgba(6,214,160,0.3);
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
          margin-bottom: 2rem;
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
          cursor: pointer;
          font-family: inherit;
        }
        .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }

        .event-hero-visual {
          position: relative;
          background: #000;
          overflow: hidden;
          min-height: 440px;
        }
        .event-hero-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          position: absolute;
          inset: 0;
        }
        .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 45%, rgba(2,6,23,0.9) 100%);
          pointer-events: none;
        }
        .speaker-tag {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          background: rgba(10,22,40,0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 129, 242,0.3);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          z-index: 2;
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

        /* ═══ STATS ═══ */
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
          box-shadow: 0 10px 30px rgba(0, 129, 242,0.1);
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

        /* ═══ SESSION HIGHLIGHTS ═══ */
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

        /* ═══ DAY SPLIT ═══ */
        .day-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 800px) { .day-split { grid-template-columns: 1fr; } }
        .day-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 2rem;
        }
        .day-badge {
          display: inline-block;
          padding: .25rem .8rem;
          background: var(--accent-soft);
          color: var(--accent);
          border: 1px solid var(--accent-border);
          border-radius: 6px;
          font-size: .72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }
        .day-card h3 {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0 0 .75rem;
          line-height: 1.3;
        }
        .day-card > p {
          color: var(--text-body);
          line-height: 1.65;
          font-size: .95rem;
          margin: 0 0 1.25rem;
        }
        .day-list { list-style: none; padding: 0; margin: 0; }
        .day-list li {
          padding: .6rem 0;
          color: var(--text-body);
          font-size: .9rem;
          line-height: 1.5;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          display: flex;
          gap: .75rem;
          align-items: flex-start;
        }
        .day-list li:last-child { border-bottom: none; }
        .day-list li::before { content: '→'; color: var(--accent); font-weight: 700; flex-shrink: 0; }

        /* ═══ TOPICS ═══ */
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

        /* ═══ AUDIENCE ═══ */
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
          background: rgba(0, 129, 242,0.04);
        }
        .audience-icon { font-size: 1.6rem; margin-bottom: .35rem; }
        .audience-pill-title {
          font-size: .9rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: .1rem;
        }
        .audience-pill-sub { font-size: .78rem; color: var(--text-muted); }

        /* ═══════ DYNAMIC MOSAIC GALLERY — NO CAPTIONS ═══════ */
        .mosaic-gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 180px;
          gap: 1rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 900px) {
          .mosaic-gallery { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 200px; }
        }
        @media (max-width: 500px) {
          .mosaic-gallery { grid-template-columns: 1fr; grid-auto-rows: 240px; }
        }
        .mosaic-item {
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          transition: box-shadow 0.4s ease, border-color 0.3s ease, transform 0.3s ease;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .mosaic-item:hover {
          border-color: var(--accent-border);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 60px rgba(0, 129, 242,0.15);
          z-index: 5;
        }
        .mosaic-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          display: block;
        }
        .mosaic-item:hover img { transform: scale(1.08); }

        /* Subtle orange glow overlay on hover — no text */
        .mosaic-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(0, 129, 242,0.08) 100%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .mosaic-item:hover::after { opacity: 1; }

        /* Mosaic sizes */
        .mosaic-lg { grid-column: span 2; grid-row: span 2; }
        .mosaic-wide { grid-column: span 2; }
        .mosaic-tall { grid-row: span 2; }
        @media (max-width: 900px) {
          .mosaic-lg { grid-column: span 2; grid-row: span 2; }
          .mosaic-wide { grid-column: span 2; grid-row: span 1; }
          .mosaic-tall { grid-column: span 1; grid-row: span 2; }
        }
        @media (max-width: 500px) {
          .mosaic-lg, .mosaic-wide, .mosaic-tall { grid-column: span 1; grid-row: span 1; }
        }

        /* Glow pulse on featured mosaic item */
        .mosaic-item.mosaic-featured {
          border-color: var(--accent-border);
          box-shadow: 0 0 0 1px var(--accent-border), 0 0 40px rgba(0, 129, 242,0.1);
        }

        /* ═══ LIGHTBOX (no caption) ═══ */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(2,6,23,0.96);
          backdrop-filter: blur(8px);
          z-index: 999;
          display: none;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .lightbox.active { display: flex; animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .lb-content {
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
          animation: zoomIn 0.3s ease;
        }
        @keyframes zoomIn {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .lb-content img {
          max-width: 100%;
          max-height: 90vh;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          display: block;
        }
        .lb-close {
          position: absolute;
          top: -1rem;
          right: -1rem;
          width: 40px;
          height: 40px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        /* ═══ TAKEAWAYS ═══ */
        .takeaways-box {
          background: linear-gradient(135deg, rgba(0, 129, 242,0.06) 0%, var(--surface) 100%);
          border: 1px solid var(--accent-border);
          border-radius: 18px;
          padding: 2.5rem;
          margin-bottom: 3rem;
        }
        .takeaways-box h3 { font-size: 1.4rem; font-weight: 800; margin: 0 0 1rem; }
        .takeaways-list { list-style: none; padding: 0; margin: 0; display: grid; gap: .85rem; }
        .takeaways-list li {
          padding: 1rem 1.25rem;
          background: rgba(255,255,255,0.02);
          border-left: 3px solid var(--accent);
          border-radius: 6px;
          color: var(--text-body);
          font-size: .95rem;
          line-height: 1.6;
        }
        .takeaways-list li strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: .25rem;
          font-size: 1rem;
        }

        /* ═══ CTA / SOCIAL ═══ */
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

      <Link href="/resources/events" className="back-link">← Back to Webinars & Events</Link>

      <div className="event-wrap">

        {/* ═══ HERO CARD ═══ */}
        <div className="event-hero-card reveal">
          <div className="event-hero-inner">
            <div className="event-hero-content">
              <div className="event-status-row">
                <span className="status-badge status-featured">⭐ Featured Event</span>
                <span className="status-badge status-date">16-17 January 2026</span>
              </div>
              <h1>IdentityShield Summit <em>'26</em></h1>
              <p className="event-tagline">
                Powered by miniOrange — India's premier platform for AI-powered identity security. Our CEO <strong>Shivani Tikadia</strong> took the arcon stage as a featured speaker, and the SecComply team hosted a booth where we met cybersecurity leaders, policymakers, and defence officials from across the country.
              </p>

              <div className="event-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">📍 Venue</span>
                  <span className="meta-value">MDS Banquets, Pune</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">👥 Attendees</span>
                  <span className="meta-value">5,000+ security professionals</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🎤 SecComply's Role</span>
                  <span className="meta-value">Speaker + Exhibitor</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🏢 Host</span>
                  <span className="meta-value">miniOrange</span>
                </div>
              </div>

              <div className="event-actions">
                <a href="https://identityshield.miniorange.com/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Visit miniOrange Event Site →
                </a>
                <a href="#gallery" className="btn-secondary">📸 View Gallery</a>
              </div>
            </div>

            <div className="event-hero-visual">
              <img src="/event-images/Shivani Main.jpg" alt="Shivani Tikadia speaking at IdentityShield Summit 2026" />
              <div className="visual-overlay"></div>
              <div className="speaker-tag">
                <div className="speaker-tag-label">🎤 SecComply on Stage</div>
                <div className="speaker-tag-name">Shivani Tikadia</div>
                <div className="speaker-tag-title">CEO & Founder, SecComply</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ STATS ═══ */}
        <div className="stats-row reveal">
          <div className="stat-card"><div className="stat-num">5,000+</div><div className="stat-lbl">Attendees</div></div>
          <div className="stat-card"><div className="stat-num">2 Days</div><div className="stat-lbl">Of Sessions</div></div>
          <div className="stat-card"><div className="stat-num">100+</div><div className="stat-lbl">Security Leaders</div></div>
          <div className="stat-card"><div className="stat-num">50+</div><div className="stat-lbl">Exhibitor Booths</div></div>
        </div>

        {/* ═══ KEYNOTE ═══ */}
        <h2 className="section-heading">Our Keynote — <em>Shivani Tikadia</em></h2>
        <div className="keynote-panel reveal">
          <div className="keynote-image">
            <img src="/assets/images/shivani.png" alt="Shivani Tikadia addressing IdentityShield '26 from the arcon stage podium" />
          </div>
          <div className="keynote-content">
            <h3>Shivani Tikadia</h3>
            <span className="keynote-role">CEO & Founder, SecComply</span>
            <p>
              Shivani is a seasoned cybersecurity advisor with <strong>10+ years of experience</strong>, trusted by <strong>100+ organisations including 50+ Fortune 500 companies</strong>. She is known for helping businesses translate complex security and compliance requirements into practical, scalable, and business-aligned solutions.
            </p>
            <p>
              At IdentityShield '26, Shivani spoke on the <strong>arcon stage</strong> about the operational reality of modern compliance programmes — what it takes to run one, how long it takes, and how to answer in a regulator-ready way. Her session drew security leaders, CISOs, and compliance practitioners looking to move beyond policy theatre into real, audit-grade execution.
            </p>
            <div className="keynote-quote">
              "Compliance is not a checkbox. It is the operating system of trust — and you build it the same way you build any reliable system: with documentation, rehearsal, and honest measurement."
            </div>
            <p>
              Beyond consulting, Shivani actively contributes to the cybersecurity ecosystem through her YouTube channel <strong>The Nadkarnees</strong>, where she regularly shares expert insights, discussions, and podcasts on cybersecurity, governance, risk, compliance, and emerging industry trends — bridging the gap between technical security and business leadership.
            </p>
          </div>
        </div>

        {/* ═══ SESSION HIGHLIGHTS ═══ */}
        <h2 className="section-heading">Session <em>Highlights</em></h2>
        <p className="section-intro">
          Four anchor points from Shivani's keynote that landed hardest with the audience — and sparked the longest conversations at the booth afterwards.
        </p>
        <div className="session-highlights reveal">
          <div className="highlight-card">
            <div className="highlight-num">01</div>
            <div className="highlight-body">
              <h4>Why Most Compliance Programmes Fail</h4>
              <p>Policy documents without operational rehearsal. Controls that live in a binder but not in the engineering pipeline. The most common failure is not lack of effort — it is programmes that look good on paper but cannot survive a real audit.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">02</div>
            <div className="highlight-body">
              <h4>The Real Timeline to ISO 27001</h4>
              <p>Most founders hear "six months" and plan accordingly. Reality: 4-9 months for a tight-scope SaaS, 9-15 months for broader enterprise scope. The variance is almost entirely about scope discipline and organisational readiness.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">03</div>
            <div className="highlight-body">
              <h4>Running ISO 27001 + DPDP + GDPR Together</h4>
              <p>Overlap is high — but not 100%. The right architecture maps control families across all three frameworks, implements each control once, and generates evidence that satisfies multiple auditors simultaneously.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">04</div>
            <div className="highlight-body">
              <h4>Answering "What Would a Regulator See?"</h4>
              <p>The practical litmus test for any compliance programme. If a supervisory authority walked in tomorrow, what documentation exists? What evidence proves controls operated? Most programmes cannot answer cleanly — and that is the real gap to close.</p>
            </div>
          </div>
        </div>

        {/* ═══ DAY-BY-DAY ═══ */}
        <h2 className="section-heading">Two Days, <em>Two Themes</em></h2>
        <div className="day-split reveal">
          <div className="day-card">
            <span className="day-badge">Day 1 · Friday, 16 Jan</span>
            <h3>Foundations & Strategic Direction</h3>
            <p>Opening day set the tone with strategic discussions around India's cybersecurity sovereignty and foundational frameworks.</p>
            <ul className="day-list">
              <li>Keynote from miniOrange founder on reducing foreign cybersecurity dependency</li>
              <li>Zero Trust and IAM architecture sessions for enterprise deployment</li>
              <li>SecComply booth opens — client conversations across ISO, SOC 2, DPDP</li>
              <li>Evening networking with CISOs, policy makers, and defence officials</li>
            </ul>
          </div>
          <div className="day-card">
            <span className="day-badge">Day 2 · Saturday, 17 Jan</span>
            <h3>Implementation & The Operational Reality</h3>
            <p>Day two moved from frameworks to implementation — where Shivani's session on the arcon stage fit squarely into the programme.</p>
            <ul className="day-list">
              <li><strong>Shivani Tikadia</strong> speaks on compliance programme operational realities</li>
              <li>Panels on AI-driven threats and post-quantum cryptography</li>
              <li>miniTalks — podcast-style interviews with industry leaders</li>
              <li>Closing sessions and the IdentityShield '26 innovation awards</li>
            </ul>
          </div>
        </div>

        {/* ═══ TOPICS ═══ */}
        <h2 className="section-heading">What We <em>Covered On Stage</em></h2>
        <p className="section-intro">
          The IdentityShield Summit '26 convened around the core themes shaping India's cybersecurity future. Here are the topics that framed our conversations on stage and at the booth.
        </p>
        <div className="topics-grid reveal">
          <div className="topic-card">
            <div className="topic-icon">🔐</div>
            <h4>Zero Trust Frameworks</h4>
            <p>Moving from perimeter-based models to identity-first architectures — and the operational realities of rolling it out.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🆔</div>
            <h4>Identity & Access Management</h4>
            <p>Modern IAM as the foundation of every serious security programme. MFA, role-based access, and privileged access at scale.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🤖</div>
            <h4>AI-Driven Cyber Threats</h4>
            <p>How adversaries are weaponising AI — and how defenders are using the same technology for faster detection and response.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🔬</div>
            <h4>Post-Quantum Cryptography</h4>
            <p>Preparing cryptographic infrastructure for the quantum era before the transition becomes urgent rather than strategic.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">📋</div>
            <h4>DPDP & Compliance Reality</h4>
            <p>Operationalising the DPDP Act, ISO 27001, and GDPR in the same programme — without duplication and without drift.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🛡️</div>
            <h4>Indigenous Cyber Capability</h4>
            <p>India's path from cybersecurity service provider to global producer — and what the talent ecosystem needs to get there.</p>
          </div>
        </div>

        {/* ═══ WHO WE MET ═══ */}
        <div className="who-we-met reveal">
          <h2 className="section-heading" style={{marginTop: 0}}>Who We <em>Met at the Booth</em></h2>
          <p className="section-intro" style={{marginBottom: 0}}>
            Our exhibitor booth drew a cross-section of the Indian cybersecurity ecosystem. Here is who stopped by — and what they wanted to talk about.
          </p>
          <div className="audience-grid">
            <div className="audience-pill">
              <div className="audience-icon">👔</div>
              <div className="audience-pill-title">CISOs & Security Leads</div>
              <div className="audience-pill-sub">From enterprises and scale-ups</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🚔</div>
              <div className="audience-pill-title">Law Enforcement</div>
              <div className="audience-pill-sub">Maharashtra Police cybercrime</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🏛️</div>
              <div className="audience-pill-title">Policy Makers</div>
              <div className="audience-pill-sub">Government & defence officials</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🚀</div>
              <div className="audience-pill-title">SaaS Founders</div>
              <div className="audience-pill-sub">Pre-audit for enterprise sales</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">💼</div>
              <div className="audience-pill-title">Compliance Teams</div>
              <div className="audience-pill-sub">ISO 27001, SOC 2, DPDP seekers</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🌍</div>
              <div className="audience-pill-title">International Delegates</div>
              <div className="audience-pill-sub">Speakers, vendors, analysts</div>
            </div>
          </div>
        </div>

        {/* ═══════ MOSAIC GALLERY — NO CAPTIONS ═══════ */}
        <h2 className="section-heading" id="gallery">Event <em>Gallery</em></h2>
        <p className="section-intro">
          Two days. One stage. Countless conversations. Click any image to view full-size, and move your cursor across the tiles for a little parallax.
        </p>
        <div className="mosaic-gallery reveal">
          <div className="mosaic-item mosaic-lg mosaic-featured">
            <img src="/event-images/shivani-stage-wide.jpg" alt="Shivani Tikadia addressing the audience on the arcon stage" />
          </div>
          <div className="mosaic-item mosaic-wide">
            <img src="/event-images/shivani-award.jpg" alt="Shivani Tikadia being recognised on the IdentityShield '26 main stage" />
          </div>
          <div className="mosaic-item mosaic-tall">
            <img src="/event-images/team-full-group.jpg" alt="SecComply team at the booth — full lineup" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/shivani-podium-1.jpg" alt="Shivani at the podium — mid-keynote" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/shivani-booth-conversation.jpg" alt="Shivani in conversation with delegates at the SecComply booth" />
          </div>
          <div className="mosaic-item mosaic-wide">
            <img src="/event-images/booth-services-wide.jpg" alt="SecComply services displayed at the booth" />
          </div>
          <div className="mosaic-item mosaic-tall">
            <img src="/event-images/team-member-booth.jpg" alt="SecComply team member at the booth" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/shivani-minitalks.jpg" alt="Shivani at miniTalks — podcast-style interview stage" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/team-front-booth.jpg" alt="Full SecComply team photo in front of the booth" />
          </div>
          <div className="mosaic-item mosaic-wide">
            <img src="/event-images/networking-police.jpg" alt="Conversation with Maharashtra Police cybercrime leadership" />
          </div>
          <div className="mosaic-item mosaic-tall">
            <img src="/event-images/team-member-features-1.jpg" alt="SecComply team member at the event features wall" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/team-member-features-2.jpg" alt="SecComply team member at the event features board" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/team-member-sponsors.jpg" alt="SecComply team member at the sponsor wall" />
          </div>
          <div className="mosaic-item mosaic-wide">
            <img src="/event-images/booth-testimonials.jpg" alt="SecComply booth with client testimonials on display" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/networking-speaker.jpg" alt="Networking with a fellow summit speaker" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/networking-executives.jpg" alt="Networking with industry executives" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/networking-group.jpg" alt="Group conversations at the summit" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/networking-international.jpg" alt="Networking with international delegates" />
          </div>
          <div className="mosaic-item mosaic-wide">
            <img src="/event-images/shivani-keynote-bio.jpg" alt="Shivani's bio slide projected during her keynote" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/booth-setup.jpg" alt="SecComply booth in operational mode" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/team-celebration.jpg" alt="SecComply team celebration after Day 2" />
          </div>
          <div className="mosaic-item">
            <img src="/event-images/networking-crowd.jpg" alt="Exhibitor hall networking" />
          </div>
        </div>

        {/* ═══ KEY TAKEAWAYS ═══ */}
        <div className="takeaways-box reveal">
          <h3>🎯 Key Takeaways From <em style={{color: 'var(--accent)', fontStyle: 'normal'}}>IdentityShield '26</em></h3>
          <ul className="takeaways-list">
            <li>
              <strong>India is moving fast on indigenous cyber capability.</strong>
              The policy signal from the summit was clear — reducing foreign tool dependency while building home-grown IAM, SIEM, and compliance platforms. Expect more procurement preference for Indian-built solutions in the next 18 months.
            </li>
            <li>
              <strong>DPDP is now a boardroom conversation.</strong>
              The DPDP Act has moved from "legal team problem" to "CEO agenda item" faster than GDPR did in Europe. Enterprise buyers in India are asking DPDP-specific questions in every vendor evaluation.
            </li>
            <li>
              <strong>AI-native threats are outrunning traditional controls.</strong>
              Deepfake social engineering, AI-generated phishing, and automated reconnaissance are already bypassing the basic controls most mid-market companies rely on. The defensive AI arms race has started.
            </li>
            <li>
              <strong>Compliance fatigue is real — but avoidable.</strong>
              Companies running ISO 27001 + SOC 2 + DPDP + GDPR separately are burning out their security teams. Integrated programmes with shared controls, unified evidence, and single-source-of-truth documentation are the only sustainable path.
            </li>
          </ul>
        </div>

        {/* ═══ WHY WE SHOW UP ═══ */}
        <h2 className="section-heading">Why We <em>Show Up</em></h2>
        <p className="section-intro" style={{marginBottom: '2.5rem'}}>
          SecComply exists because security and compliance should not feel like translation work. Events like IdentityShield '26 are where we meet the people living that translation problem every day — the CISOs running audits with six frameworks in scope, the founders trying to close enterprise deals faster, the engineering leaders who want privacy built into the product rather than bolted on afterwards. Those conversations shape what we build.
        </p>

        {/* ═══ SOCIAL ═══ */}
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

        {/* ═══ CTA ═══ */}
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

      {/* ═══ LIGHTBOX (no caption) ═══ */}
      <div className="lightbox" id="eventLightbox">
        <div className="lb-content">
          <button className="lb-close" aria-label="Close">✕</button>
          <img id="lbImg" src="" alt="" />
        </div>
      </div>
    </Layout>
  )
}