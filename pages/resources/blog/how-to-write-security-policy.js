import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function SecurityPolicyGuide() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/how-to-write-security-policy'); const ttl = encodeURIComponent('How to Write a Security Policy People Will Follow, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/how-to-write-security-policy'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
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
        <title>How to Write a Security Policy People Will Actually Follow | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="Most security policies fail not because they're technically wrong but because nobody reads them. A practical guide to writing security policies that are clear, enforceable, and actually change behaviour — with ISO 27001, SOC 2, and DPDP compliance mapping." />
        <meta name="keywords" content="how to write security policy, information security policy, ISO 27001 security policy, SOC 2 security policy, acceptable use policy, ISMS policy, security policy template, security policy best practices, security policy framework, employee security policy" />
        <meta property="og:title" content="How to Write a Security Policy People Will Actually Follow" />
        <meta property="og:description" content="Most security policies are written to satisfy auditors, not to change behaviour. Here's how to write one that does both — with the structure, language, and enforcement mechanisms that actually work." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/how-to-write-security-policy" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/security-policy-og.png" />
        <meta property="article:published_time" content="2026-03-25" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="Security Policy" />
        <meta property="article:tag" content="ISO 27001" />
        <meta property="article:tag" content="Security Governance" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/how-to-write-security-policy" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", "headline": "How to Write a Security Policy People Will Actually Follow", "description": "A practical guide to writing security policies that are clear, enforceable, and actually change behaviour — with ISO 27001, SOC 2, and DPDP compliance mapping.", "author": { "@type": "Person", "name": "Soham Sawant", "jobTitle": "Cybersecurity Expert & Technical Writer", "worksFor": { "@type": "Organization", "name": "SecComply" } }, "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } }, "datePublished": "2026-03-25", "dateModified": "2026-03-25", "mainEntityOfPage": "https://seccomply.net/resources/blog/how-to-write-security-policy", "keywords": "security policy, information security policy, ISO 27001, SOC 2, ISMS, acceptable use policy, security governance", "articleSection": "Security Governance", "wordCount": 2100, "timeRequired": "PT8M" },
            { "@type": "HowTo", "name": "How to Write a Security Policy People Will Follow", "description": "Step-by-step guide to writing effective, enforceable security policies that satisfy ISO 27001 and SOC 2 requirements.", "step": [
              { "@type": "HowToStep", "position": 1, "name": "Define the policy's purpose and scope", "text": "Every policy must answer three questions before anything else: what does this policy protect, who does it apply to, and what happens if it is not followed. Without clear answers to all three, the policy will not be enforceable." },
              { "@type": "HowToStep", "position": 2, "name": "Write for your actual audience", "text": "A policy written for a security professional will not be followed by a sales executive. Use plain language, avoid jargon, and structure each section as a clear obligation rather than a technical description." },
              { "@type": "HowToStep", "position": 3, "name": "State obligations, not aspirations", "text": "Replace vague aspirational language with specific, measurable obligations. 'Passwords should be strong' becomes 'Passwords must be at least 14 characters and changed every 90 days.' Specific obligations are enforceable. Aspirations are not." },
              { "@type": "HowToStep", "position": 4, "name": "Get leadership sign-off and visible sponsorship", "text": "A policy without visible leadership endorsement will be ignored. The information security policy must be signed by the CEO or equivalent and communicated from the top — not just published on an intranet page." },
              { "@type": "HowToStep", "position": 5, "name": "Build an acknowledgement and training process", "text": "Every employee must read and acknowledge the policy — not just tick a box. Annual refreshers, role-specific training for high-risk teams, and onboarding coverage ensure the policy is actually known, not just filed." },
              { "@type": "HowToStep", "position": 6, "name": "Review and update on a defined schedule", "text": "An outdated policy is worse than no policy — it creates documented evidence of controls that no longer exist. Review annually at minimum, and immediately after any significant incident, technology change, or regulatory update." }
            ]},
            { "@type": "FAQPage", "mainEntity": [
              { "@type": "Question", "name": "What security policies are required for ISO 27001?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001 requires an overarching Information Security Policy (Clause 5.2) plus supporting policies covering access control (A.5.15), cryptography (A.8.24), physical security (A.7), supplier relationships (A.5.19), incident management (A.5.26), and business continuity (A.5.29). The exact set depends on the scope and risk assessment, but most organisations need 10-15 policies to achieve full Annex A coverage." } },
              { "@type": "Question", "name": "How long should a security policy be?", "acceptedAnswer": { "@type": "Answer", "text": "The overarching information security policy should be 2-4 pages — enough to state the organisation's commitment, scope, objectives, and top-level obligations without being a manual. Supporting policies covering specific topics (acceptable use, access control, incident response) can be longer but should never exceed what an employee in that role would reasonably read and retain. If a policy is longer than 10 pages, it should be split into a policy and a separate procedure document." } },
              { "@type": "Question", "name": "What is the difference between a security policy and a security procedure?", "acceptedAnswer": { "@type": "Answer", "text": "A security policy states what must be done and why — it sets the obligation. A security procedure states how to do it — the step-by-step implementation. Policies are written for all relevant employees and signed off at the executive level. Procedures are operational documents written for the people who carry out the specific task. Keeping the two separate makes policies easier to maintain (you can update a procedure without changing the policy) and easier to communicate." } },
              { "@type": "Question", "name": "How often should security policies be reviewed?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001 requires policies to be reviewed at planned intervals and when significant changes occur (Clause 5.2). In practice, annual reviews are the minimum. Policies should also be reviewed immediately after a security incident that reveals a gap, after a significant technology or organisational change, and when a new regulatory requirement takes effect. The review date and reviewer should be documented as part of the policy itself." } },
              { "@type": "Question", "name": "What makes a security policy enforceable?", "acceptedAnswer": { "@type": "Answer", "text": "An enforceable security policy has four characteristics: specific, measurable obligations (not vague aspirations), a clear consequence for non-compliance stated in the document, an acknowledgement process that creates a documented record that each employee has read it, and visible leadership endorsement that signals the organisation takes it seriously. Without all four, a policy is a document, not a control." } }
            ]},
            { "@type": "BreadcrumbList", "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
              { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
              { "@type": "ListItem", "position": 4, "name": "How to Write a Security Policy", "item": "https://seccomply.net/resources/blog/how-to-write-security-policy" }
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
    .policy-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .policy-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.2rem 1.4rem;transition:border-color .2s}
    .policy-card:hover{border-color:var(--bo)}
    .pc-tag{font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.15rem .55rem;border-radius:100px;display:inline-block;margin-bottom:.5rem}
    .pc-req{background:rgba(232,99,43,.12);color:#E8632B}
    .pc-rec{background:rgba(99,102,241,.12);color:#818cf8}
    .policy-card h3{font-size:.92rem;font-weight:700;color:var(--tx);margin-bottom:.3rem}
    .policy-card p{font-size:.81rem;color:var(--tm);margin-bottom:0;line-height:1.6}
    .before-after{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
    .ba-card{border-radius:12px;padding:1.2rem 1.4rem}
    .ba-before{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
    .ba-after{background:rgba(6,214,160,.05);border:1px solid rgba(6,214,160,.2)}
    .ba-label{font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.6rem}
    .ba-before .ba-label{color:#ff4d6d}
    .ba-after .ba-label{color:#06d6a0}
    .ba-card p{font-size:.88rem;color:var(--tb);margin:0;line-height:1.6;font-style:italic}
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
    @media(max-width:900px){.policy-grid{grid-template-columns:1fr}.before-after{grid-template-columns:1fr}.stats-row{grid-template-columns:1fr}}
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
        <span style={{color:'var(--tb)'}}>How to Write a Security Policy</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">📋 Security Policy</span>
          <span className="badge badge-bl">🏛️ Governance</span>
          <span className="badge badge-am">📖 Practical Guide</span>
          <span className="badge badge-gr">✓ ISO 27001 · SOC 2</span>
        </div>
        <h1 className="cspm-hero-h1">How to Write a Security Policy <em>People Will Actually Follow</em></h1>
        <p className="cspm-hero-sub">Most security policies are written to satisfy auditors, not to change behaviour. The result: a folder full of documents nobody reads and controls that exist on paper but not in practice. Here is how to write one that does both.</p>

        <div className="cspm-author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="name">Soham Sawant</div>
            <div className="meta-row"><span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
            <div className="date-row"><span>📅 March 2026</span><span className="dot">·</span><span>🏢 SecComply</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=480&fit=crop" alt="Writing security policy documentation" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}}/>
        </div>
        <p className="img-cap">A security policy is only as effective as the number of people who actually read, understand, and follow it. Most organisations have the documents — very few have the behaviour change.</p>

        {/* SVG DASHBOARD */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 400" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="spg1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#E8632B"/><stop offset="100%" stopColor="#FF8A50"/></linearGradient>
              <linearGradient id="spg2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06d6a0"/><stop offset="100%" stopColor="#04b080"/></linearGradient>
              <linearGradient id="spg3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff4d6d"/><stop offset="100%" stopColor="#d0304e"/></linearGradient>
              <pattern id="sppat" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgba(232,99,43,0.04)"/></pattern>
            </defs>
            <rect width="960" height="400" fill="url(#sppat)"/>
            <text x="480" y="34" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">Security Policy Programme — Status Overview</text>

            {/* LEFT: Policy inventory */}
            <rect x="16" y="50" width="230" height="334" rx="12" fill="#081826" stroke="rgba(232,99,43,0.15)" strokeWidth="1"/>
            <text x="36" y="74" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">POLICY INVENTORY</text>
            {[
              {name:'Information Security Policy', status:'✓ Current',    col:'#06d6a0'},
              {name:'Acceptable Use Policy',       status:'✓ Current',    col:'#06d6a0'},
              {name:'Access Control Policy',       status:'✓ Current',    col:'#06d6a0'},
              {name:'Incident Response Policy',    status:'⚠ Due Review', col:'#ffb703'},
              {name:'Cryptography Policy',         status:'⚠ Due Review', col:'#ffb703'},
              {name:'Data Classification Policy',  status:'✗ Missing',    col:'#ff4d6d'},
              {name:'Business Continuity Policy',  status:'✗ Missing',    col:'#ff4d6d'},
              {name:'Supplier Security Policy',    status:'✗ Missing',    col:'#ff4d6d'},
            ].map(({name,status,col},i)=>(
              <g key={i}>
                <rect x="28" y={84+i*32} width="206" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke={`${col}18`} strokeWidth="1"/>
                <text x="44" y={100+i*32} fill="rgba(200,214,229,0.75)" fontSize="8.5" fontFamily="sans-serif">{name}</text>
                <text x="220" y={100+i*32} textAnchor="end" fill={col} fontSize="7.5" fontWeight="700" fontFamily="sans-serif">{status}</text>
              </g>
            ))}

            <line x1="260" y1="46" x2="260" y2="390" stroke="rgba(232,99,43,0.07)" strokeWidth="1"/>

            {/* CENTRE: Acknowledgement rates */}
            <text x="490" y="70" textAnchor="middle" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">POLICY ACKNOWLEDGEMENT RATES BY DEPT</text>
            {[
              {dept:'Engineering',    rate:94, col:'#06d6a0'},
              {dept:'Finance',        rate:88, col:'#06d6a0'},
              {dept:'Legal',          rate:91, col:'#06d6a0'},
              {dept:'Sales',          rate:61, col:'#ffb703'},
              {dept:'Operations',     rate:74, col:'#ffb703'},
              {dept:'Customer Ops',   rate:52, col:'#ff4d6d'},
            ].map(({dept,rate,col},i)=>(
              <g key={i}>
                <text x="272" y={93+i*44} fill="rgba(200,214,229,0.55)" fontSize="9" fontFamily="sans-serif">{dept}</text>
                <rect x="272" y={98+i*44} width="380" height="14" rx="7" fill="rgba(255,255,255,0.04)"/>
                <rect x="272" y={98+i*44} width={Math.round(380*rate/100)} height="14" rx="7" fill={col}/>
                <text x="660" y={109+i*44} fill={col} fontSize="10" fontWeight="700" fontFamily="sans-serif">{rate}%</text>
              </g>
            ))}

            {/* Overall score */}
            <circle cx="490" cy="330" r="36" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10"/>
            <circle cx="490" cy="330" r="36" fill="none" stroke="url(#spg1)" strokeWidth="10" strokeDasharray="142 226" strokeDashoffset="56" strokeLinecap="round"/>
            <text x="490" y="325" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700" fontFamily="sans-serif">76%</text>
            <text x="490" y="340" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8" fontFamily="sans-serif">overall</text>
            <text x="490" y="378" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">Overall acknowledgement rate</text>

            <line x1="710" y1="46" x2="710" y2="390" stroke="rgba(232,99,43,0.07)" strokeWidth="1"/>

            {/* RIGHT: Common failures */}
            <text x="728" y="70" fill="rgba(200,214,229,0.7)" fontSize="10" fontWeight="700" fontFamily="sans-serif">COMMON POLICY FAILURES</text>
            {[
              {issue:'Written for auditors not employees', sev:'High'},
              {issue:'Vague obligations (should/may)',     sev:'High'},
              {issue:'No consequence for non-compliance',  sev:'Critical'},
              {issue:'Never reviewed after ISO audit',     sev:'High'},
              {issue:'No visible leadership endorsement',  sev:'Medium'},
              {issue:'Policies buried in intranet folder', sev:'Medium'},
            ].map(({issue,sev},i)=>(
              <g key={i}>
                <rect x="718" y={82+i*50} width="226" height="38" rx="8" fill="#091826" stroke={sev==='Critical'?"rgba(255,77,109,0.25)":sev==='High'?"rgba(255,183,3,0.2)":"rgba(232,99,43,0.15)"} strokeWidth="1"/>
                <text x="734" y={99+i*50} fill="rgba(200,214,229,0.8)" fontSize="8.5" fontFamily="sans-serif">{issue}</text>
                <rect x="734" y={105+i*50} width={sev.length*5.5+10} height="10" rx="3" fill={sev==='Critical'?"rgba(255,77,109,0.15)":sev==='High'?"rgba(255,183,3,0.12)":"rgba(232,99,43,0.12)"}/>
                <text x="739" y={113+i*50} fill={sev==='Critical'?"#ff4d6d":sev==='High'?"#ffb703":"#E8632B"} fontSize="7" fontWeight="700" fontFamily="sans-serif">{sev}</text>
              </g>
            ))}
          </svg>
        </div>
        <p className="img-cap">Security policy programme dashboard — policy inventory with status, department acknowledgement rates, overall compliance score, and the six most common policy failures that auditors and attackers both exploit.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#why-policies-fail">Why Most Policies Fail</a>
            <a href="#policies-you-need">Policies You Actually Need</a>
            <a href="#how-to-write">The 6-Step Writing Process</a>
            <a href="#language">Language That Works</a>
            <a href="#enforcement">Enforcement and Acknowledgement</a>
            <a href="#compliance">Compliance Mapping</a>
            <a href="#review">Keeping Policies Current</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-target="60" data-suffix="%">0%</div><div className="stat-l">of employees say they have never read their organisation's security policy<br/><span style={{fontSize:'.68rem',opacity:.55}}>Proofpoint Security Awareness, 2024</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="10" data-suffix="–15">0</div><div className="stat-l">policies needed for full ISO 27001 Annex A coverage<br/><span style={{fontSize:'.68rem',opacity:.55}}>ISO 27001:2022</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="82" data-suffix="%">0%</div><div className="stat-l">of security incidents involve human error that a clear policy would have prevented<br/><span style={{fontSize:'.68rem',opacity:.55}}>Verizon DBIR 2024</span></div></div>
          </div>

          <section id="why-policies-fail">
            <h2>Why Most Security Policies <em>Fail</em></h2>
            <p>A security policy is only effective if the people it applies to read it, understand it, and change their behaviour because of it. Most policies achieve none of these three things. They are written in dense legalese by security professionals, published to an intranet folder nobody visits, acknowledged by a checkbox click that takes three seconds, and never thought about again until the next audit.</p>
            <div className="pull-quote">
              <p>"The most dangerous security policy is the one that was written to satisfy an auditor's checklist — because it gives the organisation the false confidence of compliance without any of the actual risk reduction."</p>
            </div>
            <p>The failure modes are consistent across organisations of every size. Policies are written for the wrong audience. Obligations are stated vaguely. There are no consequences for non-compliance. Leadership endorsement is nominal rather than visible. And once the ISO 27001 or SOC 2 audit is complete, policies are filed and forgotten until the next certification cycle — by which point they're describing a technology environment that no longer exists.</p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>The Audit Trap</strong>
                <p>Auditors check whether policies exist, whether they cover the required topics, and whether they have been reviewed recently. They typically cannot check whether employees actually follow them. An organisation can pass an ISO 27001 audit with a complete set of policies that nobody reads — and be breached six months later because of a behaviour the policy explicitly prohibited.</p>
              </div>
            </div>
          </section>

          <section id="policies-you-need">
            <h2>The Policies Your Organisation <em>Actually Needs</em></h2>
            <p>Before writing, be clear on what you need. Most organisations pursuing ISO 27001 or SOC 2 require a core set of policies. Here are the ones that matter most — and the compliance frameworks that require them.</p>
            <div className="policy-grid">
              <div className="policy-card anim"><span className="pc-tag pc-req">Required — ISO 27001</span><h3>Information Security Policy</h3><p>The overarching policy that states the organisation's commitment to security, sets the scope of the ISMS, and establishes top-level obligations. Must be signed by leadership. This is Clause 5.2 — every other policy flows from it.</p></div>
              <div className="policy-card anim"><span className="pc-tag pc-req">Required — ISO 27001 · SOC 2</span><h3>Acceptable Use Policy</h3><p>What employees can and cannot do with company systems, devices, and data. The most read policy in any organisation — and the one most directly responsible for preventing insider threats and accidental data exposure.</p></div>
              <div className="policy-card anim"><span className="pc-tag pc-req">Required — ISO 27001 · SOC 2</span><h3>Access Control Policy</h3><p>Who gets access to what systems and data, how access is granted and revoked, and the principle of least privilege. Directly maps to ISO 27001 Annex A.5.15 and SOC 2 CC6.1. One of the most frequently cited gaps in audits.</p></div>
              <div className="policy-card anim"><span className="pc-tag pc-req">Required — ISO 27001 · DPDP</span><h3>Data Classification Policy</h3><p>How your organisation categorises data by sensitivity — typically Public, Internal, Confidential, Restricted — and the handling requirements for each tier. Essential for DPDP compliance and the foundation of most other data protection controls.</p></div>
              <div className="policy-card anim"><span className="pc-tag pc-req">Required — ISO 27001 · SOC 2</span><h3>Incident Response Policy</h3><p>What constitutes a security incident, how it is reported, who responds, and what the escalation path looks like. Directly satisfies ISO 27001 A.5.26 and SOC 2 CC7.3/CC7.4. Must include regulatory notification obligations.</p></div>
              <div className="policy-card anim"><span className="pc-tag pc-rec">Recommended</span><h3>Cryptography Policy</h3><p>Which encryption algorithms are approved, where encryption is required (at rest, in transit), and how keys are managed. Satisfies ISO 27001 A.8.24. Prevents the "we use encryption" assertion that covers DES and MD5 as much as AES-256.</p></div>
              <div className="policy-card anim"><span className="pc-tag pc-req">Required — ISO 27001</span><h3>Supplier Security Policy</h3><p>Security requirements for third-party vendors, onboarding and offboarding procedures, and minimum standards for suppliers with access to your systems or data. ISO 27001 A.5.19 and A.5.21. Directly addresses the third-party risk gap.</p></div>
              <div className="policy-card anim"><span className="pc-tag pc-rec">Recommended</span><h3>Remote Working Policy</h3><p>Security requirements for employees working outside the office — device encryption, VPN usage, public Wi-Fi restrictions, screen locking. More relevant than ever post-2020 and increasingly expected by enterprise customers in vendor questionnaires.</p></div>
            </div>
          </section>

          <section id="how-to-write">
            <h2>The 6-Step <em>Policy Writing Process</em></h2>
            <ul className="feat-list">
              <li className="anim">
                <div className="f-num">1</div>
                <div className="f-body">
                  <strong>Define the purpose, scope, and consequence before writing anything else</strong>
                  <span>Every policy must answer three questions upfront: what does this policy protect, who does it apply to, and what happens if it is not followed. Without clear answers to all three, the policy cannot be enforced. State these in the first section — not buried in an appendix.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">2</div>
                <div className="f-body">
                  <strong>Identify your actual audience and write for them</strong>
                  <span>An acceptable use policy applies to every employee — including the sales executive who has never opened a security document. Write at the literacy level of the least technical person in scope. If the policy requires a glossary, it's too technical. If it requires a law degree to interpret, it will not be followed.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">3</div>
                <div className="f-body">
                  <strong>State obligations, not aspirations</strong>
                  <span>The most common writing failure in security policies is the use of aspirational language that sounds like an obligation but isn't. "Should," "may," and "is encouraged to" are not enforceable. Replace every instance with "must," "is required to," or "will." Every obligation must be specific enough to be audited.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">4</div>
                <div className="f-body">
                  <strong>Get genuine leadership sign-off — not just a signature</strong>
                  <span>A policy signed by the CEO and communicated in a company-wide message is a different object from a policy signed by the CISO and published to the intranet. Visible leadership endorsement signals to every employee that this is taken seriously at the top. Without it, the policy is treated as an IT department document — optional and ignorable.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">5</div>
                <div className="f-body">
                  <strong>Build a real acknowledgement and training process</strong>
                  <span>Every employee must read, understand, and formally acknowledge each policy they are subject to — not just tick a box that the document exists. For high-risk roles (finance, IT, senior leadership), require role-specific training that goes beyond reading. Track acknowledgement rates by department and follow up on gaps.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">6</div>
                <div className="f-body">
                  <strong>Set a review schedule and own it</strong>
                  <span>Build the review date into the policy document itself. Assign a named owner who is accountable for initiating the annual review. Trigger reviews immediately after any significant incident, technology change, or regulatory update. An outdated policy is worse than no policy — it creates documented evidence of controls that no longer exist.</span>
                </div>
              </li>
            </ul>
          </section>

          <section id="language">
            <h2>The Language That <em>Actually Works</em></h2>
            <p>Policy language determines whether obligations are enforceable. Here are the most common rewrites that transform vague aspirations into auditable requirements:</p>

            <div className="before-after">
              <div className="ba-card ba-before anim"><div className="ba-label">❌ Before — Unenforceable</div><p>"Employees should use strong passwords and are encouraged to enable multi-factor authentication where available."</p></div>
              <div className="ba-card ba-after anim"><div className="ba-label">✅ After — Enforceable</div><p>"All employees must use passwords of at least 14 characters. Multi-factor authentication is mandatory for all corporate systems. Non-compliance will result in access suspension."</p></div>
            </div>

            <div className="before-after">
              <div className="ba-card ba-before anim"><div className="ba-label">❌ Before — Unenforceable</div><p>"Sensitive data should be handled with care and employees are expected to use good judgement when sharing information."</p></div>
              <div className="ba-card ba-after anim"><div className="ba-label">✅ After — Enforceable</div><p>"Data classified as Confidential or Restricted must only be shared via encrypted channels. Sharing via personal email or unencrypted messaging services is prohibited and subject to disciplinary action."</p></div>
            </div>

            <div className="before-after">
              <div className="ba-card ba-before anim"><div className="ba-label">❌ Before — Unenforceable</div><p>"IT incidents should be reported to the security team as soon as possible."</p></div>
              <div className="ba-card ba-after anim"><div className="ba-label">✅ After — Enforceable</div><p>"All suspected security incidents must be reported to security@seccomply.net within 2 hours of discovery. Failure to report a known incident is a policy violation subject to disciplinary review."</p></div>
            </div>

            <div className="callout co-key">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>The Plain Language Test</strong>
                <p>After drafting a policy, ask a non-technical employee in the target audience to read it and explain back to you what they are required to do. If they cannot, the policy needs to be rewritten — not the employee trained. Clarity is the responsibility of the writer, not the reader.</p>
              </div>
            </div>

            {/* Inline image */}
            <div className="img-wrap" style={{marginTop:'1.5rem'}}>
              <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1000&h=360&fit=crop" alt="Team reviewing security documentation" style={{width:'100%',display:'block',maxHeight:'320px',objectFit:'cover'}}/>
            </div>
            <p className="img-cap">Effective security policies are written for the people who must follow them, not the auditors who review them. The two requirements are not mutually exclusive — but most organisations optimise for only one.</p>
          </section>

          <section id="enforcement">
            <h2>Enforcement, Acknowledgement, <em>and Consequence</em></h2>
            <p>A policy without enforcement is a recommendation. For a policy to be a genuine control — one that satisfies ISO 27001 or SOC 2 auditors and actually changes behaviour — it needs three things: a documented acknowledgement process, visible consequences for non-compliance, and a mechanism for tracking and following up on gaps.</p>
            <ul className="feat-list">
              <li className="anim"><div className="f-num">📝</div><div className="f-body"><strong>Formal acknowledgement at onboarding and annually</strong><span>Every new employee signs an acknowledgement that they have read and understood relevant policies as part of onboarding. Annual re-acknowledgement is required — not optional. Track completion rates in your HRIS or GRC tool and report gaps to management. Below 90% acknowledgement for any policy is a finding.</span></div></li>
              <li className="anim"><div className="f-num">⚠️</div><div className="f-body"><strong>State consequences explicitly in the document</strong><span>The consequence section must appear in the policy body itself — not just in the employee handbook. Options range from formal warning to termination depending on severity. The specificity matters: "subject to disciplinary action up to and including termination of employment" is enforceable. "May face consequences" is not.</span></div></li>
              <li className="anim"><div className="f-num">📊</div><div className="f-body"><strong>Track acknowledgement rates by department and report them</strong><span>Acknowledgement rates below 80% in any department are a risk signal — they mean a significant portion of that team either doesn't know the policy exists or actively avoided reading it. Report these rates quarterly to leadership. Departments with consistently low rates need targeted intervention, not just another email reminder.</span></div></li>
              <li className="anim"><div className="f-num">🔄</div><div className="f-body"><strong>Enforce consistently — exceptions undermine everything</strong><span>A single publicly known exception to a policy — an executive who ignored the password policy and faced no consequence — destroys the policy's authority across the entire organisation. Enforcement must be consistent regardless of seniority. If a control cannot be applied to leadership, it should not be in the policy.</span></div></li>
            </ul>
          </section>

          <section id="compliance">
            <h2>Security Policy and <em>Compliance Requirements</em></h2>
            <div className="cmp-wrap">
              <table className="cmp-table">
                <thead><tr><th>Framework</th><th>Policy Requirement</th><th>What Auditors Look For</th></tr></thead>
                <tbody>
                  <tr><td>ISO 27001</td><td>Clause 5.2 — Information security policy; Annex A policies across 93 controls</td><td>Top-level policy signed by leadership, documented review history, evidence of communication to all relevant parties</td></tr>
                  <tr><td>SOC 2</td><td>CC1.3 — Policies and procedures to support the achievement of commitments</td><td>Written policies covering the five Trust Service Criteria, acknowledgement records, evidence of enforcement</td></tr>
                  <tr><td>GDPR / DPDP</td><td>Article 24 (GDPR) / Section 8(5) DPDP — Technical and organisational measures</td><td>Data classification policy, data handling procedures, evidence that employees are trained on data protection obligations</td></tr>
                  <tr><td>HIPAA</td><td>164.308(a)(1) — Security management process; includes written policies and procedures</td><td>Written policies covering all required administrative safeguards, workforce training records, sanctions policy</td></tr>
                  <tr><td>PCI DSS</td><td>Req 12.1 — Comprehensive information security policy</td><td>Annual review of the security policy, documented approval, distribution to all relevant personnel</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="review">
            <h2>Keeping Policies <em>Current</em></h2>
            <p>An outdated policy is not a neutral document — it actively creates risk. It tells auditors that your controls were reviewed at a certain date and found adequate, when they may now be entirely inadequate for your current environment. It also creates an enforcement problem: you cannot discipline an employee for violating a policy that references systems you decommissioned two years ago.</p>
            <div className="callout co-sc">
              <span className="co-icon">🔄</span>
              <div className="co-body">
                <strong>The Policy Review Calendar</strong>
                <p>Build policy reviews into your security calendar the same way you schedule penetration tests and audits. Every policy should have a named owner and a review date in the document header. The CISO or equivalent should receive a monthly report of policies approaching their review date. Reviews triggered by incidents or regulatory changes should be completed within 30 days of the trigger event.</p>
              </div>
            </div>
            <p>Trigger an immediate policy review when any of the following occurs: a security incident reveals a gap in existing policy coverage, a new technology or system is deployed that the current policy doesn't address, a regulatory requirement changes that affects your obligations, or a significant organisational change occurs such as a merger, acquisition, or major headcount change.</p>
          </section>

          <div className="cta-banner">
            <h3>Need Help Building Your Policy Framework?</h3>
            <p>SecComply builds ISO 27001 and SOC 2 compliant policy frameworks from scratch — written in plain language, tailored to your organisation, and ready for auditor review on day one.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Consultation →</a>
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
                {q:"What security policies are required for ISO 27001?", a:"ISO 27001 requires an overarching Information Security Policy (Clause 5.2) plus supporting policies covering access control, cryptography, physical security, supplier relationships, incident management, and business continuity. The exact set depends on scope and risk assessment, but most organisations need 10-15 policies to achieve full Annex A coverage."},
                {q:"How long should a security policy be?", a:"The overarching information security policy should be 2-4 pages. Supporting policies covering specific topics can be longer but should never exceed what an employee in that role would reasonably read and retain. If a policy is longer than 10 pages, it should be split into a policy and a separate procedure document."},
                {q:"What is the difference between a security policy and a security procedure?", a:"A security policy states what must be done and why — it sets the obligation. A security procedure states how to do it — the step-by-step implementation. Policies are written for all relevant employees and signed off at the executive level. Procedures are operational documents written for the people who carry out the specific task."},
                {q:"How often should security policies be reviewed?", a:"ISO 27001 requires policies to be reviewed at planned intervals and when significant changes occur. Annual reviews are the minimum. Policies should also be reviewed immediately after a security incident that reveals a gap, after a significant technology or organisational change, and when a new regulatory requirement takes effect."},
                {q:"What makes a security policy enforceable?", a:"An enforceable security policy has four characteristics: specific measurable obligations rather than vague aspirations, a clear consequence for non-compliance stated in the document, an acknowledgement process that creates a documented record that each employee has read it, and visible leadership endorsement that signals the organisation takes it seriously. Without all four, a policy is a document, not a control."},
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
              <li><a href="#why-policies-fail" className="toc-link">Why Policies Fail</a></li>
              <li><a href="#policies-you-need" className="toc-link">Policies You Actually Need</a></li>
              <li><a href="#how-to-write" className="toc-link">The 6-Step Process</a></li>
              <li><a href="#language" className="toc-link">Language That Works</a></li>
              <li><a href="#enforcement" className="toc-link">Enforcement & Acknowledgement</a></li>
              <li><a href="#compliance" className="toc-link">Compliance Mapping</a></li>
              <li><a href="#review" className="toc-link">Keeping Policies Current</a></li>
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
              <span className="tag">Security Policy</span><span className="tag">ISO 27001</span><span className="tag">SOC 2</span><span className="tag">ISMS</span><span className="tag">Acceptable Use</span><span className="tag">Access Control</span><span className="tag">Governance</span><span className="tag">DPDP</span><span className="tag">Policy Writing</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Need a Policy Framework?</h4>
            <p>SecComply builds ISO 27001-ready policy sets — written in plain language, tailored to your organisation.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
