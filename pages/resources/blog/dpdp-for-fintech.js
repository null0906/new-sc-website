import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPForFintech() {
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
        <title>DPDP Act for Fintech - Consent, Credit Data, and Third-Party Processors | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="How the DPDP Act applies to fintech: valid consent for credit and KYC data, treating credit bureaus and KYC vendors as Data Processors, reconciling RBI localisation and retention rules with DPDP, and why most fintechs should prepare for Significant Data Fiduciary status." />
        <meta name="keywords" content="DPDP Act fintech, DPDP credit data, DPDP KYC consent, RBI data localisation DPDP, Significant Data Fiduciary fintech, credit bureau data processor, DPDP breach notification fintech, financial data protection India" />
        <meta property="og:title" content="DPDP Act for Fintech - Consent, Credit Data, and Third-Party Processors" />
        <meta property="og:description" content="Fintech sits on the data DPDP cares about most, under two regulators at once. Consent for credit and KYC data, bureau and vendor contracts, RBI localisation and retention conflicts, and SDF readiness." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-for-fintech" />
        <meta property="article:published_time" content="2026-05-26" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-for-fintech" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"DPDP Act for Fintech - Consent, Credit Data, and Third-Party Processors","description":"Valid consent for credit and KYC data, bureaus and KYC vendors as Data Processors, RBI localisation and retention conflicts, and why fintechs are likely Significant Data Fiduciary candidates.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-26","dateModified":"2026-05-26","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-for-fintech","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP for Fintech","item":"https://seccomply.net/resources/blog/dpdp-for-fintech"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is financial data a special category under DPDP?","acceptedAnswer":{"@type":"Answer","text":"The DPDP Act does not create an explicit special category for financial data the way GDPR defines special categories of sensitive data. That does not make it low-risk -financial identifiers, credit history and transaction data are highly sensitive personal data in practice, they weigh heavily in Significant Data Fiduciary designation, and RBI's own guidance expects fiduciaries to apply heightened safeguards to it regardless of what DPDP labels it."}},{"@type":"Question","name":"How does DPDP interact with RBI data-localisation rules?","acceptedAnswer":{"@type":"Answer","text":"Both apply at the same time, and neither displaces the other. DPDP governs consent, data principal rights, cross-border transfer and breach notification; RBI's localisation direction separately requires payment system data to be stored in India. Where the two overlap, the more stringent applicable requirement controls -satisfying DPDP does not excuse you from RBI's localisation mandate, and vice versa."}},{"@type":"Question","name":"Can we keep KYC data after a user asks for erasure?","acceptedAnswer":{"@type":"Answer","text":"Often yes, for a defined period. Erasure rights under DPDP are not absolute -fiduciaries may retain data to the extent necessary to comply with a legal obligation, and RBI/PMLA-driven KYC and transaction record retention requirements are exactly that kind of obligation. Inform the data principal that retention continues for the mandated period and erase the data once that obligation lapses."}},{"@type":"Question","name":"Are credit bureaus our Data Processors?","acceptedAnswer":{"@type":"Answer","text":"Usually, when the bureau pulls or returns a credit report on your instruction and for your stated purpose -that makes them a Data Processor. Where a bureau independently determines the purpose and means of processing for its own database, it may itself be acting as a Data Fiduciary for that processing. The classification should be documented per data flow and reflected in the contract either way."}},{"@type":"Question","name":"Is my fintech a Significant Data Fiduciary?","acceptedAnswer":{"@type":"Answer","text":"It depends on a Central Government designation under Section 10, based on factors like the volume and sensitivity of personal data you process, risk to data principals, and potential impact on sovereignty and electoral integrity. The specific thresholds have not been fully notified yet. Fintechs processing financial and KYC data at scale should assess their exposure and prepare -DPO appointment, DPIA readiness, independent audit -well before a designation is announced."}}]}]}) }} />
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
        <span>DPDP for Fintech</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 4 -Industry</span>
          <span className="badge badge-am">Financial Data</span>
        </div>
        <h1 className="hero-h1">DPDP Act for Fintech - <em>Consent, Credit Data</em>, and Third-Party Processors</h1>
        <p className="hero-sub">Fintech sits on the data the DPDP Act cares about most, under two regulators at once - the Data Protection Board and the RBI. How to structure valid consent for credit and KYC data, contract your processors and bureaus correctly, reconcile localisation and retention conflicts, and prepare for likely SDF designation.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>May 26, 2026</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=1280&h=520&fit=crop" alt="Fintech financial data and payments" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Credit data, KYC records and transaction histories put fintech at the sharpest intersection of DPDP and sectoral financial regulation.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#data" className="toc-link">1. The Data Fintech Holds</a>
            <a href="#consent" className="toc-link">2. Consent for Credit &amp; KYC Data</a>
            <a href="#processors" className="toc-link">3. Bureaus &amp; Sub-Processors</a>
            <a href="#localisation" className="toc-link">4. Localisation &amp; Retention</a>
            <a href="#sdf" className="toc-link">5. Why Fintechs Become SDFs</a>
            <a href="#breach" className="toc-link">6. Breach &amp; Fraud Data</a>
            <a href="#checklist" className="toc-link">7. Compliance Checklist</a>
            <a href="#faq" className="toc-link">8. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">₹250 cr</div><div className="stat-lbl">Max Penalty</div></div>
          <div className="stat-card"><div className="stat-num">SDF</div><div className="stat-lbl">Likely</div></div>
          <div className="stat-card"><div className="stat-num">RBI</div><div className="stat-lbl">Localisation Overlap</div></div>
          <div className="stat-card"><div className="stat-num">8</div><div className="stat-lbl">Data Principal Rights</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Fintech products sit directly on top of the data categories the DPDP Act is most concerned with. A savings app, a lending platform, a payments gateway, or a wealth management tool all collect layers of identity, financial, and behavioural data the moment a user signs up -long before a single transaction happens. Recognising all of it as personal data under the Act, rather than treating compliance as a checkbox for marketing cookies, is where a fintech DPDP programme actually starts -and it has to be built alongside RBI's existing rulebook, not instead of it.</p>

          <section id="data">
            <h2>1. The <em>Data</em> Fintech Holds</h2>
            <p>Every fintech onboarding flow collects identity data (PAN, masked Aadhaar reference, name, address, photograph), financial data (bank account and card details, income declarations, credit score and repayment history, loan and investment holdings), transaction data (amounts, counterparties, timestamps, merchant categories), and behavioural or device data (app usage patterns, device fingerprints, geolocation used for fraud scoring). Each of these is personal data on its own; combined into a single customer risk profile, as most underwriting and fraud engines do, they become a far more sensitive dataset than any individual field suggests. For the baseline definition the rest of this article relies on, see our guide to <Link href="/resources/blog/what-is-personal-data-dpdp" className="inline-link">what counts as personal data under DPDP</Link>.</p>

            <ul>
              <li><strong>Identity data</strong> -PAN, masked Aadhaar reference, name, address, photograph, signature</li>
              <li><strong>Financial data</strong> -account and card details, income declarations, credit score, repayment history, holdings</li>
              <li><strong>Transaction data</strong> -amounts, counterparties, timestamps, merchant category codes</li>
              <li><strong>Behavioural and device data</strong> -app usage, device fingerprint, geolocation used in fraud and risk scoring</li>
            </ul>

            <div className="callout co-key">
              <div className="co-icon">🔑</div>
              <div className="co-body">
                <strong>Everything here is personal data</strong>
                <p>Personal data under DPDP is any data about an individual who is identifiable by or in relation to it. Financial identifiers, credit history and transaction metadata all qualify individually, and become more sensitive still once merged into one customer profile -exactly what most fintech risk-scoring engines are built to do.</p>
              </div>
            </div>
          </section>

          <section id="consent">
            <h2>2. Consent for <em>Credit &amp; KYC</em> Data</h2>
            <p>Consent under DPDP must be free, specific, informed, unconditional and unambiguous, given through clear affirmative action, and itemised against the purpose it supports. For fintech, that standard collides with two habits the industry inherited from a pre-DPDP era: bundling every possible use into a single onboarding checkbox, and treating a KYC-time consent as blanket authorisation for every future credit pull. Neither survives scrutiny under the Act. For the mechanics of a compliant consent flow, see our piece on <Link href="/resources/blog/consent-under-dpdp-act" className="inline-link">consent under the DPDP Act</Link>.</p>

            <p>Credit and KYC data carry two consent obligations that are easy to under-build. First, each purpose needs its own itemised notice -assessing loan eligibility is not the same purpose as monitoring an account for cross-sell, even when both use the same bureau pull. Second, consent must be as easy to withdraw as it was to give, and withdrawal has to actually stop new bureau pulls and marketing-driven scoring, not just hide a toggle in a settings screen.</p>

            <div className="case-card">
              <h3>The Account Aggregator model is a useful template</h3>
              <p>RBI's Account Aggregator framework already requires participating fintechs to build granular, purpose-bound, time-bound and revocable consent artefacts before a single byte of financial data moves between a Financial Information Provider and a Financial Information User. Teams already living under that consent architecture should treat it as a design pattern for DPDP consent generally, not a separate obligation.</p>
              <ul>
                <li>Consent tied to a specific purpose and specific data types</li>
                <li>Consent has a defined validity period, not an indefinite one</li>
                <li>Consent is revocable by the data principal at any time</li>
                <li>Each consent artefact is logged and auditable</li>
              </ul>
            </div>
          </section>

          <section id="processors">
            <h2>3. Bureaus, KYC Vendors &amp; <em>Sub-Processors</em></h2>
            <p>A typical fintech onboarding and underwriting flow routes personal data through several external parties in seconds: an eKYC or video-KYC API, a credit information company for a bureau pull, a fraud and risk-scoring engine, and often a core-banking-as-a-service partner underneath the product. Each of these is, in DPDP terms, either a Data Processor acting on your instructions or -in some data flows -a Data Fiduciary in its own right. Getting the classification right, per data flow rather than per vendor, determines whose contractual obligations apply where. For the general Fiduciary/Processor distinction, see our explainer on <Link href="/resources/blog/data-principal-fiduciary-processor" className="inline-link">data principals, fiduciaries and processors</Link>.</p>

            <div className="vendor-table-wrap">
              <table className="vendor-table">
                <thead>
                  <tr><th>Vendor Type</th><th>Typical Role</th><th>Data Shared</th></tr>
                </thead>
                <tbody>
                  <tr><td>Credit information companies</td><td>Processor (pull on your instruction) or independent Fiduciary (own database)</td><td>PAN, credit history, repayment behaviour</td></tr>
                  <tr><td>eKYC / video-KYC providers</td><td>Processor</td><td>Identity documents, photo match, address</td></tr>
                  <tr><td>Fraud &amp; risk-scoring APIs</td><td>Processor</td><td>Device fingerprint, transaction history, behavioural signals</td></tr>
                  <tr><td>Payment gateway / switch</td><td>Processor</td><td>Card/account details, transaction metadata</td></tr>
                  <tr><td>Core banking / BaaS platform</td><td>Processor (sometimes joint Fiduciary)</td><td>Full account and transaction ledger</td></tr>
                  <tr><td>Collections / recovery agencies</td><td>Processor</td><td>Contact details, outstanding balance, repayment status</td></tr>
                </tbody>
              </table>
            </div>

            <p>Every vendor in that table needs a Data Processing Agreement stating its role, the categories of data in scope, the security standards it must maintain, whether it may appoint sub-processors and your approval rights over that, how it notifies you of a breach, and what happens to the data at the end of the relationship. Bureau and KYC contracts in particular are often legacy agreements written for a pre-DPDP world -audit them first, since they are the highest-volume pipes carrying your most sensitive data outward.</p>
          </section>

          <section id="localisation">
            <h2>4. DPDP, RBI <em>Localisation</em> &amp; Retention Conflicts</h2>
            <p>Fintechs answer to two regimes on the same data at once. DPDP governs consent, data principal rights and breach obligations, and leaves cross-border transfer open by default until the Central Government notifies a restricted list under Section 16 -we cover that mechanism in our piece on <Link href="/resources/blog/dpdp-cross-border-data-transfer" className="inline-link">cross-border transfer under DPDP</Link>. Layered on top, RBI's payment-data localisation direction requires that data relating to payment systems be stored only in India, regardless of what DPDP eventually permits for other categories. Where the two overlap, the more stringent applicable rule controls -localisation for payment data is not optional just because a DPDP restricted list has not been published.</p>

            <p>Retention creates the mirror-image conflict at the other end of the data lifecycle. A data principal's erasure request under DPDP is not absolute: fiduciaries may -and for KYC and transaction records tied to RBI and PMLA obligations, generally must -continue holding the data for whatever period the sectoral retention mandate requires, even after the account relationship ends. We walk through how erasure requests are actually handled, including this kind of statutory override, in our piece on <Link href="/resources/blog/dpdp-erasure-deletion-requests" className="inline-link">DPDP erasure and deletion requests</Link>.</p>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>Don't build one policy for one regulator</strong>
                <p>A retention schedule or transfer map that only satisfies DPDP will fail an RBI examination, and one that only satisfies RBI will not hold up against a data principal's erasure request. Build a single data lifecycle policy that documents both obligations per data category, and resolves the conflict in writing rather than leaving it to whichever team gets asked first.</p>
              </div>
            </div>
          </section>

          <section id="sdf">
            <h2>5. Why Fintechs Often Become <em>SDFs</em></h2>
            <p>Section 10 of the DPDP Act lets the Central Government designate any Data Fiduciary, or class of Data Fiduciary, as a Significant Data Fiduciary based on factors including the volume and sensitivity of personal data processed, risk of harm to data principals, potential impact on the sovereignty and integrity of India, and risk to electoral democracy. Fintech maps onto nearly every one of those factors at once: high user volumes, financial and KYC data among the most sensitive categories processed at consumer scale, and aggregate transaction visibility that carries systemic-risk implications if compromised. For the full obligations that come with designation, see our guide to <Link href="/resources/blog/significant-data-fiduciary-sdf" className="inline-link">Significant Data Fiduciary status</Link>.</p>

            <p>The thresholds for designation have not been fully notified, which is exactly why fintechs should not wait for a notification to start preparing. SDF status adds a Data Protection Officer based in India, an independent data auditor, periodic data protection impact assessments, and additional restrictions on data transfer -obligations that take months to stand up properly, not weeks. Treat SDF readiness as a parallel workstream to core DPDP compliance rather than a problem for later.</p>
          </section>

          <section id="breach">
            <h2>6. Breach &amp; <em>Fraud Data</em></h2>
            <p>Section 8 of the DPDP Act obliges every Data Fiduciary to take reasonable security safeguards to prevent personal data breaches, and to notify both the Data Protection Board and affected data principals within the timelines set under the DPDP Rules. For fintech, breach exposure concentrates in exactly the systems covered earlier -bureau integrations, KYC vendors, payment gateways and fraud-scoring engines -because a compromise anywhere in that chain typically exposes financial identifiers and transaction history together, the combination attackers value most. Our piece on <Link href="/resources/blog/dpdp-breach-notification" className="inline-link">breach notification under DPDP</Link> covers the notification workflow in full.</p>

            <p>Fraud and risk-scoring systems deserve a specific note: they process large volumes of behavioural and transaction data continuously, often without a fresh consent event for every scoring run. Document the lawful basis for that processing explicitly -whether it rests on the consent already captured for the underlying account relationship or a narrower legitimate use -rather than assuming fraud prevention is automatically exempt from DPDP's consent and purpose-limitation requirements.</p>
          </section>

          <section id="checklist">
            <h2>7. Compliance <em>Checklist</em></h2>
            <div className="case-card">
              <h3>Where to start</h3>
              <ul>
                <li>Map every data flow that touches a credit bureau, KYC vendor, payment gateway or BaaS partner, and classify each as Processor or Fiduciary</li>
                <li>Rebuild consent notices as itemised, purpose-specific artefacts modelled on the Account Aggregator pattern, not one onboarding checkbox</li>
                <li>Audit and refresh Data Processing Agreements with bureaus and KYC vendors, most of which predate DPDP</li>
                <li>Overlay your DPDP data map with RBI localisation and PMLA/KYC retention obligations, and resolve conflicts in a single documented policy</li>
                <li>Run an SDF readiness assessment even before designation thresholds are notified</li>
                <li>Build and test a breach notification runbook naming who notifies the Board, within what timeline, and who notifies affected data principals</li>
              </ul>
            </div>
          </section>

          <p>Fintech does not get a lighter version of DPDP because it already answers to RBI -it gets a harder one, because two regulators are now reading the same data map. The programmes that hold up are the ones that treat DPDP consent, RBI localisation and PMLA retention as one connected data lifecycle policy, not three separate compliance projects competing for the same engineering time.</p>

          <div className="cta-bottom">
            <h3>Need a DPDP programme built for two regulators?</h3>
            <p>SecComply designs consent architecture for credit and KYC data, audits your bureau and KYC vendor contracts, reconciles RBI localisation and retention rules with DPDP, and builds your SDF readiness plan before designation lands.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a fintech compliance review →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Is financial data a special category under DPDP?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>The DPDP Act does not create an explicit special category for financial data the way GDPR defines special categories of sensitive data. That does not make it low-risk -financial identifiers, credit history and transaction data are highly sensitive personal data in practice, they weigh heavily in Significant Data Fiduciary designation, and RBI's own guidance expects fiduciaries to apply heightened safeguards to it regardless of what DPDP labels it.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How does DPDP interact with RBI data-localisation rules?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Both apply at the same time, and neither displaces the other. DPDP governs consent, data principal rights, cross-border transfer and breach notification; RBI's localisation direction separately requires payment system data to be stored in India. Where the two overlap, the more stringent applicable requirement controls -satisfying DPDP does not excuse you from RBI's localisation mandate, and vice versa.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can we keep KYC data after a user asks for erasure?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Often yes, for a defined period. Erasure rights under DPDP are not absolute -fiduciaries may retain data to the extent necessary to comply with a legal obligation, and RBI/PMLA-driven KYC and transaction record retention requirements are exactly that kind of obligation. Inform the data principal that retention continues for the mandated period and erase the data once that obligation lapses.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Are credit bureaus our Data Processors?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Usually, when the bureau pulls or returns a credit report on your instruction and for your stated purpose -that makes them a Data Processor. Where a bureau independently determines the purpose and means of processing for its own database, it may itself be acting as a Data Fiduciary for that processing. The classification should be documented per data flow and reflected in the contract either way.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Is my fintech a Significant Data Fiduciary?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>It depends on a Central Government designation under Section 10, based on factors like the volume and sensitivity of personal data you process, risk to data principals, and potential impact on sovereignty and electoral integrity. The specific thresholds have not been fully notified yet. Fintechs processing financial and KYC data at scale should assess their exposure and prepare -DPO appointment, DPIA readiness, independent audit -well before a designation is announced.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Fintech Compliance</div>
            <h3>Two regulators, one programme</h3>
            <p>Consent architecture, bureau and KYC vendor DPAs, RBI-DPDP reconciliation, and SDF readiness -built together, not as separate projects.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a review →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/consent-under-dpdp-act">Consent Under DPDP</Link></li>
              <li><Link href="/resources/blog/dpdp-cross-border-data-transfer">Cross-Border Data Transfer</Link></li>
              <li><Link href="/resources/blog/significant-data-fiduciary-sdf">Significant Data Fiduciary (SDF)</Link></li>
              <li><Link href="/resources/blog/dpdp-erasure-deletion-requests">Erasure &amp; Deletion Requests</Link></li>
              <li><Link href="/resources/blog/data-principal-fiduciary-processor">Fiduciary vs Processor</Link></li>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Compliance Roadmap</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
