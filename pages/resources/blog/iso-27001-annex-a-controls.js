import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001AnnexAControls() {
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
        <title>ISO 27001 Annex A Controls - All 93 Controls Explained Simply | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="ISO 27001:2022 has 93 controls in 4 categories. Here is what each category covers, the controls that matter most for startups, the 11 new controls in 2022, and how the Statement of Applicability works." />
        <meta name="keywords" content="ISO 27001 Annex A controls, 93 controls ISO 27001, ISO 27001 2022 controls, organisational controls ISO 27001, people controls, physical controls, technological controls, Statement of Applicability, SoA" />
        <meta property="og:title" content="ISO 27001 Annex A Controls - All 93 Controls Explained Simply" />
        <meta property="og:description" content="ISO 27001:2022 has 93 controls in 4 categories. Here is what each category covers, the controls that matter most for startups, the 11 new controls in 2022, and how the Statement of Applicability works." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-annex-a-controls" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 Annex A Controls - All 93 Controls Explained Simply","description":"ISO 27001:2022 has 93 controls in 4 categories. Here is what each covers, the 11 new 2022 controls, and how the Statement of Applicability works.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-annex-a-controls","articleSection":"ISO 27001"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"Annex A Controls","item":"https://seccomply.net/resources/blog/iso-27001-annex-a-controls"}]}]}) }} />
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
        <h1 className="hero-h1">ISO 27001 Annex A Controls - <em>All 93 Controls</em> Explained Simply</h1>
        <p className="hero-sub">ISO 27001:2022 has 93 controls organised into four categories: Organisational (37), People (8), Physical (14), and Technological (34). Not all 93 apply to every organisation. Here is what each category covers, the controls that matter most for startups, and how the Statement of Applicability works.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 10 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=480&fit=crop" alt="ISO 27001 Annex A 93 controls explained categories" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">The 2022 update reduced controls from 114 to 93 and reorganised them from 14 categories to 4. The structure is simpler but the controls are more modern.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pgs4" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(232,99,43,0.04)"/></pattern></defs>
          <rect width="960" height="280" fill="url(#pgs4)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">ISO 27001:2022 Annex A - 93 Controls in 4 Categories</text>
          {[{t:"ORGANISATIONAL",n:"37",sub:"Policies, governance, vendor mgmt",col:"#E8632B",x:50,pct:"40%"},{t:"PEOPLE",n:"8",sub:"HR, training, awareness",col:"#818cf8",x:280,pct:"9%"},{t:"PHYSICAL",n:"14",sub:"Facilities, equipment, media",col:"#06d6a0",x:520,pct:"15%"},{t:"TECHNOLOGICAL",n:"34",sub:"Access, crypto, network, app security",col:"#ffb703",x:750,pct:"37%"}].map(({t,n,sub,col,x,pct},i) => (
            <g key={i}>
              <rect x={x} y="40" width="195" height="200" rx="14" fill="#091826" stroke={col+"25"} strokeWidth="1.5"/>
              <rect x={x} y="40" width="195" height="4" rx="2" fill={col}/>
              <text x={x+97} y="85" textAnchor="middle" fill={col} fontSize="36" fontWeight="800" fontFamily="sans-serif">{n}</text>
              <text x={x+97} y="108" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">{t}</text>
              <text x={x+97} y="130" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="9" fontFamily="sans-serif">{sub}</text>
              <rect x={x+20} y="150" width="155" height="10" rx="5" fill="rgba(255,255,255,0.05)"/>
              <rect x={x+20} y="150" width={155*parseInt(pct)/100} height="10" rx="5" fill={col} opacity="0.6"/>
              <text x={x+97} y="180" textAnchor="middle" fill={col} fontSize="9" fontWeight="700" fontFamily="sans-serif">{pct} of all controls</text>
              <text x={x+97} y="220" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8.5" fontFamily="sans-serif">{["A.5–A.8","A.6","A.7","A.8"][i]} control range</text>
            </g>
          ))}
          <text x="480" y="265" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">Not all 93 apply to every organisation. The Statement of Applicability documents which apply and why.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#overview">The 93 Controls at a Glance</a>
            <a href="#organisational">Organisational Controls (37)</a>
            <a href="#people">People Controls (8)</a>
            <a href="#physical">Physical Controls (14)</a>
            <a href="#technological">Technological Controls (34)</a>
            <a href="#new-2022">11 New Controls in 2022</a>
            <a href="#soa">Statement of Applicability</a>
            <a href="#startup-priority">Startup Priority Controls</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(232,99,43,0.3)',paddingLeft:'1.2rem'}}>ISO 27001:2022 Annex A contains 93 controls - down from 114 in the 2013 version. These controls are the specific security measures your organisation implements to treat identified risks. They are organised into four categories and documented in your Statement of Applicability (SoA). Here is what each category covers and which controls matter most for startups.</p>

          <section id="overview">
            <h2>The 93 Controls - <em>At a Glance</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Category</th><th>Controls</th><th>What It Covers</th></tr></thead>
                <tbody>
                  {[['A.5 Organisational','37 controls','Policies, roles, asset management, access control, supplier relationships, incident management, business continuity, compliance'],['A.6 People','8 controls','Screening, employment terms, security awareness, disciplinary process, termination responsibilities'],['A.7 Physical','14 controls','Physical security perimeters, entry controls, office security, equipment protection, clear desk, media disposal'],['A.8 Technological','34 controls','User authentication, access rights, cryptography, malware protection, backup, logging, network security, secure development, vulnerability management']].map(([c,n,w],i)=>(<tr key={i}><td>{c}</td><td style={{color:'var(--cy)',fontWeight:700}}>{n}</td><td>{w}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="organisational">
            <h2>Organisational Controls (37) - <em>A.5</em></h2>
            <p>The largest category. These controls govern how your organisation manages security at a policy and governance level:</p>
            <ul>
              <li><strong>A.5.1 Information Security Policies:</strong> Top-level security policy approved by management, reviewed regularly</li>
              <li><strong>A.5.2-5.4 Roles and Responsibilities:</strong> Defined security roles, segregation of duties, management responsibilities</li>
              <li><strong>A.5.9-5.13 Asset Management:</strong> Inventory of information assets, acceptable use, classification, labelling, return of assets</li>
              <li><strong>A.5.15-5.18 Access Control:</strong> Access control policy, identity management, authentication, access rights provisioning</li>
              <li><strong>A.5.19-5.23 Supplier Management:</strong> Information security in supplier relationships, supply chain security, monitoring and review</li>
              <li><strong>A.5.24-5.28 Incident Management:</strong> Incident response planning, assessment, response procedures, learning from incidents, evidence collection</li>
              <li><strong>A.5.29-5.30 Business Continuity:</strong> ICT readiness for business continuity, business continuity planning</li>
              <li><strong>A.5.31-5.37 Compliance:</strong> Legal and regulatory requirements, intellectual property, records protection, privacy, independent review</li>
            </ul>
          </section>

          <section id="people">
            <h2>People Controls (8) - <em>A.6</em></h2>
            <p>The smallest category but critically important. Security is ultimately a people problem:</p>
            <ul>
              <li><strong>A.6.1 Screening:</strong> Background verification checks before employment, proportional to the role and data access</li>
              <li><strong>A.6.2 Terms and Conditions:</strong> Employment contracts include information security responsibilities</li>
              <li><strong>A.6.3 Security Awareness Training:</strong> Regular training programme covering phishing, data handling, incident reporting, acceptable use</li>
              <li><strong>A.6.4 Disciplinary Process:</strong> Documented process for security policy violations</li>
              <li><strong>A.6.5 Termination Responsibilities:</strong> Security responsibilities that remain valid after employment ends</li>
              <li><strong>A.6.6 Confidentiality Agreements:</strong> NDAs and confidentiality terms for employees and contractors</li>
              <li><strong>A.6.7 Remote Working:</strong> Security controls for remote and mobile working</li>
              <li><strong>A.6.8 Information Security Event Reporting:</strong> Process for reporting observed or suspected security events</li>
            </ul>
          </section>

          <section id="physical">
            <h2>Physical Controls (14) - <em>A.7</em></h2>
            <p>Physical security is often deprioritised by cloud-native startups, but auditors still check:</p>
            <ul>
              <li><strong>A.7.1-7.4 Perimeter and Entry:</strong> Physical security perimeters, entry controls, securing offices and facilities</li>
              <li><strong>A.7.5-7.8 Equipment:</strong> Equipment siting and protection, off-premises assets, secure disposal, unattended equipment, clear desk/screen</li>
              <li><strong>A.7.9-7.14 Media and Utilities:</strong> Storage media management, utility security, cabling security, equipment maintenance</li>
            </ul>
            <div className="callout co-info">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>For Cloud-Native Startups</strong>
                <p>If you have no physical office (fully remote), many physical controls can be marked as not applicable in your SoA - but you must justify why. Remote working controls (A.6.7) and endpoint security become more important in this scenario. Your cloud provider physical security (AWS, Azure, GCP) covers the data centre controls.</p>
              </div>
            </div>
          </section>

          <section id="technological">
            <h2>Technological Controls (34) - <em>A.8</em></h2>
            <p>The most technically detailed category. Key areas include:</p>
            <ul>
              <li><strong>A.8.1-8.6 Access and Authentication:</strong> User endpoint devices, privileged access, information access restriction, authentication, capacity management</li>
              <li><strong>A.8.7-8.12 Malware and Backup:</strong> Malware protection, vulnerability management, configuration management, data deletion, data masking, data leakage prevention</li>
              <li><strong>A.8.13-8.16 Monitoring:</strong> Backup, redundancy, logging, monitoring activities</li>
              <li><strong>A.8.17-8.22 Network:</strong> Clock synchronisation, privileged utilities, software installation, network security, web filtering</li>
              <li><strong>A.8.23-8.28 Cryptography and Development:</strong> Cryptography use, secure development lifecycle, security requirements, secure architecture, secure coding</li>
              <li><strong>A.8.29-8.34 Testing and Operations:</strong> Security testing, outsourced development, separation of environments, change management, test data, information systems audit</li>
            </ul>
          </section>

          <section id="new-2022">
            <h2>11 New Controls <em>in the 2022 Update</em></h2>
            <p>The 2022 update introduced 11 controls that did not exist in the 2013 version:</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Control</th><th>Category</th><th>What It Addresses</th></tr></thead>
                <tbody>
                  {[['A.5.7 Threat Intelligence','Organisational','Collecting and analysing threat intelligence relevant to your organisation'],['A.5.23 Cloud Services','Organisational','Security requirements for cloud service acquisition, use, and exit'],['A.5.30 ICT Readiness for Business Continuity','Organisational','Ensuring ICT services support business continuity requirements'],['A.7.4 Physical Security Monitoring','Physical','Monitoring physical premises for unauthorised access'],['A.8.9 Configuration Management','Technological','Managing security configurations across hardware, software, and networks'],['A.8.10 Information Deletion','Technological','Ensuring timely and secure deletion of information no longer needed'],['A.8.11 Data Masking','Technological','Masking data to limit exposure in non-production environments'],['A.8.12 Data Leakage Prevention','Technological','Controls to prevent unauthorised data exfiltration'],['A.8.16 Monitoring Activities','Technological','Monitoring networks, systems, and applications for anomalous behaviour'],['A.8.23 Web Filtering','Technological','Controlling access to external websites to reduce malware exposure'],['A.8.28 Secure Coding','Technological','Applying secure coding principles during software development']].map(([c,cat,w],i)=>(<tr key={i}><td style={{color:'var(--cy)'}}>{c}</td><td>{cat}</td><td>{w}</td></tr>))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="soa">
            <h2>The Statement of Applicability - <em>How It Works</em></h2>
            <p>The Statement of Applicability (SoA) is one of the most important documents in your ISMS. For each of the 93 Annex A controls, the SoA states whether the control <strong>applies</strong> to your organisation and <strong>why</strong>. If a control does not apply, the SoA must document the justification for exclusion. A typical SaaS startup applies 70-80 of the 93 controls, excluding some physical controls (if fully remote) and certain controls not relevant to their processing activities.</p>
          </section>

          <section id="startup-priority">
            <h2>Startup Priority Controls - <em>Where to Focus First</em></h2>
            <p>For a SaaS startup beginning the ISO 27001 journey, these controls typically require the most work and deliver the most value:</p>
            <ul>
              <li><strong>A.5.1 Information Security Policies</strong> - the foundation document everything else references</li>
              <li><strong>A.5.15-5.18 Access Control</strong> - MFA, role-based access, access reviews</li>
              <li><strong>A.5.24-5.28 Incident Management</strong> - response procedures, breach notification, evidence collection</li>
              <li><strong>A.6.3 Security Awareness Training</strong> - phishing simulation, data handling, incident reporting</li>
              <li><strong>A.8.7 Malware Protection</strong> - endpoint security across all devices</li>
              <li><strong>A.8.8 Vulnerability Management</strong> - regular scanning, patching, remediation tracking</li>
              <li><strong>A.8.24-8.28 Secure Development</strong> - SDLC, code review, testing, secure coding</li>
              <li><strong>A.8.13 Backup</strong> - automated backups, tested restoration, offsite storage</li>
            </ul>
            <p>For the full self-assessment on whether ISO 27001 is right for your organisation, see our <a href="https://seccomply.net/resources/blog/iso-27001-self-assessment" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>ISO 27001 Self-Assessment Guide</a>.</p>
          </section>

          <div className="cta-banner">
            <h3>Ready to Start Your ISO 27001 Journey?</h3>
            <p>SecComply helps Indian startups and global enterprises implement ISO 27001 from gap assessment to certification - with realistic timelines and fixed-scope engagements.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free ISO 27001 Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/iso-27001-annex-a-controls" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/iso-27001-annex-a-controls&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How many controls does ISO 27001:2022 have?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>ISO 27001:2022 Annex A contains 93 controls, organised into four categories: Organisational (37), People (8), Physical (14), and Technological (34). This is a reduction from 114 controls in 14 categories in the 2013 version.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Do all 93 controls apply to every organisation?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. Your Statement of Applicability (SoA) documents which controls apply and which do not, with justification. A typical SaaS startup applies 70-80 controls. Controls that do not apply (e.g. physical data centre controls for a fully cloud-native company) are excluded with documented reasoning.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What changed from ISO 27001:2013 to 2022?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Only Annex A controls changed - the core management system clauses remain the same. Controls decreased from 114 to 93, reorganised from 14 categories to 4. 11 new controls were added covering threat intelligence, cloud services, data deletion, data masking, DLP, secure coding, and web filtering.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the Statement of Applicability (SoA)?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The SoA is a document listing all 93 Annex A controls with a determination of whether each applies to your organisation and why. It is one of the most important audit artefacts - the certification body auditor will review it before and during the audit. Controls excluded without proper justification will be flagged as findings.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Which controls should a startup prioritise first?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Focus on: access control (MFA, role-based access), incident management (response procedures, breach notification), security awareness training, vulnerability management, secure development practices, backup, and the foundational information security policy. These deliver the most security value and are the most scrutinised during audits.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#overview" className="toc-link">93 Controls Overview</a></li>
              <li><a href="#organisational" className="toc-link">Organisational (37)</a></li>
              <li><a href="#people" className="toc-link">People (8)</a></li>
              <li><a href="#physical" className="toc-link">Physical (14)</a></li>
              <li><a href="#technological" className="toc-link">Technological (34)</a></li>
              <li><a href="#new-2022" className="toc-link">11 New in 2022</a></li>
              <li><a href="#soa" className="toc-link">Statement of Applicability</a></li>
              <li><a href="#startup-priority" className="toc-link">Startup Priorities</a></li>
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
              <li><a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls">▶ Annex A - 93 Controls</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment">Risk Assessment in ISO 27001</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27001</span><span className="tag">Annex A</span><span className="tag">93 Controls</span><span className="tag">SoA</span><span className="tag">Organisational Controls</span><span className="tag">Technological Controls</span><span className="tag">2022 Update</span></div>
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
