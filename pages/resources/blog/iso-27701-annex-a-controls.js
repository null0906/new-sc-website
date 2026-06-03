import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27701AnnexAControls() {
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
        <title>ISO 27701 Annex A Controls - A Plain-English Walkthrough for Teams | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="ISO 27701 Annex A & B controls explained in plain English - 8 thematic areas for controllers and 8 for processors, with key actions for each team and practical implementation tips." />
        <meta name="keywords" content="ISO 27701 Annex A controls, ISO 27701 Annex B controls, privacy controls walkthrough, controller privacy controls, processor privacy controls, privacy by design controls, PII sharing controls, RACI privacy controls" />
        <meta property="og:title" content="ISO 27701 Annex A Controls - A Plain-English Walkthrough for Teams" />
        <meta property="og:description" content="ISO 27701 Annex A & B controls explained in plain English - 8 thematic areas for controllers and 8 for processors, with key actions for each team and practical implementation tips." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27701-annex-a-controls" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Bhumika Deshmukh" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27701-annex-a-controls" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27701 Annex A Controls - A Plain-English Walkthrough for Teams","description":"ISO 27701 Annex A & B controls explained - 8 thematic areas for controllers and processors with key actions and implementation tips.","author":{"@type":"Person","name":"Bhumika Deshmukh","jobTitle":"Cybersecurity Analyst & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-21","dateModified":"2026-04-21","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27701-annex-a-controls","articleSection":"ISO 27701"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"ISO 27701 Annex A Controls","item":"https://seccomply.net/resources/blog/iso-27701-annex-a-controls"}]}]}) }} />
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
        <span style={{color:'var(--tb)'}}>ISO 27701 Annex A Controls - A Plai...</span>
      </div>
      <div className="hero-wrap">
        <div className="badges"><span className="badge badge-cy">🔐 ISO 27701</span><span className="badge badge-bl">📋 Annex A & B</span><span className="badge badge-gr">✅ Controls Walkthrough</span></div>
        <h1 className="hero-h1">ISO 27701 Annex A Controls - <em>A Plain-English Walkthrough</em> for Teams</h1>
        <p className="hero-sub">Annex A is where the rubber meets the road. It translates high-level privacy principles into concrete, auditable controls - one set for data controllers (A.2-A.8) and another for data processors (B.2-B.8). If your team is on the path to ISO 27701 certification, understanding Annex A is non-negotiable.</p>
        <div className="author-strip">
          <div className="avatar">BD</div>
          <div className="author-info">
            <div className="aname">Bhumika Deshmukh</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Cybersecurity Analyst & Technical Writer</span><span className="dot">·</span><span id="read-time">📖 10 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>
        <div className="img-wrap"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=480&fit=crop" alt="ISO 27701 Annex A controls walkthrough privacy compliance" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} /></div>
        <p className="img-cap">Think of Annex A controls as a checklist your DPO, legal team, and engineering teams all share ownership over. Each control maps to a real-world privacy obligation.</p>
        <div className="img-wrap"><svg viewBox="0 0 960 260" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pgp2" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(0, 129, 242,0.04)"/></pattern></defs>
          <rect width="960" height="260" fill="url(#pgp2)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">ISO 27701 Annex A & B - Controller and Processor Controls</text>
          <rect x="30" y="38" width="440" height="190" rx="14" fill="#091826" stroke="#0081f222" strokeWidth="1.5"/>
          <rect x="30" y="38" width="440" height="4" rx="2" fill="#0081f2"/>
          <text x="250" y="65" textAnchor="middle" fill="#0081f2" fontSize="12" fontWeight="800" fontFamily="sans-serif">ANNEX A - CONTROLLER CONTROLS</text>
          {["A.2 Collection & Processing Conditions","A.3 Obligations to PII Principals","A.4 Privacy by Design & Default","A.5 Sharing, Transfer & Disclosure","A.6 Access, Correction & Erasure","A.7 Privacy Complaints & Enquiries","A.8 Assessment of Controller Obligations"].map((t,i) => (
            <text key={i} x="55" y={88+i*20} fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">{t}</text>
          ))}
          <rect x="510" y="38" width="420" height="190" rx="14" fill="#071820" stroke="#06d6a022" strokeWidth="1.5"/>
          <rect x="510" y="38" width="420" height="4" rx="2" fill="#06d6a0"/>
          <text x="720" y="65" textAnchor="middle" fill="#06d6a0" fontSize="12" fontWeight="800" fontFamily="sans-serif">ANNEX B - PROCESSOR CONTROLS</text>
          {["B.2 Collection & Processing Conditions","B.3 Obligations to PII Principals","B.4 Privacy by Design & Default","B.5 Sharing, Transfer & Disclosure","B.6 Access, Correction & Erasure","B.7 Privacy Complaints & Enquiries","B.8 Assessment of Processor Obligations"].map((t,i) => (
            <text key={i} x="535" y={88+i*20} fill="rgba(200,214,229,0.6)" fontSize="9.5" fontFamily="sans-serif">{t}</text>
          ))}
          <text x="480" y="248" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">Many organisations act as BOTH controller and processor. Each control maps to a real-world privacy obligation.</text>
        </svg></div>
        <div className="toc-box"><div className="toc-lbl">In This Article</div><div className="toc-grid">
            <a href="#structure">The Structure</a>
            <a href="#controller-controls">Controller Controls (A.2-A.8)</a>
            <a href="#processor-controls">Processor Controls (B.2-B.8)</a>
            <a href="#practical-tips">Practical Implementation Tips</a>
            <a href="#quick-reference">Quick Reference Table</a>
            <a href="#faq">FAQ</a>
        </div></div>
      </div>
      <div className="blog-layout">
        <article className="art">
          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(0, 129, 242,0.3)',paddingLeft:'1.2rem'}}>ISO 27701 is ISO 27001's privacy-focused sibling. Where 27001 governs information security broadly, 27701 zooms in on how organisations handle Personally Identifiable Information. <strong>Annex A is where the rubber meets the road</strong> - it translates high-level privacy principles into concrete, auditable controls. One set for controllers (A.2-A.8), another for processors (B.2-B.8).</p>

          <section id="structure">
            <h2>The Structure - <em>Annex A at a Glance</em></h2>
            <p>Annex A is split into two parts reflecting the two primary roles in the PII ecosystem:</p>
            <ul>
              <li><strong>Annex A (A.2-A.8):</strong> Controls for PII Controllers - organisations that determine the purpose and means of processing</li>
              <li><strong>Annex B (B.2-B.8):</strong> Controls for PII Processors - organisations that process data on behalf of a controller</li>
            </ul>
            <p>Many organisations act as both controller and processor depending on the data flow. Each set groups requirements into eight thematic areas mirroring each other.</p>
          </section>

          <section id="controller-controls">
            <h2>Controller Controls - <em>A.2 through A.8</em></h2>

            <h3>A.2 - Conditions for Collection and Processing</h3>
            <p>Defines the legal basis and purposes for which PII may be collected, used, and retained. Document lawful basis for each processing activity in your RoPA. Capture consent at collection with clear audit trails. Tie every data collection field to a stated purpose. Restrict processing to declared purposes only.</p>

            <h3>A.3 - Obligations to PII Principals</h3>
            <p>Sets out transparency and notice obligations. Publish a clear, layered privacy notice at every data touchpoint. Ensure notices are in plain language. Keep notices updated when processing activities change. Train customer-facing staff on what to tell individuals.</p>

            <h3>A.4 - Privacy by Design and Default</h3>
            <p>Privacy must be embedded from the outset, with the most privacy-protective settings as default. Include a PIA/DPIA gate in your SDLC. Default to minimum data collection. Pseudonymise or minimise data at the architecture level. Review legacy systems and retrofit privacy-by-design principles.</p>

            <h3>A.5 - PII Sharing, Transfer, and Disclosure</h3>
            <p>Governs sharing with third parties, international transfers, and legal disclosures. Maintain a sharing register with DPAs. Assess transfer mechanisms for cross-border flows (SCCs, adequacy decisions). Document the legal basis before sharing with any third party.</p>

            <h3>A.6 - Access, Correction, and Erasure</h3>
            <p>Operationalises data subject rights. Build a SAR intake and fulfilment workflow. Set SLAs for responding (e.g., 30 days). Implement technical capability to export, correct, or delete user data. Test your erasure process end-to-end.</p>

            <h3>A.7 - Privacy Complaints and Enquiries</h3>
            <p>Defines how complaints are received, tracked, and resolved. Designate a named DPO or privacy contact. Log all complaints in a centralised register. Establish escalation paths for high-risk complaints. Track resolution times and perform root cause analysis.</p>

            <h3>A.8 - Assessment of Controller Obligations</h3>
            <p>Requires ongoing assessment of privacy obligations - legal, regulatory, and contractual. Subscribe to regulatory update services. Conduct annual reviews against current law. Maintain a legal register mapping obligations to internal controls.</p>
          </section>

          <section id="processor-controls">
            <h2>Processor Controls - <em>B.2 through B.8</em></h2>

            <h3>B.2 - Conditions for Collection and Processing</h3>
            <p>Never process PII outside the documented scope of controller agreements. Maintain a processing register mapped to controller instructions. Flag and escalate any instruction you believe is unlawful. Audit sub-processors to the same standard.</p>

            <h3>B.3 - Obligations to PII Principals</h3>
            <p>Understand where your product touches end-users directly. Ensure individual-facing communications are coordinated with the controller. Avoid privacy representations that conflict with controller notices.</p>

            <h3>B.4 - Privacy by Design and Default</h3>
            <p>Build privacy into services so controllers can meet their own obligations. Offer data minimisation features. Provide tools for controllers to configure retention and deletion. Include privacy-protective defaults. Document privacy architecture for controller DPIAs.</p>

            <h3>B.5 - PII Sharing, Transfer, and Disclosure</h3>
            <p>Obtain written controller approval before engaging sub-processors. Flow down data protection obligations by contract. Notify controllers promptly of sub-processor changes. Maintain a record of all international transfers.</p>

            <h3>B.6 - Access, Correction, and Erasure</h3>
            <p>Build APIs or interfaces enabling controllers to extract or delete data on request. Respond promptly. Ensure deletion propagates to backups and replicas. Test deletion capability regularly.</p>

            <h3>B.7 - Privacy Complaints and Enquiries</h3>
            <p>Set up a dedicated privacy contact for controller escalations. Forward complaints to the relevant controller without delay. Do not resolve complaints on behalf of the controller without authorisation.</p>

            <h3>B.8 - Assessment of Processor Obligations</h3>
            <p>Conduct annual reviews of DPA obligations across all controller relationships. Monitor changes to processor liability under applicable law. Maintain records of processing activities per GDPR Article 30(2).</p>
          </section>

          <section id="practical-tips">
            <h2>Practical Tips - <em>For Implementation</em></h2>
            <ul>
              <li><strong>Do not treat this as a legal-only exercise.</strong> Engineering, product, and DevOps all have a role in controls like A.4 (Privacy by Design) and A.6 (Access and Erasure). Build a cross-functional privacy working group early.</li>
              <li><strong>Map to existing processes first.</strong> Many controls will have partial coverage through your existing ISMS, GDPR programme, or security policies. Gap analysis before building net-new procedures.</li>
              <li><strong>Evidence is everything for certification.</strong> Auditors will ask for documented evidence: meeting minutes, policy version history, completed DPIAs, training logs, SAR completion records. Centralise evidence in a GRC tool.</li>
              <li><strong>Review controls annually.</strong> Privacy obligations evolve. GDPR guidance changes, new jurisdictions adopt laws, your product evolves. Schedule an annual Annex A review as part of your PIMS management review.</li>
              <li><strong>Use a RACI for each control.</strong> Each control should have a named Responsible, Accountable, Consulted, and Informed party. Without clear ownership, controls drift.</li>
            </ul>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>Common Audit Finding</strong>
                <p>Organisations have controls in place but cannot produce evidence they were followed. Build documentation habits into your processes from day one - not just before an audit. An undocumented process is treated as an absent process.</p>
              </div>
            </div>
          </section>

          <section id="quick-reference">
            <h2>Quick Reference - <em>All Controls at a Glance</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Control</th><th>Topic</th><th>Primary Stakeholder</th></tr></thead>
                <tbody>
                  {[['A.2','Conditions for Collection & Processing','Legal / DPO / Engineering'],['A.3','Obligations to PII Principals','Legal / DPO / Marketing'],['A.4','Privacy by Design & Default','Product / Engineering / DPO'],['A.5','PII Sharing, Transfer & Disclosure','Legal / Procurement / DPO'],['A.6','Access, Correction & Erasure','Engineering / Customer Success / DPO'],['A.7','Privacy Complaints & Enquiries','DPO / Customer Success'],['A.8','Assessment of Controller Obligations','Legal / DPO / Compliance'],['B.2','Processor: Collection & Processing','Legal / DPO / Engineering'],['B.3','Processor: Obligations to Principals','DPO / Product'],['B.4','Processor: Privacy by Design','Engineering / Product'],['B.5','Processor: Sharing & Transfer','Legal / Procurement'],['B.6','Processor: Access & Erasure','Engineering / DPO'],['B.7','Processor: Complaints','DPO / Support'],['B.8','Processor: Assessment of Obligations','Legal / DPO / Compliance']].map(([c,t,s],i)=>(<tr key={i}><td style={{color:'var(--cy)'}}>{c}</td><td>{t}</td><td>{s}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>
          <div className="cta-banner">
            <h3>Need Help with Your Compliance Journey?</h3>
            <p>SecComply helps startups and enterprises navigate ISO 27001, ISO 27701, GDPR, and DPDP - from gap assessment to audit-ready documentation.</p>
            <div className="cta-btns"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Consultation →</a></div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/iso-27701-annex-a-controls" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/iso-27701-annex-a-controls&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>
          <section id="faq" className="faq-section"><h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the difference between ISO 27701 Annex A and Annex B?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Annex A (A.2-A.8) contains controls for PII Controllers - organisations that determine the purpose and means of processing. Annex B (B.2-B.8) contains controls for PII Processors - organisations that process data on behalf of controllers. Many organisations implement both because they act as controller for some data and processor for other data.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How many controls are in ISO 27701 Annex A?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Annex A has 7 thematic control areas (A.2-A.8) for controllers and Annex B mirrors these with 7 areas (B.2-B.8) for processors. The total number of individual sub-controls varies but typically totals 49 controller controls and 25+ processor controls.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Do I need to implement both Annex A and Annex B?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>It depends on your role. If you are only a controller, implement Annex A. If you are only a processor, implement Annex B. If you are both (common for SaaS companies), you need controls from both annexes. Your Statement of Applicability documents which apply and why.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the most commonly failed Annex A control in audits?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Evidence of controls being followed rather than merely documented. Organisations frequently have policies and procedures in place but cannot produce evidence they were executed - SAR completion logs, DPIA records, training completion certificates, or consent audit trails. Build documentation habits from day one.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How does Annex A relate to GDPR requirements?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Annex A controls map directly to GDPR obligations. A.2 maps to lawful basis (Article 6), A.3 to transparency (Articles 12-14), A.4 to Privacy by Design (Article 25), A.5 to cross-border transfers (Chapter V), A.6 to data subject rights (Articles 15-22), and A.7 to complaint handling (Article 77). ISO 27701 operationalises these GDPR requirements in an auditable framework.</p></div>
            </div>

          </section>
        </article>
        <aside className="sb">
          <div className="sb-card"><div className="sb-title">In This Article</div><ul className="sb-toc">
              <li><a href="#structure" className="toc-link">Structure</a></li>
              <li><a href="#controller-controls" className="toc-link">Controller Controls</a></li>
              <li><a href="#processor-controls" className="toc-link">Processor Controls</a></li>
              <li><a href="#practical-tips" className="toc-link">Implementation Tips</a></li>
              <li><a href="#quick-reference" className="toc-link">Quick Reference</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
          </ul></div>
          <div className="sb-card"><div className="sb-title">🔗 Related</div><ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27701-explained">ISO 27701 Explained</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-for-data-controllers">ISO 27701 for Controllers</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-for-data-processors">ISO 27701 for Processors</a></li>
              <li><a href="https://seccomply.net/resources/blog/who-needs-iso-27701">Who Needs ISO 27701</a></li>
              <li><a href="https://seccomply.net/resources/blog/building-a-pims-iso-27701">Building a PIMS</a></li>
          </ul></div>
          <div className="sb-card"><div className="sb-title">🏷️ Tags</div><div className="tag-cloud"><span className="tag">ISO 27701</span><span className="tag">Annex A</span><span className="tag">Annex B</span><span className="tag">Privacy Controls</span><span className="tag">Controller</span><span className="tag">Processor</span><span className="tag">RACI</span><span className="tag">Implementation</span></div></div>
          <div className="sb-cta"><h4>Need Compliance Help?</h4><p>From gap assessment to audit - we handle the entire journey.</p><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a></div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
