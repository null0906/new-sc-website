import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27701VsGDPRVsDPDP() {
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
        <title>ISO 27701 vs GDPR vs DPDP - How They Overlap and Where They Differ | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="ISO 27701, GDPR, and DPDP are complementary layers of a privacy compliance programme. Here is where they overlap, where they diverge, and how to build one programme that satisfies all three." />
        <meta name="keywords" content="ISO 27701 vs GDPR, ISO 27701 vs DPDP Act, privacy framework comparison, GDPR DPDP overlap, multi-framework compliance, ISO 27701 PIMS, consent GDPR DPDP, data breach notification GDPR DPDP" />
        <meta property="og:title" content="ISO 27701 vs GDPR vs DPDP - How They Overlap and Where They Differ" />
        <meta property="og:description" content="ISO 27701, GDPR, and DPDP are complementary layers of a privacy compliance programme. Here is where they overlap, where they diverge, and how to build one programme that satisfies all three." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Aditya Hadke" />
        <meta property="article:tag" content="ISO 27701" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27701 vs GDPR vs DPDP - How They Overlap and Where They Differ","description":"ISO 27701, GDPR, and DPDP are complementary layers of a privacy compliance programme. Here is where they overlap and where they diverge.","author":{"@type":"Person","name":"Aditya Hadke","jobTitle":"Cyber Security Analyst","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp","articleSection":"ISO 27701"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"ISO 27701 vs GDPR vs DPDP","item":"https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp"}]}]}) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#0081f2;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(0, 129, 242,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#0081f2,#38A8FF);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(0, 129, 242,.1);color:var(--cy);border:1px solid rgba(0, 129, 242,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
    .badge-am{background:rgba(255,183,3,.1);color:var(--am);border:1px solid rgba(255,183,3,.25)}
    .hero-h1{font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .hero-h1 em{font-style:italic;color:var(--cy)}
    .hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#0081f2,#38A8FF);display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(0, 129, 242,.3)}
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
    .co-key{background:rgba(0, 129, 242,.06);border:1px solid rgba(0, 129, 242,.2)}
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
    .series-nav{display:flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;background:rgba(0, 129, 242,.05);border:1px solid rgba(0, 129, 242,.15);border-radius:10px;margin-bottom:2rem;font-size:.8rem;flex-wrap:wrap}
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
    .cta-banner{background:linear-gradient(135deg,rgba(0, 129, 242,.08),rgba(0, 129, 242,.03));border:1px solid rgba(0, 129, 242,.25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
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
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgba(0, 129, 242,.07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy)}
    .sb-cta{background:linear-gradient(135deg,rgba(0, 129, 242,.08),rgba(0, 129, 242,.03));border:1px solid rgba(0, 129, 242,.25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-size:.98rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0, 129, 242,.4);z-index:50}
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
        <span style={{color:'var(--tb)'}}>ISO 27701 vs GDPR vs DPDP - How They Ove...</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🔐 ISO 27701</span>
          <span className="badge badge-bl">🌍 Privacy Compliance</span>
          <span className="badge badge-gr">✅ PIMS</span>
        </div>
        <h1 className="hero-h1">ISO 27701 vs GDPR vs DPDP - <em>How They Overlap</em> and Where They Differ</h1>
        <p className="hero-sub">Privacy compliance today means navigating multiple frameworks simultaneously. ISO 27701 tells you how to build and run a privacy programme. GDPR and DPDP tell you what rights individuals have and what obligations you must meet under law. Here is how to build one programme that satisfies all three.</p>

        <div className="author-strip">
          <div className="avatar">AH</div>
          <div className="author-info">
            <div className="aname">Aditya Hadke</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Cyber Security Analyst, SecComply</span><span className="dot">·</span><span id="read-time">📖 13 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=480&fit=crop" alt="ISO 27701 vs GDPR vs DPDP Act privacy compliance comparison" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">ISO 27701 is the operational backbone; GDPR and DPDP define the legal obligations. The frameworks share enough common ground that a well-implemented PIMS addresses the majority of obligations under both regulations.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pga" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(0, 129, 242,0.04)"/></pattern></defs>
          <rect width="960" height="300" fill="url(#pga)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">ISO 27701 vs GDPR vs DPDP Act - At a Glance</text>
          <rect x="30" y="38" width="290" height="230" rx="14" fill="#091826" stroke="#0081f228" strokeWidth="1.5"/>
          <rect x="30" y="38" width="290" height="4" rx="2" fill="#0081f2"/>
          <text x="175" y="68" textAnchor="middle" fill="#0081f2" fontSize="13" fontWeight="800" fontFamily="sans-serif">ISO 27701</text>
          <text x="175" y="88" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9" fontFamily="sans-serif">International Standard (voluntary)</text>
          <text x="50" y="116" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Published: 2019 · Global scope</text>
          <text x="50" y="136" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Enforced by: Certification body</text>
          <text x="50" y="156" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Penalty: Loss of certification</text>
          <rect x="50" y="180" width="250" height="24" rx="6" fill="rgba(0, 129, 242,0.07)" stroke="rgba(0, 129, 242,0.2)" strokeWidth="1"/>
          <text x="175" y="196" textAnchor="middle" fill="#0081f2" fontSize="9" fontWeight="700" fontFamily="sans-serif">HOW to build and run a privacy programme</text>
          <text x="175" y="240" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="8.5" fontFamily="sans-serif">Operational privacy management framework</text>
          <rect x="335" y="38" width="290" height="230" rx="14" fill="#091826" stroke="#06d6a028" strokeWidth="1.5"/>
          <rect x="335" y="38" width="290" height="4" rx="2" fill="#06d6a0"/>
          <text x="480" y="68" textAnchor="middle" fill="#06d6a0" fontSize="13" fontWeight="800" fontFamily="sans-serif">GDPR</text>
          <text x="480" y="88" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9" fontFamily="sans-serif">EU Regulation (legally binding)</text>
          <text x="355" y="116" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Enforcement: 2018 · EU/EEA worldwide</text>
          <text x="355" y="136" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Enforced by: Data Protection Authorities</text>
          <text x="355" y="156" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Max penalty: 4% global turnover or EUR 20M</text>
          <rect x="355" y="180" width="250" height="24" rx="6" fill="rgba(6,214,160,0.06)" stroke="rgba(6,214,160,0.2)" strokeWidth="1"/>
          <text x="480" y="196" textAnchor="middle" fill="#06d6a0" fontSize="9" fontWeight="700" fontFamily="sans-serif">WHAT rights individuals have under EU law</text>
          <text x="480" y="240" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="8.5" fontFamily="sans-serif">Rights-based data protection law</text>
          <rect x="640" y="38" width="290" height="230" rx="14" fill="#091826" stroke="#ffb70328" strokeWidth="1.5"/>
          <rect x="640" y="38" width="290" height="4" rx="2" fill="#ffb703"/>
          <text x="785" y="68" textAnchor="middle" fill="#ffb703" fontSize="13" fontWeight="800" fontFamily="sans-serif">INDIA DPDP ACT</text>
          <text x="785" y="88" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="9" fontFamily="sans-serif">Indian Legislation (legally binding)</text>
          <text x="660" y="116" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Published: 2023 · Indian data subjects</text>
          <text x="660" y="136" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Enforced by: Data Protection Board of India</text>
          <text x="660" y="156" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">Max penalty: INR 250 crore per instance</text>
          <rect x="660" y="180" width="250" height="24" rx="6" fill="rgba(255,183,3,0.06)" stroke="rgba(255,183,3,0.2)" strokeWidth="1"/>
          <text x="785" y="196" textAnchor="middle" fill="#ffb703" fontSize="9" fontWeight="700" fontFamily="sans-serif">WHAT obligations apply under Indian law</text>
          <text x="785" y="240" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="8.5" fontFamily="sans-serif">Rights-based personal data protection law</text>
          <text x="480" y="288" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="9" fontFamily="sans-serif">ISO 27701 is the operational vehicle. GDPR and DPDP are the legal destinations. The three are complementary, not competing.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#three-frameworks">Three Frameworks at a Glance</a>
            <a href="#scope">Scope and Applicability</a>
            <a href="#legal-basis">Legal Basis for Processing</a>
            <a href="#data-rights">Data Subject Rights</a>
            <a href="#consent">Consent Management</a>
            <a href="#breach">Breach Notification</a>
            <a href="#cross-border">Cross-Border Transfers</a>
            <a href="#core-overlap">Core Overlap</a>
            <a href="#divergences">Key Divergences</a>
            <a href="#unified-strategy">Building a Unified Strategy</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(0, 129, 242,0.3)',paddingLeft:'1.2rem'}}>Privacy compliance has never been more complex - or more consequential. A SaaS company headquartered in India, processing data of EU residents and selling into the US market, may find itself subject to the GDPR, India's DPDP Act, and ISO 27701 certification requirements simultaneously. The challenge is that each uses different language and imposes different obligations - yet they share significant common ground. Understanding that overlap is what makes a multi-framework strategy efficient rather than duplicative.</p>

          <section id="three-frameworks">
            <h2>The Three Frameworks - <em>At a Glance</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th></th><th>ISO 27701</th><th>GDPR</th><th>India DPDP Act</th></tr></thead>
                <tbody>
                  {[['Type','International Standard (voluntary)','EU Regulation (legally binding)','Indian Legislation (legally binding)'],['Published','2019','2018 (enforcement)','2023 (rules pending)'],['Jurisdiction','Global (wherever adopted)','EU/EEA data subjects worldwide','Processing of Indian digital personal data'],['Enforced by','Certification body (auditor)','Data Protection Authorities','Data Protection Board of India'],['Max Penalty','Loss of certification','EUR 20M or 4% global turnover','INR 250 crore per instance'],['Purpose','Operational privacy management framework','Rights-based data protection law','Rights-based personal data protection law']].map(([r,...cells],i)=>(<tr key={i}><td>{r}</td>{cells.map((c,j)=>(<td key={j}>{c}</td>))}</tr>))}
                </tbody>
              </table>
            </div>
            <div className="callout co-key">
              <span className="co-icon">🔑</span>
              <div className="co-body">
                <strong>Key Framing</strong>
                <p>ISO 27701 tells you HOW to build and run a privacy programme. GDPR and DPDP tell you WHAT rights individuals have and what obligations you must meet under law. The standard and the regulations are complementary, not competing - the standard is a vehicle for meeting the regulations requirements in an auditable, structured way.</p>
              </div>
            </div>
          </section>

          <section id="scope">
            <h2>Scope and Applicability - <em>Who Does Each Apply To?</em></h2>
            <ul>
              <li><strong>GDPR:</strong> Any organisation processing personal data of EU/EEA residents, regardless of where the organisation is based. No revenue threshold - a Pune startup with a German customer is in scope.</li>
              <li><strong>DPDP Act:</strong> Processing of digital personal data of individuals in India, whether inside or outside India. Also applies if you offer goods or services to Indian individuals from abroad. Extraterritorial reach, similar to GDPR.</li>
              <li><strong>ISO 27701:</strong> Any organisation that processes PII, regardless of type, size, or nature. Adopted voluntarily - not triggered by geography or nationality of data subjects.</li>
            </ul>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>Practical Implication</strong>
                <p>If you are an Indian organisation serving EU customers and Indian consumers, both GDPR and DPDP apply to you simultaneously and independently. ISO 27701 gives you a single operational framework to satisfy both, with documented evidence for regulators and enterprise buyers in any jurisdiction.</p>
              </div>
            </div>
          </section>

          <section id="legal-basis">
            <h2>Legal Basis for Processing - <em>Similar Intent, Different Architecture</em></h2>
            <ul>
              <li><strong>GDPR (Article 6):</strong> Six lawful bases - consent, contract performance, legal obligation, vital interests, public task, and legitimate interests. Legitimate interests allows processing without consent but requires a balancing test.</li>
              <li><strong>DPDP Act:</strong> Consent-first with a narrower list of "legitimate uses" - employment, medical emergencies, legal proceedings, State functions. No broad "legitimate interests" balancing test equivalent to GDPR.</li>
              <li><strong>ISO 27701:</strong> Framework-agnostic - requires you to document the legal basis for each processing activity but does not specify which bases are valid. Adapts to whichever regulation governs your organisation.</li>
            </ul>
          </section>

          <section id="data-rights">
            <h2>Data Subject Rights - <em>Broadly Aligned, Specifically Different</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Right</th><th>GDPR</th><th>DPDP Act</th></tr></thead>
                <tbody>
                  {[['Access','Full copy of data + processing info','Summary of data + identities of Fiduciaries shared with'],['Correction','Yes','Yes - includes updating incomplete/misleading data'],['Erasure','Right to be Forgotten with defined exceptions','Right to Erasure when consent withdrawn or purpose fulfilled'],['Data Portability','Yes - machine-readable format','Not explicitly defined in current Act text'],['Restriction of Processing','Yes','Not explicitly defined'],['Right to Object','Yes - especially for marketing','Via consent withdrawal (no standalone right)'],['Grievance Redressal','Complaint to DPA','Explicit Grievance Officer requirement'],['Nomination','Not present','Yes - unique to DPDP: nominate someone for post-death rights']].map(([r,g,d],i)=>(<tr key={i}><td>{r}</td><td>{g}</td><td>{d}</td></tr>))}
                </tbody>
              </table>
            </div>
            <div className="callout co-info">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>The Nomination Right Is Unique Globally</strong>
                <p>DPDP Act Section 14 allows Data Principals to nominate another individual to exercise their rights in case of death or incapacity. No equivalent exists in GDPR. Indian organisations must build this into their data subject rights request process.</p>
              </div>
            </div>
          </section>

          <section id="consent">
            <h2>Consent Management - <em>Where the Frameworks Diverge Most</em></h2>
            <ul>
              <li><strong>GDPR:</strong> Freely given, specific, informed, unambiguous. As easy to withdraw as to give. Pre-ticked boxes and bundled consent are invalid.</li>
              <li><strong>DPDP Act:</strong> Goes further - consent notice must be in the Data Principal preferred language. Consent Managers (Section 6(9)) are registered intermediaries through which individuals can manage consents across multiple organisations from a single platform.</li>
              <li><strong>ISO 27701 (Clause 7.3):</strong> Requires mechanisms to obtain, record, and allow withdrawal of consent - but defers to GDPR or DPDP for the specific standard. Your system must satisfy the more stringent of the applicable regulations.</li>
            </ul>
          </section>

          <section id="breach">
            <h2>Breach Notification - <em>Timelines and Thresholds</em></h2>
            <ul>
              <li><strong>GDPR:</strong> 72 hours to the supervisory authority. Notify individuals if high risk to their rights. Documented, non-negotiable.</li>
              <li><strong>DPDP Act:</strong> Must notify the Data Protection Board and affected individuals - but the specific timeline will be prescribed in forthcoming Rules. Build for 72 hours to be safe.</li>
              <li><strong>ISO 27701:</strong> Requires documented incident response covering personal data breaches - the timeline comes from the applicable regulation. The standard ensures operational capability to detect, assess, and notify within the required window.</li>
            </ul>
          </section>

          <section id="cross-border">
            <h2>Cross-Border Data Transfers - <em>Fundamentally Different Approaches</em></h2>
            <ul>
              <li><strong>GDPR:</strong> Restrictive, adequacy-based. Transfers only to countries with adequacy decisions, or with safeguards (SCCs, BCRs). Requires Transfer Impact Assessments.</li>
              <li><strong>DPDP Act:</strong> Permissive - transfers allowed to any country except those specifically blacklisted by the Central Government. The inverse of GDPR model. This is one of the most significant structural differences.</li>
              <li><strong>ISO 27701 (Clause 7.5):</strong> Requires you to document all cross-border transfers and apply safeguards per the applicable regulation. For GDPR: SCCs. For DPDP: check against the restricted country list once published.</li>
            </ul>
          </section>

          <section id="core-overlap">
            <h2>The Core Overlap - <em>Where All Three Align</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Requirement</th><th>ISO 27701</th><th>GDPR</th><th>DPDP Act</th></tr></thead>
                <tbody>
                  {[['Lawful basis for processing','✓ Document & enforce','✓ Required (6 bases)','✓ Required (consent + uses)'],['Record of Processing Activities','✓ RoPA required','✓ Article 30','✓ Implied by accountability'],['Data subject rights','✓ Operational process','✓ 6 defined rights','✓ 5+ rights incl. Nomination'],['Consent management','✓ Mechanism required','✓ Defined standards','✓ Stricter notice requirements'],['Data minimisation','✓ Control required','✓ Article 5(1)(c)','✓ Section 6(2)'],['Purpose limitation','✓ Control required','✓ Article 5(1)(b)','✓ Section 6(2)'],['Breach notification','✓ IR process required','✓ 72 hours to DPA','✓ Timeline TBD in rules'],['Security measures for PII','✓ Technical & org controls','✓ Article 32','✓ Section 8(5)'],['Vendor / processor obligations','✓ DPA requirements','✓ Article 28','✓ Contractual required'],['Privacy by design','✓ Clause 8 controls','✓ Article 25','✓ Implied under accountability']].map(([r,...cells],i)=>(<tr key={i}><td>{r}</td>{cells.map((c,j)=>(<td key={j} style={{textAlign:'center',color:c.startsWith('✓')?'var(--gr)':'var(--tm)'}}>{c}</td>))}</tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="divergences">
            <h2>Key Divergences - <em>What You Must Manage Separately</em></h2>
            <ul>
              <li><strong>Cross-border transfer mechanisms:</strong> GDPR requires adequacy or SCCs. DPDP uses a blacklist model. Your transfer procedures need to handle both.</li>
              <li><strong>Consent language and notice:</strong> DPDP requires multilingual consent notices. GDPR requires plain language but no specific language mandate. Your consent management system needs language preferences for DPDP.</li>
              <li><strong>Significant Data Fiduciary obligations:</strong> DPDP SDF designation creates obligations (India-based DPO, data audits, DPIAs) with no direct GDPR equivalent for most organisations.</li>
              <li><strong>Right of Nomination:</strong> Unique to DPDP. Requires a specific intake and verification workflow.</li>
              <li><strong>Children data thresholds:</strong> GDPR requires parental consent under 16 (states can lower to 13). DPDP requires verifiable parental consent under 18 and prohibits behavioural tracking.</li>
            </ul>
          </section>

          <section id="unified-strategy">
            <h2>Building a <em>Unified Compliance Strategy</em></h2>
            <p>The most efficient approach: use ISO 27701 as the operational backbone and manage regulation-specific requirements as extensions:</p>
            <ul>
              <li>Implement ISO 27701 as your privacy management framework - a certified, auditable foundation that satisfies the operational requirements of both GDPR and DPDP.</li>
              <li>Maintain regulation-specific annexes to your RoPA that tag each processing activity with the applicable regulation and specific legal basis under each.</li>
              <li>Build your data subject rights process to handle the superset of rights across both regulations, including DPDP Nomination right.</li>
              <li>Run parallel consent notice templates - one GDPR-compliant, one DPDP-compliant (with language preferences).</li>
              <li>Maintain separate transfer documentation for GDPR (SCCs, Transfer Impact Assessments) and DPDP (cross-border register checked against the restricted list).</li>
              <li>Track your DPDP Significant Data Fiduciary status. If designated, activate additional controls as a defined workstream within your PIMS.</li>
            </ul>
            <p>ISO 27701, GDPR, and DPDP are not competing frameworks - they are complementary layers. Invest in the ISO 27701 foundation first. It is the most efficient path to demonstrating privacy maturity across all three simultaneously.</p>
          </section>

          <div className="cta-banner">
            <h3>Need ISO 27701 Implementation Support?</h3>
            <p>SecComply helps SaaS, FinTech, and healthcare organisations implement ISO 27701 - from gap assessment to certification audit, with pre-built control libraries and evidence collection.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free ISO 27701 Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is ISO 27701 certification equivalent to GDPR compliance?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. ISO 27701 certification demonstrates that you have a structured, auditable privacy management system. GDPR compliance is a legal determination that depends on how you actually process data. However, ISO 27701 provides the strongest available third-party evidence of GDPR compliance readiness - regulators treat a certified PIMS as a significant factor in compliance assessments.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can ISO 27701 satisfy both GDPR and DPDP requirements simultaneously?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes, to a significant extent. The core overlap is substantial - lawful basis, data subject rights, consent management, breach notification, data minimisation, and purpose limitation are requirements across all three. The divergences (cross-border transfer mechanisms, consent language, Nomination right, SDF obligations) must be managed as targeted extensions, not separate programmes.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the biggest difference between GDPR and the DPDP Act?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Structurally, the biggest difference is in cross-border data transfers. GDPR uses an adequacy-based model where transfers are restricted by default and require positive approval. DPDP uses a blacklist model where transfers are permitted by default unless the destination country is specifically restricted. This is the inverse of each other and has significant implications for global data flows.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Do I need all three - ISO 27701, GDPR compliance, and DPDP compliance?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>If you process data of both EU and Indian individuals, you are subject to both GDPR and DPDP - these are not optional. ISO 27701 is voluntary but provides the operational framework that makes complying with both regulations efficient. Most organisations subject to both regulations find that ISO 27701 pays for itself through reduced duplication.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the DPDP Nomination right and does GDPR have an equivalent?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The DPDP Act Section 14 allows Data Principals to nominate another individual to exercise their data rights in the event of death or incapacity. There is no equivalent in GDPR. Indian organisations must build a specific nomination intake, verification, and activation workflow into their data subject rights process. This is one of the most commonly overlooked DPDP-specific requirements.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#three-frameworks" className="toc-link">At a Glance</a></li>
              <li><a href="#scope" className="toc-link">Scope</a></li>
              <li><a href="#legal-basis" className="toc-link">Legal Basis</a></li>
              <li><a href="#data-rights" className="toc-link">Data Rights</a></li>
              <li><a href="#consent" className="toc-link">Consent</a></li>
              <li><a href="#breach" className="toc-link">Breach Notification</a></li>
              <li><a href="#cross-border" className="toc-link">Cross-Border</a></li>
              <li><a href="#core-overlap" className="toc-link">Core Overlap</a></li>
              <li><a href="#divergences" className="toc-link">Divergences</a></li>
              <li><a href="#unified-strategy" className="toc-link">Unified Strategy</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 ISO 27701 Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27701-explained">ISO 27701 Explained</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp">▶ ISO 27701 vs GDPR vs DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/who-needs-iso-27701">Who Needs ISO 27701</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-for-data-controllers">ISO 27701 for Controllers</a></li>
              <li><a href="https://seccomply.net/resources/blog/building-a-pims-iso-27701">Building a PIMS</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27701</span><span className="tag">GDPR</span><span className="tag">DPDP Act</span><span className="tag">Privacy Frameworks</span><span className="tag">Multi-Framework</span><span className="tag">Cross-Border</span><span className="tag">Consent</span></div>
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
