import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function SignificantDataFiduciary() {
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
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      window.copyLink = function () { (navigator.clipboard ? navigator.clipboard.writeText(window.location.href) : Promise.reject()).catch(() => {}); };
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08 }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Significant Data Fiduciary (SDF) - Are You One? What Changes If You Are? | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="Not all Data Fiduciaries are equal under the DPDP Act. Section 10 creates a higher-obligation tier - the Significant Data Fiduciary. Here is how the government decides, and what four additional obligations apply once you are classified." />
        <meta name="keywords" content="significant data fiduciary SDF DPDP Act, SDF obligations India, DPIA data protection impact assessment, data protection officer India, independent data auditor DPDP, SDF classification criteria, DPDP Act Section 10, SDF compliance India" />
        <meta property="og:title" content="Significant Data Fiduciary (SDF) - Are You One? What Changes If You Are?" />
        <meta property="og:description" content="Not all Data Fiduciaries are equal under the DPDP Act. Section 10 creates a higher-obligation tier - the Significant Data Fiduciary. Here is how the government decides, and what four additional obligations apply once you are classified." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/significant-data-fiduciary-sdf" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/significant-data-fiduciary-sdf" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Significant Data Fiduciary (SDF) - Are You One? What Changes If You Are?","description":"Section 10 of the DPDP Act creates a higher-obligation tier for Significant Data Fiduciaries. Learn the classification criteria and the 4 additional obligations that apply.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply Technologies"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/significant-data-fiduciary-sdf","articleSection":"DPDP Act"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"Significant Data Fiduciary","item":"https://seccomply.net/resources/blog/significant-data-fiduciary-sdf"}]}]}) }} />
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
    .pillar-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:.8rem;margin:2rem 0}
    .pillar-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1rem;text-align:center}
    .pillar-card .pnum{font-size:1.4rem;font-weight:800;color:var(--cy);margin-bottom:.3rem}
    .pillar-card .plabel{font-size:.75rem;font-weight:700;color:var(--tx)}
    .rights-grid{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin:1.5rem 0}
    .right-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.1rem;transition:border-color .2s}
    .right-card:hover{border-color:var(--bo)}
    .right-card .rnum{font-size:.65rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:.35rem}
    .right-card .rtitle{font-size:.92rem;font-weight:700;color:var(--tx);margin-bottom:.25rem}
    .right-card .rdesc{font-size:.8rem;color:var(--tm);line-height:1.5}
    .sdf-compare{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:2rem 0}
    .sdf-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem}
    .sdf-col .sc-label{font-size:.68rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.8rem;display:block}
    .sdf-col.sc-std .sc-label{color:var(--tm)}
    .sdf-col.sc-sdf .sc-label{color:var(--cy)}
    .sdf-col li{font-size:.83rem;color:var(--tb);padding:.3rem 0 .3rem 1.2rem;border-bottom:1px solid var(--bs)}
    .sdf-col li:last-child{border-bottom:none}
    .series-nav{display:flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;background:rgba(0, 129, 242,.05);border:1px solid rgba(0, 129, 242,.15);border-radius:10px;margin-bottom:2rem;font-size:.8rem;flex-wrap:wrap}
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
    @media(max-width:900px){.pillar-grid{grid-template-columns:repeat(3,1fr)}.rights-grid{grid-template-columns:1fr}.sdf-compare{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}.pillar-grid{grid-template-columns:repeat(2,1fr)}}
`}</style>
      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>Significant Data Fiduciary (SDF) - Are Y...</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🇮🇳 DPDP Act 2023</span>
          <span className="badge badge-bl">📋 Data Privacy</span>
          <span className="badge badge-am">🏢 India Compliance</span>
          <span className="badge badge-gr">Series · Part 4 of 6</span>
        </div>
        <h1 className="hero-h1">Significant Data Fiduciary (SDF) - <em>Are You One?</em> What Changes If You Are?</h1>
        <p className="hero-sub">Not all Data Fiduciaries are treated equally under the DPDP Act. The law reserves a higher tier of obligations for entities that handle data at scale, whose processing poses elevated risks, or who hold significant national influence. Here is how to assess your SDF exposure - and what you must do if you are one.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Security Engineer, SecComply Technologies</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=480&fit=crop" alt="Significant Data Fiduciary SDF DPDP Act India compliance assessment" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">SDF designation raises the compliance bar significantly - on accountability, governance, and technical safeguards. Whether you are already in SDF territory or scaling toward it, the time to build SDF-grade compliance is now.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pg4" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(0, 129, 242,0.04)"/></pattern></defs>
          <rect width="960" height="300" fill="url(#pg4)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">Significant Data Fiduciary - Section 10 DPDP Act 2023</text>
          <rect x="30" y="35" width="420" height="230" rx="14" fill="#091826" stroke="rgba(106,138,170,0.2)" strokeWidth="1.5"/>
          <rect x="30" y="35" width="420" height="3" rx="1.5" fill="#6a8aaa"/>
          <text x="240" y="62" textAnchor="middle" fill="rgba(200,214,229,0.6)" fontSize="11" fontWeight="700" fontFamily="sans-serif">STANDARD DATA FIDUCIARY</text>
          {[("Obtain valid consent","✅"),("Purpose limitation","✅"),("Data minimisation","✅"),("Breach notification","✅"),("Appoint Grievance Officer","✅"),("Data Protection Officer","❌"),("Independent Data Audit","❌"),("Conduct DPIAs","❌"),("Algorithm audits","❌")].map((_, i) => "")}
          <text x="60" y="92" fill="rgba(200,214,229,0.7)" fontSize="10" fontFamily="sans-serif">✅ Obtain valid consent</text>
          <text x="60" y="112" fill="rgba(200,214,229,0.7)" fontSize="10" fontFamily="sans-serif">✅ Purpose limitation &amp; data minimisation</text>
          <text x="60" y="132" fill="rgba(200,214,229,0.7)" fontSize="10" fontFamily="sans-serif">✅ Breach notification</text>
          <text x="60" y="152" fill="rgba(200,214,229,0.7)" fontSize="10" fontFamily="sans-serif">✅ Appoint Grievance Officer</text>
          <text x="60" y="172" fill="rgba(255,77,109,0.7)" fontSize="10" fontFamily="sans-serif">❌ Data Protection Officer (India-based)</text>
          <text x="60" y="192" fill="rgba(255,77,109,0.7)" fontSize="10" fontFamily="sans-serif">❌ Independent Data Auditor</text>
          <text x="60" y="212" fill="rgba(255,77,109,0.7)" fontSize="10" fontFamily="sans-serif">❌ Periodic DPIAs</text>
          <text x="60" y="232" fill="rgba(255,77,109,0.7)" fontSize="10" fontFamily="sans-serif">❌ Algorithm audits</text>
          <rect x="510" y="35" width="420" height="230" rx="14" fill="#0d1c10" stroke="rgba(0, 129, 242,0.25)" strokeWidth="1.5"/>
          <rect x="510" y="35" width="420" height="3" rx="1.5" fill="#0081f2"/>
          <text x="720" y="62" textAnchor="middle" fill="#0081f2" fontSize="11" fontWeight="700" fontFamily="sans-serif">SIGNIFICANT DATA FIDUCIARY (SDF)</text>
          <text x="540" y="92" fill="rgba(200,214,229,0.7)" fontSize="10" fontFamily="sans-serif">✅ All standard obligations above</text>
          <text x="540" y="116" fill="#0081f2" fontSize="10" fontWeight="700" fontFamily="sans-serif">+ DPO: India-based, reports to Board of Directors</text>
          <text x="540" y="140" fill="#0081f2" fontSize="10" fontWeight="700" fontFamily="sans-serif">+ Independent Data Auditor (external, periodic)</text>
          <text x="540" y="164" fill="#0081f2" fontSize="10" fontWeight="700" fontFamily="sans-serif">+ Periodic DPIAs - every new high-risk activity</text>
          <text x="540" y="188" fill="#0081f2" fontSize="10" fontWeight="700" fontFamily="sans-serif">+ Algorithm audits - bias, fairness, transparency</text>
          <rect x="540" y="210" width="360" height="40" rx="8" fill="rgba(0, 129, 242,0.08)" stroke="rgba(0, 129, 242,0.2)" strokeWidth="1"/>
          <text x="720" y="226" textAnchor="middle" fill="#0081f2" fontSize="9" fontWeight="700" fontFamily="sans-serif">Penalties: ₹150–250 crore per violation category</text>
          <text x="720" y="242" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">Data Protection Board - tiered penalty schedule</text>
          <text x="480" y="285" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">SDF classification is a Government notification under Section 10 - it can arrive at any time. Build SDF-grade compliance before it does.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-is-sdf">What Is a Significant Data Fiduciary</a>
            <a href="#criteria">How the Government Decides</a>
            <a href="#self-assessment">SDF Self-Assessment</a>
            <a href="#additional-obligations">The 4 Additional SDF Obligations</a>
            <a href="#side-by-side">SDF vs Standard Fiduciary</a>
            <a href="#cross-border">Cross-Border Transfer Scrutiny</a>
            <a href="#compliance-roadmap">SDF Compliance Roadmap</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="series-nav anim">
            <span>📚 DPDP Act Series</span>
            <strong>Part 4: Significant Data Fiduciary (SDF) - </strong>
            <span>·</span>
            <a href="https://seccomply.net/resources/blog/consent-under-dpdp-act" style={{color:"var(--cy)",textDecoration:"none"}}>← Part 3</a> · <a href="https://seccomply.net/resources/blog/data-protection-officer-dpo-dpdp" style={{color:"var(--cy)",textDecoration:"none"}}>Part 5 →</a>
          </div>

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(0, 129, 242,0.3)',paddingLeft:'1.2rem'}}>Not all Data Fiduciaries are treated equally under India's DPDP Act. The law reserves a higher tier of obligations for entities that handle data at scale, whose processing poses elevated risks, or who hold significant national or societal influence. These are <strong>Significant Data Fiduciaries (SDFs)</strong> - and if you are one, or are on the path to becoming one, the compliance requirements are substantially more demanding.</p>

          <section id="what-is-sdf">
            <h2>What Is a <em>Significant Data Fiduciary?</em></h2>
            <p><strong>Section 10 of the DPDP Act</strong> empowers the Central Government to notify any Data Fiduciary or class of Fiduciaries as a Significant Data Fiduciary, based on an assessment of risk. The classification is not permanent or automatic - it is a Government notification that can be updated as the digital landscape evolves.</p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>No Warning Before Notification</strong>
                <p>SDF classification can arrive as a Government notification without advance notice to the entity. Organisations that wait for formal classification before building SDF-level compliance will face a very short implementation window. Start preparation before the notification arrives.</p>
              </div>
            </div>
          </section>

          <section id="criteria">
            <h2>The Criteria - <em>How Does the Government Decide?</em></h2>
            <p>Section 10(2) specifies the factors the Government will consider:</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Factor</th><th>What it evaluates</th></tr></thead>
                <tbody>
                  {[['Volume of data processed','How many Data Principals data do you hold?'],['Sensitivity of personal data','Are you processing financial, health, biometric, or other sensitive categories?'],['Risk to the rights of Data Principals','Does your processing pose significant risk to individual rights or safety?'],['Potential national security impact','Could your data or its misuse affect India sovereignty or security?'],['Risk to electoral democracy','Could your platform influence elections or democratic processes?'],['Public order implications','Does processing affect law and order?'],['Impact on sovereignty and integrity of India','Does your data handling have geopolitical implications?']].map(([f,e],i)=>(<tr key={i}><td>{f}</td><td>{e}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p>These criteria signal that SDFs are likely to be large social media platforms, major e-commerce and fintech players, healthcare aggregators with national reach, EdTech platforms processing children data at scale, and cloud infrastructure providers or data brokers.</p>
          </section>

          <section id="self-assessment">
            <h2>Are You an SDF? <em>A Self-Assessment Framework</em></h2>
            <p>While the Government official notification determines SDF status, assess your exposure now:</p>
            <ul>
              <li><strong>Scale:</strong> Do you process personal data of more than 1 million Data Principals? Is your user base growing rapidly toward that threshold?</li>
              <li><strong>Sensitivity:</strong> Do you handle financial data, health or medical records, biometric data? Are a significant proportion of your users children?</li>
              <li><strong>Influence:</strong> Does your platform shape public discourse? Do advertisers use your platform for political campaigns?</li>
              <li><strong>Geography:</strong> Is your business model dependent on processing data at national scale across India?</li>
            </ul>
            <p>If you answer yes to multiple questions, prepare for SDF-level compliance - even if the formal notification has not arrived.</p>
          </section>

          <section id="additional-obligations">
            <h2>The 4 Additional <em>SDF Obligations</em></h2>
            <p>Beyond the standard Data Fiduciary obligations, Section 10 imposes four additional requirements:</p>

            <h3>1. Appointment of a Data Protection Officer (DPO)</h3>
            <p>SDFs must appoint a DPO who is <strong>based in India</strong> (non-negotiable - a remote appointment from overseas does not qualify), represents the SDF before the Data Protection Board, and reports directly to the <strong>Board of Directors</strong> - not the CISO, General Counsel, or CTO. This independence of reporting line is deliberate: the DPO must be free from conflicts of interest. For the full picture on the DPO role, read <a href="https://seccomply.net/resources/blog/data-protection-officer-dpo-dpdp" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>Part 5 of this series on the DPO under the DPDP Act</a>.</p>

            <h3>2. Appointment of an Independent Data Auditor</h3>
            <p>SDFs must engage an <strong>Independent Data Auditor</strong> to evaluate the SDF compliance with the DPDP Act, audit data management practices, processing activities, and technical safeguards, and audit algorithms if the SDF uses automated profiling or decision-making. This is analogous to financial audits - an external, objective assessment that goes beyond self-certification.</p>

            <h3>3. Periodic Data Protection Impact Assessments (DPIAs)</h3>
            <p>SDFs must conduct DPIAs - a structured evaluation of how specific processing activities impact Data Principal rights. A DPIA covers what data is processed and why, what risks it poses to individuals, mitigating controls in place, and residual risk assessment. DPIAs are not one-time exercises - they must be conducted whenever a new high-risk processing activity is introduced.</p>

            <h3>4. Algorithmic Transparency and Fairness Obligations</h3>
            <p>If an SDF uses algorithms for profiling, recommendation, or automated decision-making, it must conduct audits of those algorithms, assess whether algorithms introduce bias or discriminatory outcomes, and publish or make available to the Board algorithm audit results. This is a significant obligation for platforms using AI or ML at the core of their product.</p>
          </section>

          <section id="side-by-side">
            <h2>SDF vs Standard Data Fiduciary - <em>Side by Side</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Obligation</th><th>Standard Fiduciary</th><th>SDF</th></tr></thead>
                <tbody>
                  {[['Obtain valid consent','✅','✅'],['Grievance mechanism','✅','✅'],['Breach notification','✅','✅'],['Appoint Grievance Officer','✅','✅'],['Appoint DPO (India-based)','❌','✅'],['Independent Data Audit','❌','✅'],['Conduct DPIAs periodically','❌','✅'],['Algorithm audits','❌','✅'],['Cross-border transfer scrutiny','Possible','Heightened']].map(([ob,std,sdf],i)=>(<tr key={i}><td>{ob}</td><td style={{textAlign:'center'}}>{std}</td><td style={{textAlign:'center',color:'var(--cy)',fontWeight:sdf==='✅'?700:400}}>{sdf}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="cross-border">
            <h2>Cross-Border Data Transfers - <em>Additional Scrutiny for SDFs</em></h2>
            <p>The DPDP Act (Section 16) restricts transfer of personal data to countries notified by the Central Government. SDFs face heightened scrutiny in this area, and their data transfer agreements are more likely to be subject to Government review. If you are an SDF using global cloud infrastructure (AWS US regions, Azure Europe), your data localisation or transfer safeguards will be examined more rigorously.</p>
          </section>

          <section id="compliance-roadmap">
            <h2>SDF Compliance Roadmap - <em>Where to Start</em></h2>
            <ul>
              <li><strong>Immediate:</strong> Identify and appoint a DPO - India-based, with a direct Board reporting line. This takes time to recruit, so start early. Commission an Independent Data Audit to assess your current DPDP posture.</li>
              <li><strong>Short-term (3–6 months):</strong> Build a DPIA programme - define which processing activities require DPIAs, assign ownership, and conduct your first round. Map your algorithms - list every algorithm that processes personal data and assess for bias and risk.</li>
              <li><strong>Ongoing:</strong> Periodic DPIAs built into your product release and change management process. Algorithm audit cycle at minimum annually. DPO reporting cadence to the Board of Directors.</li>
            </ul>
            <div className="callout co-danger">
              <span className="co-icon">🚨</span>
              <div className="co-body">
                <strong>The Cost of Non-Compliance for SDFs</strong>
                <p>Failure to observe SDF-specific obligations can attract penalties in the higher ranges - up to ₹150–250 crore per violation category, as assessed by the Data Protection Board. Beyond financial penalties, Board findings are public - reputational damage to a large-scale platform can be severe and lasting.</p>
              </div>
            </div>
          </section>

          <div className="cta-banner">
            <h3>Ready to Build DPDP Compliance?</h3>
            <p>SecComply delivers structured DPDP compliance programmes for Indian startups and enterprises - from gap assessment to audit-ready documentation.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free DPDP Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" id="sl" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/significant-data-fiduciary-sdf" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" id="st" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/significant-data-fiduciary-sdf&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How does the government decide which organisations are Significant Data Fiduciaries?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The Central Government uses the criteria in Section 10(2) - including volume of data processed, sensitivity of personal data, risk to the rights of Data Principals, potential national security impact, risk to electoral democracy, public order implications, and impact on India's sovereignty and integrity. The classification is a Government notification and can be updated as the digital landscape evolves.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does a Significant Data Fiduciary need to appoint a DPO based in India?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. This is non-negotiable. A DPO located in Singapore, the US, or the UK does not satisfy the DPDP Act requirement. The DPO must be India-based and available to represent the SDF before the Data Protection Board of India. Additionally, the DPO must report directly to the Board of Directors - not to the CISO, General Counsel, or any other function.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is a Data Protection Impact Assessment (DPIA) and who must conduct it?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>A DPIA is a structured evaluation of how a specific processing activity impacts Data Principal rights. It covers what data is processed and why, what risks it poses to individuals, mitigating controls in place, and residual risk assessment. Only Significant Data Fiduciaries are required to conduct periodic DPIAs under the DPDP Act, though any Data Fiduciary undertaking high-risk processing should consider them as best practice.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What additional obligations do SDFs have compared to standard Data Fiduciaries?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>SDFs must meet four additional obligations beyond standard Fiduciary requirements: (1) Appointment of an India-based DPO reporting to the Board, (2) Engagement of an Independent Data Auditor for periodic compliance audits, (3) Periodic Data Protection Impact Assessments for high-risk processing activities, and (4) Algorithm audits for bias, fairness, and transparency where AI/ML is used.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What penalties apply if an SDF fails to comply with Section 10 requirements?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Failure to observe SDF-specific obligations can attract penalties in the higher ranges of the DPDP Act penalty schedule - up to ₹150–250 crore per violation category, as assessed by the Data Protection Board. Beyond financial penalties, Board findings are public records, meaning reputational damage compounds financial penalties for large-scale platforms.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#what-is-sdf" className="toc-link">What Is SDF</a></li>
              <li><a href="#criteria" className="toc-link">Classification Criteria</a></li>
              <li><a href="#self-assessment" className="toc-link">Self-Assessment</a></li>
              <li><a href="#additional-obligations" className="toc-link">4 SDF Obligations</a></li>
              <li><a href="#side-by-side" className="toc-link">SDF vs Standard</a></li>
              <li><a href="#cross-border" className="toc-link">Cross-Border Transfers</a></li>
              <li><a href="#compliance-roadmap" className="toc-link">Compliance Roadmap</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 DPDP Act Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor">Part 1: Roles Defined</a></li>
              <li><a href="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp">Part 2: 8 Rights of Data Principals</a></li>
              <li><a href="https://seccomply.net/resources/blog/consent-under-dpdp-act">Part 3: Consent Under DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/significant-data-fiduciary-sdf">▶ Part 4: Significant Data Fiduciary</a></li>
              <li><a href="https://seccomply.net/resources/blog/data-protection-officer-dpo-dpdp">Part 5: DPO Under DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough">Part 6: Applicability Quiz</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">DPDP Act</span><span className="tag">Significant Data Fiduciary</span><span className="tag">SDF</span><span className="tag">DPIA</span><span className="tag">DPO</span><span className="tag">Algorithm Audit</span><span className="tag">India Compliance</span></div>
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
