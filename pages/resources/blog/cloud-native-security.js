import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function CloudNativeSecurity() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/cloud-native-security');
      const ttl = encodeURIComponent('Cloud-Native Security: Key Concepts Every Team Must Know, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/cloud-native-security'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
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
        "headline": "Cloud-Native Security: Key Concepts Every Team Must Know in 2025",
        "description": "From containers to microservices, Zero Trust to DevSecOps, a complete guide to securing modern cloud-native environments and achieving continuous compliance across ISO 27001, SOC 2, HIPAA, and GDPR.",
        "image": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/blog/cloud-native-security.png", "width": 1200, "height": 630, "caption": "Cloud-native security concepts 2025, containers, Kubernetes, Zero Trust, DevSecOps, CSPM" },
        "author": { "@type": "Person", "name": "Soham Sawant", "jobTitle": "Cybersecurity Expert & Technical Writer", "description": "Soham Sawant is a cybersecurity expert and technical writer at SecComply. With deep expertise spanning cloud security architecture, compliance automation, and threat intelligence, Soham writes at the intersection of rigorous technical accuracy and compelling narrative.", "worksFor": { "@type": "Organization", "name": "SecComply" } },
        "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } },
        "datePublished": "2025-06-01", "dateModified": "2025-06-01",
        "mainEntityOfPage": "https://seccomply.net/resources/blog/cloud-native-security",
        "articleSection": "Cloud Security", "inLanguage": "en-IN", "timeRequired": "PT6M", "wordCount": 1900,
        "keywords": "cloud-native security, CSPM, Zero Trust, DevSecOps, Kubernetes security, container security, ISO 27001 cloud, SOC 2 cloud, HIPAA cloud compliance, supply chain security, 4C model"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is cloud-native security?", "acceptedAnswer": { "@type": "Answer", "text": "Cloud-native security is a security approach designed specifically for environments built on containers, microservices, Kubernetes, and serverless technologies. It shifts security left, embedding controls into the development and deployment pipeline rather than relying on a network perimeter boundary." } },
          { "@type": "Question", "name": "What is the difference between cloud security and cloud-native security?", "acceptedAnswer": { "@type": "Answer", "text": "Cloud security is a broad term covering all security practices in cloud environments. Cloud-native security specifically addresses the unique challenges of containers, Kubernetes, and CI/CD pipelines, technologies with fundamentally different threat models compared to traditional virtual machines and monolithic applications." } },
          { "@type": "Question", "name": "What is CSPM and why do organisations need it?", "acceptedAnswer": { "@type": "Answer", "text": "CSPM (Cloud Security Posture Management) continuously monitors your cloud infrastructure against security benchmarks and compliance frameworks, identifying misconfigurations in real time. Organisations need it because 82% of cloud breaches are caused by misconfiguration, not sophisticated exploits, and manual reviews cannot keep pace with the rate of infrastructure change in cloud-native environments." } },
          { "@type": "Question", "name": "How does cloud-native security support ISO 27001 certification?", "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001 requires demonstrable controls across access management (Annex A.9), operations security (A.12), and secure development (A.14). Cloud-native practices directly produce the required evidence: CSPM generates continuous configuration records, DevSecOps pipeline logs demonstrate secure development lifecycle, and Zero Trust IAM policies satisfy access control requirements." } },
          { "@type": "Question", "name": "Where should an organisation start with cloud-native security?", "acceptedAnswer": { "@type": "Answer", "text": "Start with visibility. Deploy a CSPM tool to get a complete inventory of all cloud resources and an honest assessment of your current misconfiguration risk. From that baseline, prioritise by severity and blast radius, internet-facing resources with sensitive data first. Then layer in Kubernetes hardening, DevSecOps pipeline integration, and Zero Trust IAM policies." } }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
          { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
          { "@type": "ListItem", "position": 4, "name": "Cloud-Native Security", "item": "https://seccomply.net/resources/blog/cloud-native-security" }
        ]
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Cloud-Native Security: Key Concepts Every Team Must Know in 2025 | SecComply</title>
        <meta name="description" content="From containers to microservices, Zero Trust to DevSecOps, a complete guide to securing modern cloud-native environments and achieving continuous compliance across ISO 27001, SOC 2, HIPAA, and GDPR." />
        <meta name="keywords" content="cloud-native security 2025, CSPM cloud security posture management, Zero Trust architecture, DevSecOps pipeline, Kubernetes security hardening, container security, ISO 27001 cloud compliance, SOC 2 cloud, HIPAA GDPR cloud, supply chain security SBOM, 4C model" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Soham Sawant" /><meta name="language" content="en-IN" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/cloud-native-security" />
        <link rel="icon" href="/favicon.ico" /><link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#020617" /><meta charSet="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Cloud-Native Security: Key Concepts Every Team Must Know in 2025" />
        <meta property="og:description" content="82% of cloud breaches are caused by misconfiguration, not exploits. A complete guide to the 4C model, Zero Trust, DevSecOps, Kubernetes hardening, CSPM, and supply chain security." />
        <meta property="og:url" content="https://seccomply.net/resources/blog/cloud-native-security" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/cloud-native-security.png" />
        <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Cloud-native security concepts 2025, Zero Trust, Kubernetes, CSPM, DevSecOps" />
        <meta property="og:site_name" content="SecComply" /><meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content="2025-06-01T08:00:00+05:30" />
        <meta property="article:modified_time" content="2025-06-01T08:00:00+05:30" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:section" content="Cloud Security" />
        <meta property="article:tag" content="Cloud Security" /><meta property="article:tag" content="Zero Trust" /><meta property="article:tag" content="Kubernetes" /><meta property="article:tag" content="ISO 27001" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@seccomply" /><meta name="twitter:creator" content="@seccomply" />
        <meta name="twitter:title" content="Cloud-Native Security: Key Concepts Every Team Must Know in 2025" />
        <meta name="twitter:description" content="82% of cloud breaches are caused by misconfiguration. Here is the complete guide to cloud-native security, 4C model, Zero Trust, Kubernetes, CSPM." />
        <meta name="twitter:image" content="https://seccomply.net/assets/images/blog/cloud-native-security.png" />
        <meta name="twitter:image:alt" content="Cloud-native security 2025 guide" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        :root{--cy:#E8632B;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#F8FAFC;--tb:#E2E8F0;--tm:#94A3B8;--bo:rgba(232,99,43,.2);--bs:rgba(255,255,255,.06);--gr:#10B981;--am:#F59E0B;--bl:#38BDF8;--sans:'Inter',sans-serif;--mono:'JetBrains Mono',monospace}
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
        .pull-quote{border-left:3px solid var(--cy);padding:16px 24px;margin:2em 0;background:rgba(232,99,43,.04);border-radius:0 12px 12px 0}
        .pull-quote p{font-size:1.05rem;font-style:italic;color:var(--tx);line-height:1.65;margin:0}
        .pull-quote cite{display:block;font-size:.8rem;color:var(--tm);margin-top:10px;font-style:normal}
        .four-c-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:2em 0}
        .four-c-card{background:var(--bgc);border:1px solid var(--bs);border-radius:14px;padding:22px;transition:border-color .3s;position:relative;overflow:hidden}
        .four-c-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#E8632B,#FF8A50)}
        .four-c-card:hover{border-color:var(--bo)}
        .four-c-label{font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--cy);margin-bottom:8px}
        .four-c-title{font-size:1rem;font-weight:800;color:var(--tx);margin-bottom:8px}
        .four-c-body{font-size:.88rem;color:var(--tb);line-height:1.65}
        .concept-card{background:var(--bgc);border:1px solid var(--bs);border-radius:16px;padding:26px 28px;margin:1.4em 0;position:relative;overflow:hidden;transition:border-color .3s}
        .concept-card:hover{border-color:var(--bo)}
        .concept-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#E8632B,#FF8A50)}
        .concept-title{font-size:1.05rem;font-weight:800;color:var(--tx);margin-bottom:10px}
        .concept-body{font-size:.97rem;line-height:1.75;color:var(--tb)}
        .def-box{background:rgba(56,189,248,.05);border:1px solid rgba(56,189,248,.15);border-left:3px solid #38BDF8;border-radius:0 12px 12px 0;padding:18px 22px;margin:2em 0}
        .def-box strong{color:#38BDF8;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:10px}
        .def-box p{font-size:.9rem;color:var(--tb);line-height:1.65;margin-bottom:.5em}
        .def-box p:last-child{margin-bottom:0}
        .warn-box{background:rgba(239,68,68,.04);border:1px solid rgba(239,68,68,.15);border-left:3px solid #EF4444;border-radius:0 12px 12px 0;padding:16px 22px;margin:2em 0}
        .warn-box strong{color:#EF4444;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:8px}
        .warn-box p{font-size:.9rem;color:var(--tb);line-height:1.65;margin:0}
        .insight-box{background:rgba(99,102,241,.05);border:1px solid rgba(99,102,241,.18);border-left:3px solid #818CF8;border-radius:0 12px 12px 0;padding:16px 22px;margin:2em 0}
        .insight-box strong{color:#818CF8;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:8px}
        .insight-box p{font-size:.9rem;color:var(--tb);line-height:1.65;margin:0}
        .compliance-note{background:rgba(232,99,43,.05);border:1px solid rgba(232,99,43,.18);border-left:3px solid var(--cy);border-radius:0 12px 12px 0;padding:16px 22px;margin:2em 0}
        .compliance-note strong{color:var(--cy);font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:8px}
        .compliance-note p{font-size:.9rem;color:var(--tb);line-height:1.65;margin:0}
        .sc-table{width:100%;border-collapse:collapse;margin:1.5em 0;font-size:.88rem}
        .sc-table th{background:rgba(232,99,43,.08);color:var(--cy);font-weight:700;padding:10px 16px;text-align:left;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;border-bottom:2px solid rgba(232,99,43,.2)}
        .sc-table td{padding:11px 16px;border-bottom:1px solid var(--bs);vertical-align:top;color:var(--tb)}
        .sc-table tr:last-child td{border-bottom:none}
        .sc-table tr:hover td{background:rgba(255,255,255,.02)}
        .sc-table td:first-child{font-weight:700;color:var(--tx)}
        .sc-table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5em 0;border-radius:8px}
        .sc-table-wrap .sc-table{margin:0}
        .author-bio{background:var(--bgc);border:1px solid var(--bs);border-radius:16px;padding:28px;margin:3em 0;display:flex;gap:20px;align-items:flex-start}
        .author-bio .bio-avatar{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#E8632B,#FF8A50);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(232,99,43,.3)}
        .author-bio .bio-content h4{font-size:1rem;font-weight:800;color:var(--tx);margin-bottom:4px}
        .author-bio .bio-content .bio-title{font-size:.8rem;color:var(--cy);font-weight:600;margin-bottom:10px}
        .author-bio .bio-content p{font-size:.88rem;color:var(--tm);line-height:1.7;margin:0}
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
        code{background:#1E293B;color:#38BDF8;padding:2px 7px;border-radius:5px;font-size:.88rem;font-family:var(--mono)}
        @media(max-width:900px){.art-wrap{grid-template-columns:1fr}.sidebar{display:none}.tools-stats-bar{flex-wrap:wrap}.tools-stat{min-width:50%;flex:1 1 50%}.four-c-grid{grid-template-columns:1fr}}
        @media(max-width:600px){.tools-hero-h1{font-size:1.65rem}.tools-author-strip{flex-direction:column;align-items:flex-start;gap:12px}.tools-stat{min-width:100%;flex:1 1 100%}.sc-table{font-size:.78rem}.sc-table th,.sc-table td{padding:8px 10px}.author-bio{flex-direction:column}}
        @media(max-width:480px){.tools-hero-h1{font-size:1.45rem}.tools-hero-inner{padding:0 16px}.art-wrap{padding:40px 16px 60px}.tools-share-btn{padding:5px 10px;font-size:.72rem}}
      `}</style>

      <div id="reading-progress" aria-hidden="true" />

      <header className="tools-hero-wrap">
        <div className="tools-hero-inner">
          <nav className="tools-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/resources">Resources</Link><span>/</span>
            <Link href="/resources/blog">Blog</Link><span>/</span>
            <span>Cloud Security</span>
          </nav>
          <div className="tools-cat-badge">☁️ Cloud Security</div>
          <h1 className="tools-hero-h1"><span className="acc">Cloud-Native Security</span>:<br />Key Concepts Every Team Must Know</h1>
          <p className="tools-hero-sub">From containers to microservices, Zero Trust to DevSecOps, a complete guide to securing modern cloud-native environments and achieving continuous compliance across ISO 27001, SOC 2, HIPAA, and GDPR.</p>
          <div className="tools-author-strip">
            <div className="avatar">SS</div>
            <div className="author-info">
              <div className="name">Soham Sawant</div>
              <div className="meta-row">
                <span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span>
                <span className="dot">·</span>
                <span id="read-time">📖 6 min read</span>
              </div>
              <div className="date-row">
                <span>📅 June 2025</span><span className="dot">·</span><span>🏢 SecComply</span>
              </div>
            </div>
            <div className="tools-share-row">
              <a id="sl" href="#" target="_blank" rel="noopener noreferrer" className="tools-share-btn">🔗 LinkedIn</a>
              <a id="st" href="#" target="_blank" rel="noopener noreferrer" className="tools-share-btn">🐦 Twitter</a>
              <button onClick={() => window.copyLink && window.copyLink()} className="tools-share-btn">📋 Copy Link</button>
            </div>
          </div>
          <div className="tools-stats-bar">
            <div className="tools-stat"><div className="n">94%</div><div className="l">Enterprises now run cloud-native workloads</div></div>
            <div className="tools-stat"><div className="n">$4.5M</div><div className="l">Average cost of a cloud data breach (2024)</div></div>
            <div className="tools-stat"><div className="n">82%</div><div className="l">Breaches caused by misconfiguration, not exploits</div></div>
            <div className="tools-stat"><div className="n">197 days</div><div className="l">Avg time to detect a breach without CSPM</div></div>
          </div>
        </div>
      </header>

      <div className="art-wrap">
        <article className="art">

          <p>In 2016, attackers stole $81 million from Bangladesh Bank in a weekend. Buried in the post-mortem was a detail that barely made the headlines: the bank&apos;s core systems were not cloud-native, but the attacker&apos;s techniques absolutely were. They moved like microservices. They isolated like containers. They persisted like a Kubernetes workload that nobody thought to audit.</p>
          <p>Today, the stakes are higher, the attack surface is infinitely larger, and cloud-native environments, containers, Kubernetes, serverless, microservices, are where your business actually lives. The question is no longer whether you need cloud-native security. The question is whether you understand it well enough to do it right.</p>

          <div className="pull-quote">
            <p>&ldquo;The cloud did not just change where we run software. It changed everything, how we build it, deploy it, scale it, and how we must protect it. Perimeter security was never designed for infrastructure that spins up a thousand containers in seconds and vanishes just as fast.&rdquo;</p>
            <cite>— Soham Sawant, Cybersecurity Expert &amp; Technical Writer, SecComply</cite>
          </div>

          <figure className="b-figure anim">
            <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=520&fit=crop" alt="Cloud-native infrastructure, Kubernetes containers and microservices" loading="lazy" />
            <figcaption>Cloud-native environments have no perimeter. Workloads spin up and tear down in seconds. Identities are non-human. The old security model does not just perform poorly, it fundamentally does not apply.</figcaption>
          </figure>

          <section id="what-is">
            <h2>What Is Cloud-Native Security, and Why Does It Matter?</h2>
            <div className="def-box">
              <strong>📖 Definition</strong>
              <p>Cloud-native security is a holistic security approach specifically designed for environments built on cloud-native technologies: containers, microservices, serverless functions, infrastructure-as-code, and dynamic orchestration platforms like Kubernetes. It shifts security left, embedding it into the development and deployment pipeline rather than bolting it on at the perimeter.</p>
            </div>
            <p>Traditional security models were built around a perimeter. Cloud-native environments have no moat. Workloads spin up and tear down in seconds. Identities are non-human. Networks are programmable overlays. The old model does not just perform poorly, it fundamentally does not apply.</p>
            <p>For organisations pursuing ISO 27001, SOC 2, HIPAA, or GDPR, this is not an abstract technical concern. Every compliance framework you care about has controls that assume your infrastructure can be inventoried, access can be managed, and audit logs exist. Cloud-native environments make all of that harder, unless you build security in from day one.</p>
          </section>

          <section id="four-c">
            <h2>The 4C Model: Your Security Framework for Cloud-Native</h2>
            <p>Before you can secure a cloud-native environment, you need a mental model for what you are securing. The industry has converged on the 4C model, four concentric layers, each one dependent on the security of the layer beneath it. A vulnerability in any outer layer cascades inward.</p>
            <div className="four-c-grid">
              <div className="four-c-card anim">
                <div className="four-c-label">Layer 1</div>
                <div className="four-c-title">☁️ Cloud</div>
                <div className="four-c-body">The foundation, your AWS account, Azure subscription, or GCP project. Covers IAM policies, network configurations, storage access controls, and logging. This is where CSPM operates, continuously scanning for the misconfigurations that cause 82% of all cloud breaches.</div>
              </div>
              <div className="four-c-card anim">
                <div className="four-c-label">Layer 2</div>
                <div className="four-c-title">🔧 Cluster</div>
                <div className="four-c-body">Your Kubernetes environment, control plane, worker nodes, RBAC policies, and network policies. A misconfigured Kubernetes cluster can turn a limited compromise into a catastrophic one. Most teams underinvest here.</div>
              </div>
              <div className="four-c-card anim">
                <div className="four-c-label">Layer 3</div>
                <div className="four-c-title">📦 Container</div>
                <div className="four-c-body">The image layer, base images, application layers stacked on top, the registry you pull from, and how the container behaves at runtime. Vulnerable base images are the silent killer in most container environments.</div>
              </div>
              <div className="four-c-card anim">
                <div className="four-c-label">Layer 4</div>
                <div className="four-c-title">💻 Code</div>
                <div className="four-c-body">Your application logic, third-party dependencies, secrets management, and API design. This is where DevSecOps lives, and where the developer&apos;s daily choices either create or close vulnerabilities.</div>
              </div>
            </div>
          </section>

          <section id="zero-trust">
            <h2>Zero Trust: The Philosophy That Changes Everything</h2>
            <p>Zero Trust is arguably the most important shift in security thinking of the last decade. It can be expressed in three words, <strong>never trust, always verify</strong>, but its implications reach into every corner of how you build and operate cloud-native systems.</p>
            <p>The concept emerged from a simple observation: the idea of a trusted internal network is a fiction. Once an attacker is inside your perimeter, traditional security has nothing left to offer. Zero Trust collapses this assumption entirely, treating every request, from a human user, a service account, an internal microservice, a CI/CD pipeline, as potentially hostile until proven otherwise.</p>
            <div className="compliance-note">
              <strong>⚠️ Compliance Note</strong>
              <p>Zero Trust directly satisfies ISO 27001 Annex A.9 (Access Control), SOC 2 CC6 (Logical and Physical Access Controls), and NIST CSF PR.AC. SecComply&apos;s platform maps your Zero Trust implementation to these controls and generates continuous evidence for your auditors, automatically.</p>
            </div>
            <p>In practice, Zero Trust in a cloud-native environment means four things working together. <strong>Identity becomes your new perimeter</strong>, every workload, service account, and user must authenticate and be explicitly authorised for every action. <strong>Least privilege</strong> means IAM roles and Kubernetes RBAC are scoped to exactly what is required, nothing more. <strong>Micro-segmentation</strong> ensures that even if one workload is compromised, it cannot move freely across your environment. And <strong>continuous verification</strong> means authentication happens at every API call, every service interaction, every data access.</p>
          </section>

          <figure className="b-figure anim">
            <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&h=520&fit=crop" alt="DevSecOps pipeline with security gates at every stage" loading="lazy" />
            <figcaption>A mature DevSecOps pipeline embeds security gates at every stage, from the first commit to production monitoring, so developers get security feedback in their own workflow, not six weeks later.</figcaption>
          </figure>

          <section id="devsecops">
            <h2>DevSecOps: Security as a Developer Conversation</h2>
            <p>Studies consistently show that a vulnerability found in production costs 30x more to remediate than one caught at the design stage. DevSecOps is the practice that closes that gap, making security a shared responsibility between development, operations, and security teams from the very first commit.</p>
            <div className="concept-card anim">
              <div className="concept-title">🔍 SAST, Static Application Security Testing</div>
              <div className="concept-body">Scans source code for vulnerabilities at commit time, before a single line reaches a build server. Developers get feedback in their workflow rather than in a report six weeks later.</div>
            </div>
            <div className="concept-card anim">
              <div className="concept-title">📦 SCA, Software Composition Analysis</div>
              <div className="concept-body">Audits your third-party libraries and open-source dependencies for known CVEs. This is the class of risk that gave us Log4Shell, a vulnerability hiding in a library used by hundreds of thousands of applications worldwide.</div>
            </div>
            <div className="concept-card anim">
              <div className="concept-title">🐳 Container Image Scanning</div>
              <div className="concept-body">Every image is checked against CVE databases before it is pushed to your registry. No unverified image should reach production.</div>
            </div>
            <div className="concept-card anim">
              <div className="concept-title">🏗️ IaC Security Scanning</div>
              <div className="concept-body">Your Terraform, CloudFormation, and Helm charts are reviewed for misconfigurations before they create real resources. The cheapest misconfiguration to fix is the one that never makes it to production.</div>
            </div>
            <div className="concept-card anim">
              <div className="concept-title">🔑 Secrets Detection</div>
              <div className="concept-body">Prevents the single most common developer mistake, accidentally committing an API key or password to source control. Should run on every commit as a hard gate.</div>
            </div>
          </section>

          <section id="kubernetes">
            <h2>Kubernetes Security: Where Most Teams Fall Short</h2>
            <p>Kubernetes has become the operating system of the cloud-native world. Its default configuration, left unattended, is a security disaster. The pattern across assessments is consistent: teams invest heavily in the application layer and almost nothing in cluster hardening.</p>
            <ul>
              <li><strong>API Server Hardening:</strong> The Kubernetes API server controls everything. It must never be exposed to the public internet. Access must require strong authentication. Audit logging must be enabled so every API call leaves a trace.</li>
              <li><strong>RBAC Configuration:</strong> Kubernetes&apos; built-in authorisation system only protects you if it is actually configured. The default service account in a namespace has significant permissions that need reviewing and restricting. Cluster-admin should be granted to almost nobody.</li>
              <li><strong>Pod Security Standards:</strong> Enforce that pods run as non-root users, use read-only root filesystems, and drop unnecessary Linux kernel capabilities, directly limiting what an attacker can do if they achieve code execution.</li>
              <li><strong>Network Policies:</strong> Restrict pod-to-pod communication, which is unrestricted by default. Without them, a compromised workload can reach anything in the cluster.</li>
            </ul>
            <div className="insight-box">
              <strong>🔐 Key Insight</strong>
              <p>Kubernetes Secrets are base64-encoded by default, not encrypted. Calling them &ldquo;secure&rdquo; is one of the most common and dangerous misconceptions in cloud-native environments. Use dedicated secrets managers, HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, with dynamic secret injection.</p>
            </div>
          </section>

          <section id="cspm">
            <h2>CSPM: The Continuous Heartbeat of Cloud Security</h2>
            <p>If Zero Trust is the philosophy and DevSecOps is the practice, Cloud Security Posture Management is the continuous, automated assurance that both are actually working. CSPM connects to your cloud provider APIs and builds a real-time inventory of every resource, every configuration, every permission relationship, then compares that state against security benchmarks like CIS Foundations Benchmarks and against your compliance frameworks.</p>
            <p>The value proposition is simple but profound. The average organisation takes 197 days to detect a cloud breach without CSPM. With CSPM, detection happens in minutes. For compliance teams, CSPM is transformative, instead of manual evidence collection, every passing control check becomes automated evidence, timestamped and auditor-ready.</p>
          </section>

          <section id="supply-chain">
            <h2>Supply Chain Security: The Attack Vector You Can&apos;t See</h2>
            <p>SolarWinds taught us that attackers will compromise the build pipeline. Log4Shell taught us that a single dependency vulnerability can detonate across hundreds of thousands of applications simultaneously. The XZ Utils backdoor in 2024 showed that attackers are willing to invest years to compromise a trusted open-source project.</p>
            <ul>
              <li><strong>Software Bill of Materials (SBOM):</strong> A complete inventory of every component, dependency, and library in every container image you ship. US Executive Order 14028 mandated SBOMs for software sold to the federal government. Enterprise procurement teams are increasingly requiring them.</li>
              <li><strong>Image Signing:</strong> Tools like Sigstore and Cosign provide cryptographic proof that a container image was built from a known, trusted pipeline and has not been tampered with. Only signed images from verified registries should run in production.</li>
              <li><strong>Dependency Pinning:</strong> Locking specific versions and verifying checksums eliminates the risk of a floating <code>:latest</code> tag suddenly resolving to a compromised image.</li>
            </ul>
          </section>

          <section id="compliance-mapping">
            <h2>How Cloud-Native Security Maps to Compliance Frameworks</h2>
            <p>The controls in ISO 27001, SOC 2, and HIPAA were written by people who understood that good security practices produce auditable evidence. When you implement Zero Trust, run CSPM, and embed DevSecOps gates, the compliance evidence is a natural byproduct of doing the security work.</p>
            <div className="sc-table-wrap">
              <table className="sc-table">
                <thead><tr><th>Security Domain</th><th>ISO 27001</th><th>SOC 2</th><th>PCI DSS</th><th>HIPAA</th></tr></thead>
                <tbody>
                  <tr><td>IAM &amp; Zero Trust</td><td>A.9.1, A.9.4</td><td>CC6.1, CC6.2</td><td>Req 7, 8</td><td>164.312(a)</td></tr>
                  <tr><td>Container Security</td><td>A.12.6, A.14.2</td><td>CC7.1</td><td>Req 6.3</td><td>164.312(b)</td></tr>
                  <tr><td>CSPM / Misconfiguration</td><td>A.12.1, A.13.1</td><td>CC6.6, CC7.2</td><td>Req 1, 2</td><td>164.312(c)</td></tr>
                  <tr><td>DevSecOps / CI/CD</td><td>A.14.2</td><td>CC8.1</td><td>Req 6.2</td><td>164.312(a)</td></tr>
                  <tr><td>Supply Chain Security</td><td>A.15.1, A.15.2</td><td>CC9.2</td><td>Req 12.8</td><td>164.308(a)(4)</td></tr>
                  <tr><td>Logging &amp; Monitoring</td><td>A.12.4</td><td>CC7.2, CC7.3</td><td>Req 10</td><td>164.312(b)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="art-cta anim">
            <h3>Is Your Cloud-Native Security Posture Audit-Ready?</h3>
            <p>SecComply ties your cloud security controls directly to ISO 27001, SOC 2, HIPAA, GDPR, and 50+ frameworks, with continuous, automated evidence collection. No more manual screenshots. No more quarterly fire drills.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer">Book a Free Cloud Security Assessment →</a>
          </div>

          <div className="author-bio">
            <div className="bio-avatar">SS</div>
            <div className="bio-content">
              <h4>Soham Sawant</h4>
              <div className="bio-title">Cybersecurity Expert &amp; Technical Writer, SecComply</div>
              <p>Soham writes at the intersection of rigorous technical accuracy and compelling narrative. With deep expertise spanning cloud security architecture, compliance automation, and threat intelligence, his work helps security teams, compliance officers, and business leaders understand, and act on, the real risks facing modern cloud-native organisations. He has covered topics ranging from cloud misconfiguration to supply chain attacks, Zero Trust implementation to ISO 27001 certification strategy.</p>
            </div>
          </div>

          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            {[
              ['What is cloud-native security?', 'Cloud-native security is a security approach designed specifically for environments built on containers, microservices, Kubernetes, and serverless technologies. It shifts security left, embedding controls into the development and deployment pipeline rather than relying on a network perimeter.'],
              ['What is the difference between cloud security and cloud-native security?', 'Cloud security is a broad term covering all security practices in cloud environments. Cloud-native security specifically addresses the unique challenges of containers, Kubernetes, and CI/CD pipelines, technologies with fundamentally different threat models compared to traditional virtual machines and monolithic applications.'],
              ['What is CSPM and why do organisations need it?', 'CSPM (Cloud Security Posture Management) continuously monitors your cloud infrastructure against security benchmarks and compliance frameworks, identifying misconfigurations in real time. Organisations need it because 82% of cloud breaches are caused by misconfiguration, not sophisticated exploits, and manual reviews cannot keep pace with the rate of infrastructure change.'],
              ['How does cloud-native security support ISO 27001 certification?', 'ISO 27001 requires demonstrable controls across access management (Annex A.9), operations security (A.12), and secure development (A.14). Cloud-native practices directly produce the required evidence: CSPM generates continuous configuration records, DevSecOps logs demonstrate secure development lifecycle, and Zero Trust IAM policies satisfy access control requirements.'],
              ['Where should an organisation start with cloud-native security?', 'Start with visibility. Deploy a CSPM tool to get a complete inventory of all cloud resources and an honest assessment of your current misconfiguration risk. From that baseline, prioritise by severity and blast radius, internet-facing resources with sensitive data first. Then layer in Kubernetes hardening, DevSecOps integration, and Zero Trust IAM policies.'],
            ].map(([q,a],i) => (
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
            <a href="#what-is" className="toc-link">What Is Cloud-Native Security</a>
            <a href="#four-c" className="toc-link">The 4C Security Model</a>
            <a href="#zero-trust" className="toc-link">Zero Trust Architecture</a>
            <a href="#devsecops" className="toc-link">DevSecOps Pipeline</a>
            <a href="#kubernetes" className="toc-link">Kubernetes Security</a>
            <a href="#cspm" className="toc-link">CSPM, Continuous Assurance</a>
            <a href="#supply-chain" className="toc-link">Supply Chain Security</a>
            <a href="#compliance-mapping" className="toc-link">Compliance Framework Mapping</a>
          </div>
          <div className="sidebar-cta">
            <h4 style={{fontSize:'.85rem',fontWeight:700,color:'var(--tx)',marginBottom:8}}>Cloud Security Assessment</h4>
            <p>Map your cloud-native security posture against ISO 27001, SOC 2, HIPAA, and GDPR, with continuous automated evidence.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer">Book a Free Consultation →</a>
          </div>
          <div className="sidebar-card">
            <h4>Related Posts</h4>
            <a href="/resources/blog/top-5-cloud-misconfigurations" className="toc-link">☁️ Top 5 Cloud Misconfigurations</a>
            <a href="/resources/blog/what-is-cspm-scan" className="toc-link">🔍 What is a CSPM Scan?</a>
            <a href="/resources/blog/ai-generated-code-security-risks" className="toc-link">🤖 AI Code Security Risks</a>
          </div>
          <div className="sidebar-card">
            <h4>Tags</h4>
            <div className="sidebar-tags">
              {['Cloud Security','CSPM','Zero Trust','DevSecOps','Kubernetes','Containers','ISO 27001','SOC 2','HIPAA','GDPR','Supply Chain'].map(t => (
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
