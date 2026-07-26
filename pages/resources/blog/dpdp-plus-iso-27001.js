import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPPlusISO27001() {
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
        <title>DPDP + ISO 27001 - How They Overlap and How to Get Both Done Together | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="ISO 27001 Annex A controls and the DPDP Act's Section 8 safeguards cover much of the same ground -but certification is not compliance. A control-level overlap map, the DPDP-only obligations ISO 27001 never touches, and the sequence that lets you build both once." />
        <meta name="keywords" content="DPDP ISO 27001, ISO 27001 Annex A DPDP mapping, DPDP Section 8 security safeguards, ISO 27701 DPDP Act, DPDP compliance ISO 27001 certification, ISO 27001 privacy gap India" />
        <meta property="og:title" content="DPDP + ISO 27001 - How They Overlap and How to Get Both Done Together" />
        <meta property="og:description" content="A control-level map between ISO 27001 Annex A and DPDP Section 8, the privacy obligations ISO 27001 never covers, and how to sequence the work so you build the machinery once." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-plus-iso-27001" />
        <meta property="article:published_time" content="2026-06-03" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-plus-iso-27001" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"DPDP + ISO 27001 - How They Overlap and How to Get Both Done Together","description":"ISO 27001 Annex A controls and the DPDP Act's Section 8 safeguards cover much of the same ground -but certification is not compliance. A control-level overlap map, the DPDP-only obligations ISO 27001 never touches, and the sequence that lets you build both once.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-06-03","dateModified":"2026-06-03","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-plus-iso-27001","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP + ISO 27001","item":"https://seccomply.net/resources/blog/dpdp-plus-iso-27001"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does ISO 27001 certification make us DPDP compliant?","acceptedAnswer":{"@type":"Answer","text":"No. ISO 27001 certifies that you operate a systematic information security management system -it says nothing about whether you have valid consent under Section 6, whether your privacy notice meets Section 5's itemised disclosure requirements, whether you can fulfil the eight data principal rights, or whether your children's data processing meets Section 9. Certification and legal compliance are two different questions, even though the underlying security machinery overlaps heavily."}},{"@type":"Question","name":"Which DPDP requirement maps to ISO 27001 Annex A?","acceptedAnswer":{"@type":"Answer","text":"Section 8 of the DPDP Act, which requires data fiduciaries to implement reasonable security safeguards to prevent personal data breaches, maps most directly onto ISO 27001 Annex A. Controls across all four Annex A themes -organisational, people, physical, and technological -collectively demonstrate the kind of reasonable security safeguards Section 8 expects, including access control, encryption, logging and monitoring, backup, supplier management, and incident response."}},{"@type":"Question","name":"What does DPDP require that ISO 27001 does not?","acceptedAnswer":{"@type":"Answer","text":"DPDP requires a set of privacy-specific obligations that ISO 27001 has no equivalent for: valid, itemised consent under Section 6, a clear notice under Section 5, mechanisms to fulfil the eight data principal rights, verifiable parental consent and no behavioural tracking for children's data under Section 9, appointment of a Data Protection Officer and additional obligations if you are a Significant Data Fiduciary under Section 10, a grievance redressal process with defined response timelines, and purpose limitation on how collected data is used."}},{"@type":"Question","name":"Should we do ISO 27001 or DPDP first?","acceptedAnswer":{"@type":"Answer","text":"It depends on your exposure. If you are a Significant Data Fiduciary, handle sensitive categories of data, or face imminent enforcement risk given penalties of up to ₹250 crore, prioritise DPDP's Section 8 safeguards and breach notification readiness first, then build the ISO 27001 ISMS around that foundation. If your primary driver is enterprise procurement or a certification deadline, and DPDP enforcement risk is lower for now, you can run both in parallel using a unified control set so you are not duplicating evidence collection."}},{"@type":"Question","name":"How does ISO 27701 help with DPDP?","acceptedAnswer":{"@type":"Answer","text":"ISO 27701 is a privacy information management system extension to ISO 27001, adding controls specifically for organisations that process personal data as controllers or processors -covering consent, purpose limitation, data subject rights, and privacy by design. For a company already certified to ISO 27001, extending to ISO 27701 closes much of the gap identified in this article, though DPDP-specific requirements like the exact breach notification timelines under the DPDP Rules and India's Data Protection Board processes still need a dedicated overlay."}}]}]}) }} />
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
        <span>DPDP + ISO 27001</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 5 -Advanced</span>
          <span className="badge badge-am">Overlap Map</span>
        </div>
        <h1 className="hero-h1">DPDP + ISO 27001 - <em>How They Overlap</em> and How to Get Both Done Together</h1>
        <p className="hero-sub">One is mandatory privacy law, the other a voluntary security certificate - but a large part of what they ask for is the same machinery. A control-level overlap map between ISO 27001 Annex A and the DPDP Act's Section 8 safeguards, the DPDP-only obligations ISO 27001 never touches, and the sequence that lets you build once.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>June 3, 2026</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1280&h=520&fit=crop" alt="Security controls and compliance mapping" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Most of the machinery ISO 27001 and the DPDP Act ask for is the same machinery -the difference is in what each one adds on top.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#two-things" className="toc-link">1. Two Different Instruments</a>
            <a href="#overlap" className="toc-link">2. Where They Overlap</a>
            <a href="#gaps" className="toc-link">3. What ISO 27001 Misses</a>
            <a href="#bridge" className="toc-link">4. The ISO 27701 Bridge</a>
            <a href="#sequence" className="toc-link">5. Sequencing the Work</a>
            <a href="#checklist" className="toc-link">6. Readiness Checklist</a>
            <a href="#faq" className="toc-link">7. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">93</div><div className="stat-lbl">Annex A Controls</div></div>
          <div className="stat-card"><div className="stat-num">Sec 8</div><div className="stat-lbl">Security Safeguards</div></div>
          <div className="stat-card"><div className="stat-num">8</div><div className="stat-lbl">Data Principal Rights</div></div>
          <div className="stat-card"><div className="stat-num">₹250 cr</div><div className="stat-lbl">Max Penalty</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>ISO 27001 and the DPDP Act sit in different categories -one is a globally recognised, voluntary information security certification; the other is a mandatory Indian privacy law carrying penalties of up to ₹250 crore. But look inside the machinery each one asks you to build, and a large share of it is identical: access control, encryption, logging, incident response, supplier oversight. Organisations that treat the two as unrelated projects tend to build the same access review process twice, under two different names, for two different auditors.</p>

          <p>This is the DPDP-side view of that overlap. For the ISO 27001-side walkthrough of the same ground, see our companion piece <Link href="/resources/blog/iso-27001-plus-dpdp-act" className="inline-link">ISO 27001 + DPDP Act</Link>.</p>

          <section id="two-things">
            <h2>1. Two <em>Different</em> Instruments</h2>
            <p>ISO/IEC 27001:2022 is a voluntary international standard. Organisations that adopt it build an Information Security Management System (ISMS) -a structured programme of people, process, and technology controls covering the confidentiality, integrity, and availability of information assets. Certification comes from an accredited certification body, following a risk assessment, a Statement of Applicability drawn from the 93 controls in Annex A, and periodic surveillance audits.</p>

            <p>The DPDP Act, 2023 is India's mandatory data protection law. It governs how organisations -data fiduciaries -collect, process, store, and share the personal data of individuals -data principals. It is enforced by the Data Protection Board of India, and it imposes obligations around consent, notice, security, data principal rights, and breach notification, backed by penalties of up to ₹250 crore paid to the Consolidated Fund of India, not to the affected data principal. There is no certificate to earn under DPDP; there is only ongoing compliance, and only the Board decides whether you have achieved it. For the full picture of what the Act requires, see our <Link href="/resources/blog/dpdp-act-2023-explained" className="inline-link">DPDP Act overview</Link>.</p>

            <div className="callout co-key">
              <div className="co-icon">🔑</div>
              <div className="co-body">
                <strong>Certification is not compliance</strong>
                <p>An ISO 27001 certificate tells a customer or auditor that you manage security risk systematically. It says nothing about whether you have lawful consent, an itemised notice, or a working mechanism for data principals to exercise their rights. Treat the certificate as evidence of security maturity, not as a DPDP compliance certificate -because no such certificate exists.</p>
              </div>
            </div>
          </section>

          <section id="overlap">
            <h2>2. Where They Overlap -<em>The Control Map</em></h2>
            <p>ISO 27001 Annex A organises its 93 controls into four themes: organisational (37 controls), people (8 controls), physical (14 controls), and technological (34 controls). Section 8 of the DPDP Act requires data fiduciaries to implement reasonable security safeguards to prevent personal data breaches, without prescribing which specific controls to use. That vagueness is deliberate -it leaves room for exactly the kind of structured control set ISO 27001 already provides.</p>

            <p>In practice, an organisation that has implemented a credible ISO 27001 ISMS is already covering most of what a regulator, or the Data Protection Board, would expect to see under Section 8's reasonable safeguards standard: who can access personal data, how it is encrypted, whether activity is logged and monitored, whether backups exist, how incidents are handled, and how suppliers who touch that data are managed.</p>

            <div className="vendor-table-wrap">
              <table className="vendor-table">
                <thead>
                  <tr><th>DPDP Section 8 Requirement</th><th>ISO 27001 Annex A Area</th><th>Representative Controls</th></tr>
                </thead>
                <tbody>
                  <tr><td>Restrict who can access personal data</td><td>Access control (Technological)</td><td>A.5.15 Access control, A.5.18 Access rights, A.8.5 Secure authentication</td></tr>
                  <tr><td>Protect data in storage and transit</td><td>Cryptography (Technological)</td><td>A.8.24 Use of cryptography</td></tr>
                  <tr><td>Detect unauthorised access or misuse</td><td>Logging and monitoring (Technological)</td><td>A.8.15 Logging, A.8.16 Monitoring activities</td></tr>
                  <tr><td>Prevent data loss</td><td>Operations security (Technological)</td><td>A.8.13 Information backup, A.5.29-A.5.30 Continuity</td></tr>
                  <tr><td>Manage vendors processing data on your behalf</td><td>Supplier relationships (Organisational)</td><td>A.5.19-A.5.22 Supplier security</td></tr>
                  <tr><td>Respond to and contain a breach</td><td>Incident management (Organisational)</td><td>A.5.24-A.5.28 Incident management</td></tr>
                  <tr><td>Limit retention of personal data</td><td>Asset and information handling (Organisational)</td><td>A.8.10 Information deletion, A.5.10 Acceptable use</td></tr>
                  <tr><td>Secure physical records and devices</td><td>Physical security</td><td>A.7.1-A.7.10 Physical security controls</td></tr>
                  <tr><td>Train staff who handle personal data</td><td>People</td><td>A.6.3 Awareness and training, A.6.6 Confidentiality agreements</td></tr>
                </tbody>
              </table>
            </div>

            <p>This is why organisations already on an ISO 27001 journey should not restart their DPDP security work from zero. The gap analysis is not "do we have security controls" -it is "do our existing controls, mapped against Section 8, leave any hole a breach notification obligation would expose." Done once, that gap analysis tells you exactly how much new work DPDP adds on top of an existing ISMS.</p>
          </section>

          <section id="gaps">
            <h2>3. What ISO 27001 <em>Does Not Cover</em></h2>
            <p>Annex A has no control for consent. It has no control for a privacy notice. It has no concept of a "data principal" with rights, or the specific obligations Sections 6 through 10 create for a "data fiduciary." ISO 27001 protects information as an asset; DPDP protects the individual the information is about. That difference in orientation is why security maturity and privacy compliance are correlated but not identical.</p>

            <ul>
              <li><strong>Valid, itemised consent</strong> -Section 6 requires consent that is free, specific, informed, unconditional, and unambiguous, given through a clear affirmative action, and as easy to withdraw as to give. Annex A has no equivalent control.</li>
              <li><strong>An itemised notice</strong> -Section 5 requires a notice, in plain language, describing exactly what personal data is collected and for what purpose, provided at or before the point of collection.</li>
              <li><strong>The eight data principal rights</strong> -access, correction, erasure, grievance redressal, nominating another person, and the right to withdraw consent, among others, all need a working operational process behind them, not just a policy document. See our walkthrough of the <Link href="/resources/blog/8-rights-data-principals-dpdp" className="inline-link">eight data principal rights</Link>.</li>
              <li><strong>Children's data safeguards</strong> -Section 9 requires verifiable parental consent before processing a child's personal data and prohibits behavioural monitoring or targeted advertising directed at children. No Annex A control addresses age verification or parental consent.</li>
              <li><strong>DPO and Significant Data Fiduciary obligations</strong> -Section 10 imposes extra obligations, including appointing a Data Protection Officer, on organisations designated as Significant Data Fiduciaries.</li>
              <li><strong>Grievance redressal with response timelines</strong> -a data principal must be able to raise a grievance and receive a response within a defined period, not merely file a support ticket.</li>
              <li><strong>Purpose limitation</strong> -personal data may only be processed for the purpose it was collected for, or a purpose the data principal has since consented to; ISO 27001 has no control that limits how compliant data may be used.</li>
            </ul>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>Where organisations get caught out</strong>
                <p>Teams that lead with ISO 27001 sometimes assume the certificate closes the DPDP conversation. It only closes the security half. Consent, notice, rights fulfilment, and children's data safeguards still need to be built as a dedicated workstream -see our guide to <Link href="/resources/blog/consent-under-dpdp-act" className="inline-link">consent under the DPDP Act</Link> for what that mechanism actually needs to do.</p>
              </div>
            </div>
          </section>

          <section id="bridge">
            <h2>4. ISO 27701 as the <em>Privacy Bridge</em></h2>
            <p>ISO/IEC 27701 is a privacy information management system (PIMS) extension to ISO 27001 and ISO 27002. It does not replace ISO 27001 -it sits on top of it, adding controls specifically for organisations acting as PII controllers or PII processors: consent capture and withdrawal, purpose limitation, data subject rights handling, privacy by design, and data minimisation.</p>

            <p>For an organisation that already holds ISO 27001 certification, extending to ISO 27701 is comparatively efficient -the risk assessment methodology, the management system structure, the internal audit programme, and much of the evidence base already exist. What changes is the addition of a privacy-specific control set layered on the same ISMS.</p>

            <p>ISO 27701 closes a meaningful share of the gap described in the previous section: it gives you a structured way to build consent management, notice, and rights-handling processes rather than inventing them from scratch. What it does not do is align perfectly with DPDP's specific mechanics.</p>

            <div className="case-card">
              <h3>Where ISO 27701 stops short</h3>
              <p>Even with the 27701 extension in place, a few DPDP mechanics still need a dedicated overlay:</p>
              <ul>
                <li>Breach notification timelines set under the DPDP Rules, rather than a generic incident SLA</li>
                <li>The Data Protection Board of India's processes and the ₹250 crore penalty structure</li>
                <li>Significant Data Fiduciary obligations under Section 10, including DPO appointment</li>
                <li>Children's data mechanics under Section 9 -verifiable parental consent and the ban on behavioural tracking</li>
              </ul>
            </div>
          </section>

          <section id="sequence">
            <h2>5. <em>Sequencing</em> the Work</h2>
            <p>There is not one right order -the right sequence depends on which risk is larger for your organisation: enforcement risk under DPDP, or a certification deadline tied to a sales cycle. Three approaches work in practice.</p>

            <div className="case-card">
              <h3>Build the ISMS first, then extend to privacy</h3>
              <p>Good for organisations early in their security maturity, with no ISO 27001 foundation yet and no immediate DPDP enforcement pressure. Build the ISO 27001 ISMS, get certified, then extend to ISO 27701 and layer DPDP-specific requirements -consent, notice, rights, breach timelines- on top. Slower to full DPDP compliance, but avoids rebuilding the security foundation later.</p>
            </div>

            <div className="case-card">
              <h3>DPDP first, certification later</h3>
              <p>Good for organisations processing data at meaningful scale, or handling sensitive categories, where penalties of up to ₹250 crore represent real exposure. Prioritise Section 8 safeguards and breach notification readiness -see our guide to <Link href="/resources/blog/dpdp-breach-notification" className="inline-link">DPDP breach notification</Link> -along with consent, notice, and rights fulfilment first. Layer ISO 27001 certification on top once the legal exposure is addressed, using the DPDP security work as the foundation for the ISMS.</p>
            </div>

            <div className="case-card">
              <h3>Run them together</h3>
              <p>Good for organisations with the resources to run one combined programme: a single risk assessment, a single control set mapped to both Annex A and Section 8, a single evidence repository. Most efficient in total effort, since nothing gets built twice, but it needs a team that understands both frameworks well enough to design the mapping correctly the first time.</p>
            </div>

            <p>One factor that should push any organisation towards urgency regardless of sequence: Significant Data Fiduciary status. If your organisation processes data at a volume or sensitivity that could trigger SDF designation, the additional obligations under Section 10 -including a Data Protection Officer and stricter assessments -apply regardless of where you are in an ISO 27001 journey. Review your exposure using our guide to <Link href="/resources/blog/significant-data-fiduciary-sdf" className="inline-link">Significant Data Fiduciary obligations</Link> before deciding how to sequence the rest of the work.</p>
          </section>

          <section id="checklist">
            <h2>6. Combined <em>Readiness Checklist</em></h2>
            <p>Whichever sequence you choose, the following checklist covers the ground both frameworks care about, split by what belongs to the shared security foundation and what is DPDP-specific on top.</p>

            <div className="vendor-table-wrap">
              <table className="vendor-table">
                <thead>
                  <tr><th>Workstream</th><th>Shared With ISO 27001</th><th>DPDP-Specific Addition</th></tr>
                </thead>
                <tbody>
                  <tr><td>Access control & authentication</td><td>A.5.15, A.5.18, A.8.5 access reviews and MFA</td><td>Extend reviews to cover consent-linked data access</td></tr>
                  <tr><td>Encryption</td><td>A.8.24 cryptography policy</td><td>None -the same control serves both</td></tr>
                  <tr><td>Logging & monitoring</td><td>A.8.15, A.8.16</td><td>Retain logs long enough to support breach notification timelines</td></tr>
                  <tr><td>Incident response</td><td>A.5.24-A.5.28</td><td>Build the DPDP breach notification workflow into the same plan</td></tr>
                  <tr><td>Supplier management</td><td>A.5.19-A.5.22</td><td>Add DPA clauses covering data principal rights pass-through</td></tr>
                  <tr><td>Consent management</td><td>No Annex A equivalent</td><td>Build consent capture, granularity, and withdrawal per Section 6</td></tr>
                  <tr><td>Notice</td><td>No Annex A equivalent</td><td>Draft an itemised notice per Section 5</td></tr>
                  <tr><td>Rights fulfilment</td><td>No Annex A equivalent</td><td>Build request intake, verification, and response workflow</td></tr>
                  <tr><td>Children's data</td><td>No Annex A equivalent</td><td>Age verification and parental consent per Section 9</td></tr>
                  <tr><td>DPO / SDF readiness</td><td>Governance controls (Organisational)</td><td>Assess SDF thresholds, appoint DPO if designated</td></tr>
                </tbody>
              </table>
            </div>

            <p>None of this needs to be built twice. Map your existing or planned ISO 27001 controls against Section 8 first, then treat everything left unmapped as the DPDP-specific backlog. That backlog -consent, notice, rights, children's data, DPO/SDF readiness, and grievance redressal -is usually smaller than teams expect once the security overlap is accounted for.</p>
          </section>

          <div className="cta-bottom">
            <h3>Want the overlap mapped for your organisation?</h3>
            <p>SecComply builds a control-by-control map between your ISO 27001 Annex A implementation -existing or planned -and DPDP Section 8, then scopes exactly the DPDP-specific work -consent, notice, rights, breach readiness -that sits outside it.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a mapping call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Does ISO 27001 certification make us DPDP compliant?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>No. ISO 27001 certifies that you operate a systematic information security management system -it says nothing about whether you have valid consent under Section 6, whether your privacy notice meets Section 5's itemised disclosure requirements, whether you can fulfil the eight data principal rights, or whether your children's data processing meets Section 9. Certification and legal compliance are two different questions, even though the underlying security machinery overlaps heavily.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Which DPDP requirement maps to ISO 27001 Annex A?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Section 8 of the DPDP Act, which requires data fiduciaries to implement reasonable security safeguards to prevent personal data breaches, maps most directly onto ISO 27001 Annex A. Controls across all four Annex A themes -organisational, people, physical, and technological -collectively demonstrate the kind of reasonable security safeguards Section 8 expects, including access control, encryption, logging and monitoring, backup, supplier management, and incident response.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What does DPDP require that ISO 27001 does not?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>DPDP requires a set of privacy-specific obligations that ISO 27001 has no equivalent for: valid, itemised consent under Section 6, a clear notice under Section 5, mechanisms to fulfil the eight data principal rights, verifiable parental consent and no behavioural tracking for children's data under Section 9, appointment of a Data Protection Officer and additional obligations if you are a Significant Data Fiduciary under Section 10, a grievance redressal process with defined response timelines, and purpose limitation on how collected data is used.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Should we do ISO 27001 or DPDP first?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>It depends on your exposure. If you are a Significant Data Fiduciary, handle sensitive categories of data, or face imminent enforcement risk given penalties of up to ₹250 crore, prioritise DPDP's Section 8 safeguards and breach notification readiness first, then build the ISO 27001 ISMS around that foundation. If your primary driver is enterprise procurement or a certification deadline, and DPDP enforcement risk is lower for now, you can run both in parallel using a unified control set so you are not duplicating evidence collection.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How does ISO 27701 help with DPDP?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>ISO 27701 is a privacy information management system extension to ISO 27001, adding controls specifically for organisations that process personal data as controllers or processors -covering consent, purpose limitation, data subject rights, and privacy by design. For a company already certified to ISO 27001, extending to ISO 27701 closes much of the gap identified in this article, though DPDP-specific requirements like the exact breach notification timelines under the DPDP Rules and India's Data Protection Board processes still need a dedicated overlay.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Overlap Mapping</div>
            <h3>Build it once</h3>
            <p>Control-by-control mapping between ISO 27001 Annex A and DPDP Section 8, plus the privacy-specific backlog scoped and sequenced.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a mapping call →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-act-2023-explained">DPDP Act Explained</Link></li>
              <li><Link href="/resources/blog/significant-data-fiduciary-sdf">Significant Data Fiduciary</Link></li>
              <li><Link href="/resources/blog/dpdp-breach-notification">Breach Notification</Link></li>
              <li><Link href="/resources/blog/consent-under-dpdp-act">Consent Under DPDP</Link></li>
              <li><Link href="/resources/blog/8-rights-data-principals-dpdp">8 Data Principal Rights</Link></li>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Roadmap</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
