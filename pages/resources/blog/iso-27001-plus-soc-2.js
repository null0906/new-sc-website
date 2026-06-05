import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001PlusSOC2() {
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
        <title>ISO 27001 + SOC 2 - How to Get Both Without Doubling the Work | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="ISO 27001 and SOC 2 are different on paper but share most of their controls. How to pursue both without running two programmes - the differences that matter, the 40-85% control overlap, which market needs which, and the combined audit-readiness strategy." />
        <meta name="keywords" content="ISO 27001 SOC 2, SOC 2 ISO 27001 overlap, dual compliance, ISO 27001 vs SOC 2, combined ISO SOC 2, SOC 2 ISO mapping, trust services criteria ISO" />
        <meta property="og:title" content="ISO 27001 + SOC 2 - How to Get Both Without Doubling the Work" />
        <meta property="og:description" content="Different frameworks, mostly the same controls. How to pursue ISO 27001 and SOC 2 together - the overlap, which market needs which, and the combined readiness strategy." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-plus-soc-2" />
        <meta property="article:published_time" content="2026-05-24" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-plus-soc-2" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 + SOC 2 - How to Get Both Without Doubling the Work","description":"How to pursue ISO 27001 and SOC 2 together - the differences, the control overlap, which market needs which, and the combined readiness strategy.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-24","dateModified":"2026-05-24","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-plus-soc-2","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"ISO 27001 + SOC 2","item":"https://seccomply.net/resources/blog/iso-27001-plus-soc-2"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the core difference between ISO 27001 and SOC 2?","acceptedAnswer":{"@type":"Answer","text":"ISO 27001 is an international certification of an Information Security Management System, issued by an accredited certification body, valid for three years. SOC 2 is an attestation report produced by a licensed CPA firm against the AICPA's Trust Services Criteria, describing how your controls operate. ISO 27001 certifies you have a managed, continually improving security system; SOC 2 attests to how specific controls are designed and (for Type 2) operated over a period. One is a certificate; the other is a report."}},{"@type":"Question","name":"How much do ISO 27001 and SOC 2 controls overlap?","acceptedAnswer":{"@type":"Answer","text":"Estimates commonly put the control overlap between roughly 40% and 85%, depending on which SOC 2 Trust Services Criteria you include and how your ISO scope is drawn. The Security criterion of SOC 2 in particular maps very closely onto ISO 27001 Annex A controls. The practical consequence is that most of the work - access control, encryption, logging, change management, incident response, vendor management - counts toward both."}},{"@type":"Question","name":"Which one does my market need?","acceptedAnswer":{"@type":"Answer","text":"SOC 2 is the de-facto expectation in North America, so US enterprise buyers usually ask for it. ISO 27001 is the international standard and is more commonly expected by European and global customers. If you sell to both markets - as most growing SaaS and service companies eventually do - you are likely to need both. The combined approach exists precisely because the market split makes dual compliance common."}},{"@type":"Question","name":"Can we use the same evidence for both audits?","acceptedAnswer":{"@type":"Answer","text":"Largely yes for the overlapping controls. The access reviews, change tickets, logs, vulnerability scans, vendor assessments, and incident records you maintain serve both the ISO 27001 audit and the SOC 2 examination. The main difference is form: SOC 2 Type 2 requires evidence of operation across a defined period, so you maintain it continuously, while ISO sampling is point-in-time plus history. Build the evidence once, present it to both auditors."}},{"@type":"Question","name":"Should we do ISO 27001 or SOC 2 first if pursuing both?","acceptedAnswer":{"@type":"Answer","text":"A common and efficient approach is to build the ISO 27001 ISMS as the foundation, since it establishes the managed system and the full control set, then map the SOC 2 Trust Services Criteria onto it and run a SOC 2 examination. Because SOC 2 Type 2 covers an operating period, you can begin accumulating SOC 2 evidence while finishing ISO. Some companies that sell primarily to US buyers start with SOC 2 Type 1 for speed and add ISO later. The right order depends on which customers are blocking deals now."}}]}]}) }} />
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
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
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
    .map-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .map-table{width:100%;border-collapse:collapse;min-width:600px}
    .map-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .map-table td{padding:.7rem 1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .map-table tr:last-child td{border-bottom:none}
    .map-table td:first-child{color:var(--tx);font-weight:600}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(255, 96, 0,.06);border:1px solid rgba(255, 96, 0,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .video-card{display:flex;gap:1.1rem;align-items:center;background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(15,23,42,.6));border:1px solid var(--bo);border-radius:14px;padding:1.3rem 1.5rem;margin:2rem 0;flex-wrap:wrap}
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
        <span>ISO 27001 + SOC 2</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">ISO 27001</span>
          <span className="badge badge-bl">SOC 2</span>
          <span className="badge badge-gr">Dual Compliance</span>
        </div>
        <h1 className="hero-h1">ISO 27001 + SOC 2 - How to Get Both <em>Without Doubling</em> the Work</h1>
        <p className="hero-sub">ISO 27001 and SOC 2 look like two separate compliance projects. They are not. A certificate and an attestation, different on paper - but they share most of the same controls. Here is how to pursue both without running two programmes: the differences that matter, the control overlap, which market needs which, and the combined readiness strategy.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Cybersecurity Expert</span></div>
            <div className="adate"><span>May 24, 2026</span><span className="dot">·</span><span id="read-time">📖 10 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=520&fit=crop" alt="Two compliance frameworks analytics" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">A certificate and an attestation, built on largely the same control set. The economics of dual compliance come from the overlap.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#different-objects" className="toc-link">1. Two Different Objects</a>
            <a href="#overlap" className="toc-link">2. The Control Overlap</a>
            <a href="#which-market" className="toc-link">3. Which Market Needs Which</a>
            <a href="#shared-evidence" className="toc-link">4. The Shared Evidence Base</a>
            <a href="#strategy" className="toc-link">5. Combined Readiness Strategy</a>
            <a href="#sequencing" className="toc-link">6. Sequencing the Two</a>
            <a href="#faq" className="toc-link">7. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">40-85%</div><div className="stat-lbl">Control Overlap</div></div>
          <div className="stat-card"><div className="stat-num">Cert</div><div className="stat-lbl">ISO = Certificate</div></div>
          <div className="stat-card"><div className="stat-num">Report</div><div className="stat-lbl">SOC 2 = Attestation</div></div>
          <div className="stat-card"><div className="stat-num">1</div><div className="stat-lbl">Control Programme</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>For a growing SaaS or service company, the day comes when one prospect asks for SOC 2 and another asks for ISO 27001. The temptation is to treat them as two separate compliance projects - two consultants, two sets of documents, two timelines, double the cost. That is the wrong model. ISO 27001 and SOC 2 are different in form, but they are built on largely the same security controls. Run intelligently, the second framework costs a fraction of the first.</p>

          <p>This guide shows how. For the foundational ISO work see our <Link href="/resources/blog/iso-27001-implementation-roadmap" className="inline-link">implementation roadmap</Link>; for the SaaS-specific angle most dual-compliance companies share, see <Link href="/resources/blog/iso-27001-for-saas" className="inline-link">ISO 27001 for SaaS</Link>.</p>

          <section id="different-objects">
            <h2>1. Two <em>Different Objects</em></h2>
            <p>Understanding what each framework actually is prevents most of the confusion:</p>
            <ul>
              <li><strong>ISO 27001</strong> is an international certification of an Information Security Management System, issued by an accredited certification body and valid for three years (with annual surveillance audits). It certifies that you have a managed, continually improving security system - not just controls, but the management system around them.</li>
              <li><strong>SOC 2</strong> is an attestation report produced by a licensed CPA firm against the AICPA's Trust Services Criteria. A Type 1 report describes how your controls are designed at a point in time; a Type 2 report attests to how they operated over a period (typically 3-12 months). It is a report a customer reads, not a certificate you display.</li>
            </ul>
            <p>So ISO certifies a system; SOC 2 attests to controls. That distinction shapes everything downstream - but it does not change the fact that the underlying controls are mostly the same.</p>
          </section>

          <section id="overlap">
            <h2>2. The <em>Control Overlap</em></h2>
            <p>Estimates commonly place the control overlap between roughly 40% and 85%, depending on which Trust Services Criteria you include and how your ISO scope is drawn. The SOC 2 Security criterion in particular maps very closely onto ISO 27001 Annex A. Where they align:</p>

            <div className="map-table-wrap">
              <table className="map-table">
                <thead>
                  <tr><th>Shared Control Area</th><th>ISO 27001 Annex A</th><th>SOC 2 TSC</th></tr>
                </thead>
                <tbody>
                  <tr><td>Access control</td><td>A.5.15-5.18, A.8.2-8.5</td><td>CC6.x</td></tr>
                  <tr><td>Change management</td><td>A.8.32</td><td>CC8.x</td></tr>
                  <tr><td>Logging &amp; monitoring</td><td>A.8.15, A.8.16</td><td>CC7.x</td></tr>
                  <tr><td>Incident response</td><td>A.5.24-5.28</td><td>CC7.x</td></tr>
                  <tr><td>Risk assessment</td><td>Clause 6.1.2</td><td>CC3.x</td></tr>
                  <tr><td>Vendor management</td><td>A.5.19-5.23</td><td>CC9.x</td></tr>
                  <tr><td>Encryption</td><td>A.8.24</td><td>CC6.x</td></tr>
                  <tr><td>Vulnerability management</td><td>A.8.8</td><td>CC7.x</td></tr>
                </tbody>
              </table>
            </div>

            <p>The practical consequence: most of the heavy-lifting controls count toward both frameworks. The non-overlapping portion is largely the ISO management-system requirements (the ISMS clauses 4-10) and the SOC 2 report-specific narrative and any additional Trust Services Criteria you elect (Availability, Confidentiality, Processing Integrity, Privacy).</p>

            <div className="video-card">
              <div className="video-icon">▶</div>
              <div className="video-body">
                <div className="vlbl">Watch · The Nadkarnees</div>
                <h4>SOC 2 and ISO 27001, demystified</h4>
                <p>SecComply's founders cover security certifications and how the major frameworks relate to each other on their YouTube channel - a useful primer if you are weighing which to pursue.</p>
              </div>
              <a className="video-link" href="https://www.youtube.com/@thenadkarnees" target="_blank" rel="noopener">Watch on YouTube →</a>
            </div>
          </section>

          <section id="which-market">
            <h2>3. Which Market <em>Needs Which</em></h2>
            <p>The reason dual compliance is common comes down to a geographic split in buyer expectations:</p>
            <ul>
              <li><strong>SOC 2 - North America.</strong> SOC 2 is the de-facto compliance expectation in the US market. US enterprise buyers and their vendor risk teams typically ask for a SOC 2 Type 2 report.</li>
              <li><strong>ISO 27001 - international.</strong> ISO 27001 is the globally recognised standard and is more commonly expected by European and other international customers.</li>
              <li><strong>Both - companies selling across regions.</strong> Most SaaS and service companies that scale internationally end up needing both, because their customer base spans the US and the rest of the world.</li>
            </ul>
            <p>If your pipeline is blocked by US buyers asking for SOC 2 and European buyers asking for ISO, dual compliance is not gold-plating - it is unblocking revenue on two fronts.</p>
          </section>

          <section id="shared-evidence">
            <h2>4. The <em>Shared Evidence Base</em></h2>
            <p>The biggest efficiency in dual compliance is shared evidence. For the overlapping controls, the same artefacts serve both audits:</p>
            <ul>
              <li>Access reviews → ISO access control + SOC 2 CC6</li>
              <li>Change tickets and approvals → ISO A.8.32 + SOC 2 CC8</li>
              <li>Logs and monitoring alerts → ISO A.8.15-8.16 + SOC 2 CC7</li>
              <li>Vulnerability scans and remediation → ISO A.8.8 + SOC 2 CC7</li>
              <li>Vendor assessments → ISO A.5.19-5.23 + SOC 2 CC9</li>
              <li>Incident records → ISO A.5.24-5.28 + SOC 2 CC7</li>
            </ul>

            <div className="callout co-info">
              <div className="co-icon">💡</div>
              <div className="co-body">
                <strong>Mind the evidence form</strong>
                <p>SOC 2 Type 2 attests to controls operating over a period, so it needs continuous evidence across the whole observation window - you cannot retrofit a quarter of access reviews the week before. ISO sampling is more point-in-time-plus-history. Maintaining evidence continuously satisfies the stricter SOC 2 Type 2 requirement and covers ISO automatically.</p>
              </div>
            </div>
          </section>

          <section id="strategy">
            <h2>5. The Combined <em>Readiness Strategy</em></h2>
            <p>Run one control programme, instrumented to produce evidence for both:</p>
            <ul>
              <li><strong>One control set.</strong> Implement controls to ISO Annex A standard, which generally meets or exceeds SOC 2's Security criterion.</li>
              <li><strong>One evidence pipeline.</strong> Capture evidence continuously (for SOC 2 Type 2) in a way that also feeds ISO sampling.</li>
              <li><strong>One risk assessment.</strong> The ISO risk assessment also supports SOC 2 CC3.</li>
              <li><strong>Two front-ends.</strong> The ISO management system documentation (clauses 4-10) and the SOC 2 system description are the framework-specific layers built on the shared control base.</li>
            </ul>
          </section>

          <section id="sequencing">
            <h2>6. <em>Sequencing</em> the Two</h2>
            <p>The right order depends on which customers are blocking deals now:</p>
            <ul>
              <li><strong>ISO first, then SOC 2.</strong> Build the full ISMS as the foundation, then map the Trust Services Criteria onto it. Because SOC 2 Type 2 covers an operating period, you can begin accumulating SOC 2 evidence while finishing ISO.</li>
              <li><strong>SOC 2 first, then ISO.</strong> Companies selling primarily to US buyers sometimes start with SOC 2 Type 1 for speed (it is point-in-time), move to Type 2, and add ISO as international demand grows.</li>
              <li><strong>Parallel.</strong> With the right partner and a clean control base, both can run largely together, with the certification audit and the SOC 2 examination scheduled close to each other.</li>
            </ul>
            <p>Whichever order, the principle holds: build the controls once, present them to both auditors. Pair this with our <Link href="/resources/blog/iso-27001-plus-dpdp-act" className="inline-link">ISO 27001 + DPDP guide</Link> if you also need Indian data protection compliance.</p>
          </section>

          <div className="cta-bottom">
            <h3>Pursuing ISO 27001 and SOC 2 together?</h3>
            <p>SecComply runs combined ISO 27001 + SOC 2 programmes - one control set, one evidence pipeline, two audits. Built so the second framework costs a fraction of the first.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a dual-compliance call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What is the core difference between ISO 27001 and SOC 2?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>ISO 27001 is an international certification of an Information Security Management System, issued by an accredited certification body, valid for three years. SOC 2 is an attestation report produced by a licensed CPA firm against the AICPA's Trust Services Criteria, describing how your controls operate. ISO 27001 certifies you have a managed, continually improving security system; SOC 2 attests to how specific controls are designed and (for Type 2) operated over a period. One is a certificate; the other is a report.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How much do ISO 27001 and SOC 2 controls overlap?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Estimates commonly put the control overlap between roughly 40% and 85%, depending on which SOC 2 Trust Services Criteria you include and how your ISO scope is drawn. The Security criterion of SOC 2 in particular maps very closely onto ISO 27001 Annex A controls. The practical consequence is that most of the work - access control, encryption, logging, change management, incident response, vendor management - counts toward both.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Which one does my market need?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>SOC 2 is the de-facto expectation in North America, so US enterprise buyers usually ask for it. ISO 27001 is the international standard and is more commonly expected by European and global customers. If you sell to both markets - as most growing SaaS and service companies eventually do - you are likely to need both. The combined approach exists precisely because the market split makes dual compliance common.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can we use the same evidence for both audits?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Largely yes for the overlapping controls. The access reviews, change tickets, logs, vulnerability scans, vendor assessments, and incident records you maintain serve both the ISO 27001 audit and the SOC 2 examination. The main difference is form: SOC 2 Type 2 requires evidence of operation across a defined period, so you maintain it continuously, while ISO sampling is point-in-time plus history. Build the evidence once, present it to both auditors.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Should we do ISO 27001 or SOC 2 first if pursuing both?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>A common and efficient approach is to build the ISO 27001 ISMS as the foundation, since it establishes the managed system and the full control set, then map the SOC 2 Trust Services Criteria onto it and run a SOC 2 examination. Because SOC 2 Type 2 covers an operating period, you can begin accumulating SOC 2 evidence while finishing ISO. Some companies that sell primarily to US buyers start with SOC 2 Type 1 for speed and add ISO later. The right order depends on which customers are blocking deals now.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Dual Compliance</div>
            <h3>Two frameworks, one programme</h3>
            <p>One control set, one evidence pipeline, two audits - ISO 27001 + SOC 2 done efficiently.</p>
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
              <li><Link href="/resources/blog/iso-27001-for-saas">ISO 27001 for SaaS</Link></li>
              <li><Link href="/resources/blog/iso-27001-plus-dpdp-act">ISO 27001 + DPDP Act</Link></li>
              <li><Link href="/resources/blog/iso-27001-for-fintech">ISO 27001 for Fintech</Link></li>
              <li><Link href="/resources/blog/iso-27001-surveillance-audits">Surveillance Audits</Link></li>
              <li><Link href="/resources/blog/iso-27001-implementation-roadmap">Implementation Roadmap</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
