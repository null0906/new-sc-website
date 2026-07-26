import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001ScopeDefinition() {
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
        <title>ISO 27001 Scope Definition - How to Decide What Goes In and What Stays Out | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="The ISMS scope is the most consequential decision before starting ISO 27001. Too broad costs time and money. Too narrow leaves gaps. Here is how to define it correctly." />
        <meta name="keywords" content="ISO 27001 scope definition, ISMS scope, how to define ISO 27001 scope, ISO 27001 scope statement, what to include in ISO 27001 scope, ISO 27001 scope too broad, ISO 27001 scope too narrow, scope boundaries" />
        <meta property="og:title" content="ISO 27001 Scope Definition - How to Decide What Goes In and What Stays Out" />
        <meta property="og:description" content="The ISMS scope is the most consequential decision before starting ISO 27001. Too broad costs time and money. Too narrow leaves gaps. Here is how to define it correctly." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-scope-definition" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Soham Sawant" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-scope-definition" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 Scope Definition - How to Decide What Goes In and What Stays Out","description":"The ISMS scope is the most consequential decision before starting ISO 27001. Here is how to define it correctly - with examples and common traps.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-20","dateModified":"2026-04-20","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-scope-definition","articleSection":"ISO 27001"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"ISO 27001 Scope","item":"https://seccomply.net/resources/blog/iso-27001-scope-definition"}]}]}) }} />
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
`}</style>
      <div id="reading-progress"></div>
      <div className="breadcrumb">
        <a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>ISO 27001 Scope Definition - How to...</span>
      </div>
      <div className="hero-wrap">
        <div className="badges"><span className="badge badge-cy">🌍 ISO 27001</span><span className="badge badge-bl">🛡️ ISMS</span><span className="badge badge-gr">📋 Scope</span></div>
        <h1 className="hero-h1">ISO 27001 Scope Definition - <em>How to Decide</em> What Goes In and What Stays Out</h1>
        <p className="hero-sub">The ISMS scope is the single most consequential decision you make before starting your ISO 27001 programme. Define it too broadly and the project takes twice as long. Define it too narrowly and the certificate does not cover what enterprise buyers need to see. Here is how to get it right.</p>
        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Cybersecurity Expert & Technical Writer</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>
        <div className="img-wrap"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=480&fit=crop" alt="ISO 27001 scope definition ISMS what goes in what stays out" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} /></div>
        <p className="img-cap">A tight, well-defined scope achieves certification faster and at lower cost. Many startups certify their core SaaS product first, then expand scope in subsequent years.</p>
        <div className="img-wrap"><svg viewBox="0 0 960 260" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pgsc" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgb(var(--accent-rgb) / 0.04)"/></pattern></defs>
          <rect width="960" height="260" fill="url(#pgsc)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">ISO 27001 Scope - The Goldilocks Zone</text>
          <rect x="30" y="40" width="280" height="180" rx="14" fill="#180a0d" stroke="rgb(var(--red-rgb) / 0.25)" strokeWidth="1.5"/>
          <rect x="30" y="40" width="280" height="4" rx="2" fill="var(--red)"/>
          <text x="170" y="75" textAnchor="middle" fill="var(--red)" fontSize="14" fontWeight="800" fontFamily="sans-serif">TOO BROAD</text>
          <text x="170" y="100" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9.5" fontFamily="sans-serif">Everything in the company</text>
          <text x="170" y="130" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• Takes 2x longer to certify</text>
          <text x="170" y="148" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• Costs significantly more</text>
          <text x="170" y="166" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• More controls to implement</text>
          <text x="170" y="184" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• Higher ongoing maintenance</text>
          <rect x="340" y="40" width="280" height="180" rx="14" fill="#0d1c10" stroke="rgb(var(--green-rgb) / 0.3)" strokeWidth="1.5"/>
          <rect x="340" y="40" width="280" height="4" rx="2" fill="var(--green)"/>
          <text x="480" y="75" textAnchor="middle" fill="var(--green)" fontSize="14" fontWeight="800" fontFamily="sans-serif">JUST RIGHT</text>
          <text x="480" y="100" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9.5" fontFamily="sans-serif">Core product + cloud + supporting processes</text>
          <text x="480" y="130" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• Certify in 4-9 months</text>
          <text x="480" y="148" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• Covers what buyers care about</text>
          <text x="480" y="166" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• Manageable control set</text>
          <text x="480" y="184" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• Expand scope in later years</text>
          <rect x="650" y="40" width="280" height="180" rx="14" fill="#141108" stroke="rgb(var(--yellow-rgb) / 0.25)" strokeWidth="1.5"/>
          <rect x="650" y="40" width="280" height="4" rx="2" fill="var(--yellow)"/>
          <text x="790" y="75" textAnchor="middle" fill="var(--yellow)" fontSize="14" fontWeight="800" fontFamily="sans-serif">TOO NARROW</text>
          <text x="790" y="100" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9.5" fontFamily="sans-serif">Just one system or module</text>
          <text x="790" y="130" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• Certificate does not cover</text>
          <text x="790" y="148" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">  what enterprise buyers need</text>
          <text x="790" y="166" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• Leaves critical systems out</text>
          <text x="790" y="184" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">• May require re-scoping later</text>
          <text x="480" y="245" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">Start tight, certify fast, expand later. This is the recommended approach for most startups.</text>
        </svg></div>
        <div className="toc-box"><div className="toc-lbl">In This Article</div><div className="toc-grid">
            <a href="#why-matters">Why Scope Matters</a>
            <a href="#what-scope-includes">What the Scope Includes</a>
            <a href="#scope-statement">Writing Your Scope Statement</a>
            <a href="#too-broad">The Too-Broad Trap</a>
            <a href="#too-narrow">The Too-Narrow Trap</a>
            <a href="#scope-examples">Scope Examples for Startups</a>
            <a href="#scope-boundaries">Defining Boundaries</a>
            <a href="#expanding">Expanding Scope Over Time</a>
            <a href="#faq">FAQ</a>
        </div></div>
      </div>
      <div className="blog-layout">
        <article className="art">
          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgb(var(--accent-rgb) / 0.3)',paddingLeft:'1.2rem'}}>The ISMS scope is the single most consequential decision you make before starting your ISO 27001 programme. It determines which business functions, systems, locations, and data flows are covered - and by extension, how many controls you need to implement, how long certification takes, and how much it costs. <strong>Get the scope right and the rest of the project follows logically. Get it wrong and you either overspend or end up with a certificate that does not cover what buyers need to see.</strong></p>

          <section id="why-matters">
            <h2>Why Scope <em>Matters</em></h2>
            <p>ISO 27001 Clause 4.3 requires you to define the scope of your ISMS - the boundaries within which the management system operates. Everything inside the scope is subject to the full ISO 27001 requirements: risk assessment, controls, internal audit, management review, and certification audit. Everything outside the scope is explicitly excluded.</p>
            <p>Your scope statement appears on your ISO 27001 certificate. Enterprise buyers and procurement teams read it. If your scope does not cover the product or service they are evaluating, the certificate has limited value to them.</p>
          </section>

          <section id="what-scope-includes">
            <h2>What the Scope <em>Includes</em></h2>
            <p>The scope definition must address four dimensions:</p>
            <ul>
              <li><strong>Business functions:</strong> Which departments, teams, or business units are covered? Product engineering, DevOps, customer support, HR, finance?</li>
              <li><strong>Systems and infrastructure:</strong> Which production systems, cloud environments, internal tools, and third-party services are in scope?</li>
              <li><strong>Locations:</strong> Which physical offices, data centres (or cloud regions), and remote working arrangements are covered?</li>
              <li><strong>Data flows:</strong> Which categories of information - customer data, employee data, financial data, source code - are within the ISMS boundary?</li>
            </ul>
          </section>

          <section id="scope-statement">
            <h2>Writing Your <em>Scope Statement</em></h2>
            <p>The scope statement should be clear, specific, and auditable. A good scope statement for a SaaS startup might read:</p>
            <div className="callout co-key">
              <span className="co-icon">📋</span>
              <div className="co-body">
                <strong>Example Scope Statement</strong>
                <p>"The development, hosting, operation, and delivery of the [Product Name] SaaS platform, including the associated cloud infrastructure hosted on AWS (eu-west-1 and ap-south-1 regions), corporate IT systems, and supporting business processes operated from the Pune office and remote working locations."</p>
              </div>
            </div>
            <p>Notice what this includes: the product, the cloud infrastructure (with specific regions), corporate IT, and all locations. Notice what it does not include: specific excluded business units, R&D projects not yet in production, or subsidiary operations in other countries.</p>
          </section>

          <section id="too-broad">
            <h2>The Too-Broad <em>Trap</em></h2>
            <p>The most common mistake for larger organisations is scoping too broadly. If you include every department, every system, every location, and every data flow, you are committing to:</p>
            <ul>
              <li>Risk-assessing every asset in the organisation - potentially hundreds of assets</li>
              <li>Implementing controls across systems and teams that may not be ready</li>
              <li>A longer, more expensive certification audit (audit days scale with scope)</li>
              <li>Higher ongoing maintenance - more controls to monitor, more evidence to collect, more people to train</li>
            </ul>
            <p>A broad scope is not inherently wrong - large enterprises need it. But for startups and mid-sized companies, it delays certification and increases cost without proportional benefit.</p>
          </section>

          <section id="too-narrow">
            <h2>The Too-Narrow <em>Trap</em></h2>
            <p>The opposite mistake: scoping so narrowly that the certificate does not cover what enterprise buyers care about. If you certify only your "internal IT systems" but exclude the SaaS platform that customers use, the certificate is commercially useless. Procurement teams will read the scope statement and note that their product is not covered.</p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>Warning Signs of Too-Narrow Scope</strong>
                <p>Your certificate does not mention your core product or service by name. Customer-facing systems are excluded. Your cloud infrastructure is outside the ISMS boundary. Enterprise buyers still send security questionnaires despite your certification because the scope does not cover what they are buying.</p>
              </div>
            </div>
          </section>

          <section id="scope-examples">
            <h2>Scope Examples - <em>For Startups</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Company Type</th><th>Good Scope</th><th>Common Mistake</th></tr></thead>
                <tbody>
                  {[['B2B SaaS (20 people)','Development, hosting, and delivery of the SaaS platform + cloud infrastructure + corporate IT + Pune office','Only corporate IT - excludes the product customers actually use'],['FinTech (50 people)','Payment processing platform + AWS infrastructure + customer data processing + supporting business functions','Entire company including R&D lab and future products not yet in production'],['Healthcare SaaS','Patient data platform + hosting + API integrations + all clinical data flows','Only the API layer - excludes the application and database'],['Consulting firm','Client engagement delivery + internal knowledge management + client data handling','Only internal email and laptops - excludes client deliverables']].map(([c,g,m],i)=>(<tr key={i}><td>{c}</td><td style={{color:'var(--gr)'}}>{g}</td><td style={{color:'var(--red)'}}>{m}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="scope-boundaries">
            <h2>Defining <em>Boundaries</em></h2>
            <p>For each dimension of scope, define what is in and what is out:</p>
            <ul>
              <li><strong>System boundaries:</strong> List the specific systems, applications, and infrastructure components. Use names - "AWS account 123456789, eu-west-1 region" not just "cloud infrastructure."</li>
              <li><strong>Organisational boundaries:</strong> List the teams and functions included. If HR is in scope (it usually is for employee data), say so explicitly.</li>
              <li><strong>Physical boundaries:</strong> List office locations. For remote-first companies, state "remote working locations of all employees within the ISMS scope."</li>
              <li><strong>Third-party boundaries:</strong> Key vendors and processors that handle in-scope data should be identified. Their management falls under Annex A supplier controls.</li>
            </ul>
          </section>

          <section id="expanding">
            <h2>Expanding Scope <em>Over Time</em></h2>
            <p>Starting with a tight scope and expanding later is the recommended approach. You can expand scope at any surveillance or recertification audit (annually or every three years). Common expansion patterns:</p>
            <ul>
              <li><strong>Year 1:</strong> Core SaaS product + primary cloud environment + corporate IT + main office</li>
              <li><strong>Year 2:</strong> Add additional products, new cloud regions, or acquired business units</li>
              <li><strong>Year 3 (recertification):</strong> Full enterprise scope if the business has grown significantly</li>
            </ul>
            <p>A tight initial scope is a feature, not a compromise - it is the standard approach recommended by most certification bodies and compliance consultants. For the full ISMS overview, see our <a href="https://seccomply.net/resources/blog/what-is-an-isms" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>What Is an ISMS guide</a>. For the self-assessment on whether ISO 27001 is right for your organisation, see our <a href="https://seccomply.net/resources/blog/iso-27001-self-assessment" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>ISO 27001 Self-Assessment Guide</a>.</p>
          </section>
          <div className="cta-banner">
            <h3>Need Help with Your Compliance Journey?</h3>
            <p>SecComply helps startups and enterprises navigate ISO 27001, ISO 27701, GDPR, and DPDP - from gap assessment to audit-ready documentation.</p>
            <div className="cta-btns"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Consultation →</a></div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/iso-27001-scope-definition" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/iso-27001-scope-definition&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>
          <section id="faq" className="faq-section"><h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the ISO 27001 scope statement?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The scope statement defines the boundaries of your ISMS - which business functions, systems, locations, and data flows are covered. It appears on your ISO 27001 certificate and is read by enterprise buyers. Clause 4.3 requires you to document it, and auditors will verify that your ISMS actually covers everything the scope claims.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can I start with a narrow scope and expand later?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes - this is the recommended approach for most startups. Start with your core product, primary cloud environment, and supporting business processes. You can expand scope at any annual surveillance audit or the three-year recertification audit. Certification bodies expect and support this pattern.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What happens if my scope does not cover what a customer is evaluating?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The certificate has limited commercial value for that customer. Enterprise procurement teams read the scope statement on your certificate. If it does not mention the product or service they are buying, they will likely still send a full security questionnaire. This is why excluding your core product from scope is a common and costly mistake.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does remote working need to be included in the scope?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes, if your employees work remotely and access in-scope systems or data. For remote-first companies, the scope statement should include 'remote working locations of all employees within the ISMS scope.' Remote working controls (Annex A.6.7) then apply to all in-scope remote workers.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How many audit days does a broader scope add?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Audit days scale roughly proportionally with the number of employees, locations, and systems in scope. A 20-person SaaS startup with a tight product scope might need 4-6 audit days. A 200-person company with broad organisational scope might need 10-15 days. More audit days means higher certification body fees.</p></div>
            </div>

          </section>
        </article>
        <aside className="sb">
          <div className="sb-card"><div className="sb-title">In This Article</div><ul className="sb-toc">
              <li><a href="#why-matters" className="toc-link">Why Scope Matters</a></li>
              <li><a href="#what-scope-includes" className="toc-link">What It Includes</a></li>
              <li><a href="#scope-statement" className="toc-link">Scope Statement</a></li>
              <li><a href="#too-broad" className="toc-link">Too-Broad Trap</a></li>
              <li><a href="#too-narrow" className="toc-link">Too-Narrow Trap</a></li>
              <li><a href="#scope-examples" className="toc-link">Scope Examples</a></li>
              <li><a href="#scope-boundaries" className="toc-link">Defining Boundaries</a></li>
              <li><a href="#expanding" className="toc-link">Expanding Over Time</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
          </ul></div>
          <div className="sb-card"><div className="sb-title">🔗 Related</div><ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27001-explained-startups">ISO 27001 Explained</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-is-an-isms">What Is an ISMS</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-self-assessment">ISO 27001 Self-Assessment</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls">93 Annex A Controls</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment">Risk Assessment</a></li>
          </ul></div>
          <div className="sb-card"><div className="sb-title">🏷️ Tags</div><div className="tag-cloud"><span className="tag">ISO 27001</span><span className="tag">Scope Definition</span><span className="tag">ISMS</span><span className="tag">Scope Statement</span><span className="tag">Certification</span><span className="tag">Startup</span><span className="tag">Enterprise Sales</span></div></div>
          <div className="sb-cta"><h4>Need Compliance Help?</h4><p>From gap assessment to audit - we handle the entire journey.</p><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a></div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
