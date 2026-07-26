import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPForSaaSProductTeam() {
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
        <title>DPDP Act for SaaS Companies - What Your Product Team Needs to Build | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="What SaaS product and engineering teams must actually build to comply with India's DPDP Act: consent and notice UX, the eight data principal rights, breach workflows, processor contracts, and deletion that reaches backups." />
        <meta name="keywords" content="DPDP Act for SaaS, DPDP product requirements, DPDP Act India SaaS compliance, data principal rights implementation, DPDP consent UX, DPDP breach notification SaaS, Data Processing Agreement DPDP, DPDP data deletion backups" />
        <meta property="og:title" content="DPDP Act for SaaS Companies - What Your Product Team Needs to Build" />
        <meta property="og:description" content="DPDP compliance for SaaS is a product backlog, not a policy PDF. Here is what to build: consent and notice, the eight data principal rights, breach workflows, processor contracts, and retention that reaches your backups." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-for-saas-product-team" />
        <meta property="article:published_time" content="2026-05-20" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-for-saas-product-team" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"DPDP Act for SaaS Companies - What Your Product Team Needs to Build","description":"What SaaS product and engineering teams must actually build to comply with India's DPDP Act: consent and notice UX, the eight data principal rights, breach workflows, processor contracts, and deletion that reaches backups.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-20","dateModified":"2026-05-20","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-for-saas-product-team","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP for SaaS","item":"https://seccomply.net/resources/blog/dpdp-for-saas-product-team"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are we a Data Fiduciary or a Data Processor?","acceptedAnswer":{"@type":"Answer","text":"Usually both, depending on the data flow. For the personal data of your business customers' end users - the data you process because a customer instructed you to - you are typically a Data Processor acting on their behalf. For your own account holders, trial sign-ups, website leads, and employees, you are the Data Fiduciary and carry the full set of obligations directly. Map each data flow separately rather than picking one label for the whole company."}},{"@type":"Question","name":"What consent features must we build?","acceptedAnswer":{"@type":"Answer","text":"An itemised notice that accompanies every consent request and explains what data is collected, why, and how it will be used, in clear language, not buried in a legal document. Granular opt-in toggles per purpose rather than one bundled checkbox. A withdrawal mechanism that is as easy to use as giving consent was, available directly in account settings. And a consent record store that logs what was agreed, when, against which version of the notice, so you can produce evidence on demand."}},{"@type":"Question","name":"How fast must we respond to data principal requests?","acceptedAnswer":{"@type":"Answer","text":"The DPDP Rules set the applicable timelines for responding to data principal requests and breach notifications; treat those timelines as the floor, not the target. Build your access, correction, erasure, nomination, and grievance-redressal flows to acknowledge a request immediately and resolve it promptly, well inside whatever window the Rules specify, rather than scrambling to calculate deadlines after a request lands."}},{"@type":"Question","name":"Do we need to localise data in India?","acceptedAnswer":{"@type":"Answer","text":"Not as a blanket rule - the DPDP Act itself does not mandate general data localisation. Section 16 allows the Central Government to restrict transfers to specific countries through a notified list, but most transfers remain permissible today. That said, sectoral regulators such as RBI, IRDAI, and health authorities impose their own localisation requirements within their domains, so check whether your data categories are covered by sector-specific rules in addition to DPDP."}},{"@type":"Question","name":"What happens if a customer's data is breached on our platform?","acceptedAnswer":{"@type":"Answer","text":"As the Data Processor, your contractual duty is to notify the affected business customer without undue delay so they can meet their own obligations as Data Fiduciary, including notifying the Data Protection Board of India and affected data principals within the timelines set under the DPDP Rules. Your Data Processing Agreements should specify exactly how fast that upstream notification must happen, and your incident response runbook should treat it as a hard deadline, not a best effort."}}]}]}) }} />
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
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgb(var(--accent-rgb) / .06);border:1px solid rgb(var(--accent-rgb) / .2)}
    .co-warn{background:rgb(var(--yellow-rgb) / .06);border:1px solid rgb(var(--yellow-rgb) / .2)}
    .co-info{background:rgb(var(--purple-rgb) / .07);border:1px solid rgb(var(--purple-rgb) / .2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .case-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.4rem 0;border-left:3px solid var(--cy)}
    .case-card h3{font-size:1.1rem;font-weight:700;color:var(--tx);margin:0 0 .65rem}
    .case-card p{font-size:.93rem;color:var(--tb);line-height:1.72;margin-bottom:.7rem!important}
    .case-card p:last-child{margin-bottom:0!important}
    .case-card ul{margin:.5rem 0 0!important}
    .case-card ul li{font-size:.88rem!important;padding:.28rem 0 .28rem 1.2rem!important}
    .vendor-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .vendor-table{width:100%;border-collapse:collapse;min-width:560px}
    .vendor-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .vendor-table td{padding:.7rem 1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .vendor-table tr:last-child td{border-bottom:none}
    .vendor-table td:first-child{color:var(--tx);font-weight:600}
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
        <span>DPDP for SaaS</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 4 -Industry</span>
          <span className="badge badge-am">Product Build</span>
        </div>
        <h1 className="hero-h1">DPDP Act for SaaS Companies -<em>What Your Product Team</em> Needs to Build</h1>
        <p className="hero-sub">For SaaS, DPDP is not a policy document you file away - it is a set of features you ship. Here is what your product and engineering teams must build: consent and notice, the eight data principal rights, breach workflows, processor contracts, and retention and deletion that actually reach your backups.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>May 20, 2026</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1280&h=520&fit=crop" alt="SaaS product team building privacy features" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Consent, rights, and deletion are product features now - not just legal checkboxes.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#fiduciary-or-processor" className="toc-link">1. Fiduciary or Processor?</a>
            <a href="#consent-notice" className="toc-link">2. Consent &amp; Notice</a>
            <a href="#rights" className="toc-link">3. The Eight Rights</a>
            <a href="#breach" className="toc-link">4. Breach Notification</a>
            <a href="#processor" className="toc-link">5. Processor Contracts</a>
            <a href="#retention" className="toc-link">6. Retention &amp; Deletion</a>
            <a href="#checklist" className="toc-link">7. Build Checklist</a>
            <a href="#faq" className="toc-link">8. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">8</div><div className="stat-lbl">Data Principal Rights</div></div>
          <div className="stat-card"><div className="stat-num">₹250 cr</div><div className="stat-lbl">Max Penalty</div></div>
          <div className="stat-card"><div className="stat-num">DPA</div><div className="stat-lbl">Processor Contracts</div></div>
          <div className="stat-card"><div className="stat-num">2023</div><div className="stat-lbl">Act Enacted</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Most SaaS teams first meet the DPDP Act as a legal document someone forwards to engineering with "please review." That framing gets the order backwards. For a SaaS company, DPDP compliance is mostly a product and engineering exercise - a set of surfaces, endpoints, and workflows that have to exist and work correctly, not a policy PDF that sits in a shared drive. This piece is written for the people who will actually build those surfaces: product managers, engineering leads, and the founders who own the roadmap.</p>

          <p>If you are still confirming whether the Act applies to your company at all, start with our explainer on <Link href="/resources/blog/who-does-dpdp-apply-to" className="inline-link">who DPDP applies to</Link>. This piece assumes the answer is yes and goes straight into what your build backlog should look like: the six areas below, translated into features, endpoints, and SLAs your team can actually ship and test.</p>

          <section id="fiduciary-or-processor">
            <h2>1. Are You a <em>Fiduciary</em> or a Processor?</h2>
            <p>Before you write a single line of privacy-related code, settle this question, because it decides which obligations land on you directly and which ones you fulfil on someone else's behalf. Under the DPDP Act, a <strong>Data Fiduciary</strong> determines the purpose and means of processing personal data and carries the full weight of the Act's obligations. A <strong>Data Processor</strong> processes personal data on behalf of a Data Fiduciary, under contract, and has a narrower but still real set of duties. For a full walkthrough of the distinction, see our piece on <Link href="/resources/blog/data-principal-fiduciary-processor" className="inline-link">Data Principal, Fiduciary, and Processor roles</Link>.</p>

            <p>Most B2B SaaS companies are both at once, just for different data. When your enterprise customer uploads their end users' or employees' personal data into your platform because they instructed you to store, process, or analyse it, you are almost always a Data Processor acting on that customer's behalf - the customer is the Fiduciary and decides why the data exists in your system. But your own account holders, trial sign-ups, marketing leads, support contacts, and employees are people you collect and use data from for purposes you decide. For that data, you are the Data Fiduciary, full stop, with the complete set of consent, notice, rights, and breach obligations sitting on you directly.</p>

            <div className="callout co-key">
              <div className="co-icon">🔑</div>
              <div className="co-body">
                <strong>Map the role per data flow, not per company</strong>
                <p>Do not try to answer "are we a fiduciary or a processor" once for the whole business. Walk through your data inventory flow by flow - signup data, billing data, product usage data uploaded by customers, support tickets, analytics events - and assign a role to each. The features you build next depend entirely on getting this mapping right.</p>
              </div>
            </div>

            <p>The practical consequence: as a Processor, your job is to act strictly on your customer's instructions, help them meet their obligations when their end users exercise rights against them, notify them promptly if something goes wrong on your side, and maintain the security safeguards required under Section 8. As a Fiduciary for your own users, you own the whole stack - the notice, the consent capture, the rights fulfilment, and the breach notification duties described in the sections below.</p>
          </section>

          <section id="consent-notice">
            <h2>2. Consent &amp; Notice as <em>Product Surfaces</em></h2>
            <p>Section 5 of the DPDP Act requires that a request for consent be accompanied by an itemised notice, in clear and plain language, describing the personal data being collected and the purpose of processing. That is a UX requirement disguised as a legal one. It means the notice cannot live only in a Terms of Service page nobody opens - it needs to be rendered at the moment and point of collection, describing specifically what is being collected and why, in language a non-lawyer can understand.</p>

            <p>Build consent as a set of granular, purpose-level toggles rather than a single bundled "I agree" checkbox. A user should be able to accept account creation while declining marketing communications, for instance, without those being tied together. Each purpose needs its own identifier in your data model so you can track, report on, and later honour a withdrawal against that specific purpose rather than an all-or-nothing switch.</p>

            <p>Withdrawal has to be genuinely easy - the Act requires that withdrawing consent be as straightforward as giving it. In practice that means a self-serve toggle inside account settings, not a support ticket or an email to a compliance inbox. And every consent event, both given and withdrawn, needs to land in a consent record store: who consented, to what purpose, when, against which version of your notice text, and through what channel. That record is what you produce if a Data Principal or the Data Protection Board ever asks how a piece of processing was authorised.</p>

            <div className="callout co-info">
              <div className="co-icon">ℹ</div>
              <div className="co-body">
                <strong>Design for Consent Managers now</strong>
                <p>The DPDP Rules introduce registered Consent Managers - platforms an individual can use to view and manage consent given across multiple Data Fiduciaries in one place. You do not need to integrate with one on day one, but if your consent architecture already uses structured, purpose-level identifiers and machine-readable records, plugging into a Consent Manager later becomes an additive integration instead of a rebuild.</p>
              </div>
            </div>

            <p>For a deeper walkthrough of building this into a live web application, see our dedicated piece on the <Link href="/resources/blog/dpdp-consent-mechanism-web-app" className="inline-link">DPDP consent mechanism</Link>.</p>
          </section>

          <section id="rights">
            <h2>3. Building the <em>Eight Rights</em></h2>
            <p>The DPDP Act grants Data Principals eight distinct rights in total; our companion article covers the full list in detail - see <Link href="/resources/blog/8-rights-data-principals-dpdp" className="inline-link">the eight rights of Data Principals</Link>. For a SaaS product team, five of them require the heaviest lift, because they demand a working endpoint or flow, not just a paragraph in a privacy notice.</p>
            <ul>
              <li><strong>Access</strong> -a self-serve way for a user to see and download the personal data you hold on them, in a format they can actually read.</li>
              <li><strong>Correction</strong> -an editable profile or a request flow that lets a user fix inaccurate or outdated data, with a verification step so the request genuinely comes from the account owner.</li>
              <li><strong>Erasure</strong> -an account and data deletion flow that removes the data everywhere it lives, not just a status flag on one row of one table. We cover this in depth in the retention section below.</li>
              <li><strong>Nomination</strong> -a setting where a user can name another individual to exercise their rights on their behalf in the event of death or incapacity, as provided under Section 14.</li>
              <li><strong>Grievance redressal</strong> -an in-app or documented support channel with a defined response commitment, so a Data Principal has somewhere to go before escalating to the Data Protection Board.</li>
            </ul>

            <div className="case-card">
              <h3>Build rights requests as flows, not ticket queues</h3>
              <p>Treat each right as a small, repeatable workflow rather than a one-off manual process handled by whoever is free that week:</p>
              <ul>
                <li>An intake surface (form, endpoint, or in-app action) that timestamps the request</li>
                <li>An identity verification step appropriate to the sensitivity of the data involved</li>
                <li>Internal routing to the team that owns fulfilment - support, engineering, or legal</li>
                <li>A response template so answers are consistent and complete</li>
                <li>An audit log entry proving the request was received, actioned, and closed</li>
              </ul>
              <p>Once this exists as a workflow, adding an SLA countdown and a dashboard for open requests is a small addition - and it is the difference between confidently answering a Board inquiry and reconstructing what happened from email threads.</p>
            </div>
          </section>

          <section id="breach">
            <h2>4. Breach Detection &amp; <em>Notification</em></h2>
            <p>Section 8 requires Data Fiduciaries to implement reasonable security safeguards to prevent personal data breaches and, if a breach occurs, to notify the Data Protection Board of India and the affected Data Principals within the timelines set under the DPDP Rules. For a full treatment of the notification mechanics, see our piece on <Link href="/resources/blog/dpdp-breach-notification" className="inline-link">DPDP breach notification</Link>.</p>

            <p>For a product and engineering team, this obligation has three parts that need to exist before an incident happens, not during one. First, detection: your logging, monitoring, and alerting stack needs to be capable of surfacing unauthorised access to personal data quickly, not just infrastructure downtime. Second, an internal escalation runbook that maps a detected incident to a decision point - is this a personal data breach, and if so, who has the authority to trigger external notification. Third, the notification mechanism itself: pre-approved communication templates, a way to identify exactly which Data Principals were affected by a given incident, and a delivery channel - email, in-app notice, or both - that can reach them at scale on short notice.</p>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>Do not build this as an afterthought</strong>
                <p>A breach notification workflow that only exists in a policy document falls apart the first time it is needed, because nobody has rehearsed who identifies the affected user set or who has authority to send the notice. Treat it like an incident response runbook - own it in engineering and security, test it, and keep the affected-user query and the notification template ready before you need either.</p>
              </div>
            </div>

            <p>If you are a Data Processor for a business customer, your obligation runs upstream first: notify the customer without undue delay so they can meet their own downstream duties as Data Fiduciary. That upstream notification timeline should be a specific, contractually fixed number, not a vague "as soon as reasonably possible."</p>
          </section>

          <section id="processor">
            <h2>5. Processor Obligations &amp; <em>Contracts</em></h2>
            <p>If your product is used by other businesses to process their customers' or employees' personal data, you are the Data Processor in that relationship, and your obligations run in two directions: upward to the customer who is the Data Fiduciary, and downward to any sub-processors - cloud infrastructure, email delivery, analytics, support tooling - that you in turn rely on.</p>

            <div className="case-card">
              <h3>What your Data Processing Agreement needs to cover</h3>
              <p>Whether you are signing as the Processor for a customer or requiring one from a vendor, the contract should specify:</p>
              <ul>
                <li>A clear statement of the Processor's role and the categories of data processed</li>
                <li>An instruction to process data only as directed by the Fiduciary, for the stated purpose</li>
                <li>The security safeguards the Processor commits to maintaining</li>
                <li>Sub-processor approval and disclosure requirements</li>
                <li>Breach notification timelines back to the Fiduciary</li>
                <li>Assistance obligations - helping the Fiduciary respond to data principal rights requests that reach them through you</li>
                <li>Data return or deletion obligations when the relationship ends</li>
              </ul>
            </div>

            <p>Audit every tool in your own stack that touches personal data belonging to your customers or their end users. The common categories are broader than most teams expect:</p>
            <div className="vendor-table-wrap">
              <table className="vendor-table">
                <thead>
                  <tr><th>Category</th><th>Examples</th><th>What to Check</th></tr>
                </thead>
                <tbody>
                  <tr><td>Cloud hosting</td><td>AWS, Azure, GCP</td><td>DPA in place, region configuration documented</td></tr>
                  <tr><td>Email &amp; notifications</td><td>SendGrid, Postmark</td><td>Sub-processor disclosure, data retention on their side</td></tr>
                  <tr><td>Analytics &amp; product data</td><td>Mixpanel, Amplitude, Segment</td><td>What personal fields flow into events</td></tr>
                  <tr><td>Support &amp; helpdesk</td><td>Zendesk, Intercom</td><td>Conversation data retention and deletion support</td></tr>
                  <tr><td>Error monitoring</td><td>Sentry, Datadog</td><td>Personal data scrubbed from stack traces and logs</td></tr>
                  <tr><td>Payments</td><td>Stripe, Razorpay</td><td>Sectoral rules on top of DPDP - RBI requirements apply</td></tr>
                </tbody>
              </table>
            </div>
            <p>Every vendor on that list is a sub-processor relationship you need to be able to describe, contractually and technically, if a customer or the Board asks.</p>
          </section>

          <section id="retention">
            <h2>6. Retention, Deletion &amp; <em>Minimisation</em></h2>
            <p>The Act's purpose limitation principle means you should collect only the personal data you need for a stated purpose, and stop holding it once that purpose is served or consent is withdrawn - unless a specific law requires you to retain it longer. For product teams, this is the section most likely to expose gaps, because "delete the account" and "delete the data" are not the same feature.</p>

            <p>A soft-delete flag on a users table is not erasure. Real deletion has to reach every place a copy of that personal data landed: the primary database, read replicas, backups and snapshots, application and error logs, the analytics or data warehouse pipeline, cached search indexes, and any sub-processor you handed the data to along the way. Our detailed walkthrough on <Link href="/resources/blog/dpdp-erasure-deletion-requests" className="inline-link">erasure and deletion requests</Link> goes through how to design this end to end.</p>

            <div className="callout co-key">
              <div className="co-icon">🔑</div>
              <div className="co-body">
                <strong>Deletion is not done until it reaches backups</strong>
                <p>Build a data lifecycle map before you build the deletion feature: list every system that stores a copy of personal data, including backups and third-party tools, and define how each one is purged. A deletion job that clears the production database but leaves the data recoverable from a three-month-old backup or a still-synced analytics export has not actually erased anything.</p>
              </div>
            </div>

            <p>Where retention has to continue for a legitimate reason - an active legal obligation, an unresolved dispute, financial record-keeping rules - document the basis explicitly rather than defaulting to "keep everything, always." Minimisation and time-bound retention reduce the amount of data exposed in a breach, shrink the scope of every rights request you have to fulfil, and make your eventual DPDP audit considerably shorter.</p>
          </section>

          <section id="checklist">
            <h2>7. The Product Build <em>Checklist</em></h2>
            <p>Pulling the sections above together, this is the backlog a SaaS product and engineering team should be working through, roughly in priority order:</p>
            <div className="vendor-table-wrap">
              <table className="vendor-table">
                <thead>
                  <tr><th>Feature</th><th>Maps To</th><th>Build Note</th></tr>
                </thead>
                <tbody>
                  <tr><td>Point-of-collection notice</td><td>Section 5</td><td>Itemised, plain language, rendered where data is collected</td></tr>
                  <tr><td>Granular consent toggles</td><td>Section 6</td><td>Purpose-level, not one bundled checkbox</td></tr>
                  <tr><td>Consent withdrawal + record store</td><td>Section 6(4)</td><td>Self-serve toggle plus an auditable log</td></tr>
                  <tr><td>Access &amp; export endpoint</td><td>Right to access</td><td>Self-serve download of held personal data</td></tr>
                  <tr><td>Correction flow</td><td>Right to correction</td><td>Editable profile with a verification step</td></tr>
                  <tr><td>Account &amp; data deletion</td><td>Right to erasure</td><td>Must reach backups, logs, and sub-processors</td></tr>
                  <tr><td>Nominee setting</td><td>Section 14</td><td>Lets a user name a successor rights-holder</td></tr>
                  <tr><td>Grievance channel with SLA</td><td>Right to grievance redressal</td><td>Documented commitment before Board escalation</td></tr>
                  <tr><td>Breach detection + runbook</td><td>Section 8</td><td>Rehearsed, not just written down</td></tr>
                  <tr><td>DPAs with customers &amp; sub-processors</td><td>Processor obligations</td><td>Both directions of the relationship covered</td></tr>
                  <tr><td>Retention &amp; auto-deletion jobs</td><td>Purpose limitation</td><td>Scheduled, not manual and ad hoc</td></tr>
                </tbody>
              </table>
            </div>
            <p>None of these are large features individually. Together, shipped over a couple of quarters against the priority order above, they turn DPDP from an unfinished legal review into a compliance posture your product can actually demonstrate. For the sequencing of this work alongside the rest of your compliance programme, see our <Link href="/resources/blog/dpdp-compliance-roadmap-90-days" className="inline-link">90-day roadmap</Link>.</p>
          </section>

          <p>DPDP compliance for a SaaS company is not a document you produce once and file away - it is a set of product surfaces that have to keep working correctly as your data model, your vendor list, and your customer base change. Start with the fiduciary-versus-processor mapping, because it tells you exactly which obligations are yours to build directly. Everything else in this article follows from getting that first answer right.</p>

          <div className="cta-bottom">
            <h3>Need a DPDP build plan your engineering team can actually ship?</h3>
            <p>SecComply maps your data flows, tells you which role applies where, and turns the DPDP Act into a prioritised product backlog - consent, rights, breach workflows, and deletion that actually works.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a product compliance review →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Are we a Data Fiduciary or a Data Processor?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Usually both, depending on the data flow. For the personal data of your business customers' end users - the data you process because a customer instructed you to - you are typically a Data Processor acting on their behalf. For your own account holders, trial sign-ups, website leads, and employees, you are the Data Fiduciary and carry the full set of obligations directly. Map each data flow separately rather than picking one label for the whole company.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What consent features must we build?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>An itemised notice that accompanies every consent request and explains what data is collected, why, and how it will be used, in clear language, not buried in a legal document. Granular opt-in toggles per purpose rather than one bundled checkbox. A withdrawal mechanism that is as easy to use as giving consent was, available directly in account settings. And a consent record store that logs what was agreed, when, against which version of the notice, so you can produce evidence on demand.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How fast must we respond to data principal requests?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>The DPDP Rules set the applicable timelines for responding to data principal requests and breach notifications; treat those timelines as the floor, not the target. Build your access, correction, erasure, nomination, and grievance-redressal flows to acknowledge a request immediately and resolve it promptly, well inside whatever window the Rules specify, rather than scrambling to calculate deadlines after a request lands.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Do we need to localise data in India?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Not as a blanket rule - the DPDP Act itself does not mandate general data localisation. Section 16 allows the Central Government to restrict transfers to specific countries through a notified list, but most transfers remain permissible today. That said, sectoral regulators such as RBI, IRDAI, and health authorities impose their own localisation requirements within their domains, so check whether your data categories are covered by sector-specific rules in addition to DPDP.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What happens if a customer's data is breached on our platform?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>As the Data Processor, your contractual duty is to notify the affected business customer without undue delay so they can meet their own obligations as Data Fiduciary, including notifying the Data Protection Board of India and affected data principals within the timelines set under the DPDP Rules. Your Data Processing Agreements should specify exactly how fast that upstream notification must happen, and your incident response runbook should treat it as a hard deadline, not a best effort.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Product Compliance</div>
            <h3>Ship it, don't just document it</h3>
            <p>We turn DPDP obligations into a prioritised engineering backlog - consent UX, rights endpoints, breach runbooks, and deletion that reaches every backup.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a review →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-consent-mechanism-web-app">Consent Mechanism</Link></li>
              <li><Link href="/resources/blog/8-rights-data-principals-dpdp">8 Rights of Data Principals</Link></li>
              <li><Link href="/resources/blog/dpdp-breach-notification">Breach Notification</Link></li>
              <li><Link href="/resources/blog/dpdp-cross-border-data-transfer">Cross-Border Data Transfer</Link></li>
              <li><Link href="/resources/blog/data-principal-fiduciary-processor">Fiduciary vs Processor</Link></li>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Roadmap</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
