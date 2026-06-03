import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPPrivacyNoticeTemplate() {
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
        <title>DPDP-Compliant Privacy Notice -What It Must Include (With Template) | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="What the DPDP Act requires in a privacy notice, the eight mandatory sections, a structured template you can customise, and the common drafting mistakes that turn a notice from a legal shield into a compliance liability." />
        <meta name="keywords" content="DPDP privacy notice, Section 5 DPDP, privacy notice template, India privacy policy, plain language privacy, grievance officer notice, data principal rights notice" />
        <meta property="og:title" content="DPDP-Compliant Privacy Notice -What It Must Include (With Template)" />
        <meta property="og:description" content="Your current privacy policy was probably written for GDPR or as a generic legal cover. Under the DPDP Act, you need something sharper -specific, plain, purpose-tied." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-privacy-notice-template" />
        <meta property="article:published_time" content="2026-05-06" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-privacy-notice-template" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"DPDP-Compliant Privacy Notice -What It Must Include (With Template)","description":"The eight mandatory sections of a DPDP privacy notice, with a structured template and common drafting mistakes.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-06","dateModified":"2026-05-06","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-privacy-notice-template","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP Privacy Notice","item":"https://seccomply.net/resources/blog/dpdp-privacy-notice-template"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can our existing GDPR privacy notice double as a DPDP notice?","acceptedAnswer":{"@type":"Answer","text":"Not directly. GDPR notices are good starting points but typically miss DPDP-specific elements -the Grievance Officer contact, the right to nominate a nominee, language-of-service obligations under the Eighth Schedule, and Indian-specific data principal rights phrasing. Adapt the GDPR notice rather than copy it; ensure the DPDP-specific sections are added and the language is appropriate for Indian users."}},{"@type":"Question","name":"Does the notice have to be in multiple languages?","acceptedAnswer":{"@type":"Answer","text":"The Act requires the notice to be available in English or any language listed in the Eighth Schedule of the Constitution, as requested by the data principal. In practice, most Indian websites provide the notice in English and Hindi as a baseline, with additional Eighth Schedule languages added on request or based on user demographics. You do not need to publish all 22 languages by default -but you must serve a requested language if asked."}},{"@type":"Question","name":"How often should the privacy notice be updated?","acceptedAnswer":{"@type":"Answer","text":"Update whenever your processing materially changes -new data categories, new purposes, new vendors, new sub-processors, new transfers. Even without changes, review the notice at least annually to verify accuracy. Material updates require re-prompting existing users for consent under the new notice version; minor clarifications usually do not."}},{"@type":"Question","name":"Where should the privacy notice be displayed?","acceptedAnswer":{"@type":"Answer","text":"In two places. First, a persistent link in the website or app footer that points to the full notice, accessible from every page. Second, an inline summary or contextual notice at the point of data collection -the sign-up form, the cookie banner, the booking page -so the data principal sees the relevant section at the moment they would consent to processing. A buried footer link alone does not satisfy the Section 5 informed-consent requirement."}},{"@type":"Question","name":"Does the notice need to list every cookie individually?","acceptedAnswer":{"@type":"Answer","text":"Not in the main privacy notice. A separate Cookie Policy that enumerates each cookie (with purpose, party, duration) is standard practice. The main privacy notice references the cookie policy by name and link. This separation keeps the privacy notice readable while satisfying the granular disclosure expectation for cookies and similar tracking technologies."}}]}]}) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#0081f2;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(0, 129, 242,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--rd:#ff4d6d;--bl:#818cf8;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#0081f2,#38A8FF);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(0, 129, 242,.1);color:var(--cy);border:1px solid rgba(0, 129, 242,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:var(--bl);border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
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
    .art a.inline-link{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgba(0, 129, 242,0.3)}
    .art a.inline-link:hover{border-bottom-color:var(--cy)}
    .art ul{margin:0 0 1.4rem;padding:0;list-style:none}
    .art ul li{padding:.4rem 0 .4rem 1.4rem;position:relative;font-size:.95rem;color:var(--tb);border-bottom:1px solid var(--bs)}
    .art ul li:last-child{border-bottom:none}
    .art ul li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:2px;background:var(--cy);opacity:.7}
    .art ul li strong{color:var(--tx)}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(0, 129, 242,.06);border:1px solid rgba(0, 129, 242,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .section-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.4rem 1.5rem;margin:1.2rem 0;border-left:3px solid var(--cy)}
    .section-card-head{display:flex;align-items:center;gap:.7rem;margin-bottom:.7rem;flex-wrap:wrap}
    .section-tag{display:inline-flex;align-items:center;padding:.22rem .6rem;background:var(--cy);color:white;border-radius:5px;font-size:.65rem;font-weight:800;letter-spacing:.06em;font-family:'JetBrains Mono',monospace}
    .section-card h4{font-size:1.05rem;font-weight:700;color:var(--tx);margin:0;letter-spacing:-.01em}
    .section-card p{font-size:.92rem;color:var(--tb);line-height:1.7;margin:0!important}
    .section-card p+p{margin-top:.7rem!important}
    .template-block{background:var(--bgc);border:1px dashed var(--bo);border-radius:14px;padding:1.6rem 1.8rem;margin:2rem 0;font-family:'JetBrains Mono',monospace}
    .template-block h4{font-size:.78rem;color:var(--cy);font-weight:800;letter-spacing:.1em;text-transform:uppercase;margin:0 0 1rem}
    .template-block .tpl-h{font-family:var(--sans);font-size:.95rem;color:var(--tx);font-weight:700;margin:1.2rem 0 .4rem}
    .template-block .tpl-h:first-child{margin-top:0}
    .template-block p{font-family:var(--sans);font-size:.88rem;color:var(--tb);line-height:1.7;margin:0 0 .8rem!important}
    .template-block p:last-child{margin-bottom:0!important}
    .template-block .tpl-field{color:var(--am);font-style:italic}
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
    .cta-bottom{background:linear-gradient(135deg,rgba(0, 129, 242,.08),rgba(15,23,42,.95));border:1px solid var(--bo);border-radius:16px;padding:2rem;text-align:center;margin:3rem 0}
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
        <span>DPDP Privacy Notice</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 3 -Implementation</span>
          <span className="badge badge-gr">Template Included</span>
        </div>
        <h1 className="hero-h1">DPDP-Compliant Privacy Notice -What It <em>Must Include</em> (With Template)</h1>
        <p className="hero-sub">Your current privacy policy was probably written for GDPR or as a generic legal cover. Under the DPDP Act you need something sharper -specific, plain, and purpose-tied. The eight mandatory sections, a structured template, and the drafting mistakes that turn a notice into a liability.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>May 6, 2026</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1568667256549-094345857637?w=1280&h=520&fit=crop" alt="Privacy notice document review" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Section 5 of the DPDP Act demands a notice in plain language, at the moment of consent -not a 12-page document linked in your footer.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#section-5" className="toc-link">1. What Section 5 Requires</a>
            <a href="#must-include" className="toc-link">2. Eight Mandatory Sections</a>
            <a href="#template" className="toc-link">3. The Full Template</a>
            <a href="#presentation" className="toc-link">4. Where and How to Present It</a>
            <a href="#mistakes" className="toc-link">5. Drafting Mistakes to Avoid</a>
            <a href="#faq" className="toc-link">6. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">8</div><div className="stat-lbl">Mandatory Sections</div></div>
          <div className="stat-card"><div className="stat-num">§5</div><div className="stat-lbl">DPDP Section</div></div>
          <div className="stat-card"><div className="stat-num">22</div><div className="stat-lbl">Eighth Schedule Languages</div></div>
          <div className="stat-card"><div className="stat-num">1</div><div className="stat-lbl">Per Distinct Purpose</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>The DPDP Act does not just require a privacy notice -it requires the right kind of notice, presented in the right way, at the right moment. A privacy policy buried in your website footer, written in legalese, no longer meets the bar. This guide breaks down what Section 5 actually demands, the eight elements every DPDP-compliant notice must contain, and a structured template you can adapt to your organisation.</p>

          <p>For where this fits in the wider compliance programme, see Step 4 of our <Link href="/resources/blog/dpdp-compliance-roadmap-90-days" className="inline-link">90-day DPDP roadmap</Link>. For the consent mechanism that the notice accompanies, see our <Link href="/resources/blog/dpdp-consent-mechanism-web-app" className="inline-link">consent implementation guide</Link>.</p>

          <section id="section-5">
            <h2>1. What <em>Section 5</em> Requires</h2>
            <p>Section 5 of the DPDP Act mandates that before processing personal data, the Data Fiduciary must provide a clear and plain notice to the data principal. The notice must be in English or any language from the Eighth Schedule of the Constitution, as requested by the data principal. Plain language is not a stylistic preference here -it is a statutory requirement. A notice that requires legal training to parse is not Section 5 compliant, even if every required element is technically present.</p>

            <div className="callout co-key">
              <div className="co-icon">🎯</div>
              <div className="co-body">
                <strong>The "plain language" test</strong>
                <p>If a typical Indian internet user cannot read your notice and understand what data you collect, why, and how to exercise their rights -in five minutes or less -the notice is non-compliant regardless of how legally watertight it is. Test with non-lawyer readers before publishing.</p>
              </div>
            </div>
          </section>

          <section id="must-include">
            <h2>2. The <em>Eight Mandatory Sections</em></h2>

            <div className="section-card">
              <div className="section-card-head"><span className="section-tag">§1</span><h4>Identity of the Data Fiduciary</h4></div>
              <p>Clearly state your company name, registered address, and contact details. The data principal must know who is collecting their data -not just the brand name, but the legal entity behind it.</p>
            </div>

            <div className="section-card">
              <div className="section-card-head"><span className="section-tag">§2</span><h4>What Personal Data Is Being Collected</h4></div>
              <p>List the specific categories of personal data you collect -name, email address, phone number, device data, location, etc. Do not use vague terms like "certain personal information" or "data related to your use of our services." Be explicit.</p>
            </div>

            <div className="section-card">
              <div className="section-card-head"><span className="section-tag">§3</span><h4>Purpose of Processing</h4></div>
              <p>State clearly why you are collecting each type of data. The purpose must be specific -"to send you account notifications" is acceptable; "for business purposes" is not. If you process data for multiple purposes (service delivery AND marketing AND analytics), list each separately and obtain separate consent for each.</p>
            </div>

            <div className="section-card">
              <div className="section-card-head"><span className="section-tag">§4</span><h4>How Data Will Be Used and Shared</h4></div>
              <p>Explain who you share data with -third-party vendors, analytics platforms, business partners. Name the categories of recipients. If you transfer data outside India, say so and explain the basis for the transfer (see our <Link href="/resources/blog/dpdp-cross-border-data-transfer" className="inline-link">cross-border transfer guide</Link>).</p>
            </div>

            <div className="section-card">
              <div className="section-card-head"><span className="section-tag">§5</span><h4>Retention Period</h4></div>
              <p>Tell users how long you will keep their data. Tie this to purpose -data should not be kept longer than needed to fulfil the stated purpose. "Until you close your account" is acceptable. "As long as necessary" is not.</p>
            </div>

            <div className="section-card">
              <div className="section-card-head"><span className="section-tag">§6</span><h4>Rights of the Data Principal</h4></div>
              <p>Clearly explain the rights available -right to access, right to correction, right to erasure, right to grievance redressal, right to nominate a nominee. Provide a clear pathway to exercise each right -an email address, a form, or a dedicated portal.</p>
            </div>

            <div className="section-card">
              <div className="section-card-head"><span className="section-tag">§7</span><h4>Grievance Officer Contact Details</h4></div>
              <p>Name and provide contact information for your designated Grievance Officer. The data principal must be able to reach them directly. An email address at minimum; a form or phone number is even better.</p>
            </div>

            <div className="section-card">
              <div className="section-card-head"><span className="section-tag">§8</span><h4>How Consent Can Be Withdrawn</h4></div>
              <p>Explain clearly how a user can withdraw consent and what happens when they do. Make it as simple as giving consent. State the practical mechanism -a Privacy Settings page link, an email address, or a per-purpose toggle.</p>
            </div>
          </section>

          <section id="template">
            <h2>3. The <em>Full Template</em></h2>
            <p>The structured template below covers all eight sections. Replace the bracketed fields with your organisation's specifics.</p>

            <div className="template-block">
              <h4>-Privacy Notice —</h4>

              <p><span className="tpl-field">[Company Name]</span> ("we", "us", "our") is committed to protecting your personal data in accordance with the Digital Personal Data Protection Act 2023 (India).</p>

              <div className="tpl-h">What We Collect</div>
              <p>We collect: <span className="tpl-field">[list specific data types -e.g., name, email address, phone number, device identifiers, IP address, location data, payment information]</span>.</p>

              <div className="tpl-h">Why We Collect It</div>
              <p>We collect this data to: <span className="tpl-field">[list specific purposes -e.g., create and manage your account, send transactional notifications, process payments, deliver the services you have requested, analyse usage to improve our products, send marketing communications you have separately consented to]</span>.</p>

              <div className="tpl-h">Who We Share It With</div>
              <p>We share your data with: <span className="tpl-field">[list third parties -e.g., cloud hosting providers (AWS, Azure), payment processors (Razorpay), analytics services (Google Analytics), email delivery (SendGrid)]</span>. We do not sell your personal data. Some of these vendors are based outside India; in those cases we transfer data under appropriate contractual protections.</p>

              <div className="tpl-h">How Long We Keep It</div>
              <p>We retain your data for <span className="tpl-field">[specific period -e.g., the duration of your account plus 3 years thereafter, except where law requires longer retention (such as tax records, kept for 8 years)]</span>.</p>

              <div className="tpl-h">Your Rights</div>
              <p>You have the right to access, correct, or request erasure of your personal data, to lodge a grievance, and to nominate a nominee. To exercise any right, contact our Grievance Officer at <span className="tpl-field">[email or form URL]</span>.</p>

              <div className="tpl-h">Grievance Officer</div>
              <p>Name: <span className="tpl-field">[Name]</span> | Role: <span className="tpl-field">[Title]</span> | Email: <span className="tpl-field">[email]</span> | Response time: within 30 days of receipt.</p>

              <div className="tpl-h">Withdrawing Consent</div>
              <p>You may withdraw consent at any time by <span className="tpl-field">[specific action -e.g., visiting your Privacy Settings page at /privacy-settings or emailing privacy@company.com]</span>. Withdrawal will not affect processing already done with your consent.</p>

              <h4 style={{marginTop:'1.4rem'}}>-End of Notice —</h4>
            </div>
          </section>

          <section id="presentation">
            <h2>4. Where and How to <em>Present It</em></h2>
            <p>The Section 5 obligation is not just that the notice exists -it is that the data principal sees it at the moment they would consent. In practice this means two locations:</p>
            <ul>
              <li><strong>Persistent footer link.</strong> A "Privacy Notice" or "Privacy Policy" link in the footer of every page, pointing to the full notice. Discoverable, durable, accessible after the fact.</li>
              <li><strong>Contextual notice at point of collection.</strong> A summary inline at the moment of consent -on the sign-up form, on the cookie banner, on the booking page. The user does not need to leave the form to see what they are consenting to.</li>
            </ul>
            <p>For mobile apps, the same pattern applies -notice surfaced at onboarding and accessible from the settings menu thereafter.</p>
          </section>

          <section id="mistakes">
            <h2>5. <em>Drafting Mistakes</em> to Avoid</h2>
            <ul>
              <li>Using generic "we may collect various information" language -be specific</li>
              <li>Combining multiple purposes into a single statement</li>
              <li>Not updating the notice when your processing changes</li>
              <li>Hiding the notice behind a link rather than presenting it inline at the point of consent</li>
              <li>Not providing the notice in the language requested by the user</li>
              <li>Omitting the Grievance Officer's actual name and contact (a generic "contact us" form is not sufficient)</li>
              <li>Stating retention as "as long as necessary" without tying it to purpose</li>
            </ul>
          </section>

          <div className="cta-bottom">
            <h3>Need a notice that actually fits your processing?</h3>
            <p>SecComply drafts and reviews DPDP-compliant privacy notices, calibrated to your data flows and presented at the right places in your product. We also handle the consent flow and grievance officer setup that the notice references.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a notice review call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can our existing GDPR privacy notice double as a DPDP notice?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Not directly. GDPR notices are good starting points but typically miss DPDP-specific elements -the Grievance Officer contact, the right to nominate a nominee, language-of-service obligations under the Eighth Schedule, and Indian-specific data principal rights phrasing. Adapt the GDPR notice rather than copy it; ensure the DPDP-specific sections are added and the language is appropriate for Indian users.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Does the notice have to be in multiple languages?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>The Act requires the notice to be available in English or any language listed in the Eighth Schedule of the Constitution, as requested by the data principal. In practice, most Indian websites provide the notice in English and Hindi as a baseline, with additional Eighth Schedule languages added on request or based on user demographics. You do not need to publish all 22 languages by default -but you must serve a requested language if asked.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How often should the privacy notice be updated?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Update whenever your processing materially changes -new data categories, new purposes, new vendors, new sub-processors, new transfers. Even without changes, review the notice at least annually to verify accuracy. Material updates require re-prompting existing users for consent under the new notice version; minor clarifications usually do not.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Where should the privacy notice be displayed?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>In two places. First, a persistent link in the website or app footer that points to the full notice, accessible from every page. Second, an inline summary or contextual notice at the point of data collection -the sign-up form, the cookie banner, the booking page -so the data principal sees the relevant section at the moment they would consent to processing. A buried footer link alone does not satisfy the Section 5 informed-consent requirement.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Does the notice need to list every cookie individually?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Not in the main privacy notice. A separate Cookie Policy that enumerates each cookie (with purpose, party, duration) is standard practice. The main privacy notice references the cookie policy by name and link. This separation keeps the privacy notice readable while satisfying the granular disclosure expectation for cookies and similar tracking technologies.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Notice Drafting</div>
            <h3>Tailored to your processing</h3>
            <p>We draft DPDP-compliant notices that fit your actual data flows -not generic templates.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a review →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Roadmap</Link></li>
              <li><Link href="/resources/blog/dpdp-consent-mechanism-web-app">Consent Mechanism</Link></li>
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
