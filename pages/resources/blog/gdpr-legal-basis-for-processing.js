import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function LegalBasisForProcessing() {
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
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Legal Basis for Processing - How to Justify Data Collection Under GDPR | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="GDPR Article 6 gives you exactly six lawful grounds for processing personal data - and the choice is per-purpose, not per-company. The six bases decoded, why legitimate interests is the most misused, why you cannot switch bases mid-flight, and the Meta €390M case that illustrates the cost." />
        <meta name="keywords" content="GDPR legal basis, GDPR Article 6, lawful basis for processing, legitimate interests GDPR, LIA legitimate interest assessment, consent vs contract GDPR, Meta €390M fine, RoPA legal basis, switching legal basis GDPR" />
        <meta property="og:title" content="Legal Basis for Processing - How to Justify Data Collection" />
        <meta property="og:description" content="The six GDPR Article 6 bases decoded. Why most teams default to consent, why that is wrong, and the documentation that holds up under regulator scrutiny." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing" />
        <meta property="article:published_time" content="2026-04-22" />
        <meta property="article:author" content="Gauri Khatate" />
        <meta property="article:tag" content="GDPR" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Legal Basis for Processing - How to Justify Data Collection Under GDPR","description":"GDPR Article 6 lists six lawful grounds for processing. The bases decoded, the legitimate-interest test that actually holds up, and the Meta €390M lesson on why you cannot switch bases mid-flight.","author":{"@type":"Person","name":"Gauri Khatate","jobTitle":"Privacy & Compliance Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-04-22","dateModified":"2026-04-22","mainEntityOfPage":"https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing","articleSection":"GDPR","image":"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"GDPR Legal Basis","item":"https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the six legal bases for processing under GDPR?","acceptedAnswer":{"@type":"Answer","text":"GDPR Article 6 lists exactly six lawful bases: consent, contract, legal obligation, vital interests, public task, and legitimate interests. You select one basis per processing purpose - not per company - and you must be able to justify the choice in your Record of Processing Activities."}},{"@type":"Question","name":"Why is consent the wrong default for most processing?","acceptedAnswer":{"@type":"Answer","text":"Consent has the strictest conditions of any basis - it must be freely given, specific, informed, and as easy to withdraw as to grant. Building processing on consent hands users a switch that turns the activity off. Service delivery is usually contract; fraud prevention is usually legitimate interests; tax records are legal obligation. Consent should be reserved for genuinely voluntary processing such as marketing or optional cookies."}},{"@type":"Question","name":"What is a Legitimate Interest Assessment (LIA)?","acceptedAnswer":{"@type":"Answer","text":"An LIA is a documented three-part test required when relying on legitimate interests under Article 6(1)(f). It covers the purpose test (what is the legitimate interest), the necessity test (is the processing actually needed), and the balancing test (do the data subject's rights override the interest). Without a written LIA, regulators treat the basis as never having been validly established."}},{"@type":"Question","name":"Can I change my legal basis after processing has started?","acceptedAnswer":{"@type":"Answer","text":"Effectively no. The European Data Protection Board has been explicit that switching bases mid-flight is treated as unlawful processing of everything that came before, plus a transparency violation. The only legitimate move is to stop the original processing, notify users, and re-establish on the new basis going forward - usually with a fresh action from the user."}},{"@type":"Question","name":"What happened in the Meta €390M case?","acceptedAnswer":{"@type":"Answer","text":"In January 2023, the Irish Data Protection Commission fined Meta €390M (€210M against Facebook, €180M against Instagram) for processing user data for behavioural advertising under the wrong legal basis. Meta argued personalised ads were necessary to perform the user contract. The regulator, after a binding EDPB decision, disagreed - behavioural advertising is not necessary to deliver a social network, and the correct basis would have been freely given consent."}}]}]}) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#FF6000;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(255, 96, 0,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--rd:#ff4d6d;--sans:'Inter',sans-serif}
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
    .stat-band{display:grid;grid-template-columns:repeat(4,1fr);gap:.85rem;margin-bottom:3rem}
    @media(max-width:700px){.stat-band{grid-template-columns:repeat(2,1fr)}}
    .stat-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.25rem 1rem;text-align:center;transition:all .25s}
    .stat-card:hover{border-color:var(--bo);transform:translateY(-2px)}
    .stat-num{font-size:1.6rem;font-weight:800;color:var(--cy);line-height:1;margin-bottom:.35rem}
    .stat-lbl{font-size:.72rem;color:var(--tm);text-transform:uppercase;letter-spacing:.05em;font-weight:600;line-height:1.4}
    .blog-layout{max-width:1280px;margin:0 auto;padding:0 2rem 5rem;display:grid;grid-template-columns:1fr 285px;gap:3rem;align-items:start}
    .art{min-width:0}
    .art h2{font-size:1.65rem;font-weight:700;color:var(--tx);margin:3rem 0 1.2rem;line-height:1.3}
    .art h2 em{color:var(--cy);font-style:italic}
    .art h3{font-size:1.05rem;font-weight:700;color:var(--cy);margin:1.8rem 0 .8rem}
    .art p{font-size:1rem;line-height:1.85;color:var(--tb);margin-bottom:1.2rem}
    .art p strong{color:var(--tx)}
    .art a.inline-link{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgba(255, 96, 0,0.3)}
    .art a.inline-link:hover{border-bottom-color:var(--cy)}
    .art ul{margin:0 0 1.4rem;padding:0;list-style:none}
    .art ul li{padding:.4rem 0 .4rem 1.4rem;position:relative;font-size:.95rem;color:var(--tb);border-bottom:1px solid var(--bs)}
    .art ul li:last-child{border-bottom:none}
    .art ul li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:2px;background:var(--cy);opacity:.7}
    .art ul li strong{color:var(--tx)}
    .data-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .data-table{width:100%;border-collapse:collapse;min-width:640px}
    .data-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .data-table td{padding:.7rem 1rem;font-size:.84rem;color:var(--tm);border-bottom:1px solid var(--bs);vertical-align:top}
    .data-table tr:last-child td{border-bottom:none}
    .data-table td:first-child{color:var(--tx);font-weight:600;white-space:nowrap}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(255, 96, 0,.06);border:1px solid rgba(255, 96, 0,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-danger{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .case-study{background:linear-gradient(135deg,rgba(255,77,109,.06),rgba(15,23,42,.95));border:1px solid rgba(255,77,109,.25);border-radius:16px;padding:1.85rem 1.95rem;margin:2.25rem 0;position:relative;border-left:3px solid var(--rd)}
    .case-study-tag{display:inline-block;padding:.3rem .75rem;background:rgba(255,77,109,.12);color:var(--rd);border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;margin-bottom:.85rem;text-transform:uppercase}
    .case-study h4{font-size:1.1rem;font-weight:700;color:var(--tx);margin-bottom:.85rem}
    .case-study p{font-size:.93rem;line-height:1.7;color:var(--tb);margin-bottom:.85rem!important}
    .case-study p:last-child{margin-bottom:0!important}
    .step-list{display:flex;flex-direction:column;gap:.85rem;margin:1.5rem 0}
    .step-item{display:flex;gap:1rem;padding:1.1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px}
    .step-num{width:30px;height:30px;border-radius:50%;background:var(--cy);color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.85rem}
    .step-body strong{display:block;color:var(--tx);font-size:.95rem;margin-bottom:.3rem}
    .step-body p{font-size:.88rem;color:var(--tm);margin-bottom:0!important;line-height:1.65}
    .scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .scope-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem}
    .scope-col.sc-bad{border-top:3px solid var(--rd)}
    .scope-col.sc-good{border-top:3px solid var(--gr)}
    .scope-col h4{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.8rem}
    .sc-bad h4{color:var(--rd)}
    .sc-good h4{color:var(--gr)}
    .scope-col ul li{font-size:.82rem;padding:.28rem 0 .28rem 1.1rem}
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
    .cta-banner p{font-size:.92rem;color:var(--tb);margin-bottom:1.5rem!important;max-width:550px;margin-left:auto;margin-right:auto}
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
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:900px){.scope-grid{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}}
`}</style>
      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>GDPR</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🇪🇺 GDPR</span>
          <span className="badge badge-bl">⚖️ Phase 2 - Core Concepts</span>
          <span className="badge badge-gr">📖 Lawful Basis</span>
        </div>
        <h1 className="hero-h1">Legal Basis for Processing - <em>How to Justify Data Collection</em></h1>
        <p className="hero-sub">Why picking the wrong lawful ground is the most expensive compliance mistake you will never see coming. Most teams treat the choice of legal basis as paperwork - a dropdown to fill in once, deep inside a privacy notice nobody reads. That dropdown is the difference between lawful processing and a regulatory infraction. And unlike most compliance choices, you do not really get to change your mind later.</p>

        <div className="author-strip">
          <div className="avatar">GK</div>
          <div className="author-info">
            <div className="aname">Gauri Khatate</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Privacy &amp; Compliance Writer</span><span className="dot">·</span><span id="read-time">📖 6 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=480&fit=crop" alt="GDPR Article 6 legal basis for processing personal data - six lawful grounds explained" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">Article 6 lists six lawful grounds. Most teams default to consent. The right answer is almost never "consent for everything" - it is "the right basis for each purpose."</p>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">6</div><div className="stat-lbl">Lawful Bases<br/>Under Article 6</div></div>
          <div className="stat-card"><div className="stat-num">~70%</div><div className="stat-lbl">Orgs Defaulting<br/>To Consent</div></div>
          <div className="stat-card"><div className="stat-num">€390M</div><div className="stat-lbl">Meta Fine<br/>Wrong Basis (2023)</div></div>
          <div className="stat-card"><div className="stat-num">0</div><div className="stat-lbl">Times You Can<br/>Quietly Switch</div></div>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#consent-trap">The "We'll Just Get Consent" Trap</a>
            <a href="#six-bases">The Six Bases, Demystified</a>
            <a href="#legitimate-interests">Legitimate Interests Decoded</a>
            <a href="#cannot-switch">Cannot Switch Bases After the Fact</a>
            <a href="#defaults-vs-regulator">Defaults vs Regulator Wants</a>
            <a href="#cost">The Cost of Getting It Wrong</a>
            <a href="#meta-case">Real-World: Meta €390M</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(255, 96, 0,0.3)',paddingLeft:'1.2rem'}}>
            Most teams treat the choice of legal basis as paperwork - a dropdown to fill in once, deep inside a privacy notice nobody reads. That dropdown is the difference between lawful processing and a regulatory infraction. And unlike most compliance choices, you do not really get to change your mind later. This piece walks through the six bases, the ones teams routinely misuse, and what actually holds up under regulator scrutiny.
          </p>

          <section id="consent-trap">
            <h2>The "We'll Just Get Consent" <em>Trap</em></h2>
            <p>If there is one default we see in privacy reviews more than any other, it is this - teams pick consent for everything, because consent feels like the safest answer. It is not. It is usually the worst one.</p>
            <p>Consent under GDPR has a specific shape. It has to be freely given, specific, informed, unambiguous, and as easy to withdraw as it was to grant. The moment access to your product depends on it, or the moment you bury it inside a fifteen-paragraph terms-of-service, it stops being valid consent and starts being a regulator magnet. We covered the four-part test in detail in <a href="https://seccomply.net/resources/blog/consent-under-gdpr" className="inline-link">consent under GDPR - what counts as valid consent</a>.</p>
            <p>There is a deeper problem. If you build your entire processing operation on consent, you have handed your users a switch that turns your business off. Every withdrawal becomes a delete request. Every consent fatigue moment becomes an unsubscribe. The companies that lean hardest on consent are the ones whose data flows are most fragile, not most defensible.</p>
            <p><strong>The right answer is almost never "consent for everything." It is "the right basis for each purpose."</strong></p>
          </section>

          <section id="six-bases">
            <h2>The Six Bases, <em>Demystified</em></h2>
            <p>Article 6 gives you exactly six lawful grounds. You pick one - sometimes one per processing activity. Here is the working version, not the textbook version:</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Basis</th><th>When It Fits</th><th>Where Teams Get Burned</th></tr></thead>
                <tbody>
                  <tr><td>Consent</td><td>Marketing emails, optional cookies, anything truly voluntary</td><td>Pre-ticked boxes, bundled consent, conditional access - all invalid</td></tr>
                  <tr><td>Contract</td><td>Processing strictly needed to deliver what the customer signed up for</td><td>Stretching it to cover analytics, profiling, or behavioural ads</td></tr>
                  <tr><td>Legal Obligation</td><td>Tax records, KYC/AML, court orders, statutory reporting</td><td>Industry guidance is not law - be specific about which statute</td></tr>
                  <tr><td>Vital Interests</td><td>Genuine life-or-death situations - medical emergencies, disasters</td><td>Almost never the right basis for B2B SaaS. If you are reaching, it is wrong</td></tr>
                  <tr><td>Public Task</td><td>Public authorities and bodies exercising official powers</td><td>Private companies rarely qualify - and "public interest" is not enough</td></tr>
                  <tr><td>Legitimate Interests</td><td>Fraud prevention, network security, basic analytics, B2B prospecting</td><td>Requires a documented LIA. "It helps the business" is not a balancing test</td></tr>
                </tbody>
              </table>
            </div>
            <p>Two things to internalise. First, you do not pick a basis for "the company" - you pick one per processing purpose. The same customer's data might sit under contract for service delivery, legal obligation for tax records, and legitimate interests for fraud monitoring. Second, the bases are not interchangeable. Each one carries different rights for the data subject and different obligations for you. Our piece on <a href="https://seccomply.net/resources/blog/gdpr-data-subject-rights" className="inline-link">data subject rights under GDPR</a> walks through how the rights differ across bases.</p>
          </section>

          <section id="legitimate-interests">
            <h2>Legitimate Interests - <em>The Most Misunderstood Basis</em></h2>
            <p>Legitimate interests is the most flexible of the six, and the most misused. It looks like a free pass. It is not.</p>
            <p>Using legitimate interests requires a three-part test, written down before you start processing:</p>
            <div className="step-list">
              <div className="step-item">
                <div className="step-num">1</div>
                <div className="step-body">
                  <strong>Purpose Test</strong>
                  <p>What is the legitimate interest you are pursuing? "It helps the business" is not enough; "detecting payment fraud across our customer base" is.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">2</div>
                <div className="step-body">
                  <strong>Necessity Test</strong>
                  <p>Is the processing actually needed to achieve that purpose, or could you do it with less data, with anonymised data, or not at all?</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">3</div>
                <div className="step-body">
                  <strong>Balancing Test</strong>
                  <p>Do the rights and reasonable expectations of the data subject override the interest? If a user would not expect this, it usually fails.</p>
                </div>
              </div>
            </div>
            <p>This is the Legitimate Interest Assessment, or LIA. It is not optional, it is not retroactive, and "we never wrote one down" is treated by regulators as evidence the basis was never actually established.</p>
            <div className="callout co-key">
              <span className="co-icon">📐</span>
              <div className="co-body">
                <strong>The Three-Paragraph Rule</strong>
                <p>If you cannot write the LIA in three short paragraphs that an outsider would find convincing, you do not have a legitimate interest. You have a hopeful guess.</p>
              </div>
            </div>
          </section>

          <section id="cannot-switch">
            <h2>You Cannot Switch Bases <em>After the Fact</em></h2>
            <p>This is the part most teams discover too late. Once you have told users their data is processed under a particular basis, you cannot quietly migrate to a different one when it becomes inconvenient - for example, swapping consent for legitimate interests because withdrawal rates are hurting the funnel.</p>
            <p>The European Data Protection Board has been explicit on this. Switching bases mid-flight is treated as <strong>unlawful processing of everything that came before</strong>, plus a transparency violation on top. The only legitimate move is to stop the original processing, notify users, and re-establish on the new basis going forward - usually with a fresh action from the user.</p>
            <p>Which is why the documentation matters more than the dropdown. Your Record of Processing Activities (RoPA) should list, for each processing purpose: the basis chosen, the date, the rationale, and - for legitimate interests - the LIA that supports it. If a regulator asks why you picked what you picked, the answer is not a meeting. It is a document.</p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The "Basis = One-Time Decision" Fallacy</strong>
                <p>Teams treat the legal basis as something you set once at launch and forget. It is not. Every new feature that touches personal data is a new processing purpose, and may need its own basis. A new analytics integration. A new vendor that processes data on your behalf. A new use of existing data - repurposed marketing, AI training, customer scoring. Each one needs the basis question asked and answered before the data starts flowing, not after the support ticket arrives.</p>
              </div>
            </div>
          </section>

          <section id="defaults-vs-regulator">
            <h2>What Teams Default To vs <em>What the Regulator Wants</em></h2>
            <p>Pattern-matching from a few hundred privacy reviews - here is the gap between how most teams handle legal basis and what actually holds up under scrutiny.</p>
            <div className="scope-grid">
              <div className="scope-col sc-bad">
                <h4>❌ Default Pattern</h4>
                <ul>
                  <li>Consent for everything</li>
                  <li>One basis listed in the privacy notice, full stop</li>
                  <li>"Legitimate interests" with no analysis attached</li>
                  <li>Switching basis quietly when consent rates drop</li>
                  <li>Re-using customer data for marketing under "contract"</li>
                </ul>
              </div>
              <div className="scope-col sc-good">
                <h4>✅ What Auditors Want</h4>
                <ul>
                  <li>The right basis for the actual purpose</li>
                  <li>A basis recorded per processing activity in the RoPA</li>
                  <li>A documented LIA - purpose, necessity, balancing test</li>
                  <li>A locked basis, with a transparency notice if it ever changes</li>
                  <li>A separate basis (consent or LI) for the secondary purpose</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="cost">
            <h2>The Cost of <em>Getting It Wrong</em></h2>
            <p>Picking the wrong basis is rarely the headline of an enforcement action - it is the substrate underneath one. A breach happens, a complaint lands, a journalist asks a question, and the regulator's first move is to ask why you were processing the data in the first place. If the answer is wobbly, the fine is not just for the breach. It is for unlawful processing, going back as far as the records do.</p>
            <p>On the operational side, the cost is more familiar. Enterprise deals stall in legal because your DPA cannot articulate basis-per-purpose. Cyber insurance underwriters flag it as a control gap. M&amp;A diligence finds three years of consent-based processing that should have been on legitimate interests, and the acquirer reprices accordingly. None of these costs make headlines. All of them show up on the P&amp;L. Our piece on <a href="https://seccomply.net/resources/blog/gdpr-business-impact-beyond-fines" className="inline-link">the real business impact of ignoring GDPR - beyond fines</a> covers the wider cost picture.</p>
          </section>

          <section id="meta-case">
            <h2>Real-World - <em>Meta €390M</em></h2>
            <div className="case-study">
              <span className="case-study-tag">🔴 Ireland · January 2023</span>
              <h4>Meta Fined €390M for Processing Behavioural Ads Under the Wrong Basis</h4>
              <p>Meta processed user data for behavioural advertising and argued the basis was "contract" - that personalised ads were part of the service users had signed up for. The Irish Data Protection Commission, after a binding decision from the EDPB, disagreed. Behavioural advertising, the regulator said, is not necessary for the performance of a Facebook or Instagram contract - users sign up for a social network, not for ads tailored to them. The correct basis would have been consent, freely given.</p>
              <p>The fines: €210M against Facebook, €180M against Instagram. <strong>Total: €390M.</strong> Meta was given three months to bring processing into compliance. The lesson is not that contract is a bad basis - it is that stretching contract to cover something users would not expect is exactly the move regulators are now penalising. Pick the basis that actually matches the purpose, not the one that is easiest to defend on paper.</p>
            </div>
          </section>

          <section id="final">
            <h2>Final <em>Thought</em></h2>
            <p>The legal basis question looks small from the outside. A dropdown. A line in a privacy notice. A field in a record nobody reads. In practice, it is the load-bearing wall of your entire privacy programme. Get it right and everything downstream - RoPA, DPIA, data subject rights, vendor contracts - has a foundation to attach to. Get it wrong and the whole structure is rebuilt the day a regulator asks the first question.</p>
            <p>Most teams do not pick the wrong basis because they do not care. They pick the wrong basis because they were never asked to think about it as a per-purpose decision. The fix is not more legal review. It is a habit - every new processing activity, every new vendor, every new feature, the basis question gets asked and the answer gets written down before the code ships. Once that habit is in place, the rest of the GDPR programme - covered in <a href="https://seccomply.net/resources/blog/gdpr-compliance-roadmap" className="inline-link">our practical six-step compliance roadmap</a> - gets meaningfully easier to run.</p>
          </section>

          <div className="cta-banner">
            <h3>Not Sure Your Activities Are on the Right Legal Basis?</h3>
            <p>SecComply maps every processing purpose in your business to the right Article 6 basis, builds the LIAs that hold up under scrutiny, and turns it all into a living RoPA - not a one-off spreadsheet. So when a regulator, an enterprise customer, or an acquirer asks why you process what you process, the answer is already documented.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Legal Basis Review →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What are the six legal bases for processing under GDPR?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>GDPR Article 6 lists exactly six lawful bases: consent, contract, legal obligation, vital interests, public task, and legitimate interests. You select one basis per processing purpose - not per company - and you must be able to justify the choice in your Record of Processing Activities.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Why is consent the wrong default for most processing?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Consent has the strictest conditions of any basis - it must be freely given, specific, informed, and as easy to withdraw as to grant. Building processing on consent hands users a switch that turns the activity off. Service delivery is usually contract; fraud prevention is usually legitimate interests; tax records are legal obligation. Consent should be reserved for genuinely voluntary processing such as marketing or optional cookies.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is a Legitimate Interest Assessment (LIA)?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>An LIA is a documented three-part test required when relying on legitimate interests under Article 6(1)(f). It covers the purpose test (what is the legitimate interest), the necessity test (is the processing actually needed), and the balancing test (do the data subject's rights override the interest). Without a written LIA, regulators treat the basis as never having been validly established.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can I change my legal basis after processing has started?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Effectively no. The European Data Protection Board has been explicit that switching bases mid-flight is treated as unlawful processing of everything that came before, plus a transparency violation. The only legitimate move is to stop the original processing, notify users, and re-establish on the new basis going forward - usually with a fresh action from the user.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What happened in the Meta €390M case?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>In January 2023, the Irish Data Protection Commission fined Meta €390M (€210M against Facebook, €180M against Instagram) for processing user data for behavioural advertising under the wrong legal basis. Meta argued personalised ads were necessary to perform the user contract. The regulator, after a binding EDPB decision, disagreed - behavioural advertising is not necessary to deliver a social network, and the correct basis would have been freely given consent.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Where should the legal basis live in my documentation?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Per processing activity in your Record of Processing Activities (RoPA), with the date selected, the rationale for the choice, and - for legitimate interests - the supporting Legitimate Interest Assessment. The privacy notice tells users; the RoPA tells regulators. Both need to be consistent and current.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How does this map to the DPDP Act in India?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>The DPDP Act takes a narrower approach than GDPR - consent is the primary basis for most processing, with a small set of "legitimate uses" that operate similarly to legitimate interests but are more tightly scoped. Organisations subject to both regimes need a basis matrix that covers each processing purpose under both laws. Our comparison piece on <a href="https://seccomply.net/resources/blog/gdpr-vs-dpdp" style={{color:'var(--cy)'}}>GDPR vs DPDP Act</a> covers the differences.</p></div>
            </div>
          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#consent-trap" className="toc-link">The Consent Trap</a></li>
              <li><a href="#six-bases" className="toc-link">The Six Bases</a></li>
              <li><a href="#legitimate-interests" className="toc-link">Legitimate Interests</a></li>
              <li><a href="#cannot-switch" className="toc-link">Cannot Switch</a></li>
              <li><a href="#defaults-vs-regulator" className="toc-link">Defaults vs Regulator</a></li>
              <li><a href="#cost" className="toc-link">Cost of Getting Wrong</a></li>
              <li><a href="#meta-case" className="toc-link">Meta €390M Case</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 GDPR Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/gdpr-explained-startups">GDPR Explained for Startups</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-self-assessment">GDPR Self-Assessment</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-counts-personal-data-gdpr">What Counts as Personal Data?</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-business-impact-beyond-fines">Business Impact Beyond Fines</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-controller-processor-sub-processor">Controller vs Processor</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-data-subject-rights">Data Subject Rights</a></li>
              <li><a href="https://seccomply.net/resources/blog/hidden-data-trails-gdpr">Hidden Data Trails</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing">▶ Legal Basis</a></li>
              <li><a href="https://seccomply.net/resources/blog/consent-under-gdpr">Consent Under GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-compliance-roadmap">GDPR Compliance Roadmap</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">GDPR</span><span className="tag">Article 6</span><span className="tag">Legal Basis</span><span className="tag">Legitimate Interests</span><span className="tag">LIA</span><span className="tag">Consent</span><span className="tag">RoPA</span><span className="tag">Meta Case</span></div>
          </div>
          <div className="sb-cta">
            <h4>Need a Basis Review?</h4>
            <p>Per-purpose mapping, LIAs, and a living RoPA - done in weeks, not months.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
