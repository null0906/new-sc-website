import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function EightRightsDataPrincipals() {
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
        <title>8 Rights of Data Principals Under the DPDP Act - And How Your Product Must Support Them | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="The DPDP Act grants 8 enforceable rights to Data Principals. Failing to operationalise them in your product exposes your organisation to penalties up to ₹250 crore. Here is what each right requires in practice." />
        <meta name="keywords" content="8 rights data principals DPDP Act, right to access DPDP, right to erasure India, right to nominate DPDP, data portability India, DPDP Act penalties, grievance redressal DPDP, consent withdrawal India" />
        <meta property="og:title" content="8 Rights of Data Principals Under the DPDP Act - And How Your Product Must Support Them" />
        <meta property="og:description" content="The DPDP Act grants 8 enforceable rights to Data Principals. Failing to operationalise them in your product exposes your organisation to penalties up to ₹250 crore. Here is what each right requires in practice." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"8 Rights of Data Principals Under the DPDP Act","description":"The DPDP Act grants 8 enforceable rights to Data Principals. Failing to operationalise them exposes your organisation to penalties up to Rs 250 crore.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply Technologies"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/assets/images/logo.png"}},"datePublished":"2026-04-01","dateModified":"2026-04-01","mainEntityOfPage":"https://seccomply.net/resources/blog/8-rights-data-principals-dpdp","articleSection":"DPDP Act"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":3,"name":"8 Rights DPDP","item":"https://seccomply.net/resources/blog/8-rights-data-principals-dpdp"}]}]}) }} />
      </Head>

      <style jsx global>{`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,var(--accent),var(--accent-light));z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgb(var(--accent-rgb) / .1);color:var(--cy);border:1px solid rgb(var(--accent-rgb) / .25)}
    .badge-bl{background:rgb(var(--purple-rgb) / .1);color:var(--purple);border:1px solid rgb(var(--purple-rgb) / .25)}
    .badge-gr{background:rgb(var(--green-rgb) / .1);color:var(--gr);border:1px solid rgb(var(--green-rgb) / .25)}
    .badge-am{background:rgb(var(--yellow-rgb) / .1);color:var(--am);border:1px solid rgb(var(--yellow-rgb) / .25)}
    .hero-h1{font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .hero-h1 em{font-style:italic;color:var(--cy)}
    .hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-light));display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgb(var(--accent-rgb) / .3)}
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
    .co-key{background:rgb(var(--accent-rgb) / .06);border:1px solid rgb(var(--accent-rgb) / .2)}
    .co-warn{background:rgb(var(--yellow-rgb) / .06);border:1px solid rgb(var(--yellow-rgb) / .2)}
    .co-info{background:rgb(var(--purple-rgb) / .07);border:1px solid rgb(var(--purple-rgb) / .2)}
    .co-danger{background:rgb(var(--red-rgb) / .06);border:1px solid rgb(var(--red-rgb) / .2)}
    .co-gr{background:rgb(var(--green-rgb) / .05);border:1px solid rgb(var(--green-rgb) / .2)}
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
    .series-nav{display:flex;align-items:center;gap:.5rem;padding:.7rem 1.1rem;background:rgb(var(--accent-rgb) / .05);border:1px solid rgb(var(--accent-rgb) / .15);border-radius:10px;margin-bottom:2rem;font-size:.8rem;flex-wrap:wrap}
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
    .cta-banner{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--accent-rgb) / .03));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
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
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgb(var(--accent-rgb) / .07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy)}
    .sb-cta{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--accent-rgb) / .03));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-size:.98rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgb(var(--accent-rgb) / .4);z-index:50}
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
        <span style={{color:'var(--tb)'}}>8 Rights of Data Principals Under the DP...</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🇮🇳 DPDP Act 2023</span>
          <span className="badge badge-bl">📋 Data Privacy</span>
          <span className="badge badge-am">🏢 India Compliance</span>
          <span className="badge badge-gr">Series · Part 2 of 6</span>
        </div>
        <h1 className="hero-h1">8 Rights of Data Principals Under the DPDP Act - <em>And How Your Product Must Support Them</em></h1>
        <p className="hero-sub">The DPDP Act is not just about what organisations cannot do with personal data - it is equally about what individuals can demand. These 8 rights are legal requirements that must be operationalised in your product, not PR copy for your privacy page.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🔐 Security Engineer, SecComply Technologies</span><span className="dot">·</span><span id="read-time">📖 9 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=480&fit=crop" alt="8 rights data principals DPDP Act India compliance" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">Failing to operationalise any of these 8 rights exposes your organisation to penalties of up to ₹250 crore per violation from the Data Protection Board of India.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
          <defs><pattern id="pg2" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgb(var(--accent-rgb) / 0.04)"/></pattern></defs>
          <rect width="960" height="300" fill="url(#pg2)"/>
          <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">8 Rights of Data Principals - DPDP Act 2023</text>
          
          <rect x="30" y="35" width="105" height="80" rx="10" fill="var(--bg-secondary)" stroke="#818cf825" strokeWidth="1.5"/>
          <rect x="30" y="35" width="105" height="3" rx="1.5" fill="var(--purple)"/>
          <text x="82" y="62" textAnchor="middle" fill="var(--purple)" fontSize="18" fontWeight="800" fontFamily="sans-serif">1</text>
          <text x="82" y="80" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Access</text>
          <text x="82" y="95" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">Section 11</text>
          <rect x="148" y="35" width="105" height="80" rx="10" fill="var(--bg-secondary)" stroke="rgb(var(--accent-rgb) / 0.145)" strokeWidth="1.5"/>
          <rect x="148" y="35" width="105" height="3" rx="1.5" fill="var(--accent)"/>
          <text x="200" y="62" textAnchor="middle" fill="var(--accent)" fontSize="18" fontWeight="800" fontFamily="sans-serif">2</text>
          <text x="200" y="80" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Correction & Erasure</text>
          <text x="200" y="95" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">Section 12</text>
          <rect x="266" y="35" width="105" height="80" rx="10" fill="var(--bg-secondary)" stroke="#06d6a025" strokeWidth="1.5"/>
          <rect x="266" y="35" width="105" height="3" rx="1.5" fill="var(--green)"/>
          <text x="318" y="62" textAnchor="middle" fill="var(--green)" fontSize="18" fontWeight="800" fontFamily="sans-serif">3</text>
          <text x="318" y="80" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Grievance Redressal</text>
          <text x="318" y="95" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">Section 13</text>
          <rect x="384" y="35" width="105" height="80" rx="10" fill="var(--bg-secondary)" stroke="#ffb70325" strokeWidth="1.5"/>
          <rect x="384" y="35" width="105" height="3" rx="1.5" fill="var(--yellow)"/>
          <text x="436" y="62" textAnchor="middle" fill="var(--yellow)" fontSize="18" fontWeight="800" fontFamily="sans-serif">4</text>
          <text x="436" y="80" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Nominate</text>
          <text x="436" y="95" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">Section 14</text>
          <rect x="502" y="35" width="105" height="80" rx="10" fill="var(--bg-secondary)" stroke="#ff4d6d25" strokeWidth="1.5"/>
          <rect x="502" y="35" width="105" height="3" rx="1.5" fill="var(--red)"/>
          <text x="554" y="62" textAnchor="middle" fill="var(--red)" fontSize="18" fontWeight="800" fontFamily="sans-serif">5</text>
          <text x="554" y="80" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Withdraw Consent</text>
          <text x="554" y="95" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">Section 6</text>
          <rect x="620" y="35" width="105" height="80" rx="10" fill="var(--bg-secondary)" stroke="#818cf825" strokeWidth="1.5"/>
          <rect x="620" y="35" width="105" height="3" rx="1.5" fill="var(--purple)"/>
          <text x="672" y="62" textAnchor="middle" fill="var(--purple)" fontSize="18" fontWeight="800" fontFamily="sans-serif">6</text>
          <text x="672" y="80" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Automated Decisions</text>
          <text x="672" y="95" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">Implicit (§6)</text>
          <rect x="738" y="35" width="105" height="80" rx="10" fill="var(--bg-secondary)" stroke="rgb(var(--accent-rgb) / 0.145)" strokeWidth="1.5"/>
          <rect x="738" y="35" width="105" height="3" rx="1.5" fill="var(--accent)"/>
          <text x="790" y="62" textAnchor="middle" fill="var(--accent)" fontSize="18" fontWeight="800" fontFamily="sans-serif">7</text>
          <text x="790" y="80" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Data Portability</text>
          <text x="790" y="95" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">Anticipated via Rules</text>
          <rect x="856" y="35" width="100" height="80" rx="10" fill="var(--bg-secondary)" stroke="#06d6a025" strokeWidth="1.5"/>
          <rect x="856" y="35" width="100" height="3" rx="1.5" fill="var(--green)"/>
          <text x="906" y="62" textAnchor="middle" fill="var(--green)" fontSize="18" fontWeight="800" fontFamily="sans-serif">8</text>
          <text x="906" y="80" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Breach Notification</text>
          <text x="906" y="95" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">Section 8(6)</text>
          <rect x="30" y="145" width="900" height="130" rx="14" fill="#0d1c10" stroke="rgb(var(--red-rgb) / 0.15)" strokeWidth="1.5"/>
          <rect x="30" y="145" width="900" height="3" rx="1.5" fill="var(--red)"/>
          <text x="480" y="172" textAnchor="middle" fill="var(--red)" fontSize="11" fontWeight="800" fontFamily="sans-serif">PENALTY RISK PER UNADDRESSED RIGHT</text>
          <text x="480" y="200" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="28" fontWeight="800" fontFamily="sans-serif">Up to ₹250 Crore</text>
          <text x="480" y="222" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="11" fontFamily="sans-serif">per instance of failure to implement adequate security safeguards - Data Protection Board of India</text>
          <text x="480" y="255" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="9" fontFamily="sans-serif">Each unaddressed right is a potential grievance to the Board. With 8 rights to operationalise, the exposure compounds quickly.</text>
        </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#right-1">Right to Access</a>
            <a href="#right-2">Right to Correction & Erasure</a>
            <a href="#right-3">Right to Grievance Redressal</a>
            <a href="#right-4">Right to Nominate</a>
            <a href="#right-5">Right to Withdraw Consent</a>
            <a href="#right-6">Right Against Automated Decisions</a>
            <a href="#right-7">Right to Data Portability</a>
            <a href="#right-8">Right to Breach Notification</a>
            <a href="#quick-reference">Quick Reference Table</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="series-nav anim">
            <span>📚 DPDP Act Series</span>
            <strong>Part 2: 8 Rights of Data Principals Under t</strong>
            <span>·</span>
            <a href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor" style={{color:"var(--cy)",textDecoration:"none"}}>← Part 1</a> · <a href="https://seccomply.net/resources/blog/consent-under-dpdp-act" style={{color:"var(--cy)",textDecoration:"none"}}>Part 3 →</a>
          </div>

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgb(var(--accent-rgb) / 0.3)',paddingLeft:'1.2rem'}}>The DPDP Act, 2023 is not just about what organisations <strong>cannot</strong> do with personal data. It is equally about what individuals <strong>can demand</strong>. The Act enshrines 8 rights for Data Principals - and the obligation falls squarely on Data Fiduciaries to honour them. If your product collects, stores, or processes personal data of Indian users, these rights are not optional features on your product roadmap. They are legal requirements.</p>

          <section id="right-1">
            <h2>Right 1 - <em>Right to Access Information About Processing (Section 11)</em></h2>
            <p>A Data Principal has the right to obtain a summary of what personal data the Fiduciary holds about them, the processing activities carried out, and the identities of all Data Processors and other Fiduciaries with whom their data has been shared.</p>
            <h3>What your product must do</h3>
            <ul>
              <li>Provide an authenticated, self-service <strong>"My Data" dashboard</strong> or portal</li>
              <li>Generate a structured summary of data categories collected and how they are used</li>
              <li>List third-party processors and integrations that have accessed the user data</li>
              <li>Respond to access requests within a reasonable timeframe (Rules will specify exact timelines)</li>
            </ul>
            <div className="callout co-info">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>SecComply Perspective</strong>
                <p>This right drives the need for a robust data inventory underneath your product. Without knowing what you hold, you cannot tell users what you hold. Build your data mapping before you build your Data Subject Access Request workflow.</p>
              </div>
            </div>
          </section>

          <section id="right-2">
            <h2>Right 2 - <em>Right to Correction and Erasure (Section 12)</em></h2>
            <p>A Data Principal can request correction of inaccurate or misleading personal data, completion of incomplete data, and erasure of personal data that is no longer necessary for the purpose it was collected.</p>
            <h3>What your product must do</h3>
            <ul>
              <li>Build correction workflows - either self-service or request-based with documented review and update process</li>
              <li>Implement erasure workflows that delete or anonymise data from primary databases and cascade deletion to backup systems</li>
              <li>Generate audit logs confirming erasure actions</li>
              <li>Maintain records of all correction and erasure requests and their resolution</li>
            </ul>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>Important Caveat</strong>
                <p>Erasure can be declined or deferred when retention is required by applicable law - GST records, RBI mandates, SEBI requirements. Your product must document and communicate this to the user clearly at the point of rejection.</p>
              </div>
            </div>
          </section>

          <section id="right-3">
            <h2>Right 3 - <em>Right to Grievance Redressal (Section 13)</em></h2>
            <p>Every Data Principal has the right to have their grievances related to personal data processing addressed. If unsatisfied with the Fiduciary response, they can escalate to the <strong>Data Protection Board of India (DPBI)</strong>.</p>
            <h3>What your product must do</h3>
            <ul>
              <li>Designate and publish a <strong>Grievance Officer</strong> - name, contact details, and response timelines must be publicly accessible in your privacy notice</li>
              <li>Maintain a grievance ticketing system that acknowledges receipt, provides status updates, and resolves within Rules-defined timelines</li>
              <li>Keep records of all grievances and resolutions for potential Board audits</li>
            </ul>
            <p>Avoid routing data-related complaints through a generic customer support queue - they need a dedicated, documented track that can be presented during a Board inquiry.</p>
          </section>

          <section id="right-4">
            <h2>Right 4 - <em>Right to Nominate (Section 14)</em></h2>
            <p>A Data Principal can <strong>nominate another individual</strong> to exercise their data rights in the event of their death or incapacity. This is a uniquely thoughtful provision - and a compliance requirement that most product teams overlook entirely during initial DPDP planning.</p>
            <h3>What your product must do</h3>
            <ul>
              <li>Provide a nomination mechanism in user account settings</li>
              <li>Allow users to specify a nominee identity (name, contact, relationship)</li>
              <li>Design verification workflows to authenticate nominees when they invoke rights on behalf of a deceased or incapacitated user</li>
            </ul>
          </section>

          <section id="right-5">
            <h2>Right 5 - <em>Right to Withdraw Consent (Section 6)</em></h2>
            <p>Where processing is based on consent, the Data Principal has the right to <strong>withdraw that consent at any time</strong>. Withdrawal must be as easy as giving consent - this is the "as easy as giving" test.</p>
            <h3>What your product must do</h3>
            <ul>
              <li>Provide a <strong>one-click or equivalent consent withdrawal mechanism</strong> in account or privacy settings</li>
              <li>Stop processing the relevant data upon withdrawal (subject to legitimate retention obligations)</li>
              <li>Trigger downstream notifications to processors and third-party integrators</li>
              <li>Not penalise the user for withdrawal by blocking access to unrelated features</li>
            </ul>
            <div className="callout co-key">
              <span className="co-icon">🔑</span>
              <div className="co-body">
                <strong>The "As Easy As Giving" Test</strong>
                <p>If consent was given via a single toggle at signup, withdrawing it cannot require a 5-step email process. Your UX must pass this test. Audit your withdrawal flow against your consent capture flow before your next compliance review.</p>
              </div>
            </div>
          </section>

          <section id="right-6">
            <h2>Right 6 - <em>Right Against Automated Decision-Making (Implicit)</em></h2>
            <p>While the DPDP Act does not name this right as prominently as GDPR Article 22, Section 6(1) and related provisions implicitly support a Data Principal ability to contest decisions that materially affect them - particularly where automated profiling or scoring is involved.</p>
            <h3>What your product must do</h3>
            <ul>
              <li>If your product uses automated decision-making (credit scoring, insurance risk, job screening), implement <strong>human review pathways</strong></li>
              <li>Disclose automated decision logic in your privacy notice in plain language</li>
              <li>Provide Data Principals a mechanism to contest automated outcomes</li>
            </ul>
          </section>

          <section id="right-7">
            <h2>Right 7 - <em>Right to Data Portability (Anticipated via Rules)</em></h2>
            <p>While not explicitly codified at GDPR Article 20 level, the framework anticipates portability rights - particularly for Significant Data Fiduciaries. Data Principals may be granted the right to receive their data in a structured, machine-readable format.</p>
            <h3>What your product must do proactively</h3>
            <ul>
              <li>Design data export functionality allowing users to download their data in <strong>JSON, CSV, or XML</strong> format</li>
              <li>Ensure exported data is complete, structured, and human-readable</li>
              <li>Prepare APIs or export mechanisms for data transfer to third-party platforms</li>
            </ul>
          </section>

          <section id="right-8">
            <h2>Right 8 - <em>Right to Information About Breach (Section 8(6))</em></h2>
            <p>If a personal data breach occurs and is likely to affect a Data Principal, the Data Fiduciary must <strong>notify the affected individual</strong> - in addition to notifying the Data Protection Board.</p>
            <h3>What your product must do</h3>
            <ul>
              <li>Maintain a breach detection and response workflow that identifies affected Data Principals</li>
              <li>Draft breach notification templates in clear, plain language - free of technical jargon</li>
              <li>Include in every notification: nature of the breach, data affected, likely impact, remediation steps taken, and Grievance Officer contact</li>
              <li>Deliver notifications as soon as practicable after a breach is confirmed</li>
              <li>Log all notifications sent for Board audit purposes</li>
            </ul>
          </section>

          <section id="quick-reference">
            <h2>Quick Reference - <em>All 8 Rights Mapped to Product Features</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>#</th><th>Right</th><th>Trigger</th><th>Product Feature Required</th></tr></thead>
                <tbody>
                  {[['1','Access','User request','My Data dashboard, data summary'],['2','Correction & Erasure','User request','Edit/delete workflows, cascade deletion'],['3','Grievance Redressal','Complaint','Grievance Officer, ticketing system'],['4','Nomination','User-initiated','Nominee settings, validation workflow'],['5','Withdraw Consent','User-initiated','Consent management UI, one-click withdrawal'],['6','Automated Decisions','User-initiated','Human review pathway, explainability'],['7','Portability','User request','Data export (JSON/CSV/XML)'],['8','Breach Notification','Fiduciary-triggered','Incident response, notification pipeline']].map(([n,r,t,f],i)=>(<tr key={i}><td>{n}</td><td>{r}</td><td style={{color:'var(--tm)'}}>{t}</td><td style={{color:'var(--tm)'}}>{f}</td></tr>))}
                </tbody>
              </table>
            </div>
            <p>Rights under the DPDP Act are not a PR story for your privacy page. They are functional requirements. If a user cannot exercise them with minimal friction, you are non-compliant - regardless of what your privacy policy says. For the full picture on <a href="https://seccomply.net/resources/blog/consent-under-dpdp-act" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>how consent works under the DPDP Act, read Part 3 of this series</a>.</p>
          </section>

          <div className="cta-banner">
            <h3>Ready to Build DPDP Compliance?</h3>
            <p>SecComply delivers structured DPDP compliance programmes for Indian startups and enterprises - from gap assessment to audit-ready documentation.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free DPDP Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" id="sl" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/8-rights-data-principals-dpdp" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" id="st" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/8-rights-data-principals-dpdp&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What are the 8 rights of Data Principals under the DPDP Act?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The 8 rights are: (1) Right to Access information about processing, (2) Right to Correction and Erasure, (3) Right to Grievance Redressal, (4) Right to Nominate, (5) Right to Withdraw Consent, (6) Right against Automated Decision-Making, (7) Right to Data Portability, and (8) Right to Information About Breach.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What penalties apply for failing to support Data Principal rights?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The Data Protection Board can impose penalties of up to ₹250 crore per instance of failure to implement adequate security safeguards. Each unaddressed right is a potential grievance to the Board, and the exposure compounds across multiple rights.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is the right to data portability explicitly mentioned in the DPDP Act?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Not at the level of detail seen in GDPR Article 20. The framework anticipates portability rights, particularly for Significant Data Fiduciaries, but the specific requirements will be detailed in the Rules notified by MeitY. Building export functionality proactively positions you ahead of these requirements.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How quickly must a Data Fiduciary respond to a data access request?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The Act specifies that requests must be responded to within a reasonable timeframe. Exact timelines will be specified in the Rules. In the interim, best practice is to acknowledge within 48-72 hours and resolve within 30 days - consistent with comparable international standards.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can a Data Fiduciary refuse an erasure request?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes, in specific circumstances. Erasure can be declined or deferred when retention is required by applicable law - for example, GST records (7 years), RBI-mandated KYC records, or SEBI-mandated transaction logs. The refusal must be communicated to the user clearly, with the legal basis for continued retention documented.</p></div>
            </div>

          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#right-1" className="toc-link">Right to Access</a></li>
              <li><a href="#right-2" className="toc-link">Correction & Erasure</a></li>
              <li><a href="#right-3" className="toc-link">Grievance Redressal</a></li>
              <li><a href="#right-4" className="toc-link">Right to Nominate</a></li>
              <li><a href="#right-5" className="toc-link">Withdraw Consent</a></li>
              <li><a href="#right-6" className="toc-link">Automated Decisions</a></li>
              <li><a href="#right-7" className="toc-link">Data Portability</a></li>
              <li><a href="#right-8" className="toc-link">Breach Notification</a></li>
              <li><a href="#quick-reference" className="toc-link">Quick Reference</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 DPDP Act Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor">Part 1: Roles Defined</a></li>
              <li><a href="https://seccomply.net/resources/blog/8-rights-data-principals-dpdp">▶ Part 2: 8 Rights of Data Principals</a></li>
              <li><a href="https://seccomply.net/resources/blog/consent-under-dpdp-act">Part 3: Consent Under DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/significant-data-fiduciary-sdf">Part 4: Significant Data Fiduciary</a></li>
              <li><a href="https://seccomply.net/resources/blog/data-protection-officer-dpo-dpdp">Part 5: DPO Under DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/dpdp-applicability-quiz-walkthrough">Part 6: Applicability Quiz</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">DPDP Act</span><span className="tag">Data Principal Rights</span><span className="tag">Product Compliance</span><span className="tag">India Privacy</span><span className="tag">Breach Notification</span><span className="tag">Consent</span></div>
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
