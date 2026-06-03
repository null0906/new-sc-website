import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001MandatoryDocuments() {
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
        <title>Mandatory Documents for ISO 27001 -The Complete Checklist | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="The complete list of mandatory documents and records required by ISO 27001:2022. What auditors actually want to see at Stage 1 and Stage 2, common documentation mistakes, and how to structure your ISMS document set without over-engineering it." />
        <meta name="keywords" content="ISO 27001 mandatory documents, ISO 27001 documentation, ISMS documents, ISO 27001 records, Statement of Applicability, ISO 27001:2022 documentation requirements, Annex A documents, ISO 27001 checklist" />
        <meta property="og:title" content="Mandatory Documents for ISO 27001 -The Complete Checklist" />
        <meta property="og:description" content="14 mandatory documents, 12 mandatory records, and the recommended ones that make Stage 2 smoother. Plus the documentation mistakes that get organisations a major nonconformity." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-mandatory-documents" />
        <meta property="article:published_time" content="2026-05-04" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-mandatory-documents" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Mandatory Documents for ISO 27001 -The Complete Checklist","description":"The complete list of mandatory documents and records required by ISO 27001:2022, what auditors look for, and the structure that makes Stage 2 smoother.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-04","dateModified":"2026-05-04","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-mandatory-documents","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"Mandatory Documents for ISO 27001","item":"https://seccomply.net/resources/blog/iso-27001-mandatory-documents"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many documents does ISO 27001:2022 actually require?","acceptedAnswer":{"@type":"Answer","text":"ISO 27001:2022 explicitly mandates 14 documents and 12 records. The documents define what you do; the records prove you did it. Most organisations end up with 30-40 documents total once Annex A control-specific procedures are added -but only the 14 are mandatory at the clause level."}},{"@type":"Question","name":"Do policies need to be separate documents?","acceptedAnswer":{"@type":"Answer","text":"No. ISO 27001 only requires the information security policy at Clause 5.2 to exist; it does not prescribe a one-policy-per-control structure. Many organisations consolidate related controls into thematic policies (e.g. one Acceptable Use Policy covering several A.5/A.8 controls). What auditors check is whether the policy actually addresses the requirement, not how many documents you have."}},{"@type":"Question","name":"What is the difference between a document and a record?","acceptedAnswer":{"@type":"Answer","text":"A document describes what should happen -a policy, procedure, plan, or methodology. A record is evidence that it did happen -a meeting minute, training log, risk assessment output, audit report. Documents are reviewed and updated; records are kept as-is and retained for a defined period."}},{"@type":"Question","name":"Can a document be in any format?","acceptedAnswer":{"@type":"Answer","text":"Yes. Clause 7.5 only requires that documented information is identifiable, controlled, and available where needed. PDF, wiki page, Notion doc, Google Doc, Confluence page -all acceptable, provided version control, approval, and access controls are in place. The format matters far less than the controlled-information lifecycle."}},{"@type":"Question","name":"How long should we retain ISMS records?","acceptedAnswer":{"@type":"Answer","text":"ISO 27001 does not prescribe a retention period -it requires you to define and document one. Common practice: management review minutes for 3 years, internal audit records for the current and previous certification cycle (6 years), training records for the duration of employment plus 2 years, incident records for at least 3 years. Define the retention schedule once and document it in a Records Retention Policy."}}]}]}) }} />
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
    .data-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .data-table{width:100%;border-collapse:collapse;min-width:640px}
    .data-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .data-table td{padding:.7rem 1rem;font-size:.84rem;color:var(--tm);border-bottom:1px solid var(--bs);vertical-align:top}
    .data-table tr:last-child td{border-bottom:none}
    .data-table td:first-child{color:var(--tx);font-weight:600;white-space:nowrap}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(0, 129, 242,.06);border:1px solid rgba(0, 129, 242,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .doc-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.4rem 1.5rem;margin:1.2rem 0;border-left:3px solid var(--cy)}
    .doc-card-head{display:flex;align-items:center;gap:.7rem;margin-bottom:.7rem;flex-wrap:wrap}
    .doc-card-tag{display:inline-flex;align-items:center;padding:.22rem .6rem;background:var(--cy);color:white;border-radius:5px;font-size:.65rem;font-weight:800;letter-spacing:.06em;font-family:'JetBrains Mono',monospace}
    .doc-card h4{font-size:1.05rem;font-weight:700;color:var(--tx);margin:0;letter-spacing:-.01em}
    .doc-card p{font-size:.9rem;color:var(--tb);line-height:1.7;margin:0!important}
    .doc-card .audit-tip{background:rgba(0, 129, 242,.05);border-left:2px solid var(--cy);padding:.55rem .8rem;border-radius:0 6px 6px 0;font-size:.83rem;color:var(--tb);margin-top:.75rem}
    .doc-card .audit-tip strong{color:var(--cy);font-weight:700;display:inline}
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
        <span>Mandatory Documents</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">ISO 27001</span>
          <span className="badge badge-bl">Documentation</span>
          <span className="badge badge-gr">Audit-Ready</span>
        </div>
        <h1 className="hero-h1">Mandatory Documents for ISO 27001 -The Complete <em>Checklist</em></h1>
        <p className="hero-sub">14 mandatory documents, 12 mandatory records, and the recommended ones that make Stage 2 smoother. Plus the documentation mistakes that get organisations a major nonconformity on day one of the audit.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Cybersecurity Expert</span></div>
            <div className="adate"><span>May 4, 2026</span><span className="dot">·</span><span id="read-time">📖 10 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1568667256549-094345857637?w=1280&h=520&fit=crop" alt="Organized document stack and folders on a desk" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Documentation is the spine of the ISMS. Auditors spend 40% of their time reading it -so build it for reading, not for show.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-counts" className="toc-link">1. What Counts as a Mandatory Document</a>
            <a href="#the-14-documents" className="toc-link">2. The 14 Mandatory Documents</a>
            <a href="#the-12-records" className="toc-link">3. The 12 Mandatory Records</a>
            <a href="#annex-a-docs" className="toc-link">4. Annex A Documents to Add</a>
            <a href="#structure" className="toc-link">5. Structuring the Document Set</a>
            <a href="#common-mistakes" className="toc-link">6. Documentation Mistakes Auditors Flag</a>
            <a href="#review-cycle" className="toc-link">7. The Review & Update Cycle</a>
            <a href="#faq" className="toc-link">8. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">14</div><div className="stat-lbl">Mandatory Documents</div></div>
          <div className="stat-card"><div className="stat-num">12</div><div className="stat-lbl">Mandatory Records</div></div>
          <div className="stat-card"><div className="stat-num">93</div><div className="stat-lbl">Annex A Controls (2022)</div></div>
          <div className="stat-card"><div className="stat-num">40%</div><div className="stat-lbl">Of Audit Time on Docs</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>The ISO 27001 standard is famously open about documentation. Clause 7.5 demands "documented information" -but the standard never gives you a numbered list of documents to produce. That openness is the source of two opposite problems. Some organisations under-document and arrive at Stage 1 with a Statement of Applicability and not much else. Others over-document, producing 80 policies that nobody reads and nobody maintains. Both fail the audit, just for different reasons.</p>

          <p>This guide gives you the actual list -the 14 documents and 12 records that ISO 27001:2022 explicitly requires, plus the practical document set most organisations add on top to satisfy Annex A. It also covers the document mistakes auditors flag most often. If you have read the <Link href="/resources/blog/iso-27001-implementation-roadmap" className="inline-link">ISO 27001 implementation roadmap</Link> already, this is the deeper-dive companion on the documentation workstream.</p>

          <section id="what-counts">
            <h2>1. What Counts as a Mandatory <em>Document</em></h2>
            <p>The standard uses one term -<strong>documented information</strong> -to cover two distinct things. Both are mandatory; both serve different purposes.</p>
            <ul>
              <li><strong>Documents</strong> describe what should happen. Policies, procedures, methodologies, plans. They are reviewed and updated as the organisation changes.</li>
              <li><strong>Records</strong> are evidence that something happened. Meeting minutes, audit reports, training logs, risk assessment outputs. They are retained as-is, not updated.</li>
            </ul>
            <p>The auditor checks both. They read your documents to understand the design of your ISMS. They sample your records to verify the design is implemented. A perfect policy with no supporting records is design without operation -that gets flagged. Operational evidence with no underlying policy is operation without design -also flagged.</p>

            <div className="callout co-info">
              <div className="co-icon">📌</div>
              <div className="co-body">
                <strong>The auditor's mental model</strong>
                <p>Document = "Tell me what you do." Record = "Show me you did it." If you cannot produce both for a given clause, that clause is a finding.</p>
              </div>
            </div>
          </section>

          <section id="the-14-documents">
            <h2>2. The <em>14 Mandatory Documents</em></h2>
            <p>These are explicitly required by named clauses of ISO 27001:2022. If any one is missing, that is grounds for a major nonconformity at Stage 1.</p>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 4.3</span><h4>ISMS Scope</h4></div>
              <p>A single document defining the boundaries of the ISMS -the products, services, locations, technology, and organisational units in scope. Must reference the issues identified at 4.1 (internal/external context) and the interested parties at 4.2.</p>
              <div className="audit-tip"><strong>What auditors check:</strong> that the scope statement matches what they observe on the ground -the systems they sample come from the scoped environment, not from out-of-scope subsidiaries.</div>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 5.2</span><h4>Information Security Policy</h4></div>
              <p>The top-level policy approved by senior management. Must state the organisation's commitment to information security, set the framework for objectives, and reference satisfaction of applicable requirements. Typically 2-4 pages.</p>
              <div className="audit-tip"><strong>Common mistake:</strong> writing a 30-page policy. The Clause 5.2 policy is a charter, not an operations manual. Keep operational detail in subordinate policies.</div>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 6.1.2</span><h4>Information Security Risk Assessment Process</h4></div>
              <p>The documented methodology for identifying, analysing, and evaluating information security risks. Must define your risk criteria, scoring scales, and acceptance thresholds. This is the method document -not the risk register itself.</p>
              <div className="audit-tip"><strong>What auditors check:</strong> that the methodology was followed consistently. If you change the scoring scale halfway through, that is a process deviation that needs to be justified.</div>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 6.1.3</span><h4>Information Security Risk Treatment Process</h4></div>
              <p>Defines how risks are treated -accept, mitigate, transfer, avoid -and the workflow from identified risk to approved treatment. Must reference the Statement of Applicability and link to control selection.</p>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 6.1.3(d)</span><h4>Statement of Applicability (SoA)</h4></div>
              <p>The single most scrutinised document in an ISO 27001 audit. For each of the 93 Annex A controls: include or exclude, justification for the decision, current implementation status, and which risks the control treats. See our <Link href="/resources/blog/soa-iso-27001-complete-guide" className="inline-link">complete SoA guide</Link> for the structure and column-by-column build.</p>
              <div className="audit-tip"><strong>Auditor priority:</strong> excluded controls. Every exclusion needs a reason that survives challenge. "Not applicable" is not a reason; "We have no physical premises in scope, therefore A.7.x is excluded" is.</div>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 6.2</span><h4>Information Security Objectives</h4></div>
              <p>Measurable objectives at relevant functions and levels. Each objective must have a target, owner, timeline, and resources. Auditors expect to see progress reviewed at management review meetings.</p>
              <div className="audit-tip"><strong>Common mistake:</strong> "Improve security posture" is not an objective. "Achieve 95% on-time patching of critical vulnerabilities by Q3" is.</div>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 7.2</span><h4>Evidence of Competence</h4></div>
              <p>Documentation showing that people performing security-relevant roles have the necessary competence -through education, training, or experience. CVs, certifications, training completion records all count.</p>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 7.5</span><h4>Documented Information Required by the Standard</h4></div>
              <p>A meta-requirement -the standard says "documented information determined by the organisation as being necessary for the effectiveness of the ISMS." In practice this means a master document register listing all ISMS documents, their owners, version numbers, and review cycles.</p>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 8.1</span><h4>Operational Planning & Control</h4></div>
              <p>Documentation of how planned changes, outsourced processes, and operational controls are managed. Often satisfied by a Change Management Policy and supporting procedures.</p>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 8.2</span><h4>Risk Assessment Results</h4></div>
              <p>The output of applying the methodology -typically a risk register. Each entry: asset, threat, vulnerability, likelihood, impact, inherent risk, treatment, residual risk, owner.</p>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 8.3</span><h4>Risk Treatment Results</h4></div>
              <p>The Risk Treatment Plan -the document that lists every treatment decision, the controls applied, owners, timelines, and status. The bridge between risk register and SoA.</p>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 9.1</span><h4>Monitoring & Measurement Results</h4></div>
              <p>Defines what is monitored, by whom, how often, and how results are evaluated. Plus the actual measurement data. Without this, you cannot demonstrate ISMS effectiveness -which is the core of Stage 2.</p>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 9.2</span><h4>Internal Audit Programme</h4></div>
              <p>A multi-year plan covering all ISMS clauses and applicable Annex A controls. Plus the audit procedures (planning, execution, reporting). See our <Link href="/resources/blog/iso-27001-internal-audit" className="inline-link">internal audit guide</Link> for the execution detail.</p>
            </div>

            <div className="doc-card">
              <div className="doc-card-head"><span className="doc-card-tag">CL 9.3</span><h4>Management Review Procedure</h4></div>
              <p>How management reviews the ISMS -frequency (typically annual or semi-annual), required inputs, expected outputs, attendees. The procedure document; the minutes are records.</p>
            </div>

            <div className="callout co-key">
              <div className="co-icon">🎯</div>
              <div className="co-body">
                <strong>The 14 above are the floor, not the ceiling</strong>
                <p>Every organisation produces more documents than these -see Annex A controls below. But missing any of these 14 will be flagged at Stage 1.</p>
              </div>
            </div>
          </section>

          <section id="the-12-records">
            <h2>3. The <em>12 Mandatory Records</em></h2>
            <p>Records are the operational evidence. Auditors sample them; they do not read every entry but they will test consistency, completeness, and retention.</p>

            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Record</th><th>Clause</th><th>What Auditors Sample</th></tr></thead>
                <tbody>
                  <tr><td>Competence evidence</td><td>7.2</td><td>2-3 employee training records spanning the audit period</td></tr>
                  <tr><td>Communication records</td><td>7.4</td><td>Examples of internal and external security communications</td></tr>
                  <tr><td>Risk assessment results</td><td>8.2</td><td>Risk register entries, plus updates over the audit period</td></tr>
                  <tr><td>Risk treatment results</td><td>8.3</td><td>Risk Treatment Plan entries closed or progressed during period</td></tr>
                  <tr><td>Operational planning records</td><td>8.1</td><td>Change records, exception approvals, outsourcing reviews</td></tr>
                  <tr><td>Monitoring & measurement results</td><td>9.1</td><td>Metrics dashboards, KPI reports, scan results</td></tr>
                  <tr><td>Internal audit programme</td><td>9.2</td><td>Audit schedule covering current and upcoming cycles</td></tr>
                  <tr><td>Internal audit reports</td><td>9.2</td><td>2-4 recent audit reports with findings and follow-up</td></tr>
                  <tr><td>Management review results</td><td>9.3</td><td>Minutes from at least one full management review</td></tr>
                  <tr><td>Nonconformity records</td><td>10.1</td><td>NC log, root cause analyses, corrective actions, verification</td></tr>
                  <tr><td>Corrective action results</td><td>10.1</td><td>Closed NCs with effectiveness evidence</td></tr>
                  <tr><td>Continual improvement evidence</td><td>10.2</td><td>Improvement initiatives tracked through to completion</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>Records cannot be retrofitted</strong>
                <p>Documents can be written the week before Stage 1. Records cannot -they are time-stamped operational artefacts. If you have no internal audit reports because you have not yet run one, that is the audit finding regardless of how good the procedure document is.</p>
              </div>
            </div>
          </section>

          <section id="annex-a-docs">
            <h2>4. Annex A Documents -The <em>Add-On Set</em></h2>
            <p>The 14 mandatory documents above cover the management system clauses. Annex A controls -the 93 technical and organisational controls -typically require their own supporting documentation when implemented. Not every control needs its own policy; many are bundled.</p>

            <p>The Annex A documents most organisations end up producing:</p>
            <ul>
              <li><strong>Acceptable Use Policy</strong> -covers A.5.10, A.5.11, A.5.14, A.5.15 (user responsibilities, asset handling, transfer of information, access control)</li>
              <li><strong>Access Control Policy</strong> -A.5.15, A.5.16, A.5.17, A.5.18 (logical access controls, identity, authentication, privileged access)</li>
              <li><strong>Cryptographic Controls Policy</strong> -A.8.24 (use of cryptography)</li>
              <li><strong>Information Classification Policy</strong> -A.5.12, A.5.13 (classification and labelling)</li>
              <li><strong>Supplier Security Policy</strong> -A.5.19, A.5.20, A.5.21, A.5.22, A.5.23 (supplier relationships)</li>
              <li><strong>Incident Management Policy & Procedure</strong> -A.5.24 through A.5.28 (incident response lifecycle)</li>
              <li><strong>Business Continuity Plan</strong> -A.5.29, A.5.30 (ICT readiness for business continuity)</li>
              <li><strong>Backup Policy</strong> -A.8.13 (information backup)</li>
              <li><strong>Logging & Monitoring Policy</strong> -A.8.15, A.8.16 (logging and monitoring)</li>
              <li><strong>Secure Development Policy</strong> -A.8.25, A.8.26, A.8.27, A.8.28 (development lifecycle, security testing, secure coding)</li>
              <li><strong>Physical Security Policy</strong> -A.7.x (only if you have physical premises in scope)</li>
              <li><strong>HR Security Policy</strong> -A.6.1 through A.6.6 (screening, terms, awareness, disciplinary, post-employment)</li>
            </ul>

            <p>The total document set typically ends up at 25-35 for a small-to-medium organisation. Larger organisations with multiple business units, geographies, or product lines may have 50-70. Beyond that, you are probably over-documenting.</p>
          </section>

          <section id="structure">
            <h2>5. <em>Structuring</em> the Document Set</h2>
            <p>A predictable document hierarchy makes maintenance easier and audits faster. The structure most ISO 27001 practitioners settle on:</p>

            <h3>Level 1 -Policies (the "what" and "why")</h3>
            <p>Senior-management approved. Typically 2-5 pages each. State principles and high-level rules. Do not contain step-by-step procedures. Reviewed annually.</p>

            <h3>Level 2 -Procedures (the "how")</h3>
            <p>Owner-approved. Detail the operational steps. Reference the parent policy. Reviewed when underlying processes change or annually, whichever comes first.</p>

            <h3>Level 3 -Work instructions, templates, forms</h3>
            <p>Tactical artefacts that support procedures. Form templates for change requests, risk assessment spreadsheets, incident response checklists. Updated as needed.</p>

            <h3>Level 4 -Records</h3>
            <p>Time-stamped evidence. Cannot be edited after the fact. Retained per the retention schedule.</p>

            <div className="callout co-info">
              <div className="co-icon">💡</div>
              <div className="co-body">
                <strong>Naming convention saves audit time</strong>
                <p>Use a consistent naming convention like <code>POL-SEC-001 Information Security Policy v3.2</code>. POL = Policy, PRO = Procedure, FRM = Form, REC = Record. When an auditor asks "show me the access control policy", you find it in 10 seconds, not 10 minutes.</p>
              </div>
            </div>
          </section>

          <section id="common-mistakes">
            <h2>6. Documentation <em>Mistakes</em> Auditors Flag</h2>

            <h3>1. Copy-pasted template documents</h3>
            <p>Free templates from the internet often contain references to controls or scenarios that do not apply to your organisation. Auditors spot this immediately when the policy mentions, say, an industrial control system you do not have. Templates are starting points, not finished documents. Every template needs editing to match your actual operations.</p>

            <h3>2. Version control gaps</h3>
            <p>Documents without version numbers, change history, or approval signatures fail the basic controlled-information test of Clause 7.5. Every document needs a version, an approver, a date, and a review cycle.</p>

            <h3>3. Policies that reference procedures that do not exist</h3>
            <p>"Refer to the Incident Response Procedure for details" -and the procedure is missing. Cross-references must be checked. A document referencing another document that does not exist is a documented-information failure.</p>

            <h3>4. Last-reviewed dates more than 12 months old</h3>
            <p>Clause 7.5.3 requires documents to be "available and suitable for use when and where needed" -which auditors interpret as up-to-date. A policy last reviewed in 2023 will be challenged in a 2026 audit.</p>

            <h3>5. The SoA missing implementation status</h3>
            <p>"Included" or "Excluded" is not enough. The SoA must show, for each included control, the current implementation status. Otherwise the auditor cannot tell which controls are claimed but not actually operating.</p>

            <h3>6. Records that do not match the documented retention period</h3>
            <p>If your Records Retention Policy says training records are kept for 3 years and the auditor finds none older than 6 months, that is either non-retention or shadow deletion. Both fail Clause 7.5.3.</p>

            <h3>7. Approval signatures from people who have left the company</h3>
            <p>A common one. The CTO approved the policy in 2024, left in 2025, and the policy still shows their name. This is a control failure in document management, even if the content is fine. Re-approve when the approver changes.</p>
          </section>

          <section id="review-cycle">
            <h2>7. The Review & <em>Update Cycle</em></h2>
            <p>Documents do not get written once and forgotten. The ISMS is a living system; the documentation has to reflect that. The cycle most organisations adopt:</p>

            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Document Type</th><th>Review Cycle</th><th>Trigger Events</th></tr></thead>
                <tbody>
                  <tr><td>Information Security Policy</td><td>Annual</td><td>Org change, scope change, major incident</td></tr>
                  <tr><td>SoA</td><td>Annual</td><td>Risk treatment changes, new controls deployed</td></tr>
                  <tr><td>Risk Assessment Methodology</td><td>Annual</td><td>Material change to risk landscape</td></tr>
                  <tr><td>Risk Register & Treatment Plan</td><td>Quarterly (live)</td><td>New risks, control changes, treatment closure</td></tr>
                  <tr><td>Operational Procedures</td><td>Annual or on-change</td><td>Process change, technology change, post-incident</td></tr>
                  <tr><td>Internal Audit Programme</td><td>Annual</td><td>Scope or org change</td></tr>
                  <tr><td>Business Continuity Plan</td><td>Annual + test-driven</td><td>After each BCP test or real incident</td></tr>
                </tbody>
              </table>
            </div>

            <p>Treat the review cycle as a calendar event, not a triggered process. Schedule each document for review on a fixed date each year and ride out the calendar -most teams find this far more reliable than relying on triggers, which tend to be missed.</p>
          </section>

          <div className="cta-bottom">
            <h3>Ready to build an audit-ready document set?</h3>
            <p>SecComply builds the full ISO 27001 documentation pack -the 14 mandatory documents, the supporting Annex A policies, and the records framework -calibrated to your scope. Aligned with our <Link href="/resources/blog/iso-27001-implementation-roadmap" className="inline-link" style={{color:'#fff',borderBottomColor:'rgba(255,255,255,.5)'}}>implementation roadmap</Link> and the auditor expectations you will face at Stage 1 and Stage 2.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Talk to a consultant →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>How many documents does ISO 27001:2022 actually require?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>ISO 27001:2022 explicitly mandates 14 documents and 12 records. The documents define what you do; the records prove you did it. Most organisations end up with 30-40 documents total once Annex A control-specific procedures are added -but only the 14 are mandatory at the clause level.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Do policies need to be separate documents?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>No. ISO 27001 only requires the information security policy at Clause 5.2 to exist; it does not prescribe a one-policy-per-control structure. Many organisations consolidate related controls into thematic policies (e.g. one Acceptable Use Policy covering several A.5/A.8 controls). What auditors check is whether the policy actually addresses the requirement, not how many documents you have.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>What is the difference between a document and a record?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>A document describes what should happen -a policy, procedure, plan, or methodology. A record is evidence that it did happen -a meeting minute, training log, risk assessment output, audit report. Documents are reviewed and updated; records are kept as-is and retained for a defined period.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Can a document be in any format?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Yes. Clause 7.5 only requires that documented information is identifiable, controlled, and available where needed. PDF, wiki page, Notion doc, Google Doc, Confluence page -all acceptable, provided version control, approval, and access controls are in place. The format matters far less than the controlled-information lifecycle.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>How long should we retain ISMS records?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>ISO 27001 does not prescribe a retention period -it requires you to define and document one. Common practice: management review minutes for 3 years, internal audit records for the current and previous certification cycle (6 years), training records for the duration of employment plus 2 years, incident records for at least 3 years. Define the retention schedule once and document it in a Records Retention Policy.</p></div>
            </div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Get the Documents Right</div>
            <h3>Audit-ready document pack</h3>
            <p>The 14 mandatory documents, Annex A policies, and records framework -built to your scope.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a consultation →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">ISO 27001 Series</div>
            <ul>
              <li><Link href="/resources/blog/iso-27001-implementation-roadmap">Implementation Roadmap</Link></li>
              <li><Link href="/resources/blog/iso-27001-gap-assessment">Gap Assessment Guide</Link></li>
              <li><Link href="/resources/blog/iso-27001-clause-by-clause">Clause by Clause</Link></li>
              <li><Link href="/resources/blog/soa-iso-27001-complete-guide">Statement of Applicability</Link></li>
              <li><Link href="/resources/blog/iso-27001-annex-a-controls">Annex A Controls (93)</Link></li>
              <li><Link href="/resources/blog/iso-27001-scope-definition">Scope Definition</Link></li>
              <li><Link href="/resources/blog/iso-27001-risk-assessment">Risk Assessment</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
