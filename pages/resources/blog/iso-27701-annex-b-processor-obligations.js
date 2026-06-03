import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27701AnnexBProcessorObligations() {
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
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08 }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>ISO 27701 Annex B Controls - Processor-Specific Obligations Unpacked | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="ISO 27701 Annex B is written for PII processors - SaaS vendors, cloud platforms, payroll bureaus, and B2B data services. Seven control areas (B.2 to B.8) explained in operational detail with practical obligations, certification path, and common pitfalls." />
        <meta name="keywords" content="ISO 27701 Annex B, ISO 27701 processor obligations, PII processor controls, ISO 27701 certification processor, B.2 B.3 B.4 B.5 B.6 B.7 B.8 controls, processor DPA requirements, sub-processor management, privacy by design processor, GDPR Article 28" />
        <meta property="og:title" content="ISO 27701 Annex B Controls - Processor-Specific Obligations Unpacked" />
        <meta property="og:description" content="Seven Annex B control areas explained with practical obligations, certification path, and the common pitfalls auditors flag in processor certification audits." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27701-annex-b-processor-obligations" />
        <meta property="article:published_time" content="2026-04-23" />
        <meta property="article:author" content="Bhumika Deshmukh" />
        <meta property="article:tag" content="ISO 27701" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27701-annex-b-processor-obligations" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"ISO 27701 Annex B Controls - Processor-Specific Obligations Unpacked","description":"ISO 27701 Annex B is written for PII processors. Seven control areas (B.2 to B.8) explained with practical obligations, certification path, and common pitfalls.","author":{"@type":"Person","name":"Bhumika Deshmukh","jobTitle":"Privacy & Compliance Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-04-23","dateModified":"2026-04-23","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27701-annex-b-processor-obligations","articleSection":"ISO 27701","image":"https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"ISO 27701 Annex B Controls","item":"https://seccomply.net/resources/blog/iso-27701-annex-b-processor-obligations"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is ISO 27701 Annex B?","acceptedAnswer":{"@type":"Answer","text":"ISO 27701 Annex B contains the controls that apply specifically to PII processors - organisations that process personal data on behalf of a controller. It mirrors the structure of Annex A but reframes every obligation from the processor's perspective. The seven control areas (B.2 to B.8) cover lawful processing, obligations to individuals, privacy by design, data sharing, subject rights, complaints handling, and ongoing assessment of obligations."}},{"@type":"Question","name":"Who is a PII processor under ISO 27701?","acceptedAnswer":{"@type":"Answer","text":"A PII processor is any organisation that processes personal data on behalf of another organisation (the controller) under documented instructions. Typical processors include SaaS vendors, cloud infrastructure providers, payroll bureaus, marketing platforms, analytics services, and B2B data services. Many organisations are both controller and processor, depending on the data flow."}},{"@type":"Question","name":"Can I certify to ISO 27701 without ISO 27001?","acceptedAnswer":{"@type":"Answer","text":"No. ISO 27701 is an extension of ISO 27001 - you cannot certify to 27701 as a standalone standard. Your organisation must have an existing ISO 27001 ISMS in scope before pursuing 27701 certification. If you are starting from scratch, plan for both standards in parallel since the overlapping controls make this more efficient than sequential certification."}},{"@type":"Question","name":"What is the difference between Annex A and Annex B in ISO 27701?","acceptedAnswer":{"@type":"Answer","text":"Annex A applies to PII controllers - organisations that determine the purposes and means of processing. Annex B applies to PII processors - organisations that process data on a controller's behalf. The two annexes mirror each other thematically but contain different operational obligations. Many organisations are both, and need to evaluate both annexes against their data flows."}},{"@type":"Question","name":"What is the most common audit finding for processors under Annex B?","acceptedAnswer":{"@type":"Answer","text":"Incomplete deletion is consistently one of the most common processor compliance failures. Erasure must propagate beyond the live database to cover log files, backups, replicas, analytics stores, and any sub-processors that received the data. Auditors expect documented deletion procedures, technical evidence that deletion has occurred, and confirmation that deletion cascades downstream."}}]}]}) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#0081f2;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(0, 129, 242,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#0081f2,#38A8FF);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(0, 129, 242,.1);color:var(--cy);border:1px solid rgba(0, 129, 242,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
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
    .data-table{width:100%;border-collapse:collapse}
    .data-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .data-table td{padding:.7rem 1rem;font-size:.84rem;color:var(--tm);border-bottom:1px solid var(--bs);vertical-align:top}
    .data-table tr:last-child td{border-bottom:none}
    .data-table td:first-child{color:var(--tx);font-weight:600}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(0, 129, 242,.06);border:1px solid rgba(0, 129, 242,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-danger{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .co-gr{background:rgba(6,214,160,.05);border:1px solid rgba(6,214,160,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .control-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.5rem 0;border-left:3px solid var(--cy)}
    .control-card-head{display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem;flex-wrap:wrap}
    .control-card-tag{display:inline-flex;align-items:center;padding:.25rem .7rem;background:rgba(0, 129, 242,.1);color:var(--cy);border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.04em}
    .control-card-title{font-size:1.1rem;font-weight:700;color:var(--tx)}
    .control-card-what{font-size:.94rem;color:var(--tb);margin-bottom:1rem;line-height:1.7}
    .control-card-what strong{color:var(--tx)}
    .control-card-label{font-size:.7rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--cy);margin-bottom:.65rem}
    .scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .scope-col{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem}
    .scope-col.sc-in{border-top:3px solid var(--gr)}
    .scope-col.sc-out{border-top:3px solid #ff4d6d}
    .scope-col h4{font-size:.82rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.8rem}
    .sc-in h4{color:var(--gr)}
    .sc-out h4{color:#ff4d6d}
    .scope-col ul li{font-size:.82rem;padding:.28rem 0 .28rem 1.1rem}
    .step-list{display:flex;flex-direction:column;gap:.85rem;margin:1.5rem 0}
    .step-item{display:flex;gap:1rem;padding:1.1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px}
    .step-num{width:30px;height:30px;border-radius:50%;background:var(--cy);color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.85rem}
    .step-body strong{display:block;color:var(--tx);font-size:.95rem;margin-bottom:.3rem}
    .step-body p{font-size:.88rem;color:var(--tm);margin-bottom:0!important;line-height:1.65}
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
    .cta-banner p{font-size:.92rem;color:var(--tb);margin-bottom:1.5rem!important;max-width:500px;margin-left:auto;margin-right:auto}
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
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
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
        <span style={{color:'var(--tb)'}}>ISO 27701</span>
      </div>

      <div className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">🔐 ISO 27701</span>
          <span className="badge badge-bl">🔏 Privacy Compliance</span>
          <span className="badge badge-gr">⚙️ For Processors</span>
        </div>
        <h1 className="hero-h1">ISO 27701 Annex B Controls - <em>Processor-Specific Obligations</em> Unpacked</h1>
        <p className="hero-sub">If your organisation processes personal data on behalf of clients - as a SaaS vendor, cloud platform, payroll bureau, or B2B data service - Annex B is written for you. Seven control areas (B.2 to B.8) explained in operational detail, with the certification path and the pitfalls auditors flag most.</p>

        <div className="author-strip">
          <div className="avatar">BD</div>
          <div className="author-info">
            <div className="aname">Bhumika Deshmukh</div>
            <div className="ameta"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Privacy &amp; Compliance Writer</span><span className="dot">·</span><span id="read-time">📖 12 min read</span></div>
            <div className="adate"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=480&fit=crop" alt="ISO 27701 Annex B controls processor obligations PIMS certification" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}} />
        </div>
        <p className="img-cap">Annex B mirrors the thematic structure of Annex A but reframes every obligation from the processor's perspective. The controls are different in substance, even where the headings look similar.</p>

        <div className="img-wrap">
          <svg viewBox="0 0 960 280" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs><pattern id="pgs5" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(0, 129, 242,0.04)"/></pattern></defs>
            <rect width="960" height="280" fill="url(#pgs5)"/>
            <text x="480" y="22" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">ISO 27701 Annex B - 7 Processor Control Areas</text>
            {[
              {t:"B.2",sub:"Conditions for Collection",col:"#0081f2",x:30},
              {t:"B.3",sub:"Obligations to Principals",col:"#818cf8",x:165},
              {t:"B.4",sub:"Privacy by Design",col:"#06d6a0",x:300},
              {t:"B.5",sub:"Sharing & Transfer",col:"#ffb703",x:435},
              {t:"B.6",sub:"Access & Erasure",col:"#ef4444",x:570},
              {t:"B.7",sub:"Complaints",col:"#22d3ee",x:705},
              {t:"B.8",sub:"Assessment",col:"#a78bfa",x:840}
            ].map(({t,sub,col,x},i) => (
              <g key={i}>
                <rect x={x} y="60" width="100" height="180" rx="12" fill="#091826" stroke={col+"30"} strokeWidth="1.5"/>
                <rect x={x} y="60" width="100" height="3" rx="1.5" fill={col}/>
                <text x={x+50} y="105" textAnchor="middle" fill={col} fontSize="22" fontWeight="800" fontFamily="sans-serif">{t}</text>
                <text x={x+50} y="135" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="9" fontWeight="600" fontFamily="sans-serif">{sub.split(' ')[0]}</text>
                <text x={x+50} y="148" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="9" fontFamily="sans-serif">{sub.split(' ').slice(1).join(' ')}</text>
                <circle cx={x+50} cy="190" r="14" fill={col} opacity="0.15"/>
                <text x={x+50} y="194" textAnchor="middle" fill={col} fontSize="11" fontWeight="700" fontFamily="sans-serif">{i+1}</text>
              </g>
            ))}
            <text x="480" y="265" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="9" fontFamily="sans-serif">Each control reframed for organisations processing PII on behalf of a controller</text>
          </svg>
        </div>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#who-for">Who Is This Blog For?</a>
            <a href="#why-matters">Why Annex B Matters</a>
            <a href="#controller-vs-processor">Controller vs Processor</a>
            <a href="#deep-dive">The Seven Annex B Controls</a>
            <a href="#certification">Certification Pathway</a>
            <a href="#pitfalls">Five Common Pitfalls</a>
            <a href="#quick-ref">Quick Reference Table</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(0, 129, 242,0.3)',paddingLeft:'1.2rem'}}>Many teams treat ISO 27701 as a controller-only framework. That is understandable - controllers bear the headline obligations under GDPR and similar laws. But Annex B exists precisely because the standard recognises that processors carry distinct, non-trivial responsibilities, and that a weak processor is a liability for every controller that depends on them. This walkthrough unpacks the seven Annex B control areas in operational detail so your team knows exactly what each requires.</p>

          <section id="who-for">
            <h2>Who Is This Blog <em>For?</em></h2>
            <p>If your organisation processes personal data on behalf of clients - as a SaaS vendor, cloud infrastructure provider, payroll bureau, marketing platform, or any other B2B data service - you are a PII Processor under ISO 27701. And Annex B is written specifically for you.</p>
            <p>If you are still working out which side of the line you sit on, it is worth reading our <a href="https://seccomply.net/resources/blog/data-principal-fiduciary-processor" className="inline-link">data principal vs fiduciary vs processor explainer</a> alongside this - many organisations are both controller and processor depending on the data flow.</p>
          </section>

          <section id="why-matters">
            <h2>Why Annex B Matters <em>More Than You Think</em></h2>
            <div className="callout co-key">
              <span className="co-icon">⚡</span>
              <div className="co-body">
                <strong>Regulators Now Target Processors Directly</strong>
                <p>Under GDPR Article 28, processors can face independent fines. ISO 27701 Annex B certification provides documented, auditable evidence that your organisation takes processor obligations seriously - a genuine differentiator in enterprise sales and a meaningful reduction in regulatory exposure.</p>
              </div>
            </div>
            <p>For the broader context on processor obligations under privacy law, our companion piece on <a href="https://seccomply.net/resources/blog/iso-27701-for-data-processors" className="inline-link">ISO 27701 for data processors</a> covers the Clause 9 management system requirements that sit alongside Annex B. Annex B controls are the operational obligations; Clause 9 is the governance scaffolding that holds them together.</p>
          </section>

          <section id="controller-vs-processor">
            <h2>Controller vs Processor - <em>A Quick Orientation</em></h2>
            <p>Before diving into the controls, it helps to be clear on what distinguishes a processor from a controller - because many organisations are both, depending on the data flow.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Dimension</th><th>PII Controller (Annex A)</th><th>PII Processor (Annex B)</th></tr></thead>
                <tbody>
                  <tr><td>Purpose setting</td><td>Determines why data is processed</td><td>Follows controller instructions only</td></tr>
                  <tr><td>Legal basis</td><td>Must identify and document lawful basis</td><td>Relies on controller's legal basis</td></tr>
                  <tr><td>Privacy notices</td><td>Must publish notices to individuals</td><td>Usually no direct notice obligation</td></tr>
                  <tr><td>Sub-processing</td><td>Must approve processors it engages</td><td>Must get controller approval for sub-processors</td></tr>
                  <tr><td>Subject rights</td><td>Directly handles individual requests</td><td>Supports controller in fulfilling requests</td></tr>
                  <tr><td>Data breaches</td><td>Notifies supervisory authority</td><td>Notifies controller without undue delay</td></tr>
                  <tr><td>DPA requirement</td><td>Must have DPA in place with processors</td><td>Must sign DPA with every controller</td></tr>
                </tbody>
              </table>
            </div>
            <p>If your role is on the controller side, the parallel companion piece is our walkthrough of <a href="https://seccomply.net/resources/blog/iso-27701-for-data-controllers" className="inline-link">ISO 27701 for data controllers</a>, which covers the equivalent Annex A obligations.</p>
          </section>

          <section id="deep-dive">
            <h2>The Seven Annex B Control Areas - <em>Deep Dive</em></h2>
            <p>Annex B mirrors the thematic structure of Annex A but reframes every obligation from the processor perspective. Here is what each area requires in practice.</p>

            <div className="control-card">
              <div className="control-card-head">
                <span className="control-card-tag">B.2</span>
                <span className="control-card-title">Conditions for Collection and Processing</span>
              </div>
              <p className="control-card-what"><strong>What it covers:</strong> Processors may only process PII under documented, lawful instructions from the controller. This control ensures there is no unauthorised, scope-creep, or purpose-limited processing - a foundational requirement that underpins everything else.</p>
              <div className="control-card-label">Practical Obligations</div>
              <ul>
                <li>Obtain and retain a signed Data Processing Agreement (DPA) with every controller before processing begins</li>
                <li>Map every processing activity to an explicit controller instruction in the DPA or written order</li>
                <li>Immediately flag and suspend any controller instruction you believe may be unlawful</li>
                <li>Do not use PII received from controllers for your own business purposes (analytics, product improvement, AI training) without explicit permission</li>
                <li>Ensure contractual agreements include a clear description of processing scope, duration, and categories of data</li>
                <li>Audit processing activities quarterly to verify alignment with documented instructions</li>
              </ul>
              <div className="callout co-info" style={{marginTop:'1rem',marginBottom:'0'}}>
                <span className="co-icon">💡</span>
                <div className="co-body">
                  <strong>Real-World Scenario</strong>
                  <p>A CRM SaaS provider receives customer data from a retail client. The provider cannot use that data to train its own AI models or enrich its own customer database - even in aggregated or anonymised form - without explicit controller authorisation and a legal basis.</p>
                </div>
              </div>
            </div>

            <div className="control-card">
              <div className="control-card-head">
                <span className="control-card-tag">B.3</span>
                <span className="control-card-title">Obligations to PII Principals</span>
              </div>
              <p className="control-card-what"><strong>What it covers:</strong> Even as a processor, you may have limited but important direct obligations toward the individuals whose data you process - particularly where you interact with them in the course of service delivery.</p>
              <div className="control-card-label">Practical Obligations</div>
              <ul>
                <li>Identify all touchpoints where your service interacts directly with end-users</li>
                <li>Ensure individual-facing communications are pre-approved and aligned with the controller's privacy notices</li>
                <li>Do not make independent representations about how data will be used - defer to the controller</li>
                <li>Support controllers in providing individuals with information about sub-processors that have access to their data</li>
                <li>If an individual contacts you directly with a rights request, forward it to the controller promptly and without acting on it independently</li>
                <li>Document your approach to individual-facing interactions in your processing records</li>
              </ul>
            </div>

            <div className="control-card">
              <div className="control-card-head">
                <span className="control-card-tag">B.4</span>
                <span className="control-card-title">Privacy by Design and Privacy by Default</span>
              </div>
              <p className="control-card-what"><strong>What it covers:</strong> Processors must build privacy-protective capabilities into their products and services so that controllers can meet their own privacy-by-design obligations. Your architecture choices directly affect your clients' compliance posture.</p>
              <div className="control-card-label">Practical Obligations</div>
              <ul>
                <li>Conduct a Privacy Impact Assessment (PIA) for all new features that process personal data</li>
                <li>Default to minimum data collection in all product configurations - no opt-out required to reduce data sharing</li>
                <li>Provide controllers with granular retention controls so they can enforce their own policies</li>
                <li>Implement pseudonymisation and encryption at rest and in transit as defaults, not optional extras</li>
                <li>Maintain technical documentation of your privacy architecture to support client DPIAs</li>
                <li>Include privacy review as a mandatory gate in your software development lifecycle (SDLC)</li>
                <li>Make data minimisation tools and export/delete APIs available to all controllers, not just enterprise tiers</li>
              </ul>
              <div className="callout co-warn" style={{marginTop:'1rem',marginBottom:'0'}}>
                <span className="co-icon">⚠️</span>
                <div className="co-body">
                  <strong>Common Gap</strong>
                  <p>Many processors offer privacy-protective features only on premium tiers. Annex B B.4 expects these to be available as defaults or reasonable configurations, not upsell opportunities. This is a frequent finding in certification audits. For broader context on encryption defaults, see our piece on <a href="https://seccomply.net/resources/blog/encryption-at-rest-vs-in-transit" className="inline-link">encryption at rest vs in transit</a>.</p>
                </div>
              </div>
            </div>

            <div className="control-card">
              <div className="control-card-head">
                <span className="control-card-tag">B.5</span>
                <span className="control-card-title">PII Sharing, Transfer, and Disclosure</span>
              </div>
              <p className="control-card-what"><strong>What it covers:</strong> Controls how processors may share, transfer, or disclose personal data - whether to sub-processors, across international borders, or in response to legal demands. Unauthorised sharing is one of the highest-risk areas for processors.</p>
              <div className="control-card-label">Practical Obligations</div>
              <ul>
                <li>Obtain explicit, written controller approval before engaging any sub-processor</li>
                <li>Maintain a current, public or client-accessible sub-processor list updated with at least 30 days notice of changes</li>
                <li>Flow down equivalent data protection obligations to all sub-processors by contract</li>
                <li>Assess and document the legal transfer mechanism for every cross-border data transfer (SCCs, adequacy, BCRs)</li>
                <li>Establish a legal disclosure protocol: notify the controller before responding to law enforcement requests unless legally prohibited</li>
                <li>If legally prohibited from notifying the controller, document the prohibition and seek legal advice</li>
                <li>Conduct annual reviews of sub-processor compliance and transfer mechanism adequacy</li>
              </ul>
              <div className="callout co-info" style={{marginTop:'1rem',marginBottom:'0'}}>
                <span className="co-icon">📋</span>
                <div className="co-body">
                  <strong>Practical Note on Sub-Processors</strong>
                  <p>Your sub-processor list is a contractual commitment to your clients. Changes should trigger a formal notification period - typically 30 days - during which the controller may object. Build a change management workflow around this, not an ad-hoc email. Our <a href="https://seccomply.net/resources/blog/tprm-best-practices" className="inline-link">third-party risk management guide</a> covers the operational mechanics in detail.</p>
                </div>
              </div>
            </div>

            <div className="control-card">
              <div className="control-card-head">
                <span className="control-card-tag">B.6</span>
                <span className="control-card-title">Access, Correction, and Erasure</span>
              </div>
              <p className="control-card-what"><strong>What it covers:</strong> Processors must operationally support controllers in fulfilling data subject rights. You cannot be the bottleneck when a controller receives a Subject Access Request, erasure demand, or correction request.</p>
              <div className="control-card-label">Practical Obligations</div>
              <ul>
                <li>Build APIs and admin interfaces that allow controllers to export, correct, or delete individual records on demand</li>
                <li>Define and document SLAs for responding to controller requests related to individual rights (target: 72 hours)</li>
                <li>Ensure deletion cascades to all backups, replicas, and disaster recovery stores within a documented timeframe</li>
                <li>Test your deletion capability end-to-end at least annually - document the test results</li>
                <li>Provide controllers with audit logs of data access and modification events to support SAR responses</li>
                <li>Train customer success and support teams to recognise and escalate rights-related requests from controllers</li>
                <li>Do not independently interpret or act on a rights request received directly from an individual without controller authorisation</li>
              </ul>
              <div className="callout co-danger" style={{marginTop:'1rem',marginBottom:'0'}}>
                <span className="co-icon">🚨</span>
                <div className="co-body">
                  <strong>High-Risk Area</strong>
                  <p>Incomplete deletion is one of the most common processor compliance failures. Erasure must propagate beyond the live database to cover log files, backups, analytics stores, and any third-party sub-processors that received the data. Map your data flows before certifying this control. The mechanics of subject rights are covered in detail in our <a href="https://seccomply.net/resources/blog/gdpr-data-subject-rights" className="inline-link">GDPR data subject rights walkthrough</a>.</p>
                </div>
              </div>
            </div>

            <div className="control-card">
              <div className="control-card-head">
                <span className="control-card-tag">B.7</span>
                <span className="control-card-title">Privacy Complaints and Enquiries</span>
              </div>
              <p className="control-card-what"><strong>What it covers:</strong> Even as a processor, you need a functioning mechanism for receiving and routing privacy-related complaints - both from controllers and, in some circumstances, from individuals who contact you directly.</p>
              <div className="control-card-label">Practical Obligations</div>
              <ul>
                <li>Designate a named privacy contact or functional inbox (e.g., privacy@yourcompany.com) for complaints</li>
                <li>Log all privacy complaints in a centralised register with date received, nature, and resolution</li>
                <li>Forward complaints that relate to the controller's data - do not resolve them independently</li>
                <li>Establish escalation paths for high-severity complaints (data breaches, regulatory enquiries)</li>
                <li>Define response SLAs: acknowledge within 24 hours, route within 48 hours, resolution timeline communicated to controller</li>
                <li>Review complaint trends quarterly to identify systemic processing issues</li>
                <li>Train frontline support staff to recognise privacy complaints and route them correctly</li>
              </ul>
            </div>

            <div className="control-card">
              <div className="control-card-head">
                <span className="control-card-tag">B.8</span>
                <span className="control-card-title">Assessment of Processor Obligations</span>
              </div>
              <p className="control-card-what"><strong>What it covers:</strong> Processors must proactively monitor and assess their own legal and contractual privacy obligations. The regulatory landscape is not static - new jurisdictions adopt data protection laws, guidance evolves, and your service footprint may grow into new markets.</p>
              <div className="control-card-label">Practical Obligations</div>
              <ul>
                <li>Maintain a legal obligations register covering every jurisdiction in which you process personal data</li>
                <li>Assign ownership of regulatory monitoring to a named individual or function - not just the DPO</li>
                <li>Subscribe to regulatory update services for key jurisdictions (EU, UK, US state laws, APAC)</li>
                <li>Conduct an annual review of your DPA obligations across all active controller relationships</li>
                <li>Assess whether your technical and organisational controls remain adequate after regulatory or contractual changes</li>
                <li>Document the outcome of all obligation assessments and track remediation actions to closure</li>
                <li>Ensure your procurement process screens new controller contracts for unusual or non-standard processor obligations</li>
              </ul>
              <div className="callout co-info" style={{marginTop:'1rem',marginBottom:'0'}}>
                <span className="co-icon">🔗</span>
                <div className="co-body">
                  <strong>Note on ISO 27001 Dependency</strong>
                  <p>ISO 27701 certification requires an existing ISO 27001 ISMS in scope - you cannot certify to 27701 as a standalone. If your organisation is starting from scratch, plan for both standards in parallel since the overlapping controls make this far more efficient than sequential certification. We cover this in detail in <a href="https://seccomply.net/resources/blog/how-to-extend-isms-into-pims" className="inline-link">how to extend your ISMS into a PIMS</a>.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="certification">
            <h2>The Certification Pathway <em>for Processors</em></h2>
            <p>ISO 27701 certification for processors follows a structured path. Here is a practical view of the journey.</p>
            <div className="step-list">
              <div className="step-item">
                <div className="step-num">1</div>
                <div className="step-body">
                  <strong>Gap Analysis</strong>
                  <p>Map your current controls against each Annex B requirement. Use a RACI to assign ownership. Identify which controls are fully implemented, partially implemented, or absent. Quantify the gap.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">2</div>
                <div className="step-body">
                  <strong>Build Your PIMS</strong>
                  <p>ISO 27701 extends your ISO 27001 ISMS. If you do not have 27001 in place, you need it first. The Privacy Information Management System (PIMS) adds privacy-specific policies, procedures, and records on top of your security management system.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">3</div>
                <div className="step-body">
                  <strong>Evidence Collection</strong>
                  <p>Auditors require documented evidence for every control - policy documents, procedure records, DPA registers, training logs, DPIA records, deletion test results, and sub-processor registers. Build evidence collection into day-to-day operations, not pre-audit sprints.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">4</div>
                <div className="step-body">
                  <strong>Internal Audit</strong>
                  <p>Conduct a structured internal audit against Annex B before engaging an external certification body. This surfaces non-conformities in a low-risk environment and allows you to remediate before the formal audit.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">5</div>
                <div className="step-body">
                  <strong>Certification Audit (Stage 1 + Stage 2)</strong>
                  <p>Stage 1 is a documentation review - the auditor assesses your PIMS documentation for completeness. Stage 2 is the on-site audit, testing whether your controls operate as documented. Successful completion results in certification, typically valid for three years with annual surveillance audits.</p>
                </div>
              </div>
            </div>
            <p>For the broader implementation roadmap that runs parallel to this certification pathway, see our <a href="https://seccomply.net/resources/blog/building-a-pims-iso-27701" className="inline-link">building a PIMS implementation roadmap</a>.</p>
          </section>

          <section id="pitfalls">
            <h2>Five Common Annex B Pitfalls - <em>And How to Avoid Them</em></h2>

            <h3>1. Treating DPAs as a Legal Formality</h3>
            <p>DPAs are live operational documents, not sign-and-file contracts. The processing description, retention periods, sub-processor lists, and security measures in your DPA must reflect reality. Outdated DPAs that do not match your actual processing are a significant audit risk.</p>

            <h3>2. Incomplete Sub-Processor Visibility</h3>
            <p>Many processors underestimate how many sub-processors they actually use. Cloud providers, analytics tools, monitoring platforms, and support ticketing systems may all touch personal data. Conduct a full data flow mapping exercise before finalising your sub-processor register.</p>

            <h3>3. Deletion Without Verification</h3>
            <p>Saying you can delete data is not the same as proving it. Regulators and auditors expect documented deletion procedures, technical evidence of deletion, and confirmation that deletion cascades to backups and sub-processors. Build deletion testing into your compliance calendar.</p>

            <h3>4. Siloed Privacy Teams</h3>
            <p>Annex B controls touch engineering (B.4), legal (B.2, B.5), support (B.7), and operations (B.6). Treating privacy as a legal or compliance function in isolation guarantees gaps. Embed privacy responsibility into engineering team OKRs and product roadmaps.</p>

            <h3>5. Static Obligations Registers</h3>
            <p>Privacy law is not static. US state laws, UK GDPR divergence, India's <a href="https://seccomply.net/resources/blog/dpdp-act-2023-explained" className="inline-link">Digital Personal Data Protection Act</a>, and other frameworks continue to evolve. An obligations register that was accurate two years ago may now be materially incomplete. Review it annually at minimum.</p>
          </section>

          <section id="quick-ref">
            <h2>Quick Reference - <em>Annex B Controls at a Glance</em></h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Control</th><th>Topic</th><th>Primary Owner</th><th>Key Evidence Item</th></tr></thead>
                <tbody>
                  <tr><td>B.2</td><td>Conditions for Collection &amp; Processing</td><td>Legal / DPO</td><td>Signed DPAs &amp; processing register</td></tr>
                  <tr><td>B.3</td><td>Obligations to PII Principals</td><td>DPO / Product</td><td>Touchpoint inventory &amp; comms policy</td></tr>
                  <tr><td>B.4</td><td>Privacy by Design &amp; Default</td><td>Engineering / DPO</td><td>DPIA records &amp; SDLC privacy gate</td></tr>
                  <tr><td>B.5</td><td>Sharing, Transfer &amp; Disclosure</td><td>Legal / Procurement</td><td>Sub-processor register &amp; SCCs</td></tr>
                  <tr><td>B.6</td><td>Access, Correction &amp; Erasure</td><td>Engineering / CS</td><td>Deletion test records &amp; SAR SLA logs</td></tr>
                  <tr><td>B.7</td><td>Complaints &amp; Enquiries</td><td>DPO / Support</td><td>Complaints register &amp; response logs</td></tr>
                  <tr><td>B.8</td><td>Assessment of Obligations</td><td>Legal / Compliance</td><td>Obligations register &amp; review minutes</td></tr>
                </tbody>
              </table>
            </div>
            <p>ISO 27701 Annex B does not ask processors to do the impossible. It asks you to do what good data stewardship already demands: process only what you are authorised to process, document everything, support your clients in meeting their obligations, and build privacy into your products from the start.</p>
            <p>The organisations that will thrive in the next decade of privacy regulation are those that treat processor obligations not as a compliance burden, but as a product quality standard. Annex B certification is increasingly a procurement prerequisite for enterprise clients - getting ahead of it now is a commercial as much as a compliance decision. If you want to see how the controller-side controls map against this, our <a href="https://seccomply.net/resources/blog/iso-27701-annex-a-controls" className="inline-link">Annex A walkthrough</a> covers the parallel set in equivalent depth.</p>
          </section>

          <div className="cta-banner">
            <h3>Ready to Pursue ISO 27701 Annex B Certification?</h3>
            <p>SecComply guides processors from gap assessment through to PIMS certification - DPA architecture, sub-processor management, deletion-cascade design, and audit-ready evidence systems.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free ISO 27701 Consultation →</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" href="https://www.linkedin.com/sharing/share-offsite/?url=https://seccomply.net/resources/blog/iso-27701-annex-b-processor-obligations" target="_blank" rel="noopener">LinkedIn</a>
              <a className="share-btn" href="https://twitter.com/intent/tweet?url=https://seccomply.net/resources/blog/iso-27701-annex-b-processor-obligations&via=seccomply" target="_blank" rel="noopener">X / Twitter</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is ISO 27701 Annex B?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>ISO 27701 Annex B contains the controls that apply specifically to PII processors - organisations that process personal data on behalf of a controller. It mirrors the structure of Annex A but reframes every obligation from the processor's perspective. The seven control areas (B.2 to B.8) cover lawful processing, obligations to individuals, privacy by design, data sharing, subject rights, complaints handling, and ongoing assessment of obligations.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Who is a PII processor under ISO 27701?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>A PII processor is any organisation that processes personal data on behalf of another organisation (the controller) under documented instructions. Typical processors include SaaS vendors, cloud infrastructure providers, payroll bureaus, marketing platforms, analytics services, and B2B data services. Many organisations are both controller and processor, depending on the data flow.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>Can I certify to ISO 27701 without ISO 27001?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>No. ISO 27701 is an extension of ISO 27001 - you cannot certify to 27701 as a standalone standard. Your organisation must have an existing ISO 27001 ISMS in scope before pursuing 27701 certification. If you are starting from scratch, plan for both standards in parallel since the overlapping controls make this more efficient than sequential certification.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the difference between Annex A and Annex B in ISO 27701?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Annex A applies to PII controllers - organisations that determine the purposes and means of processing. Annex B applies to PII processors - organisations that process data on a controller's behalf. The two annexes mirror each other thematically but contain different operational obligations. Many organisations are both, and need to evaluate both annexes against their data flows.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>What is the most common audit finding for processors under Annex B?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Incomplete deletion is consistently one of the most common processor compliance failures. Erasure must propagate beyond the live database to cover log files, backups, replicas, analytics stores, and any sub-processors that received the data. Auditors expect documented deletion procedures, technical evidence that deletion has occurred, and confirmation that deletion cascades downstream.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How long does ISO 27701 certification take for a processor?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>For an organisation with an existing ISO 27001 ISMS in place, ISO 27701 certification typically takes 4–6 months - including gap analysis, PIMS build, internal audit, and the Stage 1/Stage 2 certification audit. For organisations starting without ISO 27001, allow 9–12 months for combined certification. Running both in parallel is generally more efficient than sequential certification.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong>How does Annex B relate to GDPR Article 28?</strong><span className="faq-ch">▾</span></div>
              <div className="faq-a"><p>Annex B operationalises many of the obligations that GDPR Article 28 places on processors - including documented instructions, sub-processor consent, breach notification, and supporting controllers in meeting subject rights. Achieving Annex B certification provides documented, auditable evidence of Article 28 alignment, which is a meaningful differentiator in enterprise sales and reduces regulatory exposure.</p></div>
            </div>
          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#who-for" className="toc-link">Who Is This For?</a></li>
              <li><a href="#why-matters" className="toc-link">Why It Matters</a></li>
              <li><a href="#controller-vs-processor" className="toc-link">Controller vs Processor</a></li>
              <li><a href="#deep-dive" className="toc-link">7 Annex B Controls</a></li>
              <li><a href="#certification" className="toc-link">Certification Pathway</a></li>
              <li><a href="#pitfalls" className="toc-link">5 Common Pitfalls</a></li>
              <li><a href="#quick-ref" className="toc-link">Quick Reference</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📚 ISO 27701 Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27701-explained">ISO 27701 Explained</a></li>
              <li><a href="https://seccomply.net/resources/blog/who-needs-iso-27701">Who Needs ISO 27701?</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-vs-gdpr-vs-dpdp">ISO 27701 vs GDPR vs DPDP</a></li>
              <li><a href="https://seccomply.net/resources/blog/building-a-pims-iso-27701">Building a PIMS</a></li>
              <li><a href="https://seccomply.net/resources/blog/how-to-extend-isms-into-pims">Extending ISMS into PIMS</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-for-data-controllers">For Data Controllers</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-for-data-processors">For Data Processors</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-annex-a-controls">Annex A Walkthrough</a></li>
              <li><a href="https://seccomply.net/resources/blog/iso-27701-annex-b-processor-obligations">▶ Annex B - Processor Controls</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud"><span className="tag">ISO 27701</span><span className="tag">Annex B</span><span className="tag">Data Processor</span><span className="tag">PIMS</span><span className="tag">DPA</span><span className="tag">Sub-Processors</span><span className="tag">Privacy by Design</span><span className="tag">GDPR Article 28</span></div>
          </div>
          <div className="sb-cta">
            <h4>Need ISO 27701 Certification?</h4>
            <p>Gap analysis, PIMS build, evidence collection - handled end to end.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
