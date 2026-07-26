import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function HowToPrepareForSecurityAudit() {
  useEffect(() => {
    (function () {
      'use strict';

      /* 1. READING PROGRESS */
      const bar = document.getElementById('reading-progress');
      window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.width = (h > 0 ? Math.min(window.scrollY / h * 100, 100) : 0) + '%';
      }, { passive: true });

      /* 2. READ TIME */
      const artEl = document.querySelector('.art');
      const rtEl = document.getElementById('read-time');
      if (artEl && rtEl) {
        const words = (artEl.innerText || '').trim().split(/\s+/).length;
        rtEl.textContent = '📖 ' + Math.max(1, Math.round(words / 220)) + ' min read';
      }

      /* 3. ANIMATED STAT COUNTERS */
      function animateStat(el) {
        const target = parseFloat(el.dataset.target);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const dec = !Number.isInteger(target);
        const dur = 1800;
        const t0 = performance.now();
        const ease = t => 1 - Math.pow(1 - t, 4);
        (function frame(now) {
          const p = Math.min((now - t0) / dur, 1);
          const v = target * ease(p);
          el.textContent = prefix + (dec ? v.toFixed(1) : Math.floor(v)) + suffix;
          if (p < 1) requestAnimationFrame(frame);
          else el.textContent = prefix + (dec ? target.toFixed(1) : target) + suffix;
        })(t0);
      }
      const stats = document.querySelectorAll('.stat-n[data-target]');
      if (stats.length) {
        const io = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { animateStat(e.target); io.unobserve(e.target); } });
        }, { threshold: 0.4 });
        stats.forEach(el => io.observe(el));
      }

      /* 4. SMOOTH SCROLL */
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const t = document.querySelector(a.getAttribute('href'));
          if (!t) return;
          e.preventDefault();
          window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 24, behavior: 'smooth' });
          history.pushState(null, '', a.getAttribute('href'));
        });
      });

      /* 5. ACTIVE TOC HIGHLIGHT */
      const sections = document.querySelectorAll('section[id]');
      const tocLinks = document.querySelectorAll('.toc-link');
      if (sections.length && tocLinks.length) {
        const obs = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting)
              tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
          });
        }, { rootMargin: '-60px 0px -55% 0px', threshold: 0 });
        sections.forEach(s => obs.observe(s));
      }

      /* 6. BACK TO TOP */
      const btt = document.getElementById('btt');
      window.addEventListener('scroll', () => { if (btt) btt.classList.toggle('vis', window.scrollY > 600); }, { passive: true });

      /* 7. SOCIAL SHARE */
      const url = encodeURIComponent('https://seccomply.net/resources/blog/how-to-prepare-for-a-security-audit');
      const ttl = encodeURIComponent('How to Prepare for a Security Audit, SecComply');
      const sl = document.getElementById('sl');
      const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';

      window.copyLink = function () {
        const raw = 'https://seccomply.net/resources/blog/how-to-prepare-for-a-security-audit';
        (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject())
          .catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); });
        toast('Link copied!');
      };

      function toast(msg) {
        let t = document.getElementById('sc-toast');
        if (!t) {
          t = document.createElement('div');
          t.id = 'sc-toast';
          t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgb(var(--accent-rgb) / .4);opacity:0;transition:opacity .3s;pointer-events:none';
          document.body.appendChild(t);
        }
        t.textContent = msg;
        t.style.opacity = '1';
        clearTimeout(t._tid);
        t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500);
      }

      /* 8. SCROLL FADE-IN */
      const fadeEls = document.querySelectorAll('.anim');
      if (fadeEls.length && 'IntersectionObserver' in window) {
        const fo = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
        fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); });
      }

      /* 9. FAQ TOGGLE */
      window.toggleFaq = function (q) {
        const item = q.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      };
      const first = document.querySelector('.faq-item');
      if (first) first.classList.add('open');

      /* 10. dateModified updater */
      document.querySelectorAll('script[type="application/ld+json"]').forEach(s => {
        try {
          const d = JSON.parse(s.textContent);
          const today = new Date().toISOString().split('T')[0];
          const fix = obj => { if (!obj || typeof obj !== 'object') return; Object.keys(obj).forEach(k => { if (k === 'dateModified') obj[k] = today; fix(obj[k]); }); };
          fix(d); s.textContent = JSON.stringify(d);
        } catch (_) {}
      });
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>How to Prepare for a Security Audit: The Complete Guide, SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A step-by-step guide to security audit preparation, 8 stages, the evidence auditors look for, and how to build a programme that is audit-ready by default. Covers ISO 27001, SOC 2, DPDPA, and GDPR." />
        <meta name="keywords" content="how to prepare for security audit, security audit preparation, ISO 27001 audit checklist, SOC 2 audit readiness, audit evidence collection, internal security audit, DPDPA compliance audit, audit gap assessment, security audit guide, information security audit" />
        <meta property="og:title" content="How to Prepare for a Security Audit: The Complete Guide" />
        <meta property="og:description" content="8 stages, the evidence auditors actually look for, and how to build a programme that is audit-ready every day, not just in the week before the auditor arrives." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/how-to-prepare-for-a-security-audit" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/security-audit-prep-og.png" />
        <meta property="article:published_time" content="2026-03-17" />
        <meta property="article:modified_time" content="2026-03-17" />
        <meta property="article:author" content="Bhumika Deshmukh" />
        <meta property="article:tag" content="Security Audit" />
        <meta property="article:tag" content="ISO 27001" />
        <meta property="article:tag" content="SOC 2" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/how-to-prepare-for-a-security-audit" />        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "How to Prepare for a Security Audit: The Complete Guide",
              "description": "A step-by-step guide to security audit preparation, 8 stages, the evidence auditors look for, and how to build a programme that is audit-ready by default.",
              "author": { "@type": "Person", "name": "Bhumika Deshmukh", "jobTitle": "Cyber Security Analyst & Technical Writer", "worksFor": { "@type": "Organization", "name": "SecComply" } },
              "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } },
              "datePublished": "2026-03-17",
              "dateModified": "2026-03-17",
              "mainEntityOfPage": "https://seccomply.net/resources/blog/how-to-prepare-for-a-security-audit",
              "keywords": "security audit preparation, ISO 27001 audit, SOC 2 audit readiness, audit evidence collection, DPDPA compliance audit, audit gap assessment",
              "articleSection": "Compliance & Audit",
              "wordCount": 2200,
              "timeRequired": "PT7M",
              "image": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/blog/security-audit-prep-og.png" }
            },
            {
              "@type": "HowTo",
              "name": "How to Prepare for a Security Audit",
              "description": "A structured 8-stage approach to preparing for any security audit, ISO 27001, SOC 2, DPDPA, or GDPR.",
              "totalTime": "P3W",
              "step": [
                { "@type": "HowToStep", "position": 1, "name": "Confirm the scope in writing", "text": "Get the scope of the audit in writing, systems, processes, locations, and framework clauses included." },
                { "@type": "HowToStep", "position": 2, "name": "Run an honest internal gap assessment", "text": "Review every control in scope: implemented and evidenced, partially in place, or genuinely missing." },
                { "@type": "HowToStep", "position": 3, "name": "Assign a control owner to every requirement", "text": "Every requirement in scope needs a named person responsible for that control and its evidence." },
                { "@type": "HowToStep", "position": 4, "name": "Collect and organise your evidence", "text": "Policies, logs, screenshots, access reviews, training records, everything the auditor will ask for, labelled and current." },
                { "@type": "HowToStep", "position": 5, "name": "Review and update all policies", "text": "Every policy in scope should have a review date, an owner, and a current signature from an appropriate authority." },
                { "@type": "HowToStep", "position": 6, "name": "Brief your team", "text": "Every person the auditor might speak to should understand what the audit is for and what controls exist in their area." },
                { "@type": "HowToStep", "position": 7, "name": "Prepare your audit trail documentation", "text": "For each control, build a clear narrative: the requirement, the policy, the evidence, the owner." },
                { "@type": "HowToStep", "position": 8, "name": "Conduct a pre-audit internal walkthrough", "text": "Walk through the process yourself before the formal audit. Fix what breaks down now, not during the audit." }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "How long does it take to prepare for a security audit?", "acceptedAnswer": { "@type": "Answer", "text": "For a first-time ISO 27001 or SOC 2 audit, organisations typically need three to six months of structured preparation. For surveillance audits where a programme already exists, a focused three-week sprint, following the 8-stage process, can be sufficient. The earlier you start building continuous evidence collection into your daily operations, the less preparation a single audit requires." } },
                { "@type": "Question", "name": "What evidence do auditors look for in a security audit?", "acceptedAnswer": { "@type": "Answer", "text": "Auditors consistently ask for: a signed Information Security Policy, a risk register reviewed within the past year, security awareness training records with completion dates, change management records, a tested business continuity and DR plan, DPIA records for high-risk processing, a current asset inventory, access control logs and user access reviews, an incident log, supplier contracts with security clauses, and patch management and vulnerability scan records." } },
                { "@type": "Question", "name": "What is the most common reason organisations fail security audits?", "acceptedAnswer": { "@type": "Answer", "text": "The most common finding in first-time audits is not that controls are missing, it is that controls exist but cannot be evidenced. An organisation may genuinely enforce MFA or conduct access reviews, but without logs, screenshots, or documented processes, an auditor cannot confirm it. Evidence collection is not optional. It is the audit." } },
                { "@type": "Question", "name": "What is the difference between ISO 27001 and SOC 2 audit preparation?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001 certification audits focus on a defined ISMS scope and evaluate implementation of Annex A controls against your Statement of Applicability. SOC 2 audits assess the Trust Service Criteria relevant to your service commitments, typically Security, Availability, and Confidentiality. ISO 27001 preparation tends to emphasise policy documentation and risk treatment; SOC 2 preparation puts more weight on system-level controls, logging, and operational evidence over the audit period." } },
                { "@type": "Question", "name": "How can SecComply help with security audit preparation?", "acceptedAnswer": { "@type": "Answer", "text": "SecComply runs a free audit readiness assessment that maps your current controls against the framework you are being audited against, ISO 27001, SOC 2, DPDPA, GDPR, or others, and identifies exactly where the gaps are before the auditor does. We then help organisations build the evidence, policies, and audit trail documentation needed to go into the audit with confidence." } },
                { "@type": "Question", "name": "What should you do after a security audit?", "acceptedAnswer": { "@type": "Answer", "text": "For each finding, produce a corrective action response naming the person responsible, describing the specific action, and committing to a realistic date. For certification audits, treat your findings tracker as a live document, auditors on the next cycle will check whether commitments were fulfilled. The goal after any audit is to build toward continuous readiness, where evidence is collected daily and controls are maintained without needing a pre-audit sprint." } }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
                { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
                { "@type": "ListItem", "position": 4, "name": "How to Prepare for a Security Audit", "item": "https://seccomply.net/resources/blog/how-to-prepare-for-a-security-audit" }
              ]
            }
          ]
        }) }} />
      </Head>

      <style jsx global>{`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,var(--accent),var(--accent-light));z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none;transition:color .2s}
    .breadcrumb a:hover{color:var(--cy)}
    .bc-sep{opacity:.4}
    .cspm-hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem;display:block !important;grid-template-columns:none !important}
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
    .toc-grid a:hover{color:var(--cy)}
    .toc-grid a:hover::before{opacity:1}
    .art h2{font-family:var(--serif);font-size:1.65rem;font-weight:700;color:var(--tx);margin:3rem 0 1.2rem;line-height:1.3}
    .art h2 em{color:var(--cy);font-style:italic}
    .art h3{font-family:var(--serif);font-size:1.15rem;font-weight:700;color:var(--tx);margin:2rem 0 .7rem}
    .art p{font-size:1rem;line-height:1.85;color:var(--tb);margin-bottom:1.2rem}
    .art p strong{color:var(--tx);font-weight:600}
    .pull-quote{border-left:4px solid var(--cy);padding:1.4rem 2rem;margin:2.5rem 0;background:linear-gradient(135deg,rgb(var(--accent-rgb) / .06),transparent);border-radius:0 12px 12px 0}
    .pull-quote p{font-family:var(--serif);font-size:1.1rem;font-style:italic;color:var(--tx)!important;margin-bottom:.5rem!important;line-height:1.6!important}
    .pull-quote cite{font-size:.77rem;color:var(--tm)}
    .def-box{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .07),rgb(var(--accent-rgb) / .02));border:1px solid rgb(var(--accent-rgb) / .22);border-radius:14px;padding:1.6rem 2rem;margin:2rem 0}
    .def-lbl{font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--cy);margin-bottom:.6rem}
    .def-box p{font-size:.97rem;color:var(--tx)!important;margin-bottom:0!important;line-height:1.7}
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
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .feat-list{list-style:none;margin:1.5rem 0;display:flex;flex-direction:column;gap:.65rem}
    .feat-list li{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s,background .2s}
    .feat-list li:hover{border-color:var(--bo);background:var(--bgc)}
    .f-num{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,var(--accent),var(--accent-light));display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:2px}
    .f-body strong{display:block;color:var(--tx);font-size:.89rem;margin-bottom:3px}
    .f-body span{font-size:.83rem;color:var(--tm)}
    .cmp-wrap{overflow-x:auto;margin:2rem 0;border-radius:14px;border:1px solid var(--bo)}
    .cmp-table{width:100%;border-collapse:collapse}
    .cmp-table th{background:var(--bgc);padding:.85rem 1.1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .cmp-table td{padding:.82rem 1.1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .cmp-table tr:last-child td{border-bottom:none}
    .cmp-table tr:hover td{background:rgb(var(--accent-rgb) / .03)}
    .tg-y{color:var(--gr);font-weight:600}.tg-n{color:var(--red);font-weight:600}.tg-m{color:var(--am);font-weight:600}
    .checklist-grid{display:grid;grid-template-columns:1fr 1fr;gap:.55rem;margin:1.5rem 0}
    .chk-item{display:flex;align-items:flex-start;gap:.65rem;padding:.75rem 1rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:9px;font-size:.83rem;color:var(--tb);transition:border-color .2s}
    .chk-item:hover{border-color:var(--bo)}
    .chk-box{width:18px;height:18px;border-radius:4px;border:1.5px solid rgb(var(--accent-rgb) / .4);background:rgb(var(--accent-rgb) / .06);flex-shrink:0;margin-top:1px;display:flex;align-items:center;justify-content:center;font-size:.6rem;color:var(--cy)}
    .during-grid{display:flex;flex-direction:column;gap:.75rem;margin:1.5rem 0}
    .during-item{display:flex;align-items:flex-start;gap:1rem;padding:1.2rem 1.4rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;transition:border-color .2s}
    .during-item:hover{border-color:var(--bo)}
    .d-icon{font-size:1.3rem;flex-shrink:0;margin-top:2px}
    .d-body strong{display:block;color:var(--tx);font-size:.92rem;margin-bottom:.35rem}
    .d-body span{font-size:.84rem;color:var(--tm);line-height:1.65}
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
    .rel-links a:last-child{border-bottom:none}
    .rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);cursor:default;transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy);background:var(--glow)}
    .sb-cta{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--accent-rgb) / .03));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-family:var(--serif);font-size:.98rem;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgb(var(--accent-rgb) / .4);transition:transform .2s;z-index:50}
    #btt.vis{display:flex}
    #btt:hover{transform:translateY(-3px)}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:768px){.stats-row{grid-template-columns:1fr}.checklist-grid{grid-template-columns:1fr}.blog-layout{padding:0 1.25rem 3rem}.cspm-hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.cspm-hero-h1{font-size:1.65rem}.cspm-author-strip{flex-direction:column;align-items:flex-start;gap:12px}}
    @media(max-width:480px){.cspm-hero-wrap{padding:1.5rem 1rem}.blog-layout{padding:0 1rem 3rem}}
      `}</style>

      <div id="reading-progress"></div>

      {/* ── BREADCRUMB ── */}
      <div className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a href="https://seccomply.net/" itemProp="item"><span itemProp="name">Home</span></a>
          <meta itemProp="position" content="1" />
        </span>
        <span className="bc-sep">›</span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a href="https://seccomply.net/resources" itemProp="item"><span itemProp="name">Resources</span></a>
          <meta itemProp="position" content="2" />
        </span>
        <span className="bc-sep">›</span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a href="https://seccomply.net/resources/blog" itemProp="item"><span itemProp="name">Blog</span></a>
          <meta itemProp="position" content="3" />
        </span>
        <span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>Security Audit Preparation</span>
      </div>

      {/* ── HERO ── */}
      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">🔍 Audit Readiness</span>
          <span className="badge badge-bl">📋 ISO 27001 · SOC 2</span>
          <span className="badge badge-am">🇮🇳 DPDPA · GDPR</span>
          <span className="badge badge-gr">✓ Step-by-Step Guide</span>
        </div>

        <h1 className="cspm-hero-h1">How to Prepare for a <em>Security Audit</em></h1>

        <p className="cspm-hero-sub">The difference between a painful audit and a straightforward one is not luck, it is whether you spent the weeks before it in reactive scramble mode, or whether you built a programme that collects evidence every day and keeps your controls audit-ready by default. Here is exactly how to do that.</p>

        <div className="cspm-author-strip">
          <div className="avatar">BD</div>
          <div className="author-info">
            <div className="name">Bhumika Deshmukh</div>
            <div className="meta-row">
              <span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cyber Security Analyst &amp; Technical Writer</span>
              <span className="dot">·</span>
              <span id="read-time">📖 7 min read</span>
            </div>
            <div className="date-row">
              <span>📅 March 2026</span>
              <span className="dot">·</span>
              <span>🏢 SecComply</span>
            </div>
          </div>
        </div>

        {/* ── INLINE SVG HERO ILLUSTRATION ── */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 440" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="gOr" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--accent)"/><stop offset="100%" stopColor="var(--accent-light)"/></linearGradient>
              <linearGradient id="gGr" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--green)"/><stop offset="100%" stopColor="var(--green)"/></linearGradient>
              <linearGradient id="gAm" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--yellow)"/><stop offset="100%" stopColor="#e09500"/></linearGradient>
              <linearGradient id="gRd" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--red)"/><stop offset="100%" stopColor="var(--red)"/></linearGradient>
              <pattern id="adots" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="13" cy="13" r=".9" fill="rgb(var(--accent-rgb) / 0.045)"/></pattern>
            </defs>
            <rect width="960" height="440" fill="url(#adots)"/>

            {/* ── LEFT: Audit Stages Progress ── */}
            <rect x="18" y="18" width="210" height="404" rx="12" fill="var(--bg-secondary)" stroke="rgb(var(--accent-rgb) / 0.15)" strokeWidth="1"/>
            <text x="38" y="46" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">8 STAGES OF AUDIT PREP</text>
            {[
              { label: "Confirm Scope",         done: true  },
              { label: "Gap Assessment",        done: true  },
              { label: "Assign Control Owners", done: true  },
              { label: "Collect Evidence",      done: true  },
              { label: "Review Policies",       done: true  },
              { label: "Brief Your Team",       done: false },
              { label: "Audit Trail Docs",      done: false },
              { label: "Pre-Audit Walkthrough", done: false },
            ].map(({ label, done }, i) => (
              <g key={i}>
                <rect x="30" y={60 + i * 44} width="186" height="34" rx="7" fill={done ? "rgb(var(--green-rgb) / 0.07)" : "rgba(255,255,255,0.03)"} stroke={done ? "rgb(var(--green-rgb) / 0.2)" : "rgba(255,255,255,0.06)"} strokeWidth="1"/>
                <circle cx="50" cy={60 + i * 44 + 17} r="9" fill={done ? "rgb(var(--green-rgb) / 0.15)" : "rgb(var(--accent-rgb) / 0.1)"} stroke={done ? "var(--green)" : "rgb(var(--accent-rgb) / 0.3)"} strokeWidth="1.2"/>
                <text x="50" y={60 + i * 44 + 21} textAnchor="middle" fill={done ? "var(--green)" : "rgb(var(--accent-rgb) / 0.6)"} fontSize="8" fontWeight="700" fontFamily="sans-serif">{done ? "✓" : `${i+1}`}</text>
                <text x="68" y={60 + i * 44 + 20} fill={done ? "var(--text-primary)" : "rgba(200,214,229,0.5)"} fontSize="9" fontFamily="sans-serif">{label}</text>
              </g>
            ))}

            {/* divider */}
            <line x1="242" y1="14" x2="242" y2="426" stroke="rgb(var(--accent-rgb) / 0.07)" strokeWidth="1"/>

            {/* ── CENTRE: Audit Readiness Score ── */}
            <text x="520" y="46" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="14" fontWeight="700" fontFamily="sans-serif">Audit Readiness Dashboard</text>
            <text x="520" y="62" textAnchor="middle" fill="rgba(100,160,200,0.45)" fontSize="8.5" fontFamily="sans-serif">ISO 27001 · SOC 2 · DPDPA · Last updated: today</text>

            {/* Main score ring */}
            <circle cx="520" cy="178" r="66" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12"/>
            <circle cx="520" cy="178" r="66" fill="none" stroke="url(#gGr)" strokeWidth="12"
              strokeDasharray="290 414" strokeDashoffset="103" strokeLinecap="round"/>
            <text x="520" y="170" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="700" fontFamily="sans-serif">70%</text>
            <text x="520" y="188" textAnchor="middle" fill="rgb(var(--green-rgb) / 0.7)" fontSize="9" fontFamily="sans-serif">Audit Ready</text>
            <text x="520" y="204" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">5 of 8 stages complete</text>

            {/* Mini cards */}
            <rect x="394" y="256" width="90" height="58" rx="9" fill="var(--bg-secondary)" stroke="rgb(var(--green-rgb) / 0.2)" strokeWidth="1"/>
            <text x="439" y="278" textAnchor="middle" fill="var(--green)" fontSize="20" fontWeight="700" fontFamily="sans-serif">5</text>
            <text x="439" y="293" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif">Stages Done</text>
            <text x="439" y="306" textAnchor="middle" fill="rgb(var(--green-rgb) / 0.5)" fontSize="7.5" fontFamily="sans-serif">✓ on track</text>

            <rect x="494" y="256" width="90" height="58" rx="9" fill="var(--bg-secondary)" stroke="rgb(var(--yellow-rgb) / 0.2)" strokeWidth="1"/>
            <text x="539" y="278" textAnchor="middle" fill="var(--yellow)" fontSize="20" fontWeight="700" fontFamily="sans-serif">3</text>
            <text x="539" y="293" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif">Remaining</text>
            <text x="539" y="306" textAnchor="middle" fill="rgb(var(--yellow-rgb) / 0.5)" fontSize="7.5" fontFamily="sans-serif">complete by D-7</text>

            {/* Framework coverage bars */}
            <text x="394" y="344" fill="rgba(200,214,229,0.6)" fontSize="9" fontWeight="600" fontFamily="sans-serif">Framework Coverage</text>
            {[
              { label: "ISO 27001", w: 112, pct: "95%", col: "url(#gGr)"  },
              { label: "SOC 2",     w: 96,  pct: "81%", col: "url(#gOr)"  },
              { label: "DPDPA",     w: 76,  pct: "64%", col: "url(#gAm)"  },
              { label: "GDPR",      w: 60,  pct: "51%", col: "url(#gRd)"  },
            ].map(({ label, w, pct, col }, i) => (
              <g key={i}>
                <text x="394" y={363 + i * 18} fill="rgba(200,214,229,0.5)" fontSize="8.5" fontFamily="sans-serif">{label}</text>
                <rect x="454" y={354 + i * 18} width="118" height="8" rx="4" fill="rgba(255,255,255,0.04)"/>
                <rect x="454" y={354 + i * 18} width={w} height="8" rx="4" fill={col}/>
                <text x="577" y={362 + i * 18} fill="rgba(200,214,229,0.6)" fontSize="8" fontWeight="700" fontFamily="sans-serif">{pct}</text>
              </g>
            ))}

            {/* divider */}
            <line x1="650" y1="14" x2="650" y2="426" stroke="rgb(var(--accent-rgb) / 0.07)" strokeWidth="1"/>

            {/* ── RIGHT: Evidence Checklist ── */}
            <text x="672" y="46" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">EVIDENCE CHECKLIST</text>
            {[
              { label: "Information Security Policy",  done: true  },
              { label: "Risk Register (< 1yr)",        done: true  },
              { label: "Security Training Records",    done: true  },
              { label: "Access Control Logs",          done: true  },
              { label: "Asset Inventory",              done: true  },
              { label: "Incident Log",                 done: true  },
              { label: "Vendor Security Clauses",      done: false },
              { label: "BC / DR Plan (tested)",        done: false },
              { label: "Change Management Records",    done: false },
              { label: "Patch & Vuln Scan Records",    done: false },
              { label: "DPIA Records",                 done: false },
            ].map(({ label, done }, i) => (
              <g key={i}>
                <rect x="664" y={60 + i * 34} width="276" height="26" rx="6" fill={done ? "rgb(var(--green-rgb) / 0.05)" : "rgba(255,255,255,0.02)"} stroke={done ? "rgb(var(--green-rgb) / 0.15)" : "rgba(255,255,255,0.05)"} strokeWidth="1"/>
                <rect x="672" y={67 + i * 34} width="12" height="12" rx="3" fill={done ? "var(--green)" : "rgba(255,255,255,0.05)"} stroke={done ? "var(--green)" : "rgba(255,255,255,0.15)"} strokeWidth="1"/>
                {done && <text x="678" y={78 + i * 34} textAnchor="middle" fill="var(--bg-secondary)" fontSize="8" fontWeight="800" fontFamily="sans-serif">✓</text>}
                <text x="692" y={77 + i * 34} fill={done ? "rgba(200,214,229,0.85)" : "rgba(200,214,229,0.4)"} fontSize="8.5" fontFamily="sans-serif">{label}</text>
              </g>
            ))}
            <text x="664" y="446" fill="rgba(200,214,229,0.3)" fontSize="7.5" fontFamily="sans-serif">6 / 11 items evidenced</text>
          </svg>
        </div>
        <p className="img-cap">An audit readiness dashboard, 8 preparation stages, real-time evidence checklist, and framework coverage across ISO 27001, SOC 2, DPDPA, and GDPR.</p>

        {/* ── INLINE TOC ── */}
        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#audit-types">Know Your Audit Type</a>
            <a href="#mistakes">Common Mistakes</a>
            <a href="#eight-stages">8 Stages of Preparation</a>
            <a href="#evidence">Evidence Auditors Look For</a>
            <a href="#during">During the Audit</a>
            <a href="#after">After the Audit</a>
            <a href="#checklist">Pre-Audit Checklist</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      {/* ── ARTICLE + SIDEBAR ── */}
      <div className="blog-layout">
        <article className="art">

          {/* STAT ROW */}
          <div className="stats-row anim">
            <div className="stat-card">
              <div className="stat-n" data-target="60" data-suffix="%">0%</div>
              <div className="stat-l">of first-time audit failures stem from missing evidence, not missing controls<br/><span style={{fontSize:'.68rem',opacity:.55}}>Vanta State of Compliance, 2024</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-n" data-target="8" data-suffix="">0</div>
              <div className="stat-l">structured stages that turn a difficult audit into a clean one<br/><span style={{fontSize:'.68rem',opacity:.55}}>This guide</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-n" data-target="3" data-suffix=" weeks">0 weeks</div>
              <div className="stat-l">minimum focused sprint to go from unprepared to audit-ready<br/><span style={{fontSize:'.68rem',opacity:.55}}>SecComply assessment data</span></div>
            </div>
          </div>

          {/* PULL QUOTE */}
          <div className="pull-quote">
            <p>"Auditors are not looking for perfection. They are looking for evidence that you take security seriously, that your controls are real, and that when something goes wrong, you know about it and you fix it."</p>
          </div>

          <p>Let's be honest, the words "security audit" make most people a little nervous. Whether it's your first one or your fifth, there's always that nagging question: have we actually done everything we were supposed to do? This guide is here to help you walk in confident rather than hoping for the best.</p>
          <p>A security audit is not an ambush. It is a structured examination of your organisation's controls, policies, and practices against a defined standard, whether that's ISO 27001, SOC 2, the DPDPA, or an internal framework. The auditor's job is to verify that what you say you do is actually what you do. Your job is to make that verification as smooth and evidence-rich as possible.</p>

          {/* SECTION 1 */}
          <section id="audit-types">
            <h2>First, Understand What Kind of <em>Audit</em> You Are Facing</h2>
            <p>Not all security audits are the same, and the preparation for each looks different. Before you do anything else, get clear on exactly what you are being audited against. The most common audit types organisations face include:</p>
            <ul className="feat-list">
              <li className="anim"><div className="f-num">1</div><div className="f-body"><strong>ISO 27001 certification and surveillance audits</strong><span>Stage 1 and Stage 2 certification audits evaluate your ISMS scope, risk treatment, and Annex A control implementation. Annual surveillance audits check whether corrective actions from the previous cycle were completed.</span></div></li>
              <li className="anim"><div className="f-num">2</div><div className="f-body"><strong>SOC 2 Type I and Type II</strong><span>Type I is a point-in-time review of control design. Type II covers a defined period (typically 6–12 months) and tests whether controls operated effectively throughout. Evidence requirements are substantially higher for Type II.</span></div></li>
              <li className="anim"><div className="f-num">3</div><div className="f-body"><strong>DPDPA and GDPR compliance reviews</strong><span>Regulators and enterprise clients increasingly conduct formal reviews against India's DPDPA and the EU's GDPR. These focus on data processing records, consent mechanisms, DPIA documentation, and breach response procedures.</span></div></li>
              <li className="anim"><div className="f-num">4</div><div className="f-body"><strong>Internal information security audits</strong><span>Internal audits are practice runs, and the most valuable ones are the honest ones. An internal audit conducted properly is your best early warning system before a third-party auditor arrives.</span></div></li>
              <li className="anim"><div className="f-num">5</div><div className="f-body"><strong>Customer-driven security questionnaires escalating to formal reviews</strong><span>Enterprise procurement security reviews often begin as questionnaires and escalate into on-site or virtual assessments. Having your evidence organised in advance turns a stressful customer review into a competitive advantage.</span></div></li>
            </ul>
          </section>

          {/* SECTION 2, mistakes table */}
          <section id="mistakes">
            <h2>What <em>Prepared Organisations</em> Do Differently</h2>
            <p>The same preparation mistakes appear in almost every first-time audit. Here is what they look like, and what organisations that sail through audits do instead.</p>
            <div className="cmp-wrap">
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>✕ Common audit preparation mistakes</th>
                    <th>✓ What prepared organisations do instead</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="tg-n">✕ Assuming last year's evidence still counts</td><td className="tg-y">✓ Continuous evidence collection throughout the year</td></tr>
                  <tr><td className="tg-n">✕ Collecting evidence in a last-minute sprint</td><td className="tg-y">✓ Assigned control owners for every requirement</td></tr>
                  <tr><td className="tg-n">✕ Leaving policy documents outdated and unsigned</td><td className="tg-y">✓ Policies reviewed and signed off quarterly</td></tr>
                  <tr><td className="tg-n">✕ Not knowing which controls are in scope</td><td className="tg-y">✓ Clear scope documented and agreed in advance</td></tr>
                  <tr><td className="tg-n">✕ Treating the audit as IT's problem, not leadership's</td><td className="tg-y">✓ Leadership actively engaged in audit governance</td></tr>
                  <tr><td className="tg-n">✕ Failing to brief staff before auditor interviews</td><td className="tg-y">✓ Staff briefed on what to expect and what to say</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 3, 8 stages */}
          <section id="eight-stages">
            <h2>The Eight Stages of <em>Audit Preparation</em></h2>
            <p>This approach works whether you have three months to prepare or three weeks. The earlier you start, the more comfortable the process, but even a focused three-week sprint, done properly, can turn a difficult audit into a clean one.</p>
            <ul className="feat-list">
              <li className="anim">
                <div className="f-num">1</div>
                <div className="f-body">
                  <strong>Confirm the scope, before anything else</strong>
                  <span>Get the scope of the audit in writing. What systems, processes, and locations are included? What framework clauses or control categories apply? Scope creep is the enemy of a well-prepared audit. Know exactly what is being examined and build your evidence map from there.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">2</div>
                <div className="f-body">
                  <strong>Run an honest internal gap assessment</strong>
                  <span>Before the auditor arrives, you need to know where your gaps are. Not a polished version for a board slide, an honest, internal review of every control in scope. Which are implemented and evidenced? Which are partially in place? Which are genuinely missing? The third category is where your preparation time goes.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">3</div>
                <div className="f-body">
                  <strong>Assign a control owner to every requirement</strong>
                  <span>One of the fastest ways to fail an audit is to have a room full of people who all assume someone else owns a particular control. Before any audit, every requirement in scope needs a named person responsible for that control being implemented and for producing its evidence on request.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">4</div>
                <div className="f-body">
                  <strong>Collect and organise your evidence</strong>
                  <span>Evidence is the currency of an audit. Policies, procedures, logs, screenshots, access reviews, training records, incident reports, risk registers, everything the auditor will ask to see needs to be findable, labelled, and current. Evidence collected in a panic two days before an audit is obvious. Evidence building for months is not.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">5</div>
                <div className="f-body">
                  <strong>Review and update all policies</strong>
                  <span>Out-of-date policies are a consistent audit finding. Every policy in scope should have a review date, an owner, and a signature from an appropriate authority. If your Information Security Policy was last signed three years ago by someone who has since left, that is a finding waiting to happen. Review them all. Update what needs updating. Get them signed.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">6</div>
                <div className="f-body">
                  <strong>Brief your team</strong>
                  <span>Auditors will speak to people, not just the CISO or the compliance lead. They will ask questions of IT staff, HR, operations, and sometimes customer-facing teams. Every person the auditor might interact with should understand what the audit is for, what controls exist in their area, and how to answer questions honestly and specifically. You are not coaching people on what to say. You are making sure they are not caught off guard.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">7</div>
                <div className="f-body">
                  <strong>Prepare your audit trail documentation</strong>
                  <span>The audit trail is not just your evidence files, it is the narrative that connects them. For each control, you should be able to tell a clear story: here is the requirement, here is the policy that addresses it, here is the evidence that it is implemented, and here is who owns it. Auditors move through a lot of material quickly. Make it easy for them to connect evidence to requirements.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">8</div>
                <div className="f-body">
                  <strong>Conduct a pre-audit internal walkthrough</strong>
                  <span>Before the formal audit, walk through the process yourself, or ask a colleague who was not involved in the preparation to do it. Treat it like the real thing. Where does the evidence break down? Where is the narrative unclear? Where does the control owner look uncertain? Fix those things now, not during the audit itself.</span>
                </div>
              </li>
            </ul>
          </section>

          {/* SECTION 4, evidence */}
          <section id="evidence">
            <h2>The Evidence Auditors <em>Look For Most</em></h2>
            <p>Across almost every security framework, there is a consistent set of evidence types that auditors will ask for. If you have these organised, labelled, and current, the rest of the audit tends to go smoothly.</p>

            <div className="checklist-grid">
              {[
                "Information Security Policy, signed and dated",
                "Risk register, reviewed within the past year",
                "Security awareness training records with completion dates",
                "Change management records for significant changes",
                "Business continuity and DR plan, tested",
                "DPIA records for high-risk processing activities",
                "Asset inventory, current and complete",
                "Access control logs and user access reviews",
                "Incident log, even if no major incidents occurred",
                "Supplier / vendor contracts with security clauses",
                "Internal audit results and management responses",
                "Patch management and vulnerability scan records",
              ].map((item, i) => (
                <div key={i} className="chk-item anim">
                  <div className="chk-box">☐</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="callout co-danger">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The evidence gap that catches most organisations</strong>
                <p>The single most common finding in first-time audits is not that controls are missing, it is that controls exist but cannot be evidenced. You may genuinely enforce MFA across all systems, but if there is no log, no screenshot, and no policy document that describes the process, an auditor cannot confirm it. Evidence is not optional. It is the audit.</p>
              </div>
            </div>
          </section>

          {/* SECTION 5, during */}
          <section id="during">
            <h2>What to Do <em>During the Audit</em> Itself</h2>
            <p>By the time the auditor arrives, your preparation should have done most of the work. But there are principles that help the process go well once it is underway.</p>

            <div className="during-grid">
              <div className="during-item anim">
                <span className="d-icon">🤝</span>
                <div className="d-body">
                  <strong>Be honest, not defensive</strong>
                  <span>If a control is not fully implemented, say so, and explain what is in place, what is planned, and what the timeline is. Auditors who feel they are being managed tend to dig harder. Auditors who feel they are getting an honest picture of a programme that takes security seriously tend to engage constructively. Honesty is not a vulnerability in an audit. Defensiveness is.</span>
                </div>
              </div>
              <div className="during-item anim">
                <span className="d-icon">👤</span>
                <div className="d-body">
                  <strong>Have a single point of contact</strong>
                  <span>Designate one person as the primary contact for the auditor. This person manages the schedule, facilitates access to documents and systems, and coordinates responses to follow-up questions. Having multiple people fielding auditor requests without coordination is a fast way to create contradictory or incomplete answers.</span>
                </div>
              </div>
              <div className="during-item anim">
                <span className="d-icon">✅</span>
                <div className="d-body">
                  <strong>Do not guess, confirm and come back</strong>
                  <span>If an auditor asks a question and you are not certain of the answer, do not guess. Say you will confirm and come back within the hour. A careful, accurate answer provided promptly looks far better than an immediate answer that turns out to be wrong.</span>
                </div>
              </div>
              <div className="during-item anim">
                <span className="d-icon">📝</span>
                <div className="d-body">
                  <strong>Take notes on every finding</strong>
                  <span>As the audit progresses, keep a running record of every finding, observation, and request the auditor raises. Do not wait for the formal report. Your notes will be valuable when triaging findings and preparing responses, and they give you a head start on corrective action planning.</span>
                </div>
              </div>
            </div>

            <div className="pull-quote">
              <p>"An audit is not the end of the process. It is a checkpoint. The organisations that get the most value from audits are the ones that treat every finding as a genuine opportunity to strengthen their security programme."</p>
            </div>
          </section>

          {/* SECTION 6, after */}
          <section id="after">
            <h2>After the Audit, <em>What Comes Next</em></h2>
            <p>A clean audit is not an invitation to relax. A difficult audit is not a reason to panic. In both cases, the response is the same: take the findings seriously, prioritise the remediation, and use the experience to build a better programme.</p>

            <ul className="feat-list">
              <li className="anim">
                <div className="f-num">1</div>
                <div className="f-body">
                  <strong>Respond to findings quickly and specifically</strong>
                  <span>For each finding in the audit report, produce a corrective action response that names the person responsible, describes the specific action being taken, and commits to a realistic remediation date. Vague responses like "we will review our policies" do not satisfy auditors or certification bodies. Specific ones do.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">2</div>
                <div className="f-body">
                  <strong>Close the loop on surveillance audits</strong>
                  <span>If you are on a certification cycle, ISO 27001 annually, for example, the findings from this audit become the agenda for the next one. Auditors check whether the corrective actions you committed to were actually implemented. Treat your audit findings tracker as a live document that gets updated as remediation is completed.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">3</div>
                <div className="f-body">
                  <strong>Build toward continuous readiness</strong>
                  <span>The goal of all this preparation is not to pass an audit. It is to build a security programme that is audit-ready by default, where evidence is being collected every day, policies are reviewed on a rolling basis, and control owners know their responsibilities without needing a reminder. That is the state in which audits stop being stressful and start being straightforward.</span>
                </div>
              </li>
            </ul>

            <div className="callout co-key">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>From the author</strong>
                <p>I have worked with teams that dreaded their audit and teams that genuinely looked forward to it as a way to demonstrate their programme's strength. The difference, every single time, was preparation. Not perfection, preparation. If your team is in that first category, the steps in this guide are exactly where to start.</p>
              </div>
            </div>
          </section>

          {/* SECTION 7, checklist */}
          <section id="checklist">
            <h2>Pre-Audit Readiness <em>Checklist</em></h2>
            <p>Use this in the weeks before your audit to make sure nothing obvious has been missed.</p>

            <div className="checklist-grid">
              {[
                "Audit scope confirmed in writing with the auditor",
                "Internal gap assessment completed against framework",
                "Control owner assigned for every in-scope requirement",
                "Evidence files organised, labelled, and current",
                "All policies reviewed, updated, and signed off",
                "Risk register reviewed and treatment plans updated",
                "Staff briefed, especially those who may be interviewed",
                "Access reviews completed and documented",
                "Incident log reviewed and up to date",
                "Vendor / supplier agreements include security clauses",
                "Training records current for all relevant staff",
                "Pre-audit internal walkthrough completed",
              ].map((item, i) => (
                <div key={i} className="chk-item anim">
                  <div className="chk-box">☐</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="callout co-warn">
              <span className="co-icon">🎯</span>
              <div className="co-body">
                <strong>The audit is not the hard part</strong>
                <p>The preparation is. And the preparation is entirely within your control. Start it earlier than feels necessary. Evidence collected in advance always looks better than evidence collected in a hurry, and it usually is.</p>
              </div>
            </div>
          </section>

          {/* CTA BANNER */}
          <div className="cta-banner">
            <h3>Don't walk into your audit unprepared.</h3>
            <p>SecComply runs a free audit readiness assessment, we map your current controls against the framework you're being audited against and tell you exactly where the gaps are before the auditor does.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book Your Free Audit Readiness Assessment →</a>
              <a href="https://seccomply.net/services/iso-27001" className="btn-o" target="_blank" rel="noopener">View ISO 27001 Services</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" id="sl" href="#" target="_blank" rel="noopener">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a className="share-btn" id="st" href="#" target="_blank" rel="noopener">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X
              </a>
              <button className="share-btn" onClick={() => window.copyLink && window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div itemScope itemType="https://schema.org/FAQPage">

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">How long does it take to prepare for a security audit?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">For a first-time ISO 27001 or SOC 2 audit, organisations typically need three to six months of structured preparation. For surveillance audits where a programme already exists, a focused three-week sprint, following the 8-stage process, can be sufficient. The earlier you start building continuous evidence collection into your daily operations, the less preparation any single audit requires.</p></div>
              </div>

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">What evidence do auditors look for in a security audit?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">Auditors consistently ask for: a signed Information Security Policy, a risk register reviewed within the past year, security awareness training records with completion dates, change management records, a tested business continuity and DR plan, DPIA records for high-risk processing, a current asset inventory, access control logs and user access reviews, an incident log, supplier contracts with security clauses, and patch management and vulnerability scan records.</p></div>
              </div>

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">What is the most common reason organisations fail security audits?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">The most common finding in first-time audits is not that controls are missing, it is that controls exist but cannot be evidenced. An organisation may genuinely enforce MFA or conduct access reviews, but without logs, screenshots, or documented processes, an auditor cannot confirm it. Evidence collection is not optional. It is the audit.</p></div>
              </div>

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">What is the difference between ISO 27001 and SOC 2 audit preparation?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">ISO 27001 certification audits focus on a defined ISMS scope and evaluate implementation of Annex A controls against your Statement of Applicability. SOC 2 audits assess the Trust Service Criteria relevant to your service commitments, typically Security, Availability, and Confidentiality. ISO 27001 preparation tends to emphasise policy documentation and risk treatment; SOC 2 preparation puts more weight on system-level controls, logging, and operational evidence over the audit period.</p></div>
              </div>

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">Do I need to prepare differently for a DPDPA compliance audit?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">DPDPA (India's Digital Personal Data Protection Act) compliance reviews focus specifically on lawful basis for processing, consent records, data fiduciary obligations, data localisation requirements, DPIA documentation for high-risk processing, and breach notification procedures. If your organisation processes personal data of Indian residents, you will need dedicated records for these obligations alongside your broader security evidence.</p></div>
              </div>

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">How can SecComply help with security audit preparation?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">SecComply runs a free audit readiness assessment that maps your current controls against the framework you are being audited against, ISO 27001, SOC 2, DPDPA, GDPR, or others, and identifies exactly where the gaps are before the auditor does. We then help organisations build the evidence, policies, and audit trail documentation needed to go into the audit with confidence.</p></div>
              </div>

            </div>
          </section>

        </article>

        {/* ── SIDEBAR ── */}
        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#audit-types" className="toc-link">Know Your Audit Type</a></li>
              <li><a href="#mistakes" className="toc-link">What Prepared Orgs Do</a></li>
              <li><a href="#eight-stages" className="toc-link">8 Stages of Preparation</a></li>
              <li><a href="#evidence" className="toc-link">Evidence Auditors Want</a></li>
              <li><a href="#during" className="toc-link">During the Audit</a></li>
              <li><a href="#after" className="toc-link">After the Audit</a></li>
              <li><a href="#checklist" className="toc-link">Pre-Audit Checklist</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Services</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/services/iso-27001" target="_blank">🌍 ISO 27001 Consulting</a></li>
              <li><a href="https://seccomply.net/services/soc-2" target="_blank">🛡️ SOC 2 Readiness</a></li>
              <li><a href="https://seccomply.net/services/compliance-as-a-service" target="_blank">📋 Compliance as a Service</a></li>
              <li><a href="https://seccomply.net/services/internal-audit" target="_blank">🔍 Internal Audit</a></li>
              <li><a href="https://seccomply.net/services/ciso" target="_blank">💼 CISO as a Service</a></li>
              <li><a href="https://seccomply.net/services/vapt" target="_blank">🛡️ VAPT Services</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">Security Audit</span>
              <span className="tag">Audit Readiness</span>
              <span className="tag">ISO 27001</span>
              <span className="tag">SOC 2</span>
              <span className="tag">DPDPA</span>
              <span className="tag">GDPR</span>
              <span className="tag">Compliance</span>
              <span className="tag">Risk Management</span>
              <span className="tag">Evidence Collection</span>
              <span className="tag">SecComply</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Audit Coming Up?</h4>
            <p>Free readiness assessment, we map your controls against your framework and tell you exactly where the gaps are.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Assessment →</a>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
