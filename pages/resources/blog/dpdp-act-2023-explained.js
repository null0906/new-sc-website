import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPActExplained() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/dpdp-act-2023-explained'); const ttl = encodeURIComponent('DPDP Act 2023 Explained in Plain English, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/dpdp-act-2023-explained'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
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
        <title>DPDP Act 2023 Explained in Plain English | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A no-jargon breakdown of India's Digital Personal Data Protection Act 2023. Who it applies to, your five core obligations, the penalty schedule up to ₹250 crore, and exactly what to do in your first 30 days." />
        <meta name="keywords" content="DPDP Act 2023 India, Digital Personal Data Protection Act, DPDP compliance, DPDP rules 2025, Data Protection Board India, DPDP obligations, DPDP penalty, data fiduciary India, Indian data privacy law, DPDP vs GDPR" />
        <meta property="og:title" content="DPDP Act 2023 Explained in Plain English" />
        <meta property="og:description" content="India's DPDP Act is now enforceable. If your company collects or processes personal data of Indian users, you're inside a legally enforceable privacy framework - with penalties up to ₹250 crore per violation. Here's what it means." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-act-2023-explained" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/dpdp-act-og.png" />
        <meta property="article:published_time" content="2026-03-25" />
        <meta property="article:author" content="SecComply" />
        <meta property="article:tag" content="DPDP Act" />
        <meta property="article:tag" content="Data Privacy" />
        <meta property="article:tag" content="India Compliance" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-act-2023-explained" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", "headline": "DPDP Act 2023 Explained in Plain English", "description": "A no-jargon breakdown of India's Digital Personal Data Protection Act 2023 - who it applies to, five core obligations, the penalty schedule, and your first 30 days action plan.", "author": { "@type": "Organization", "name": "SecComply" }, "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } }, "datePublished": "2026-03-25", "dateModified": "2026-03-25", "mainEntityOfPage": "https://seccomply.net/resources/blog/dpdp-act-2023-explained", "keywords": "DPDP Act 2023, Digital Personal Data Protection, Data Protection Board India, data fiduciary, consent manager, DPDP penalty", "articleSection": "DPDP Act", "wordCount": 1400, "timeRequired": "PT7M" },
            { "@type": "FAQPage", "mainEntity": [
              { "@type": "Question", "name": "Does the DPDP Act apply to B2B companies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If you process personal data of Indian individuals - including your clients' employees or end users - you are in scope. B2B SaaS companies are often Data Processors for their clients' Fiduciary obligations, which comes with its own contractual and operational requirements. There is no B2B exemption in the DPDP Act." } },
              { "@type": "Question", "name": "Is DPDP compliance the same as ISO 27001?", "acceptedAnswer": { "@type": "Answer", "text": "No. ISO 27001 is an information security standard - it addresses how you protect data assets. DPDP is a privacy regulation - it addresses your legal right to process personal data and what rights individuals have over it. There is meaningful overlap (both require security safeguards and incident response) but one does not substitute for the other. Many organisations pursuing ISO 27001 certification also need DPDP compliance, and the two programmes can be run in parallel efficiently." } },
              { "@type": "Question", "name": "What is the Data Protection Board of India?", "acceptedAnswer": { "@type": "Answer", "text": "The Data Protection Board (DPB) is India's data privacy regulator - equivalent to the UK's ICO or France's CNIL. It can receive user complaints, investigate violations, and levy penalties up to ₹250 crore. It operates with the powers of a civil court. The DPB was formally constituted following the notification of the DPDP Rules by MeitY in November 2025." } },
              { "@type": "Question", "name": "What is a Consent Manager under the DPDP Act?", "acceptedAnswer": { "@type": "Answer", "text": "A Consent Manager is a registered intermediary that enables individuals to provide, manage, review, and withdraw consent across multiple platforms through a single interface. This is a uniquely Indian concept with no direct GDPR equivalent. The DPDP Rules require Consent Managers to be registered with the Data Protection Board and to meet specific technical and operational standards." } },
              { "@type": "Question", "name": "What are the maximum penalties under the DPDP Act 2023?", "acceptedAnswer": { "@type": "Answer", "text": "The maximum penalty under the DPDP Act is ₹250 crore for security safeguard failures that lead to a data breach. Failure to notify the Data Protection Board and affected users after a breach carries up to ₹200 crore. Violations of children's data obligations also carry up to ₹200 crore. Importantly, penalties can stack - a single breach incident can simultaneously trigger the security, notification, and children's data categories." } }
            ]},
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
              { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
              { "@type": "ListItem", "position": 4, "name": "DPDP Act 2023 Explained", "item": "https://seccomply.net/resources/blog/dpdp-act-2023-explained" }
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
    .cspm-hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem;display:block!important}
    .cspm-hero-badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;gap:5px;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgb(var(--accent-rgb) / .1);color:var(--cy);border:1px solid rgb(var(--accent-rgb) / .25)}
    .badge-bl{background:rgb(var(--purple-rgb) / .1);color:var(--purple);border:1px solid rgb(var(--purple-rgb) / .25)}
    .badge-gr{background:rgb(var(--green-rgb) / .1);color:var(--gr);border:1px solid rgb(var(--green-rgb) / .25)}
    .badge-am{background:rgb(var(--yellow-rgb) / .1);color:var(--am);border:1px solid rgb(var(--yellow-rgb) / .25)}
    .cspm-hero-h1{font-family:var(--serif);font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
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
    .img-cap{text-align:center;font-size:.76rem;color:var(--tm);margin-top:.55rem;font-style:italic}
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
    .art p{font-size:1rem;line-height:1.85;color:var(--tb);margin-bottom:1.2rem}
    .art p strong{color:var(--tx);font-weight:600}
    .pull-quote{border-left:4px solid var(--cy);padding:1.4rem 2rem;margin:2.5rem 0;background:linear-gradient(135deg,rgb(var(--accent-rgb) / .06),transparent);border-radius:0 12px 12px 0}
    .pull-quote p{font-family:var(--serif);font-size:1.12rem;font-style:italic;color:var(--tx)!important;margin-bottom:.5rem!important;line-height:1.6!important}
    .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:2.5rem 0}
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
    .scope-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .scope-card{border-radius:12px;padding:1.1rem 1.4rem}
    .scope-yes{background:rgb(var(--green-rgb) / .05);border:1px solid rgb(var(--green-rgb) / .2)}
    .scope-no{background:rgb(var(--red-rgb) / .05);border:1px solid rgb(var(--red-rgb) / .18)}
    .scope-card h3{font-size:.8rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.7rem}
    .scope-yes h3{color:var(--green)}
    .scope-no h3{color:var(--red)}
    .scope-card ul{list-style:none;display:flex;flex-direction:column;gap:.35rem}
    .scope-card ul li{font-size:.85rem;color:var(--tb);display:flex;align-items:flex-start;gap:.55rem}
    .scope-yes ul li::before{content:'✓';color:var(--green);font-weight:700;flex-shrink:0}
    .scope-no ul li::before{content:'✗';color:var(--red);font-weight:700;flex-shrink:0}
    .roles-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin:1.5rem 0}
    .role-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem;transition:border-color .2s}
    .role-card:hover{border-color:var(--bo)}
    .role-card .rc-label{font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:.35rem}
    .role-card h3{font-size:.95rem;font-weight:700;color:var(--tx);margin-bottom:.3rem}
    .role-card p{font-size:.82rem;color:var(--tm);margin:0;line-height:1.55}
    .obligations-list{display:flex;flex-direction:column;gap:.8rem;margin:1.5rem 0}
    .ob-item{display:flex;gap:1rem;padding:1.1rem 1.4rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;transition:border-color .2s,background .2s}
    .ob-item:hover{border-color:var(--bo);background:var(--bgc)}
    .ob-num{width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,var(--accent),var(--accent-light));display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;color:#fff;flex-shrink:0;margin-top:2px}
    .ob-body strong{display:block;color:var(--tx);font-size:.92rem;margin-bottom:3px}
    .ob-body span{font-size:.84rem;color:var(--tm);display:block;line-height:1.6}
    .ob-trap{font-size:.76rem;color:var(--red);margin-top:.35rem;display:block}
    .penalty-list{display:flex;flex-direction:column;gap:.6rem;margin:1.5rem 0}
    .pen-item{display:flex;align-items:center;gap:1rem;padding:.9rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s}
    .pen-item:hover{border-color:var(--bo)}
    .pen-amt{font-size:1rem;font-weight:800;color:var(--cy);white-space:nowrap;min-width:90px;font-family:var(--serif)}
    .pen-desc{font-size:.85rem;color:var(--tb)}
    .pen-item.pen-top{border-color:rgb(var(--red-rgb) / .25);background:rgb(var(--red-rgb) / .04)}
    .pen-item.pen-top .pen-amt{color:var(--red)}
    .roadmap-list{display:flex;flex-direction:column;gap:.65rem;margin:1.5rem 0}
    .rm-item{display:flex;gap:1rem;padding:.9rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-left:3px solid var(--cy);border-radius:0 10px 10px 0;transition:border-color .2s}
    .rm-item:hover{border-color:var(--bo)}
    .rm-week{font-size:.7rem;font-weight:800;color:var(--cy);white-space:nowrap;min-width:52px;margin-top:2px}
    .rm-body strong{display:block;color:var(--tx);font-size:.9rem;margin-bottom:2px}
    .rm-body span{font-size:.82rem;color:var(--tm)}
    .cmp-wrap{overflow-x:auto;margin:2rem 0;border-radius:14px;border:1px solid var(--bo)}
    .cmp-table{width:100%;border-collapse:collapse}
    .cmp-table th{background:var(--bgc);padding:.85rem 1.1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .cmp-table td{padding:.82rem 1.1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .cmp-table tr:last-child td{border-bottom:none}
    .cmp-table tr:hover td{background:rgb(var(--accent-rgb) / .03)}
    .cmp-table td:first-child{color:var(--tx);font-weight:600}
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
    @media(max-width:900px){.scope-grid{grid-template-columns:1fr}.roles-grid{grid-template-columns:1fr}.stats-row{grid-template-columns:1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.cspm-hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.cspm-hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}}
      `}</style>

      <div id="reading-progress"></div>

      <div className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="https://seccomply.net/" itemProp="item"><span itemProp="name">Home</span></a><meta itemProp="position" content="1"/></span>
        <span className="bc-sep">›</span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="https://seccomply.net/resources" itemProp="item"><span itemProp="name">Resources</span></a><meta itemProp="position" content="2"/></span>
        <span className="bc-sep">›</span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="https://seccomply.net/resources/blog" itemProp="item"><span itemProp="name">Blog</span></a><meta itemProp="position" content="3"/></span>
        <span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>DPDP Act 2023 Explained</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">🇮🇳 DPDP Act</span>
          <span className="badge badge-bl">🔒 Data Privacy</span>
          <span className="badge badge-am">📖 Plain English Guide</span>
          <span className="badge badge-gr">Founders · CEOs · Operators</span>
        </div>
        <h1 className="cspm-hero-h1">DPDP Act 2023 <em>Explained in Plain English</em></h1>
        <p className="cspm-hero-sub">India finally has a data privacy law that means business. If your company collects, stores, or processes personal data of Indian users, you are now inside a legally enforceable privacy framework - with penalties that can reach ₹250 crore per violation. Here is what it means, who it applies to, and what to do right now.</p>

        <div className="cspm-author-strip">
          <div className="avatar">SC</div>
          <div className="author-info">
            <div className="name">SecComply</div>
            <div className="meta-row"><span style={{color:'var(--cy)',fontWeight:600}}>🏢 SecComply Compliance Team</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
            <div className="date-row"><span>📅 March 2026</span><span className="dot">·</span><span>🇮🇳 India Compliance</span></div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&h=480&fit=crop" alt="India data protection privacy law DPDP Act 2023" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}}/>
        </div>
        <p className="img-cap">India's DPDP Act 2023 - with DPDP Rules notified by MeitY in November 2025 - creates a legally enforceable privacy framework covering 850 million internet users and every company that touches their data.</p>

        {/* SVG DASHBOARD */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 420" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="dg1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--accent)"/><stop offset="100%" stopColor="var(--accent-light)"/></linearGradient>
              <linearGradient id="dg2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--red)"/><stop offset="100%" stopColor="var(--red)"/></linearGradient>
              <linearGradient id="dg3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--green)"/><stop offset="100%" stopColor="var(--green)"/></linearGradient>
              <pattern id="dpat" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgb(var(--accent-rgb) / 0.04)"/></pattern>
            </defs>
            <rect width="960" height="420" fill="url(#dpat)"/>
            <text x="480" y="34" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">DPDP Act 2023 - Key Facts at a Glance</text>

            {/* LEFT: Timeline */}
            <rect x="16" y="50" width="210" height="354" rx="12" fill="var(--bg-secondary)" stroke="rgb(var(--accent-rgb) / 0.15)" strokeWidth="1"/>
            <text x="36" y="74" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">KEY MILESTONES</text>
            {[
              {year:'Aug 2023', event:'Presidential Assent', col:'var(--green)', done:true},
              {year:'Nov 2025', event:'DPDP Rules notified by MeitY', col:'var(--green)', done:true},
              {year:'2026',     event:'DPB fully constituted', col:'var(--accent)', done:false},
              {year:'TBD',      event:'Consent Manager registry', col:'var(--yellow)', done:false},
              {year:'TBD',      event:'Significant Data Fiduciary list', col:'var(--yellow)', done:false},
              {year:'TBD',      event:'Enforcement begins', col:'var(--purple)', done:false},
            ].map(({year,event,col,done},i)=>(
              <g key={i}>
                {i<5 && <line x1="46" y1={112+i*46} x2="46" y2={120+i*46} stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" strokeDasharray={done?"0":"3,3"}/>}
                <circle cx="46" cy={104+i*46} r="10" fill={done?`${col}18`:"rgba(255,255,255,0.03)"} stroke={col} strokeWidth="1.2"/>
                <text x="46" y={108+i*46} textAnchor="middle" fill={col} fontSize="7.5" fontFamily="sans-serif">{done?"✓":"○"}</text>
                <text x="64" y={101+i*46} fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif">{year}</text>
                <text x="64" y={113+i*46} fill={done?"rgba(200,214,229,0.8)":"rgba(200,214,229,0.45)"} fontSize="8.5" fontFamily="sans-serif">{event}</text>
              </g>
            ))}

            <line x1="240" y1="46" x2="240" y2="408" stroke="rgb(var(--accent-rgb) / 0.07)" strokeWidth="1"/>

            {/* CENTRE: Penalty schedule */}
            <text x="490" y="70" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">PENALTY SCHEDULE</text>
            {[
              {violation:'Security safeguard failure → breach',    penalty:'₹250 Cr', col:'var(--red)', w:260},
              {violation:'Failure to notify DPB + users after breach', penalty:'₹200 Cr', col:'var(--red)', w:208},
              {violation:"Violation of children's data obligations",penalty:'₹200 Cr', col:'var(--red)', w:208},
              {violation:'Failure to meet SDF obligations',        penalty:'₹150 Cr', col:'var(--yellow)', w:156},
              {violation:'Failure to honour user rights',          penalty:'₹50 Cr',  col:'var(--accent)', w:52},
            ].map(({violation,penalty,col,w},i)=>(
              <g key={i}>
                <rect x="262" y={82+i*58} width="432" height="44" rx="9" fill="var(--bg-secondary)" stroke={`${col}22`} strokeWidth="1"/>
                <rect x="262" y={82+i*58} width="3" height="44" rx="1.5" fill={col}/>
                <text x="278" y={100+i*58} fill="rgba(200,214,229,0.8)" fontSize="8.5" fontFamily="sans-serif">{violation}</text>
                <rect x="278" y={107+i*58} width={w} height="8" rx="4" fill={`${col}18`}/>
                <rect x="278" y={107+i*58} width={w} height="8" rx="4" fill={col} fillOpacity="0.5"/>
                <text x="678" y={114+i*58} textAnchor="end" fill={col} fontSize="12" fontWeight="800" fontFamily="sans-serif">{penalty}</text>
              </g>
            ))}

            <rect x="262" y="378" width="432" height="24" rx="8" fill="rgb(var(--red-rgb) / 0.07)" stroke="rgb(var(--red-rgb) / 0.2)" strokeWidth="1"/>
            <text x="478" y="394" textAnchor="middle" fill="var(--red)" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">⚠ Penalties can stack - a single breach can trigger multiple categories simultaneously</text>

            <line x1="708" y1="46" x2="708" y2="408" stroke="rgb(var(--accent-rgb) / 0.07)" strokeWidth="1"/>

            {/* RIGHT: 5 obligations */}
            <text x="726" y="70" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">5 CORE OBLIGATIONS</text>
            {[
              {num:'1', ob:'Lawful Basis',        detail:'Consent or legitimate use', col:'var(--accent)'},
              {num:'2', ob:'Notice',               detail:'22 Indian languages required', col:'var(--accent)'},
              {num:'3', ob:'User Rights',          detail:'Access · Correct · Erase · Nominate', col:'var(--yellow)'},
              {num:'4', ob:'Security Safeguards',  detail:'Proportionate to risk - highest penalty', col:'var(--red)'},
              {num:'5', ob:'Breach Notification',  detail:'Notify DPB + users ASAP', col:'var(--red)'},
            ].map(({num,ob,detail,col},i)=>(
              <g key={i}>
                <rect x="718" y={82+i*62} width="226" height="48" rx="9" fill="var(--bg-secondary)" stroke={`${col}22`} strokeWidth="1"/>
                <circle cx="736" cy={106+i*62} r="10" fill={`${col}15`} stroke={col} strokeWidth="1.2"/>
                <text x="736" y={110+i*62} textAnchor="middle" fill={col} fontSize="9" fontWeight="800" fontFamily="sans-serif">{num}</text>
                <text x="754" y={101+i*62} fill="rgba(200,214,229,0.9)" fontSize="10" fontWeight="700" fontFamily="sans-serif">{ob}</text>
                <text x="754" y={116+i*62} fill="rgba(200,214,229,0.4)" fontSize="8" fontFamily="sans-serif">{detail}</text>
              </g>
            ))}
          </svg>
        </div>
        <p className="img-cap">DPDP Act 2023 at a glance - key milestones from Presidential Assent to enforcement, the full penalty schedule up to ₹250 crore, and the five core obligations every Data Fiduciary must satisfy.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-is">What Is the DPDP Act?</a>
            <a href="#who-applies">Who Does It Apply To?</a>
            <a href="#four-terms">4 Terms You Must Know</a>
            <a href="#obligations">Your 5 Core Obligations</a>
            <a href="#penalties">The Penalty Schedule</a>
            <a href="#first-30-days">Your First 30 Days</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-target="850" data-suffix="M">0M</div><div className="stat-l">internet users in India whose personal data is now governed by the DPDP Act<br/><span style={{fontSize:'.68rem',opacity:.55}}>TRAI 2024</span></div></div>
            <div className="stat-card"><div className="stat-n" data-prefix="₹" data-target="250" data-suffix=" Cr">₹0 Cr</div><div className="stat-l">maximum penalty per violation for security safeguard failures leading to a breach<br/><span style={{fontSize:'.68rem',opacity:.55}}>DPDP Act 2023, Schedule</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="22" data-suffix=" languages">0</div><div className="stat-l">Indian languages in which consent notices must be made available<br/><span style={{fontSize:'.68rem',opacity:.55}}>DPDP Act 2023, Section 5</span></div></div>
          </div>

          <section id="what-is">
            <h2>What Is <em>the DPDP Act?</em></h2>
            <p>The DPDP Act is India's first comprehensive, standalone data privacy law. Before it, India relied on Section 43A of the IT Act, 2000 - written before smartphones and cloud computing existed. For a country with 850 million internet users, that was never going to be enough.</p>
            <p>The Act received Presidential assent in August 2023, and the DPDP Rules were notified by MeitY in November 2025. With the Rules in place, the compliance obligations are no longer theoretical - they are enforceable.</p>
            <div className="pull-quote">
              <p>"The Act's core philosophy: personal data belongs to the individual, not the company that collects it. When your user gives you their phone number, they're granting a conditional licence - not ownership."</p>
            </div>
            <div className="callout co-info">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>DPDP vs GDPR - Key Differences</strong>
                <p>DPDP draws from the EU's GDPR but is distinctly Indian. Key differences: a Consent Manager infrastructure with no GDPR equivalent, an 18-year threshold for children's data (vs 16 in GDPR), the Data Protection Board of India as the regulator (vs national DPAs in Europe), and a penalty structure denominated in crore rather than percentage of global turnover.</p>
              </div>
            </div>
          </section>

          <section id="who-applies">
            <h2>Who Does <em>It Apply To?</em></h2>
            <p>Any entity - Indian or foreign - that processes digital personal data of individuals located within India. It doesn't matter where your company is registered or where your servers sit. If you process personal data of Indian users, you are in scope.</p>
            <div className="scope-grid">
              <div className="scope-card scope-yes anim">
                <h3>✓ In Scope</h3>
                <ul>
                  <li>Indian startup collecting any user data</li>
                  <li>Foreign SaaS with Indian users</li>
                  <li>B2B company processing client employee data</li>
                  <li>5-person startup - no size threshold</li>
                  <li>App collecting name, email, or phone</li>
                </ul>
              </div>
              <div className="scope-card scope-no anim">
                <h3>✗ Out of Scope</h3>
                <ul>
                  <li>Processing only anonymised data</li>
                  <li>Personal data processed for personal or domestic purposes</li>
                  <li>Data of non-Indian users (different rules apply)</li>
                </ul>
              </div>
            </div>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>There Is No Size Threshold</strong>
                <p>Unlike some regulations that exempt small businesses, the DPDP Act has no minimum size or turnover threshold. A 5-person startup collecting user emails for a newsletter is a Data Fiduciary with the same core obligations as a large enterprise. The scale of penalties may differ, but the obligations do not.</p>
              </div>
            </div>
          </section>

          <section id="four-terms">
            <h2>Four Terms <em>You Must Know</em></h2>
            <p>Before you can understand your obligations, you need to know which role you play. The DPDP Act defines four key parties - and your responsibilities depend entirely on which one you are.</p>
            <div className="roles-grid">
              <div className="role-card anim">
                <div className="rc-label">Role 1</div>
                <h3>Data Principal</h3>
                <p>The individual whose personal data is being collected or processed. Your app user, your website visitor, your customer. They are the rights-holder under the Act - with rights to access, correction, erasure, and grievance redressal.</p>
              </div>
              <div className="role-card anim">
                <div className="rc-label">Role 2</div>
                <h3>Data Fiduciary</h3>
                <p>The entity that decides what personal data to collect, why, and how it is processed. Your company. As a Fiduciary you carry the primary compliance obligations - lawful basis, notice, security safeguards, and breach notification.</p>
              </div>
              <div className="role-card anim">
                <div className="rc-label">Role 3</div>
                <h3>Data Processor</h3>
                <p>A third party that processes personal data on your behalf - AWS, your CRM, your analytics tool. Processors carry contractual obligations from Fiduciaries but do not independently determine the purpose of processing.</p>
              </div>
              <div className="role-card anim">
                <div className="rc-label">Role 4 - India-Specific</div>
                <h3>Consent Manager</h3>
                <p>A registered intermediary that enables individuals to provide, manage, review, and withdraw consent across multiple platforms through a single interface. No direct GDPR equivalent. Consent Managers must be registered with the Data Protection Board.</p>
              </div>
            </div>

            {/* Inline image */}
            <div className="img-wrap" style={{marginTop:'1.5rem'}}>
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000&h=360&fit=crop" alt="India legal compliance data protection" style={{width:'100%',display:'block',maxHeight:'320px',objectFit:'cover'}}/>
            </div>
            <p className="img-cap">The DPDP Act creates a structured relationship between Data Principals (users), Data Fiduciaries (your company), Data Processors (your vendors), and the new Consent Manager infrastructure unique to India.</p>
          </section>

          <section id="obligations">
            <h2>Your Five <em>Core Obligations</em></h2>
            <p>As a Data Fiduciary, these are the five obligations you must satisfy. Each one has a specific failure mode - the trap that catches most organisations who don't plan for it.</p>
            <div className="obligations-list">
              {[
                {num:'1', title:'Lawful Basis', body:'You must have a valid lawful basis before any processing begins. Under DPDP, the primary basis is consent - freely given, specific, informed, and unambiguous. Consent must be obtained through a clear affirmative action, not pre-ticked boxes or silence.', trap:'No lawful basis = no processing. Pre-ticked consent boxes are explicitly prohibited.'},
                {num:'2', title:'Notice', body:'You must provide a clear, plain-language notice explaining what data you collect, why, and how individuals can exercise their rights. The notice must be made available in all 22 scheduled Indian languages - not just English.', trap:'English-only notices are non-compliant. This is one of the most commonly missed requirements.'},
                {num:'3', title:'User Rights', body:'Data Principals have five rights: the right to access their data, the right to correction, the right to erasure, the right to raise a grievance, and the right to nominate someone to exercise rights on their behalf after death. You must build workflows for all five.', trap:'Having a privacy policy without an operational mechanism to respond to rights requests is non-compliant.'},
                {num:'4', title:'Security Safeguards', body:'You must implement reasonable technical and organisational safeguards proportionate to the sensitivity of the data you process. This is the obligation with the highest penalty - ₹250 crore for failures that lead to a breach. Reasonable will be assessed by the Data Protection Board based on what was practicable given your risk profile.', trap:'Highest penalty under the Act. Having a firewall is not a defence if proportionate safeguards were not implemented.'},
                {num:'5', title:'Breach Notification', body:'You must notify the Data Protection Board and affected Data Principals as soon as practicable after becoming aware of a breach. There is no fixed timeline in the Act itself - the DPDP Rules specify the notification requirements. Concealing or delaying notification is a separate violation.', trap:'No hiding it, no delaying it. The notification obligation exists regardless of whether the breach was your fault.'},
              ].map(({num,title,body,trap},i)=>(
                <div key={i} className="ob-item anim">
                  <div className="ob-num">{num}</div>
                  <div className="ob-body">
                    <strong>{title}</strong>
                    <span>{body}</span>
                    <span className="ob-trap">⚠ The Trap: {trap}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="penalties">
            <h2>The <em>Penalty Schedule</em></h2>
            <p>The DPDP Act's penalties are structured by violation type - and critically, they can stack. A single breach incident can simultaneously trigger the security safeguards category, the breach notification category, and if any children's data was involved, the children's data category.</p>
            <div className="penalty-list">
              <div className="pen-item pen-top anim"><div className="pen-amt">₹250 Cr</div><div className="pen-desc">Security safeguard failure leading to a personal data breach</div></div>
              <div className="pen-item pen-top anim"><div className="pen-amt">₹200 Cr</div><div className="pen-desc">Failure to notify the Data Protection Board and affected users after a breach</div></div>
              <div className="pen-item pen-top anim"><div className="pen-amt">₹200 Cr</div><div className="pen-desc">Violation of children's data obligations (processing without parental consent, behavioural tracking of minors)</div></div>
              <div className="pen-item anim"><div className="pen-amt">₹150 Cr</div><div className="pen-desc">Failure to meet Significant Data Fiduciary (SDF) obligations - additional requirements for high-risk Fiduciaries</div></div>
              <div className="pen-item anim"><div className="pen-amt">₹50 Cr</div><div className="pen-desc">Failure to honour Data Principal rights (access, correction, erasure, grievance, nomination)</div></div>
            </div>
            <div className="callout co-danger">
              <span className="co-icon">🚨</span>
              <div className="co-body">
                <strong>Penalties Stack</strong>
                <p>A single breach incident that involves children's data and is not notified on time could simultaneously attract ₹250 Cr (security), ₹200 Cr (notification), and ₹200 Cr (children's data) - a theoretical maximum of ₹650 Cr from one event. The Data Protection Board has discretion on the actual penalty amount, but the stacking mechanism is explicit in the Act.</p>
              </div>
            </div>
          </section>

          <section id="first-30-days">
            <h2>Your First <em>30 Days</em></h2>
            <p>You don't need to build a complete DPDP compliance programme overnight. But you do need to start moving - and the order matters. Here is the right sequence:</p>
            <div className="roadmap-list">
              {[
                {week:'Week 1', title:'Assign a Privacy Owner', why:'Nothing moves without accountability. This person owns the programme, not just the policy document. For smaller organisations this is often the CISO, COO, or a senior founder.'},
                {week:'Wk 1–2', title:'Run a data inventory', why:'Map every type of personal data you collect, where it is stored, who has access, and what it is used for. This is the foundation of your entire DPDP programme - you cannot satisfy any obligation without knowing what data you hold.'},
                {week:'Wk 2–3', title:'Audit and fix your consent flows', why:'Pre-ticked boxes, bundled consent, and vague consent notices are the most common gap right now. Audit every form, checkout, sign-up, and marketing opt-in. Fix consent collection before anything else - it is the most visible obligation to regulators and users.'},
                {week:'Wk 3–4', title:'Begin vendor DPA review', why:'Every vendor that processes personal data on your behalf needs a Data Processing Agreement. Start with your highest-risk vendors (cloud infrastructure, CRM, analytics, payroll). This takes longest - begin early.'},
              ].map(({week,title,why},i)=>(
                <div key={i} className="rm-item anim">
                  <div className="rm-week">{week}</div>
                  <div className="rm-body"><strong>{title}</strong><span>{why}</span></div>
                </div>
              ))}
            </div>

            <div className="callout co-sc">
              <span className="co-icon">🛡️</span>
              <div className="co-body">
                <strong>SecComply: DPDP Compliance Made Practical</strong>
                <p>SecComply helps Indian startups and enterprises build DPDP-compliant programmes from scratch - data inventory, consent flow audit, privacy notices in all required languages, vendor DPAs, and Data Protection Board readiness. We run DPDP programmes in parallel with ISO 27001 and SOC 2 to maximise efficiency across your compliance investment.</p>
              </div>
            </div>
          </section>

          <div className="cta-banner">
            <h3>Get DPDP-Ready Before the DPB Comes Knocking</h3>
            <p>SecComply maps your current data practices against DPDP obligations, identifies gaps, and builds your compliance programme - data inventory, consent flows, vendor DPAs, and breach response all included.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free DPDP Assessment →</a>
              <a href="https://seccomply.net/services/compliance-as-a-service" className="btn-o" target="_blank" rel="noopener">View Compliance Services</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" id="sl" href="#" target="_blank" rel="noopener"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>
              <a className="share-btn" id="st" href="#" target="_blank" rel="noopener"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>X</a>
              <button className="share-btn" onClick={()=>window.copyLink&&window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div itemScope itemType="https://schema.org/FAQPage">
              {[
                {q:"Does the DPDP Act apply to B2B companies?", a:"Yes. If you process personal data of Indian individuals - including your clients' employees or end users - you are in scope. B2B SaaS companies are often Data Processors for their clients' Fiduciary obligations, which comes with its own contractual and operational requirements. There is no B2B exemption in the DPDP Act."},
                {q:"Is DPDP compliance the same as ISO 27001?", a:"No. ISO 27001 is an information security standard - it addresses how you protect data assets. DPDP is a privacy regulation - it addresses your legal right to process personal data and what rights individuals have over it. There is meaningful overlap but one does not substitute for the other. Many organisations run both programmes in parallel efficiently."},
                {q:"What is the Data Protection Board of India?", a:"The Data Protection Board (DPB) is India's data privacy regulator - equivalent to the UK's ICO or France's CNIL. It can receive user complaints, investigate violations, and levy penalties up to ₹250 crore. It operates with the powers of a civil court and was formally constituted following the notification of the DPDP Rules in November 2025."},
                {q:"What is a Consent Manager under the DPDP Act?", a:"A Consent Manager is a registered intermediary that enables individuals to provide, manage, review, and withdraw consent across multiple platforms through a single interface. This is a uniquely Indian concept with no direct GDPR equivalent. Consent Managers must be registered with the Data Protection Board and meet specific technical and operational standards under the DPDP Rules."},
                {q:"What are the maximum penalties under the DPDP Act 2023?", a:"The maximum penalty is ₹250 crore for security safeguard failures that lead to a data breach. Failure to notify the Data Protection Board and affected users carries up to ₹200 crore. Violations of children's data obligations also carry up to ₹200 crore. Penalties can stack - a single breach incident can simultaneously trigger the security, notification, and children's data categories."},
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
              <li><a href="#four-terms" className="toc-link">4 Terms You Must Know</a></li>
              <li><a href="#obligations" className="toc-link">5 Core Obligations</a></li>
              <li><a href="#penalties" className="toc-link">Penalty Schedule</a></li>
              <li><a href="#first-30-days" className="toc-link">Your First 30 Days</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Services</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/services/compliance-as-a-service" target="_blank">📋 Compliance as a Service</a></li>
              <li><a href="https://seccomply.net/services/iso-27001" target="_blank">🌍 ISO 27001 Consulting</a></li>
              <li><a href="https://seccomply.net/services/soc-2" target="_blank">🛡️ SOC 2 Readiness</a></li>
              <li><a href="https://seccomply.net/services/ciso" target="_blank">💼 CISO as a Service</a></li>
              <li><a href="https://seccomply.net/services/internal-audit" target="_blank">🔍 Internal Audit</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">DPDP Act</span><span className="tag">Data Privacy</span><span className="tag">India Compliance</span><span className="tag">Data Fiduciary</span><span className="tag">Consent Manager</span><span className="tag">DPB India</span><span className="tag">GDPR India</span><span className="tag">Data Protection</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>DPDP Ready?</h4>
            <p>Free assessment - we map your data practices against DPDP obligations and find the gaps.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Assessment →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}