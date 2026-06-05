import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DataPrincipalFiduciaryProcessor() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/data-principal-fiduciary-processor'); const ttl = encodeURIComponent('Data Principal vs Data Fiduciary vs Data Processor - SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/data-principal-fiduciary-processor'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); };
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08 }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
    })();
  }, []);

  const SLUG = 'data-principal-fiduciary-processor';
  const jsonLd = {
    "@context":"https://schema.org","@graph":[
      {"@type":"Article","headline":"Data Principal vs Data Fiduciary vs Data Processor - Roles Explained Under India's DPDP Act","description":"India's DPDP Act defines three roles - Data Principal, Data Fiduciary, and Data Processor. Understand who you are and what obligations apply.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply Technologies"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/assets/images/logo.png"}},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/data-principal-fiduciary-processor","keywords":"data principal, data fiduciary, data processor, DPDP Act, India privacy","articleSection":"DPDP Act","wordCount":1800,"timeRequired":"PT7M"},
      {"@type":"FAQPage","mainEntity":[
        {"@type":"Question","name":"What is the difference between a Data Fiduciary and a Data Processor under the DPDP Act?","acceptedAnswer":{"@type":"Answer","text":"A Data Fiduciary determines the purpose and means of processing personal data. A Data Processor processes data on behalf of a Fiduciary, following the Fiduciary's instructions. The Fiduciary holds primary accountability; the Processor's obligations are defined by contract."}},
        {"@type":"Question","name":"Can an organisation be both a Data Fiduciary and a Data Processor at the same time?","acceptedAnswer":{"@type":"Answer","text":"Yes. An HR SaaS platform is a Data Processor toward its enterprise clients but a Data Fiduciary toward its own employees. Each role carries its own set of obligations that must be managed separately."}},
        {"@type":"Question","name":"Does the DPDP Act apply to foreign companies processing data of Indian users?","acceptedAnswer":{"@type":"Answer","text":"Yes. The DPDP Act applies to processing of digital personal data within India and to processing outside India if it involves offering goods or services to individuals in India. Foreign companies with Indian users are in scope regardless of where their servers are located."}},
        {"@type":"Question","name":"What happens if a Data Processor violates obligations?","acceptedAnswer":{"@type":"Answer","text":"The Data Fiduciary remains primarily accountable for the actions of their Data Processors. The Fiduciary must ensure Processors comply via contractual obligations. The DPDP Act places the ultimate responsibility on the Fiduciary who engaged the Processor."}},
        {"@type":"Question","name":"How does the DPDP Act define a child Data Principal?","acceptedAnswer":{"@type":"Answer","text":"A child is defined as an individual under 18 years of age. Processing of a child's personal data requires verifiable parental consent, and behavioural monitoring or targeted advertising directed at children is prohibited."}}
      ]},
      {"@type":"BreadcrumbList","itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},
        {"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},
        {"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},
        {"@type":"ListItem","position":4,"name":"DPDP Act Roles","item":"https://seccomply.net/resources/blog/data-principal-fiduciary-processor"}
      ]}
    ]
  };

  const css = `
    :root{--cy:#FF6000;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(255, 96, 0,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#FF6000,#FF8A3D);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(255, 96, 0,.1);color:var(--cy);border:1px solid rgba(255, 96, 0,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
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
    .blog-layout{max-width:1280px;margin:0 auto;padding:0 2rem 5rem;display:grid;grid-template-columns:1fr 285px;gap:3rem;align-items:start}
    .art{min-width:0}
    .art h2{font-size:1.65rem;font-weight:700;color:var(--tx);margin:3rem 0 1.2rem;line-height:1.3}
    .art h2 em{color:var(--cy);font-style:italic}
    .art h3{font-size:1.05rem;font-weight:700;color:var(--cy);margin:1.8rem 0 .8rem}
    .art p{font-size:1rem;line-height:1.85;color:var(--tb);margin-bottom:1.2rem}
    .art p strong{color:var(--tx)}
    .art ul{margin:0 0 1.4rem;padding:0;list-style:none}
    .art ul li{padding:.4rem 0 .4rem 1.4rem;position:relative;font-size:.95rem;color:var(--tb);border-bottom:1px solid var(--bs)}
    .art ul li:last-child{border-bottom:none}
    .art ul li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:2px;background:var(--cy);opacity:.7}
    .art ul li strong{color:var(--tx)}
    .data-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .data-table{width:100%;border-collapse:collapse}
    .data-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .data-table td{padding:.7rem 1rem;font-size:.84rem;color:var(--tm);border-bottom:1px solid var(--bs);vertical-align:top}
    .data-table tr:last-child td{border-bottom:none}
    .data-table td:first-child{color:var(--tx);font-weight:600}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(255, 96, 0,.06);border:1px solid rgba(255, 96, 0,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .role-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:2rem 0}
    .role-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.4rem;position:relative;overflow:hidden}
    .role-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}
    .rc-p::before{background:#818cf8}.rc-f::before{background:#FF6000}.rc-pr::before{background:#06d6a0}
    .rc-label{font-size:.65rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem}
    .rc-p .rc-label{color:#818cf8}.rc-f .rc-label{color:#FF6000}.rc-pr .rc-label{color:#06d6a0}
    .role-card .rh{font-size:1rem;font-weight:700;color:var(--tx);margin:0 0 .4rem}
    .role-card .rb{font-size:.82rem;color:var(--tm);margin:0;line-height:1.55}
    .role-card .rs{font-size:.7rem;font-weight:700;color:var(--tm);margin-top:.7rem;padding-top:.7rem;border-top:1px solid var(--bs)}
    .step-list{display:flex;flex-direction:column;gap:.65rem;margin:1.5rem 0}
    .step-item{display:flex;gap:1rem;align-items:flex-start;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px}
    .step-num{width:28px;height:28px;border-radius:8px;background:rgba(255, 96, 0,.15);color:var(--cy);font-size:.8rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
    .step-body strong{display:block;color:var(--tx);font-size:.9rem;margin-bottom:.25rem}
    .step-body span{font-size:.83rem;color:var(--tm)}
    .series-nav{display:flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;background:rgba(255, 96, 0,.05);border:1px solid rgba(255, 96, 0,.15);border-radius:10px;margin-bottom:2rem;font-size:.8rem;flex-wrap:wrap}
    .series-nav span{color:var(--tm)}.series-nav strong{color:var(--cy)}
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
    .cta-banner{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(255, 96, 0,.03));border:1px solid rgba(255, 96, 0,.25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
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
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgba(255, 96, 0,.07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy)}
    .sb-cta{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(255, 96, 0,.03));border:1px solid rgba(255, 96, 0,.25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-size:.98rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(255, 96, 0,.4);z-index:50}
    #btt.vis{display:flex}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:900px){.role-grid{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}}
  `;

  return (
    <Layout>
      <Head>
        <title>Data Principal vs Data Fiduciary vs Data Processor - DPDP Act Roles | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="India's DPDP Act defines three distinct roles - Data Principal, Data Fiduciary, and Data Processor. Understand who you are in the data ecosystem, your obligations, and what happens when one entity holds multiple roles." />
        <meta name="keywords" content="data principal DPDP Act, data fiduciary India, data processor DPDP, DPDP Act roles explained, who is data fiduciary, DPDP Act 2023 definitions, data processor obligations India" />
        <meta property="og:title" content="Data Principal vs Data Fiduciary vs Data Processor - Roles Under India's DPDP Act" />
        <meta property="og:description" content="Before your organisation can think about DPDP compliance, you need to know who you are in the data ecosystem. This guide breaks down all three roles with examples and obligations." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/data-principal-fiduciary-processor" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <style jsx global>{css}</style>
      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>DPDP Act Roles</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🇮🇳 DPDP Act 2023</span>
          <span className="badge badge-bl">📋 Data Privacy</span>
          <span className="badge badge-am">🏢 India Compliance</span>
          <span className="badge badge-gr">Series · Part 1 of 6</span>
        </div>
        <h1 className="hero-h1">Data Principal vs Data Fiduciary vs Data Processor - <em>Roles Explained</em> Under the DPDP Act</h1>
        <p className="hero-sub">Before your organisation can think about DPDP compliance, you need to know who you are in the data ecosystem. Confusing these three roles is not a semantic error - it is a compliance risk that creates real blind spots in your consent architecture and vendor contracts.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Security Engineer, SecComply Technologies</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1200&h=480&fit=crop" alt="Data privacy roles DPDP Act India compliance" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">The DPDP Act 2023 introduces three clearly defined roles. Getting your classification right is the starting line for compliance - not a checkbox to tick after the fact.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 320" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs><pattern id="pg1" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(255, 96, 0,0.04)"/></pattern></defs>
            <rect width="960" height="320" fill="url(#pg1)"/>
            <text x="480" y="24" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">DPDP Act 2023 - The Three Roles at a Glance</text>
            <rect x="30" y="40" width="265" height="240" rx="12" fill="#091826" stroke="#818cf828" strokeWidth="1.5"/>
            <rect x="30" y="40" width="265" height="3" rx="1.5" fill="#818cf8"/>
            <text x="162" y="70" textAnchor="middle" fill="#818cf8" fontSize="10" fontWeight="800" fontFamily="sans-serif">DATA PRINCIPAL · Section 2(j)</text>
            <text x="162" y="92" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">The Individual</text>
            {['Customer (KYC)','Employee (HR records)','Patient (health data)','Child (guardian acts)'].map((t,i)=>(<g key={i}><circle cx="58" cy={118+i*28} r="3" fill="#818cf8" opacity="0.5"/><text x="70" y={122+i*28} fill="rgba(200,214,229,0.55)" fontSize="10" fontFamily="sans-serif">{t}</text></g>))}
            <rect x="50" y="245" width="225" height="22" rx="6" fill="rgba(129,140,248,0.07)" stroke="rgba(129,140,248,0.2)" strokeWidth="1"/>
            <text x="162" y="260" textAnchor="middle" fill="#818cf8" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">Has 8 enforceable rights under DPDP</text>
            <rect x="340" y="40" width="280" height="240" rx="12" fill="#0d1c10" stroke="#FF600028" strokeWidth="1.5"/>
            <rect x="340" y="40" width="280" height="3" rx="1.5" fill="#FF6000"/>
            <text x="480" y="70" textAnchor="middle" fill="#FF6000" fontSize="10" fontWeight="800" fontFamily="sans-serif">DATA FIDUCIARY · Section 2(i)</text>
            <text x="480" y="92" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">The Decision Maker</text>
            {['Consent management','Purpose limitation','Data minimisation','Breach notification','Grievance mechanism'].map((t,i)=>(<g key={i}><circle cx="368" cy={118+i*24} r="3" fill="#FF6000" opacity="0.6"/><text x="380" y={122+i*24} fill="rgba(200,214,229,0.55)" fontSize="10" fontFamily="sans-serif">{t}</text></g>))}
            <rect x="360" y="245" width="240" height="22" rx="6" fill="rgba(255, 96, 0,0.07)" stroke="rgba(255, 96, 0,0.2)" strokeWidth="1"/>
            <text x="480" y="260" textAnchor="middle" fill="#FF6000" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">Primary accountability - duty of care</text>
            <rect x="660" y="40" width="265" height="240" rx="12" fill="#071820" stroke="#06d6a028" strokeWidth="1.5"/>
            <rect x="660" y="40" width="265" height="3" rx="1.5" fill="#06d6a0"/>
            <text x="792" y="70" textAnchor="middle" fill="#06d6a0" fontSize="10" fontWeight="800" fontFamily="sans-serif">DATA PROCESSOR · Section 2(k)</text>
            <text x="792" y="92" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">The Executor</text>
            {['Cloud providers (AWS, Azure)','Payroll vendors','Analytics firms','VAPT security providers'].map((t,i)=>(<g key={i}><circle cx="688" cy={118+i*28} r="3" fill="#06d6a0" opacity="0.5"/><text x="700" y={122+i*28} fill="rgba(200,214,229,0.55)" fontSize="10" fontFamily="sans-serif">{t}</text></g>))}
            <rect x="680" y="245" width="225" height="22" rx="6" fill="rgba(6,214,160,0.05)" stroke="rgba(6,214,160,0.2)" strokeWidth="1"/>
            <text x="792" y="260" textAnchor="middle" fill="#06d6a0" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">Secondary accountability - via contract</text>
            <text x="480" y="300" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">Key test: Who determines the PURPOSE of processing? That entity is the Data Fiduciary.</text>
          </svg>
        </div>
        <p className="img-cap">The three DPDP Act roles and their relationships. The key test: who determines the purpose of processing?</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#data-principal">Data Principal</a>
            <a href="#data-fiduciary">Data Fiduciary</a>
            <a href="#data-processor">Data Processor</a>
            <a href="#multiple-roles">Holding Multiple Roles</a>
            <a href="#product-steps">What This Means for Your Product</a>
            <a href="#summary-table">Summary Table</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="series-nav anim">
            <span>📚 DPDP Act Series</span>
            <strong>Part 1: Roles Defined</strong>
            <span>·</span>
            <a href="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp" style={{color:'var(--cy)',textDecoration:'none'}}>Part 2: 8 Rights →</a>
          </div>

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(255, 96, 0,0.3)',paddingLeft:'1.2rem'}}>India's DPDP Act introduces a clear cast of characters - each with distinct rights, obligations, and accountability. Before your organisation can think about compliance, you need to know <strong>who you are in the data ecosystem</strong>. Confusing these roles is not a semantic error - it creates real compliance blind spots in your consent architecture and vendor contracts.</p>

          <div className="role-grid anim">
            <div className="role-card rc-p"><div className="rc-label">Data Principal</div><div className="rh">The Individual</div><div className="rb">The person data is about. Has 8 enforceable rights.</div><div className="rs">Section 2(j) · DPDP Act 2023</div></div>
            <div className="role-card rc-f"><div className="rc-label">Data Fiduciary</div><div className="rh">The Decision Maker</div><div className="rb">Determines purpose and means. Primary accountability.</div><div className="rs">Section 2(i) · DPDP Act 2023</div></div>
            <div className="role-card rc-pr"><div className="rc-label">Data Processor</div><div className="rh">The Executor</div><div className="rb">Processes on behalf of a Fiduciary. Contractual accountability.</div><div className="rs">Section 2(k) · DPDP Act 2023</div></div>
          </div>

          <section id="data-principal">
            <h2>Data Principal - <em>The Person Behind the Data</em></h2>
            <p><strong>Definition (Section 2(j)):</strong> A Data Principal is the individual to whom the personal data relates. If the data is about you, you are the Data Principal.</p>
            <h3>Who qualifies?</h3>
            <ul>
              <li>A customer filling out a KYC form on a fintech app</li>
              <li>An employee whose HR records are maintained by their employer</li>
              <li>A patient whose medical history is stored in a hospital system</li>
              <li>A child - in which case, rights are exercised by the parent or lawful guardian</li>
            </ul>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>Children as Data Principals</strong>
                <p>The DPDP Act gives special protection to minors under 18. Any processing of a child personal data requires verifiable parental consent. Organisations are prohibited from behavioural monitoring or targeted advertising directed at children - even on general-purpose platforms.</p>
              </div>
            </div>
            <p>The Act grants Data Principals 8 enforceable rights - from accessing their data to grievance redressal. These are covered in full in <a href="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>Part 2 of this series on the 8 rights of Data Principals</a>.</p>
          </section>

          <section id="data-fiduciary">
            <h2>Data Fiduciary - <em>The Decision Maker</em></h2>
            <p><strong>Definition (Section 2(i)):</strong> A Data Fiduciary is any person (including a company, firm, or government body) who alone or in conjunction with others determines the <strong>purpose and means</strong> of processing personal data. The term "fiduciary" is deliberate - the law treats this entity as holding data in trust, with a duty of care toward the Data Principal.</p>
            <h3>Who is a Data Fiduciary?</h3>
            <ul>
              <li>An e-commerce platform that collects customer addresses and decides why (order delivery) and how (stored in their database, shared with logistics partners) that data is used</li>
              <li>A hospital that stores patient records and defines retention policies</li>
              <li>An HR SaaS tool that processes employee data for payroll and compliance</li>
            </ul>
            <h3>Core obligations</h3>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Obligation</th><th>What it means</th></tr></thead>
                <tbody>
                  {[['Consent Management','Obtain free, informed, specific, unconditional consent before processing'],['Purpose Limitation','Use data only for the stated purpose'],['Data Minimisation','Collect only what is necessary'],['Accuracy','Keep personal data accurate and updated'],['Storage Limitation','Erase data once the purpose is fulfilled'],['Grievance Mechanism','Maintain a functional grievance officer'],['Breach Notification','Notify the Data Protection Board and affected Data Principals of breaches'],['Children Data','Apply heightened safeguards for minors']].map(([ob,wh],i)=>(<tr key={i}><td>{ob}</td><td>{wh}</td></tr>))}
                </tbody>
              </table>
            </div>
            <div className="callout co-key">
              <span className="co-icon">🔑</span>
              <div className="co-body">
                <strong>The Key Test</strong>
                <p>Who determines the purpose of processing? If you decide why data is collected and how it is used - you are the Data Fiduciary, regardless of what your contracts say. Purpose-determination is the defining criterion, not company size or industry.</p>
              </div>
            </div>
          </section>

          <section id="data-processor">
            <h2>Data Processor - <em>The Executor</em></h2>
            <p><strong>Definition (Section 2(k)):</strong> A Data Processor is any person who processes personal data <strong>on behalf of</strong> a Data Fiduciary.</p>
            <h3>Who is a Data Processor?</h3>
            <ul>
              <li>A cloud hosting provider (AWS, Azure) storing data for a SaaS company</li>
              <li>A payroll vendor processing salary data for an enterprise client</li>
              <li>An analytics firm processing clickstream data on behalf of an e-commerce brand</li>
              <li>A security firm performing VAPT on a client environment</li>
            </ul>
            <p>A Data Processor does <strong>not</strong> decide why data is collected or how it is ultimately used. They act strictly within the scope defined by the Fiduciary. However, this does not mean Processors are off the hook:</p>
            <ul>
              <li>The Fiduciary must ensure their Processors comply via <strong>contractual obligations</strong></li>
              <li>Processors must implement adequate security safeguards independently</li>
              <li>The Fiduciary remains <strong>ultimately accountable</strong> for what their Processor does with the data</li>
            </ul>
          </section>

          <section id="multiple-roles">
            <h2>Can One Entity <em>Hold Multiple Roles?</em></h2>
            <p>Yes - and this is where most compliance confusion originates. Consider an HR SaaS platform:</p>
            <ul>
              <li><strong>Toward your customers (employers):</strong> You are a <strong>Data Processor</strong> - processing employee data on your client behalf, following their configuration.</li>
              <li><strong>Toward your own employees:</strong> You are a <strong>Data Fiduciary</strong> - determining how your team payroll, attendance, and performance data is collected and used.</li>
              <li><strong>Toward your vendors (background verification firms):</strong> You are a <strong>Data Fiduciary</strong> who has engaged a <strong>Data Processor</strong>.</li>
            </ul>
            <div className="callout co-info">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>Why This Matters</strong>
                <p>Getting this mapping wrong creates real compliance blind spots. You may be over-engineering consent workflows for data you process as a Processor - or skipping them where you actually are the Fiduciary. A documented role classification matrix is what survives an audit.</p>
              </div>
            </div>
          </section>

          <section id="product-steps">
            <h2>What This Means <em>for Your Product</em></h2>
            <p>At SecComply, role confusion surfaces repeatedly during DPDP gap analyses. Here is a four-step process to get it right before your next audit:</p>
            <div className="step-list">
              {[['1','Data Flow Mapping','Map every personal data element your product touches. For each flow, ask: are we deciding the purpose, or executing someone else decision?'],['2','Role Classification Matrix','Create a matrix: data category x processing activity x role. This feeds directly into your consent architecture and vendor contracts.'],['3','Contractual Alignment','If you engage Data Processors, your agreements must define scope, security obligations, breach notification timelines, and sub-processing restrictions.'],['4','Role-Aware Compliance Controls','Track obligations separately by role. Mixing Fiduciary and Processor obligations in a single control set creates gaps that auditors will find.']].map(([n,title,body])=>(<div key={n} className="step-item anim"><div className="step-num">{n}</div><div className="step-body"><strong>{title}</strong><span>{body}</span></div></div>))}
            </div>
          </section>

          <section id="summary-table">
            <h2>Summary - <em>All Three Roles</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th></th><th>Data Principal</th><th>Data Fiduciary</th><th>Data Processor</th></tr></thead>
                <tbody>
                  {[['Who','Individual the data is about','Entity determining purpose and means','Entity processing on Fiduciary behalf'],['Key right / duty','Rights to access, correct, erase','Duty of care, consent, breach notification','Duty to implement safeguards per contract'],['Accountability','N/A','Primary accountability','Secondary, via contract'],['DPDP Section','2(j)','2(i)','2(k)']].map(([label,...cells],i)=>(<tr key={i}><td>{label}</td>{cells.map((c,j)=>(<td key={j}>{c}</td>))}</tr>))}
                </tbody>
              </table>
            </div>
            <p>Understanding your role is the starting line for DPDP compliance. Before building consent workflows, drafting privacy notices, or appointing a DPO, be clear on exactly which hat you are wearing. For the full picture on what consent obligations follow from being a Data Fiduciary, read <a href="https://seccomply.net/resources/blog/consent-under-dpdp-act" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>Part 3 of this series on consent under the DPDP Act</a>.</p>
          </section>

          <div className="cta-banner">
            <h3>Unsure Which Role Applies to Your Organisation?</h3>
            <p>SecComply runs structured DPDP gap assessments that map your data flows, classify your roles, and surface your exact compliance obligations - no guesswork.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free DPDP Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" id="sl" href="#" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" id="st" href="#" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            {[
              {q:"What is the difference between a Data Fiduciary and a Data Processor under the DPDP Act?",a:"A Data Fiduciary determines the purpose and means of processing personal data - they decide why data is collected and how it is used. A Data Processor processes data on behalf of a Fiduciary, following the Fiduciary instructions. The Fiduciary holds primary accountability; the Processor obligations are defined by contract."},
              {q:"Can an organisation be both a Data Fiduciary and a Data Processor at the same time?",a:"Yes. This is common for SaaS companies. An HR SaaS platform is a Data Processor toward its enterprise clients but a Data Fiduciary toward its own employees. Each role carries its own set of obligations that must be managed separately - a single compliance programme that does not distinguish between these roles will have gaps."},
              {q:"Does the DPDP Act apply to foreign companies processing data of Indian users?",a:"Yes. The DPDP Act applies to the processing of digital personal data within India and to processing outside India if it involves offering goods or services to individuals in India. Foreign companies with Indian users are in scope regardless of where their servers are located."},
              {q:"What happens if a Data Processor violates obligations - who is accountable?",a:"The Data Fiduciary remains primarily accountable for the actions of their Data Processors. The Fiduciary must ensure Processors comply via contractual obligations. The DPDP Act places ultimate responsibility on the Fiduciary who engaged the Processor, though Processors must also independently implement adequate security safeguards."},
              {q:"How does the DPDP Act define a child Data Principal?",a:"Under the DPDP Act, a child is defined as an individual under 18 years of age. When a Data Principal is a child, their rights are exercised by a parent or lawful guardian. Processing of a child personal data requires verifiable parental consent, and behavioural monitoring or targeted advertising directed at children is prohibited even on general-purpose platforms."},
            ].map((f,i)=>(
              <div key={i} className="faq-item">
                <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>{f.q}</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a"><p>{f.a}</p></div>
              </div>
            ))}
          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#data-principal" className="toc-link">Data Principal</a></li>
              <li><a href="#data-fiduciary" className="toc-link">Data Fiduciary</a></li>
              <li><a href="#data-processor" className="toc-link">Data Processor</a></li>
              <li><a href="#multiple-roles" className="toc-link">Multiple Roles</a></li>
              <li><a href="#product-steps" className="toc-link">Product Implications</a></li>
              <li><a href="#summary-table" className="toc-link">Summary Table</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 DPDP Act Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor">▶ Part 1: Roles Defined</a></li>
              <li><a href="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp">Part 2: 8 Rights of Data Principals</a></li>
              <li><a href="https://seccomply.net/resources/blog/consent-under-dpdp-act">Part 3: Consent Under DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/significant-data-fiduciary-sdf">Part 4: Significant Data Fiduciary</a></li>
              <li><a href="https://seccomply.net/resources/blog/data-protection-officer-dpo-dpdp">Part 5: DPO Under DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough">Part 6: Applicability Quiz</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">DPDP Act</span><span className="tag">Data Principal</span><span className="tag">Data Fiduciary</span><span className="tag">Data Processor</span><span className="tag">India Privacy</span><span className="tag">Compliance</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Need a DPDP Gap Assessment?</h4>
            <p>We map your data flows, classify your roles, and surface your exact compliance obligations.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
