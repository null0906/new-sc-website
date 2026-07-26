import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPForHealthTechHospitals() {
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
        <title>DPDP Act for HealthTech and Hospitals - Handling Patient Data the Right Way | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="How hospitals and HealthTech platforms handle patient data the right way under the DPDP Act -lawful processing, guardian consent, least-privilege access, breach reporting, and retention that respects medical-record law." />
        <meta name="keywords" content="DPDP for healthtech, DPDP for hospitals, patient data protection India, health data DPDP Act, hospital data fiduciary, guardian consent health records, ABDM DPDP, medical record retention India, Significant Data Fiduciary healthcare, hospital breach notification DPDP" />
        <meta property="og:title" content="DPDP Act for HealthTech and Hospitals - Handling Patient Data the Right Way" />
        <meta property="og:description" content="Health records are the most sensitive data most organisations will ever hold, and insiders -not outside attackers -cause the costliest breaches. What hospitals and HealthTech platforms must do under DPDP to handle patient data correctly." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-for-healthtech-hospitals" />
        <meta property="article:published_time" content="2026-05-22" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-for-healthtech-hospitals" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"DPDP Act for HealthTech and Hospitals - Handling Patient Data the Right Way","description":"How hospitals and HealthTech platforms handle patient data under the DPDP Act -lawful processing, guardian consent, least-privilege access, breach reporting, and retention that respects medical-record law.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-22","dateModified":"2026-05-22","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-for-healthtech-hospitals","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP for HealthTech","item":"https://seccomply.net/resources/blog/dpdp-for-healthtech-hospitals"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is health data a special category under DPDP?","acceptedAnswer":{"@type":"Answer","text":"Not explicitly. Unlike GDPR, the DPDP Act does not carve out a formal special category of sensitive personal data with extra statutory conditions. But the general obligation to implement reasonable security safeguards under Section 8 applies with the same force to every record, and the consequences of a health-data leak -reputational, medical, and personal -are severe enough that hospitals and HealthTech platforms should treat every patient record as if it carried the highest protection tier, regardless of what the Act formally requires."}},{"@type":"Question","name":"Hospital or HealthTech vendor -who is the Data Fiduciary?","acceptedAnswer":{"@type":"Answer","text":"It depends on who decides why and how the data is processed, not on what a contract calls either party. A hospital treating a patient is almost always the Data Fiduciary for that clinical relationship. An EHR or hospital-management software vendor that stores and processes records purely on the hospital's instructions is typically the Data Processor. But a HealthTech platform that runs its own consumer-facing app -a telemedicine service or diagnostics app that onboards patients directly -is the Data Fiduciary for that separate patient relationship, even while acting as a Processor for hospital clients elsewhere."}},{"@type":"Question","name":"Can we process patient data in an emergency without consent?","acceptedAnswer":{"@type":"Answer","text":"Yes, within limits. Section 7 of the DPDP Act recognises legitimate uses that do not require consent, including processing necessary to respond to a medical emergency involving a threat to the life or immediate health of the data principal or another individual, and processing necessary for providing medical treatment during an epidemic, outbreak of disease, or other threat to public health. This covers an unconscious patient arriving in the ER, but it is scoped to the emergency itself -once the patient is stabilised, ordinary consent and notice obligations resume for any further processing."}},{"@type":"Question","name":"How long must we keep medical records versus delete them?","acceptedAnswer":{"@type":"Answer","text":"A validly raised erasure request does not override a retention period mandated by another law. Hospitals are typically bound by separate medical-record-keeping rules -for example, Medical Council of India professional-conduct regulations that require indoor-patient records to be retained for a defined period, with medico-legal cases often held longer given potential litigation. Build a retention schedule per record type, honour the statutory minimum first, and apply erasure only once that mandated window has lapsed or for data that falls outside it."}},{"@type":"Question","name":"Are large hospitals Significant Data Fiduciaries?","acceptedAnswer":{"@type":"Answer","text":"Possibly. Section 10 lets the Central Government designate Significant Data Fiduciaries based on factors including the volume and sensitivity of personal data processed, risk to data principals, and impact on sovereignty and public order. Large hospital networks and HealthTech platforms processing sensitive health data at scale are plausible candidates, but the designation itself comes through official notification, not self-assessment -track the Board's guidance and prepare as though the obligations, including appointing a DPO, could apply to you."}}]}]}) }} />
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
        <span>DPDP for HealthTech</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 4 -Industry</span>
          <span className="badge badge-am">Patient Data</span>
        </div>
        <h1 className="hero-h1">DPDP Act for HealthTech and Hospitals -<em>Handling Patient Data</em> the Right Way</h1>
        <p className="hero-sub">Health records are the most sensitive data most organisations will ever hold, and the costliest breaches are usually insiders looking at records they should not. What hospitals and HealthTech platforms must do under DPDP -lawful processing, guardian consent, least-privilege access, breach reporting, and retention that respects medical-record law.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>May 22, 2026</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1280&h=520&fit=crop" alt="Hospital and health technology patient data" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Patient data carries the highest cost of getting privacy wrong -hospitals and HealthTech platforms should treat every record with the strongest safeguards the DPDP Act allows.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#roles" className="toc-link">1. Who Is the Fiduciary?</a>
            <a href="#sensitivity" className="toc-link">2. Why Health Data Needs Care</a>
            <a href="#consent" className="toc-link">3. Consent, Guardians &amp; Emergencies</a>
            <a href="#access" className="toc-link">4. Access Control &amp; Insider Risk</a>
            <a href="#retention" className="toc-link">5. Retention vs the Right to Erase</a>
            <a href="#sectoral" className="toc-link">6. DPDP Meets ABDM</a>
            <a href="#checklist" className="toc-link">7. Compliance Checklist</a>
            <a href="#faq" className="toc-link">8. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">{'<18'}</div><div className="stat-lbl">Guardian Consent</div></div>
          <div className="stat-card"><div className="stat-num">₹250 cr</div><div className="stat-lbl">Max Penalty</div></div>
          <div className="stat-card"><div className="stat-num">8</div><div className="stat-lbl">Data Principal Rights</div></div>
          <div className="stat-card"><div className="stat-num">SDF</div><div className="stat-lbl">Likely for Large Providers</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Health records sit in a category of their own. A leaked shopping history is an inconvenience; a leaked diagnosis or psychiatric history can end a marriage, a job, or a career. Hospitals, diagnostic chains, HealthTech platforms, and Electronic Health Record (EHR) vendors operating in India now sit inside the <Link href="/resources/blog/dpdp-act-2023-explained" className="inline-link">Digital Personal Data Protection Act, 2023</Link> (DPDP Act), and healthcare has a pattern of harm unlike a typical SaaS company: the costliest breaches are rarely outside attackers, they are staff or contractors looking at records they had no clinical reason to open.</p>

          <p>A hospital network processes identifiers, diagnoses, prescriptions, billing, insurance, and increasingly biometric data, often spread across a dozen systems and third-party vendors. Getting the basics right -who is the Data Fiduciary, how consent works for the very young and the unconscious, who can see a record, and how long you must keep it -is what separates a defensible programme from a Data Protection Board complaint waiting to happen. For the wider compliance sequence, see our <Link href="/resources/blog/dpdp-compliance-roadmap-90-days" className="inline-link">90-day roadmap</Link>.</p>

          <section id="roles">
            <h2>1. Who Is the Fiduciary -<em>Hospital or Vendor?</em></h2>
            <p>The DPDP Act draws a hard line between the <Link href="/resources/blog/data-principal-fiduciary-processor" className="inline-link">Data Fiduciary and the Data Processor</Link>, and healthcare is one of the sectors where the line gets misread most often. The Fiduciary is whoever determines the purpose and means of processing -not whoever holds the contract, and not whoever wrote the software.</p>
            <p>In the common arrangement, the hospital is the Data Fiduciary: it decides why a record is created, who can access it for treatment, and how long it is kept clinically. The EHR or hospital-management-software vendor that stores and processes those records on the hospital's instructions is typically the Data Processor -it has no independent right to use the data for its own purposes.</p>

            <div className="callout co-info">
              <div className="co-icon">ℹ</div>
              <div className="co-body">
                <strong>The label in the contract does not decide the role</strong>
                <p>Calling a vendor a "processor" in an agreement does not make it one if that vendor actually decides why patient data gets processed -for example, if it sells de-identified data for analytics on its own account. Map the actual data flow, not the contract's vocabulary.</p>
              </div>
            </div>

            <div className="case-card">
              <h3>A telemedicine platform wears two hats</h3>
              <p>Consider a HealthTech company that licenses its consultation software to hospitals and also runs its own consumer app where patients book doctors directly. For the hospital-licensed deployment, it is usually a Data Processor. For its own app, where it directly onboards patients and decides what data to capture, it is the Data Fiduciary for that relationship.</p>
              <p>The same company can be a Processor in one flow and a Fiduciary in another. Map each product line separately -do not assume one designation covers the whole business.</p>
            </div>
          </section>

          <section id="sensitivity">
            <h2>2. Why Health Data Needs <em>Extra Care</em></h2>
            <p>Unlike GDPR, the DPDP Act does not formally carve out a special category of "sensitive personal data" with its own heightened statutory conditions. Health data is protected the same way as any other personal data -through the general obligations of lawful processing, notice, consent or another legitimate basis, and reasonable security safeguards under Section 8.</p>
            <p>That absence of a named category is not a shortcut. The consequence of a health-data breach is disproportionate to almost any other kind of leak: it can affect employability, insurance, family relationships, and physical safety, and the sector already carries its own confidentiality expectations through clinical ethics and professional-conduct regulations that predate DPDP. A hospital that reasons "DPDP does not single out health data, so our baseline security is enough" is reading the absence of a special category as permission -it is not.</p>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>No special category is not a lower bar</strong>
                <p>Build your safeguards as if every patient record carried the highest protection tier available, regardless of how the Act formally classifies it. Encryption at rest and in transit, strict access controls, and vendor due diligence are the same Section 8 obligations that apply to every fiduciary -health data simply has the least room for error.</p>
              </div>
            </div>
          </section>

          <section id="consent">
            <h2>3. Consent, <em>Guardians &amp; Emergencies</em></h2>
            <p>Healthcare consent under DPDP splits into three distinct scenarios, and conflating them is where most hospital privacy notices go wrong.</p>
            <p>Ordinary patient consent follows the standard rules under <Link href="/resources/blog/consent-under-dpdp-act" className="inline-link">the DPDP consent framework</Link> -clear notice in an understandable form, a genuine opt-in, and the ability to withdraw as easily as it was given. For a minor patient, Section 9 requires verifiable consent from a parent or lawful guardian before processing the child's personal data, and prohibits behavioural tracking or targeted advertising directed at children -see our dedicated piece on <Link href="/resources/blog/dpdp-childrens-data" className="inline-link">DPDP and children's data</Link> for the mechanics of a verifiable guardian-consent flow. Paediatric registration, school-health programmes, and vaccination platforms all need this built in from day one, with a clear process for the point at which the patient turns eighteen and consent shifts to them directly.</p>
            <p>The third scenario is the emergency. Section 7 recognises legitimate uses that do not require consent at the point of processing, including action necessary to respond to a medical emergency involving a threat to life or immediate health, and processing necessary for providing medical treatment during an epidemic or other threat to public health. This is what lets an ER team treat an unconscious patient without pausing for a consent form. It is scoped tightly to the emergency itself -once the patient is stabilised, the ordinary consent and notice obligations resume for anything beyond immediate treatment, such as sharing data for research or marketing.</p>

            <div className="vendor-table-wrap">
              <table className="vendor-table">
                <thead>
                  <tr><th>Scenario</th><th>Legal Basis</th><th>What To Build</th></tr>
                </thead>
                <tbody>
                  <tr><td>Routine OPD visit</td><td>Consent</td><td>Clear notice at registration, opt-in capture, easy withdrawal</td></tr>
                  <tr><td>Minor patient</td><td>Guardian consent (Section 9)</td><td>Verifiable parental consent flow, age-transition handling at 18</td></tr>
                  <tr><td>Unconscious ER patient</td><td>Legitimate use (Section 7)</td><td>Proceed with treatment; backfill notice once stabilised</td></tr>
                  <tr><td>Secondary research or analytics reuse</td><td>Fresh consent</td><td>Cannot reuse treatment consent -capture a new, specific consent</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="access">
            <h2>4. Access Control &amp; <em>Insider Risk</em></h2>
            <p>The single most common health-data incident is not a hacker breaching a firewall -it is a member of staff opening a record they had no clinical reason to view. Curiosity about a colleague, a relative, a celebrity patient, or a neighbour is a recurring pattern across hospital systems everywhere records are broadly accessible, and it is entirely preventable with access design rather than trust.</p>
            <p>Least-privilege access means role-based permissions tied to an actual, current clinical assignment -a nurse sees patients on her ward during her shift, not the entire hospital's patient list. Access should expire automatically when a patient is discharged or transferred out of a department, and every record view should be logged with the viewer's identity, timestamp, and where possible a reason code. A "break glass" mechanism for genuine emergency access is reasonable, but every break-glass event should trigger a mandatory post-hoc review, not a shrug.</p>
            <p>A confirmed instance of a staff member browsing records outside their duties is a personal data breach in its own right. It triggers your obligation to assess and, where required, notify the Data Protection Board and affected patients within the timelines set under the DPDP Rules -see our guide on <Link href="/resources/blog/dpdp-breach-notification" className="inline-link">DPDP breach notification</Link>. Audit logs that can tell you within minutes, not weeks, exactly which records were touched and by whom are not a nice-to-have here.</p>

            <div className="case-card">
              <h3>The audit review that actually catches insiders</h3>
              <p>Generic quarterly access reviews rarely catch insider misuse -they check whether permissions match job roles, not whether those permissions were abused. A more effective pattern layers three specific checks on top of standard access review:</p>
              <ul>
                <li><strong>Self-access flags</strong> -any staff member viewing their own record, or a record sharing their surname or address</li>
                <li><strong>VIP-access flags</strong> -any view of a record tagged as high-profile or high-sensitivity, cross-checked against the viewer's active care assignment</li>
                <li><strong>Off-hours and volume anomalies</strong> -bulk record access or access well outside a staff member's rostered shift</li>
              </ul>
            </div>
          </section>

          <section id="retention">
            <h2>5. Retention vs the <em>Right to Erase</em></h2>
            <p>Erasure is one of the <Link href="/resources/blog/8-rights-data-principals-dpdp" className="inline-link">eight rights</Link> DPDP gives every data principal, and patients will ask for it -after a course of treatment ends, after a second opinion elsewhere, or simply because they are uncomfortable with a hospital holding their history indefinitely. Healthcare is also one of the sectors where that request most often collides with a separate legal duty to retain the same record.</p>
            <p>A validly raised erasure request does not override a retention period imposed by another law. Hospitals typically operate under medical-record-keeping obligations that sit outside DPDP entirely -for example, professional-conduct regulations from the Medical Council of India that require indoor-patient records to be kept for a defined minimum period, with medico-legal cases frequently retained longer given the possibility of future litigation. Where a statutory retention duty applies, it controls; DPDP is not a mechanism to force early deletion of a record another law requires you to keep.</p>
            <p>The practical answer is a retention schedule built per record type -outpatient notes, inpatient charts, surgical records, medico-legal cases, billing and insurance documentation -each mapped to its own minimum retention period under the relevant sectoral rule. Apply erasure requests only once the mandated window has lapsed, or for categories of data that were never subject to a statutory hold in the first place. Keep records that are past their active clinical use but still inside the retention window in a separate, more tightly access-controlled archive rather than leaving them in the live system indefinitely -see our piece on <Link href="/resources/blog/dpdp-erasure-deletion-requests" className="inline-link">handling erasure and deletion requests</Link> for the broader mechanics.</p>
          </section>

          <section id="sectoral">
            <h2>6. DPDP Meets <em>ABDM &amp; Sectoral Rules</em></h2>
            <p>DPDP is the horizontal law that applies to every sector, but healthcare in India already carries its own layer of sector-specific frameworks that a compliance programme cannot ignore. The Ayushman Bharat Digital Mission (ABDM) issues Health IDs, maintains a Health Facility Registry and Health Professional Registry, and runs a consent-manager architecture designed specifically for sharing health records between providers. Telemedicine practice guidelines issued jointly by the medical regulator and the health ministry separately govern how remote consultations must be conducted and documented.</p>
            <p>None of this replaces DPDP -it sits alongside it. A HealthTech platform integrated with ABDM needs its DPDP consent mechanism and its ABDM consent-manager flow to interoperate rather than contradict each other, and where a sectoral rule imposes a stricter requirement than DPDP alone would -a specific documentation duty under telemedicine guidelines, for instance -the toughest applicable rule controls. Treat DPDP as the floor, not the ceiling, and map every sectoral overlay against it before assuming a single compliance checklist covers the whole picture.</p>
          </section>

          <section id="checklist">
            <h2>7. Compliance <em>Checklist</em></h2>
            <p>A working DPDP programme for a hospital or HealthTech platform comes down to a short list of concrete build items, not a policy document that sits unread in a shared drive.</p>
            <div className="vendor-table-wrap">
              <table className="vendor-table">
                <thead>
                  <tr><th>Area</th><th>Action</th></tr>
                </thead>
                <tbody>
                  <tr><td>Roles</td><td>Determine Fiduciary vs Processor status separately for every product line and data flow</td></tr>
                  <tr><td>Notice</td><td>Publish a patient-facing DPDP notice in plain, understandable language at every point of collection</td></tr>
                  <tr><td>Guardian consent</td><td>Build a verifiable parental-consent flow for paediatric registration, with an age-transition process at 18</td></tr>
                  <tr><td>Emergency processing</td><td>Document the Section 7 legitimate-use basis relied on for emergency treatment, and when ordinary consent resumes</td></tr>
                  <tr><td>Access control</td><td>Implement role-based access, automatic expiry, audit logging, and reviewed break-glass emergency access</td></tr>
                  <tr><td>Retention</td><td>Map statutory retention periods per record type before applying any erasure request</td></tr>
                  <tr><td>Sectoral overlay</td><td>Reconcile ABDM consent-manager flows and telemedicine guidelines against your DPDP programme</td></tr>
                  <tr><td>SDF readiness</td><td>Assess likely <Link href="/resources/blog/significant-data-fiduciary-sdf" className="inline-link">Significant Data Fiduciary</Link> exposure and prepare to appoint a <Link href="/resources/blog/data-protection-officer-dpo-dpdp" className="inline-link">DPO</Link> if designated</td></tr>
                  <tr><td>Vendors</td><td>Run a DPA review with every EHR, billing, and HealthTech vendor touching patient data</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <p>Patient data is unforgiving of shortcuts. It carries penalties up to ₹250 crore paid to the Consolidated Fund of India rather than to the patient directly -which means the real cost of getting this wrong is never the fine alone, it is the trust a hospital or HealthTech platform loses the moment patients learn their records were not handled with care. Get the Fiduciary-Processor mapping right, build consent flows that actually account for guardians and emergencies, close off insider access with real controls, respect retention law rather than fighting it, and reconcile DPDP with the sectoral rules layered on top. That is what handling patient data the right way looks like in practice.</p>

          <div className="cta-bottom">
            <h3>Need a DPDP programme built for a hospital or HealthTech platform?</h3>
            <p>SecComply maps your Fiduciary and Processor roles across every product line, builds guardian-consent and emergency-processing flows, hardens access controls against insider risk, and reconciles your retention schedule with medical-record law and ABDM.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a healthcare DPDP review →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Is health data a special category under DPDP?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Not explicitly. Unlike GDPR, the DPDP Act does not carve out a formal special category of sensitive personal data with extra statutory conditions. But the general obligation to implement reasonable security safeguards under Section 8 applies with the same force to every record, and the consequences of a health-data leak -reputational, medical, and personal -are severe enough that hospitals and HealthTech platforms should treat every patient record as if it carried the highest protection tier, regardless of what the Act formally requires.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Hospital or HealthTech vendor -who is the Data Fiduciary?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>It depends on who decides why and how the data is processed, not on what a contract calls either party. A hospital treating a patient is almost always the Data Fiduciary for that clinical relationship. An EHR or hospital-management software vendor that stores and processes records purely on the hospital's instructions is typically the Data Processor. But a HealthTech platform that runs its own consumer-facing app -a telemedicine service or diagnostics app that onboards patients directly -is the Data Fiduciary for that separate patient relationship, even while acting as a Processor for hospital clients elsewhere.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can we process patient data in an emergency without consent?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Yes, within limits. Section 7 of the DPDP Act recognises legitimate uses that do not require consent, including processing necessary to respond to a medical emergency involving a threat to the life or immediate health of the data principal or another individual, and processing necessary for providing medical treatment during an epidemic, outbreak of disease, or other threat to public health. This covers an unconscious patient arriving in the ER, but it is scoped to the emergency itself -once the patient is stabilised, ordinary consent and notice obligations resume for any further processing.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How long must we keep medical records versus delete them?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>A validly raised erasure request does not override a retention period mandated by another law. Hospitals are typically bound by separate medical-record-keeping rules -for example, Medical Council of India professional-conduct regulations that require indoor-patient records to be retained for a defined period, with medico-legal cases often held longer given potential litigation. Build a retention schedule per record type, honour the statutory minimum first, and apply erasure only once that mandated window has lapsed or for data that falls outside it.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Are large hospitals Significant Data Fiduciaries?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Possibly. Section 10 lets the Central Government designate Significant Data Fiduciaries based on factors including the volume and sensitivity of personal data processed, risk to data principals, and impact on sovereignty and public order. Large hospital networks and HealthTech platforms processing sensitive health data at scale are plausible candidates, but the designation itself comes through official notification, not self-assessment -track the Board's guidance and prepare as though the obligations, including appointing a DPO, could apply to you.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Healthcare DPDP Review</div>
            <h3>Handle patient data right</h3>
            <p>Fiduciary/Processor mapping, guardian-consent flows, access-control hardening, and retention schedules -built for hospitals and HealthTech.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a review →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/what-is-personal-data-dpdp">What Is Personal Data</Link></li>
              <li><Link href="/resources/blog/consent-under-dpdp-act">Consent Under DPDP</Link></li>
              <li><Link href="/resources/blog/dpdp-childrens-data">Children's Data</Link></li>
              <li><Link href="/resources/blog/dpdp-breach-notification">Breach Notification</Link></li>
              <li><Link href="/resources/blog/significant-data-fiduciary-sdf">Significant Data Fiduciary</Link></li>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Roadmap</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
