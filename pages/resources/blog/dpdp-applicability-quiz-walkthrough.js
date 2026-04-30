import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPApplicabilityQuiz() {
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
        <title>Do I Need to Comply? - DPDP Act Applicability Quiz Walkthrough | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A structured 7-question walkthrough to self-assess DPDP Act applicability and compliance tier. Includes exemptions, volume thresholds, cross-border considerations, and an immediate action plan." />
        <meta name="keywords" content="DPDP Act applicability quiz, does DPDP apply to my business, DPDP Act scope India, DPDP applicability checklist, DPDP Act compliance tier, personal data DPDP, DPDP exemptions, DPDP cross-border transfers" />
        <meta property="og:title" content="Do I Need to Comply? - DPDP Act Applicability Quiz Walkthrough" />
        <meta property="og:description" content="A structured 7-question walkthrough to self-assess DPDP Act applicability and compliance tier. Includes exemptions, volume thresholds, cross-border considerations, and an immediate action plan." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Do I Need to Comply? - DPDP Act Applicability Quiz Walkthrough","description":"A structured 7-question walkthrough to self-assess DPDP Act applicability and compliance tier.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply Technologies"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough","articleSection":"DPDP Act"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"DPDP Applicability Quiz","item":"https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough"}]}]}) }} />
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
          <span className="badge badge-gr">Part 6 of 6</span>
        </div>
        <h1 className="hero-h1">"Do I Need to Comply?" - <em>DPDP Act Applicability Quiz</em> Walkthrough</h1>
        <p className="hero-sub">The most common question from Indian businesses engaging with the DPDP Act: does this even apply to me? This structured walkthrough helps you self-assess whether the DPDP Act applies to your organisation - and to what degree.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Security Engineer, SecComply Technologies</span><span className="dot">·</span><span id="read-time">📖 9 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=480&fit=crop" alt="DPDP Act applicability quiz compliance assessment India" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">Work through these 7 questions in order. By the end, you will know your compliance tier - and the specific actions you need to take right now.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pg6" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(232,99,43,0.04)"/></pattern></defs>
          <rect width="960" height="300" fill="url(#pg6)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">DPDP Act - Compliance Tier Self-Assessment</text>
          <rect x="30" y="38" width="222" height="230" rx="14" fill="#091826" stroke="rgba(106,138,170,0.2)" strokeWidth="1.5"/>
          <rect x="30" y="38" width="222" height="4" rx="2" fill="#6a8aaa"/>
          <text x="141" y="70" textAnchor="middle" fill="rgba(200,214,229,0.55)" fontSize="10" fontWeight="800" fontFamily="sans-serif">TIER 1</text>
          <text x="141" y="94" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="14" fontWeight="700" fontFamily="sans-serif">Exempt</text>
          <text x="141" y="120" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">Anonymised / domestic /</text>
          <text x="141" y="134" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">statutory exemption</text>
          <text x="141" y="180" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="9" fontWeight="700" fontFamily="sans-serif">ACTION</text>
          <text x="141" y="198" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="8.5" fontFamily="sans-serif">Document exemption basis</text>
          <text x="141" y="212" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="8.5" fontFamily="sans-serif">Verify - do not assume</text>
          <rect x="262" y="38" width="222" height="230" rx="14" fill="#071820" stroke="rgba(6,214,160,0.25)" strokeWidth="1.5"/>
          <rect x="262" y="38" width="222" height="4" rx="2" fill="#06d6a0"/>
          <text x="373" y="70" textAnchor="middle" fill="#06d6a0" fontSize="10" fontWeight="800" fontFamily="sans-serif">TIER 2</text>
          <text x="373" y="94" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="14" fontWeight="700" fontFamily="sans-serif">Standard Processor</text>
          <text x="373" y="120" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">Process on behalf of a</text>
          <text x="373" y="134" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">Fiduciary</text>
          <text x="373" y="180" textAnchor="middle" fill="#06d6a0" fontSize="9" fontWeight="700" fontFamily="sans-serif">ACTION</text>
          <text x="373" y="198" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="8.5" fontFamily="sans-serif">Security safeguards per contract</text>
          <text x="373" y="212" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="8.5" fontFamily="sans-serif">Breach notification capability</text>
          <rect x="494" y="38" width="222" height="230" rx="14" fill="#141108" stroke="rgba(255,183,3,0.3)" strokeWidth="1.5"/>
          <rect x="494" y="38" width="222" height="4" rx="2" fill="#ffb703"/>
          <text x="605" y="70" textAnchor="middle" fill="#ffb703" fontSize="10" fontWeight="800" fontFamily="sans-serif">TIER 3</text>
          <text x="605" y="94" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="14" fontWeight="700" fontFamily="sans-serif">Standard Fiduciary</text>
          <text x="605" y="120" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">You determine processing</text>
          <text x="605" y="134" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">purpose; below SDF threshold</text>
          <text x="605" y="180" textAnchor="middle" fill="#ffb703" fontSize="9" fontWeight="700" fontFamily="sans-serif">ACTION</text>
          <text x="605" y="198" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="8.5" fontFamily="sans-serif">Full DPDP programme</text>
          <text x="605" y="212" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="8.5" fontFamily="sans-serif">Consent + Grievance + Rights</text>
          <rect x="726" y="38" width="222" height="230" rx="14" fill="#180a0d" stroke="rgba(255,77,109,0.3)" strokeWidth="1.5"/>
          <rect x="726" y="38" width="222" height="4" rx="2" fill="#ff4d6d"/>
          <text x="837" y="70" textAnchor="middle" fill="#ff4d6d" fontSize="10" fontWeight="800" fontFamily="sans-serif">TIER 4</text>
          <text x="837" y="94" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="14" fontWeight="700" fontFamily="sans-serif">SDF-Candidate</text>
          <text x="837" y="120" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">High volume, sensitive data,</text>
          <text x="837" y="134" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">national scale</text>
          <text x="837" y="180" textAnchor="middle" fill="#ff4d6d" fontSize="9" fontWeight="700" fontFamily="sans-serif">ACTION</text>
          <text x="837" y="198" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="8.5" fontFamily="sans-serif">Tier 3 + DPO + Auditor +</text>
          <text x="837" y="212" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="8.5" fontFamily="sans-serif">DPIAs + Algorithm audits</text>
          <text x="480" y="288" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">Work through the 7 questions below to determine your tier - and the specific actions your organisation must take.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#q1">Q1: Digital Personal Data?</a>
            <a href="#q2">Q2: Indian Individuals?</a>
            <a href="#q3">Q3: Exemptions</a>
            <a href="#q4">Q4: Data Type</a>
            <a href="#q5">Q5: Volume</a>
            <a href="#q6">Q6: Your Role</a>
            <a href="#q7">Q7: Cross-Border</a>
            <a href="#compliance-tier">Your Compliance Tier</a>
            <a href="#action-plan">Immediate Action Plan</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="series-nav anim">
            <span>📚 DPDP Act Series</span>
            <strong>Part 6 of 6</strong>
          </div>

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(232,99,43,0.3)',paddingLeft:'1.2rem'}}>The most common question we get from Indian businesses engaging with the DPDP Act for the first time is simple: <em>does this even apply to me?</em> Its application depends on a few key variables - where you are incorporated, where your users are located, what type of data you collect, and what you do with it. Work through these 7 questions in order. By the end, you will know your compliance tier.</p>

          <section id="q1">
            <h2>Q1 - <em>Is the data you process "digital personal data"?</em></h2>
            <p><strong>Digital personal data</strong> = data about a natural person in digital form, or data originally non-digital but subsequently digitised.</p>
            <div className="scope-grid">
              <div className="scope-col sc-in">
                <h4>✓ YES Scenarios (In Scope)</h4>
                <ul>
                  <li>Customer names, phone numbers, email IDs stored in a CRM</li>
                  <li>Employee attendance records in an HR system</li>
                  <li>Patient health records in a hospital management system</li>
                  <li>Purchase histories and behavioural data on an e-commerce app</li>
                  <li>Photos, voice recordings, or biometric data stored digitally</li>
                </ul>
              </div>
              <div className="scope-col sc-out">
                <h4>✗ NO Scenarios (Out of Scope)</h4>
                <ul>
                  <li>Purely anonymised data (re-identification not reasonably possible)</li>
                  <li>Aggregated statistical data (e.g., "60% of users prefer Product A")</li>
                  <li>Data about legal entities - only natural persons are covered</li>
                </ul>
              </div>
            </div>
            <p><strong>If NO:</strong> The DPDP Act does not apply to this dataset. But be careful - even aggregated data may contain identifiable subsets. <strong>If YES:</strong> Proceed to Q2.</p>
          </section>

          <section id="q2">
            <h2>Q2 - <em>Is the data of Indian individuals?</em></h2>
            <ul>
              <li><strong>Scenario A - Users in India:</strong> DPDP applies. Irrespective of where your company is incorporated.</li>
              <li><strong>Scenario B - Incorporated in India, users exclusively outside India:</strong> DPDP may apply only to the extent MeitY notifies applicability. Watch for Rules-level clarification.</li>
              <li><strong>Scenario C - Foreign company with Indian users:</strong> DPDP applies if you offer goods or services to individuals in India or profile them, regardless of server location.</li>
              <li><strong>Scenario D - BPO model (processing in India for overseas principal):</strong> The DPDP Act exempts such processing, but your contractual obligations under DPDP may still apply.</li>
            </ul>
            <p>Proceed to Q3 if you are in Scenarios A or C.</p>
          </section>

          <section id="q3">
            <h2>Q3 - <em>Does any exemption apply?</em></h2>
            <ul>
              <li><strong>Personal / domestic purposes:</strong> Processing for purely personal use. Very unlikely if you are a registered business.</li>
              <li><strong>Publicly available data:</strong> Narrow exemption - does not justify bulk scraping. Must be genuinely and legitimately in the public domain.</li>
              <li><strong>State security, law enforcement, or courts:</strong> Only if you are a Government entity exercising statutory functions.</li>
              <li><strong>Research, archiving, statistical purposes:</strong> Only for research / statistical functions with adequate safeguards and no individual identification.</li>
            </ul>
            <p>If no exemption applies, proceed to Q4.</p>
          </section>

          <section id="q4">
            <h2>Q4 - <em>What type of personal data are you processing?</em></h2>
            <h3>General Personal Data</h3>
            <p>Names, email addresses, phone numbers, preferences, purchase history, browsing behaviour. Standard DPDP obligations apply.</p>
            <h3>Sensitive Personal Data (High Risk)</h3>
            <p>Health and medical data, financial data (bank accounts, credit cards, loans), biometric data, data revealing religious beliefs, political opinions, caste, or sexuality, children data. All standard obligations apply <strong>plus</strong> you are more likely to be assessed as a potential SDF.</p>
          </section>

          <section id="q5">
            <h2>Q5 - <em>What is your processing volume?</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Volume</th><th>Likely Classification</th></tr></thead>
                <tbody>
                  {[['Less than 1 lakh Data Principals','Standard Data Fiduciary - lower regulatory attention'],['1 lakh to 10 lakh','Standard Fiduciary - begin building mature compliance'],['10 lakh to 1 crore','High SDF risk - start SDF-level programme preparation'],['Over 1 crore','Very high SDF risk - act as if SDF notification is imminent']].map(([v,c],i)=>(<tr key={i}><td>{v}</td><td>{c}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p>Volume is one factor. A platform with 5 lakh users processing health data may be at higher SDF risk than a general platform with 50 lakh users.</p>
          </section>

          <section id="q6">
            <h2>Q6 - <em>Are you a Data Fiduciary, Processor, or both?</em></h2>
            <p>Refer to <a href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>Part 1 of this series on DPDP roles</a> for full definitions.</p>
            <ul>
              <li><strong>Data Fiduciary:</strong> Full DPDP obligations apply - consent, Grievance Officer, breach management.</li>
              <li><strong>Data Processor:</strong> Fewer direct obligations, but contractual obligations from the Fiduciary impose compliance requirements.</li>
              <li><strong>Both:</strong> Apply Fiduciary-level obligations for data where you set the purpose; Processor-level for client data you process under contract.</li>
            </ul>
          </section>

          <section id="q7">
            <h2>Q7 - <em>Do you transfer personal data outside India?</em></h2>
            <p>The DPDP Act (Section 16) restricts transfer to countries the Central Government may notify as permitted or restricted. The permitted / restricted list has not yet been published, but the framework is in place.</p>
            <ul>
              <li>Do you use US or EU-based cloud providers (AWS, Azure, GCP) for Indian user data?</li>
              <li>Do you share Indian user data with overseas parent companies, analytics firms, or ad networks?</li>
              <li>Do you have offshore development teams accessing production data?</li>
            </ul>
            <p>If yes: monitor Government notifications, implement data localisation for sensitive data proactively, and review data processing agreements with international vendors.</p>
          </section>

          <section id="compliance-tier">
            <h2>Your Compliance Tier - <em>Where You Sit</em></h2>
            <div className="tier-grid">
              <div className="tier-card t1"><div className="tn">Tier 1</div><div className="tt">Exempt</div><div className="td">Processing anonymised data, personal / domestic, or under statutory exemption</div></div>
              <div className="tier-card t2"><div className="tn">Tier 2</div><div className="tt">Standard Processor</div><div className="td">Process on behalf of a Fiduciary; do not determine purpose</div></div>
              <div className="tier-card t3"><div className="tn">Tier 3</div><div className="tt">Standard Fiduciary</div><div className="td">Determine purpose; volume and sensitivity below SDF thresholds</div></div>
              <div className="tier-card t4"><div className="tn">Tier 4</div><div className="tt">SDF-Candidate</div><div className="td">High volume, sensitive data, national scale, or formal notification</div></div>
            </div>
          </section>

          <section id="action-plan">
            <h2>Immediate Action Plan - <em>Regardless of Tier</em></h2>
            <ul>
              <li><strong>Data Inventory:</strong> Map every personal data category you collect, the purpose, storage location, and sharing. You cannot comply with what you have not mapped.</li>
              <li><strong>Consent Audit:</strong> Review existing consent mechanisms against the five-pillar standard (free, specific, informed, unconditional, unambiguous).</li>
              <li><strong>Appoint a Grievance Officer:</strong> Publish name and contact details in your privacy notice. Mandatory for ALL Data Fiduciaries.</li>
              <li><strong>Update Privacy Notice:</strong> Review for DPDP compliance - data categories, purposes, rights, Grievance Officer, in plain language.</li>
              <li><strong>Vendor Chain Assessment:</strong> For each third-party vendor processing Indian personal data, review the contract for DPDP-compliant data processing terms.</li>
              <li><strong>Breach Response Plan:</strong> Defined, tested incident response procedure including Board notification timelines and Data Principal communication.</li>
            </ul>
            <p>"Do I need to comply?" is the right question - but it is only the beginning. For most Indian businesses collecting personal data of Indian individuals, the answer is <strong>yes</strong>. The degree, timeline, and investment depend on your tier.</p>
          </section>

          <div className="cta-banner">
            <h3>Ready to Build DPDP Compliance?</h3>
            <p>SecComply delivers structured DPDP compliance programmes for Indian startups and enterprises - from gap assessment to audit-ready documentation.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free DPDP Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does the DPDP Act apply to small startups with few users?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. The DPDP Act has no size threshold, no SME exemption, and no minimum user count for basic applicability. A 5-person startup collecting personal data of Indian individuals is in scope exactly as much as a 5,000-person enterprise. The volume of users affects whether you are likely to be designated a Significant Data Fiduciary - it does not affect whether the Act applies at all.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Are we exempt from the DPDP Act if we only process anonymised data?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Only if the anonymisation is genuinely irreversible - meaning there is no realistic pathway to re-identify individuals from the data, even when combined with other data you hold. Pseudonymised data, where you retain a reverse-lookup key, is explicitly in scope. Most real-world 'anonymisation' is actually pseudonymisation and remains subject to the Act.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>If our business is registered outside India but has Indian users, does DPDP apply?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. The DPDP Act applies extraterritorially if you offer goods or services to individuals in India, or profile individuals in India. Your place of incorporation, the location of your servers, and the nationality of your management are irrelevant. If Indian individuals use your product, you are in scope.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>We process data in India on behalf of an overseas principal (BPO model). Does DPDP apply?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The DPDP Act provides a specific exemption for personal data processed in India by a Data Processor on behalf of a Data Fiduciary located outside India. However, your contractual obligations under the DPDP Act with the overseas principal may still impose compliance requirements. This exemption is narrow and the scope of contractual obligations should be reviewed case-by-case.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can we transfer Indian user data to US or EU cloud providers?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Cross-border data transfers are restricted under Section 16 to countries the Central Government may notify as permitted or restricted. The permitted / restricted country list has not yet been published, but the framework is in place. Transfers remain possible in the interim, but organisations should prepare for eventual restrictions - particularly for sensitive data categories - and consider proactive data localisation.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#q1" className="toc-link">Q1: Digital Data</a></li>
              <li><a href="#q2" className="toc-link">Q2: Indian Individuals</a></li>
              <li><a href="#q3" className="toc-link">Q3: Exemptions</a></li>
              <li><a href="#q4" className="toc-link">Q4: Data Type</a></li>
              <li><a href="#q5" className="toc-link">Q5: Volume</a></li>
              <li><a href="#q6" className="toc-link">Q6: Your Role</a></li>
              <li><a href="#q7" className="toc-link">Q7: Cross-Border</a></li>
              <li><a href="#compliance-tier" className="toc-link">Compliance Tier</a></li>
              <li><a href="#action-plan" className="toc-link">Action Plan</a></li>
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
              <li><a href="https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough">▶ Part 6: Applicability Quiz</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">DPDP Act</span><span className="tag">Applicability</span><span className="tag">Compliance Assessment</span><span className="tag">Indian Startup</span><span className="tag">DPDP Exemptions</span><span className="tag">SDF</span></div>
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
