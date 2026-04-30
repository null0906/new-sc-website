import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001RiskAssessment() {
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
        <title>Risk Assessment in ISO 27001 - How It Works Step by Step | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="The risk assessment is the engine of the ISMS. Here is the complete step-by-step methodology - asset identification, threat analysis, likelihood-impact scoring, risk treatment, and the risk register." />
        <meta name="keywords" content="ISO 27001 risk assessment, risk assessment methodology, information security risk, risk register ISO 27001, risk treatment ISO 27001, likelihood impact matrix, risk appetite, residual risk" />
        <meta property="og:title" content="Risk Assessment in ISO 27001 - How It Works Step by Step" />
        <meta property="og:description" content="The risk assessment is the engine of the ISMS. Here is the complete step-by-step methodology - asset identification, threat analysis, likelihood-impact scoring, risk treatment, and the risk register." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-risk-assessment" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-risk-assessment" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Risk Assessment in ISO 27001 - How It Works Step by Step","description":"The complete risk assessment methodology for ISO 27001 - asset identification, threat analysis, scoring, treatment, and the risk register.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-risk-assessment","articleSection":"ISO 27001"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"Risk Assessment","item":"https://seccomply.net/resources/blog/iso-27001-risk-assessment"}]}]}) }} />
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
        <span style={{color:'var(--tb)'}}>ISO 27001</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🌍 ISO 27001</span>
          <span className="badge badge-bl">🛡️ Information Security</span>
          <span className="badge badge-gr">🚀 Startup Guide</span>
        </div>
        <h1 className="hero-h1">Risk Assessment in ISO 27001 - <em>How It Works</em> Step by Step</h1>
        <p className="hero-sub">The risk assessment is the engine of the ISMS. It determines which controls you need, what resources to invest, and where your security programme focuses its energy. Here is the step-by-step methodology - from asset identification to risk treatment decisions.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 9 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=1200&h=480&fit=crop" alt="ISO 27001 risk assessment methodology step by step" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">Risk assessment is not a one-time exercise. It runs at least annually, and whenever a significant change occurs - new product, new vendor, new market, new threat.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 260" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pgs5" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(232,99,43,0.04)"/></pattern></defs>
          <rect width="960" height="260" fill="url(#pgs5)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">Risk Assessment Methodology - 4-Step Process</text>
          {[{n:"01",t:"IDENTIFY",sub:"Assets, threats, vulnerabilities",col:"#818cf8",x:50},{n:"02",t:"ASSESS",sub:"Likelihood × Impact = Risk Score",col:"#E8632B",x:280},{n:"03",t:"TREAT",sub:"Mitigate, accept, transfer, avoid",col:"#06d6a0",x:520},{n:"04",t:"MONITOR",sub:"Review, update, improve",col:"#ffb703",x:750}].map(({n,t,sub,col,x},i) => (
            <g key={i}>
              <rect x={x} y="40" width="195" height="150" rx="14" fill="#091826" stroke={col+"25"} strokeWidth="1.5"/>
              <rect x={x} y="40" width="195" height="4" rx="2" fill={col}/>
              <text x={x+97} y="80" textAnchor="middle" fill={col} fontSize="28" fontWeight="800" fontFamily="sans-serif">{n}</text>
              <text x={x+97} y="105" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="12" fontWeight="700" fontFamily="sans-serif">{t}</text>
              <text x={x+97} y="128" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="9" fontFamily="sans-serif">{sub}</text>
            </g>
          ))}
          <text x="480" y="225" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="10" fontWeight="700" fontFamily="sans-serif">IDENTIFY → ASSESS → TREAT → MONITOR → REPEAT</text>
          <text x="480" y="245" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">For a typical startup, expect 40-80 identified risks across data breaches, unauthorised access, service disruption, vendor failures, and human error.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#why-matters">Why Risk Assessment Matters</a>
            <a href="#methodology">The Risk Assessment Methodology</a>
            <a href="#step-1">Step 1: Asset Identification</a>
            <a href="#step-2">Step 2: Threat and Vulnerability Analysis</a>
            <a href="#step-3">Step 3: Likelihood and Impact Scoring</a>
            <a href="#step-4">Step 4: Risk Treatment</a>
            <a href="#risk-register">The Risk Register</a>
            <a href="#common-risks">Common Risks for Startups</a>
            <a href="#ongoing">Keeping It Alive</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(232,99,43,0.3)',paddingLeft:'1.2rem'}}>The risk assessment is the engine of your ISMS. Everything else - your controls, your policies, your audit programme - flows from the risks you identify and how you decide to treat them. ISO 27001 Clause 6.1.2 requires a <strong>documented risk assessment methodology</strong> that is repeatable, produces consistent results, and identifies risks to the confidentiality, integrity, and availability of information. Here is how it works, step by step.</p>

          <section id="why-matters">
            <h2>Why Risk Assessment <em>Matters</em></h2>
            <p>Without a risk assessment, your security programme is guesswork. You are implementing controls because they seem important or because a vendor sold them to you - not because they address your actual risks. The risk assessment gives your ISMS its direction: it tells you where to invest, what to prioritise, and what you can reasonably accept.</p>
            <p>Auditors will check three things about your risk assessment: <strong>Is the methodology documented?</strong> <strong>Are the results consistent and reproducible?</strong> <strong>Do your controls actually trace back to identified risks?</strong> If any of these fail, the risk assessment is a finding - and without a valid risk assessment, the entire ISMS foundation is questionable.</p>
          </section>

          <section id="methodology">
            <h2>The Risk Assessment <em>Methodology</em></h2>
            <p>ISO 27001 does not prescribe a specific methodology - it requires that you define one, document it, and apply it consistently. The most common approach for startups is a qualitative asset-based methodology with a likelihood-impact scoring matrix. Here are the four steps:</p>
          </section>

          <section id="step-1">
            <h2>Step 1 - <em>Asset Identification</em></h2>
            <p>List every information asset within your ISMS scope. An information asset is anything that has value to the organisation and could be compromised. Categories include:</p>
            <ul>
              <li><strong>Data assets:</strong> Customer databases, source code repositories, employee records, financial data, API keys, credentials</li>
              <li><strong>Software assets:</strong> Production applications, internal tools, SaaS subscriptions, development environments</li>
              <li><strong>Hardware assets:</strong> Servers (cloud instances count), laptops, mobile devices, network equipment</li>
              <li><strong>People assets:</strong> Key personnel with critical knowledge or access - the bus factor</li>
              <li><strong>Service assets:</strong> Cloud infrastructure (AWS, Azure, GCP), third-party APIs, email platforms, CRM</li>
            </ul>
            <p>For each asset, assign an owner - the person accountable for its security. Asset ownership drives accountability throughout the ISMS.</p>
          </section>

          <section id="step-2">
            <h2>Step 2 - <em>Threat and Vulnerability Analysis</em></h2>
            <p>For each asset, identify the threats it faces and the vulnerabilities that could be exploited. A threat is something that could go wrong; a vulnerability is the weakness that allows it.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Asset</th><th>Threat</th><th>Vulnerability</th></tr></thead>
                <tbody>
                  {[['Customer database','Unauthorised access','Weak access controls, no MFA'],['Source code','Data exfiltration','Overly permissive repository access'],['Production server','Service disruption','No redundancy, single point of failure'],['Employee laptop','Malware infection','No endpoint protection, outdated OS'],['API keys','Credential theft','Keys stored in source code or plaintext'],['Cloud infrastructure','Misconfiguration','Default settings, no configuration baseline']].map(([a,t,v],i)=>(<tr key={i}><td>{a}</td><td>{t}</td><td>{v}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="step-3">
            <h2>Step 3 - <em>Likelihood and Impact Scoring</em></h2>
            <p>For each risk scenario (asset + threat + vulnerability), score the <strong>likelihood</strong> of the threat materialising and the <strong>impact</strong> if it does. Multiply to get a risk score.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Score</th><th>Likelihood</th><th>Impact</th></tr></thead>
                <tbody>
                  {[['1','Rare - unlikely to occur in 3 years','Negligible - minimal disruption, no data loss'],['2','Unlikely - could occur once in 3 years','Minor - short disruption, limited data exposure'],['3','Possible - could occur once per year','Moderate - significant disruption, some data loss'],['4','Likely - expected to occur multiple times per year','Major - extended outage, significant data breach'],['5','Almost certain - expected to occur frequently','Critical - business-threatening, regulatory penalties']].map(([s,l,im],i)=>(<tr key={i}><td style={{color:'var(--cy)',fontWeight:700}}>{s}</td><td>{l}</td><td>{im}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p><strong>Risk Score = Likelihood × Impact.</strong> Scores of 1-8 are typically low risk (accept or monitor). Scores of 9-16 are medium (implement controls). Scores of 17-25 are high or critical (immediate action required). Define your risk appetite - the threshold above which risks must be treated - and document it as part of your methodology.</p>
          </section>

          <section id="step-4">
            <h2>Step 4 - <em>Risk Treatment</em></h2>
            <p>For each risk above your risk appetite threshold, choose a treatment option:</p>
            <ul>
              <li><strong>Mitigate:</strong> Implement controls to reduce likelihood, impact, or both. This is the most common treatment. Link each mitigation to a specific Annex A control.</li>
              <li><strong>Accept:</strong> Acknowledge the risk and document the decision, including the business rationale. Requires sign-off from the risk owner or management.</li>
              <li><strong>Transfer:</strong> Shift the risk to a third party - typically through insurance or contractual arrangements with vendors.</li>
              <li><strong>Avoid:</strong> Eliminate the activity that creates the risk entirely. Sometimes the right answer is to stop doing the risky thing.</li>
            </ul>
            <p>The output is a <strong>Risk Treatment Plan</strong> - a documented plan showing which risks are being treated, how, by whom, and by when.</p>
          </section>

          <section id="risk-register">
            <h2>The Risk Register - <em>Your Central Risk Document</em></h2>
            <p>The risk register captures every identified risk with its assessment and treatment decision. For each entry, document:</p>
            <ul>
              <li>Risk ID and description</li>
              <li>Asset affected and asset owner</li>
              <li>Threat and vulnerability</li>
              <li>Likelihood score, impact score, and risk score</li>
              <li>Treatment decision (mitigate/accept/transfer/avoid)</li>
              <li>Controls implemented (linked to Annex A)</li>
              <li>Residual risk score (after treatment)</li>
              <li>Risk owner and review date</li>
            </ul>
          </section>

          <section id="common-risks">
            <h2>Common Risks <em>for Startups</em></h2>
            <p>Based on SecComply implementation data, the most commonly identified risks for SaaS startups include:</p>
            <ul>
              <li>Unauthorised access to production systems due to insufficient access controls or missing MFA</li>
              <li>Data breach through compromised vendor or third-party integration</li>
              <li>Service disruption from single points of failure in cloud infrastructure</li>
              <li>Credential exposure through secrets committed to source code repositories</li>
              <li>Insider threat from overly permissive access rights or lack of access reviews</li>
              <li>Phishing attacks targeting employees with access to sensitive systems</li>
              <li>Data loss from inadequate backup procedures or untested restoration</li>
              <li>Compliance violation from untracked regulatory requirements (DPDP, GDPR)</li>
            </ul>
          </section>

          <section id="ongoing">
            <h2>Keeping It Alive - <em>Not a One-Time Exercise</em></h2>
            <p>The risk assessment is not a document you write once for certification and then file away. It must be reviewed and updated:</p>
            <ul>
              <li><strong>At least annually</strong> as part of the ISMS management review cycle</li>
              <li><strong>When significant changes occur</strong> - new product launch, new market, new vendor, organisational restructuring, major incident</li>
              <li><strong>When the threat landscape changes</strong> - new vulnerability classes, new attack techniques, new regulatory requirements</li>
              <li><strong>After security incidents</strong> - each incident is a data point that may change likelihood or impact scores</li>
            </ul>
            <p>The risk register should be a living document with a named owner and a defined review cadence. For the full picture on what an ISMS encompasses, see our <a href="https://seccomply.net/resources/blog/what-is-an-isms" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>What Is an ISMS guide</a>.</p>
          </section>

          <div className="cta-banner">
            <h3>Ready to Start Your ISO 27001 Journey?</h3>
            <p>SecComply helps Indian startups and global enterprises implement ISO 27001 from gap assessment to certification - with realistic timelines and fixed-scope engagements.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free ISO 27001 Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/iso-27001-risk-assessment" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/iso-27001-risk-assessment&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does ISO 27001 prescribe a specific risk assessment methodology?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. ISO 27001 Clause 6.1.2 requires a documented methodology that produces consistent, valid, and comparable results - but does not prescribe which methodology to use. The most common approach for startups is qualitative asset-based assessment with a likelihood-impact scoring matrix.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How many risks should a typical startup identify?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>For a typical SaaS startup, expect 40-80 identified risks across categories like data breaches, unauthorised access, service disruption, vendor failures, and human error. The number depends on the complexity of your operations, the breadth of your ISMS scope, and the granularity of your asset inventory.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the difference between inherent risk and residual risk?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Inherent risk is the risk level before any controls are applied. Residual risk is the risk level after controls are implemented. Auditors will check that residual risk scores are documented and that any residual risk above the risk appetite threshold has been formally accepted by management with documented justification.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How often must the risk assessment be reviewed?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>At minimum annually, but also whenever significant changes occur - new products, new vendors, organisational changes, major incidents, or changes in the threat landscape. The risk register should be a living document, not a point-in-time exercise filed away after certification.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What happens if a risk is above the risk appetite but we choose to accept it?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Risk acceptance above the threshold requires formal, documented sign-off from management or the risk owner. The acceptance must include the business rationale for why the risk is being accepted rather than treated. Auditors will review acceptance decisions and challenge those without adequate justification.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#why-matters" className="toc-link">Why It Matters</a></li>
              <li><a href="#methodology" className="toc-link">Methodology</a></li>
              <li><a href="#step-1" className="toc-link">Asset Identification</a></li>
              <li><a href="#step-2" className="toc-link">Threat Analysis</a></li>
              <li><a href="#step-3" className="toc-link">Scoring</a></li>
              <li><a href="#step-4" className="toc-link">Risk Treatment</a></li>
              <li><a href="#risk-register" className="toc-link">Risk Register</a></li>
              <li><a href="#common-risks" className="toc-link">Common Risks</a></li>
              <li><a href="#ongoing" className="toc-link">Keeping It Alive</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 ISO 27001 Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27001-explained-startups">ISO 27001 Explained for Startups</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-self-assessment">ISO 27001 Self-Assessment Guide</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-vs-soc2-vs-gdpr">ISO 27001 vs SOC 2 vs GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-is-an-isms">What Is an ISMS</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-business-value">Business Value of ISO 27001</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls">Annex A - 93 Controls</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment">▶ Risk Assessment in ISO 27001</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27001</span><span className="tag">Risk Assessment</span><span className="tag">Risk Register</span><span className="tag">Likelihood Impact</span><span className="tag">Risk Treatment</span><span className="tag">ISMS</span><span className="tag">Startup Security</span></div>
          </div>
          <div className="sb-cta">
            <h4>Need ISO 27001 Certification?</h4>
            <p>Gap assessment to certification - we handle the entire journey.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
