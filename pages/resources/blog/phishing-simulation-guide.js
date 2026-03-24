import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function PhishingSimulationGuide() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/phishing-simulation-guide'); const ttl = encodeURIComponent('Phishing Simulation: A Step-by-Step Guide, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/phishing-simulation-guide'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
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
        <title>Phishing Simulation: A Step-by-Step Guide for Security Teams | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="How to run a phishing simulation that actually improves security posture ,from choosing a platform and designing realistic templates to measuring click rates, delivering targeted training, and satisfying ISO 27001 and SOC 2 requirements." />
        <meta name="keywords" content="phishing simulation guide, how to run phishing simulation, phishing awareness training, phishing click rate benchmark, GoPhish phishing platform, ISO 27001 security awareness, SOC 2 phishing training, phishing simulation best practices, employee security training, phishing test template" />
        <meta property="og:title" content="Phishing Simulation: A Step-by-Step Guide for Security Teams" />
        <meta property="og:description" content="36% of all breaches involve phishing. A well-run simulation programme cuts click rates by 60-80% in 12 months. Here is exactly how to build one." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/phishing-simulation-guide" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/phishing-simulation-og.png" />
        <meta property="article:published_time" content="2026-03-24" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="Phishing" />
        <meta property="article:tag" content="Security Awareness" />
        <meta property="article:tag" content="Human Security" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/phishing-simulation-guide" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Phishing Simulation: A Step-by-Step Guide for Security Teams",
              "description": "How to run a phishing simulation that improves security posture ,platform selection, template design, click rate measurement, targeted training, and compliance mapping.",
              "author": { "@type": "Person", "name": "Soham Sawant", "jobTitle": "Cybersecurity Expert & Technical Writer", "worksFor": { "@type": "Organization", "name": "SecComply" } },
              "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } },
              "datePublished": "2026-03-24", "dateModified": "2026-03-24",
              "mainEntityOfPage": "https://seccomply.net/resources/blog/phishing-simulation-guide",
              "keywords": "phishing simulation, security awareness training, click rate, ISO 27001, SOC 2, GoPhish, phishing templates",
              "articleSection": "Security Awareness", "wordCount": 2100, "timeRequired": "PT8M"
            },
            {
              "@type": "HowTo",
              "name": "How to Run a Phishing Simulation",
              "description": "A step-by-step process for running an effective phishing simulation programme that reduces click rates and satisfies compliance requirements.",
              "step": [
                { "@type": "HowToStep", "position": 1, "name": "Choose your platform", "text": "Select a phishing simulation platform ,GoPhish (free, open-source), KnowBe4, Proofpoint Security Awareness, or Microsoft Attack Simulator. Your choice depends on budget, integration requirements, and reporting depth needed." },
                { "@type": "HowToStep", "position": 2, "name": "Define your scope and baseline", "text": "Decide which departments to include, set your campaign timeline, and run an initial baseline campaign to establish your starting click rate before any training intervention." },
                { "@type": "HowToStep", "position": 3, "name": "Design realistic phishing templates", "text": "Create templates that mimic real-world phishing scenarios relevant to your organisation ,IT password reset requests, HR policy updates, invoice notifications, delivery alerts. Realism is what makes simulations effective." },
                { "@type": "HowToStep", "position": 4, "name": "Launch the campaign", "text": "Send simulated phishing emails to your target group. Track who opens, who clicks, who submits credentials, and who reports the email. Do not announce the campaign in advance." },
                { "@type": "HowToStep", "position": 5, "name": "Deliver immediate teachable moment training", "text": "When an employee clicks a simulated phishing link, immediately redirect them to a short, targeted training module ,not a shame page. The teachable moment is the most effective intervention." },
                { "@type": "HowToStep", "position": 6, "name": "Analyse results and segment repeat clickers", "text": "Identify departments with high click rates, repeat clickers, and employees who never report phishing. These segments need targeted follow-up training, not the same generic awareness module." },
                { "@type": "HowToStep", "position": 7, "name": "Run quarterly simulations and track trend data", "text": "A single simulation is a snapshot. A quarterly programme with trend data shows click rate improvement over time ,which is what ISO 27001 and SOC 2 auditors want to see as evidence of programme effectiveness." }
              ]
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is a phishing simulation?", "acceptedAnswer": { "@type": "Answer", "text": "A phishing simulation is a controlled security exercise where an organisation sends realistic but fake phishing emails to its own employees to test their ability to identify and report phishing attempts. The goal is not to catch people out ,it is to identify training gaps, measure baseline susceptibility, and deliver targeted education that reduces the likelihood of a real phishing attack succeeding." } },
                { "@type": "Question", "name": "What is a good phishing click rate benchmark?", "acceptedAnswer": { "@type": "Answer", "text": "Industry average click rates for untrained employees typically range from 25-40% on realistic phishing templates. After 12 months of quarterly simulations with targeted training, well-run programmes achieve click rates below 5%. A click rate above 20% indicates a high-risk training gap. A click rate consistently below 5% with a high report rate indicates a mature security awareness culture." } },
                { "@type": "Question", "name": "How does phishing simulation satisfy ISO 27001 and SOC 2 requirements?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001 Annex A.6.3 requires security awareness, education, and training. SOC 2 CC2.2 requires communication of security responsibilities to staff. Phishing simulation provides measurable evidence of both: click rate trend data over time demonstrates programme effectiveness, and completion records demonstrate that training was delivered. Auditors look specifically for evidence that security awareness training has a measurable impact ,not just that it was conducted." } },
                { "@type": "Question", "name": "What phishing templates are most effective?", "acceptedAnswer": { "@type": "Answer", "text": "The most effective phishing templates exploit urgency and authority ,the two most reliable social engineering triggers. IT security password reset requests, HR policy acknowledgment reminders, payroll system notifications, delivery tracking links, and shared document notifications from familiar cloud services (Google Drive, OneDrive, Dropbox) consistently produce the highest click rates and therefore the most valuable training opportunities." } },
                { "@type": "Question", "name": "Should you warn employees before running a phishing simulation?", "acceptedAnswer": { "@type": "Answer", "text": "No. Announcing a phishing simulation before it runs defeats its purpose ,employees will be on high alert for that specific period and results will not reflect their normal behaviour. Instead, communicate the existence of an ongoing phishing simulation programme generally (without campaign-specific timing) so employees know to be vigilant at all times. This approach also avoids the perception of entrapment that can damage trust if not handled carefully." } }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
                { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
                { "@type": "ListItem", "position": 4, "name": "Phishing Simulation Guide", "item": "https://seccomply.net/resources/blog/phishing-simulation-guide" }
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
    .co-danger{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .co-key{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
    .co-sc{background:rgba(6,214,160,.05);border:1px solid rgba(6,214,160,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .feat-list{list-style:none;margin:1.5rem 0;display:flex;flex-direction:column;gap:.65rem}
    .feat-list li{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s,background .2s}
    .feat-list li:hover{border-color:var(--bo);background:var(--bgc)}
    .f-num{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,#E8632B,#FF8A50);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:2px}
    .f-body strong{display:block;color:var(--tx);font-size:.89rem;margin-bottom:3px}
    .f-body span{font-size:.83rem;color:var(--tm)}
    .platform-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .platform-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem;transition:border-color .2s}
    .platform-card:hover{border-color:var(--bo)}
    .plat-badge{font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.18rem .6rem;border-radius:100px;margin-bottom:.5rem;display:inline-block}
    .pb-free{background:rgba(6,214,160,.15);color:#06d6a0}
    .pb-paid{background:rgba(232,99,43,.15);color:#E8632B}
    .platform-card h3{font-size:.92rem;font-weight:700;color:var(--tx);margin-bottom:.3rem}
    .platform-card p{font-size:.81rem;color:var(--tm);margin-bottom:0;line-height:1.6}
    .template-list{display:flex;flex-direction:column;gap:.6rem;margin:1.5rem 0}
    .tmpl-item{display:flex;align-items:flex-start;gap:.9rem;padding:.85rem 1.1rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s}
    .tmpl-item:hover{border-color:var(--bo)}
    .tmpl-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .tmpl-body strong{display:block;color:var(--tx);font-size:.88rem;margin-bottom:2px}
    .tmpl-body span{font-size:.81rem;color:var(--tm)}
    .tmpl-rate{font-size:.72rem;font-weight:700;color:var(--red);background:rgba(255,77,109,.1);padding:.1rem .5rem;border-radius:4px;white-space:nowrap;margin-left:.4rem}
    .cmp-wrap{overflow-x:auto;margin:2rem 0;border-radius:14px;border:1px solid var(--bo)}
    .cmp-table{width:100%;border-collapse:collapse}
    .cmp-table th{background:var(--bgc);padding:.85rem 1.1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .cmp-table td{padding:.82rem 1.1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .cmp-table tr:last-child td{border-bottom:none}
    .cmp-table tr:hover td{background:rgba(232,99,43,.03)}
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
    @media(max-width:900px){.platform-grid{grid-template-columns:1fr}.stats-row{grid-template-columns:1fr}}
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
        <span style={{color:'var(--tb)'}}>Phishing Simulation Guide</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">🎣 Phishing Simulation</span>
          <span className="badge badge-bl">👥 Security Awareness</span>
          <span className="badge badge-am">📊 Step-by-Step Guide</span>
          <span className="badge badge-gr">✓ ISO 27001 · SOC 2</span>
        </div>
        <h1 className="cspm-hero-h1">Phishing Simulation: <em>A Step-by-Step Guide</em></h1>
        <p className="cspm-hero-sub">36% of all breaches involve phishing ,and most of them succeed because someone clicked something they shouldn't have. A well-run phishing simulation programme cuts that risk by 60-80% in 12 months. Here is exactly how to build one.</p>

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
            src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=480&fit=crop"
            alt="Phishing simulation security awareness training"
            style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}}
          />
        </div>
        <p className="img-cap">Phishing simulation programmes train employees to recognise and report realistic phishing attempts ,the most cost-effective security control against the most common attack vector.</p>

        {/* SVG DASHBOARD */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 400" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#E8632B"/><stop offset="100%" stopColor="#FF8A50"/></linearGradient>
              <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06d6a0"/><stop offset="100%" stopColor="#04b080"/></linearGradient>
              <linearGradient id="pg3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff4d6d"/><stop offset="100%" stopColor="#d0304e"/></linearGradient>
              <pattern id="ppat" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(232,99,43,0.04)"/></pattern>
            </defs>
            <rect width="960" height="400" fill="url(#ppat)"/>

            {/* Title */}
            <text x="480" y="36" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">Phishing Simulation Programme Dashboard</text>

            {/* LEFT: 7-Step process */}
            <rect x="16" y="52" width="210" height="332" rx="12" fill="#081826" stroke="rgba(232,99,43,0.15)" strokeWidth="1"/>
            <text x="36" y="76" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">7-STEP PROCESS</text>
            {[
              {step:'Choose Platform',       done:true},
              {step:'Define Scope & Baseline',done:true},
              {step:'Design Templates',       done:true},
              {step:'Launch Campaign',        done:true},
              {step:'Teachable Moment',       done:false},
              {step:'Analyse & Segment',      done:false},
              {step:'Quarterly Cadence',      done:false},
            ].map(({step,done},i)=>(
              <g key={i}>
                {i<6 && <line x1="47" y1={108+i*42} x2="47" y2={122+i*42} stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>}
                <circle cx="47" cy={100+i*42} r="10" fill={done?"rgba(6,214,160,0.12)":"rgba(232,99,43,0.08)"} stroke={done?"#06d6a0":"rgba(232,99,43,0.3)"} strokeWidth="1.2"/>
                <text x="47" y={104+i*42} textAnchor="middle" fill={done?"#06d6a0":"rgba(232,99,43,0.5)"} fontSize="8" fontWeight="700" fontFamily="sans-serif">{done?"✓":`${i+1}`}</text>
                <text x="66" y={103+i*42} fill={done?"rgba(200,214,229,0.8)":"rgba(200,214,229,0.45)"} fontSize="9" fontFamily="sans-serif">{step}</text>
              </g>
            ))}

            <line x1="240" y1="48" x2="240" y2="388" stroke="rgba(232,99,43,0.07)" strokeWidth="1"/>

            {/* CENTRE: Click rate trend */}
            <text x="500" y="72" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">CLICK RATE TREND ,12 MONTHS</text>
            {/* Chart area */}
            <rect x="260" y="84" width="490" height="160" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            {/* Y axis labels */}
            {[40,30,20,10,0].map((v,i)=>(
              <text key={i} x="272" y={90+i*30} fill="rgba(200,214,229,0.3)" fontSize="7.5" textAnchor="middle" fontFamily="sans-serif">{v}%</text>
            ))}
            {/* Grid lines */}
            {[0,1,2,3,4].map(i=>(
              <line key={i} x1="286" y1={87+i*30} x2="740" y2={87+i*30} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            ))}
            {/* Click rate line ,going down from 38% to 4% */}
            {(() => {
              const pts = [[38,0],[34,1],[28,2],[22,3],[16,4],[11,5],[8,6],[6,7],[5,8],[4,9],[4,10],[4,11]];
              const xs = pts.map((_,i) => 286 + i * 38);
              const ys = pts.map(([v]) => 207 - (v/40)*120);
              const path = pts.map(([v],i) => `${i===0?'M':'L'}${xs[i]},${ys[i]}`).join(' ');
              const area = `M${xs[0]},207 ${pts.map(([v],i)=>`L${xs[i]},${ys[i]}`).join(' ')} L${xs[xs.length-1]},207 Z`;
              return (
                <>
                  <path d={area} fill="rgba(232,99,43,0.06)"/>
                  <path d={path} fill="none" stroke="url(#pg1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {pts.map(([v],i)=>(
                    <circle key={i} cx={xs[i]} cy={ys[i]} r="3.5" fill="#E8632B" stroke="#020617" strokeWidth="1.5"/>
                  ))}
                </>
              );
            })()}
            {/* Quarter labels */}
            {['Q1','','','Q2','','','Q3','','','Q4','',''].map((q,i)=>(
              q && <text key={i} x={286+i*38} y={218} textAnchor="middle" fill="rgba(200,214,229,0.3)" fontSize="7.5" fontFamily="sans-serif">{q}</text>
            ))}
            <text x="740" y="98" fill="#06d6a0" fontSize="9" fontWeight="700" fontFamily="sans-serif">4% ↓</text>
            <text x="284" y="95" fill="#ff4d6d" fontSize="9" fontWeight="700" fontFamily="sans-serif">38%</text>

            {/* Metric cards */}
            {[
              {label:'Baseline Click Rate',  val:'38%', col:'#ff4d6d', x:268},
              {label:'After 12 Months',      val:'4%',  col:'#06d6a0', x:368},
              {label:'Report Rate',          val:'61%', col:'#818cf8', x:468},
              {label:'Reduction',            val:'89%', col:'#E8632B', x:568},
            ].map(({label,val,col,x},i)=>(
              <g key={i}>
                <rect x={x} y={230} width="82" height="52" rx="9" fill="#091826" stroke={`${col}28`} strokeWidth="1"/>
                <text x={x+41} y={253} textAnchor="middle" fill={col} fontSize="20" fontWeight="800" fontFamily="sans-serif">{val}</text>
                <text x={x+41} y={272} textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="7.5" fontFamily="sans-serif">{label}</text>
              </g>
            ))}

            {/* Department breakdown */}
            <text x="268" y="310" fill="rgba(200,214,229,0.6)" fontSize="9" fontWeight="600" fontFamily="sans-serif">Click Rate by Department</text>
            {[
              {dept:'Finance',    rate:'42%', col:'#ff4d6d', w:168},
              {dept:'Operations', rate:'31%', col:'#ffb703', w:124},
              {dept:'Engineering',rate:'18%', col:'#E8632B', w:72},
              {dept:'Leadership', rate:'28%', col:'#ffb703', w:112},
            ].map(({dept,rate,col,w},i)=>(
              <g key={i}>
                <text x="268" y={328+i*20} fill="rgba(200,214,229,0.5)" fontSize="8.5" fontFamily="sans-serif">{dept}</text>
                <rect x="358" y={319+i*20} width="250" height="8" rx="4" fill="rgba(255,255,255,0.04)"/>
                <rect x="358" y={319+i*20} width={w} height="8" rx="4" fill={col}/>
                <text x="614" y={327+i*20} fill={col} fontSize="8" fontWeight="700" fontFamily="sans-serif">{rate}</text>
              </g>
            ))}

            <line x1="660" y1="48" x2="660" y2="388" stroke="rgba(232,99,43,0.07)" strokeWidth="1"/>

            {/* RIGHT: Template effectiveness */}
            <text x="678" y="72" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">TEMPLATE CLICK RATES</text>
            {[
              {tmpl:'IT Password Reset',        rate:'41%', c:'#ff4d6d'},
              {tmpl:'HR Policy Acknowledgment', rate:'38%', c:'#ff4d6d'},
              {tmpl:'Invoice Approval Request', rate:'34%', c:'#ffb703'},
              {tmpl:'Delivery Tracking Link',   rate:'29%', c:'#ffb703'},
              {tmpl:'Google Drive Share',       rate:'26%', c:'#E8632B'},
              {tmpl:'CEO Wire Transfer',        rate:'22%', c:'#E8632B'},
            ].map(({tmpl,rate,c},i)=>(
              <g key={i}>
                <rect x="670" y={84+i*50} width="274" height="38" rx="8" fill="#091826" stroke={`${c}22`} strokeWidth="1"/>
                <text x="684" y={100+i*50} fill="rgba(200,214,229,0.8)" fontSize="8.5" fontFamily="sans-serif">{tmpl}</text>
                <rect x="684" y={106+i*50} width="200" height="6" rx="3" fill="rgba(255,255,255,0.04)"/>
                <rect x="684" y={106+i*50} width={Math.round(200*parseInt(rate)/50)} height="6" rx="3" fill={c}/>
                <text x="890" y={113+i*50} fill={c} fontSize="8.5" fontWeight="700" fontFamily="sans-serif">{rate}</text>
              </g>
            ))}
          </svg>
        </div>
        <p className="img-cap">Phishing simulation dashboard ,7-step process tracker, 12-month click rate trend (38% down to 4%), department breakdown, and template effectiveness by scenario type.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#why-simulate">Why Run Phishing Simulations</a>
            <a href="#platforms">Choosing Your Platform</a>
            <a href="#step-by-step">The 7-Step Process</a>
            <a href="#templates">Designing Effective Templates</a>
            <a href="#metrics">Measuring What Matters</a>
            <a href="#compliance">Compliance Requirements</a>
            <a href="#mistakes">Common Mistakes</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-target="36" data-suffix="%">0%</div><div className="stat-l">of all breaches involve phishing as the initial access vector<br/><span style={{fontSize:'.68rem',opacity:.55}}>Verizon DBIR 2024</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="82" data-suffix="%">0%</div><div className="stat-l">reduction in click rates achievable with quarterly simulation + targeted training<br/><span style={{fontSize:'.68rem',opacity:.55}}>KnowBe4 Phishing by Industry, 2024</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="60" data-suffix=" sec">0 sec</div><div className="stat-l">median time for a user to click a phishing link after receiving it<br/><span style={{fontSize:'.68rem',opacity:.55}}>Proofpoint State of the Phish, 2024</span></div></div>
          </div>

          <section id="why-simulate">
            <h2>Why Run <em>Phishing Simulations?</em></h2>
            <p>Technical security controls ,firewalls, endpoint protection, MFA ,can be bypassed. What they cannot do is make your employees immune to convincing social engineering. A phishing simulation is the only way to measure how susceptible your workforce actually is, and the only reliable method to deliver training at the exact moment it is most effective: immediately after someone almost made a mistake.</p>
            <div className="pull-quote">
              <p>"The question is not whether your employees will receive phishing emails. They already are. The question is whether they will recognise them ,and whether you have any data to show auditors that you have done anything about it."</p>
            </div>
            <p>Beyond the direct security benefit, phishing simulations have become a compliance expectation. ISO 27001 Annex A.6.3 requires measurable security awareness training. SOC 2 CC2.2 requires demonstrating that security responsibilities are communicated to staff. Auditors increasingly look for click rate trend data ,not just training completion records ,as evidence that your programme is working.</p>
          </section>

          <section id="platforms">
            <h2>Choosing Your <em>Phishing Simulation Platform</em></h2>
            <p>Your choice of platform determines what you can measure, how realistic your templates can be, and what training you can deliver to employees who click. Here are the main options:</p>
            <div className="platform-grid">
              <div className="platform-card anim"><span className="plat-badge pb-free">Free / Open Source</span><h3>GoPhish</h3><p>Open-source, self-hosted phishing simulation framework. Full control, no per-user cost, highly customisable. Requires technical setup and your own SMTP infrastructure. Best for teams with engineering resources who want maximum control.</p></div>
              <div className="platform-card anim"><span className="plat-badge pb-paid">Enterprise</span><h3>KnowBe4</h3><p>The market leader for combined phishing simulation and security awareness training. Thousands of template options, automated training assignment, deep compliance reporting. Per-user pricing makes it expensive at scale but the ROI is well-documented.</p></div>
              <div className="platform-card anim"><span className="plat-badge pb-paid">Enterprise</span><h3>Proofpoint Security Awareness</h3><p>Strong integration with Proofpoint email security. Best-in-class threat intelligence feeds realistic templates based on current active campaigns. Recommended if you already use Proofpoint for email filtering.</p></div>
              <div className="platform-card anim"><span className="plat-badge pb-free">Included</span><h3>Microsoft Attack Simulator</h3><p>Included with Microsoft 365 E5 / Defender for Office 365 Plan 2. Lower template diversity than dedicated platforms but zero additional cost if you are already on E5. Good starting point before investing in a dedicated platform.</p></div>
            </div>
          </section>

          <section id="step-by-step">
            <h2>The 7-Step <em>Phishing Simulation Process</em></h2>
            <ul className="feat-list">
              <li className="anim">
                <div className="f-num">1</div>
                <div className="f-body">
                  <strong>Choose your platform and configure your sending infrastructure</strong>
                  <span>Set up your simulation platform and configure a sending domain that does not match your primary company domain ,use a lookalike domain (e.g. seccomply-it.com vs seccomply.net). Whitelist the sending IP in your email gateway so simulation emails are not filtered. Brief your IT and security team so they do not raise a false incident.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">2</div>
                <div className="f-body">
                  <strong>Define scope and run a baseline campaign</strong>
                  <span>Decide which departments to include. Run an initial campaign with a realistic template before any training ,this baseline click rate is your starting point and the benchmark against which all future improvement is measured. Do not announce the campaign in advance.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">3</div>
                <div className="f-body">
                  <strong>Design realistic templates relevant to your organisation</strong>
                  <span>Generic phishing templates produce lower click rates because they do not resonate with your workforce. Build templates that mirror tools your team actually uses ,your ticketing system, your HR platform, your cloud storage provider. The more relevant the template, the more valuable the training opportunity when someone clicks.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">4</div>
                <div className="f-body">
                  <strong>Launch the campaign and track all actions</strong>
                  <span>Send simulated phishing emails and track four actions per recipient: email opened, link clicked, credentials submitted, and email reported. The report rate is as important as the click rate ,a workforce that actively reports phishing is significantly more valuable than one that merely avoids clicking.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">5</div>
                <div className="f-body">
                  <strong>Deliver an immediate teachable moment</strong>
                  <span>When an employee clicks a simulated phishing link, redirect them immediately to a short (2-3 minute) training module that explains what they missed and how to spot it next time. This teachable moment ,delivered at the exact moment of a near-miss ,is far more effective than annual awareness training. Do not use a shame page. Education, not punishment.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">6</div>
                <div className="f-body">
                  <strong>Analyse results and segment your high-risk employees</strong>
                  <span>After each campaign, identify three groups: employees who clicked (need targeted training), repeat clickers across multiple campaigns (need personalised intervention), and employees who never report (need reporting culture training). Generic awareness training delivered to everyone equally is far less effective than targeted follow-up for high-risk individuals.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">7</div>
                <div className="f-body">
                  <strong>Run quarterly simulations and track trend data</strong>
                  <span>A single simulation is a snapshot. A quarterly programme with tracked click rates over 12 months shows measurable improvement ,and that trend data is exactly what ISO 27001 and SOC 2 auditors want to see. Vary your templates each quarter so employees are tested against different scenarios, not conditioned to recognise a specific simulation format.</span>
                </div>
              </li>
            </ul>
          </section>

          <section id="templates">
            <h2>Designing <em>Effective Phishing Templates</em></h2>
            <p>Template quality determines what you learn from each campaign. The most effective templates exploit the two most reliable social engineering triggers: <strong>urgency</strong> and <strong>authority</strong>. Here are the template types that consistently produce the highest click rates ,and therefore the most valuable training opportunities.</p>

            <div className="template-list">
              {[
                {icon:'🔐', title:'IT Security Password Reset', rate:'High', desc:'Appears to come from internal IT. Creates urgency: "Your account will be locked in 24 hours." Credential harvesting scenario. Highly effective because it exploits the authority of IT and the fear of losing access.'},
                {icon:'📋', title:'HR Policy Acknowledgment Required', rate:'High', desc:'Appears to come from HR. "You are required to acknowledge the updated policy before your next performance review." Time-sensitive, authority-based. Finance and operations teams show highest click rates for this template type.'},
                {icon:'💰', title:'Invoice or Payment Approval', rate:'High', desc:'Appears to come from accounts payable or a vendor. "Your approval is required for invoice #INV-4821." Finance teams are the highest-risk group for this template ,it mirrors their actual daily workflow.'},
                {icon:'📦', title:'Delivery or Shipping Notification', rate:'Medium-High', desc:'Appears to come from a courier service. "Your package could not be delivered. Click here to reschedule." Extremely widespread in real-world campaigns. Effective because most employees are expecting deliveries at any given time.'},
                {icon:'📁', title:'Shared Document Notification', rate:'Medium', desc:'Mimics Google Drive, OneDrive, or Dropbox sharing notifications. "Soham Sawant has shared a document with you." Credential harvesting via a fake login page. Particularly effective for users who frequently share documents.'},
              ].map(({icon,title,rate,desc},i)=>(
                <div key={i} className="tmpl-item anim">
                  <span className="tmpl-icon">{icon}</span>
                  <div className="tmpl-body">
                    <strong>{title} <span className="tmpl-rate">{rate} click rate</span></strong>
                    <span>{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline image */}
            <div className="img-wrap" style={{marginTop:'1.5rem'}}>
              <img
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1000&h=360&fit=crop"
                alt="Security awareness training dashboard"
                style={{width:'100%',display:'block',maxHeight:'320px',objectFit:'cover'}}
              />
            </div>
            <p className="img-cap">Security awareness training delivery ,the teachable moment immediately after a simulated click is the most effective intervention point in any phishing simulation programme.</p>
          </section>

          <section id="metrics">
            <h2>Measuring <em>What Actually Matters</em></h2>
            <p>Most phishing simulation programmes track click rates and stop there. The metrics that actually tell you whether your programme is working go deeper.</p>
            <ul className="feat-list">
              <li className="anim"><div className="f-num">📊</div><div className="f-body"><strong>Click Rate Trend (primary metric)</strong><span>Your click rate over time ,not just a single number. A downward trend from baseline across quarterly campaigns is the core evidence of programme effectiveness. A click rate above 20% after 6 months of simulations signals a programme that needs redesigning.</span></div></li>
              <li className="anim"><div className="f-num">🚩</div><div className="f-body"><strong>Report Rate (underrated metric)</strong><span>The percentage of employees who report the simulated phishing email to your security team. A high report rate means employees are not just avoiding clicks ,they are actively participating in your security culture. This metric matters as much as click rate for ISO 27001 evidence.</span></div></li>
              <li className="anim"><div className="f-num">🔄</div><div className="f-body"><strong>Repeat Clicker Rate</strong><span>The percentage of employees who click in multiple campaigns despite receiving training. Repeat clickers require a different intervention ,individualised coaching, not another generic awareness module. A repeat clicker rate above 5% after three campaigns indicates a training design problem.</span></div></li>
              <li className="anim"><div className="f-num">⏱️</div><div className="f-body"><strong>Time-to-Report</strong><span>How quickly employees report suspicious emails after receiving them. Fast reporting times indicate a trained workforce that acts on suspicion rather than ignoring it. Your incident response plan should assume that phishing emails will be in inboxes for some time ,time-to-report data informs how long that window actually is.</span></div></li>
            </ul>
          </section>

          <section id="compliance">
            <h2>Phishing Simulation and <em>Compliance Requirements</em></h2>
            <div className="cmp-wrap">
              <table className="cmp-table">
                <thead><tr><th>Framework</th><th>Relevant Control</th><th>What Phishing Simulation Provides</th></tr></thead>
                <tbody>
                  <tr><td>ISO 27001</td><td>Annex A.6.3 ,Information security awareness, education and training</td><td>Click rate trend data, training completion records, measurable behaviour change evidence</td></tr>
                  <tr><td>SOC 2</td><td>CC2.2 ,Communication of security responsibilities</td><td>Evidence that security awareness training is ongoing and measurably effective</td></tr>
                  <tr><td>HIPAA</td><td>164.308(a)(5) ,Security awareness and training</td><td>Documented phishing simulation programme with employee training records</td></tr>
                  <tr><td>PCI DSS</td><td>Req 12.6 ,Security awareness programme</td><td>Formal security awareness training with documented phishing testing cadence</td></tr>
                  <tr><td>GDPR</td><td>Article 32 ,Appropriate technical and organisational measures</td><td>Demonstrates that human risk (the leading cause of breaches) is being actively managed</td></tr>
                </tbody>
              </table>
            </div>
            <div className="callout co-key">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>What Auditors Actually Want to See</strong>
                <p>Auditors are not satisfied with "we ran annual security awareness training." They want evidence that training has a measurable impact on behaviour. Click rate trend data from quarterly simulations ,showing improvement over a 12-month period ,is exactly the kind of evidence that satisfies ISO 27001 and SOC 2 reviewers and demonstrates a mature security culture.</p>
              </div>
            </div>
          </section>

          <section id="mistakes">
            <h2>Common Phishing Simulation <em>Mistakes</em></h2>
            <ul className="feat-list">
              <li className="anim"><div className="f-num">✗</div><div className="f-body"><strong>Running annual simulations and calling it a programme</strong><span>One simulation per year produces a data point, not a trend. Quarterly simulations with varied templates are the minimum for a programme that produces meaningful improvement and satisfies compliance auditors looking for evidence of continuous training effectiveness.</span></div></li>
              <li className="anim"><div className="f-num">✗</div><div className="f-body"><strong>Using the same template repeatedly</strong><span>Employees learn to recognise your specific simulation format, not phishing in general. Vary your templates each quarter ,different senders, different scenarios, different urgency triggers. The goal is to build general phishing recognition skills, not template-specific pattern matching.</span></div></li>
              <li className="anim"><div className="f-num">✗</div><div className="f-body"><strong>Shaming employees who click</strong><span>Public naming, aggressive shame pages, or punitive consequences for clicking damage psychological safety and reduce the likelihood that employees will report suspicious emails in future. The objective is a security-aware culture, not a blame culture. Treat clicking as a training opportunity, not a disciplinary matter.</span></div></li>
              <li className="anim"><div className="f-num">✗</div><div className="f-body"><strong>Delivering the same training to everyone</strong><span>The employee who has never clicked needs a different experience than the employee who has clicked in three consecutive campaigns. Segment your workforce based on simulation results and deliver targeted training ,not the same 20-minute module to 200 people who have different risk profiles.</span></div></li>
            </ul>
          </section>

          <div className="cta-banner">
            <h3>Ready to Build Your Phishing Simulation Programme?</h3>
            <p>SecComply helps organisations design and run phishing simulation programmes that satisfy ISO 27001 and SOC 2 requirements ,with the click rate trend data auditors actually want to see.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Consultation →</a>
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
                {q:"What is a phishing simulation?", a:"A phishing simulation is a controlled security exercise where an organisation sends realistic but fake phishing emails to its own employees to test their ability to identify and report phishing attempts. The goal is not to catch people out ,it is to identify training gaps, measure baseline susceptibility, and deliver targeted education that reduces the likelihood of a real phishing attack succeeding."},
                {q:"What is a good phishing click rate benchmark?", a:"Industry average click rates for untrained employees typically range from 25-40% on realistic phishing templates. After 12 months of quarterly simulations with targeted training, well-run programmes achieve click rates below 5%. A click rate above 20% indicates a high-risk training gap. A click rate consistently below 5% with a high report rate indicates a mature security awareness culture."},
                {q:"How does phishing simulation satisfy ISO 27001 and SOC 2 requirements?", a:"ISO 27001 Annex A.6.3 requires security awareness, education, and training. SOC 2 CC2.2 requires communication of security responsibilities to staff. Phishing simulation provides measurable evidence of both: click rate trend data over time demonstrates programme effectiveness, and completion records demonstrate that training was delivered. Auditors look specifically for evidence that security awareness training has a measurable impact ,not just that it was conducted."},
                {q:"What phishing templates are most effective?", a:"The most effective phishing templates exploit urgency and authority. IT security password reset requests, HR policy acknowledgment reminders, payroll system notifications, delivery tracking links, and shared document notifications from familiar cloud services consistently produce the highest click rates and therefore the most valuable training opportunities."},
                {q:"Should you warn employees before running a phishing simulation?", a:"No. Announcing a phishing simulation before it runs defeats its purpose ,employees will be on high alert for that specific period and results will not reflect their normal behaviour. Instead, communicate the existence of an ongoing phishing simulation programme generally (without campaign-specific timing) so employees know to be vigilant at all times."},
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
              <li><a href="#why-simulate" className="toc-link">Why Run Simulations</a></li>
              <li><a href="#platforms" className="toc-link">Choosing Your Platform</a></li>
              <li><a href="#step-by-step" className="toc-link">The 7-Step Process</a></li>
              <li><a href="#templates" className="toc-link">Effective Templates</a></li>
              <li><a href="#metrics" className="toc-link">Measuring What Matters</a></li>
              <li><a href="#compliance" className="toc-link">Compliance Requirements</a></li>
              <li><a href="#mistakes" className="toc-link">Common Mistakes</a></li>
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
              <li><a href="https://seccomply.net/services/vapt" target="_blank">🔍 VAPT Services</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">Phishing Simulation</span><span className="tag">Security Awareness</span><span className="tag">Click Rate</span><span className="tag">GoPhish</span><span className="tag">KnowBe4</span><span className="tag">ISO 27001</span><span className="tag">SOC 2</span><span className="tag">Human Security</span><span className="tag">Social Engineering</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Build Your Phishing Programme</h4>
            <p>Free consultation ,we'll design a simulation programme that satisfies ISO 27001 and SOC 2 auditors.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
