import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27701ForDataControllers() {
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
        <title>ISO 27701 for Data Controllers - Key Requirements and Controls Explained | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="The complete guide to ISO 27701 Annex B controller obligations - legal basis documentation, RoPA, consent management, data subject rights, retention, DPIAs, processor management, and privacy by design." />
        <meta name="keywords" content="ISO 27701 data controller, Annex B ISO 27701, ISO 27701 controller requirements, RoPA ISO 27701, consent management ISO 27701, DPIA ISO 27701, data subject rights ISO 27701, privacy by design ISO 27701" />
        <meta property="og:title" content="ISO 27701 for Data Controllers - Key Requirements and Controls Explained" />
        <meta property="og:description" content="The complete guide to ISO 27701 Annex B controller obligations - legal basis documentation, RoPA, consent management, data subject rights, retention, DPIAs, processor management, and privacy by design." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27701-for-data-controllers" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Aditya Hadke" />
        <meta property="article:tag" content="ISO 27701" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27701-for-data-controllers" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27701 for Data Controllers - Key Requirements and Controls Explained","description":"The complete guide to ISO 27701 Annex B controller obligations - legal basis, RoPA, consent, rights, retention, DPIAs, processor management, and privacy by design.","author":{"@type":"Person","name":"Aditya Hadke","jobTitle":"Cyber Security Analyst","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27701-for-data-controllers","articleSection":"ISO 27701"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"ISO 27701 for Controllers","item":"https://seccomply.net/resources/blog/iso-27701-for-data-controllers"}]}]}) }} />
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
        <span style={{color:'var(--tb)'}}>ISO 27701 for Data Controllers - Key Req...</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🔐 ISO 27701</span>
          <span className="badge badge-bl">🌍 Privacy Compliance</span>
          <span className="badge badge-gr">✅ PIMS</span>
        </div>
        <h1 className="hero-h1">ISO 27701 for Data Controllers - <em>Key Requirements</em> and Controls Explained</h1>
        <p className="hero-sub">If your organisation decides what personal data to collect, why it is collected, and how it is used, you are a PII controller under ISO 27701. This blog unpacks each key controller requirement with enough operational detail to be genuinely useful for compliance teams doing the actual work.</p>

        <div className="author-strip">
          <div className="avatar">AH</div>
          <div className="author-info">
            <div className="aname">Aditya Hadke</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Cyber Security Analyst, SecComply</span><span className="dot">·</span><span id="read-time">📖 12 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=480&fit=crop" alt="ISO 27701 data controllers requirements audit evidence" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">ISO 27701 for controllers is fundamentally about operationalising accountability. Policies alone will not satisfy auditors - every control area requires documented processes, technical implementation, and evidence that both are working.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pgc" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(0, 129, 242,0.04)"/></pattern></defs>
          <rect width="960" height="280" fill="url(#pgc)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">ISO 27701 - Controller Control Areas (Clause 7 + Annex B)</text>
          
          {["Legal Basis","RoPA","Consent","Notices","Rights","Minimisation","Retention","DPIA"].map((t,i) => {
            const cols = ['#818cf8','#0081f2','#06d6a0','#ffb703','#ff4d6d','#818cf8','#0081f2','#06d6a0'];
            const descs = ['Document for each activity','Central privacy document','Obtain, record, withdraw','Transparency at collection','Operational process for all','Only necessary data','Defined periods + deletion','Assess high-risk processing'];
            const x = 30 + i*116;
            return (<g key={i}>
              <rect x={x} y="38" width="108" height="200" rx="10" fill="#091826" stroke={cols[i]+'22'} strokeWidth="1.5"/>
              <rect x={x} y="38" width="108" height="3" rx="1.5" fill={cols[i]}/>
              <text x={x+54} y="74" textAnchor="middle" fill={cols[i]} fontSize="10" fontWeight="800" fontFamily="sans-serif">{t.toUpperCase()}</text>
              <text x={x+54} y="96" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="8" fontFamily="sans-serif">{descs[i]}</text>
            </g>)
          })}
          <text x="480" y="260" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">Each area requires documented processes, technical implementation, and audit evidence. Policies alone will not pass certification.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#controller-role">What Makes the Controller Role Distinct</a>
            <a href="#legal-basis">Legal Basis Documentation</a>
            <a href="#ropa">Record of Processing Activities</a>
            <a href="#consent">Consent Management</a>
            <a href="#privacy-notices">Privacy Notices</a>
            <a href="#data-rights">Data Subject Rights</a>
            <a href="#minimisation">Data Minimisation</a>
            <a href="#retention">Retention and Deletion</a>
            <a href="#dpia">Data Protection Impact Assessments</a>
            <a href="#processor-management">Managing Processors</a>
            <a href="#privacy-by-design">Privacy by Design</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(0, 129, 242,0.3)',paddingLeft:'1.2rem'}}>If your organisation decides what personal data to collect, why it is collected, and how it is used, you are a <strong>PII controller under ISO 27701</strong>. The defining characteristic of a controller is accountability - you made the decisions that created the privacy obligations, so you are accountable to individuals and regulators alike. ISO 27701 Annex B translates that accountability into specific operational controls.</p>

          <section id="controller-role">
            <h2>What Makes the Controller Role <em>Distinct</em></h2>
            <p>As a controller, you made the fundamental decisions - what data to collect, for what purpose, under which legal basis, with whom to share it. Annex B controls exist because of these decisions. Processor controls (Annex C) do not include legal basis documentation, consent management, or privacy notices - because processors do not make those decisions.</p>
          </section>

          <section id="legal-basis">
            <h2>Establishing and Documenting <em>the Legal Basis</em></h2>
            <p>Every processing activity in your RoPA must have a documented legal basis drawn from the applicable regulation. Where legitimate interests is used under GDPR, a Legitimate Interests Assessment (LIA) must be documented.</p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>Common Gap</strong>
                <p>Many organisations complete their RoPA but leave the legal basis column as a formality, defaulting to "legitimate interests" without documentation. Auditors look for the reasoning, not just the label. For legitimate interests processing, the LIA is not optional - it is the evidence.</p>
              </div>
            </div>
          </section>

          <section id="ropa">
            <h2>The Record of Processing Activities - <em>Your Central Privacy Document</em></h2>
            <p>The RoPA is the most important single document a controller maintains. It is simultaneously a regulatory requirement, an audit artefact, a data governance tool, and the foundation on which most other privacy controls are built.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>RoPA Field</th><th>What to Document</th></tr></thead>
                <tbody>
                  {[['Processing Activity','Clear functional description - e.g. "Customer account registration and authentication"'],['Purpose','Specific stated reason. Not vague like "business purposes"'],['Legal Basis','Applicable basis under GDPR / DPDP, with LIA reference where needed'],['Data Subjects','Customers, employees, prospects, website visitors, etc.'],['Categories of PII','Specific types: name, email, IP address, payment details, health data'],['Recipients','Internal teams and external parties, including processors and cross-border transfers'],['Retention Period','How long, or the criteria for determining deletion/anonymisation'],['Security Measures','Reference to technical and organisational controls applied'],['Transfer Mechanism','For cross-border: adequacy, SCCs, BCRs, or other approved mechanism']].map(([f,d],i)=>(<tr key={i}><td>{f}</td><td>{d}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p>Assign a named RoPA owner and define update triggers: new product features, new vendors, changes to processing purposes, regulatory changes. Quarterly reviews are the minimum.</p>
          </section>

          <section id="consent">
            <h2>Consent Management - <em>The Full Lifecycle</em></h2>
            <p>Where consent is your legal basis, implement mechanisms covering: <strong>obtaining</strong> valid consent (no pre-ticked boxes, no bundled consent), <strong>recording</strong> what the user was told, when, how they consented, and which activities the consent covers, and <strong>withdrawal</strong> as easy as giving consent - tested and documented. For DPDP Act compliance, consent notices must be available in the individual preferred language.</p>
          </section>

          <section id="privacy-notices">
            <h2>Privacy Notices - <em>Transparency as Operational Obligation</em></h2>
            <p>Privacy notices must cover: controller identity and DPO contact, purposes and legal basis for each processing activity, legitimate interests pursued, categories of PII, recipients, international transfers, retention periods, individual rights, and right to lodge a complaint. Maintain version history with effective dates - any change to processing must be reflected in an updated notice.</p>
          </section>

          <section id="data-rights">
            <h2>Data Subject Rights - <em>Building Operational Processes</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Right</th><th>Process Must Cover</th><th>Audit Evidence</th></tr></thead>
                <tbody>
                  {[['Access','Intake, ID verification, retrieval across all systems','Request log, response record, data copy'],['Rectification','Verification of inaccuracy, update across all systems','Before/after record, confirmation sent'],['Erasure','Legal basis check, deletion across systems + processors','Deletion confirmation, processor notifications'],['Portability','Export in JSON/CSV, delivery to individual or nominated controller','Export file, delivery confirmation'],['Nomination (DPDP)','Nomination form, ID verification, activation on death/incapacity','Nomination register, process documentation']].map(([r,p,e],i)=>(<tr key={i}><td>{r}</td><td>{p}</td><td>{e}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p>GDPR requires response within one calendar month. DPDP timelines will be specified in rules - build for 30 days as the safe default. Every request must be logged with date received, actions taken, and date of response.</p>
          </section>

          <section id="minimisation">
            <h2>Data Minimisation and <em>Purpose Limitation</em></h2>
            <p>Every data field collected must have a documented justification. Forms, APIs, and product onboarding flows must be reviewed. Analytics and logging configurations must be audited. Personal data collected for one purpose must not be used for a different purpose without fresh legal basis and, where required, fresh consent.</p>
          </section>

          <section id="retention">
            <h2>Retention Schedules and <em>Secure Deletion</em></h2>
            <p>Define retention periods at the category level. Each period must be justified by reference to the processing purpose, legal retention obligations (tax records, employment, financial), and minimum time needed. Technical enforcement is expected - automated deletion jobs, data lifecycle policies, or documented manual review with execution evidence. Soft deletes that flag records as inactive are not compliant.</p>
          </section>

          <section id="dpia">
            <h2>Data Protection Impact Assessments - <em>DPIAs</em></h2>
            <p>For high-risk processing activities, a DPIA must be conducted before processing begins. Required scenarios include: systematic profiling, large-scale special category data, systematic monitoring of public areas, and new technologies with novel privacy risks. A DPIA must contain: description of the processing, necessity and proportionality assessment, risk assessment, and mitigation measures. DPIAs must be reviewed when processing changes materially.</p>
          </section>

          <section id="processor-management">
            <h2>Managing Third-Party Processors - <em>The Accountability Chain</em></h2>
            <p>Before engaging a processor, conduct privacy due diligence - review certifications, sub-processor notification processes, breach notification procedures, and end-of-contract data handling. A Data Processing Agreement (DPA) must be in place with every processor specifying: subject matter, duration, data types, controller rights, processor instructions, confidentiality, sub-processor obligations, and data return/destruction at contract end. Maintain a processor register with last security review date.</p>
          </section>

          <section id="privacy-by-design">
            <h2>Privacy by Design - <em>Embedding Controls at Product Level</em></h2>
            <p>New features undergo a privacy review during design - not at launch. Privacy controls are documented in feature specifications. Default settings are privacy-protective. Unnecessary fields are eliminated at design time. Access to personal data is restricted by role. Auditors expect: privacy review checklists for new features, DPIA records for high-risk features, and product specs demonstrating minimisation decisions were made at design time.</p>
          </section>

          <div className="cta-banner">
            <h3>Need ISO 27701 Implementation Support?</h3>
            <p>SecComply helps SaaS, FinTech, and healthcare organisations implement ISO 27701 - from gap assessment to certification audit, with pre-built control libraries and evidence collection.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free ISO 27701 Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/iso-27701-for-data-controllers" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/iso-27701-for-data-controllers&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the most important document a controller maintains under ISO 27701?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The Record of Processing Activities (RoPA). It is simultaneously a regulatory requirement, audit artefact, data governance tool, and the foundation for most other privacy controls. It must document every processing activity with its purpose, legal basis, data categories, retention periods, recipients, and security measures.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can controllers satisfy ISO 27701 with policies alone?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. Every control area requires three things: documented policies, technical implementation, and evidence that both are working in practice. A comprehensive policy library with no operational evidence will not pass a Stage 2 certification audit.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How often should a controller update their RoPA?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Quarterly reviews are the minimum. For fast-moving SaaS organisations, monthly or sprint-level reviews are more appropriate. Define triggers that require updates: new product features, new vendors, changes to processing purposes, organisational changes, and regulatory changes.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the difference between Annex B and Annex C in ISO 27701?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Annex B contains controller-specific controls: legal basis documentation, consent management, privacy notices, data subject rights processes, DPIAs, and purpose limitation. Annex C contains processor-specific controls: acting on controller instructions, sub-processor management, breach notification to controllers, and assisting with data subject rights requests.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does ISO 27701 require Data Protection Impact Assessments for every processing activity?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. DPIAs are required only for processing activities likely to result in high risk to individuals. This includes systematic profiling, large-scale special category data processing, systematic monitoring of public areas, and new technologies with novel privacy risks. However, maintaining a defined DPIA process is required for all controllers - the capability must exist even if not every activity triggers a full DPIA.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#controller-role" className="toc-link">Controller Role</a></li>
              <li><a href="#legal-basis" className="toc-link">Legal Basis</a></li>
              <li><a href="#ropa" className="toc-link">RoPA</a></li>
              <li><a href="#consent" className="toc-link">Consent</a></li>
              <li><a href="#privacy-notices" className="toc-link">Privacy Notices</a></li>
              <li><a href="#data-rights" className="toc-link">Data Subject Rights</a></li>
              <li><a href="#minimisation" className="toc-link">Minimisation</a></li>
              <li><a href="#retention" className="toc-link">Retention</a></li>
              <li><a href="#dpia" className="toc-link">DPIAs</a></li>
              <li><a href="#processor-management" className="toc-link">Processor Management</a></li>
              <li><a href="#privacy-by-design" className="toc-link">Privacy by Design</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 ISO 27701 Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27701-explained">ISO 27701 Explained</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp">ISO 27701 vs GDPR vs DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/who-needs-iso-27701">Who Needs ISO 27701</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-for-data-controllers">▶ ISO 27701 for Controllers</a></li>
              <li><a href="https://seccomply.net/resources/blog/building-a-pims-iso-27701">Building a PIMS</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27701</span><span className="tag">Data Controller</span><span className="tag">Annex B</span><span className="tag">RoPA</span><span className="tag">Consent</span><span className="tag">DPIA</span><span className="tag">Privacy by Design</span><span className="tag">Audit Evidence</span></div>
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
