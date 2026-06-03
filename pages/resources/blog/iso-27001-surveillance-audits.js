import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001SurveillanceAudits() {
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
        <title>ISO 27001 Surveillance Audits - What They Check and How to Prepare | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="ISO 27001 certification is a three-year cycle, and surveillance audits keep it alive in years one and two. What surveillance audits actually check, how they differ from the certification audit, the most common findings, and how to prepare so they pass smoothly." />
        <meta name="keywords" content="ISO 27001 surveillance audit, ISO 27001 annual audit, certification cycle, surveillance audit preparation, ISO 27001 recertification, ISMS continual improvement, nonconformity closure" />
        <meta property="og:title" content="ISO 27001 Surveillance Audits - What They Check and How to Prepare" />
        <meta property="og:description" content="Getting certified is the start, not the finish. Surveillance audits keep your certificate alive each year. What they check, the common findings, and how to prepare." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-surveillance-audits" />
        <meta property="article:published_time" content="2026-05-26" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-surveillance-audits" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 Surveillance Audits - What They Check and How to Prepare","description":"What ISO 27001 surveillance audits check, how they differ from certification, common findings, and how to prepare.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-26","dateModified":"2026-05-26","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-surveillance-audits","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"ISO 27001 Surveillance Audits","item":"https://seccomply.net/resources/blog/iso-27001-surveillance-audits"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is an ISO 27001 surveillance audit?","acceptedAnswer":{"@type":"Answer","text":"A surveillance audit is a lighter annual check the certification body conducts in the years between your initial certification and recertification. ISO 27001 certificates run on a three-year cycle: you pass the Stage 1 and Stage 2 certification audit, then surveillance audits in years one and two confirm the ISMS is still operating and improving, and a recertification audit in year three renews the certificate. Surveillance audits sample a subset of the ISMS rather than examining everything."}},{"@type":"Question","name":"How is a surveillance audit different from the certification audit?","acceptedAnswer":{"@type":"Answer","text":"The certification (Stage 2) audit examines the entire ISMS against the standard. A surveillance audit is narrower - it samples a subset of controls and always checks certain mandatory areas: that prior nonconformities have been closed, that internal audits and management reviews have continued, that the ISMS is being maintained and improved, and that significant changes to scope or risk have been handled. It is shorter and less exhaustive, but failing it can still jeopardise your certificate."}},{"@type":"Question","name":"What do surveillance audits always check?","acceptedAnswer":{"@type":"Answer","text":"Certain areas are checked at every surveillance audit regardless of sampling: closure of prior nonconformities, the internal audit programme and its results, management review records, the corrective action and continual improvement process, handling of complaints and incidents, and any changes to the scope, structure, or risk profile of the organisation. Use of the certification mark and logo is also verified. Beyond these, the auditor samples a rotating subset of Annex A controls so that the whole ISMS is covered across the three-year cycle."}},{"@type":"Question","name":"What happens if we fail a surveillance audit?","acceptedAnswer":{"@type":"Answer","text":"Minor nonconformities are common and are resolved by submitting a corrective action plan and evidence of remediation within an agreed timeframe - the certificate continues. Major nonconformities are more serious: they must be addressed promptly, sometimes with a follow-up audit, and if left unresolved can lead to suspension or withdrawal of the certificate. The practical point is that surveillance audits rarely fail outright if the ISMS has genuinely been operating; failures usually trace to an ISMS that went dormant after certification."}},{"@type":"Question","name":"How do we prepare for a surveillance audit?","acceptedAnswer":{"@type":"Answer","text":"Keep the ISMS alive all year rather than scrambling before the audit. That means running internal audits on schedule, holding management reviews, closing nonconformities and tracking corrective actions, maintaining current risk assessments and the Statement of Applicability, and keeping evidence (access reviews, logs, incident records, training) continuously. Before the audit, confirm prior nonconformities are closed with evidence, review changes since the last audit, and make sure the documents and records the auditor will sample are current and findable."}},{"@type":"Question","name":"Can our scope or risks change between audits?","acceptedAnswer":{"@type":"Answer","text":"Yes, and the surveillance audit specifically looks at how you handled change. New systems, acquisitions, new product lines, organisational restructures, or significant new risks should be reflected in an updated risk assessment, Statement of Applicability, and where relevant the certified scope. Unmanaged change - a major new system never risk-assessed, for example - is a common source of surveillance findings."}}]}]}) }} />
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
    .timeline{position:relative;margin:1.5rem 0 2rem;padding-left:1.5rem;border-left:2px solid var(--bo)}
    .tl-item{position:relative;padding:0 0 1.4rem 1.2rem}
    .tl-item:last-child{padding-bottom:0}
    .tl-item::before{content:'';position:absolute;left:-1.62rem;top:4px;width:11px;height:11px;border-radius:50%;background:var(--cy);border:2px solid var(--bg)}
    .tl-yr{font-size:.7rem;font-weight:800;letter-spacing:.05em;text-transform:uppercase;color:var(--cy);font-family:'JetBrains Mono',monospace;margin-bottom:.2rem}
    .tl-item h4{font-size:.98rem;color:var(--tx);font-weight:700;margin:0 0 .3rem}
    .tl-item p{font-size:.88rem;color:var(--tb);margin:0!important;line-height:1.6}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(0, 129, 242,.06);border:1px solid rgba(0, 129, 242,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .check-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.3rem 1.4rem;margin:1rem 0;border-left:3px solid var(--cy)}
    .check-card h4{font-size:1rem;font-weight:700;color:var(--tx);margin:0 0 .4rem;display:flex;align-items:center;gap:.5rem}
    .check-card p{font-size:.9rem;color:var(--tb);line-height:1.65;margin:0!important}
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
        <span>ISO 27001 Surveillance Audits</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">ISO 27001</span>
          <span className="badge badge-bl">Surveillance Audit</span>
          <span className="badge badge-gr">Maintaining Certification</span>
        </div>
        <h1 className="hero-h1">ISO 27001 Surveillance Audits - What They Check and <em>How to Prepare</em></h1>
        <p className="hero-sub">Getting certified is the start, not the finish. ISO 27001 runs on a three-year cycle, and surveillance audits keep your certificate alive in years one and two. What surveillance audits actually check, how they differ from the certification audit, the most common findings, and how to prepare so they pass without drama.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Cybersecurity Expert</span></div>
            <div className="adate"><span>May 26, 2026</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=520&fit=crop" alt="Monitoring and continuous review dashboard" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Certification is point-in-time; the ISMS is continuous. Surveillance audits exist to confirm the system kept running after the certificate was issued.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#the-cycle" className="toc-link">1. The Three-Year Cycle</a>
            <a href="#what-checks" className="toc-link">2. What Surveillance Checks</a>
            <a href="#always-checked" className="toc-link">3. Always-Checked Areas</a>
            <a href="#findings" className="toc-link">4. Common Findings</a>
            <a href="#prepare" className="toc-link">5. How to Prepare</a>
            <a href="#failing" className="toc-link">6. If You Get a Finding</a>
            <a href="#faq" className="toc-link">7. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">3yr</div><div className="stat-lbl">Certification Cycle</div></div>
          <div className="stat-card"><div className="stat-num">2</div><div className="stat-lbl">Surveillance Audits</div></div>
          <div className="stat-card"><div className="stat-num">Subset</div><div className="stat-lbl">Sampled, Not All</div></div>
          <div className="stat-card"><div className="stat-num">Y3</div><div className="stat-lbl">Recertification</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Teams often treat ISO 27001 certification as a finish line - pass the audit, frame the certificate, move on. But the certificate is the beginning of an ongoing commitment. The standard is built around continual improvement, and the certification body checks that you are living up to it through annual surveillance audits. An ISMS that goes quiet after certification is exactly what surveillance audits are designed to catch.</p>

          <p>This guide explains the surveillance audit: where it sits in the cycle, what it examines, what trips organisations up, and how to walk in prepared. If you have not yet certified, start with our <Link href="/resources/blog/iso-27001-stage-1-vs-stage-2" className="inline-link">Stage 1 vs Stage 2 guide</Link> and the <Link href="/resources/blog/iso-27001-certification-timeline" className="inline-link">certification timeline</Link>.</p>

          <section id="the-cycle">
            <h2>1. The <em>Three-Year Cycle</em></h2>
            <p>ISO 27001 certificates run on a three-year cycle, with checkpoints each year:</p>

            <div className="timeline">
              <div className="tl-item">
                <div className="tl-yr">Year 0</div>
                <h4>Certification audit (Stage 1 + Stage 2)</h4>
                <p>The full initial assessment. Stage 1 reviews documentation and readiness; Stage 2 examines the entire ISMS in operation. Passing it issues the certificate.</p>
              </div>
              <div className="tl-item">
                <div className="tl-yr">Year 1</div>
                <h4>First surveillance audit</h4>
                <p>A lighter check confirming the ISMS is still operating and improving. Samples a subset of controls plus the mandatory always-checked areas.</p>
              </div>
              <div className="tl-item">
                <div className="tl-yr">Year 2</div>
                <h4>Second surveillance audit</h4>
                <p>Same structure as year one, typically sampling a different subset of controls so the whole ISMS is covered across the cycle.</p>
              </div>
              <div className="tl-item">
                <div className="tl-yr">Year 3</div>
                <h4>Recertification audit</h4>
                <p>A fuller assessment, similar in depth to the original certification, that renews the certificate for another three-year cycle.</p>
              </div>
            </div>

            <p>So between the two bookend audits (certification and recertification), the surveillance audits in years one and two keep the certificate valid and confirm the system is alive.</p>
          </section>

          <section id="what-checks">
            <h2>2. What Surveillance <em>Actually Checks</em></h2>
            <p>A surveillance audit is narrower and shorter than the certification audit. Rather than examining the whole ISMS, it does two things: it samples a rotating subset of Annex A controls, and it always checks a defined set of mandatory areas (covered next). The sampling means that across the three-year cycle, the full control set gets examined - just not all at once each year.</p>
            <p>Crucially, surveillance audits look hardest at the management system rather than just the technical controls - because a lapsed management system is the clearest sign that certification was a one-off effort rather than an operating discipline.</p>
          </section>

          <section id="always-checked">
            <h2>3. The <em>Always-Checked</em> Areas</h2>
            <p>Regardless of which controls get sampled, every surveillance audit checks these:</p>

            <div className="check-card"><h4>✓ Closure of prior nonconformities</h4><p>Any findings from the last audit must be closed with evidence. This is the first thing an auditor verifies - unclosed prior findings are a serious red flag.</p></div>
            <div className="check-card"><h4>✓ Internal audit programme</h4><p>That you ran internal audits on schedule and acted on the results. A dormant internal audit programme is one of the most common findings.</p></div>
            <div className="check-card"><h4>✓ Management review</h4><p>Records showing leadership reviewed the ISMS at planned intervals, considering performance, risks, and improvement.</p></div>
            <div className="check-card"><h4>✓ Corrective action &amp; continual improvement</h4><p>Evidence that issues lead to corrective action and that the ISMS is genuinely improving over time.</p></div>
            <div className="check-card"><h4>✓ Incidents &amp; complaints</h4><p>How security incidents and any complaints were handled since the last audit.</p></div>
            <div className="check-card"><h4>✓ Changes to scope, structure, or risk</h4><p>That significant changes - new systems, acquisitions, restructures, new risks - were reflected in the risk assessment, Statement of Applicability, and scope.</p></div>
            <div className="check-card"><h4>✓ Use of the certification mark</h4><p>That you have used the certification body's logo and your certified status correctly in marketing and communications.</p></div>
          </section>

          <section id="findings">
            <h2>4. The Most <em>Common Findings</em></h2>
            <p>Surveillance findings cluster around a predictable set of lapses - almost all of them symptoms of an ISMS that slowed down after certification:</p>
            <ul>
              <li><strong>Internal audits not done.</strong> The single most common finding. The programme lapses once the pressure of certification is gone.</li>
              <li><strong>Management reviews skipped.</strong> Leadership stops convening the review once the certificate is in hand.</li>
              <li><strong>Access reviews not performed.</strong> Periodic access recertification falls off the calendar.</li>
              <li><strong>Risk assessment gone stale.</strong> New systems and changes never reflected in the risk register or SoA.</li>
              <li><strong>Prior nonconformities not closed.</strong> Findings from the last audit left open or closed without real evidence.</li>
              <li><strong>Evidence gaps.</strong> Controls operating, but the records to prove it not retained.</li>
            </ul>

            <div className="callout co-key">
              <div className="co-icon">🎯</div>
              <div className="co-body">
                <strong>The pattern is always the same</strong>
                <p>Nearly every surveillance finding traces back to the ISMS going dormant after certification. The organisations that sail through are the ones that kept the cadence - internal audits, management reviews, access reviews, risk updates - running all year as routine, not as audit-season theatre.</p>
              </div>
            </div>
          </section>

          <section id="prepare">
            <h2>5. How to <em>Prepare</em></h2>
            <p>The real preparation is keeping the ISMS alive year-round. But in the run-up to a surveillance audit, focus on:</p>
            <ul>
              <li><strong>Close prior findings first.</strong> Confirm every nonconformity from the last audit is closed with evidence. This is non-negotiable.</li>
              <li><strong>Confirm the cadence ran.</strong> Internal audits done, management review held, access reviews performed - with dated records.</li>
              <li><strong>Refresh risk and SoA.</strong> Update the risk assessment and Statement of Applicability for any changes since the last audit.</li>
              <li><strong>Map your changes.</strong> List significant changes (new systems, people, structure, risks) and how the ISMS handled each.</li>
              <li><strong>Make evidence findable.</strong> The auditor samples; if records exist but cannot be located quickly, it reads as a control failure.</li>
              <li><strong>Brief the people who will be interviewed.</strong> Control owners should be able to explain their controls and show the evidence.</li>
            </ul>
            <p>For service providers whose clients rely on continued certification, a clean surveillance history is itself a client-trust asset - see our <Link href="/resources/blog/iso-27001-for-it-service-providers" className="inline-link">IT service provider guide</Link>.</p>
          </section>

          <section id="failing">
            <h2>6. If You Get a <em>Finding</em></h2>
            <p>Findings are normal and not the end of the world - how you respond matters more than getting zero:</p>
            <ul>
              <li><strong>Minor nonconformity.</strong> Common and manageable. You submit a corrective action plan and evidence of remediation within an agreed timeframe; the certificate continues uninterrupted.</li>
              <li><strong>Major nonconformity.</strong> More serious. It must be addressed promptly, sometimes with a follow-up audit to verify closure. Left unresolved, a major can lead to suspension or withdrawal of the certificate.</li>
              <li><strong>Opportunities for improvement.</strong> Not findings at all - auditor suggestions you may adopt or not.</li>
            </ul>
            <p>The practical reality: surveillance audits rarely fail outright when the ISMS has genuinely been operating. Failures almost always trace to a system that went quiet, not to bad luck on a sampling day.</p>
          </section>

          <div className="cta-bottom">
            <h3>Need to keep your certificate strong?</h3>
            <p>SecComply runs the ISMS cadence between audits - internal audits, management reviews, risk updates, evidence retention - and prepares you for surveillance and recertification so they pass without drama.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book an ISMS maintenance call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What is an ISO 27001 surveillance audit?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>A surveillance audit is a lighter annual check the certification body conducts in the years between your initial certification and recertification. ISO 27001 certificates run on a three-year cycle: you pass the Stage 1 and Stage 2 certification audit, then surveillance audits in years one and two confirm the ISMS is still operating and improving, and a recertification audit in year three renews the certificate. Surveillance audits sample a subset of the ISMS rather than examining everything.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How is a surveillance audit different from the certification audit?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>The certification (Stage 2) audit examines the entire ISMS against the standard. A surveillance audit is narrower - it samples a subset of controls and always checks certain mandatory areas: that prior nonconformities have been closed, that internal audits and management reviews have continued, that the ISMS is being maintained and improved, and that significant changes to scope or risk have been handled. It is shorter and less exhaustive, but failing it can still jeopardise your certificate.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What do surveillance audits always check?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Certain areas are checked at every surveillance audit regardless of sampling: closure of prior nonconformities, the internal audit programme and its results, management review records, the corrective action and continual improvement process, handling of complaints and incidents, and any changes to the scope, structure, or risk profile of the organisation. Use of the certification mark and logo is also verified. Beyond these, the auditor samples a rotating subset of Annex A controls so that the whole ISMS is covered across the three-year cycle.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What happens if we fail a surveillance audit?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Minor nonconformities are common and are resolved by submitting a corrective action plan and evidence of remediation within an agreed timeframe - the certificate continues. Major nonconformities are more serious: they must be addressed promptly, sometimes with a follow-up audit, and if left unresolved can lead to suspension or withdrawal of the certificate. The practical point is that surveillance audits rarely fail outright if the ISMS has genuinely been operating; failures usually trace to an ISMS that went dormant after certification.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How do we prepare for a surveillance audit?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Keep the ISMS alive all year rather than scrambling before the audit. That means running internal audits on schedule, holding management reviews, closing nonconformities and tracking corrective actions, maintaining current risk assessments and the Statement of Applicability, and keeping evidence (access reviews, logs, incident records, training) continuously. Before the audit, confirm prior nonconformities are closed with evidence, review changes since the last audit, and make sure the documents and records the auditor will sample are current and findable.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can our scope or risks change between audits?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Yes, and the surveillance audit specifically looks at how you handled change. New systems, acquisitions, new product lines, organisational restructures, or significant new risks should be reflected in an updated risk assessment, Statement of Applicability, and where relevant the certified scope. Unmanaged change - a major new system never risk-assessed, for example - is a common source of surveillance findings.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">ISMS Maintenance</div>
            <h3>Keep the certificate strong</h3>
            <p>We run the between-audit cadence and prepare you for surveillance and recertification.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a call →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">Certification Journey</div>
            <ul>
              <li><Link href="/resources/blog/iso-27001-certification-timeline">Certification Timeline</Link></li>
              <li><Link href="/resources/blog/iso-27001-stage-1-vs-stage-2">Stage 1 vs Stage 2</Link></li>
              <li><Link href="/resources/blog/iso-27001-internal-audit">Internal Audit Guide</Link></li>
              <li><Link href="/resources/blog/iso-27001-for-it-service-providers">For IT Service Providers</Link></li>
              <li><Link href="/resources/blog/iso-27001-implementation-roadmap">Implementation Roadmap</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
