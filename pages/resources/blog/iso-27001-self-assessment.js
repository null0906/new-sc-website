import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001SelfAssessment() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/iso-27001-self-assessment'); const ttl = encodeURIComponent('Does ISO 27001 Apply to Your Business? A Self-Assessment Guide, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/iso-27001-self-assessment'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
      function toast(msg) { let t = document.getElementById('sc-toast'); if (!t) { t = document.createElement('div'); t.id = 'sc-toast'; t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:#E8632B;color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgba(232,99,43,.4);opacity:0;transition:opacity .3s;pointer-events:none'; document.body.appendChild(t); } t.textContent = msg; t.style.opacity = '1'; clearTimeout(t._tid); t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500); }
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
      document.querySelectorAll('script[type="application/ld+json"]').forEach(s => { try { const d = JSON.parse(s.textContent); const today = new Date().toISOString().split('T')[0]; const fix = obj => { if (!obj || typeof obj !== 'object') return; Object.keys(obj).forEach(k => { if (k === 'dateModified') obj[k] = today; fix(obj[k]); }); }; fix(d); s.textContent = JSON.stringify(d); } catch (_) {} });
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Does ISO 27001 Apply to Your Business? A Self-Assessment Guide | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="Work through 6 triggers to decide whether ISO 27001 applies to your organisation right now - enterprise customers, international expansion, sensitive data, investor due diligence, DPDP Act, and prior incidents. Includes a scoring guide and what to do next." />
        <meta name="keywords" content="does ISO 27001 apply my business, ISO 27001 self assessment, do I need ISO 27001, ISO 27001 startup decision, ISO 27001 requirements India, ISO 27001 triggers, when to pursue ISO 27001, ISO 27001 checklist, ISO 27001 vs SOC 2 decision, ISO 27001 applicability" />
        <meta property="og:title" content="Does ISO 27001 Apply to Your Business? A Self-Assessment Guide" />
        <meta property="og:description" content="ISO 27001 keeps coming up - in security questionnaires, investor due diligence, enterprise procurement checklists. Work through these 6 triggers to find out whether you need it right now." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-self-assessment" />
        <meta property="article:published_time" content="2026-04-01" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <meta property="article:tag" content="Self-Assessment" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-self-assessment" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Does ISO 27001 Apply to Your Business? A Self-Assessment Guide",
              "description": "6 triggers to decide whether ISO 27001 certification applies to your organisation - with a scoring guide and recommended next steps.",
              "author": { "@type": "Person", "name": "Soham Sawant", "jobTitle": "Cybersecurity Expert & Technical Writer", "worksFor": { "@type": "Organization", "name": "SecComply" } },
              "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } },
              "datePublished": "2026-04-01", "dateModified": "2026-04-01",
              "mainEntityOfPage": "https://seccomply.net/resources/blog/iso-27001-self-assessment",
              "keywords": "ISO 27001 self-assessment, ISO 27001 applicability, startup compliance, certification decision, DPDP, investor due diligence",
              "articleSection": "ISO 27001", "wordCount": 2200, "timeRequired": "PT10M"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Is there a minimum company size for ISO 27001?", "acceptedAnswer": { "@type": "Answer", "text": "No. ISO 27001 has no minimum company size, revenue threshold, or employee count. A 5-person startup collecting user data has the same core obligation considerations as a large enterprise. The standard scales to organisational size - the scope and number of applicable controls will differ, but the framework applies regardless of scale." } },
                { "@type": "Question", "name": "How is ISO 27001 different from a penetration test?", "acceptedAnswer": { "@type": "Answer", "text": "A penetration test is a point-in-time technical assessment that identifies vulnerabilities in your systems. ISO 27001 is a continuous management system that governs how you identify, manage, and respond to information security risks - including ensuring regular penetration testing is part of your programme. A penetration test is one control that ISO 27001 may require; it is not an alternative to the standard." } },
                { "@type": "Question", "name": "Can we self-certify against ISO 27001?", "acceptedAnswer": { "@type": "Answer", "text": "No. ISO 27001 certification requires an independent audit by an accredited certification body. You can self-assess against the standard (which is what this guide is designed for), but the certification mark requires a third-party audit. Working with a compliance partner for implementation and then engaging a separate accredited certification body for the audit is the standard approach." } },
                { "@type": "Question", "name": "Does ISO 27001 certification expire?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001 certificates are valid for three years, with annual surveillance audits in years one and two to verify continued compliance. At the end of three years, a full recertification audit is required. Surveillance audits are typically 30–40% of the cost and duration of the initial certification audit." } },
                { "@type": "Question", "name": "What is the difference between ISO 27001 and ISO 27701?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001 is an information security management standard governing how your organisation manages security risks. ISO 27701 is a privacy extension to ISO 27001 that adds privacy-specific controls for processing Personally Identifiable Information. Both standards can be implemented and audited simultaneously if you need both information security certification and a demonstrated privacy management programme for GDPR or DPDP Act compliance." } }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
                { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
                { "@type": "ListItem", "position": 4, "name": "ISO 27001 Self-Assessment", "item": "https://seccomply.net/resources/blog/iso-27001-self-assessment" }
              ]
            }
          ]
        }) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#E8632B;--cy2:#d0521f;--glow:rgba(232,99,43,.12);--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(232,99,43,.2);--bs:rgba(255,255,255,.06);--red:#ff4d6d;--am:#ffb703;--gr:#06d6a0;--serif:'Inter',sans-serif;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#E8632B,#FF8A50);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none;transition:color .2s}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .cspm-hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem;display:block!important}
    .cspm-hero-badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;gap:5px;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(232,99,43,.1);color:var(--cy);border:1px solid rgba(232,99,43,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
    .badge-am{background:rgba(255,183,3,.1);color:var(--am);border:1px solid rgba(255,183,3,.25)}
    .cspm-hero-h1{font-family:var(--serif);font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .cspm-hero-h1 em{font-style:italic;color:var(--cy)}
    .cspm-hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .cspm-author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .cspm-author-strip .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#E8632B,#FF8A50);display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(232,99,43,.3)}
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
    .pull-quote{border-left:4px solid var(--cy);padding:1.4rem 2rem;margin:2.5rem 0;background:linear-gradient(135deg,rgba(232,99,43,.06),transparent);border-radius:0 12px 12px 0}
    .pull-quote p{font-family:var(--serif);font-size:1.12rem;font-style:italic;color:var(--tx)!important;margin-bottom:.5rem!important;line-height:1.6!important}
    .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:2.5rem 0}
    .stat-card{background:var(--bgc);border:1px solid var(--bo);border-radius:14px;padding:1.5rem;text-align:center;position:relative;overflow:hidden}
    .stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#E8632B,#FF8A50)}
    .stat-n{font-family:var(--serif);font-size:2.1rem;font-weight:700;color:var(--cy);line-height:1;margin-bottom:.4rem}
    .stat-l{font-size:.75rem;color:var(--tm);line-height:1.4}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-danger{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .co-key{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
    .co-sc{background:rgba(6,214,160,.05);border:1px solid rgba(6,214,160,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .trigger-header{display:flex;align-items:center;gap:.8rem;margin:3rem 0 1rem;padding:.6rem 1.2rem;background:rgba(6,214,160,.05);border:1px solid rgba(6,214,160,.2);border-radius:10px}
    .trigger-label{font-size:.68rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--gr)}
    .score-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .score-card{border-radius:12px;padding:1.2rem 1.4rem}
    .sc-0{background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08)}
    .sc-1{background:rgba(255,183,3,.05);border:1px solid rgba(255,183,3,.2)}
    .sc-2{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
    .sc-3{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .score-card .sc-range{font-size:1.3rem;font-weight:800;font-family:var(--serif);margin-bottom:.3rem}
    .sc-0 .sc-range{color:var(--tm)}
    .sc-1 .sc-range{color:var(--am)}
    .sc-2 .sc-range{color:var(--cy)}
    .sc-3 .sc-range{color:var(--red)}
    .score-card h3{font-size:.88rem;font-weight:700;color:var(--tx);margin-bottom:.3rem}
    .score-card p{font-size:.8rem;color:var(--tm);margin:0;line-height:1.55}
    .score-card .sc-time{font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-top:.5rem;padding:.15rem .55rem;border-radius:4px;display:inline-block}
    .sc-0 .sc-time{background:rgba(255,255,255,.06);color:var(--tm)}
    .sc-1 .sc-time{background:rgba(255,183,3,.12);color:var(--am)}
    .sc-2 .sc-time{background:rgba(232,99,43,.12);color:var(--cy)}
    .sc-3 .sc-time{background:rgba(255,77,109,.12);color:var(--red)}
    .data-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .data-table{width:100%;border-collapse:collapse}
    .data-table th{background:var(--bgc);padding:.8rem 1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .data-table td{padding:.75rem 1rem;font-size:.84rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .data-table tr:last-child td{border-bottom:none}
    .data-table tr:hover td{background:rgba(232,99,43,.03)}
    .data-table td:first-child{color:var(--tx);font-weight:600}
    .sig-strong{color:#ff4d6d;font-weight:700}
    .sig-mod{color:#ffb703;font-weight:600}
    .sig-low{color:var(--tm)}
    .phase-list{display:flex;flex-direction:column;gap:.65rem;margin:1.5rem 0;position:relative;padding-left:2rem}
    .phase-list::before{content:'';position:absolute;left:7px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#E8632B,rgba(232,99,43,.1))}
    .phase-item{position:relative;padding:.9rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s}
    .phase-item:hover{border-color:var(--bo)}
    .phase-item::before{content:'';position:absolute;left:-1.75rem;top:14px;width:10px;height:10px;border-radius:50%;background:var(--cy);border:2px solid var(--bg);box-shadow:0 0 0 2px var(--cy)}
    .phase-num{font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--cy);margin-bottom:.2rem}
    .phase-dur{display:inline-block;background:rgba(232,99,43,.1);color:var(--cy);font-size:.68rem;font-weight:700;padding:.1rem .5rem;border-radius:4px;margin-bottom:.3rem}
    .phase-item strong{display:block;color:var(--tx);font-size:.9rem;margin-bottom:.25rem}
    .phase-item p{font-size:.83rem;color:var(--tm);margin:0;line-height:1.6}
    .mistake-item{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:rgba(255,77,109,.04);border:1px solid rgba(255,77,109,.15);border-radius:10px;margin-bottom:.65rem;transition:border-color .2s}
    .mistake-item:hover{border-color:rgba(255,77,109,.3)}
    .mi-x{font-size:1rem;color:#ff4d6d;flex-shrink:0;margin-top:2px}
    .mi-body strong{display:block;color:var(--tx);font-size:.9rem;margin-bottom:.25rem}
    .mi-body span{font-size:.83rem;color:var(--tm)}
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
    .cta-banner{background:linear-gradient(135deg,rgba(232,99,43,.08),rgba(232,99,43,.03));border:1px solid rgba(232,99,43,.25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
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
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgba(232,99,43,.07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);cursor:default;transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy);background:var(--glow)}
    .sb-cta{background:linear-gradient(135deg,rgba(232,99,43,.08),rgba(232,99,43,.03));border:1px solid rgba(232,99,43,.25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-family:var(--serif);font-size:.98rem;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(232,99,43,.4);transition:transform .2s;z-index:50}
    #btt.vis{display:flex}#btt:hover{transform:translateY(-3px)}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:900px){.score-grid{grid-template-columns:1fr}.stats-row{grid-template-columns:1fr}}
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
        <span style={{color:'var(--tb)'}}>ISO 27001 Self-Assessment</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">🌍 ISO 27001</span>
          <span className="badge badge-gr">✅ Self-Assessment</span>
          <span className="badge badge-am">🚀 Startup Guide</span>
          <span className="badge badge-bl">Founders · CTOs · Legal</span>
        </div>
        <h1 className="cspm-hero-h1">Does ISO 27001 Apply to <em>Your Business?</em> A Self-Assessment Guide</h1>
        <p className="cspm-hero-sub">ISO 27001 keeps coming up - in security questionnaires, investor due diligence, enterprise procurement checklists. But the question most founders actually have is simpler: do we need it? Work through these 6 triggers to find out, and get a clear recommendation on what to do next.</p>

        <div className="cspm-author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="name">Soham Sawant</div>
            <div className="meta-row"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 10 min read</span></div>
            <div className="date-row"><span>📅 April 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=480&fit=crop" alt="ISO 27001 self-assessment business compliance decision" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}}/>
        </div>
        <p className="img-cap">Most founders encounter ISO 27001 for the first time in a security questionnaire. This self-assessment gives you a structured answer to the question behind every one of those questionnaires: should your organisation be pursuing this right now?</p>

        {/* SVG DASHBOARD */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 380" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <pattern id="apat" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(232,99,43,0.04)"/></pattern>
            </defs>
            <rect width="960" height="380" fill="url(#apat)"/>
            <text x="480" y="30" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">ISO 27001 Self-Assessment - 6 Triggers at a Glance</text>

            {/* 6 trigger cards */}
            {[
              {n:'1', title:'Enterprise Customers', detail:'Asking for it in procurement', icon:'🏢', col:'#ff4d6d', x:30,  y:50},
              {n:'2', title:'International Markets', detail:'Europe, ME, Japan, Singapore', icon:'🌍', col:'#E8632B', x:340, y:50},
              {n:'3', title:'Sensitive Data',        detail:'Financial, health, government', icon:'🔒', col:'#ffb703', x:650, y:50},
              {n:'4', title:'Investor Due Diligence',detail:'Series A/B security review',   icon:'💰', col:'#818cf8', x:30,  y:188},
              {n:'5', title:'DPDP Act Compliance',  detail:'Indian data privacy law',       icon:'🇮🇳', col:'#E8632B', x:340, y:188},
              {n:'6', title:'Prior Security Incident',detail:'Breach, ransomware, finding', icon:'🚨', col:'#ff4d6d', x:650, y:188},
            ].map(({n, title, detail, icon, col, x, y}) => (
              <g key={n}>
                <rect x={x} y={y} width="272" height="112" rx="12" fill="#091826" stroke={`${col}28`} strokeWidth="1.5"/>
                <rect x={x} y={y} width="272" height="3" rx="1.5" fill={col}/>
                <text x={x+20} y={y+28} fill={col} fontSize="11" fontWeight="800" fontFamily="sans-serif">TRIGGER {n}</text>
                <text x={x+20} y={y+52} fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">{title}</text>
                <text x={x+20} y={y+72} fill="rgba(200,214,229,0.4)" fontSize="9.5" fontFamily="sans-serif">{detail}</text>
                <text x={x+232} y={y+32} textAnchor="middle" fontSize="22" fontFamily="sans-serif">{icon}</text>
                <rect x={x+16} y={y+84} width="240" height="18" rx="5" fill={`${col}08`} stroke={`${col}20`} strokeWidth="1"/>
                <text x={x+26} y={y+96} fill={col} fontSize="8.5" fontWeight="700" fontFamily="sans-serif">Score YES if this applies → adds to your total</text>
              </g>
            ))}

            {/* Score guide bar */}
            <text x="480" y="330" textAnchor="middle" fill="rgba(200,214,229,0.6)" fontSize="9" fontWeight="700" fontFamily="sans-serif">SCORING GUIDE</text>
            {[
              {range:'0–1 YES', label:'Build basics first', col:'#6a8aaa', x:80},
              {range:'2–3 YES', label:'Begin scoping in 6 months', col:'#ffb703', x:290},
              {range:'4–5 YES', label:'Urgent - start now', col:'#E8632B', x:530},
              {range:'6 YES',   label:'Business-critical', col:'#ff4d6d', x:760},
            ].map(({range, label, col, x}) => (
              <g key={x}>
                <rect x={x-60} y={340} width="140" height="32" rx="7" fill={`${col}10`} stroke={`${col}30`} strokeWidth="1"/>
                <text x={x+10} y={352} textAnchor="middle" fill={col} fontSize="9" fontWeight="800" fontFamily="sans-serif">{range}</text>
                <text x={x+10} y={364} textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif">{label}</text>
              </g>
            ))}
          </svg>
        </div>
        <p className="img-cap">The 6 triggers that determine whether ISO 27001 applies to your business - with a scoring guide. Score YES on 2 or more and certification should be on your 12-month roadmap.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#how-to-use">How to Use This Guide</a>
            <a href="#trigger-1">Trigger 1: Enterprise Customers</a>
            <a href="#trigger-2">Trigger 2: International Markets</a>
            <a href="#trigger-3">Trigger 3: Sensitive Data</a>
            <a href="#trigger-4">Trigger 4: Investor Due Diligence</a>
            <a href="#trigger-5">Trigger 5: DPDP Act</a>
            <a href="#trigger-6">Trigger 6: Prior Incidents</a>
            <a href="#your-score">Your Score - What It Means</a>
            <a href="#next-steps">What Happens Next</a>
            <a href="#mistakes">Common Mistakes</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(232,99,43,0.3)',paddingLeft:'1.2rem'}}>ISO 27001 keeps coming up - in security questionnaires, investor due diligence, enterprise procurement checklists. But the question most founders and operators actually have is simpler: <strong>do we need it?</strong> Not "what is it", not "how do we get certified" - but should your organisation be pursuing this right now, or is there something more pressing? This is a structured self-assessment. Work through the six triggers below. Score how many apply to your organisation. The guide at the end tells you what your result means and exactly what to do next. For a deeper dive into what ISO 27001 actually requires, see our <a href="https://seccomply.net/resources/blog/iso-27001-explained-startups" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>plain-English ISO 27001 guide for startups</a>.</p>

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-target="70000" data-suffix="+">0+</div><div className="stat-l">organisations certified globally - making ISO 27001 the most widely adopted security standard in the world<br/><span style={{fontSize:'.68rem',opacity:.55}}>ISO Survey 2023</span></div></div>
            <div className="stat-card"><div className="stat-n" data-prefix="₹" data-target="250" data-suffix=" Cr">₹0 Cr</div><div className="stat-l">maximum DPDP Act penalty for security safeguard failures - ISO 27001 is the strongest evidence of reasonable safeguards<br/><span style={{fontSize:'.68rem',opacity:.55}}>DPDP Act 2023, Schedule</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="4" data-suffix="–9 months">0</div><div className="stat-l">typical certification timeline for Indian startups - from gap assessment to certification mark<br/><span style={{fontSize:'.68rem',opacity:.55}}>SecComply implementation data</span></div></div>
          </div>

          <section id="how-to-use">
            <h2>How to <em>Use This Guide</em></h2>
            <p>Work through each of the six triggers below. For each one, decide whether it applies to your organisation - yes or no. Keep a running count of your YES answers. The scoring guide at the end tells you what your total means.</p>
            <div className="callout co-key">
              <span className="co-icon">📋</span>
              <div className="co-body">
                <strong>Self-Assessment Scoring</strong>
                <p>0–1 YES: Build foundational security controls first - ISO 27001 is premature. Revisit in 12 months or when a commercial trigger arises. 2–3 YES: ISO 27001 is appropriate - begin scoping within the next 6 months. 4–5 YES: Urgent - you are likely losing deals or creating regulatory risk. Begin immediately. 6 YES: Business-critical - ISO 27001 is blocking commercial and regulatory progress.</p>
              </div>
            </div>
          </section>

          <section id="trigger-1">
            <div className="trigger-header anim">
              <span className="trigger-label">Trigger 1 of 6</span>
              <span style={{color:'var(--tx)',fontWeight:700,fontSize:'1rem'}}>Enterprise Customers Are Asking for It</span>
            </div>
            <p>The clearest signal that ISO 27001 applies to your business is the simplest one: someone is asking for it. When enterprise procurement teams send security questionnaires, ISO 27001 certification is increasingly a checkbox item - not a nice-to-have. The pattern is consistent: a founder spends months in a sales cycle with a large enterprise, the deal gets to legal review, a security questionnaire arrives, and question 47 reads: "Does your organisation hold ISO 27001 certification?" The deal stalls.</p>
            <p>The commercial calculus is straightforward: if ISO 27001 certification would close or accelerate one enterprise deal worth more than the certification cost, the investment pays for itself immediately. At ₹8–25 lakhs for certification, the ROI threshold is relatively low for any SaaS company with enterprise ambitions.</p>
            <div className="callout co-danger">
              <span className="co-icon">🔴</span>
              <div className="co-body">
                <strong>Score YES if any of these apply</strong>
                <p>Enterprise customers have asked whether you are ISO 27001 certified. You have lost or seen a deal delayed due to security questionnaire responses. A customer has asked you to complete a Vendor Security Assessment referencing ISO 27001. Your security questionnaires currently answer "no" to the ISO 27001 question and you know this is blocking progress.</p>
              </div>
            </div>
          </section>

          <section id="trigger-2">
            <div className="trigger-header anim">
              <span className="trigger-label">Trigger 2 of 6</span>
              <span style={{color:'var(--tx)',fontWeight:700,fontSize:'1rem'}}>You Are Expanding Into International Markets</span>
            </div>
            <p>ISO 27001 is the globally recognised security credential. In Europe, the Middle East, Japan, Singapore, and Australia, it functions as a baseline expectation for B2B software vendors - not a differentiator, but a table stake. If your expansion strategy includes any of these markets, you will encounter the requirement.</p>
            <div className="pull-quote">
              <p>"If your first major international markets are outside the US, ISO 27001 opens significantly more doors than SOC 2 alone. Many organisations pursuing both markets run the programmes in parallel - the control overlap is large enough that combined implementation is far more efficient."</p>
            </div>
            <div className="callout co-danger">
              <span className="co-icon">🔴</span>
              <div className="co-body">
                <strong>Score YES if any of these apply</strong>
                <p>You are targeting customers in Europe, the Middle East, Japan, Singapore, or Australia. Your expansion roadmap includes government or regulated-industry customers in any geography. A prospective customer or partner in an international market has referenced ISO 27001. Your product handles data of EU residents and you are building GDPR compliance infrastructure.</p>
              </div>
            </div>
          </section>

          <section id="trigger-3">
            <div className="trigger-header anim">
              <span className="trigger-label">Trigger 3 of 6</span>
              <span style={{color:'var(--tx)',fontWeight:700,fontSize:'1rem'}}>You Process Sensitive Data Categories</span>
            </div>
            <p>The type of data your organisation handles is one of the strongest predictors of whether ISO 27001 certification will be required - by regulators, by customers, or by the nature of the risk you carry.</p>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Data Category</th><th>Regulatory Pressure</th><th>ISO 27001 Signal</th></tr></thead>
                <tbody>
                  <tr><td>Financial data (payments, banking)</td><td>PCI DSS, RBI guidelines</td><td><span className="sig-strong">Strong</span></td></tr>
                  <tr><td>Health or medical information</td><td>HIPAA, clinical data laws</td><td><span className="sig-strong">Strong</span></td></tr>
                  <tr><td>Government / defence data</td><td>DISHA, DPDP, sovereign requirements</td><td><span className="sig-strong">Mandatory in practice</span></td></tr>
                  <tr><td>Children's data (under 18)</td><td>DPDP Section 9, COPPA</td><td><span className="sig-strong">Strong</span></td></tr>
                  <tr><td>Employee PII at scale</td><td>DPDP Act, labour regulations</td><td><span className="sig-mod">Moderate</span></td></tr>
                  <tr><td>Customer PII (name, email, phone)</td><td>DPDP Act, GDPR</td><td><span className="sig-mod">Moderate</span></td></tr>
                  <tr><td>Anonymised or aggregated only</td><td>Minimal regulatory</td><td><span className="sig-low">Low</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="callout co-danger">
              <span className="co-icon">🔴</span>
              <div className="co-body">
                <strong>Score YES if any of these apply</strong>
                <p>You process financial data, health information, or government/defence-related data. Your product handles personal data of children under 18. You process PII at scale - more than 10,000 individuals in your dataset. A data breach in your systems would cause serious harm to individuals or significant reputational damage.</p>
              </div>
            </div>

            <div className="img-wrap" style={{marginTop:'1.5rem'}}>
              <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1000&h=360&fit=crop" alt="Data security compliance assessment checklist" style={{width:'100%',display:'block',maxHeight:'300px',objectFit:'cover'}}/>
            </div>
            <p className="img-cap">The most important question is not "do we technically need ISO 27001?" - it is "what happens to our business if we do not have it when the next enterprise procurement review arrives?"</p>
          </section>

          <section id="trigger-4">
            <div className="trigger-header anim">
              <span className="trigger-label">Trigger 4 of 6</span>
              <span style={{color:'var(--tx)',fontWeight:700,fontSize:'1rem'}}>Investors Are Conducting Security Due Diligence</span>
            </div>
            <p>Series A and B fundraising rounds increasingly include security and compliance in due diligence. Institutional investors - particularly those with portfolio companies in regulated industries or those investing in enterprise SaaS - have begun asking specific questions about security posture.</p>
            <p>ISO 27001 certification provides a defensible, independently verified answer. It signals to investors that security is managed systematically rather than reactively - which directly affects perceived operational risk and, in some cases, valuation multiples.</p>
            <div className="callout co-danger">
              <span className="co-icon">🔴</span>
              <div className="co-body">
                <strong>Score YES if any of these apply</strong>
                <p>You are in or approaching a fundraising round with institutional investors. An investor or their legal team has asked about your security certifications or posture. Your target investors have portfolio companies in regulated industries - fintech, healthtech, govtech, or enterprise SaaS. You have been asked to complete a security questionnaire as part of an investor due diligence process.</p>
              </div>
            </div>
          </section>

          <section id="trigger-5">
            <div className="trigger-header anim">
              <span className="trigger-label">Trigger 5 of 6</span>
              <span style={{color:'var(--tx)',fontWeight:700,fontSize:'1rem'}}>DPDP Act Compliance Is Required</span>
            </div>
            <p>India's Digital Personal Data Protection Act 2023 requires Data Fiduciaries to implement reasonable security safeguards proportionate to their processing activities. <strong>ISO 27001 is widely accepted as strong evidence of reasonable safeguards</strong> - not a guaranteed legal defence, but a substantially stronger position than having no certified security management programme.</p>
            <p>For organisations with significant Indian user bases, DPDP compliance is not optional. The DPDP Rules notified by MeitY in November 2025 have made the obligations enforceable, with penalties up to ₹250 crore for security safeguard failures. If you are building your <a href="https://seccomply.net/resources/blog/dpdp-act-2023-explained" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>DPDP compliance programme</a>, ISO 27001 is the most efficient security foundation - the control overlap means you build once and satisfy both.</p>
            <div className="callout co-danger">
              <span className="co-icon">🔴</span>
              <div className="co-body">
                <strong>Score YES if any of these apply</strong>
                <p>Your product collects, stores, or processes personal data of Indian users. You are classified or likely to be classified as a Significant Data Fiduciary under DPDP. You have begun or are planning a DPDP compliance programme. Your legal team has flagged DPDP as a regulatory risk that needs documented evidence of safeguards.</p>
              </div>
            </div>
          </section>

          <section id="trigger-6">
            <div className="trigger-header anim">
              <span className="trigger-label">Trigger 6 of 6</span>
              <span style={{color:'var(--tx)',fontWeight:700,fontSize:'1rem'}}>You Have Experienced a Prior Security Incident</span>
            </div>
            <p>Organisations that have experienced a breach, data exposure, ransomware attack, or significant security incident are in a different category. The question is no longer "do we need structured security management?" - the incident already answered that. The question is whether to implement a systematic programme ad hoc or through a certified framework that provides independent verification.</p>
            <p>ISO 27001 certification matters especially in post-incident contexts: it provides credible evidence in customer communications, regulatory responses, and insurance claims that a systematic security management programme now exists and is operating.</p>
            <div className="callout co-danger">
              <span className="co-icon">🔴</span>
              <div className="co-body">
                <strong>Score YES if any of these apply</strong>
                <p>You have experienced a data breach, ransomware attack, or significant security incident in the past 24 months. A security audit or penetration test has identified critical findings that have not been resolved through a documented programme. Your cyber insurance premium has increased significantly or coverage has been declined due to security posture. A regulatory body or law enforcement has inquired about a security incident.</p>
              </div>
            </div>
          </section>

          <section id="your-score">
            <h2>Your Score - <em>What It Means</em></h2>
            <p>Add up your YES answers across all six triggers and find your result below:</p>
            <div className="score-grid">
              <div className="score-card sc-0 anim">
                <div className="sc-range">0–1 YES</div>
                <h3>Build foundational security first</h3>
                <p>ISO 27001 is premature. Focus on foundational security controls - MFA, access reviews, vulnerability management, incident response. Revisit this assessment when a commercial trigger arises or in 12 months.</p>
                <span className="sc-time">Revisit in 12 months</span>
              </div>
              <div className="score-card sc-1 anim">
                <div className="sc-range">2–3 YES</div>
                <h3>Begin scoping within 6 months</h3>
                <p>ISO 27001 is the right investment. Begin a gap assessment and scoping exercise. This is the point where the commercial logic becomes clear - the investment is justified by the triggers you have scored.</p>
                <span className="sc-time">6–9 month programme</span>
              </div>
              <div className="score-card sc-2 anim">
                <div className="sc-range">4–5 YES</div>
                <h3>Urgent - start within 30 days</h3>
                <p>You are likely losing deals or creating regulatory risk right now. Begin the ISO 27001 programme immediately with external compliance support. The delay cost is real and measurable.</p>
                <span className="sc-time">Start within 30 days</span>
              </div>
              <div className="score-card sc-3 anim">
                <div className="sc-range">6 YES</div>
                <h3>Business-critical - start immediately</h3>
                <p>ISO 27001 is blocking commercial and regulatory progress across multiple fronts. This is your most important infrastructure investment right now. Treat it with the same urgency as a production outage.</p>
                <span className="sc-time">Start immediately</span>
              </div>
            </div>
          </section>

          <section id="next-steps">
            <h2>What Happens <em>After You Decide to Proceed</em></h2>
            <p>If your score indicates ISO 27001 is appropriate, the implementation follows five phases:</p>
            <div className="phase-list">
              {[
                {num:'Phase 1', dur:'4–6 weeks', title:'Gap Assessment', body:'Map your current security controls against ISO 27001 requirements. Identify what you already have, what is missing, and what needs to change. This assessment determines your project timeline and budget - it is the most important investment before committing to a programme.'},
                {num:'Phase 2', dur:'8–16 weeks', title:'ISMS Implementation', body:'Design and implement missing controls. Write required policies and procedures. Complete the risk assessment. Produce the Statement of Applicability. This is the longest phase and depends entirely on how many gaps the assessment found.'},
                {num:'Phase 3', dur:'4–8 weeks', title:'ISMS Operation and Evidence Collection', body:'Run your ISMS for a period before the audit. Conduct an internal audit. Complete a management review. Collect evidence that controls are operating - not just documented. Most certification bodies want to see at least one full management cycle before Stage 2.'},
                {num:'Phase 4', dur:'1–2 weeks', title:'Stage 1 Audit - Documentation Review', body:'The certification body auditor reviews your ISMS documentation to determine whether you are ready for the Stage 2 audit. This typically produces a short list of items to address before proceeding.'},
                {num:'Phase 5', dur:'2–4 weeks', title:'Stage 2 Audit - Certification Decision', body:'The auditor verifies that controls are implemented and operating as documented. Certification is granted once all major findings are resolved. The certificate is valid for three years, with annual surveillance audits.'},
              ].map(({num, dur, title, body}, i) => (
                <div key={i} className="phase-item anim">
                  <div className="phase-num">{num}</div>
                  <span className="phase-dur">{dur}</span>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="mistakes">
            <h2>Common Mistakes <em>to Avoid</em></h2>
            {[
              {title:'Starting without a gap assessment', body:'The gap assessment determines what actually needs to be done. Organisations that skip it overbuild documentation for controls they already have and underbuild for the gaps that will fail the audit. A gap assessment takes 4–6 weeks and should precede any other implementation work.'},
              {title:'Treating it as a documentation exercise', body:'ISO 27001 requires evidence that controls are actually operating - not just policies that say they should. Auditors interview staff, inspect systems, and review logs. A comprehensive policy library with no operational evidence will not pass Stage 2.'},
              {title:'Underestimating internal team time', body:'The consultant handles the framework and documentation, but your team implements the controls and participates in the audit. Budget 2–4 hours per week from relevant team members throughout the programme. This is consistently the most underestimated cost.'},
              {title:'Scoping too broadly for a first certification', body:'A smaller, well-defined scope achieves certification faster and at lower cost. Many startups certify their core product and primary cloud environment first, then expand scope in subsequent years. A tight initial scope is a feature, not a compromise.'},
              {title:'Pursuing certification before foundational controls exist', body:'ISO 27001 monitors and validates controls - it does not create them. If basic security hygiene is missing, the implementation cost will be very high and the timeline very long. Build the controls first, then certify the programme that governs them.'},
            ].map(({title, body}, i) => (
              <div key={i} className="mistake-item anim">
                <div className="mi-x">✗</div>
                <div className="mi-body"><strong>{title}</strong><span>{body}</span></div>
              </div>
            ))}
          </section>

          <div className="cta-banner">
            <h3>Ready to Start Your ISO 27001 Journey?</h3>
            <p>SecComply runs ISO 27001 implementations for Indian startups from gap assessment to certification - with a realistic timeline, a fixed-scope engagement, and the compliance expertise your team does not have to hire full-time.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free ISO 27001 Consultation →</a>
              <a href="https://seccomply.net/services/iso-27001" className="btn-o" target="_blank" rel="noopener">View ISO 27001 Services</a>
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
                {q:"Is there a minimum company size for ISO 27001?", a:"No. ISO 27001 has no minimum company size, revenue threshold, or employee count. A 5-person startup collecting user data has the same core obligation considerations as a large enterprise. The standard scales to organisational size - the scope and number of applicable controls will differ, but the framework applies regardless of scale."},
                {q:"How is ISO 27001 different from a penetration test?", a:"A penetration test is a point-in-time technical assessment that identifies vulnerabilities in your systems. ISO 27001 is a continuous management system governing how you identify, manage, and respond to information security risks - including ensuring regular penetration testing is part of your programme. A penetration test is one control that ISO 27001 may require; it is not an alternative to the standard."},
                {q:"Can we self-certify against ISO 27001?", a:"No. ISO 27001 certification requires an independent audit by an accredited certification body. You can self-assess against the standard (which is what this guide is designed for), but the certification mark requires a third-party audit. Working with a compliance partner for implementation and then engaging a separate accredited certification body for the audit is the standard approach."},
                {q:"Does ISO 27001 certification expire?", a:"ISO 27001 certificates are valid for three years, with annual surveillance audits in years one and two to verify continued compliance. At the end of three years, a full recertification audit is required. Surveillance audits are typically 30–40% of the cost and duration of the initial certification audit."},
                {q:"What is the difference between ISO 27001 and ISO 27701?", a:"ISO 27001 is an information security management standard governing how your organisation manages security risks. ISO 27701 is a privacy extension to ISO 27001 that adds privacy-specific controls for processing Personally Identifiable Information. Both standards can be implemented and audited simultaneously if you need both information security certification and a demonstrated privacy management programme for GDPR or DPDP Act compliance."},
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
              <li><a href="#how-to-use" className="toc-link">How to Use This Guide</a></li>
              <li><a href="#trigger-1" className="toc-link">Trigger 1: Enterprise Customers</a></li>
              <li><a href="#trigger-2" className="toc-link">Trigger 2: International Markets</a></li>
              <li><a href="#trigger-3" className="toc-link">Trigger 3: Sensitive Data</a></li>
              <li><a href="#trigger-4" className="toc-link">Trigger 4: Investor Due Diligence</a></li>
              <li><a href="#trigger-5" className="toc-link">Trigger 5: DPDP Act</a></li>
              <li><a href="#trigger-6" className="toc-link">Trigger 6: Prior Incidents</a></li>
              <li><a href="#your-score" className="toc-link">Your Score</a></li>
              <li><a href="#next-steps" className="toc-link">What Happens Next</a></li>
              <li><a href="#mistakes" className="toc-link">Common Mistakes</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Reading</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27001-explained-startups" target="_blank">🌍 ISO 27001 Explained</a></li>
              <li><a href="https://seccomply.net/resources/blog/soc2-vs-iso27001" target="_blank">📋 ISO 27001 vs SOC 2</a></li>
              <li><a href="https://seccomply.net/resources/blog/grc-automation" target="_blank">⚙️ GRC Automation</a></li>
              <li><a href="https://seccomply.net/resources/blog/dpdp-act-2023-explained" target="_blank">🇮🇳 DPDP Act 2023</a></li>
              <li><a href="https://seccomply.net/resources/blog/how-to-write-security-policy" target="_blank">📝 Writing Security Policies</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">ISO 27001</span><span className="tag">Self-Assessment</span><span className="tag">Startup Compliance</span><span className="tag">Certification</span><span className="tag">DPDP</span><span className="tag">Enterprise Sales</span><span className="tag">Due Diligence</span><span className="tag">India</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Not Sure Where You Stand?</h4>
            <p>Free consultation - we run the gap assessment and tell you exactly what ISO 27001 will take for your specific organisation.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
