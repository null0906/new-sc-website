import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function WhatCountsPersonalDataGDPR() {
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
        <title>What Counts as Personal Data Under GDPR? With Real Examples | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="Under GDPR, personal data catches more than names and emails. IP addresses, cookie IDs, device IDs, pseudonymous tokens, and inferred attributes all count. Here is the definition with real-world examples and the combination trap." />
        <meta name="keywords" content="what is personal data GDPR, GDPR personal data definition, GDPR personal data examples, IP address GDPR, cookie personal data, pseudonymous data GDPR, special category data GDPR, anonymous vs pseudonymous GDPR" />
        <meta property="og:title" content="What Counts as Personal Data Under GDPR? With Real Examples" />
        <meta property="og:description" content="Under GDPR, personal data catches more than names and emails. IP addresses, cookie IDs, device IDs, pseudonymous tokens, and inferred attributes all count. Here is the definition with real-world examples and the combination trap." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/what-counts-personal-data-gdpr" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Gauri Khatate" />
        <meta property="article:tag" content="GDPR" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/what-counts-personal-data-gdpr" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"What Counts as Personal Data Under GDPR? With Real Examples","description":"Under GDPR, personal data catches more than names and emails. IP addresses, cookies, device IDs, and inferred attributes all count.","author":{"@type":"Person","name":"Gauri Khatate","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/what-counts-personal-data-gdpr","articleSection":"GDPR"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"Personal Data GDPR","item":"https://seccomply.net/resources/blog/what-counts-personal-data-gdpr"}]}]}) }} />
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
        <span style={{color:'var(--tb)'}}>What Counts as Personal Data Under ...</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🇪🇺 GDPR</span>
          <span className="badge badge-bl">📋 Data Privacy</span>
          <span className="badge badge-gr">🚀 Startup Guide</span>
        </div>
        <h1 className="hero-h1">What Counts as Personal Data Under GDPR? - <em>With Real Examples</em></h1>
        <p className="hero-sub">The short answer: more than you think. Under GDPR, personal data is not just names and emails - it is the invisible exhaust your product emits: IPs, cookies, device IDs, behavioural logs, pseudonymous identifiers, inferred attributes. Here is the breakdown with real-world examples.</p>

        <div className="author-strip">
          <div className="avatar">GK</div>
          <div className="author-info">
            <div className="aname">Gauri Khatate</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 5 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=480&fit=crop" alt="What counts as personal data GDPR examples definition" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">The question is not whether a field looks personal. It is whether, given what you already hold, a person can be singled out. If the answer is yes - even theoretically - GDPR has an opinion about how you treat that row.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pgh" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(255, 96, 0,0.04)"/></pattern></defs>
          <rect width="960" height="280" fill="url(#pgh)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">Personal Data Under GDPR - What Most Teams Get Wrong</text>
          <rect x="30" y="38" width="580" height="210" rx="14" fill="#071820" stroke="rgba(6,214,160,0.25)" strokeWidth="1.5"/>
          <rect x="30" y="38" width="580" height="4" rx="2" fill="#06d6a0"/>
          <text x="320" y="65" textAnchor="middle" fill="#06d6a0" fontSize="11" fontWeight="800" fontFamily="sans-serif">YES - THIS IS PERSONAL DATA UNDER GDPR</text>
          {["Dynamic IP address in server logs","Cookie ID used for analytics","Mobile advertising ID (IDFA, GAID)","Licence plate in dashcam footage","Voice recording from support call","Pseudonymised customer ID (user_a7f9c2)","Photo uploaded to signup flow","Work email: jdoe@acme.com"].map((t,i) => (
            <text key={i} x="55" y={90+i*20} fill="rgba(200,214,229,0.6)" fontSize="10" fontFamily="sans-serif">✓ {t}</text>
          ))}
          <rect x="640" y="38" width="290" height="210" rx="14" fill="#180a0d" stroke="rgba(255,77,109,0.25)" strokeWidth="1.5"/>
          <rect x="640" y="38" width="290" height="4" rx="2" fill="#ff4d6d"/>
          <text x="785" y="65" textAnchor="middle" fill="#ff4d6d" fontSize="11" fontWeight="800" fontFamily="sans-serif">NOT PERSONAL DATA</text>
          <text x="665" y="95" fill="rgba(200,214,229,0.6)" fontSize="10" fontFamily="sans-serif">✗ Truly anonymous data</text>
          <text x="678" y="112" fill="rgba(200,214,229,0.45)" fontSize="9" fontFamily="sans-serif">(irreversible - no one can re-identify)</text>
          <text x="665" y="140" fill="rgba(200,214,229,0.6)" fontSize="10" fontFamily="sans-serif">✗ Company-level data</text>
          <text x="678" y="157" fill="rgba(200,214,229,0.45)" fontSize="9" fontFamily="sans-serif">(CIN, GST - legal entity, not person)</text>
          <text x="665" y="185" fill="rgba(200,214,229,0.6)" fontSize="10" fontFamily="sans-serif">✗ Aggregate statistics</text>
          <text x="678" y="202" fill="rgba(200,214,229,0.45)" fontSize="9" fontFamily="sans-serif">("60% of users from Germany")</text>
          <text x="480" y="268" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">The test: could a person be singled out using this data - alone or combined with what you already hold? If yes, it is personal data.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#definition">The Definition</a>
            <a href="#surprise-table">The Surprise Table</a>
            <a href="#combination-trap">The Combination Trap</a>
            <a href="#special-category">Special Category Data</a>
            <a href="#anonymous-vs-pseudo">Anonymous vs Pseudonymous</a>
            <a href="#product-test">Test Your Own Product</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(255, 96, 0,0.3)',paddingLeft:'1.2rem'}}>Think about the last form you filled out online. Now picture everything your product quietly picked up <em>around</em> the fields you actually typed into: the IP address, the device model, the timestamp, a handful of cookie IDs, maybe the rough city you were in. Under GDPR, <strong>most of that is personal data too</strong>. Not just the name and email - the passive exhaust your browser left behind. This is the single biggest misunderstanding founders bring into a compliance conversation.</p>

          <section id="definition">
            <h2>The Definition, <em>Plainly</em></h2>
            <p>Article 4 of GDPR says personal data is <strong>any information relating to an identified or identifiable natural person</strong>. Two words carry almost all the weight: <em>identifiable</em> and <em>relating to</em>.</p>
            <p>"Identifiable" does not mean the data names someone directly. It means someone could be <strong>singled out</strong> by using that data - alone, or combined with other information you reasonably have access to. The regulator question is never "does this piece of data name a human?" It is "could a human be picked out of a crowd using this?"</p>
          </section>

          <section id="surprise-table">
            <h2>The "That Is Personal Data?" <em>Table</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Looks Harmless</th><th>Actually Personal Data?</th></tr></thead>
                <tbody>
                  {[['Dynamic IP address in server logs','Yes. The CJEU ruled on this in Breyer v. Germany (2016). If you can combine the IP with ISP data to identify a person, it is personal data.'],['Cookie ID used for analytics','Yes. Online identifiers are called out explicitly in Recital 30 of GDPR.'],['Mobile advertising ID (IDFA, GAID)','Yes. Persistent identifier that maps to one device and usually one human.'],['Licence plate in dashcam footage','Yes. Identifiers that resolve to a person via a public register still qualify.'],['Voice recording from a support call','Yes. Voice is biometric; depending on processing, it can be special category data.'],['Pseudonymised customer ID (user_a7f9c2)','Still personal data. Pseudonymisation reduces risk - it does not remove you from GDPR scope.'],['Photo uploaded to your signup flow','Yes. Faces are biometric data the moment they are processed to identify someone.'],['Work email: jdoe@acme.com','Yes. B2B personal data is still personal data - this is the most common founder blind spot.']].map(([h,a],i)=>(<tr key={i}><td>{h}</td><td>{a}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="combination-trap">
            <h2>The Combination Trap - <em>Where Fields Become Personal</em></h2>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The Combination Trap</strong>
                <p>A pin code on its own is not personal data. A browser fingerprint on its own is not personal data. A purchase amount on its own is not personal data. But when your analytics warehouse joins all three on a session ID - which most do, by design - the combined record points to one person. The moment that join happens, the whole record becomes personal data. Regulators do not evaluate fields in isolation; they evaluate what you can reconstruct by joining them.</p>
              </div>
            </div>
          </section>

          <section id="special-category">
            <h2>Special Category Data - <em>The Sharper Edge</em></h2>
            <p>A narrow slice of personal data carries extra obligations under Article 9. These need a stronger legal basis and usually a Data Protection Impact Assessment:</p>
            <ul>
              <li><strong>Health and medical records</strong> - anything from a doctor note to a fitness tracker step count, if tied to a person</li>
              <li><strong>Biometric data</strong> - face scans, voiceprints, fingerprints, when used to identify someone</li>
              <li><strong>Genetic data</strong> - including saliva tests and ancestry results</li>
              <li><strong>Race or ethnic origin</strong> - including information inferred from photographs</li>
              <li><strong>Political opinions, religious beliefs, philosophical beliefs</strong></li>
              <li><strong>Trade union membership</strong> - often caught in HR platforms</li>
              <li><strong>Sex life and sexual orientation</strong> - including data inferable from dating apps or ad targeting segments</li>
            </ul>
            <p>If your product touches any of these - even as a side effect - your risk posture changes materially. A fitness app logging heart rate is in Article 9 territory. A recruitment tool extracting photos from CVs is doing biometric processing. These are not edge cases; they are common product features whose compliance footprint gets underestimated.</p>
          </section>

          <section id="anonymous-vs-pseudo">
            <h2>"But We Anonymised It" - <em>Did You, Though?</em></h2>
            <p><strong>Anonymous</strong> means the data cannot be linked back to a person by anyone, using any reasonably available means. Truly anonymous data is out of GDPR scope entirely. It is also hard to achieve.</p>
            <p><strong>Pseudonymous</strong> means you have replaced direct identifiers with tokens, but the mapping back to real people still exists somewhere - in a separate table, a key management service, or a vendor system. Pseudonymous data is a good security practice. It is not anonymity. It is <strong>still fully inside GDPR</strong>.</p>
            <div className="callout co-key">
              <span className="co-icon">🔑</span>
              <div className="co-body">
                <strong>Quick Rule of Thumb</strong>
                <p>If your engineering team can, given a week, rebuild the link between the dataset and the original user - it is pseudonymous. If nobody on earth can rebuild that link, including you - it is anonymous. Almost every "anonymised" production dataset we have audited turns out to be the first kind.</p>
              </div>
            </div>
          </section>

          <section id="product-test">
            <h2>A Quick Test <em>to Run on Your Own Product</em></h2>
            <p>Pick any table in your production database. Ask four questions about a single row:</p>
            <ul>
              <li>Does it contain something that points to one specific human - by name, by ID, by a persistent identifier?</li>
              <li>Even if no single field does, could you combine two or three fields in this table, or across tables you operate, to pick out one person?</li>
              <li>Could someone else who got a copy of this row - a vendor, a contractor, an attacker - combine it with information they might reasonably have, and identify the person?</li>
              <li>Is any of the content special category - health, biometric, religious, political, sexual orientation, ethnic origin?</li>
            </ul>
            <p>If the answer to any of the first three is yes, that row is personal data under GDPR. If the fourth is yes, you have heightened obligations. Most product schemas fail at least the first two questions on most tables - and that is the honest starting point for building a real compliance programme. For the comparison of how GDPR personal data scope differs from India DPDP Act, read our <a href="https://seccomply.net/resources/blog/what-is-personal-data-dpdp" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>What Counts as Personal Data Under DPDP Act guide</a>.</p>
          </section>

          <div className="cta-banner">
            <h3>Not Sure Where You Stand on GDPR?</h3>
            <p>SecComply maps your data flows, vendor risks, and compliance gaps across your real product infrastructure - continuously, not just before an audit.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free GDPR Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/what-counts-personal-data-gdpr" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/what-counts-personal-data-gdpr&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is an IP address personal data under GDPR?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes, in most practical contexts. The Court of Justice of the European Union ruled in Breyer v. Germany (2016) that even dynamic IP addresses can be personal data when the entity holding them has the legal means to identify the individual - for example, by combining the IP with ISP records or user account data.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is a work email address like john@company.com personal data?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. A work email address identifies a specific natural person and is personal data under GDPR. The fact that it is professional or issued by an employer does not change this. B2B contact data is one of the most commonly fined misconceptions in GDPR enforcement.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is pseudonymised data still covered by GDPR?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. Pseudonymisation replaces direct identifiers with tokens but the mapping back to real people still exists. Pseudonymous data is a good security practice that reduces risk, but it does not remove the data from GDPR scope. Only truly irreversible anonymisation - where no one can reconstruct the link - takes data outside GDPR.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the difference between anonymous and pseudonymous data?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Anonymous data cannot be linked back to a person by anyone using any reasonably available means - it is outside GDPR scope entirely. Pseudonymous data has had direct identifiers replaced with tokens, but the reverse mapping exists somewhere. The test: if your team can rebuild the link given a week of effort, it is pseudonymous and still GDPR-covered.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does GDPR cover data I infer or generate, like credit scores or ML predictions?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. Inferred or derived data - credit scores, predicted churn risk, health risk assessments - is personal data if it relates to an identifiable individual. It does not matter that you generated it rather than collected it directly. All GDPR obligations, including access, correction, and erasure rights, apply to inferred data.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#definition" className="toc-link">The Definition</a></li>
              <li><a href="#surprise-table" className="toc-link">Surprise Table</a></li>
              <li><a href="#combination-trap" className="toc-link">Combination Trap</a></li>
              <li><a href="#special-category" className="toc-link">Special Category</a></li>
              <li><a href="#anonymous-vs-pseudo" className="toc-link">Anonymous vs Pseudo</a></li>
              <li><a href="#product-test" className="toc-link">Product Test</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 GDPR Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/gdpr-explained-startups">GDPR Explained for Startups</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-self-assessment">GDPR Self-Assessment Guide</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-counts-personal-data-gdpr">▶ Personal Data Under GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-vs-dpdp">GDPR vs DPDP Act</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp">ISO 27701 vs GDPR vs DPDP</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">GDPR</span><span className="tag">Personal Data</span><span className="tag">IP Address</span><span className="tag">Cookie</span><span className="tag">Pseudonymisation</span><span className="tag">Special Category</span><span className="tag">Article 4</span><span className="tag">Data Definition</span></div>
          </div>
          <div className="sb-cta">
            <h4>Need GDPR Compliance Help?</h4>
            <p>From gap assessment to audit - we handle the entire GDPR compliance journey.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
