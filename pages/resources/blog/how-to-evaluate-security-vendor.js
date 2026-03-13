import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function EvaluateSecurityVendor() {
  useEffect(() => {
    (function () {
      'use strict';
      const bar = document.getElementById('reading-progress');
      window.addEventListener('scroll', () => { const h = document.documentElement.scrollHeight - window.innerHeight; if (bar) bar.style.width = (h > 0 ? Math.min(window.scrollY / h * 100, 100) : 0) + '%'; }, { passive: true });
      const artEl = document.querySelector('.art'); const rtEl = document.getElementById('read-time');
      if (artEl && rtEl) { const words = (artEl.innerText || '').trim().split(/\s+/).length; rtEl.textContent = '📖 ' + Math.max(1, Math.round(words / 220)) + ' min read'; }
      document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', e => { const t = document.querySelector(a.getAttribute('href')); if (!t) return; e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 24, behavior: 'smooth' }); history.pushState(null, '', a.getAttribute('href')); }); });
      const sections = document.querySelectorAll('section[id]'); const tocLinks = document.querySelectorAll('.toc-link');
      if (sections.length && tocLinks.length) { const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id)); }); }, { rootMargin: '-60px 0px -55% 0px', threshold: 0 }); sections.forEach(s => obs.observe(s)); }
      const btt = document.getElementById('btt'); window.addEventListener('scroll', () => { if (btt) btt.classList.toggle('vis', window.scrollY > 600); }, { passive: true });
      const url = encodeURIComponent('https://seccomply.net/resources/blog/how-to-evaluate-security-vendor');
      const ttl = encodeURIComponent('How to Evaluate Your Security Vendor Without Getting Burned, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/how-to-evaluate-security-vendor'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
      function toast(msg) { let t = document.getElementById('sc-toast'); if (!t) { t = document.createElement('div'); t.id = 'sc-toast'; t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:#E8632B;color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgba(232,99,43,.4);opacity:0;transition:opacity .3s;pointer-events:none'; document.body.appendChild(t); } t.textContent = msg; t.style.opacity = '1'; clearTimeout(t._tid); t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500); }
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
    })();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": "How to Evaluate Your Security Vendor Without Getting Burned",
        "description": "Choosing the wrong security vendor can cost you your ISO 27001 certification, your SOC 2 audit, and your customers' trust. Here is a structured framework — the right questions, red flags, certifications scorecard, and contract clauses — to cut through sales noise and make a decision you won't regret.",
        "image": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/blog/how-to-evaluate-security-vendor.png", "width": 1200, "height": 630, "caption": "How to evaluate a security vendor for ISO 27001 and SOC 2" },
        "author": { "@type": "Person", "name": "Aditya Hadke", "worksFor": { "@type": "Organization", "name": "SecComply" } },
        "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } },
        "datePublished": "2026-03-01", "dateModified": "2026-03-01",
        "mainEntityOfPage": "https://seccomply.net/resources/blog/how-to-evaluate-security-vendor",
        "articleSection": "Vendor Risk", "inLanguage": "en-IN", "timeRequired": "PT7M", "wordCount": 1700
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How often should we re-evaluate existing security vendors?", "acceptedAnswer": { "@type": "Answer", "text": "At minimum annually — and immediately when a vendor has a known security incident, changes ownership, or substantially changes how they process your data. ISO 27001 explicitly requires ongoing supplier management, not just initial due diligence." } },
          { "@type": "Question", "name": "Is a SOC 2 Type I report enough for an ISO 27001 audit?", "acceptedAnswer": { "@type": "Answer", "text": "It can satisfy the requirement to evidence third-party assessment, but your auditor will ask pointed questions about scope and recency. SOC 2 Type II is significantly stronger evidence because it demonstrates controls working over time, not just existing at a point in time." } },
          { "@type": "Question", "name": "What if a critical vendor refuses to complete our security questionnaire?", "acceptedAnswer": { "@type": "Answer", "text": "If they hold a current SOC 2 Type II report covering your use case, that report often substitutes for a questionnaire response. If they refuse both, that refusal must be documented in your vendor risk register with compensating controls noted — or escalated to a leadership decision about whether the relationship is tenable." } },
          { "@type": "Question", "name": "Do we need a DPA with every vendor we use?", "acceptedAnswer": { "@type": "Answer", "text": "Under GDPR and India's DPDP Act, yes — for any vendor who processes personal data on your behalf as a data processor. This includes cloud storage, CRM platforms, email tools, and analytics platforms. A data flow mapping exercise usually surfaces a long list of vendors who need formal DPAs." } }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
          { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
          { "@type": "ListItem", "position": 4, "name": "How to Evaluate Your Security Vendor", "item": "https://seccomply.net/resources/blog/how-to-evaluate-security-vendor" }
        ]
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>How to Evaluate Your Security Vendor Without Getting Burned | SecComply</title>
        <meta name="description" content="Choosing the wrong security vendor can cost you your ISO 27001 cert, your SOC 2 audit, and your customers' trust. A structured framework: the right questions, red flags, certifications table, scorecard, and contract clauses." />
        <meta name="keywords" content="how to evaluate security vendor, vendor risk management, ISO 27001 vendor assessment, SOC 2 third party risk, DPA GDPR vendor, security vendor red flags, vendor scorecard, sub-processor list, security questionnaire, DPDP Act vendor compliance" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Aditya Hadke" /><meta name="language" content="en-IN" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/how-to-evaluate-security-vendor" />
        <link rel="icon" href="/favicon.ico" /><link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#020617" /><meta charSet="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How to Evaluate Your Security Vendor Without Getting Burned" />
        <meta property="og:description" content="68% of organisations have experienced a security incident caused by a third-party vendor. Here is the framework to make sure you are not next." />
        <meta property="og:url" content="https://seccomply.net/resources/blog/how-to-evaluate-security-vendor" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/how-to-evaluate-security-vendor.png" />
        <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Security vendor evaluation framework for ISO 27001 and SOC 2" />
        <meta property="og:site_name" content="SecComply" /><meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content="2026-03-01T08:00:00+05:30" />
        <meta property="article:modified_time" content="2026-03-01T08:00:00+05:30" />
        <meta property="article:author" content="Aditya Hadke" />
        <meta property="article:section" content="Vendor Risk" />
        <meta property="article:tag" content="Vendor Risk" /><meta property="article:tag" content="ISO 27001" /><meta property="article:tag" content="SOC 2" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@seccomply" /><meta name="twitter:creator" content="@seccomply" />
        <meta name="twitter:title" content="How to Evaluate Your Security Vendor Without Getting Burned" />
        <meta name="twitter:description" content="68% of orgs have had a security incident from a third-party vendor. Here is the framework to avoid being next." />
        <meta name="twitter:image" content="https://seccomply.net/assets/images/blog/how-to-evaluate-security-vendor.png" />
        <meta name="twitter:image:alt" content="Security vendor evaluation framework" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        :root{--cy:#E8632B;--cy2:#d0521f;--glow:rgba(232,99,43,.12);--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#F8FAFC;--tb:#E2E8F0;--tm:#94A3B8;--bo:rgba(232,99,43,.2);--bs:rgba(255,255,255,.06);--gr:#10B981;--rd:#EF4444;--am:#F59E0B;--sans:'Inter',sans-serif;--mono:'JetBrains Mono',monospace}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:var(--sans);background:var(--bg);color:var(--tx);-webkit-font-smoothing:antialiased;overflow-x:hidden}
        a{color:inherit;text-decoration:none}
        #reading-progress{position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,#E8632B,#FF8A50);z-index:9999;transition:width .1s linear;border-radius:0 2px 2px 0}
        .tools-hero-wrap{background:linear-gradient(160deg,#020617 0%,#0B1120 60%,#0F172A 100%);border-bottom:1px solid var(--bs);padding:96px 0 60px;position:relative;overflow:hidden}
        .tools-hero-wrap::before{content:'';position:absolute;top:-120px;right:-80px;width:500px;height:500px;background:radial-gradient(circle,rgba(232,99,43,.08) 0%,transparent 70%);pointer-events:none}
        .tools-hero-inner{max-width:860px;margin:0 auto;padding:0 24px}
        .tools-breadcrumb{display:flex;align-items:center;gap:8px;font-size:.78rem;color:var(--tm);margin-bottom:24px;flex-wrap:wrap}
        .tools-breadcrumb a{color:var(--cy);transition:opacity .2s}.tools-breadcrumb a:hover{opacity:.8}
        .tools-breadcrumb span{opacity:.4}
        .tools-cat-badge{display:inline-flex;align-items:center;gap:7px;padding:5px 14px;background:rgba(232,99,43,.1);border:1px solid rgba(232,99,43,.25);border-radius:100px;font-size:.72rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--cy);margin-bottom:20px}
        .tools-hero-h1{font-size:clamp(1.9rem,5vw,3rem);font-weight:900;line-height:1.1;letter-spacing:-.03em;color:var(--tx);margin-bottom:18px}
        .tools-hero-h1 .acc{background:linear-gradient(90deg,#E8632B,#FF8A50);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .tools-hero-sub{font-size:1.08rem;line-height:1.75;color:var(--tm);max-width:740px;margin-bottom:28px}
        .tools-author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-top:24px;flex-wrap:wrap}
        .tools-author-strip .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#E8632B,#FF8A50);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.95rem;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(232,99,43,.3)}
        .tools-author-strip .author-info{flex:1;min-width:0}
        .tools-author-strip .name{font-weight:700;color:var(--tx);font-size:.95rem;margin-bottom:3px}
        .tools-author-strip .meta-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.8rem;margin-bottom:2px}
        .tools-author-strip .date-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.78rem;color:var(--tm)}
        .tools-author-strip .dot{opacity:.3}
        .tools-share-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;width:100%}
        .tools-share-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:.75rem;font-weight:600;border:1px solid var(--bs);background:rgba(255,255,255,.04);color:var(--tm);transition:all .2s;cursor:pointer}
        .tools-share-btn:hover{border-color:var(--cy);color:var(--cy)}
        .tools-stats-bar{display:flex;gap:0;border:1px solid var(--bs);border-radius:16px;overflow:hidden;margin:40px 0 0;background:var(--bgc)}
        .tools-stat{flex:1;padding:20px 24px;text-align:center;border-right:1px solid var(--bs)}
        .tools-stat:last-child{border-right:none}
        .tools-stat .n{font-size:1.7rem;font-weight:900;color:var(--cy);line-height:1}
        .tools-stat .l{font-size:.72rem;color:var(--tm);margin-top:4px;font-weight:500}
        .art-wrap{max-width:1160px;margin:0 auto;padding:56px 24px 80px;display:grid;grid-template-columns:1fr 280px;gap:48px;align-items:start}
        .art{font-size:1.02rem;line-height:1.8;color:var(--tb);min-width:0}
        .art p{margin-bottom:1.3em}
        .art h2{font-size:1.55rem;font-weight:800;color:var(--tx);margin:2.4em 0 .7em;letter-spacing:-.02em;padding-bottom:.5em;border-bottom:1px solid var(--bs)}
        .art h3{font-size:1.15rem;font-weight:700;color:var(--cy);margin:1.8em 0 .5em}
        .art strong{color:var(--tx);font-weight:700}
        .art ul,.art ol{padding-left:1.5em;margin-bottom:1.3em}
        .art li{margin-bottom:.5em}
        .art a{color:var(--cy);text-decoration:underline;text-decoration-color:rgba(232,99,43,.35);transition:all .2s}
        .art a:hover{text-decoration-color:var(--cy)}
        .question-card{background:var(--bgc);border:1px solid var(--bs);border-radius:16px;padding:26px 28px;margin:1.4em 0;position:relative;overflow:hidden;transition:border-color .3s}
        .question-card:hover{border-color:var(--bo)}
        .question-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#E8632B,#FF8A50)}
        .question-num{position:absolute;top:22px;right:24px;font-size:2.5rem;font-weight:900;color:rgba(232,99,43,.08);line-height:1}
        .question-title{font-size:1.05rem;font-weight:800;color:var(--tx);margin-bottom:10px}
        .question-body{font-size:.97rem;line-height:1.75;color:var(--tb)}
        .redflag-card{background:rgba(239,68,68,.04);border:1px solid rgba(239,68,68,.18);border-left:3px solid #EF4444;border-radius:0 12px 12px 0;padding:20px 24px;margin:2em 0}
        .redflag-card strong{color:#EF4444;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:12px}
        .redflag-card li{font-size:.9rem;color:var(--tb);line-height:1.65;margin-bottom:.5em;padding-left:.5em}
        .redflag-card ul{padding-left:1.4em;margin:0}
        .pro-tip{background:rgba(245,158,11,.05);border:1px solid rgba(245,158,11,.2);border-left:3px solid #F59E0B;border-radius:0 12px 12px 0;padding:16px 22px;margin:2em 0}
        .pro-tip strong{color:#F59E0B;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:8px}
        .pro-tip p{font-size:.9rem;color:var(--tb);line-height:1.65;margin:0}
        .sc-table{width:100%;border-collapse:collapse;margin:1.5em 0;font-size:.88rem}
        .sc-table th{background:rgba(232,99,43,.08);color:var(--cy);font-weight:700;padding:10px 16px;text-align:left;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;border-bottom:2px solid rgba(232,99,43,.2)}
        .sc-table td{padding:11px 16px;border-bottom:1px solid var(--bs);vertical-align:top;color:var(--tb)}
        .sc-table tr:last-child td{border-bottom:none}
        .sc-table tr:hover td{background:rgba(255,255,255,.02)}
        .sc-table td:first-child{font-weight:700;color:var(--tx)}
        .sc-table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5em 0;border-radius:8px}
        .sc-table-wrap .sc-table{margin:0}
        .yes-badge{display:inline-block;padding:2px 9px;background:rgba(16,185,129,.12);border:1px solid rgba(16,185,129,.25);border-radius:100px;font-size:.72rem;font-weight:700;color:#34D399}
        .no-badge{display:inline-block;padding:2px 9px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.22);border-radius:100px;font-size:.72rem;font-weight:700;color:#FCA5A5}
        .ok-badge{display:inline-block;padding:2px 9px;background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.22);border-radius:100px;font-size:.72rem;font-weight:700;color:#FCD34D}
        .scorecard{background:var(--bgc);border:1px solid var(--bo);border-radius:16px;padding:28px;margin:2em 0}
        .scorecard h3{font-size:1.05rem;font-weight:800;color:var(--tx);margin-bottom:16px}
        .score-item{display:flex;gap:14px;padding:12px 0;border-bottom:1px solid var(--bs);align-items:flex-start}
        .score-item:last-child{border-bottom:none}
        .score-icon{width:30px;height:30px;border-radius:8px;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.25);display:flex;align-items:center;justify-content:center;font-size:.9rem;flex-shrink:0;margin-top:1px}
        .score-dim{font-size:.92rem;font-weight:700;color:var(--tx);margin-bottom:3px}
        .score-desc{font-size:.84rem;color:var(--tm);line-height:1.6}
        .pull-quote{border-left:3px solid var(--cy);padding:16px 24px;margin:2em 0;background:rgba(232,99,43,.04);border-radius:0 12px 12px 0}
        .pull-quote p{font-size:1.05rem;font-style:italic;color:var(--tx);line-height:1.65;margin:0}
        .pull-quote cite{display:block;font-size:.8rem;color:var(--tm);margin-top:10px;font-style:normal}
        .contract-warn{background:rgba(239,68,68,.04);border:1px solid rgba(239,68,68,.15);border-radius:12px;padding:20px 22px;margin:2em 0}
        .contract-warn strong{color:#EF4444;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:10px}
        .contract-warn p{font-size:.9rem;color:var(--tb);line-height:1.7;margin-bottom:.7em}
        .contract-warn p:last-child{margin-bottom:0}
        .non-neg{background:rgba(16,185,129,.05);border:1px solid rgba(16,185,129,.18);border-radius:12px;padding:16px 20px;margin:1.5em 0}
        .non-neg strong{color:#34D399;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:8px}
        .non-neg p{font-size:.88rem;color:#A7F3D0;line-height:1.65;margin:0}
        .art-cta{background:linear-gradient(135deg,rgba(232,99,43,.12),rgba(232,99,43,.06));border:1px solid rgba(232,99,43,.25);border-radius:16px;padding:32px 28px;margin:3em 0;text-align:center}
        .art-cta h3{font-size:1.25rem;font-weight:800;color:var(--tx);margin-bottom:10px}
        .art-cta p{font-size:.92rem;color:var(--tm);margin-bottom:20px;line-height:1.6}
        .art-cta a{display:inline-flex;align-items:center;gap:8px;padding:12px 28px;background:linear-gradient(135deg,#E8632B,#FF8A50);color:#fff;font-weight:700;font-size:.9rem;border-radius:100px;transition:all .3s;box-shadow:0 6px 24px rgba(232,99,43,.3)}
        .art-cta a:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgba(232,99,43,.4);text-decoration:none}
        .faq-section{margin:3em 0}
        .faq-section h2{font-size:1.4rem;font-weight:800;color:var(--tx);margin-bottom:1em;padding-bottom:.5em;border-bottom:1px solid var(--bs)}
        .faq-item{border:1px solid var(--bs);border-radius:12px;margin-bottom:10px;overflow:hidden;transition:border-color .3s}
        .faq-item.open{border-color:var(--bo)}
        .faq-question{background:var(--bgc);color:var(--tx);border:none;width:100%;text-align:left;padding:16px 20px;font-size:.95rem;font-weight:600;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:var(--sans);transition:background .2s}
        .faq-question:hover{background:var(--bgc2)}
        .faq-icon{color:var(--cy);font-size:1.2rem;font-weight:300;flex-shrink:0;margin-left:12px;transition:transform .3s}
        .faq-item.open .faq-icon{transform:rotate(45deg)}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height .4s ease}
        .faq-item.open .faq-answer{max-height:400px}
        .faq-answer-inner{padding:0 20px 16px;font-size:.9rem;color:var(--tm);line-height:1.7}
        .sidebar{position:sticky;top:88px;display:flex;flex-direction:column;gap:20px}
        .sidebar-card{background:var(--bgc);border:1px solid var(--bs);border-radius:14px;padding:20px}
        .sidebar-card h4{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--cy);margin-bottom:14px}
        .toc-link{display:block;font-size:.82rem;color:var(--tm);padding:5px 0 5px 12px;border-left:2px solid transparent;transition:all .2s;line-height:1.4}
        .toc-link:hover,.toc-link.active{color:var(--tx);border-left-color:var(--cy)}
        .sidebar-tags{display:flex;flex-wrap:wrap;gap:7px}
        .sidebar-tag{padding:4px 10px;background:rgba(255,255,255,.05);border:1px solid var(--bs);border-radius:100px;font-size:.72rem;color:var(--tm);transition:all .2s}
        .sidebar-tag:hover{border-color:var(--cy);color:var(--cy)}
        .sidebar-cta{background:linear-gradient(135deg,rgba(232,99,43,.15),rgba(232,99,43,.07));border:1px solid rgba(232,99,43,.25);border-radius:14px;padding:20px;text-align:center}
        .sidebar-cta p{font-size:.83rem;color:var(--tm);margin-bottom:14px;line-height:1.55}
        .sidebar-cta a{display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:linear-gradient(135deg,#E8632B,#FF8A50);color:#fff;font-weight:700;font-size:.8rem;border-radius:100px;transition:all .3s}
        .sidebar-cta a:hover{transform:translateY(-1px);text-decoration:none}
        #btt{position:fixed;bottom:28px;right:28px;width:42px;height:42px;background:#E8632B;color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(232,99,43,.4);opacity:0;transform:translateY(12px);transition:all .3s;pointer-events:none;z-index:999}
        #btt.vis{opacity:1;transform:translateY(0);pointer-events:auto}
        .b-figure{margin:2em 0;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.06)}
        .b-figure img{width:100%;display:block;height:260px;object-fit:cover;filter:brightness(.92)}
        .b-figure figcaption{background:#0B1120;padding:12px 18px;font-size:.8rem;color:#94A3B8;line-height:1.55;border-top:1px solid rgba(255,255,255,.06)}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .anim{animation:fadeUp .6s ease both}
        @media(max-width:900px){.art-wrap{grid-template-columns:1fr}.sidebar{display:none}.tools-stats-bar{flex-wrap:wrap}.tools-stat{min-width:50%;flex:1 1 50%}}
        @media(max-width:600px){.tools-hero-h1{font-size:1.65rem}.tools-author-strip{flex-direction:column;align-items:flex-start;gap:12px}.tools-stat{min-width:100%;flex:1 1 100%}.sc-table{font-size:.78rem}.sc-table th,.sc-table td{padding:8px 10px}}
        @media(max-width:480px){.tools-hero-h1{font-size:1.45rem}.tools-hero-inner{padding:0 16px}.art-wrap{padding:40px 16px 60px}.tools-share-btn{padding:5px 10px;font-size:.72rem}}
      `}</style>

      <div id="reading-progress" aria-hidden="true" />

      <header className="tools-hero-wrap">
        <div className="tools-hero-inner">
          <nav className="tools-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/resources">Resources</Link><span>/</span>
            <Link href="/resources/blog">Blog</Link><span>/</span>
            <span>Vendor Risk</span>
          </nav>
          <div className="tools-cat-badge">🛡️ Vendor Risk</div>
          <h1 className="tools-hero-h1">How to Evaluate Your<br /><span className="acc">Security Vendor</span><br />Without Getting Burned</h1>
          <p className="tools-hero-sub">Choosing the wrong security vendor doesn&apos;t just cost you money — it can cost you your ISO 27001 certification, your SOC 2 audit, and in the worst cases, your customers&apos; trust. Here is how to cut through the sales noise and make a decision you won&apos;t regret.</p>
          <div className="tools-author-strip">
            <div className="avatar">AH</div>
            <div className="author-info">
              <div className="name">Aditya Hadke</div>
              <div className="meta-row">
                <span style={{color:'var(--cy)',fontWeight:600}}>✍️ Project Delivery Lead</span>
                <span className="dot">·</span>
                <span id="read-time">📖 7 min read</span>
              </div>
              <div className="date-row">
                <span>📅 March 2026</span><span className="dot">·</span><span>🏢 SecComply</span>
              </div>
            </div>
            <div className="tools-share-row">
              <a id="sl" href="#" target="_blank" rel="noopener noreferrer" className="tools-share-btn">🔗 LinkedIn</a>
              <a id="st" href="#" target="_blank" rel="noopener noreferrer" className="tools-share-btn">🐦 Twitter</a>
              <button onClick={() => window.copyLink && window.copyLink()} className="tools-share-btn">📋 Copy Link</button>
            </div>
          </div>
          <div className="tools-stats-bar">
            <div className="tools-stat"><div className="n">68%</div><div className="l">Orgs hit by a vendor-caused security incident</div></div>
            <div className="tools-stat"><div className="n">4.3x</div><div className="l">More likely to breach when due diligence skipped</div></div>
            <div className="tools-stat"><div className="n">$245K</div><div className="l">Avg cost of a vendor-related incident</div></div>
            <div className="tools-stat"><div className="n">4%</div><div className="l">Max GDPR fine as % of annual global turnover</div></div>
          </div>
        </div>
      </header>

      <div className="art-wrap">
        <article className="art">

          <p>Here is a scenario that plays out every week in companies of all sizes. A CISO gets 30 minutes with a vendor rep. The demo is slick. The pricing deck is surprisingly reasonable. Someone mentions a competitor is already using this tool. A purchase order is raised three weeks later. Six months on, the tool sits half-configured, the vendor&apos;s support team takes four days to respond to critical tickets, and the ISO 27001 auditor is asking pointed questions about a control gap the tool was supposed to close.</p>
          <p>The problem is almost never the product itself. It is that the evaluation process was designed around the vendor&apos;s sales cycle rather than your actual security needs.</p>

          <div className="pull-quote">
            <p>&ldquo;Most organisations evaluate security vendors the same way they&apos;d buy software — based on features and price. That&apos;s the wrong framework entirely. You&apos;re not buying a feature set. You&apos;re entering a long-term risk relationship with a company that will have deep access to your most sensitive infrastructure.&rdquo;</p>
            <cite>— Aditya Hadke, Project Delivery Lead, SecComply</cite>
          </div>

          <figure className="b-figure anim">
            <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=520&fit=crop" alt="Security vendor due diligence meeting and contract review" loading="lazy" />
            <figcaption>Vendor evaluation done right means asking the questions vendors don&apos;t expect — the ones that surface actual risk rather than showcasing the product.</figcaption>
          </figure>

          <section id="questions">
            <h2>The Questions You Must Ask Before Any Demo</h2>
            <p>Before you ever sit through a demo, you should have a structured set of questions ready — not the questions vendors expect, but the ones that actually surface risk.</p>

            <div className="question-card anim">
              <div className="question-num">01</div>
              <div className="question-title">What data do you access, store, and process — and where does it live?</div>
              <div className="question-body">This sounds obvious but vendors routinely underplay data residency. If you are under GDPR, DPDP, or HIPAA, you need to know exactly where your data is processed and who has access to it internally at the vendor. &ldquo;We&apos;re cloud-hosted&rdquo; is not an answer.</div>
            </div>

            <div className="question-card anim">
              <div className="question-num">02</div>
              <div className="question-title">Walk me through your last security incident.</div>
              <div className="question-body">Every mature vendor has had incidents. The ones worth trusting are the ones who can talk about them clearly — what went wrong, how fast they responded, how they communicated with customers, and what changed afterward. Evasion here is a serious red flag.</div>
            </div>

            <div className="question-card anim">
              <div className="question-num">03</div>
              <div className="question-title">What frameworks are you certified against, and can I see the audit report?</div>
              <div className="question-body">ISO 27001 and SOC 2 Type II are the baseline you should expect. But do not just accept the badge — ask for the actual audit report or at minimum the management letter. A SOC 2 Type I from 2021 tells you almost nothing about their current posture.</div>
            </div>

            <div className="question-card anim">
              <div className="question-num">04</div>
              <div className="question-title">Who are your sub-processors and what is your vendor risk management process?</div>
              <div className="question-body">Your vendor&apos;s vendor is your problem too. Ask for a sub-processor list and ask how they assess and monitor those third parties. If they cannot produce this document, that is itself the answer.</div>
            </div>

            <div className="question-card anim">
              <div className="question-num">05</div>
              <div className="question-title">What is your patch and vulnerability management cycle?</div>
              <div className="question-body">How quickly do they apply critical patches to their own infrastructure? What is their SLA for remediating high-severity CVEs? A vendor who takes 90 days to patch a critical vulnerability in their own stack is not a vendor you can trust with yours.</div>
            </div>
          </section>

          <section id="certifications">
            <h2>What Certifications Actually Mean</h2>
            <p>Security certifications have become a bit like hygiene badges — everyone has them, but they do not all mean the same thing.</p>
            <div className="sc-table-wrap">
              <table className="sc-table">
                <thead>
                  <tr>
                    <th>Certification</th>
                    <th>What It Means</th>
                    <th>What It Doesn&apos;t Mean</th>
                    <th>Require?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>ISO 27001</td><td>Documented ISMS reviewed by an accredited auditor</td><td>That every control is watertight or continuously monitored</td><td><span className="yes-badge">✓ Yes</span></td></tr>
                  <tr><td>SOC 2 Type II</td><td>Controls tested over 6–12 months, not a point in time</td><td>That scope covers everything you care about</td><td><span className="yes-badge">✓ Yes — prefer Type II</span></td></tr>
                  <tr><td>SOC 2 Type I</td><td>Controls existed at a single point in time</td><td>That they work consistently under real conditions</td><td><span className="ok-badge">⚡ Acceptable if recent</span></td></tr>
                  <tr><td>Pen Test Report</td><td>A third party actively tried to break them</td><td>That findings were fully remediated</td><td><span className="yes-badge">✓ Ask for remediation summary</span></td></tr>
                  <tr><td>GDPR/HIPAA &apos;Compliant&apos;</td><td>Usually just a self-assessment</td><td>Formal certification (neither framework has one)</td><td><span className="no-badge">✗ Ask for DPA/BAA instead</span></td></tr>
                </tbody>
              </table>
            </div>
            <div className="pro-tip">
              <strong>💡 Pro Tip</strong>
              <p>Always ask for the SOC 2 report&apos;s scope section first. Vendors sometimes get SOC 2 certified for a narrow slice of their infrastructure — not the systems that actually handle your data. Scope gaps are one of the most common ways vendors technically hold a certification that does not apply to how you use them.</p>
            </div>
          </section>

          <section id="red-flags">
            <h2>Red Flags That Are Easy to Miss</h2>
            <figure className="b-figure anim">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=520&fit=crop" alt="Contract review red flags for security vendors" loading="lazy" />
              <figcaption>The subtler red flags often appear in the contract rather than the conversation — this is where vendors embed language that shifts risk back to you.</figcaption>
            </figure>
            <div className="redflag-card">
              <strong>🚩 Red Flags to Watch For</strong>
              <ul>
                <li>They refuse to share their SOC 2 report without a custom NDA that takes weeks to negotiate</li>
                <li>Their certifications are more than 18 months old and they cannot explain why</li>
                <li>They have no written sub-processor list, or it has not been updated since last year</li>
                <li>Support SLAs are buried in appendices and worded to give them maximum wiggle room</li>
                <li>They cannot name a specific person responsible for your account&apos;s security incidents</li>
                <li>The security questionnaire goes to their sales team, not their security team</li>
                <li>They promise compliance with your framework but cannot map their controls to it</li>
                <li>Their breach notification clause gives them 72 hours or more to notify you</li>
              </ul>
            </div>
          </section>

          <section id="scorecard">
            <h2>The Evaluation Scorecard</h2>
            <p>Use this framework to score vendors consistently across the dimensions that actually matter. Apply it across every vendor to create a true apples-to-apples comparison.</p>
            <div className="scorecard anim">
              <h3>✅ Vendor Evaluation Dimensions</h3>
              {[
                ['Certifications', 'ISO 27001 and SOC 2 Type II — current, in-scope, available on request without friction'],
                ['Data Residency & Sub-Processors', 'Documented, compliant with your regulatory obligations (GDPR, DPDP, HIPAA)'],
                ['Incident History & Response', 'Clear, tested incident response process — they can describe a real incident and what changed'],
                ['Penetration Testing', 'Annual third-party tests with evidence of remediation, not just findings'],
                ['SLA & Support Quality', 'Enforceable SLAs for critical issues, dedicated security contacts, not a shared queue'],
                ['Contractual Protections', 'DPA/BAA in place, breach notification ≤48 hours, reasonable liability cap'],
                ['Business Continuity', 'Tested BCP/DR plan, uptime SLA with transparent incident history'],
              ].map(([dim, desc]) => (
                <div key={dim} className="score-item">
                  <div className="score-icon">✓</div>
                  <div><div className="score-dim">{dim}</div><div className="score-desc">{desc}</div></div>
                </div>
              ))}
            </div>
          </section>

          <section id="contract">
            <h2>Getting the Contract Right</h2>
            <p>Even if a vendor checks every box in the evaluation, the contract is where things can quietly go wrong. These are the clauses that matter most from a security and compliance standpoint.</p>
            <div className="contract-warn">
              <strong>⚠️ Watch These Contract Clauses</strong>
              <p>Limitation of liability clauses that cap vendor exposure to one month of fees are extremely common and extremely dangerous. If a vendor breach results in a regulatory fine under GDPR, that fine can reach 4% of your global annual turnover. One month of SaaS fees will not touch it. Push for reasonable liability coverage tied to actual harm — or seek cyber insurance that explicitly covers third-party vendor incidents.</p>
              <p>The most important contractual element for compliance-focused organisations is the Data Processing Agreement (DPA) or Business Associate Agreement (BAA) under HIPAA. Without a valid DPA, you are technically in breach of GDPR every time personal data flows to that vendor.</p>
            </div>
            <div className="non-neg">
              <strong>✅ Non-Negotiable Contract Items</strong>
              <p>Breach notification within 48 hours · Explicit right to audit · Sub-processor change notification with 30+ days notice · Data deletion on contract termination within 30 days with written certification · Liability coverage that reflects actual risk exposure rather than one month of fees</p>
            </div>
          </section>

          <div className="art-cta anim">
            <h3>Not sure if your vendors are actually secure?</h3>
            <p>SecComply&apos;s third-party risk assessments help you build a vendor program that satisfies ISO 27001 Annex A and SOC 2 — and actually protects your organisation.</p>
            <a href="/contact">Book a Free Consultation →</a>
          </div>

          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            {[
              ['How often should we re-evaluate existing security vendors?', 'At minimum annually — and immediately when a vendor has a known security incident, changes ownership, or substantially changes how they process your data. ISO 27001 explicitly requires ongoing supplier management, not just initial due diligence.'],
              ['Is a SOC 2 Type I report enough for an ISO 27001 audit?', 'It can satisfy the requirement to evidence third-party assessment, but your auditor will ask pointed questions about scope and recency. SOC 2 Type II is significantly stronger evidence because it demonstrates controls working over time, not just existing at a point in time.'],
              ['What if a critical vendor refuses to complete our security questionnaire?', 'If they hold a current SOC 2 Type II report covering your use case, that report often substitutes for a questionnaire response. If they refuse both, that refusal must be documented in your vendor risk register with compensating controls noted — or escalated to a leadership decision about whether the relationship is tenable.'],
              ['Do we need a DPA with every vendor we use?', 'Under GDPR and India\'s DPDP Act, yes — for any vendor who processes personal data on your behalf as a data processor. This includes cloud storage, CRM platforms, email tools, and analytics platforms. A data flow mapping exercise usually surfaces a long list of vendors who need formal DPAs.'],
            ].map(([q, a], i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={e => window.toggleFaq && window.toggleFaq(e.currentTarget)}>{q}<span className="faq-icon">+</span></button>
                <div className="faq-answer"><div className="faq-answer-inner">{a}</div></div>
              </div>
            ))}
          </div>

        </article>

        <aside className="sidebar">
          <div className="sidebar-card">
            <h4>In This Article</h4>
            <a href="#questions" className="toc-link">5 Questions to Ask Before Any Demo</a>
            <a href="#certifications" className="toc-link">What Certifications Actually Mean</a>
            <a href="#red-flags" className="toc-link">Red Flags That Are Easy to Miss</a>
            <a href="#scorecard" className="toc-link">The Evaluation Scorecard</a>
            <a href="#contract" className="toc-link">Getting the Contract Right</a>
          </div>
          <div className="sidebar-cta">
            <h4 style={{fontSize:'.85rem',fontWeight:700,color:'var(--tx)',marginBottom:8}}>Vendor Risk Assessment</h4>
            <p>Build a vendor program that satisfies ISO 27001 Annex A and SOC 2 — not just a one-off checklist.</p>
            <a href="/contact">Book a Free Consultation →</a>
          </div>
          <div className="sidebar-card">
            <h4>Related Posts</h4>
            <a href="/resources/blog/soc2-vs-iso27001" className="toc-link">📋 SOC 2 vs ISO 27001</a>
            <a href="/resources/blog/soc2-type1-vs-type2" className="toc-link">📋 SOC 2 Type I vs Type II</a>
            <a href="/resources/blog/cost-of-non-compliance" className="toc-link">💰 True Cost of Non-Compliance</a>
          </div>
          <div className="sidebar-card">
            <h4>Tags</h4>
            <div className="sidebar-tags">
              {['Vendor Risk','ISO 27001','SOC 2','GDPR','DPDP Act','Third-Party Risk','DPA','Due Diligence'].map(t => (
                <span key={t} className="sidebar-tag">{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
