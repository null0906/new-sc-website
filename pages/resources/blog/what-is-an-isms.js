import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function WhatIsAnISMS() {
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
        <title>What Is an ISMS? Information Security Management System in Plain English | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="An ISMS is not a product or a document. It is a management system for identifying security risks, treating them, implementing controls, and proving they work. Here is what it actually looks like." />
        <meta name="keywords" content="what is an ISMS, information security management system explained, ISMS ISO 27001, ISMS components, ISMS PDCA cycle, ISMS for startups, ISMS risk management, ISMS scope" />
        <meta property="og:title" content="What Is an ISMS? Information Security Management System in Plain English" />
        <meta property="og:description" content="An ISMS is not a product or a document. It is a management system for identifying security risks, treating them, implementing controls, and proving they work. Here is what it actually looks like." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/what-is-an-isms" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/what-is-an-isms" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"What Is an ISMS? Information Security Management System in Plain English","description":"An ISMS is a management system for identifying security risks, treating them, implementing controls, and proving they work.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/what-is-an-isms","articleSection":"ISO 27001"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"What Is an ISMS","item":"https://seccomply.net/resources/blog/what-is-an-isms"}]}]}) }} />
      </Head>

      <style jsx global>{`
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
    .co-danger{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .co-gr{background:rgba(6,214,160,.05);border:1px solid rgba(6,214,160,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .check-list{display:flex;flex-direction:column;gap:.55rem;margin:1.5rem 0}
    .check-item{display:flex;gap:.85rem;align-items:flex-start;padding:.9rem 1.1rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px}
    .check-item.yes{border-left:3px solid var(--gr)}
    .check-item.no{border-left:3px solid #ff4d6d}
    .check-mark{font-size:1rem;flex-shrink:0;margin-top:1px;font-weight:800}
    .check-mark.y{color:var(--gr)}
    .check-mark.n{color:#ff4d6d}
    .check-body{font-size:.89rem;color:var(--tb)}
    .scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .scope-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem}
    .scope-col.sc-in{border-top:3px solid var(--gr)}
    .scope-col.sc-out{border-top:3px solid #ff4d6d}
    .scope-col h4{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.8rem}
    .sc-in h4{color:var(--gr)}
    .sc-out h4{color:#ff4d6d}
    .scope-col ul li{font-size:.82rem;padding:.28rem 0 .28rem 1.1rem}
    .series-nav{display:flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;background:rgba(255, 96, 0,.05);border:1px solid rgba(255, 96, 0,.15);border-radius:10px;margin-bottom:2rem;font-size:.8rem;flex-wrap:wrap}
    .series-nav span{color:var(--tm)}.series-nav strong{color:var(--cy)}
    .tier-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:.75rem;margin:2rem 0}
    .tier-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1rem;text-align:center}
    .tier-card.t1{border-top:3px solid var(--tm)}
    .tier-card.t2{border-top:3px solid var(--gr)}
    .tier-card.t3{border-top:3px solid var(--am)}
    .tier-card.t4{border-top:3px solid #ff4d6d}
    .tier-card .tn{font-size:.65rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.3rem}
    .t1 .tn{color:var(--tm)}.t2 .tn{color:var(--gr)}.t3 .tn{color:var(--am)}.t4 .tn{color:#ff4d6d}
    .tier-card .tt{font-size:.88rem;font-weight:700;color:var(--tx);margin-bottom:.3rem}
    .tier-card .td{font-size:.77rem;color:var(--tm);line-height:1.5}
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
    @media(max-width:900px){.tier-grid{grid-template-columns:1fr 1fr}.scope-grid{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}.tier-grid{grid-template-columns:1fr}}
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
          <span className="badge badge-bl">🛡️ Information Security</span>
          <span className="badge badge-gr">🚀 Startup Guide</span>
        </div>
        <h1 className="hero-h1">What Is an ISMS? - <em>Information Security Management System</em> in Plain English</h1>
        <p className="hero-sub">An ISMS is not a product you buy or a document you write. It is a management system - a structured, repeatable way of identifying security risks, deciding how to treat them, implementing controls, and proving they work. Here is what that actually looks like in practice.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&h=480&fit=crop" alt="ISMS Information Security Management System explained" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">An ISMS is a management system - it governs how your organisation identifies, manages, and continuously improves its approach to information security.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pgs2" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(255, 96, 0,0.04)"/></pattern></defs>
          <rect width="960" height="280" fill="url(#pgs2)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">The ISMS - Four Core Components</text>
          {[{t:"PLAN",sub:"Risk assessment, scope, objectives",col:"#818cf8",x:50},{t:"DO",sub:"Implement controls, policies, training",col:"#FF6000",x:280},{t:"CHECK",sub:"Internal audit, monitoring, review",col:"#06d6a0",x:520},{t:"ACT",sub:"Correct, improve, iterate",col:"#ffb703",x:750}].map(({t,sub,col,x},i) => (
            <g key={i}>
              <rect x={x} y="45" width="180" height="160" rx="14" fill="#091826" stroke={col+"25"} strokeWidth="1.5"/>
              <rect x={x} y="45" width="180" height="4" rx="2" fill={col}/>
              <text x={x+90} y="90" textAnchor="middle" fill={col} fontSize="24" fontWeight="800" fontFamily="sans-serif">{t}</text>
              <text x={x+90} y="115" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9.5" fontFamily="sans-serif">{sub}</text>
              <text x={x+90} y="175" textAnchor="middle" fill={col} fontSize="9" fontWeight="700" fontFamily="sans-serif">Phase {i+1} of 4</text>
            </g>
          ))}
          {[{x1:230,x2:276},{x1:460,x2:516},{x1:700,x2:746}].map(({x1,x2},i) => (
            <line key={i} x1={x1} y1="125" x2={x2} y2="125" stroke="rgba(200,214,229,0.2)" strokeWidth="2" markerEnd="url(#ar1)"/>
          ))}
          <defs><marker id="ar1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="rgba(200,214,229,0.3)"/></marker></defs>
          <text x="480" y="240" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="10" fontWeight="700" fontFamily="sans-serif">PLAN → DO → CHECK → ACT → REPEAT</text>
          <text x="480" y="260" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">The PDCA cycle runs continuously. Each cycle improves the system. The ISMS is never "done" - it is always being improved.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-is-it">What an ISMS Actually Is</a>
            <a href="#components">The Core Components</a>
            <a href="#pdca">The PDCA Cycle</a>
            <a href="#scope">Defining Your Scope</a>
            <a href="#risk">Risk Assessment and Treatment</a>
            <a href="#controls">Controls and Evidence</a>
            <a href="#audit">Audit and Review</a>
            <a href="#not-an-isms">What an ISMS Is Not</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(255, 96, 0,0.3)',paddingLeft:'1.2rem'}}>An ISMS - Information Security Management System - is the most misunderstood acronym in compliance. Most people hear it and picture a document, a tool, or a checklist. It is none of those things. <strong>An ISMS is a management system</strong> - a structured, repeatable way of identifying security risks, deciding how to treat them, implementing controls, and proving they work. ISO 27001 is the international standard that defines what an ISMS must contain.</p>

          <section id="what-is-it">
            <h2>What an ISMS <em>Actually Is</em></h2>
            <p>Think of an ISMS as the operating system for how your organisation handles information security. It is not a single document or a single tool - it is the entire ecosystem of policies, processes, people, technology, and evidence that together ensure your organisation manages security risks systematically rather than reactively.</p>
            <p>An ISMS answers four questions continuously: <strong>What could go wrong?</strong> (risk assessment), <strong>What are we doing about it?</strong> (risk treatment and controls), <strong>Is it working?</strong> (monitoring, audit, review), and <strong>How do we improve?</strong> (corrective actions, management review).</p>
          </section>

          <section id="components">
            <h2>The Core <em>Components</em></h2>
            <ul>
              <li><strong>Scope:</strong> What business functions, systems, locations, and data flows are covered by the ISMS. Not everything has to be in scope - but what is in scope must be managed rigorously.</li>
              <li><strong>Information Security Policy:</strong> The top-level statement of management commitment to information security. Short, signed by leadership, and referenced by every other policy.</li>
              <li><strong>Risk Assessment:</strong> A formal methodology for identifying risks, assessing their likelihood and impact, and deciding how to treat each one.</li>
              <li><strong>Statement of Applicability (SoA):</strong> A document listing all 93 Annex A controls and stating which apply, which do not, and why. This is one of the most important audit artefacts.</li>
              <li><strong>Controls:</strong> The technical and organisational measures you implement to treat identified risks - access controls, encryption, incident response, vendor management, etc.</li>
              <li><strong>Internal Audit:</strong> A periodic, independent review of whether your ISMS is operating as documented.</li>
              <li><strong>Management Review:</strong> A formal meeting where leadership reviews the ISMS performance, risk posture, and improvement opportunities.</li>
            </ul>
          </section>

          <section id="pdca">
            <h2>The PDCA Cycle - <em>How an ISMS Operates</em></h2>
            <p>An ISMS runs on the PDCA (Plan-Do-Check-Act) cycle - an iterative management method for continuous improvement:</p>
            <ul>
              <li><strong>Plan:</strong> Define the ISMS scope, conduct risk assessment, set objectives, and design controls. This is where you figure out what needs protecting and how.</li>
              <li><strong>Do:</strong> Implement the controls, write policies and procedures, train staff, and put the ISMS into operation. This is where theory becomes practice.</li>
              <li><strong>Check:</strong> Monitor and measure the effectiveness of controls, conduct internal audits, and review performance metrics. This is where you find out if it is actually working.</li>
              <li><strong>Act:</strong> Address findings from audits and reviews, implement corrective actions, and feed lessons learned back into the next cycle. This is where the ISMS gets better.</li>
            </ul>
            <p>The cycle runs continuously. Most organisations run it in annual cycles aligned with their certification audit schedule, but the monitoring and improvement activities happen throughout the year.</p>
          </section>

          <section id="scope">
            <h2>Defining Your <em>Scope</em></h2>
            <p>The ISMS scope defines the boundaries of what the management system covers. For a typical SaaS startup, the scope might be: "The development, hosting, and delivery of the [Product Name] SaaS platform, including the associated cloud infrastructure, corporate IT systems, and supporting business processes operated from [Location]."</p>
            <div className="callout co-key">
              <span className="co-icon">🔑</span>
              <div className="co-body">
                <strong>Scope Strategy</strong>
                <p>Start tight. A smaller, well-defined scope achieves certification faster and at lower cost. Many startups certify their core SaaS product and primary cloud environment first, then expand scope in subsequent years. A tight initial scope is a feature, not a compromise - it is the standard approach recommended by most certification bodies.</p>
              </div>
            </div>
          </section>

          <section id="risk">
            <h2>Risk Assessment <em>and Treatment</em></h2>
            <p>The risk assessment is the engine of the ISMS. It identifies what could go wrong, how likely it is, and how severe the impact would be. For a typical startup, expect 40-80 identified risks across categories like data breaches, unauthorised access, service disruption, vendor failures, and human error.</p>
            <p>Each risk is then treated through one of four options: <strong>mitigate</strong> (implement controls to reduce likelihood or impact), <strong>accept</strong> (acknowledge the risk and document the decision), <strong>transfer</strong> (shift the risk to a third party, e.g. insurance), or <strong>avoid</strong> (eliminate the activity that creates the risk). For the full risk assessment methodology, read our <a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>Risk Assessment in ISO 27001 guide</a>.</p>
          </section>

          <section id="controls">
            <h2>Controls <em>and Evidence</em></h2>
            <p>Controls are the measures you implement to treat identified risks. ISO 27001:2022 defines 93 controls across four categories: Organisational (37), People (8), Physical (14), and Technological (34). Not all 93 apply to every organisation - your Statement of Applicability documents which apply and which do not.</p>
            <p>For each control that applies, you need three things: a <strong>policy or procedure</strong> that documents what the control is, <strong>technical implementation</strong> that enforces it, and <strong>evidence</strong> that it is operating. Auditors test all three. A policy without implementation is a finding. Implementation without evidence is also a finding. For the complete control breakdown, see our <a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>ISO 27001 Annex A - 93 Controls Explained guide</a>.</p>
          </section>

          <section id="audit">
            <h2>Audit and <em>Review</em></h2>
            <p>An ISMS requires two types of periodic review:</p>
            <ul>
              <li><strong>Internal Audit (Clause 9.2):</strong> You (or an independent internal auditor) review the ISMS against its own documented requirements and ISO 27001. The internal audit must be conducted at least once before the certification audit. Findings are documented and corrective actions tracked.</li>
              <li><strong>Management Review (Clause 9.3):</strong> Leadership formally reviews the ISMS performance - risk posture changes, audit findings, incident trends, resource needs, and improvement opportunities. This meeting must be documented with minutes and action items.</li>
            </ul>
          </section>

          <section id="not-an-isms">
            <h2>What an ISMS <em>Is Not</em></h2>
            <ul>
              <li><strong>Not a product.</strong> You cannot buy an ISMS off the shelf. GRC platforms help you manage it, but the ISMS is the system itself - the policies, processes, people, and evidence.</li>
              <li><strong>Not a document.</strong> The ISMS includes documents (policies, procedures, risk registers), but it is not defined by them. An ISMS with perfect documentation but no operational controls is not an ISMS.</li>
              <li><strong>Not a one-time project.</strong> The ISMS runs continuously. It is never "done." The PDCA cycle ensures it improves with every iteration.</li>
              <li><strong>Not just IT security.</strong> An ISMS covers people (training, HR security), physical security (office access, clean desk), and organisational controls (vendor management, business continuity) - not just firewalls and encryption.</li>
            </ul>
          </section>

          <div className="cta-banner">
            <h3>Ready to Start Your ISO 27001 Journey?</h3>
            <p>SecComply helps Indian startups and global enterprises implement ISO 27001 from gap assessment to certification - with realistic timelines and fixed-scope engagements.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free ISO 27001 Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/what-is-an-isms" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/what-is-an-isms&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What does ISMS stand for?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>ISMS stands for Information Security Management System. It is a structured framework of policies, processes, technology, and evidence that governs how an organisation identifies, manages, and continuously improves its approach to information security. ISO 27001 is the international standard that defines what an ISMS must contain.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is an ISMS the same as ISO 27001?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Not exactly. ISO 27001 is the standard that defines what an ISMS must look like. An ISMS is the actual management system you build and operate. You can have an ISMS without being ISO 27001 certified - but if you want the certification, your ISMS must meet ISO 27001 requirements.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How long does it take to build an ISMS?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>For a typical startup with 20-100 employees, building an ISMS from scratch takes 4-9 months - from initial scoping through to certification. If you have existing security practices (MFA, access reviews, incident response), much of the work is documenting and formalising what you already do.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does every employee need to be involved in the ISMS?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Every employee needs security awareness training and must follow the ISMS policies. However, the core ISMS team is typically small - an ISMS owner or Information Security Manager, plus representatives from engineering, HR, and operations. Leadership involvement is required for management reviews.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can a small startup have an ISMS?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. ISO 27001 scales to any organisation size. A 5-person startup will have a simpler ISMS than a 5,000-person enterprise - fewer assets, fewer risks, fewer controls - but the structure is the same. The standard explicitly allows scope to be proportional to the organisation.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#what-is-it" className="toc-link">What It Is</a></li>
              <li><a href="#components" className="toc-link">Core Components</a></li>
              <li><a href="#pdca" className="toc-link">PDCA Cycle</a></li>
              <li><a href="#scope" className="toc-link">Defining Scope</a></li>
              <li><a href="#risk" className="toc-link">Risk Assessment</a></li>
              <li><a href="#controls" className="toc-link">Controls & Evidence</a></li>
              <li><a href="#audit" className="toc-link">Audit & Review</a></li>
              <li><a href="#not-an-isms" className="toc-link">What It Is Not</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 ISO 27001 Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27001-explained-startups">ISO 27001 Explained for Startups</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-self-assessment">ISO 27001 Self-Assessment Guide</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-vs-soc2-vs-gdpr">ISO 27001 vs SOC 2 vs GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-is-an-isms">▶ What Is an ISMS</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-business-value">Business Value of ISO 27001</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls">Annex A - 93 Controls</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment">Risk Assessment in ISO 27001</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISMS</span><span className="tag">ISO 27001</span><span className="tag">Information Security</span><span className="tag">Management System</span><span className="tag">PDCA</span><span className="tag">Risk Assessment</span><span className="tag">Startup</span></div>
          </div>
          <div className="sb-cta">
            <h4>Need ISO 27001 Certification?</h4>
            <p>Gap assessment to certification - we handle the entire journey.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
