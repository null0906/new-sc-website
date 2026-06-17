import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DxFSHyderabad26() {
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
        <title>DxFS 2026 Hyderabad — SecComply at ICAI's Digital Transformation Finance Summit</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="SecComply attended DxFS 2026 — the 2nd edition of ICAI's Digital Transformation Finance Summit at Novotel Hyderabad, organised by the Digital Accounting and Assurance Board (DAAB). Two days on forensic accounting, IS audit, data protection, cybersecurity, and digital assurance." />
        <meta property="og:title" content="DxFS 2026 Hyderabad — SecComply Recap" />
        <meta property="og:description" content="Two days at ICAI's Digital Transformation Finance Summit. Where the accounting profession meets cybersecurity, data protection, and digital assurance." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/events/dxfs-hyderabad-26" />
        <link rel="canonical" href="https://seccomply.net/resources/events/dxfs-hyderabad-26" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Event","name":"Digital Transformation Finance Summit 2026 (DxFS 2026)","startDate":"2026-05-22T09:00+05:30","endDate":"2026-05-23T18:00+05:30","eventAttendanceMode":"https://schema.org/OfflineEventAttendanceMode","eventStatus":"https://schema.org/EventScheduled","location":{"@type":"Place","name":"Novotel Hyderabad Convention Centre","address":{"@type":"PostalAddress","addressLocality":"Hyderabad","addressCountry":"IN"}},"description":"ICAI's Digital Transformation Finance Summit, 2nd edition, on forensic accounting, IS audit, data protection, cybersecurity and digital assurance.","organizer":{"@type":"Organization","name":"Digital Accounting and Assurance Board (DAAB), ICAI","url":"https://daab.icai.org/"}}) }} />
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
                <span className="status-badge status-edition">⭐ 2nd Edition</span>
                <span className="status-badge status-date">📅 22-23 May 2026</span>
              </div>
              <h1>DxFS 2026 <em>Hyderabad</em></h1>
              <p className="event-tagline">ICAI's Digital Transformation (Dx) Finance Summit returned for its second edition at the Novotel Hyderabad Convention Centre — two days where the accounting and assurance profession met cybersecurity head-on. Organised by the Digital Accounting and Assurance Board (DAAB), the summit explored forensic accounting, IS audit, data protection, and digital assurance. SecComply was there for the security side of that conversation.</p>

              <div className="event-meta-grid">
                <div className="meta-item">
                  <span className="meta-label">📍 Venue</span>
                  <span className="meta-value">Novotel Hyderabad<br/>Convention Centre</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🗓️ Dates</span>
                  <span className="meta-value">22–23 May 2026<br/>Two-day summit · 12 CPE hrs</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🏢 Organiser</span>
                  <span className="meta-value">DAAB, ICAI<br/>Hosted by Hyderabad Branch (SIRC)</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">🎤 Focus</span>
                  <span className="meta-value">Digital assurance &amp; finance · In-person</span>
                </div>
              </div>

              <div className="event-actions">
                <a href="https://daab.icai.org/events/dxfs-2026" target="_blank" rel="noopener noreferrer" className="btn-primary">View Official Event Page →</a>
                <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-secondary">📅 Talk to Our Team</a>
              </div>
            </div>

            <div className="event-hero-visual">
              <img src="/event-images/dxfs-hyderabad-26/01.jpg" alt="SecComply CEO Shivani Tikadia at the ICAI DxFS 2026 welcome backdrop, Novotel Hyderabad Convention Centre" />
            </div>
          </div>
        </div>

        {/* ═══ STATS ═══ */}
        <div className="stats-row reveal">
          <div className="stat-card"><div className="stat-num">2,000+</div><div className="stat-lbl">Professionals</div></div>
          <div className="stat-card"><div className="stat-num">12</div><div className="stat-lbl">CPE Hours</div></div>
          <div className="stat-card"><div className="stat-num">2nd</div><div className="stat-lbl">Edition</div></div>
          <div className="stat-card"><div className="stat-num">2</div><div className="stat-lbl">Days, Hyderabad</div></div>
        </div>

        {/* ═══ THEME CARD ═══ */}
        <div className="theme-card reveal">
          <div className="theme-card-label">2026 Summit Theme</div>
          <h3>Emerging Opportunities in Digital Assurance, Cybersecurity &amp; Forensics</h3>
          <p>As financial landscapes shift through digital transformation, DxFS 2026 explored the emerging opportunities for the profession across forensic accounting, information systems audit, data protection, cybersecurity, and digital assurance. The summit's premise: the chartered accountant's remit is expanding — and security, privacy, and digital trust are now squarely part of the assurance mandate.</p>
        </div>

        {/* ═══ HIGHLIGHTS ═══ */}
        <h2 className="section-heading">What Stood Out <em>at DxFS</em></h2>
        <p className="section-intro">
          DxFS sits at an unusual and important intersection — the accounting profession deliberately engaging with cybersecurity and data protection. Four observations from the two days in Hyderabad.
        </p>
        <div className="session-highlights reveal">
          <div className="highlight-card">
            <div className="highlight-num">01</div>
            <div className="highlight-body">
              <h4>The Assurance Mandate Is Going Digital</h4>
              <p>The strongest thread across the summit was that digital assurance is no longer optional for the profession. IS audit, continuous controls, and technology risk are moving from specialist niches into the mainstream of what assurance professionals are expected to cover.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">02</div>
            <div className="highlight-body">
              <h4>Forensic Accounting Meets Digital Forensics</h4>
              <p>As fraud goes digital, forensic accounting and digital forensics are converging. The sessions made clear that investigators increasingly need both the financial lens and the technical one to follow the evidence.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">03</div>
            <div className="highlight-body">
              <h4>Data Protection Entered the Audit Vocabulary</h4>
              <p>With DPDP in force, data protection was treated as an assurance topic, not just a legal one. How organisations evidence consent, retention, and breach readiness is becoming something the profession is expected to assess.</p>
            </div>
          </div>
          <div className="highlight-card">
            <div className="highlight-num">04</div>
            <div className="highlight-body">
              <h4>Cybersecurity Became a Finance-Profession Concern</h4>
              <p>Cybersecurity was not framed as someone else's problem. From ISO 27001 and SOC 2 to technology risk in financial reporting, the summit positioned security as central to the credibility of digital financial systems.</p>
            </div>
          </div>
        </div>

        {/* ═══ GALLERY ═══ */}
        <h2 className="section-heading">From the <em>Summit</em></h2>
        <p className="section-intro">
          A few moments from two days at the Novotel Hyderabad Convention Centre — the exhibition floor, networking with the profession's leaders, and conversations between sessions.
        </p>
        <div className="gallery-wrap reveal">
          <div className="gallery-item">
            <img src="/event-images/dxfs-hyderabad-26/01.jpg" alt="SecComply CEO Shivani Tikadia at the ICAI DxFS 2026 welcome backdrop, Novotel Hyderabad" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/dxfs-hyderabad-26/03.jpg" alt="SecComply in conversation with a senior delegate at ICAI DxFS 2026, Hyderabad" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/dxfs-hyderabad-26/04.jpg" alt="SecComply networking with a profession leader at ICAI DxFS 2026" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/dxfs-hyderabad-26/06.jpg" alt="SecComply at an exhibitor booth during ICAI DxFS 2026, Hyderabad" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/dxfs-hyderabad-26/07.jpg" alt="SecComply in conversation at an exhibitor booth, ICAI DxFS 2026" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/dxfs-hyderabad-26/09.jpg" alt="SecComply at the DxFS 2026 welcome backdrop, Hyderabad" />
          </div>
          <div className="gallery-item">
            <img src="/event-images/dxfs-hyderabad-26/10.jpg" alt="The SecComply team at the ICAI DxFS 2026 welcome backdrop" />
          </div>
        </div>

        {/* ═══ TOPICS ═══ */}
        <h2 className="section-heading">The Conversations <em>Worth Tracking</em></h2>
        <p className="section-intro">
          Six themes ran through the DxFS 2026 programme — the points where the accounting profession and cybersecurity now genuinely overlap.
        </p>
        <div className="topics-grid reveal">
          <div className="topic-card">
            <div className="topic-icon">🔍</div>
            <h4>Forensic Accounting</h4>
            <p>Investigating financial fraud in a digital-first world, where the money trail and the data trail are increasingly the same trail.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🖥️</div>
            <h4>Information Systems Audit</h4>
            <p>Auditing the systems behind the numbers — controls, access, and technology risk as a core part of assurance, not a bolt-on.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">⚖️</div>
            <h4>Data Protection</h4>
            <p>What India's DPDP Act means for finance and assurance — consent, retention, and the evidence regulators and auditors will expect.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">🛡️</div>
            <h4>Cybersecurity for Finance</h4>
            <p>ISO 27001, SOC 2, and security controls as foundations of trust in digital financial systems and the firms that audit them.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">✅</div>
            <h4>Digital Assurance</h4>
            <p>Giving stakeholders confidence in digital processes — continuous, technology-enabled assurance over point-in-time review.</p>
          </div>
          <div className="topic-card">
            <div className="topic-icon">⚙️</div>
            <h4>Continuous &amp; Digital Tools</h4>
            <p>The digital tooling reshaping accounting and audit workflows — automation, analytics, and continuous controls monitoring.</p>
          </div>
        </div>

        {/* ═══ AUDIENCE ═══ */}
        <div className="who-we-met reveal">
          <h2 className="section-heading" style={{marginTop: 0}}>Who We <em>Met</em></h2>
          <p className="section-intro" style={{marginBottom: 0}}>
            DxFS draws the accounting and assurance profession alongside the technologists who now work beside them. Across the two days, the rooms broke down roughly like this.
          </p>
          <div className="audience-grid">
            <div className="audience-pill">
              <div className="audience-icon">📋</div>
              <div className="audience-pill-title">Chartered Accountants</div>
              <div className="audience-pill-sub">Practice &amp; industry</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🔍</div>
              <div className="audience-pill-title">Forensic Auditors</div>
              <div className="audience-pill-sub">Fraud &amp; investigation</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🖥️</div>
              <div className="audience-pill-title">IS Auditors (DISA)</div>
              <div className="audience-pill-sub">Systems &amp; controls</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">📊</div>
              <div className="audience-pill-title">DPOs &amp; Privacy Leads</div>
              <div className="audience-pill-sub">DPDP-focused</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">💼</div>
              <div className="audience-pill-title">CFOs &amp; Finance Leaders</div>
              <div className="audience-pill-sub">Digital finance</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🛡️</div>
              <div className="audience-pill-title">CISOs &amp; Tech Risk</div>
              <div className="audience-pill-sub">Security &amp; assurance</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🏛️</div>
              <div className="audience-pill-title">Regulators &amp; ICAI</div>
              <div className="audience-pill-sub">Standards &amp; policy</div>
            </div>
            <div className="audience-pill">
              <div className="audience-icon">🎓</div>
              <div className="audience-pill-title">Young Professionals</div>
              <div className="audience-pill-sub">Next-gen assurance</div>
            </div>
          </div>
        </div>

        {/* ═══ TAKEAWAYS ═══ */}
        <h2 className="section-heading">What We <em>Took Away</em></h2>
        <p className="section-intro" style={{marginBottom: '2rem'}}>
          Two days, a profession in transition, and a clear direction of travel. The themes below are the ones we expect to carry into engagements with finance and assurance teams.
        </p>
        <div className="takeaways-grid reveal">
          <div className="takeaway-card">
            <div className="tk-num">01 / FOUR</div>
            <h4>Security Is Now Part of Assurance</h4>
            <p>The clearest signal from DxFS: the assurance profession is absorbing cybersecurity and data protection into its core mandate. The line between "the auditor" and "the security reviewer" is blurring fast.</p>
          </div>
          <div className="takeaway-card">
            <div className="tk-num">02 / FOUR</div>
            <h4>DPDP Reaches the Finance Profession</h4>
            <p>Data protection is no longer just a legal or IT conversation. For finance and assurance professionals, evidencing consent, retention, and breach readiness is becoming part of the job — and a service they are being asked to provide.</p>
          </div>
          <div className="takeaway-card">
            <div className="tk-num">03 / FOUR</div>
            <h4>Forensics Has Gone Digital</h4>
            <p>Financial fraud and digital evidence are converging. Investigators increasingly need both the accounting and the technical toolkit, and the firms that can offer both will own this space.</p>
          </div>
          <div className="takeaway-card">
            <div className="tk-num">04 / FOUR</div>
            <h4>Trust Frameworks Are the Common Language</h4>
            <p>ISO 27001, SOC 2, and DPDP kept surfacing as the shared vocabulary between security teams and the assurance profession — the frameworks that let finance leaders trust digital systems. That is exactly where SecComply works.</p>
          </div>
        </div>

        {/* ═══ CTA BANNER ═══ */}
        <div className="cta-events-banner reveal">
          <h3>Were You at <em>DxFS 2026?</em></h3>
          <p>If we crossed paths in Hyderabad — or if your finance, audit, or assurance team is working through cybersecurity, DPDP, or digital-assurance questions — we would be glad to continue the conversation. Book a no-pressure scoping call with our team.</p>
          <div className="cta-events-btns">
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Conversation →</a>
            <a href="https://daab.icai.org/events/dxfs-2026" target="_blank" rel="noopener noreferrer" className="btn-secondary">View Official Event Site ↗</a>
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
