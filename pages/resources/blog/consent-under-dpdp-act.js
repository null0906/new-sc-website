import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ConsentUnderDPDPAct() {
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
        <title>Consent Under the DPDP Act — What's Valid, What's Not, and How to Implement It | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="The DPDP Act is specific and demanding about what valid consent looks like. Pre-ticked boxes, bundled consent, and vague language will not pass the test. Here is the anatomy of valid consent under Section 6." />
        <meta name="keywords" content="consent DPDP Act India, valid consent data protection, Section 6 DPDP Act, consent management India, pre-ticked checkboxes DPDP, consent withdrawal India, consent managers DPDP, consent pillars India privacy" />
        <meta property="og:title" content="Consent Under the DPDP Act — What's Valid, What's Not, and How to Implement It" />
        <meta property="og:description" content="The DPDP Act is specific and demanding about what valid consent looks like. Pre-ticked boxes, bundled consent, and vague language will not pass the test. Here is the anatomy of valid consent under Section 6." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/consent-under-dpdp-act" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/consent-under-dpdp-act" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Consent Under the DPDP Act — What Is Valid, What Is Not, and How to Implement It","description":"Section 6 of the DPDP Act sets out 5 pillars of valid consent. Pre-ticked boxes, bundled consent, and vague language will not pass the test.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply Technologies"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/consent-under-dpdp-act","articleSection":"DPDP Act"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"Consent Under DPDP","item":"https://seccomply.net/resources/blog/consent-under-dpdp-act"}]}]}) }} />
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
    .series-nav{display:flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;background:rgba(232,99,43,.05);border:1px solid rgba(232,99,43,.15);border-radius:10px;margin-bottom:2rem;font-size:.8rem;flex-wrap:wrap}
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
    @media(max-width:900px){.pillar-grid{grid-template-columns:repeat(3,1fr)}.rights-grid{grid-template-columns:1fr}.sdf-compare{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}.pillar-grid{grid-template-columns:repeat(2,1fr)}}
`}</style>
      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>Consent Under the DPDP Act — What's Vali...</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🇮🇳 DPDP Act 2023</span>
          <span className="badge badge-bl">📋 Data Privacy</span>
          <span className="badge badge-am">🏢 India Compliance</span>
          <span className="badge badge-gr">Series · Part 3 of 6</span>
        </div>
        <h1 className="hero-h1">Consent Under the DPDP Act — <em>What's Valid, What's Not,</em> and How to Implement It</h1>
        <p className="hero-sub">Consent is the cornerstone of the DPDP Act. But not all consent is created equal. Pre-ticked boxes, vague permission statements, and buried terms in a 40-page T&C document will not pass the test. Here is what valid consent looks like — and how to build it.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Security Engineer, SecComply Technologies</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=480&fit=crop" alt="Consent management DPDP Act compliance India" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">Section 6 of the DPDP Act lays down five non-negotiable pillars of valid consent. Missing even one makes the entire consent invalid — not just the specific processing activity.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pg3" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(232,99,43,0.04)"/></pattern></defs>
          <rect width="960" height="280" fill="url(#pg3)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">The 5 Pillars of Valid Consent — Section 6, DPDP Act 2023</text>
          {[("Free","Not coerced","Must not be condition of service","#818cf8",40),("Specific","Purpose-tied","Granular, not catch-all","#E8632B",226),("Informed","With notice","User understands before consenting","#06d6a0",412),("Unconditional","No bundling","Cannot be take-it-or-leave-it","#ffb703",598),("Unambiguous","Active act","Clear affirmative action required","#ff4d6d",784)].map(lambda _: "")}
          <rect x="40" y="38" width="170" height="200" rx="14" fill="#091826" stroke="#818cf825" strokeWidth="1.5"/>
          <rect x="40" y="38" width="170" height="4" rx="2" fill="#818cf8"/>
          <text x="125" y="78" textAnchor="middle" fill="#818cf8" fontSize="22" fontWeight="800" fontFamily="sans-serif">FREE</text>
          <text x="125" y="100" textAnchor="middle" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">Not coerced</text>
          <text x="125" y="140" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">Cannot be condition</text>
          <text x="125" y="155" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">of accessing service</text>
          <text x="125" y="210" textAnchor="middle" fill="rgba(129,140,248,0.5)" fontSize="8" fontFamily="sans-serif">Pillar 1 of 5</text>
          <rect x="226" y="38" width="170" height="200" rx="14" fill="#091826" stroke="#E8632B25" strokeWidth="1.5"/>
          <rect x="226" y="38" width="170" height="4" rx="2" fill="#E8632B"/>
          <text x="311" y="78" textAnchor="middle" fill="#E8632B" fontSize="22" fontWeight="800" fontFamily="sans-serif">SPECIFIC</text>
          <text x="311" y="100" textAnchor="middle" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">Purpose-tied</text>
          <text x="311" y="140" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">Granular — separate toggle</text>
          <text x="311" y="155" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">for each processing purpose</text>
          <text x="311" y="210" textAnchor="middle" fill="rgba(232,99,43,0.5)" fontSize="8" fontFamily="sans-serif">Pillar 2 of 5</text>
          <rect x="412" y="38" width="170" height="200" rx="14" fill="#091826" stroke="#06d6a025" strokeWidth="1.5"/>
          <rect x="412" y="38" width="170" height="4" rx="2" fill="#06d6a0"/>
          <text x="497" y="78" textAnchor="middle" fill="#06d6a0" fontSize="22" fontWeight="800" fontFamily="sans-serif">INFORMED</text>
          <text x="497" y="100" textAnchor="middle" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">With prior notice</text>
          <text x="497" y="140" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">User must understand</text>
          <text x="497" y="155" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">before they consent</text>
          <text x="497" y="210" textAnchor="middle" fill="rgba(6,214,160,0.5)" fontSize="8" fontFamily="sans-serif">Pillar 3 of 5</text>
          <rect x="598" y="38" width="170" height="200" rx="14" fill="#091826" stroke="#ffb70325" strokeWidth="1.5"/>
          <rect x="598" y="38" width="170" height="4" rx="2" fill="#ffb703"/>
          <text x="683" y="78" textAnchor="middle" fill="#ffb703" fontSize="22" fontWeight="800" fontFamily="sans-serif">UNCONDITIONAL</text>
          <text x="683" y="100" textAnchor="middle" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">No bundling</text>
          <text x="683" y="140" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">Cannot bundle essential</text>
          <text x="683" y="155" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">and non-essential consent</text>
          <text x="683" y="210" textAnchor="middle" fill="rgba(255,183,3,0.5)" fontSize="8" fontFamily="sans-serif">Pillar 4 of 5</text>
          <rect x="784" y="38" width="148" height="200" rx="14" fill="#091826" stroke="#ff4d6d25" strokeWidth="1.5"/>
          <rect x="784" y="38" width="148" height="4" rx="2" fill="#ff4d6d"/>
          <text x="858" y="78" textAnchor="middle" fill="#ff4d6d" fontSize="20" fontWeight="800" fontFamily="sans-serif">UNAMBIGUOUS</text>
          <text x="858" y="100" textAnchor="middle" fill="rgba(200,214,229,0.6)" fontSize="9" fontFamily="sans-serif">Active affirmative act</text>
          <text x="858" y="140" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">No pre-ticked boxes.</text>
          <text x="858" y="155" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">No silence as consent.</text>
          <text x="858" y="210" textAnchor="middle" fill="rgba(255,77,109,0.5)" fontSize="8" fontFamily="sans-serif">Pillar 5 of 5</text>
          <text x="480" y="265" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">All five pillars must be satisfied simultaneously. Missing one makes the entire consent invalid — not just the specific processing activity.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#section-6">Section 6 — What the Law Says</a>
            <a href="#five-pillars">The 5 Pillars of Valid Consent</a>
            <a href="#notice-requirement">The Notice Requirement</a>
            <a href="#without-consent">Legitimate Uses Without Consent</a>
            <a href="#invalid-practices">What Is Invalid</a>
            <a href="#childrens-consent">Children's Consent</a>
            <a href="#consent-managers">Consent Managers</a>
            <a href="#implementation">How to Implement Compliant Consent</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="series-nav anim">
            <span>📚 DPDP Act Series</span>
            <strong>Part 3: Consent Under the DPDP Act — What's</strong>
            <span>·</span>
            <a href="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp" style={{color:"var(--cy)",textDecoration:"none"}}>← Part 2</a> · <a href="https://seccomply.net/resources/blog/significant-data-fiduciary-sdf" style={{color:"var(--cy)",textDecoration:"none"}}>Part 4 →</a>
          </div>

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(232,99,43,0.3)',paddingLeft:'1.2rem'}}>Consent is the cornerstone of India's DPDP Act. If your organisation collects personal data of Indian individuals without a lawful basis, you are processing data illegally. For most B2C products, that lawful basis is <strong>consent</strong>. But not all consent is created equal — the Act is specific about what valid consent looks like, and most existing consent implementations fail at least one of its five requirements.</p>

          <section id="section-6">
            <h2>Section 6 — <em>What the Law Says</em></h2>
            <p>Section 6 lays down the consent framework. The core requirement:</p>
            <div className="callout co-key">
              <span className="co-icon">📜</span>
              <div className="co-body">
                <strong>Section 6(1), DPDP Act 2023</strong>
                <p>"The consent of the Data Principal shall be free, specific, informed, unconditional, and unambiguous, with a clear affirmative action, and shall signify an agreement to the processing of her personal data for the specified purpose."</p>
              </div>
            </div>
            <p>Five words. One requirement each.</p>
          </section>

          <section id="five-pillars">
            <h2>The 5 Pillars of <em>Valid Consent</em></h2>
            
            <h3>1. Free</h3>
            <p>Consent must not be coerced or made a condition of a service when it is not actually necessary.</p>
            <ul>
              <li><strong>Invalid:</strong> "Accept our marketing communications to create an account."</li>
              <li><strong>Valid:</strong> Account creation consent (necessary) offered separately from marketing consent (optional).</li>
            </ul>

            <h3>2. Specific</h3>
            <p>Consent must be granular — tied to a specific purpose, not a catch-all blanket permission.</p>
            <ul>
              <li><strong>Invalid:</strong> "I consent to the use of my data for all purposes as described in the privacy policy."</li>
              <li><strong>Valid:</strong> Three separate consent toggles — one for order processing, one for personalised recommendations, one for marketing emails.</li>
            </ul>

            <h3>3. Informed</h3>
            <p>The Data Principal must understand what they are consenting to before they consent. Consent must be accompanied by a clear, plain-language notice describing what data is collected, the purpose, how data will be used, stored, and shared, and the right to withdraw consent. Notice must be in <strong>English and at least one Indian language</strong> specified by the user, where feasible.</p>

            <h3>4. Unconditional</h3>
            <p>Consent cannot be a take-it-or-leave-it gateway to accessing a service unless that processing is genuinely essential.</p>
            <ul>
              <li><strong>Invalid:</strong> "You must consent to share your location data at all times to use our food ordering app."</li>
              <li><strong>Valid:</strong> "Allow location access during delivery tracking" — scoped to necessity.</li>
            </ul>

            <h3>5. Unambiguous with a Clear Affirmative Action</h3>
            <p>Consent must be an active, deliberate act — not passive acceptance.</p>
            <ul>
              <li><strong>Invalid:</strong> Pre-ticked checkboxes, continued use of a website interpreted as consent, silence treated as agreement</li>
              <li><strong>Valid:</strong> A clearly labelled checkbox the user ticks themselves, a "Yes, I Agree" button distinct from the general "Sign Up" flow, a toggle that defaults to OFF</li>
            </ul>
          </section>

          <section id="notice-requirement">
            <h2>The Notice Requirement — <em>Before Consent Can Be Sought</em></h2>
            <p>The DPDP Act requires that a <strong>Notice</strong> be provided to the Data Principal before or at the time consent is sought. The notice must be written in clear and plain language, available in English and a scheduled Indian language, and cover: data collected, purposes, rights, grievance mechanism, and how consent can be withdrawn.</p>
            <div className="callout co-info">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>Notice vs Consent — Do Not Conflate Them</strong>
                <p>Your privacy policy is part of the Notice. Consent is the user response to it. Publishing a privacy policy does not constitute consent management. Notice is a disclosure; consent is the active agreement that follows it.</p>
              </div>
            </div>
          </section>

          <section id="without-consent">
            <h2>Legitimate Uses <em>Without Consent (Section 7)</em></h2>
            <p>Consent is not the only lawful basis. Section 7 lists narrow circumstances where processing is permitted without consent — but these are frequently misunderstood as loopholes.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Basis</th><th>Example</th></tr></thead>
                <tbody>
                  {[['State / legal obligation','Government processing for welfare schemes, tax purposes'],['Performance of a contract','Processing delivery address for order fulfilment'],['Medical emergency','Processing health data during a life-threatening emergency'],['Employment','Processing employee data for payroll and statutory compliance'],['Public interest','Research, archiving, statistical purposes']].map(([b,e],i)=>(<tr key={i}><td>{b}</td><td>{e}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p>If you are a commercial SaaS company, you likely cannot invoke State purposes. And using "contract performance" as a basis requires that the processing is genuinely necessary for the contract — not just convenient.</p>
          </section>

          <section id="invalid-practices">
            <h2>What Is Invalid — <em>The Common Consent Mistakes</em></h2>
            <ul>
              <li><strong>Bundled consent:</strong> Combining necessary and non-necessary processing in a single acceptance — "By creating an account, you consent to receiving promotional emails and sharing your data with our partners."</li>
              <li><strong>Pre-ticked or default-ON opt-ins:</strong> Any consent checkbox that comes pre-selected.</li>
              <li><strong>Vague language:</strong> "We may use your data to improve our services" — improve how? For what? This is not specific.</li>
              <li><strong>Consent-walled services:</strong> Refusing to provide a service because a user declined non-essential consent.</li>
              <li><strong>Retrospective consent:</strong> Claiming consent for processing that began before it was collected.</li>
              <li><strong>No withdrawal mechanism:</strong> If users cannot withdraw consent as easily as they gave it, the consent architecture is non-compliant.</li>
            </ul>
          </section>

          <section id="childrens-consent">
            <h2>Children's Consent — <em>A Stricter Regime</em></h2>
            <p>For Data Principals under 18, the DPDP Act mandates verifiable parental consent before any personal data is collected, no behavioural tracking or targeted advertising directed at minors, and age verification mechanisms. This applies even if the child is using a general-purpose platform — if you know or should reasonably know the user is a minor, heightened obligations kick in.</p>
          </section>

          <section id="consent-managers">
            <h2>Consent Managers — <em>A New Ecosystem Player (Section 6(9))</em></h2>
            <p>The DPDP Act introduces <strong>Consent Managers</strong> — registered entities that allow Data Principals to manage their consents across multiple Fiduciaries through a single, interoperable interface. Think of it as a consent dashboard that a user can access to see all the platforms they have consented to, and revoke any of them from one place.</p>
            <p>Your consent records must be machine-readable and API-accessible to integrate with registered Consent Managers once the ecosystem matures. Audit trails of all consents must be maintained and exportable. Consent Managers must register with the Data Protection Board — this regulatory infrastructure is being built now.</p>
          </section>

          <section id="implementation">
            <h2>How to Implement <em>Compliant Consent — A Technical Blueprint</em></h2>
            <ul>
              <li><strong>Layer 1 — Consent Notice UI:</strong> Trigger a layered privacy notice before data collection begins. Use progressive disclosure: short notice upfront, expandable detail sections. Offer language selection — at minimum English plus one regional language.</li>
              <li><strong>Layer 2 — Granular Consent Capture:</strong> Use separate toggles for each processing purpose. Default all non-essential toggles to OFF. Record: timestamp, version of notice shown, user identifier, purpose, acceptance or rejection.</li>
              <li><strong>Layer 3 — Consent Records Database:</strong> Store consent records with user ID, consent timestamp, notice version, purpose code, and status. Maintain immutable audit logs — tamper-evident and retrievable for Board audits.</li>
              <li><strong>Layer 4 — Withdrawal Workflow:</strong> Surface a "Manage My Consents" page in account settings. Allow per-purpose withdrawal with immediate effect. Trigger downstream: stop processing, notify processors, update records.</li>
              <li><strong>Layer 5 — Periodic Consent Refresh:</strong> If you materially change your processing purposes, re-seek consent — do not just update the privacy policy quietly. Material changes require a clear re-consent flow.</li>
            </ul>
            <p>Review your existing consent flows against these five pillars today. If any fail the test, you are already in a remediation cycle you would rather start before an audit than after one. For the full picture on <a href="https://seccomply.net/resources/blog/significant-data-fiduciary-sdf" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>what additional obligations apply to Significant Data Fiduciaries, read Part 4 of this series</a>.</p>
          </section>

          <div className="cta-banner">
            <h3>Ready to Build DPDP Compliance?</h3>
            <p>SecComply delivers structured DPDP compliance programmes for Indian startups and enterprises — from gap assessment to audit-ready documentation.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free DPDP Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" id="sl" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/consent-under-dpdp-act" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" id="st" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/consent-under-dpdp-act&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What are the five pillars of valid consent under the DPDP Act?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The five pillars under Section 6 are: Free (not coerced or bundled with service access), Specific (tied to a particular purpose, not a blanket permission), Informed (accompanied by a clear notice before consent is sought), Unconditional (not bundling essential and non-essential processing), and Unambiguous (requiring a clear affirmative action — no pre-ticked boxes or silence as consent).</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Are pre-ticked checkboxes valid consent under the DPDP Act?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. Pre-ticked or default-ON checkboxes do not satisfy the 'unambiguous with a clear affirmative action' requirement of Section 6. Consent must be an active, deliberate act by the Data Principal. Any consent mechanism that does not require the user to actively opt in is invalid under the DPDP Act.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the difference between a privacy notice and consent under the DPDP Act?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>A Notice is a disclosure — it tells users what data is collected, why, how it is used, and what their rights are. Consent is the active agreement by the Data Principal that follows the Notice. Publishing a privacy policy is part of the Notice obligation; it does not constitute consent. Both are required, and consent cannot be sought before the Notice is provided.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What are Consent Managers under Section 6(9) of the DPDP Act?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Consent Managers are registered entities that allow Data Principals to manage their consents across multiple Data Fiduciaries through a single interoperable interface. They must register with the Data Protection Board. Once the ecosystem matures, your product's consent records must be machine-readable and API-accessible to support integration with registered Consent Managers.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can organisations process personal data without consent under the DPDP Act?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes, in specific, narrow circumstances defined under Section 7 — including State or legal obligations, performance of a contract, medical emergencies, employment-related processing, and public interest functions. These are not loopholes and each has strict applicability criteria. Commercial SaaS companies generally cannot invoke State purposes or public interest as a lawful basis for standard business data processing.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#section-6" className="toc-link">Section 6</a></li>
              <li><a href="#five-pillars" className="toc-link">5 Pillars</a></li>
              <li><a href="#notice-requirement" className="toc-link">Notice Requirement</a></li>
              <li><a href="#without-consent" className="toc-link">Without Consent</a></li>
              <li><a href="#invalid-practices" className="toc-link">What Is Invalid</a></li>
              <li><a href="#childrens-consent" className="toc-link">Children's Consent</a></li>
              <li><a href="#consent-managers" className="toc-link">Consent Managers</a></li>
              <li><a href="#implementation" className="toc-link">Implementation</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 DPDP Act Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor">Part 1: Roles Defined</a></li>
              <li><a href="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp">Part 2: 8 Rights of Data Principals</a></li>
              <li><a href="https://seccomply.net/resources/blog/consent-under-dpdp-act">▶ Part 3: Consent Under DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/significant-data-fiduciary-sdf">Part 4: Significant Data Fiduciary</a></li>
              <li><a href="https://seccomply.net/resources/blog/data-protection-officer-dpo-dpdp">Part 5: DPO Under DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough">Part 6: Applicability Quiz</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">DPDP Act</span><span className="tag">Consent</span><span className="tag">Privacy Engineering</span><span className="tag">Section 6</span><span className="tag">Consent Manager</span><span className="tag">India Compliance</span></div>
          </div>
          <div className="sb-cta">
            <h4>Need DPDP Compliance Help?</h4>
            <p>We run structured DPDP gap assessments — from data mapping to audit-ready documentation.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
