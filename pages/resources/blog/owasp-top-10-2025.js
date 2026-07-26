import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function OWASPTop10() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/owasp-top-10-2025'); const ttl = encodeURIComponent('OWASP Top 10 2025 Edition Breakdown, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/owasp-top-10-2025'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
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
        <title>OWASP Top 10 -2025 Edition: What Every Developer and Security Team Must Know | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A complete breakdown of the OWASP Top 10 2025 edition -what changed, what each vulnerability means in practice, real-world examples, and actionable remediation guidance for every category." />
        <meta name="keywords" content="OWASP Top 10 2025, OWASP Top 10 breakdown, broken access control, cryptographic failures, injection attacks, OWASP web application security, IDOR vulnerability, SSRF vulnerability, security misconfiguration, vulnerable components, OWASP compliance" />
        <meta property="og:title" content="OWASP Top 10 -2025 Edition: What Every Developer and Security Team Must Know" />
        <meta property="og:description" content="The OWASP Top 10 is the most widely cited web application security standard in the world. Here is what changed in 2025, what each category means in practice, and how to fix them." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/owasp-top-10-2025" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/owasp-top-10-og.png" />
        <meta property="article:published_time" content="2026-03-24" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="OWASP" />
        <meta property="article:tag" content="Web Application Security" />
        <meta property="article:tag" content="AppSec" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/owasp-top-10-2025" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", "headline": "OWASP Top 10 -2025 Edition: What Every Developer and Security Team Must Know", "description": "Complete breakdown of the OWASP Top 10 2025 edition -what changed, what each vulnerability means in practice, real-world examples, and actionable remediation for every category.", "author": { "@type": "Person", "name": "Soham Sawant", "jobTitle": "Cybersecurity Expert & Technical Writer", "worksFor": { "@type": "Organization", "name": "SecComply" } }, "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } }, "datePublished": "2026-03-24", "dateModified": "2026-03-24", "mainEntityOfPage": "https://seccomply.net/resources/blog/owasp-top-10-2025", "keywords": "OWASP Top 10, web application security, broken access control, injection, XSS, SSRF, security misconfiguration, AppSec, DevSecOps", "articleSection": "Application Security", "wordCount": 2400, "timeRequired": "PT10M" },
            { "@type": "FAQPage", "mainEntity": [
              { "@type": "Question", "name": "What is the OWASP Top 10?", "acceptedAnswer": { "@type": "Answer", "text": "The OWASP Top 10 is a regularly updated list of the ten most critical web application security risks, published by the Open Web Application Security Project (OWASP). It is the most widely cited web application security standard in the world and is referenced by ISO 27001, SOC 2, PCI DSS, and HIPAA as a framework for secure development practices. The list is based on data from hundreds of organisations and thousands of real-world applications." } },
              { "@type": "Question", "name": "What is the most common OWASP vulnerability?", "acceptedAnswer": { "@type": "Answer", "text": "Broken Access Control (A01) has been the number one OWASP vulnerability since the 2021 edition and remains at the top in 2025. It was found in 94% of applications tested by OWASP contributors. It includes insecure direct object references (IDOR), missing function-level access control, privilege escalation, and CORS misconfigurations." } },
              { "@type": "Question", "name": "What changed in the OWASP Top 10 2025 edition?", "acceptedAnswer": { "@type": "Answer", "text": "The 2025 OWASP Top 10 introduces Server-Side Request Forgery (SSRF) as a standalone category, elevates Software and Data Integrity Failures to reflect supply chain security concerns, and updates the Vulnerable and Outdated Components category to include SBOM requirements. AI-generated code security risks receive specific guidance for the first time, reflecting the widespread adoption of LLM coding assistants that introduce insecure code patterns." } },
              { "@type": "Question", "name": "How does the OWASP Top 10 relate to compliance frameworks?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001 Annex A.8.25-A.8.31 requires secure application development practices -the OWASP Top 10 provides the specific technical control reference. SOC 2 CC8.1 requires that software development follows secure coding practices. PCI DSS Requirement 6.2 explicitly references OWASP as a source of secure coding guidelines. Demonstrating that your SDLC addresses OWASP Top 10 categories is strong evidence for all three frameworks." } },
              { "@type": "Question", "name": "How should a development team implement OWASP Top 10 remediation?", "acceptedAnswer": { "@type": "Answer", "text": "Start by scanning your existing applications with SAST tools (Semgrep, SonarQube) and DAST tools (OWASP ZAP, Burp Suite) to identify which OWASP categories are present in your codebase. Prioritise findings by exploitability and business impact. Establish secure coding guidelines mapped to OWASP categories. Train developers on the specific vulnerabilities most common in your technology stack. Integrate SAST into your CI/CD pipeline so new code is continuously scanned before merge." } }
            ]},
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
              { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
              { "@type": "ListItem", "position": 4, "name": "OWASP Top 10 2025", "item": "https://seccomply.net/resources/blog/owasp-top-10-2025" }
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
    .art h3{font-family:var(--serif);font-size:1.15rem;font-weight:700;color:var(--tx);margin:2rem 0 .7rem}
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
    .owasp-list{display:flex;flex-direction:column;gap:1.2rem;margin:1.5rem 0}
    .owasp-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.4rem 1.6rem;transition:border-color .2s,background .2s;position:relative;overflow:hidden}
    .owasp-card:hover{border-color:var(--bo);background:var(--bgc)}
    .owasp-card::before{content:'';position:absolute;top:0;left:0;bottom:0;width:3px;background:var(--c,var(--accent))}
    .owasp-hdr{display:flex;align-items:flex-start;gap:1rem;margin-bottom:.7rem}
    .owasp-num{min-width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;color:#fff;flex-shrink:0;background:var(--c,var(--accent))}
    .owasp-title{font-size:1rem;font-weight:700;color:var(--tx);line-height:1.3}
    .owasp-cwe{font-size:.72rem;color:var(--tm);margin-top:2px}
    .owasp-body{font-size:.87rem;color:var(--tb);line-height:1.75;margin-bottom:.8rem}
    .owasp-fix{background:rgb(var(--green-rgb) / 0.05);border:1px solid rgb(var(--green-rgb) / 0.15);border-radius:8px;padding:.7rem 1rem;font-size:.82rem;color:var(--tm)}
    .owasp-fix strong{color:var(--green);margin-right:.3rem}
    .owasp-tags{display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.6rem}
    .owasp-tag{padding:.15rem .55rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:4px;font-size:.68rem;color:var(--tm);font-family:monospace}
    .new-badge{background:rgb(var(--accent-rgb) / .15);color:var(--accent);font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.12rem .5rem;border-radius:4px;border:1px solid rgb(var(--accent-rgb) / .3);margin-left:.5rem;vertical-align:middle}
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
        <span style={{color:'var(--tb)'}}>OWASP Top 10 -2025</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">🔓 AppSec</span>
          <span className="badge badge-bl">📋 OWASP Top 10</span>
          <span className="badge badge-am">🆕 2025 Edition</span>
          <span className="badge badge-gr">✓ SOC 2 · ISO 27001</span>
        </div>
        <h1 className="cspm-hero-h1">OWASP Top 10 -<em>2025 Edition</em> Breakdown</h1>
        <p className="cspm-hero-sub">The OWASP Top 10 is the most widely referenced web application security standard in the world. Every developer, security engineer, and compliance team needs to understand it. Here is exactly what the 2025 edition contains, what changed, and what to do about each category.</p>

        <div className="cspm-author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="name">Soham Sawant</div>
            <div className="meta-row"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 10 min read</span></div>
            <div className="date-row"><span>📅 March 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="img-wrap">
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=480&fit=crop"
            alt="OWASP web application security code analysis"
            style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}}
          />
        </div>
        <p className="img-cap">Web application security remains the highest-risk attack surface for most organisations. The OWASP Top 10 defines the ten vulnerability categories responsible for the majority of successful web application attacks.</p>

        {/* SVG DASHBOARD */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 440" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="og1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--accent)"/><stop offset="100%" stopColor="var(--accent-light)"/></linearGradient>
              <linearGradient id="og2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--red)"/><stop offset="100%" stopColor="var(--red)"/></linearGradient>
              <linearGradient id="og3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--green)"/><stop offset="100%" stopColor="var(--green)"/></linearGradient>
              <linearGradient id="og4" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--purple)"/><stop offset="100%" stopColor="#6366f1"/></linearGradient>
              <pattern id="opat" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgb(var(--accent-rgb) / 0.04)"/></pattern>
            </defs>
            <rect width="960" height="440" fill="url(#opat)"/>
            <text x="480" y="36" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">OWASP Top 10 -2025 Edition Overview</text>

            {/* LEFT: Top 10 ranked list */}
            <rect x="16" y="52" width="230" height="372" rx="12" fill="var(--bg-secondary)" stroke="rgb(var(--accent-rgb) / 0.15)" strokeWidth="1"/>
            <text x="36" y="76" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">RANKED BY PREVALENCE</text>
            {[
              {rank:'A01', name:'Broken Access Control',     col:'var(--red)', pct:94},
              {rank:'A02', name:'Cryptographic Failures',    col:'var(--red)', pct:84},
              {rank:'A03', name:'Injection',                 col:'var(--accent)', pct:74},
              {rank:'A04', name:'Insecure Design',           col:'var(--accent)', pct:64},
              {rank:'A05', name:'Security Misconfiguration', col:'var(--yellow)', pct:90},
              {rank:'A06', name:'Vulnerable Components',     col:'var(--yellow)', pct:78},
              {rank:'A07', name:'Auth Failures',             col:'var(--purple)', pct:68},
              {rank:'A08', name:'Data Integrity Failures',   col:'var(--purple)', pct:52},
              {rank:'A09', name:'Logging Failures',          col:'var(--green)', pct:44},
              {rank:'A10', name:'SSRF',                      col:'var(--green)', pct:38},
            ].map(({rank,name,col,pct},i)=>(
              <g key={i}>
                <rect x="28" y={86+i*32} width="206" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                <text x="40" y={103+i*32} fill={col} fontSize="8.5" fontWeight="800" fontFamily="sans-serif">{rank}</text>
                <text x="72" y={103+i*32} fill="rgba(200,214,229,0.7)" fontSize="8.5" fontFamily="sans-serif">{name}</text>
                <rect x="170" y={92+i*32} width="56" height="8" rx="4" fill="rgba(255,255,255,0.04)"/>
                <rect x="170" y={92+i*32} width={Math.round(56*pct/100)} height="8" rx="4" fill={col}/>
              </g>
            ))}

            <line x1="260" y1="48" x2="260" y2="424" stroke="rgb(var(--accent-rgb) / 0.07)" strokeWidth="1"/>

            {/* CENTRE: Severity breakdown */}
            <text x="490" y="72" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">VULNERABILITY SEVERITY DISTRIBUTION</text>

            {/* Severity rings / bars */}
            {[
              {sev:'Critical', count:2, desc:'A01 Broken Access Control · A02 Cryptographic Failures', col:'var(--red)', w:260},
              {sev:'High',     count:4, desc:'A03 Injection · A04 Insecure Design · A05 Misconfig · A06 Components', col:'var(--accent)', w:200},
              {sev:'Medium',   count:3, desc:'A07 Auth Failures · A08 Integrity Failures · A09 Logging', col:'var(--yellow)', w:140},
              {sev:'Emerging', count:1, desc:'A10 SSRF -elevated in 2025 edition', col:'var(--purple)', w:80},
            ].map(({sev,count,desc,col,w},i)=>(
              <g key={i}>
                <rect x="272" y={88+i*72} width="420" height="58" rx="10" fill="var(--bg-secondary)" stroke={`${col}22`} strokeWidth="1"/>
                <rect x="272" y={88+i*72} width="3" height="58" rx="1.5" fill={col}/>
                <text x="292" y={108+i*72} fill={col} fontSize="11" fontWeight="800" fontFamily="sans-serif">{sev}</text>
                <text x="292" y={125+i*72} fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif">{desc}</text>
                <rect x="292" y={133+i*72} width="180" height="6" rx="3" fill="rgba(255,255,255,0.04)"/>
                <rect x="292" y={133+i*72} width={w} height="6" rx="3" fill={col}/>
                <text x="480" y={141+i*72} fill={col} fontSize="11" fontWeight="800" fontFamily="sans-serif">{count}</text>
              </g>
            ))}

            {/* What changed callout */}
            <rect x="272" y="380" width="420" height="40" rx="10" fill="rgb(var(--accent-rgb) / 0.06)" stroke="rgb(var(--accent-rgb) / 0.2)" strokeWidth="1"/>
            <text x="292" y="397" fill="var(--accent)" fontSize="9" fontWeight="700" fontFamily="sans-serif">2025 KEY CHANGE:</text>
            <text x="380" y="397" fill="rgba(200,214,229,0.65)" fontSize="8.5" fontFamily="sans-serif">SSRF elevated to standalone A10 · AI code security guidance added · SBOM required for A06</text>

            <line x1="706" y1="48" x2="706" y2="424" stroke="rgb(var(--accent-rgb) / 0.07)" strokeWidth="1"/>

            {/* RIGHT: Compliance mapping */}
            <text x="724" y="72" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">COMPLIANCE MAPPING</text>
            {[
              {fw:'ISO 27001',  controls:'A.8.25-A.8.31', col:'var(--green)'},
              {fw:'SOC 2',      controls:'CC8.1 Secure Dev', col:'var(--purple)'},
              {fw:'PCI DSS',    controls:'Req 6.2 / 6.3',   col:'var(--yellow)'},
              {fw:'OWASP ASVS', controls:'All levels',       col:'var(--accent)'},
              {fw:'HIPAA',      controls:'164.312(c)',        col:'var(--purple)'},
            ].map(({fw,controls,col},i)=>(
              <g key={i}>
                <rect x="716" y={88+i*64} width="228" height="50" rx="9" fill="var(--bg-secondary)" stroke={`${col}22`} strokeWidth="1"/>
                <circle cx="734" cy={113+i*64} r="10" fill={`${col}18`} stroke={col} strokeWidth="1.2"/>
                <text x="734" y={117+i*64} textAnchor="middle" fill={col} fontSize="8" fontWeight="700" fontFamily="sans-serif">✓</text>
                <text x="754" y={108+i*64} fill="rgba(200,214,229,0.85)" fontSize="10" fontWeight="700" fontFamily="sans-serif">{fw}</text>
                <text x="754" y={123+i*64} fill="rgba(200,214,229,0.4)" fontSize="8" fontFamily="sans-serif">{controls}</text>
              </g>
            ))}
          </svg>
        </div>
        <p className="img-cap">OWASP Top 10 2025 -ranked by prevalence, severity distribution, key 2025 changes, and compliance framework mapping across ISO 27001, SOC 2, PCI DSS, and HIPAA.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-is">What Is the OWASP Top 10?</a>
            <a href="#top-10">All 10 Categories -2025</a>
            <a href="#compliance">Compliance Mapping</a>
            <a href="#implementation">Implementation in Your SDLC</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-target="94" data-suffix="%">0%</div><div className="stat-l">of applications tested had at least one Broken Access Control vulnerability<br/><span style={{fontSize:'.68rem',opacity:.55}}>OWASP Top 10, 2025</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="10" data-suffix=" categories">0</div><div className="stat-l">vulnerability categories covering the majority of successful web application attacks<br/><span style={{fontSize:'.68rem',opacity:.55}}>OWASP Foundation</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="3" data-suffix=" frameworks">0</div><div className="stat-l">major compliance frameworks that explicitly reference OWASP as a secure coding standard<br/><span style={{fontSize:'.68rem',opacity:.55}}>ISO 27001, SOC 2, PCI DSS</span></div></div>
          </div>

          <section id="what-is">
            <h2>What Is the <em>OWASP Top 10?</em></h2>
            <p>The OWASP Top 10 is a regularly updated list of the ten most critical web application security risks, published by the Open Web Application Security Project. It is consensus-based, data-driven, and updated to reflect the real-world vulnerability landscape across thousands of applications.</p>
            <p>For developers, it is a secure coding reference. For security teams, it is a penetration testing and code review framework. For compliance officers, it is referenced directly by ISO 27001 Annex A.8, SOC 2 CC8.1, and PCI DSS Requirement 6 as the benchmark for secure application development practices.</p>
            <div className="pull-quote">
              <p>"Understanding the OWASP Top 10 is not optional for any team building or securing web applications. It is the minimum baseline. Everything else builds on top of it."</p>
            </div>
          </section>

          <section id="top-10">
            <h2>All 10 Categories -<em>2025 Edition</em></h2>

            <div className="owasp-list">

              <div className="owasp-card anim" style={{'--c':'var(--red)'}}>
                <div className="owasp-hdr">
                  <div className="owasp-num" style={{background:'var(--red)'}}>A01</div>
                  <div><div className="owasp-title">Broken Access Control</div><div className="owasp-cwe">CWE-200 · CWE-284 · CWE-285 · CWE-352 · CWE-639</div></div>
                </div>
                <p className="owasp-body">The number one vulnerability since 2021. Found in 94% of tested applications. Access control enforces that users cannot act outside their intended permissions. Broken access control includes IDOR (insecure direct object references), missing function-level access control, privilege escalation from user to admin, CORS misconfigurations that allow unauthorised API access, and JWT token manipulation to elevate privileges.</p>
                <div className="owasp-fix"><strong>Fix:</strong> Enforce access control server-side on every request. Deny by default. Log access control failures. Rate-limit API endpoints. Never rely on client-side state for access decisions.</div>
                <div className="owasp-tags"><span className="owasp-tag">IDOR</span><span className="owasp-tag">CORS</span><span className="owasp-tag">JWT</span><span className="owasp-tag">Privilege Escalation</span></div>
              </div>

              <div className="owasp-card anim" style={{'--c':'var(--red)'}}>
                <div className="owasp-hdr">
                  <div className="owasp-num" style={{background:'var(--red)'}}>A02</div>
                  <div><div className="owasp-title">Cryptographic Failures</div><div className="owasp-cwe">CWE-261 · CWE-296 · CWE-310 · CWE-319 · CWE-321</div></div>
                </div>
                <p className="owasp-body">Previously called "Sensitive Data Exposure" -renamed to focus on the root cause rather than the symptom. Cryptographic failures cover: transmitting sensitive data in clear text (HTTP, SMTP without TLS), using weak or deprecated algorithms (MD5, SHA1, DES), hardcoded cryptographic keys, missing encryption at rest for sensitive data, and improper certificate validation.</p>
                <div className="owasp-fix"><strong>Fix:</strong> Classify all data by sensitivity. Encrypt all sensitive data at rest (AES-256) and in transit (TLS 1.2+). Never use deprecated algorithms. Use a KMS for key management. Disable HTTP, enforce HTTPS everywhere.</div>
                <div className="owasp-tags"><span className="owasp-tag">TLS</span><span className="owasp-tag">AES-256</span><span className="owasp-tag">Key Management</span><span className="owasp-tag">MD5/SHA1 Deprecated</span></div>
              </div>

              <div className="owasp-card anim" style={{'--c':'var(--accent)'}}>
                <div className="owasp-hdr">
                  <div className="owasp-num" style={{background:'var(--accent)'}}>A03</div>
                  <div><div className="owasp-title">Injection</div><div className="owasp-cwe">CWE-20 · CWE-74 · CWE-75 · CWE-77 · CWE-78 · CWE-89</div></div>
                </div>
                <p className="owasp-body">SQL injection, OS command injection, LDAP injection, and Cross-Site Scripting (XSS) are all included here. Injection occurs when an application sends untrusted data to an interpreter as part of a command or query. SQL injection remains one of the most destructive vulnerabilities -a single injectable endpoint can lead to full database exfiltration. XSS allows attackers to execute scripts in victims' browsers, enabling session hijacking and credential theft.</p>
                <div className="owasp-fix"><strong>Fix:</strong> Use parameterised queries and prepared statements. Never concatenate user input into queries. Apply input validation and output encoding. Use WAF rules for known injection patterns. Run SAST on every commit.</div>
                <div className="owasp-tags"><span className="owasp-tag">SQL Injection</span><span className="owasp-tag">XSS</span><span className="owasp-tag">Command Injection</span><span className="owasp-tag">Parameterised Queries</span></div>
              </div>

              <div className="owasp-card anim" style={{'--c':'var(--accent)'}}>
                <div className="owasp-hdr">
                  <div className="owasp-num" style={{background:'var(--accent)'}}>A04</div>
                  <div><div className="owasp-title">Insecure Design</div><div className="owasp-cwe">CWE-73 · CWE-183 · CWE-209 · CWE-213 · CWE-235</div></div>
                </div>
                <p className="owasp-body">New in the 2021 list and reinforced in 2025, insecure design focuses on design-level flaws rather than implementation bugs -missing security controls by design rather than misconfigured ones. An application that never implemented rate limiting on authentication endpoints has an insecure design flaw. No amount of patching fixes a design problem -it requires redesign. This is why threat modeling at the design phase is critical.</p>
                <div className="owasp-fix"><strong>Fix:</strong> Integrate threat modeling into the design phase for every significant feature. Use secure design patterns. Establish security requirements alongside functional requirements. Reference OWASP ASVS as a design checklist.</div>
                <div className="owasp-tags"><span className="owasp-tag">Threat Modeling</span><span className="owasp-tag">STRIDE</span><span className="owasp-tag">Secure Design</span><span className="owasp-tag">OWASP ASVS</span></div>
              </div>

              <div className="owasp-card anim" style={{'--c':'var(--yellow)'}}>
                <div className="owasp-hdr">
                  <div className="owasp-num" style={{background:'var(--yellow)'}}>A05</div>
                  <div><div className="owasp-title">Security Misconfiguration</div><div className="owasp-cwe">CWE-2 · CWE-11 · CWE-13 · CWE-15 · CWE-16</div></div>
                </div>
                <p className="owasp-body">Found in 90% of tested applications. Security misconfiguration covers default credentials left unchanged, unnecessary features enabled, verbose error messages exposing stack traces, missing security headers (CSP, HSTS, X-Frame-Options), overly permissive CORS policies, and cloud storage buckets left publicly accessible. As applications increasingly run on cloud infrastructure, misconfiguration has become the dominant attack vector.</p>
                <div className="owasp-fix"><strong>Fix:</strong> Implement a repeatable hardening process. Remove all default credentials. Disable unnecessary features and services. Send minimal error information to clients. Use CSPM to continuously monitor for misconfigurations.</div>
                <div className="owasp-tags"><span className="owasp-tag">Security Headers</span><span className="owasp-tag">CORS</span><span className="owasp-tag">Default Credentials</span><span className="owasp-tag">CSPM</span></div>
              </div>

              <div className="owasp-card anim" style={{'--c':'var(--yellow)'}}>
                <div className="owasp-hdr">
                  <div className="owasp-num" style={{background:'var(--yellow)'}}>A06</div>
                  <div><div className="owasp-title">Vulnerable and Outdated Components<span className="new-badge">Updated 2025</span></div><div className="owasp-cwe">CWE-1035 · CWE-1104</div></div>
                </div>
                <p className="owasp-body">Applications using components -libraries, frameworks, operating systems -with known vulnerabilities are directly exploitable. Log4Shell was the most prominent example: a critical vulnerability in a logging library used by hundreds of thousands of applications globally. The 2025 edition adds explicit SBOM (Software Bill of Materials) requirements, reflecting regulatory pressure and the widespread adoption of SBOM as a supply chain security control.</p>
                <div className="owasp-fix"><strong>Fix:</strong> Maintain a Software Bill of Materials (SBOM). Use SCA tools (Dependabot, Snyk, OWASP Dependency-Check) in your CI pipeline. Subscribe to vulnerability alerts for your dependencies. Patch critical vulnerabilities within 72 hours.</div>
                <div className="owasp-tags"><span className="owasp-tag">SBOM</span><span className="owasp-tag">SCA</span><span className="owasp-tag">Log4Shell</span><span className="owasp-tag">Dependabot</span><span className="owasp-tag">CVE</span></div>
              </div>

              <div className="owasp-card anim" style={{'--c':'var(--purple)'}}>
                <div className="owasp-hdr">
                  <div className="owasp-num" style={{background:'var(--purple)'}}>A07</div>
                  <div><div className="owasp-title">Identification and Authentication Failures</div><div className="owasp-cwe">CWE-255 · CWE-259 · CWE-287 · CWE-288 · CWE-330</div></div>
                </div>
                <p className="owasp-body">Authentication failures include: permitting weak or default passwords, missing or ineffective MFA, exposing session IDs in URLs, not invalidating sessions on logout, credential stuffing enabled by missing rate limiting, and insecure password reset flows. In 2025, the category specifically calls out authentication bypass vulnerabilities in AI-powered chatbots and LLM-integrated applications as an emerging concern.</p>
                <div className="owasp-fix"><strong>Fix:</strong> Enforce MFA everywhere. Implement rate limiting and account lockout on authentication endpoints. Invalidate sessions server-side on logout. Use a proven identity provider (Okta, Auth0) rather than building custom auth.</div>
                <div className="owasp-tags"><span className="owasp-tag">MFA</span><span className="owasp-tag">Session Management</span><span className="owasp-tag">Credential Stuffing</span><span className="owasp-tag">Rate Limiting</span></div>
              </div>

              <div className="owasp-card anim" style={{'--c':'var(--purple)'}}>
                <div className="owasp-hdr">
                  <div className="owasp-num" style={{background:'var(--purple)'}}>A08</div>
                  <div><div className="owasp-title">Software and Data Integrity Failures<span className="new-badge">Updated 2025</span></div><div className="owasp-cwe">CWE-345 · CWE-353 · CWE-426 · CWE-494 · CWE-502</div></div>
                </div>
                <p className="owasp-body">This category covers insecure deserialization and CI/CD pipeline integrity failures. An application that automatically updates without verifying the integrity of the update -using a compromised package registry, a tampered npm package, or a supply chain poisoning attack -falls here. The SolarWinds attack is the canonical example. The 2025 edition strengthens the connection to software supply chain attacks and adds guidance on securing AI model pipelines.</p>
                <div className="owasp-fix"><strong>Fix:</strong> Verify digital signatures on software and updates. Use trusted package registries with integrity checking. Implement pipeline security -prevent tampering with build artifacts. Never deserialise data from untrusted sources without validation.</div>
                <div className="owasp-tags"><span className="owasp-tag">Deserialization</span><span className="owasp-tag">Supply Chain</span><span className="owasp-tag">CI/CD Security</span><span className="owasp-tag">SolarWinds</span></div>
              </div>

              <div className="owasp-card anim" style={{'--c':'var(--green)'}}>
                <div className="owasp-hdr">
                  <div className="owasp-num" style={{background:'var(--green)'}}>A09</div>
                  <div><div className="owasp-title">Security Logging and Monitoring Failures</div><div className="owasp-cwe">CWE-117 · CWE-223 · CWE-532 · CWE-778</div></div>
                </div>
                <p className="owasp-body">Without adequate logging and monitoring, breaches go undetected. The average dwell time -time between initial compromise and detection -is 197 days globally. Logging failures include: no logging of authentication events or high-value transactions, logs not monitored for suspicious activity, log tampering possible (logs stored on the same system as the application), and no incident response procedures triggered by log alerts.</p>
                <div className="owasp-fix"><strong>Fix:</strong> Log all authentication events, access control failures, and high-value transactions. Centralise logs in a SIEM. Configure alerts for anomalous activity. Ensure logs cannot be deleted by the application process. Retain logs for at least 12 months.</div>
                <div className="owasp-tags"><span className="owasp-tag">SIEM</span><span className="owasp-tag">Audit Logging</span><span className="owasp-tag">Log Retention</span><span className="owasp-tag">Alert Rules</span></div>
              </div>

              <div className="owasp-card anim" style={{'--c':'var(--green)'}}>
                <div className="owasp-hdr">
                  <div className="owasp-num" style={{background:'var(--green)'}}>A10</div>
                  <div><div className="owasp-title">Server-Side Request Forgery (SSRF)<span className="new-badge">Elevated 2025</span></div><div className="owasp-cwe">CWE-918</div></div>
                </div>
                <p className="owasp-body">SSRF vulnerabilities allow attackers to induce the server-side application to make HTTP requests to an arbitrary domain -including internal services that are not publicly accessible. In cloud environments, SSRF is particularly dangerous because it can be used to access instance metadata endpoints (AWS IMDSv1) and retrieve IAM credentials. SSRF is elevated to a standalone category in 2025 reflecting its increasing prevalence in cloud-native applications and its role in several high-profile breaches.</p>
                <div className="owasp-fix"><strong>Fix:</strong> Validate and sanitise all client-supplied input URLs. Use an allowlist of permitted domains. Disable HTTP redirections. Enforce IMDSv2 on AWS instances. Do not return raw responses from server-side requests to clients.</div>
                <div className="owasp-tags"><span className="owasp-tag">SSRF</span><span className="owasp-tag">IMDSv2</span><span className="owasp-tag">Cloud Security</span><span className="owasp-tag">URL Validation</span></div>
              </div>

            </div>
          </section>

          {/* Inline image */}
          <div className="img-wrap" style={{marginTop:'1rem'}}>
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1000&h=380&fit=crop"
              alt="Developer reviewing secure code"
              style={{width:'100%',display:'block',maxHeight:'320px',objectFit:'cover'}}
            />
          </div>
          <p className="img-cap">Addressing OWASP Top 10 vulnerabilities requires both developer education and automated tooling integrated into the CI/CD pipeline -one without the other is insufficient.</p>

          <section id="compliance">
            <h2>OWASP Top 10 and <em>Compliance Frameworks</em></h2>
            <p>The OWASP Top 10 is not just a security reference -it is a compliance requirement. Here is how it maps to the frameworks most commonly required by enterprise customers and regulators:</p>
            <div className="cmp-wrap">
              <table className="cmp-table">
                <thead><tr><th>Framework</th><th>Reference to OWASP</th><th>What It Requires</th></tr></thead>
                <tbody>
                  <tr><td>ISO 27001</td><td>Annex A.8.25-A.8.31</td><td>Secure development lifecycle, secure coding, application security testing -OWASP Top 10 is the accepted technical reference for all three</td></tr>
                  <tr><td>SOC 2</td><td>CC8.1 -Change management</td><td>Software development follows secure coding practices. OWASP compliance evidence (SAST results, penetration test reports mapped to Top 10) satisfies this criterion</td></tr>
                  <tr><td>PCI DSS</td><td>Requirement 6.2 and 6.3</td><td>Explicitly references OWASP as the standard for identifying and addressing common vulnerabilities. Requirement 6.2.4 requires protection against all OWASP Top 10 categories</td></tr>
                  <tr><td>HIPAA</td><td>164.312(c) -Integrity controls</td><td>Protecting ePHI integrity from improper alteration -OWASP Top 10 addresses the primary attack vectors against integrity</td></tr>
                  <tr><td>GDPR / DPDP</td><td>Article 32 / Section 8(5)</td><td>Appropriate technical measures to protect personal data -OWASP Top 10 remediation directly addresses the technical requirements</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="implementation">
            <h2>Implementing OWASP Top 10 <em>in Your SDLC</em></h2>
            <p>Knowing the Top 10 categories is the starting point. Operationalising them across your development lifecycle is where the work actually happens.</p>
            <div className="callout co-info">
              <span className="co-icon">🛠️</span>
              <div className="co-body">
                <strong>Tool Stack for OWASP Coverage</strong>
                <p>SAST (Semgrep, SonarQube, Checkmarx) -catches A03 Injection, A02 Cryptographic Failures, A07 Auth issues in code before commit. SCA (Snyk, OWASP Dependency-Check) -catches A06 Vulnerable Components. DAST (OWASP ZAP, Burp Suite) -catches A01 Broken Access Control, A05 Misconfiguration, A10 SSRF at runtime. Penetration testing -validates all 10 categories in your specific environment. No single tool covers all 10 -you need the full stack.</p>
              </div>
            </div>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>AI-Generated Code and OWASP 2025</strong>
                <p>The 2025 edition adds specific guidance on AI-generated code security. LLM coding assistants generate code that frequently contains A03 Injection patterns, A07 Authentication failures, and A02 Cryptographic weaknesses -because they are trained on historical code repositories that predate modern security practices. Every line of AI-generated code must pass the same SAST review as human-written code. No exceptions.</p>
              </div>
            </div>
          </section>

          <div className="cta-banner">
            <h3>Are Your Applications OWASP-Compliant?</h3>
            <p>SecComply's VAPT service tests your web applications against the OWASP Top 10 and produces a report that satisfies ISO 27001, SOC 2, and PCI DSS auditors -with clear remediation guidance for every finding.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Web Application Pentest →</a>
              <a href="https://seccomply.net/services/vapt" className="btn-o" target="_blank" rel="noopener">View VAPT Services</a>
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
                {q:"What is the OWASP Top 10?", a:"The OWASP Top 10 is a regularly updated list of the ten most critical web application security risks, published by the Open Web Application Security Project. It is the most widely cited web application security standard in the world and is referenced by ISO 27001, SOC 2, PCI DSS, and HIPAA as a framework for secure development practices."},
                {q:"What is the most common OWASP vulnerability?", a:"Broken Access Control (A01) has been the number one OWASP vulnerability since the 2021 edition and remains at the top in 2025. It was found in 94% of applications tested. It includes IDOR, missing function-level access control, privilege escalation, and CORS misconfigurations."},
                {q:"What changed in the OWASP Top 10 2025 edition?", a:"The 2025 OWASP Top 10 elevates Server-Side Request Forgery (SSRF) to a standalone A10 category, adds SBOM requirements to the Vulnerable and Outdated Components category, and introduces specific guidance on AI-generated code security risks for the first time, reflecting the widespread adoption of LLM coding assistants."},
                {q:"How does the OWASP Top 10 relate to compliance frameworks?", a:"ISO 27001 Annex A.8.25-A.8.31 requires secure application development practices -OWASP provides the technical reference. SOC 2 CC8.1 requires secure coding practices. PCI DSS Requirement 6.2 explicitly references OWASP as a source of secure coding guidelines. Demonstrating that your SDLC addresses OWASP Top 10 categories is strong evidence for all three frameworks."},
                {q:"How should a development team implement OWASP Top 10 remediation?", a:"Start by scanning existing applications with SAST tools and DAST tools to identify which OWASP categories are present. Prioritise by exploitability and business impact. Establish secure coding guidelines mapped to OWASP categories. Train developers on vulnerabilities most common in your stack. Integrate SAST into your CI/CD pipeline so new code is continuously scanned before merge."},
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
              <li><a href="#what-is" className="toc-link">What Is OWASP Top 10?</a></li>
              <li><a href="#top-10" className="toc-link">All 10 Categories -2025</a></li>
              <li><a href="#compliance" className="toc-link">Compliance Mapping</a></li>
              <li><a href="#implementation" className="toc-link">SDLC Implementation</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Services</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/services/vapt" target="_blank">🔍 VAPT Services</a></li>
              <li><a href="https://seccomply.net/services/soc-2" target="_blank">🛡️ SOC 2 Readiness</a></li>
              <li><a href="https://seccomply.net/services/iso-27001" target="_blank">🌍 ISO 27001 Consulting</a></li>
              <li><a href="https://seccomply.net/services/cloud-security" target="_blank">☁️ Cloud Security Audit</a></li>
              <li><a href="https://seccomply.net/services/compliance-as-a-service" target="_blank">📋 Compliance as a Service</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">OWASP</span><span className="tag">AppSec</span><span className="tag">Broken Access Control</span><span className="tag">SQL Injection</span><span className="tag">XSS</span><span className="tag">SSRF</span><span className="tag">SBOM</span><span className="tag">SOC 2</span><span className="tag">ISO 27001</span><span className="tag">PCI DSS</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Test Against OWASP Top 10</h4>
            <p>SecComply's VAPT tests your applications against all 10 categories with audit-ready findings reports.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book a Pentest →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
