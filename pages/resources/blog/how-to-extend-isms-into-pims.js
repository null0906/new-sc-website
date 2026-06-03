import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function HowToExtendISMSIntoPIMS() {
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
        <title>How to Extend Your ISMS Into a PIMS - ISO 27001 + ISO 27701 | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="Most organisations with ISO 27001 have done 50-70% of the work for ISO 27701 already. Here is the 7-step extension process, the documentation auditors expect, and combined vs phased certification." />
        <meta name="keywords" content="extend ISMS to PIMS, ISO 27001 to ISO 27701, ISMS PIMS extension, ISO 27701 implementation existing ISMS, combined ISO 27001 27701 certification, PIMS gap assessment, privacy management system" />
        <meta property="og:title" content="How to Extend Your ISMS Into a PIMS - ISO 27001 + ISO 27701" />
        <meta property="og:description" content="Most organisations with ISO 27001 have done 50-70% of the work for ISO 27701 already. Here is the 7-step extension process, the documentation auditors expect, and combined vs phased certification." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/how-to-extend-isms-into-pims" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Bhumika Deshmukh" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/how-to-extend-isms-into-pims" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"How to Extend Your ISMS Into a PIMS - ISO 27001 + ISO 27701","description":"Most organisations with ISO 27001 have done 50-70% of the work for ISO 27701. Here is the 7-step extension process and the combined vs phased certification decision.","author":{"@type":"Person","name":"Bhumika Deshmukh","jobTitle":"Cybersecurity Analyst & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/how-to-extend-isms-into-pims","articleSection":"ISO 27701"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"Extend ISMS to PIMS","item":"https://seccomply.net/resources/blog/how-to-extend-isms-into-pims"}]}]}) }} />
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
        <span style={{color:'var(--tb)'}}>Blog</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🔐 ISO 27701</span><span className="badge badge-bl">🛡️ ISO 27001</span><span className="badge badge-gr">✅ PIMS Extension</span>
        </div>
        <h1 className="hero-h1">How to Extend Your ISMS Into a PIMS - <em>ISO 27001 + ISO 27701</em></h1>
        <p className="hero-sub">Most organisations with ISO 27001 have already done 50–70% of the work for ISO 27701. This guide explains what the extension involves, the 7-step process, the documentation auditors expect, and whether to pursue combined or phased certification.</p>

        <div className="author-strip">
          <div className="avatar">BD</div>
          <div className="author-info">
            <div className="aname">Bhumika Deshmukh</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Cybersecurity Analyst & Technical Writer</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=480&fit=crop" alt="Extending ISMS into PIMS ISO 27001 ISO 27701 privacy management" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">ISO 27701 is not a second standard to implement. It is an extension to the one you already have. If your ISMS is solid, you are already most of the way there.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pge" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(0, 129, 242,0.04)"/></pattern></defs>
          <rect width="960" height="300" fill="url(#pge)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">Extending Your ISMS Into a PIMS - What ISO 27001 Covers vs What It Does Not</text>
          <rect x="30" y="38" width="440" height="230" rx="14" fill="#071820" stroke="rgba(6,214,160,0.25)" strokeWidth="1.5"/>
          <rect x="30" y="38" width="440" height="4" rx="2" fill="#06d6a0"/>
          <text x="250" y="65" textAnchor="middle" fill="#06d6a0" fontSize="11" fontWeight="800" fontFamily="sans-serif">✓ WHAT ISO 27001 ALREADY COVERS</text>
          {["Risk management for information assets","Access control and identity management","Incident management and response","Supplier / third-party security obligations","Internal audit and management review","Asset inventory and classification","Business continuity planning"].map((t,i)=>(<text key={i} x="55" y={90+i*22} fill="rgba(200,214,229,0.6)" fontSize="10" fontFamily="sans-serif">✓ {t}</text>))}
          <rect x="50" y="250" width="400" height="8" rx="4" fill="#06d6a0" opacity="0.15"/>
          <rect x="50" y="250" width="280" height="8" rx="4" fill="#06d6a0" opacity="0.5"/>
          <text x="250" y="270" textAnchor="middle" fill="#06d6a0" fontSize="8" fontWeight="700" fontFamily="sans-serif">~50–70% of ISO 27701 work is already done</text>
          <rect x="510" y="38" width="420" height="230" rx="14" fill="#180a0d" stroke="rgba(0, 129, 242,0.3)" strokeWidth="1.5"/>
          <rect x="510" y="38" width="420" height="4" rx="2" fill="#0081f2"/>
          <text x="720" y="65" textAnchor="middle" fill="#0081f2" fontSize="11" fontWeight="800" fontFamily="sans-serif">✗ WHAT ISO 27001 DOES NOT ADDRESS</text>
          {["Legal basis for personal data processing","PII-specific purpose limitation and minimisation","Data subject rights (access, erasure, portability)","Privacy notices and consent management","Privacy Impact Assessments (PIAs / DPIAs)","Retention and disposal schedules for PII","Controller-processor contractual requirements"].map((t,i)=>(<text key={i} x="535" y={90+i*22} fill="rgba(200,214,229,0.6)" fontSize="10" fontFamily="sans-serif">✗ {t}</text>))}
          <rect x="530" y="250" width="380" height="8" rx="4" fill="#0081f2" opacity="0.15"/>
          <rect x="530" y="250" width="130" height="8" rx="4" fill="#0081f2" opacity="0.5"/>
          <text x="720" y="270" textAnchor="middle" fill="#0081f2" fontSize="8" fontWeight="700" fontFamily="sans-serif">~30–50% new work required - mostly documentation and process</text>
          <text x="480" y="295" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">The gap is not as large as it looks. Most missing elements build on infrastructure that already exists in a mature ISMS.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-adds">What ISO 27701 Actually Adds</a>
            <a href="#coverage-gap">What Your ISMS Covers - And What It Does Not</a>
            <a href="#seven-steps">The 7 Steps to Extend Your ISMS</a>
            <a href="#documentation">Documentation Auditors Expect</a>
            <a href="#combined-vs-phased">Combined vs Phased Certification</a>
            <a href="#readiness">PIMS Readiness Checklist</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(0, 129, 242,0.3)',paddingLeft:'1.2rem'}}>Most organisations that have achieved ISO 27001 certification have spent months building something valuable: a working Information Security Management System. What many have not yet done is extend that work to cover privacy. <strong>ISO 27701 exists precisely to close that gap.</strong> It is not a separate standard that replaces your ISMS - it is a privacy extension that sits on top of it, adding the controls, processes, and accountability structures needed to manage personal data with the same rigour you already apply to information security.</p>

          <section id="what-adds">
            <h2>What ISO 27701 <em>Actually Adds</em></h2>
            <p>ISO 27701 is formally titled the Privacy Information Management System (PIMS) standard. Published in 2019 as an extension to both ISO 27001 and ISO 27002, its purpose is to help organisations demonstrate accountability for personal data - both as controllers and as processors. The additions fall into three areas:</p>
            <ul>
              <li><strong>Extended requirements on ISO 27001 Clauses 4–10</strong> - the core management system clauses - with privacy-specific additions at each stage.</li>
              <li><strong>PIMS-specific control guidance</strong> extending ISO 27002 Annex A with privacy considerations, plus new controls covering PII handling, purpose limitation, data subject rights, and third-party data sharing.</li>
              <li><strong>Separate guidance for controllers and processors</strong>, recognising that accountability looks different depending on your role in each processing activity.</li>
            </ul>
          </section>

          <section id="coverage-gap">
            <h2>What Your ISMS Covers - <em>And What It Does Not</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>✓ ISO 27001 Covers</th><th>✗ ISO 27001 Does Not Address</th></tr></thead>
                <tbody>
                  {[['Risk management for information assets','Legal basis for personal data processing'],['Access control and identity management','PII-specific purpose limitation and minimisation'],['Incident management and response','Data subject rights (access, erasure, portability)'],['Supplier / third-party security obligations','Privacy notices and consent management'],['Internal audit and management review','Privacy Impact Assessments (DPIAs)'],['Asset inventory and classification','Retention and disposal schedules for PII'],['Business continuity planning','Controller-processor contractual requirements']].map(([y,n],i)=>(<tr key={i}><td style={{color:'var(--gr)'}}>{y}</td><td style={{color:'var(--cy)'}}>{n}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p>The gap is not as large as it looks. Most missing elements build on infrastructure that already exists in a mature ISMS. Organisations with a well-maintained ISO 27001 programme typically find that <strong>50 to 70 percent of the ISO 27701 work is already done</strong> or largely in place.</p>
          </section>

          <section id="seven-steps">
            <h2>The 7 Steps to <em>Extend Your ISMS Into a PIMS</em></h2>
            <ul>
              <li><strong>Step 1 - Privacy-specific gap assessment:</strong> Map your current ISMS against ISO 27701 additional requirements. Identify what is satisfied, what is partially covered, what is genuinely absent. This gap register becomes your implementation roadmap.</li>
              <li><strong>Step 2 - Define your role (controller, processor, or both):</strong> ISO 27701 has separate control sets for each role. Many organisations are controllers in some contexts and processors in others - your PIMS needs to reflect that reality.</li>
              <li><strong>Step 3 - Extend your asset inventory to cover PII:</strong> Your ISMS already has an asset inventory. Extend it to include a Record of Processing Activities (RoPA) - documenting what personal data you hold, why, the legal basis, sources, recipients, and retention periods. This is one of the most time-consuming steps and one of the most valuable.</li>
              <li><strong>Step 4 - Update risk management to include privacy risks:</strong> Extend your risk assessment methodology with PII-specific categories: unlawful processing, excessive retention, inadequate consent, unauthorised third-party transfer. Run a privacy-focused risk assessment against your processing activities.</li>
              <li><strong>Step 5 - Develop PIMS policies and procedures:</strong> At minimum: Privacy Policy (internal), Data Subject Rights procedure, DPIA procedure, Privacy by Design checklist, data breach procedure with PII elements, retention and disposal schedule, and controller-processor contract templates.</li>
              <li><strong>Step 6 - Implement PIMS-specific controls:</strong> Annex B extends ISO 27002 controls with privacy guidance. Annex C and D add controls unique to controllers and processors. Most can be implemented as extensions to existing controls.</li>
              <li><strong>Step 7 - Integrate PIMS into your audit and review cycle:</strong> A single, integrated management system - not two parallel systems. Update your internal audit programme, add privacy metrics to management review, and ensure your PIMS has a named owner.</li>
            </ul>
          </section>

          <section id="documentation">
            <h2>The Documentation <em>Auditors Will Expect</em></h2>
            <ul>
              <li>Record of Processing Activities (RoPA) - complete and reviewed</li>
              <li>Privacy Policy - internal version, signed and dated</li>
              <li>Data Subject Rights procedure with documented response timelines</li>
              <li>DPIA procedure and completed DPIA records for high-risk processing</li>
              <li>Privacy by Design checklist for new projects</li>
              <li>Controller-processor contracts with all relevant vendors</li>
              <li>Data breach procedure with PII-specific notification steps</li>
              <li>Consent management records (where processing relies on consent)</li>
              <li>Data retention schedule - covering all categories of personal data</li>
              <li>Privacy risk register - linked to your main ISMS risk register</li>
              <li>Training records - privacy awareness training for all relevant staff</li>
              <li>Management review minutes - including PIMS agenda items</li>
            </ul>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The Documentation Gap That Catches Most Organisations</strong>
                <p>The most common finding in first-time ISO 27701 audits is not that privacy controls are absent - it is that they exist informally without documentation. Your team may handle data subject requests carefully, but if there is no written procedure, no defined response timeline, and no log of requests received, an auditor cannot confirm the control is real. In a PIMS audit, undocumented processes are treated as absent processes.</p>
              </div>
            </div>
          </section>

          <section id="combined-vs-phased">
            <h2>Combined vs Phased Certification - <em>Which Approach Is Right</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Combined (27001 + 27701 together)</th><th>Phased (27001 first, 27701 later)</th></tr></thead>
                <tbody>
                  {[['Single audit - lower total cost','ISMS foundation fully established before adding complexity'],['Integrated ISMS/PIMS from the start','Privacy gap assessment can be done more thoroughly post-27001'],['Faster time to full accountability','Easier to resource the implementation in stages'],['Best if privacy obligations are well-understood','Better fit if PII processing scope is still being mapped'],['Suitable under immediate regulatory pressure','Allows team to develop privacy expertise over time']].map(([c,p],i)=>(<tr key={i}><td>{c}</td><td>{p}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p>For most organisations that already hold ISO 27001 certification and face customer-driven or regulatory privacy requirements, the combined or phased extension approach is the right path. Starting from scratch on privacy when you already have a functioning ISMS is unnecessary duplication.</p>
          </section>

          <section id="readiness">
            <h2>Pre-Implementation <em>PIMS Readiness Checklist</em></h2>
            <ul>
              <li>ISO 27001 certification in place or implementation mature</li>
              <li>Roles defined: controller, processor, or both - for each activity</li>
              <li>Record of Processing Activities started or in progress</li>
              <li>Data flows mapped for major business functions</li>
              <li>Legal basis identified for each processing activity</li>
              <li>Privacy risks identified and added to risk register</li>
              <li>Data subject rights procedure drafted or in place</li>
              <li>DPIA procedure defined and applied to high-risk activities</li>
              <li>Vendor contracts reviewed for data processing clauses</li>
              <li>Privacy awareness training delivered to relevant staff</li>
              <li>Retention schedule defined for all categories of personal data</li>
              <li>Privacy lead or DPO identified and accountabilities documented</li>
            </ul>
            <p>The work required to build a PIMS is mostly documentation, structured process, and a clear understanding of where personal data sits in your organisation. If the ISMS foundation is solid, the extension to a full PIMS is closer than most organisations realise.</p>
          </section>

          <div className="cta-banner">
            <h3>Need Help with Your Compliance Journey?</h3>
            <p>SecComply helps startups and enterprises navigate ISO 27001, ISO 27701, GDPR, and DPDP - from gap assessment to audit-ready documentation.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/how-to-extend-isms-into-pims" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/how-to-extend-isms-into-pims&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How much of ISO 27001 work carries over to ISO 27701?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Typically 50–70%. Your risk management process, asset inventory, internal audit cycle, management review, access controls, incident management, and supplier management all carry over directly. The new work is primarily: RoPA, consent management, data subject rights procedures, privacy notices, DPIAs, and retention schedules.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can I get ISO 27701 certified without ISO 27001?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. ISO 27701 is an extension to ISO 27001 and requires the ISMS foundation. However, you can pursue both certifications together in a single integrated programme - a combined audit is the most efficient approach for organisations not yet ISO 27001 certified.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the biggest gap most organisations find when extending ISMS to PIMS?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The Record of Processing Activities (RoPA). Most organisations with ISO 27001 have an asset inventory but have not mapped personal data processing activities at the level of detail ISO 27701 requires - documenting purpose, legal basis, retention periods, recipients, and cross-border transfers for each activity.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How long does it take to extend ISO 27001 into ISO 27701?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>For organisations already ISO 27001-certified with a mature ISMS, 3–6 months is typical. The timeline depends on the complexity of your data processing activities, the maturity of existing privacy practices, and how many gaps the initial assessment reveals.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Should we do a combined or phased certification?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>If you already hold ISO 27001 and face immediate privacy requirements from customers or regulators, combined certification is more cost-effective. If your ISMS still has gaps or your PII processing scope is not fully mapped, a phased approach lets you strengthen the foundation first and add ISO 27701 at the next surveillance or recertification audit.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#what-adds" className="toc-link">What ISO 27701 Adds</a></li>
              <li><a href="#coverage-gap" className="toc-link">Coverage Gap</a></li>
              <li><a href="#seven-steps" className="toc-link">7 Extension Steps</a></li>
              <li><a href="#documentation" className="toc-link">Audit Documentation</a></li>
              <li><a href="#combined-vs-phased" className="toc-link">Combined vs Phased</a></li>
              <li><a href="#readiness" className="toc-link">Readiness Checklist</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Reading</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27701-explained">ISO 27701 Explained</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp">ISO 27701 vs GDPR vs DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/who-needs-iso-27701">Who Needs ISO 27701</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-for-data-controllers">ISO 27701 for Controllers</a></li>
              <li><a href="https://seccomply.net/resources/blog/building-a-pims-iso-27701">Building a PIMS</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-explained-startups">ISO 27001 for Startups</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27701</span><span className="tag">ISO 27001</span><span className="tag">PIMS</span><span className="tag">ISMS</span><span className="tag">Privacy Extension</span><span className="tag">Combined Certification</span><span className="tag">Gap Assessment</span></div>
          </div>
          <div className="sb-cta">
            <h4>Need Compliance Help?</h4>
            <p>From gap assessment to audit - we handle the entire compliance journey.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
