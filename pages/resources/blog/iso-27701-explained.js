import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27701Explained() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/iso-27701-explained'); const ttl = encodeURIComponent('ISO 27701 Explained: Privacy Information Management for Compliance Teams, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/iso-27701-explained'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
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
        <title>ISO 27701 Explained: Privacy Information Management for Compliance Teams | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="What ISO 27701 actually requires, how it extends ISO 27001 into a Privacy Information Management System, regulatory mapping to GDPR and DPDP, the RoPA requirement, data subject rights processes, and a realistic 6-9 month implementation roadmap." />
        <meta name="keywords" content="ISO 27701 explained, ISO 27701 PIMS, privacy information management system, ISO 27701 GDPR mapping, ISO 27701 DPDP, RoPA ISO 27701, PII controller processor, ISO 27701 certification, ISO 27001 privacy extension, data subject rights ISO 27701" />
        <meta property="og:title" content="ISO 27701 Explained: Privacy Information Management for Compliance Teams" />
        <meta property="og:description" content="ISO 27701 gives compliance teams something regulations alone do not — a structured, auditable, internationally recognised framework for managing privacy as an operational discipline. Here is everything you need to know." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27701-explained" />
        <meta property="article:published_time" content="2026-03-28" />
        <meta property="article:author" content="Aditya Hadke" />
        <meta property="article:tag" content="ISO 27701" />
        <meta property="article:tag" content="Privacy Compliance" />
        <meta property="article:tag" content="PIMS" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27701-explained" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "ISO 27701 Explained: Privacy Information Management for Compliance Teams",
              "description": "What ISO 27701 requires, how it extends ISO 27001, regulatory mapping to GDPR and DPDP, the RoPA, data subject rights, and a 6-9 month implementation roadmap.",
              "author": { "@type": "Person", "name": "Aditya Hadke", "jobTitle": "Cybersecurity Expert & Technical Writer", "worksFor": { "@type": "Organization", "name": "SecComply" } },
              "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } },
              "datePublished": "2026-03-28", "dateModified": "2026-03-28",
              "mainEntityOfPage": "https://seccomply.net/resources/blog/iso-27701-explained",
              "keywords": "ISO 27701, PIMS, privacy information management, GDPR mapping, DPDP, RoPA, PII controller, PII processor, data subject rights",
              "articleSection": "Privacy Compliance", "wordCount": 2400, "timeRequired": "PT12M"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is ISO 27701?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27701 is an international standard that extends ISO 27001 to cover privacy, providing a framework for building and maintaining a Privacy Information Management System (PIMS). Published in 2019, it specifies requirements for processing Personally Identifiable Information in a transparent, accountable, and demonstrably compliant manner. It works for both PII controllers (organisations that determine why and how PII is processed) and PII processors (organisations that process PII on behalf of a controller)." } },
                { "@type": "Question", "name": "Do you need ISO 27001 before pursuing ISO 27701?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27701 is technically an extension to ISO 27001 — it cannot stand alone without ISO 27001 as the foundation. However, organisations do not need to achieve ISO 27001 certification first; they can pursue both certifications simultaneously in a single unified programme. For organisations already certified to ISO 27001, adding ISO 27701 requires extending the existing ISMS to cover privacy controls — not rebuilding it from scratch." } },
                { "@type": "Question", "name": "What is a Record of Processing Activities (RoPA)?", "acceptedAnswer": { "@type": "Answer", "text": "A Record of Processing Activities (RoPA) is a documented inventory of all PII processing activities within an organisation. Required under both ISO 27701 and GDPR Article 30, each entry captures the processing purpose, legal basis, categories of data subjects and PII, categories of recipients and third parties, retention periods, and security measures applied. The RoPA must be maintained as a living document — not a one-time certification artefact — with a defined owner, change management process, and regular review cycle." } },
                { "@type": "Question", "name": "Does ISO 27701 certification prove GDPR compliance?", "acceptedAnswer": { "@type": "Answer", "text": "No. ISO 27701 certification does not equal GDPR compliance, but it substantially demonstrates adherence to major GDPR articles. ISO 27701 Annex D provides a direct article-by-article mapping to GDPR, covering Articles 5, 6, 7, 13-17, 25, 28, 30, 32, 33, and 35 — the principles of processing, lawful basis, consent, data subject rights, privacy by design, processor agreements, RoPA, security, breach notification, and DPIAs. In practice, ISO 27701 certification is widely accepted by regulators and enterprise customers as strong evidence of GDPR compliance readiness." } },
                { "@type": "Question", "name": "How long does ISO 27701 implementation take?", "acceptedAnswer": { "@type": "Answer", "text": "For organisations starting from a foundation of ISO 27001 certification, a realistic ISO 27701 implementation timeline runs approximately 6 to 9 months. The four main phases are: gap assessment and scoping (months 1-2), foundation controls including RoPA and processor agreements (months 3-4), operational controls including DPIAs and consent management (months 5-6), and internal audit and certification readiness (months 7-9). Organisations pursuing both ISO 27001 and ISO 27701 simultaneously should plan for 8-12 months total." } }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
                { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
                { "@type": "ListItem", "position": 4, "name": "ISO 27701 Explained", "item": "https://seccomply.net/resources/blog/iso-27701-explained" }
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
    .two-col{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin:1.5rem 0}
    .role-card{border-radius:12px;padding:1.3rem 1.5rem}
    .role-ctrl{background:rgba(99,102,241,.06);border:1px solid rgba(99,102,241,.22)}
    .role-proc{background:rgba(6,214,160,.04);border:1px solid rgba(6,214,160,.2)}
    .role-card .rc-lbl{font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem}
    .role-ctrl .rc-lbl{color:#818cf8}
    .role-proc .rc-lbl{color:#06d6a0}
    .role-card h3{font-size:.95rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
    .role-card ul{list-style:none;display:flex;flex-direction:column;gap:.3rem}
    .role-card ul li{font-size:.83rem;color:var(--tb);display:flex;align-items:flex-start;gap:.5rem}
    .role-ctrl ul li::before{content:'→';color:#818cf8;flex-shrink:0}
    .role-proc ul li::before{content:'→';color:#06d6a0;flex-shrink:0}
    .clause-list{display:flex;flex-direction:column;gap:.65rem;margin:1.5rem 0}
    .cl-item{display:flex;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-left:3px solid var(--cy);border-radius:0 10px 10px 0;transition:border-color .2s}
    .cl-item:hover{border-color:var(--bo)}
    .cl-num{font-size:.68rem;font-weight:800;color:var(--cy);white-space:nowrap;min-width:62px;margin-top:2px}
    .cl-body strong{display:block;color:var(--tx);font-size:.9rem;margin-bottom:.25rem}
    .cl-body span{font-size:.82rem;color:var(--tm)}
    .ropa-grid{display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin:1.5rem 0}
    .ropa-item{background:var(--bgc2);border:1px solid var(--bs);border-radius:9px;padding:.8rem 1rem;display:flex;align-items:flex-start;gap:.7rem;transition:border-color .2s}
    .ropa-item:hover{border-color:var(--bo)}
    .ropa-item .ri-icon{font-size:1.1rem;flex-shrink:0;margin-top:1px}
    .ropa-item strong{display:block;color:var(--tx);font-size:.85rem;margin-bottom:2px}
    .ropa-item span{font-size:.78rem;color:var(--tm)}
    .rights-list{display:flex;flex-direction:column;gap:.55rem;margin:1.5rem 0}
    .right-item{display:flex;align-items:center;gap:1rem;padding:.75rem 1.1rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:9px;transition:border-color .2s}
    .right-item:hover{border-color:var(--bo)}
    .ri-badge{font-size:.62rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:.15rem .55rem;border-radius:4px;background:rgba(232,99,43,.1);color:var(--cy);white-space:nowrap;flex-shrink:0}
    .right-item strong{font-size:.88rem;color:var(--tx);flex:1}
    .right-item span{font-size:.79rem;color:var(--tm)}
    .roadmap-list{display:flex;flex-direction:column;gap:.7rem;margin:1.5rem 0;position:relative;padding-left:2rem}
    .roadmap-list::before{content:'';position:absolute;left:7px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,#E8632B,rgba(232,99,43,.1))}
    .rm-event{position:relative;padding:.95rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s}
    .rm-event:hover{border-color:var(--bo)}
    .rm-event::before{content:'';position:absolute;left:-1.75rem;top:14px;width:10px;height:10px;border-radius:50%;background:var(--cy);border:2px solid var(--bg);box-shadow:0 0 0 2px var(--cy)}
    .rm-phase{font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--cy);margin-bottom:.2rem}
    .rm-duration{display:inline-block;background:rgba(232,99,43,.1);color:var(--cy);font-size:.68rem;font-weight:700;padding:.1rem .5rem;border-radius:4px;margin-bottom:.3rem}
    .rm-event strong{display:block;color:var(--tx);font-size:.9rem;margin-bottom:.25rem}
    .rm-event p{font-size:.83rem;color:var(--tm);margin:0;line-height:1.6}
    .reg-table-wrap{overflow-x:auto;margin:2rem 0;border-radius:14px;border:1px solid var(--bo)}
    .reg-table{width:100%;border-collapse:collapse}
    .reg-table th{background:var(--bgc);padding:.85rem 1.1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .reg-table td{padding:.82rem 1.1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .reg-table tr:last-child td{border-bottom:none}
    .reg-table tr:hover td{background:rgba(232,99,43,.03)}
    .reg-table td:first-child{color:var(--tx);font-weight:600}
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
    @media(max-width:900px){.two-col{grid-template-columns:1fr}.ropa-grid{grid-template-columns:1fr}.stats-row{grid-template-columns:1fr}}
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
        <span style={{color:'var(--tb)'}}>ISO 27701 Explained</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">🔐 ISO 27701</span>
          <span className="badge badge-bl">🌍 Privacy Compliance</span>
          <span className="badge badge-am">📋 PIMS Guide</span>
          <span className="badge badge-gr">✓ GDPR · DPDP · CCPA</span>
        </div>
        <h1 className="cspm-hero-h1">ISO 27701 Explained: <em>Privacy Information Management</em> for Compliance Teams</h1>
        <p className="cspm-hero-sub">Privacy has moved from a legal footnote to a boardroom priority. GDPR, India's DPDP Act, and CCPA have raised the stakes for how organisations collect, process, and protect personal data. ISO 27701 is the international standard that tells you how to operationalise privacy — systematically, auditably, and in a way that satisfies regulators, enterprise customers, and investors simultaneously.</p>

        <div className="cspm-author-strip">
          <div className="avatar">AH</div>
          <div className="author-info">
            <div className="name">Aditya Hadke</div>
            <div className="meta-row"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 12 min read</span></div>
            <div className="date-row"><span>📅 March 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&h=480&fit=crop" alt="ISO 27701 privacy information management system PIMS" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}}/>
        </div>
        <p className="img-cap">ISO 27701 gives compliance teams a structured, auditable framework for managing privacy as an operational discipline — not just a legal checkbox. Built as an extension to ISO 27001, it works across GDPR, DPDP, and CCPA simultaneously from a single control set.</p>

        {/* SVG DASHBOARD */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 400" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#E8632B"/><stop offset="100%" stopColor="#FF8A50"/></linearGradient>
              <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#818cf8"/><stop offset="100%" stopColor="#6366f1"/></linearGradient>
              <pattern id="ppat" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(232,99,43,0.04)"/></pattern>
            </defs>
            <rect width="960" height="400" fill="url(#ppat)"/>
            <text x="480" y="30" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">ISO 27701 — PIMS Structure and Regulatory Coverage</text>

            {/* LEFT: ISO 27001 + 27701 layer diagram */}
            <text x="36" y="54" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">ISMS + PIMS ARCHITECTURE</text>
            <rect x="20" y="62" width="290" height="316" rx="12" fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" strokeDasharray="4,3"/>
            <text x="165" y="82" textAnchor="middle" fill="#818cf8" fontSize="9" fontWeight="700" fontFamily="sans-serif">ISO 27001 — Information Security (ISMS)</text>
            {['Risk assessment & treatment','Access control & encryption','Incident management','Business continuity','Supplier security'].map((t,i)=>(
              <g key={i}><rect x="34" y={90+i*38} width="262" height="28" rx="7" fill="rgba(99,102,241,0.07)" stroke="rgba(99,102,241,0.15)" strokeWidth="1"/><text x="46" y={108+i*38} fill="rgba(200,214,229,0.65)" fontSize="8.5" fontFamily="sans-serif">{t}</text></g>
            ))}
            <rect x="20" y="286" width="290" height="88" rx="10" fill="rgba(232,99,43,0.07)" stroke="rgba(232,99,43,0.28)" strokeWidth="1.5"/>
            <text x="165" y="306" textAnchor="middle" fill="#E8632B" fontSize="9" fontWeight="700" fontFamily="sans-serif">ISO 27701 Extension — PIMS</text>
            {['PII processing controls (Annex B/C)','RoPA · consent management · DPIAs','Data subject rights workflows'].map((t,i)=>(
              <g key={i}><text x="36" y={322+i*18} fill="rgba(200,214,229,0.65)" fontSize="8" fontFamily="sans-serif">+ {t}</text></g>
            ))}

            <line x1="328" y1="44" x2="328" y2="388" stroke="rgba(232,99,43,0.07)" strokeWidth="1"/>

            {/* CENTRE: Clause map */}
            <text x="530" y="54" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">PIMS CLAUSE REQUIREMENTS</text>
            {[
              {clause:'Clause 5', title:'Leadership',             detail:'Privacy policy · Privacy Officer · senior commitment', col:'#818cf8'},
              {clause:'Clause 6', title:'Planning',               detail:'Privacy risk assessment · RoPA · privacy objectives',   col:'#818cf8'},
              {clause:'Clause 7', title:'Support',                detail:'PII staff training · PIMS documentation',               col:'#818cf8'},
              {clause:'Clause 8', title:'Operations (Controller)',detail:'Legal basis · consent · data subject rights · DPIAs',   col:'#E8632B'},
              {clause:'Clause 8', title:'Operations (Processor)', detail:'Controller instructions · sub-processor register',     col:'#06d6a0'},
              {clause:'Clause 9', title:'Performance Evaluation', detail:'Internal PIMS audit · management review',              col:'#ffb703'},
              {clause:'Clause 10',title:'Improvement',            detail:'Corrective actions · continual improvement',           col:'#ffb703'},
            ].map(({clause,title,detail,col},i)=>(
              <g key={i}>
                <rect x="346" y={62+i*46} width="360" height="36" rx="8" fill="#091826" stroke={`${col}22`} strokeWidth="1"/>
                <rect x="346" y={62+i*46} width="3" height="36" rx="1.5" fill={col}/>
                <text x="360" y={76+i*46} fill={col} fontSize="7.5" fontWeight="700" fontFamily="sans-serif">{clause}</text>
                <text x="398" y={76+i*46} fill="rgba(200,214,229,0.85)" fontSize="9" fontWeight="600" fontFamily="sans-serif">{title}</text>
                <text x="360" y={90+i*46} fill="rgba(200,214,229,0.42)" fontSize="8" fontFamily="sans-serif">{detail}</text>
              </g>
            ))}

            <line x1="722" y1="44" x2="722" y2="388" stroke="rgba(232,99,43,0.07)" strokeWidth="1"/>

            {/* RIGHT: Regulatory mapping */}
            <text x="740" y="54" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">REGULATORY COVERAGE</text>
            {[
              {reg:'GDPR',      coverage:'Articles 5,6,7,13-17,25,28,30,32,33,35', col:'#818cf8', pct:88},
              {reg:'DPDP Act',  coverage:'Sections 6,7,8,11 — consent, rights, safeguards', col:'#E8632B', pct:79},
              {reg:'CCPA/CPRA', coverage:'Consumer rights — access, delete, portability', col:'#ffb703', pct:74},
            ].map(({reg,coverage,col,pct},i)=>(
              <g key={i}>
                <rect x="732" y={62+i*110} width="212" height="96" rx="11" fill="#091826" stroke={`${col}25`} strokeWidth="1"/>
                <text x="750" y={84+i*110} fill={col} fontSize="12" fontWeight="800" fontFamily="sans-serif">{reg}</text>
                <text x="750" y={100+i*110} fill="rgba(200,214,229,0.4)" fontSize="7.5" fontFamily="sans-serif" style={{maxWidth:'180px'}}>{coverage}</text>
                <rect x="750" y={110+i*110} width="154" height="10" rx="5" fill="rgba(255,255,255,0.04)"/>
                <rect x="750" y={110+i*110} width={Math.round(154*pct/100)} height="10" rx="5" fill={col}/>
                <text x="912" y={119+i*110} textAnchor="end" fill={col} fontSize="8.5" fontWeight="700" fontFamily="sans-serif">{pct}% covered</text>
              </g>
            ))}
          </svg>
        </div>
        <p className="img-cap">ISO 27701 builds directly on top of ISO 27001 — extending the ISMS into a PIMS with privacy-specific clauses, PII controller and processor controls, and regulatory coverage across GDPR, DPDP Act, and CCPA from a single control set.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-is">What Is ISO 27701?</a>
            <a href="#how-it-relates">How It Relates to ISO 27001</a>
            <a href="#what-it-requires">What It Requires</a>
            <a href="#ropa">The RoPA — Foundation of PIMS</a>
            <a href="#privacy-by-design">Privacy by Design</a>
            <a href="#data-subject-rights">Data Subject Rights</a>
            <a href="#vendor-risk">Third-Party Privacy Risk</a>
            <a href="#reg-mapping">Regulatory Mapping</a>
            <a href="#audit">What the Audit Looks Like</a>
            <a href="#roadmap">Implementation Roadmap</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgba(232,99,43,0.3)',paddingLeft:'1.2rem'}}>For compliance teams, the proliferation of privacy regulations creates a real operational problem: GDPR, DPDP Act, and CCPA all require similar things — consent management, data subject rights workflows, breach notification, processor agreements — but each regulation phrases its requirements differently, with different enforcement mechanisms and different evidence standards. ISO 27701 solves this by providing a single structured framework that maps to all three simultaneously. If your organisation already holds <a href="https://seccomply.net/resources/blog/iso-27001-explained-startups" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>ISO 27001 certification</a>, ISO 27701 is the most efficient path to demonstrating privacy maturity across every market you operate in.</p>

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-target="2019" data-suffix="">0</div><div className="stat-l">year ISO 27701 was published — the only international standard providing a certifiable privacy management extension to ISO 27001<br/><span style={{fontSize:'.68rem',opacity:.55}}>ISO/IEC 27701:2019</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="88" data-suffix="%">0%</div><div className="stat-l">of GDPR articles covered by ISO 27701 controls — including Articles 5, 6, 7, data subject rights, DPIAs, and breach notification<br/><span style={{fontSize:'.68rem',opacity:.55}}>ISO 27701 Annex D mapping</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="6" data-suffix="–9 months">0</div><div className="stat-l">typical implementation timeline for organisations already certified to ISO 27001 building on their existing ISMS<br/><span style={{fontSize:'.68rem',opacity:.55}}>SecComply implementation data</span></div></div>
          </div>

          <section id="what-is">
            <h2>What Is <em>ISO 27701?</em></h2>
            <p>ISO 27701 (formally ISO/IEC 27701:2019) is an extension to ISO 27001 and ISO 27002 that specifies requirements and guidance for establishing, implementing, maintaining, and continually improving a Privacy Information Management System (PIMS). It provides a framework for processing Personally Identifiable Information (PII) in a manner that is transparent, accountable, and demonstrably compliant.</p>
            <div className="callout co-info">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>Key Distinction: Standard vs Regulation</strong>
                <p>Unlike GDPR, which is a legal regulation with penalties, ISO 27701 is a voluntary international standard. Its value lies in providing a structured, auditable privacy management framework that simultaneously serves as evidence of compliance readiness under multiple regulations. Certification does not equal GDPR compliance — but it substantially demonstrates it.</p>
              </div>
            </div>
            <p>The standard is structured to work for two types of organisations, with separate control sets for each:</p>
            <div className="two-col">
              <div className="role-card role-ctrl anim">
                <div className="rc-lbl">PII Controller</div>
                <h3>Your organisation decides why and how PII is processed</h3>
                <ul>
                  <li>Most SaaS companies collecting customer data</li>
                  <li>Enterprises using customer data for marketing or analytics</li>
                  <li>Any org determining the purpose of processing</li>
                  <li>Must comply with Annex B controls</li>
                </ul>
              </div>
              <div className="role-card role-proc anim">
                <div className="rc-lbl">PII Processor</div>
                <h3>You process PII on behalf of another organisation</h3>
                <ul>
                  <li>Cloud infrastructure providers</li>
                  <li>Payroll and HR software vendors</li>
                  <li>Managed service providers</li>
                  <li>Must comply with Annex C controls</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="how-it-relates">
            <h2>How It Relates to <em>ISO 27001</em></h2>
            <p>ISO 27701 is not a standalone standard. It extends ISO 27001 — which means the ISO 27001 ISMS is the mandatory foundation. Understanding this architectural relationship prevents the most common ISO 27701 implementation mistake: trying to build a PIMS without first having the ISMS in place.</p>
            <p>ISO 27701 layers privacy-specific controls on top of ISO 27001 by extending the context-setting requirements to include privacy considerations, adding privacy-specific objectives to the risk management process, introducing two new annexes of controls (Annex B for controllers, Annex C for processors), and requiring the existing ISMS scope to explicitly cover PII processing activities.</p>
            <div className="callout co-key">
              <span className="co-icon">🔗</span>
              <div className="co-body">
                <strong>Pursuing Both Certifications Simultaneously</strong>
                <p>Organisations that do not yet hold ISO 27001 can pursue both certifications simultaneously in a unified programme. This is more efficient than sequential implementation because the evidence collection, auditor engagement, and management processes overlap significantly. The combined audit is typically conducted by the same certification body in a single engagement — reducing cost and team disruption.</p>
              </div>
            </div>
          </section>

          <section id="what-it-requires">
            <h2>What ISO 27701 <em>Actually Requires</em></h2>
            <p>The standard follows the same clause structure as ISO 27001. Here is what each major clause adds for privacy:</p>
            <div className="clause-list">
              {[
                {num:'Clause 5 — Leadership', body:'Senior leadership must demonstrate commitment to privacy — not just information security. A privacy policy covering PII processing purposes and data subject rights must be established. Roles and responsibilities for privacy, including a Privacy Officer or equivalent, must be formally defined.'},
                {num:'Clause 6 — Planning', body:'Privacy risks must be assessed as part of the existing information security risk assessment, with PII processing activities explicitly in scope. A Record of Processing Activities (RoPA) must be established and maintained. Privacy objectives must be set, measured, and reviewed.'},
                {num:'Clause 7 — Support', body:'All staff who handle PII must receive role-appropriate privacy training and awareness. Documentation demonstrating PII processing activities and control implementation must be maintained and version-controlled.'},
                {num:'Clause 8 — Operations (Controllers)', body:'Defining and documenting the legal basis for each processing activity. Implementing consent management — obtaining, recording, and withdrawing consent. Data subject rights processes. Data minimisation enforcement. Retention and deletion procedures. DPIAs for high-risk processing. Cross-border transfer controls.'},
                {num:'Clause 8 — Operations (Processors)', body:"Ensuring all PII processing is performed only on documented controller instructions. Maintaining a sub-processor register and notifying the controller before engaging a new sub-processor. Assisting the controller in fulfilling data subject rights requests. Providing compliance evidence to the controller on request."},
                {num:'Clause 9 — Performance', body:'Internal audits of the PIMS must be conducted at planned intervals. Management reviews must evaluate privacy performance — incident trends, audit results, data subject complaint rates, and regulatory changes.'},
                {num:'Clause 10 — Improvement', body:'Privacy incidents are treated as nonconformities requiring root cause analysis and documented corrective actions. The organisation must demonstrate continual improvement of the PIMS — not just initial implementation.'},
              ].map(({num, body}, i) => (
                <div key={i} className="cl-item anim">
                  <div className="cl-num">{num.split(' — ')[0]}</div>
                  <div className="cl-body"><strong>{num.split(' — ')[1]}</strong><span>{body}</span></div>
                </div>
              ))}
            </div>
          </section>

          <section id="ropa">
            <h2>The RoPA — <em>Foundation of Your PIMS</em></h2>
            <p>If there is one artefact that underpins ISO 27701 compliance, it is the Record of Processing Activities. Required under both ISO 27701 and GDPR Article 30, the RoPA is simultaneously an audit artefact, a data governance tool, a DPIA trigger mechanism, and a privacy risk register. At minimum, each entry must capture:</p>
            <div className="ropa-grid">
              {[
                {icon:'🎯', title:'Processing purpose', desc:'What the PII is collected and used for — specific, not generic'},
                {icon:'⚖️', title:'Legal basis', desc:'Consent, contract, legal obligation, legitimate interests — one per activity'},
                {icon:'👤', title:'Data subject categories', desc:'Customers, employees, prospects — who the PII belongs to'},
                {icon:'📦', title:'PII categories', desc:'Name, email, financial data, health data — what is collected'},
                {icon:'🔗', title:'Recipients & processors', desc:'Internal teams, third parties, cross-border transfers'},
                {icon:'⏱️', title:'Retention periods', desc:'How long PII is kept and the criteria for deletion or anonymisation'},
                {icon:'🔒', title:'Security measures', desc:'Technical and organisational safeguards applied to this activity'},
                {icon:'🌍', title:'Transfer mechanisms', desc:'If PII is transferred outside the jurisdiction, the legal basis for the transfer'},
              ].map(({icon, title, desc}, i) => (
                <div key={i} className="ropa-item anim">
                  <div className="ri-icon">{icon}</div>
                  <div><strong>{title}</strong><span>{desc}</span></div>
                </div>
              ))}
            </div>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The Most Common RoPA Mistake</strong>
                <p>Most organisations build the RoPA as a one-time exercise during certification preparation. In practice, it needs to be a living document with a defined owner, a change management process, and a review cycle tied to new product features, vendor onboarding, and regulatory changes. A stale RoPA is both a compliance gap and a red flag for auditors.</p>
              </div>
            </div>

            <div className="img-wrap" style={{marginTop:'1.5rem'}}>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&h=360&fit=crop" alt="Privacy compliance documentation record of processing activities" style={{width:'100%',display:'block',maxHeight:'300px',objectFit:'cover'}}/>
            </div>
            <p className="img-cap">The RoPA is the operational core of any ISO 27701-compliant PIMS — it must be maintained as a living document, not a certification artefact. Auditors examine it closely for completeness, accuracy, and evidence of regular review.</p>
          </section>

          <section id="privacy-by-design">
            <h2>Privacy by Design — <em>From Principle to Evidence</em></h2>
            <p>ISO 27701 operationalises the privacy by design principle (GDPR Article 25) by requiring organisations to embed privacy considerations into the design of new systems and product features before implementation begins. For SaaS companies, this has direct engineering implications — it is not a policy statement, it is a development process requirement.</p>
            <p>In practice, privacy by design under ISO 27701 means Privacy Impact Assessments are triggered by defined criteria before high-risk processing begins, engineering teams consult privacy controls at the design stage with documented evidence of that consultation, default settings for new products are the most privacy-protective option available, and data minimisation is actively enforced at the schema level — not reviewed after launch.</p>
            <div className="callout co-sc">
              <span className="co-icon">💻</span>
              <div className="co-body">
                <strong>What Auditors Look For</strong>
                <p>ISO 27701 auditors look for evidence that privacy by design was applied — not just that a policy exists saying it should be. This means DPIA records for new features, design review notes, schema documentation showing only necessary fields are collected, and evidence that privacy was considered before deployment. Teams that implement this as a process rather than a paperwork exercise produce the strongest audit evidence.</p>
              </div>
            </div>
          </section>

          <section id="data-subject-rights">
            <h2>Data Subject Rights — <em>Building the Response Process</em></h2>
            <p>ISO 27701 requires organisations to establish operational processes for handling data subject rights requests. Under GDPR these must typically be fulfilled within 30 days. Under DPDP Act the obligation is equally firm. Each right needs a documented owner, a response workflow, an identity verification step, and a request log for audit purposes.</p>
            <div className="rights-list">
              {[
                {right:'Right of Access', desc:'Provide individuals with a copy of their PII and information about how it is processed'},
                {right:'Right to Rectification', desc:'Correct inaccurate or incomplete PII upon request'},
                {right:'Right to Erasure', desc:'Delete PII where no legal basis for retention exists — the right to be forgotten'},
                {right:'Right to Restriction', desc:'Limit processing while a dispute or assessment is in progress'},
                {right:'Right to Data Portability', desc:'Provide PII in machine-readable format for transfer to another controller'},
                {right:'Right to Object', desc:'Allow objection to processing based on legitimate interest or direct marketing'},
              ].map(({right, desc}, i) => (
                <div key={i} className="right-item anim">
                  <div className="ri-badge">Right {i + 1}</div>
                  <strong>{right}</strong>
                  <span>{desc}</span>
                </div>
              ))}
            </div>
            <p>Each right must have a corresponding technical capability — not just a policy. The ability to export a user's data in machine-readable format, delete their records across all systems including backups, and verify the identity of the requesting party must all be tested and evidenced before the audit.</p>
          </section>

          <section id="vendor-risk">
            <h2>Third-Party Privacy Risk — <em>Processor Obligations</em></h2>
            <p>ISO 27701 places significant emphasis on the privacy risks introduced by third-party processors and sub-processors. For PII controllers, only engage processors who provide sufficient guarantees of appropriate privacy controls — SOC 2 reports, ISO 27701 certificates, or equivalent evidence. Data Processing Agreements must be in place with all processors handling your customers' PII, specifying PII categories, processing purposes, sub-processor notification obligations, and security requirements.</p>
            <p>Maintain a register of all processors and sub-processors including their processing locations — to identify cross-border transfer implications — and establish a notification process for when processors engage new sub-processors or experience a breach affecting your data. This processor register must be kept current and reviewed as part of each management review cycle.</p>
          </section>

          <section id="reg-mapping">
            <h2>Regulatory Mapping — <em>One Standard, Three Regimes</em></h2>
            <div className="reg-table-wrap">
              <table className="reg-table">
                <thead><tr><th>Regulation</th><th>Key ISO 27701 Coverage</th><th>What It Demonstrates</th></tr></thead>
                <tbody>
                  <tr><td>GDPR</td><td>Annex D provides article-by-article mapping covering Articles 5, 6, 7, 13–17, 25, 28, 30, 32, 33, 35</td><td>Principles of processing, lawful basis, consent, data subject rights, privacy by design, processor agreements, RoPA, security, breach notification, and DPIAs</td></tr>
                  <tr><td>DPDP Act (India)</td><td>Sections 6 (consent), 7 (notice), 8 (obligations), 11 (data principal rights)</td><td>Consent management, data minimisation, purpose limitation, data subject rights — aligned but formal mapping documentation still maturing</td></tr>
                  <tr><td>CCPA / CPRA</td><td>Data subject rights controls — access, deletion, portability, opt-out</td><td>California consumer rights and CCPA's data inventory obligations via the RoPA requirement</td></tr>
                  <tr><td>HIPAA</td><td>Privacy Rule safeguards, access controls, minimum necessary standard</td><td>Technical and administrative safeguards for PHI overlap significantly with ISO 27701 PII controls</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="audit">
            <h2>What the <em>Certification Audit Looks Like</em></h2>
            <p>ISO 27701 is audited as an extension of ISO 27001 — typically by the same certification body in the same audit engagement. Auditors assess evidence across three areas: documentation, implementation, and operational maturity.</p>
            <p><strong>Documentation</strong> — Privacy policy and PIMS scope, RoPA covering all PII processing activities, DPIA records for high-risk processing, processor agreements and sub-processor registers, data subject rights request logs.</p>
            <p><strong>Implementation evidence</strong> — Consent management logs, data minimisation enforcement evidence, access control restrictions to PII-handling personnel, retention schedules and deletion or anonymisation records.</p>
            <p><strong>Operational maturity</strong> — Completed internal PIMS audits, management review records addressing privacy metrics, corrective actions from privacy incidents, privacy training completion records for all staff handling PII.</p>
          </section>

          <section id="roadmap">
            <h2>Implementation Roadmap — <em>6 to 9 Months from ISO 27001</em></h2>
            <div className="roadmap-list">
              <div className="rm-event anim">
                <div className="rm-phase">Phase 1</div>
                <span className="rm-duration">Months 1–2</span>
                <strong>Gap assessment and PIMS scoping</strong>
                <p>Conduct a gap assessment against ISO 27701 requirements using your existing ISO 27001 ISMS as the baseline. Define the PIMS scope — which legal entities, systems, and PII processing activities are in scope. Confirm whether your organisation operates as a PII controller, processor, or both.</p>
              </div>
              <div className="rm-event anim">
                <div className="rm-phase">Phase 2</div>
                <span className="rm-duration">Months 3–4</span>
                <strong>Foundation controls — RoPA, legal basis, processor agreements</strong>
                <p>Build or update the RoPA to cover all in-scope PII processing activities. Document the legal basis for each processing activity. Review and update all processor agreements to ensure ISO 27701 alignment. Establish the data subject rights request process and assign ownership.</p>
              </div>
              <div className="rm-event anim">
                <div className="rm-phase">Phase 3</div>
                <span className="rm-duration">Months 5–6</span>
                <strong>Operational controls — DPIAs, consent, retention, training</strong>
                <p>Implement the DPIA process and conduct DPIAs for any in-scope high-risk processing. Update data retention schedules and implement or verify technical deletion and anonymisation capabilities. Deploy or verify consent management mechanisms. Deliver privacy awareness training to all staff handling PII.</p>
              </div>
              <div className="rm-event anim">
                <div className="rm-phase">Phase 4</div>
                <span className="rm-duration">Months 7–9</span>
                <strong>Internal audit, management review, and certification</strong>
                <p>Conduct an internal PIMS audit against ISO 27701 requirements. Perform a management review explicitly addressing privacy performance. Remediate findings from the internal audit. Engage the certification body and schedule the Stage 1 and Stage 2 audit — combined with your ISO 27001 surveillance or recertification if timing aligns.</p>
              </div>
            </div>
          </section>

          <div className="cta-banner">
            <h3>Planning Your ISO 27701 Implementation?</h3>
            <p>SecComply runs ISO 27701 implementations with pre-built control frameworks, GDPR and DPDP mapping, RoPA templates, and DPIA workflows — so your team focuses on implementation, not documentation overhead.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Privacy Compliance Assessment →</a>
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
                {q:"What is ISO 27701?", a:"ISO 27701 is an international standard that extends ISO 27001 to cover privacy, providing a framework for building and maintaining a Privacy Information Management System (PIMS). Published in 2019, it specifies requirements for processing Personally Identifiable Information in a transparent, accountable, and demonstrably compliant manner for both PII controllers and PII processors."},
                {q:"Do you need ISO 27001 before pursuing ISO 27701?", a:"ISO 27701 is technically an extension to ISO 27001 and cannot stand alone without it as the foundation. However, organisations do not need to achieve ISO 27001 certification first — they can pursue both certifications simultaneously in a single unified programme. For organisations already certified to ISO 27001, adding ISO 27701 requires extending the existing ISMS to cover privacy controls, not rebuilding it from scratch."},
                {q:"What is a Record of Processing Activities (RoPA)?", a:"A RoPA is a documented inventory of all PII processing activities within an organisation. Required under both ISO 27701 and GDPR Article 30, each entry captures the processing purpose, legal basis, categories of data subjects and PII, recipients and third parties, retention periods, and security measures. The RoPA must be maintained as a living document with a defined owner, change management process, and regular review cycle."},
                {q:"Does ISO 27701 certification prove GDPR compliance?", a:"No. ISO 27701 certification does not equal GDPR compliance, but ISO 27701 Annex D provides a direct article-by-article mapping to GDPR covering Articles 5, 6, 7, 13-17, 25, 28, 30, 32, 33, and 35. In practice, ISO 27701 certification is widely accepted by regulators and enterprise customers as strong evidence of GDPR compliance readiness."},
                {q:"How long does ISO 27701 implementation take?", a:"For organisations starting from ISO 27001 certification, a realistic ISO 27701 implementation timeline runs 6 to 9 months across four phases: gap assessment and scoping (months 1-2), foundation controls including RoPA and processor agreements (months 3-4), operational controls including DPIAs and consent management (months 5-6), and internal audit and certification (months 7-9)."},
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
              <li><a href="#what-is" className="toc-link">What Is ISO 27701?</a></li>
              <li><a href="#how-it-relates" className="toc-link">Relation to ISO 27001</a></li>
              <li><a href="#what-it-requires" className="toc-link">What It Requires</a></li>
              <li><a href="#ropa" className="toc-link">The RoPA</a></li>
              <li><a href="#privacy-by-design" className="toc-link">Privacy by Design</a></li>
              <li><a href="#data-subject-rights" className="toc-link">Data Subject Rights</a></li>
              <li><a href="#vendor-risk" className="toc-link">Third-Party Privacy Risk</a></li>
              <li><a href="#reg-mapping" className="toc-link">Regulatory Mapping</a></li>
              <li><a href="#audit" className="toc-link">Certification Audit</a></li>
              <li><a href="#roadmap" className="toc-link">Implementation Roadmap</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Reading</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/iso-27001-explained-startups" target="_blank">🌍 ISO 27001 Explained</a></li>
              <li><a href="https://seccomply.net/resources/blog/gdpr-vs-dpdp" target="_blank">⚖️ GDPR vs DPDP Act</a></li>
              <li><a href="https://seccomply.net/resources/blog/dpdp-act-2023-explained" target="_blank">🇮🇳 DPDP Act 2023</a></li>
              <li><a href="https://seccomply.net/resources/blog/tprm-best-practices" target="_blank">🔗 TPRM Best Practices</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">ISO 27701</span><span className="tag">PIMS</span><span className="tag">Privacy</span><span className="tag">GDPR</span><span className="tag">DPDP</span><span className="tag">RoPA</span><span className="tag">DPIA</span><span className="tag">Data Subject Rights</span><span className="tag">ISO 27001</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>ISO 27701 Ready?</h4>
            <p>Free assessment — we map your ISO 27001 ISMS to ISO 27701 and build the PIMS on top.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Assessment →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}