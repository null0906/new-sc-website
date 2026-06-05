import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPConsentMechanism() {
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
        <title>How to Build a DPDP-Compliant Consent Mechanism on Your Web/App | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A technical guide to implementing DPDP-compliant consent flows on websites and apps -the five attributes of valid consent, the four-step consent flow, third-party SDK gating, and the consent log structure auditors expect." />
        <meta name="keywords" content="DPDP consent mechanism, Section 6 DPDP consent, valid consent India, consent management platform, CMP India, consent log, withdrawal of consent, Indian privacy law" />
        <meta property="og:title" content="How to Build a DPDP-Compliant Consent Mechanism on Your Web/App" />
        <meta property="og:description" content="Consent is the cornerstone of DPDP compliance -but most Indian websites still collect it the wrong way. Here is how to do it right." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-consent-mechanism-web-app" />
        <meta property="article:published_time" content="2026-05-04" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-consent-mechanism-web-app" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"How to Build a DPDP-Compliant Consent Mechanism on Your Web/App","description":"A technical guide to designing and implementing DPDP-compliant consent flows.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-04","dateModified":"2026-05-04","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-consent-mechanism-web-app","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP Consent Mechanism","item":"https://seccomply.net/resources/blog/dpdp-consent-mechanism-web-app"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does the consent banner need to be on every page?","acceptedAnswer":{"@type":"Answer","text":"The banner should appear when the user first lands on your site and any time you collect data for a new purpose not previously consented to. Once consent is recorded, you do not need to show the banner again on every page. A persistent Cookie Preferences or Privacy Settings link in the footer satisfies the ongoing access requirement."}},{"@type":"Question","name":"Can we treat continued site usage as consent?","acceptedAnswer":{"@type":"Answer","text":"No. Section 6 of the DPDP Act requires an unambiguous affirmative action. Scrolling, dwelling on a page, or clicking unrelated links does not constitute consent. The user must take a deliberate action -checking a box, clicking an explicit consent button, or toggling a switch."}},{"@type":"Question","name":"How long should we keep consent records?","acceptedAnswer":{"@type":"Answer","text":"For at least as long as you process the data the consent authorised, plus the limitation period for any legal claims that might arise. Three to seven years is the common range in Indian practice, but you should set the retention period through your records-retention policy and document the justification. The Data Protection Board may ask for evidence of consent for any specific data subject, so the records need to be retrievable on demand."}},{"@type":"Question","name":"Do we need granular consent per purpose, or can we bundle?","acceptedAnswer":{"@type":"Answer","text":"Granular per purpose is required. Section 6 explicitly prohibits bundled consent -a single tickbox covering multiple unrelated purposes. Functional consent (needed to deliver the core service) is one purpose; marketing consent is another; analytics is another. Each needs its own affirmative action and can be withdrawn independently."}},{"@type":"Question","name":"What about third-party scripts loaded before consent?","acceptedAnswer":{"@type":"Answer","text":"Third-party scripts that process personal data must not load until the user consents to that category. This typically means using a tag manager or consent management platform that blocks scripts by default and only loads them when the corresponding consent flag is set. Google Tag Manager with Consent Mode v2 is one common approach; dedicated CMPs are another."}}]}]}) }} />
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
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(255, 96, 0,.06);border:1px solid rgba(255, 96, 0,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .attr-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.85rem;margin:1.5rem 0}
    @media(max-width:700px){.attr-grid{grid-template-columns:1fr}}
    .attr-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem;border-left:3px solid var(--cy)}
    .attr-card h4{font-size:1rem;color:var(--tx);margin:0 0 .4rem;font-weight:700}
    .attr-card p{font-size:.85rem;color:var(--tb);margin:0!important;line-height:1.6}
    .step-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.5rem 0;border-left:3px solid var(--cy)}
    .step-card-head{display:flex;align-items:center;gap:.75rem;margin-bottom:.85rem;flex-wrap:wrap}
    .step-num{display:inline-flex;align-items:center;padding:.25rem .7rem;background:var(--cy);color:white;border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;font-family:'JetBrains Mono',monospace}
    .step-card h3{font-size:1.1rem;font-weight:700;color:var(--tx);margin:0 0 .6rem}
    .step-card p{font-size:.92rem;color:var(--tb);line-height:1.7;margin-bottom:.7rem!important}
    .step-card p:last-child{margin-bottom:0!important}
    .step-card ul{margin:.5rem 0 0!important}
    .step-card ul li{font-size:.87rem!important;padding:.28rem 0 .28rem 1.2rem!important}
    .compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    @media(max-width:700px){.compare-grid{grid-template-columns:1fr}}
    .compare-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem}
    .compare-col.good{border-top:3px solid var(--gr)}
    .compare-col.bad{border-top:3px solid var(--rd)}
    .compare-col h4{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.8rem}
    .compare-col.good h4{color:var(--gr)}
    .compare-col.bad h4{color:var(--rd)}
    .compare-col ul li{font-size:.85rem;padding:.28rem 0 .28rem 1.1rem}
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
    .sidebar{position:sticky;top:80px;align-self:start}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sidebar{position:static;margin-top:2rem}}
    .side-card{background:var(--bgc2);border:1px solid var(--bo);border-radius:14px;padding:1.25rem;margin-bottom:1.2rem}
    .side-lbl{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:.85rem}
    .side-card h3{font-size:.92rem;color:var(--tx);font-weight:700;margin-bottom:.65rem}
    .side-card p{font-size:.82rem;color:var(--tb);line-height:1.65;margin-bottom:.95rem}
    .side-card .side-cta{display:inline-flex;align-items:center;gap:.4rem;padding:.55rem 1rem;background:var(--cy);color:#fff;text-decoration:none;border-radius:8px;font-size:.78rem;font-weight:700}
    .side-card .side-cta:hover{background:var(--cy2)}
    .side-card ul{list-style:none;padding:0;margin:0}
    .side-card ul li{padding:.45rem 0;border-bottom:1px solid var(--bs);font-size:.82rem}
    .side-card ul li:last-child{border-bottom:none}
    .side-card ul li a{color:var(--tb);text-decoration:none;display:block}
    .side-card ul li a:hover{color:var(--cy)}
    .cta-bottom{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(15,23,42,.95));border:1px solid var(--bo);border-radius:16px;padding:2rem;text-align:center;margin:3rem 0}
    .cta-bottom h3{font-size:1.3rem;color:var(--tx);margin-bottom:.75rem}
    .cta-bottom p{font-size:.95rem;color:var(--tb);max-width:540px;margin:0 auto 1.5rem!important}
    .cta-bottom .cta-btn{display:inline-flex;align-items:center;gap:.5rem;padding:.85rem 1.6rem;background:var(--cy);color:#fff;text-decoration:none;border-radius:10px;font-weight:700;font-size:.92rem;transition:background .2s}
    .cta-bottom .cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:1.5rem;right:1.5rem;width:42px;height:42px;background:var(--cy);color:#fff;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;pointer-events:none;transition:all .25s;z-index:99;font-size:1.1rem}
    #btt.vis{opacity:1;pointer-events:auto}
      `}</style>

      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="bc-sep">/</span>
        <Link href="/resources">Resources</Link><span className="bc-sep">/</span>
        <Link href="/resources/blog">Blog</Link><span className="bc-sep">/</span>
        <span>DPDP Consent Mechanism</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 3 -Implementation</span>
          <span className="badge badge-gr">Consent</span>
        </div>
        <h1 className="hero-h1">How to Build a DPDP-Compliant <em>Consent Mechanism</em> on Your Web/App</h1>
        <p className="hero-sub">Consent is the cornerstone of DPDP compliance -but most Indian websites still collect it the wrong way. Pre-ticked boxes, buried notices, no withdrawal path. Here is how to do it right, including the consent log structure that audits expect.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>May 4, 2026</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1280&h=520&fit=crop" alt="Consent banner and user interface design" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Consent under DPDP is not a checkbox -it is an end-to-end workflow with logs, withdrawal paths, and re-prompts when the underlying notice changes.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#valid-consent" className="toc-link">1. What Valid Consent Means</a>
            <a href="#anatomy" className="toc-link">2. Anatomy of a Compliant Flow</a>
            <a href="#log" className="toc-link">3. The Consent Log</a>
            <a href="#withdrawal" className="toc-link">4. The Withdrawal Path</a>
            <a href="#third-party" className="toc-link">5. Third-Party SDKs & Tags</a>
            <a href="#existing-users" className="toc-link">6. Re-Consenting Existing Users</a>
            <a href="#mistakes" className="toc-link">7. Common Mistakes</a>
            <a href="#faq" className="toc-link">8. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">5</div><div className="stat-lbl">Attributes of Valid Consent</div></div>
          <div className="stat-card"><div className="stat-num">4</div><div className="stat-lbl">Step Consent Flow</div></div>
          <div className="stat-card"><div className="stat-num">§6</div><div className="stat-lbl">Section of the Act</div></div>
          <div className="stat-card"><div className="stat-num">0</div><div className="stat-lbl">Pre-Ticked Boxes Allowed</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>The Digital Personal Data Protection Act 2023 places consent at the heart of personal data processing. Unlike older compliance cultures where a long privacy policy page was considered sufficient, the DPDP Act requires consent to be a deliberate, documented, and reversible act. This guide walks through what valid consent means under Section 6, the anatomy of a compliant flow, and the consent log structure that surfaces when the Data Protection Board asks for evidence.</p>

          <p>For the wider compliance programme this fits into, see our <Link href="/resources/blog/dpdp-compliance-roadmap-90-days" className="inline-link">90-day DPDP roadmap</Link>. The consent mechanism is Step 5 of that programme.</p>

          <section id="valid-consent">
            <h2>1. What Valid Consent Means Under <em>Section 6</em></h2>
            <p>Section 6 of the DPDP Act defines valid consent with five attributes. All five must be present; missing any one invalidates the consent.</p>

            <div className="attr-grid">
              <div className="attr-card"><h4>Free</h4><p>Not coerced or conditional on a service the user is otherwise entitled to. Consent extorted from a user to access a public service is not free.</p></div>
              <div className="attr-card"><h4>Specific</h4><p>Tied to a clearly stated purpose, not blanket collection. "For business purposes" is not specific.</p></div>
              <div className="attr-card"><h4>Informed</h4><p>The data principal must have seen and understood the notice. Notice must accompany the consent ask, not sit behind an unread link.</p></div>
              <div className="attr-card"><h4>Unconditional</h4><p>No bundled consent. Cannot bundle multiple unrelated purposes into one tick. Each purpose needs its own affirmative action.</p></div>
              <div className="attr-card"><h4>Unambiguous</h4><p>An active affirmative action -not a pre-ticked box, not silence, not continued site usage.</p></div>
              <div className="attr-card"><h4>+ Withdrawable</h4><p>Withdrawal must be as easy as giving consent. Implied in Section 6 and required by Section 7.</p></div>
            </div>

            <div className="callout co-key">
              <div className="co-icon">🎯</div>
              <div className="co-body">
                <strong>The "five attributes plus one" rule</strong>
                <p>Free, Specific, Informed, Unconditional, Unambiguous -and Withdrawable on the same effort budget. If your withdrawal flow takes 5 minutes when consent took 5 seconds, you have a Section 7 failure.</p>
              </div>
            </div>
          </section>

          <section id="anatomy">
            <h2>2. The Anatomy of a <em>Compliant Consent Flow</em></h2>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 1</span></div>
              <h3>Show the notice before collecting data</h3>
              <p>The consent request must be accompanied by a privacy notice -written in clear, plain language. The notice tells the user what data is being collected, why (specific purpose), who you will share it with, and how they can exercise their rights. Do not show only a general privacy policy link; show the specific notice relevant to the action the user is about to take. See our <Link href="/resources/blog/dpdp-privacy-notice-template" className="inline-link">privacy notice template</Link> for the structure.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 2</span></div>
              <h3>Present a clear affirmative action</h3>
              <p>The user must take a deliberate action to signal consent.</p>
              <div className="compare-grid">
                <div className="compare-col good">
                  <h4>Acceptable</h4>
                  <ul>
                    <li>Unchecked checkbox the user checks</li>
                    <li>Labelled button: "I Agree" or "Give Consent"</li>
                    <li>Toggle switch defaulted to OFF</li>
                    <li>Three-button cookie banner (Accept / Reject / Customise)</li>
                  </ul>
                </div>
                <div className="compare-col bad">
                  <h4>Not Acceptable</h4>
                  <ul>
                    <li>Continued use = consent</li>
                    <li>Pre-ticked checkbox</li>
                    <li>Consent buried in T&Cs</li>
                    <li>"By scrolling you agree…"</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 3</span></div>
              <h3>Record and store the consent</h3>
              <p>Every consent event must be logged. See the consent log structure in the next section.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 4</span></div>
              <h3>Provide an easy withdrawal path</h3>
              <p>The Act requires withdrawal to be as easy as giving consent. Build a dedicated "Manage My Consent" or "Privacy Settings" page where users can see active consents, withdraw specific consents, and request deletion of data tied to a withdrawn purpose. When consent is withdrawn, stop processing for that purpose immediately and trigger your data deletion or anonymisation workflow.</p>
            </div>
          </section>

          <section id="log">
            <h2>3. The <em>Consent Log</em> -What to Record</h2>
            <p>Every consent event must be persisted with enough detail to reproduce, on demand, exactly what the user agreed to. The minimum fields:</p>
            <ul>
              <li><strong>User identifier</strong> -the persistent ID linking back to the data principal. Email or account ID, not just an IP.</li>
              <li><strong>Timestamp</strong> -ISO 8601, UTC. Captured at consent grant time, not at form submission time.</li>
              <li><strong>Notice version</strong> -the exact version of the privacy notice shown at the time of consent. When the notice changes, the version increments and a re-consent prompt may be required.</li>
              <li><strong>Channel</strong> -web, mobile app, email reply, in-person. Identifies which UI produced the consent.</li>
              <li><strong>Specific purpose(s) consented to</strong> -listed individually, not bundled. Functional, analytics, marketing each captured as separate flags.</li>
              <li><strong>Locale / language</strong> -the language the notice was presented in. The DPDP Act allows the data principal to choose any Eighth Schedule language; you must serve the requested language and log which language they consented under.</li>
            </ul>
            <p>This consent log is your audit trail. The Data Protection Board may ask for it. The log should be tamper-resistant -append-only at minimum, ideally with cryptographic integrity if you operate at scale.</p>

            <div className="callout co-info">
              <div className="co-icon">📌</div>
              <div className="co-body">
                <strong>The notice version is the most-missed field</strong>
                <p>If a user consented to v1.2 of your notice and you later updated to v1.5 with new purposes added, the consent on file is for v1.2 -not v1.5. Re-prompting is required when the purposes change. Without notice versioning in the log, you cannot tell whose consent is current and whose is stale.</p>
              </div>
            </div>
          </section>

          <section id="withdrawal">
            <h2>4. The <em>Withdrawal Path</em></h2>
            <p>Section 7 requires withdrawal to be as easy as giving consent. In practice this means a single durable surface where every consent the user has ever given is listed, with per-purpose toggles.</p>
            <ul>
              <li><strong>Persistent access.</strong> Either a footer link ("Privacy Settings" or "Cookie Preferences") or an account-level setting page. Users should not have to hunt for it.</li>
              <li><strong>Per-purpose granularity.</strong> Withdraw marketing without withdrawing functional. Withdraw analytics without withdrawing email notifications.</li>
              <li><strong>Immediate effect.</strong> Withdrawal stops processing for that purpose at the moment of click. If marketing consent is withdrawn, the next marketing send must not include that user -even if the campaign was queued before the withdrawal.</li>
              <li><strong>Downstream deletion.</strong> Withdrawal often triggers deletion of data tied to the withdrawn purpose. See our <Link href="/resources/blog/dpdp-erasure-deletion-requests" className="inline-link">erasure workflow guide</Link> for the handoff.</li>
              <li><strong>Withdrawal confirmation.</strong> Show the user a clear confirmation that the withdrawal has been recorded, and log the withdrawal event itself with the same fields as the original consent.</li>
            </ul>
          </section>

          <section id="third-party">
            <h2>5. <em>Third-Party SDKs</em> and Tags</h2>
            <p>If your site loads third-party scripts -Google Analytics, Meta Pixel, HubSpot, Hotjar, LinkedIn Insight -these must not fire until the user has consented to the corresponding category.</p>
            <ul>
              <li><strong>Block by default.</strong> No third-party script loads on first page load until consent is recorded. The HTML page should not contain script tags that auto-execute; tags load via the tag manager only after consent.</li>
              <li><strong>Consent Mode v2 (for Google tags).</strong> If you use Google Tag Manager, configure Consent Mode v2 with analytics-storage and ad-storage signals tied to your CMP state. Without consent, tags run in "cookieless" mode and do not set identifiers.</li>
              <li><strong>Granular firing.</strong> Functional tags (error monitoring, session security) can fire on the basis of legitimate interest if your notice covers it. Analytics fires only on analytics consent. Marketing/ad tags fire only on marketing consent.</li>
              <li><strong>Tag inventory.</strong> Maintain a list of every third-party tag, the purpose it serves, the data it collects, and the consent flag that gates it. This list goes in your privacy notice (or is linked from it) so users know exactly what gets loaded.</li>
            </ul>
          </section>

          <section id="existing-users">
            <h2>6. <em>Re-Consenting</em> Existing Users</h2>
            <p>If you have not collected valid consent from existing users -either because the original consent was bundled, or because no consent was collected, or because the notice has materially changed -you need a re-consent campaign.</p>
            <p>Send a notice explaining the update and require users to actively re-consent to continue data processing for non-essential purposes. For functional purposes (such as keeping their account active), processing can typically continue under "necessary for performance of contract" while consent for marketing or analytics is collected separately.</p>
          </section>

          <section id="mistakes">
            <h2>7. <em>Common Mistakes</em> to Avoid</h2>
            <ul>
              <li>Bundling marketing and functional consent into one checkbox</li>
              <li>Not recording the version of the notice at consent time</li>
              <li>Treating "scroll past the banner" as consent</li>
              <li>Failing to update consent records when the privacy notice changes</li>
              <li>Not providing granular withdrawal (withdraw all vs. withdraw per purpose)</li>
              <li>Loading analytics or marketing tags before consent is recorded</li>
              <li>Storing only "consented: yes" -without notice version, channel, or timestamp, the record is unprovable</li>
            </ul>
          </section>

          <div className="cta-bottom">
            <h3>Need to ship a compliant consent flow?</h3>
            <p>SecComply builds DPDP-compliant consent management -UI, log structure, withdrawal path, third-party tag gating, re-consent campaigns. End-to-end implementation on web and mobile.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a consent build call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Does the consent banner need to be on every page?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>The banner should appear when the user first lands on your site and any time you collect data for a new purpose not previously consented to. Once consent is recorded, you do not need to show the banner again on every page. A persistent Cookie Preferences or Privacy Settings link in the footer satisfies the ongoing access requirement.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can we treat continued site usage as consent?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>No. Section 6 of the DPDP Act requires an unambiguous affirmative action. Scrolling, dwelling on a page, or clicking unrelated links does not constitute consent. The user must take a deliberate action -checking a box, clicking an explicit consent button, or toggling a switch.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How long should we keep consent records?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>For at least as long as you process the data the consent authorised, plus the limitation period for any legal claims that might arise. Three to seven years is the common range in Indian practice, but you should set the retention period through your records-retention policy and document the justification. The Data Protection Board may ask for evidence of consent for any specific data subject, so the records need to be retrievable on demand.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Do we need granular consent per purpose, or can we bundle?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Granular per purpose is required. Section 6 explicitly prohibits bundled consent -a single tickbox covering multiple unrelated purposes. Functional consent (needed to deliver the core service) is one purpose; marketing consent is another; analytics is another. Each needs its own affirmative action and can be withdrawn independently.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What about third-party scripts loaded before consent?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Third-party scripts that process personal data must not load until the user consents to that category. This typically means using a tag manager or consent management platform that blocks scripts by default and only loads them when the corresponding consent flag is set. Google Tag Manager with Consent Mode v2 is one common approach; dedicated CMPs are another.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Consent Management Build</div>
            <h3>UI, log, withdrawal -done right</h3>
            <p>End-to-end DPDP consent build on web and mobile, including re-consent for existing users.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a build call →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Roadmap</Link></li>
              <li><Link href="/resources/blog/dpdp-privacy-notice-template">Privacy Notice Template</Link></li>
              <li><Link href="/resources/blog/dpdp-breach-notification">Breach Notification</Link></li>
              <li><Link href="/resources/blog/dpdp-erasure-deletion-requests">Erasure Requests</Link></li>
              <li><Link href="/resources/blog/dpdp-cross-border-data-transfer">Cross-Border Transfer</Link></li>
              <li><Link href="/resources/blog/what-is-dpdp-act-explained">DPDP Act Explained</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
