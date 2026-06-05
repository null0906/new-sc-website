import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'
export default function GDPRDataSubjectRights() {
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
  return (<Layout><Head><title>Data Subject Rights Under GDPR - What Users Can Ask You to Do | SecComply</title><link rel="icon" href="/favicon.ico" /><link rel="stylesheet" href="/assets/css/resource-pages.css" /><meta name="description" content="The eight enforceable GDPR rights - access, erasure, rectification, portability, restriction, objection, automated decisions, and information. Where each breaks operationally and how to build the process." /><meta name="keywords" content="GDPR data subject rights, right of access GDPR, right to erasure GDPR, right to portability, SAR subject access request, GDPR 30 days, right to object GDPR, automated decision making GDPR" /><meta property="og:title" content="Data Subject Rights Under GDPR - What Users Can Ask You to Do" /><meta property="og:description" content="The eight enforceable GDPR rights - access, erasure, rectification, portability, restriction, objection, automated decisions, and information. Where each breaks operationally and how to build the process." /><meta property="og:type" content="article" /><meta property="og:url" content="https://seccomply.net/resources/blog/gdpr-data-subject-rights" /><meta property="article:published_time" content="2026-04-01" /><meta property="article:author" content="Gauri Khatate" /><link rel="canonical" href="https://seccomply.net/resources/blog/gdpr-data-subject-rights" /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Data Subject Rights Under GDPR - What Users Can Ask You to Do","author":{"@type":"Person","name":"Gauri Khatate"},"publisher":{"@type":"Organization","name":"SecComply"},"datePublished":"2026-04-20","mainEntityOfPage":"https://seccomply.net/resources/blog/gdpr-data-subject-rights"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"Data Subject Rights","item":"https://seccomply.net/resources/blog/gdpr-data-subject-rights"}]}]}) }} /></Head>
      <style jsx global>{`
    :root{--cy:#FF6000;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(255, 96, 0,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#FF6000,#FF8A3D);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(255, 96, 0,.1);color:var(--cy);border:1px solid rgba(255, 96, 0,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
    .badge-am{background:rgba(255,183,3,.1);color:var(--am);border:1px solid rgba(255,183,3,.25)}
    .hero-h1{font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .hero-h1 em{font-style:italic;color:var(--cy)}
    .hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#FF6000,#FF8A3D);display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(255, 96, 0,.3)}
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
    .co-key{background:rgba(255, 96, 0,.06);border:1px solid rgba(255, 96, 0,.2)}
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
    .series-nav{display:flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;background:rgba(255, 96, 0,.05);border:1px solid rgba(255, 96, 0,.15);border-radius:10px;margin-bottom:2rem;font-size:.8rem;flex-wrap:wrap}
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
    .cta-banner{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(255, 96, 0,.03));border:1px solid rgba(255, 96, 0,.25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
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
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgba(255, 96, 0,.07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy)}
    .sb-cta{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(255, 96, 0,.03));border:1px solid rgba(255, 96, 0,.25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-size:.98rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(255, 96, 0,.4);z-index:50}
    #btt.vis{display:flex}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:900px){.tier-grid{grid-template-columns:1fr 1fr}.scope-grid{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}.tier-grid{grid-template-columns:1fr}}
`}</style><div id="reading-progress"></div>
      <div className="breadcrumb"><a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span><a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span><a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span><span style={{color:'var(--tb)'}}>Data Subject Rights Under GDPR...</span></div>
      <div className="hero-wrap"><div className="badges"><span className="badge badge-cy">🇪🇺 GDPR</span><span className="badge badge-bl">📋 Data Privacy</span><span className="badge badge-gr">🚀 Startup Guide</span></div><h1 className="hero-h1">Data Subject Rights Under GDPR - <em>What Users Can Ask You to Do</em></h1><p className="hero-sub">Every GDPR programme treats user rights as a box to tick. In practice, they are eight different operational flows - each with its own deadlines, edge cases, and ways to get sued. The gap between having a privacy policy and actually handling a deletion request in 30 days is where most startups discover their programme was theoretical.</p>
        <div className="author-strip"><div className="avatar">GK</div><div className="author-info"><div className="aname">Gauri Khatate</div><div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 5 min read</span></div><div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div></div></div>
        <div className="img-wrap"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=480&fit=crop" alt="GDPR data subject rights eight rights operational flows" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} /></div><p className="img-cap">User rights are the part of GDPR that actually touches your product. A company can have an immaculate privacy policy and still fail its first supervisory enquiry because it could not produce a 30-day audit trail.</p>
        <div className="img-wrap"><svg viewBox="0 0 960 240" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}><defs><pattern id="pgds" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(255, 96, 0,0.04)"/></pattern></defs><rect width="960" height="240" fill="url(#pgds)"/><text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">8 Enforceable Rights Under GDPR - Articles 15-22</text>{["Informed","Access","Rectification","Erasure","Restrict","Portability","Object","Automated"].map((t,i) => {const cols = ['#FF6000','#818cf8','#06d6a0','#ff4d6d','#ffb703','#FF6000','#818cf8','#06d6a0'];const x = 30 + i*116;return (<g key={i}><rect x={x} y="38" width="108" height="140" rx="10" fill="#091826" stroke={cols[i]+"22"} strokeWidth="1.5"/><rect x={x} y="38" width="108" height="3" rx="1.5" fill={cols[i]}/><text x={x+54} y="72" textAnchor="middle" fill={cols[i]} fontSize="18" fontWeight="800" fontFamily="sans-serif">{i+1}</text><text x={x+54} y="95" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="9" fontWeight="700" fontFamily="sans-serif">{t}</text><text x={x+54} y="115" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8" fontFamily="sans-serif">Art. {[13,15,16,17,18,20,21,22][i]}</text></g>)})}<text x="480" y="210" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="10" fontWeight="700" fontFamily="sans-serif">30-day response deadline · Free of charge · Enforceable by supervisory authorities</text></svg></div>
        <div className="toc-box"><div className="toc-lbl">In This Article</div><div className="toc-grid">
            <a href="#eight-rights">The Eight Rights</a>
            <a href="#three-first">The Three You Will Meet First</a>
            <a href="#where-breaks">Where Each Right Breaks</a>
            <a href="#building-process">Building the Process</a>
            <a href="#faq">FAQ</a>
        </div></div></div>
      <div className="blog-layout"><article className="art">
          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(255, 96, 0,0.3)',paddingLeft:'1.2rem'}}>A user emailed a SaaS support inbox: "Under GDPR Article 15, please provide a copy of all personal data you hold on me." The support team logged it as a feature request and let it sit for 19 days. By the time the DPO saw it, they had 11 days to find that user data across the production database, CRM, data warehouse, email marketing tool, analytics platform, support tool, and error-monitoring system. Three weeks later, the user filed a complaint. <strong>Not because the company was hiding anything - because the response was incomplete and three days late.</strong></p>
          <section id="eight-rights"><h2>The Eight Rights - <em>Under GDPR</em></h2><ul><li><strong>Right to be Informed (Arts. 13-14):</strong> Users must know what data you collect, why, and on what basis - before you collect it.</li><li><strong>Right of Access (Art. 15):</strong> Users can request a copy of all personal data you hold on them.</li><li><strong>Right to Rectification (Art. 16):</strong> Users can require you to correct inaccurate or incomplete data.</li><li><strong>Right to Erasure (Art. 17):</strong> Users can require deletion in most cases - the "right to be forgotten."</li><li><strong>Right to Restrict Processing (Art. 18):</strong> Users can require you to pause processing without deleting.</li><li><strong>Right to Data Portability (Art. 20):</strong> Users can request their data in a machine-readable format.</li><li><strong>Right to Object (Art. 21):</strong> Users can object to processing - absolute for marketing, conditional for legitimate interests.</li><li><strong>Rights in Automated Decision-Making (Art. 22):</strong> Users can demand human review of purely automated decisions.</li></ul></section>
          <section id="three-first"><h2>The Three <em>You Will Meet First</em></h2><h3>Right of Access (Article 15)</h3><p>A user asks for everything you hold. The scope includes: production DB records, CRM entries, email-marketing lists, chatbot transcripts, analytics events, error traces, session replays, and derived data (scores, segments, tags). You must provide this in a commonly used electronic format within 30 days.</p><h3>Right to Erasure (Article 17)</h3><p>Delete from primary systems and propagate to every processor and sub-processor. You can retain for narrow reasons (legal obligation, defence of legal claims), but the burden is on you to justify retention.</p><h3>Right to Object (Article 21)</h3><p>For direct marketing - this is absolute, you must stop. For legitimate-interests processing, you can continue only if you show compelling grounds that override the user interests. Most companies cannot.</p></section>
          <section id="where-breaks"><h2>Where Each Right <em>Breaks</em></h2><div className="data-table-wrap"><table className="data-table"><thead><tr><th>Right</th><th>User Asks For</th><th>Deadline</th><th>Where It Usually Breaks</th></tr></thead><tbody>{[['Be Informed','Clear notice before collection','At collection','Outdated or misleading privacy notice'],['Access','Copy of all their data','30 days','Data scattered across 10+ tools'],['Rectification','Correction of inaccurate data','30 days','No propagation to downstream processors'],['Erasure','Deletion of their data','30 days','Backups, warehouses, vendor tools still retain it'],['Restrict','Pause processing without deletion','30 days','No technical "restrict" flag in production DB'],['Portability','Data in machine-readable format','30 days','No export function built into product'],['Object','Stop processing for marketing/LI','30 days','Marketing automation ignores the flag'],['Automated','Human review of automated decision','30 days','No override path built into the ML pipeline']].map(([r,u,d,w],i)=>(<tr key={i}><td>{r}</td><td>{u}</td><td style={{color:'var(--cy)',fontWeight:600}}>{d}</td><td style={{color:'#ff4d6d'}}>{w}</td></tr>))}</tbody></table></div></section>
          <section id="building-process"><h2>Building the Process - <em>What You Actually Need</em></h2><ul><li><strong>A single intake point:</strong> One email, one form, one place where rights requests land - not scattered across support tickets.</li><li><strong>Identity verification:</strong> Authenticate the requester without making the process so burdensome it itself breaches Article 12.</li><li><strong>An engineering playbook per right:</strong> Access is an export script with a PII inventory. Erasure is a purge script with processor propagation. Objection is a flag-based processing gate.</li><li><strong>30-day calendar enforcement:</strong> Day-of-receipt tracked, SLA alerted at day 20, escalated at day 25. Extensions require DPO approval.</li><li><strong>A record of each response:</strong> Evidence that you honoured the right - timestamps and what was delivered. Regulators ask for this first.</li></ul><p>User rights are the part of GDPR that actually touches your product. The companies that handle this well treat them as a product feature - with telemetry, SLAs, and on-call rotation. For the full comparison with India DPDP rights, see <a href="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>8 Rights of Data Principals Under DPDP</a>.</p></section>
          <div className="cta-banner"><h3>Not Sure Where You Stand on GDPR?</h3><p>SecComply maps your data flows, vendor risks, and compliance gaps - continuously, not just before an audit.</p><div className="cta-btns"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free GDPR Consultation →</a></div><div className="share-strip"><span className="share-lbl">Share:</span><a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/gdpr-data-subject-rights" target="_blank" rel="noopener">LinkedIn</a><a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/gdpr-data-subject-rights&via=seccomply" target="_blank" rel="noopener">X / Twitter</a><button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button></div></div>
          <section id="faq" className="faq-section"><h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item"><div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How long do I have to respond to a data subject rights request?</strong><span className="faq-ch">▾</span></div><div className="faq-a"><p>30 calendar days from receipt under GDPR Article 12. You can extend by a further two months for complex or numerous requests, but you must notify the user of the extension and the reason within the initial 30-day window. The clock starts on the day the request is received, regardless of which channel it arrives through.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can I charge users for exercising their rights?</strong><span className="faq-ch">▾</span></div><div className="faq-a"><p>No, in most cases. Rights requests must be fulfilled free of charge. You can charge a reasonable fee or refuse to act only if the request is 'manifestly unfounded or excessive' - for example, repetitive requests for the same data in a short period. The burden of proving the request is excessive is on you, not the user.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What happens if I cannot find all of a user data for an access request?</strong><span className="faq-ch">▾</span></div><div className="faq-a"><p>You must conduct a reasonable search across all systems where the data could exist - production databases, CRM, analytics, email marketing, support tools, error monitoring, backups, and data warehouses. If you cannot find data in a specific system, document the search you conducted. An incomplete response that fails to search known systems is a violation.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does the right to erasure apply to backups?</strong><span className="faq-ch">▾</span></div><div className="faq-a"><p>Yes, but with practical accommodations. You should delete from primary systems immediately and from backups within a reasonable timeframe - typically when the backup rotation cycle naturally overwrites the data, or within 30-90 days. Document your backup retention and deletion approach. Keeping data indefinitely in backups after a deletion request is a violation.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can a user object to all processing of their data?</strong><span className="faq-ch">▾</span></div><div className="faq-a"><p>Not universally. The right to object is absolute for direct marketing - you must stop immediately. For processing based on legitimate interests or public task, the user can object but you can continue if you demonstrate compelling legitimate grounds. For processing based on consent, the user simply withdraws consent rather than objecting. For contractual processing, the right to object does not apply.</p></div></div>
          </section></article>
        <aside className="sb"><div className="sb-card"><div className="sb-title">In This Article</div><ul className="sb-toc">
              <li><a href="#eight-rights" className="toc-link">Eight Rights</a></li>
              <li><a href="#three-first" className="toc-link">Three You Meet First</a></li>
              <li><a href="#where-breaks" className="toc-link">Where Each Breaks</a></li>
              <li><a href="#building-process" className="toc-link">Building the Process</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
          </ul></div><div className="sb-card"><div className="sb-title">🔗 GDPR Series</div><ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/gdpr-explained-startups">GDPR for Startups</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-self-assessment">GDPR Self-Assessment</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-counts-personal-data-gdpr">Personal Data Under GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/hidden-data-trails-gdpr">Hidden Data Trails</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-business-impact-beyond-fines">Business Impact Beyond Fines</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-controller-processor-sub-processor">Controller vs Processor</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-data-subject-rights">Data Subject Rights</a></li>
          </ul></div><div className="sb-card"><div className="sb-title">🏷️ Tags</div><div className="tag-cloud"><span className="tag">GDPR</span><span className="tag">Data Subject Rights</span><span className="tag">Right of Access</span><span className="tag">Right to Erasure</span><span className="tag">SAR</span><span className="tag">30 Days</span><span className="tag">Portability</span><span className="tag">Objection</span></div></div><div className="sb-cta"><h4>Need GDPR Help?</h4><p>From gap assessment to audit - we handle it all.</p><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a></div></aside></div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button></Layout>)
}
