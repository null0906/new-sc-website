import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001GapAssessment() {
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
        <title>ISO 27001 Gap Assessment - How to Run One and What to Do With Results | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A practical guide to running an ISO 27001 gap assessment - what to evaluate, how to score gaps, the rating scale auditors actually accept, and how to convert findings into a treatment plan that does not collapse on the first internal audit." />
        <meta name="keywords" content="ISO 27001 gap assessment, gap analysis ISO 27001, ISMS gap analysis, Clause 4-10, Annex A controls assessment, gap register, control maturity, ISO 27001 readiness, pre-audit assessment" />
        <meta property="og:title" content="ISO 27001 Gap Assessment - How to Run One and What to Do With Results" />
        <meta property="og:description" content="The first step of every ISO 27001 implementation, and the one that determines whether the project ships in 9 months or 19. The full method, scoring scale, and treatment plan template." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-gap-assessment" />
        <meta property="article:published_time" content="2026-04-30" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-gap-assessment" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 Gap Assessment - How to Run One and What to Do With Results","description":"How to run an ISO 27001 gap assessment that actually surfaces what the project will cost. The method, scoring scale, gap register template, and what to do with the findings.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-04-30","dateModified":"2026-04-30","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-gap-assessment","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"ISO 27001 Gap Assessment","item":"https://seccomply.net/resources/blog/iso-27001-gap-assessment"}]},{"@type":"HowTo","name":"How to Run an ISO 27001 Gap Assessment","description":"Six steps to produce a credible ISO 27001 gap register and treatment plan, typically completed in 2-3 weeks.","totalTime":"P3W","step":[{"@type":"HowToStep","position":1,"name":"Define Scope","text":"Agree the scope of the assessment - products, services, locations, technology, organisational units. Without this, you cannot decide what is in or out."},{"@type":"HowToStep","position":2,"name":"Build the Assessment Matrix","text":"List every requirement from Clauses 4 to 10 and every applicable Annex A control. The matrix is the spine of the assessment."},{"@type":"HowToStep","position":3,"name":"Collect Evidence","text":"For each requirement, gather evidence of current state - policies, procedures, screenshots, logs, training records."},{"@type":"HowToStep","position":4,"name":"Score Each Requirement","text":"Apply a 4-level scale (Compliant, Partial, Missing, Not Applicable) with documented justification for each rating."},{"@type":"HowToStep","position":5,"name":"Build the Gap Register","text":"For every Partial or Missing rating, capture the gap, effort, owner, and target date in a single living register."},{"@type":"HowToStep","position":6,"name":"Convert to Treatment Plan","text":"Group gaps into workstreams, sequence them by dependency, and produce a Gantt-shaped plan that feeds directly into the implementation roadmap."}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does an ISO 27001 gap assessment take?","acceptedAnswer":{"@type":"Answer","text":"A focused gap assessment typically takes 2-3 weeks for a small to mid-sized organisation. Larger or multi-site organisations may need 4-6 weeks. The assessment itself is roughly 1 week of evidence collection and stakeholder interviews, 1 week of scoring and writing, and a few days of validation and stakeholder review."}},{"@type":"Question","name":"Should the gap assessment be done by an internal team or a consultant?","acceptedAnswer":{"@type":"Answer","text":"Both work, with trade-offs. Internal teams know the systems but tend to score generously and miss controls outside their day-to-day visibility. External consultants bring an outside view but need more time to understand context. The most reliable pattern is consultant-led for the first ISO 27001 cycle and internal-led for subsequent recertifications."}},{"@type":"Question","name":"What scale should I use to rate gaps?","acceptedAnswer":{"@type":"Answer","text":"A four-level scale works well in practice - Compliant (control fully implemented and evidenced), Partial (control partially implemented or evidence incomplete), Missing (control not implemented), Not Applicable (control out of scope, with documented justification). More granular scales (e.g. CMMI 0-5) tend to invite over-engineering without surfacing extra information."}},{"@type":"Question","name":"How is a gap assessment different from an internal audit?","acceptedAnswer":{"@type":"Answer","text":"A gap assessment runs at the start of an ISO 27001 project to identify what needs to be built. An internal audit runs near the end (Stage 5 of the implementation) to verify what has been built actually works. The gap assessment is forward-looking - it estimates effort. The internal audit is backward-looking - it tests effectiveness."}},{"@type":"Question","name":"What goes in the gap register?","acceptedAnswer":{"@type":"Answer","text":"For every Partial or Missing finding: the requirement reference (Clause or Annex A control), a description of the gap, the current state, the target state, the estimated effort, the owner, the target completion date, and the dependencies on other gaps. The register becomes the source document for the risk treatment plan and the implementation Gantt."}}]}]}) }} />
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
    .data-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .data-table{width:100%;border-collapse:collapse;min-width:640px}
    .data-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .data-table td{padding:.7rem 1rem;font-size:.84rem;color:var(--tm);border-bottom:1px solid var(--bs);vertical-align:top}
    .data-table tr:last-child td{border-bottom:none}
    .data-table td:first-child{color:var(--tx);font-weight:600;white-space:nowrap}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(0, 129, 242,.06);border:1px solid rgba(0, 129, 242,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .case-study{background:linear-gradient(135deg,rgba(99,102,241,.06),rgba(15,23,42,.95));border:1px solid rgba(99,102,241,.25);border-radius:16px;padding:1.85rem 1.95rem;margin:2.25rem 0;border-left:3px solid var(--bl)}
    .case-study-tag{display:inline-block;padding:.3rem .75rem;background:rgba(99,102,241,.12);color:var(--bl);border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;margin-bottom:.85rem;text-transform:uppercase}
    .case-study h4{font-size:1.1rem;font-weight:700;color:var(--tx);margin-bottom:.85rem}
    .case-study p{font-size:.93rem;line-height:1.7;color:var(--tb);margin-bottom:.85rem!important}
    .case-study p:last-child{margin-bottom:0!important}
    .roadmap-step{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.5rem 0;border-left:3px solid var(--cy);position:relative}
    .roadmap-step-head{display:flex;align-items:center;gap:.75rem;margin-bottom:.85rem;flex-wrap:wrap}
    .roadmap-step-num{display:inline-flex;align-items:center;padding:.25rem .7rem;background:var(--cy);color:white;border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;font-family:'JetBrains Mono',monospace}
    .roadmap-step-time{font-size:.75rem;color:var(--tm);font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .roadmap-step h3{font-size:1.15rem;font-weight:700;color:var(--tx);margin:0 0 .65rem;letter-spacing:-.01em}
    .roadmap-step p{font-size:.95rem;color:var(--tb);line-height:1.7;margin-bottom:.8rem!important}
    .roadmap-step p:last-child{margin-bottom:0!important}
    .roadmap-step .step-tip{background:rgba(0, 129, 242,0.05);border-left:2px solid var(--cy);padding:.65rem .85rem;border-radius:0 6px 6px 0;font-size:.85rem;color:var(--tb);margin-top:.85rem;line-height:1.6}
    .roadmap-step .step-tip strong{color:var(--cy);font-weight:700}
    .scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .scope-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem}
    .scope-col.sc-bad{border-top:3px solid var(--rd)}
    .scope-col.sc-good{border-top:3px solid var(--gr)}
    .scope-col h4{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.8rem}
    .sc-bad h4{color:var(--rd)}
    .sc-good h4{color:var(--gr)}
    .scope-col ul li{font-size:.82rem;padding:.28rem 0 .28rem 1.1rem}
    .rating-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.85rem;margin:1.5rem 0}
    @media(max-width:700px){.rating-grid{grid-template-columns:1fr}}
    .rating-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.25rem 1.4rem;border-left:3px solid var(--cy)}
    .rating-card.r-c{border-left-color:var(--gr)}
    .rating-card.r-p{border-left-color:var(--am)}
    .rating-card.r-m{border-left-color:var(--rd)}
    .rating-card.r-na{border-left-color:var(--bl)}
    .rating-tag{display:inline-block;padding:.22rem .65rem;border-radius:5px;font-size:.65rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;margin-bottom:.6rem;font-family:'JetBrains Mono',monospace}
    .rating-card.r-c .rating-tag{background:rgba(6,214,160,0.12);color:var(--gr)}
    .rating-card.r-p .rating-tag{background:rgba(255,183,3,0.12);color:var(--am)}
    .rating-card.r-m .rating-tag{background:rgba(255,77,109,0.12);color:var(--rd)}
    .rating-card.r-na .rating-tag{background:rgba(129,140,248,0.12);color:var(--bl)}
    .rating-card h4{font-size:1rem;font-weight:700;color:var(--tx);margin:0 0 .45rem}
    .rating-card p{font-size:.85rem;line-height:1.6;color:var(--tb);margin:0!important}
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
    .cta-banner{background:linear-gradient(135deg,rgba(0, 129, 242,.08),rgba(0, 129, 242,.03));border:1px solid rgba(0, 129, 242,.25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
    .cta-banner h3{font-size:1.5rem;font-weight:700;color:var(--tx);margin-bottom:.7rem}
    .cta-banner p{font-size:.92rem;color:var(--tb);margin-bottom:1.5rem!important;max-width:550px;margin-left:auto;margin-right:auto}
    .cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:1.5rem}
    .btn-p{background:var(--cy);color:#fff;padding:.7rem 1.6rem;border-radius:8px;font-weight:700;font-size:.87rem;text-decoration:none;display:inline-block;transition:background .2s}
    .btn-p:hover{background:var(--cy2)}
    .share-strip{display:flex;align-items:center;gap:.65rem;justify-content:center;flex-wrap:wrap}
    .share-lbl{font-size:.77rem;color:var(--tm)}
    .share-btn{display:flex;align-items:center;gap:5px;padding:.4rem .9rem;border-radius:8px;font-size:.75rem;font-weight:600;cursor:pointer;border:1px solid var(--bo);background:transparent;color:var(--tb);text-decoration:none;transition:all .2s;font-family:var(--sans)}
    .share-btn:hover{border-color:var(--cy);color:var(--cy)}
    .sb{position:sticky;top:24px}
    .sb-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.35rem;margin-bottom:1.1rem}
    .sb-title{font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:.85rem}
    .sb-toc{list-style:none;display:flex;flex-direction:column;gap:.22rem}
    .sb-toc a{display:block;padding:.4rem .65rem;border-radius:8px;color:var(--tm);text-decoration:none;font-size:.79rem;transition:all .2s;border-left:2px solid transparent}
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgba(0, 129, 242,.07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy)}
    .sb-cta{background:linear-gradient(135deg,rgba(0, 129, 242,.08),rgba(0, 129, 242,.03));border:1px solid rgba(0, 129, 242,.25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-size:.98rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0, 129, 242,.4);z-index:50}
    #btt.vis{display:flex}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:900px){.scope-grid{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}}
`}</style>
      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <a href="https://seccomply.net/">Home</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources">Resources</a><span className="bc-sep">›</span>
        <a href="https://seccomply.net/resources/blog">Blog</a><span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>ISO 27001</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🛡️ ISO 27001</span>
          <span className="badge badge-bl">🔍 Gap Assessment</span>
          <span className="badge badge-gr">📋 Practical Guide</span>
        </div>
        <h1 className="hero-h1">ISO 27001 Gap Assessment - <em>How to Run One and What to Do With Results</em></h1>
        <p className="hero-sub">A gap assessment is the cheapest, most useful, and most consistently skipped step in any ISO 27001 programme. Skip it and you discover the real scope of work three months in, when remediation costs five times what it would have cost to plan for. Run it properly and the rest of the project becomes a sequencing exercise instead of a series of surprises.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🛡️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=480&fit=crop" alt="ISO 27001 gap assessment - measuring the distance between current state and the standard" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">A gap assessment measures distance, not maturity. The output is a register of every gap, sized by effort, with an owner attached.</p>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">2–3</div><div className="stat-lbl">Weeks for a Credible<br/>Assessment</div></div>
          <div className="stat-card"><div className="stat-num">93</div><div className="stat-lbl">Annex A Controls<br/>Plus Clauses 4–10</div></div>
          <div className="stat-card"><div className="stat-num">4</div><div className="stat-lbl">Rating Levels<br/>Auditors Accept</div></div>
          <div className="stat-card"><div className="stat-num">1</div><div className="stat-lbl">Living Gap Register<br/>Drives Everything</div></div>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#why-it-matters">Why a Gap Assessment Matters</a>
            <a href="#what-it-is-not">What a Gap Assessment Is Not</a>
            <a href="#step-1">Step 1 - Define the Scope</a>
            <a href="#step-2">Step 2 - Build the Matrix</a>
            <a href="#step-3">Step 3 - Collect Evidence</a>
            <a href="#step-4">Step 4 - Score Each Requirement</a>
            <a href="#step-5">Step 5 - Build the Register</a>
            <a href="#step-6">Step 6 - Convert to Treatment Plan</a>
            <a href="#rating-scale">The Rating Scale That Works</a>
            <a href="#common-gaps">The Gaps Teams Always Find</a>
            <a href="#whats-next">What to Do With Results</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(0, 129, 242,0.3)',paddingLeft:'1.2rem'}}>
            Most ISO 27001 projects do not fail because the standard is too complex. They fail because the team started writing policies before they understood what was actually missing. The gap assessment is two weeks of work that saves three months of rework. It is also the step that gets skipped most often, because "we know what we need." You do not. This is how to find out.
          </p>

          <section id="why-it-matters">
            <h2>Why a Gap Assessment <em>Matters</em></h2>
            <p>The gap assessment answers one question - what is the distance between the organisation as it operates today and the requirements of ISO 27001:2022? It is not an audit. It is not a maturity assessment. It is a baseline measurement that tells you what to build, in what order, and how long it will take. Every other decision in the implementation depends on this baseline.</p>
            <p>The teams that run a proper gap assessment finish their ISO 27001 implementation in 9 to 12 months. The teams that skip it routinely end up at 14, 16, or 18. The reason is not that the standard is harder for one team than another - it is that the team without an assessment discovers gaps at internal audit (Stage 5 of the <a href="https://seccomply.net/resources/blog/iso-27001-implementation-roadmap" className="inline-link">implementation roadmap</a>) instead of at week two. By that point, the cost of fixing each gap has multiplied.</p>
            <div className="callout co-key">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>The Compounding Cost of Late Gap Discovery</strong>
                <p>A gap surfaced at week 2 costs roughly 1× to fix - you adjust the project plan and budget for it. The same gap surfaced at week 14 costs roughly 5× - work has been built on top of an assumption that turned out to be false, and unwinding it requires reworking documentation, evidence, and sometimes infrastructure. By month 9, the multiplier is closer to 10×.</p>
              </div>
            </div>
          </section>

          <section id="what-it-is-not">
            <h2>What a Gap Assessment <em>Is Not</em></h2>
            <p>Three things that get conflated with gap assessments and shouldn't be:</p>
            <ul>
              <li><strong>It is not a risk assessment.</strong> Risk assessment evaluates threats, vulnerabilities, and impact. Gap assessment evaluates whether controls exist. Both are required for ISO 27001 - but they answer different questions and run at different times. The mechanics of the risk side are covered in <a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment" className="inline-link">how risk assessment works step by step</a>.</li>
              <li><strong>It is not an internal audit.</strong> Internal audit (Clause 9.2) tests whether the implemented ISMS actually works. It runs at the end of the implementation, not the start. A gap assessment evaluates the starting position. An internal audit evaluates effectiveness.</li>
              <li><strong>It is not a maturity assessment.</strong> Maturity models (CMMI, NIST CSF tiers) evaluate how well a control is run. A gap assessment evaluates whether the control exists at all. Maturity is a Year 2 conversation. Gap assessment is a Week 1 one.</li>
            </ul>
            <p>The assessment produces one core artefact - a gap register listing every requirement, the current state, the target state, and the work required to close the distance. Everything that follows in the project plan flows from that register.</p>
          </section>

          <section id="six-steps">
            <h2>The Six Steps, <em>In Order</em></h2>

            <div id="step-1" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 01</span>
                <span className="roadmap-step-time">Day 1</span>
              </div>
              <h3>Define the Scope</h3>
              <p>Before any evidence gets collected, agree the scope of the assessment. This is not the final ISMS scope - that comes later - but it has to be specific enough to know what to evaluate. Which products? Which locations? Which technology platforms? Which organisational units? Without this, the assessment slides between scopes mid-stream, which produces a register where some controls were evaluated for the SaaS platform and others for the entire group.</p>
              <p>The most useful framing is a one-page scope statement at the start of the assessment, signed off by the security lead and at least one business stakeholder. It can be revised once the assessment is complete and the team has a clearer picture - but at least the assessment itself is consistent.</p>
            </div>

            <div id="step-2" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 02</span>
                <span className="roadmap-step-time">Day 1–2</span>
              </div>
              <h3>Build the Assessment Matrix</h3>
              <p>The matrix is the spine of the entire assessment. One row per requirement, with columns for the requirement reference, the current state, the target state, the rating, the evidence, and the gap (if any). Use the structure of ISO 27001:2022 itself - Clauses 4 to 10 plus the 93 Annex A controls - so the matrix is already organised the way the auditor will think about it.</p>
              <p>Skip the temptation to invent your own grouping or to combine controls into themes. The auditor will assess against the standard's structure; your matrix should match. The full breakdown of what each Annex A control means in plain language is in <a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls" className="inline-link">ISO 27001 Annex A controls explained simply</a>.</p>
              <div className="step-tip">
                <strong>Tooling note →</strong> A spreadsheet is fine for the first assessment. For a multi-site or multi-product organisation, a GRC platform pays for itself by the second cycle - but do not over-tool the first attempt. The matrix matters more than the tool.
              </div>
            </div>

            <div id="step-3" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 03</span>
                <span className="roadmap-step-time">Day 3–7</span>
              </div>
              <h3>Collect the Evidence</h3>
              <p>For each requirement, gather what proves the current state - policies, procedures, screenshots, logs, training records, contracts, exception registers. The evidence is what separates a serious gap assessment from a self-rated checklist. If you cannot show evidence for a control, the rating is not "Compliant," regardless of what the team says they do.</p>
              <p>Most evidence collection is interviews plus document review. Sit with the IT lead, the engineering manager, the HR lead, the procurement lead. Walk through their day-to-day. Ask to see specific documents and screen-walks. The interviewer's job is not to take the team's word for what is in place - it is to verify each claim against an artefact.</p>
            </div>

            <div id="step-4" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 04</span>
                <span className="roadmap-step-time">Day 7–10</span>
              </div>
              <h3>Score Each Requirement</h3>
              <p>Apply the rating scale to every row in the matrix. Be conservative - this is the single most common place where assessments go wrong. Internal teams default to "Partial" when "Missing" would be more accurate, and to "Compliant" when "Partial" is the honest answer. Generous scoring at the gap assessment stage produces a project plan that is too short, a budget that is too low, and a Stage 1 audit that fails.</p>
              <p>The honest test for "Compliant" is - could you show this control to an auditor today, with current evidence, and have them sign off? If the answer involves "we'd need to gather a few things first," it is not Compliant. It is Partial. The four-level scale, with the actual rules of thumb that hold up, is in the <a href="#rating-scale" style={{color:'var(--cy)',fontWeight:600}}>rating scale section below</a>.</p>
            </div>

            <div id="step-5" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 05</span>
                <span className="roadmap-step-time">Day 10–12</span>
              </div>
              <h3>Build the Gap Register</h3>
              <p>For every Partial or Missing rating, capture a row in the gap register - the requirement reference, a description of the gap, the current state, the target state, the estimated effort, the owner, the target date, and the dependencies. The register is what survives after the assessment is filed; it becomes the source document for the risk treatment plan and the project Gantt.</p>
              <p>The most useful form is a single living document - spreadsheet or GRC tool - that gets updated through the implementation rather than re-written. When a gap is closed, mark it closed; do not delete the row. The history of how the gap moved from Missing to Partial to Compliant is what the auditor wants to see at Stage 1.</p>
            </div>

            <div id="step-6" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STEP 06</span>
                <span className="roadmap-step-time">Day 12–15</span>
              </div>
              <h3>Convert the Register Into a Treatment Plan</h3>
              <p>The gap register tells you what has to be done. The treatment plan tells you when, in what order, and by whom. Group the gaps into workstreams - access management, asset management, vendor management, incident response, and so on. Sequence the workstreams by dependency - foundational controls (logging, access, asset inventory) before dependent controls (vendor management, incident response, business continuity).</p>
              <p>The output is a Gantt-shaped plan that feeds directly into Stage 4 of the implementation roadmap. If the treatment plan looks fine on paper but the team is uneasy about a specific workstream, trust the unease - that is usually where the under-scoped work is hiding.</p>
            </div>
          </section>

          <section id="rating-scale">
            <h2>The Rating Scale <em>That Works</em></h2>
            <p>Many teams over-engineer the rating scale - five-level, seven-level, CMMI-style maturity, percentage scores. None of this surfaces extra information. The four-level scale below is what auditors expect, what consultants use, and what produces the cleanest gap register.</p>
            <div className="rating-grid">
              <div className="rating-card r-c">
                <span className="rating-tag">RATING 1</span>
                <h4>Compliant</h4>
                <p>Control fully implemented. Evidence exists, is current, and could be presented to an auditor today without preparation. The control runs as part of business-as-usual.</p>
              </div>
              <div className="rating-card r-p">
                <span className="rating-tag">RATING 2</span>
                <h4>Partial</h4>
                <p>Control partially implemented or evidence incomplete. Either the policy exists but the operational practice does not, or the practice exists but the policy and evidence trail are missing.</p>
              </div>
              <div className="rating-card r-m">
                <span className="rating-tag">RATING 3</span>
                <h4>Missing</h4>
                <p>Control not implemented. No policy, no practice, no evidence. The control is in scope and applicable, but the work to build it has not yet been done.</p>
              </div>
              <div className="rating-card r-na">
                <span className="rating-tag">RATING 4</span>
                <h4>Not Applicable</h4>
                <p>Control out of scope, with documented justification that will hold up in the Statement of Applicability. "We don't think we need this" is not a justification - the justification has to reference scope or the absence of relevant assets.</p>
              </div>
            </div>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The Generous Scoring Trap</strong>
                <p>Internal teams systematically rate their own work too generously. The fix is not personality - it is process. Have a second person validate every "Compliant" rating with the evidence, and force a downgrade if the evidence does not stand on its own. External assessors are useful here because they have no relationship with the controls and rate them on what is shown, not what is described.</p>
              </div>
            </div>
          </section>

          <section id="common-gaps">
            <h2>The Gaps Teams <em>Always Find</em></h2>
            <p>Across the dozens of gap assessments I have run or supervised, the same eight gaps surface repeatedly. If your assessment does not flag at least four of these, the assessment was probably scored too generously.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Common Gap</th><th>Why It Surfaces</th><th>Typical Effort</th></tr></thead>
                <tbody>
                  <tr><td>Vendor risk management</td><td>DPA in place but no risk assessment, no annual review, no termination triggers</td><td>4–8 weeks</td></tr>
                  <tr><td>Access review evidence</td><td>Access is provisioned correctly, but no record of periodic review</td><td>2–4 weeks</td></tr>
                  <tr><td>Backup testing</td><td>Backups run, but restore has never been tested or documented</td><td>2–6 weeks</td></tr>
                  <tr><td>Incident response evidence</td><td>Plan exists but no tabletop exercise, no record of past incidents</td><td>3–6 weeks</td></tr>
                  <tr><td>Asset inventory</td><td>Spreadsheet exists but is months out of date and missing categories</td><td>4–10 weeks</td></tr>
                  <tr><td>Cryptographic policy</td><td>TLS and disk encryption in place, but no documented standard</td><td>1–3 weeks</td></tr>
                  <tr><td>Secure development lifecycle</td><td>Code review happens but threat modelling, security testing, and approval gates are informal</td><td>6–12 weeks</td></tr>
                  <tr><td>Information classification</td><td>No formal classification scheme, sensitive data treated by convention</td><td>3–6 weeks</td></tr>
                </tbody>
              </table>
            </div>
            <div className="case-study">
              <span className="case-study-tag">🔵 Real Project - Generous vs Honest Scoring</span>
              <h4>The 24% Gap That Was Actually 61%</h4>
              <p>A SaaS company we worked with ran their own gap assessment before bringing us in. They scored themselves at 76% Compliant, with another 18% Partial and only 6% Missing - a picture that suggested the project would close in three to four months. Their finance team had budgeted accordingly.</p>
              <p>When we re-ran the assessment with conservative scoring and evidence verification, the picture changed. <strong>Compliant dropped to 39%, Partial rose to 47%, Missing rose to 14%.</strong> The work was the same - but the timeline expanded from four months to nine, and the budget roughly tripled. The team's instinct on what controls were "in place" was correct in spirit; what was missing in every case was the evidence trail and the operational discipline that an auditor needs to see. <strong>Honest scoring up front is the cheapest course correction the project will ever experience.</strong></p>
            </div>
          </section>

          <section id="whats-next">
            <h2>What to Do With <em>The Results</em></h2>
            <p>The gap register is not the end of the gap assessment - it is the start of everything else. Three things should happen within two weeks of the register being signed off:</p>
            <ul>
              <li><strong>Brief leadership on the realistic timeline.</strong> If the gap assessment surfaced more gaps than expected (it almost always does), the project plan needs to be re-cut. Better to have that conversation now than at month four.</li>
              <li><strong>Sequence the gaps into workstreams.</strong> Group by control family - access, asset management, vendor management, incident response. Run foundational workstreams first; dependent ones follow. This becomes the backbone of <a href="https://seccomply.net/resources/blog/iso-27001-implementation-roadmap" className="inline-link">Stage 4 of the implementation</a>.</li>
              <li><strong>Set up the living register.</strong> The same gap register should be updated weekly through the project. When gaps close, mark them closed (don't delete). The history is what Stage 1 wants to see.</li>
            </ul>
            <p>From here, the rest of the implementation is sequence and discipline. The gap assessment has done its job - it has converted "we need ISO 27001" from an aspiration into a project plan. The remaining work is execution, which is harder but no longer a mystery.</p>
          </section>

          <section id="final">
            <h2>Final <em>Thought</em></h2>
            <p>The gap assessment is the cheapest insurance policy in any ISO 27001 programme. Two weeks of focused work, conservatively scored, with verified evidence - and the project's worst surprises move from month nine to week two, where they cost a tenth of what they would have cost at internal audit. The teams that skip this step almost always come back to do it later, in worse conditions, under more pressure, with less goodwill from leadership.</p>
            <p>If you are still deciding whether your business actually needs ISO 27001 in the first place, the <a href="https://seccomply.net/resources/blog/iso-27001-self-assessment" className="inline-link">six-trigger self-assessment</a> answers that question first. If the answer is yes, this gap assessment is the next thing to do. Everything else flows from it.</p>
          </section>

          <div className="cta-banner">
            <h3>Want a Gap Assessment That Actually Holds Up?</h3>
            <p>SecComply runs ISO 27001 gap assessments in 2-3 weeks - conservative scoring, evidence verification, a living gap register, and a workstream-sequenced treatment plan that feeds directly into your implementation. No generous self-rating. No surprises at internal audit.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Gap Assessment Scoping Call →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/iso-27001-gap-assessment" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/iso-27001-gap-assessment&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How long does an ISO 27001 gap assessment take?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>A focused gap assessment typically takes 2-3 weeks for a small to mid-sized organisation. Larger or multi-site organisations may need 4-6 weeks. The assessment itself is roughly 1 week of evidence collection and stakeholder interviews, 1 week of scoring and writing, and a few days of validation and stakeholder review.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Should the gap assessment be done by an internal team or a consultant?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Both work, with trade-offs. Internal teams know the systems but tend to score generously and miss controls outside their day-to-day visibility. External consultants bring an outside view but need more time to understand context. The most reliable pattern is consultant-led for the first ISO 27001 cycle and internal-led for subsequent recertifications.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What scale should I use to rate gaps?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>A four-level scale works well in practice - Compliant (control fully implemented and evidenced), Partial (control partially implemented or evidence incomplete), Missing (control not implemented), Not Applicable (control out of scope, with documented justification). More granular scales (e.g. CMMI 0-5) tend to invite over-engineering without surfacing extra information.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How is a gap assessment different from an internal audit?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>A gap assessment runs at the start of an ISO 27001 project to identify what needs to be built. An internal audit runs near the end (Stage 5 of the implementation) to verify what has been built actually works. The gap assessment is forward-looking - it estimates effort. The internal audit is backward-looking - it tests effectiveness.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What goes in the gap register?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>For every Partial or Missing finding: the requirement reference (Clause or Annex A control), a description of the gap, the current state, the target state, the estimated effort, the owner, the target completion date, and the dependencies on other gaps. The register becomes the source document for the risk treatment plan and the implementation Gantt.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can a gap assessment double as a Statement of Applicability?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No - they are different documents. A gap assessment evaluates whether controls exist and where. A Statement of Applicability declares which controls are applicable to the organisation, with justification. The SoA is produced after the risk assessment in Stage 3 of the implementation. The gap assessment informs the SoA but does not replace it.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What if my gap assessment shows we are mostly compliant already?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Re-run it with conservative scoring and an external pair of eyes. In my experience, "mostly compliant" assessments are almost always over-rated - usually because the team conflated "we have a process" with "we have evidence the auditor can verify." If the second pass still shows a small gap delta, congratulations - you are an unusual case. If it shows the picture was rosier than reality, you have just saved yourself the most expensive surprise of the project.</p></div>
            </div>
          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#why-it-matters" className="toc-link">Why It Matters</a></li>
              <li><a href="#what-it-is-not" className="toc-link">What It Is Not</a></li>
              <li><a href="#step-1" className="toc-link">Step 1 - Scope</a></li>
              <li><a href="#step-2" className="toc-link">Step 2 - Matrix</a></li>
              <li><a href="#step-3" className="toc-link">Step 3 - Evidence</a></li>
              <li><a href="#step-4" className="toc-link">Step 4 - Score</a></li>
              <li><a href="#step-5" className="toc-link">Step 5 - Register</a></li>
              <li><a href="#step-6" className="toc-link">Step 6 - Treatment Plan</a></li>
              <li><a href="#rating-scale" className="toc-link">Rating Scale</a></li>
              <li><a href="#common-gaps" className="toc-link">Common Gaps</a></li>
              <li><a href="#whats-next" className="toc-link">What's Next</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 ISO 27001 Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27001-explained-startups">ISO 27001 Explained for Startups</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-self-assessment">Self-Assessment - Do You Need It?</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-vs-soc2-vs-gdpr">ISO 27001 vs SOC 2 vs GDPR</a></li>
              <li><a href="https://seccomply.net/resources/blog/what-is-an-isms">What Is an ISMS?</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-business-value">Business Value Beyond the Badge</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls">Annex A - All 93 Controls</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment">Risk Assessment Step by Step</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-gap-assessment">▶ Gap Assessment</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-implementation-roadmap">Implementation Roadmap</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27001</span><span className="tag">Gap Assessment</span><span className="tag">Gap Analysis</span><span className="tag">ISMS</span><span className="tag">Annex A</span><span className="tag">Treatment Plan</span><span className="tag">Pre-Audit</span><span className="tag">Implementation</span></div>
          </div>
          <div className="sb-cta">
            <h4>Run Your Gap Assessment?</h4>
            <p>2-3 weeks, conservative scoring, evidence verified, register that drives the plan.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
