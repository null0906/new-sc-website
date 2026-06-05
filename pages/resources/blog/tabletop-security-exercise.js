import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function TabletopSecurityExercise() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/tabletop-security-exercise'); const ttl = encodeURIComponent('How to Run a Tabletop Security Exercise, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/tabletop-security-exercise'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
      function toast(msg) { let t = document.getElementById('sc-toast'); if (!t) { t = document.createElement('div'); t.id = 'sc-toast'; t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:#FF6000;color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgba(255, 96, 0,.4);opacity:0;transition:opacity .3s;pointer-events:none'; document.body.appendChild(t); } t.textContent = msg; t.style.opacity = '1'; clearTimeout(t._tid); t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500); }
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
      document.querySelectorAll('script[type="application/ld+json"]').forEach(s => { try { const d = JSON.parse(s.textContent); const today = new Date().toISOString().split('T')[0]; const fix = obj => { if (!obj || typeof obj !== 'object') return; Object.keys(obj).forEach(k => { if (k === 'dateModified') obj[k] = today; fix(obj[k]); }); }; fix(d); s.textContent = JSON.stringify(d); } catch (_) {} });
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>How to Run a Tabletop Security Exercise: A Complete Guide | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A complete guide to running a tabletop security exercise ,scenario selection, participant roles, facilitator techniques, scoring, debrief, and how it satisfies ISO 27001, SOC 2, and HIPAA incident response requirements." />
        <meta name="keywords" content="tabletop security exercise, tabletop exercise guide, incident response tabletop, security tabletop scenarios, ISO 27001 tabletop exercise, SOC 2 incident response test, HIPAA tabletop exercise, how to run tabletop exercise, cybersecurity tabletop, ransomware tabletop scenario" />
        <meta property="og:title" content="How to Run a Tabletop Security Exercise: A Complete Guide" />
        <meta property="og:description" content="77% of organisations that suffer a breach had no tested incident response plan. A tabletop exercise fixes that ,no infrastructure required, just 3 hours and the right scenario." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/tabletop-security-exercise" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/tabletop-exercise-og.png" />
        <meta property="article:published_time" content="2026-03-24" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="Incident Response" />
        <meta property="article:tag" content="Tabletop Exercise" />
        <meta property="article:tag" content="Security Testing" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/tabletop-security-exercise" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", "headline": "How to Run a Tabletop Security Exercise: A Complete Guide", "description": "Scenario selection, participant roles, facilitator techniques, scoring, debrief, and compliance mapping for a complete tabletop security exercise.", "author": { "@type": "Person", "name": "Soham Sawant", "jobTitle": "Cybersecurity Expert & Technical Writer", "worksFor": { "@type": "Organization", "name": "SecComply" } }, "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } }, "datePublished": "2026-03-24", "dateModified": "2026-03-24", "mainEntityOfPage": "https://seccomply.net/resources/blog/tabletop-security-exercise", "keywords": "tabletop exercise, incident response, security testing, ISO 27001, SOC 2, HIPAA, ransomware scenario, BCP DR", "articleSection": "Incident Response", "wordCount": 2100, "timeRequired": "PT8M" },
            { "@type": "HowTo", "name": "How to Run a Tabletop Security Exercise", "description": "Step-by-step guide to planning and running an effective tabletop security exercise for incident response testing.", "totalTime": "P2D",
              "step": [
                { "@type": "HowToStep", "position": 1, "name": "Choose your scenario", "text": "Select a scenario relevant to your organisation's actual threat landscape ,ransomware, data breach, insider threat, DDoS, or supply chain compromise. The scenario should be plausible, not hypothetical." },
                { "@type": "HowToStep", "position": 2, "name": "Identify participants and assign roles", "text": "Include all functions that would be involved in a real incident: IT/security, legal, HR, communications, senior leadership, and relevant business units. Assign a facilitator, a scribe, and an observer." },
                { "@type": "HowToStep", "position": 3, "name": "Build your scenario injects", "text": "Prepare a sequence of scenario injects ,new pieces of information that arrive during the exercise to advance the scenario and force decisions. Injects reveal complexity progressively rather than all at once." },
                { "@type": "HowToStep", "position": 4, "name": "Run the exercise", "text": "The facilitator presents the scenario and injects. Participants discuss how they would respond at each stage. The scribe records every decision, gap, and assumption. The observer notes gaps between stated plans and actual discussion." },
                { "@type": "HowToStep", "position": 5, "name": "Conduct a structured debrief", "text": "Immediately after the exercise, facilitate a structured hot debrief while observations are fresh. Capture: what worked, what gaps were identified, what assumptions were wrong, and what specific actions need to be taken." },
                { "@type": "HowToStep", "position": 6, "name": "Produce an after-action report", "text": "Document findings, gaps identified, decisions made, and specific remediation actions with owners and due dates. This report is your compliance evidence and your improvement roadmap." }
              ]
            },
            { "@type": "FAQPage", "mainEntity": [
              { "@type": "Question", "name": "What is a tabletop security exercise?", "acceptedAnswer": { "@type": "Answer", "text": "A tabletop security exercise is a facilitated discussion-based simulation where key stakeholders walk through a hypothetical security incident scenario ,a ransomware attack, data breach, or supply chain compromise ,and discuss how they would respond at each stage. No actual systems are involved. The goal is to test incident response plans, identify gaps, and build organisational muscle memory for crisis response before a real incident occurs." } },
              { "@type": "Question", "name": "How long does a tabletop exercise take?", "acceptedAnswer": { "@type": "Answer", "text": "A typical tabletop exercise runs 2 to 3 hours for the exercise itself, plus 30-60 minutes for debrief. Planning and preparation typically requires 2-4 weeks for scenario development, participant identification, and logistics. For compliance purposes, documentation of outcomes and the after-action report require an additional 1-2 weeks to complete properly." } },
              { "@type": "Question", "name": "Which compliance frameworks require tabletop exercises?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001 Annex A.5.26 requires a tested incident response process, and A.5.30 requires ICT readiness for business continuity ,tabletop exercises satisfy both. SOC 2 CC7.3 and CC7.4 require tested incident response procedures. HIPAA 164.308(a)(6) requires a tested incident response plan. Most frameworks do not prescribe tabletop exercises specifically, but the evidence from a tabletop exercise directly satisfies the testing requirement." } },
              { "@type": "Question", "name": "Who should participate in a tabletop exercise?", "acceptedAnswer": { "@type": "Answer", "text": "Effective tabletop exercises include all functions that would be involved in a real incident: IT and security (detection and containment), legal (regulatory notification obligations), HR (insider threat scenarios, employee communication), communications/PR (external messaging, customer notification), senior leadership (decision-making authority for major actions), and relevant business unit heads. The most common mistake is treating tabletop exercises as IT-only events." } },
              { "@type": "Question", "name": "What makes a good tabletop exercise scenario?", "acceptedAnswer": { "@type": "Answer", "text": "The best tabletop scenarios are plausible rather than hypothetical ,based on threats your organisation actually faces. They should involve complexity that reveals gaps in your incident response plan: unclear ownership, untested communication channels, missing escalation paths. The most effective scenarios escalate progressively through injects rather than presenting all complexity at once. Ransomware, data breach involving customer PII, and supply chain compromise are the three scenarios most likely to surface meaningful gaps." } }
            ]},
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
              { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
              { "@type": "ListItem", "position": 4, "name": "Tabletop Security Exercise Guide", "item": "https://seccomply.net/resources/blog/tabletop-security-exercise" }
            ]}
          ]
        }) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#FF6000;--cy2:#d0521f;--glow:rgba(255, 96, 0,.12);--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(255, 96, 0,.2);--bs:rgba(255,255,255,.06);--red:#ff4d6d;--am:#ffb703;--gr:#06d6a0;--serif:'Inter',sans-serif;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#FF6000,#FF8A3D);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none;transition:color .2s}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .cspm-hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem;display:block!important}
    .cspm-hero-badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;gap:5px;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(255, 96, 0,.1);color:var(--cy);border:1px solid rgba(255, 96, 0,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
    .badge-am{background:rgba(255,183,3,.1);color:var(--am);border:1px solid rgba(255,183,3,.25)}
    .cspm-hero-h1{font-family:var(--serif);font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .cspm-hero-h1 em{font-style:italic;color:var(--cy)}
    .cspm-hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .cspm-author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .cspm-author-strip .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#FF6000,#FF8A3D);display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(255, 96, 0,.3)}
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
    .pull-quote{border-left:4px solid var(--cy);padding:1.4rem 2rem;margin:2.5rem 0;background:linear-gradient(135deg,rgba(255, 96, 0,.06),transparent);border-radius:0 12px 12px 0}
    .pull-quote p{font-family:var(--serif);font-size:1.12rem;font-style:italic;color:var(--tx)!important;margin-bottom:.5rem!important;line-height:1.6!important}
    .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:2.5rem 0}
    .stat-card{background:var(--bgc);border:1px solid var(--bo);border-radius:14px;padding:1.5rem;text-align:center;position:relative;overflow:hidden}
    .stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#FF6000,#FF8A3D)}
    .stat-n{font-family:var(--serif);font-size:2.1rem;font-weight:700;color:var(--cy);line-height:1;margin-bottom:.4rem}
    .stat-l{font-size:.75rem;color:var(--tm);line-height:1.4}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-danger{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .co-key{background:rgba(255, 96, 0,.06);border:1px solid rgba(255, 96, 0,.2)}
    .co-sc{background:rgba(6,214,160,.05);border:1px solid rgba(6,214,160,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .feat-list{list-style:none;margin:1.5rem 0;display:flex;flex-direction:column;gap:.65rem}
    .feat-list li{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s,background .2s}
    .feat-list li:hover{border-color:var(--bo);background:var(--bgc)}
    .f-num{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,#FF6000,#FF8A3D);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:2px}
    .f-body strong{display:block;color:var(--tx);font-size:.89rem;margin-bottom:3px}
    .f-body span{font-size:.83rem;color:var(--tm)}
    .scenario-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .scenario-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem;transition:border-color .2s}
    .scenario-card:hover{border-color:var(--bo)}
    .sc-icon{font-size:1.6rem;margin-bottom:.5rem}
    .scenario-card h3{font-size:.92rem;font-weight:700;color:var(--tx);margin-bottom:.35rem}
    .scenario-card p{font-size:.81rem;color:var(--tm);margin-bottom:0;line-height:1.6}
    .sc-diff{font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.15rem .55rem;border-radius:100px;display:inline-block;margin-bottom:.4rem}
    .sd-beginner{background:rgba(6,214,160,.12);color:#06d6a0}
    .sd-intermediate{background:rgba(255,183,3,.12);color:#ffb703}
    .sd-advanced{background:rgba(255,77,109,.12);color:#ff4d6d}
    .role-table{width:100%;border-collapse:collapse;margin:1.5rem 0}
    .role-table th{background:var(--bgc);padding:.8rem 1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .role-table td{padding:.75rem 1rem;font-size:.84rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .role-table tr:last-child td{border-bottom:none}
    .role-table tr:hover td{background:rgba(255, 96, 0,.03)}
    .role-table td:first-child{color:var(--tx);font-weight:600}
    .inject-list{display:flex;flex-direction:column;gap:.6rem;margin:1.5rem 0}
    .inject-item{display:flex;gap:1rem;padding:.9rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-left:3px solid var(--cy);border-radius:0 10px 10px 0;transition:border-color .2s}
    .inject-item:hover{border-color:var(--bo)}
    .inject-time{font-size:.72rem;font-weight:700;color:var(--cy);white-space:nowrap;min-width:50px;margin-top:2px}
    .inject-body strong{display:block;color:var(--tx);font-size:.88rem;margin-bottom:2px}
    .inject-body span{font-size:.81rem;color:var(--tm)}
    .cmp-wrap{overflow-x:auto;margin:2rem 0;border-radius:14px;border:1px solid var(--bo)}
    .cmp-table{width:100%;border-collapse:collapse}
    .cmp-table th{background:var(--bgc);padding:.85rem 1.1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .cmp-table td{padding:.82rem 1.1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .cmp-table tr:last-child td{border-bottom:none}
    .cmp-table tr:hover td{background:rgba(255, 96, 0,.03)}
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
    .cta-banner{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(255, 96, 0,.03));border:1px solid rgba(255, 96, 0,.25);border-radius:20px;padding:2.5rem;text-align:center;margin:3rem 0}
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
    .sb-toc a:hover,.sb-toc a.active{color:var(--cy);background:rgba(255, 96, 0,.07);border-left-color:var(--cy)}
    .rel-links{list-style:none;display:flex;flex-direction:column;gap:.32rem}
    .rel-links a{display:flex;align-items:center;gap:7px;color:var(--tb);text-decoration:none;font-size:.81rem;padding:.42rem 0;border-bottom:1px solid var(--bs);transition:color .2s}
    .rel-links a:last-child{border-bottom:none}.rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);cursor:default;transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy);background:var(--glow)}
    .sb-cta{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(255, 96, 0,.03));border:1px solid rgba(255, 96, 0,.25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-family:var(--serif);font-size:.98rem;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(255, 96, 0,.4);transition:transform .2s;z-index:50}
    #btt.vis{display:flex}#btt:hover{transform:translateY(-3px)}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:900px){.scenario-grid{grid-template-columns:1fr}.stats-row{grid-template-columns:1fr}}
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
        <span style={{color:'var(--tb)'}}>Tabletop Security Exercise</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">🎯 Incident Response</span>
          <span className="badge badge-bl">🗺️ Tabletop Exercise</span>
          <span className="badge badge-am">📋 Step-by-Step Guide</span>
          <span className="badge badge-gr">✓ ISO 27001 · SOC 2</span>
        </div>
        <h1 className="cspm-hero-h1">How to Run a <em>Tabletop Security Exercise</em></h1>
        <p className="cspm-hero-sub">77% of organisations that suffer a breach had no tested incident response plan. A tabletop exercise is how you find the gaps ,before attackers do. No infrastructure required. Just three hours, the right scenario, and the right people in the room.</p>

        <div className="cspm-author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="name">Soham Sawant</div>
            <div className="meta-row"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
            <div className="date-row"><span>📅 March 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="img-wrap">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=480&fit=crop"
            alt="Security team tabletop exercise discussion"
            style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}}
          />
        </div>
        <p className="img-cap">A tabletop exercise brings together IT, legal, HR, communications, and leadership to walk through a realistic incident scenario ,finding gaps in plans before a real breach exposes them.</p>

        {/* SVG DASHBOARD */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 420" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="tg1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FF6000"/><stop offset="100%" stopColor="#FF8A3D"/></linearGradient>
              <linearGradient id="tg2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06d6a0"/><stop offset="100%" stopColor="#04b080"/></linearGradient>
              <linearGradient id="tg3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#818cf8"/><stop offset="100%" stopColor="#6366f1"/></linearGradient>
              <pattern id="tpat" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(255, 96, 0,0.04)"/></pattern>
            </defs>
            <rect width="960" height="420" fill="url(#tpat)"/>
            <text x="480" y="36" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">Tabletop Exercise Planner Dashboard</text>

            {/* LEFT: Exercise timeline */}
            <rect x="16" y="52" width="220" height="352" rx="12" fill="#081826" stroke="rgba(255, 96, 0,0.15)" strokeWidth="1"/>
            <text x="36" y="76" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">EXERCISE TIMELINE</text>
            {[
              {time:'T-2 weeks', label:'Scenario selection & prep', col:'#06d6a0', done:true},
              {time:'T-1 week',  label:'Participant briefing',      col:'#06d6a0', done:true},
              {time:'T-1 day',   label:'Final logistics check',     col:'#06d6a0', done:true},
              {time:'T+0:00',    label:'Scenario intro (15 min)',   col:'#FF6000', done:false},
              {time:'T+0:15',    label:'Inject 1: Initial alert',   col:'#FF6000', done:false},
              {time:'T+0:45',    label:'Inject 2: Escalation',      col:'#FF6000', done:false},
              {time:'T+1:30',    label:'Inject 3: Complication',    col:'#ffb703', done:false},
              {time:'T+2:15',    label:'Hot debrief (45 min)',       col:'#818cf8', done:false},
              {time:'T+2 wks',   label:'After-action report',       col:'#818cf8', done:false},
            ].map(({time,label,col,done},i)=>(
              <g key={i}>
                {i<8 && <line x1="47" y1={108+i*36} x2="47" y2={118+i*36} stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" strokeDasharray={done?"0":"3,3"}/>}
                <circle cx="47" cy={100+i*36} r="8" fill={done?`${col}18`:"rgba(255,255,255,0.04)"} stroke={col} strokeWidth="1.2"/>
                <text x="47" y={104+i*36} textAnchor="middle" fill={col} fontSize="7" fontFamily="sans-serif">{done?"✓":"○"}</text>
                <text x="62" y={98+i*36} fill="rgba(200,214,229,0.45)" fontSize="7.5" fontFamily="sans-serif">{time}</text>
                <text x="62" y={108+i*36} fill={done?"rgba(200,214,229,0.8)":"rgba(200,214,229,0.5)"} fontSize="8.5" fontFamily="sans-serif">{label}</text>
              </g>
            ))}

            <line x1="250" y1="48" x2="250" y2="404" stroke="rgba(255, 96, 0,0.07)" strokeWidth="1"/>

            {/* CENTRE: Findings summary */}
            <text x="490" y="72" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">RANSOMWARE SCENARIO ,FINDINGS SUMMARY</text>

            {/* Finding cards */}
            {[
              {gap:'No defined IR command structure',     owner:'CISO',    priority:'Critical', col:'#ff4d6d'},
              {gap:'Regulatory notification owner unclear',owner:'Legal',   priority:'Critical', col:'#ff4d6d'},
              {gap:'Backup recovery not tested in 18mo',  owner:'IT Ops',  priority:'High',     col:'#ffb703'},
              {gap:'Customer comms template missing',     owner:'Comms',   priority:'High',     col:'#ffb703'},
              {gap:'Executive escalation path unclear',   owner:'CEO Ofc', priority:'Medium',   col:'#FF6000'},
            ].map(({gap,owner,priority,col},i)=>(
              <g key={i}>
                <rect x="262" y={84+i*60} width="400" height="48" rx="9" fill="#091826" stroke={`${col}25`} strokeWidth="1"/>
                <rect x="262" y={84+i*60} width="3" height="48" rx="1.5" fill={col}/>
                <text x="278" y={104+i*60} fill="rgba(200,214,229,0.85)" fontSize="9" fontFamily="sans-serif">{gap}</text>
                <text x="278" y={120+i*60} fill="rgba(200,214,229,0.4)" fontSize="8" fontFamily="sans-serif">Owner: {owner}</text>
                <rect x="542" y={90+i*60} width={priority.length*5.8+10} height="14" rx="4" fill={`${col}18`}/>
                <text x="548" y={101+i*60} fill={col} fontSize="7.5" fontWeight="700" fontFamily="sans-serif">{priority}</text>
              </g>
            ))}

            {/* Score ring */}
            <text x="730" y="72" textAnchor="middle" fill="rgba(200,214,229,0.6)" fontSize="10" fontWeight="700" fontFamily="sans-serif">IR READINESS</text>
            <circle cx="730" cy="180" r="56" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10"/>
            <circle cx="730" cy="180" r="56" fill="none" stroke="url(#tg1)" strokeWidth="10" strokeDasharray="195 352" strokeDashoffset="88" strokeLinecap="round"/>
            <text x="730" y="174" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="700" fontFamily="sans-serif">55%</text>
            <text x="730" y="192" textAnchor="middle" fill="rgba(255, 96, 0,0.7)" fontSize="9" fontFamily="sans-serif">Pre-Exercise</text>

            {/* Post exercise projected */}
            <text x="730" y="260" textAnchor="middle" fill="rgba(200,214,229,0.5)" fontSize="8.5" fontFamily="sans-serif">Projected after remediation</text>
            <rect x="670" y="268" width="120" height="24" rx="8" fill="rgba(6,214,160,0.08)" stroke="rgba(6,214,160,0.25)" strokeWidth="1"/>
            <text x="730" y="284" textAnchor="middle" fill="#06d6a0" fontSize="14" fontWeight="800" fontFamily="sans-serif">88% ↑</text>

            {/* Participant roles */}
            <text x="662" y="320" fill="rgba(200,214,229,0.6)" fontSize="9" fontWeight="600" fontFamily="sans-serif">Participants by Function</text>
            {[
              {role:'IT / Security',  icon:'🛡️', col:'#FF6000'},
              {role:'Legal',          icon:'⚖️', col:'#818cf8'},
              {role:'HR',             icon:'👥', col:'#ffb703'},
              {role:'Communications', icon:'📢', col:'#06d6a0'},
              {role:'Leadership',     icon:'🏢', col:'#FF6000'},
            ].map(({role,icon,col},i)=>(
              <g key={i}>
                <circle cx={674+i*56} cy="348" r="18" fill={`${col}12`} stroke={`${col}35`} strokeWidth="1"/>
                <text x={674+i*56} y="346" textAnchor="middle" fontSize="12" fontFamily="sans-serif">{icon}</text>
                <text x={674+i*56} y="378" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="7" fontFamily="sans-serif">{role.split('/')[0]}</text>
              </g>
            ))}
          </svg>
        </div>
        <p className="img-cap">Tabletop exercise dashboard ,exercise timeline, ransomware scenario findings with owners and priorities, IR readiness score before and after remediation, and participant roles by function.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#what-is">What Is a Tabletop Exercise?</a>
            <a href="#scenarios">Choosing Your Scenario</a>
            <a href="#participants">Participants and Roles</a>
            <a href="#injects">Designing Scenario Injects</a>
            <a href="#running">Running the Exercise</a>
            <a href="#debrief">The Debrief and AAR</a>
            <a href="#compliance">Compliance Requirements</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-target="77" data-suffix="%">0%</div><div className="stat-l">of organisations that suffered a breach had no tested IR plan<br/><span style={{fontSize:'.68rem',opacity:.55}}>IBM Cost of a Data Breach, 2024</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="3" data-suffix=" hours">0 hours</div><div className="stat-l">typical duration of a well-run tabletop exercise including debrief<br/><span style={{fontSize:'.68rem',opacity:.55}}>NIST SP 800-84</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="58" data-suffix="%">0%</div><div className="stat-l">reduction in breach containment time for organisations with tested IR plans<br/><span style={{fontSize:'.68rem',opacity:.55}}>IBM Security, 2024</span></div></div>
          </div>

          <section id="what-is">
            <h2>What Is a <em>Tabletop Security Exercise?</em></h2>
            <p>A tabletop exercise is a facilitated, discussion-based simulation where key stakeholders walk through a hypothetical security incident ,a ransomware attack, a data breach, an insider threat ,and discuss how they would respond at each stage. No actual systems are involved. No production environments are touched. The goal is to surface the gaps in your incident response plan before a real attacker does.</p>
            <p>The term comes from the original practice of gathering teams around a table with maps and scenario cards. In its modern form, a tabletop exercise is a structured conversation guided by a facilitator, driven by scenario injects, and documented by a scribe. The output is an after-action report that captures gaps, assigns remediation owners, and becomes your compliance evidence.</p>
            <div className="pull-quote">
              <p>"The most valuable thing a tabletop exercise produces is not a test result ,it is the discovery of all the things your incident response plan assumed were in place that actually aren't."</p>
            </div>
            <div className="callout co-info">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>Tabletop vs Full-Scale Exercise</strong>
                <p>A tabletop exercise is discussion-based ,no systems are actually tested. A full-scale exercise activates real teams and actual technical controls. For compliance purposes, most frameworks accept tabletop exercises as sufficient evidence of tested incident response procedures. Full-scale exercises are valuable but typically run annually at most due to operational cost and risk.</p>
              </div>
            </div>
          </section>

          <section id="scenarios">
            <h2>Choosing the Right <em>Scenario</em></h2>
            <p>The scenario you choose determines what gaps you find. The best scenarios are plausible ,based on threats your organisation actually faces ,and complex enough to reveal gaps in ownership, communication, and decision-making authority.</p>
            <div className="scenario-grid">
              <div className="scenario-card anim"><span className="sc-diff sd-beginner">Good Starting Point</span><div className="sc-icon">🔒</div><h3>Ransomware Attack</h3><p>Attacker encrypts your file servers and demands payment. Tests: IR command structure, backup recovery, regulatory notification, crisis communication, and business continuity. The most common real-world scenario and the most likely to surface critical gaps.</p></div>
              <div className="scenario-card anim"><span className="sc-diff sd-beginner">Good Starting Point</span><div className="sc-icon">💾</div><h3>Customer Data Breach</h3><p>Personal data of customers exfiltrated and potentially published. Tests: regulatory notification timelines (DPDP zero-threshold, GDPR 72 hours), customer communication, legal liability assessment, and data classification procedures.</p></div>
              <div className="scenario-card anim"><span className="sc-diff sd-intermediate">Intermediate</span><div className="sc-icon">👤</div><h3>Insider Threat</h3><p>A current or former employee exfiltrates sensitive data. Tests: HR coordination, access revocation procedures, legal response, forensic investigation process, and the uncomfortable dynamics of responding to a colleague. Requires careful facilitation.</p></div>
              <div className="scenario-card anim"><span className="sc-diff sd-intermediate">Intermediate</span><div className="sc-icon">🔗</div><h3>Supply Chain Compromise</h3><p>A vendor or software dependency is compromised and used to attack your environment. Tests: vendor risk management, SBOM awareness, third-party communication, and the challenge of responding to an incident outside your direct control.</p></div>
              <div className="scenario-card anim"><span className="sc-diff sd-advanced">Advanced</span><div className="sc-icon">🌐</div><h3>DDoS + Concurrent Data Theft</h3><p>Simultaneous DDoS attack as a smokescreen for data exfiltration. Tests: prioritisation under pressure, simultaneous workstream management, and the tendency to focus on the visible disruption while missing the hidden breach.</p></div>
              <div className="scenario-card anim"><span className="sc-diff sd-advanced">Advanced</span><div className="sc-icon">📱</div><h3>Social Engineering of Executive</h3><p>CEO or senior leader targeted via spear phishing, leading to BEC fraud or credential compromise. Tests: executive communication protocols, financial controls, and the governance gaps that exist when the compromised party is in leadership.</p></div>
            </div>
          </section>

          <section id="participants">
            <h2>Participants, Roles, <em>and Why Each One Matters</em></h2>
            <p>The most common mistake in tabletop exercises is treating them as IT-only events. A real security incident touches every function in the organisation. Your tabletop should too.</p>
            <div className="cmp-wrap">
              <table className="role-table">
                <thead><tr><th>Function</th><th>Role in Exercise</th><th>Why They Must Be Present</th></tr></thead>
                <tbody>
                  <tr><td>IT / Security</td><td>Detection, containment, technical response</td><td>Own the technical decisions ,but often make assumptions about communication and authority that the exercise will reveal as incorrect</td></tr>
                  <tr><td>Legal</td><td>Regulatory notification, liability, law enforcement liaison</td><td>DPDP zero-threshold, GDPR 72-hour, HIPAA requirements ,without legal in the room, notification decisions will be made incorrectly</td></tr>
                  <tr><td>HR</td><td>Insider threat coordination, employee communication, access revocation</td><td>Insider threat scenarios and employee-facing communication require HR authority that IT cannot exercise alone</td></tr>
                  <tr><td>Communications / PR</td><td>Customer notification, media response, social media monitoring</td><td>How you communicate during an incident affects customer trust as much as how you respond technically</td></tr>
                  <tr><td>Senior Leadership</td><td>Major decision authority ,ransom payment, regulatory disclosure, service shutdown</td><td>Certain decisions require executive authority. Finding out who holds that authority during a real incident is too late</td></tr>
                  <tr><td>Facilitator</td><td>Drives scenario, presents injects, manages time and discussion</td><td>Should be an experienced security professional who knows when to probe deeper and when to advance the scenario</td></tr>
                  <tr><td>Scribe</td><td>Documents all decisions, gaps, and assumptions in real time</td><td>The scribe's notes become your after-action report and your compliance evidence</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="injects">
            <h2>Designing <em>Scenario Injects</em></h2>
            <p>Injects are the new pieces of information that arrive during the exercise to advance the scenario and force decisions. Good injects escalate complexity progressively ,they do not present all the chaos at once. Here is a sample inject sequence for a ransomware scenario:</p>
            <div className="inject-list">
              {[
                {time:'T+0:00', title:'Initial Alert', desc:'Your SIEM generates an alert: unusual outbound traffic from three workstations. IT investigation begins. Question: who is the incident commander? Who gets notified first?'},
                {time:'T+0:15', title:'Ransomware Confirmed', desc:'Ransomware note appears on affected workstations. Encryption is spreading. File servers are becoming inaccessible. Question: do you isolate the network segment? Who authorises that decision?'},
                {time:'T+0:35', title:'Scope Expands', desc:'Forensics reveals the initial compromise was three weeks ago. The attacker has had read access to customer data for 21 days. Question: does DPDP/GDPR notification now apply? Who notifies? In what timeframe?'},
                {time:'T+0:55', title:'Media Inquiry', desc:'A journalist contacts your communications team with details that suggest an external source has information about the breach. Question: what is your external statement? Who approves it? What do you tell customers?'},
                {time:'T+1:15', title:'Ransom Demand', desc:'The attacker sends a ransom demand. Your backup restoration will take 72 hours. The ransom would take 4 hours to restore. Question: what is your decision-making process? Who holds the authority? What is your policy?'},
                {time:'T+1:35', title:'Regulatory Contact', desc:"Your legal team receives a call from CERT-In. They have observed the same attacker in another sector. They want information. Question: what can you share? With whom? What's your obligation vs your risk?"},
              ].map(({time,title,desc},i)=>(
                <div key={i} className="inject-item anim">
                  <div className="inject-time">{time}</div>
                  <div className="inject-body"><strong>{title}</strong><span>{desc}</span></div>
                </div>
              ))}
            </div>
          </section>

          <section id="running">
            <h2>Running the <em>Exercise</em></h2>
            <p>The facilitator's job is to create a safe environment where people can surface gaps without defensiveness ,and to probe deeply enough that real gaps are found, not papered over with "we'd look that up" or "the CISO would handle it."</p>
            <ul className="feat-list">
              <li className="anim"><div className="f-num">1</div><div className="f-body"><strong>Open with ground rules</strong><span>Establish that this is a learning exercise, not a performance review. There are no wrong answers. The goal is to surface gaps, not to demonstrate competence. Psychological safety is what makes tabletop exercises valuable ,people need to say "I don't know who handles that" without fear of judgement.</span></div></li>
              <li className="anim"><div className="f-num">2</div><div className="f-body"><strong>Present the scenario and let discussion develop naturally</strong><span>After each inject, resist the urge to direct the conversation. Let participants identify ownership gaps themselves. The facilitator's role is to ask probing questions: "Who specifically makes that call?", "Where is that documented?", "What happens if that person is unavailable?"</span></div></li>
              <li className="anim"><div className="f-num">3</div><div className="f-body"><strong>Document every assumption in real time</strong><span>When a participant says "we'd follow the incident response plan" ,the scribe notes: what plan? When was it last tested? Does everyone in the room know where it is? Assumptions are the most valuable findings in any tabletop exercise.</span></div></li>
              <li className="anim"><div className="f-num">4</div><div className="f-body"><strong>Manage time deliberately</strong><span>Tabletop exercises have a tendency to get absorbed in the first inject and run out of time for later, more complex ones. The facilitator should time-box each inject discussion and advance the scenario even if consensus has not been reached ,real incidents do not wait for consensus.</span></div></li>
            </ul>

            {/* Inline image */}
            <div className="img-wrap" style={{marginTop:'1.5rem'}}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&h=380&fit=crop"
                alt="Incident response team meeting"
                style={{width:'100%',display:'block',maxHeight:'320px',objectFit:'cover'}}
              />
            </div>
            <p className="img-cap">Effective tabletop exercises surface the ownership gaps, unclear escalation paths, and untested assumptions that written incident response plans cannot reveal on their own.</p>
          </section>

          <section id="debrief">
            <h2>The Debrief and <em>After-Action Report</em></h2>
            <p>The debrief is where the exercise's value is crystallised. Run it immediately after the exercise ,while observations are fresh and participants are still in the mindset of the scenario. A structured hot debrief covers four questions:</p>
            <ul className="feat-list">
              <li className="anim"><div className="f-num">1</div><div className="f-body"><strong>What worked?</strong><span>Identify the processes, communication channels, and decisions that functioned as expected. Reinforce these ,they are the foundations your IR capability is built on. Acknowledging what works maintains morale and avoids the perception that the exercise was purely critical.</span></div></li>
              <li className="anim"><div className="f-num">2</div><div className="f-body"><strong>What gaps were identified?</strong><span>Document every point where the discussion stalled, where ownership was unclear, or where the assumed process did not exist or was not documented. These gaps are your remediation backlog. Prioritise them by impact ,not all gaps are equal.</span></div></li>
              <li className="anim"><div className="f-num">3</div><div className="f-body"><strong>What assumptions were wrong?</strong><span>This is often the richest category. The backup that "should" restore in 4 hours that has never been tested. The regulatory notification owner that "legal handles" but nobody in the room from legal knew about it. Wrong assumptions are your highest-priority findings.</span></div></li>
              <li className="anim"><div className="f-num">4</div><div className="f-body"><strong>What specific actions will we take?</strong><span>Every gap needs an owner, a specific action, and a due date. "We will improve our incident response" is not an action. "The CISO will update the IRP to name a backup incident commander by 30 April" is. The after-action report becomes your compliance evidence only if it contains specific, assigned, dated actions.</span></div></li>
            </ul>
          </section>

          <section id="compliance">
            <h2>Tabletop Exercises and <em>Compliance Requirements</em></h2>
            <div className="cmp-wrap">
              <table className="cmp-table">
                <thead><tr><th>Framework</th><th>Relevant Control</th><th>What the Exercise Provides</th></tr></thead>
                <tbody>
                  <tr><td>ISO 27001</td><td>A.5.26 ,Response to information security incidents; A.5.30 ,ICT readiness for business continuity</td><td>Documented evidence of tested IR procedures, gap findings, and remediation actions</td></tr>
                  <tr><td>SOC 2</td><td>CC7.3 ,Evaluate security events; CC7.4 ,Respond to identified security incidents</td><td>Evidence that incident response procedures were tested and improvement actions identified</td></tr>
                  <tr><td>HIPAA</td><td>164.308(a)(6) ,Security incident procedures; response and reporting</td><td>Documented testing of incident response and reporting procedures</td></tr>
                  <tr><td>DPDP Act</td><td>Section 8(5) ,Reasonable security safeguards; breach response capability</td><td>Evidence of proactive breach response preparation ,particularly relevant for zero-threshold notification requirement</td></tr>
                  <tr><td>PCI DSS</td><td>Req 12.10.7 ,Incident response plan testing</td><td>Annual exercise requirement satisfied with documented after-action report</td></tr>
                </tbody>
              </table>
            </div>
            <div className="callout co-sc">
              <span className="co-icon">🛡️</span>
              <div className="co-body">
                <strong>SecComply: Facilitated Tabletop Exercises</strong>
                <p>SecComply facilitates tabletop exercises for organisations preparing for ISO 27001, SOC 2, or DPDP compliance ,designing scenarios tailored to your threat landscape, facilitating the exercise with experienced security professionals, and producing an after-action report that satisfies auditor requirements. We run exercises annually and track remediation completion as part of our compliance programme.</p>
              </div>
            </div>
          </section>

          <div className="cta-banner">
            <h3>Ready to Test Your Incident Response Plan?</h3>
            <p>SecComply facilitates tabletop exercises that satisfy ISO 27001, SOC 2, and DPDP requirements ,with a full after-action report and remediation tracking included.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Tabletop Exercise →</a>
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
                {q:"What is a tabletop security exercise?", a:"A tabletop security exercise is a facilitated discussion-based simulation where key stakeholders walk through a hypothetical security incident scenario and discuss how they would respond at each stage. No actual systems are involved. The goal is to test incident response plans, identify gaps, and build organisational muscle memory for crisis response before a real incident occurs."},
                {q:"How long does a tabletop exercise take?", a:"A typical tabletop exercise runs 2 to 3 hours for the exercise itself, plus 30-60 minutes for debrief. Planning and preparation typically requires 2-4 weeks for scenario development, participant identification, and logistics. For compliance purposes, the after-action report requires an additional 1-2 weeks to complete properly."},
                {q:"Which compliance frameworks require tabletop exercises?", a:"ISO 27001 Annex A.5.26 requires a tested incident response process, and A.5.30 requires ICT readiness for business continuity. SOC 2 CC7.3 and CC7.4 require tested incident response procedures. HIPAA 164.308(a)(6) requires a tested incident response plan. PCI DSS Requirement 12.10.7 explicitly requires annual incident response plan testing."},
                {q:"Who should participate in a tabletop exercise?", a:"Effective tabletop exercises include all functions that would be involved in a real incident: IT and security, legal, HR, communications/PR, senior leadership, and relevant business unit heads. The most common mistake is treating tabletop exercises as IT-only events ,most of the valuable gaps are found at the intersection of technical response and business decision-making."},
                {q:"What makes a good tabletop exercise scenario?", a:"The best tabletop scenarios are plausible rather than hypothetical ,based on threats your organisation actually faces. They should involve complexity that reveals gaps in your incident response plan: unclear ownership, untested communication channels, missing escalation paths. The most effective scenarios escalate progressively through injects. Ransomware, data breach involving customer PII, and supply chain compromise are the three scenarios most likely to surface meaningful gaps."},
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
              <li><a href="#what-is" className="toc-link">What Is a Tabletop Exercise?</a></li>
              <li><a href="#scenarios" className="toc-link">Choosing Your Scenario</a></li>
              <li><a href="#participants" className="toc-link">Participants & Roles</a></li>
              <li><a href="#injects" className="toc-link">Scenario Injects</a></li>
              <li><a href="#running" className="toc-link">Running the Exercise</a></li>
              <li><a href="#debrief" className="toc-link">Debrief & AAR</a></li>
              <li><a href="#compliance" className="toc-link">Compliance Requirements</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Services</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/services/iso-27001" target="_blank">🌍 ISO 27001 Consulting</a></li>
              <li><a href="https://seccomply.net/services/soc-2" target="_blank">🛡️ SOC 2 Readiness</a></li>
              <li><a href="https://seccomply.net/services/ciso" target="_blank">💼 CISO as a Service</a></li>
              <li><a href="https://seccomply.net/services/compliance-as-a-service" target="_blank">📋 Compliance as a Service</a></li>
              <li><a href="https://seccomply.net/services/internal-audit" target="_blank">🔍 Internal Audit</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">Tabletop Exercise</span><span className="tag">Incident Response</span><span className="tag">Ransomware</span><span className="tag">IR Planning</span><span className="tag">ISO 27001</span><span className="tag">SOC 2</span><span className="tag">HIPAA</span><span className="tag">BCP DR</span><span className="tag">Security Testing</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Test Your IR Plan</h4>
            <p>SecComply facilitates tabletop exercises with full after-action reports ,ready for ISO 27001 and SOC 2 auditors.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book a Tabletop Exercise →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
