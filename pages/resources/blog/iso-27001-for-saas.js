import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001ForSaaS() {
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
        <title>ISO 27001 for SaaS Companies -Building Security Into Your Product | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="An ISO 27001 implementation guide for SaaS companies. Why multi-tenancy, cloud infrastructure, and shared customer data create unique challenges. The Annex A controls that matter most for SaaS, DevSecOps integration, and the customer-trust artefacts that complete the certification." />
        <meta name="keywords" content="ISO 27001 for SaaS, SaaS ISO 27001, multi-tenant security, cloud ISO 27001, SaaS compliance, SaaS scope, DevSecOps ISO 27001, customer trust page, sub-processor, DPA" />
        <meta property="og:title" content="ISO 27001 for SaaS Companies -Building Security Into Your Product" />
        <meta property="og:description" content="SaaS has unique ISO 27001 challenges -multi-tenancy, cloud dependency, customer data segregation, DevOps velocity. The scope, controls, and customer artefacts that actually fit a SaaS model." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-for-saas" />
        <meta property="article:published_time" content="2026-05-12" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-for-saas" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 for SaaS Companies -Building Security Into Your Product","description":"How SaaS companies should approach ISO 27001 -scope, multi-tenancy, the Annex A controls that matter most, DevSecOps integration, and customer trust artefacts.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-12","dateModified":"2026-05-12","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-for-saas","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"ISO 27001 for SaaS","item":"https://seccomply.net/resources/blog/iso-27001-for-saas"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does ISO 27001 cover our cloud infrastructure?","acceptedAnswer":{"@type":"Answer","text":"Yes -the cloud infrastructure that hosts the SaaS product is in scope. The shared-responsibility model means the cloud provider is responsible for some controls (physical security of data centres, hardware lifecycle, hypervisor isolation) and you are responsible for others (identity management, encryption configuration, network segmentation, logging). ISO 27001 audits your side of the line. Combine ISO 27001 with ISO 27017 (cloud-specific guidance) or ISO 27018 (cloud privacy) for sharper alignment with cloud-specific concerns."}},{"@type":"Question","name":"How is scope defined for a SaaS company?","acceptedAnswer":{"@type":"Answer","text":"Most SaaS companies scope the ISMS as 'the production environment supporting the named product or product family, including the development, build, deployment, and operations infrastructure, the support function that has customer-data access, and the corporate functions that materially handle customer data such as legal and finance.' Excluded scope is typically marketing tooling, lead-management CRM with no customer data, and any non-customer-facing product lines."}},{"@type":"Question","name":"What about our sub-processors?","acceptedAnswer":{"@type":"Answer","text":"Sub-processors -third parties that process customer data on your behalf, such as email delivery, payment processing, analytics -fall under Annex A supplier controls (A.5.19 through A.5.23). They are not in your ISMS scope, but your management of them is. Auditors will check sub-processor risk assessments, contracts with DPAs in place, and a maintained sub-processor list."}},{"@type":"Question","name":"How does ISO 27001 work with DevOps velocity?","acceptedAnswer":{"@type":"Answer","text":"ISO 27001 does not require change-freeze gates that would slow DevOps. It requires change management to be defined, documented, and consistently applied. A well-designed change process for a SaaS company often looks like: peer code review with security checklist, automated security scanning in CI/CD, deploy-to-production approval that can be lightweight for routine changes and rigorous for high-risk ones, post-deploy monitoring. The audit tests whether the process exists and is followed, not whether it slows you down."}},{"@type":"Question","name":"Do we need a customer trust page?","acceptedAnswer":{"@type":"Answer","text":"Not for ISO 27001 directly, but most B2B SaaS companies build one shortly after certification because it dramatically shortens enterprise sales cycles. A trust page typically includes the ISO 27001 certificate, SOC 2 if applicable, sub-processor list, DPA template, security overview, and incident disclosure history. Customers asking the same questionnaire over and over can self-serve answers."}}]}]}) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#E8632B;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(232,99,43,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--rd:#ff4d6d;--bl:#818cf8;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#E8632B,#FF8A50);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(232,99,43,.1);color:var(--cy);border:1px solid rgba(232,99,43,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:var(--bl);border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
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
    .art a.inline-link{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgba(232,99,43,0.3)}
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
    .co-key{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .control-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.3rem 1.4rem;margin:1rem 0;border-left:3px solid var(--cy)}
    .control-card-head{display:flex;align-items:center;gap:.7rem;margin-bottom:.5rem;flex-wrap:wrap}
    .control-tag{display:inline-flex;align-items:center;padding:.22rem .6rem;background:var(--cy);color:white;border-radius:5px;font-size:.65rem;font-weight:800;letter-spacing:.05em;font-family:'JetBrains Mono',monospace}
    .control-card h4{font-size:1rem;font-weight:700;color:var(--tx);margin:0;letter-spacing:-.005em}
    .control-card p{font-size:.9rem;color:var(--tb);line-height:1.65;margin:0!important}
    .scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    @media(max-width:700px){.scope-grid{grid-template-columns:1fr}}
    .scope-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem}
    .scope-col.sc-in{border-top:3px solid var(--gr)}
    .scope-col.sc-out{border-top:3px solid var(--rd)}
    .scope-col h4{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.8rem}
    .sc-in h4{color:var(--gr)}
    .sc-out h4{color:var(--rd)}
    .scope-col ul li{font-size:.84rem;padding:.28rem 0 .28rem 1.1rem}
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
    .cta-bottom{background:linear-gradient(135deg,rgba(232,99,43,.08),rgba(15,23,42,.95));border:1px solid var(--bo);border-radius:16px;padding:2rem;text-align:center;margin:3rem 0}
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
        <span>ISO 27001 for SaaS</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">ISO 27001</span>
          <span className="badge badge-bl">SaaS</span>
          <span className="badge badge-gr">Cloud Security</span>
        </div>
        <h1 className="hero-h1">ISO 27001 for SaaS Companies -<em>Building Security</em> Into Your Product</h1>
        <p className="hero-sub">SaaS companies have a different ISO 27001 problem to industrial manufacturers and banks. Multi-tenant infrastructure, shared cloud responsibility, customer data segregation, and DevOps velocity all change which controls matter most. The scope, the controls, and the customer-trust artefacts that complete the certification.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Cybersecurity Expert</span></div>
            <div className="adate"><span>May 12, 2026</span><span className="dot">·</span><span id="read-time">📖 11 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1280&h=520&fit=crop" alt="SaaS team collaborating with cloud architecture" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">ISO 27001 was written before SaaS existed in the form it does today. Adapting it to multi-tenant cloud products takes deliberate work.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#why-different" className="toc-link">1. Why SaaS Is Different</a>
            <a href="#scoping" className="toc-link">2. Scoping the ISMS for SaaS</a>
            <a href="#controls" className="toc-link">3. The Controls That Matter Most</a>
            <a href="#cloud" className="toc-link">4. Cloud & Shared Responsibility</a>
            <a href="#devsecops" className="toc-link">5. Security in CI/CD</a>
            <a href="#subprocessors" className="toc-link">6. Sub-Processors & Supplier Security</a>
            <a href="#trust" className="toc-link">7. Customer-Trust Artefacts</a>
            <a href="#faq" className="toc-link">8. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">93</div><div className="stat-lbl">Annex A Controls (2022)</div></div>
          <div className="stat-card"><div className="stat-num">~30</div><div className="stat-lbl">Most Important for SaaS</div></div>
          <div className="stat-card"><div className="stat-num">27017</div><div className="stat-lbl">Cloud Add-On Standard</div></div>
          <div className="stat-card"><div className="stat-num">27018</div><div className="stat-lbl">Cloud Privacy Add-On</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>ISO 27001 is a general-purpose information security standard. It was designed to certify banks, hospitals, manufacturers, government agencies, and software companies under one framework. That generality is a feature -but it makes the standard hard to apply directly to a modern SaaS product. The controls that matter for a 200-person engineering team running a multi-tenant cloud platform are different from the ones that matter for a 200-person factory. The standard treats both as in scope.</p>

          <p>This guide is the SaaS-specific lens on ISO 27001. Scope decisions that fit a cloud product, the Annex A controls that actually carry the audit weight in this context, how the shared responsibility model affects the implementation, and the customer-trust artefacts that turn the certificate into a competitive asset. If you have read the <Link href="/resources/blog/iso-27001-implementation-roadmap" className="inline-link">general implementation roadmap</Link>, this is the SaaS-specific complement.</p>

          <section id="why-different">
            <h2>1. Why SaaS Is <em>Different</em></h2>
            <p>The standard does not care that you are SaaS. But four characteristics of the SaaS operating model materially affect how each clause and control plays out:</p>

            <ul>
              <li><strong>Multi-tenancy.</strong> Customer A's data sits on the same database, application stack, and infrastructure as Customer B's. Logical segregation, not physical separation, is the boundary. A.5.34 (privacy and protection of PII) and A.8.31 (separation of development, test, and production environments) become more sensitive -and tenant isolation becomes a control the auditor will explicitly test.</li>
              <li><strong>Cloud-native infrastructure.</strong> You do not own data centres. You do not own hardware. The physical and environmental controls of Annex A.7 are largely outsourced to the cloud provider -but the auditor still expects you to manage that outsourcing rigorously through supplier controls.</li>
              <li><strong>DevOps velocity.</strong> Production deploys happen daily, sometimes hourly. Change management cannot be a weekly Change Advisory Board meeting. The control must be designed to fit the velocity -automated security gates in CI/CD, peer review with security context, post-deploy monitoring, fast rollback.</li>
              <li><strong>Customer-data sensitivity.</strong> Customers send you their data, often regulated data (PII, PHI, financial). Your security posture is part of their compliance posture. They will ask security questionnaires, request the SoC reports, and require contractual protections (DPAs, sub-processor lists).</li>
            </ul>

            <div className="callout co-info">
              <div className="co-icon">📌</div>
              <div className="co-body">
                <strong>ISO 27001 is the foundation; 27017 and 27018 are the cloud lens</strong>
                <p>For most SaaS companies the right pattern is ISO 27001 as the primary certification, supplemented by ISO 27017 (cloud-services security) and often ISO 27018 (cloud privacy of PII). 27017 and 27018 are extensions, not separate certifications -they layer additional cloud-specific controls on top of an ISO 27001 ISMS. Larger customers will ask about 27017/27018 specifically when SaaS is your model.</p>
              </div>
            </div>
          </section>

          <section id="scoping">
            <h2>2. Scoping the ISMS <em>for SaaS</em></h2>
            <p>Scope is the single most consequential decision in any ISO 27001 project -but for SaaS companies the scope question has a specific shape. The product is the asset. Everything that supports the product is candidate scope.</p>

            <div className="scope-grid">
              <div className="scope-col sc-in">
                <h4>Typically In Scope</h4>
                <ul>
                  <li>Production environment hosting the SaaS product</li>
                  <li>The product itself -application code, APIs, infrastructure-as-code</li>
                  <li>CI/CD pipelines and build infrastructure</li>
                  <li>Development environments where production data may transit</li>
                  <li>Customer-facing identity and access systems</li>
                  <li>Customer support tooling with data access</li>
                  <li>Engineering, security, and infra teams</li>
                  <li>Logging, monitoring, and SIEM systems</li>
                  <li>Cloud accounts hosting the product</li>
                </ul>
              </div>
              <div className="scope-col sc-out">
                <h4>Typically Out of Scope</h4>
                <ul>
                  <li>Marketing website and content management</li>
                  <li>Lead CRM with no customer data</li>
                  <li>HR systems with no customer data access</li>
                  <li>Other non-SaaS product lines (separate scopes)</li>
                  <li>Corporate IT (laptops, email, productivity tools) where they do not handle customer data</li>
                  <li>Geographic regions with no production presence</li>
                  <li>Acquired products not yet integrated</li>
                </ul>
              </div>
            </div>

            <h3>The "single product or product family" rule</h3>
            <p>For multi-product SaaS companies, the cleanest first certification scopes to one product or one closely-related product family. Adding products later is straightforward -adding the wrong scope at the start is expensive. If you have two products on completely different infrastructure, certify them in sequence rather than together. The auditor's sample sizes scale with scope, not with product count.</p>

            <h3>The boundary statement</h3>
            <p>Write the scope as a sentence the auditor can verify, not a paragraph nobody reads. Example: "The ISMS covers the production infrastructure, application code, CI/CD pipelines, and customer-support tooling for ProductName, hosted in AWS regions us-east-1 and eu-west-1, including the engineering, security, and customer-support teams that operate it." That sentence is short enough to test on the ground -the auditor walks through every clause and asks "does this match the scope?"</p>
          </section>

          <section id="controls">
            <h2>3. The Annex A Controls That <em>Matter Most</em> for SaaS</h2>
            <p>All 93 Annex A controls are technically in play. But ~30 carry the audit weight for a typical SaaS organisation. The auditor will sample more deeply in these areas and expect strong operating evidence.</p>

            <h3>Identity and access -the highest-weight area for SaaS</h3>
            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.5.15-5.18</span><h4>Access Control, Identity Management, Authentication, Privileged Access</h4></div>
              <p>For SaaS, this is everything. MFA on every production system, SSO for the engineering team, just-in-time elevation for production access, regular access reviews. The auditor will sample 5-10 access changes over the audit period and verify approval, implementation, and review evidence for each.</p>
            </div>

            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.8.2-8.5</span><h4>Privileged Access, Information Access Restriction, Secure Authentication</h4></div>
              <p>The technical implementations of the policy controls above. Strong password policies, MFA enforcement (technical control verified, not just policy), SSH key rotation, service account management, secret storage. Auditors increasingly ask to see actual configuration -not just policy claims.</p>
            </div>

            <h3>Cryptography and data protection</h3>
            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.8.24</span><h4>Use of Cryptography</h4></div>
              <p>Encryption in transit (TLS configuration on every public endpoint), encryption at rest (database and object storage), key management lifecycle (rotation, escrow, revocation). Customers increasingly ask about key custody -whether you hold keys or use the cloud provider's KMS.</p>
            </div>

            <h3>Operations and change management</h3>
            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.8.32</span><h4>Change Management</h4></div>
              <p>The hardest control to get right for a SaaS company. Must be designed to fit DevOps velocity -automated security checks, peer review with security context, deploy approval lightweight for routine changes and rigorous for high-risk ones. Auditors test by sampling production changes over the audit period.</p>
            </div>

            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.8.15, A.8.16</span><h4>Logging, Monitoring Activities</h4></div>
              <p>What gets logged, where logs are stored, how long they are retained, who reviews them, what triggers an alert, who responds. For SaaS the volume is significant -auditors expect a SIEM or equivalent, with documented use cases and response procedures.</p>
            </div>

            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.8.13</span><h4>Information Backup</h4></div>
              <p>Backup strategy, retention, and restoration testing. The standard does not just want backups -it wants evidence you have tested restoring from them. A documented restoration test once or twice a year, with timing and outcome captured, is what auditors sample.</p>
            </div>

            <h3>Development and acquisition</h3>
            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.8.25, A.8.28</span><h4>Secure Development Life Cycle, Secure Coding</h4></div>
              <p>Documented SDLC with security gates at each phase. Code review requirements that include security considerations. Secure coding standards published and known to engineers. Often the lightest-touch area for SaaS audits, because mature engineering teams typically already do these things -the question is whether they are documented as requirements, not just practices.</p>
            </div>

            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.8.29</span><h4>Security Testing in Development</h4></div>
              <p>Static analysis (SAST), dependency scanning (SCA), dynamic application testing (DAST), and penetration testing. Auditors expect to see evidence of each running and triaging findings. Annual external pen test results are commonly sampled.</p>
            </div>

            <h3>Supplier security -heavy for SaaS</h3>
            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.5.19-5.23</span><h4>Information Security in Supplier Relationships</h4></div>
              <p>The most under-prepared area for many SaaS companies. Risk assessment of each sub-processor and major vendor. Contracts with DPA addenda for processors of customer data. Maintained sub-processor list. Onboarding and offboarding controls. Auditors will sample 3-5 supplier files and check completeness.</p>
            </div>

            <h3>Incident management</h3>
            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.5.24-5.28</span><h4>Information Security Incident Management</h4></div>
              <p>Incident classification, response procedure, evidence collection, notification (including regulatory and customer notification timelines), post-incident review. For SaaS, customer notification SLAs in DPAs become material here -if your contract says "notify within 72 hours of confirmed breach," your incident response process needs to make that achievable.</p>
            </div>

            <h3>Business continuity</h3>
            <div className="control-card">
              <div className="control-card-head"><span className="control-tag">A.5.29, A.5.30</span><h4>ICT Readiness for Business Continuity</h4></div>
              <p>The 2022 update added explicit ICT readiness requirements. For SaaS this means RTO/RPO definitions per service, documented failover procedures, regular continuity tests. Multi-region deployments make this much easier; single-region deployments require more rigorous documentation of degraded modes.</p>
            </div>
          </section>

          <section id="cloud">
            <h2>4. Cloud & <em>Shared Responsibility</em></h2>
            <p>Every major cloud provider publishes a shared responsibility model. AWS, Azure, GCP each define which security responsibilities sit with them and which sit with the customer. For ISO 27001, your scope covers your responsibilities, not theirs.</p>

            <h3>What the cloud provider handles</h3>
            <ul>
              <li>Physical security of data centres (A.7 controls largely outsourced)</li>
              <li>Hardware lifecycle and disposal</li>
              <li>Hypervisor security and tenant isolation at the hardware layer</li>
              <li>Network infrastructure between availability zones and regions</li>
            </ul>

            <h3>What you handle</h3>
            <ul>
              <li>Identity management within your cloud accounts</li>
              <li>Network segmentation (security groups, VPC design, firewalls)</li>
              <li>Encryption key management and configuration</li>
              <li>Application-layer security</li>
              <li>Logging and monitoring of your workloads</li>
              <li>Tenant isolation at the application layer</li>
              <li>Backup and restoration strategy for your data</li>
              <li>Cloud-account access controls and audit logging</li>
            </ul>

            <h3>How the audit treats the cloud provider</h3>
            <p>Auditors will not audit AWS, Azure, or GCP directly. They will check that you treat them as suppliers under A.5.19-5.23 -risk assessed, contracted (cloud provider Master Service Agreement + DPA), with their compliance posture verified (your auditor will ask to see the provider's most recent SoC 2, ISO 27001 certificate, and ISO 27017 certificate). They will also sample your configuration in the cloud -your IAM policies, your VPC design, your KMS configuration -to verify you are operating your side of the line correctly.</p>

            <div className="callout co-key">
              <div className="co-icon">🎯</div>
              <div className="co-body">
                <strong>The cloud provider's certificate does not certify you</strong>
                <p>A common misconception -"AWS is ISO 27001 certified, so we are covered." No. The cloud provider's certification covers their infrastructure. Yours has to cover what you build on top of their infrastructure. The provider's certificate is evidence of supplier compliance, not a substitute for your own certification.</p>
              </div>
            </div>
          </section>

          <section id="devsecops">
            <h2>5. <em>Security in CI/CD</em></h2>
            <p>The fastest-moving area of any SaaS company is the deploy pipeline. ISO 27001 does not require you to slow it down. It requires you to demonstrate that security is built into it.</p>

            <h3>The CI/CD security stack</h3>
            <ul>
              <li><strong>Pre-commit:</strong> Secret scanning, license compliance checks. Catches credentials before they reach the repository.</li>
              <li><strong>Pull request:</strong> Static application security testing (SAST), dependency vulnerability scanning (SCA), security-aware code review. Findings block the merge by default for high-severity items.</li>
              <li><strong>Build:</strong> Software bill of materials (SBOM) generation, container image scanning if applicable. Artefacts are signed before publication.</li>
              <li><strong>Pre-deploy:</strong> Infrastructure-as-code security checks (e.g. Terraform compliance scanning). Production deploy approval -automated for low-risk changes, gated for high-risk ones.</li>
              <li><strong>Post-deploy:</strong> Dynamic application security testing (DAST), runtime monitoring, anomaly detection. Rollback is automated for critical detections.</li>
            </ul>

            <p>This is one workflow with security at each phase, not a separate "security release". For auditors, the evidence is straightforward -pipeline configuration, scan results retained for the audit period, examples of findings that blocked a merge, examples of incident response triggered by post-deploy detection.</p>

            <h3>The audit evidence for CI/CD security</h3>
            <ul>
              <li><strong>Pipeline configuration</strong> stored in version control, demonstrating security checks are required not optional.</li>
              <li><strong>Sample findings</strong> from each tool over the audit period. Auditor wants to see findings, not just claims that scanning happens.</li>
              <li><strong>Triage records</strong> showing how findings are classified and prioritised. Severity-1 findings reaching production is a finding the auditor will follow up on.</li>
              <li><strong>Change-by-sample.</strong> Auditor picks 5 production changes from the audit period and walks each through the pipeline -what scans ran, what findings were generated, what approvals occurred, what monitoring detected.</li>
            </ul>
          </section>

          <section id="subprocessors">
            <h2>6. Sub-Processors & <em>Supplier Security</em></h2>
            <p>SaaS companies typically use 10-30 sub-processors -third parties that process customer data on their behalf. Email delivery, payment processing, analytics, customer support tooling, error tracking, monitoring providers. Each one is a supplier under Annex A.5.19-5.23.</p>

            <h3>The four supplier artefacts</h3>
            <ul>
              <li><strong>Sub-processor list.</strong> A maintained, customer-facing list of every sub-processor that handles customer data, plus the purpose and the data type. Most SaaS companies publish this on their trust page.</li>
              <li><strong>Supplier risk assessment.</strong> For each sub-processor, an assessment of the risk they introduce -based on what data they touch, where they operate, and their own compliance posture. Reviewed annually.</li>
              <li><strong>Contracts with DPAs.</strong> Data Processing Agreements addressing the GDPR and equivalent obligations. Required for any sub-processor handling personal data. Pre-signed by the vendor's standard DPA template, ideally, to avoid renegotiation per customer.</li>
              <li><strong>Sub-processor monitoring.</strong> Routine review of sub-processor compliance posture -annual review of their security certifications, incident notifications, contract changes. Documented in a supplier review log.</li>
            </ul>

            <h3>How auditors test supplier security</h3>
            <p>The auditor will pick 3-5 sub-processors from your list and trace each through the lifecycle. Was risk assessed before onboarding? Is the contract in place with appropriate DPA? Has the supplier been reviewed in the past 12 months? Is their certification still valid? Gaps in this lifecycle are common Minor NCs and occasional Major NCs.</p>
          </section>

          <section id="trust">
            <h2>7. Customer-Trust <em>Artefacts</em></h2>
            <p>ISO 27001 certification is internal -it certifies your ISMS. But once you have it, customers will want to consume it. The companion artefacts are what turn the certificate from compliance achievement into commercial asset.</p>

            <h3>The four artefacts that matter most</h3>

            <div className="control-card">
              <div className="control-card-head"><h4>Trust page</h4></div>
              <p>A public-facing page on your website that brings together your compliance posture in one place -ISO 27001 certificate (downloadable), security overview, sub-processor list, DPA template, incident disclosure history, security questionnaire response (often via Whistic, Vanta Trust Reports, or similar). Enterprise sales cycles materially shorten when a buyer can self-serve answers to standard questions.</p>
            </div>

            <div className="control-card">
              <div className="control-card-head"><h4>DPA template</h4></div>
              <p>A pre-drafted Data Processing Agreement that customers can sign as part of the contract. Saves negotiation time on every deal. Standard provisions: parties' roles, types of data processed, security measures, sub-processor list, breach notification timeline, audit rights, data return on termination.</p>
            </div>

            <div className="control-card">
              <div className="control-card-head"><h4>Security questionnaire response library</h4></div>
              <p>Customer security questionnaires (SIG, CAIQ, custom) ask hundreds of overlapping questions. Build a library of vetted answers that maps your ISMS to the common questionnaire frameworks. Answer once, reuse across customers. Annual review to keep answers current with the actual control state.</p>
            </div>

            <div className="control-card">
              <div className="control-card-head"><h4>Incident disclosure history</h4></div>
              <p>A history page listing material security incidents disclosed in the past 12-36 months. Transparency here is increasingly expected by enterprise customers. The absence of disclosures over a long window is sometimes more concerning than a small number of well-handled disclosures.</p>
            </div>

            <div className="callout co-info">
              <div className="co-icon">💡</div>
              <div className="co-body">
                <strong>The certificate is the foundation; the artefacts are the platform</strong>
                <p>Certification without the supporting customer-trust artefacts is incomplete. Most enterprise buyers will not request the ISO 27001 certificate directly -they will ask their standard set of questions, and the certificate is one of many inputs to their assessment. Build the certificate; build the platform around it.</p>
              </div>
            </div>
          </section>

          <div className="cta-bottom">
            <h3>Implementing ISO 27001 for a SaaS product?</h3>
            <p>SecComply has implemented ISO 27001 across many SaaS organisations -from early-stage seed to scale-up. Cloud-native scope, DevOps-compatible controls, sub-processor governance, and the trust artefacts that turn the certificate into a sales asset.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a SaaS-specific call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Does ISO 27001 cover our cloud infrastructure?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Yes -the cloud infrastructure that hosts the SaaS product is in scope. The shared-responsibility model means the cloud provider is responsible for some controls (physical security of data centres, hardware lifecycle, hypervisor isolation) and you are responsible for others (identity management, encryption configuration, network segmentation, logging). ISO 27001 audits your side of the line. Combine ISO 27001 with ISO 27017 (cloud-specific guidance) or ISO 27018 (cloud privacy) for sharper alignment with cloud-specific concerns.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>How is scope defined for a SaaS company?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Most SaaS companies scope the ISMS as "the production environment supporting the named product or product family, including the development, build, deployment, and operations infrastructure, the support function that has customer-data access, and the corporate functions that materially handle customer data such as legal and finance." Excluded scope is typically marketing tooling, lead-management CRM with no customer data, and any non-customer-facing product lines.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>What about our sub-processors?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Sub-processors -third parties that process customer data on your behalf, such as email delivery, payment processing, analytics -fall under Annex A supplier controls (A.5.19 through A.5.23). They are not in your ISMS scope, but your management of them is. Auditors will check sub-processor risk assessments, contracts with DPAs in place, and a maintained sub-processor list.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>How does ISO 27001 work with DevOps velocity?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>ISO 27001 does not require change-freeze gates that would slow DevOps. It requires change management to be defined, documented, and consistently applied. A well-designed change process for a SaaS company often looks like: peer code review with security checklist, automated security scanning in CI/CD, deploy-to-production approval that can be lightweight for routine changes and rigorous for high-risk ones, post-deploy monitoring. The audit tests whether the process exists and is followed, not whether it slows you down.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Do we need a customer trust page?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Not for ISO 27001 directly, but most B2B SaaS companies build one shortly after certification because it dramatically shortens enterprise sales cycles. A trust page typically includes the ISO 27001 certificate, SOC 2 if applicable, sub-processor list, DPA template, security overview, and incident disclosure history. Customers asking the same questionnaire over and over can self-serve answers.</p></div>
            </div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">SaaS-Specific Implementation</div>
            <h3>Cloud-native ISO 27001</h3>
            <p>Multi-tenant scope, DevOps-compatible controls, sub-processor governance, customer-trust platform.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a SaaS call →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">ISO 27001 Series</div>
            <ul>
              <li><Link href="/resources/blog/iso-27001-implementation-roadmap">Implementation Roadmap</Link></li>
              <li><Link href="/resources/blog/iso-27001-annex-a-controls">Annex A Controls (93)</Link></li>
              <li><Link href="/resources/blog/iso-27001-scope-definition">Scope Definition</Link></li>
              <li><Link href="/resources/blog/iso-27001-mandatory-documents">Mandatory Documents</Link></li>
              <li><Link href="/resources/blog/iso-27001-internal-audit">Internal Audit Guide</Link></li>
              <li><Link href="/resources/blog/iso-27001-certification-timeline">Certification Timeline</Link></li>
              <li><Link href="/resources/blog/iso-27001-stage-1-vs-stage-2">Stage 1 vs Stage 2</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
