import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function GDPRComplianceRoadmap() {
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
        <title>GDPR Compliance Roadmap - A Practical Step-by-Step Guide | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A six-step GDPR compliance roadmap that fits a real product team's quarter. Inventory first, then legal basis, privacy notices, subject rights, security perimeter, and breach response. With a 90-day quick-start plan and a 12-month maturity track." />
        <meta name="keywords" content="GDPR compliance roadmap, GDPR step by step, GDPR 90 day plan, GDPR implementation, RoPA Article 30, data inventory GDPR, GDPR DPO requirement, GDPR breach response 72 hours, GDPR maturity" />
        <meta property="og:title" content="GDPR Compliance Roadmap - A Practical Step-by-Step Guide" />
        <meta property="og:description" content="What to do, in what order, when you don't have a year and a million euros. Six steps that get you 80% of the way, plus a 90-day quick-start vs 12-month maturity comparison." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/gdpr-compliance-roadmap" />
        <meta property="article:published_time" content="2026-04-28" />
        <meta property="article:author" content="Gauri Khatate" />
        <meta property="article:tag" content="GDPR" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/gdpr-compliance-roadmap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"GDPR Compliance Roadmap - A Practical Step-by-Step Guide","description":"A six-step GDPR compliance roadmap that fits a real team's quarter. Inventory first, then legal basis, notices, rights, security, breach response. With a 90-day quick-start plan.","author":{"@type":"Person","name":"Gauri Khatate","jobTitle":"Privacy & Compliance Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-04-28","dateModified":"2026-04-28","mainEntityOfPage":"https://seccomply.net/resources/blog/gdpr-compliance-roadmap","articleSection":"GDPR","image":"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"GDPR Compliance Roadmap","item":"https://seccomply.net/resources/blog/gdpr-compliance-roadmap"}]},{"@type":"HowTo","name":"GDPR Compliance - Six-Step Practical Roadmap","description":"Six sequenced steps to a defensible GDPR position in 90 days, with a 12-month maturity path for the full programme.","totalTime":"P90D","step":[{"@type":"HowToStep","position":1,"name":"Map What You Have","text":"Personal data inventory - every system, every flow, every vendor. Build a Record of Processing Activities (RoPA) under Article 30. Days 1–30."},{"@type":"HowToStep","position":2,"name":"Anchor Each Activity to a Legal Basis","text":"For every processing activity, pick one of the six Article 6 bases. Document the rationale, especially for legitimate interests where an LIA is required. Days 30–45."},{"@type":"HowToStep","position":3,"name":"Tell Users What You Do","text":"Privacy notice updates under Articles 13 and 14. Plain language, layered structure, at the point of collection. Days 30–60."},{"@type":"HowToStep","position":4,"name":"Wire Up the Rights","text":"Data subject rights under Articles 15–22 - access, erasure, portability, rectification, objection, restriction. Build the intake form and the fulfilment plumbing. Days 45–75."},{"@type":"HowToStep","position":5,"name":"Lock the Perimeter","text":"Article 32 security measures, vendor DPAs, sub-processor due diligence, international transfer mechanisms. Days 60–90."},{"@type":"HowToStep","position":6,"name":"Plan for the Worst","text":"Breach response runbook with a 72-hour clock from awareness. Pre-drafted notification templates and a tabletop exercise. Days 75–90."}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does it take to implement GDPR?","acceptedAnswer":{"@type":"Answer","text":"For a focused product team, a defensible GDPR position can be reached in roughly 90 days following a sequenced six-step approach - inventory first, then legal basis, notices, subject rights, security perimeter, and breach response. Full operational maturity (continuous vendor monitoring, automated subject-request fulfilment, ongoing RoPA maintenance) typically takes 12 months. Trying to do everything in parallel rather than in sequence is the most consistent failure pattern."}},{"@type":"Question","name":"What is the first step in a GDPR compliance programme?","acceptedAnswer":{"@type":"Answer","text":"The personal data inventory - every system, every flow, every vendor that touches personal data. The output is a Record of Processing Activities (RoPA) under Article 30. Without this, the next five steps will all need redoing once the missing data flows surface. Teams that try to draft privacy notices or pick legal bases before completing the inventory consistently rebuild that work later."}},{"@type":"Question","name":"Do I need a Data Protection Officer (DPO)?","acceptedAnswer":{"@type":"Answer","text":"Article 37 requires a DPO in three specific cases - public authorities, organisations whose core activities involve large-scale systematic monitoring, and organisations whose core activities involve large-scale processing of special category data. Most B2B SaaS companies do not meet any of these. The pragmatic alternative is a Privacy Lead - an internal accountable owner without the formal DPO designation and its independence requirements."}},{"@type":"Question","name":"What is the GDPR breach notification deadline?","acceptedAnswer":{"@type":"Answer","text":"72 hours from when the controller becomes aware of the breach - not from when the breach occurred. The notification goes to the supervisory authority. Affected data subjects must also be notified without undue delay if the breach is likely to result in a high risk to their rights and freedoms. Pre-drafted templates and a tested runbook are the difference between meeting the deadline and missing it."}},{"@type":"Question","name":"What does Article 30 require in a Record of Processing Activities?","acceptedAnswer":{"@type":"Answer","text":"For each processing activity: the purposes, the categories of data subjects and personal data, the categories of recipients, transfers to third countries with applicable safeguards, retention periods, and a general description of security measures. Organisations under 250 employees are technically exempt unless processing is regular, likely to risk rights, or involves special category data - but most operational teams maintain a RoPA anyway because every other GDPR step references it."}}]}]}) }} />
      </Head>

      <style jsx global>{`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,var(--accent),var(--accent-light));z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgb(var(--accent-rgb) / .1);color:var(--cy);border:1px solid rgb(var(--accent-rgb) / .25)}
    .badge-bl{background:rgb(var(--purple-rgb) / .1);color:var(--bl);border:1px solid rgb(var(--purple-rgb) / .25)}
    .badge-gr{background:rgb(var(--green-rgb) / .1);color:var(--gr);border:1px solid rgb(var(--green-rgb) / .25)}
    .hero-h1{font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .hero-h1 em{font-style:italic;color:var(--cy)}
    .hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-light));display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgb(var(--accent-rgb) / .3)}
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
    .art a.inline-link{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgb(var(--accent-rgb) / 0.3)}
    .art a.inline-link:hover{border-bottom-color:var(--cy)}
    .art ul{margin:0 0 1.4rem;padding:0;list-style:none}
    .art ul li{padding:.4rem 0 .4rem 1.4rem;position:relative;font-size:.95rem;color:var(--tb);border-bottom:1px solid var(--bs)}
    .art ul li:last-child{border-bottom:none}
    .art ul li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:2px;background:var(--cy);opacity:.7}
    .art ul li strong{color:var(--tx)}
    .data-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .data-table{width:100%;border-collapse:collapse;min-width:640px}
    .data-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .data-table td{padding:.7rem 1rem;font-size:.84rem;color:var(--tm);border-bottom:1px solid var(--bs);vertical-align:top}
    .data-table tr:last-child td{border-bottom:none}
    .data-table td:first-child{color:var(--tx);font-weight:600;white-space:nowrap}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgb(var(--accent-rgb) / .06);border:1px solid rgb(var(--accent-rgb) / .2)}
    .co-warn{background:rgb(var(--yellow-rgb) / .06);border:1px solid rgb(var(--yellow-rgb) / .2)}
    .co-info{background:rgb(var(--purple-rgb) / .07);border:1px solid rgb(var(--purple-rgb) / .2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .case-study{background:linear-gradient(135deg,rgb(var(--purple-rgb) / .06),rgb(var(--bg-card-rgb) / .95));border:1px solid rgb(var(--purple-rgb) / .25);border-radius:16px;padding:1.85rem 1.95rem;margin:2.25rem 0;border-left:3px solid var(--bl)}
    .case-study-tag{display:inline-block;padding:.3rem .75rem;background:rgb(var(--purple-rgb) / .12);color:var(--bl);border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;margin-bottom:.85rem;text-transform:uppercase}
    .case-study h4{font-size:1.1rem;font-weight:700;color:var(--tx);margin-bottom:.85rem}
    .case-study p{font-size:.93rem;line-height:1.7;color:var(--tb);margin-bottom:.85rem!important}
    .case-study p:last-child{margin-bottom:0!important}
    .roadmap-step{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.5rem 0;border-left:3px solid var(--cy);position:relative}
    .roadmap-step-head{display:flex;align-items:center;gap:.75rem;margin-bottom:.85rem;flex-wrap:wrap}
    .roadmap-step-num{display:inline-flex;align-items:center;padding:.25rem .7rem;background:var(--cy);color:white;border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;font-family:'JetBrains Mono',monospace}
    .roadmap-step-time{font-size:.75rem;color:var(--tm);font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .roadmap-step h3{font-size:1.15rem;font-weight:700;color:var(--tx);margin:0 0 .65rem;letter-spacing:-.01em}
    .roadmap-step p{font-size:.95rem;color:var(--tb);line-height:1.7;margin-bottom:.8rem!important}
    .roadmap-step p:last-child{margin-bottom:0!important}
    .roadmap-step .step-tip{background:rgb(var(--accent-rgb) / 0.05);border-left:2px solid var(--cy);padding:.65rem .85rem;border-radius:0 6px 6px 0;font-size:.85rem;color:var(--tb);margin-top:.85rem;line-height:1.6}
    .roadmap-step .step-tip strong{color:var(--cy);font-weight:700}
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
    .cta-banner{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--accent-rgb) / .03));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
    .cta-banner h3{font-size:1.5rem;font-weight:700;color:var(--tx);margin-bottom:.7rem}
    .cta-banner p{font-size:.92rem;color:var(--tb);margin-bottom:1.5rem!important;max-width:550px;margin-left:auto;margin-right:auto}
    .cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:1.5rem}
    .btn-p{background:var(--cy);color:#fff;padding:.7rem 1.6rem;border-radius:8px;font-weight:700;font-size:.87rem;text-decoration:none;display:inline-block;transition:background .2s}
    .btn-p:hover{background:var(--cy2)}
    .share-strip{display:flex;align-items:center;gap:.65rem;justify-content:center;flex-wrap:wrap}
    .share-lbl{font-size:.77rem;color:var(--tm)}
    .share-btn{display:flex;align-items:center;gap:5px;padding:.4rem .9rem;border-radius:8px;font-size:.75rem;font-weight:600;cursor:pointer;border:1px solid var(--bo);background:transparent;color:var(--tb);text-decoration:none;transition:all .2s;font-family:var(--sans)}
    .share-btn:hover{border-color:var(--cy);color:var(--cy)}
    .sb{position:sticky;top:24px}
    .sb-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.35rem;margin-bottom:1.1rem}
    .sb-title{font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:.85rem}
    .sb-toc{list-style:none;display:flex;flex-direction:column;gap:.22rem}
    .sb-toc a{display:block;padding:.4rem .65rem;border-radius:8px;color:var(--tm);text-decoration:none;font-size:.79rem;transition:all .2s;border-left:2px solid transparent}
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgb(var(--accent-rgb) / .07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy)}
    .sb-cta{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--accent-rgb) / .03));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-size:.98rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgb(var(--accent-rgb) / .4);z-index:50}
    #btt.vis{display:flex}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}}
`}</style>
      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>GDPR</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🇪🇺 GDPR</span>
          <span className="badge badge-bl">⚖️ Phase 2 - Core Concepts</span>
          <span className="badge badge-gr">🗺️ Roadmap</span>
        </div>
        <h1 className="hero-h1">GDPR Compliance Roadmap - <em>A Practical Step-by-Step Guide</em></h1>
        <p className="hero-sub">What to do, in what order, when you do not have a year and a million euros to spend on it. Six steps, in the right sequence, get you 80% of the way there. The rest is maintenance.</p>

        <div className="author-strip">
          <div className="avatar">GK</div>
          <div className="author-info">
            <div className="aname">Gauri Khatate</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Privacy &amp; Compliance Writer</span><span className="dot">·</span><span id="read-time">📖 6 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=480&fit=crop" alt="GDPR compliance roadmap - six sequenced steps from inventory to breach response" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">The forty-seven-point checklist takes nine months. The version that fits a real product team's quarter is six steps in this order - and the patience to actually run them in this order.</p>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">6</div><div className="stat-lbl">Steps That Get You<br/>80% of the Way</div></div>
          <div className="stat-card"><div className="stat-num">72 hrs</div><div className="stat-lbl">Breach Notification<br/>Window</div></div>
          <div className="stat-card"><div className="stat-num">30 days</div><div className="stat-lbl">Default Subject<br/>Request Response</div></div>
          <div className="stat-card"><div className="stat-num">1</div><div className="stat-lbl">Decision That Unlocks<br/>Every Other Step</div></div>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#one-step-most-skip">The One Step Most Teams Skip</a>
            <a href="#step-1">Step 1 - Map What You Have</a>
            <a href="#step-2">Step 2 - Anchor to Legal Basis</a>
            <a href="#step-3">Step 3 - Tell Users What You Do</a>
            <a href="#step-4">Step 4 - Wire Up the Rights</a>
            <a href="#step-5">Step 5 - Lock the Perimeter</a>
            <a href="#step-6">Step 6 - Plan for the Worst</a>
            <a href="#dpo">When You Need a DPO</a>
            <a href="#90-vs-12">90-Day vs 12-Month</a>
            <a href="#sequencing">Sequencing Beats Comprehensiveness</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgb(var(--accent-rgb) / 0.3)',paddingLeft:'1.2rem'}}>
            Every GDPR consultancy will hand you a checklist with forty-seven points on it. The problem is not the points - most of them are real. The problem is that running them in order takes nine months, three full-time hires, and a budget that does not exist outside a Fortune 500. The version that fits inside a real product team's quarter looks different. It is about which steps unblock the others, what can wait, and where the marginal hour of effort buys the most regulator-defensibility.
          </p>

          <section id="one-step-most-skip">
            <h2>The One Step Most Teams Try to <em>Skip</em></h2>
            <p>You cannot write a privacy notice without knowing what data you have. You cannot pick legal bases without knowing what you process. You cannot run a DPIA on processing you have not mapped. <strong>The data inventory - boring, time-consuming, often delegated to whoever has the least leverage to refuse - is the prerequisite for everything else.</strong></p>
            <p>Skip it and you will redo the next five steps when you eventually find out about that analytics tool, that legacy database, or that vendor someone added without the privacy team knowing. The teams that get GDPR done in a quarter rather than a year share one thing - they did the inventory first, before anything else got drafted.</p>
            <div className="case-study">
              <span className="case-study-tag">🔵 The Cost of Skipping</span>
              <h4>Real-World - A Fintech's Four-Month "Sprint" That Reset to Zero</h4>
              <p>A B2B fintech we audited last year had spent four months on what they called their "GDPR sprint" - three rounds of privacy notice rewrites, a beautifully designed cookie banner, an updated DPA template, and a workflow tool for data subject requests. What they had not done was map their actual data flows.</p>
              <p>When the inventory finally got done, it surfaced eleven processing activities that the privacy notice did not mention, three vendors operating without DPAs in place, and one analytics flow sending customer data to a US-based provider with no transfer mechanism on file. <strong>Most of the privacy notice had to be rewritten, the DPA template extended to cover the missing vendors, and one vendor relationship terminated</strong> because the transfer arrangement could not be retrofitted. Doing the inventory first would have collapsed those four months into about six weeks.</p>
            </div>
          </section>

          <section id="six-steps">
            <h2>The Six Steps, <em>In Order</em></h2>

            <div id="step-1" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 01</span>
                <span className="roadmap-step-time">Days 1–30</span>
              </div>
              <h3>Map What You Have</h3>
              <p>Personal data inventory. Every system, every flow, every vendor that touches it. For each processing activity you are answering four questions: what data, whose data, where it lives, who has access. The output is a Record of Processing Activities (RoPA) under Article 30 - and even if you are under the 250-employee threshold where it is technically optional, you want one. Every later step references it.</p>
              <div className="step-tip">
                <strong>Pragmatic shortcut →</strong> Do not aim for completeness on day one. Map the top 20% of processing activities by volume and sensitivity, get them right, then expand. A partial RoPA you actually update beats a complete one nobody touches.
              </div>
            </div>

            <div id="step-2" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 02</span>
                <span className="roadmap-step-time">Days 30–45</span>
              </div>
              <h3>Anchor Each Activity to a Legal Basis</h3>
              <p>For every processing activity in the RoPA, pick one of the six Article 6 bases. We covered the choice in detail in our piece on <a href="https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing" className="inline-link">legal basis for processing</a>. Document the rationale, especially for legitimate interests, where you need a Legitimate Interest Assessment on file.</p>
              <p>This step takes longer than people expect - about half the activities in a typical inventory turn out to need basis revision, and a few turn out to need the processing itself restructured. Where consent is the basis, the four-condition test from <a href="https://seccomply.net/resources/blog/consent-under-gdpr" className="inline-link">consent under GDPR</a> applies - and most existing flows fail at least one condition on first audit.</p>
            </div>

            <div id="step-3" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 03</span>
                <span className="roadmap-step-time">Days 30–60</span>
              </div>
              <h3>Tell Users What You Do</h3>
              <p>Privacy notice updates under Articles 13 and 14. Plain language, layered structure (summary at the top, detail underneath), at the point of collection. The bar is not "we technically published it" - it is whether a non-lawyer would understand what is happening to their data.</p>
              <p><strong>If your team's privacy lawyer is the only person who can explain the notice, the notice fails the test.</strong> A useful sense check is to read the notice aloud to a friend who does not work in tech. If they cannot summarise what data the company collects and why in two sentences, it needs another rewrite.</p>
            </div>

            <div id="step-4" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 04</span>
                <span className="roadmap-step-time">Days 45–75</span>
              </div>
              <h3>Wire Up the Rights</h3>
              <p>Data subject rights under Articles 15–22 - access, erasure, portability, rectification, objection, restriction. We walked through all eight in <a href="https://seccomply.net/resources/blog/gdpr-data-subject-rights" className="inline-link">data subject rights under GDPR</a>. Most teams build the intake form and forget the fulfilment plumbing.</p>
              <p>The harder work is being able to actually find a user's data across all systems within 30 days, and to actually delete it from production, backups, and analytics when asked. <strong>If your fulfilment plan is "we will figure it out when a request lands," the first request will tell you exactly where the gaps are.</strong></p>
            </div>

            <div id="step-5" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 05</span>
                <span className="roadmap-step-time">Days 60–90</span>
              </div>
              <h3>Lock the Perimeter</h3>
              <p>Article 32 security measures, vendor DPAs, sub-processor due diligence, international transfer mechanisms (Standard Contractual Clauses and Transfer Impact Assessments where data leaves the EEA). Vendor management connects to broader <a href="https://seccomply.net/resources/blog/tprm-best-practices" className="inline-link">third-party risk management practices</a>.</p>
              <p>This is where most programmes silently fail an audit - the security controls exist, but the documentation linking them to GDPR's "appropriate technical and organisational measures" requirement does not. <strong>The fix is mostly paperwork. Paperwork that has to actually exist.</strong></p>
            </div>

            <div id="step-6" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 06</span>
                <span className="roadmap-step-time">Days 75–90</span>
              </div>
              <h3>Plan for the Worst</h3>
              <p>Breach response runbook with a 72-hour clock that starts from awareness, not from the incident. Pre-drafted notification templates for the supervisory authority and for affected data subjects. A clear decision tree for what counts as a notifiable breach (most security incidents do not, but the team needs to know how to tell). And - crucially - a tabletop exercise to find out where the runbook breaks before a real incident does. Our <a href="https://seccomply.net/resources/blog/tabletop-security-exercise" className="inline-link">tabletop exercise guide</a> covers how to run one.</p>
            </div>
          </section>

          <section id="dpo">
            <h2>When You Actually <em>Need a DPO</em></h2>
            <p>The Data Protection Officer requirement under Article 37 applies in three specific cases:</p>
            <ul>
              <li><strong>You are a public authority</strong> (this rarely surprises anyone)</li>
              <li><strong>Your core activities involve large-scale systematic monitoring</strong> - adtech platforms, surveillance technology, large social platforms</li>
              <li><strong>Your core activities involve large-scale processing of special category data</strong> - health platforms, large HR systems, biometric identity providers</li>
            </ul>
            <p>Most B2B SaaS companies do not meet any of these. Appointing a DPO when you do not legally need one is fine, but it is a commitment to ongoing independence and reporting requirements that smaller teams often regret.</p>
            <div className="callout co-info">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>The Privacy Lead Middle Path</strong>
                <p>The middle path most pragmatic companies take is a Privacy Lead - an internal accountable owner who runs the programme without the formal DPO designation. Keeps the accountability, skips the structural overhead. If you cross the threshold later, you can elevate the role then. India's DPDP Act has a similar tiered structure - covered in <a href="https://seccomply.net/resources/blog/data-protection-officer-dpo-dpdp" style={{color:'var(--cy)'}}>do you need a DPO under DPDP</a>.</p>
              </div>
            </div>
          </section>

          <section id="90-vs-12">
            <h2>90-Day Quick Start vs <em>12-Month Maturity</em></h2>
            <p>There are two credible timelines for getting a GDPR programme to working order, and they answer different questions. The quick start gets you defensible - enough that an enterprise customer's security review passes and a regulator's first question gets a coherent answer. The maturity path gets you efficient - enough that the programme runs on its own without consuming a quarter of someone's calendar every time something changes.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Workstream</th><th>90-Day Quick Start</th><th>12-Month Maturity Path</th></tr></thead>
                <tbody>
                  <tr><td>Inventory &amp; RoPA</td><td>Top 20% of processing activities mapped</td><td>Full RoPA across every system, kept current</td></tr>
                  <tr><td>Legal Basis</td><td>Documented per major activity</td><td>LIA on file for every legitimate-interest claim</td></tr>
                  <tr><td>Privacy Notices</td><td>Updated to match the live RoPA</td><td>Layered, plain-language, version-controlled</td></tr>
                  <tr><td>Subject Rights</td><td>Intake form + manual fulfilment</td><td>Self-serve where possible, automated discovery</td></tr>
                  <tr><td>Vendors &amp; Security</td><td>DPAs in place for the top 10 vendors</td><td>Continuous vendor risk monitoring, transfer reviews</td></tr>
                  <tr><td>Breach Response</td><td>Runbook + one tabletop exercise</td><td>Drills, automated detection-to-notification flow</td></tr>
                </tbody>
              </table>
            </div>
            <p>The mistake is trying to build the maturity column before the quick-start column is working. Gold-plated programmes fall apart the day a regulator asks the basic question, because the basics never got nailed down. <strong>Sequence matters at the timeline level too.</strong></p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>What Teams Routinely Under-Budget</strong>
                <p>The visible work - privacy notices, cookie banners, the DPA template - is the cheap part of GDPR compliance. The expensive parts are the ones that show up after launch. Vendor reviews multiply with every new procurement. Subject-request fulfilment at scale (the 100th request costs more than the first). Inventory and RoPA maintenance as the business changes. Budgeting only for the launch programme leaves you with a snapshot that goes stale within two quarters. The companies that stay compliant treat GDPR work as ongoing process, not a one-time project - and budget the maintenance line accordingly.</p>
              </div>
            </div>
          </section>

          <section id="sequencing">
            <h2>Sequencing Beats <em>Comprehensiveness</em></h2>
            <p>The single most consistent failure pattern we see - teams trying to do every GDPR thing at once. Nothing reaches operational quality, six months in there is a polished privacy notice attached to a RoPA that is three iterations behind reality, and the team is reworking the same documents for the third time.</p>
            <p>The teams that succeed pick the inventory, ship it to working quality, then move to the next step. They accept that the programme will look uneven for a quarter, because <strong>uneven-but-real is what scales. Comprehensive-but-fragile does not survive contact with the first audit, the first acquisition, or the first breach.</strong></p>
          </section>

          <section id="final">
            <h2>Final <em>Thought</em></h2>
            <p>GDPR is one of the rare regulatory programmes that actually pays for itself if you sequence it right. The inventory gives engineering a useful map of the business. The RoPA makes vendor due diligence faster. The subject-request plumbing forces you to build user-data tooling that turns out to be useful for support, deletion, migration, and eventually for AI training data hygiene.</p>
            <p>The maturity path stops feeling like a compliance tax and starts feeling like infrastructure - but only if you start with the right step, and only if you let the rest follow it instead of running them in parallel. <strong>The roadmap is not forty-seven points. It is six steps in this order - and the patience to actually run them in this order.</strong></p>
            <p>If you are running a programme that has to comply with GDPR alongside India's DPDP Act, the cross-mapping in <a href="https://seccomply.net/resources/blog/gdpr-vs-dpdp" className="inline-link">GDPR vs DPDP - key differences every Indian company must know</a> is the next read.</p>
          </section>

          <div className="cta-banner">
            <h3>Need Help Sequencing Your GDPR Programme?</h3>
            <p>SecComply runs the inventory, builds the RoPA, anchors the legal bases, and stands up the subject-rights and breach-response plumbing - sequenced to your team's actual capacity, not a generic forty-seven-point checklist. The first 90 days deliver a defensible position. The next 90 deliver maturity. No wasted rework in between.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Roadmap Review →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/gdpr-compliance-roadmap" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/gdpr-compliance-roadmap&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How long does it take to implement GDPR?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>For a focused product team, a defensible GDPR position can be reached in roughly 90 days following a sequenced six-step approach - inventory first, then legal basis, notices, subject rights, security perimeter, and breach response. Full operational maturity (continuous vendor monitoring, automated subject-request fulfilment, ongoing RoPA maintenance) typically takes 12 months. Trying to do everything in parallel rather than in sequence is the most consistent failure pattern.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the first step in a GDPR compliance programme?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The personal data inventory - every system, every flow, every vendor that touches personal data. The output is a Record of Processing Activities (RoPA) under Article 30. Without this, the next five steps will all need redoing once the missing data flows surface. Teams that try to draft privacy notices or pick legal bases before completing the inventory consistently rebuild that work later.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Do I need a Data Protection Officer (DPO)?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Article 37 requires a DPO in three specific cases - public authorities, organisations whose core activities involve large-scale systematic monitoring, and organisations whose core activities involve large-scale processing of special category data. Most B2B SaaS companies do not meet any of these. The pragmatic alternative is a Privacy Lead - an internal accountable owner without the formal DPO designation and its independence requirements.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the GDPR breach notification deadline?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>72 hours from when the controller becomes aware of the breach - not from when the breach occurred. The notification goes to the supervisory authority. Affected data subjects must also be notified without undue delay if the breach is likely to result in a high risk to their rights and freedoms. Pre-drafted templates and a tested runbook are the difference between meeting the deadline and missing it.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What does Article 30 require in a Record of Processing Activities?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>For each processing activity: the purposes, the categories of data subjects and personal data, the categories of recipients, transfers to third countries with applicable safeguards, retention periods, and a general description of security measures. Organisations under 250 employees are technically exempt unless processing is regular, likely to risk rights, or involves special category data - but most operational teams maintain a RoPA anyway because every other GDPR step references it.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can I outsource GDPR compliance to a vendor?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Operationally, parts of it - vendors can run inventories, draft notices, build subject-request workflows, and stand up DPAs. Legally, no - accountability stays with the controller. The most useful arrangement is a vendor that does the heavy implementation work alongside an internal Privacy Lead who owns the programme, makes the strategic decisions, and answers to the regulator if it ever comes to that.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What happens if I miss the 72-hour breach notification window?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The supervisory authority must still be notified - late notification with reasoned justification is better than no notification - but you accept additional regulatory risk. Late notification is itself a separate infringement under Article 33 and can compound the fine for the underlying breach. The 72-hour clock makes pre-built templates and a tested runbook genuinely critical, not optional.</p></div>
            </div>
          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#one-step-most-skip" className="toc-link">The Step Most Skip</a></li>
              <li><a href="#step-1" className="toc-link">Step 1 - Inventory</a></li>
              <li><a href="#step-2" className="toc-link">Step 2 - Legal Basis</a></li>
              <li><a href="#step-3" className="toc-link">Step 3 - Notices</a></li>
              <li><a href="#step-4" className="toc-link">Step 4 - Subject Rights</a></li>
              <li><a href="#step-5" className="toc-link">Step 5 - Perimeter</a></li>
              <li><a href="#step-6" className="toc-link">Step 6 - Breach Response</a></li>
              <li><a href="#dpo" className="toc-link">Need a DPO?</a></li>
              <li><a href="#90-vs-12" className="toc-link">90-Day vs 12-Month</a></li>
              <li><a href="#sequencing" className="toc-link">Sequencing Beats All</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 GDPR Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/gdpr-explained-startups">GDPR Explained for Startups</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-self-assessment">GDPR Self-Assessment</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-counts-personal-data-gdpr">What Counts as Personal Data?</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-business-impact-beyond-fines">Business Impact Beyond Fines</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-controller-processor-sub-processor">Controller vs Processor</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-data-subject-rights">Data Subject Rights</a></li>
              <li><a href="https://seccomply.net/resources/blog/hidden-data-trails-gdpr">Hidden Data Trails</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing">Legal Basis</a></li>
              <li><a href="https://seccomply.net/resources/blog/consent-under-gdpr">Consent Under GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-compliance-roadmap">▶ Compliance Roadmap</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">GDPR</span><span className="tag">Roadmap</span><span className="tag">RoPA</span><span className="tag">Article 30</span><span className="tag">DPO</span><span className="tag">Breach Response</span><span className="tag">90-Day Plan</span><span className="tag">Implementation</span></div>
          </div>
          <div className="sb-cta">
            <h4>Sequencing Your Programme?</h4>
            <p>Quick-start in 90 days, maturity in 12 months - without the rework.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
