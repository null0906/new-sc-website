import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPActIndianBusinesses() {
  useEffect(() => {
    (function () {
      'use strict';
      const bar = document.getElementById('reading-progress');
      window.addEventListener('scroll', () => { const h = document.documentElement.scrollHeight - window.innerHeight; if (bar) bar.style.width = (h > 0 ? Math.min(window.scrollY / h * 100, 100) : 0) + '%'; }, { passive: true });
      const artEl = document.querySelector('.art'); const rtEl = document.getElementById('read-time');
      if (artEl && rtEl) { const words = (artEl.innerText || '').trim().split(/\s+/).length; rtEl.textContent = '📖 ' + Math.max(1, Math.round(words / 220)) + ' min read'; }
      function animateStat(el) { const target = parseFloat(el.dataset.target); const prefix = el.dataset.prefix || ''; const suffix = el.dataset.suffix || ''; const dec = !Number.isInteger(target); const dur = 1800; const t0 = performance.now(); const ease = t => 1 - Math.pow(1 - t, 4); (function frame(now) { const p = Math.min((now - t0) / dur, 1); const v = target * ease(p); el.textContent = prefix + (dec ? v.toFixed(1) : Math.floor(v)) + suffix; if (p < 1) requestAnimationFrame(frame); else el.textContent = prefix + (dec ? target.toFixed(1) : target) + suffix; })(t0); }
      const stats = document.querySelectorAll('.stat-n[data-target]'); if (stats.length) { const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { animateStat(e.target); io.unobserve(e.target); } }); }, { threshold: 0.4 }); stats.forEach(el => io.observe(el)); }
      document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { const t = document.querySelector(a.getAttribute('href')); if (!t) return; e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 24, behavior: 'smooth' }); history.pushState(null, '', a.getAttribute('href')); }); });
      const sections = document.querySelectorAll('section[id]'); const tocLinks = document.querySelectorAll('.toc-link');
      if (sections.length && tocLinks.length) { const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)); }); }, { rootMargin: '-60px 0px -55% 0px', threshold: 0 }); sections.forEach(s => obs.observe(s)); }
      const btt = document.getElementById('btt'); window.addEventListener('scroll', () => { if (btt) btt.classList.toggle('vis', window.scrollY > 600); }, { passive: true });
      const url = encodeURIComponent('https://seccomply.net/resources/blog/dpdp-act-compliance-guide-2026'); const ttl = encodeURIComponent('DPDP Act: What Indian Businesses Need to Know, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/dpdp-act-compliance-guide-2026'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
      function toast(msg) { let t = document.getElementById('sc-toast'); if (!t) { t = document.createElement('div'); t.id = 'sc-toast'; t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgb(var(--accent-rgb) / .4);opacity:0;transition:opacity .3s;pointer-events:none'; document.body.appendChild(t); } t.textContent = msg; t.style.opacity = '1'; clearTimeout(t._tid); t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500); }
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
      document.querySelectorAll('script[type="application/ld+json"]').forEach(s => { try { const d = JSON.parse(s.textContent); const today = new Date().toISOString().split('T')[0]; const fix = obj => { if (!obj || typeof obj !== 'object') return; Object.keys(obj).forEach(k => { if (k === 'dateModified') obj[k] = today; fix(obj[k]); }); }; fix(d); s.textContent = JSON.stringify(d); } catch (_) {} });
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>DPDP Act: What Indian Businesses Need to Know in 2026, SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="India's DPDP Rules were notified in November 2025. Full enforcement is May 2027. A complete guide to the five core obligations, ₹250 Cr penalty schedule, compliance timeline, and your readiness roadmap." />
        <meta name="keywords" content="DPDP Act compliance 2026, Digital Personal Data Protection Act India, DPDP Rules 2025, DPDP penalty schedule, data fiduciary obligations India, DPDP breach notification, Indian data protection law, DPDP compliance guide, Data Protection Board India, DPDP vs GDPR" />
        <meta property="og:title" content="DPDP Act: What Indian Businesses Need to Know" />
        <meta property="og:description" content="DPDP Rules notified November 2025. Full enforcement May 2027. Five core obligations, ₹250 Cr penalty schedule, and your readiness roadmap." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-act-compliance-guide-2026" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/dpdp-act-og.png" />
        <meta property="article:published_time" content="2026-03-18" />
        <meta property="article:author" content="Gauri Khatate" />
        <meta property="article:tag" content="DPDP Act" />
        <meta property="article:tag" content="Data Protection" />
        <meta property="article:tag" content="India Compliance" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-act-compliance-guide-2026" />        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", "headline": "DPDP Act: What Indian Businesses Need to Know", "description": "India's DPDP Rules were notified November 2025. Full enforcement is May 2027. Five core obligations, ₹250 Cr penalty schedule, and your readiness roadmap.", "author": { "@type": "Person", "name": "Gauri Khatate", "jobTitle": "Cybersecurity Analyst", "worksFor": { "@type": "Organization", "name": "SecComply" } }, "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } }, "datePublished": "2026-03-18", "dateModified": "2026-03-18", "mainEntityOfPage": "https://seccomply.net/resources/blog/dpdp-act-compliance-guide-2026", "keywords": "DPDP Act, Digital Personal Data Protection, data fiduciary, breach notification India, DPDP penalty, Data Protection Board India", "articleSection": "Data Privacy & Compliance", "wordCount": 1600, "timeRequired": "PT5M" },
            { "@type": "FAQPage", "mainEntity": [
              { "@type": "Question", "name": "What is the DPDP Act and when does it take effect?", "acceptedAnswer": { "@type": "Answer", "text": "The Digital Personal Data Protection Act, 2023 was signed into law on 11 August 2023. The DPDP Rules 2025 were notified on 14 November 2025, making the law enforceable. Full enforcement, when all compliance obligations become active, is 13 May 2027. The Consent Manager Framework becomes operational from November 2026." } },
              { "@type": "Question", "name": "Who does the DPDP Act apply to?", "acceptedAnswer": { "@type": "Answer", "text": "The DPDP Act applies to any business that collects, stores, processes, shares, or derives value from personal data of Indian residents in digital form. This includes Indian startups, MSMEs, SaaS companies, fintech platforms, healthcare apps, HR software, and outsourcing companies. Crucially, it also applies to foreign businesses offering goods or services to individuals in India, regardless of where servers are located." } },
              { "@type": "Question", "name": "What are the maximum penalties under the DPDP Act?", "acceptedAnswer": { "@type": "Answer", "text": "The DPDP Act has a graduated penalty framework: up to ₹250 crore for inadequate security safeguards leading to a breach; up to ₹200 crore for failure to notify a breach; up to ₹200 crore for non-compliance with children's data obligations; up to ₹150 crore for Significant Data Fiduciary obligations; and up to ₹50 crore for consent or Data Principal rights violations. Penalties are assessed per violation, a single breach can trigger multiple penalties simultaneously." } },
              { "@type": "Question", "name": "What is the breach notification requirement under DPDP?", "acceptedAnswer": { "@type": "Answer", "text": "The DPDP Act has a zero-threshold breach notification requirement. Unlike GDPR which only requires notification above a certain harm threshold, DPDP requires notification of any personal data breach to both the Data Protection Board and affected individuals. Required disclosures include the nature of the breach, its consequences, mitigation steps, and safety guidance. Delays or omissions can attract a fine of up to ₹200 crore." } },
              { "@type": "Question", "name": "What is a Significant Data Fiduciary under DPDP?", "acceptedAnswer": { "@type": "Answer", "text": "Significant Data Fiduciaries (SDFs) are entities processing large volumes of sensitive personal data, likely major platforms, fintech players, and healthcare systems. They face additional obligations beyond standard Data Fiduciaries, including: a resident Data Protection Officer (DPO), annual Data Protection Impact Assessments (DPIAs), independent audits, and enhanced security requirements." } },
              { "@type": "Question", "name": "How can SecComply help with DPDP compliance?", "acceptedAnswer": { "@type": "Answer", "text": "SecComply maps your existing controls, endpoint encryption, access management, breach detection, data retention policies, directly to DPDP obligations and generates audit-ready evidence automatically. Rather than a once-a-year gap assessment, you see your DPDP compliance posture in real time with prioritised actions for any drift. This is how organisations reach the May 2027 deadline with confidence rather than a last-minute scramble." } }
            ]},
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
              { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
              { "@type": "ListItem", "position": 4, "name": "DPDP Act Compliance Guide 2026", "item": "https://seccomply.net/resources/blog/dpdp-act-compliance-guide-2026" }
            ]}
          ]
        }) }} />
      </Head>

      <style jsx global>{`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,var(--accent),var(--accent-light));z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none;transition:color .2s}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .cspm-hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem;display:block !important}
    .cspm-hero-badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;gap:5px;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgb(var(--accent-rgb) / .1);color:var(--cy);border:1px solid rgb(var(--accent-rgb) / .25)}
    .badge-bl{background:rgb(var(--purple-rgb) / .1);color:var(--purple);border:1px solid rgb(var(--purple-rgb) / .25)}
    .badge-gr{background:rgb(var(--green-rgb) / .1);color:var(--gr);border:1px solid rgb(var(--green-rgb) / .25)}
    .badge-am{background:rgb(var(--yellow-rgb) / .1);color:var(--am);border:1px solid rgb(var(--yellow-rgb) / .25)}
    .cspm-hero-h1{font-family:var(--serif);font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:780px;margin-bottom:1.1rem}
    .cspm-hero-h1 em{font-style:italic;color:var(--cy)}
    .cspm-hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .cspm-author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .cspm-author-strip .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-light));display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgb(var(--accent-rgb) / .3)}
    .cspm-author-strip .author-info{flex:1;min-width:0}
    .cspm-author-strip .name{font-weight:700;font-size:.95rem;color:var(--tx);margin-bottom:3px}
    .cspm-author-strip .meta-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.8rem;margin-bottom:2px}
    .cspm-author-strip .date-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.78rem;color:var(--tm)}
    .cspm-author-strip .dot{opacity:.3}
    .img-wrap{border-radius:16px;overflow:hidden;border:1px solid var(--bo);margin-bottom:3rem;line-height:0}
    .img-cap{text-align:center;font-size:.76rem;color:var(--tm);margin-top:.55rem;font-style:italic;line-height:1.5}
    .blog-layout{max-width:1280px;margin:0 auto;padding:0 2rem 5rem;display:grid;grid-template-columns:1fr 285px;gap:3rem;align-items:start}
    .art{min-width:0}
    .toc-box{background:var(--bgc2);border:1px solid var(--bo);border-radius:14px;padding:1.6rem;margin-bottom:3rem}
    .toc-lbl{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:1rem}
    .toc-grid{display:grid;grid-template-columns:1fr 1fr;gap:.35rem 1.5rem}
    .toc-grid a{color:var(--tb);text-decoration:none;font-size:.83rem;padding:.28rem 0;border-bottom:1px solid var(--bs);transition:color .2s;display:flex;align-items:center;gap:6px}
    .toc-grid a::before{content:'';width:4px;height:4px;border-radius:50%;background:var(--cy);opacity:.4;flex-shrink:0}
    .toc-grid a:hover{color:var(--cy)}.toc-grid a:hover::before{opacity:1}
    .art h2{font-family:var(--serif);font-size:1.65rem;font-weight:700;color:var(--tx);margin:3rem 0 1.2rem;line-height:1.3}
    .art h2 em{color:var(--cy);font-style:italic}
    .art h3{font-family:var(--serif);font-size:1.15rem;font-weight:700;color:var(--tx);margin:2rem 0 .7rem}
    .art p{font-size:1rem;line-height:1.85;color:var(--tb);margin-bottom:1.2rem}
    .art p strong{color:var(--tx);font-weight:600}
    .pull-quote{border-left:4px solid var(--cy);padding:1.4rem 2rem;margin:2.5rem 0;background:linear-gradient(135deg,rgb(var(--accent-rgb) / .06),transparent);border-radius:0 12px 12px 0}
    .pull-quote p{font-family:var(--serif);font-size:1.1rem;font-style:italic;color:var(--tx)!important;margin-bottom:.5rem!important;line-height:1.6!important}
    .def-box{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .07),rgb(var(--accent-rgb) / .02));border:1px solid rgb(var(--accent-rgb) / .22);border-radius:14px;padding:1.6rem 2rem;margin:2rem 0}
    .def-lbl{font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--cy);margin-bottom:.6rem}
    .def-box p{font-size:.97rem;color:var(--tx)!important;margin-bottom:0!important;line-height:1.7}
    .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin:2.5rem 0}
    .stat-card{background:var(--bgc);border:1px solid var(--bo);border-radius:14px;padding:1.5rem;text-align:center;position:relative;overflow:hidden}
    .stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--accent),var(--accent-light))}
    .stat-n{font-family:var(--serif);font-size:2.1rem;font-weight:700;color:var(--cy);line-height:1;margin-bottom:.4rem}
    .stat-l{font-size:.75rem;color:var(--tm);line-height:1.4}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-info{background:rgb(var(--purple-rgb) / .07);border:1px solid rgb(var(--purple-rgb) / .2)}
    .co-warn{background:rgb(var(--yellow-rgb) / .06);border:1px solid rgb(var(--yellow-rgb) / .2)}
    .co-danger{background:rgb(var(--red-rgb) / .06);border:1px solid rgb(var(--red-rgb) / .2)}
    .co-key{background:rgb(var(--accent-rgb) / .06);border:1px solid rgb(var(--accent-rgb) / .2)}
    .co-sc{background:rgb(var(--green-rgb) / .05);border:1px solid rgb(var(--green-rgb) / .2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .feat-list{list-style:none;margin:1.5rem 0;display:flex;flex-direction:column;gap:.65rem}
    .feat-list li{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s,background .2s}
    .feat-list li:hover{border-color:var(--bo);background:var(--bgc)}
    .f-num{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,var(--accent),var(--accent-light));display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:2px}
    .f-body strong{display:block;color:var(--tx);font-size:.89rem;margin-bottom:3px}
    .f-body span{font-size:.83rem;color:var(--tm)}
    .role-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .role-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem;transition:border-color .2s}
    .role-card:hover{border-color:var(--bo)}
    .role-icon{font-size:1.4rem;margin-bottom:.5rem}
    .role-card h3{font-size:.92rem;font-weight:700;color:var(--tx);margin-bottom:.4rem}
    .role-card p{font-size:.81rem;color:var(--tm);margin-bottom:0;line-height:1.6}
    .timeline{margin:2rem 0;display:flex;flex-direction:column;gap:0}
    .tl-item{display:flex;gap:1.2rem;padding:.9rem 0;border-bottom:1px solid var(--bs)}
    .tl-item:last-child{border-bottom:none}
    .tl-date{min-width:100px;font-size:.82rem;font-weight:700;color:var(--cy);flex-shrink:0}
    .tl-body{font-size:.84rem;color:var(--tb);line-height:1.6}
    .tl-badge{display:inline-block;padding:.15rem .55rem;border-radius:4px;font-size:.68rem;font-weight:700;margin-left:.5rem}
    .tl-done{background:rgb(var(--green-rgb) / .1);color:var(--gr)}
    .tl-upcoming{background:rgb(var(--yellow-rgb) / .1);color:var(--am)}
    .tl-key{background:rgb(var(--red-rgb) / .1);color:var(--red)}
    .pen-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
    .pen-table th{background:var(--bgc);padding:.8rem 1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .pen-table td{padding:.75rem 1rem;font-size:.84rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .pen-table tr:last-child td{border-bottom:none}
    .pen-table tr:hover td{background:rgb(var(--accent-rgb) / .03)}
    .pen-amt{color:var(--red);font-weight:700}
    .arrow-list{list-style:none;margin:1.2rem 0;display:flex;flex-direction:column;gap:.5rem}
    .arrow-list li{display:flex;align-items:flex-start;gap:.7rem;font-size:.92rem;color:var(--tb);padding:.4rem 0;border-bottom:1px solid var(--bs)}
    .arrow-list li:last-child{border-bottom:none}
    .arrow-list li::before{content:'→';color:var(--cy);font-weight:700;flex-shrink:0;margin-top:1px}
    .faq-section{margin:3rem 0}
    .faq-item{border:1px solid var(--bs);border-radius:12px;margin-bottom:.65rem;overflow:hidden;transition:border-color .2s}
    .faq-item:hover{border-color:var(--bo)}
    .faq-q{padding:1.15rem 1.5rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:1rem;background:var(--bgc2)}
    .faq-q strong{font-size:.92rem;color:var(--tx)}
    .faq-ch{color:var(--cy);font-size:1rem;transition:transform .3s;flex-shrink:0}
    .faq-item.open .faq-ch{transform:rotate(180deg)}
    .faq-a{display:none;padding:1.15rem 1.5rem;border-top:1px solid var(--bs);background:var(--bgc)}
    .faq-item.open .faq-a{display:block}
    .faq-a p{font-size:.89rem!important;margin-bottom:0!important}
    .cta-banner{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--accent-rgb) / .03));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
    .cta-banner h3{font-family:var(--serif);font-size:1.5rem;color:var(--tx);margin-bottom:.7rem}
    .cta-banner p{font-size:.92rem;color:var(--tb);margin-bottom:1.5rem!important;max-width:500px;margin-left:auto;margin-right:auto}
    .cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:1.5rem}
    .btn-p{background:var(--cy);color:#fff;padding:.7rem 1.6rem;border-radius:8px;font-weight:700;font-size:.87rem;text-decoration:none;transition:background .2s,transform .2s;display:inline-block}
    .btn-p:hover{background:var(--cy2);transform:translateY(-2px)}
    .btn-o{border:1px solid var(--bo);color:var(--tb);padding:.7rem 1.6rem;border-radius:8px;font-weight:600;font-size:.87rem;text-decoration:none;transition:all .2s;display:inline-block}
    .btn-o:hover{border-color:var(--cy);color:var(--cy);transform:translateY(-2px)}
    .share-strip{display:flex;align-items:center;gap:.65rem;justify-content:center;flex-wrap:wrap}
    .share-lbl{font-size:.77rem;color:var(--tm)}
    .share-btn{display:flex;align-items:center;gap:5px;padding:.4rem .9rem;border-radius:8px;font-size:.75rem;font-weight:600;cursor:pointer;border:1px solid var(--bo);background:transparent;color:var(--tb);text-decoration:none;transition:all .2s;font-family:var(--sans)}
    .share-btn:hover{border-color:var(--cy);color:var(--cy)}
    .sb{position:sticky;top:24px}
    .sb-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.35rem;margin-bottom:1.1rem}
    .sb-title{font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:.85rem}
    .sb-toc{list-style:none;display:flex;flex-direction:column;gap:.22rem}
    .sb-toc a{display:block;padding:.4rem .65rem;border-radius:8px;color:var(--tm);text-decoration:none;font-size:.79rem;transition:all .2s;border-left:2px solid transparent}
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgb(var(--accent-rgb) / .07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);cursor:default;transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy);background:var(--glow)}
    .sb-cta{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--accent-rgb) / .03));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-family:var(--serif);font-size:.98rem;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgb(var(--accent-rgb) / .4);transition:transform .2s;z-index:50}
    #btt.vis{display:flex}#btt:hover{transform:translateY(-3px)}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:900px){.stats-row{grid-template-columns:repeat(2,1fr)}.role-grid{grid-template-columns:1fr}}
    @media(max-width:768px){.stats-row{grid-template-columns:1fr}.blog-layout{padding:0 1.25rem 3rem}.cspm-hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.cspm-hero-h1{font-size:1.65rem}.cspm-author-strip{flex-direction:column;align-items:flex-start;gap:12px}}
      `}</style>

      <div id="reading-progress"></div>

      <div className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="https://seccomply.net/" itemProp="item"><span itemProp="name">Home</span></a><meta itemProp="position" content="1" /></span>
        <span className="bc-sep">›</span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="https://seccomply.net/resources" itemProp="item"><span itemProp="name">Resources</span></a><meta itemProp="position" content="2" /></span>
        <span className="bc-sep">›</span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="https://seccomply.net/resources/blog" itemProp="item"><span itemProp="name">Blog</span></a><meta itemProp="position" content="3" /></span>
        <span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>DPDP Act Compliance Guide 2026</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">🇮🇳 DPDP Act</span>
          <span className="badge badge-bl">📋 Data Privacy</span>
          <span className="badge badge-am">⚖️ ₹250 Cr Penalties</span>
          <span className="badge badge-gr">✓ May 2027 Deadline</span>
        </div>
        <h1 className="cspm-hero-h1">DPDP Act: What Indian Businesses <em>Need to Know</em></h1>
        <p className="cspm-hero-sub">India's data protection era is no longer a future event, it's a ticking clock. With the DPDP Rules notified in November 2025 and full enforcement landing in May 2027, every business collecting personal data of Indian residents now has a compliance obligation, a deadline, and a fine schedule they need to understand.</p>

        <div className="cspm-author-strip">
          <div className="avatar">GK</div>
          <div className="author-info">
            <div className="name">Gauri Khatate</div>
            <div className="meta-row"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Analyst</span><span className="dot">·</span><span id="read-time">📖 5 min read</span></div>
            <div className="date-row"><span>📅 March 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        {/* SVG */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 420" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="gOr" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--accent)"/><stop offset="100%" stopColor="var(--accent-light)"/></linearGradient>
              <linearGradient id="gGr" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--green)"/><stop offset="100%" stopColor="var(--green)"/></linearGradient>
              <linearGradient id="gRd" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--red)"/><stop offset="100%" stopColor="var(--red)"/></linearGradient>
              <linearGradient id="gAm" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--yellow)"/><stop offset="100%" stopColor="#e09500"/></linearGradient>
              <pattern id="dp" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r=".8" fill="rgb(var(--accent-rgb) / 0.04)"/></pattern>
            </defs>
            <rect width="960" height="420" fill="url(#dp)"/>
            {/* Left: Timeline */}
            <rect x="18" y="18" width="218" height="384" rx="12" fill="var(--bg-secondary)" stroke="rgb(var(--accent-rgb) / 0.15)" strokeWidth="1"/>
            <text x="38" y="46" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">DPDP TIMELINE</text>
            {[
              {date:'Aug 2023',  event:'DPDP Act signed into law',     col:'var(--green)', done:true},
              {date:'Nov 2025',  event:'DPDP Rules 2025 notified',      col:'var(--green)', done:true},
              {date:'NOW →',     event:'Compliance build window',       col:'var(--accent)', done:false},
              {date:'Nov 2026',  event:'Consent Manager operational',   col:'var(--yellow)', done:false},
              {date:'May 2027',  event:'Full enforcement deadline',      col:'var(--red)', done:false},
            ].map(({date,event,col,done},i)=>(
              <g key={i}>
                {i<4 && <line x1="56" y1={84+i*68} x2="56" y2={118+i*68} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray={done?"0":"4,3"}/>}
                <circle cx="56" cy={74+i*68} r="10" fill={done?"rgb(var(--green-rgb) / 0.15)":i===2?"rgb(var(--accent-rgb) / 0.15)":"rgba(255,255,255,0.05)"} stroke={col} strokeWidth="1.5"/>
                <text x="56" y={78+i*68} textAnchor="middle" fill={col} fontSize="9" fontWeight="700" fontFamily="sans-serif">{done?"✓":"○"}</text>
                <text x="76" y={72+i*68} fill="rgba(200,214,229,0.8)" fontSize="9" fontWeight="700" fontFamily="sans-serif">{date}</text>
                <text x="76" y={85+i*68} fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif">{event}</text>
              </g>
            ))}
            <line x1="252" y1="14" x2="252" y2="406" stroke="rgb(var(--accent-rgb) / 0.07)" strokeWidth="1"/>
            {/* Centre: Compliance posture */}
            <text x="480" y="44" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">DPDP Compliance Posture</text>
            <circle cx="480" cy="165" r="62" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="11"/>
            <circle cx="480" cy="165" r="62" fill="none" stroke="url(#gAm)" strokeWidth="11" strokeDasharray="220 390" strokeDashoffset="97" strokeLinecap="round"/>
            <text x="480" y="158" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="700" fontFamily="sans-serif">45%</text>
            <text x="480" y="175" textAnchor="middle" fill="rgb(var(--yellow-rgb) / 0.7)" fontSize="9" fontFamily="sans-serif">Avg Readiness</text>
            <text x="480" y="190" textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="8" fontFamily="sans-serif">18 months to full enforcement</text>
            {[
              {label:'Consent Management',    w:80,  pct:'42%', col:'url(#gAm)'},
              {label:'Data Security',         w:108, pct:'57%', col:'url(#gOr)'},
              {label:'Breach Notification',   w:64,  pct:'34%', col:'url(#gRd)'},
              {label:'Data Retention Rules',  w:72,  pct:'38%', col:'url(#gAm)'},
              {label:'Data Principal Rights', w:56,  pct:'29%', col:'url(#gRd)'},
            ].map(({label,w,pct,col},i)=>(
              <g key={i}>
                <text x="360" y={240+i*24} fill="rgba(200,214,229,0.5)" fontSize="8.5" fontFamily="sans-serif">{label}</text>
                <rect x="490" y={231+i*24} width="128" height="8" rx="4" fill="rgba(255,255,255,0.04)"/>
                <rect x="490" y={231+i*24} width={w} height="8" rx="4" fill={col}/>
                <text x="622" y={239+i*24} fill="rgba(200,214,229,0.55)" fontSize="8" fontWeight="700" fontFamily="sans-serif">{pct}</text>
              </g>
            ))}
            <line x1="648" y1="14" x2="648" y2="406" stroke="rgb(var(--accent-rgb) / 0.07)" strokeWidth="1"/>
            {/* Right: Penalty schedule */}
            <text x="668" y="44" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">PENALTY SCHEDULE</text>
            {[
              {violation:'Inadequate security → breach', amt:'₹250 Cr', c:'var(--red)'},
              {violation:'Failure to notify breach',     amt:'₹200 Cr', c:'var(--red)'},
              {violation:"Children's data violations",   amt:'₹200 Cr', c:'var(--red)'},
              {violation:'SDF obligation failures',      amt:'₹150 Cr', c:'var(--yellow)'},
              {violation:'Consent / rights violations',  amt:'₹50 Cr',  c:'var(--yellow)'},
            ].map(({violation,amt,c},i)=>(
              <g key={i}>
                <rect x="660" y={60+i*62} width="280" height="48" rx="8" fill="var(--bg-secondary)" stroke={`${c}28`} strokeWidth="1"/>
                <rect x="660" y={60+i*62} width="4" height="48" rx="2" fill={c}/>
                <text x="674" y={80+i*62} fill="rgba(200,214,229,0.8)" fontSize="8.5" fontFamily="sans-serif">{violation}</text>
                <text x="674" y={98+i*62} fill={c} fontSize="14" fontWeight="800" fontFamily="sans-serif">{amt}</text>
              </g>
            ))}
            <rect x="660" y="374" width="280" height="30" rx="8" fill="rgb(var(--red-rgb) / 0.06)" stroke="rgb(var(--red-rgb) / 0.2)" strokeWidth="1"/>
            <text x="800" y="393" textAnchor="middle" fill="var(--red)" fontSize="9" fontWeight="700" fontFamily="sans-serif">Penalties are per violation, not per incident</text>
          </svg>
        </div>
        <p className="img-cap">DPDP compliance posture dashboard, timeline to May 2027, average readiness by obligation area, and the full penalty schedule per violation type.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-is">What Is the DPDP Act?</a>
            <a href="#who-applies">Who Does It Apply To?</a>
            <a href="#timeline">Compliance Timeline</a>
            <a href="#five-obligations">Five Core Obligations</a>
            <a href="#penalties">Penalty Schedule</a>
            <a href="#roadmap">Readiness Roadmap</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-prefix="₹" data-target="250" data-suffix=" Cr">₹0 Cr</div><div className="stat-l">max penalty for inadequate security safeguards<br/><span style={{fontSize:'.68rem',opacity:.55}}>DPDP Act, Section 8(5)</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="0" data-suffix="">Zero</div><div className="stat-l">threshold to report a personal data breach<br/><span style={{fontSize:'.68rem',opacity:.55}}>DPDP Act, any breach = report</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="90" data-suffix=" days">0 days</div><div className="stat-l">max time to respond to Data Principal rights requests<br/><span style={{fontSize:'.68rem',opacity:.55}}>DPDP Rules 2025</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="2027" data-suffix="">0</div><div className="stat-l">full enforcement deadline, May 13<br/><span style={{fontSize:'.68rem',opacity:.55}}>Ministry of Electronics &amp; IT</span></div></div>
          </div>

          <section id="what-is">
            <h2>What Is the DPDP Act, and <em>Why Does It Matter Now?</em></h2>
            <p>India had been debating a dedicated data protection law for nearly a decade. The Digital Personal Data Protection Act, 2023 was signed into law on 11 August 2023. It sat quietly for two years while rules were drafted and consulted upon. On 14 November 2025, the <strong>DPDP Rules 2025 were formally notified</strong> by the Ministry of Electronics and Information Technology, turning the law from a document into an enforceable reality.</p>
            <p>What makes it significant isn't just that India now has a law, it's what the law requires. The DPDP Act is grounded in consent, transparency, purpose limitation, and individual rights. It mirrors the spirit of GDPR, with its own structure and some distinctly Indian characteristics. And crucially, it has teeth: fines that go up to <strong>₹250 crore per violation</strong>.</p>
            <div className="callout co-info">
              <span className="co-icon">🌐</span>
              <div className="co-body">
                <strong>Extra-Territorial Reach</strong>
                <p>The DPDP Act doesn't just apply to Indian companies. Any foreign business offering goods or services to individuals in India, and processing their personal data, is covered. This includes SaaS platforms, global HR systems, and e-commerce companies with Indian customers, regardless of where servers are located.</p>
              </div>
            </div>
          </section>

          <section id="who-applies">
            <h2>Who Does It <em>Apply To?</em></h2>
            <p>If your business collects, stores, processes, shares, or derives value from personal data of Indian residents in digital form, you need to comply. This isn't limited to large enterprises, it applies to startups, MSMEs, fintech apps, healthcare platforms, HR software, and outsourcing companies alike.</p>
            <div className="role-grid">
              <div className="role-card anim"><div className="role-icon">🏢</div><h3>Data Fiduciary</h3><p>The entity that determines the purpose and means of processing personal data. This is typically your organisation. You carry the primary compliance responsibility.</p></div>
              <div className="role-card anim"><div className="role-icon">⚙️</div><h3>Data Processor</h3><p>An entity that processes data on behalf of a Data Fiduciary, such as a cloud provider, payroll vendor, or analytics firm. The Fiduciary remains liable for the Processor's compliance.</p></div>
              <div className="role-card anim"><div className="role-icon">👤</div><h3>Data Principal</h3><p>The individual whose personal data is being processed. Under DPDP, they hold rights to access, correct, and erase their data, and raise grievances, all of which you must operationalise.</p></div>
              <div className="role-card anim"><div className="role-icon">🏷️</div><h3>Significant Data Fiduciary (SDF)</h3><p>Entities processing large volumes of sensitive data. SDFs face additional obligations: a resident DPO, annual DPIAs, and independent audits.</p></div>
            </div>
          </section>

          <section id="timeline">
            <h2>The DPDP Timeline: <em>Where We Are and What's Coming</em></h2>
            <div className="timeline">
              <div className="tl-item"><div className="tl-date">Aug 2023</div><div className="tl-body">DPDP Act signed into law by President of India <span className="tl-badge tl-done">Done</span></div></div>
              <div className="tl-item"><div className="tl-date">Nov 13, 2025</div><div className="tl-body">DPDP Rules 2025 notified. Data Protection Board established <span className="tl-badge tl-done">Done</span></div></div>
              <div className="tl-item"><div className="tl-date">Nov 13, 2026</div><div className="tl-body">Consent Manager Framework becomes operational <span className="tl-badge tl-upcoming">Upcoming</span></div></div>
              <div className="tl-item"><div className="tl-date">May 13, 2027</div><div className="tl-body"><strong>Full enforcement deadline, all compliance obligations active</strong> <span className="tl-badge tl-key">Key Date</span></div></div>
            </div>
            <div className="pull-quote"><p>"2026 is a build year. Businesses that use this window to get their consent systems, data inventories, and breach protocols in place will face May 2027 with confidence. Those that don't will face it with a fine."</p></div>
          </section>

          <section id="five-obligations">
            <h2>Five Core Obligations Every Business <em>Must Address</em></h2>
            <ul className="feat-list">
              <li className="anim">
                <div className="f-num">1</div>
                <div className="f-body">
                  <strong>Consent, and It Has to Be Real</strong>
                  <span>Unlike GDPR which offers 'legitimate interests' as a processing ground, the DPDP Act makes consent the primary basis for most processing. Consent must be free, specific, informed, and unambiguous, it cannot be buried in a 47-page privacy policy. Users must have a visible, easy mechanism to withdraw consent, and withdrawal must be as simple as giving it.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">2</div>
                <div className="f-body">
                  <strong>Data Security, The Highest-Stakes Obligation</strong>
                  <span>Section 8(5) requires every Data Fiduciary to implement reasonable security safeguards to prevent personal data breaches. 'Reasonable' is widely expected to align with ISO 27001, NIST, or CERT-In guidelines. This is the provision that carries the largest penalty: up to ₹250 crore. An unencrypted backup, a misconfigured cloud bucket, an unsecured API endpoint, none require malicious intent to attract the maximum fine.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">3</div>
                <div className="f-body">
                  <strong>Breach Notification, Zero Threshold</strong>
                  <span>Unlike breach reporting frameworks in the EU, UK, and Australia, which typically require notification only above a threshold of likely harm, the DPDP Act has no threshold. Any personal data breach must be reported to both the Data Protection Board and affected individuals. Required disclosures include the nature of the breach, consequences, mitigation steps, and safety guidance. Delays carry a fine of up to ₹200 crore.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">4</div>
                <div className="f-body">
                  <strong>Data Retention, Erasure Is Mandatory</strong>
                  <span>Rule 8 requires businesses to erase personal data once the specified purpose is achieved, unless another law requires retention. There's also an inactivity-based deletion requirement: if a user doesn't engage for a defined period, the business must auto-erase data after giving 48 hours' prior notice. This has direct implications for CRM systems, marketing databases, and app user records.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">5</div>
                <div className="f-body">
                  <strong>Data Principal Rights, 90-Day Response Obligation</strong>
                  <span>Users in India now have GDPR-equivalent rights: access to their data, correction of inaccuracies, erasure, and the right to nominate someone to exercise these rights on their behalf. Grievances must be responded to within 90 days. If users exhaust your redressal mechanism without resolution, they can file complaints directly with the Data Protection Board through an online portal.</span>
                </div>
              </li>
            </ul>
            <div className="callout co-danger">
              <span className="co-icon">🚨</span>
              <div className="co-body">
                <strong>Real-World Risk</strong>
                <p>A fintech startup stores sensitive KYC data in plain text on a cloud server with poor access controls. A security researcher flags the vulnerability publicly. No data is stolen, but the Data Protection Board launches an investigation and imposes a penalty for lack of adequate safeguards. Under DPDP, you don't need a breach to face a fine. You just need inadequate security.</p>
              </div>
            </div>
          </section>

          <section id="penalties">
            <h2>The Penalty Schedule: <em>What's at Stake</em></h2>
            <p>The DPDP Act establishes a graduated penalty framework. Crucially, penalties are per violation, not per incident. A single data breach can simultaneously trigger the inadequate security penalty and the failure-to-notify penalty.</p>
            <div style={{overflowX:'auto',margin:'1.5rem 0',borderRadius:'14px',border:'1px solid var(--bo)'}}>
              <table className="pen-table">
                <thead><tr><th>Violation</th><th>Maximum Penalty</th></tr></thead>
                <tbody>
                  <tr><td>Inadequate security safeguards leading to a data breach</td><td className="pen-amt">Up to ₹250 Crore</td></tr>
                  <tr><td>Failure to notify the Board and Data Principals of a breach</td><td className="pen-amt">Up to ₹200 Crore</td></tr>
                  <tr><td>Non-compliance with children's data obligations</td><td className="pen-amt">Up to ₹200 Crore</td></tr>
                  <tr><td>Failure to meet Significant Data Fiduciary obligations (DPO, DPIA, audits)</td><td className="pen-amt">Up to ₹150 Crore</td></tr>
                  <tr><td>Breach of consent obligations, notice requirements, or Data Principal rights</td><td className="pen-amt">Up to ₹50 Crore</td></tr>
                  <tr><td>Data Principal misuse or filing false complaints</td><td style={{color:'var(--am)',fontWeight:600}}>Up to ₹10,000</td></tr>
                </tbody>
              </table>
            </div>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>Important: Cumulative Penalties</strong>
                <p>Penalties are assessed per violation, not per incident. An organisation facing a data breach that also failed to notify could face ₹250 crore + ₹200 crore = ₹450 crore in combined penalties for a single incident. The Data Protection Board has discretion to reduce penalties for swift remediation and demonstrated good faith, but documentation of your compliance actions is your primary defence.</p>
              </div>
            </div>
          </section>

          <section id="roadmap">
            <h2>Your DPDP <em>Readiness Roadmap</em></h2>
            <p>You have until May 2027. That sounds distant but it isn't, building consent infrastructure, completing data inventories, and training teams takes time.</p>
            <ul className="arrow-list">
              <li><strong>Map your data.</strong> Understand what personal data you collect, where it lives, how it flows, and who processes it on your behalf. You cannot manage what you cannot see.</li>
              <li><strong>Audit your consent flows.</strong> Review every touchpoint where personal data is collected, app onboarding, contact forms, marketing sign-ups, and assess whether your notices are DPDP-compliant.</li>
              <li><strong>Assess your security posture</strong> against reasonable safeguard standards (ISO 27001, CERT-In). The ₹250 crore provision is your highest financial risk, treat it accordingly.</li>
              <li><strong>Build a breach response protocol.</strong> Establish who does what in the first 24 hours after a breach is detected. Notification obligations are immediate under DPDP, you cannot improvise.</li>
              <li><strong>Designate a data protection lead.</strong> Even if you're not an SDF, someone needs to own DPDP compliance internally, with resources, authority, and a direct line to the board.</li>
              <li><strong>Operationalise Data Principal rights.</strong> Build workflows for access, correction, erasure, and grievance requests. 90-day response windows require structured processes, not inbox monitoring.</li>
              <li><strong>Review your vendor contracts.</strong> Your Data Processor relationships must include appropriate security provisions under the DPDP Rules. Audit your agreements, especially cloud and HR vendors.</li>
            </ul>
            <div className="callout co-sc">
              <span className="co-icon">🛡️</span>
              <div className="co-body">
                <strong>SecComply: DPDP Compliance Monitoring, Continuous, Not Periodic</strong>
                <p>SecComply maps your existing controls, endpoint encryption, access management, breach detection, data retention policies, directly to DPDP obligations and generates audit-ready evidence automatically. Rather than a once-a-year gap assessment, you see your compliance posture in real time with prioritised actions for any drift. This is how organisations reach May 2027 with confidence rather than a last-minute scramble.</p>
              </div>
            </div>
            <div className="pull-quote"><p>"The DPDP Act isn't just a legal requirement, it's a signal to your customers, partners, and investors that you take data seriously. In India's growing digital economy, compliance is competitive advantage."</p></div>
          </section>

          <div className="cta-banner">
            <h3>DPDP Compliance Doesn't Have to Be Overwhelming</h3>
            <p>SecComply maps your controls continuously against DPDP, ISO 27001, and SOC 2, giving you audit-ready evidence without the manual scramble. See exactly where your gaps are before the May 2027 deadline.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free DPDP Assessment →</a>
              <a href="https://seccomply.net/services/compliance-as-a-service" className="btn-o" target="_blank" rel="noopener">View Compliance Services</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" id="sl" href="#" target="_blank" rel="noopener"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>
              <a className="share-btn" id="st" href="#" target="_blank" rel="noopener"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>X</a>
              <button className="share-btn" onClick={() => window.copyLink && window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div itemScope itemType="https://schema.org/FAQPage">
              {[
                {q:"What is the DPDP Act and when does it take effect?", a:"The Digital Personal Data Protection Act, 2023 was signed into law on 11 August 2023. The DPDP Rules 2025 were notified on 14 November 2025, making the law enforceable. Full enforcement, when all compliance obligations become active, is 13 May 2027. The Consent Manager Framework becomes operational from November 2026."},
                {q:"Who does the DPDP Act apply to?", a:"The DPDP Act applies to any business that collects, stores, processes, shares, or derives value from personal data of Indian residents in digital form. This includes Indian startups, MSMEs, SaaS companies, fintech platforms, healthcare apps, HR software, and outsourcing companies. Crucially, it also applies to foreign businesses offering goods or services to individuals in India, regardless of where servers are located."},
                {q:"What are the maximum penalties under the DPDP Act?", a:"The DPDP Act has a graduated penalty framework: up to ₹250 crore for inadequate security safeguards leading to a breach; up to ₹200 crore for failure to notify a breach; up to ₹200 crore for non-compliance with children's data obligations; up to ₹150 crore for Significant Data Fiduciary obligation failures; and up to ₹50 crore for consent or Data Principal rights violations. Penalties are assessed per violation, a single breach can trigger multiple penalties simultaneously."},
                {q:"What is the breach notification requirement under DPDP?", a:"The DPDP Act has a zero-threshold breach notification requirement. Unlike GDPR which requires notification only above a certain harm threshold, DPDP requires notification of any personal data breach to both the Data Protection Board and affected individuals. Required disclosures include the nature of the breach, its consequences, mitigation steps, and safety guidance. Delays or omissions can attract a fine of up to ₹200 crore."},
                {q:"What is a Significant Data Fiduciary under DPDP?", a:"Significant Data Fiduciaries (SDFs) are entities processing large volumes of sensitive personal data, likely major platforms, fintech players, and healthcare systems. They face additional obligations beyond standard Data Fiduciaries, including: a resident Data Protection Officer (DPO), annual Data Protection Impact Assessments (DPIAs), independent audits, and enhanced security requirements."},
                {q:"How can SecComply help with DPDP compliance?", a:"SecComply maps your existing controls, endpoint encryption, access management, breach detection, data retention policies, directly to DPDP obligations and generates audit-ready evidence automatically. Rather than a once-a-year gap assessment, you see your DPDP compliance posture in real time with prioritised actions for any drift. This is how organisations reach the May 2027 deadline with confidence rather than a last-minute scramble."},
              ].map((f,i)=>(
                <div key={i} className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <div className="faq-q" onClick={(e)=>window.toggleFaq&&window.toggleFaq(e.currentTarget)}><strong itemProp="name">{f.q}</strong><span className="faq-ch">▾</span></div>
                  <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{f.a}</p></div>
                </div>
              ))}
            </div>
          </section>

        </article>

        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#what-is" className="toc-link">What Is the DPDP Act?</a></li>
              <li><a href="#who-applies" className="toc-link">Who Does It Apply To?</a></li>
              <li><a href="#timeline" className="toc-link">Compliance Timeline</a></li>
              <li><a href="#five-obligations" className="toc-link">Five Core Obligations</a></li>
              <li><a href="#penalties" className="toc-link">Penalty Schedule</a></li>
              <li><a href="#roadmap" className="toc-link">Readiness Roadmap</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Services</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/services/compliance-as-a-service" target="_blank">📋 Compliance as a Service</a></li>
              <li><a href="https://seccomply.net/services/iso-27001" target="_blank">🌍 ISO 27001 Consulting</a></li>
              <li><a href="https://seccomply.net/services/ciso" target="_blank">💼 CISO as a Service</a></li>
              <li><a href="https://seccomply.net/services/internal-audit" target="_blank">🔍 Internal Audit</a></li>
              <li><a href="https://seccomply.net/services/cloud-security" target="_blank">☁️ Cloud Security Audit</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">DPDP Act</span><span className="tag">Data Privacy</span><span className="tag">India Compliance</span><span className="tag">Data Fiduciary</span><span className="tag">Breach Notification</span><span className="tag">GDPR</span><span className="tag">ISO 27001</span><span className="tag">Consent Management</span><span className="tag">Data Protection Board</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>May 2027 is Closer Than It Looks</h4>
            <p>Free DPDP gap assessment, we map your controls and tell you exactly where you stand today.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Assessment →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
