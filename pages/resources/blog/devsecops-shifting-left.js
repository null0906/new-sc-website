import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DevSecOpsShiftingLeft() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/devsecops-shifting-left'); const ttl = encodeURIComponent('DevSecOps: Shifting Security Left Without Slowing Down, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/devsecops-shifting-left'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
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
        <title>DevSecOps: Shifting Security Left Without Slowing Down | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="What 'shift left' really means in practice, the 3 pillars of DevSecOps, the full pipeline automation stack (SAST, SCA, DAST, IaC scanning), threat modeling with STRIDE, compliance integration, and a 3-phase maturity roadmap." />
        <meta name="keywords" content="DevSecOps shift left, shift left security, DevSecOps pipeline, SAST DAST SCA, secure SDLC, threat modeling STRIDE, DevSecOps compliance SOC 2, CI/CD security automation, DevSecOps maturity model, DevSecOps best practices" />
        <meta property="og:title" content="DevSecOps: Shifting Security Left Without Slowing Down" />
        <meta property="og:description" content="Security was the team that said no at the end of the pipeline. Here's how DevSecOps flips that, 3 pillars, full automation stack, compliance integration, and a 3-phase maturity roadmap." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/devsecops-shifting-left" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/devsecops-og.png" />
        <meta property="article:published_time" content="2025-03-01" />
        <meta property="article:author" content="Aditya Hadke" />
        <meta property="article:tag" content="DevSecOps" />
        <meta property="article:tag" content="Shift Left" />
        <meta property="article:tag" content="SDLC Security" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/devsecops-shifting-left" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", "headline": "DevSecOps: Shifting Security Left Without Slowing Down", "description": "What shift left really means in practice, the 3 pillars of DevSecOps, the full pipeline automation stack, threat modeling with STRIDE, and a 3-phase maturity roadmap.", "author": { "@type": "Person", "name": "Aditya Hadke", "jobTitle": "Project Delivery Lead", "worksFor": { "@type": "Organization", "name": "SecComply" } }, "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } }, "datePublished": "2025-03-01", "dateModified": "2025-03-01", "mainEntityOfPage": "https://seccomply.net/resources/blog/devsecops-shifting-left", "keywords": "DevSecOps, shift left security, SAST, DAST, SCA, threat modeling, CI/CD security, SOC 2, ISO 27001, secure SDLC", "articleSection": "DevSecOps", "wordCount": 2100, "timeRequired": "PT12M" },
            { "@type": "FAQPage", "mainEntity": [
              { "@type": "Question", "name": "What does 'shift left' mean in DevSecOps?", "acceptedAnswer": { "@type": "Answer", "text": "Shifting left means moving security activities, threat modeling, code scanning, dependency checks, and compliance validation, as early as possible in the software development lifecycle. In a traditional pipeline (Plan → Code → Build → Test → Release → Deploy → Monitor), security was placed at the right end as a final gate. Shifting left means security starts at the planning and design phase, not after code is already written. NIST estimates that fixing a bug after production deployment costs up to 30 times more than catching it at design phase." } },
              { "@type": "Question", "name": "What are the three pillars of DevSecOps?", "acceptedAnswer": { "@type": "Answer", "text": "The three pillars of DevSecOps are: Culture (security is everyone's responsibility, developers own security outcomes, security champion programmes), Automation (integrating security tooling at every stage of the CI/CD pipeline, SAST, SCA, container scanning, IaC scanning, DAST, CSPM), and Measurement (tracking MTTR by severity, vulnerabilities introduced vs closed, pipeline security gate coverage, and false positive rates)." } },
              { "@type": "Question", "name": "What tools are used in a DevSecOps pipeline?", "acceptedAnswer": { "@type": "Answer", "text": "At commit/pre-merge: secret scanning (GitLeaks, TruffleHog), SAST (Semgrep, Checkmarx, SonarQube), and SCA for vulnerable dependencies. At build/CI: container image scanning (Trivy, Snyk Container), IaC scanning (Checkov, tfsec), and automated SBOM generation. At deploy/runtime: DAST (OWASP ZAP, Burp Suite), CSPM for cloud configuration drift, and RASP for real-time threat detection in production." } },
              { "@type": "Question", "name": "How does DevSecOps support SOC 2 and ISO 27001 compliance?", "acceptedAnswer": { "@type": "Answer", "text": "DevSecOps directly produces the audit evidence that SOC 2 and ISO 27001 require. Automated pipeline logs demonstrate that security scanning ran on every deployment, satisfying change management controls. SBOM records provide evidence of software composition tracking for supply chain security. Vulnerability tracking dashboards demonstrate MTTR performance against policy SLAs. IaC scanning results show auditors that infrastructure is provisioned securely and consistently." } },
              { "@type": "Question", "name": "What is threat modeling and why does it matter in DevSecOps?", "acceptedAnswer": { "@type": "Answer", "text": "Threat modeling is the practice of systematically identifying potential threats during the architecture and design phase, before code is written. The STRIDE framework (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) provides a structured approach. A 60-minute threat modeling session with an engineering lead and security champion before writing a single line of code will surface design-level issues that no scanner can catch after the fact." } }
            ]},
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
              { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
              { "@type": "ListItem", "position": 4, "name": "DevSecOps: Shifting Security Left", "item": "https://seccomply.net/resources/blog/devsecops-shifting-left" }
            ]}
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
    .art h3{font-family:var(--serif);font-size:1.15rem;font-weight:700;color:var(--tx);margin:2rem 0 .7rem}
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
    .co-key{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
    .co-sc{background:rgba(6,214,160,.05);border:1px solid rgba(6,214,160,.2)}
    .co-danger{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .feat-list{list-style:none;margin:1.5rem 0;display:flex;flex-direction:column;gap:.65rem}
    .feat-list li{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s,background .2s}
    .feat-list li:hover{border-color:var(--bo);background:var(--bgc)}
    .f-num{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,#E8632B,#FF8A50);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:2px}
    .f-body strong{display:block;color:var(--tx);font-size:.89rem;margin-bottom:3px}
    .f-body span{font-size:.83rem;color:var(--tm)}
    .pipeline-stages{display:flex;flex-direction:column;gap:1rem;margin:1.5rem 0}
    .pipe-stage{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem;transition:border-color .2s}
    .pipe-stage:hover{border-color:var(--bo)}
    .pipe-stage-hdr{display:flex;align-items:center;gap:.7rem;margin-bottom:.7rem}
    .pipe-badge{padding:.2rem .7rem;border-radius:100px;font-size:.68rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase}
    .pipe-badge-commit{background:rgba(99,102,241,.15);color:#818cf8}
    .pipe-badge-build{background:rgba(232,99,43,.15);color:#E8632B}
    .pipe-badge-runtime{background:rgba(6,214,160,.12);color:#06d6a0}
    .pipe-stage-title{font-weight:700;font-size:.95rem;color:var(--tx)}
    .pipe-tools{display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.6rem}
    .tool-tag{padding:.18rem .6rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:5px;font-size:.73rem;color:var(--tm);font-family:monospace}
    .phase-grid{display:flex;flex-direction:column;gap:.9rem;margin:1.5rem 0}
    .phase-card{background:var(--bgc2);border-left:4px solid var(--cy);border-radius:0 12px 12px 0;padding:1.2rem 1.4rem;transition:background .2s}
    .phase-card:nth-child(1){border-color:#818cf8}
    .phase-card:nth-child(2){border-color:#E8632B}
    .phase-card:nth-child(3){border-color:#06d6a0}
    .phase-card:hover{background:var(--bgc)}
    .phase-label{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--tm);margin-bottom:.3rem}
    .phase-card h3{font-size:.97rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
    .phase-card ul{list-style:none;display:flex;flex-direction:column;gap:.3rem}
    .phase-card ul li{font-size:.84rem;color:var(--tm);display:flex;align-items:flex-start;gap:.5rem}
    .phase-card ul li::before{content:'→';color:var(--cy);font-weight:700;flex-shrink:0;margin-top:1px}
    .pitfall-list{display:flex;flex-direction:column;gap:.7rem;margin:1.5rem 0}
    .pitfall-item{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid rgba(255,77,109,.15);border-radius:10px}
    .pf-num{width:26px;height:26px;border-radius:7px;background:rgba(255,77,109,.15);border:1px solid rgba(255,77,109,.3);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#ff4d6d;flex-shrink:0;margin-top:2px}
    .pf-body strong{display:block;color:var(--tx);font-size:.89rem;margin-bottom:3px}
    .pf-body span{font-size:.83rem;color:var(--tm)}
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
        <span style={{color:'var(--tb)'}}>DevSecOps: Shifting Left</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">⚙️ DevSecOps</span>
          <span className="badge badge-bl">🔀 Shift Left</span>
          <span className="badge badge-am">🛠️ SAST · DAST · SCA</span>
          <span className="badge badge-gr">✓ SOC 2 · ISO 27001</span>
        </div>
        <h1 className="cspm-hero-h1">DevSecOps: Shifting Security Left <em>Without Slowing Down</em></h1>
        <p className="cspm-hero-sub">For years, security was the team that said "no" at the end of the development cycle. DevSecOps changes that equation, integrating security directly into the SDLC so teams catch vulnerabilities earlier, remediate faster, and build products that are genuinely more secure without sacrificing velocity.</p>

        <div className="cspm-author-strip">
          <div className="avatar">AH</div>
          <div className="author-info">
            <div className="name">Aditya Hadke</div>
            <div className="meta-row"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Consultant</span><span className="dot">·</span><span id="read-time">📖 12 min read</span></div>
            <div className="date-row"><span>📅 March 2025</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        {/* SVG HERO DASHBOARD */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 440" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="dg1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#E8632B"/><stop offset="100%" stopColor="#FF8A50"/></linearGradient>
              <linearGradient id="dg2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06d6a0"/><stop offset="100%" stopColor="#04b080"/></linearGradient>
              <linearGradient id="dg3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#818cf8"/><stop offset="100%" stopColor="#6366f1"/></linearGradient>
              <linearGradient id="dg4" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ffb703"/><stop offset="100%" stopColor="#e09500"/></linearGradient>
              <pattern id="dpat" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r=".8" fill="rgba(232,99,43,0.04)"/></pattern>
            </defs>
            <rect width="960" height="440" fill="url(#dpat)"/>

            {/* TOP: Pipeline flow */}
            <text x="480" y="32" textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="12" fontWeight="700" fontFamily="sans-serif">DevSecOps Pipeline, Security at Every Stage</text>
            {[
              {stage:'Plan',     sec:'Threat Model', col:'#818cf8', x:40},
              {stage:'Code',     sec:'SAST · Secrets',col:'#E8632B', x:165},
              {stage:'Build',    sec:'SCA · Container',col:'#E8632B',x:290},
              {stage:'Test',     sec:'DAST · IaC',    col:'#ffb703', x:415},
              {stage:'Release',  sec:'Policy Gate',   col:'#06d6a0', x:540},
              {stage:'Deploy',   sec:'CSPM · Drift',  col:'#06d6a0', x:665},
              {stage:'Monitor',  sec:'RASP · Alerts', col:'#06d6a0', x:790},
            ].map(({stage,sec,col,x},i)=>(
              <g key={i}>
                {i > 0 && <path d={`M${x-5} 80 L${x+5} 80`} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" markerEnd="url(#arrow)"/>}
                <rect x={x} y="50" width="110" height="54" rx="9" fill="#091826" stroke={`${col}40`} strokeWidth="1.2"/>
                <rect x={x} y="50" width="110" height="3" rx="1.5" fill={col}/>
                <text x={x+55} y="72" textAnchor="middle" fill="rgba(200,214,229,0.9)" fontSize="10" fontWeight="700" fontFamily="sans-serif">{stage}</text>
                <text x={x+55} y="90" textAnchor="middle" fill={col} fontSize="8" fontFamily="sans-serif">{sec}</text>
              </g>
            ))}

            {/* Shift left arrow */}
            <path d="M900 115 L50 115" stroke="rgba(232,99,43,0.3)" strokeWidth="1.5" strokeDasharray="5,4"/>
            <text x="480" y="110" textAnchor="middle" fill="rgba(232,99,43,0.5)" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">← SHIFT LEFT, catch issues earlier, fix them cheaper</text>

            <line x1="20" y1="128" x2="940" y2="128" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

            {/* LEFT, 3 Pillars */}
            <rect x="18" y="138" width="195" height="284" rx="12" fill="#081826" stroke="rgba(232,99,43,0.15)" strokeWidth="1"/>
            <text x="38" y="162" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">3 PILLARS OF DEVSECOPS</text>
            {[
              {pillar:'Culture',     desc:'Security champions · Shared ownership · Blameless post-mortems', col:'#818cf8', icon:'👥'},
              {pillar:'Automation',  desc:'SAST · SCA · Container scan · IaC · DAST · CSPM at every stage', col:'#E8632B', icon:'⚙️'},
              {pillar:'Measurement', desc:'MTTR by severity · Vuln velocity · Pipeline gate coverage', col:'#06d6a0', icon:'📊'},
            ].map(({pillar,desc,col,icon},i)=>(
              <g key={i}>
                <rect x="28" y={178+i*82} width="175" height="70" rx="9" fill={`${col}08`} stroke={`${col}28`} strokeWidth="1"/>
                <text x="50" y={200+i*82} fill={col} fontSize="14" fontFamily="sans-serif">{icon}</text>
                <text x="68" y={200+i*82} fill={col} fontSize="11" fontWeight="700" fontFamily="sans-serif">{pillar}</text>
                <foreignObject x="38" y={208+i*82} width="155" height="36">
                  <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize:'8px',color:'rgba(200,214,229,0.45)',lineHeight:'1.5',fontFamily:'sans-serif'}}>{desc}</div>
                </foreignObject>
              </g>
            ))}

            <line x1="228" y1="130" x2="228" y2="430" stroke="rgba(232,99,43,0.07)" strokeWidth="1"/>

            {/* CENTRE, Metrics Dashboard */}
            <text x="546" y="158" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="12" fontWeight="700" fontFamily="sans-serif">Security Metrics Dashboard</text>
            {[
              {label:'Mean Time to Remediate, Critical', val:'18h', sub:'target: <24h', col:'#06d6a0', bar:140},
              {label:'Pipelines with Security Gates',     val:'87%', sub:'↑ from 42%',  col:'#E8632B', bar:130},
              {label:'SAST False Positive Rate',          val:'12%', sub:'target: <15%', col:'#818cf8', bar:70},
              {label:'Vulns Closed vs Introduced',        val:'2.1×', sub:'net positive', col:'#ffb703', bar:115},
            ].map(({label,val,sub,col,bar},i)=>(
              <g key={i}>
                <rect x="240" y={172+i*62} width="604" height="50" rx="9" fill="#091826" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                <text x="260" y={191+i*62} fill="rgba(200,214,229,0.55)" fontSize="8.5" fontFamily="sans-serif">{label}</text>
                <rect x="260" y={196+i*62} width="200" height="7" rx="3.5" fill="rgba(255,255,255,0.05)"/>
                <rect x="260" y={196+i*62} width={bar} height="7" rx="3.5" fill={col}/>
                <text x="480" y={204+i*62} fill={col} fontSize="16" fontWeight="800" fontFamily="sans-serif">{val}</text>
                <text x="540" y={204+i*62} fill="rgba(200,214,229,0.35)" fontSize="9" fontFamily="sans-serif">{sub}</text>
              </g>
            ))}

            <line x1="862" y1="130" x2="862" y2="430" stroke="rgba(232,99,43,0.07)" strokeWidth="1"/>

            {/* RIGHT, Maturity Phases */}
            <text x="880" y="158" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">MATURITY PHASES</text>
            {[
              {phase:'Phase 1',  title:'Foundational',  time:'0–3 mo',  col:'#818cf8', done:true},
              {phase:'Phase 2',  title:'Integrated',    time:'3–6 mo',  col:'#E8632B', done:false},
              {phase:'Phase 3',  title:'Advanced',      time:'6–12 mo', col:'#06d6a0', done:false},
            ].map(({phase,title,time,col,done},i)=>(
              <g key={i}>
                <rect x="872" y={172+i*86} width="78" height="72" rx="9" fill={done?`${col}12`:'#091826'} stroke={`${col}${done?'45':'20'}`} strokeWidth="1"/>
                <text x="911" y={195+i*86} textAnchor="middle" fill={col} fontSize="8.5" fontWeight="700" fontFamily="sans-serif">{phase}</text>
                <text x="911" y={210+i*86} textAnchor="middle" fill="rgba(200,214,229,0.8)" fontSize="9" fontWeight="600" fontFamily="sans-serif">{title}</text>
                <text x="911" y={225+i*86} textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">{time}</text>
                {done && <text x="911" y={240+i*86} textAnchor="middle" fill={col} fontSize="9" fontFamily="sans-serif">✓ Active</text>}
              </g>
            ))}

            {/* Cost comparison bar */}
            <text x="546" y="420" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="9" fontWeight="600" fontFamily="sans-serif">Cost to Fix a Bug, by SDLC Stage</text>
            {[
              {stage:'Design',  cost:'1×',  w:18,  col:'#06d6a0', x:240},
              {stage:'Code',    cost:'3×',  w:36,  col:'#818cf8', x:300},
              {stage:'Test',    cost:'6×',  w:64,  col:'#ffb703', x:378},
              {stage:'Release', cost:'15×', w:120, col:'#E8632B', x:484},
              {stage:'Prod',    cost:'30×', w:200, col:'#ff4d6d', x:646},
            ].map(({stage,cost,w,col,x},i)=>(
              <g key={i}>
                <rect x={x-w/2} y={425} width={w} height="10" rx="3" fill={col}/>
                <text x={x} y={422} textAnchor="middle" fill={col} fontSize="7.5" fontWeight="700" fontFamily="sans-serif">{cost}</text>
              </g>
            ))}
          </svg>
        </div>
        <p className="img-cap">DevSecOps pipeline dashboard, security controls at every SDLC stage, 3 pillars, live security metrics, maturity phases, and the cost-of-fix curve from design to production.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#shift-left">What "Shift Left" Actually Means</a>
            <a href="#three-pillars">The 3 Pillars of DevSecOps</a>
            <a href="#pipeline-automation">Pipeline Automation Stack</a>
            <a href="#threat-modeling">Threat Modeling with STRIDE</a>
            <a href="#compliance">DevSecOps &amp; Compliance</a>
            <a href="#pitfalls">Common Pitfalls</a>
            <a href="#roadmap">3-Phase Maturity Roadmap</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-target="30" data-suffix="×">0×</div><div className="stat-l">more expensive to fix a bug in production vs at design phase<br/><span style={{fontSize:'.68rem',opacity:.55}}>NIST / IBM Systems Sciences Institute</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="3" data-suffix=" pillars">0 pillars</div><div className="stat-l">DevSecOps rests on: Culture, Automation, and Measurement<br/><span style={{fontSize:'.68rem',opacity:.55}}>Industry consensus</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="80" data-suffix="%">0%</div><div className="stat-l">reduction in manual pre-audit evidence effort with pipeline integration<br/><span style={{fontSize:'.68rem',opacity:.55}}>SecComply client data</span></div></div>
          </div>

          <p>For years, security was the team that said "no" at the end of the development cycle. QA was done, the feature was shipped, and then security reviews would surface vulnerabilities that either blocked the release or, worse, were quietly accepted as technical debt. The cost was predictable: slow releases, frustrated developers, and a false sense of security.</p>
          <p>DevSecOps changes that equation. By integrating security practices directly into the software development lifecycle, teams catch vulnerabilities earlier, remediate them faster, and build products that are genuinely more secure, without sacrificing velocity.</p>

          <section id="shift-left">
            <h2>What Does <em>"Shift Left"</em> Actually Mean?</h2>
            <p>In a traditional software development pipeline, stages flow left to right: <strong>Plan → Code → Build → Test → Release → Deploy → Monitor.</strong> Security was historically placed at the right end, a final gate before release.</p>
            <p>Shifting left means moving security activities, threat modeling, code scanning, dependency checks, and compliance validation, as far left as possible. Ideally, security starts at the planning and design phase, not after code is already written.</p>
            <div className="callout co-info">
              <span className="co-icon">📊</span>
              <div className="co-body">
                <strong>By the Numbers</strong>
                <p>NIST estimates that fixing a bug after production deployment costs up to 30 times more than catching it during the design phase. IBM's Systems Sciences Institute found a similar ratio. The case for shifting left is economic as much as it is security-driven.</p>
              </div>
            </div>
          </section>

          <section id="three-pillars">
            <h2>The Three <em>Pillars of DevSecOps</em></h2>
            <p>True DevSecOps rests on three interdependent pillars: Culture, Automation, and Measurement. Implementing tooling alone without cultural buy-in will fail. Training teams without automation creates unsustainable manual overhead. And running tools without measurement leaves you blind to progress.</p>

            <ul className="feat-list">
              <li className="anim">
                <div className="f-num">1</div>
                <div className="f-body">
                  <strong>Culture, Security is Everyone's Responsibility</strong>
                  <span>The most important shift in DevSecOps is organisational, not technical. Developers need to own security outcomes, not just features. This requires embedding security champions within engineering squads, treating security findings in the same backlog as bugs, running blameless post-mortems that treat security incidents as learning opportunities, and leadership that visibly prioritises security alongside delivery speed.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">2</div>
                <div className="f-body">
                  <strong>Automation, Integrate Security into the Pipeline</strong>
                  <span>Automation is what makes DevSecOps scalable. Manual security reviews cannot keep up with modern CI/CD pipelines shipping dozens of releases per day. Security tooling must be integrated at every stage, from pre-commit hooks to runtime protection, so every code change is automatically scanned before it can reach production.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">3</div>
                <div className="f-body">
                  <strong>Measurement, Track What Matters</strong>
                  <span>You cannot improve what you do not measure. Effective DevSecOps programmes track: Mean Time to Remediate (MTTR) by vulnerability severity, number of vulnerabilities introduced per release vs closed, percentage of pipelines with security gates enabled, and false positive rate from SAST/DAST tools (high false positive rates cause alert fatigue and tool abandonment).</span>
                </div>
              </li>
            </ul>
          </section>

          <section id="pipeline-automation">
            <h2>The Full <em>Pipeline Automation Stack</em></h2>
            <p>Automation is what separates a genuine DevSecOps programme from a DevOps team with a scanner bolted on. Here's the complete tooling picture, organised by pipeline stage:</p>

            <div className="pipeline-stages">
              <div className="pipe-stage anim">
                <div className="pipe-stage-hdr">
                  <span className="pipe-badge pipe-badge-commit">At Commit / Pre-Merge</span>
                  <span className="pipe-stage-title">Stop secrets and insecure code from entering version control</span>
                </div>
                <p style={{fontSize:'.88rem',color:'var(--tm)',marginBottom:'.6rem'}}>Secret scanning prevents credentials from ever reaching the repo. SAST catches insecure code patterns as part of pull request checks. SCA flags vulnerable open-source dependencies before merge, when they're cheapest to fix.</p>
                <div className="pipe-tools">
                  {['GitLeaks','TruffleHog','Semgrep','Checkmarx','SonarQube','OWASP Dependency-Check'].map(t=><span key={t} className="tool-tag">{t}</span>)}
                </div>
              </div>
              <div className="pipe-stage anim">
                <div className="pipe-stage-hdr">
                  <span className="pipe-badge pipe-badge-build">At Build / CI</span>
                  <span className="pipe-stage-title">Secure every artifact before it leaves the build stage</span>
                </div>
                <p style={{fontSize:'.88rem',color:'var(--tm)',marginBottom:'.6rem'}}>Container image scanning identifies vulnerabilities in base images and installed packages. IaC scanning catches misconfigured Terraform or CloudFormation before deployment. Automated SBOM generation creates a software bill of materials for every build artifact.</p>
                <div className="pipe-tools">
                  {['Trivy','Snyk Container','Checkov','tfsec','CycloneDX','Syft'].map(t=><span key={t} className="tool-tag">{t}</span>)}
                </div>
              </div>
              <div className="pipe-stage anim">
                <div className="pipe-stage-hdr">
                  <span className="pipe-badge pipe-badge-runtime">At Deploy / Runtime</span>
                  <span className="pipe-stage-title">Continuous protection and drift detection in staging and production</span>
                </div>
                <p style={{fontSize:'.88rem',color:'var(--tm)',marginBottom:'.6rem'}}>DAST tools run against staging environments to detect runtime vulnerabilities before they reach production. CSPM monitors for configuration drift in cloud environments. RASP provides real-time threat detection in production without code changes.</p>
                <div className="pipe-tools">
                  {['OWASP ZAP','Burp Suite','Prisma Cloud','Wiz','Contrast Security'].map(t=><span key={t} className="tool-tag">{t}</span>)}
                </div>
              </div>
            </div>
          </section>

          <section id="threat-modeling">
            <h2>Threat Modeling: <em>Security at the Design Phase</em></h2>
            <p>The most mature DevSecOps programmes do not wait for code to be written before thinking about security. Threat modeling is the practice of systematically identifying potential threats during the architecture and design phase.</p>

            {/* STRIDE SVG */}
            <div className="img-wrap" style={{marginTop:'1.5rem'}}>
              <svg viewBox="0 0 760 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'#081826'}}>
                <text x="380" y="26" textAnchor="middle" fill="rgba(200,214,229,0.75)" fontSize="11" fontWeight="700" fontFamily="sans-serif">STRIDE Threat Modeling Framework</text>
                {[
                  {letter:'S', name:'Spoofing',            desc:'Impersonating another user or system',       col:'#818cf8', x:35},
                  {letter:'T', name:'Tampering',           desc:'Modifying data or code without auth',        col:'#E8632B', x:168},
                  {letter:'R', name:'Repudiation',         desc:'Denying an action was taken',               col:'#ffb703', x:301},
                  {letter:'I', name:'Info Disclosure',     desc:'Exposing data to unauthorised parties',      col:'#ff4d6d', x:434},
                  {letter:'D', name:'Denial of Service',   desc:'Degrading or blocking availability',        col:'#06d6a0', x:567},
                  {letter:'E', name:'Elevation of Priv.',  desc:'Gaining privileges above entitlement',      col:'#E8632B', x:700},
                ].map(({letter,name,desc,col,x},i)=>(
                  <g key={i}>
                    <rect x={x-58} y="36" width="116" height="148" rx="9" fill={`${col}08`} stroke={`${col}28`} strokeWidth="1"/>
                    <circle cx={x} cy="63" r="18" fill={`${col}18`} stroke={col} strokeWidth="1.5"/>
                    <text x={x} y="68" textAnchor="middle" fill={col} fontSize="16" fontWeight="800" fontFamily="sans-serif">{letter}</text>
                    <text x={x} y="98" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">{name}</text>
                    <foreignObject x={x-50} y="106" width="100" height="68">
                      <div xmlns="http://www.w3.org/1999/xhtml" style={{fontSize:'7.5px',color:'rgba(200,214,229,0.4)',lineHeight:'1.5',fontFamily:'sans-serif',textAlign:'center'}}>{desc}</div>
                    </foreignObject>
                  </g>
                ))}
              </svg>
            </div>
            <p className="img-cap">The STRIDE threat modeling framework, six threat categories applied during architecture and design to surface issues no scanner can catch after the fact.</p>

            <p>A lightweight threat modeling session, even 60 minutes with the engineering lead and a security champion, before writing a single line of code will surface design-level issues that no scanner can catch after the fact.</p>
          </section>

          <section id="compliance">
            <h2>DevSecOps and <em>Compliance: A Natural Partnership</em></h2>
            <p>Many compliance frameworks, SOC 2, ISO 27001, PCI DSS, require evidence of secure development practices. DevSecOps is not just good engineering hygiene; it directly produces the audit evidence these frameworks demand.</p>
            <ul className="feat-list">
              <li className="anim"><div className="f-num">✓</div><div className="f-body"><strong>Automated pipeline logs</strong><span>Demonstrate that security scanning ran on every deployment, satisfying change management controls in SOC 2 CC8.1 and ISO 27001 A.12.1.</span></div></li>
              <li className="anim"><div className="f-num">✓</div><div className="f-body"><strong>SBOM records</strong><span>Provide evidence of software composition tracking for supply chain security requirements, increasingly mandated by enterprise customers and regulators.</span></div></li>
              <li className="anim"><div className="f-num">✓</div><div className="f-body"><strong>Vulnerability tracking dashboards</strong><span>Demonstrate MTTR performance against policy-defined SLAs, a key SOC 2 and ISO 27001 evidence requirement.</span></div></li>
              <li className="anim"><div className="f-num">✓</div><div className="f-body"><strong>IaC scanning results</strong><span>Show auditors that infrastructure is provisioned securely and consistently, no manual configuration drift, no undocumented changes.</span></div></li>
              <li className="anim"><div className="f-num">✓</div><div className="f-body"><strong>Security champion training records</strong><span>Satisfy security awareness training requirements across virtually every major framework, because it's real training with measurable outcomes.</span></div></li>
            </ul>
            <div className="callout co-sc">
              <span className="co-icon">🛡️</span>
              <div className="co-body">
                <strong>SecComply: Pipeline → Compliance Automation</strong>
                <p>When SecComply connects to your CI/CD pipeline, it automatically pulls security scan results and maps them to your compliance controls in real time, eliminating the manual evidence collection burden that typically consumes months of pre-audit preparation.</p>
              </div>
            </div>
          </section>

          <section id="pitfalls">
            <h2>Common DevSecOps <em>Pitfalls</em></h2>
            <p>Organisations that struggle with DevSecOps typically run into the same handful of problems. Recognising them in advance is most of the battle.</p>
            <div className="pitfall-list">
              {[
                {t:'Tool proliferation without integration', d:'Adding five scanning tools that produce five separate dashboards creates noise, not signal. Consolidate findings into a single pane of glass.'},
                {t:'Treating security as a blocker', d:'If every SAST finding blocks deployment, developers will disable the scanner. Use severity thresholds, block on critical and high, warn on medium and low.'},
                {t:'Ignoring the human layer', d:'No amount of tooling compensates for developers who do not understand why a vulnerability is dangerous. Invest in secure coding training alongside tooling.'},
                {t:'Skipping threat modeling', d:'Teams that jump straight to scanning miss design-level risks that scanning will never surface. Even a 60-minute session before feature work starts pays dividends.'},
                {t:'Measuring the wrong things', d:'Tracking "number of scans run" rather than "MTTR for critical vulnerabilities" measures activity, not impact. Instrument the outcomes that matter.'},
              ].map(({t,d},i)=>(
                <div key={i} className="pitfall-item anim">
                  <div className="pf-num">{i+1}</div>
                  <div className="pf-body"><strong>{t}</strong><span>{d}</span></div>
                </div>
              ))}
            </div>
          </section>

          <section id="roadmap">
            <h2>A Practical DevSecOps <em>Maturity Roadmap</em></h2>
            <p>Use this phased approach to build your DevSecOps capability progressively, without overwhelming your engineering team or blocking delivery.</p>
            <div className="phase-grid">
              <div className="phase-card anim">
                <div className="phase-label">Phase 1, 0 to 3 Months</div>
                <h3>Foundational</h3>
                <ul>
                  <li>Enable secret scanning and basic SAST on your primary code repositories</li>
                  <li>Establish severity-based vulnerability SLAs (critical: 72h, high: 14 days, medium: 30 days)</li>
                  <li>Conduct a security champion readiness assessment and identify candidates in each squad</li>
                </ul>
              </div>
              <div className="phase-card anim">
                <div className="phase-label">Phase 2, 3 to 6 Months</div>
                <h3>Integrated</h3>
                <ul>
                  <li>Implement SCA and container scanning in all CI pipelines</li>
                  <li>Deploy IaC scanning across all infrastructure-as-code repositories</li>
                  <li>Launch the security champion programme with formal training and a community of practice</li>
                  <li>Begin threat modeling on all new features above a defined complexity threshold</li>
                </ul>
              </div>
              <div className="phase-card anim">
                <div className="phase-label">Phase 3, 6 to 12 Months</div>
                <h3>Advanced</h3>
                <ul>
                  <li>Integrate DAST into staging pipeline with automatic regression testing</li>
                  <li>Implement automated compliance mapping, pipeline security evidence feeds directly into your GRC platform</li>
                  <li>Establish a bug bounty or internal red team programme for continuous adversarial testing</li>
                  <li>Publish internal DevSecOps metrics to engineering leadership on a monthly cadence</li>
                </ul>
              </div>
            </div>

            <div className="pull-quote">
              <p>"DevSecOps is not a product you buy or a certification you earn. It is an ongoing engineering discipline that treats security as a first-class concern at every stage of the SDLC."</p>
            </div>

            <p>When done well, DevSecOps makes your team <strong>faster</strong>, not slower, because vulnerabilities caught at the design phase cost a fraction of what they cost to remediate in production. For SaaS companies navigating compliance, DevSecOps offers an additional dividend: the automated evidence trail it produces makes SOC 2, ISO 27001, and PCI DSS audits dramatically less painful.</p>
          </section>

          <div className="cta-banner">
            <h3>Connect Your DevSecOps Pipeline to Your Compliance Programme</h3>
            <p>SecComply integrates with your CI/CD toolchain to automatically map security evidence to your compliance controls, saving months of manual pre-audit work.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Schedule a Demo →</a>
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
                {q:'What does "shift left" mean in DevSecOps?', a:'Shifting left means moving security activities, threat modeling, code scanning, dependency checks, and compliance validation, as early as possible in the software development lifecycle. In a traditional pipeline, security was placed at the right end as a final gate. Shifting left means security starts at the planning and design phase, not after code is already written. NIST estimates that fixing a bug after production deployment costs up to 30 times more than catching it at design phase.'},
                {q:'What are the three pillars of DevSecOps?', a:'The three pillars of DevSecOps are: Culture (security is everyone\'s responsibility, developers own security outcomes, security champion programmes), Automation (integrating security tooling at every stage of the CI/CD pipeline, SAST, SCA, container scanning, IaC scanning, DAST, CSPM), and Measurement (tracking MTTR by severity, vulnerabilities introduced vs closed, pipeline security gate coverage, and false positive rates).'},
                {q:'What tools are used in a DevSecOps pipeline?', a:'At commit/pre-merge: secret scanning (GitLeaks, TruffleHog), SAST (Semgrep, Checkmarx, SonarQube), and SCA for vulnerable dependencies. At build/CI: container image scanning (Trivy, Snyk Container), IaC scanning (Checkov, tfsec), and automated SBOM generation. At deploy/runtime: DAST (OWASP ZAP, Burp Suite), CSPM for cloud configuration drift, and RASP for real-time threat detection in production.'},
                {q:'How does DevSecOps support SOC 2 and ISO 27001 compliance?', a:'DevSecOps directly produces the audit evidence that SOC 2 and ISO 27001 require. Automated pipeline logs demonstrate that security scanning ran on every deployment. SBOM records provide evidence of software composition tracking. Vulnerability tracking dashboards demonstrate MTTR performance against policy SLAs. IaC scanning results show auditors that infrastructure is provisioned securely and consistently.'},
                {q:'What is threat modeling and why does it matter in DevSecOps?', a:'Threat modeling is the practice of systematically identifying potential threats during the architecture and design phase, before code is written. The STRIDE framework (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) provides a structured approach. A 60-minute threat modeling session before writing a single line of code will surface design-level issues that no scanner can catch after the fact.'},
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
              <li><a href="#shift-left" className="toc-link">What "Shift Left" Means</a></li>
              <li><a href="#three-pillars" className="toc-link">3 Pillars of DevSecOps</a></li>
              <li><a href="#pipeline-automation" className="toc-link">Pipeline Automation Stack</a></li>
              <li><a href="#threat-modeling" className="toc-link">Threat Modeling (STRIDE)</a></li>
              <li><a href="#compliance" className="toc-link">DevSecOps & Compliance</a></li>
              <li><a href="#pitfalls" className="toc-link">Common Pitfalls</a></li>
              <li><a href="#roadmap" className="toc-link">3-Phase Roadmap</a></li>
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
              <span className="tag">DevSecOps</span><span className="tag">Shift Left</span><span className="tag">SAST</span><span className="tag">DAST</span><span className="tag">SCA</span><span className="tag">Threat Modeling</span><span className="tag">STRIDE</span><span className="tag">CI/CD Security</span><span className="tag">SOC 2</span><span className="tag">ISO 27001</span><span className="tag">SBOM</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Automate Your Compliance Evidence</h4>
            <p>Connect your DevSecOps pipeline to your compliance programme, no more manual evidence collection.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Schedule a Demo →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
