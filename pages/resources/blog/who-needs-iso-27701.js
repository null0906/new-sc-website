import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function WhoNeedsISO27701() {
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
        <title>Who Needs ISO 27701? Applicability Guide for Controllers and Processors | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="ISO 27701 applies to any organisation processing PII. Here is the controller-processor distinction, industry-by-industry guide, and the certification vs internal framework decision." />
        <meta name="keywords" content="who needs ISO 27701, ISO 27701 applicability, PII controller ISO 27701, PII processor ISO 27701, ISO 27701 SaaS, ISO 27701 fintech, ISO 27701 healthcare, ISO 27701 certification vs framework" />
        <meta property="og:title" content="Who Needs ISO 27701? Applicability Guide for Controllers and Processors" />
        <meta property="og:description" content="ISO 27701 applies to any organisation processing PII. Here is the controller-processor distinction, industry-by-industry guide, and the certification vs internal framework decision." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/who-needs-iso-27701" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Aditya Hadke" />
        <meta property="article:tag" content="ISO 27701" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/who-needs-iso-27701" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Who Needs ISO 27701? Applicability Guide for Controllers and Processors","description":"ISO 27701 applies to any organisation processing PII. Here is the controller-processor distinction, industry guide, and certification decision framework.","author":{"@type":"Person","name":"Aditya Hadke","jobTitle":"Cyber Security Analyst","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/who-needs-iso-27701","articleSection":"ISO 27701"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"Who Needs ISO 27701","item":"https://seccomply.net/resources/blog/who-needs-iso-27701"}]}]}) }} />
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
        <span style={{color:'var(--tb)'}}>Who Needs ISO 27701? Applicability Guide...</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🔐 ISO 27701</span>
          <span className="badge badge-bl">🌍 Privacy Compliance</span>
          <span className="badge badge-gr">✅ PIMS</span>
        </div>
        <h1 className="hero-h1">Who Needs ISO 27701? - <em>Applicability Guide</em> for Controllers and Processors</h1>
        <p className="hero-sub">Every organisation that handles personal data is subject to privacy obligations. ISO 27701 answers the question of how you demonstrate compliance with a structured, internationally recognised framework. Here is who it applies to, the controller-processor distinction, and whether to pursue certification or use it as an internal framework.</p>

        <div className="author-strip">
          <div className="avatar">AH</div>
          <div className="author-info">
            <div className="aname">Aditya Hadke</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Cyber Security Analyst, SecComply</span><span className="dot">·</span><span id="read-time">📖 11 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&h=480&fit=crop" alt="ISO 27701 applicability controllers processors guide" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">ISO 27701 applies to any organisation of any size that processes PII. The more pertinent question is not whether it applies, but in what capacity - controller, processor, or both.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 260" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pgb" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(255, 96, 0,0.04)"/></pattern></defs>
          <rect width="960" height="260" fill="url(#pgb)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">PII Controller vs PII Processor - ISO 27701 Roles</text>
          <rect x="30" y="38" width="440" height="190" rx="14" fill="#091826" stroke="#FF600028" strokeWidth="1.5"/>
          <rect x="30" y="38" width="440" height="4" rx="2" fill="#FF6000"/>
          <text x="250" y="68" textAnchor="middle" fill="#FF6000" fontSize="12" fontWeight="800" fontFamily="sans-serif">PII CONTROLLER (Annex B)</text>
          <text x="250" y="88" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9" fontFamily="sans-serif">Determines purposes and means of processing</text>
          <text x="55" y="112" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">• SaaS company collecting user data</text>
          <text x="55" y="130" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">• Healthcare provider holding patient records</text>
          <text x="55" y="148" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">• E-commerce platform with shopper data</text>
          <text x="55" y="166" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">• Financial institution with KYC data</text>
          <text x="250" y="210" textAnchor="middle" fill="#FF6000" fontSize="9" fontWeight="700" fontFamily="sans-serif">Full accountability - consent, rights, notices, DPIAs</text>
          <rect x="490" y="38" width="440" height="190" rx="14" fill="#071820" stroke="#06d6a028" strokeWidth="1.5"/>
          <rect x="490" y="38" width="440" height="4" rx="2" fill="#06d6a0"/>
          <text x="710" y="68" textAnchor="middle" fill="#06d6a0" fontSize="12" fontWeight="800" fontFamily="sans-serif">PII PROCESSOR (Annex C)</text>
          <text x="710" y="88" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9" fontFamily="sans-serif">Processes PII on behalf of a controller</text>
          <text x="515" y="112" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">• Cloud provider hosting customer workloads</text>
          <text x="515" y="130" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">• Payroll bureau processing employee data</text>
          <text x="515" y="148" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">• CRM vendor processing client data</text>
          <text x="515" y="166" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">• Analytics firm processing retail datasets</text>
          <text x="710" y="210" textAnchor="middle" fill="#06d6a0" fontSize="9" fontWeight="700" fontFamily="sans-serif">Contractual accountability - DPAs, security, breach assist</text>
          <text x="480" y="248" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="9" fontFamily="sans-serif">Most SaaS companies are BOTH - controller for own data, processor for enterprise clients. ISO 27701 handles both via Annex B + Annex C.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#who-applies">Who Does ISO 27701 Apply To</a>
            <a href="#controller-processor">Controllers vs Processors</a>
            <a href="#requirements">What Each Role Requires</a>
            <a href="#industry-guide">Industry-by-Industry Guide</a>
            <a href="#certification-decision">Certification vs Internal Framework</a>
            <a href="#prerequisites">Prerequisites</a>
            <a href="#self-assessment">Self-Assessment</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(255, 96, 0,0.3)',paddingLeft:'1.2rem'}}>Every organisation that handles personal data is, in some form, already subject to privacy obligations. Whether it is GDPR, DPDP, HIPAA, or a patchwork of state-level regulations, the question is no longer <em>whether</em> privacy compliance applies to you - it is <strong>how you demonstrate it</strong>. ISO 27701 answers that question with a structured, internationally recognised framework. But the most common question is deceptively simple: do we actually need this?</p>

          <section id="who-applies">
            <h2>Who Does ISO 27701 <em>Apply To?</em></h2>
            <p>ISO 27701 is applicable to <strong>any organisation of any type, size, or nature</strong> that processes Personally Identifiable Information (PII). That is the standard's own statement of scope, and it is deliberately broad. If personal data flows through your systems - as a core function or even incidentally - ISO 27701 is relevant.</p>
            <div className="callout co-key">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>Key Point</strong>
                <p>ISO 27701 is a voluntary standard, not a legal regulation. No law currently mandates ISO 27701 certification. However, enterprise buyers, regulated industries, and procurement teams are increasingly treating it as a baseline expectation, particularly for organisations handling significant volumes of personal data.</p>
              </div>
            </div>
          </section>

          <section id="controller-processor">
            <h2>Controllers vs Processors - <em>The Foundational Distinction</em></h2>
            <h3>PII Controller</h3>
            <p>A PII controller determines the purposes and means of processing personal data. You decide what data is collected, why, how it is used, and for how long. The individuals whose data you hold have a direct relationship with you.</p>
            <h3>PII Processor</h3>
            <p>A PII processor processes personal data on behalf of a controller, acting on the controller documented instructions. The processor does not determine the purpose - they execute the processing in service of the controller objectives.</p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>Common Misconception</strong>
                <p>Many SaaS founders assume they are purely processors because they "just host data" for clients. In practice, most SaaS companies are controllers for at least some personal data - particularly user account data, usage analytics, marketing data, and employee records. A data mapping exercise almost always reveals dual-role obligations.</p>
              </div>
            </div>
          </section>

          <section id="requirements">
            <h2>What Each Role <em>Actually Requires</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Requirement</th><th>PII Controller (Annex B)</th><th>PII Processor (Annex C)</th></tr></thead>
                <tbody>
                  {[['Legal basis documentation','Must document for each processing activity','No independent basis required - under controller instructions'],['Consent management','Must obtain, record, manage withdrawal','Must support controller consent obligations'],['Data subject rights','Must have operational process for all rights','Must assist controller in responding to requests'],['Data minimisation','Must enforce purpose limitation across all processing','Must not process beyond controller instructions'],['Privacy notices','Must provide directly to data subjects','Not directly responsible'],['Sub-processor management','Must assess and bind all processors','Must notify controller before engaging sub-processors'],['Breach notification','Must notify regulators and data subjects','Must notify controller without undue delay']].map(([r,b,c],i)=>(<tr key={i}><td>{r}</td><td>{b}</td><td>{c}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="industry-guide">
            <h2>Industry-by-Industry <em>Applicability Guide</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Industry</th><th>Typical Role</th><th>Key Driver for ISO 27701</th></tr></thead>
                <tbody>
                  {[['SaaS','Controller + Processor','Enterprise procurement questionnaires; GDPR for EU users; dual certification with ISO 27001'],['FinTech','Controller','RBI/SEBI alignment; cross-border payment processing; enterprise banking client requirements'],['Healthcare','Controller or Processor','Special category data; strictest consent; HealthTech SaaS as processor for hospitals'],['Cloud / MSP','Processor','Enterprise buyer assurance; sub-processor management; breach notification capability'],['Manufacturing','Controller','European supply chain due diligence; vendor qualification alongside ISO 9001 and ISO 27001']].map(([i,r,d],idx)=>(<tr key={idx}><td>{i}</td><td>{r}</td><td>{d}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="certification-decision">
            <h2>Certification vs Internal Framework - <em>Which Is Right for You?</em></h2>
            <h3>Pursue Formal Certification If:</h3>
            <ul>
              <li>Enterprise customers are requesting ISO 27701 certification in vendor questionnaires</li>
              <li>You are subject to GDPR and want the strongest third-party evidence of compliance readiness</li>
              <li>You are already ISO 27001-certified and the incremental audit cost is low</li>
              <li>You are competing in regulated industries where certification is a differentiator</li>
            </ul>
            <h3>Use as Internal Framework If:</h3>
            <ul>
              <li>You are building a privacy programme and certification is a future milestone</li>
              <li>Your customer base has not yet requested formal certification</li>
              <li>You are not yet ISO 27001-certified (pursue that first)</li>
              <li>You want to structure your DPDP or GDPR programme without formal audit overhead now</li>
            </ul>
          </section>

          <section id="prerequisites">
            <h2>Prerequisites - <em>What You Need Before Starting</em></h2>
            <p>ISO 27701 is an extension to ISO 27001, not a standalone standard. If you are already ISO 27001-certified, the additional effort primarily involves extending the ISMS scope to PII, building the RoPA, implementing Annex B/C controls, and updating your Statement of Applicability.</p>
            <p>If you are not yet ISO 27001-certified, the most efficient path is to pursue both certifications together in a single integrated programme. See our <a href="https://seccomply.net/resources/blog/iso-27001-explained-startups" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>ISO 27001 Explained for Startups guide</a> to get started on the foundation.</p>
          </section>

          <section id="self-assessment">
            <h2>Self-Assessment - <em>Do You Need ISO 27701 Now?</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Question</th><th>If YES</th></tr></thead>
                <tbody>
                  {[['Do you process personal data of EU or Indian users?','ISO 27701 urgency: High'],['Are enterprise buyers asking for privacy certifications?','ISO 27701 urgency: High'],['Do you hold ISO 27001 certification already?','Add ISO 27701 at next recertification'],['Do you process special category data (health, biometric, financial)?','ISO 27701 urgency: High'],['Do customers share their customers data with your platform?','Annex C controls directly applicable'],['Have you experienced a privacy incident in the past 24 months?','Demonstrates corrective action'],['Are you in a regulated industry (healthcare, fintech, government)?','ISO 27701 urgency: High']].map(([q,a],i)=>(<tr key={i}><td>{q}</td><td style={{color:'var(--cy)'}}>{a}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="cta-banner">
            <h3>Need ISO 27701 Implementation Support?</h3>
            <p>SecComply helps SaaS, FinTech, and healthcare organisations implement ISO 27701 - from gap assessment to certification audit, with pre-built control libraries and evidence collection.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free ISO 27701 Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/who-needs-iso-27701" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/who-needs-iso-27701&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is ISO 27701 mandatory for any organisation?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. ISO 27701 is a voluntary international standard, not a legal regulation. No law currently mandates ISO 27701 certification. However, enterprise buyers and regulated industries increasingly treat it as a baseline expectation. The business case is driven by customer requirements, not legal mandate.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can we implement ISO 27701 without ISO 27001?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Technically no - ISO 27701 is an extension to ISO 27001 and requires the ISMS foundation to be in place. However, you can pursue both certifications together in a single integrated programme, which is the most efficient path for organisations starting from scratch.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Our SaaS product just hosts client data. Are we only a processor?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Almost certainly not. Most SaaS companies are controllers for at least some personal data - user account information, usage analytics, marketing data, and employee records are all processing activities where you determine the purpose. A proper data mapping exercise will reveal your dual-role obligations.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How does ISO 27701 relate to the DPDP Act?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>ISO 27701 provides the operational framework for meeting DPDP Act obligations in a structured, auditable way. While the Act defines what obligations you have, ISO 27701 defines how to implement and demonstrate them. They are complementary - the standard is a vehicle for meeting the regulation requirements.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is ISO 27701 certification worth the investment for a startup?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>For startups selling to enterprise customers, yes - it accelerates sales cycles by replacing lengthy vendor questionnaires with a single credential. Even without formal certification, implementing ISO 27701 controls structures your privacy programme, produces documentation enterprise buyers ask for, and builds the foundation for future certification.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#who-applies" className="toc-link">Who It Applies To</a></li>
              <li><a href="#controller-processor" className="toc-link">Controllers vs Processors</a></li>
              <li><a href="#requirements" className="toc-link">Role Requirements</a></li>
              <li><a href="#industry-guide" className="toc-link">Industry Guide</a></li>
              <li><a href="#certification-decision" className="toc-link">Certification Decision</a></li>
              <li><a href="#prerequisites" className="toc-link">Prerequisites</a></li>
              <li><a href="#self-assessment" className="toc-link">Self-Assessment</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 ISO 27701 Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27701-explained">ISO 27701 Explained</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp">ISO 27701 vs GDPR vs DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/who-needs-iso-27701">▶ Who Needs ISO 27701</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-for-data-controllers">ISO 27701 for Controllers</a></li>
              <li><a href="https://seccomply.net/resources/blog/building-a-pims-iso-27701">Building a PIMS</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27701</span><span className="tag">PII Controller</span><span className="tag">PII Processor</span><span className="tag">Applicability</span><span className="tag">SaaS</span><span className="tag">FinTech</span><span className="tag">Healthcare</span><span className="tag">Certification</span></div>
          </div>
          <div className="sb-cta">
            <h4>Need ISO 27701 Certification?</h4>
            <p>From gap assessment to audit - we handle the entire ISO 27701 journey.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
