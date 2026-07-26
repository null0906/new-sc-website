import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPComplianceRoadmap90Days() {
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
        <title>DPDP Compliance Roadmap -10 Steps to Get Compliant in 90 Days | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A practical 90-day roadmap to becoming DPDP-compliant. Ten concrete steps covering scope, data mapping, consent, rights workflows, grievance officer, vendor management, and breach response -for Indian startups and mid-sized companies." />
        <meta name="keywords" content="DPDP Act compliance, 90 day roadmap, DPDP 10 steps, Indian data protection, Data Fiduciary obligations, DPDP implementation, consent mechanism India, grievance officer, breach response India" />
        <meta property="og:title" content="DPDP Compliance Roadmap -10 Steps to Get Compliant in 90 Days" />
        <meta property="og:description" content="A 90-day sprint to a defensible DPDP baseline. Ten steps with timelines, ownership, and the audit trail that the Data Protection Board will want to see." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-compliance-roadmap-90-days" />
        <meta property="article:published_time" content="2026-04-30" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-compliance-roadmap-90-days" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"DPDP Compliance Roadmap -10 Steps to Get Compliant in 90 Days","description":"A 90-day, ten-step roadmap to a defensible DPDP baseline -for Indian startups and mid-sized companies.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-04-30","dateModified":"2026-04-30","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-compliance-roadmap-90-days","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP 90-Day Roadmap","item":"https://seccomply.net/resources/blog/dpdp-compliance-roadmap-90-days"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does the DPDP Act apply to my small startup?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you process digital personal data of Indian individuals -including names, emails, phone numbers, or device identifiers -the DPDP Act applies, regardless of company size. Some obligations scale with volume and sensitivity (such as Significant Data Fiduciary designation), but the baseline requirements around consent, notice, data principal rights, and grievance redressal apply to every Data Fiduciary."}},{"@type":"Question","name":"Is 90 days really enough time to get compliant?","acceptedAnswer":{"@type":"Answer","text":"For a small-to-mid-size organisation with a clear scope and committed leadership, yes -90 days is enough to reach a defensible baseline. Larger organisations or those with sprawling vendor ecosystems may need longer. The 90-day target gets you to the point where you have a privacy notice, working consent flow, documented rights workflows, designated grievance officer, vendor DPAs, and a breach plan. Continuous maintenance follows."}},{"@type":"Question","name":"What is the biggest pitfall in DPDP rollouts?","acceptedAnswer":{"@type":"Answer","text":"Treating it as a one-time legal exercise rather than an operational programme. Companies that update the privacy notice and call it done are caught short when a data principal exercises a right, a vendor causes a breach, or the Board asks for evidence of consent. Operationalising the obligations -workflows, logs, vendor reviews, breach drills -is the real work."}},{"@type":"Question","name":"Do we need a separate role for the Grievance Officer?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily a separate hire. The Grievance Officer can be an existing employee (commonly the DPO, Head of Privacy, Legal Counsel, or CISO) provided they have the authority and bandwidth to respond to data principal grievances within the prescribed timelines. The contact details must be published in the privacy notice."}},{"@type":"Question","name":"What if our vendor refuses to sign a DPA?","acceptedAnswer":{"@type":"Answer","text":"You have three options -negotiate alternative terms that achieve equivalent protection, accept the residual risk and document it, or change vendors. For high-volume or sensitive-data vendors that refuse contractual protections, switching is usually the right answer. Documenting the risk decision is essential either way -the Board will want evidence you considered vendor compliance, not just whether you used vendors."}}]}]}) }} />
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
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgb(var(--accent-rgb) / .06);border:1px solid rgb(var(--accent-rgb) / .2)}
    .co-warn{background:rgb(var(--yellow-rgb) / .06);border:1px solid rgb(var(--yellow-rgb) / .2)}
    .co-info{background:rgb(var(--purple-rgb) / .07);border:1px solid rgb(var(--purple-rgb) / .2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .step-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.5rem 0;border-left:3px solid var(--cy)}
    .step-card-head{display:flex;align-items:center;gap:.75rem;margin-bottom:.85rem;flex-wrap:wrap}
    .step-num{display:inline-flex;align-items:center;padding:.25rem .7rem;background:var(--cy);color:white;border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;font-family:'JetBrains Mono',monospace}
    .step-time{font-size:.75rem;color:var(--tm);font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .step-card h3{font-size:1.15rem;font-weight:700;color:var(--tx);margin:0 0 .65rem;letter-spacing:-.01em}
    .step-card p{font-size:.95rem;color:var(--tb);line-height:1.7;margin-bottom:.8rem!important}
    .step-card p:last-child{margin-bottom:0!important}
    .step-card ul{margin:.6rem 0 0!important}
    .step-card ul li{font-size:.88rem!important;padding:.3rem 0 .3rem 1.2rem!important}
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
        <span>DPDP 90-Day Roadmap</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 2 -Core Concepts</span>
          <span className="badge badge-gr">90-Day Sprint</span>
        </div>
        <h1 className="hero-h1">DPDP Compliance Roadmap -10 Steps to Get Compliant in <em>90 Days</em></h1>
        <p className="hero-sub">India's Digital Personal Data Protection Act 2023 is enforceable. If your company collects personal data from Indian users, you have obligations -and limited time to meet them. A 90-day sprint to a defensible baseline.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>April 30, 2026</span><span className="dot">·</span><span id="read-time">📖 9 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1280&h=520&fit=crop" alt="Compliance roadmap planning" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">DPDP compliance is a programme, not a project. Ninety days gets you to a defensible baseline; the maintenance starts the day after.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#why-90" className="toc-link">1. Why 90 Days</a>
            <a href="#step-1" className="toc-link">2. Step 1 -Determine Applicability</a>
            <a href="#step-2-3" className="toc-link">3. Steps 2-3 -Data Mapping & Role</a>
            <a href="#step-4-5" className="toc-link">4. Steps 4-5 -Notice & Consent</a>
            <a href="#step-6-7" className="toc-link">5. Steps 6-7 -Rights & Grievance</a>
            <a href="#step-8" className="toc-link">6. Step 8 -Vendor Agreements</a>
            <a href="#step-9-10" className="toc-link">7. Steps 9-10 -Breach Plan & Audit</a>
            <a href="#faq" className="toc-link">8. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">90</div><div className="stat-lbl">Day Sprint</div></div>
          <div className="stat-card"><div className="stat-num">10</div><div className="stat-lbl">Concrete Steps</div></div>
          <div className="stat-card"><div className="stat-num">8</div><div className="stat-lbl">Data Principal Rights</div></div>
          <div className="stat-card"><div className="stat-num">₹250cr</div><div className="stat-lbl">Max Penalty</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>The DPDP Act is not just another regulatory checkbox. It introduces a genuine data rights framework modelled partially on GDPR but calibrated for the Indian market. Getting compliant does not have to be overwhelming -but it does require structure. This guide breaks the work into 10 concrete steps you can execute in 90 days.</p>

          <p>If you have read our <Link href="/resources/blog/what-is-dpdp-act-explained" className="inline-link">introduction to the DPDP Act</Link>, this is the implementation companion. The phases below assume a small-to-mid-size organisation with a clear scope and committed leadership.</p>

          <section id="why-90">
            <h2>Why <em>90 Days</em></h2>
            <p>The Data Protection Board of India is expected to begin formal enforcement in 2025-26. Companies that wait for penalty notices will pay far more -in fines, remediation costs, and reputational damage -than those who begin now. A 90-day sprint is achievable for most startups and mid-sized companies with the right structure. Larger organisations or those with sprawling vendor ecosystems may need longer; the structure remains the same.</p>

            <div className="callout co-info">
              <div className="co-icon">📌</div>
              <div className="co-body">
                <strong>The Board will ask for evidence, not effort</strong>
                <p>"We tried" is not a defence. The Board will look at your privacy notice, consent logs, vendor DPAs, breach plan, and rights workflows. If those exist and are operating, you are defensible. If they do not, the company size or stage of implementation will not save you.</p>
              </div>
            </div>
          </section>

          <section id="step-1">
            <h2>Step 1 -Determine If the Act <em>Applies to You</em></h2>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 1</span><span className="step-time">Days 1-3</span></div>
              <h3>Confirm scope</h3>
              <p>Not every entity falls under the Act. You are subject to DPDP if you process digital personal data of Indian individuals -either within India or overseas when offering goods or services to people in India.</p>
              <ul>
                <li>You operate a website, app, or platform that collects data from Indian users</li>
                <li>You process employee data digitally in India</li>
                <li>You are a Data Processor handling data on behalf of a Data Fiduciary</li>
              </ul>
              <p><strong>Quick check:</strong> if you have a sign-up form, a contact form, or any digital touchpoint that collects a name, email, phone, or location from someone in India -you are in scope.</p>
            </div>
          </section>

          <section id="step-2-3">
            <h2>Steps 2-3 -<em>Data Mapping</em> & Role Classification</h2>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 2</span><span className="step-time">Days 4-10</span></div>
              <h3>Map your personal data</h3>
              <p>You cannot protect what you cannot see. Conduct a data mapping exercise across the entire organisation. For every data flow, record: what personal data is collected, from whom (customers, employees, vendors), where it is stored, who has access, and how long it is retained.</p>
              <p>Document this in a data inventory register. This becomes the foundation for everything else -privacy notice, rights workflows, retention schedules, vendor reviews, and breach scoping.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 3</span><span className="step-time">Days 4-7 (parallel)</span></div>
              <h3>Identify your role -Fiduciary or Processor</h3>
              <p>Under the DPDP Act, your obligations differ based on your role. A Data Fiduciary determines the purpose and means of processing. A Data Processor processes data on behalf of a Fiduciary. Many companies are both, depending on the context.</p>
              <p><strong>Key insight:</strong> if you use a third-party email platform to send notifications to your users, you are the Fiduciary and the platform provider is the Processor. If you provide a SaaS product to other companies, you are the Processor for their customer data and the Fiduciary for your own employees and vendor relationships.</p>
            </div>
          </section>

          <section id="step-4-5">
            <h2>Steps 4-5 -<em>Privacy Notice</em> & Consent Mechanism</h2>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 4</span><span className="step-time">Days 11-18</span></div>
              <h3>Review and rewrite your privacy notice</h3>
              <p>Your existing privacy policy likely does not meet DPDP requirements. A compliant notice must clearly state what personal data is collected, the purposes of processing, how data principals can exercise their rights, who the data is shared with, and how to contact your grievance officer.</p>
              <p>Write it in plain language. The Act requires notices to be clear and accessible -legalese-heavy policies will not satisfy the standard. See our <Link href="/resources/blog/dpdp-privacy-notice-template" className="inline-link">DPDP privacy notice template</Link> for a structured starting point.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 5</span><span className="step-time">Days 15-25</span></div>
              <h3>Build a lawful consent mechanism</h3>
              <p>Consent is the primary lawful basis under DPDP. It must be free, specific, informed, unconditional, and unambiguous -given through a clear affirmative action (no pre-ticked boxes) and easily withdrawable at any time.</p>
              <p>Implement a consent management layer in your web and app. Store consent records with timestamps and the version of the notice in effect at the time. See our <Link href="/resources/blog/dpdp-consent-mechanism-web-app" className="inline-link">consent mechanism implementation guide</Link> for the technical detail.</p>
            </div>
          </section>

          <section id="step-6-7">
            <h2>Steps 6-7 -<em>Rights Workflows</em> & Grievance Officer</h2>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 6</span><span className="step-time">Days 20-35</span></div>
              <h3>Establish data principal rights workflows</h3>
              <p>Data principals have rights under the Act, and you must respond to each within the specified timelines. Build internal workflows for: right to access, right to correction, right to erasure, right to grievance redressal, and right to nominate a nominee for data in case of death or incapacity.</p>
              <p>Designate responsible owners for each right. Log every request and response. The volume will be low at first; the workflow needs to handle volume reliably when it grows.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 7</span><span className="step-time">Days 25-30</span></div>
              <h3>Appoint a Grievance Officer</h3>
              <p>Every Data Fiduciary must designate a Grievance Officer who handles data principal complaints. This person must be contactable and must respond to grievances within the prescribed timeline. Publish their contact details in your privacy notice. This can be an existing employee (DPO, Head of Privacy, Legal Counsel, or CISO) with the authority and bandwidth to act.</p>
            </div>
          </section>

          <section id="step-8">
            <h2>Step 8 -<em>Vendor Agreements</em></h2>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 8</span><span className="step-time">Days 30-50</span></div>
              <h3>Review vendor and third-party agreements</h3>
              <p>If you share personal data with vendors (cloud providers, analytics tools, marketing platforms, payment processors), ensure your contracts include Data Processing Agreements (DPAs) that bind them to DPDP obligations. Review all existing vendor agreements for compliance gaps.</p>
              <p>For each vendor processing Indian personal data: confirm the DPA is in place, confirm sub-processor disclosure, confirm breach notification timelines back to you, and confirm cross-border transfer terms align with our <Link href="/resources/blog/dpdp-cross-border-data-transfer" className="inline-link">cross-border transfer guidance</Link>.</p>
            </div>
          </section>

          <section id="step-9-10">
            <h2>Steps 9-10 -<em>Breach Plan</em> & Compliance Audit</h2>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 9</span><span className="step-time">Days 50-70</span></div>
              <h3>Implement a data breach response plan</h3>
              <p>The DPDP Act requires mandatory notification to the Data Protection Board and affected data principals in the event of a breach. You need an internal incident detection and classification process, clear escalation paths, pre-drafted notification templates, and a log of all incidents including near-misses.</p>
              <p>The Board will want evidence that you had a plan, not just that something bad happened. See our <Link href="/resources/blog/dpdp-breach-notification" className="inline-link">breach notification guide</Link> for the full procedure.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 10</span><span className="step-time">Days 70-90</span></div>
              <h3>Run a compliance audit and close gaps</h3>
              <p>In the final stretch, conduct an internal audit against your DPDP obligations using a structured checklist: privacy notice updated and published, consent mechanism live and logging correctly, data principal rights workflows tested end-to-end, grievance officer appointed and contactable, vendor DPAs in place, breach response plan tested.</p>
              <p>Document your compliance status. This documentation becomes your evidence if the Board ever investigates.</p>
            </div>
          </section>

          <h2>Final Thoughts -<em>Compliance Is a Programme</em></h2>
          <p>DPDP compliance is a programme, not a project. The 90-day sprint gets you to a defensible baseline. From there, you maintain, monitor, and continuously improve. Companies that treat compliance as ongoing practice will be far better positioned than those who do a one-time exercise and assume the work is done.</p>

          <div className="cta-bottom">
            <h3>Need to run the 90-day sprint?</h3>
            <p>SecComply helps Indian startups and enterprises achieve DPDP compliance with a structured programme -scoping, data mapping, privacy notice, consent flows, rights workflows, vendor DPAs, and breach plan, end-to-end.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a DPDP scoping call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>

            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Does the DPDP Act apply to my small startup?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Yes, if you process digital personal data of Indian individuals -including names, emails, phone numbers, or device identifiers -the DPDP Act applies, regardless of company size. Some obligations scale with volume and sensitivity (such as Significant Data Fiduciary designation), but the baseline requirements around consent, notice, data principal rights, and grievance redressal apply to every Data Fiduciary.</p></div></div>

            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Is 90 days really enough time to get compliant?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>For a small-to-mid-size organisation with a clear scope and committed leadership, yes -90 days is enough to reach a defensible baseline. Larger organisations or those with sprawling vendor ecosystems may need longer. The 90-day target gets you to the point where you have a privacy notice, working consent flow, documented rights workflows, designated grievance officer, vendor DPAs, and a breach plan. Continuous maintenance follows.</p></div></div>

            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What is the biggest pitfall in DPDP rollouts?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Treating it as a one-time legal exercise rather than an operational programme. Companies that update the privacy notice and call it done are caught short when a data principal exercises a right, a vendor causes a breach, or the Board asks for evidence of consent. Operationalising the obligations -workflows, logs, vendor reviews, breach drills -is the real work.</p></div></div>

            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Do we need a separate role for the Grievance Officer?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Not necessarily a separate hire. The Grievance Officer can be an existing employee (commonly the DPO, Head of Privacy, Legal Counsel, or CISO) provided they have the authority and bandwidth to respond to data principal grievances within the prescribed timelines. The contact details must be published in the privacy notice.</p></div></div>

            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What if our vendor refuses to sign a DPA?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>You have three options -negotiate alternative terms that achieve equivalent protection, accept the residual risk and document it, or change vendors. For high-volume or sensitive-data vendors that refuse contractual protections, switching is usually the right answer. Documenting the risk decision is essential either way -the Board will want evidence you considered vendor compliance, not just whether you used vendors.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">90-Day DPDP Sprint</div>
            <h3>Get to a defensible baseline</h3>
            <p>Scoping, data mapping, notice, consent, rights, vendors, breach plan. End-to-end programme delivery.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a scoping call →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/what-is-dpdp-act-explained">DPDP Act -Explained</Link></li>
              <li><Link href="/resources/blog/dpdp-consent-mechanism-web-app">Consent Mechanism on Web/App</Link></li>
              <li><Link href="/resources/blog/dpdp-privacy-notice-template">Privacy Notice Template</Link></li>
              <li><Link href="/resources/blog/dpdp-breach-notification">Breach Notification</Link></li>
              <li><Link href="/resources/blog/dpdp-erasure-deletion-requests">Erasure Requests</Link></li>
              <li><Link href="/resources/blog/dpdp-cross-border-data-transfer">Cross-Border Data Transfer</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
