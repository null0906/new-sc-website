import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPBreachNotification() {
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
        <title>Data Breach Under DPDP -What to Report, When, and to Whom | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="The DPDP Act introduces mandatory breach notification for Data Fiduciaries. What counts as a breach, who must be notified, the 72-hour timeline, what the notice must include, and how to build a breach response plan that holds up under penalty review." />
        <meta name="keywords" content="DPDP breach notification, data breach India, Data Protection Board notification, 72 hour breach, Indian breach response, breach response plan, DPDP penalties, breach notification template" />
        <meta property="og:title" content="Data Breach Under DPDP -What to Report, When, and to Whom" />
        <meta property="og:description" content="A breach is already bad. Failing to handle it correctly under the DPDP Act makes it catastrophically worse. The notification timeline, the recipients, and the response plan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-breach-notification" />
        <meta property="article:published_time" content="2026-05-08" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-breach-notification" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Data Breach Under DPDP -What to Report, When, and to Whom","description":"What counts as a breach under the DPDP Act, who must be notified, the timeline, and the response plan that holds up under penalty review.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-08","dateModified":"2026-05-08","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-breach-notification","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1614064642639-e398cf05badb?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP Breach Notification","item":"https://seccomply.net/resources/blog/dpdp-breach-notification"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the exact notification timeline under DPDP?","acceptedAnswer":{"@type":"Answer","text":"The DPDP Act requires notification 'as soon as possible' after the breach is identified. The Data Protection Board is expected to prescribe a specific timeline through rules -commonly anticipated as 72 hours, consistent with global best practice. Until rules are notified, the safe assumption is to act within 72 hours of becoming aware of the breach."}},{"@type":"Question","name":"Do we have to notify even minor breaches?","acceptedAnswer":{"@type":"Answer","text":"The DPDP Act does not yet provide a 'risk of harm' threshold below which notification is optional. Until rules clarify, the prudent posture is to notify the Board of any confirmed unauthorised processing of personal data -including near-misses that resulted in actual exposure even if briefly. Internal incident classification can guide whether notification to affected data principals is also warranted."}},{"@type":"Question","name":"What if the breach was at our vendor, not us?","acceptedAnswer":{"@type":"Answer","text":"You are still liable to notify. As the Data Fiduciary, you remain responsible for the data even when it sits with a Data Processor. Your vendor must notify you under your Data Processing Agreement, and you must notify the Board and affected data principals. The notification can attribute the source of the breach to the vendor, but the obligation to notify is yours."}},{"@type":"Question","name":"What is the maximum penalty for not reporting a breach?","acceptedAnswer":{"@type":"Answer","text":"Up to ₹250 crore (Rs. 250 crore) per breach under the DPDP Act, per the schedule of penalties. The Board has discretion to set the actual penalty within that ceiling based on factors including the nature and gravity of the breach, the duration of the non-compliance, and the action taken to mitigate. Failure to notify materially increases the likely penalty."}},{"@type":"Question","name":"Should we test our breach response plan?","acceptedAnswer":{"@type":"Answer","text":"Yes. Run a tabletop exercise at least annually -walk through a simulated breach scenario with the incident response team, classify it, draft the notifications, run the timeline. Tabletops are the fastest way to find gaps in your plan before a real incident does."}}]}]}) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#E8632B;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(232,99,43,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--rd:#ff4d6d;--bl:#818cf8;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#E8632B,#FF8A50);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(232,99,43,.1);color:var(--cy);border:1px solid rgba(232,99,43,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:var(--bl);border:1px solid rgba(99,102,241,.25)}
    .badge-rd{background:rgba(255,77,109,.1);color:var(--rd);border:1px solid rgba(255,77,109,.25)}
    .hero-h1{font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .hero-h1 em{font-style:italic;color:var(--cy)}
    .hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#E8632B,#FF8A50);display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(232,99,43,.3)}
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
    .art a.inline-link{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgba(232,99,43,0.3)}
    .art a.inline-link:hover{border-bottom-color:var(--cy)}
    .art ul{margin:0 0 1.4rem;padding:0;list-style:none}
    .art ul li{padding:.4rem 0 .4rem 1.4rem;position:relative;font-size:.95rem;color:var(--tb);border-bottom:1px solid var(--bs)}
    .art ul li:last-child{border-bottom:none}
    .art ul li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:2px;background:var(--cy);opacity:.7}
    .art ul li strong{color:var(--tx)}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-danger{background:rgba(255,77,109,.07);border:1px solid rgba(255,77,109,.25)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .phase-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.4rem 0;border-left:3px solid var(--cy)}
    .phase-card-head{display:flex;align-items:center;gap:.75rem;margin-bottom:.85rem;flex-wrap:wrap}
    .phase-tag{display:inline-flex;align-items:center;padding:.3rem .8rem;color:white;border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;font-family:'JetBrains Mono',monospace}
    .phase-card.p1 .phase-tag{background:var(--rd)}
    .phase-card.p2 .phase-tag{background:var(--am)}
    .phase-card.p3 .phase-tag{background:var(--cy)}
    .phase-card.p4 .phase-tag{background:var(--gr)}
    .phase-card.p1{border-left-color:var(--rd)}
    .phase-card.p2{border-left-color:var(--am)}
    .phase-card.p4{border-left-color:var(--gr)}
    .phase-time{font-size:.78rem;color:var(--tm);font-weight:600;letter-spacing:.04em}
    .phase-card h3{font-size:1.15rem;font-weight:700;color:var(--tx);margin:0 0 .65rem}
    .phase-card p{font-size:.94rem;color:var(--tb);line-height:1.7;margin-bottom:.7rem!important}
    .phase-card p:last-child{margin-bottom:0!important}
    .phase-card ul{margin:.5rem 0 0!important}
    .phase-card ul li{font-size:.88rem!important;padding:.28rem 0 .28rem 1.2rem!important}
    .checklist{background:var(--bgc2);border:1px solid var(--bo);border-radius:14px;padding:1.6rem 1.8rem;margin:2rem 0}
    .checklist h4{font-size:.78rem;color:var(--cy);font-weight:800;letter-spacing:.1em;text-transform:uppercase;margin:0 0 1rem}
    .checklist ul{margin:0!important}
    .checklist ul li{font-size:.92rem!important;padding:.45rem 0 .45rem 2rem!important;position:relative}
    .checklist ul li::before{content:'☐';position:absolute;left:0;top:8px;color:var(--cy);font-size:1.1rem;width:auto!important;height:auto!important;border-radius:0!important;background:transparent!important;opacity:1!important}
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
    .cta-bottom{background:linear-gradient(135deg,rgba(232,99,43,.08),rgba(15,23,42,.95));border:1px solid var(--bo);border-radius:16px;padding:2rem;text-align:center;margin:3rem 0}
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
        <span>DPDP Breach Notification</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 3 -Implementation</span>
          <span className="badge badge-rd">Time-Critical</span>
        </div>
        <h1 className="hero-h1">Data Breach Under DPDP -What to <em>Report</em>, When, and to Whom</h1>
        <p className="hero-sub">A data breach is already bad. Failing to handle it correctly under the DPDP Act makes it catastrophically worse. The notification timeline, the recipients, what the notice must contain, and the response plan that holds up under penalty review.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>May 8, 2026</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1614064642639-e398cf05badb?w=1280&h=520&fit=crop" alt="Incident response and breach notification" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">The clock starts the moment you become aware of the breach. The plan that lets you respond on time has to exist before the breach does.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-counts" className="toc-link">1. What Counts as a Breach</a>
            <a href="#who-notify" className="toc-link">2. Who Must You Notify</a>
            <a href="#what-include" className="toc-link">3. What the Notice Includes</a>
            <a href="#response-plan" className="toc-link">4. The 4-Phase Response Plan</a>
            <a href="#penalty" className="toc-link">5. Penalty for Non-Reporting</a>
            <a href="#checklist" className="toc-link">6. Notification Checklist</a>
            <a href="#faq" className="toc-link">7. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">72hr</div><div className="stat-lbl">Anticipated Timeline</div></div>
          <div className="stat-card"><div className="stat-num">2</div><div className="stat-lbl">Notification Recipients</div></div>
          <div className="stat-card"><div className="stat-num">₹250cr</div><div className="stat-lbl">Max Penalty</div></div>
          <div className="stat-card"><div className="stat-num">4</div><div className="stat-lbl">Response Phases</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>The DPDP Act introduces mandatory breach notification obligations for Data Fiduciaries. This is a significant shift for Indian companies, many of whom have historically had no structured breach response process. If a breach occurs on your watch, you now have legal obligations -and the clock starts the moment you become aware.</p>

          <p>This guide covers what counts as a breach, who must be notified, what the notice must say, and the four-phase response plan that lets you meet the timeline reliably. For where this fits in the wider compliance programme, see Step 9 of our <Link href="/resources/blog/dpdp-compliance-roadmap-90-days" className="inline-link">90-day DPDP roadmap</Link>.</p>

          <section id="what-counts">
            <h2>1. What Counts as a <em>Personal Data Breach</em></h2>
            <p>A personal data breach is any unauthorised processing, loss, destruction, alteration, disclosure, or access to personal data held by a Data Fiduciary or Data Processor. The definition is broad -it covers far more than just hacking.</p>
            <ul>
              <li>A ransomware attack that encrypts customer data</li>
              <li>An employee accidentally emailing a database to an external party</li>
              <li>A misconfigured cloud storage bucket exposing user records</li>
              <li>A third-party vendor breach that compromises data you shared with them</li>
              <li>Lost or stolen laptop containing customer data, even if encrypted</li>
              <li>Insider abuse -an employee accessing data outside their authorised purpose</li>
            </ul>

            <div className="callout co-danger">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>You are liable for vendor breaches too</strong>
                <p>If your Data Processor suffers a breach involving your data, you must still notify as the Fiduciary. Your DPA with the vendor should require them to notify you immediately; the chain then runs from vendor to you to Board within the regulatory timeline.</p>
              </div>
            </div>
          </section>

          <section id="who-notify">
            <h2>2. <em>Who Must You Notify</em></h2>
            <h3>The Data Protection Board of India</h3>
            <p>The Data Fiduciary must notify the Data Protection Board as soon as the breach is identified. The Board will prescribe the format and timeline through rules; prepare to notify within <strong>72 hours</strong>, consistent with global best practice.</p>

            <h3>Affected Data Principals</h3>
            <p>In addition to notifying the Board, the Data Fiduciary must notify each affected data principal directly. Notification must be in clear, plain language -not legalised boilerplate. The data principal is your customer or user; the message they receive will likely become public, so accuracy and tone matter.</p>
          </section>

          <section id="what-include">
            <h2>3. What the <em>Notification Must Contain</em></h2>

            <h3>Notification to the Board</h3>
            <ul>
              <li>Nature of the breach -what happened, how it was identified</li>
              <li>Categories and approximate volume of data affected</li>
              <li>Likely consequences of the breach</li>
              <li>Measures taken or proposed to address the breach</li>
              <li>Contact information for follow-up</li>
            </ul>

            <h3>Notification to Data Principals</h3>
            <ul>
              <li>What happened and when</li>
              <li>What specific data was affected</li>
              <li>What steps you have taken in response</li>
              <li>What the data principal should do to protect themselves (e.g., password reset, monitor for fraud)</li>
              <li>Contact for further questions</li>
            </ul>

            <div className="callout co-key">
              <div className="co-icon">🎯</div>
              <div className="co-body">
                <strong>Prepare templates in advance</strong>
                <p>Draft breach notification templates before you need them. A pre-approved template signed off by legal will save critical hours during an incident. Two templates: one for the Board, one for data principals. Test them in your tabletop exercises.</p>
              </div>
            </div>
          </section>

          <section id="response-plan">
            <h2>4. Building Your <em>Breach Response Plan</em></h2>

            <div className="phase-card p1">
              <div className="phase-card-head"><span className="phase-tag">PHASE 1</span><span className="phase-time">0-24 Hours · Detection & Containment</span></div>
              <h3>Stop the bleeding</h3>
              <p>The moment a potential breach is identified, activate your incident response team. The priority is containment, not investigation.</p>
              <ul>
                <li>Isolate the affected systems to prevent further exposure</li>
                <li>Preserve logs and forensic evidence -do not wipe systems</li>
                <li>Classify the breach -what data, how many records, what risk</li>
                <li>Notify your CISO/leadership immediately</li>
                <li>Open an internal incident record with timestamp and ID</li>
              </ul>
            </div>

            <div className="phase-card p2">
              <div className="phase-card-head"><span className="phase-tag">PHASE 2</span><span className="phase-time">24-48 Hours · Assessment</span></div>
              <h3>Determine the full scope</h3>
              <p>Now investigate. What was actually compromised?</p>
              <ul>
                <li>Which data categories were exposed?</li>
                <li>How many data principals are affected?</li>
                <li>Was the data encrypted? (Encryption with intact keys reduces the practical risk; the Board may still require notification but the harm calculus changes)</li>
                <li>Is there ongoing risk of exposure?</li>
                <li>Document everything -your response record will be required by the Board</li>
              </ul>
            </div>

            <div className="phase-card p3">
              <div className="phase-card-head"><span className="phase-tag">PHASE 3</span><span className="phase-time">Within 72 Hours · Notification</span></div>
              <h3>Notify the Board and data principals</h3>
              <p>Notify the Data Protection Board using the prescribed form. Prepare and dispatch individual notifications for affected data principals. If the investigation is still ongoing, send an initial notification with the facts you know and supplement as the picture becomes clearer -better to notify with partial information than to miss the timeline.</p>
            </div>

            <div className="phase-card p4">
              <div className="phase-card-head"><span className="phase-tag">PHASE 4</span><span className="phase-time">Post-Notification · Remediation & Review</span></div>
              <h3>Fix the cause, learn from it</h3>
              <p>After containment, root-cause the breach and fix the underlying vulnerability. Conduct a post-incident review and update your security controls and procedures. Update the breach response plan based on what worked and what did not. The post-incident report is part of your evidence for the Board.</p>
            </div>
          </section>

          <section id="penalty">
            <h2>5. <em>What Happens If You Do Not Report</em></h2>
            <p>Failure to notify the Data Protection Board of a breach can attract penalties up to ₹250 crore. Beyond the fine, non-disclosure signals bad faith -which makes the Board's subsequent investigation far more consequential. Reported breaches that were handled well can result in lower penalties or even no penalty at all in some cases; unreported breaches that later surface tend to result in much higher penalties because the Board now has two findings instead of one.</p>

            <div className="callout co-danger">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>The cover-up costs more than the breach</strong>
                <p>Companies discovered to have hidden a breach face penalties for both the breach itself and the failure to report. They also lose any goodwill or mitigation credit they might have earned by acting transparently. Always notify.</p>
              </div>
            </div>
          </section>

          <section id="checklist">
            <h2>6. <em>Notification Checklist</em></h2>
            <div className="checklist">
              <h4>Have you done all of these?</h4>
              <ul>
                <li>Internal breach log created with timestamp and incident ID</li>
                <li>Affected systems isolated</li>
                <li>Forensic evidence preserved</li>
                <li>Data categories and volumes assessed</li>
                <li>Board notified within prescribed timeline using the prescribed form</li>
                <li>Affected data principals notified individually with the required content</li>
                <li>Remediation steps documented</li>
                <li>Post-incident review completed</li>
                <li>Root cause identified and fixed</li>
                <li>Response plan updated based on learnings</li>
              </ul>
            </div>
          </section>

          <p>The companies that navigate breaches best are those that prepared before they needed to. A breach is not a matter of if -it is when. Build your response plan now, run a tabletop exercise on it, and update it regularly.</p>

          <div className="cta-bottom">
            <h3>Need a breach response plan that works under pressure?</h3>
            <p>SecComply builds DPDP-aligned incident response plans, including breach notification templates, tabletop exercises, and 24/7 incident support if you need it. Tested in real incidents before you need it tested in yours.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book an incident response review →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What is the exact notification timeline under DPDP?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>The DPDP Act requires notification "as soon as possible" after the breach is identified. The Data Protection Board is expected to prescribe a specific timeline through rules -commonly anticipated as 72 hours, consistent with global best practice. Until rules are notified, the safe assumption is to act within 72 hours of becoming aware of the breach.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Do we have to notify even minor breaches?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>The DPDP Act does not yet provide a "risk of harm" threshold below which notification is optional. Until rules clarify, the prudent posture is to notify the Board of any confirmed unauthorised processing of personal data -including near-misses that resulted in actual exposure even if briefly. Internal incident classification can guide whether notification to affected data principals is also warranted.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What if the breach was at our vendor, not us?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>You are still liable to notify. As the Data Fiduciary, you remain responsible for the data even when it sits with a Data Processor. Your vendor must notify you under your Data Processing Agreement, and you must notify the Board and affected data principals. The notification can attribute the source of the breach to the vendor, but the obligation to notify is yours.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What is the maximum penalty for not reporting a breach?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Up to ₹250 crore per breach under the DPDP Act, per the schedule of penalties. The Board has discretion to set the actual penalty within that ceiling based on factors including the nature and gravity of the breach, the duration of the non-compliance, and the action taken to mitigate. Failure to notify materially increases the likely penalty.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Should we test our breach response plan?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Yes. Run a tabletop exercise at least annually -walk through a simulated breach scenario with the incident response team, classify it, draft the notifications, run the timeline. Tabletops are the fastest way to find gaps in your plan before a real incident does.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Breach-Ready</div>
            <h3>Plan, templates, tabletop</h3>
            <p>DPDP-aligned breach response plan with notification templates and an annual tabletop exercise.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a review →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Roadmap</Link></li>
              <li><Link href="/resources/blog/dpdp-consent-mechanism-web-app">Consent Mechanism</Link></li>
              <li><Link href="/resources/blog/dpdp-privacy-notice-template">Privacy Notice Template</Link></li>
              <li><Link href="/resources/blog/dpdp-erasure-deletion-requests">Erasure Requests</Link></li>
              <li><Link href="/resources/blog/dpdp-cross-border-data-transfer">Cross-Border Transfer</Link></li>
              <li><Link href="/resources/blog/tabletop-security-exercise">Tabletop Security Exercise</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
