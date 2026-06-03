import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPCrossBorderDataTransfer() {
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
        <title>Cross-Border Data Transfer Under DPDP -What's Allowed and What's Not | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="What Section 16 of the DPDP Act says about transferring Indian personal data outside India. Practical guidance for cloud users, SaaS-heavy companies, Significant Data Fiduciaries, and sensitive data categories -plus the architecture decisions that make compliance flexible." />
        <meta name="keywords" content="DPDP cross-border transfer, Section 16 DPDP, data localisation India, data transfer India, Significant Data Fiduciary, SDF, cloud data residency India, SaaS DPA India" />
        <meta property="og:title" content="Cross-Border Data Transfer Under DPDP -What's Allowed and What's Not" />
        <meta property="og:description" content="Cross-border transfer compliance under DPDP is a moving target while the Rules are pending. Build a flexible programme -know your flows, contract well, and stay close to regulatory updates." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-cross-border-data-transfer" />
        <meta property="article:published_time" content="2026-05-14" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-cross-border-data-transfer" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"Cross-Border Data Transfer Under DPDP -What's Allowed and What's Not","description":"Section 16 mechanics, practical implications for cloud and SaaS users, and the architecture decisions that keep your transfer compliance flexible.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-14","dateModified":"2026-05-14","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-cross-border-data-transfer","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP Cross-Border Transfer","item":"https://seccomply.net/resources/blog/dpdp-cross-border-data-transfer"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is data transfer to AWS US regions currently allowed under DPDP?","acceptedAnswer":{"@type":"Answer","text":"Generally yes, at present. Section 16 permits the Central Government to restrict transfers to specific countries via a notified list. Until that list is published, transfers to global cloud providers like AWS, Azure, and GCP -including their US and EU regions -are generally permissible. The position can change once the restricted list is notified, so monitor regulatory updates and configure your architecture to switch regions if needed."}},{"@type":"Question","name":"Do we need to localise data in India?","acceptedAnswer":{"@type":"Answer","text":"Not universally -the DPDP Act does not impose blanket data localisation. However, sectoral regulators (RBI for payment data, IRDAI for insurance, MoHFW for health) impose localisation requirements within their domains, and Significant Data Fiduciaries may face stricter rules. Check sectoral rules alongside DPDP; the toughest applicable requirement controls."}},{"@type":"Question","name":"What is a Significant Data Fiduciary?","acceptedAnswer":{"@type":"Answer","text":"A Significant Data Fiduciary (SDF) is a Data Fiduciary designated by the Central Government based on factors including volume and sensitivity of personal data processed, risk to data principals, and impact on sovereignty and electoral integrity. SDFs face additional obligations including appointing a Data Protection Officer, conducting data protection impact assessments, and stricter transfer rules. The thresholds and designations are still being defined through rules."}},{"@type":"Question","name":"How do we map our cross-border data flows?","acceptedAnswer":{"@type":"Answer","text":"Start with the data inventory from your DPDP mapping exercise. For each data flow, capture: data categories involved, source system, destination country and vendor, contractual basis (DPA in place), and purpose. Maintain this in a register that you can produce on demand. Update it whenever you onboard a new vendor or change a cloud region."}},{"@type":"Question","name":"What contracts do we need for overseas vendors?","acceptedAnswer":{"@type":"Answer","text":"Each overseas vendor processing Indian personal data should have a Data Processing Agreement (DPA) with: a clear statement of the vendor's role as Data Processor, the categories of data processed, security standards required, sub-processor approval requirements, breach notification timelines back to you, audit rights, and data return or deletion obligations at end of relationship. The DPA is your contractual proof that the transfer is protected."}}]}]}) }} />
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
    .badge-am{background:rgba(255,183,3,.1);color:var(--am);border:1px solid rgba(255,183,3,.25)}
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
        <span>DPDP Cross-Border Transfer</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 3 -Implementation</span>
          <span className="badge badge-am">Regulatory Watch</span>
        </div>
        <h1 className="hero-h1">Cross-Border Data Transfer Under DPDP -<em>What's Allowed</em> and What's Not</h1>
        <p className="hero-sub">If your company sends Indian user data to servers or vendors outside India, the DPDP Act has something to say about it. Section 16 mechanics, practical implications for cloud and SaaS users, and the architecture decisions that keep your transfer compliance flexible as the Rules evolve.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>May 14, 2026</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&h=520&fit=crop" alt="Global data network and cross-border data flow" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Cross-border transfer compliance under DPDP is a moving target while the Rules are pending. Know your flows, contract well, and stay close to regulatory updates.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#section-16" className="toc-link">1. What Section 16 Says</a>
            <a href="#practical" className="toc-link">2. Practical Implications</a>
            <a href="#sensitive" className="toc-link">3. Sensitive Data Categories</a>
            <a href="#architecture" className="toc-link">4. Transfer-Ready Architecture</a>
            <a href="#watch" className="toc-link">5. What To Watch For</a>
            <a href="#faq" className="toc-link">6. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">§16</div><div className="stat-lbl">DPDP Section</div></div>
          <div className="stat-card"><div className="stat-num">22</div><div className="stat-lbl">Schedule Languages</div></div>
          <div className="stat-card"><div className="stat-num">SDF</div><div className="stat-lbl">Stricter Rules Apply</div></div>
          <div className="stat-card"><div className="stat-num">DPA</div><div className="stat-lbl">Required for Vendors</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Cross-border data transfer is one of the most commercially significant aspects of the DPDP Act for Indian tech companies. Cloud-first startups, SaaS platforms, and global enterprises operating in India all face the same question: where can data travel, and under what conditions? The short answer today is "almost anywhere, with appropriate contracts" -but that answer can change once the Central Government publishes its notified list.</p>

          <p>This blog completes the DPDP series. For the wider compliance programme, see our <Link href="/resources/blog/dpdp-compliance-roadmap-90-days" className="inline-link">90-day roadmap</Link>. For vendor management -which sits next to cross-border transfer in any practical implementation -see the supplier control steps within the roadmap.</p>

          <section id="section-16">
            <h2>1. What <em>Section 16</em> Says</h2>
            <p>Section 16 of the DPDP Act permits the Central Government to restrict the transfer of personal data to certain countries or territories by way of a notified list. Until that restricted list is published, transfers are generally permitted -but subject to ongoing monitoring of regulatory guidance.</p>

            <p>The Act also enables the government to notify certain countries as permitted destinations for data transfer, effectively creating a whitelist approach. At the time of writing, the final Rules and the restricted list have not been fully notified, meaning the practical landscape is somewhere between "open by default" and "ready to tighten on short notice."</p>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>This is a moving target</strong>
                <p>The Central Government's notification of restricted and permitted transfer territories is one of the most critical pending developments under DPDP. Build your compliance programme to adapt quickly. Architectures that can switch cloud regions on a quarter's notice are vastly more resilient than architectures locked into a single overseas region.</p>
              </div>
            </div>
          </section>

          <section id="practical">
            <h2>2. What This Means in <em>Practice Today</em></h2>

            <div className="case-card">
              <h3>If you use global cloud providers (AWS, Azure, GCP)</h3>
              <p>Most Indian companies process and store data on global cloud infrastructure. Under current DPDP provisions, transfers to these providers are generally permissible -subject to the eventual restricted list. The practical tasks:</p>
              <ul>
                <li>Know exactly where your data regions are configured (us-east-1, eu-west-1, ap-south-1, etc.)</li>
                <li>Ensure your cloud contracts include appropriate data processing terms</li>
                <li>Configure data residency settings where available for sensitive categories</li>
                <li>Architect your application so a region change is operationally feasible -not a six-month migration project</li>
              </ul>
            </div>

            <div className="case-card">
              <h3>If you are (or might become) a Significant Data Fiduciary</h3>
              <p>SDFs -companies processing large volumes of personal data or sensitive categories -face additional scrutiny on transfers. The government may impose stricter conditions including data localisation for SDFs in certain contexts. Review your classification status and prepare accordingly. If you process tens of millions of data principals' records, or operate in a sector with sovereignty concerns (electoral, health, payments), assume SDF designation is at least possible and architect for it.</p>
            </div>

            <div className="case-card">
              <h3>If you use SaaS vendors based overseas</h3>
              <p>Every SaaS tool that touches Indian personal data is potentially a cross-border transfer. The common offenders:</p>
              <div className="vendor-table-wrap">
                <table className="vendor-table">
                  <thead>
                    <tr><th>Category</th><th>Examples</th><th>Data Type</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>CRM</td><td>Salesforce, HubSpot</td><td>Customer profile, contact</td></tr>
                    <tr><td>Marketing automation</td><td>Mailchimp, Klaviyo</td><td>Email, behavioural profile</td></tr>
                    <tr><td>Analytics</td><td>Mixpanel, Amplitude, GA4</td><td>Behavioural, device, location</td></tr>
                    <tr><td>HR platforms</td><td>Workday, Darwinbox</td><td>Employee records</td></tr>
                    <tr><td>Support tools</td><td>Zendesk, Intercom</td><td>Conversation, identity</td></tr>
                    <tr><td>Error monitoring</td><td>Sentry, Datadog</td><td>User context in stack traces</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Audit every SaaS vendor processing Indian user data. Ensure Data Processing Agreements address cross-border transfer compliance, sub-processor disclosure, and breach notification timelines back to you.</p>
            </div>
          </section>

          <section id="sensitive">
            <h2>3. <em>Sensitive Data</em> -Extra Caution</h2>
            <p>Certain categories of data warrant heightened protection. While the DPDP Act does not enumerate "sensitive personal data" as explicitly as GDPR does, the following categories deserve extra care when transferred internationally:</p>
            <ul>
              <li><strong>Financial data</strong> -RBI rules require localisation of payment system data. SEBI imposes its own requirements on broker and investor data.</li>
              <li><strong>Health data</strong> -sectoral regulation under DISHA and the National Digital Health Mission imposes localisation expectations.</li>
              <li><strong>Children's data</strong> -Section 9 of the DPDP Act mandates verifiable parental consent and prohibits behavioural tracking. Cross-border processing of children's data should be additionally scrutinised.</li>
              <li><strong>Government and electoral data</strong> -sovereignty concerns make these subject to localisation under sector-specific rules.</li>
            </ul>

            <p>For these categories: evaluate whether processing can occur within India, apply additional contractual protections with overseas vendors, and monitor regulatory guidance for localisation requirements.</p>
          </section>

          <section id="architecture">
            <h2>4. Building a <em>Transfer-Ready</em> Architecture</h2>

            <h3>Know your data flows</h3>
            <p>Map every cross-border data flow in your organisation. Document for each:</p>
            <ul>
              <li>What data categories are transferred</li>
              <li>To which countries</li>
              <li>To which vendors or subsidiaries</li>
              <li>Under what contractual protections</li>
              <li>What purpose the transfer serves</li>
            </ul>
            <p>Maintain this in a register you can produce on demand. Update it whenever you onboard a new vendor or change a cloud region.</p>

            <h3>Use Data Processing Agreements</h3>
            <p>For every vendor receiving Indian personal data overseas, have a DPA that specifies:</p>
            <ul>
              <li>The vendor's role as Data Processor</li>
              <li>Categories of data processed</li>
              <li>Security standards the vendor must maintain</li>
              <li>Sub-processor approval requirements</li>
              <li>Breach notification requirements back to you (typically 24-72 hours)</li>
              <li>Audit rights and assistance obligations</li>
              <li>Data return or deletion obligations at end of relationship</li>
            </ul>

            <h3>Configure data residency where possible</h3>
            <p>Major cloud providers offer regional data residency configurations. For highly sensitive data, configure Indian or compliant-territory regions. This may add latency but reduces transfer risk significantly. For SaaS vendors, ask explicitly whether they offer Indian or regional data hosting -increasingly common as DPDP becomes more visible.</p>

            <h3>Plan for vendor swap</h3>
            <p>Treat overseas vendor lock-in as a regulatory risk. The vendors least exposed to regulatory pivots are the ones where you have an alternative, in or near India, that you could switch to within a defined timeframe. Even if you never need to, the optionality is what protects you.</p>
          </section>

          <section id="watch">
            <h2>5. What To <em>Watch For</em></h2>
            <ul>
              <li><strong>The Government's notification of restricted transfer territories</strong> -a public announcement could require immediate remediation. Maintain a watch on official notifications.</li>
              <li><strong>SDF classification thresholds</strong> -if you cross the threshold, transfer rules tighten. Track your data volumes and demographic reach.</li>
              <li><strong>Sector-specific regulations</strong> -RBI, IRDAI, MoHFW, and other regulators may impose layered requirements on top of DPDP. The toughest applicable rule controls.</li>
              <li><strong>Bilateral or multilateral data transfer agreements</strong> -India may negotiate country-level transfer frameworks similar to EU adequacy decisions. Such agreements would simplify compliance for transfers to listed countries.</li>
              <li><strong>Court interpretations</strong> -early DPDP enforcement cases will set practical precedent on cross-border issues. The first major case will likely come from the financial or health sectors.</li>
            </ul>
          </section>

          <p>Cross-border transfer compliance under DPDP is a moving target while the Rules are pending. Build a flexible programme: know your flows now, maintain strong contractual protections, configure for regional residency where it matters, and stay close to regulatory updates. Companies that build for adaptability will be fine; companies that build for "compliance as it stood last quarter" will scramble each time a notification drops.</p>

          <div className="cta-bottom">
            <h3>Need to map your cross-border data flows?</h3>
            <p>SecComply maps every overseas data flow in your organisation, reviews the DPAs that protect them, and builds the transfer register that satisfies the Board. We track DPDP regulatory updates so you do not have to.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a transfer review call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Is data transfer to AWS US regions currently allowed under DPDP?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Generally yes, at present. Section 16 permits the Central Government to restrict transfers to specific countries via a notified list. Until that list is published, transfers to global cloud providers like AWS, Azure, and GCP -including their US and EU regions -are generally permissible. The position can change once the restricted list is notified, so monitor regulatory updates and configure your architecture to switch regions if needed.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Do we need to localise data in India?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Not universally -the DPDP Act does not impose blanket data localisation. However, sectoral regulators (RBI for payment data, IRDAI for insurance, MoHFW for health) impose localisation requirements within their domains, and Significant Data Fiduciaries may face stricter rules. Check sectoral rules alongside DPDP; the toughest applicable requirement controls.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What is a Significant Data Fiduciary?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>A Significant Data Fiduciary (SDF) is a Data Fiduciary designated by the Central Government based on factors including volume and sensitivity of personal data processed, risk to data principals, and impact on sovereignty and electoral integrity. SDFs face additional obligations including appointing a Data Protection Officer, conducting data protection impact assessments, and stricter transfer rules. The thresholds and designations are still being defined through rules.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How do we map our cross-border data flows?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Start with the data inventory from your DPDP mapping exercise. For each data flow, capture: data categories involved, source system, destination country and vendor, contractual basis (DPA in place), and purpose. Maintain this in a register that you can produce on demand. Update it whenever you onboard a new vendor or change a cloud region.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What contracts do we need for overseas vendors?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Each overseas vendor processing Indian personal data should have a Data Processing Agreement (DPA) with: a clear statement of the vendor's role as Data Processor, the categories of data processed, security standards required, sub-processor approval requirements, breach notification timelines back to you, audit rights, and data return or deletion obligations at end of relationship. The DPA is your contractual proof that the transfer is protected.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Transfer Mapping</div>
            <h3>Know every flow</h3>
            <p>Cross-border data flow register, DPA review, regulatory watch -built once and maintained ongoing.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a review →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Roadmap</Link></li>
              <li><Link href="/resources/blog/dpdp-consent-mechanism-web-app">Consent Mechanism</Link></li>
              <li><Link href="/resources/blog/dpdp-privacy-notice-template">Privacy Notice Template</Link></li>
              <li><Link href="/resources/blog/dpdp-breach-notification">Breach Notification</Link></li>
              <li><Link href="/resources/blog/dpdp-erasure-deletion-requests">Erasure Requests</Link></li>
              <li><Link href="/resources/blog/what-is-dpdp-act-explained">DPDP Act Explained</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
