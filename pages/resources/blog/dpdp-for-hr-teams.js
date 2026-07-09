import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPForHRTeams() {
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
        <title>DPDP Act for HR Teams - Employee Data Handling Obligations | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="How HR teams must handle employee personal data under India's DPDP Act -recruitment to exit, why consent is weak in the workplace, Section 7 legitimate uses, workplace monitoring limits, retention against statutory rules, and the processor contracts behind your HRMS and payroll vendors." />
        <meta name="keywords" content="DPDP Act HR teams, employee data protection India, Section 7 legitimate uses DPDP, employee consent DPDP Act, HRMS data processor agreement, workplace monitoring DPDP, employee data retention India, HR compliance DPDP" />
        <meta property="og:title" content="DPDP Act for HR Teams - Employee Data Handling Obligations" />
        <meta property="og:description" content="HR holds more sensitive personal data than any other function. Here's how the DPDP Act applies across the employee lifecycle -from recruitment to exit." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-for-hr-teams" />
        <meta property="article:published_time" content="2026-06-01" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-for-hr-teams" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"DPDP Act for HR Teams - Employee Data Handling Obligations","description":"HR quietly holds more sensitive personal data than any other function. Notice and lawful basis for employee data, Section 7 legitimate uses, the recruitment-to-exit lifecycle, monitoring limits, retention against statutory rules, and the processor contracts behind your HRMS.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-06-01","dateModified":"2026-06-01","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-for-hr-teams","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP for HR","item":"https://seccomply.net/resources/blog/dpdp-for-hr-teams"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do employees have to consent to HR processing?","acceptedAnswer":{"@type":"Answer","text":"Not for everything. The DPDP Act treats consent as compromised in an employment relationship because employees rarely have a genuine ability to refuse. Section 7 sets out certain legitimate uses that let a Data Fiduciary process personal data without consent for specified purposes, including for employment -such as safeguarding the employer from loss or liability, or providing a subsidy, benefit, or service that the employee has sought. This is not a blanket exemption: it only covers what is reasonably necessary for that stated purpose. For processing outside those legitimate uses, consent is still the safer basis."}},{"@type":"Question","name":"Can we monitor employee devices and communications?","acceptedAnswer":{"@type":"Answer","text":"Generally yes, but not without limits. Monitoring falls under the same DPDP principles as any other processing: it needs a lawful basis (often a Section 7 legitimate use tied to safeguarding the employer), it must be proportionate to that purpose, and employees must be given clear notice of what is monitored and why -typically through a monitoring policy referenced in the privacy notice. Covert, disproportionate, or open-ended monitoring is the kind of practice regulators and courts are likely to scrutinise first."}},{"@type":"Question","name":"How long can we retain ex-employee records?","acceptedAnswer":{"@type":"Answer","text":"Longer than the DPDP Act alone would suggest. The Act expects Data Fiduciaries to stop retaining personal data once its purpose is served, unless retention is required by law. Several labour, tax, and provident fund statutes impose their own minimum retention periods for payroll and employment records that extend well beyond the last working day. Where a statutory retention obligation applies, it overrides an employee's erasure request for that specific record -but only for the data and duration the law actually requires, not indefinitely."}},{"@type":"Question","name":"Do employees have data principal rights against their employer?","acceptedAnswer":{"@type":"Answer","text":"Yes. Once you hold their personal data, employees are Data Principals like any customer or user, and you are their Data Fiduciary. They can request access to and correction of their records, ask how their data is processed, and raise a grievance through your internal grievance redressal mechanism before escalating to the Data Protection Board of India. HR teams should have a defined, documented process for handling these requests."}},{"@type":"Question","name":"Are our payroll and HRMS vendors Data Processors?","acceptedAnswer":{"@type":"Answer","text":"Yes, almost always. Any HRMS, payroll processor, background-verification vendor, or benefits administrator that handles employee personal data on your instructions is a Data Processor under the DPDP Act, and you remain the Data Fiduciary responsible for that data. Each of these vendors needs a Data Processing Agreement covering the data categories they handle, security measures, breach notification back to you, sub-processor approval, and data return or deletion obligations when the contract ends."}}]}]}) }} />
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
        <span>DPDP for HR</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 4 -Industry</span>
          <span className="badge badge-am">Employee Data</span>
        </div>
        <h1 className="hero-h1">DPDP Act for HR Teams - <em>Employee Data</em> Handling Obligations</h1>
        <p className="hero-sub">HR quietly holds more sensitive personal data than any other function - and the DPDP Act applies to every bit of it. Notice and lawful basis for employee data, why consent is weak in the workplace and where Section 7 legitimate uses fit, the recruitment-to-exit lifecycle, monitoring limits, retention against statutory rules, and the processor contracts behind your HRMS and payroll.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>June 1, 2026</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=520&fit=crop" alt="HR team handling employee data" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">HR handles more sensitive personal data than any other function in the company -it deserves the same DPDP discipline as your customer data, not less.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#scope" className="toc-link">1. The Data HR Holds</a>
            <a href="#basis" className="toc-link">2. Consent &amp; Section 7</a>
            <a href="#lifecycle" className="toc-link">3. Recruitment to Exit</a>
            <a href="#monitoring" className="toc-link">4. Workplace Monitoring</a>
            <a href="#retention" className="toc-link">5. Retention vs Deletion</a>
            <a href="#rights" className="toc-link">6. Employee Rights</a>
            <a href="#checklist" className="toc-link">7. Compliance Checklist</a>
            <a href="#faq" className="toc-link">8. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">Sec 7</div><div className="stat-lbl">Legitimate Uses</div></div>
          <div className="stat-card"><div className="stat-num">8</div><div className="stat-lbl">Data Principal Rights</div></div>
          <div className="stat-card"><div className="stat-num">₹250 cr</div><div className="stat-lbl">Max Penalty</div></div>
          <div className="stat-card"><div className="stat-num">DPA</div><div className="stat-lbl">HRMS &amp; Payroll</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Ask most security teams which function handles the most sensitive personal data in the organisation, and they will point to the product team, or perhaps finance. The honest answer is usually HR. Between recruitment files, salary and bank details, medical and insurance claims, performance reviews, and disciplinary records, HR routinely holds the most complete, most personal, and most consequential dataset in the company -on every single employee, not just the customers who chose to sign up. The DPDP Act applies to every bit of it, and HR teams are often the least prepared function to answer for it.</p>

          <p>This article is part of our industry-specific DPDP series. If you have not yet built the foundational programme -data inventory, notice and consent mechanisms, a grievance process -start with our <Link href="/resources/blog/dpdp-compliance-roadmap-90-days" className="inline-link">90-day roadmap</Link> before layering on HR-specific obligations. What follows assumes that foundation and focuses on where HR data handling diverges from a typical customer-data compliance programme.</p>

          <section id="scope">
            <h2>The Data <em>HR</em> Holds</h2>
            <p>HR data does not look like a single dataset -it looks like several, each collected at a different stage and often stored in a different system entirely.</p>
            <ul>
              <li><strong>Recruitment</strong> -resumes, cover letters, interview notes, assessment scores, and, where used, background verification reports covering education, employment history, and criminal record checks.</li>
              <li><strong>Payroll and statutory</strong> -bank account details, PAN, Aadhaar or other identity documents, salary structure, tax declarations, and provident fund or insurance nomination details.</li>
              <li><strong>Health and insurance</strong> -medical certificates, insurance claims, maternity or paternity leave records, and details of dependents covered under group health policies.</li>
              <li><strong>Performance and conduct</strong> -appraisal ratings, performance improvement plans, disciplinary proceedings, and internal complaint records.</li>
              <li><strong>Background checks</strong> -reference checks, prior employer verification, and, in some sectors, credit or litigation history checks.</li>
            </ul>
            <p>Every category above is personal data under the DPDP Act's broad definition -see our explainer on <Link href="/resources/blog/what-is-personal-data-dpdp" className="inline-link">what counts as personal data</Link> for the full test. None of it needs to be "sensitive" in the way other data protection laws define the term to be in scope; the DPDP Act does not carve out a separate, lighter-touch category for employee records. If your data inventory does not have a row for every one of these HR systems, it is incomplete.</p>
          </section>

          <section id="basis">
            <h2>Consent, Power Imbalance &amp; <em>Section 7</em></h2>
            <p>Consent under the DPDP Act has to be free, specific, informed, unconditional, and given through a clear affirmative action -see our piece on <Link href="/resources/blog/consent-under-dpdp-act" className="inline-link">consent under the DPDP Act</Link> for the full mechanics. In an employment relationship, "free" is the word that breaks down fastest. An employee asked to consent to HR processing as a condition of employment has not really been given a choice; declining is rarely a realistic option. Relying on consent as the sole legal basis for routine HR processing therefore sits on shaky ground.</p>
            <p>This is exactly the gap Section 7 is designed to close. Section 7 lists certain legitimate uses that let a Data Fiduciary process personal data without seeking consent, for specified purposes -among them, processing for the purpose of employment, or for safeguarding the employer from loss or liability, such as prevention or detection of fraud, or provision of any subsidy, benefit, or service that the employee has sought.</p>
            <div className="callout co-key">
              <div className="co-icon">🔑</div>
              <div className="co-body">
                <strong>Section 7 is not a blanket licence</strong>
                <p>It only covers processing that is reasonably necessary for the stated purpose. Payroll processing to pay salaries sits squarely inside it; using the same salary data to build a marketing profile does not. Map each HR processing activity to its actual legitimate use -don't assume the whole HR function falls under one umbrella justification.</p>
              </div>
            </div>
            <p>For processing that clearly falls outside employment purposes -sending personal-account marketing, sharing data with unrelated third parties, or optional benefit programmes an employee could reasonably decline -consent remains the appropriate basis, and it must meet the same free, specific, informed bar as any other DPDP consent.</p>
          </section>

          <section id="lifecycle">
            <h2>Recruitment to <em>Exit</em></h2>
            <p>HR data problems rarely start with a policy gap; they start with data that outlives its stage. Walking the employee lifecycle end to end surfaces most of the risk.</p>

            <div className="case-card">
              <h3>Recruitment and onboarding</h3>
              <p>Candidate resumes and assessment data are collected for a role that often goes to someone else -how long is the unsuccessful candidate's data kept, and why. Bank, tax, and identity documents collected at onboarding are frequently duplicated across payroll, HRMS, and benefits vendors, each with its own retention clock.</p>
            </div>
            <div className="case-card">
              <h3>Active employment</h3>
              <p>Performance and disciplinary records accumulate across appraisal cycles, expense claims get linked to travel and location data, and health or insurance claims move through a third-party administrator who now also holds a copy of that data.</p>
            </div>
            <div className="case-card">
              <h3>Exit</h3>
              <p>Final settlement calculations, exit interview notes, and reference data are retained to answer future verification requests from other employers. Ask what genuinely needs to persist after the last working day, and for how long -rather than defaulting to "keep it all."</p>
            </div>

            <p>Treat each stage as a separate retention and access decision rather than one continuous "employee file." A resume from a rejected candidate does not need the same retention as a payroll record for a current employee, and a manager should not retain performance review access to a report who left the team eighteen months ago.</p>
          </section>

          <section id="monitoring">
            <h2>Workplace <em>Monitoring</em> Limits</h2>
            <p>Monitoring is where HR data handling collides hardest with employee expectations. CCTV in office premises, email and endpoint monitoring, geolocation tracking for field or delivery staff, and access-badge logs are all personal data processing, and all subject to the same DPDP principles as anything else HR touches.</p>
            <p>Three things keep monitoring defensible:</p>
            <ul>
              <li><strong>Proportionality</strong> -the monitoring should match a genuine, stated purpose, such as security or fraud prevention, rather than blanket surveillance because it is technically possible.</li>
              <li><strong>Notice</strong> -employees should know, in advance and in plain language, what is monitored, why, and who can see the results. A monitoring clause buried in a policy nobody reads does not meet this bar in spirit.</li>
              <li><strong>Purpose limitation</strong> -data collected for security monitoring should not quietly become an input into performance reviews, and vice versa, without a fresh look at whether that reuse is justified.</li>
            </ul>
            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>Covert monitoring is the highest-risk pattern</strong>
                <p>Keystroke logging, screen recording, or location tracking with no defined scope or retention period is the practice most likely to draw scrutiny -both through the employee grievance process and in a compliance audit. If a monitoring practice would be hard to explain to the employees subject to it, that is usually a sign it needs redesigning before it needs defending.</p>
              </div>
            </div>
          </section>

          <section id="retention">
            <h2>Retention vs <em>Deletion</em></h2>
            <p>The DPDP Act expects Data Fiduciaries to stop processing and erase personal data once the purpose it was collected for is served -see our detailed piece on <Link href="/resources/blog/dpdp-erasure-deletion-requests" className="inline-link">erasure and deletion requests</Link>. For HR data, that principle runs into a wall of statutory retention obligations that most other functions do not face at the same scale.</p>
            <p>Labour law, provident fund and social security legislation, and tax law each impose their own minimum retention periods for payroll registers, attendance records, statutory returns, and related employment documentation -obligations that in several cases extend years beyond an employee's last working day. Where a specific statutory retention requirement applies to a record, it overrides a blanket erasure request for that record: you cannot delete what the law requires you to keep.</p>
            <p>The nuance that trips teams up is scope. A statutory retention obligation typically covers a narrow, defined set of records -not the entire HR file. A performance review, an old interview assessment, or a health insurance claim from three employers ago rarely carries the same statutory hook as a payroll register. Build your HR retention schedule record-by-record against the actual statutory basis, rather than defaulting to "keep everything, indefinitely, just in case."</p>
          </section>

          <section id="rights">
            <h2>Employee <em>Rights</em> &amp; Grievances</h2>
            <p>It is easy for HR to think of itself only as the administrator of DPDP compliance for the workforce, and to forget that employees are also Data Principals in their own right -see our overview of <Link href="/resources/blog/data-principal-fiduciary-processor" className="inline-link">data principals, fiduciaries and processors</Link> for how the roles map. As Data Principals, employees can ask what personal data you hold about them, request correction of inaccurate records, and raise concerns about how their data is used.</p>
            <p>Practically, this means HR needs a defined internal grievance redressal process: a known channel for an employee to raise a data-handling concern, a reasonable response timeline, and an escalation path if the employee is unsatisfied -before the matter reaches the Data Protection Board of India. Routing these requests through whichever manager happens to receive the email is not a process; it is a gap waiting to surface during an audit or, worse, a dispute. Publish the channel, train HR business partners to recognise a data-rights request when they see one, and log every request and its resolution.</p>
          </section>

          <section id="checklist">
            <h2>Compliance <em>Checklist</em></h2>
            <p>Pulling the above into something HR can act on before the next systems or vendor review:</p>
            <div className="case-card">
              <h3>Before your next HR systems review</h3>
              <ul>
                <li>Map every HR data category against a documented legal basis -a Section 7 legitimate use or consent -not an assumed one.</li>
                <li>Confirm your privacy notice actually covers HR processing, including monitoring, and is given to employees, not just customers.</li>
                <li>Set a record-level retention schedule that separates statutory-hold data from discretionary HR data.</li>
                <li>Define and publish an internal grievance channel for employee data-rights requests.</li>
                <li>Inventory every HRMS, payroll, background-check, and benefits vendor and confirm each has a signed DPA.</li>
              </ul>
            </div>
            <p>Each of the vendors behind your HR stack is a Data Processor handling employee personal data on your instructions -the same DPA discipline that applies to your customer-facing SaaS stack applies here, and needs a place in your vendor register.</p>
            <div className="vendor-table-wrap">
              <table className="vendor-table">
                <thead>
                  <tr><th>Category</th><th>Typical Vendors</th><th>Data Handled</th></tr>
                </thead>
                <tbody>
                  <tr><td>HRMS platforms</td><td>Darwinbox, Keka, Workday</td><td>Full employee record</td></tr>
                  <tr><td>Payroll processors</td><td>ADP, GreytHR</td><td>Bank, tax, salary data</td></tr>
                  <tr><td>Background verification</td><td>AuthBridge, First Advantage</td><td>ID, education, employment history</td></tr>
                  <tr><td>Benefits and insurance</td><td>TPAs, insurance brokers</td><td>Health, dependent data</td></tr>
                  <tr><td>Expense and travel</td><td>Concur, Zoho Expense</td><td>Location, spend data</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <p>HR is not exempt from any DPDP obligation the rest of the business is building toward; it just has to apply that same discipline to data most functions never touch -health records, disciplinary history, salary details, and the family information behind insurance claims. Get the legal basis, the lifecycle discipline, the monitoring boundaries, and the vendor contracts right, and HR becomes one of the better-governed functions in the company rather than the one everyone hopes never gets audited.</p>

          <div className="cta-bottom">
            <h3>Need to bring your HR data handling into DPDP shape?</h3>
            <p>SecComply audits HR data flows across recruitment, payroll, and benefits, drafts the DPAs your HRMS and payroll vendors need, and builds the grievance process your employees can actually use.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book an HR data review call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Do employees have to consent to HR processing?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Not for everything. The DPDP Act treats consent as compromised in an employment relationship because employees rarely have a genuine ability to refuse. Section 7 sets out certain legitimate uses that let a Data Fiduciary process personal data without consent for specified purposes, including for employment -such as safeguarding the employer from loss or liability, or providing a subsidy, benefit, or service that the employee has sought. This is not a blanket exemption: it only covers what is reasonably necessary for that stated purpose. For processing outside those legitimate uses, consent is still the safer basis.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can we monitor employee devices and communications?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Generally yes, but not without limits. Monitoring falls under the same DPDP principles as any other processing: it needs a lawful basis (often a Section 7 legitimate use tied to safeguarding the employer), it must be proportionate to that purpose, and employees must be given clear notice of what is monitored and why -typically through a monitoring policy referenced in the privacy notice. Covert, disproportionate, or open-ended monitoring is the kind of practice regulators and courts are likely to scrutinise first.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How long can we retain ex-employee records?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Longer than the DPDP Act alone would suggest. The Act expects Data Fiduciaries to stop retaining personal data once its purpose is served, unless retention is required by law. Several labour, tax, and provident fund statutes impose their own minimum retention periods for payroll and employment records that extend well beyond the last working day. Where a statutory retention obligation applies, it overrides an employee's erasure request for that specific record -but only for the data and duration the law actually requires, not indefinitely.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Do employees have data principal rights against their employer?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Yes. Once you hold their personal data, employees are Data Principals like any customer or user, and you are their Data Fiduciary. They can request access to and correction of their records, ask how their data is processed, and raise a grievance through your internal grievance redressal mechanism before escalating to the Data Protection Board of India. HR teams should have a defined, documented process for handling these requests.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Are our payroll and HRMS vendors Data Processors?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Yes, almost always. Any HRMS, payroll processor, background-verification vendor, or benefits administrator that handles employee personal data on your instructions is a Data Processor under the DPDP Act, and you remain the Data Fiduciary responsible for that data. Each of these vendors needs a Data Processing Agreement covering the data categories they handle, security measures, breach notification back to you, sub-processor approval, and data return or deletion obligations when the contract ends.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">HR Data Audit</div>
            <h3>Get HR compliant</h3>
            <p>HR data mapping, Section 7 basis review, and vendor DPAs for HRMS and payroll -built for how your HR stack actually works.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a review →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/data-principal-fiduciary-processor">Data Principals, Fiduciaries &amp; Processors</Link></li>
              <li><Link href="/resources/blog/consent-under-dpdp-act">Consent Under DPDP</Link></li>
              <li><Link href="/resources/blog/what-is-personal-data-dpdp">What Is Personal Data</Link></li>
              <li><Link href="/resources/blog/dpdp-erasure-deletion-requests">Erasure &amp; Deletion Requests</Link></li>
              <li><Link href="/resources/blog/dpdp-privacy-notice-template">Privacy Notice Template</Link></li>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Roadmap</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
