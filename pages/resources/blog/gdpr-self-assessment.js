import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function GDPRSelfAssessment() {
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
        <title>Does GDPR Apply to Your Business? A Self-Assessment Guide | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="An 8-question GDPR self-assessment for startups and SMBs. Score your exposure, debunk the four exemption myths, and follow the 30-day action plan to close your critical compliance gaps." />
        <meta name="keywords" content="does GDPR apply to my business, GDPR self-assessment, GDPR startup applicability, GDPR extraterritorial, GDPR 8 question quiz, GDPR scope test, GDPR SMB exemption myth, GDPR 30-day action plan" />
        <meta property="og:title" content="Does GDPR Apply to Your Business? A Self-Assessment Guide" />
        <meta property="og:description" content="An 8-question GDPR self-assessment for startups and SMBs. Score your exposure, debunk the four exemption myths, and follow the 30-day action plan to close your critical compliance gaps." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/gdpr-self-assessment" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Gauri Khatate" />
        <meta property="article:tag" content="GDPR" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/gdpr-self-assessment" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Does GDPR Apply to Your Business? A Self-Assessment Guide","description":"An 8-question GDPR self-assessment for startups and SMBs. Score your exposure and follow the 30-day action plan.","author":{"@type":"Person","name":"Gauri Khatate","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/gdpr-self-assessment","articleSection":"GDPR"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"GDPR Self-Assessment","item":"https://seccomply.net/resources/blog/gdpr-self-assessment"}]}]}) }} />
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
        <span style={{color:'var(--tb)'}}>Does GDPR Apply to Your Business? A...</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🇪🇺 GDPR</span>
          <span className="badge badge-bl">📋 Data Privacy</span>
          <span className="badge badge-gr">🚀 Startup Guide</span>
        </div>
        <h1 className="hero-h1">Does GDPR Apply to Your Business? - <em>A Self-Assessment Guide</em></h1>
        <p className="hero-sub">There is a question nearly every founder asks in the first fifteen minutes of a compliance call: does GDPR even apply to us? GDPR follows the data subject, not the company. If an EU or UK resident uses your product - you are almost certainly in scope. This 8-question self-assessment tells you exactly where you stand.</p>

        <div className="author-strip">
          <div className="avatar">GK</div>
          <div className="author-info">
            <div className="aname">Gauri Khatate</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 10 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1200&h=480&fit=crop" alt="GDPR self-assessment guide startup compliance" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">GDPR jurisdiction is a function of your data flows, not your org chart. If you cannot see the reach of your product, a regulator will see it for you.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pgg" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(0, 129, 242,0.04)"/></pattern></defs>
          <rect width="960" height="280" fill="url(#pgg)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">GDPR Self-Assessment - Scoring Guide</text>
          {[
            {range:"0–1 YES",label:"Low Scope",desc:"Likely out of scope - verify annually",col:"#6a8aaa",x:50},
            {range:"2–4 YES",label:"In Scope",desc:"GDPR applies. Build baseline now.",col:"#ffb703",x:280},
            {range:"5–6 YES",label:"High Exposure",desc:"Material gap. Formal assessment needed.",col:"#0081f2",x:520},
            {range:"7–8 YES",label:"Critical",desc:"Regulatory risk is immediate.",col:"#ff4d6d",x:750},
          ].map(({range,label,desc,col,x},i) => (
            <g key={i}>
              <rect x={x} y="40" width="195" height="130" rx="14" fill="#091826" stroke={col+"25"} strokeWidth="1.5"/>
              <rect x={x} y="40" width="195" height="4" rx="2" fill={col}/>
              <text x={x+97} y="75" textAnchor="middle" fill={col} fontSize="20" fontWeight="800" fontFamily="sans-serif">{range}</text>
              <text x={x+97} y="100" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">{label}</text>
              <text x={x+97} y="120" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="9" fontFamily="sans-serif">{desc}</text>
            </g>
          ))}
          <rect x="50" y="195" width="880" height="60" rx="14" fill="#0d1c10" stroke="rgba(0, 129, 242,0.15)" strokeWidth="1.5"/>
          <text x="490" y="220" textAnchor="middle" fill="rgba(200,214,229,0.65)" fontSize="11" fontWeight="700" fontFamily="sans-serif">8 Questions · Score Your Exposure · Get Your 30-Day Action Plan</text>
          <text x="490" y="240" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="9" fontFamily="sans-serif">GDPR jurisdiction follows the data subject, not the company. 92% of SaaS startups process EU personal data.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#extraterritorial">The Extraterritorial Reality</a>
            <a href="#eight-questions">The 8-Question Self-Assessment</a>
            <a href="#scoring">Your Score</a>
            <a href="#exemption-myths">Four Exemption Myths</a>
            <a href="#action-plan">30-Day Action Plan</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(0, 129, 242,0.3)',paddingLeft:'1.2rem'}}>There is a question nearly every founder asks in the first fifteen minutes of a compliance call: <em>"Does GDPR even apply to us?"</em> Sometimes the subtext is anxiety. More often, it is optimism - the hope that because the startup is Indian, American, or Singapore-registered, a European regulation simply does not reach them. It is a reasonable hope. It is also, in most cases, <strong>wrong</strong>. GDPR follows the data subject, not the company.</p>

          <section id="extraterritorial">
            <h2>The Extraterritorial <em>Reality</em></h2>
            <p>Article 3 of GDPR extends jurisdiction in two ways that matter to every startup:</p>
            <ul>
              <li><strong>Establishment criterion:</strong> If your company has any form of establishment in the EU (an office, a subsidiary, even a single remote employee in France), GDPR applies to all your processing activities.</li>
              <li><strong>Targeting criterion:</strong> If you offer goods or services to people in the EU/UK, or monitor their behaviour, GDPR applies. Your company can be registered in Pune or Palo Alto - it makes no difference.</li>
            </ul>
            <p>The targeting criterion is where most startups trip. "Offering goods or services" does not require an EU subsidiary. It requires intent - and intent is inferred from behaviour:</p>
            <ul>
              <li>Your website accepts EUR or GBP as a payment currency</li>
              <li>Your pricing page has a country dropdown that includes EU member states</li>
              <li>You run paid advertising targeted at users in Germany, France, or the Netherlands</li>
              <li>Your copy is translated into German, French, Spanish, Italian, or Dutch</li>
              <li>Your SaaS platform is used by EU-based customers - even through a US reseller</li>
            </ul>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The Frictionless Trap</strong>
                <p>The modern SaaS stack is effectively a GDPR-scope machine. The moment you deploy Google Analytics, Meta Pixel, HubSpot forms, Intercom chat, or Stripe checkout - and an EU visitor lands on your site - you have started collecting personal data from an EU subject. There is no signup required. The data subject does not have to be a customer. They just have to visit. This is why the "we are not live in Europe yet" defence rarely works.</p>
              </div>
            </div>
          </section>

          <section id="eight-questions">
            <h2>The 8-Question <em>Self-Assessment</em></h2>
            <p>Work through these honestly. At the end, count your YES answers and check the scoring band.</p>

            <h3>Q1: Do you have any users, customers, or visitors from the EU or UK?</h3>
            <p>Check your analytics. Not your target market - your <strong>actual traffic and signup data</strong>. GDPR has no minimum threshold. Ten EU users counts the same as ten million when it comes to jurisdiction.</p>

            <h3>Q2: Do you use third-party tools that process data from EU users?</h3>
            <p>If your CRM, email platform, analytics, payment processor, or cloud storage touches EU personal data - you are responsible for the chain. You need a DPA with every one of them.</p>

            <h3>Q3: Do you process special category data?</h3>
            <p>Health data, biometric identifiers, genetic data, racial/ethnic origin, political opinions, religious beliefs, sexual orientation, trade union membership. If your product touches any - even incidentally - you almost certainly need a DPIA.</p>

            <h3>Q4: Do you transfer data outside the EU/UK?</h3>
            <p>If your servers are in AWS us-east-1, your analytics in Google Cloud Iowa, or your support tool has its primary database in the US - you are transferring data internationally. You need Standard Contractual Clauses and likely a Transfer Impact Assessment.</p>

            <h3>Q5: Do you rely on consent as your primary legal basis?</h3>
            <p>If your answer is "yes, we have a checkbox on signup," you are probably non-compliant. Valid GDPR consent is specific, granular, informed, and freely withdrawable - per processing purpose. Bundled consent is invalid.</p>

            <h3>Q6: Can you locate, export, and delete a specific user data within 30 days?</h3>
            <p>A Subject Access Request is not a legal event - it is an engineering event. Can your team today pull every row relating to a single user across production, backups, analytics, CRM, support, and email?</p>

            <h3>Q7: Do you have a documented breach notification procedure?</h3>
            <p>72 hours from becoming aware of a breach, you must notify the supervisory authority. That clock does not wait for your legal review, your PR team, or your CEO returning from holiday.</p>

            <h3>Q8: Do your privacy notices reflect what you actually do?</h3>
            <p>Not what a template says. Not what you did at launch. What your product does <em>today</em> with user data. The Spotify fine (EUR 5M, 2023) was for having a privacy policy that did not meaningfully tell users how their data was used.</p>
          </section>

          <section id="scoring">
            <h2>Your Score - <em>What It Means</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Score</th><th>Signal</th><th>Recommended Action</th></tr></thead>
                <tbody>
                  {[['0–1 YES','Low Scope','Likely out of scope - but verify annually. Circumstances change.'],['2–4 YES','In Scope','GDPR applies. Build baseline compliance now - data mapping, DPAs, privacy notice.'],['5–6 YES','High Exposure','Material compliance gap. Prioritise a formal readiness assessment within 30 days.'],['7–8 YES','Critical','Regulatory risk is immediate. Engage a DPO or external GRC partner this quarter.']].map(([s,si,a],i)=>(<tr key={i}><td style={{color:['var(--tm)','#ffb703','var(--cy)','#ff4d6d'][i],fontWeight:700}}>{s}</td><td>{si}</td><td>{a}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="exemption-myths">
            <h2>Four Exemption Myths <em>That Will Cost You</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>The Myth</th><th>The Reality</th></tr></thead>
                <tbody>
                  {[['"We are under 250 employees, so the SMB exemption applies."','There is no SMB exemption. Article 30 record-keeping relief for under 250 employees has narrow carve-outs and almost never applies for tech companies.'],['"We only process B2B data - no consumers."','B2B contact data is still personal data. A named employee work email is GDPR-covered. This is the most-fined misconception.'],['"We do not sell user data, so we are fine."','GDPR is about processing, not selling. Collecting, storing, analysing, sharing with vendors - each needs a legal basis.'],['"Our users accepted the terms - that is consent."','Bundled consent inside T&Cs is invalid. Consent must be specific, granular, and separable from other terms. Article 7 is not negotiable.'],['"We are pre-revenue, regulators will not bother."','Complaints often originate from users, not regulators. A single disgruntled EU user filing with their DPA triggers an investigation regardless of your ARR.']].map(([m,r],i)=>(<tr key={i}><td style={{color:'#ff4d6d'}}>{m}</td><td>{r}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="action-plan">
            <h2>The 30-Day <em>Action Plan</em></h2>
            <h3>Week 1: Discover</h3>
            <ul>
              <li><strong>Map your data flows.</strong> List every place personal data enters, lives, and exits your product - production DB, warehouse, analytics, email platform, CRM, support, backups.</li>
              <li><strong>Inventory your subprocessors.</strong> Every third-party tool that touches personal data. Check each for a publicly available DPA.</li>
              <li><strong>Identify your data categories.</strong> Flag anything that qualifies as special category.</li>
            </ul>
            <h3>Week 2: Document</h3>
            <ul>
              <li>Write or rewrite your <strong>privacy notice</strong> to reflect actual data flows - not template language.</li>
              <li>Document a <strong>legal basis for each processing activity</strong>. Default to contract necessity or legitimate interests where defensible.</li>
              <li><strong>Sign DPAs</strong> with every subprocessor. Where the vendor does not offer one, flag for replacement.</li>
            </ul>
            <h3>Week 3: Operationalise</h3>
            <ul>
              <li>Build an <strong>in-product path for user rights</strong> - export, rectification, deletion. Not a support-email-only workflow.</li>
              <li>Write a <strong>72-hour breach notification playbook</strong>. Name the on-call owner. Test with a tabletop exercise.</li>
              <li>Implement a <strong>retention schedule</strong> with technical enforcement - automated deletion, not policy on paper.</li>
            </ul>
            <h3>Week 4: Verify</h3>
            <ul>
              <li>Run a <strong>tabletop SAR drill</strong>. Pick a real user. Can you produce their full data package in under a week?</li>
              <li>Commission an <strong>independent assessment</strong> - formal gap analysis or continuous GRC platform.</li>
              <li>Set a <strong>review cadence</strong>. GDPR posture drifts every time you add a vendor or a feature.</li>
            </ul>
            <p>Startups that treat GDPR as an engineering problem rather than a legal one close enterprise deals meaningfully faster. The same controls that satisfy a regulator are the first questions a Fortune 500 procurement team asks. For the full comparison of GDPR vs India DPDP Act, read our <a href="https://seccomply.net/resources/blog/gdpr-vs-dpdp" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>GDPR vs DPDP Act guide</a>.</p>
          </section>

          <div className="cta-banner">
            <h3>Not Sure Where You Stand on GDPR?</h3>
            <p>SecComply maps your data flows, vendor risks, and compliance gaps across your real product infrastructure - continuously, not just before an audit.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free GDPR Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/gdpr-self-assessment" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/gdpr-self-assessment&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does GDPR apply to startups outside the EU?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. GDPR applies based on where your users are located, not where your company is incorporated. If you offer goods or services to EU/UK residents or monitor their behaviour (analytics, cookies), you are in scope - regardless of your company registration, server location, or revenue.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is there an SMB exemption from GDPR?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. There is no SMB exemption. Article 30 offers minor record-keeping relief for organisations with fewer than 250 employees, but the carve-out is narrow and almost never applies in practice for technology companies processing personal data regularly.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can a single EU user trigger GDPR obligations?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. GDPR has no minimum threshold for the number of EU data subjects. In principle, even one EU user brings you into scope. The practical enforcement risk scales with volume and severity - but the legal obligation exists from the first EU data subject.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>We only process B2B data. Are we exempt from GDPR?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. B2B contact data is still personal data under GDPR. A named employee work email (e.g. john@company.eu) identifies a specific natural person and is fully covered. This is one of the most commonly fined misconceptions in GDPR enforcement.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What happens if we score 7-8 on the self-assessment?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>A score of 7-8 indicates critical regulatory risk. You likely have material gaps across multiple GDPR obligations - data flows, legal basis, vendor agreements, user rights, and breach notification. The recommended action is to engage a Data Protection Officer or external GRC partner within the current quarter to begin a formal readiness programme.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#extraterritorial" className="toc-link">Extraterritorial Reach</a></li>
              <li><a href="#eight-questions" className="toc-link">8-Question Quiz</a></li>
              <li><a href="#scoring" className="toc-link">Your Score</a></li>
              <li><a href="#exemption-myths" className="toc-link">Exemption Myths</a></li>
              <li><a href="#action-plan" className="toc-link">30-Day Action Plan</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 GDPR Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/gdpr-explained-startups">GDPR Explained for Startups</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-self-assessment">▶ GDPR Self-Assessment Guide</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-counts-personal-data-gdpr">Personal Data Under GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-vs-dpdp">GDPR vs DPDP Act</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp">ISO 27701 vs GDPR vs DPDP</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">GDPR</span><span className="tag">Self-Assessment</span><span className="tag">Startup</span><span className="tag">Applicability</span><span className="tag">Extraterritorial</span><span className="tag">Compliance</span><span className="tag">Data Privacy</span></div>
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
