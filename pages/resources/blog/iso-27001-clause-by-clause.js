import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001ClauseByClause() {
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
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08 }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>ISO 27001 Clause by Clause - What Each Clause Actually Requires | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="ISO 27001 Clauses 4 to 10 are the management system core - and the part most teams find harder than Annex A. Plain-English walkthrough of every clause, what it requires, the documents auditors expect, and how each shows up in Stage 1 and Stage 2 audits." />
        <meta name="keywords" content="ISO 27001 clauses explained, ISO 27001 clause 4, clause 5, clause 6, clause 7, clause 8, clause 9, clause 10, ISO 27001 management system clauses, ISMS clauses, ISO 27001 documentation requirements, ISO 27001 audit clauses, mandatory clauses ISO 27001" />
        <meta property="og:title" content="ISO 27001 Clause by Clause - What Each Clause Actually Requires" />
        <meta property="og:description" content="Plain-English walkthrough of Clauses 4-10. What each requires, the documents auditors expect, and how each clause is tested in Stage 1 and Stage 2 audits." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-clause-by-clause" />
        <meta property="article:published_time" content="2026-04-27" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-clause-by-clause" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 Clause by Clause - What Each Clause Actually Requires","description":"Plain-English walkthrough of ISO 27001 Clauses 4 to 10 - the management system core. What each requires, the documents auditors expect, and how each is tested in audit.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-04-27","dateModified":"2026-04-27","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-clause-by-clause","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"ISO 27001 Clause by Clause","item":"https://seccomply.net/resources/blog/iso-27001-clause-by-clause"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many clauses does ISO 27001:2022 have?","acceptedAnswer":{"@type":"Answer","text":"ISO 27001:2022 has 10 main clauses. Clauses 1 to 3 are introductory (scope, normative references, terms and definitions) and contain no auditable requirements. Clauses 4 to 10 are the management system clauses - the core of the standard - and contain all the auditable requirements for the ISMS itself, separate from the Annex A controls."}},{"@type":"Question","name":"What is the difference between ISO 27001 clauses and Annex A controls?","acceptedAnswer":{"@type":"Answer","text":"Clauses 4 to 10 define the management system: how you set up, run, monitor, and improve your ISMS. They cover governance, risk, planning, performance evaluation, and improvement. Annex A controls are the specific security measures you select to treat identified risks - encryption, access control, training, incident response, and so on. The clauses are mandatory; Annex A controls are selected based on your risk assessment and documented in the Statement of Applicability."}},{"@type":"Question","name":"Are all ISO 27001 clauses mandatory?","acceptedAnswer":{"@type":"Answer","text":"Yes. Clauses 4 to 10 are entirely mandatory and contain no optional requirements. Every shall statement in those clauses must be addressed for certification. This is different from Annex A, where individual controls can be excluded with documented justification. There is no exclusion mechanism for the management system clauses themselves."}},{"@type":"Question","name":"Which ISO 27001 clause is most often failed in audits?","acceptedAnswer":{"@type":"Answer","text":"Clause 9 (Performance Evaluation) is consistently flagged. Many organisations build the ISMS, run it for a few months, and arrive at certification without enough internal audit cycles, management reviews, or measurable monitoring data. Clause 9 demands evidence of operation over time - exactly what early-stage ISMS programmes lack. Building a 90-day operational track record before Stage 2 is one of the most reliable ways to pass."}},{"@type":"Question","name":"How long does it take to satisfy all ISO 27001 clauses?","acceptedAnswer":{"@type":"Answer","text":"For a startup with no prior management system, allow 4 to 9 months to build, document, and operate clauses 4 to 10 to a level that supports certification. The fastest path: complete clauses 4 to 7 in months 1-2 (governance, scope, planning, support), implement Annex A controls and clause 8 in months 3-4, and accumulate clause 9 evidence (audit, review, measurement) over months 4-6 before Stage 2."}}]}]}) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#E8632B;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(232,99,43,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#E8632B,#FF8A50);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(232,99,43,.1);color:var(--cy);border:1px solid rgba(232,99,43,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
    .badge-am{background:rgba(255,183,3,.1);color:var(--am);border:1px solid rgba(255,183,3,.25)}
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
    .data-table td:first-child{color:var(--tx);font-weight:600}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-danger{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .co-gr{background:rgba(6,214,160,.05);border:1px solid rgba(6,214,160,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .clause-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.7rem 1.7rem 1.5rem;margin:1.75rem 0;border-left:4px solid var(--cy);position:relative}
    .clause-num{position:absolute;top:-12px;left:1.6rem;background:var(--cy);color:#fff;font-weight:800;font-size:.74rem;letter-spacing:.06em;padding:.3rem .8rem;border-radius:6px}
    .clause-title{font-size:1.2rem;font-weight:700;color:var(--tx);margin-top:.4rem;margin-bottom:.4rem}
    .clause-summary{font-size:.95rem;color:var(--tb);margin-bottom:1rem;line-height:1.75}
    .clause-meta-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.85rem;margin:1rem 0}
    .clause-meta-item{background:rgba(255,255,255,0.02);border:1px solid var(--bs);border-radius:8px;padding:.75rem .9rem}
    .clause-meta-label{font-size:.66rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--cy);margin-bottom:.3rem}
    .clause-meta-val{font-size:.82rem;color:var(--tb);line-height:1.55}
    .scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .scope-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem}
    .scope-col.sc-in{border-top:3px solid var(--gr)}
    .scope-col.sc-out{border-top:3px solid #ff4d6d}
    .scope-col h4{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.8rem}
    .sc-in h4{color:var(--gr)}
    .sc-out h4{color:#ff4d6d}
    .scope-col ul li{font-size:.82rem;padding:.28rem 0 .28rem 1.1rem}
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
    .cta-banner{background:linear-gradient(135deg,rgba(232,99,43,.08),rgba(232,99,43,.03));border:1px solid rgba(232,99,43,.25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
    .cta-banner h3{font-size:1.5rem;font-weight:700;color:var(--tx);margin-bottom:.7rem}
    .cta-banner p{font-size:.92rem;color:var(--tb);margin-bottom:1.5rem!important;max-width:500px;margin-left:auto;margin-right:auto}
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
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgba(232,99,43,.07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy)}
    .sb-cta{background:linear-gradient(135deg,rgba(232,99,43,.08),rgba(232,99,43,.03));border:1px solid rgba(232,99,43,.25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-size:.98rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(232,99,43,.4);z-index:50}
    #btt.vis{display:flex}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:900px){.scope-grid{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}}
`}</style>
      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>ISO 27001</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🌍 ISO 27001</span>
          <span className="badge badge-bl">📑 Management System</span>
          <span className="badge badge-gr">📚 Standard Walkthrough</span>
        </div>
        <h1 className="hero-h1">ISO 27001 Clause by Clause - <em>What Each Clause Actually Requires</em></h1>
        <p className="hero-sub">Most teams over-prepare for Annex A and under-prepare for Clauses 4 to 10. But the management system clauses are where Stage 1 audits begin and where most non-conformities are raised. Plain-English walkthrough of every clause, what it requires, the documents auditors expect, and how each shows up in audit.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 12 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=480&fit=crop" alt="ISO 27001 management system clauses 4 to 10 walkthrough ISMS requirements" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">Clauses 4 to 10 define the management system itself - how the ISMS is governed, planned, supported, run, measured, and improved. Annex A is the control library; the clauses are the operating rules.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs><pattern id="pgs7" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(232,99,43,0.04)"/></pattern></defs>
            <rect width="960" height="280" fill="url(#pgs7)"/>
            <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">ISO 27001:2022 - The 7 Management System Clauses (4–10)</text>
            {[
              {n:"4",t:"Context",sub:"Org & scope",col:"#E8632B",x:30},
              {n:"5",t:"Leadership",sub:"Top-mgmt commitment",col:"#06d6a0",x:165},
              {n:"6",t:"Planning",sub:"Risk & objectives",col:"#818cf8",x:300},
              {n:"7",t:"Support",sub:"Resources & docs",col:"#ffb703",x:435},
              {n:"8",t:"Operation",sub:"Run the ISMS",col:"#22d3ee",x:570},
              {n:"9",t:"Eval",sub:"Audit & review",col:"#ef4444",x:705},
              {n:"10",t:"Improve",sub:"NCs & corrections",col:"#a78bfa",x:840}
            ].map(({n,t,sub,col,x},i) => (
              <g key={i}>
                <rect x={x} y="60" width="100" height="180" rx="12" fill="#091826" stroke={col+"30"} strokeWidth="1.5"/>
                <rect x={x} y="60" width="100" height="3" rx="1.5" fill={col}/>
                <circle cx={x+50} cy="100" r="22" fill={col} opacity="0.12"/>
                <text x={x+50} y="106" textAnchor="middle" fill={col} fontSize="20" fontWeight="800" fontFamily="sans-serif">{n}</text>
                <text x={x+50} y="148" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="11" fontWeight="700" fontFamily="sans-serif">{t}</text>
                <text x={x+50} y="170" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">{sub}</text>
                <text x={x+50} y="210" textAnchor="middle" fill={col} fontSize="9" fontWeight="700" fontFamily="sans-serif">CLAUSE</text>
              </g>
            ))}
            <text x="480" y="265" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">All 7 clauses are mandatory - there are no optional management system requirements</text>
          </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#orientation">Clauses 1-3 - Orientation</a>
            <a href="#clause-4">Clause 4 - Context</a>
            <a href="#clause-5">Clause 5 - Leadership</a>
            <a href="#clause-6">Clause 6 - Planning</a>
            <a href="#clause-7">Clause 7 - Support</a>
            <a href="#clause-8">Clause 8 - Operation</a>
            <a href="#clause-9">Clause 9 - Performance Evaluation</a>
            <a href="#clause-10">Clause 10 - Improvement</a>
            <a href="#mandatory-docs">Mandatory Documents Map</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(232,99,43,0.3)',paddingLeft:'1.2rem'}}>Clauses 4 to 10 are the management system core of ISO 27001. They define how the ISMS is governed, planned, run, measured, and improved. Unlike <a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls" className="inline-link">Annex A controls</a>, which are selected based on your risk assessment, the clauses are entirely mandatory - every "shall" statement must be addressed for certification. This walkthrough takes them in order, with the documents you need, the auditor's perspective, and the failure modes to avoid.</p>

          <section id="orientation">
            <h2>Clauses 1, 2, 3 - <em>Orientation Only</em></h2>
            <p>Before getting into the auditable clauses, a quick word on the first three. Clause 1 (Scope) describes what the standard covers. Clause 2 (Normative References) points to ISO/IEC 27000 for vocabulary. Clause 3 (Terms and Definitions) defines the language. None of these contain "shall" statements and none are auditable - but you should still read them once to anchor your understanding of terms like "interested parties," "documented information," and "risk owner," all of which appear throughout the auditable clauses.</p>
            <p>If you are still building your foundational understanding, start with <a href="https://seccomply.net/resources/blog/what-is-an-isms" className="inline-link">what is an ISMS</a> and our <a href="https://seccomply.net/resources/blog/iso-27001-explained-startups" className="inline-link">ISO 27001 explained for startups</a> piece - both cover the conceptual scaffolding this article assumes.</p>
          </section>

          <section id="clause-4">
            <h2>Clause 4 - <em>Context of the Organisation</em></h2>
            <div className="clause-card">
              <span className="clause-num">CLAUSE 4</span>
              <div className="clause-title">Context of the Organisation</div>
              <p className="clause-summary">Clause 4 forces you to formally document who you are, what you do, who depends on your information security posture, and what the boundaries of your ISMS are. It has four sub-clauses: 4.1 (understanding the organisation and its context), 4.2 (interested parties and their requirements), 4.3 (scope), and 4.4 (the ISMS itself).</p>

              <div className="clause-meta-grid">
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Documents Expected</div>
                  <div className="clause-meta-val">Context analysis (internal/external issues), interested-parties register, ISMS scope statement</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">What Auditors Test</div>
                  <div className="clause-meta-val">Whether scope is realistic, complete, and consistent with the rest of the ISMS</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Common Failures</div>
                  <div className="clause-meta-val">Vague scope, missing interested parties (regulators, customers, employees, partners)</div>
                </div>
              </div>
            </div>

            <h3>What "context" actually means in practice</h3>
            <p>Most teams treat context as a paragraph. Auditors treat it as the foundation that justifies every other decision in the ISMS. Internal context covers organisational structure, culture, contracts, capabilities. External context covers regulatory landscape (DPDP, GDPR, sector laws), competitive pressure, threat environment, supply chain. The interested-parties register lists every entity with a stake in your information security and what they expect - customers expect uptime and confidentiality, regulators expect breach notification, employees expect privacy, investors expect risk transparency.</p>

            <p>Scope (4.3) is where most early-stage ISMS programmes fail. The scope statement must be unambiguous - exactly which products, locations, processes, and personnel are covered. Our <a href="https://seccomply.net/resources/blog/iso-27001-scope-definition" className="inline-link">ISO 27001 scope definition guide</a> covers the trade-offs between narrow and broad scope, with examples for SaaS, fintech, healthcare, and consulting.</p>
          </section>

          <section id="clause-5">
            <h2>Clause 5 - <em>Leadership</em></h2>
            <div className="clause-card">
              <span className="clause-num">CLAUSE 5</span>
              <div className="clause-title">Leadership</div>
              <p className="clause-summary">Clause 5 demands visible, documented top-management commitment to the ISMS. It has three sub-clauses: 5.1 (leadership and commitment), 5.2 (information security policy), and 5.3 (organisational roles, responsibilities, and authorities).</p>

              <div className="clause-meta-grid">
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Documents Expected</div>
                  <div className="clause-meta-val">Information Security Policy, RACI matrix, role-and-responsibility charter, evidence of management review</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">What Auditors Test</div>
                  <div className="clause-meta-val">Top-management interviews, signed policy, documented decisions about ISMS direction</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Common Failures</div>
                  <div className="clause-meta-val">Outdated policy, no top-management awareness, security responsibilities unassigned</div>
                </div>
              </div>
            </div>

            <h3>Why auditors interview the CEO</h3>
            <p>If the CEO cannot articulate the ISMS objectives, the importance of compliance, or the basic risks the organisation manages, Clause 5 fails. This is non-negotiable. Top management cannot delegate ownership - they can delegate execution, but the visible commitment must remain at the top. The Information Security Policy (5.2) must be signed by top management, communicated, and reviewed regularly. A draft policy or an unsigned PDF will not pass.</p>

            <p>Clause 5.3 also requires clear assignment of responsibility for the ISMS itself - typically a CISO, Head of Security, Compliance Lead, or vCISO. For startups thinking through this, our piece on <a href="https://seccomply.net/resources/blog/ciso-startup-guide" className="inline-link">the role of a CISO in a startup</a> covers when to hire and what the role actually does. The substance of the policy itself is covered in <a href="https://seccomply.net/resources/blog/how-to-write-security-policy" className="inline-link">how to write a security policy people will actually follow</a>.</p>
          </section>

          <section id="clause-6">
            <h2>Clause 6 - <em>Planning</em></h2>
            <div className="clause-card">
              <span className="clause-num">CLAUSE 6</span>
              <div className="clause-title">Planning</div>
              <p className="clause-summary">Clause 6 is the heaviest of the seven. It has three sub-clauses: 6.1 (actions to address risks and opportunities, including risk assessment 6.1.2 and risk treatment 6.1.3), 6.2 (information security objectives), and 6.3 (planning of changes - new in 2022). This is where the risk assessment, risk treatment plan, and Statement of Applicability all live.</p>

              <div className="clause-meta-grid">
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Documents Expected</div>
                  <div className="clause-meta-val">Risk assessment methodology, risk register, risk treatment plan, Statement of Applicability, security objectives</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">What Auditors Test</div>
                  <div className="clause-meta-val">Whether risks drive controls; SoA consistency; objectives are measurable and tracked</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Common Failures</div>
                  <div className="clause-meta-val">Generic risk register, missing risk owners, SoA inconsistent with risks, vague objectives</div>
                </div>
              </div>
            </div>

            <h3>The trio that anchors the ISMS</h3>
            <p>Three deliverables under Clause 6 are non-negotiable: the risk assessment, the risk treatment plan, and the Statement of Applicability. They must be internally consistent - every risk maps to a treatment, every treatment maps to one or more Annex A controls, and every selected control appears in the SoA with justification. We cover each in detail: <a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment" className="inline-link">risk assessment in ISO 27001</a> covers methodology and the risk register; <a href="https://seccomply.net/resources/blog/soa-iso-27001-complete-guide" className="inline-link">the Statement of Applicability complete guide</a> covers the bridge document.</p>

            <p>Clause 6.2 (Information Security Objectives) requires measurable goals. "Improve security" is not an objective. "Achieve 95% MFA enrolment by Q2 2026" is. "Reduce mean time to detect from 18 hours to 8 hours by year-end" is. Auditors look for SMART objectives tied to identified risks and tracked through the management review cycle.</p>

            <p>Clause 6.3 was added in the 2022 revision - it requires planning for ISMS changes (scope expansion, structural reorganisation, new processing activities). This is one of the easiest places to score quick wins because it formalises something most organisations already do informally.</p>
          </section>

          <section id="clause-7">
            <h2>Clause 7 - <em>Support</em></h2>
            <div className="clause-card">
              <span className="clause-num">CLAUSE 7</span>
              <div className="clause-title">Support</div>
              <p className="clause-summary">Clause 7 covers the resources, competence, awareness, communication, and documented information required to operate the ISMS. Five sub-clauses: 7.1 (resources), 7.2 (competence), 7.3 (awareness), 7.4 (communication), 7.5 (documented information).</p>

              <div className="clause-meta-grid">
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Documents Expected</div>
                  <div className="clause-meta-val">Training records, competence framework, awareness programme records, communication plan, document control procedure</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">What Auditors Test</div>
                  <div className="clause-meta-val">Random employee awareness checks; document version control; competence evidence</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Common Failures</div>
                  <div className="clause-meta-val">Untrained staff, uncontrolled documents (no version, no owner, no review date)</div>
                </div>
              </div>
            </div>

            <h3>The clause that seems easy until the auditor pulls 10 random employees</h3>
            <p>Clause 7.3 (Awareness) is enforced through stop-and-ask checks during the audit. Auditors will pick three to five employees at random and ask basic questions: "Where is the security policy?" "Who do you report a phishing email to?" "What classification level is customer data?" If even one cannot answer, awareness fails. The fix is a continuous awareness programme - recurring training, phishing simulations, internal communications. Our <a href="https://seccomply.net/resources/blog/phishing-simulation-guide" className="inline-link">phishing simulation guide</a> covers the operational side.</p>

            <p>Clause 7.5 (Documented Information) is where document control comes in. Every controlled document must have an owner, a version number, an approval date, a review schedule, and access controls. "Documents" here include the policy, the SoA, the risk register, procedures, and records - everything that an auditor might inspect.</p>
          </section>

          <section id="clause-8">
            <h2>Clause 8 - <em>Operation</em></h2>
            <div className="clause-card">
              <span className="clause-num">CLAUSE 8</span>
              <div className="clause-title">Operation</div>
              <p className="clause-summary">Clause 8 is short but consequential. It requires you to actually operate the ISMS - execute the planned processes, conduct risk assessments at planned intervals, implement the risk treatment plan, and control planned changes. Three sub-clauses: 8.1 (operational planning and control), 8.2 (information security risk assessment), 8.3 (information security risk treatment).</p>

              <div className="clause-meta-grid">
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Documents Expected</div>
                  <div className="clause-meta-val">Updated risk register, executed risk treatment plan, change records, evidence of operational controls</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">What Auditors Test</div>
                  <div className="clause-meta-val">Whether documented procedures are followed in practice; evidence of risk re-assessments</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Common Failures</div>
                  <div className="clause-meta-val">Documented procedures that nobody operates; risk register frozen at initial state</div>
                </div>
              </div>
            </div>

            <h3>The clause that proves your ISMS is alive</h3>
            <p>Clause 8 is where Stage 2 audits live. Stage 1 reviews documentation; Stage 2 tests operation. Auditors will pick controls from your SoA and ask for evidence that they are operating - access reviews actually performed, incidents actually triaged, vulnerabilities actually remediated. A well-documented ISMS that has not actually operated for at least 90 days will struggle in Stage 2. Our walkthrough on <a href="https://seccomply.net/resources/blog/how-to-prepare-for-a-security-audit" className="inline-link">how to prepare for a security audit</a> covers exactly what evidence to assemble.</p>

            <p>The risk register must show movement. Risks identified at the start of the cycle should have been treated, accepted, or transferred - and new risks should have been added as conditions changed. A static risk register is a red flag.</p>
          </section>

          <section id="clause-9">
            <h2>Clause 9 - <em>Performance Evaluation</em></h2>
            <div className="clause-card">
              <span className="clause-num">CLAUSE 9</span>
              <div className="clause-title">Performance Evaluation</div>
              <p className="clause-summary">Clause 9 is consistently the most-failed clause in early certification audits. It has three sub-clauses: 9.1 (monitoring, measurement, analysis, evaluation), 9.2 (internal audit), 9.3 (management review). It demands evidence of operation over time - the one thing early-stage ISMS programmes lack.</p>

              <div className="clause-meta-grid">
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Documents Expected</div>
                  <div className="clause-meta-val">Monitoring dashboards, internal audit reports, audit programme, management review minutes</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">What Auditors Test</div>
                  <div className="clause-meta-val">Whether internal audits actually happened, whether management reviews occurred, whether metrics are tracked</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Common Failures</div>
                  <div className="clause-meta-val">No internal audit before Stage 2; management review never held; metrics tracked but never reviewed</div>
                </div>
              </div>
            </div>

            <h3>Why Clause 9 trips up most first-time certifications</h3>
            <p>The minimum viable evidence pattern for Clause 9 is: at least one internal audit covering all clauses and a representative sample of Annex A controls, at least one management review with documented inputs and outputs, and at least 90 days of monitoring data showing the ISMS is being measured. Skipping any one of these is a fast route to a major non-conformity.</p>

            <p>Internal audits (9.2) must be conducted by someone independent of the area being audited. For small organisations this often means engaging an external internal auditor - yes, "external internal" is the actual term. The audit must follow a documented programme and produce a formal report with findings and corrective actions.</p>

            <p>Management review (9.3) is a structured meeting with mandatory inputs (audit results, risk changes, performance data, corrective action status, opportunities for improvement) and mandatory outputs (decisions on changes, resource needs, ISMS direction). The minutes are an audit-grade document. Our coverage of <a href="https://seccomply.net/resources/blog/security-metrics-board-reporting" className="inline-link">security metrics that actually matter to the board</a> covers metric selection.</p>
          </section>

          <section id="clause-10">
            <h2>Clause 10 - <em>Improvement</em></h2>
            <div className="clause-card">
              <span className="clause-num">CLAUSE 10</span>
              <div className="clause-title">Improvement</div>
              <p className="clause-summary">Clause 10 closes the PDCA loop. Two sub-clauses: 10.1 (continual improvement) and 10.2 (nonconformity and corrective action). Where Clause 9 measures, Clause 10 fixes.</p>

              <div className="clause-meta-grid">
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Documents Expected</div>
                  <div className="clause-meta-val">Nonconformity register, corrective action records, root-cause analyses, improvement log</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">What Auditors Test</div>
                  <div className="clause-meta-val">Whether identified issues lead to documented corrections; root-cause depth</div>
                </div>
                <div className="clause-meta-item">
                  <div className="clause-meta-label">Common Failures</div>
                  <div className="clause-meta-val">No NC register; corrective actions closed without verifying effectiveness</div>
                </div>
              </div>
            </div>

            <h3>The PDCA cycle made tangible</h3>
            <p>Every non-conformity raised - whether by an internal audit, an incident investigation, or a customer complaint - becomes a row in the NC register. Each row needs a root-cause analysis (5-Why or Fishbone is sufficient for most), a corrective action with an owner and a deadline, and effectiveness verification before closure. "Closed" is not the same as "fixed and verified." Auditors look for that distinction.</p>

            <p>Clause 10.1 (Continual Improvement) is broader - it covers any opportunity to improve the suitability, adequacy, and effectiveness of the ISMS, not just fixing problems. Captured improvement ideas, prioritised against risk and impact, with progress tracked through management review, demonstrates a healthy ISMS.</p>
          </section>

          <section id="mandatory-docs">
            <h2>Mandatory Documents - <em>The Map</em></h2>
            <p>ISO 27001 explicitly requires certain documented information across the clauses. Here is a consolidated view of what must exist before Stage 1, mapped to clause and what auditors expect to see.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Document</th><th>Clause</th><th>Why It's Mandatory</th></tr></thead>
                <tbody>
                  <tr><td>ISMS Scope Statement</td><td>4.3</td><td>Defines the boundary of certification</td></tr>
                  <tr><td>Information Security Policy</td><td>5.2</td><td>Top-level commitment; auditor-signed evidence</td></tr>
                  <tr><td>Risk Assessment Methodology</td><td>6.1.2</td><td>Documents how risks are identified and scored</td></tr>
                  <tr><td>Risk Assessment Results / Register</td><td>6.1.2</td><td>The output - every identified risk</td></tr>
                  <tr><td>Risk Treatment Plan</td><td>6.1.3</td><td>How risks will be addressed, by whom, when</td></tr>
                  <tr><td>Statement of Applicability (SoA)</td><td>6.1.3(d)</td><td>The control register - included, excluded, justified</td></tr>
                  <tr><td>Information Security Objectives</td><td>6.2</td><td>Measurable goals tied to risks</td></tr>
                  <tr><td>Evidence of Competence</td><td>7.2</td><td>Training records, qualifications</td></tr>
                  <tr><td>Documented Procedures</td><td>7.5 / 8.1</td><td>How operational processes are run</td></tr>
                  <tr><td>Internal Audit Programme &amp; Reports</td><td>9.2</td><td>Independent verification of operation</td></tr>
                  <tr><td>Management Review Minutes</td><td>9.3</td><td>Top-management oversight evidence</td></tr>
                  <tr><td>Nonconformity &amp; Corrective Action Records</td><td>10.2</td><td>Improvement loop evidence</td></tr>
                </tbody>
              </table>
            </div>

            <p>This list is the floor, not the ceiling. Most certification-ready ISMS programmes also document operating procedures, change records, access reviews, and incident logs - all required by Annex A controls, even if the clauses themselves do not specifically demand them. If your team is at the early-stage gap-assessment phase, our broader walkthrough on <a href="https://seccomply.net/resources/blog/iso-27001-self-assessment" className="inline-link">does ISO 27001 apply to your business</a> covers the prerequisites and our <a href="https://seccomply.net/resources/blog/iso-27001-business-value" className="inline-link">business value of certification</a> piece covers the commercial rationale.</p>

            <p>The clauses are not a checklist to satisfy once - they are the operating system of the ISMS. Treated that way, certification follows almost as a side effect of running the system properly. Treated as paperwork to satisfy an audit, they become the brittle scaffolding that fails under the lightest scrutiny. Build them seriously the first time.</p>
          </section>

          <div className="cta-banner">
            <h3>Need Help Building Your ISMS Clause by Clause?</h3>
            <p>SecComply runs full ISO 27001 implementation engagements from gap assessment to certification - clause coverage, evidence systems, and audit-defensible documentation, with realistic timelines and fixed scope.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free ISO 27001 Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/iso-27001-clause-by-clause" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/iso-27001-clause-by-clause&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How many clauses does ISO 27001:2022 have?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>ISO 27001:2022 has 10 main clauses. Clauses 1 to 3 are introductory (scope, normative references, terms and definitions) and contain no auditable requirements. Clauses 4 to 10 are the management system clauses - the core of the standard - and contain all the auditable requirements for the ISMS itself, separate from the Annex A controls.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the difference between ISO 27001 clauses and Annex A controls?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Clauses 4 to 10 define the management system: how you set up, run, monitor, and improve your ISMS. They cover governance, risk, planning, performance evaluation, and improvement. Annex A controls are the specific security measures you select to treat identified risks - encryption, access control, training, incident response, and so on. The clauses are mandatory; Annex A controls are selected based on your risk assessment and documented in the Statement of Applicability.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Are all ISO 27001 clauses mandatory?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. Clauses 4 to 10 are entirely mandatory and contain no optional requirements. Every "shall" statement in those clauses must be addressed for certification. This is different from Annex A, where individual controls can be excluded with documented justification. There is no exclusion mechanism for the management system clauses themselves.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Which ISO 27001 clause is most often failed in audits?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Clause 9 (Performance Evaluation) is consistently flagged. Many organisations build the ISMS, run it for a few months, and arrive at certification without enough internal audit cycles, management reviews, or measurable monitoring data. Clause 9 demands evidence of operation over time - exactly what early-stage ISMS programmes lack. Building a 90-day operational track record before Stage 2 is one of the most reliable ways to pass.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How long does it take to satisfy all ISO 27001 clauses?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>For a startup with no prior management system, allow 4 to 9 months to build, document, and operate clauses 4 to 10 to a level that supports certification. The fastest path: complete clauses 4 to 7 in months 1-2 (governance, scope, planning, support), implement Annex A controls and clause 8 in months 3-4, and accumulate clause 9 evidence (audit, review, measurement) over months 4-6 before Stage 2. Larger organisations typically need 6-12 months.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What changed in clauses between ISO 27001:2013 and 2022?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The clause structure stayed nearly identical - the biggest changes were in Annex A. Clause 6.3 (Planning of Changes) was added to the 2022 version, formalising the requirement to plan ISMS changes deliberately. Some sub-clause numbering shifted slightly, and the "documented information" terminology became more consistent. Organisations transitioning from 2013 typically focus most of their update effort on Annex A and the SoA, with relatively light changes to clauses 4 to 10.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can clauses be addressed without an external consultant?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes, but it is harder than most teams expect. Clauses 4-10 require both the management system thinking (governance, planning, measurement) and the discipline to keep evidence over time. Teams with prior ISO 9001 or other management system experience tend to do this in-house comfortably. Teams approaching the standards for the first time benefit significantly from consultant involvement during scoping, the SoA, and the internal audit - these are the highest-leverage points and the most common failure modes.</p></div>
            </div>
          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#orientation" className="toc-link">Clauses 1-3</a></li>
              <li><a href="#clause-4" className="toc-link">Clause 4 - Context</a></li>
              <li><a href="#clause-5" className="toc-link">Clause 5 - Leadership</a></li>
              <li><a href="#clause-6" className="toc-link">Clause 6 - Planning</a></li>
              <li><a href="#clause-7" className="toc-link">Clause 7 - Support</a></li>
              <li><a href="#clause-8" className="toc-link">Clause 8 - Operation</a></li>
              <li><a href="#clause-9" className="toc-link">Clause 9 - Eval</a></li>
              <li><a href="#clause-10" className="toc-link">Clause 10 - Improve</a></li>
              <li><a href="#mandatory-docs" className="toc-link">Mandatory Docs</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 ISO 27001 Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27001-explained-startups">ISO 27001 Explained for Startups</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-self-assessment">Self-Assessment Guide</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-vs-soc2-vs-gdpr">ISO 27001 vs SOC 2 vs GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-is-an-isms">What Is an ISMS?</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-business-value">Business Value</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls">Annex A - 93 Controls</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment">Risk Assessment</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-scope-definition">Scope Definition</a></li>
              <li><a href="https://seccomply.net/resources/blog/soa-iso-27001-complete-guide">Statement of Applicability</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-clause-by-clause">▶ Clause by Clause</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27001</span><span className="tag">Clauses 4-10</span><span className="tag">ISMS</span><span className="tag">Management System</span><span className="tag">Audit Readiness</span><span className="tag">Risk Assessment</span><span className="tag">Internal Audit</span></div>
          </div>
          <div className="sb-cta">
            <h4>Pursuing ISO 27001?</h4>
            <p>Clause-by-clause implementation, end to end.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
