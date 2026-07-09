import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPForEdTech() {
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
        <title>DPDP Act for EdTech - Student Data, Parental Consent, and Compliance | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="How Section 9 of the DPDP Act applies to edtech platforms -verifiable parental consent, the ban on tracking and targeted ads aimed at children, student data handling, and the school-versus-platform compliance split." />
        <meta name="keywords" content="DPDP Act edtech, Section 9 DPDP, children's data DPDP, parental consent edtech, student data protection India, DPDP schools, edtech compliance India, children's data protection India" />
        <meta property="og:title" content="DPDP Act for EdTech - Student Data, Parental Consent, and Compliance" />
        <meta property="og:description" content="Verifiable parental consent, the outright ban on tracking and targeted advertising directed at children, student data handling, and the school-versus-platform role split -what Section 9 means for edtech." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-for-edtech" />
        <meta property="article:published_time" content="2026-05-28" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-for-edtech" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"DPDP Act for EdTech - Student Data, Parental Consent, and Compliance","description":"Section 9 of the DPDP Act governs edtech more than any other provision -verifiable parental consent, the ban on tracking and targeted advertising directed at children, student data handling, and how responsibility splits between school and platform.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-28","dateModified":"2026-05-28","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-for-edtech","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP for EdTech","item":"https://seccomply.net/resources/blog/dpdp-for-edtech"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Who counts as a child under DPDP?","acceptedAnswer":{"@type":"Answer","text":"Anyone under the age of 18. The DPDP Act does not create tiered age bands the way some other data protection regimes do -a 17-year-old and a 7-year-old are treated identically as children for consent and processing purposes. If your platform serves K-12 students, undergraduate-prep programmes, or any user base that includes under-18s, Section 9 applies in full to those users."}},{"@type":"Question","name":"What exactly does Section 9 prohibit?","acceptedAnswer":{"@type":"Answer","text":"Section 9 requires Data Fiduciaries to obtain verifiable consent from a parent or lawful guardian before processing a child's personal data, and it separately prohibits processing that causes any detrimental effect on the wellbeing of a child, along with tracking, behavioural monitoring, and targeted advertising directed at children. These are two distinct obligations -consent is a gate you pass through, while the tracking and advertising bar applies regardless of whether consent was obtained."}},{"@type":"Question","name":"How do we obtain verifiable parental consent at scale?","acceptedAnswer":{"@type":"Answer","text":"There is no single government-approved mechanism yet, so the practical approach is to build a consent flow that is verifiable, auditable, and repeatable: capture the guardian's identity and relationship to the child at the point of enrollment or account creation, log the consent event with a timestamp and the specific processing purposes covered, and make it just as easy for the guardian to withdraw consent later. Where a school or institution is the account holder, you can often route consent capture through the enrollment process the school already runs, rather than building a parallel flow directly with each family."}},{"@type":"Question","name":"Can we show ads or recommendations to student users?","acceptedAnswer":{"@type":"Answer","text":"Targeted advertising directed at children is prohibited outright, and so is behavioural monitoring or tracking used to build the profiles that power it -consent does not create an exception. Recommendation logic based purely on academic signals, such as a student's quiz performance or course progress, sits in different territory from an ad-tech-style profile built from browsing and engagement behaviour, but the safest posture until the Rules provide more clarity is to keep any personalization strictly non-behavioural and disable third-party ad and tracking SDKs for child accounts entirely."}},{"@type":"Question","name":"Is the school or the edtech platform responsible?","acceptedAnswer":{"@type":"Answer","text":"It depends on who determines the purpose and means of processing. When a school licenses your platform and controls how student data is used, the school is typically the Data Fiduciary and your platform is the Data Processor acting on its instructions -though your contract still needs to spell out security and consent obligations clearly. When students or parents sign up directly for your product without an institutional intermediary, your platform is the Data Fiduciary and carries the compliance obligations, including Section 9 consent, directly."}}]}]}) }} />
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
        <span>DPDP for EdTech</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 4 -Industry</span>
          <span className="badge badge-am">Children's Data</span>
        </div>
        <h1 className="hero-h1">DPDP Act for EdTech - <em>Student Data</em>, Parental Consent, and Compliance</h1>
        <p className="hero-sub">If your users are students, Section 9 of the DPDP Act is the rule that shapes your product. Verifiable parental consent, the outright ban on tracking and targeted advertising directed at children, how student data must be handled, the school-versus-platform role split, and a compliance path that does not break the learning experience.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>May 28, 2026</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1280&h=520&fit=crop" alt="Students learning on an education technology platform" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">Every edtech product that admits a single under-18 user inherits Section 9's consent, tracking, and advertising rules in full.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#children-rules" className="toc-link">1. Section 9 Basics</a>
            <a href="#age" className="toc-link">2. Age & Parental Consent</a>
            <a href="#tracking-ban" className="toc-link">3. Tracking & Ad Ban</a>
            <a href="#roles" className="toc-link">4. School vs Platform</a>
            <a href="#student-data" className="toc-link">5. Access & Deletion</a>
            <a href="#checklist" className="toc-link">6. Compliance Checklist</a>
            <a href="#faq" className="toc-link">7. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">&lt;18</div><div className="stat-lbl">Children Threshold</div></div>
          <div className="stat-card"><div className="stat-num">Sec 9</div><div className="stat-lbl">Children Provision</div></div>
          <div className="stat-card"><div className="stat-num">₹250 cr</div><div className="stat-lbl">Max Penalty</div></div>
          <div className="stat-card"><div className="stat-num">8</div><div className="stat-lbl">Data Principal Rights</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>Edtech is one of the few sectors where the DPDP Act's children's provisions are not a peripheral risk -they are the primary compliance surface. The moment a platform onboards a single user under eighteen, Section 9 stops being a footnote and becomes the section that shapes product decisions: how sign-up works, what a recommendation engine is allowed to do, and who is legally accountable when something goes wrong.</p>

          <p>This piece works through what Section 9 actually requires, how to build parental consent that holds up under scrutiny, why targeted advertising and behavioural tracking are off the table for child users regardless of consent, how responsibility splits between a school and the platform it licenses, and what a realistic compliance checklist looks like for a product team shipping features every sprint.</p>

          <section id="children-rules">
            <h2>Section 9 - The <em>Children's Data</em> Rules</h2>
            <p>Section 9 of the DPDP Act applies whenever a Data Fiduciary processes the personal data of a child -anyone under eighteen. It does two separate things, and it is worth keeping them separate in your compliance thinking. First, it requires verifiable consent from a parent or lawful guardian before that processing can lawfully begin. Second, independent of consent, it prohibits processing that could cause any detrimental effect on the wellbeing of a child, and it separately bars tracking, behavioural monitoring, and targeted advertising directed at children.</p>

            <p>That second point trips up a lot of edtech teams, because it is easy to assume that once a parent has consented, the platform has broad latitude to build on that consent -collecting usage data, running analytics, personalising the experience however it likes. Section 9 does not work that way. Consent unlocks processing for the purposes disclosed; it does not unlock tracking or advertising aimed at the child, because those are barred outright rather than gated behind consent.</p>

            <p>For a deeper walkthrough of how Section 9 applies across sectors, not just edtech, see our dedicated piece on <Link href="/resources/blog/dpdp-childrens-data" className="inline-link">children's data under DPDP</Link>. The rest of this article focuses on what that means specifically for a platform built around students.</p>

            <div className="callout co-key">
              <div className="co-icon">🔑</div>
              <div className="co-body">
                <strong>Under eighteen, no exceptions</strong>
                <p>DPDP does not distinguish a sixteen-year-old finishing school from a six-year-old in primary class. If a user is under eighteen, Section 9 applies to their account in full, and platform design should treat "the user might be a minor" as the default assumption for any sign-up flow that is not explicitly adult-only.</p>
              </div>
            </div>
          </section>

          <section id="age">
            <h2>Age Assurance & <em>Parental Consent</em></h2>
            <p>Verifiable parental consent is the hardest operational problem in this entire piece, because the DPDP Act sets the requirement without prescribing a single approved mechanism. Until the Rules provide more granular guidance, the practical approach is to build a consent flow that can withstand an audit: it identifies who the consenting adult is, confirms their relationship to the child, records exactly what processing they agreed to, timestamps the event, and makes withdrawal at least as easy as the original consent.</p>

            <p>Age-gating comes first, because consent only matters once you know a user is a child. Self-declared date of birth at sign-up is the simplest pattern and the easiest to implement, but on its own it is weak -nothing stops a student from entering an adult birth year to skip the parental flow. Stronger patterns pair the declared age with a verification step: routing the consent capture through a parent's own account rather than the child's, requiring a parent email or phone number that receives a separate consent confirmation, or -where the platform sells into schools rather than directly to families -relying on the enrollment process the institution already runs, since the school has typically already collected guardian information as part of admission.</p>

            <p>That institutional route is worth building deliberately if a meaningful share of your users come through school licences rather than direct sign-up, because it turns one hard consent problem into a much smaller one: the school captures guardian consent once as part of its own onboarding, and your platform inherits a documented, auditable trail instead of running thousands of individual parent verifications on its own. For the mechanics of building consent capture into a web or app sign-up flow more broadly, see our <Link href="/resources/blog/dpdp-consent-mechanism-web-app" className="inline-link">consent mechanism guide</Link>.</p>

            <p>Whatever pattern you choose, log it. A parental consent flow that is not recorded with a timestamp, the specific purposes covered, and a way to prove it happened is not meaningfully different from having no consent flow at all if the Data Protection Board of India ever asks you to demonstrate compliance.</p>
          </section>

          <section id="tracking-ban">
            <h2>The Ban on <em>Tracking</em> & Targeted Ads</h2>
            <p>This is the part of Section 9 that has nothing to do with consent. Even where a parent has agreed to let their child use the platform, the DPDP Act separately prohibits tracking, behavioural monitoring, and advertising targeted at children. No level of parental sign-off reopens that door -it is a hard boundary on what the platform is allowed to do with a child's activity data, not a permission that can be negotiated away.</p>

            <p>For a typical edtech product, this reaches further than the obvious case of avoiding ad networks aimed at kids. Any feature that profiles a child's behaviour across sessions -what they click, how long they linger, what content keeps them engaged -in order to target advertising or build a marketing profile falls inside the prohibition. Third-party ad SDKs, cross-app tracking pixels, and marketing analytics tools that build behavioural profiles for monetisation purposes should be disabled entirely for accounts flagged as belonging to a child.</p>

            <p>Recommendation engines sit in genuinely more ambiguous territory, and it is worth being precise about why. A system that adapts a learning path based on a student's quiz scores, time-on-task for a specific skill, or which practice questions they got wrong is working from academic performance signals -the kind of data an adaptive-learning product exists to collect and act on. That is a materially different thing from a behavioural profile assembled to decide what to advertise or what unrelated content to surface for engagement. The Act's core concern is tracking and targeting a child commercially, not a platform using performance data to teach better. Until the Rules draw a brighter line, the defensible position is to keep any personalisation strictly tied to academic signals, document that boundary internally, and treat anything that starts to resemble engagement-maximisation or ad-style targeting as off-limits for child accounts.</p>
          </section>

          <section id="roles">
            <h2>School as Fiduciary, <em>Platform as Processor</em></h2>
            <p>Edtech companies typically sell through one of two paths, and the DPDP obligations land differently depending on which one applies to a given customer relationship.</p>

            <div className="case-card">
              <h3>Institutional deployment -school licenses the platform</h3>
              <p>When a school or educational institution licenses your platform for its students and controls how their data is used -what gets collected, what it is used for, how long it is kept -the school is generally the Data Fiduciary, and your platform acts as a Data Processor carrying out instructions on the school's behalf. That does not remove your obligations; it changes their shape. Your contract with the school needs to specify security standards, breach notification timelines back to the school, and confirmation that consent has been properly captured at the institutional level. For the full breakdown of how fiduciary and processor obligations differ, see our piece on <Link href="/resources/blog/data-principal-fiduciary-processor" className="inline-link">Data Fiduciaries and Processors</Link>.</p>
            </div>

            <div className="case-card">
              <h3>Direct-to-student -family signs up without a school in between</h3>
              <p>When students or parents sign up for your product directly -a consumer learning app, a tutoring platform, an exam-prep tool bought by a family rather than issued by a school -your platform determines the purpose and means of processing on its own. That makes you the Data Fiduciary, and every Section 9 obligation, including verifiable parental consent, sits with you directly. There is no institutional intermediary to lean on for consent capture, which is why direct-to-consumer edtech products typically need the most robust in-app consent and age-assurance flows in the sector.</p>
            </div>
          </section>

          <section id="student-data">
            <h2>Student Data, <em>Access & Deletion</em></h2>
            <p>What an edtech platform typically collects goes well beyond a name and an email: enrollment details, academic performance and assessment results, attendance or session logs, sometimes device and location data, and increasingly biometric or proctoring data for assessment integrity. Every category deserves a purpose-limitation check -collect what the learning product actually needs, and be able to explain why each field exists.</p>

            <p>Once that data exists, the DPDP Act's data principal rights apply, and for a child, a parent or lawful guardian exercises them on the child's behalf. The Act sets out eight rights for data principals in total, covering access to processing information, correction and completion of inaccurate data, erasure once the purpose is served, grievance redressal, the right to nominate someone to exercise these rights if the principal is unable to, and related protections. In practice for an edtech platform, the two that generate the most operational work are access -a parent asking what data you hold on their child -and erasure, particularly when a student leaves the school, graduates, or a family simply stops using the product.</p>

            <p>Build a defined deletion path for that last scenario before you need it under pressure. When a student's relationship with the platform ends, decide upfront how long academic records are retained (schools and exam boards often have their own retention expectations that run alongside DPDP), what gets deleted immediately versus archived, and how a parent or the school itself can trigger a deletion request and get confirmation it was carried out. For the mechanics of handling these requests end to end, see our guide on <Link href="/resources/blog/dpdp-erasure-deletion-requests" className="inline-link">erasure and deletion requests</Link>.</p>

            <p>Treat "the student graduated" the same way you would treat "the customer churned" in any other product -a known, tested offboarding path, not a one-off support ticket handled manually the first time it happens.</p>
          </section>

          <section id="checklist">
            <h2><em>Compliance</em> Checklist</h2>
            <p>Pulling the article together into something a product and legal team can actually work from:</p>

            <div className="vendor-table-wrap">
              <table className="vendor-table">
                <thead>
                  <tr><th>Area</th><th>What To Have In Place</th><th>Why It Matters</th></tr>
                </thead>
                <tbody>
                  <tr><td>Age assurance</td><td>A sign-up flow that identifies under-18 users before processing begins</td><td>Section 9 applies from first contact, not after the fact</td></tr>
                  <tr><td>Parental consent</td><td>Verifiable, timestamped, purpose-specific consent capture with an easy withdrawal path</td><td>Your audit trail if the Board asks you to demonstrate compliance</td></tr>
                  <tr><td>Institutional consent</td><td>Confirmation that schools capture guardian consent during enrollment for licensed deployments</td><td>Institutional route reduces per-family verification load</td></tr>
                  <tr><td>Ad & tracking SDKs</td><td>Disabled entirely for child accounts, including third-party analytics that build behavioural profiles</td><td>The tracking and targeted-advertising bar applies regardless of consent</td></tr>
                  <tr><td>Recommendation logic</td><td>Personalisation limited to academic performance signals, documented internally</td><td>Keeps adaptive learning distinct from prohibited behavioural targeting</td></tr>
                  <tr><td>Data inventory</td><td>A record of every data category collected from student accounts and its purpose</td><td>Needed for both access requests and purpose-limitation review</td></tr>
                  <tr><td>Deletion path</td><td>A tested offboarding flow triggered when a student leaves or graduates</td><td>Erasure rights apply, and "build it later" is not a plan</td></tr>
                  <tr><td>Fiduciary mapping</td><td>Clarity, per customer type, on whether the school or the platform is the Data Fiduciary</td><td>Determines who owns which compliance obligation in each contract</td></tr>
                </tbody>
              </table>
            </div>

            <p>None of these are one-time projects. Age assurance and consent capture live in the sign-up flow your team ships changes to every quarter; the checklist above is a baseline to re-run whenever the product changes meaningfully, not a box to tick once and file away.</p>
          </section>

          <p>Edtech is not exempt from the parts of DPDP that other sectors find optional to think about early. Section 9 is not a compliance afterthought for a platform built around students -it is close to the whole compliance picture. Get age assurance, parental consent, the tracking-and-ads boundary, and the fiduciary split right, and most of the rest of the DPDP Act's requirements -notices, breach handling, data principal rights -slot in around a foundation that was built the right way from the start.</p>

          <div className="cta-bottom">
            <h3>Building an edtech product that has to get children's data right?</h3>
            <p>SecComply maps your student data flows, builds a parental consent flow that holds up to scrutiny, and reviews where your school-licensed and direct-to-student deployments split fiduciary responsibility.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a compliance review call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Who counts as a child under DPDP?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Anyone under the age of 18. The DPDP Act does not create tiered age bands the way some other data protection regimes do -a 17-year-old and a 7-year-old are treated identically as children for consent and processing purposes. If your platform serves K-12 students, undergraduate-prep programmes, or any user base that includes under-18s, Section 9 applies in full to those users.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What exactly does Section 9 prohibit?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Section 9 requires Data Fiduciaries to obtain verifiable consent from a parent or lawful guardian before processing a child's personal data, and it separately prohibits processing that causes any detrimental effect on the wellbeing of a child, along with tracking, behavioural monitoring, and targeted advertising directed at children. These are two distinct obligations -consent is a gate you pass through, while the tracking and advertising bar applies regardless of whether consent was obtained.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How do we obtain verifiable parental consent at scale?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>There is no single government-approved mechanism yet, so the practical approach is to build a consent flow that is verifiable, auditable, and repeatable: capture the guardian's identity and relationship to the child at the point of enrollment or account creation, log the consent event with a timestamp and the specific processing purposes covered, and make it just as easy for the guardian to withdraw consent later. Where a school or institution is the account holder, you can often route consent capture through the enrollment process the school already runs, rather than building a parallel flow directly with each family.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can we show ads or recommendations to student users?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Targeted advertising directed at children is prohibited outright, and so is behavioural monitoring or tracking used to build the profiles that power it -consent does not create an exception. Recommendation logic based purely on academic signals, such as a student's quiz performance or course progress, sits in different territory from an ad-tech-style profile built from browsing and engagement behaviour, but the safest posture until the Rules provide more clarity is to keep any personalization strictly non-behavioural and disable third-party ad and tracking SDKs for child accounts entirely.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Is the school or the edtech platform responsible?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>It depends on who determines the purpose and means of processing. When a school licenses your platform and controls how student data is used, the school is typically the Data Fiduciary and your platform is the Data Processor acting on its instructions -though your contract still needs to spell out security and consent obligations clearly. When students or parents sign up directly for your product without an institutional intermediary, your platform is the Data Fiduciary and carries the compliance obligations, including Section 9 consent, directly.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Student Data Compliance</div>
            <h3>Get it right from sign-up</h3>
            <p>Parental consent flows, tracking and ad-SDK review, and fiduciary mapping across your school and direct-to-student deployments.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a review →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-childrens-data">Children's Data Under DPDP</Link></li>
              <li><Link href="/resources/blog/consent-under-dpdp-act">Consent Under DPDP</Link></li>
              <li><Link href="/resources/blog/what-is-personal-data-dpdp">What Is Personal Data</Link></li>
              <li><Link href="/resources/blog/dpdp-consent-mechanism-web-app">Consent Mechanism</Link></li>
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
