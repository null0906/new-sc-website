import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001InternalAudit() {
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
        <title>ISO 27001 Internal Audit -How to Run It Before the Certification Audit | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A practical guide to running the ISO 27001 Clause 9.2 internal audit before the certification body arrives. Audit programme design, auditor independence, sampling methods, finding classification, and the corrective action loop that closes nonconformities before Stage 2." />
        <meta name="keywords" content="ISO 27001 internal audit, Clause 9.2 audit, ISMS internal audit, audit programme, auditor independence, nonconformity, major NC, minor NC, OFI, ISO 27001 certification preparation" />
        <meta property="og:title" content="ISO 27001 Internal Audit -How to Run It Before Certification" />
        <meta property="og:description" content="The Clause 9.2 internal audit is the dress rehearsal. Run it badly and Stage 2 will be uncomfortable. The full method -programme, planning, sampling, findings, corrective action." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-internal-audit" />
        <meta property="article:published_time" content="2026-05-06" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-internal-audit" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 Internal Audit -How to Run It Before the Certification Audit","description":"The complete method for running the Clause 9.2 internal audit -programme design, sampling, finding classification, and corrective action.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-06","dateModified":"2026-05-06","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-internal-audit","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"ISO 27001 Internal Audit","item":"https://seccomply.net/resources/blog/iso-27001-internal-audit"}]},{"@type":"HowTo","name":"How to Run an ISO 27001 Internal Audit","description":"Six-stage method to run the Clause 9.2 internal audit and close findings before Stage 2.","step":[{"@type":"HowToStep","position":1,"name":"Build the Audit Programme","text":"Design a multi-year audit plan that covers every ISMS clause and every applicable Annex A control, with risk-weighted frequency."},{"@type":"HowToStep","position":2,"name":"Assign Independent Auditors","text":"Auditors must not audit their own work. Either rotate roles internally or engage an external auditor for areas where independence cannot be established."},{"@type":"HowToStep","position":3,"name":"Plan the Audit","text":"Issue an audit plan -scope, criteria, methods, attendees, dates. Share at least one week in advance so auditees can prepare evidence."},{"@type":"HowToStep","position":4,"name":"Execute the Audit","text":"Conduct opening meeting, evidence collection through interviews and document review, sampling against the criteria, daily wrap-ups, closing meeting."},{"@type":"HowToStep","position":5,"name":"Classify Findings","text":"Each finding rated as Major NC (systemic failure or missing requirement), Minor NC (single instance), OFI (opportunity for improvement), or Conformity."},{"@type":"HowToStep","position":6,"name":"Drive Corrective Action","text":"For every NC: root cause analysis, corrective action plan, implementation, and effectiveness verification. Close before Stage 2 begins."}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Who can perform the internal audit?","acceptedAnswer":{"@type":"Answer","text":"Anyone competent who is independent of the activity being audited. The auditor must not have designed, implemented, or operationally owned the control they are auditing. For small organisations where this is hard to achieve internally, external auditors are commonly used for at least the first cycle."}},{"@type":"Question","name":"How often must the internal audit run?","acceptedAnswer":{"@type":"Answer","text":"ISO 27001 Clause 9.2 requires audits at planned intervals -it does not prescribe a frequency. Common practice is to audit the full ISMS scope across a 1-2 year programme, with higher-risk areas audited more frequently. The full scope must be covered before the certification audit and re-covered before each surveillance and recertification."}},{"@type":"Question","name":"What is the difference between a Major and Minor nonconformity?","acceptedAnswer":{"@type":"Answer","text":"A Major NC is a systemic failure, a missing requirement, or a finding that materially undermines the ISMS -for example, no risk assessment was conducted, or a mandatory document is missing. A Minor NC is a single instance of nonconformity within an otherwise-functioning control -for example, one training record is missing from a sample of twenty. Major NCs typically block certification; Minor NCs may be carried over with a corrective action plan."}},{"@type":"Question","name":"Can the internal audit be skipped if the gap assessment has been done?","acceptedAnswer":{"@type":"Answer","text":"No. A gap assessment is forward-looking (what needs to be built) and uses different methodology than an audit (what is operating effectively). The internal audit is required by Clause 9.2 and tests the same things the certification auditor will test. Skipping it almost guarantees Stage 2 surprises."}},{"@type":"Question","name":"How long does the internal audit take?","acceptedAnswer":{"@type":"Answer","text":"For a small-to-medium organisation, a full ISMS internal audit typically takes 5-10 auditor-days spread across 2-4 weeks. This includes planning, fieldwork, reporting, and follow-up on findings. Larger organisations may need 15-25 auditor-days. The audit itself is days; the corrective action cycle that follows can take weeks."}}]}]}) }} />
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
    .roadmap-step{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.5rem 0;border-left:3px solid var(--cy)}
    .roadmap-step-head{display:flex;align-items:center;gap:.75rem;margin-bottom:.85rem;flex-wrap:wrap}
    .roadmap-step-num{display:inline-flex;align-items:center;padding:.25rem .7rem;background:var(--cy);color:white;border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;font-family:'JetBrains Mono',monospace}
    .roadmap-step-time{font-size:.75rem;color:var(--tm);font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .roadmap-step h3{font-size:1.15rem;font-weight:700;color:var(--tx);margin:0 0 .65rem;letter-spacing:-.01em}
    .roadmap-step p{font-size:.95rem;color:var(--tb);line-height:1.7;margin-bottom:.8rem!important}
    .roadmap-step p:last-child{margin-bottom:0!important}
    .nc-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.85rem;margin:1.5rem 0}
    @media(max-width:700px){.nc-grid{grid-template-columns:1fr}}
    .nc-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.25rem 1.4rem;border-left:3px solid var(--cy)}
    .nc-card.r-maj{border-left-color:var(--rd)}
    .nc-card.r-min{border-left-color:var(--am)}
    .nc-card.r-ofi{border-left-color:var(--bl)}
    .nc-card.r-ok{border-left-color:var(--gr)}
    .nc-tag{display:inline-block;padding:.22rem .65rem;border-radius:5px;font-size:.65rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;margin-bottom:.6rem;font-family:'JetBrains Mono',monospace}
    .nc-card.r-maj .nc-tag{background:rgb(var(--red-rgb) / 0.12);color:var(--rd)}
    .nc-card.r-min .nc-tag{background:rgb(var(--yellow-rgb) / 0.12);color:var(--am)}
    .nc-card.r-ofi .nc-tag{background:rgb(var(--purple-rgb) / 0.12);color:var(--bl)}
    .nc-card.r-ok .nc-tag{background:rgb(var(--green-rgb) / 0.12);color:var(--gr)}
    .nc-card h4{font-size:1rem;font-weight:700;color:var(--tx);margin:0 0 .45rem}
    .nc-card p{font-size:.85rem;line-height:1.6;color:var(--tb);margin:0!important}
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
    .cta-bottom{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--bg-card-rgb) / .95));border:1px solid var(--bo);border-radius:16px;padding:2rem;text-align:center;margin:3rem 0}
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
        <span>Internal Audit</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">ISO 27001</span>
          <span className="badge badge-bl">Clause 9.2</span>
          <span className="badge badge-gr">Audit Prep</span>
        </div>
        <h1 className="hero-h1">ISO 27001 Internal Audit -How to Run It <em>Before</em> Certification</h1>
        <p className="hero-sub">The Clause 9.2 internal audit is the dress rehearsal for Stage 2. Run it well and the certification body finds little new. Skip it and Stage 2 becomes a surprise factory. The full method -programme, planning, sampling, finding classification, corrective action.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Cybersecurity Expert</span></div>
            <div className="adate"><span>May 6, 2026</span><span className="dot">·</span><span id="read-time">📖 9 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1280&h=520&fit=crop" alt="Auditor reviewing documents and laptop" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">The internal audit is required by Clause 9.2 -but its real value is finding what the certification auditor would have found, while you still have time to fix it.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#why-clause-92" className="toc-link">1. Why Clause 9.2 Exists</a>
            <a href="#programme" className="toc-link">2. Building the Audit Programme</a>
            <a href="#independence" className="toc-link">3. Auditor Independence</a>
            <a href="#planning" className="toc-link">4. Planning the Audit</a>
            <a href="#executing" className="toc-link">5. Executing the Audit</a>
            <a href="#findings" className="toc-link">6. Classifying Findings</a>
            <a href="#corrective" className="toc-link">7. The Corrective Action Loop</a>
            <a href="#faq" className="toc-link">8. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">9.2</div><div className="stat-lbl">The Mandatory Clause</div></div>
          <div className="stat-card"><div className="stat-num">5-10</div><div className="stat-lbl">Auditor-Days Typical</div></div>
          <div className="stat-card"><div className="stat-num">4-6</div><div className="stat-lbl">Weeks Before Stage 2</div></div>
          <div className="stat-card"><div className="stat-num">100%</div><div className="stat-lbl">ISMS Scope Covered</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Of all the requirements in ISO 27001, the internal audit is the one most likely to be done badly -or skipped entirely. Teams that have just finished implementing the ISMS often treat the internal audit as a tick-box exercise: send someone to look at the documents, write a one-page report, schedule the external audit. That approach almost guarantees painful surprises at Stage 2.</p>

          <p>The internal audit done properly is a small certification audit run by your own people. Same methodology, same sampling, same finding classification. Its purpose is to find what the external auditor would have found -while you still have time to fix it. This guide walks through the full method, from programme design to corrective action closure. If you have just completed the work in our <Link href="/resources/blog/iso-27001-implementation-roadmap" className="inline-link">implementation roadmap</Link>, this is the next stage.</p>

          <section id="why-clause-92">
            <h2>1. Why <em>Clause 9.2</em> Exists</h2>
            <p>Clause 9.2 of ISO 27001:2022 requires the organisation to conduct internal audits at planned intervals to determine whether the ISMS:</p>
            <ul>
              <li><strong>Conforms</strong> to the organisation's own requirements for its ISMS, and to the requirements of ISO 27001.</li>
              <li><strong>Is effectively implemented and maintained.</strong></li>
            </ul>
            <p>That second clause is the important one. Conformity is about whether the design exists; effectiveness is about whether the design works. The external auditor at Stage 2 will test both -and they will start by reading your internal audit reports to see whether you already found the gaps.</p>

            <div className="callout co-info">
              <div className="co-icon">📌</div>
              <div className="co-body">
                <strong>The external auditor reads your internal audit reports first</strong>
                <p>If your internal audits show "no findings" but the external auditor immediately finds three nonconformities, your audit programme itself is suspect. A clean internal audit followed by clean Stage 2 is the goal -but a clean internal audit followed by messy Stage 2 raises questions about whether the internal audit was real.</p>
              </div>
            </div>
          </section>

          <section id="programme">
            <h2>2. Building the <em>Audit Programme</em></h2>
            <p>The audit programme is the multi-year master plan. It is one of the 14 mandatory documents -see our <Link href="/resources/blog/iso-27001-mandatory-documents" className="inline-link">mandatory documents guide</Link>. The programme covers what gets audited, when, by whom, and how often.</p>

            <h3>What to cover</h3>
            <p>The programme must cover the entire ISMS scope -every applicable management system clause and every Annex A control selected in your SoA. Nothing can be missed across a complete cycle.</p>

            <h3>Frequency</h3>
            <p>Higher-risk areas get audited more often. A reasonable starting model:</p>
            <ul>
              <li><strong>Annual:</strong> Management system clauses (4 through 10) -these underpin everything else, so they get the most scrutiny.</li>
              <li><strong>Annual:</strong> Top-risk controls -typically access management, change management, incident response, supplier security, and cryptography.</li>
              <li><strong>18-24 months:</strong> Lower-risk operational controls -physical security where relevant, classification, awareness training mechanics.</li>
              <li><strong>Triggered:</strong> Any control where a previous audit found a Major NC, or which is the subject of an incident in the audit period.</li>
            </ul>

            <h3>Programme document structure</h3>
            <p>A simple table works: rows for clauses and controls, columns for audit cycle year (Year 1, Year 2, Year 3). Mark each cell with the planned audit month. The certification audit, surveillance audits, and recertification audits are added to the same calendar.</p>
          </section>

          <section id="independence">
            <h2>3. Auditor <em>Independence</em></h2>
            <p>The single most common Clause 9.2 finding is independence failure -auditors auditing their own work, or work they have a stake in. ISO 19011 (the audit guidance standard) is explicit: an auditor must not audit an activity for which they are operationally responsible.</p>

            <p>In a small organisation this is the hardest constraint. If the security manager designed the controls, implemented them, and operates them, who audits them? The practical answers:</p>
            <ul>
              <li><strong>Role rotation.</strong> Person A audits domain B; person B audits domain A. Works when you have at least two security-literate staff who can audit each other's areas.</li>
              <li><strong>Internal auditor from a different function.</strong> A trained internal auditor from finance, IT operations, or quality can audit information security, provided they have the technical competence to understand the controls.</li>
              <li><strong>External internal auditor.</strong> Hire an external auditor to perform the internal audit. This is common for the first certification cycle and for organisations under 50 people. The auditor reports to your management; their findings are your findings. This is fully acceptable under ISO 27001 and is the cleanest way to establish independence.</li>
            </ul>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>What does not work</strong>
                <p>The consultant who implemented your ISMS cannot then run your internal audit. Same firm performing implementation and internal audit is an independence failure that the certification auditor will challenge.</p>
              </div>
            </div>
          </section>

          <section id="planning">
            <h2>4. <em>Planning</em> Each Audit</h2>
            <p>Each audit in the programme needs its own audit plan, issued in advance. The plan defines:</p>

            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Field</th><th>Content</th></tr></thead>
                <tbody>
                  <tr><td>Scope</td><td>Which clauses, controls, departments, locations</td></tr>
                  <tr><td>Criteria</td><td>The standard (ISO 27001:2022) plus your own policies and procedures</td></tr>
                  <tr><td>Objectives</td><td>What the audit is intended to determine (conformity, effectiveness, or both)</td></tr>
                  <tr><td>Methods</td><td>Document review, interview, observation, sampling</td></tr>
                  <tr><td>Dates</td><td>Start, end, and key milestones</td></tr>
                  <tr><td>Auditors</td><td>Lead auditor and any team members, with independence statement</td></tr>
                  <tr><td>Auditees</td><td>Departments and roles to be interviewed</td></tr>
                </tbody>
              </table>
            </div>

            <p>Issue the plan at least one week ahead. Auditees should have time to prepare evidence, not be ambushed. Surprise is not a feature of internal audits.</p>
          </section>

          <section id="executing">
            <h2>5. <em>Executing</em> the Audit</h2>

            <div className="roadmap-step">
              <div className="roadmap-step-head"><span className="roadmap-step-num">STEP 1</span><span className="roadmap-step-time">Opening Meeting · 30 mins</span></div>
              <h3>Confirm scope and methodology</h3>
              <p>Lead auditor reviews the plan with the auditee. Confirms scope, criteria, schedule, communication protocols. Establishes what evidence will be sampled and what level of access is needed. Sets the closing meeting time.</p>
            </div>

            <div className="roadmap-step">
              <div className="roadmap-step-head"><span className="roadmap-step-num">STEP 2</span><span className="roadmap-step-time">Document Review · 0.5-1 day</span></div>
              <h3>Read the relevant policies and procedures</h3>
              <p>Auditor reads all documents in scope and notes any gaps between what the documents say and what the standard requires. Findings at this stage are usually conformity issues -the document is missing, incomplete, or contradicts the standard.</p>
            </div>

            <div className="roadmap-step">
              <div className="roadmap-step-head"><span className="roadmap-step-num">STEP 3</span><span className="roadmap-step-time">Interviews · 1-2 days</span></div>
              <h3>Talk to the people who actually do the work</h3>
              <p>Auditor interviews the control owners and operators. Asks open questions: "Walk me through how you handle a security incident." Listens for whether the actual practice matches the documented procedure. A common finding emerges here -the procedure says one thing, but the team does something else, usually because the procedure is out of date.</p>
            </div>

            <div className="roadmap-step">
              <div className="roadmap-step-head"><span className="roadmap-step-num">STEP 4</span><span className="roadmap-step-time">Evidence Sampling · 1-2 days</span></div>
              <h3>Test against the criteria</h3>
              <p>For each control, sample records over the audit period. Examples: "Show me 5 user-access reviews from the last 6 months." "Show me the last 3 change requests for production systems." "Show me 2 internal audit reports from the previous cycle." Sample sizes are small -typically 3-5 instances per control -but selected to be representative.</p>
            </div>

            <div className="roadmap-step">
              <div className="roadmap-step-head"><span className="roadmap-step-num">STEP 5</span><span className="roadmap-step-time">Daily Wrap-Up · 15 mins</span></div>
              <h3>Share findings as they emerge</h3>
              <p>End each audit day with a brief catch-up so the auditee has visibility. No surprises at the closing meeting. If a Major NC is emerging, the auditee should know mid-week, not in the final report.</p>
            </div>

            <div className="roadmap-step">
              <div className="roadmap-step-head"><span className="roadmap-step-num">STEP 6</span><span className="roadmap-step-time">Closing Meeting · 1 hour</span></div>
              <h3>Present findings and agree timeline</h3>
              <p>Lead auditor presents draft findings -each with reference to the criterion, the evidence, and the gap. Auditee can challenge findings on factual grounds (auditor misunderstood the process or missed evidence). Final report follows within 5 working days. Corrective action timelines agreed.</p>
            </div>
          </section>

          <section id="findings">
            <h2>6. <em>Classifying</em> Findings</h2>
            <p>Every observation falls into one of four categories. The classification is not arbitrary -it determines what corrective action is needed and how the external auditor will react when they read your audit report.</p>

            <div className="nc-grid">
              <div className="nc-card r-maj">
                <span className="nc-tag">Major NC</span>
                <h4>Major Nonconformity</h4>
                <p>Systemic failure, missing requirement, or finding that materially undermines the ISMS. Examples: no risk assessment performed, mandatory document missing, control absent from SoA but operating. Blocks certification.</p>
              </div>
              <div className="nc-card r-min">
                <span className="nc-tag">Minor NC</span>
                <h4>Minor Nonconformity</h4>
                <p>Single instance of nonconformity in an otherwise functioning control. Examples: one training record missing from a sample of twenty, one access review delayed by two weeks. Does not block certification but must be closed.</p>
              </div>
              <div className="nc-card r-ofi">
                <span className="nc-tag">OFI</span>
                <h4>Opportunity for Improvement</h4>
                <p>Not a nonconformity. A practice could be improved or strengthened, but it currently meets the requirement. Examples: risk register could include more impact dimensions, training could be more frequent. Does not require corrective action but informs continual improvement.</p>
              </div>
              <div className="nc-card r-ok">
                <span className="nc-tag">Conformity</span>
                <h4>Conformity</h4>
                <p>Control meets the requirement, with evidence. The vast majority of findings in a well-prepared audit. Worth recording explicitly -it is positive evidence the auditor can refer to at Stage 2.</p>
              </div>
            </div>

            <div className="callout co-key">
              <div className="co-icon">🎯</div>
              <div className="co-body">
                <strong>Major vs Minor -the test</strong>
                <p>If the gap means the requirement is not being met at all, it is Major. If the gap is a single instance within a functioning process, it is Minor. The test is "does the control work?" not "how serious does this feel?"</p>
              </div>
            </div>
          </section>

          <section id="corrective">
            <h2>7. The <em>Corrective Action</em> Loop</h2>
            <p>A finding without a corrective action plan is half a finding. Clause 10.1 requires the organisation to react to nonconformities and take action to control them, deal with the consequences, and prevent recurrence.</p>

            <h3>For every NC, four artefacts</h3>
            <ul>
              <li><strong>Root cause analysis.</strong> Why did this happen? Five-Whys is the most common technique. Stop when you reach a cause you can act on. "Training records were missing" -why? "The HR system did not record completion." Why? "The integration to the LMS broke in February and was not noticed." Why? "There was no alert on integration failure." That is the root cause; the integration alert is the corrective action.</li>
              <li><strong>Corrective action plan.</strong> What will be done, by whom, by when. Specific, dated, owned. "Implement integration health check by 30 June 2026" -not "improve training processes."</li>
              <li><strong>Implementation.</strong> The action is taken. Evidence captured.</li>
              <li><strong>Effectiveness verification.</strong> 30-60 days after implementation, verify the action worked and the NC is not recurring. Only then is the NC closed.</li>
            </ul>

            <h3>Timing relative to Stage 2</h3>
            <p>All Major NCs from the internal audit must be closed before Stage 2. Minor NCs should ideally be closed too, but can sometimes be carried into Stage 2 with documented corrective action plans, depending on the certification body. OFIs do not need closure but are useful inputs to the continual improvement programme.</p>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>The "we will fix it" trap</strong>
                <p>A corrective action plan that says "we will retrain staff" with no date, owner, or evidence requirement is not a corrective action. Auditors at Stage 2 will read your internal audit findings, look at your corrective actions, and ask to see the evidence. If the evidence is not there, the original Minor NC becomes a Stage 2 Major.</p>
              </div>
            </div>
          </section>

          <div className="cta-bottom">
            <h3>Need an independent internal audit before Stage 2?</h3>
            <p>SecComply runs ISO 27001 internal audits as external internal auditors -fully Clause 9.2 compliant, independent, and run to the same standard as the certification audit. Findings come with corrective action recommendations and we track them to closure before your Stage 2.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book an internal audit →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Who can perform the internal audit?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Anyone competent who is independent of the activity being audited. The auditor must not have designed, implemented, or operationally owned the control they are auditing. For small organisations where this is hard to achieve internally, external auditors are commonly used for at least the first cycle.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>How often must the internal audit run?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>ISO 27001 Clause 9.2 requires audits at planned intervals -it does not prescribe a frequency. Common practice is to audit the full ISMS scope across a 1-2 year programme, with higher-risk areas audited more frequently. The full scope must be covered before the certification audit and re-covered before each surveillance and recertification.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>What is the difference between a Major and Minor nonconformity?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>A Major NC is a systemic failure, a missing requirement, or a finding that materially undermines the ISMS -for example, no risk assessment was conducted, or a mandatory document is missing. A Minor NC is a single instance of nonconformity within an otherwise-functioning control -for example, one training record is missing from a sample of twenty. Major NCs typically block certification; Minor NCs may be carried over with a corrective action plan.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Can the internal audit be skipped if the gap assessment has been done?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>No. A gap assessment is forward-looking (what needs to be built) and uses different methodology than an audit (what is operating effectively). The internal audit is required by Clause 9.2 and tests the same things the certification auditor will test. Skipping it almost guarantees Stage 2 surprises.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>How long does the internal audit take?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>For a small-to-medium organisation, a full ISMS internal audit typically takes 5-10 auditor-days spread across 2-4 weeks. This includes planning, fieldwork, reporting, and follow-up on findings. Larger organisations may need 15-25 auditor-days. The audit itself is days; the corrective action cycle that follows can take weeks.</p></div>
            </div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Independent Internal Audit</div>
            <h3>Run by external auditors</h3>
            <p>Fully Clause 9.2 compliant, independent of your implementation, run to the same standard the certification body will apply.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book an audit →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">ISO 27001 Series</div>
            <ul>
              <li><Link href="/resources/blog/iso-27001-implementation-roadmap">Implementation Roadmap</Link></li>
              <li><Link href="/resources/blog/iso-27001-gap-assessment">Gap Assessment Guide</Link></li>
              <li><Link href="/resources/blog/iso-27001-mandatory-documents">Mandatory Documents</Link></li>
              <li><Link href="/resources/blog/iso-27001-clause-by-clause">Clause by Clause</Link></li>
              <li><Link href="/resources/blog/soa-iso-27001-complete-guide">Statement of Applicability</Link></li>
              <li><Link href="/resources/blog/iso-27001-risk-assessment">Risk Assessment</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
