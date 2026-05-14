import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001Stage1vsStage2() {
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
        <title>ISO 27001 Stage 1 vs Stage 2 Audit -What to Expect at Each | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A side-by-side breakdown of ISO 27001 Stage 1 and Stage 2 certification audits. What the auditor actually does at each stage, common findings at each, the 4-8 week gap between them, and how to close Stage 1 nonconformities before Stage 2 starts." />
        <meta name="keywords" content="ISO 27001 Stage 1 audit, ISO 27001 Stage 2 audit, certification audit, ISO 27001 audit stages, Stage 1 vs Stage 2, certification body audit, ISO 27001 audit findings, what to expect ISO audit" />
        <meta property="og:title" content="ISO 27001 Stage 1 vs Stage 2 Audit -What to Expect at Each" />
        <meta property="og:description" content="Stage 1 is a documentation review and readiness check. Stage 2 is the effectiveness audit. The full breakdown of what auditors do at each, common findings, and the closure cycle in between." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-stage-1-vs-stage-2" />
        <meta property="article:published_time" content="2026-05-10" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-stage-1-vs-stage-2" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 Stage 1 vs Stage 2 Audit -What to Expect at Each","description":"Side-by-side breakdown of the two certification audit stages -what auditors do, common findings, and the closure cycle in between.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-10","dateModified":"2026-05-10","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-stage-1-vs-stage-2","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"Stage 1 vs Stage 2","item":"https://seccomply.net/resources/blog/iso-27001-stage-1-vs-stage-2"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can Stage 1 and Stage 2 be combined?","acceptedAnswer":{"@type":"Answer","text":"No. ISO/IEC 17021-1 -the standard that certification bodies operate under -explicitly requires Stage 1 and Stage 2 to be separated by a time interval. The interval allows the organisation to close Stage 1 findings and accumulate the operational evidence Stage 2 needs to sample. Most certification bodies require at least 4 weeks between stages; some require 6 or 8."}},{"@type":"Question","name":"What is the typical gap between Stage 1 and Stage 2?","acceptedAnswer":{"@type":"Answer","text":"4-8 weeks is typical, though some certification bodies will permit longer gaps (up to 6 months) when major findings need closure. The minimum is set by the certification body, not by the standard, but realistically you need at least 4 weeks to close documentation gaps and 8 weeks to demonstrate fresh operational evidence on any controls flagged at Stage 1."}},{"@type":"Question","name":"Can certification be denied at Stage 1?","acceptedAnswer":{"@type":"Answer","text":"Yes. If Stage 1 surfaces fundamental gaps -missing mandatory documents, scope undefined, no risk assessment performed -the certification body may recommend not proceeding to Stage 2 until those gaps are closed. This is rare for organisations that have done a proper internal audit beforehand."}},{"@type":"Question","name":"What is a Stage 1 nonconformity?","acceptedAnswer":{"@type":"Answer","text":"Stage 1 findings are typically conformity gaps -documents missing, processes undefined, mandatory clauses not addressed. They are usually classed as Minor NCs at Stage 1 because operational evidence has not yet been tested. The exception is missing mandatory documents (the SoA, risk methodology, scope), which can be Major NCs."}},{"@type":"Question","name":"Do all Stage 1 findings need to be closed before Stage 2?","acceptedAnswer":{"@type":"Answer","text":"Major Stage 1 findings must be closed before Stage 2 starts. Minor findings should ideally be closed but can sometimes be carried into Stage 2 with documented corrective action plans, depending on the certification body. Stage 2 will re-examine any unresolved Stage 1 issue and escalate it if the gap persists."}}]}]}) }} />
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
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
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
    .data-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .data-table{width:100%;border-collapse:collapse;min-width:640px}
    .data-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .data-table td{padding:.7rem 1rem;font-size:.84rem;color:var(--tm);border-bottom:1px solid var(--bs);vertical-align:top}
    .data-table tr:last-child td{border-bottom:none}
    .data-table td:first-child{color:var(--tx);font-weight:600;white-space:nowrap}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .stage-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    @media(max-width:760px){.stage-grid{grid-template-columns:1fr}}
    .stage-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem}
    .stage-col.s1{border-top:3px solid var(--bl)}
    .stage-col.s2{border-top:3px solid var(--cy)}
    .stage-tag{display:inline-block;padding:.25rem .75rem;border-radius:5px;font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.85rem;font-family:'JetBrains Mono',monospace}
    .stage-col.s1 .stage-tag{background:rgba(129,140,248,0.12);color:var(--bl)}
    .stage-col.s2 .stage-tag{background:rgba(232,99,43,0.12);color:var(--cy)}
    .stage-col h3{font-size:1.1rem;font-weight:700;color:var(--tx);margin:0 0 .8rem}
    .stage-col h4{font-size:.82rem;font-weight:700;color:var(--cy);margin:1rem 0 .5rem;letter-spacing:.04em;text-transform:uppercase}
    .stage-col p{font-size:.88rem;color:var(--tb);line-height:1.65;margin:0 0 .8rem!important}
    .stage-col ul{margin:0!important}
    .stage-col ul li{font-size:.83rem!important;padding:.3rem 0 .3rem 1.1rem!important}
    .compare-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
    .compare-table th{background:var(--bgc);padding:.85rem 1rem;text-align:left;font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--cy);border-bottom:1px solid var(--bo)}
    .compare-table td{padding:.85rem 1rem;font-size:.88rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .compare-table tr:last-child td{border-bottom:none}
    .compare-table td:first-child{color:var(--tx);font-weight:600;white-space:nowrap}
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
        <span>Stage 1 vs Stage 2</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">ISO 27001</span>
          <span className="badge badge-bl">Certification Audit</span>
          <span className="badge badge-gr">Audit Prep</span>
        </div>
        <h1 className="hero-h1">ISO 27001 Stage 1 vs Stage 2 Audit -<em>What to Expect</em> at Each</h1>
        <p className="hero-sub">Stage 1 is a documentation review and readiness check. Stage 2 is the effectiveness audit. They are not the same auditor doing the same job twice -they are designed differently, find different things, and require different preparation. The full breakdown.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Cybersecurity Expert</span></div>
            <div className="adate"><span>May 10, 2026</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1280&h=520&fit=crop" alt="Two-stage audit process visualization" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Two stages, two different audits. Confusing them is the single biggest source of preparation mistakes.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#why-two" className="toc-link">1. Why There Are Two Stages</a>
            <a href="#stage-1" className="toc-link">2. Stage 1 -Documentation & Readiness</a>
            <a href="#stage-2" className="toc-link">3. Stage 2 -Effectiveness Audit</a>
            <a href="#the-gap" className="toc-link">4. The Gap Between Stages</a>
            <a href="#comparison" className="toc-link">5. Side-by-Side Comparison</a>
            <a href="#prepare" className="toc-link">6. How to Prepare for Each</a>
            <a href="#faq" className="toc-link">7. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">2</div><div className="stat-lbl">Required Stages</div></div>
          <div className="stat-card"><div className="stat-num">1-3</div><div className="stat-lbl">Days at Stage 1</div></div>
          <div className="stat-card"><div className="stat-num">2-5</div><div className="stat-lbl">Days at Stage 2</div></div>
          <div className="stat-card"><div className="stat-num">4-8wk</div><div className="stat-lbl">Gap Between</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Most certification confusion comes from one assumption -that the audit is one event. It is not. The certification audit is two events, run by the same auditor weeks apart, looking at different things and finding different problems. Teams that prepare for "the audit" as a single event prepare for one of the stages well and the other badly.</p>

          <p>This piece walks through what each stage actually is, what auditors do at each, the gap between them, and the preparation tasks that change depending on which stage is next. If you have completed your <Link href="/resources/blog/iso-27001-internal-audit" className="inline-link">internal audit</Link> and want to know what the certification body will do differently, this is the next read.</p>

          <section id="why-two">
            <h2>1. Why There Are <em>Two Stages</em></h2>
            <p>The two-stage audit structure is required by ISO/IEC 17021-1 -the standard that governs how certification bodies operate. The split exists for a specific reason: it gives the audit cycle a built-in checkpoint. Stage 1 tests whether the organisation is ready to be audited at depth; Stage 2 does the depth audit.</p>

            <p>Why split it at all? Because effectiveness cannot be tested in a single sitting. Effectiveness requires evidence over time -operating logs, change records, training completion across a period, incident response history. Stage 1 establishes the design and the readiness; Stage 2 tests the operation. The gap between them lets the organisation:</p>
            <ul>
              <li><strong>Close Stage 1 findings</strong> -usually documentation or process gaps that need fixing before deeper testing makes sense.</li>
              <li><strong>Accumulate evidence</strong> -controls that were just implemented need time to operate so Stage 2 can sample meaningful records.</li>
              <li><strong>Confirm scope</strong> -Stage 1 may identify scope ambiguity that needs to be tightened before Stage 2 testing.</li>
            </ul>

            <div className="callout co-info">
              <div className="co-icon">📌</div>
              <div className="co-body">
                <strong>Same certification body, usually the same lead auditor</strong>
                <p>Stage 1 and Stage 2 are normally conducted by the same certification body, and the same lead auditor where possible. This is intentional -the auditor builds context at Stage 1 they use at Stage 2. Switching auditors between stages is rare and reduces audit efficiency.</p>
              </div>
            </div>
          </section>

          <section id="stage-1">
            <h2>2. Stage 1 -<em>Documentation & Readiness</em></h2>
            <p>Stage 1 is sometimes called the "readiness review" or the "documentation audit." Both names are accurate but understate what it actually does.</p>

            <h3>What the auditor does at Stage 1</h3>
            <p>Onsite or remote, typically 1-3 days. The auditor will:</p>
            <ul>
              <li><strong>Read your documentation set.</strong> All 14 mandatory documents, plus the Annex A control policies you have implemented. They will check version control, approval signatures, and content alignment with the standard.</li>
              <li><strong>Verify scope.</strong> Confirm the ISMS scope statement matches what they observe on the ground. If the scope says "production SaaS infrastructure" but a sample of systems is hosted on a different cloud account, that is a scope clarity finding.</li>
              <li><strong>Review the SoA.</strong> Spot-check controls. Where excluded, look for justification. Where included, look for evidence the control is at least designed (operating evidence comes at Stage 2).</li>
              <li><strong>Confirm management commitment.</strong> Look at management review minutes, evidence of executive sponsorship, internal audit programme document.</li>
              <li><strong>Plan Stage 2 sampling.</strong> Based on what they read, decide which areas to focus on in Stage 2 and what evidence to request in advance.</li>
            </ul>

            <h3>What auditors find at Stage 1</h3>
            <p>Stage 1 findings are usually conformity gaps in the design -documentation that does not exist or does not meet the standard's requirements. Common findings:</p>
            <ul>
              <li><strong>SoA missing implementation status.</strong> Controls listed as "included" but with no indication of whether they actually operate. Stage 2 will not be able to sample what is unclear at Stage 1.</li>
              <li><strong>Scope statement too narrow or too broad.</strong> Scope that excludes obvious in-scope assets or includes things you cannot evidence. Either way the auditor will ask for clarification before proceeding.</li>
              <li><strong>Mandatory document missing.</strong> Risk assessment methodology not documented, internal audit programme document not produced, management review procedure not written.</li>
              <li><strong>Stale documents.</strong> Documents last reviewed two or three years ago, signed by people who have left.</li>
              <li><strong>Evidence of executive engagement weak.</strong> Management review minutes that are perfunctory or missing required inputs.</li>
            </ul>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>Stage 1 outcomes that matter</strong>
                <p>The Stage 1 report concludes with one of three outcomes: ready to proceed to Stage 2, ready to proceed with corrective actions in progress, or not ready. The third outcome is rare for organisations that have done a thorough internal audit. The second is common and is not failure -it just means the gap window absorbs Stage 1 findings before Stage 2.</p>
              </div>
            </div>
          </section>

          <section id="stage-2">
            <h2>3. Stage 2 -<em>The Effectiveness Audit</em></h2>
            <p>Stage 2 is the audit most people imagine when they think "ISO 27001 audit." It is the deep test. Onsite or hybrid, typically 2-5 days for small-to-medium organisations, longer for larger ones.</p>

            <h3>What the auditor does at Stage 2</h3>
            <p>The auditor does not re-read what was already covered at Stage 1. They test whether what is documented is actually happening.</p>
            <ul>
              <li><strong>Interview control owners.</strong> The auditor walks through scenarios with the people responsible for each control. "Talk me through how you handle a vendor onboarding." "Show me what happens when a high-severity vulnerability is discovered." They listen for whether the actual practice matches the documented process.</li>
              <li><strong>Sample records over the audit period.</strong> For each control, request 3-5 examples spanning the audit window -typically the last 3-6 months. Examples: 5 access reviews, 3 incident records, 4 change requests for production, 2 vendor security reviews.</li>
              <li><strong>Test technical controls.</strong> Depending on the scope, the auditor may ask to see logging in action, MFA enforcement on production systems, backup restoration evidence, encryption configuration. They are not a penetration tester; they verify the control is operating as described.</li>
              <li><strong>Verify Stage 1 findings closed.</strong> Any corrective action plan from Stage 1 will be re-tested. If a Stage 1 Minor NC was "training records incomplete," they will sample current training records to confirm the gap has been addressed.</li>
              <li><strong>Conduct a closing meeting.</strong> Present findings, agree classifications, set timelines for corrective action.</li>
            </ul>

            <h3>What auditors find at Stage 2</h3>
            <p>Stage 2 findings are usually effectiveness gaps -controls that are documented but not operating as described, or operating with gaps in execution. Common findings:</p>
            <ul>
              <li><strong>Records that do not match the documented frequency.</strong> Policy says quarterly access reviews; evidence shows the last one was 8 months ago.</li>
              <li><strong>Inconsistent application of a control.</strong> Some teams follow the change management process; others bypass it. A sampling-based audit will surface the inconsistency.</li>
              <li><strong>Operational gaps in incident response.</strong> Procedure says incidents are logged within 24 hours; sample of incidents shows median time-to-log is 4 days.</li>
              <li><strong>Logging that exists but is never reviewed.</strong> Logs are captured; but the documented log review process produces no records of actual reviews.</li>
              <li><strong>Awareness training not completed.</strong> The training programme exists, completion records exist, but coverage is below 100% and there is no remediation tracking.</li>
              <li><strong>Risk treatment plan stale.</strong> Risks identified at the start of the project are still showing the same status months later, indicating no active treatment management.</li>
            </ul>
          </section>

          <section id="the-gap">
            <h2>4. The Gap Between Stages -<em>What to Use It For</em></h2>
            <p>The 4-8 week gap is not waiting time. It is the closure window. What happens in it largely decides whether Stage 2 goes smoothly.</p>

            <h3>Week 1-2: Stage 1 findings closure</h3>
            <p>Any Major NC from Stage 1 must be closed. Any Minor NC should be closed where possible. For each: documented corrective action, evidence of implementation, brief impact statement. Send the closure pack to the certification body at least 2 weeks before Stage 2.</p>

            <h3>Week 2-4: Operational evidence accumulation</h3>
            <p>Any control that was newly implemented for Stage 1 will have minimal operating evidence. Use the gap to run another cycle of each -another round of access reviews, another batch of training completions, another vulnerability scan, another incident response drill if you can naturally schedule one. Stage 2 wants to see operating evidence, not just freshly-deployed controls.</p>

            <h3>Week 4-6: Stage 2 prep</h3>
            <p>Build a Stage 2 evidence pack. For every control in the SoA, identify the 3-5 records that demonstrate operation. Pre-position them so the auditor can be shown evidence within minutes, not hours. This is not about hiding things -it is about respecting the auditor's time and showing the ISMS is organised.</p>

            <h3>Week 6-8: Final readiness check</h3>
            <p>A final internal mini-audit focused only on the areas Stage 1 flagged. If Stage 1 said the access review process was weak, run a fresh access review and verify it now meets the standard. If Stage 1 said incident response timing was unclear, conduct a small tabletop and capture the timing record.</p>

            <div className="callout co-key">
              <div className="co-icon">🎯</div>
              <div className="co-body">
                <strong>The gap is a project sprint, not a holiday</strong>
                <p>Teams that treat the gap as breathing room arrive at Stage 2 with Stage 1 findings still open. Teams that treat it as a 4-8 week sprint to close findings and produce evidence arrive at Stage 2 ready. The certificate goes to the second group.</p>
              </div>
            </div>
          </section>

          <section id="comparison">
            <h2>5. Side-by-Side <em>Comparison</em></h2>

            <div className="stage-grid">
              <div className="stage-col s1">
                <span className="stage-tag">STAGE 1</span>
                <h3>Documentation & Readiness</h3>
                <h4>Duration</h4>
                <p>1-3 days onsite or remote</p>
                <h4>Focus</h4>
                <p>Design -does the ISMS exist on paper, is it ready for testing</p>
                <h4>What they read</h4>
                <ul>
                  <li>14 mandatory documents</li>
                  <li>SoA + risk treatment plan</li>
                  <li>Internal audit reports</li>
                  <li>Management review minutes</li>
                  <li>Annex A control policies</li>
                </ul>
                <h4>What they look for</h4>
                <ul>
                  <li>Missing documents</li>
                  <li>Scope ambiguity</li>
                  <li>Stale or unapproved documents</li>
                  <li>Weak management engagement</li>
                </ul>
                <h4>Outcome</h4>
                <p>Ready / Ready with corrective actions / Not ready</p>
              </div>

              <div className="stage-col s2">
                <span className="stage-tag">STAGE 2</span>
                <h3>Effectiveness Audit</h3>
                <h4>Duration</h4>
                <p>2-5 days onsite or hybrid (longer for large orgs)</p>
                <h4>Focus</h4>
                <p>Operation -does the ISMS actually work, with evidence</p>
                <h4>What they sample</h4>
                <ul>
                  <li>Access reviews</li>
                  <li>Change requests</li>
                  <li>Incident records</li>
                  <li>Training completion</li>
                  <li>Vulnerability scans</li>
                  <li>Vendor reviews</li>
                </ul>
                <h4>What they look for</h4>
                <ul>
                  <li>Inconsistent control application</li>
                  <li>Records not matching documented frequency</li>
                  <li>Operational gaps in execution</li>
                  <li>Stage 1 findings not closed</li>
                </ul>
                <h4>Outcome</h4>
                <p>Recommend certification / Recommend with conditions / Do not recommend</p>
              </div>
            </div>

            <p>The biggest practical difference: Stage 1 tests what exists; Stage 2 tests what happens. You can pass Stage 1 with a brand-new ISMS that has been operating for one week. You cannot pass Stage 2 the same way -the auditor needs records spanning at least the previous 3 months, and ideally longer.</p>
          </section>

          <section id="prepare">
            <h2>6. How to <em>Prepare</em> for Each</h2>

            <h3>Before Stage 1</h3>
            <ul>
              <li>All 14 mandatory documents finalised, version-controlled, approved, dated.</li>
              <li>SoA complete with status for every Annex A control (included / excluded with justification).</li>
              <li>Internal audit completed across the full ISMS scope. Findings closed or in active corrective action.</li>
              <li>At least one management review meeting documented with the standard's required inputs.</li>
              <li>Risk register populated, treatment plan in active management.</li>
              <li>Stage 1 evidence pack assembled -a folder structure mapping each clause and control to the document that satisfies it.</li>
            </ul>

            <h3>Before Stage 2</h3>
            <ul>
              <li>All Stage 1 Major NCs closed; Minor NCs closed where possible with documented corrective action plans for the rest.</li>
              <li>At least 3 months of operating evidence for every control in the SoA. Fresh evidence accumulated during the gap window for newly-implemented controls.</li>
              <li>Stage 2 evidence pack ready -pre-positioned records the auditor can request and receive within minutes.</li>
              <li>Control owners briefed on what to expect in interviews. Walk-through scenarios rehearsed once or twice.</li>
              <li>Technical evidence prepared -logging dashboards accessible, sample backup restorations, sample MFA enforcement evidence.</li>
              <li>A clear contact for each control area so the auditor knows who to ask, without senior management acting as a bottleneck.</li>
            </ul>

            <div className="callout co-info">
              <div className="co-icon">💡</div>
              <div className="co-body">
                <strong>The dry-run interview</strong>
                <p>Stage 2 will involve the auditor interviewing control owners. Run a 30-minute dry-run interview with each owner before Stage 2 -a colleague playing the auditor, asking the kinds of questions an auditor would ask. This surfaces nervous-presentation patterns ("we always do X") that turn into findings ("but the sample shows you did not"). Better to find this in a dry-run than in the real interview.</p>
              </div>
            </div>
          </section>

          <div className="cta-bottom">
            <h3>Need help getting both stages right?</h3>
            <p>SecComply prepares organisations for both stages of the certification audit -pre-Stage 1 readiness check, gap-window corrective action management, Stage 2 evidence pack, and dry-run interviews with control owners.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book certification prep →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Can Stage 1 and Stage 2 be combined?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>No. ISO/IEC 17021-1 -the standard that certification bodies operate under -explicitly requires Stage 1 and Stage 2 to be separated by a time interval. The interval allows the organisation to close Stage 1 findings and accumulate the operational evidence Stage 2 needs to sample. Most certification bodies require at least 4 weeks between stages; some require 6 or 8.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>What is the typical gap between Stage 1 and Stage 2?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>4-8 weeks is typical, though some certification bodies will permit longer gaps (up to 6 months) when major findings need closure. The minimum is set by the certification body, not by the standard, but realistically you need at least 4 weeks to close documentation gaps and 8 weeks to demonstrate fresh operational evidence on any controls flagged at Stage 1.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Can certification be denied at Stage 1?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Yes. If Stage 1 surfaces fundamental gaps -missing mandatory documents, scope undefined, no risk assessment performed -the certification body may recommend not proceeding to Stage 2 until those gaps are closed. This is rare for organisations that have done a proper internal audit beforehand.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>What is a Stage 1 nonconformity?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Stage 1 findings are typically conformity gaps -documents missing, processes undefined, mandatory clauses not addressed. They are usually classed as Minor NCs at Stage 1 because operational evidence has not yet been tested. The exception is missing mandatory documents (the SoA, risk methodology, scope), which can be Major NCs.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Do all Stage 1 findings need to be closed before Stage 2?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Major Stage 1 findings must be closed before Stage 2 starts. Minor findings should ideally be closed but can sometimes be carried into Stage 2 with documented corrective action plans, depending on the certification body. Stage 2 will re-examine any unresolved Stage 1 issue and escalate it if the gap persists.</p></div>
            </div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Certification Audit Prep</div>
            <h3>Both stages, both right</h3>
            <p>Pre-Stage 1 readiness check, gap-window management, Stage 2 evidence pack, dry-run interviews.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book prep call →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">ISO 27001 Series</div>
            <ul>
              <li><Link href="/resources/blog/iso-27001-implementation-roadmap">Implementation Roadmap</Link></li>
              <li><Link href="/resources/blog/iso-27001-internal-audit">Internal Audit Guide</Link></li>
              <li><Link href="/resources/blog/iso-27001-certification-timeline">Certification Timeline</Link></li>
              <li><Link href="/resources/blog/iso-27001-mandatory-documents">Mandatory Documents</Link></li>
              <li><Link href="/resources/blog/iso-27001-clause-by-clause">Clause by Clause</Link></li>
              <li><Link href="/resources/blog/soa-iso-27001-complete-guide">Statement of Applicability</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
