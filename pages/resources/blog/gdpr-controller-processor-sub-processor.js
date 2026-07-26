import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'
export default function GDPRControllerProcessorSubProcessor() {
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
  return (<Layout><Head><title>Data Controller vs Processor vs Sub-Processor - Who Does What? | SecComply</title><link rel="icon" href="/favicon.ico" /><link rel="stylesheet" href="/assets/css/resource-pages.css" /><meta name="description" content="Controller, processor, and sub-processor under GDPR - what each role actually owes, side-by-side comparison, the dual-role reality for SaaS, and practical steps to get classification right." /><meta name="keywords" content="GDPR controller processor, data controller GDPR, data processor GDPR, sub-processor GDPR, DPA GDPR, controller vs processor SaaS, GDPR roles explained, joint controller" /><meta property="og:title" content="Data Controller vs Processor vs Sub-Processor - Who Does What?" /><meta property="og:description" content="Controller, processor, and sub-processor under GDPR - what each role actually owes, side-by-side comparison, the dual-role reality for SaaS, and practical steps to get classification right." /><meta property="og:type" content="article" /><meta property="og:url" content="https://seccomply.net/resources/blog/gdpr-controller-processor-sub-processor" /><meta property="article:published_time" content="2026-04-01" /><meta property="article:author" content="Gauri Khatate" /><link rel="canonical" href="https://seccomply.net/resources/blog/gdpr-controller-processor-sub-processor" /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Data Controller vs Processor vs Sub-Processor - Who Does What?","author":{"@type":"Person","name":"Gauri Khatate"},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-16","mainEntityOfPage":"https://seccomply.net/resources/blog/gdpr-controller-processor-sub-processor"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"Controller vs Processor","item":"https://seccomply.net/resources/blog/gdpr-controller-processor-sub-processor"}]}]}) }} /></Head>
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
    .co-key{background:rgb(var(--accent-rgb) / .06);border:1px solid rgb(var(--accent-rgb) / .2)}
    .co-warn{background:rgb(var(--yellow-rgb) / .06);border:1px solid rgb(var(--yellow-rgb) / .2)}
    .co-info{background:rgb(var(--purple-rgb) / .07);border:1px solid rgb(var(--purple-rgb) / .2)}
    .co-danger{background:rgb(var(--red-rgb) / .06);border:1px solid rgb(var(--red-rgb) / .2)}
    .co-gr{background:rgb(var(--green-rgb) / .05);border:1px solid rgb(var(--green-rgb) / .2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .check-list{display:flex;flex-direction:column;gap:.55rem;margin:1.5rem 0}
    .check-item{display:flex;gap:.85rem;align-items:flex-start;padding:.9rem 1.1rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px}
    .check-item.yes{border-left:3px solid var(--gr)}
    .check-item.no{border-left:3px solid var(--red)}
    .check-mark{font-size:1rem;flex-shrink:0;margin-top:1px;font-weight:800}
    .check-mark.y{color:var(--gr)}
    .check-mark.n{color:var(--red)}
    .check-body{font-size:.89rem;color:var(--tb)}
    .scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .scope-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem}
    .scope-col.sc-in{border-top:3px solid var(--gr)}
    .scope-col.sc-out{border-top:3px solid var(--red)}
    .scope-col h4{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.8rem}
    .sc-in h4{color:var(--gr)}
    .sc-out h4{color:var(--red)}
    .scope-col ul li{font-size:.82rem;padding:.28rem 0 .28rem 1.1rem}
    .series-nav{display:flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;background:rgb(var(--accent-rgb) / .05);border:1px solid rgb(var(--accent-rgb) / .15);border-radius:10px;margin-bottom:2rem;font-size:.8rem;flex-wrap:wrap}
    .series-nav span{color:var(--tm)}.series-nav strong{color:var(--cy)}
    .tier-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:.75rem;margin:2rem 0}
    .tier-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1rem;text-align:center}
    .tier-card.t1{border-top:3px solid var(--tm)}
    .tier-card.t2{border-top:3px solid var(--gr)}
    .tier-card.t3{border-top:3px solid var(--am)}
    .tier-card.t4{border-top:3px solid var(--red)}
    .tier-card .tn{font-size:.65rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.3rem}
    .t1 .tn{color:var(--tm)}.t2 .tn{color:var(--gr)}.t3 .tn{color:var(--am)}.t4 .tn{color:var(--red)}
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
    @media(max-width:900px){.tier-grid{grid-template-columns:1fr 1fr}.scope-grid{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}.tier-grid{grid-template-columns:1fr}}
`}</style><div id="reading-progress"></div>
      <div className="breadcrumb"><a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span><a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span><a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span><span style={{color:'var(--tb)'}}>Data Controller vs Processor v...</span></div>
      <div className="hero-wrap"><div className="badges"><span className="badge badge-cy">🇪🇺 GDPR</span><span className="badge badge-bl">📋 Data Privacy</span><span className="badge badge-gr">🚀 Startup Guide</span></div><h1 className="hero-h1">Data Controller vs Processor vs Sub-Processor - <em>Who Does What?</em></h1><p className="hero-sub">GDPR controller, processor, and sub-processor are not interchangeable labels. They decide who writes the privacy notice, who signs which contract, who gets fined when something goes wrong, and who explains it to a regulator. Getting them wrong is one of the most expensive compliance mistakes in modern SaaS.</p>
        <div className="author-strip"><div className="avatar">GK</div><div className="author-info"><div className="aname">Gauri Khatate</div><div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 5 min read</span></div><div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div></div></div>
        <div className="img-wrap"><img src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&h=480&fit=crop" alt="GDPR controller processor sub-processor roles explained" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} /></div><p className="img-cap">The three roles under GDPR are not legal trivia. They determine who writes the notice, who signs which contract, who notifies the regulator, and who pays.</p>
        <div className="img-wrap"><svg viewBox="0 0 960 240" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}><defs><pattern id="pgcp" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgb(var(--accent-rgb) / 0.04)"/></pattern></defs><rect width="960" height="240" fill="url(#pgcp)"/><text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">The Three GDPR Roles - Controller → Processor → Sub-Processor</text>{[{t:"CONTROLLER",sub:"Decides WHY and HOW",desc:"Writes the privacy notice, holds primary liability",col:"var(--accent)",x:50},{t:"PROCESSOR",sub:"Acts on controller instructions",desc:"Signs DPA, notifies controller of breaches",col:"var(--green)",x:350},{t:"SUB-PROCESSOR",sub:"Processor of the processor",desc:"Same obligations flow down by contract",col:"var(--purple)",x:650}].map(({t,sub,desc,col,x},i) => (<g key={i}><rect x={x} y="38" width="260" height="140" rx="14" fill="var(--bg-secondary)" stroke={col+"25"} strokeWidth="1.5"/><rect x={x} y="38" width="260" height="4" rx="2" fill={col}/><text x={x+130} y="72" textAnchor="middle" fill={col} fontSize="14" fontWeight="800" fontFamily="sans-serif">{t}</text><text x={x+130} y="96" textAnchor="middle" fill="rgba(200,214,229,0.6)" fontSize="10" fontFamily="sans-serif">{sub}</text><text x={x+130} y="120" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">{desc}</text></g>))}{[{x1:310,x2:346},{x1:610,x2:646}].map(({x1,x2},i) => (<line key={i} x1={x1} y1="108" x2={x2} y2="108" stroke="rgba(200,214,229,0.2)" strokeWidth="2" markerEnd="url(#arcp)"/>))}<defs><marker id="arcp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="rgba(200,214,229,0.3)"/></marker></defs><text x="480" y="215" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">Classify per activity, not per company. You will often be both controller and processor within the same product.</text></svg></div>
        <div className="toc-box"><div className="toc-lbl">In This Article</div><div className="toc-grid">
            <a href="#three-roles">The Three Roles</a>
            <a href="#controller">The Controller</a>
            <a href="#processor">The Processor</a>
            <a href="#sub-processor">The Sub-Processor</a>
            <a href="#side-by-side">Side by Side Comparison</a>
            <a href="#dual-role">The Dual-Role Reality</a>
            <a href="#practical">Practical Steps</a>
            <a href="#faq">FAQ</a>
        </div></div></div>
      <div className="blog-layout"><article className="art">
          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgb(var(--accent-rgb) / 0.3)',paddingLeft:'1.2rem'}}>A marketing automation SaaS signs a EUR 180K deal with a European bank. Six months in, a user in Germany files a Subject Access Request. The SaaS thinks: "We are just a vendor - the bank handles that." The bank thinks: "The data is on their platform - it is theirs." Six weeks later, both are staring at a joint liability problem because neither had a DPA clarifying responsibilities. <strong>That conversation - "wait, who is the controller here?" - is the most common reason GDPR programmes break at scale.</strong></p>
          <section id="three-roles"><h2>The Three <em>GDPR Roles</em></h2><p>GDPR Article 4 defines three distinct roles. The distinction is not administrative - it determines legal liability, contractual obligations, user-facing responsibilities, and regulator-facing accountability.</p></section>
          <section id="controller"><h2>The Controller - <em>Who Decides</em></h2><p>A controller determines the purposes and means of processing. If you run a SaaS product, you are the controller for: user account data, website visitor data, employee data, and prospect data in your CRM. The controller carries the heaviest legal burden - lawful basis, privacy notice, all eight user rights, RoPA, 72-hour breach notification, and primary liability.</p></section>
          <section id="processor"><h2>The Processor - <em>Who Executes</em></h2><p>A processor processes data on behalf of the controller, on documented instructions. Examples: your email provider (Mailchimp), cloud host (AWS), payroll platform, support tool (Zendesk). Obligations: process only on instructions, confidentiality, security measures, assist with SARs and breaches, no sub-processors without authorisation, delete or return data at contract end.</p></section>
          <section id="sub-processor"><h2>The Sub-Processor - <em>The Third Layer</em></h2><p>A sub-processor is engaged by a processor to process data on behalf of the controller. If your SaaS (processor) uses AWS for hosting, AWS is a sub-processor. Under GDPR Article 28(4), the processor must have controller authorisation, flow down the same obligations in writing, and remains fully liable for the sub-processor performance.</p></section>
          <section id="side-by-side"><h2>Side by Side - <em>What Each Role Owes</em></h2><div className="data-table-wrap"><table className="data-table"><thead><tr><th>Aspect</th><th>Controller</th><th>Processor</th><th>Sub-Processor</th></tr></thead><tbody>{[['Decides purposes','Yes','No','No'],['Needs lawful basis','Yes','No','No'],['Signs DPA with','Each processor','Controller + sub-processors','The engaging processor'],['Responds to SARs','Directly','Assists controller','Assists via processor'],['Breach notification','72 hours to DPA','Notify controller ASAP','Notify processor ASAP'],['Maximum fine','4% global turnover','2% global turnover','Via processor liability'],['Writes privacy notice','Yes','No','No']].map(([a,...cells],i)=>(<tr key={i}><td>{a}</td>{cells.map((c,j)=>(<td key={j}>{c}</td>))}</tr>))}</tbody></table></div></section>
          <section id="dual-role"><h2>The Dual-Role <em>Reality</em></h2><p>Most SaaS companies are <strong>both</strong> controller and processor simultaneously - controller for their own user data, processor for enterprise customers data flowing through the product. This is normal and expected. The key: classify per processing activity, not per company. For each data flow, ask: "Did we decide why this data is processed, or did our customer?"</p></section>
          <section id="practical"><h2>Practical Steps - <em>Get Classification Right</em></h2><ul><li><strong>Map every data flow</strong> and label the role: controller, processor, or sub-processor.</li><li><strong>Sign a DPA with every processor</strong> before data flows, not afterwards.</li><li><strong>Keep a current sub-processor list</strong> and make it available to enterprise customers.</li><li><strong>Test your breach-notification chain</strong> - the processor-to-controller 72-hour handoff must work when rehearsed.</li><li><strong>Classify per activity, not per company</strong> - you will often be both roles within the same product.</li></ul><p>For the full GDPR guide, see <a href="https://seccomply.net/resources/blog/gdpr-explained-startups" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>GDPR Explained for Startups</a>. For the India DPDP equivalent, see <a href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>Data Principal vs Fiduciary vs Processor</a>.</p></section>
          <div className="cta-banner"><h3>Not Sure Where You Stand on GDPR?</h3><p>SecComply maps your data flows, vendor risks, and compliance gaps - continuously, not just before an audit.</p><div className="cta-btns"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free GDPR Consultation →</a></div><div className="share-strip"><span className="share-lbl">Share:</span><a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/gdpr-controller-processor-sub-processor" target="_blank" rel="noopener">LinkedIn</a><a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/gdpr-controller-processor-sub-processor&via=seccomply" target="_blank" rel="noopener">X / Twitter</a><button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button></div></div>
          <section id="faq" className="faq-section"><h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item"><div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can the same company be both a controller and a processor?</strong><span className="faq-ch">▾</span></div><div className="faq-a"><p>Yes - this is extremely common. Most SaaS companies are controllers for their own user account data, marketing data, and employee data, while simultaneously being processors for enterprise customers whose data flows through the product. The classification must be done per processing activity, not per company.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does a processor need its own lawful basis under GDPR?</strong><span className="faq-ch">▾</span></div><div className="faq-a"><p>No. The processor relies on the controller lawful basis. The processor obligation is to process only on documented instructions from the controller, as specified in the Data Processing Agreement. If a processor starts processing data for its own purposes, it becomes a controller for that processing.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What happens if a processor uses a sub-processor without authorisation?</strong><span className="faq-ch">▾</span></div><div className="faq-a"><p>This is a breach of GDPR Article 28. The processor can face regulatory action and fines of up to EUR 10M or 2% of global turnover. The controller may also terminate the DPA and seek damages. This is why enterprise contracts routinely demand sub-processor lists and change-notification clauses.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Who notifies the regulator in a data breach - the controller or the processor?</strong><span className="faq-ch">▾</span></div><div className="faq-a"><p>The controller notifies the regulator within 72 hours. The processor role is to notify the controller without undue delay upon becoming aware of a breach and provide all information needed for the controller to make its regulatory notification. The processor does not typically notify the regulator directly.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Do I need a DPA with every tool that touches user data?</strong><span className="faq-ch">▾</span></div><div className="faq-a"><p>Yes. Under GDPR Article 28, any tool that processes personal data on your behalf - email provider, analytics, CRM, cloud host, support tool, payment processor - requires a Data Processing Agreement. This is a legal requirement, not best practice. Most major SaaS vendors offer standard DPAs.</p></div></div>
          </section></article>
        <aside className="sb"><div className="sb-card"><div className="sb-title">In This Article</div><ul className="sb-toc">
              <li><a href="#three-roles" className="toc-link">Three Roles</a></li>
              <li><a href="#controller" className="toc-link">Controller</a></li>
              <li><a href="#processor" className="toc-link">Processor</a></li>
              <li><a href="#sub-processor" className="toc-link">Sub-Processor</a></li>
              <li><a href="#side-by-side" className="toc-link">Side by Side</a></li>
              <li><a href="#dual-role" className="toc-link">Dual-Role Reality</a></li>
              <li><a href="#practical" className="toc-link">Practical Steps</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
          </ul></div><div className="sb-card"><div className="sb-title">🔗 GDPR Series</div><ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/gdpr-explained-startups">GDPR for Startups</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-self-assessment">GDPR Self-Assessment</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-counts-personal-data-gdpr">Personal Data Under GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/hidden-data-trails-gdpr">Hidden Data Trails</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-business-impact-beyond-fines">Business Impact Beyond Fines</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-controller-processor-sub-processor">Controller vs Processor</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-data-subject-rights">Data Subject Rights</a></li>
          </ul></div><div className="sb-card"><div className="sb-title">🏷️ Tags</div><div className="tag-cloud"><span className="tag">GDPR</span><span className="tag">Controller</span><span className="tag">Processor</span><span className="tag">Sub-Processor</span><span className="tag">DPA</span><span className="tag">Roles</span><span className="tag">SaaS</span><span className="tag">Liability</span></div></div><div className="sb-cta"><h4>Need GDPR Help?</h4><p>From gap assessment to audit - we handle it all.</p><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a></div></aside></div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button></Layout>)
}
