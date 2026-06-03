import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function TPRMBestPractices() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/tprm-best-practices'); const ttl = encodeURIComponent('Third-Party Risk Management Best Practices, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/tprm-best-practices'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
      function toast(msg) { let t = document.getElementById('sc-toast'); if (!t) { t = document.createElement('div'); t.id = 'sc-toast'; t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:#0081f2;color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgba(0, 129, 242,.4);opacity:0;transition:opacity .3s;pointer-events:none'; document.body.appendChild(t); } t.textContent = msg; t.style.opacity = '1'; clearTimeout(t._tid); t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500); }
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
      document.querySelectorAll('script[type="application/ld+json"]').forEach(s => { try { const d = JSON.parse(s.textContent); const today = new Date().toISOString().split('T')[0]; const fix = obj => { if (!obj || typeof obj !== 'object') return; Object.keys(obj).forEach(k => { if (k === 'dateModified') obj[k] = today; fix(obj[k]); }); }; fix(d); s.textContent = JSON.stringify(d); } catch (_) {} });
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Third-Party Risk Management Best Practices: The Complete Guide | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="Six TPRM best practices that go beyond vendor questionnaires ,vendor tiering, access scoping, contractual controls, continuous monitoring, and the offboarding gap most organisations miss. With Target, Okta, British Airways, and M&S breach case studies." />
        <meta name="keywords" content="third party risk management, TPRM best practices, vendor risk management, vendor questionnaire security, fourth party risk, supply chain risk, ISO 27001 vendor risk, SOC 2 third party, GDPR vendor risk, right to audit clause, vendor offboarding" />
        <meta property="og:title" content="Third-Party Risk Management Best Practices: The Complete Guide" />
        <meta property="og:description" content="62% of breaches are traced to a third party. Most TPRM programmes are built around spreadsheets, annual questionnaires, and optimistic assumptions ,none of which are adequate. Here's what actually works." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/tprm-best-practices" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/tprm-og.png" />
        <meta property="article:published_time" content="2026-03-24" />
        <meta property="article:author" content="Gauri Khatate" />
        <meta property="article:tag" content="TPRM" />
        <meta property="article:tag" content="Vendor Risk" />
        <meta property="article:tag" content="Supply Chain Security" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/tprm-best-practices" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", "headline": "Third-Party Risk Management Best Practices: The Complete Guide", "description": "Six TPRM best practices ,vendor tiering, access scoping, contractual controls, continuous monitoring, and offboarding ,with Target, Okta, British Airways, and M&S breach case studies.", "author": { "@type": "Person", "name": "Gauri Khatate", "jobTitle": "Cybersecurity Analyst", "worksFor": { "@type": "Organization", "name": "SecComply" } }, "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } }, "datePublished": "2026-03-24", "dateModified": "2026-03-24", "mainEntityOfPage": "https://seccomply.net/resources/blog/tprm-best-practices", "keywords": "TPRM, third party risk, vendor risk management, supply chain security, ISO 27001, SOC 2, GDPR, fourth party risk", "articleSection": "Vendor Risk", "wordCount": 2100, "timeRequired": "PT7M" },
            { "@type": "FAQPage", "mainEntity": [
              { "@type": "Question", "name": "What is Third-Party Risk Management (TPRM)?", "acceptedAnswer": { "@type": "Answer", "text": "Third-Party Risk Management (TPRM) is the process of identifying, assessing, and mitigating the risks associated with external vendors, suppliers, and service providers that have access to your systems, data, or critical business functions. It covers cybersecurity risk, compliance risk, operational concentration risk, and fourth-party (your vendor's vendor) risk. Effective TPRM goes well beyond annual vendor questionnaires to include tiering, access scoping, contractual controls, and continuous monitoring." } },
              { "@type": "Question", "name": "What is fourth-party risk?", "acceptedAnswer": { "@type": "Answer", "text": "Fourth-party risk is the risk posed by your vendor's vendors ,the sub-processors, cloud providers, and contractors that your direct suppliers depend on. The Okta breach in 2022 is the clearest example: Okta customers had vetted Okta, but nobody had vetted Okta's subprocessor, which was compromised by the LAPSUS$ group. Managing fourth-party risk requires requiring sub-processor disclosures from your critical vendors and flowing contractual security obligations down the supply chain." } },
              { "@type": "Question", "name": "How should vendors be tiered in a TPRM programme?", "acceptedAnswer": { "@type": "Answer", "text": "Vendors should be tiered by two dimensions: the sensitivity of the data or systems they can access, and the business impact if they are compromised or go offline. Tier 1 (Critical) vendors have direct access to sensitive data or critical systems and require continuous monitoring, quarterly review, full technical assessment, and right-to-audit clauses. Tier 2 (Significant) vendors require semi-annual review and evidence-validated questionnaires. Tier 3 (Standard) vendors with no data access and low business impact require annual review at contract renewal." } },
              { "@type": "Question", "name": "Which compliance frameworks require TPRM?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001 Annex A.5.19 and A.5.21 require information security in supplier relationships and management of ICT supply chain. SOC 2 CC9.2 requires vendor risk management processes. GDPR Article 28 requires Data Processing Agreements with all processors and sub-processors. The DPDP Act Section 8(5) requires reasonable safeguards including vendor oversight. PCI DSS Requirement 12.8 requires management of service providers who could affect cardholder data security." } },
              { "@type": "Question", "name": "What contract clauses are essential for vendor risk management?", "acceptedAnswer": { "@type": "Answer", "text": "Critical contract provisions for any vendor with material data access include: breach notification within 24 hours of discovery, right-to-audit clauses exercisable on reasonable notice, sub-processor disclosure and prior approval requirements, minimum security baseline requirements (MFA, encryption, patch cadence), and termination for cause on security grounds without penalty. For GDPR and DPDP compliance, a Data Processing Agreement (DPA) with standard contractual clauses is mandatory." } }
            ]},
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
              { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
              { "@type": "ListItem", "position": 4, "name": "TPRM Best Practices", "item": "https://seccomply.net/resources/blog/tprm-best-practices" }
            ]}
          ]
        }) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#0081f2;--cy2:#d0521f;--glow:rgba(0, 129, 242,.12);--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(0, 129, 242,.2);--bs:rgba(255,255,255,.06);--red:#ff4d6d;--am:#ffb703;--gr:#06d6a0;--serif:'Inter',sans-serif;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#0081f2,#38A8FF);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none;transition:color .2s}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .cspm-hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem;display:block!important}
    .cspm-hero-badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;gap:5px;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(0, 129, 242,.1);color:var(--cy);border:1px solid rgba(0, 129, 242,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
    .badge-am{background:rgba(255,183,3,.1);color:var(--am);border:1px solid rgba(255,183,3,.25)}
    .cspm-hero-h1{font-family:var(--serif);font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .cspm-hero-h1 em{font-style:italic;color:var(--cy)}
    .cspm-hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .cspm-author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .cspm-author-strip .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#0081f2,#38A8FF);display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(0, 129, 242,.3)}
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
    .pull-quote{border-left:4px solid var(--cy);padding:1.4rem 2rem;margin:2.5rem 0;background:linear-gradient(135deg,rgba(0, 129, 242,.06),transparent);border-radius:0 12px 12px 0}
    .pull-quote p{font-family:var(--serif);font-size:1.12rem;font-style:italic;color:var(--tx)!important;margin-bottom:.5rem!important;line-height:1.6!important}
    .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin:2.5rem 0}
    .stat-card{background:var(--bgc);border:1px solid var(--bo);border-radius:14px;padding:1.5rem;text-align:center;position:relative;overflow:hidden}
    .stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#0081f2,#38A8FF)}
    .stat-n{font-family:var(--serif);font-size:2.1rem;font-weight:700;color:var(--cy);line-height:1;margin-bottom:.4rem}
    .stat-l{font-size:.75rem;color:var(--tm);line-height:1.4}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-danger{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .co-key{background:rgba(0, 129, 242,.06);border:1px solid rgba(0, 129, 242,.2)}
    .co-sc{background:rgba(6,214,160,.05);border:1px solid rgba(6,214,160,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .feat-list{list-style:none;margin:1.5rem 0;display:flex;flex-direction:column;gap:.65rem}
    .feat-list li{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s,background .2s}
    .feat-list li:hover{border-color:var(--bo);background:var(--bgc)}
    .f-num{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,#0081f2,#38A8FF);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:2px}
    .f-body strong{display:block;color:var(--tx);font-size:.89rem;margin-bottom:3px}
    .f-body span{font-size:.83rem;color:var(--tm)}
    .risk-cat-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .risk-cat{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem;transition:border-color .2s}
    .risk-cat:hover{border-color:var(--bo)}
    .risk-cat .rc-icon{font-size:1.4rem;margin-bottom:.5rem}
    .risk-cat h3{font-size:.92rem;font-weight:700;color:var(--tx);margin-bottom:.35rem}
    .risk-cat p{font-size:.81rem;color:var(--tm);margin-bottom:0;line-height:1.6}
    .tier-table{width:100%;border-collapse:collapse;margin:1.5rem 0;border-radius:14px;overflow:hidden;border:1px solid var(--bo)}
    .tier-table th{background:var(--bgc);padding:.85rem 1.1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .tier-table td{padding:.82rem 1.1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .tier-table tr:last-child td{border-bottom:none}
    .tier-table tr:hover td{background:rgba(0, 129, 242,.03)}
    .tier-table td:first-child{color:var(--tx);font-weight:600}
    .t1{background:rgba(255,77,109,.08)!important}
    .t2{background:rgba(255,183,3,.06)!important}
    .t3{background:rgba(6,214,160,.05)!important}
    .arrow-list{list-style:none;margin:1.2rem 0;display:flex;flex-direction:column;gap:.5rem}
    .arrow-list li{display:flex;align-items:flex-start;gap:.7rem;font-size:.92rem;color:var(--tb);padding:.4rem 0;border-bottom:1px solid var(--bs)}
    .arrow-list li:last-child{border-bottom:none}
    .arrow-list li::before{content:'→';color:var(--cy);font-weight:700;flex-shrink:0;margin-top:1px}
    .roadmap-list{display:flex;flex-direction:column;gap:.65rem;margin:1.5rem 0}
    .roadmap-item{display:flex;gap:1rem;padding:.9rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-left:3px solid var(--cy);border-radius:0 10px 10px 0;transition:border-color .2s}
    .roadmap-item:hover{border-color:var(--bo)}
    .rm-step{font-size:.7rem;font-weight:800;color:var(--cy);white-space:nowrap;min-width:48px;margin-top:2px}
    .rm-body strong{display:block;color:var(--tx);font-size:.88rem;margin-bottom:2px}
    .rm-body span{font-size:.81rem;color:var(--tm)}
    .self-assess{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .sa-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem}
    .sa-card h3{font-size:.88rem;font-weight:700;margin-bottom:.7rem}
    .sa-card ul{list-style:none;display:flex;flex-direction:column;gap:.4rem}
    .sa-card ul li{font-size:.82rem;color:var(--tm);display:flex;gap:.5rem}
    .sa-card ul li::before{content:'→';color:var(--cy);flex-shrink:0}
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
    .cta-banner{background:linear-gradient(135deg,rgba(0, 129, 242,.08),rgba(0, 129, 242,.03));border:1px solid rgba(0, 129, 242,.25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
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
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgba(0, 129, 242,.07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);cursor:default;transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy);background:var(--glow)}
    .sb-cta{background:linear-gradient(135deg,rgba(0, 129, 242,.08),rgba(0, 129, 242,.03));border:1px solid rgba(0, 129, 242,.25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-family:var(--serif);font-size:.98rem;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(0, 129, 242,.4);transition:transform .2s;z-index:50}
    #btt.vis{display:flex}#btt:hover{transform:translateY(-3px)}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:900px){.stats-row{grid-template-columns:repeat(2,1fr)}.risk-cat-grid{grid-template-columns:1fr}.self-assess{grid-template-columns:1fr}}
    @media(max-width:768px){.stats-row{grid-template-columns:1fr}.blog-layout{padding:0 1.25rem 3rem}.cspm-hero-wrap{padding:2rem 1.25rem}}
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
        <span style={{color:'var(--tb)'}}>TPRM Best Practices</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">🔗 Vendor Risk</span>
          <span className="badge badge-bl">🏢 Supply Chain</span>
          <span className="badge badge-am">📋 TPRM</span>
          <span className="badge badge-gr">✓ ISO 27001 · SOC 2 · GDPR</span>
        </div>
        <h1 className="cspm-hero-h1">Third-Party Risk Management: <em>Best Practices</em> for Organisations That Can't Afford to Trust on Faith</h1>
        <p className="cspm-hero-sub">Your security is only as strong as the weakest vendor with access to your systems. 62% of breaches are traced to a third party ,yet most TPRM programmes still rely on annual questionnaires and optimistic assumptions. Here's what actually works.</p>

        <div className="cspm-author-strip">
          <div className="avatar">GK</div>
          <div className="author-info">
            <div className="name">Gauri Khatate</div>
            <div className="meta-row"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Analyst</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
            <div className="date-row"><span>📅 March 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=480&fit=crop" alt="Third party vendor risk management supply chain" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}}/>
        </div>
        <p className="img-cap">Third-party risk is the dominant breach vector for organisations of every size. Most attacks don't come through the front door ,they walk in through a supplier, contractor, or SaaS tool with overprivileged access.</p>

        {/* SVG DASHBOARD */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 420" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="tg1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0081f2"/><stop offset="100%" stopColor="#38A8FF"/></linearGradient>
              <linearGradient id="tg2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff4d6d"/><stop offset="100%" stopColor="#d0304e"/></linearGradient>
              <linearGradient id="tg3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06d6a0"/><stop offset="100%" stopColor="#04b080"/></linearGradient>
              <pattern id="vp" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(0, 129, 242,0.04)"/></pattern>
            </defs>
            <rect width="960" height="420" fill="url(#vp)"/>
            <text x="480" y="34" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">TPRM Programme Dashboard ,Vendor Risk Overview</text>

            {/* LEFT: Vendor inventory */}
            <rect x="16" y="50" width="220" height="354" rx="12" fill="#081826" stroke="rgba(0, 129, 242,0.15)" strokeWidth="1"/>
            <text x="36" y="74" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">VENDOR INVENTORY (47)</text>
            {[
              {tier:'Tier 1 ,Critical',    count:6,  col:'#ff4d6d', pct:13},
              {tier:'Tier 2 ,Significant', count:14, col:'#ffb703', pct:30},
              {tier:'Tier 3 ,Standard',    count:27, col:'#06d6a0', pct:57},
            ].map(({tier,count,col,pct},i)=>(
              <g key={i}>
                <rect x="28" y={86+i*44} width="196" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke={`${col}20`} strokeWidth="1"/>
                <circle cx="46" cy={103+i*44} r="8" fill={`${col}18`} stroke={col} strokeWidth="1.2"/>
                <text x="46" y={107+i*44} textAnchor="middle" fill={col} fontSize="8" fontWeight="700" fontFamily="sans-serif">{count}</text>
                <text x="62" y={101+i*44} fill="rgba(200,214,229,0.7)" fontSize="8.5" fontFamily="sans-serif">{tier}</text>
                <rect x="62" y={106+i*44} width="140" height="6" rx="3" fill="rgba(255,255,255,0.04)"/>
                <rect x="62" y={106+i*44} width={Math.round(140*pct/100)} height="6" rx="3" fill={col}/>
                <text x="208" y={113+i*44} fill={col} fontSize="8" fontWeight="700" fontFamily="sans-serif">{pct}%</text>
              </g>
            ))}

            {/* Access type breakdown */}
            <text x="36" y="226" fill="rgba(200,214,229,0.6)" fontSize="9" fontWeight="600" fontFamily="sans-serif">ACCESS TYPE</text>
            {[
              {type:'Direct System Access',  n:12, col:'#ff4d6d'},
              {type:'Data Processing',       n:18, col:'#0081f2'},
              {type:'API Integration',       n:9,  col:'#ffb703'},
              {type:'No System Access',      n:8,  col:'#06d6a0'},
            ].map(({type,n,col},i)=>(
              <g key={i}>
                <rect x="28" y={234+i*30} width="196" height="22" rx="6" fill="rgba(255,255,255,0.02)"/>
                <text x="44" y={249+i*30} fill="rgba(200,214,229,0.6)" fontSize="8.5" fontFamily="sans-serif">{type}</text>
                <text x="206" y={249+i*30} textAnchor="end" fill={col} fontSize="9" fontWeight="700" fontFamily="sans-serif">{n}</text>
              </g>
            ))}

            {/* Red flags */}
            <rect x="28" y="362" width="196" height="34" rx="8" fill="rgba(255,77,109,0.08)" stroke="rgba(255,77,109,0.2)" strokeWidth="1"/>
            <text x="126" y="378" textAnchor="middle" fill="#ff4d6d" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">⚠ 3 former vendor accounts still active</text>
            <text x="126" y="390" textAnchor="middle" fill="rgba(255,77,109,0.6)" fontSize="7.5" fontFamily="sans-serif">Immediate review required</text>

            <line x1="250" y1="46" x2="250" y2="410" stroke="rgba(0, 129, 242,0.07)" strokeWidth="1"/>

            {/* CENTRE: Risk heatmap */}
            <text x="490" y="70" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">VENDOR RISK HEATMAP ,TOP 8 CRITICAL</text>
            {[
              {name:'Payroll SaaS',          cyber:'Critical', ops:'High',   col:'#ff4d6d'},
              {name:'Cloud Infrastructure',  cyber:'Critical', ops:'Critical',col:'#ff4d6d'},
              {name:'Identity Provider',     cyber:'High',     ops:'Critical',col:'#ff4d6d'},
              {name:'CRM Platform',          cyber:'High',     ops:'High',   col:'#ffb703'},
              {name:'Backup Service',        cyber:'Medium',   ops:'Critical',col:'#ffb703'},
              {name:'Email Security',        cyber:'High',     ops:'Medium', col:'#0081f2'},
              {name:'HRIS System',           cyber:'Medium',   ops:'High',   col:'#0081f2'},
              {name:'Dev Toolchain',         cyber:'Medium',   ops:'Medium', col:'#06d6a0'},
            ].map(({name,cyber,ops,col},i)=>(
              <g key={i}>
                <rect x="262" y={82+i*38} width="430" height="30" rx="7" fill="#091826" stroke={`${col}22`} strokeWidth="1"/>
                <rect x="262" y={82+i*38} width="3" height="30" rx="1.5" fill={col}/>
                <text x="278" y={101+i*38} fill="rgba(200,214,229,0.8)" fontSize="9" fontFamily="sans-serif">{name}</text>
                <rect x="450" y={88+i*38} width="68" height="14" rx="4" fill={`${col}15`}/>
                <text x="484" y={99+i*38} textAnchor="middle" fill={col} fontSize="7.5" fontWeight="700" fontFamily="sans-serif">{cyber}</text>
                <rect x="526" y={88+i*38} width="68" height="14" rx="4" fill={`${col}15`}/>
                <text x="560" y={99+i*38} textAnchor="middle" fill={col} fontSize="7.5" fontWeight="700" fontFamily="sans-serif">{ops}</text>
                <text x="450" y={86+i*38} fill="rgba(200,214,229,0.3)" fontSize="7" fontFamily="sans-serif">Cyber Risk</text>
                <text x="526" y={86+i*38} fill="rgba(200,214,229,0.3)" fontSize="7" fontFamily="sans-serif">Ops Risk</text>
              </g>
            ))}

            <line x1="706" y1="46" x2="706" y2="410" stroke="rgba(0, 129, 242,0.07)" strokeWidth="1"/>

            {/* RIGHT: Programme health */}
            <text x="724" y="70" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">PROGRAMME HEALTH</text>
            {[
              {label:'Vendor tiering complete',       done:true},
              {label:'Access scoped ,all Tier 1',    done:true},
              {label:'DPAs signed ,all processors',  done:true},
              {label:'Right-to-audit exercised',      done:false},
              {label:'Continuous monitoring active',  done:false},
              {label:'Offboarding automated',         done:false},
              {label:'Sub-processor disclosures',     done:false},
            ].map(({label,done},i)=>(
              <g key={i}>
                <circle cx="730" cy={93+i*44} r="9" fill={done?"rgba(6,214,160,0.1)":"rgba(255,77,109,0.08)"} stroke={done?"#06d6a0":"rgba(255,77,109,0.3)"} strokeWidth="1.2"/>
                <text x="730" y={97+i*44} textAnchor="middle" fill={done?"#06d6a0":"#ff4d6d"} fontSize="9" fontFamily="sans-serif">{done?"✓":"✗"}</text>
                <text x="748" y={97+i*44} fill={done?"rgba(200,214,229,0.8)":"rgba(200,214,229,0.45)"} fontSize="9" fontFamily="sans-serif">{label}</text>
              </g>
            ))}
            <rect x="716" y="408" width="228" height="0" rx="0"/>
          </svg>
        </div>
        <p className="img-cap">TPRM dashboard ,vendor inventory by tier, access type breakdown, top 8 critical vendor risk heatmap (cyber + operational), programme health checklist, and active red flags requiring immediate action.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#why-questionnaires-fail">Why Questionnaires Fail</a>
            <a href="#risk-categories">4 Risk Categories to Track</a>
            <a href="#tier-vendors">Best Practice 1: Tier Vendors</a>
            <a href="#verify">Best Practice 2: Verify, Don't Trust</a>
            <a href="#scope-access">Best Practice 3: Scope Access</a>
            <a href="#contracts">Best Practice 4: Contract Controls</a>
            <a href="#monitor">Best Practice 5: Monitor Continuously</a>
            <a href="#offboarding">Best Practice 6: Offboarding</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-target="62" data-suffix="%">0%</div><div className="stat-l">of breaches traced to a third party<br/><span style={{fontSize:'.68rem',opacity:.55}}>Verizon DBIR 2024</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="54" data-suffix="%">0%</div><div className="stat-l">of organisations don't maintain a complete vendor inventory<br/><span style={{fontSize:'.68rem',opacity:.55}}>Ponemon Institute</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="15" data-suffix="+">0+</div><div className="stat-l">average vendors with privileged access per mid-market firm<br/><span style={{fontSize:'.68rem',opacity:.55}}>CrowdStrike 2024</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="287" data-suffix=" days">0 days</div><div className="stat-l">average time a third-party breach goes undetected<br/><span style={{fontSize:'.68rem',opacity:.55}}>IBM Security 2024</span></div></div>
          </div>

          <section id="why-questionnaires-fail">
            <h2>Why the Standard Vendor Questionnaire <em>Is Broken</em></h2>
            <p>Most organisations approach third-party risk the same way: send a 50-question security questionnaire to new vendors, file the responses, repeat annually. If the vendor ticks all the boxes, they get access. If they're a big enough supplier, you might ask for their ISO 27001 certificate.</p>
            <p>The problem is obvious once you say it out loud: a questionnaire tells you what a vendor's security policies claim to be. It tells you nothing about whether those policies are implemented, enforced, or tested. It's the equivalent of asking a job candidate to write their own reference letter.</p>
            <div className="callout co-danger">
              <span className="co-icon">🔴</span>
              <div className="co-body">
                <strong>Real-World Case: Target ,The HVAC Vendor That Cost $200M</strong>
                <p>Attackers didn't breach Target directly. They compromised Fazio Mechanical, a small HVAC contractor with remote access to Target's systems for monitoring heating and cooling equipment. The access wasn't segmented ,once attackers were on Fazio's systems, they could reach Target's payment infrastructure. 40 million credit card numbers were stolen. Total costs exceeded $200M. The HVAC vendor had almost certainly ticked the right boxes on a vendor questionnaire. Nobody had verified that their access was scoped to what they needed.</p>
              </div>
            </div>
          </section>

          <section id="risk-categories">
            <h2>The Four Categories of Third-Party Risk <em>You Actually Need to Track</em></h2>
            <p>Third-party risk isn't monolithic. Organisations that manage it well distinguish between different risk types and apply controls accordingly ,instead of treating a cloud payroll provider the same as a local printer supplier.</p>
            <div className="risk-cat-grid">
              <div className="risk-cat anim"><div className="rc-icon">🔐</div><h3>Cybersecurity &amp; Data Access Risk</h3><p>The vendor has direct or indirect access to your systems, data, or network. Highest-consequence category. Controls: access scoping, MFA enforcement, continuous monitoring, contractual breach notification requirements.</p></div>
              <div className="risk-cat anim"><div className="rc-icon">📋</div><h3>Compliance &amp; Regulatory Risk</h3><p>The vendor processes data subject to GDPR, HIPAA, DPDP, or PCI-DSS. If they mishandle it, you carry the regulatory exposure. Controls: DPA agreements, right-to-audit clauses, evidence of their own certification.</p></div>
              <div className="risk-cat anim"><div className="rc-icon">⚙️</div><h3>Operational Concentration Risk</h3><p>You depend on this vendor for a critical business function. If they go down, you go down. Controls: BCP/DR review, SLA validation, fallback supplier identification.</p></div>
              <div className="risk-cat anim"><div className="rc-icon">🌐</div><h3>Fourth-Party (Nth-Party) Risk</h3><p>Your vendor's vendor. Many organisations don't realise their 'secure' SaaS provider runs on a cloud sub-processor that had a breach last year. Controls: supply chain transparency, sub-processor disclosures, contractual flow-down obligations.</p></div>
            </div>
          </section>

          <section id="tier-vendors">
            <h2>Best Practice 1: <em>Tier Your Vendors</em> Before You Do Anything Else</h2>
            <p>Not all vendors deserve the same scrutiny. Treating every vendor identically wastes resources and creates fatigue ,which is how critical vendors end up under-reviewed. Effective tiering is based on two dimensions: the sensitivity of data or systems the vendor can access, and the business impact if that vendor is compromised or goes offline.</p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The Re-Tiering Gap</strong>
                <p>Most TPRM programmes tier vendors once at onboarding and never revisit. A vendor that starts as Tier 3 ,a small SaaS tool with limited access ,can become Tier 1 after a product expansion or an internal decision to integrate it more deeply. Without regular re-tiering, your risk posture drifts invisibly.</p>
              </div>
            </div>
            <table className="tier-table">
              <thead><tr><th>Tier</th><th>Criteria</th><th>Review Cadence</th><th>Controls Required</th></tr></thead>
              <tbody>
                <tr className="t1"><td>Tier 1 ,Critical</td><td>Direct access to sensitive data or critical systems; significant business dependency</td><td>Continuous monitoring + quarterly review</td><td>Full technical assessment, access scoping, right-to-audit, incident notification SLA</td></tr>
                <tr className="t2"><td>Tier 2 ,Significant</td><td>Limited data access or moderate business dependency</td><td>Semi-annual review</td><td>Security questionnaire + evidence validation, contractual controls</td></tr>
                <tr className="t3"><td>Tier 3 ,Standard</td><td>No data access, low business impact</td><td>Annual review or at contract renewal</td><td>Standard vendor onboarding checklist</td></tr>
              </tbody>
            </table>
          </section>

          <section id="verify">
            <h2>Best Practice 2: <em>Verify, Don't Just Trust</em></h2>
            <p>When a vendor submits their ISO 27001 certificate and completed questionnaire, the instinct is to file it and move on. Resist that instinct. ISO certification tells you a vendor had the right controls in place at the time of audit ,not whether those controls are still functioning, whether staff turnover has left gaps, or whether a recent infrastructure change introduced new vulnerabilities. Certifications age. Threats don't wait for renewal cycles.</p>
            <div className="callout co-danger">
              <span className="co-icon">🔴</span>
              <div className="co-body">
                <strong>Real-World Case: Okta (2022) ,When the Identity Provider Is the Risk</strong>
                <p>The LAPSUS$ group compromised a customer support subprocessor used by Okta. Hundreds of Okta's enterprise customers ,who had no direct relationship with the subprocessor and no visibility into that vendor's security posture ,had to assess their own exposure. Okta's customers had vetted Okta. Nobody had vetted Okta's subprocessor. The lesson: your right-to-audit clause and sub-processor disclosure requirements need to cascade down the supply chain, not just to your direct vendors.</p>
              </div>
            </div>
            <p>Verification in practice means requesting evidence rather than assertions, exercising right-to-audit clauses for Tier 1 vendors, using external threat intelligence to monitor vendor exposure, and asking every critical vendor to disclose their material sub-processors with notification of any changes.</p>
          </section>

          <section id="scope-access">
            <h2>Best Practice 3: <em>Scope Access</em> to What's Actually Needed</h2>
            <p>The Target breach happened because an HVAC contractor had broader network access than they needed. This pattern repeats constantly. Vendors are onboarded with access scoped to 'everything that might be relevant,' and nobody revisits it. Principle of least privilege applies to every vendor with a login, an API key, or a network connection to your environment.</p>
            <ul className="arrow-list">
              <li><strong>Audit current vendor access before the next breach.</strong> Map every third party with access to your systems and document precisely what they can reach. You will almost certainly find over-provisioned accounts.</li>
              <li><strong>Time-box vendor access.</strong> Contractors and project-based vendors should have access that expires automatically when the engagement ends ,not accounts that linger indefinitely.</li>
              <li><strong>Segment vendor access from your core network.</strong> A vendor managing your endpoint monitoring tool shouldn't be able to reach your finance systems.</li>
              <li><strong>Require MFA for all vendor access.</strong> No exceptions. If a vendor pushes back on MFA requirements, that tells you something important about their security culture.</li>
            </ul>
            <div className="callout co-sc">
              <span className="co-icon">🟢</span>
              <div className="co-body">
                <strong>What Good Looks Like: Just-in-Time Vendor Access</strong>
                <p>A financial services firm in Bengaluru implemented just-in-time (JIT) access for all third-party vendors. Instead of persistent credentials, vendors request access for a specific task window ,maximum 8 hours ,approved via a workflow that logs the requester, reason, and systems accessed. The result: zero lingering vendor accounts (previously 14 accounts for vendors whose contracts had ended), a complete audit trail for every vendor access event, and a dramatic reduction in available attack surface.</p>
              </div>
            </div>

            {/* Inline image */}
            <div className="img-wrap" style={{marginTop:'1.5rem'}}>
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&h=360&fit=crop" alt="Vendor access management security controls" style={{width:'100%',display:'block',maxHeight:'320px',objectFit:'cover'}}/>
            </div>
            <p className="img-cap">Scoping vendor access to exactly what is needed ,and no more ,is the single most impactful control in any TPRM programme. The Target breach exploited access that was never scoped correctly.</p>
          </section>

          <section id="contracts">
            <h2>Best Practice 4: <em>Contractual Controls</em> That Actually Have Teeth</h2>
            <p>The legal side of TPRM is often treated as a procurement formality. Contracts get signed, DPA agreements get appended, and everyone moves on. But the contract is often the only leverage you have when something goes wrong ,and if it doesn't include the right clauses, you have no leverage at all.</p>
            <ul className="feat-list">
              <li className="anim"><div className="f-num">1</div><div className="f-body"><strong>Breach notification within 24 hours</strong><span>Your vendor contract should require notification within 24 hours of discovery ,you need time to assess your own exposure and meet your own regulatory obligations (DPDP zero-threshold, GDPR 72-hour rule).</span></div></li>
              <li className="anim"><div className="f-num">2</div><div className="f-body"><strong>Right-to-audit clauses</strong><span>The ability to audit a vendor's security controls on reasonable notice. Make it non-negotiable for Tier 1 suppliers. An annual or biennial technical assessment of a critical vendor's environment is table stakes ,not a sign of distrust.</span></div></li>
              <li className="anim"><div className="f-num">3</div><div className="f-body"><strong>Sub-processor disclosure and approval</strong><span>Vendors must disclose their sub-processors and notify you of changes before implementing them. This is the contractual mechanism that catches the Okta-style fourth-party risk scenario before it becomes your problem.</span></div></li>
              <li className="anim"><div className="f-num">4</div><div className="f-body"><strong>Security baseline requirements</strong><span>Specify minimum controls: MFA, encryption standards, patch cadence. Contractual requirements create accountability that questionnaires alone don't ,and give you grounds for termination if a vendor falls below the baseline.</span></div></li>
              <li className="anim"><div className="f-num">5</div><div className="f-body"><strong>Termination for cause on security grounds</strong><span>If a vendor suffers a breach affecting your data, you need the contractual right to terminate without penalty. Without this clause, you may be locked into a compromised vendor relationship while your own customers are exposed.</span></div></li>
            </ul>
            <div className="callout co-danger">
              <span className="co-icon">🔴</span>
              <div className="co-body">
                <strong>Real-World Case: British Airways (2018) ,A Third-Party Script, a £20M Fine</strong>
                <p>Attackers compromised a third-party JavaScript library running on British Airways' payment pages, skimming credit card details from approximately 500,000 customers. BA didn't write the malicious code ,it was injected into a vendor's script that BA included on their booking page. The ICO eventually settled the fine at £20M. Third-party code running in your environment is your risk. Sub-resource integrity checks, content security policies, and vendor code review processes are not optional for organisations running digital commerce.</p>
              </div>
            </div>
          </section>

          <section id="monitor">
            <h2>Best Practice 5: <em>Monitor Continuously,</em> Not Annually</h2>
            <p>Annual vendor reviews were adequate when the threat landscape changed slowly and vendor relationships were stable. Neither is true anymore. A vendor that passed their security review in January may have suffered a breach in March that they haven't publicly disclosed yet. None of this surfaces in a point-in-time questionnaire completed eight months ago.</p>
            <ul className="arrow-list">
              <li><strong>External attack surface monitoring.</strong> Tools that continuously scan the internet-facing infrastructure of your critical vendors for open ports, expired certificates, and misconfigured services.</li>
              <li><strong>Dark web and credential monitoring.</strong> Services that alert you when vendor credentials or data appear in breach databases or paste sites ,often before the vendor themselves are aware.</li>
              <li><strong>News and adverse media monitoring.</strong> Automated alerting for press coverage of vendor incidents, regulatory actions, or financial distress.</li>
              <li><strong>Vendor security ratings.</strong> Platforms like SecurityScorecard and BitSight provide continuous external security posture scores ,imperfect, but useful for prioritisation and trend analysis across your vendor portfolio.</li>
            </ul>
            <div className="callout co-danger">
              <span className="co-icon">🔴</span>
              <div className="co-body">
                <strong>Real-World Case: Marks &amp; Spencer (2025) ,The Vendor Oversight Gap</strong>
                <p>The M&amp;S ransomware attack, attributed to the Scattered Spider group, entered through a third-party IT help desk provider over a holiday weekend. Attackers used social engineering against the vendor's identity verification process to reset credentials and gain access to M&amp;S systems. Continuous behavioural analytics on vendor access patterns ,unusual login times, credential reset requests outside normal patterns, access from unexpected geographies ,could have flagged anomalous activity before it escalated. Point-in-time vendor audits do not catch this. Continuous monitoring does.</p>
              </div>
            </div>
          </section>

          <section id="offboarding">
            <h2>Best Practice 6: <em>Offboarding</em> as Rigorous as Onboarding</h2>
            <p>Ask any IT team how many former vendor accounts are still active in their environment. The answer is almost always more than they expect ,and more than they're comfortable with. Vendor offboarding is the step that gets forgotten. A contract ends, the business relationship concludes, and nobody tells IT to revoke access. Six months later, the vendor's former employee ,who still has credentials ,has moved to a competitor, or their systems have been compromised.</p>
            <ul className="arrow-list">
              <li><strong>Tie access revocation to contract end dates automatically.</strong> Build offboarding triggers into your procurement workflow ,not a manual IT ticket, but an automated deprovisioning event.</li>
              <li><strong>Audit vendor accounts quarterly for activity.</strong> Dormant accounts unused for 90 days are candidates for immediate review and likely deprovisioning.</li>
              <li><strong>Recover company assets.</strong> Laptops, tokens, and physical access credentials need to be collected at offboarding ,document this as a step in your procurement close-out process.</li>
              <li><strong>Document what data the vendor held.</strong> You need to know what was shared, where it lives, and what your data deletion obligations are under GDPR and DPDP.</li>
            </ul>
          </section>

          <section id="roadmap">
            <h2>A Practical TPRM <em>Roadmap</em></h2>
            <p>If you're building or overhauling your TPRM programme, you don't need to boil the ocean. Here's a grounded starting point:</p>
            <div className="roadmap-list">
              {[
                {step:'Step 1', title:'Build your vendor inventory', desc:'Not just a procurement list ,a security-relevant map of every third party with access to your systems, data, or critical infrastructure. Most organisations find more vendors than expected.'},
                {step:'Step 2', title:'Tier your vendors by risk', desc:'Apply the two-dimension model: data sensitivity and business impact. Assign proportionate controls to each tier. Schedule re-tiering at least annually or when vendor relationships change materially.'},
                {step:'Step 3', title:'Audit current access levels', desc:'Identify and remediate over-provisioned vendor accounts before your next review cycle. Expect to find accounts for vendors whose contracts ended months or years ago.'},
                {step:'Step 4', title:'Strengthen contractual controls', desc:'Review and update Tier 1 and Tier 2 vendor contracts. Ensure breach notification timelines, right-to-audit, and sub-processor disclosure are all present and enforceable.'},
                {step:'Step 5', title:'Implement continuous monitoring', desc:'Start with external attack surface monitoring and dark web alerting for your Tier 1 vendors. Expand to security ratings platforms as the programme matures.'},
                {step:'Step 6', title:'Automate offboarding', desc:'Build deprovisioning into your procurement workflow as a triggered, automated process ,not a manual IT ticket that depends on someone remembering to raise it.'},
              ].map(({step,title,desc},i)=>(
                <div key={i} className="roadmap-item anim">
                  <div className="rm-step">{step}</div>
                  <div className="rm-body"><strong>{title}</strong><span>{desc}</span></div>
                </div>
              ))}
            </div>
          </section>

          <div className="pull-quote">
            <p>"The organisations that handle third-party risk well aren't the ones with the longest questionnaires. They're the ones that verify what their vendors claim, scope access to what's actually needed, and monitor continuously rather than annually."</p>
          </div>

          <div className="cta-banner">
            <h3>Know Your Third-Party Risk Exposure ,Before Your Auditor Does</h3>
            <p>SecComply maps your vendor access landscape against your compliance framework ,ISO 27001, SOC 2, DPDP ,continuously, with evidence ready when you need it.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free TPRM Assessment →</a>
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
                {q:"What is Third-Party Risk Management (TPRM)?", a:"Third-Party Risk Management (TPRM) is the process of identifying, assessing, and mitigating the risks associated with external vendors, suppliers, and service providers that have access to your systems, data, or critical business functions. It covers cybersecurity risk, compliance risk, operational concentration risk, and fourth-party risk. Effective TPRM goes beyond annual vendor questionnaires to include tiering, access scoping, contractual controls, and continuous monitoring."},
                {q:"What is fourth-party risk?", a:"Fourth-party risk is the risk posed by your vendor's vendors ,the sub-processors, cloud providers, and contractors that your direct suppliers depend on. The Okta breach in 2022 is the clearest example: Okta customers had vetted Okta, but nobody had vetted Okta's subprocessor, which was compromised by the LAPSUS$ group. Managing fourth-party risk requires requiring sub-processor disclosures from your critical vendors and flowing contractual security obligations down the supply chain."},
                {q:"How should vendors be tiered in a TPRM programme?", a:"Vendors should be tiered by two dimensions: the sensitivity of the data or systems they can access, and the business impact if they are compromised or go offline. Tier 1 (Critical) vendors require continuous monitoring, quarterly review, full technical assessment, and right-to-audit clauses. Tier 2 (Significant) vendors require semi-annual review and evidence-validated questionnaires. Tier 3 (Standard) vendors require annual review at contract renewal."},
                {q:"Which compliance frameworks require TPRM?", a:"ISO 27001 Annex A.5.19 and A.5.21 require information security in supplier relationships and management of ICT supply chain. SOC 2 CC9.2 requires vendor risk management processes. GDPR Article 28 requires Data Processing Agreements with all processors and sub-processors. The DPDP Act Section 8(5) requires reasonable safeguards including vendor oversight. PCI DSS Requirement 12.8 requires management of service providers who could affect cardholder data security."},
                {q:"What contract clauses are essential for vendor risk management?", a:"Critical contract provisions include: breach notification within 24 hours of discovery, right-to-audit clauses exercisable on reasonable notice, sub-processor disclosure and prior approval requirements, minimum security baseline requirements (MFA, encryption, patch cadence), and termination for cause on security grounds without penalty. For GDPR and DPDP compliance, a Data Processing Agreement (DPA) is mandatory for all data processors."},
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
              <li><a href="#why-questionnaires-fail" className="toc-link">Why Questionnaires Fail</a></li>
              <li><a href="#risk-categories" className="toc-link">4 Risk Categories</a></li>
              <li><a href="#tier-vendors" className="toc-link">Tier Your Vendors</a></li>
              <li><a href="#verify" className="toc-link">Verify, Don't Trust</a></li>
              <li><a href="#scope-access" className="toc-link">Scope Access</a></li>
              <li><a href="#contracts" className="toc-link">Contract Controls</a></li>
              <li><a href="#monitor" className="toc-link">Monitor Continuously</a></li>
              <li><a href="#offboarding" className="toc-link">Offboarding</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Services</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/services/iso-27001" target="_blank">🌍 ISO 27001 Consulting</a></li>
              <li><a href="https://seccomply.net/services/soc-2" target="_blank">🛡️ SOC 2 Readiness</a></li>
              <li><a href="https://seccomply.net/services/compliance-as-a-service" target="_blank">📋 Compliance as a Service</a></li>
              <li><a href="https://seccomply.net/services/ciso" target="_blank">💼 CISO as a Service</a></li>
              <li><a href="https://seccomply.net/services/internal-audit" target="_blank">🔍 Internal Audit</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">TPRM</span><span className="tag">Vendor Risk</span><span className="tag">Supply Chain</span><span className="tag">Fourth-Party Risk</span><span className="tag">ISO 27001</span><span className="tag">SOC 2</span><span className="tag">GDPR</span><span className="tag">DPDP</span><span className="tag">Right to Audit</span><span className="tag">Least Privilege</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Know Your Vendor Exposure</h4>
            <p>Free TPRM assessment ,we map your vendor access landscape against ISO 27001, SOC 2, and DPDP.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Assessment →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
