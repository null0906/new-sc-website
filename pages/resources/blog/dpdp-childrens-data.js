import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPChildrensData() {
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
        <title>DPDP Act and Children&apos;s Data - Special Obligations and How to Comply | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="If your platform is used by anyone under 18, the DPDP Act treats you differently - and more strictly. Verifiable parental consent, the ban on tracking and targeted advertising to children, the platforms most affected, and a five-step compliance plan." />
        <meta name="keywords" content="DPDP children data, DPDP parental consent, children data protection India, DPDP minors, edtech DPDP compliance, verifiable parental consent, DPDP age verification, children data penalty" />
        <meta property="og:title" content="DPDP Act and Children's Data - Special Obligations and How to Comply" />
        <meta property="og:description" content="The DPDP Act devotes specific, strict provisions to children's data. Verifiable parental consent, no tracking, no targeted ads, and the five steps to build compliance." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-childrens-data" />
        <meta property="article:published_time" content="2026-05-18" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-childrens-data" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"DPDP Act and Children's Data - Special Obligations and How to Comply","description":"The DPDP Act's special obligations for children's data - verifiable parental consent, the ban on tracking and targeted ads, affected platforms, and a five-step compliance plan.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-18","dateModified":"2026-05-18","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-childrens-data","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP Act and Children's Data","item":"https://seccomply.net/resources/blog/dpdp-childrens-data"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Who counts as a child under the DPDP Act?","acceptedAnswer":{"@type":"Answer","text":"A child is any person below the age of 18, consistent with the Indian Majority Act, 1875. The Act does not distinguish between a 10-year-old and a 17-year-old - both are children and both require verifiable parental or lawful guardian consent before their personal data is processed."}},{"@type":"Question","name":"What is verifiable parental consent?","acceptedAnswer":{"@type":"Answer","text":"Before processing any personal data of a child, you must obtain verifiable consent from the child's parent or lawful guardian. 'Verifiable' is the key word - a simple checkbox asking users to confirm they are over 18 is not enough. You need a mechanism that can actually verify parental identity and consent, such as mobile-linked (OTP) verification, Aadhaar-based parental verification where applicable, or signed consent forms for institutional deployments like schools. Achieving truly verifiable consent at scale is a significant technical challenge, so plan and document your method."}},{"@type":"Question","name":"Can we serve targeted ads to children if parents consent?","acceptedAnswer":{"@type":"Answer","text":"No. The prohibition on targeted advertising to children is a blanket ban - it is not curable by parental consent. The Act also prohibits tracking or behavioural monitoring of children across websites and applications, and profiling children for personalisation based on tracked behaviour. These restrictions apply even where a parent has consented to the underlying data processing."}},{"@type":"Question","name":"Which platforms are most affected by the children's data rules?","acceptedAnswer":{"@type":"Answer","text":"Edtech platforms serving students, gaming and entertainment apps likely to be used by minors, health and fitness apps with family plans where parents create child profiles, and social or community platforms that allow profile creation and content sharing. Importantly, the standard is 'likely to be used by children' - broader than 'marketed to children' - so a platform can have obligations even if minors are not its intended audience."}},{"@type":"Question","name":"What are the penalties for mishandling children's data?","acceptedAnswer":{"@type":"Answer","text":"Violations related to children's data attract some of the highest penalties under the DPDP Act - up to ₹200 crore. The reputational risk is just as significant: child data breaches or misuse draw intense public and media scrutiny, which often causes more lasting commercial damage than the financial penalty itself."}}]}]}) }} />
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
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .ob-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.3rem 1.4rem;margin:1rem 0;border-left:3px solid var(--cy)}
    .ob-card-head{display:flex;align-items:center;gap:.7rem;margin-bottom:.5rem;flex-wrap:wrap}
    .ob-num{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;background:var(--cy);color:white;border-radius:7px;font-size:.8rem;font-weight:800;font-family:'JetBrains Mono',monospace;flex-shrink:0}
    .ob-card h4{font-size:1rem;font-weight:700;color:var(--tx);margin:0}
    .ob-card p{font-size:.9rem;color:var(--tb);line-height:1.65;margin:0!important}
    .step-list{counter-reset:step;margin:1.5rem 0}
    .step{position:relative;padding:0 0 1.5rem 3.2rem;counter-increment:step}
    .step::before{content:counter(step);position:absolute;left:0;top:0;width:2.1rem;height:2.1rem;background:var(--cy);color:#fff;border-radius:9px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.95rem;font-family:'JetBrains Mono',monospace}
    .step::after{content:'';position:absolute;left:1.02rem;top:2.1rem;bottom:.3rem;width:2px;background:var(--bo)}
    .step:last-child{padding-bottom:0}.step:last-child::after{display:none}
    .step h4{font-size:1rem;color:var(--tx);font-weight:700;margin:.1rem 0 .4rem}
    .step p{font-size:.9rem;color:var(--tb);line-height:1.65;margin:0!important}
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
        <span>DPDP Act and Children&apos;s Data</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Children&apos;s Data</span>
          <span className="badge badge-gr">Phase 4 · Industry-Specific</span>
        </div>
        <h1 className="hero-h1">DPDP Act and Children&apos;s Data - Special Obligations and <em>How to Comply</em></h1>
        <p className="hero-sub">If your platform is used by anyone under 18, the DPDP Act treats you differently - and more strictly. Verifiable parental consent, a blanket ban on tracking and targeted advertising to children, the platforms most affected, and a five-step plan to build compliance before the regulator comes asking.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>May 18, 2026</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1280&h=520&fit=crop" alt="A young student using a learning platform online" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Edtech, gaming, family health plans, social apps - any product likely used by minors falls under the DPDP Act&apos;s strictest provisions.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#who-is-child" className="toc-link">1. Who Is a &apos;Child&apos;?</a>
            <a href="#obligations" className="toc-link">2. Key Obligations</a>
            <a href="#platforms" className="toc-link">3. Platforms Most Affected</a>
            <a href="#steps" className="toc-link">4. Steps to Build Compliance</a>
            <a href="#penalties" className="toc-link">5. Penalties</a>
            <a href="#faq" className="toc-link">6. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">&lt;18</div><div className="stat-lbl">Defined as Child</div></div>
          <div className="stat-card"><div className="stat-num">Verifiable</div><div className="stat-lbl">Parental Consent</div></div>
          <div className="stat-card"><div className="stat-num">₹200cr</div><div className="stat-lbl">Maximum Penalty</div></div>
          <div className="stat-card"><div className="stat-num">0</div><div className="stat-lbl">Targeted Ads Allowed</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>The DPDP Act 2023 devotes specific provisions to the protection of children&apos;s personal data. This is not a minor compliance footnote - it is a significant obligation that affects edtech platforms, gaming apps, social platforms, healthtech with family plans, and any product likely to be used by minors. The rules are among the most prescriptive in the entire Act, and the penalties among the steepest.</p>

          <p>If you have already worked through our <Link href="/resources/blog/dpdp-consent-mechanism-web-app" className="inline-link">consent mechanism guide</Link> and <Link href="/resources/blog/dpdp-privacy-notice-template" className="inline-link">privacy notice template</Link>, this is the children&apos;s-data layer that sits on top of both.</p>

          <section id="who-is-child">
            <h2>1. Who Is a <em>&apos;Child&apos;</em> Under the DPDP Act?</h2>
            <p>A child is defined as a person below the age of 18. This is consistent with Indian majority law (the Indian Majority Act, 1875).</p>
            <p>Critically, the Act does not distinguish between a 10-year-old and a 17-year-old - both are children, and both require parental or lawful guardian consent for data processing. There is no graduated &quot;teen&quot; tier as exists in some other jurisdictions.</p>

            <div className="callout co-info">
              <div className="co-icon">💡</div>
              <div className="co-body">
                <strong>The 18 threshold is higher than many global laws</strong>
                <p>Under GDPR, the digital-consent age can be as low as 13 (member-state dependent). The DPDP Act&apos;s flat threshold of 18 means platforms that treat 13-17 year-olds as adults under a GDPR-style model will have a compliance gap in India. See our <Link href="/resources/blog/gdpr-vs-dpdp" className="inline-link">GDPR vs DPDP comparison</Link>.</p>
              </div>
            </div>
          </section>

          <section id="obligations">
            <h2>2. Key <em>Obligations</em> for Processing Children&apos;s Data</h2>

            <div className="ob-card">
              <div className="ob-card-head"><span className="ob-num">1</span><h4>Verifiable parental consent is mandatory</h4></div>
              <p>Before processing any personal data of a child, you must obtain verifiable consent from the child&apos;s parent or lawful guardian. &apos;Verifiable&apos; is the critical word - you cannot simply ask users to confirm they are over 18. You need a mechanism that can actually verify parental identity and consent: mobile-linked verification (parent&apos;s mobile OTP), Aadhaar-based parental verification where applicable, or signed consent forms for institutional deployments such as schools using edtech.</p>
            </div>
            <div className="ob-card">
              <div className="ob-card-head"><span className="ob-num">2</span><h4>No tracking or behavioural monitoring</h4></div>
              <p>The Act prohibits tracking the behaviour of children across websites or applications. No behavioural advertising targeted at children, no cross-platform tracking of children&apos;s online activity, and no profiling of children for personalisation based on tracked behaviour. This has significant implications for advertising-supported apps with child users.</p>
            </div>
            <div className="ob-card">
              <div className="ob-card-head"><span className="ob-num">3</span><h4>No targeted advertising to children</h4></div>
              <p>You cannot serve targeted advertisements to children, even with parental consent. This is a blanket prohibition - it is not consent-curable. A parent agreeing to data processing does not unlock the ability to target ads at their child.</p>
            </div>
            <div className="ob-card">
              <div className="ob-card-head"><span className="ob-num">4</span><h4>No processing likely to cause harm</h4></div>
              <p>Data Fiduciaries must ensure that processing does not have any detrimental effect on the well-being of a child. The Act does not enumerate what this includes - but regulators and courts will likely interpret it broadly to cover addictive design patterns, data-driven manipulation, and anything that compromises a child&apos;s welfare.</p>
            </div>

            <div className="callout co-warn">
              <div className="co-icon">⚠</div>
              <div className="co-body">
                <strong>Verifiable consent at scale is the hard part</strong>
                <p>Truly verifiable parental consent at scale is a significant technical challenge - far harder than a self-declared age gate. Plan your approach carefully, document the verification method you chose and why, and get it reviewed by legal counsel before deployment.</p>
              </div>
            </div>
          </section>

          <section id="platforms">
            <h2>3. Which Platforms Are <em>Most Affected</em>?</h2>

            <h3>Edtech platforms</h3>
            <p>Platforms serving students - from K-12 to competitive exam prep - handle large volumes of children&apos;s data. School-authorised deployments may use institutional consent frameworks, but direct-to-consumer platforms need individual parental consent for each child.</p>

            <h3>Gaming and entertainment apps</h3>
            <p>If your game or app is likely to be used by minors (even if not designed exclusively for them), you have obligations. &apos;Likely to be used by children&apos; is a broader standard than &apos;marketed to children&apos;.</p>

            <h3>Health and fitness apps with family plans</h3>
            <p>If you allow parents to create profiles for their children within a family plan, each child profile falls under children&apos;s data obligations.</p>

            <h3>Social and community platforms</h3>
            <p>Any platform that allows profile creation, content sharing, or communication must address the possibility of child users and implement age verification accordingly.</p>
          </section>

          <section id="steps">
            <h2>4. Steps to <em>Build Compliance</em></h2>

            <div className="step-list">
              <div className="step">
                <h4>Identify your risk exposure</h4>
                <p>Assess whether children are likely users of your platform. Consider your marketing channels, app store category, content type, and any known minor users.</p>
              </div>
              <div className="step">
                <h4>Implement age verification</h4>
                <p>Build an age-gate at registration. If the user indicates they are under 18 - or if you cannot verify they are 18+ - route them through the parental consent workflow.</p>
              </div>
              <div className="step">
                <h4>Build the parental consent flow</h4>
                <p>Design and deploy a verifiable parental consent mechanism. Document the verification method chosen and the rationale, and get it reviewed by legal counsel before deployment.</p>
              </div>
              <div className="step">
                <h4>Audit your data processing practices</h4>
                <p>Remove all behavioural tracking, profiling, and targeted advertising for identified child users. If you use third-party SDKs for analytics or advertising, ensure they are disabled or configured for child-safe modes.</p>
              </div>
              <div className="step">
                <h4>Review your privacy notice</h4>
                <p>Your privacy notice must address children&apos;s data specifically - what you collect, why, and how parental consent is managed.</p>
              </div>
            </div>
          </section>

          <section id="penalties">
            <h2>5. <em>Penalties</em> for Non-Compliance</h2>
            <p>Violations related to children&apos;s data attract some of the highest penalties under the DPDP Act - up to ₹200 crore. The reputational risk is equally severe: child data breaches or misuse attract intense public and media scrutiny, which often causes more lasting commercial damage than the financial penalty itself.</p>
            <p>The DPDP Act&apos;s children&apos;s data provisions are among its most prescriptive. Build the right foundations now - age verification, parental consent flows, and a tracking-free experience for child users - and you will be ahead of most Indian platforms. For the broader obligations, see our guides on <Link href="/resources/blog/dpdp-breach-notification" className="inline-link">breach notification</Link> and the <Link href="/resources/blog/8-rights-data-principals-dpdp" className="inline-link">rights of data principals</Link>.</p>
          </section>

          <div className="cta-bottom">
            <h3>Building for users under 18?</h3>
            <p>SecComply helps edtech, healthtech, and consumer platforms build DPDP-compliant programmes - including children&apos;s data obligations, verifiable parental consent flows, and tracking-free architectures.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a children&apos;s data compliance call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Who counts as a child under the DPDP Act?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>A child is any person below the age of 18, consistent with the Indian Majority Act, 1875. The Act does not distinguish between a 10-year-old and a 17-year-old - both are children and both require verifiable parental or lawful guardian consent before their personal data is processed.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What is verifiable parental consent?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Before processing any personal data of a child, you must obtain verifiable consent from the child&apos;s parent or lawful guardian. &apos;Verifiable&apos; is the key word - a simple checkbox asking users to confirm they are over 18 is not enough. You need a mechanism that can actually verify parental identity and consent, such as mobile-linked (OTP) verification, Aadhaar-based parental verification where applicable, or signed consent forms for institutional deployments like schools. Achieving truly verifiable consent at scale is a significant technical challenge, so plan and document your method.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can we serve targeted ads to children if parents consent?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>No. The prohibition on targeted advertising to children is a blanket ban - it is not curable by parental consent. The Act also prohibits tracking or behavioural monitoring of children across websites and applications, and profiling children for personalisation based on tracked behaviour. These restrictions apply even where a parent has consented to the underlying data processing.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Which platforms are most affected by the children&apos;s data rules?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Edtech platforms serving students, gaming and entertainment apps likely to be used by minors, health and fitness apps with family plans where parents create child profiles, and social or community platforms that allow profile creation and content sharing. Importantly, the standard is &apos;likely to be used by children&apos; - broader than &apos;marketed to children&apos; - so a platform can have obligations even if minors are not its intended audience.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What are the penalties for mishandling children&apos;s data?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Violations related to children&apos;s data attract some of the highest penalties under the DPDP Act - up to ₹200 crore. The reputational risk is just as significant: child data breaches or misuse draw intense public and media scrutiny, which often causes more lasting commercial damage than the financial penalty itself.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Children&apos;s Data Compliance</div>
            <h3>Built for under-18 users</h3>
            <p>Age verification, verifiable parental consent, and tracking-free architecture for edtech, healthtech, and consumer apps.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a call →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-consent-mechanism-web-app">Building a Consent Mechanism</Link></li>
              <li><Link href="/resources/blog/dpdp-privacy-notice-template">Privacy Notice Template</Link></li>
              <li><Link href="/resources/blog/dpdp-breach-notification">Breach Notification</Link></li>
              <li><Link href="/resources/blog/8-rights-data-principals-dpdp">8 Rights of Data Principals</Link></li>
              <li><Link href="/resources/blog/dpdp-cross-border-data-transfer">Cross-Border Transfers</Link></li>
              <li><Link href="/resources/blog/gdpr-vs-dpdp">GDPR vs DPDP</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
