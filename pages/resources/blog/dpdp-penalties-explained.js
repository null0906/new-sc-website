import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPPenaltiesExplained() {
  useEffect(() => {
    (function () {
      'use strict';
      const bar = document.getElementById('reading-progress');
      window.addEventListener('scroll', () => { const h = document.documentElement.scrollHeight - window.innerHeight; if (bar) bar.style.width = (h > 0 ? Math.min(window.scrollY / h * 100, 100) : 0) + '%'; }, { passive: true });
      const artEl = document.querySelector('.art'); const rtEl = document.getElementById('read-time');
      if (artEl && rtEl) { const words = (artEl.innerText || '').trim().split(/\s+/).length; rtEl.textContent = '📖 ' + Math.max(1, Math.round(words / 220)) + ' min read'; }
      document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { const t = document.querySelector(a.getAttribute('href')); if (!t) return; e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 24, behavior: 'smooth' }); history.pushState(null, '', a.getAttribute('href')); }); });
      const sections = document.querySelectorAll('section[id]'); const tocLinks = document.querySelectorAll('.toc-link');
      if (sections.length && tocLinks.length) { const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)); }); }, { rootMargin: '-60px 0px -55% 0px', threshold: 0 }); sections.forEach(s => obs.observe(s)); }
      const btt = document.getElementById('btt'); window.addEventListener('scroll', () => { if (btt) btt.classList.toggle('vis', window.scrollY > 600); }, { passive: true });
      window.copyLink = function () { (navigator.clipboard ? navigator.clipboard.writeText(window.location.href) : Promise.reject()).catch(() => {}); };
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>What DPDP Penalties Really Look Like - And How to Avoid Them | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="What the DPDP Act penalty Schedule actually charges for each failure, how the Data Protection Board decides the final number under Section 33, and the controls that keep you out of the ₹250 crore tier." />
        <meta name="keywords" content="DPDP penalties, DPDP Act fines, Data Protection Board of India, Section 33 DPDP, DPDP Schedule penalty, DPDP compliance, personal data breach penalty India, DPDP Act 2023 penalties" />
        <meta property="og:title" content="What DPDP Penalties Really Look Like - And How to Avoid Them" />
        <meta property="og:description" content="The DPDP Act's penalty Schedule tops out at ₹250 crore, but the number the Data Protection Board actually lands on depends on factors under Section 33 -not the headline cap." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-penalties-explained" />
        <meta property="article:published_time" content="2026-06-09" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-penalties-explained" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"What DPDP Penalties Really Look Like - And How to Avoid Them","description":"What the DPDP Act penalty Schedule charges for each failure, how the Data Protection Board decides the final number under Section 33, and the controls that keep you out of the biggest tiers.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-06-09","dateModified":"2026-06-09","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-penalties-explained","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP Penalties","item":"https://seccomply.net/resources/blog/dpdp-penalties-explained"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the maximum DPDP penalty?","acceptedAnswer":{"@type":"Answer","text":"Up to ₹250 crore, for failure to take reasonable security safeguards to prevent a personal data breach under Section 8(5). It is the single largest entry in the Schedule to the DPDP Act, well ahead of the ₹200 crore tiers for breach notification failures and children's data violations."}},{"@type":"Question","name":"Who decides and imposes penalties?","acceptedAnswer":{"@type":"Answer","text":"The Data Protection Board of India. It is the adjudicating body set up under the DPDP Act, and under Section 33 it conducts an inquiry and imposes a monetary penalty up to the cap set in the Schedule for the relevant failure -it is not a court and does not go through the ordinary civil litigation process."}},{"@type":"Question","name":"Does DPDP compensate affected individuals?","acceptedAnswer":{"@type":"Answer","text":"No. Penalties imposed by the Data Protection Board are paid into the Consolidated Fund of India, not to the affected Data Principals. Unlike the GDPR, the DPDP Act does not create a private right for individuals to claim compensation from a Data Fiduciary through the Board."}},{"@type":"Question","name":"Can Data Principals be fined?","acceptedAnswer":{"@type":"Answer","text":"Yes. Section 15 sets out duties of Data Principals, including not registering false or frivolous complaints and not impersonating another person. Breach of these duties can attract a penalty of up to ₹10,000 under the Schedule -small next to the Data Fiduciary tiers, but a real deterrent against bad-faith complaints."}},{"@type":"Question","name":"What single failure carries the biggest penalty?","acceptedAnswer":{"@type":"Answer","text":"Failure to take reasonable security safeguards to prevent a personal data breach, under Section 8(5), capped at ₹250 crore. It sits above breach notification failures, children's data violations, and Significant Data Fiduciary non-compliance, which signals where the Board's attention -and the Schedule's weight -is concentrated."}}]}]}) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#FF6000;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(255, 96, 0,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--rd:#ff4d6d;--bl:#818cf8;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#FF6000,#FF8A3D);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(255, 96, 0,.1);color:var(--cy);border:1px solid rgba(255, 96, 0,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:var(--bl);border:1px solid rgba(99,102,241,.25)}
    .badge-am{background:rgba(255,183,3,.1);color:var(--am);border:1px solid rgba(255,183,3,.25)}
    .hero-h1{font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .hero-h1 em{font-style:italic;color:var(--cy)}
    .hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#FF6000,#FF8A3D);display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(255, 96, 0,.3)}
    .author-info{flex:1}.aname{font-weight:700;font-size:.95rem;color:var(--tx);margin-bottom:3px}
    .ameta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.8rem;margin-bottom:2px}
    .adate{display:flex;align-items:center;gap:8px;font-size:.78rem;color:var(--tm)}.dot{opacity:.3}
    .img-wrap{border-radius:16px;overflow:hidden;border:1px solid var(--bo);margin-bottom:1.5rem;line-height:0}
    .img-cap{text-align:center;font-size:.76rem;color:var(--tm);margin-bottom:2rem;font-style:italic}
    .toc-box{background:var(--bgc2);border:1px solid var(--bo);border-radius:14px;padding:1.6rem;margin-bottom:3rem}
    .toc-lbl{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:1rem}
    .toc-grid{display:grid;grid-template-columns:1fr 1fr;gap:.35rem 1.5rem}
    .toc-grid a{color:var(--tb);text-decoration:none;font-size:.83rem;padding:.28rem 0;border-bottom:1px solid var(--bs);transition:color .2s;display:flex;align-items:center;gap:6px}
    .toc-grid a::before{content:'';width:4px;height:4px;border-radius:50%;background:var(--cy);opacity:.4;flex-shrink:0}
    .toc-grid a:hover{color:var(--cy)}.toc-grid a:hover::before{opacity:1}
    .stat-band{display:grid;grid-template-columns:repeat(4,1fr);gap:.85rem;margin-bottom:3rem}
    @media(max-width:700px){.stat-band{grid-template-columns:repeat(2,1fr)}}
    .stat-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.25rem 1rem;text-align:center;transition:all .25s}
    .stat-card:hover{border-color:var(--bo);transform:translateY(-2px)}
    .stat-num{font-size:1.6rem;font-weight:800;color:var(--cy);line-height:1;margin-bottom:.35rem}
    .stat-lbl{font-size:.72rem;color:var(--tm);text-transform:uppercase;letter-spacing:.05em;font-weight:600;line-height:1.4}
    .blog-layout{max-width:1280px;margin:0 auto;padding:0 2rem 5rem;display:grid;grid-template-columns:1fr 285px;gap:3rem;align-items:start}
    .art{min-width:0}
    .art h2{font-size:1.65rem;font-weight:700;color:var(--tx);margin:3rem 0 1.2rem;line-height:1.3}
    .art h2 em{color:var(--cy);font-style:italic}
    .art h3{font-size:1.05rem;font-weight:700;color:var(--cy);margin:1.8rem 0 .8rem}
    .art p{font-size:1rem;line-height:1.85;color:var(--tb);margin-bottom:1.2rem}
    .art p strong{color:var(--tx)}
    .art a.inline-link{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgba(255, 96, 0,0.3)}
    .art a.inline-link:hover{border-bottom-color:var(--cy)}
    .art ul{margin:0 0 1.4rem;padding:0;list-style:none}
    .art ul li{padding:.4rem 0 .4rem 1.4rem;position:relative;font-size:.95rem;color:var(--tb);border-bottom:1px solid var(--bs)}
    .art ul li:last-child{border-bottom:none}
    .art ul li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:2px;background:var(--cy);opacity:.7}
    .art ul li strong{color:var(--tx)}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(255, 96, 0,.06);border:1px solid rgba(255, 96, 0,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .case-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.4rem 0;border-left:3px solid var(--cy)}
    .case-card h3{font-size:1.1rem;font-weight:700;color:var(--tx);margin:0 0 .65rem}
    .case-card p{font-size:.93rem;color:var(--tb);line-height:1.72;margin-bottom:.7rem!important}
    .case-card p:last-child{margin-bottom:0!important}
    .case-card ul{margin:.5rem 0 0!important}
    .case-card ul li{font-size:.88rem!important;padding:.28rem 0 .28rem 1.2rem!important}
    .vendor-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .vendor-table{width:100%;border-collapse:collapse;min-width:560px}
    .vendor-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .vendor-table td{padding:.7rem 1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .vendor-table tr:last-child td{border-bottom:none}
    .vendor-table td:first-child{color:var(--tx);font-weight:600}
    .faq-section{margin:3rem 0}
    .faq-item{border:1px solid var(--bs);border-radius:12px;margin-bottom:.65rem;overflow:hidden;transition:border-color .2s}
    .faq-item:hover{border-color:var(--bo)}
    .faq-q{padding:1.15rem 1.5rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:1rem;background:var(--bgc2)}
    .faq-q strong{font-size:.92rem;color:var(--tx)}
    .faq-ch{color:var(--cy);transition:transform .3s;flex-shrink:0}
    .faq-item.open .faq-ch{transform:rotate(180deg)}
    .faq-a{display:none;padding:1.15rem 1.5rem;border-top:1px solid var(--bs);background:var(--bgc)}
    .faq-item.open .faq-a{display:block}
    .faq-a p{font-size:.89rem!important;margin-bottom:0!important}
    .sidebar{position:sticky;top:80px;align-self:start}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sidebar{position:static;margin-top:2rem}}
    .side-card{background:var(--bgc2);border:1px solid var(--bo);border-radius:14px;padding:1.25rem;margin-bottom:1.2rem}
    .side-lbl{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:.85rem}
    .side-card h3{font-size:.92rem;color:var(--tx);font-weight:700;margin-bottom:.65rem}
    .side-card p{font-size:.82rem;color:var(--tb);line-height:1.65;margin-bottom:.95rem}
    .side-card .side-cta{display:inline-flex;align-items:center;gap:.4rem;padding:.55rem 1rem;background:var(--cy);color:#fff;text-decoration:none;border-radius:8px;font-size:.78rem;font-weight:700}
    .side-card .side-cta:hover{background:var(--cy2)}
    .side-card ul{list-style:none;padding:0;margin:0}
    .side-card ul li{padding:.45rem 0;border-bottom:1px solid var(--bs);font-size:.82rem}
    .side-card ul li:last-child{border-bottom:none}
    .side-card ul li a{color:var(--tb);text-decoration:none;display:block}
    .side-card ul li a:hover{color:var(--cy)}
    .cta-bottom{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(15,23,42,.95));border:1px solid var(--bo);border-radius:16px;padding:2rem;text-align:center;margin:3rem 0}
    .cta-bottom h3{font-size:1.3rem;color:var(--tx);margin-bottom:.75rem}
    .cta-bottom p{font-size:.95rem;color:var(--tb);max-width:540px;margin:0 auto 1.5rem!important}
    .cta-bottom .cta-btn{display:inline-flex;align-items:center;gap:.5rem;padding:.85rem 1.6rem;background:var(--cy);color:#fff;text-decoration:none;border-radius:10px;font-weight:700;font-size:.92rem;transition:background .2s}
    .cta-bottom .cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:1.5rem;right:1.5rem;width:42px;height:42px;background:var(--cy);color:#fff;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;pointer-events:none;transition:all .25s;z-index:99;font-size:1.1rem}
    #btt.vis{opacity:1;pointer-events:auto}
      `}</style>

      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="bc-sep">/</span>
        <Link href="/resources">Resources</Link><span className="bc-sep">/</span>
        <Link href="/resources/blog">Blog</Link><span className="bc-sep">/</span>
        <span>DPDP Penalties</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 5 -Advanced</span>
          <span className="badge badge-am">Enforcement</span>
        </div>
        <h1 className="hero-h1">What DPDP Penalties Really Look Like - <em>And How to Avoid Them</em></h1>
        <p className="hero-sub">The headline is ₹250 crore, but the number that matters is the one the Data Protection Board lands on after weighing what you did and what you failed to do. The penalty schedule tier by tier, the factors the Board weighs, why DPDP pays the state and not the individual, and the handful of controls that keep you out of the room.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>June 9, 2026</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1280&h=520&fit=crop" alt="Legal and regulatory enforcement" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Enforcement under DPDP runs through the Data Protection Board, not a courtroom -at least not until an appeal reaches the Appellate Tribunal.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#schedule" className="toc-link">1. The Penalty Schedule</a>
            <a href="#how-decided" className="toc-link">2. How the Board Decides</a>
            <a href="#no-compensation" className="toc-link">3. No Individual Compensation</a>
            <a href="#who-pays" className="toc-link">4. Who Gets Penalised</a>
            <a href="#avoid" className="toc-link">5. How to Avoid Them</a>
            <a href="#checklist" className="toc-link">6. Penalty-Avoidance Checklist</a>
            <a href="#faq" className="toc-link">7. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">₹250 cr</div><div className="stat-lbl">Security Safeguards</div></div>
          <div className="stat-card"><div className="stat-num">₹200 cr</div><div className="stat-lbl">Breach / Children</div></div>
          <div className="stat-card"><div className="stat-num">₹150 cr</div><div className="stat-lbl">SDF Obligations</div></div>
          <div className="stat-card"><div className="stat-num">DPB</div><div className="stat-lbl">Adjudicates</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Every DPDP conversation eventually arrives at the same question: what happens if we get this wrong? The Act answers with a Schedule of monetary penalties running from ₹10,000 to ₹250 crore, adjudicated not by a court but by a dedicated regulator -the Data Protection Board of India. Understanding the shape of that Schedule, and the reasoning the Board applies to it, tells you exactly where to point your compliance budget.</p>

          <p>This is the closing piece in our DPDP series. If you have not yet worked through the underlying obligations, start with our <Link href="/resources/blog/dpdp-act-2023-explained" className="inline-link">plain-English guide to the Act</Link> or the <Link href="/resources/blog/dpdp-compliance-roadmap-90-days" className="inline-link">90-day compliance roadmap</Link> -this article assumes you already know what the obligations are, and focuses on what happens when they are missed.</p>

          <section id="schedule">
            <h2>1. The Penalty <em>Schedule</em>, Tier by Tier</h2>
            <p>The Schedule to the DPDP Act sets a maximum penalty for each category of failure. The Board cannot exceed these caps, though as we cover in the next section, it rarely imposes the maximum. Six entries matter most in practice:</p>

            <div className="vendor-table-wrap">
              <table className="vendor-table">
                <thead>
                  <tr><th>Failure</th><th>Provision</th><th>Penalty up to</th></tr>
                </thead>
                <tbody>
                  <tr><td>Failure to take reasonable security safeguards to prevent a personal data breach</td><td>Section 8(5)</td><td>₹250 crore</td></tr>
                  <tr><td>Failure to notify the Board and affected Data Principals of a personal data breach</td><td>Section 8(6)</td><td>₹200 crore</td></tr>
                  <tr><td>Failure to fulfil additional obligations in relation to children</td><td>Section 9</td><td>₹200 crore</td></tr>
                  <tr><td>Failure to fulfil additional obligations of a Significant Data Fiduciary</td><td>Section 10</td><td>₹150 crore</td></tr>
                  <tr><td>Breach of any other provision of the Act or its Rules</td><td>General</td><td>₹50 crore</td></tr>
                  <tr><td>Breach of duties by a Data Principal (e.g. false or frivolous complaints)</td><td>Section 15</td><td>₹10,000</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>The largest tier is also the most avoidable</strong>
                <p>₹250 crore -the single biggest entry in the Schedule -sits on Section 8(5), reasonable security safeguards. It is not tied to a rare or exotic failure; it is tied to the baseline expectation that you protect the data you hold. This is the tier that ordinary security hygiene, not legal cleverness, keeps you out of.</p>
              </div>
            </div>

            <p>Read the ordering carefully. Security safeguards outrank breach notification, which outranks children's data, which outranks Significant Data Fiduciary obligations. The Schedule is effectively telling you where the regulator's priorities sit: prevent the breach first, disclose it properly second, protect the categories that deserve extra care third.</p>
          </section>

          <section id="how-decided">
            <h2>2. How the <em>Board</em> Decides</h2>
            <p>A Schedule cap is a ceiling, not a price tag. Under Section 33, the Data Protection Board of India conducts an inquiry and then decides the actual amount within that ceiling, guided by a defined set of factors rather than a flat formula. In practice, the factors the Board weighs are:</p>
            <ul>
              <li><strong>Nature, gravity and duration of the breach</strong> -a two-hour misconfiguration is judged differently to a two-year unpatched vulnerability.</li>
              <li><strong>Type and sensitivity of the personal data affected</strong> -financial identifiers and children's data carry more weight than a marketing mailing list.</li>
              <li><strong>Repetitive nature of the breach</strong> -a first-time lapse and a recurring failure at the same fiduciary are not treated the same way twice.</li>
              <li><strong>Whether the fiduciary made a gain or avoided a loss</strong> -cutting corners on security spend to protect margins is treated as an aggravating factor, not a neutral cost decision.</li>
              <li><strong>Mitigation taken, and how quickly</strong> -fast, effective containment and remediation count in your favour; silence and delay do not.</li>
              <li><strong>Proportionality</strong> -the penalty is meant to be effective and proportionate, not simply punitive for its own sake.</li>
            </ul>
            <p>This is also why <Link href="/resources/blog/dpdp-breach-notification" className="inline-link">breach notification discipline</Link> matters beyond the ₹200 crore cap attached to it directly: how you handle the 72 hours after discovery colours the Board's view of every other factor in the case.</p>
          </section>

          <section id="no-compensation">
            <h2>3. No <em>Individual</em> Compensation</h2>
            <p>One structural point trips up teams that come to DPDP with a GDPR mental model: penalties collected by the Data Protection Board are paid into the Consolidated Fund of India, not distributed to the Data Principals whose data was mishandled. The Board's monetary penalty is a regulatory sanction against the fiduciary, not a compensation mechanism for the individual.</p>
            <p>This is a genuine departure from the GDPR, which -through Article 82 -creates a private right for individuals to claim compensation for material or non-material damage arising from a breach of the regulation, litigated separately from any regulatory fine. DPDP does not build an equivalent private right into the Board's process. An affected individual can complain to the Board and trigger an inquiry, but any resulting penalty goes to the state treasury, not to them.</p>
            <p>Practically, this changes the incentive calculus at the margins: the Board's inquiry is the whole of your DPDP-specific financial exposure in most cases, rather than a regulatory fine layered on top of a wave of individual claims. It does not, however, change the underlying obligation to protect the data properly in the first place -nor does it foreclose other legal remedies individuals may have outside the DPDP framework.</p>
          </section>

          <section id="who-pays">
            <h2>4. Who Gets <em>Penalised</em></h2>
            <p>The Schedule is written primarily against the <Link href="/resources/blog/data-principal-fiduciary-processor" className="inline-link">Data Fiduciary</Link> -the entity that determines the purpose and means of processing personal data. The five largest tiers in the Schedule, from ₹250 crore down to ₹50 crore, all sit on the Fiduciary's shoulders. Data Processors acting solely on a Fiduciary's instructions are not directly penalised under the Schedule in the same way, though contractually a Fiduciary will typically push security and breach-notification obligations down to its processors regardless.</p>
            <p>Data Principals are not exempt either, though their exposure looks entirely different in scale. Section 15 sets duties for Data Principals -among them, not registering a false or frivolous complaint with a Data Fiduciary or the Board, and not furnishing false particulars or impersonating someone else. Breach of these duties can attract a penalty of up to ₹10,000. It is a small number next to ₹250 crore, but it exists specifically to discourage bad-faith complaints from clogging a young enforcement system.</p>
          </section>

          <section id="avoid">
            <h2>5. How to <em>Avoid Them</em></h2>
            <p>Every tier in the Schedule maps to a specific, buildable control. Work down from the largest exposure:</p>
            <p><strong>Against the ₹250 crore tier (security safeguards):</strong> encryption of personal data at rest and in transit, access controls built on least privilege, logging and monitoring capable of detecting a breach quickly, regular vulnerability management, and a documented security programme you can point to if the Board asks what "reasonable" meant in your context.</p>
            <p><strong>Against the ₹200 crore breach-notification tier:</strong> an incident response process that can identify, contain, and assess a breach fast enough to notify the Board and affected Data Principals within the timelines set under the DPDP Rules, with clear internal ownership so notification does not stall waiting for someone to make a decision.</p>
            <p><strong>Against the ₹200 crore children's-data tier:</strong> verifiable parental consent mechanisms, a prohibition on behavioural tracking and targeted advertising directed at children, and age-verification processes proportionate to your product -covered in detail in our <Link href="/resources/blog/dpdp-childrens-data" className="inline-link">children's data guide</Link>.</p>
            <p><strong>Against the ₹150 crore Significant Data Fiduciary tier:</strong> if you are designated (or might become) an SDF, the additional obligations -a India-based Data Protection Officer, an independent data auditor, periodic Data Protection Impact Assessments -need to be built before designation, not scrambled together after. Our <Link href="/resources/blog/significant-data-fiduciary-sdf" className="inline-link">SDF guide</Link> walks through what changes.</p>
            <p><strong>Underneath all of it:</strong> valid, specific <Link href="/resources/blog/consent-under-dpdp-act" className="inline-link">consent under the DPDP Act</Link> reduces your exposure across nearly every other tier, because a large share of Board inquiries begin with a Data Principal complaint about how their consent was (or was not) obtained.</p>
          </section>

          <section id="checklist">
            <h2>6. Penalty-Avoidance <em>Checklist</em></h2>
            <div className="case-card">
              <h3>Before an inquiry ever starts</h3>
              <ul>
                <li>Security safeguards documented, implemented, and reviewed on a regular cadence -not just written once at policy sign-off.</li>
                <li>Breach detection and internal escalation fast enough to meet the notification timelines under the DPDP Rules.</li>
                <li>Consent flows that are specific, informed, and as easy to withdraw as to give.</li>
                <li>Children's data flows separated out, age-gated, and free of behavioural tracking.</li>
                <li>SDF-readiness assessment done in advance, even if you are not yet designated.</li>
                <li>A named internal owner for DPDP compliance who can produce evidence of all of the above on short notice.</li>
                <li>Vendor and processor contracts that push equivalent obligations downstream.</li>
                <li>A record of mitigation and remediation for any past incident, however minor -it is evidence the Board will weigh in your favour.</li>
              </ul>
            </div>
          </section>

          <p>Enforcement under the DPDP Act is still early -there is little public track record of the Data Protection Board's decisions to point to yet, and the Schedule's caps have not, to date, been tested at scale against named organisations. That absence of precedent is not a reason to relax; it is a reason to build the controls now, while the cost of doing so is a security budget rather than a Board inquiry. The Schedule tells you exactly where the risk is concentrated. The rest is implementation.</p>

          <div className="cta-bottom">
            <h3>Want to know exactly where your penalty exposure sits?</h3>
            <p>SecComply maps your DPDP obligations against the Schedule, tier by tier, and closes the gaps that carry the largest exposure first -security safeguards, breach response, consent, and SDF readiness.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a penalty exposure review →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What is the maximum DPDP penalty?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Up to ₹250 crore, for failure to take reasonable security safeguards to prevent a personal data breach. It is the single largest entry in the Schedule to the DPDP Act, well ahead of the ₹200 crore tiers for breach notification failures and children's data violations.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Who decides and imposes penalties?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>The Data Protection Board of India. It is the adjudicating body set up under the DPDP Act, and under Section 33 it conducts an inquiry and imposes a monetary penalty up to the cap set in the Schedule for the relevant failure -it is not a court and does not go through the ordinary civil litigation process.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Does DPDP compensate affected individuals?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>No. Penalties imposed by the Data Protection Board are paid into the Consolidated Fund of India, not to the affected Data Principals. Unlike the GDPR, the DPDP Act does not create a private right for individuals to claim compensation from a Data Fiduciary through the Board.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can Data Principals be fined?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Yes. Section 15 sets out duties of Data Principals, including not registering false or frivolous complaints and not impersonating another person. Breach of these duties can attract a penalty of up to ₹10,000 under the Schedule -small next to the Data Fiduciary tiers, but a real deterrent against bad-faith complaints.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What single failure carries the biggest penalty?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Failure to take reasonable security safeguards to prevent a personal data breach, under Section 8(5), capped at ₹250 crore. It sits above breach notification failures, children's data violations, and Significant Data Fiduciary non-compliance, which signals where the Board's attention -and the Schedule's weight -is concentrated.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Exposure Review</div>
            <h3>Know your penalty tier</h3>
            <p>We map your current controls against the DPDP Schedule and prioritise fixes by exposure, starting with the largest tiers.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a review →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-breach-notification">Breach Notification</Link></li>
              <li><Link href="/resources/blog/significant-data-fiduciary-sdf">Significant Data Fiduciary</Link></li>
              <li><Link href="/resources/blog/dpdp-childrens-data">Children's Data</Link></li>
              <li><Link href="/resources/blog/dpdp-act-2023-explained">DPDP Act Explained</Link></li>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Roadmap</Link></li>
              <li><Link href="/resources/blog/data-protection-officer-dpo-dpdp">Data Protection Officer</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
