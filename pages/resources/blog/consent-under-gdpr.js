import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ConsentUnderGDPR() {
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
        <title>Consent Under GDPR - What Counts as Valid Consent? | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="GDPR Article 4(11) defines consent as freely given, specific, informed, and unambiguous. The four conditions decoded, the symmetrical-withdrawal rule, the proof obligation, and the Planet49 and Google CNIL cases that show what fails the test." />
        <meta name="keywords" content="GDPR consent, valid consent GDPR, Article 4(11), Article 7, cookie banner consent, freely given consent, withdrawal of consent, Planet49 case, Google CNIL fine, consent management" />
        <meta property="og:title" content="Consent Under GDPR - What Counts as Valid Consent?" />
        <meta property="og:description" content="Four conditions, one withdrawal switch, and why 'I agree' is not always agreement. The full GDPR consent test with real enforcement cases." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/consent-under-gdpr" />
        <meta property="article:published_time" content="2026-04-24" />
        <meta property="article:author" content="Gauri Khatate" />
        <meta property="article:tag" content="GDPR" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/consent-under-gdpr" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Consent Under GDPR - What Counts as Valid Consent?","description":"GDPR Article 4(11) defines consent as freely given, specific, informed, and unambiguous. The four conditions, the withdrawal rule, the proof obligation, and what fails the test.","author":{"@type":"Person","name":"Gauri Khatate","jobTitle":"Privacy & Compliance Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-04-24","dateModified":"2026-04-24","mainEntityOfPage":"https://seccomply.net/resources/blog/consent-under-gdpr","articleSection":"GDPR","image":"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"Consent Under GDPR","item":"https://seccomply.net/resources/blog/consent-under-gdpr"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the four conditions for valid consent under GDPR?","acceptedAnswer":{"@type":"Answer","text":"GDPR Article 4(11) requires consent to be freely given, specific, informed, and unambiguous, given through a statement or clear affirmative action. All four conditions must be met. Missing even one results in no consent at all - not weak consent, not implied consent, but legally invalid."}},{"@type":"Question","name":"Why are pre-ticked checkboxes not valid consent?","acceptedAnswer":{"@type":"Answer","text":"Pre-ticked boxes fail the 'unambiguous' and 'clear affirmative action' requirements. The Court of Justice of the European Union confirmed this in the Planet49 case (October 2019), ruling that a pre-ticked checkbox does not produce valid consent because the user has taken no positive action. The principle has been applied in dozens of national regulator decisions since."}},{"@type":"Question","name":"Does refusing consent have to be as easy as accepting?","acceptedAnswer":{"@type":"Answer","text":"Yes. Article 7(3) requires that withdrawing consent must be as easy as giving it. The CNIL fined Google €150M and Facebook €60M in January 2022 specifically because their cookie banners made acceptance one click but rejection multiple steps - making the design fail the freely given test."}},{"@type":"Question","name":"Do I need to keep records of consent?","acceptedAnswer":{"@type":"Answer","text":"Yes. Article 7(1) requires the controller to be able to demonstrate that the data subject consented. In practice this means a timestamped, version-anchored record showing who consented, when, to what specific notice text, on what page or screen, and whether they have since withdrawn. A consent log without the version of the notice text is treated as evidence the consent was not validly obtained."}},{"@type":"Question","name":"Is a cookie banner enough to manage consent across my whole product?","acceptedAnswer":{"@type":"Answer","text":"No. Cookie-banner consent typically covers web analytics, advertising tags, and embedded scripts. The larger privacy footprint - account creation, profile data, product telemetry, third-party integrations, AI training - needs its own consent treatment when consent is the basis at all. A perfect cookie banner attached to sloppy downstream consent architecture is a regulator's favourite kind of finding."}}]}]}) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#FF6000;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(255, 96, 0,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--rd:#ff4d6d;--bl:#818cf8;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#FF6000,#FF8A3D);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(255, 96, 0,.1);color:var(--cy);border:1px solid rgba(255, 96, 0,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:var(--bl);border:1px solid rgba(99,102,241,.25)}
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
    .data-table td:first-child{color:var(--tx);font-weight:600}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(255, 96, 0,.06);border:1px solid rgba(255, 96, 0,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .case-study{background:linear-gradient(135deg,rgba(99,102,241,.06),rgba(15,23,42,.95));border:1px solid rgba(99,102,241,.25);border-radius:16px;padding:1.85rem 1.95rem;margin:2.25rem 0;border-left:3px solid var(--bl)}
    .case-study-tag{display:inline-block;padding:.3rem .75rem;background:rgba(99,102,241,.12);color:var(--bl);border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;margin-bottom:.85rem;text-transform:uppercase}
    .case-study h4{font-size:1.1rem;font-weight:700;color:var(--tx);margin-bottom:.85rem}
    .case-study p{font-size:.93rem;line-height:1.7;color:var(--tb);margin-bottom:.85rem!important}
    .case-study p:last-child{margin-bottom:0!important}
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
          <span className="badge badge-gr">✅ Valid Consent</span>
        </div>
        <h1 className="hero-h1">Consent Under GDPR - <em>What Counts as Valid Consent?</em></h1>
        <p className="hero-sub">Four conditions, one withdrawal switch, and why "I agree" is not always agreement. Most consent collected wouldn't survive an hour of regulator scrutiny - not because anyone set out to be deceptive, but because the bar GDPR sets for consent sits meaningfully higher than the bar most product flows are designed around.</p>

        <div className="author-strip">
          <div className="avatar">GK</div>
          <div className="author-info">
            <div className="aname">Gauri Khatate</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Privacy &amp; Compliance Writer</span><span className="dot">·</span><span id="read-time">📖 6 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=480&fit=crop" alt="GDPR consent - four conditions for valid consent under Article 4(11)" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">GDPR Article 4(11) defines consent as freely given, specific, informed, and unambiguous. All four conditions. Missing one means no consent at all - not weak consent, not implied consent, just invalid.</p>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">4</div><div className="stat-lbl">Conditions for<br/>Valid Consent</div></div>
          <div className="stat-card"><div className="stat-num">€150M</div><div className="stat-lbl">Google CNIL Fine<br/>Reject Harder (2022)</div></div>
          <div className="stat-card"><div className="stat-num">As Easy</div><div className="stat-lbl">Withdrawal Standard<br/>Article 7(3)</div></div>
          <div className="stat-card"><div className="stat-num">0</div><div className="stat-lbl">Valid Consents Via<br/>Pre-Ticked Boxes</div></div>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#definition">The Definition Most Skim Past</a>
            <a href="#four-conditions">The Four Conditions Decoded</a>
            <a href="#withdrawal">Withdrawal Has To Be Symmetrical</a>
            <a href="#proof">You Have to Be Able to Prove It</a>
            <a href="#fail-vs-hold">Fails the Test vs Holds Up</a>
            <a href="#stop-asking">When the Real Fix Is to Stop Asking</a>
            <a href="#cases">Real-World Cases</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(255, 96, 0,0.3)',paddingLeft:'1.2rem'}}>
            Every product asks for consent. Cookie banners, sign-up flows, marketing opt-ins, terms-of-service tickboxes. Most of what gets collected wouldn't survive an hour of regulator scrutiny - not because anyone set out to be deceptive, but because the bar GDPR sets for consent sits meaningfully higher than the bar most product flows are designed around. The interesting question is not whether your consent box looks reasonable. It is whether it would pass the four-part test the regulation actually applies.
          </p>

          <section id="definition">
            <h2>The Definition Most Teams <em>Skim Past</em></h2>
            <p>GDPR does not leave consent open to interpretation. Article 4(11) defines it as <strong>any freely given, specific, informed and unambiguous indication of agreement, given through a statement or a clear affirmative action.</strong> That is not a philosophy - it is a four-part checklist. Each adjective has done years of work in court rulings and regulator decisions, and missing any one of them does not get you weak consent. It gets you no consent at all.</p>
            <p>The trap teams fall into is treating consent as a UI question - what should the banner look like, where does the button go, what colour is the toggle. The harder question is structural - given how the data flows in your product, given the relationship between you and the user, can consent under this regulation even be the right legal basis here? Often it is not. Our piece on <a href="https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing" className="inline-link">legal basis selection under GDPR</a> walks through when consent is and is not the answer.</p>
          </section>

          <section id="four-conditions">
            <h2>The Four Conditions, <em>Decoded</em></h2>
            <p>If consent is genuinely the right basis, every collection moment has to clear all four conditions. Here is the short version:</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Condition</th><th>What It Means in Practice</th><th>Where It Commonly Fails</th></tr></thead>
                <tbody>
                  <tr><td>Freely Given</td><td>Real choice, no penalty for refusing, not bundled into service access</td><td>Cookie wall, conditional access, employer-employee imbalance</td></tr>
                  <tr><td>Specific</td><td>One purpose per consent decision, granular toggles where needed</td><td>Single tick covering marketing + analytics + advertising</td></tr>
                  <tr><td>Informed</td><td>User knows who, what, why, who else, how long, before they click</td><td>20-page policy in a separate tab, legal language, no summary</td></tr>
                  <tr><td>Unambiguous</td><td>A clear affirmative action - tick, click, or signature</td><td>Pre-ticked boxes, silence, or "continued use of the site"</td></tr>
                </tbody>
              </table>
            </div>
            <p>Notice that none of these are about UI polish. They are about whether the user had a real choice, knew what the choice was, and made it deliberately. A regulator audit walks through them in order. If condition one fails, the others do not get tested - the consent is invalid, full stop.</p>
          </section>

          <section id="withdrawal">
            <h2>Withdrawal Has To Be <em>Symmetrical</em></h2>
            <p>Article 7(3) sets a specific bar - withdrawing consent must be as easy as giving it. If a user can opt in with one click on a website, they cannot be required to send a written letter to a postal address to opt out. The asymmetry between accept and reject is the single most-fined design pattern in EU privacy enforcement, and the regulators have published enough decisions on it that nobody can plausibly claim they did not know.</p>
            <p>The standard is not "reasonably easy." It is the same number of steps, the same prominence, the same channel. If your accept button is prominent and your reject pathway requires navigating to a settings page in a different tab, the design fails - even if both are technically possible. The fulfilment side of withdrawal - making the deletion actually happen across all your systems - connects directly to <a href="https://seccomply.net/resources/blog/gdpr-data-subject-rights" className="inline-link">data subject rights under GDPR</a>.</p>
          </section>

          <section id="proof">
            <h2>You Have to Be Able to <em>Prove It</em></h2>
            <p>Article 7(1) is the quiet sentence that does the most enforcement work - <strong>the controller must be able to demonstrate that the data subject consented.</strong> In practice, that is a timestamped, version-anchored record: who consented, when, to what specific notice text, on what specific page or screen, and whether they have since withdrawn.</p>
            <p>This is where most consent programmes break down operationally. The banner is fine, the wording is fine, all four conditions are met - but the record is a row in a database with no version of the notice text and no link back to the user's session. When asked to prove consent six months later, the team has to reconstruct what the banner said at the time. <strong>That gap is, on its own, treated by regulators as evidence the consent was not validly obtained.</strong></p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The "Cookie Banner = Consent Management" Misconception</strong>
                <p>The most expensive belief in any privacy programme is that consent management ends at the cookie banner. It does not. Banner-level consent covers a narrow slice - typically web analytics, advertising tags, and a few embedded scripts. The much larger privacy footprint - account creation, profile data, product telemetry, third-party integrations, AI training - needs its own consent treatment when consent is the basis at all. A perfect cookie banner attached to a sloppier downstream consent architecture is a regulator's favourite kind of finding.</p>
              </div>
            </div>
          </section>

          <section id="fail-vs-hold">
            <h2>Fails the Test vs <em>Holds Up Under Audit</em></h2>
            <p>Pattern-matching from real consent reviews - the gap between what most flows look like and what survives regulator scrutiny tends to follow the same shape:</p>
            <div className="scope-grid">
              <div className="scope-col sc-bad">
                <h4>❌ What Fails the Test</h4>
                <ul>
                  <li>Pre-ticked checkbox</li>
                  <li>"By using this site, you agree…"</li>
                  <li>One tick covering marketing, analytics, and ads</li>
                  <li>"Accept" is one click; "Reject" is six</li>
                  <li>Privacy policy buried in a footer link</li>
                  <li>"We retain consent records somewhere"</li>
                  <li>Withdrawal via an email to support</li>
                </ul>
              </div>
              <div className="scope-col sc-good">
                <h4>✅ What Holds Up</h4>
                <ul>
                  <li>Empty box, user actively ticks</li>
                  <li>Distinct affirmative action before processing starts</li>
                  <li>Granular toggles per purpose</li>
                  <li>"Reject All" with the same prominence as "Accept All"</li>
                  <li>Plain-language summary at the consent moment</li>
                  <li>Timestamped, versioned, auditable trail</li>
                  <li>In-product withdrawal as easy as the opt-in</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="stop-asking">
            <h2>Sometimes the Real Fix Is to <em>Stop Asking</em></h2>
            <p>A pattern worth flagging - many consent flows we see are technically unnecessary because the actual lawful basis is not consent at all. Service delivery is contract. Fraud detection is legitimate interests. Tax record-keeping is legal obligation. Asking for consent where consent is not required produces the worst possible outcome - you take on the obligation to honour withdrawals on processing you could not actually stop, because it is not consent-based to begin with.</p>
            <p>Before fixing the consent flow, it is worth asking the prior question: should this be a consent decision in the first place? If the answer is no, the fix is not a better banner. It is the right legal basis, with consent reserved for the things that genuinely belong there - marketing, optional cookies, secondary uses of data. This is exactly the diagnosis our companion piece on <a href="https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing" className="inline-link">legal basis for processing</a> covers in detail.</p>
          </section>

          <section id="cases">
            <h2>Real-World <em>Cases</em></h2>
            <div className="case-study">
              <span className="case-study-tag">🔵 CJEU · October 2019</span>
              <h4>Planet49 - The Case That Killed Pre-Ticked Boxes</h4>
              <p>A German online lottery service offered users a sweepstakes entry, with a pre-ticked checkbox consenting to cookies for advertising. The Court of Justice of the European Union ruled that the pre-ticked box did not produce valid consent - the user had taken no clear affirmative action, the website had simply assumed agreement.</p>
              <p>The ruling settled what had been a long argument about implied consent in Europe and is now <strong>the foundational reference for every cookie-banner enforcement decision since.</strong> The principle has been applied dozens of times by national regulators and is treated as settled law: if the box is ticked when the user arrives at the page, the consent does not exist - regardless of what the privacy notice says.</p>
            </div>
            <div className="case-study">
              <span className="case-study-tag">🔵 CNIL · January 2022</span>
              <h4>Google €150M, Facebook €60M - Reject Cannot Be Harder Than Accept</h4>
              <p>France's data protection authority fined two of the largest online platforms for cookie banners that made accepting cookies a single click while refusing them required several. The CNIL's reasoning was direct - making rejection harder than acceptance is a design choice that channels users toward consent, which means <strong>the consent obtained is not freely given.</strong></p>
              <p>What followed was a wave of cookie-banner redesigns across the European internet - "Reject All" buttons appeared on the same screen, with the same visual weight as "Accept All." Two years on, regulators are still issuing smaller fines on the same pattern. The message has clearly not fully landed in every product team.</p>
            </div>
          </section>

          <section id="final">
            <h2>Final <em>Thought</em></h2>
            <p>Valid consent looks like a small thing on the surface - a tick, a click, a banner. Underneath is a four-part legal definition, a withdrawal standard, a documentation obligation, and six years of detailed regulator guidance on what each one actually means. Teams that get it right do not treat consent as a UI problem. They treat it as a record-keeping problem with a UI on top of it.</p>
            <p>The shorthand that works in practice - if you cannot show a user, in two minutes, exactly what they consented to, when, on what version of the notice, and how to withdraw, your consent is technically defective even if no one has called you on it yet. The fines tend to land when someone does. If you are sequencing a wider GDPR programme, our <a href="https://seccomply.net/resources/blog/gdpr-compliance-roadmap" className="inline-link">six-step compliance roadmap</a> shows where consent fits relative to the rest of the work.</p>
          </section>

          <div className="cta-banner">
            <h3>Wondering Whether Your Consent Flow Actually Holds Up?</h3>
            <p>SecComply audits your consent architecture against the four GDPR conditions - banner design, granularity, withdrawal mechanics, record-keeping, and downstream propagation across the rest of your data flows. You walk away with a regulator-grade consent inventory and a fix list, not another twenty-page report.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Consent Flow Review →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/consent-under-gdpr" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/consent-under-gdpr&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What are the four conditions for valid consent under GDPR?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>GDPR Article 4(11) requires consent to be freely given, specific, informed, and unambiguous, given through a statement or clear affirmative action. All four conditions must be met. Missing even one results in no consent at all - not weak consent, not implied consent, but legally invalid.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Why are pre-ticked checkboxes not valid consent?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Pre-ticked boxes fail the "unambiguous" and "clear affirmative action" requirements. The Court of Justice of the European Union confirmed this in the Planet49 case (October 2019), ruling that a pre-ticked checkbox does not produce valid consent because the user has taken no positive action. The principle has been applied in dozens of national regulator decisions since.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does refusing consent have to be as easy as accepting?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. Article 7(3) requires that withdrawing consent must be as easy as giving it. The CNIL fined Google €150M and Facebook €60M in January 2022 specifically because their cookie banners made acceptance one click but rejection multiple steps - making the design fail the freely given test.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Do I need to keep records of consent?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes. Article 7(1) requires the controller to be able to demonstrate that the data subject consented. In practice this means a timestamped, version-anchored record showing who consented, when, to what specific notice text, on what page or screen, and whether they have since withdrawn. A consent log without the version of the notice text is treated as evidence the consent was not validly obtained.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Is a cookie banner enough to manage consent across my whole product?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. Cookie-banner consent typically covers web analytics, advertising tags, and embedded scripts. The larger privacy footprint - account creation, profile data, product telemetry, third-party integrations, AI training - needs its own consent treatment when consent is the basis at all. A perfect cookie banner attached to sloppy downstream consent architecture is a regulator's favourite kind of finding.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can I bundle multiple purposes into a single consent tick?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Not for distinct purposes. The "specific" requirement means each processing purpose needs its own consent decision - typically a separate toggle. A single tick that covers marketing emails, analytics tracking, and behavioural advertising fails the test, because the user has no way to consent to one without the others.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Does GDPR consent apply outside the EU?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>It applies to anyone processing personal data of individuals located in the EU, regardless of where the controller is based. An Indian SaaS company with EU customers is bound by GDPR consent rules for those users - and may also be bound by the DPDP Act for Indian users. Our comparison piece on <a href="https://seccomply.net/resources/blog/gdpr-vs-dpdp" style={{color:'var(--cy)'}}>GDPR vs DPDP Act</a> covers the overlap.</p></div>
            </div>
          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#definition" className="toc-link">The Definition</a></li>
              <li><a href="#four-conditions" className="toc-link">Four Conditions</a></li>
              <li><a href="#withdrawal" className="toc-link">Withdrawal Symmetry</a></li>
              <li><a href="#proof" className="toc-link">Proof Obligation</a></li>
              <li><a href="#fail-vs-hold" className="toc-link">Fails vs Holds</a></li>
              <li><a href="#stop-asking" className="toc-link">When to Stop Asking</a></li>
              <li><a href="#cases" className="toc-link">Real-World Cases</a></li>
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
              <li><a href="https://seccomply.net/resources/blog/gdpr-legal-basis-for-processing">Legal Basis</a></li>
              <li><a href="https://seccomply.net/resources/blog/consent-under-gdpr">▶ Consent Under GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-compliance-roadmap">Compliance Roadmap</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">GDPR</span><span className="tag">Article 4(11)</span><span className="tag">Article 7</span><span className="tag">Consent</span><span className="tag">Cookie Banner</span><span className="tag">Planet49</span><span className="tag">CNIL</span><span className="tag">Withdrawal</span></div>
          </div>
          <div className="sb-cta">
            <h4>Audit Your Consent Flow?</h4>
            <p>Banner, granularity, withdrawal, records - checked against all four conditions.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
