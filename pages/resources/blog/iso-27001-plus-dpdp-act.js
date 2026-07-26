import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001PlusDPDPAct() {
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
        <title>ISO 27001 + DPDP Act - Overlap Map and Combined Compliance Strategy | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="Where ISO 27001 and India's DPDP Act overlap, where they diverge, and how to run one combined compliance programme instead of two. A control-level overlap map, the DPDP-specific gaps ISO leaves, and the sequencing that saves the most effort." />
        <meta name="keywords" content="ISO 27001 DPDP, DPDP ISO 27001 mapping, combined compliance India, ISO 27001 DPDP overlap, Indian data protection ISMS, DPDP ISO strategy, dual compliance India" />
        <meta property="og:title" content="ISO 27001 + DPDP Act - Overlap Map and Combined Compliance Strategy" />
        <meta property="og:description" content="ISO 27001 and the DPDP Act share a lot - but not everything. The overlap map, the DPDP-specific gaps, and how to run one combined programme instead of two." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-plus-dpdp-act" />
        <meta property="article:published_time" content="2026-05-22" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-plus-dpdp-act" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 + DPDP Act - Overlap Map and Combined Compliance Strategy","description":"A control-level overlap map between ISO 27001 and the DPDP Act, the gaps each leaves, and the combined programme strategy.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-22","dateModified":"2026-05-22","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-plus-dpdp-act","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"ISO 27001 + DPDP Act","item":"https://seccomply.net/resources/blog/iso-27001-plus-dpdp-act"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does ISO 27001 cover DPDP Act compliance?","acceptedAnswer":{"@type":"Answer","text":"Partially. ISO 27001 provides the information security backbone - access control, encryption, logging, incident response, supplier management - that the DPDP Act relies on for its security safeguards obligation. But the DPDP Act adds privacy-specific requirements ISO 27001 does not address: consent management, privacy notices, data principal rights workflows, the grievance officer, and breach notification to the Data Protection Board. You build the ISMS and add the DPDP-specific privacy layer on top."}},{"@type":"Question","name":"Which should we do first - ISO 27001 or DPDP?","acceptedAnswer":{"@type":"Answer","text":"For most organisations, building the ISO 27001 ISMS first (or in parallel) is the more efficient path, because the ISMS provides the data inventory, access controls, incident response, and supplier management that DPDP compliance also requires. The DPDP-specific elements - consent, notice, rights workflows, grievance officer - then layer onto that foundation. That said, DPDP is a legal obligation with enforcement risk, so if you are not yet DPDP-compliant, do not delay the DPDP-specific work waiting for full ISO certification."}},{"@type":"Question","name":"Is the DPDP Act mandatory while ISO 27001 is voluntary?","acceptedAnswer":{"@type":"Answer","text":"Yes. The DPDP Act is law - if you process digital personal data of individuals in India, compliance is mandatory and enforcement carries penalties up to ₹250 crore for the most serious failures. ISO 27001 is a voluntary certification you pursue for commercial and assurance reasons. This is why the combined strategy matters: the voluntary certification you choose can substantially reduce the cost of the mandatory compliance you must achieve."}},{"@type":"Question","name":"What DPDP requirements are NOT covered by ISO 27001?","acceptedAnswer":{"@type":"Answer","text":"The privacy-specific obligations: lawful consent collection and management, the privacy notice with its mandated contents, data principal rights workflows (access, correction, erasure, nomination), the designated Grievance Officer, breach notification to the Data Protection Board within prescribed timelines, and cross-border transfer rules under Section 16. ISO 27001's privacy control A.5.34 points toward these but does not implement the DPDP-specific detail."}},{"@type":"Question","name":"Can one audit cover both?","acceptedAnswer":{"@type":"Answer","text":"Not a single audit - ISO 27001 certification is conducted by an accredited certification body, while DPDP compliance is assessed by the Data Protection Board or demonstrated through your own documentation if investigated. But the evidence overlaps heavily. The data inventory, access logs, incident records, and supplier assessments you maintain for ISO 27001 are largely the same evidence you would present to demonstrate DPDP's security safeguards. One evidence base, two compliance demonstrations."}}]}]}) }} />
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
    .badge-bl{background:rgb(var(--purple-rgb) / .1);color:var(--bl);border:1px solid rgb(var(--purple-rgb) / .25)}
    .badge-gr{background:rgb(var(--green-rgb) / .1);color:var(--gr);border:1px solid rgb(var(--green-rgb) / .25)}
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
    .art a.inline-link{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgb(var(--accent-rgb) / 0.3)}
    .art a.inline-link:hover{border-bottom-color:var(--cy)}
    .art ul{margin:0 0 1.4rem;padding:0;list-style:none}
    .art ul li{padding:.4rem 0 .4rem 1.4rem;position:relative;font-size:.95rem;color:var(--tb);border-bottom:1px solid var(--bs)}
    .art ul li:last-child{border-bottom:none}
    .art ul li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:2px;background:var(--cy);opacity:.7}
    .art ul li strong{color:var(--tx)}
    .map-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .map-table{width:100%;border-collapse:collapse;min-width:600px}
    .map-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .map-table td{padding:.7rem 1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .map-table tr:last-child td{border-bottom:none}
    .map-table td:first-child{color:var(--tx);font-weight:600}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgb(var(--accent-rgb) / .06);border:1px solid rgb(var(--accent-rgb) / .2)}
    .co-warn{background:rgb(var(--yellow-rgb) / .06);border:1px solid rgb(var(--yellow-rgb) / .2)}
    .co-info{background:rgb(var(--purple-rgb) / .07);border:1px solid rgb(var(--purple-rgb) / .2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .video-card{display:flex;gap:1.1rem;align-items:center;background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--bg-card-rgb) / .6));border:1px solid var(--bo);border-radius:14px;padding:1.3rem 1.5rem;margin:2rem 0;flex-wrap:wrap}
    .video-icon{width:48px;height:48px;border-radius:12px;background:var(--rd);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.4rem}
    .video-body{flex:1;min-width:200px}
    .video-body .vlbl{font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:.3rem}
    .video-body h4{font-size:1rem;color:var(--tx);font-weight:700;margin:0 0 .3rem}
    .video-body p{font-size:.85rem;color:var(--tb);margin:0!important;line-height:1.55}
    .video-link{display:inline-flex;align-items:center;gap:.4rem;padding:.6rem 1.1rem;background:var(--cy);color:#fff;text-decoration:none;border-radius:9px;font-size:.82rem;font-weight:700;white-space:nowrap}
    .video-link:hover{background:var(--cy2)}
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
    .cta-bottom{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--bg-card-rgb) / .95));border:1px solid var(--bo);border-radius:16px;padding:2rem;text-align:center;margin:3rem 0}
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
        <span>ISO 27001 + DPDP Act</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">ISO 27001</span>
          <span className="badge badge-bl">DPDP Act</span>
          <span className="badge badge-gr">Combined Strategy</span>
        </div>
        <h1 className="hero-h1">ISO 27001 + DPDP Act - Overlap Map and <em>Combined Compliance</em> Strategy</h1>
        <p className="hero-sub">ISO 27001 and India's DPDP Act share a great deal - but not everything. One is a voluntary security certification; the other is mandatory privacy law. Run them as two disconnected projects and you pay twice. The control-level overlap map, the DPDP-specific gaps ISO leaves, and the sequencing that saves the most effort.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Cybersecurity Expert</span></div>
            <div className="adate"><span>May 22, 2026</span><span className="dot">·</span><span id="read-time">📖 10 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1280&h=520&fit=crop" alt="Two compliance frameworks aligned" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">A voluntary security certification and a mandatory privacy law overlap more than most teams realise. The trick is building once and demonstrating twice.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#two-different" className="toc-link">1. Two Different Things</a>
            <a href="#overlap-map" className="toc-link">2. The Overlap Map</a>
            <a href="#dpdp-gaps" className="toc-link">3. DPDP-Specific Gaps</a>
            <a href="#strategy" className="toc-link">4. The Combined Strategy</a>
            <a href="#sequencing" className="toc-link">5. Sequencing the Work</a>
            <a href="#evidence" className="toc-link">6. One Evidence Base</a>
            <a href="#faq" className="toc-link">7. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">~70%</div><div className="stat-lbl">Control Overlap</div></div>
          <div className="stat-card"><div className="stat-num">Law</div><div className="stat-lbl">DPDP Is Mandatory</div></div>
          <div className="stat-card"><div className="stat-num">Cert</div><div className="stat-lbl">ISO Is Voluntary</div></div>
          <div className="stat-card"><div className="stat-num">1</div><div className="stat-lbl">Evidence Base</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Indian organisations increasingly need both ISO 27001 and DPDP Act compliance - the certification for commercial assurance, the law because it is the law. The instinct is to run them as separate projects with separate teams, documents, and timelines. That is the expensive way. ISO 27001 and the DPDP Act overlap substantially at the control level, and a combined programme can satisfy both from largely one body of work.</p>

          <p>This guide maps the overlap, identifies where the two diverge, and lays out the combined strategy. If you have read our <Link href="/resources/blog/dpdp-compliance-roadmap-90-days" className="inline-link">DPDP 90-day roadmap</Link> and our <Link href="/resources/blog/iso-27001-implementation-roadmap" className="inline-link">ISO 27001 implementation roadmap</Link>, this shows how to run them together.</p>

          <section id="two-different">
            <h2>1. Two <em>Different Things</em></h2>
            <p>The starting point is understanding what each actually is, because they are not the same kind of object:</p>
            <ul>
              <li><strong>ISO 27001</strong> is a voluntary, internationally recognised certification of an Information Security Management System. You pursue it for commercial reasons - to win deals, satisfy enterprise buyers, demonstrate maturity. It is assessed by an accredited certification body and results in a certificate valid three years.</li>
              <li><strong>The DPDP Act</strong> is mandatory Indian law governing the processing of digital personal data. Compliance is not optional if you handle personal data of individuals in India, and enforcement carries penalties up to ₹250 crore for the most serious failures. It is enforced by the Data Protection Board of India.</li>
            </ul>
            <p>One is about information security broadly; the other is about personal data privacy specifically. They intersect because protecting personal data is a security problem as much as a privacy one.</p>
          </section>

          <section id="overlap-map">
            <h2>2. The <em>Overlap Map</em></h2>
            <p>The DPDP Act's security safeguards obligation (the requirement to protect personal data with reasonable security) maps closely onto ISO 27001 controls. Where they align:</p>

            <div className="map-table-wrap">
              <table className="map-table">
                <thead>
                  <tr><th>DPDP Requirement</th><th>ISO 27001 / Annex A Equivalent</th></tr>
                </thead>
                <tbody>
                  <tr><td>Reasonable security safeguards</td><td>The ISMS as a whole; A.8 technical controls</td></tr>
                  <tr><td>Access control over personal data</td><td>A.5.15-5.18, A.8.2-8.5</td></tr>
                  <tr><td>Encryption of personal data</td><td>A.8.24 (cryptography)</td></tr>
                  <tr><td>Data inventory / knowing your data</td><td>A.5.9 (inventory of assets); risk assessment 6.1.2</td></tr>
                  <tr><td>Breach detection &amp; response</td><td>A.5.24-5.28 (incident management)</td></tr>
                  <tr><td>Processor / vendor management</td><td>A.5.19-5.23 (supplier controls)</td></tr>
                  <tr><td>Logging &amp; monitoring</td><td>A.8.15, A.8.16</td></tr>
                  <tr><td>Retention &amp; deletion</td><td>A.8.10 (information deletion); A.5.33 (records)</td></tr>
                  <tr><td>Privacy &amp; protection of PII</td><td>A.5.34 (privacy and protection of PII)</td></tr>
                </tbody>
              </table>
            </div>

            <p>Roughly 70% of what the DPDP Act needs for its security safeguards obligation is delivered by a well-built ISO 27001 ISMS. Control A.5.34 in particular - privacy and protection of personally identifiable information - is the explicit bridge between the two.</p>

            <div className="video-card">
              <div className="video-icon">▶</div>
              <div className="video-body">
                <div className="vlbl">Watch · The Nadkarnees</div>
                <h4>Compliance frameworks, explained simply</h4>
                <p>SecComply's founders break down security and compliance frameworks in plain language on their YouTube channel - useful background if you are new to how certifications and data laws fit together.</p>
              </div>
              <a className="video-link" href="https://www.youtube.com/@thenadkarnees" target="_blank" rel="noopener">Watch on YouTube →</a>
            </div>
          </section>

          <section id="dpdp-gaps">
            <h2>3. The <em>DPDP-Specific Gaps</em></h2>
            <p>The overlap is large but does not reach the privacy-specific obligations. These DPDP requirements are not delivered by ISO 27001 and must be built separately:</p>
            <ul>
              <li><strong>Lawful consent management.</strong> Collecting and logging valid consent per the five attributes of Section 6. See our <Link href="/resources/blog/dpdp-consent-mechanism-web-app" className="inline-link">consent mechanism guide</Link>.</li>
              <li><strong>Privacy notice.</strong> The Section 5 notice with its eight mandated elements. See our <Link href="/resources/blog/dpdp-privacy-notice-template" className="inline-link">notice template</Link>.</li>
              <li><strong>Data principal rights workflows.</strong> Access, correction, erasure, and nomination workflows with prescribed timelines. See our <Link href="/resources/blog/dpdp-erasure-deletion-requests" className="inline-link">erasure guide</Link>.</li>
              <li><strong>Grievance Officer.</strong> The designated, contactable officer the Act requires.</li>
              <li><strong>Breach notification to the Board.</strong> Notification to the Data Protection Board and affected data principals within prescribed timelines. See our <Link href="/resources/blog/dpdp-breach-notification" className="inline-link">breach notification guide</Link>.</li>
              <li><strong>Cross-border transfer rules.</strong> Section 16 obligations on transferring data outside India. See our <Link href="/resources/blog/dpdp-cross-border-data-transfer" className="inline-link">cross-border guide</Link>.</li>
            </ul>

            <div className="callout co-key">
              <div className="co-icon">🎯</div>
              <div className="co-body">
                <strong>ISO is the security spine; DPDP adds the privacy layer</strong>
                <p>Think of ISO 27001 as the security spine - access, encryption, logging, incident response, supplier management. The DPDP Act adds a privacy layer on top: consent, notice, rights, grievance, breach notification. The spine carries most of the weight; the privacy layer is the DPDP-specific work you cannot get from ISO alone.</p>
              </div>
            </div>
          </section>

          <section id="strategy">
            <h2>4. The <em>Combined Strategy</em></h2>
            <p>The efficient combined programme runs on three principles:</p>
            <ul>
              <li><strong>One data inventory.</strong> The data mapping you do for DPDP is the same asset inventory ISO 27001 requires. Do it once, use it for both.</li>
              <li><strong>One set of security controls.</strong> Access, encryption, logging, incident response, supplier management - built once to ISO standard, they satisfy DPDP's security safeguards obligation.</li>
              <li><strong>One privacy layer on top.</strong> Consent, notice, rights workflows, grievance officer, breach notification - the DPDP-specific additions that ISO does not cover, built as an extension of the ISMS rather than a separate programme.</li>
            </ul>
          </section>

          <section id="sequencing">
            <h2>5. <em>Sequencing</em> the Work</h2>
            <p>For most organisations the efficient sequence is:</p>
            <ul>
              <li><strong>Phase 1 - Foundation (shared).</strong> Data inventory, risk assessment, asset register. Serves both frameworks.</li>
              <li><strong>Phase 2 - Security controls (ISO-led).</strong> Build the Annex A controls. These deliver DPDP's security safeguards as a by-product.</li>
              <li><strong>Phase 3 - Privacy layer (DPDP-specific).</strong> Consent, notice, rights workflows, grievance officer, breach notification. Layered onto the ISMS.</li>
              <li><strong>Phase 4 - Certification &amp; demonstration.</strong> ISO 27001 certification audit; DPDP compliance documented and ready for the Board.</li>
            </ul>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>Do not delay DPDP waiting for ISO certification</strong>
                <p>ISO certification can take months; DPDP is enforceable law now. If you are not yet DPDP-compliant, build the privacy layer in parallel with the ISMS rather than waiting for the certificate. The legal obligation does not pause for your certification timeline.</p>
              </div>
            </div>
          </section>

          <section id="evidence">
            <h2>6. One <em>Evidence Base</em></h2>
            <p>The biggest efficiency of the combined approach is shared evidence. The artefacts you maintain for ISO 27001 are largely the same ones you would present to demonstrate DPDP compliance if the Board investigates:</p>
            <ul>
              <li>Data inventory → supports both ISO asset management and DPDP data mapping</li>
              <li>Access logs → support both ISO access control and DPDP security safeguards</li>
              <li>Incident records → support both ISO incident management and DPDP breach response</li>
              <li>Supplier assessments → support both ISO supplier controls and DPDP processor management</li>
              <li>Risk assessment → supports both ISO risk treatment and DPDP's reasonable-safeguards justification</li>
            </ul>
            <p>One evidence base, two compliance demonstrations. That is the core economic argument for the combined programme.</p>
          </section>

          <div className="cta-bottom">
            <h3>Running ISO 27001 and DPDP together?</h3>
            <p>SecComply designs combined ISO 27001 + DPDP programmes - one data inventory, one set of security controls, one privacy layer, one evidence base. Built to satisfy both the certification body and the Data Protection Board.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a combined compliance call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Does ISO 27001 cover DPDP Act compliance?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Partially. ISO 27001 provides the information security backbone - access control, encryption, logging, incident response, supplier management - that the DPDP Act relies on for its security safeguards obligation. But the DPDP Act adds privacy-specific requirements ISO 27001 does not address: consent management, privacy notices, data principal rights workflows, the grievance officer, and breach notification to the Data Protection Board. You build the ISMS and add the DPDP-specific privacy layer on top.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Which should we do first - ISO 27001 or DPDP?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>For most organisations, building the ISO 27001 ISMS first (or in parallel) is the more efficient path, because the ISMS provides the data inventory, access controls, incident response, and supplier management that DPDP compliance also requires. The DPDP-specific elements - consent, notice, rights workflows, grievance officer - then layer onto that foundation. That said, DPDP is a legal obligation with enforcement risk, so if you are not yet DPDP-compliant, do not delay the DPDP-specific work waiting for full ISO certification.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Is the DPDP Act mandatory while ISO 27001 is voluntary?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Yes. The DPDP Act is law - if you process digital personal data of individuals in India, compliance is mandatory and enforcement carries penalties up to ₹250 crore for the most serious failures. ISO 27001 is a voluntary certification you pursue for commercial and assurance reasons. This is why the combined strategy matters: the voluntary certification you choose can substantially reduce the cost of the mandatory compliance you must achieve.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What DPDP requirements are NOT covered by ISO 27001?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>The privacy-specific obligations: lawful consent collection and management, the privacy notice with its mandated contents, data principal rights workflows (access, correction, erasure, nomination), the designated Grievance Officer, breach notification to the Data Protection Board within prescribed timelines, and cross-border transfer rules under Section 16. ISO 27001's privacy control A.5.34 points toward these but does not implement the DPDP-specific detail.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can one audit cover both?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Not a single audit - ISO 27001 certification is conducted by an accredited certification body, while DPDP compliance is assessed by the Data Protection Board or demonstrated through your own documentation if investigated. But the evidence overlaps heavily. The data inventory, access logs, incident records, and supplier assessments you maintain for ISO 27001 are largely the same evidence you would present to demonstrate DPDP's security safeguards. One evidence base, two compliance demonstrations.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Combined Programme</div>
            <h3>Build once, comply twice</h3>
            <p>One data inventory, one set of controls, one privacy layer, one evidence base - ISO 27001 + DPDP.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a call →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">Watch</div>
            <h3>The Nadkarnees on YouTube</h3>
            <p>SecComply's founders explain AI &amp; cybersecurity in plain language.</p>
            <a href="https://www.youtube.com/@thenadkarnees" className="side-cta" target="_blank" rel="noopener">Visit channel →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">Related Guides</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">DPDP 90-Day Roadmap</Link></li>
              <li><Link href="/resources/blog/iso-27001-plus-soc-2">ISO 27001 + SOC 2</Link></li>
              <li><Link href="/resources/blog/iso-27001-for-fintech">ISO 27001 for Fintech</Link></li>
              <li><Link href="/resources/blog/iso-27001-for-healthcare">ISO 27001 for Healthcare</Link></li>
              <li><Link href="/resources/blog/iso-27001-implementation-roadmap">ISO 27001 Roadmap</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
