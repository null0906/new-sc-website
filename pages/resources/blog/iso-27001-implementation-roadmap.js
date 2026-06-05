import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001ImplementationRoadmap() {
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
        <title>ISO 27001 Implementation Roadmap - From Gap Assessment to Certification | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A practical seven-stage ISO 27001 implementation roadmap from gap assessment to certification. The Stage 1 and Stage 2 audit explained, realistic 9-12 month timelines, common failure points, and the controls most teams underestimate." />
        <meta name="keywords" content="ISO 27001 implementation, ISO 27001 roadmap, ISO 27001 certification, Stage 1 audit, Stage 2 audit, ISMS implementation, ISO 27001 timeline, ISO 27001 cost, certification body, surveillance audit" />
        <meta property="og:title" content="ISO 27001 Implementation Roadmap - From Gap Assessment to Certification" />
        <meta property="og:description" content="The practical version of the path to ISO 27001 - what each of the seven stages actually demands, where teams burn months, and how to sequence it without the rework." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-implementation-roadmap" />
        <meta property="article:published_time" content="2026-04-30" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-implementation-roadmap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27001 Implementation Roadmap - From Gap Assessment to Certification","description":"A seven-stage roadmap from gap assessment to certification, with realistic timelines and the controls most teams underestimate.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-04-30","dateModified":"2026-04-30","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-implementation-roadmap","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"ISO 27001 Implementation Roadmap","item":"https://seccomply.net/resources/blog/iso-27001-implementation-roadmap"}]},{"@type":"HowTo","name":"ISO 27001 Implementation - Seven-Stage Roadmap","description":"Seven sequenced stages from gap assessment to certification, typically 9-12 months for a focused team.","totalTime":"P12M","step":[{"@type":"HowToStep","position":1,"name":"Gap Assessment","text":"Measure the distance between current state and the standard. Output is a gap register with controls categorised by status, owner, and effort."},{"@type":"HowToStep","position":2,"name":"Scope & ISMS Foundation","text":"Define the scope statement, appoint roles, write the Information Security Policy under Clause 5.2."},{"@type":"HowToStep","position":3,"name":"Risk Assessment & Treatment","text":"Identify risks, evaluate against criteria, decide treatment for each. Produces the Statement of Applicability."},{"@type":"HowToStep","position":4,"name":"Control Implementation","text":"Build or adjust the Annex A controls marked applicable. Most teams underestimate this stage."},{"@type":"HowToStep","position":5,"name":"Internal Audit & Management Review","text":"Run a full internal audit against Clauses 4-10 and Annex A. Conduct management review under Clause 9.3."},{"@type":"HowToStep","position":6,"name":"Stage 1 Audit","text":"External auditor reviews documentation and ISMS readiness. Findings must be closed before Stage 2."},{"@type":"HowToStep","position":7,"name":"Stage 2 Audit","text":"External audit of operational effectiveness across all controls. Successful completion produces the certificate."}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does ISO 27001 implementation take?","acceptedAnswer":{"@type":"Answer","text":"A focused team with engaged leadership typically takes 9-12 months from gap assessment to certification. Smaller organisations with simpler scope can compress to 6-8 months. The most common failure pattern is underestimating control implementation (Stage 4) - teams budget 6 weeks and end up needing 12-16 because of system changes nobody anticipated."}},{"@type":"Question","name":"What is the difference between Stage 1 and Stage 2 audits?","acceptedAnswer":{"@type":"Answer","text":"Stage 1 is a documentation review - the auditor checks whether the ISMS is designed correctly, whether mandatory documents exist, and whether the organisation is ready for Stage 2. Stage 2 is operational - the auditor evaluates whether the ISMS is actually working through evidence sampling, control testing, and interviews. Stage 1 finds gaps; Stage 2 finds whether the system runs."}},{"@type":"Question","name":"How much does ISO 27001 certification cost?","acceptedAnswer":{"@type":"Answer","text":"Total cost ranges from roughly $15,000 to over $100,000 depending on scope, organisation size, and consultant involvement. The certification body audit typically costs $7,000-$25,000 for SMBs. Internal time is usually the larger expense - expect 0.5-1 FTE equivalent for 9-12 months. Surveillance audits in years 2 and 3 add roughly 30-50% of initial certification cost annually."}},{"@type":"Question","name":"Do I need a consultant to implement ISO 27001?","acceptedAnswer":{"@type":"Answer","text":"Not strictly required, but most first-time implementations benefit from one. The standard is detailed, the Annex A controls require interpretation, and an experienced consultant prevents the common rework that comes from misreading requirements. The pragmatic split is consultant-led for the first certification and internal team for surveillance and recertification cycles."}},{"@type":"Question","name":"What happens after certification?","acceptedAnswer":{"@type":"Answer","text":"Certification is valid for three years. Surveillance audits happen in years 1 and 2 (smaller scope, focused on changes and effectiveness), and a full recertification audit happens in year 3. Between audits, the ISMS must continue to operate - internal audits annually, management reviews, ongoing risk treatment, and corrective action when issues surface."}}]}]}) }} />
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
    .data-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .data-table{width:100%;border-collapse:collapse;min-width:640px}
    .data-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .data-table td{padding:.7rem 1rem;font-size:.84rem;color:var(--tm);border-bottom:1px solid var(--bs);vertical-align:top}
    .data-table tr:last-child td{border-bottom:none}
    .data-table td:first-child{color:var(--tx);font-weight:600;white-space:nowrap}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(255, 96, 0,.06);border:1px solid rgba(255, 96, 0,.2)}
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
    .roadmap-step .step-tip{background:rgba(255, 96, 0,0.05);border-left:2px solid var(--cy);padding:.65rem .85rem;border-radius:0 6px 6px 0;font-size:.85rem;color:var(--tb);margin-top:.85rem;line-height:1.6}
    .roadmap-step .step-tip strong{color:var(--cy);font-weight:700}
    .roadmap-step .step-deliv{background:rgba(6,214,160,0.04);border-left:2px solid var(--gr);padding:.65rem .85rem;border-radius:0 6px 6px 0;font-size:.85rem;color:var(--tb);margin-top:.65rem;line-height:1.6}
    .roadmap-step .step-deliv strong{color:var(--gr);font-weight:700}
    .scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .scope-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem}
    .scope-col.sc-bad{border-top:3px solid var(--rd)}
    .scope-col.sc-good{border-top:3px solid var(--gr)}
    .scope-col h4{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.8rem}
    .sc-bad h4{color:var(--rd)}
    .sc-good h4{color:var(--gr)}
    .scope-col ul li{font-size:.82rem;padding:.28rem 0 .28rem 1.1rem}
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
    .cta-banner{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(255, 96, 0,.03));border:1px solid rgba(255, 96, 0,.25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
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
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgba(255, 96, 0,.07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy)}
    .sb-cta{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(255, 96, 0,.03));border:1px solid rgba(255, 96, 0,.25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-size:.98rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(255, 96, 0,.4);z-index:50}
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
          <span className="badge badge-bl">🗺️ Implementation Roadmap</span>
          <span className="badge badge-gr">📋 Step by Step</span>
        </div>
        <h1 className="hero-h1">ISO 27001 Implementation Roadmap - <em>From Gap Assessment to Certification</em></h1>
        <p className="hero-sub">Most ISO 27001 projects do not fail because the standard is too hard. They fail because the team treated it as a documentation exercise, sequenced the work in the wrong order, and discovered three months in that half the controls require system changes nobody planned for. This is the version that does not get rebuilt twice.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>🛡️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=480&fit=crop" alt="ISO 27001 implementation roadmap - seven sequenced stages from gap assessment to certified ISMS" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">Seven stages, in this order, with realistic time budgets. Skipping the gap assessment is the most common reason projects double in length.</p>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">9–12</div><div className="stat-lbl">Months for First<br/>Certification</div></div>
          <div className="stat-card"><div className="stat-num">7</div><div className="stat-lbl">Stages, Sequenced<br/>End to End</div></div>
          <div className="stat-card"><div className="stat-num">3 yrs</div><div className="stat-lbl">Certificate Validity<br/>+ Surveillance</div></div>
          <div className="stat-card"><div className="stat-num">93</div><div className="stat-lbl">Annex A Controls<br/>To Evaluate</div></div>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#why-projects-fail">Why Most Projects Run Long</a>
            <a href="#stage-1">Stage 1 - Gap Assessment</a>
            <a href="#stage-2">Stage 2 - Scope &amp; ISMS Foundation</a>
            <a href="#stage-3">Stage 3 - Risk Assessment</a>
            <a href="#stage-4">Stage 4 - Control Implementation</a>
            <a href="#stage-5">Stage 5 - Internal Audit</a>
            <a href="#stage-6">Stage 6 - Stage 1 External Audit</a>
            <a href="#stage-7">Stage 7 - Stage 2 Audit &amp; Certification</a>
            <a href="#after-cert">Life After the Certificate</a>
            <a href="#cost-time">Realistic Cost &amp; Time</a>
            <a href="#failure-points">Where Teams Burn Months</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(255, 96, 0,0.3)',paddingLeft:'1.2rem'}}>
            Every ISO 27001 consultancy will sell you the same diagram. Seven nice rectangles, arrows pointing right, certification at the end. The diagram is correct. What it leaves out is everything that determines whether the project ships in nine months or nineteen. This piece is what the diagram does not tell you - what each stage actually demands, what it produces, and where teams routinely lose entire quarters to rework.
          </p>

          <section id="why-projects-fail">
            <h2>Why Most Projects <em>Run Long</em></h2>
            <p>I have watched enough first-time ISO 27001 implementations to spot the pattern within the first month. The teams that ship on time are not faster - they are sequenced. They do the gap assessment before they write any policies. They map their actual data and systems before they pick controls. They get leadership signed up before they spend a single hour on documentation.</p>
            <p>The teams that double their timeline almost always make the same mistakes. They start with policy templates downloaded from the internet, they skip the gap assessment because it "feels obvious what we need," and they discover at internal audit that half the controls need engineering changes nobody scoped. <strong>The standard is not the problem. The order of operations is.</strong></p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The Documentation Trap</strong>
                <p>Auditors check whether your ISMS works, not whether your policies are beautifully formatted. A team that spends six months perfecting policy wording and three weeks on actual control implementation will fail a Stage 2 audit. A team that spends three weeks on competent policy drafting and six months on real control implementation will pass it.</p>
              </div>
            </div>
          </section>

          <section id="seven-stages">
            <h2>The Seven Stages, <em>In Order</em></h2>

            <div id="stage-1" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STAGE 01</span>
                <span className="roadmap-step-time">Weeks 1–3</span>
              </div>
              <h3>Gap Assessment - Measure the Distance</h3>
              <p>Before you write a single document, find out where you stand. A gap assessment compares your current state - controls in place, processes that exist, evidence already produced - against every requirement in Clauses 4 to 10 and the 93 Annex A controls. The output is not a pass/fail. It is a register of every gap, sized by effort, with an owner attached.</p>
              <p>The temptation is to skip this stage because "we know what we're missing." You do not. In every gap assessment I have run, the team flagged five or six things they expected to find - and the assessment surfaced fifteen or twenty more. Network segmentation evidence that does not exist. Vendor due-diligence records that were never collected. A backup process that runs but has never been tested. The gaps you do not know about are the ones that cost you time at Stage 5.</p>
              <div className="step-deliv">
                <strong>📤 Deliverable →</strong> A gap register with each requirement categorised as Compliant, Partial, Missing, or Not Applicable - with effort estimates, owners, and target dates. We covered the full mechanics in <a href="https://seccomply.net/resources/blog/iso-27001-gap-assessment" style={{color:'var(--gr)',fontWeight:600}}>how to run an ISO 27001 gap assessment</a>.
              </div>
            </div>

            <div id="stage-2" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STAGE 02</span>
                <span className="roadmap-step-time">Weeks 3–6</span>
              </div>
              <h3>Scope &amp; ISMS Foundation</h3>
              <p>The scope statement is the single most consequential document in the entire programme. Get it wrong and the rest of the work either explodes (you scoped too broadly) or fails the audit (you scoped narrowly enough that the auditor questions whether the certificate means anything). Clause 4.3 requires you to define the boundaries of the ISMS - products, services, locations, technology, organisational units. The boundaries should match the business reality, not the consultant's preference.</p>
              <p>This stage is also where you appoint the Information Security Manager (or equivalent), establish the security governance forum, and write the top-level Information Security Policy under Clause 5.2. The policy is short - usually under two pages - and it must be signed by leadership. Every other policy and procedure flows from it. If you have not understood what an ISMS actually is, the foundation in <a href="https://seccomply.net/resources/blog/what-is-an-isms" className="inline-link">what is an ISMS</a> sets up everything that follows.</p>
              <div className="step-deliv">
                <strong>📤 Deliverable →</strong> Scope statement, ISMS roles and responsibilities matrix, signed Information Security Policy, leadership commitment record (Clause 5.1).
              </div>
            </div>

            <div id="stage-3" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STAGE 03</span>
                <span className="roadmap-step-time">Weeks 5–10</span>
              </div>
              <h3>Risk Assessment &amp; Treatment</h3>
              <p>Clauses 6.1.2 and 6.1.3 are the engine of the entire ISMS. Identify the risks to the confidentiality, integrity, and availability of information within scope. Evaluate them against your defined risk criteria. Decide a treatment for each - accept, mitigate, transfer, avoid. The output is the risk register, the risk treatment plan, and the Statement of Applicability (SoA).</p>
              <p>The SoA is where most first-time teams stall. It is a controlled document listing every Annex A control, your decision on whether it is applicable, and the justification. If you cannot complete the SoA, you do not yet understand your risk landscape - which means Stage 4 is going to surprise you. Our walkthrough on <a href="https://seccomply.net/resources/blog/iso-27001-risk-assessment" className="inline-link">how risk assessment works step by step</a> covers the methodology in depth.</p>
              <div className="step-deliv">
                <strong>📤 Deliverable →</strong> Risk register, risk treatment plan, Statement of Applicability, residual risk acceptance log.
              </div>
            </div>

            <div id="stage-4" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STAGE 04</span>
                <span className="roadmap-step-time">Weeks 10–28</span>
              </div>
              <h3>Control Implementation - The Stage Everyone Underestimates</h3>
              <p>Now you actually build or adjust the controls marked applicable in the SoA. This is the longest stage by some distance - typically 12 to 18 weeks - and it is where every realistic ISO 27001 project budget gets blown. The reason is mundane. Some controls are policy-only and take a week. Others require system changes - a new logging stack, a refactored access provisioning process, a vendor-management tool, MFA enforcement on systems that previously did not have it. Those are quarterly projects in themselves.</p>
              <p>Sequence inside this stage matters too. Build the foundational controls first - access control, asset management, logging, backups. They feed evidence into every other control. Build the human controls next - security awareness training, onboarding/offboarding, incident response. The supplier controls and physical controls usually come last because they depend on the foundations being in place. The full list of 93 controls and what each one means is broken down in <a href="https://seccomply.net/resources/blog/iso-27001-annex-a-controls" className="inline-link">ISO 27001 Annex A controls explained simply</a>.</p>
              <div className="step-tip">
                <strong>Pragmatic shortcut →</strong> Many controls are already partially in place. Before you build new infrastructure, audit what exists. A surprising number of teams have logging, MFA, and vulnerability scanning running - they just have no policy or evidence trail wrapping them. Document what exists first; build new only where the gap is real.
              </div>
              <div className="step-deliv">
                <strong>📤 Deliverable →</strong> Full implementation of applicable Annex A controls, supporting policies and procedures, evidence repository structured by control reference.
              </div>
            </div>

            <div id="stage-5" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STAGE 05</span>
                <span className="roadmap-step-time">Weeks 26–32</span>
              </div>
              <h3>Internal Audit &amp; Management Review</h3>
              <p>Clause 9.2 requires you to run an internal audit covering the entire ISMS before you bring an external auditor anywhere near it. The internal audit is run by someone independent of the area being audited - either an internal auditor trained for the role, or a consultant. The audit covers Clauses 4 through 10 and every applicable Annex A control. It produces findings, which the team then closes through corrective action.</p>
              <p>Clause 9.3 then requires a management review - a leadership-level meeting that examines internal audit results, risk landscape changes, control effectiveness, and resource needs. The output is a documented set of decisions and improvement actions. <strong>This is the stage that turns a paper ISMS into an operational one.</strong> Skipping it produces a Stage 1 audit that fails.</p>
              <div className="step-deliv">
                <strong>📤 Deliverable →</strong> Internal audit report, corrective action register, management review minutes with decisions and actions.
              </div>
            </div>

            <div id="stage-6" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STAGE 06</span>
                <span className="roadmap-step-time">Weeks 32–36</span>
              </div>
              <h3>Stage 1 External Audit</h3>
              <p>The certification body sends an external auditor to run a documentation review and readiness check. The Stage 1 auditor evaluates whether your ISMS is designed correctly, whether all mandatory documents exist, whether scope is reasonable, and whether the system looks ready for operational testing in Stage 2. The audit typically lasts one to three days, depending on scope.</p>
              <p>Stage 1 produces three categories of finding - Major nonconformities (which must be closed before Stage 2 can proceed), Minor nonconformities (which must be closed during or shortly after Stage 2), and Observations (improvement suggestions). A clean Stage 1 with only minor findings is normal. Going into Stage 1 with major findings means Stage 2 gets pushed back, and so does the certificate.</p>
            </div>

            <div id="stage-7" className="roadmap-step">
              <div className="roadmap-step-head">
                <span className="roadmap-step-num">STAGE 07</span>
                <span className="roadmap-step-time">Weeks 38–44</span>
              </div>
              <h3>Stage 2 Audit &amp; Certification</h3>
              <p>The Stage 2 auditor spends typically three to ten days (depending on organisation size) evaluating whether the ISMS actually operates as documented. This is evidence sampling, control testing, employee interviews, walkthroughs of incident response plans, examination of access reviews, scrutiny of vendor management records. The auditor is checking whether the system is alive, not whether the documents look polished.</p>
              <p>If the audit closes successfully - major findings closed, minor findings on a remediation plan - the certification body issues your ISO 27001 certificate. <strong>Validity is three years.</strong> Surveillance audits run in years 1 and 2 (smaller scope), and a full recertification audit happens in year 3. The certificate goes on your website, in your sales decks, and most importantly in your security questionnaire responses.</p>
            </div>
          </section>

          <section id="after-cert">
            <h2>Life After the <em>Certificate</em></h2>
            <p>The work does not stop on certification day. The ISMS has to keep running, evolving, and improving. Surveillance audits in years 1 and 2 typically focus on changes since the last audit, the effectiveness of corrective actions, and a sample of operational controls. They are smaller than Stage 2 but they expect the ISMS to still be functioning, not frozen at the snapshot from certification.</p>
            <p>Year 3 brings the recertification audit - essentially a full Stage 2 again. Teams that maintained the ISMS continuously sail through; teams that let it slip after the initial certificate find themselves running a mini-implementation just to recertify. The companies that capture the most <a href="https://seccomply.net/resources/blog/iso-27001-business-value" className="inline-link">real business value from ISO 27001</a> are the ones that treat the ISMS as ongoing infrastructure, not a 12-month project that ends.</p>
          </section>

          <section id="cost-time">
            <h2>Realistic Cost &amp; <em>Time Budget</em></h2>
            <p>The cost question gets dodged on almost every consultancy website because the honest answer is uncomfortable - "it depends, mostly on your scope." Here is the breakdown that holds up across the dozens of implementations I have seen first-hand.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Cost Component</th><th>Small SMB (under 50 staff)</th><th>Mid-Sized (50–250 staff)</th></tr></thead>
                <tbody>
                  <tr><td>Internal time (FTE-equivalent)</td><td>0.4–0.6 FTE × 9–12 months</td><td>0.8–1.2 FTE × 12 months</td></tr>
                  <tr><td>Consultant fees (optional)</td><td>$8K–$25K</td><td>$25K–$60K</td></tr>
                  <tr><td>Certification body - Stage 1 + 2</td><td>$7K–$12K</td><td>$15K–$25K</td></tr>
                  <tr><td>Tooling (GRC platform, training)</td><td>$3K–$8K / year</td><td>$10K–$30K / year</td></tr>
                  <tr><td>Surveillance audit (years 1, 2)</td><td>$3K–$5K each</td><td>$6K–$12K each</td></tr>
                  <tr><td><strong>Total Year 1</strong></td><td><strong>$18K–$50K + internal time</strong></td><td><strong>$50K–$115K + internal time</strong></td></tr>
                </tbody>
              </table>
            </div>
            <p>The internal time is the bigger expense, and it is rarely budgeted explicitly. A 0.6 FTE for 9 months is roughly half a senior security person's working year. Treat it as a real line item, not a "we'll fit it in around BAU" assumption - the projects that fail are usually the ones where the internal owner was supposed to do this on top of their day job.</p>
          </section>

          <section id="failure-points">
            <h2>Where Teams <em>Burn Months</em></h2>
            <p>Across the implementations I have seen, the same five failure points recur. If you sequence around them, you eliminate two-thirds of the rework that consumes most of the buffer.</p>
            <div className="scope-grid">
              <div className="scope-col sc-bad">
                <h4>❌ Common Failures</h4>
                <ul>
                  <li><strong>Skipping the gap assessment</strong> - discovers gaps at internal audit instead</li>
                  <li><strong>Scope set by ambition, not reality</strong> - controls cannot be evidenced for half the scope</li>
                  <li><strong>Policies before risk assessment</strong> - policies need to be re-written when risk treatment changes</li>
                  <li><strong>Underestimating Stage 4</strong> - engineering changes scoped at 4 weeks become 14</li>
                  <li><strong>Internal audit run by the implementer</strong> - independence requirement fails Stage 1</li>
                </ul>
              </div>
              <div className="scope-col sc-good">
                <h4>✅ What Works</h4>
                <ul>
                  <li>Gap assessment first, every time, even if "obvious"</li>
                  <li>Scope matches what you can evidence today</li>
                  <li>Risk assessment drives policy content, not the other way around</li>
                  <li>Stage 4 budgeted at 12+ weeks with engineering involved early</li>
                  <li>Independent internal auditor - different person, ideally different reporting line</li>
                </ul>
              </div>
            </div>
            <div className="case-study">
              <span className="case-study-tag">🔵 Real Project - Where Time Was Lost</span>
              <h4>The 14-Month Implementation That Should Have Been 9</h4>
              <p>A B2B SaaS company we worked with started their ISO 27001 programme with a downloaded policy pack, three weeks of furious documentation, and a target audit date five months out. By month four they were ahead of schedule on paper. By month six they were two months behind reality.</p>
              <p>The gap surfaced when the internal auditor (correctly) refused to sign off because backup testing had never been performed, vendor management was a spreadsheet that had not been updated in seven months, and the access review process did not yet exist. <strong>Three months of additional work followed</strong> - building the missing controls, generating evidence, re-running the internal audit. They certified at month 14. A proper gap assessment in week one would have surfaced the same issues, on a longer but less stressful timeline. The certificate was identical. The project cost was nearly double.</p>
            </div>
          </section>

          <section id="final">
            <h2>Final <em>Thought</em></h2>
            <p>ISO 27001 is one of the few compliance programmes that genuinely improves the organisation if it is implemented seriously. The risk assessment forces a conversation about what actually matters. The control implementation surfaces the gaps that a breach would otherwise expose. The internal audit habit becomes the muscle that catches problems early. The certificate is the visible outcome - but the real value is the operating discipline the programme installs.</p>
            <p>The teams that get there in nine months and the teams that get there in nineteen are not separated by skill. They are separated by sequence. Run the gap assessment first. Let the risk assessment drive the policy. Budget Stage 4 honestly. Run an independent internal audit. The diagram is the same. The execution is what makes the difference. If you are deciding whether your business needs ISO 27001 at all, our <a href="https://seccomply.net/resources/blog/iso-27001-self-assessment" className="inline-link">six-trigger self-assessment guide</a> is the right place to start.</p>
          </section>

          <div className="cta-banner">
            <h3>Need a Realistic ISO 27001 Implementation Plan?</h3>
            <p>SecComply runs the gap assessment, builds the SoA, sequences the control work to your team's actual capacity, and stays embedded through Stage 1 and Stage 2 audits. Most clients certify in 9 months. None of them rebuild their ISMS three months in.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Roadmap Review →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/iso-27001-implementation-roadmap" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/iso-27001-implementation-roadmap&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How long does ISO 27001 implementation take?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>A focused team with engaged leadership typically takes 9-12 months from gap assessment to certification. Smaller organisations with simpler scope can compress to 6-8 months. The most common failure pattern is underestimating control implementation (Stage 4) - teams budget 6 weeks and end up needing 12-16 because of system changes nobody anticipated.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the difference between Stage 1 and Stage 2 audits?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Stage 1 is a documentation review - the auditor checks whether the ISMS is designed correctly, whether mandatory documents exist, and whether the organisation is ready for Stage 2. Stage 2 is operational - the auditor evaluates whether the ISMS is actually working through evidence sampling, control testing, and interviews. Stage 1 finds gaps; Stage 2 finds whether the system runs.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How much does ISO 27001 certification cost?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Total cost ranges from roughly $15,000 to over $100,000 depending on scope, organisation size, and consultant involvement. The certification body audit typically costs $7,000-$25,000 for SMBs. Internal time is usually the larger expense - expect 0.5-1 FTE equivalent for 9-12 months. Surveillance audits in years 2 and 3 add roughly 30-50% of initial certification cost annually.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Do I need a consultant to implement ISO 27001?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Not strictly required, but most first-time implementations benefit from one. The standard is detailed, the Annex A controls require interpretation, and an experienced consultant prevents the common rework that comes from misreading requirements. The pragmatic split is consultant-led for the first certification and internal team for surveillance and recertification cycles.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What happens after certification?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Certification is valid for three years. Surveillance audits happen in years 1 and 2 (smaller scope, focused on changes and effectiveness), and a full recertification audit happens in year 3. Between audits, the ISMS must continue to operate - internal audits annually, management reviews, ongoing risk treatment, and corrective action when issues surface.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can I implement ISO 27001 alongside SOC 2?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Yes, and many organisations do. The control overlap between ISO 27001 Annex A and SOC 2 Trust Services Criteria is roughly 70-80% - meaning the bulk of the implementation work serves both. The differences are mostly structural (ISO 27001 needs an ISMS and Statement of Applicability; SOC 2 needs a defined system description and trust services criteria mapping). Our breakdown of <a href="https://seccomply.net/resources/blog/iso-27001-vs-soc2-vs-gdpr" style={{color:'var(--cy)'}}>ISO 27001 vs SOC 2 vs GDPR</a> covers the differences.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the most common reason ISO 27001 audits fail?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Lack of operational evidence. The ISMS exists on paper - policies are written, controls are listed in the SoA - but the day-to-day records that prove the system actually runs are missing. Backup tests not performed, access reviews not documented, vendor risk assessments not completed, incident response plans not exercised. Auditors do not fail organisations for paperwork errors. They fail organisations whose ISMS turns out to be a binder rather than a working system.</p></div>
            </div>
          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#why-projects-fail" className="toc-link">Why Projects Run Long</a></li>
              <li><a href="#stage-1" className="toc-link">Stage 1 - Gap Assessment</a></li>
              <li><a href="#stage-2" className="toc-link">Stage 2 - Scope &amp; ISMS</a></li>
              <li><a href="#stage-3" className="toc-link">Stage 3 - Risk Assessment</a></li>
              <li><a href="#stage-4" className="toc-link">Stage 4 - Controls</a></li>
              <li><a href="#stage-5" className="toc-link">Stage 5 - Internal Audit</a></li>
              <li><a href="#stage-6" className="toc-link">Stage 6 - External Stage 1</a></li>
              <li><a href="#stage-7" className="toc-link">Stage 7 - Certification</a></li>
              <li><a href="#after-cert" className="toc-link">After the Certificate</a></li>
              <li><a href="#cost-time" className="toc-link">Cost &amp; Time</a></li>
              <li><a href="#failure-points" className="toc-link">Where Teams Burn Months</a></li>
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
              <li><a href="https://seccomply.net/resources/blog/iso-27001-gap-assessment">Gap Assessment - How to Run One</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27001-implementation-roadmap">▶ Implementation Roadmap</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27001</span><span className="tag">Implementation</span><span className="tag">Roadmap</span><span className="tag">Stage 1 Audit</span><span className="tag">Stage 2 Audit</span><span className="tag">SoA</span><span className="tag">Annex A</span><span className="tag">ISMS</span></div>
          </div>
          <div className="sb-cta">
            <h4>Plan Your Implementation?</h4>
            <p>Realistic timeline, sequenced work, no rework. Get certified in 9 months, not 14.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
