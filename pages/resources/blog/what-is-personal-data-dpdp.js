import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function WhatIsPersonalDataDPDP() {
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
        <title>What Counts as Personal Data Under the DPDP Act? | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="The DPDP Act's definition of personal data is deliberately broad. Here is what your product and engineering teams need to know - including the grey zones where most companies get it wrong." />
        <meta name="keywords" content="personal data DPDP Act, what is personal data India, DPDP personal data definition, IP address personal data, device ID personal data, pseudonymised data DPDP, work email personal data, personal data scope India" />
        <meta property="og:title" content="What Counts as Personal Data Under the DPDP Act?" />
        <meta property="og:description" content="The DPDP Act's definition of personal data is deliberately broad. Here is what your product and engineering teams need to know - including the grey zones where most companies get it wrong." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/what-is-personal-data-dpdp" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/what-is-personal-data-dpdp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"What Counts as Personal Data Under the DPDP Act?","description":"The DPDP Act definition of personal data is deliberately broad. Here is what your product and engineering teams need to know - including the grey zones.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply Technologies"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/what-is-personal-data-dpdp","articleSection":"DPDP Act"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"Personal Data DPDP","item":"https://seccomply.net/resources/blog/what-is-personal-data-dpdp"}]}]}) }} />
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
    .co-key{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
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
    .series-nav{display:flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;background:rgba(232,99,43,.05);border:1px solid rgba(232,99,43,.15);border-radius:10px;margin-bottom:2rem;font-size:.8rem;flex-wrap:wrap}
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
    @media(max-width:900px){.tier-grid{grid-template-columns:1fr 1fr}.scope-grid{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}.tier-grid{grid-template-columns:1fr}}
`}</style>
      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>DPDP Act</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🇮🇳 DPDP Act 2023</span>
          <span className="badge badge-bl">📋 Data Privacy</span>
          <span className="badge badge-am">🏢 India Compliance</span>
          <span className="badge badge-gr">Phase 1 - Basics</span>
        </div>
        <h1 className="hero-h1">What Counts as <em>Personal Data</em> Under the DPDP Act?</h1>
        <p className="hero-sub">Before you can build a DPDP compliance programme, you need to know what you are protecting. The Act's definition is deliberately broad - if you are assuming only Aadhaar or medical records are in scope, you will have serious gaps. Here is the breakdown for your product and engineering teams.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Security Engineer, SecComply Technologies</span><span className="dot">·</span><span id="read-time">📖 6 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=480&fit=crop" alt="What counts as personal data DPDP Act India definition" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">The key phrase in the DPDP Act's definition: 'identifiable by or in relation to'. Personal data does not need to identify someone on its own - it is in scope if it can identify someone when combined with other data you hold.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pg8" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(232,99,43,0.04)"/></pattern></defs>
          <rect width="960" height="300" fill="url(#pg8)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">Personal Data Under the DPDP Act - In Scope vs Out of Scope</text>
          <rect x="30" y="38" width="450" height="240" rx="14" fill="#071820" stroke="rgba(6,214,160,0.25)" strokeWidth="1.5"/>
          <rect x="30" y="38" width="450" height="3" rx="1.5" fill="#06d6a0"/>
          <text x="255" y="65" textAnchor="middle" fill="#06d6a0" fontSize="11" fontWeight="800" fontFamily="sans-serif">✓ IN SCOPE - PERSONAL DATA</text>
          
          <text x="55" y="90" fill="#06d6a0" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Identity:</text>
          <text x="120" y="90" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">Name, DOB, Aadhaar, PAN, Passport</text>
          <text x="55" y="110" fill="#06d6a0" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Contact:</text>
          <text x="120" y="110" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">Email, phone, address, IP address</text>
          <text x="55" y="130" fill="#06d6a0" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Financial:</text>
          <text x="120" y="130" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">Bank details, card numbers, UPI IDs</text>
          <text x="55" y="150" fill="#06d6a0" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Health:</text>
          <text x="120" y="150" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">Medical records, prescriptions, fitness</text>
          <text x="55" y="170" fill="#06d6a0" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Biometric:</text>
          <text x="120" y="170" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">Fingerprints, facial data, iris scans</text>
          <text x="55" y="190" fill="#06d6a0" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Behavioural:</text>
          <text x="130" y="190" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">Browsing history, purchase patterns</text>
          <text x="55" y="210" fill="#06d6a0" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Location:</text>
          <text x="120" y="210" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">GPS coordinates, location history</text>
          <text x="55" y="230" fill="#06d6a0" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Employment:</text>
          <text x="135" y="230" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">Salary, performance, leave records</text>
          <rect x="50" y="248" width="410" height="22" rx="6" fill="rgba(6,214,160,0.06)" stroke="rgba(6,214,160,0.2)" strokeWidth="1"/>
          <text x="255" y="262" textAnchor="middle" fill="#06d6a0" fontSize="9" fontWeight="700" fontFamily="sans-serif">Everything above = compliance obligations apply</text>
          <rect x="510" y="38" width="420" height="240" rx="14" fill="#180a0d" stroke="rgba(255,77,109,0.3)" strokeWidth="1.5"/>
          <rect x="510" y="38" width="420" height="3" rx="1.5" fill="#ff4d6d"/>
          <text x="720" y="65" textAnchor="middle" fill="#ff4d6d" fontSize="11" fontWeight="800" fontFamily="sans-serif">✗ OUT OF SCOPE</text>
          <text x="535" y="100" fill="#ff4d6d" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Anonymised:</text>
          <text x="615" y="100" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">Truly anonymised data -</text>
          <text x="615" y="114" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">genuinely irreversible</text>
          <text x="535" y="145" fill="#ff4d6d" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Company Data:</text>
          <text x="625" y="145" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">CIN, GST number, company</text>
          <text x="625" y="159" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">name (legal entity, not individual)</text>
          <text x="535" y="190" fill="#ff4d6d" fontSize="9.5" fontWeight="700" fontFamily="sans-serif">Aggregate Stats:</text>
          <text x="640" y="190" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">"60% of users from Maharashtra"</text>
          <text x="640" y="204" fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">- no individual identified</text>
          <rect x="530" y="235" width="380" height="32" rx="8" fill="rgba(255,77,109,0.07)" stroke="rgba(255,77,109,0.2)" strokeWidth="1"/>
          <text x="720" y="249" textAnchor="middle" fill="#ff4d6d" fontSize="9" fontWeight="700" fontFamily="sans-serif">Only truly irreversible anonymisation qualifies</text>
          <text x="720" y="262" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif">Pseudonymisation is explicitly IN SCOPE</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#legal-definition">The Legal Definition</a>
            <a href="#in-scope">What Is In Scope</a>
            <a href="#grey-zones">The Grey Zones</a>
            <a href="#action-items">What Your Product Team Should Do Now</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="series-nav anim">
            <span>📚 DPDP Act Series</span>
            <strong>Phase 1 - Basics</strong>
          </div>

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(232,99,43,0.3)',paddingLeft:'1.2rem'}}>Before you can build a DPDP compliance programme, you need to know what you are protecting. The Act's definition is deliberately broad - if you are assuming only Aadhaar numbers or medical records are in scope, you are going to have serious gaps. Here is the breakdown your product and engineering teams need - including the grey zones where most companies get it wrong.</p>

          <section id="legal-definition">
            <h2>The Legal <em>Definition</em></h2>
            <div className="callout co-key">
              <span className="co-icon">📜</span>
              <div className="co-body">
                <strong>DPDP Act 2023</strong>
                <p>"Any data about an individual who is identifiable by or in relation to such data."</p>
              </div>
            </div>
            <p>The key phrase: <strong>"identifiable by or in relation to"</strong>. Personal data does not need to identify someone on its own. It is in scope if it can identify someone when combined with other data you hold.</p>
            <p>A user ID alone might mean nothing. Linked to a name and email in your database - both become personal data.</p>
            <div className="callout co-info">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>Scope Is Digital Only</strong>
                <p>Data in electronic form, or data originally collected offline and subsequently digitised. Pure paper records outside any digital workflow are outside the DPDP Act - but in practice, very little remains genuinely non-digital in any modern organisation.</p>
              </div>
            </div>
          </section>

          <section id="in-scope">
            <h2>What Is <em>In Scope vs Out of Scope</em></h2>
            <div className="scope-grid">
              <div className="scope-col sc-in">
                <h4>✓ IN SCOPE - Personal Data</h4>
                <ul>
                  <li><strong>Identity:</strong> Name, DOB, Aadhaar, PAN, Passport</li>
                  <li><strong>Contact:</strong> Email, phone, address, IP address</li>
                  <li><strong>Financial:</strong> Bank details, card numbers, UPI IDs</li>
                  <li><strong>Health:</strong> Medical records, prescriptions, fitness data</li>
                  <li><strong>Biometric:</strong> Fingerprints, facial data, iris scans</li>
                  <li><strong>Behavioural:</strong> Browsing history, purchase patterns</li>
                  <li><strong>Location:</strong> GPS coordinates, location history</li>
                  <li><strong>Employment:</strong> Salary, performance reviews, leave records</li>
                </ul>
              </div>
              <div className="scope-col sc-out">
                <h4>✗ OUT OF SCOPE</h4>
                <ul>
                  <li><strong>Truly anonymised data</strong> (genuinely irreversible)</li>
                  <li><strong>Company data:</strong> CIN, GST number, company name</li>
                  <li><strong>Aggregate stats:</strong> "60% users from Maharashtra"</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="grey-zones">
            <h2>The Grey Zones - <em>Where Your Team Gets Confused</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Data Type</th><th>The Question</th><th>The Answer</th></tr></thead>
                <tbody>
                  {[['Device IDs / IMEIs','Not a name - can it identify someone?','Yes, when linked to a user account'],['IP Addresses','Just a number - personal data?','Yes, in most contexts - treat as in scope'],['Pseudonymised data','We replaced names with user IDs','Still in scope - you hold the lookup key'],['ML / inferred data','Credit scores, predicted health risk we generated','In scope if linked to an identifiable individual'],['Photos / videos','Profile pics, CCTV, call recordings','In scope if individuals are identifiable'],['Work email addresses','It is a company email, not personal','Still personal data - identifies a natural person']].map(([d,q,a],i)=>(<tr key={i}><td>{d}</td><td>{q}</td><td style={{color:'var(--cy)'}}>{a}</td></tr>))}
                </tbody>
              </table>
            </div>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>Pseudonymisation vs Anonymisation - The Most Common Mistake</strong>
                <p>Replacing names with user IDs in analytics while keeping the reverse-lookup table in your database is pseudonymisation, not anonymisation. It remains fully in scope under the DPDP Act. True anonymisation requires that re-identification is not reasonably possible using any data you hold - a much higher bar than most teams assume.</p>
              </div>
            </div>
          </section>

          <section id="action-items">
            <h2>What Your Product Team <em>Should Do Now</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>#</th><th>Action</th><th>What It Catches</th></tr></thead>
                <tbody>
                  {[['1','Run a field-by-field data inventory for your product','Hidden data collection you forgot about'],['2','Audit your analytics stack - Mixpanel, Amplitude, Google Analytics','Vendor tools processing personal data without DPAs'],['3','Check what vendors collect independently (client-side)','Identifiers grabbed without explicit configuration'],['4','Apply data minimisation - delete fields with no clear purpose','"Just in case" fields are compliance liability']].map(([n,a,c],i)=>(<tr key={i}><td>{n}</td><td>{a}</td><td>{c}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p>Once you have a full inventory of your personal data, the next step is understanding who the obligations sit with - that is a question of <a href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>your role under the DPDP Act</a>. And for the consent architecture that must sit on top of this inventory, read <a href="https://seccomply.net/resources/blog/consent-under-dpdp-act" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>our guide on consent under the DPDP Act</a>.</p>
          </section>

          <div className="cta-banner">
            <h3>Ready to Build DPDP Compliance?</h3>
            <p>SecComply delivers structured DPDP compliance programmes for Indian startups and enterprises - from gap assessment to audit-ready documentation.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free DPDP Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/what-is-personal-data-dpdp" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/what-is-personal-data-dpdp&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is a work email address personal data?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. sanil@company.in identifies a specific individual and is personal data under the DPDP Act. The fact that it is professional or issued by an employer does not matter - it still relates to an identifiable natural person. Work emails processed by your HR system, CRM, or email marketing tools are all in scope.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>We use randomised user IDs in analytics. Is that still personal data?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. If you can link that ID back to an individual - which you almost certainly can since it is tied to a user account - it is personal data. This is pseudonymisation, not anonymisation. The test under the DPDP Act is what is possible using all data you hold, not whether the ID is identifiable in isolation.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What about employee data - we were not thinking about that?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Most companies focus on customer data and forget HR. Salary, attendance, performance reviews, health information, payroll bank details - all in scope. HR systems, payroll software, and background verification vendors all need to be in your compliance inventory. Employee data is one of the most commonly overlooked areas of DPDP scope.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Are IP addresses really personal data under the DPDP Act?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>In most practical contexts, yes. An IP address can identify a specific individual when combined with other information - browsing logs, account activity, geolocation. The DPDP Act's 'identifiable by or in relation to' standard treats IP addresses as personal data in the vast majority of commercial processing scenarios. Treat them as in scope unless you can demonstrate genuine non-identifiability.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What about ML-inferred data like credit scores we generate ourselves?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Inferred or derived data - credit scores, predicted health risk, churn probability - is personal data if it is linked to an identifiable individual. It does not matter that you generated it rather than collected it. Under the DPDP Act, you hold it, you are the Data Fiduciary for it, and all obligations (including access, correction, and erasure rights) apply.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#legal-definition" className="toc-link">Legal Definition</a></li>
              <li><a href="#in-scope" className="toc-link">In Scope vs Out</a></li>
              <li><a href="#grey-zones" className="toc-link">Grey Zones</a></li>
              <li><a href="#action-items" className="toc-link">Action Items</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 DPDP Act Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor">Part 1: Roles Defined</a></li>
              <li><a href="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp">Part 2: 8 Rights of Data Principals</a></li>
              <li><a href="https://seccomply.net/resources/blog/consent-under-dpdp-act">Part 3: Consent Under DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/significant-data-fiduciary-sdf">Part 4: Significant Data Fiduciary</a></li>
              <li><a href="https://seccomply.net/resources/blog/data-protection-officer-dpo-dpdp">Part 5: DPO Under DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough">Part 6: Applicability Quiz</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">DPDP Act</span><span className="tag">Personal Data</span><span className="tag">Data Inventory</span><span className="tag">Pseudonymisation</span><span className="tag">IP Address</span><span className="tag">Privacy Engineering</span></div>
          </div>
          <div className="sb-cta">
            <h4>Need DPDP Compliance Help?</h4>
            <p>We run structured DPDP gap assessments - from data mapping to audit-ready documentation.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
