import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function SoAISO27001CompleteGuide() {
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
        <title>Statement of Applicability (SoA) for ISO 27001 - A Complete Guide | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="The Statement of Applicability is the most scrutinised document in your ISO 27001 audit. What clause 6.1.3(d) requires, how to build it from your risk assessment, the five required columns, sample entries, and the mistakes auditors flag most often." />
        <meta name="keywords" content="Statement of Applicability ISO 27001, ISO 27001 SoA, SoA template, clause 6.1.3, ISO 27001 documentation, Annex A justification, SoA example, how to write SoA, ISMS documentation, ISO 27001 audit preparation" />
        <meta property="og:title" content="Statement of Applicability (SoA) for ISO 27001 - A Complete Guide" />
        <meta property="og:description" content="The most scrutinised document in your ISO 27001 audit, explained. Required components, sample entries, build process, and the mistakes auditors flag most." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/soa-iso-27001-complete-guide" />
        <meta property="article:published_time" content="2026-04-23" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/soa-iso-27001-complete-guide" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Statement of Applicability (SoA) for ISO 27001 - A Complete Guide","description":"The Statement of Applicability is the most scrutinised document in an ISO 27001 audit. Required components, sample entries, build process, and common mistakes.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-04-23","dateModified":"2026-04-23","mainEntityOfPage":"https://seccomply.net/resources/blog/soa-iso-27001-complete-guide","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"Statement of Applicability","item":"https://seccomply.net/resources/blog/soa-iso-27001-complete-guide"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the Statement of Applicability in ISO 27001?","acceptedAnswer":{"@type":"Answer","text":"The Statement of Applicability (SoA) is a document required by ISO 27001 clause 6.1.3(d). It lists every Annex A control, declares whether each applies to your organisation, justifies inclusion or exclusion, records implementation status, and references the controlling documentation. It is the bridge between your risk assessment and your selected controls - the single document that proves you have made deliberate, justified decisions about your information security posture."}},{"@type":"Question","name":"Is the Statement of Applicability mandatory?","acceptedAnswer":{"@type":"Answer","text":"Yes. Clause 6.1.3(d) of ISO 27001:2022 explicitly requires a Statement of Applicability. Without one, you cannot pass certification. It is the most reviewed document in both Stage 1 and Stage 2 audits, and exclusions without justification will be raised as non-conformities."}},{"@type":"Question","name":"How many controls go in the Statement of Applicability?","acceptedAnswer":{"@type":"Answer","text":"All 93 Annex A controls from ISO 27001:2022 must appear in the SoA - including those you exclude. The SoA must address every control by reference; you cannot simply leave out controls you have decided do not apply. A typical SaaS startup applies 70–80 controls and excludes the rest with documented justification, most commonly the physical data centre controls for fully cloud-native organisations."}},{"@type":"Question","name":"What is the difference between the SoA and the risk treatment plan?","acceptedAnswer":{"@type":"Answer","text":"The risk treatment plan is the operational schedule for treating identified risks - it lists actions, owners, and deadlines. The SoA is the control register that documents which Annex A controls apply, why, and where they are implemented. The two link together: risks identified in the risk assessment drive control selection, which is then documented in the SoA. The risk treatment plan tracks the work; the SoA documents the decision."}},{"@type":"Question","name":"How often should the SoA be updated?","acceptedAnswer":{"@type":"Answer","text":"At minimum, after every annual risk assessment. The SoA is also updated whenever your scope, threat landscape, applicable regulations, or organisational structure changes materially. Many mature ISMS programmes review the SoA quarterly to capture incremental changes. It is a living document, not a one-time deliverable."}}]}]}) }} />
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
    .badge-bl{background:rgb(var(--purple-rgb) / .1);color:var(--purple);border:1px solid rgb(var(--purple-rgb) / .25)}
    .badge-gr{background:rgb(var(--green-rgb) / .1);color:var(--gr);border:1px solid rgb(var(--green-rgb) / .25)}
    .badge-am{background:rgb(var(--yellow-rgb) / .1);color:var(--am);border:1px solid rgb(var(--yellow-rgb) / .25)}
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
    .data-table td:first-child{color:var(--tx);font-weight:600}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgb(var(--accent-rgb) / .06);border:1px solid rgb(var(--accent-rgb) / .2)}
    .co-warn{background:rgb(var(--yellow-rgb) / .06);border:1px solid rgb(var(--yellow-rgb) / .2)}
    .co-info{background:rgb(var(--purple-rgb) / .07);border:1px solid rgb(var(--purple-rgb) / .2)}
    .co-danger{background:rgb(var(--red-rgb) / .06);border:1px solid rgb(var(--red-rgb) / .2)}
    .co-gr{background:rgb(var(--green-rgb) / .05);border:1px solid rgb(var(--green-rgb) / .2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .step-list{display:flex;flex-direction:column;gap:.85rem;margin:1.5rem 0}
    .step-item{display:flex;gap:1rem;padding:1.1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px}
    .step-num{width:30px;height:30px;border-radius:50%;background:var(--cy);color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.85rem}
    .step-body strong{display:block;color:var(--tx);font-size:.95rem;margin-bottom:.3rem}
    .step-body p{font-size:.88rem;color:var(--tm);margin-bottom:0!important;line-height:1.65}
    .scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .scope-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem}
    .scope-col.sc-in{border-top:3px solid var(--gr)}
    .scope-col.sc-out{border-top:3px solid var(--red)}
    .scope-col h4{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.8rem}
    .sc-in h4{color:var(--gr)}
    .sc-out h4{color:var(--red)}
    .scope-col ul li{font-size:.82rem;padding:.28rem 0 .28rem 1.1rem}
    .sample-soa{background:var(--bgc2);border:1px solid var(--bo);border-radius:14px;padding:1.5rem;margin:2rem 0;font-family:'JetBrains Mono','Courier New',monospace}
    .sample-soa-head{font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:1rem;font-family:var(--sans)}
    .sample-row{display:grid;grid-template-columns:130px 1fr;gap:1rem;padding:.55rem 0;border-bottom:1px solid var(--bs);font-size:.84rem}
    .sample-row:last-child{border-bottom:none}
    .sample-key{color:var(--tm);font-weight:600;text-transform:uppercase;font-size:.72rem;letter-spacing:.05em;font-family:var(--sans)}
    .sample-val{color:var(--tb);line-height:1.6}
    .sample-val.yes{color:var(--gr);font-weight:700}
    .sample-val.no{color:var(--red);font-weight:700}
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
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:900px){.scope-grid{grid-template-columns:1fr}.sample-row{grid-template-columns:1fr}}
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
          <span className="badge badge-bl">📋 Audit Documentation</span>
          <span className="badge badge-gr">✅ Certification Essentials</span>
        </div>
        <h1 className="hero-h1">Statement of Applicability (SoA) for ISO 27001 - <em>A Complete Guide</em></h1>
        <p className="hero-sub">The SoA is the most scrutinised document in your ISO 27001 audit. It is the bridge between your risk assessment and your selected controls - the one document that proves you have made deliberate, justified decisions about every Annex A control. Get it wrong and you lose certification. Here is exactly what clause 6.1.3(d) requires, how to build it from the ground up, and the mistakes auditors flag most.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 11 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=480&fit=crop" alt="ISO 27001 Statement of Applicability SoA documentation audit ISMS" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">The SoA is the single document that proves your control selection is deliberate, justified, and tied to identified risks. Auditors review it before, during, and after every certification audit.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs><pattern id="pgs6" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgb(var(--accent-rgb) / 0.04)"/></pattern></defs>
            <rect width="960" height="280" fill="url(#pgs6)"/>
            <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">The SoA: From Risk Assessment to Audit Evidence</text>

            {/* Risk Assessment box */}
            <rect x="60" y="80" width="190" height="120" rx="14" fill="var(--bg-secondary)" stroke="#06d6a030" strokeWidth="1.5"/>
            <rect x="60" y="80" width="190" height="4" rx="2" fill="var(--green)"/>
            <text x="155" y="115" textAnchor="middle" fill="var(--green)" fontSize="13" fontWeight="800" fontFamily="sans-serif">Risk Assessment</text>
            <text x="155" y="138" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Identifies threats &amp; vulnerabilities</text>
            <text x="155" y="155" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Scores likelihood &amp; impact</text>
            <text x="155" y="172" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Drives control selection</text>

            {/* SoA box (centre) */}
            <rect x="385" y="60" width="190" height="160" rx="14" fill="var(--bg-secondary)" stroke="rgb(var(--accent-rgb) / 0.251)" strokeWidth="2"/>
            <rect x="385" y="60" width="190" height="5" rx="2" fill="var(--accent)"/>
            <text x="480" y="100" textAnchor="middle" fill="var(--accent)" fontSize="14" fontWeight="800" fontFamily="sans-serif">SoA</text>
            <text x="480" y="118" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="9" fontWeight="600" fontFamily="sans-serif">Statement of Applicability</text>
            <line x1="410" y1="135" x2="550" y2="135" stroke="rgb(var(--accent-rgb) / 0.2)" strokeWidth="1"/>
            <text x="480" y="153" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9" fontFamily="sans-serif">All 93 Annex A controls</text>
            <text x="480" y="170" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9" fontFamily="sans-serif">Applicability + justification</text>
            <text x="480" y="187" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9" fontFamily="sans-serif">Implementation status</text>
            <text x="480" y="204" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9" fontFamily="sans-serif">Evidence references</text>

            {/* Audit Evidence box */}
            <rect x="710" y="80" width="190" height="120" rx="14" fill="var(--bg-secondary)" stroke="#818cf830" strokeWidth="1.5"/>
            <rect x="710" y="80" width="190" height="4" rx="2" fill="var(--purple)"/>
            <text x="805" y="115" textAnchor="middle" fill="var(--purple)" fontSize="13" fontWeight="800" fontFamily="sans-serif">Audit Evidence</text>
            <text x="805" y="138" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Reviewed in Stage 1</text>
            <text x="805" y="155" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Tested in Stage 2</text>
            <text x="805" y="172" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Re-checked in surveillance</text>

            {/* Arrows */}
            <path d="M 250 140 L 380 140" stroke="rgb(var(--accent-rgb) / 0.5)" strokeWidth="2" fill="none" markerEnd="url(#arr1)"/>
            <path d="M 575 140 L 705 140" stroke="rgb(var(--purple-rgb) / 0.5)" strokeWidth="2" fill="none" markerEnd="url(#arr2)"/>
            <defs>
              <marker id="arr1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="rgb(var(--accent-rgb) / 0.7)"/></marker>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L0,8 L8,4 z" fill="rgb(var(--purple-rgb) / 0.7)"/></marker>
            </defs>

            <text x="480" y="265" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">The SoA is required by clause 6.1.3(d) - the document auditors return to most often</text>
          </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-is-soa">What Is the SoA?</a>
            <a href="#why-matters">Why It Matters Most</a>
            <a href="#required-fields">Required Components</a>
            <a href="#sample">A Sample SoA Entry</a>
            <a href="#build-process">How to Build the SoA</a>
            <a href="#in-vs-out">Including vs Excluding Controls</a>
            <a href="#mistakes">Common Mistakes</a>
            <a href="#maintenance">Keeping It Current</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgb(var(--accent-rgb) / 0.3)',paddingLeft:'1.2rem'}}>The Statement of Applicability is required by clause 6.1.3(d) of ISO 27001:2022. It documents every one of the 93 Annex A controls - whether you have implemented it, why you have or have not, and where the implementing evidence lives. The certification body auditor will read your SoA before they walk into your office. If it is internally inconsistent, missing controls, or weakly justified, the rest of the audit goes downhill from there. This guide takes you through the SoA from first principles to certification-ready output.</p>

          <section id="what-is-soa">
            <h2>What Is the <em>Statement of Applicability?</em></h2>
            <p>The Statement of Applicability is a controlled document - typically a spreadsheet or a structured table inside your ISMS documentation - that lists every Annex A control alongside four mandatory pieces of information: whether it applies to your organisation, the justification for that decision, the current implementation status, and where the implementing controls and evidence are located.</p>
            <p>It is the document that translates your <a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment" className="inline-link">risk assessment</a> into a concrete control register. The risk assessment tells you what could go wrong and how badly. The SoA documents which Annex A controls you have selected to address those risks - and equally important, why you have decided certain controls do not apply to your organisation.</p>
            <p>If you are unfamiliar with the Annex A control set itself, our <a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls" className="inline-link">walkthrough of all 93 Annex A controls</a> covers the four categories (Organisational, People, Physical, Technological) in detail. The SoA references that exact same control list.</p>
          </section>

          <section id="why-matters">
            <h2>Why the SoA <em>Matters More Than You Think</em></h2>
            <div className="callout co-key">
              <span className="co-icon">🎯</span>
              <div className="co-body">
                <strong>The Single Most-Reviewed Document in Your Audit</strong>
                <p>Auditors read your SoA before they walk into your office. They use it to plan the audit. They cross-reference it during the on-site review. They return to it when writing the final report. Every weakness, inconsistency, or unjustified exclusion they find becomes a finding.</p>
              </div>
            </div>
            <p>Other ISMS documents matter, but the SoA is the master inventory. It is where the auditor's pen touches first and last. A clean, defensible SoA signals a mature ISMS programme; a sloppy or generic SoA signals the opposite - and auditors will dig deeper to find more problems.</p>
            <p>Beyond audit, the SoA also serves as your internal map. When a new control needs implementation, when a vendor questionnaire asks about a specific Annex A area, when you onboard a new compliance owner - the SoA is the reference. Done well, it pays back many times over the effort of building it.</p>
          </section>

          <section id="required-fields">
            <h2>What the SoA <em>Must Contain</em></h2>
            <p>ISO 27001:2022 clause 6.1.3(d) requires four pieces of information for every Annex A control. Most mature SoAs include a fifth and sixth column to make the document operationally useful. Here is the minimum versus the practical structure.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Column</th><th>Required by 6.1.3(d)?</th><th>What it captures</th></tr></thead>
                <tbody>
                  <tr><td>Control ID &amp; name</td><td style={{color:'var(--gr)',fontWeight:700}}>Mandatory</td><td>Reference to the Annex A control (e.g., A.5.1, A.8.24)</td></tr>
                  <tr><td>Applicability (Yes / No)</td><td style={{color:'var(--gr)',fontWeight:700}}>Mandatory</td><td>Whether the control applies to your organisation</td></tr>
                  <tr><td>Justification</td><td style={{color:'var(--gr)',fontWeight:700}}>Mandatory</td><td>Why the control is included or excluded - the business or risk reasoning</td></tr>
                  <tr><td>Implementation status</td><td style={{color:'var(--gr)',fontWeight:700}}>Mandatory</td><td>Implemented / Partially implemented / Planned / Not applicable</td></tr>
                  <tr><td>Reference document(s)</td><td style={{color:'var(--am)',fontWeight:700}}>Strongly Recommended</td><td>Pointer to the policy, procedure, or technical control that implements it</td></tr>
                  <tr><td>Owner</td><td style={{color:'var(--am)',fontWeight:700}}>Strongly Recommended</td><td>Named individual or role accountable for the control</td></tr>
                </tbody>
              </table>
            </div>
            <p>The justification column is where most SoAs fail an audit. "Industry best practice" is not a justification. "Required by the risk assessment" without a risk reference is not a justification. The auditor wants to see a defensible link between identified risk, regulatory obligation, contractual requirement, or business decision - and the control selection.</p>
          </section>

          <section id="sample">
            <h2>A Sample <em>SoA Entry</em></h2>
            <p>Here is what a well-constructed SoA entry looks like for a single control, illustrated with two contrasting examples - one included, one excluded.</p>

            <div className="sample-soa">
              <div className="sample-soa-head">Example 1 - Control Included</div>
              <div className="sample-row"><span className="sample-key">Control</span><span className="sample-val">A.8.24 - Use of cryptography</span></div>
              <div className="sample-row"><span className="sample-key">Applicable</span><span className="sample-val yes">YES</span></div>
              <div className="sample-row"><span className="sample-key">Justification</span><span className="sample-val">Risk register R-12 (unauthorised disclosure of customer PII in transit) and R-18 (data breach in cloud storage) both require cryptographic controls. DPDP Act and customer DPAs (Acme Corp, BetaCo) also require encryption at rest and in transit.</span></div>
              <div className="sample-row"><span className="sample-key">Status</span><span className="sample-val">Implemented</span></div>
              <div className="sample-row"><span className="sample-key">Reference</span><span className="sample-val">POL-08 Cryptography Policy v2.1; PROC-15 Key Management Procedure; AWS KMS configuration evidence</span></div>
              <div className="sample-row"><span className="sample-key">Owner</span><span className="sample-val">Head of Engineering</span></div>
            </div>

            <div className="sample-soa">
              <div className="sample-soa-head">Example 2 - Control Excluded</div>
              <div className="sample-row"><span className="sample-key">Control</span><span className="sample-val">A.7.4 - Physical security monitoring</span></div>
              <div className="sample-row"><span className="sample-key">Applicable</span><span className="sample-val no">NO</span></div>
              <div className="sample-row"><span className="sample-key">Justification</span><span className="sample-val">SecComply operates as a fully cloud-native organisation with no owned data centres or physical processing infrastructure within the ISMS scope. All production workloads are hosted on AWS, where physical security monitoring is the responsibility of AWS under the shared responsibility model (AWS SOC 2 Type II report retained on file). No physical premises within scope require monitoring.</span></div>
              <div className="sample-row"><span className="sample-key">Status</span><span className="sample-val">Not applicable</span></div>
              <div className="sample-row"><span className="sample-key">Reference</span><span className="sample-val">DOC-01 ISMS Scope Statement; AWS Shared Responsibility Mapping; AWS SOC 2 Type II report</span></div>
              <div className="sample-row"><span className="sample-key">Owner</span><span className="sample-val">CISO</span></div>
            </div>

            <p>The two patterns are different but the underlying logic is the same - every cell tells the auditor exactly what they need to know, with no follow-up question required. That is the bar.</p>
          </section>

          <section id="build-process">
            <h2>How to <em>Build the SoA</em></h2>
            <p>Building the SoA is a six-step process. It assumes you already have a defined ISMS scope and a completed risk assessment - both prerequisites without which the SoA cannot be built.</p>
            <div className="step-list">
              <div className="step-item">
                <div className="step-num">1</div>
                <div className="step-body">
                  <strong>Confirm the ISMS Scope</strong>
                  <p>The SoA is bounded by the scope of your ISMS. If you have not finalised the scope, do that first - see our walkthrough on <a href="https://seccomply.net/resources/blog/iso-27001-scope-definition" className="inline-link">ISO 27001 scope definition</a>. Out-of-scope assets, business units, and locations are excluded from SoA consideration entirely.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">2</div>
                <div className="step-body">
                  <strong>Pull the Annex A Control List</strong>
                  <p>Start from the official ISO 27001:2022 Annex A - all 93 controls across A.5 (37 organisational), A.6 (8 people), A.7 (14 physical), A.8 (34 technological). Use the standard reference numbering exactly. Do not abbreviate, paraphrase, or renumber.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">3</div>
                <div className="step-body">
                  <strong>Map Risks to Controls</strong>
                  <p>For every risk in your risk register that requires treatment, identify which Annex A controls (one or many) address that risk. This mapping is what justifies inclusion. Many controls will be selected by multiple risks - record all the references in the justification column.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">4</div>
                <div className="step-body">
                  <strong>Add Regulatory and Contractual Drivers</strong>
                  <p>Some controls will be selected not by risk but by external requirement - DPDP Act, GDPR, customer contractual clauses, sector regulations. Capture these as separate justifications. A single control may have both risk-based and regulatory justifications.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">5</div>
                <div className="step-body">
                  <strong>Justify Every Exclusion</strong>
                  <p>For controls you exclude, provide a clear, defensible reason - typically based on scope (the asset class is not present), the shared responsibility model (a third party operates the control), or the risk profile (the control addresses a risk that does not exist for your organisation). Generic exclusions like "not applicable to our business" will fail.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">6</div>
                <div className="step-body">
                  <strong>Reference the Implementing Documents</strong>
                  <p>For every included control, the SoA must point to where the control actually lives - the policy that mandates it, the procedure that operates it, or the technical configuration that enforces it. Auditors will follow these references during Stage 2. Broken references are a fast way to fail.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="in-vs-out">
            <h2>Including vs Excluding - <em>What Auditors Look For</em></h2>
            <p>The SoA is not just an inventory; it is a series of decisions. Each decision needs to stand up to scrutiny. Here is what good and bad decisions look like, side by side.</p>
            <div className="scope-grid">
              <div className="scope-col sc-in">
                <h4>✅ Defensible Inclusions</h4>
                <ul>
                  <li>Controls tied to identified risk register entries</li>
                  <li>Controls required by regulation (DPDP, GDPR, sector laws)</li>
                  <li>Controls required by enterprise customer DPAs</li>
                  <li>Controls justified by business decision and documented elsewhere</li>
                  <li>Controls cited as compensating controls for excluded ones</li>
                </ul>
              </div>
              <div className="scope-col sc-out">
                <h4>⚠️ Risky Inclusions</h4>
                <ul>
                  <li>Controls "for completeness" with no risk linkage</li>
                  <li>Controls included but not actually implemented</li>
                  <li>Controls referencing draft or non-existent policies</li>
                  <li>Controls owned by no one - orphaned controls</li>
                  <li>Controls copied from a generic SoA template without review</li>
                </ul>
              </div>
            </div>
            <div className="scope-grid">
              <div className="scope-col sc-in">
                <h4>✅ Defensible Exclusions</h4>
                <ul>
                  <li>Physical premises controls when fully cloud-native and operating in shared, leased space</li>
                  <li>Application development controls when no in-house development exists</li>
                  <li>ICS or operational technology controls when no OT environment is in scope</li>
                  <li>Controls handled by third party with retained evidence (e.g., AWS, GCP SOC 2)</li>
                </ul>
              </div>
              <div className="scope-col sc-out">
                <h4>⚠️ Risky Exclusions</h4>
                <ul>
                  <li>"Not applicable to our business" with no further justification</li>
                  <li>Excluded because "we do not have time to implement"</li>
                  <li>Excluded because the team does not understand the control</li>
                  <li>Excluded contradicting the risk assessment</li>
                  <li>Excluded contradicting the ISMS scope statement</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="mistakes">
            <h2>Common <em>SoA Mistakes</em></h2>

            <h3>1. Generic Justifications Copied Across Controls</h3>
            <p>The fastest way to fail a Stage 1 review is to use the same justification ("Required by ISO 27001 best practice") for dozens of controls. Auditors see this as evidence the team has not actually thought about each control. Each justification should be specific to that control and ideally reference the underlying risk or requirement.</p>

            <h3>2. SoA Out of Sync with the Risk Register</h3>
            <p>If a risk in the register requires a treatment that maps to control A.5.20, and the SoA marks A.5.20 as not applicable - that is a major non-conformity. Internal consistency between the risk assessment, the risk treatment plan, and the SoA is non-negotiable. Build the cross-reference and audit it before the auditor does.</p>

            <h3>3. Missing the 11 New 2022 Controls</h3>
            <p>ISO 27001:2022 introduced 11 new controls - including threat intelligence (A.5.7), cloud services (A.5.23), data masking (A.8.11), DLP (A.8.12), and secure coding (A.8.28). Organisations that built their SoA against the 2013 version need to specifically address these. Auditors check this first because it tells them whether the SoA has been refreshed or just reused.</p>

            <h3>4. Excluding Controls the Scope Includes</h3>
            <p>If your scope statement says you operate in a leased office in Pune, you cannot exclude all physical security controls on the basis of being cloud-native. The SoA must be consistent with the scope. Misalignment here is one of the most embarrassing audit findings because it reveals the documents were written separately and never reconciled.</p>

            <h3>5. Implementation Status That Does Not Match Reality</h3>
            <p>Marking a control as "Implemented" when the policy is in draft, or when the procedure is documented but not operating, will be caught during Stage 2 testing. It is far better to be honest - "Partially implemented, target completion Q2 2026" - than to overstate. Auditors respect candour and downgrade trust quickly when reality contradicts the SoA.</p>

            <h3>6. Treating the SoA as a One-Time Deliverable</h3>
            <p>The SoA must be reviewed and updated when scope changes, when the threat environment shifts, when new regulations apply, and at the annual ISMS management review at minimum. A document dated two years ago with no version history is a red flag that the entire ISMS may be coasting.</p>
          </section>

          <section id="maintenance">
            <h2>Keeping the SoA <em>Current</em></h2>
            <p>The SoA is a living document. The mature ISMS pattern is to integrate SoA review into existing operating rhythms rather than treating it as a discrete annual task.</p>
            <ul>
              <li><strong>Quarterly:</strong> Review the SoA in your management review meeting. Capture any control whose status has changed (newly implemented, newly partial, newly retired).</li>
              <li><strong>After every risk assessment cycle:</strong> Re-map risks to controls; update justifications where new risks have driven new control selections.</li>
              <li><strong>After scope changes:</strong> If the ISMS scope expands or contracts, the SoA must be reviewed end to end. New scope often introduces new applicable controls.</li>
              <li><strong>After regulatory changes:</strong> When DPDP, GDPR, or sector-specific guidance changes, revisit the regulatory justifications and any controls those changes affect.</li>
              <li><strong>After incidents:</strong> A material security incident may indicate a control gap. Update the SoA implementation status if the incident reveals a control was not operating as documented.</li>
              <li><strong>Before every certification or surveillance audit:</strong> Run a final consistency check between SoA, risk register, scope statement, and policy register. This is the time to catch and fix drift before the auditor does.</li>
            </ul>
            <p>The SoA is one of several documents the auditor will examine in detail. For the broader audit-readiness picture, our walkthrough on <a href="https://seccomply.net/resources/blog/how-to-prepare-for-a-security-audit" className="inline-link">how to prepare for a security audit</a> covers the surrounding evidence, interview prep, and document control practices that complete the picture.</p>
            <p>Build the SoA seriously the first time, keep it honest, and maintain it as a working document rather than an audit prop. Done that way, it stops being a chore and starts being one of the most useful artefacts in your entire ISMS.</p>
          </section>

          <div className="cta-banner">
            <h3>Need Help Building Your SoA?</h3>
            <p>SecComply runs SoA workshops and full ISO 27001 implementation engagements - risk-mapping methodology, audit-defensible justifications, and the cross-referencing every certification body looks for.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free ISO 27001 Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/soa-iso-27001-complete-guide" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/soa-iso-27001-complete-guide&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the Statement of Applicability in ISO 27001?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The Statement of Applicability (SoA) is a document required by ISO 27001 clause 6.1.3(d). It lists every Annex A control, declares whether each applies to your organisation, justifies inclusion or exclusion, records implementation status, and references the controlling documentation. It is the bridge between your risk assessment and your selected controls - the single document that proves you have made deliberate, justified decisions about your information security posture.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is the Statement of Applicability mandatory?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. Clause 6.1.3(d) of ISO 27001:2022 explicitly requires a Statement of Applicability. Without one, you cannot pass certification. It is the most reviewed document in both Stage 1 and Stage 2 audits, and exclusions without justification will be raised as non-conformities.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How many controls go in the Statement of Applicability?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>All 93 Annex A controls from ISO 27001:2022 must appear in the SoA - including those you exclude. The SoA must address every control by reference; you cannot simply leave out controls you have decided do not apply. A typical SaaS startup applies 70–80 controls and excludes the rest with documented justification, most commonly the physical data centre controls for fully cloud-native organisations.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the difference between the SoA and the risk treatment plan?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The risk treatment plan is the operational schedule for treating identified risks - it lists actions, owners, and deadlines. The SoA is the control register that documents which Annex A controls apply, why, and where they are implemented. The two link together: risks identified in the risk assessment drive control selection, which is then documented in the SoA. The risk treatment plan tracks the work; the SoA documents the decision.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How often should the SoA be updated?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>At minimum, after every annual risk assessment. The SoA is also updated whenever your scope, threat landscape, applicable regulations, or organisational structure changes materially. Many mature ISMS programmes review the SoA quarterly to capture incremental changes. It is a living document, not a one-time deliverable.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can the SoA exclude controls without justification?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. Every excluded control requires a clear, documented justification. "Not applicable" alone is insufficient. The justification must reference the ISMS scope, the shared responsibility model, the risk profile, or another defensible basis for exclusion. Generic exclusions are one of the most common audit findings and frequently result in non-conformities.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Should the SoA be in spreadsheet form or a document?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>ISO 27001 is format-agnostic - the SoA can be a spreadsheet, a structured table inside a Word document, a database, or output from a GRC tool. Most organisations use a spreadsheet for ease of sorting and filtering, but the format matters far less than the content quality. What matters is version control, cell-level traceability, and the ability to navigate the document quickly during an audit.</p></div>
            </div>
          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#what-is-soa" className="toc-link">What Is the SoA?</a></li>
              <li><a href="#why-matters" className="toc-link">Why It Matters</a></li>
              <li><a href="#required-fields" className="toc-link">Required Components</a></li>
              <li><a href="#sample" className="toc-link">Sample Entry</a></li>
              <li><a href="#build-process" className="toc-link">How to Build It</a></li>
              <li><a href="#in-vs-out" className="toc-link">Include vs Exclude</a></li>
              <li><a href="#mistakes" className="toc-link">Common Mistakes</a></li>
              <li><a href="#maintenance" className="toc-link">Keeping It Current</a></li>
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
              <li><a href="https://seccomply.net/resources/blog/iso-27001-business-value">Business Value of ISO 27001</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls">Annex A - 93 Controls</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment">Risk Assessment</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-scope-definition">Scope Definition</a></li>
              <li><a href="https://seccomply.net/resources/blog/soa-iso-27001-complete-guide">▶ Statement of Applicability</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27001</span><span className="tag">SoA</span><span className="tag">Statement of Applicability</span><span className="tag">Clause 6.1.3</span><span className="tag">Annex A</span><span className="tag">ISMS Documentation</span><span className="tag">Audit Readiness</span></div>
          </div>
          <div className="sb-cta">
            <h4>Building Your SoA?</h4>
            <p>Risk-mapped, audit-defensible, ready for Stage 1.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
