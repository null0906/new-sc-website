import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function SbomSoftwareBillOfMaterials() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/sbom-software-bill-of-materials');
      const ttl = encodeURIComponent('SBOM 101: Why Software Bills of Materials Matter, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/sbom-software-bill-of-materials'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
      function toast(msg) { let t = document.getElementById('sc-toast'); if (!t) { t = document.createElement('div'); t.id = 'sc-toast'; t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgb(var(--accent-rgb) / .4);opacity:0;transition:opacity .3s;pointer-events:none'; document.body.appendChild(t); } t.textContent = msg; t.style.opacity = '1'; clearTimeout(t._tid); t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500); }
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
    })();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": "SBOM 101: Why Software Bills of Materials Matter",
        "description": "A Software Bill of Materials (SBOM) is now a regulatory expectation, a customer requirement, and a security baseline. This guide covers what an SBOM is, why it matters for ISO 27001 and SOC 2, the two dominant formats (SPDX and CycloneDX), and how to generate one today.",
        "image": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/blog/sbom-software-bill-of-materials.png", "width": 1200, "height": 630, "caption": "SBOM 101, Software Bill of Materials explained for security and compliance teams" },
        "author": { "@type": "Person", "name": "Soham Sawant", "jobTitle": "Cybersecurity Expert & Technical Writer", "worksFor": { "@type": "Organization", "name": "SecComply" } },
        "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } },
        "datePublished": "2026-03-20", "dateModified": "2026-03-20",
        "mainEntityOfPage": "https://seccomply.net/resources/blog/sbom-software-bill-of-materials",
        "articleSection": "Supply Chain Security",
        "inLanguage": "en-IN",
        "timeRequired": "PT8M",
        "wordCount": 2200,
        "keywords": "SBOM, software bill of materials, SBOM compliance, SBOM ISO 27001, SBOM SOC 2, supply chain security, CycloneDX, SPDX, NTIA SBOM, US Executive Order 14028, software transparency, open source security, Log4Shell, software supply chain attack, SBOM tools 2026"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an SBOM (Software Bill of Materials)?",
            "acceptedAnswer": { "@type": "Answer", "text": "An SBOM is a formal, machine-readable inventory of every component, library, dependency, and module in a software product, including open source packages, third-party libraries, and their known vulnerabilities. Think of it as the ingredient label for software. It tells you exactly what is inside your application." }
          },
          {
            "@type": "Question",
            "name": "Is an SBOM required for ISO 27001?",
            "acceptedAnswer": { "@type": "Answer", "text": "ISO 27001:2022 Annex A.8.8 (Management of Technical Vulnerabilities) and A.15.1 (Supplier Relationships) both implicitly require you to know what software components you are running and to track vulnerabilities in them. An SBOM is the practical mechanism to satisfy these controls. Auditors increasingly ask for evidence of software component inventory." }
          },
          {
            "@type": "Question",
            "name": "What is the difference between SPDX and CycloneDX?",
            "acceptedAnswer": { "@type": "Answer", "text": "SPDX (Software Package Data Exchange) is an ISO standard (ISO 5962) focused primarily on license compliance and provenance. CycloneDX is an OWASP standard focused primarily on security, vulnerability tracking, VEX statements, and supply chain risk. Most security-focused teams use CycloneDX. Both are machine-readable and widely supported by tooling." }
          },
          {
            "@type": "Question",
            "name": "Who requires an SBOM?",
            "acceptedAnswer": { "@type": "Answer", "text": "US Executive Order 14028 (May 2021) mandated SBOMs for software sold to the US federal government. The EU Cyber Resilience Act (CRA) requires SBOMs for products with digital elements sold in the EU. Enterprise procurement teams, particularly in financial services, healthcare, and critical infrastructure, are increasingly requiring SBOMs as part of vendor onboarding. ISO 27001 and SOC 2 auditors are starting to ask for them." }
          },
          {
            "@type": "Question",
            "name": "How do I generate an SBOM?",
            "acceptedAnswer": { "@type": "Answer", "text": "For container images, use Syft (free, open source), run 'syft <image-name> -o cyclonedx-json'. For application dependencies, use CycloneDX language plugins (available for Node.js, Python, Java, Go, .NET). For a complete pipeline integration, tools like Snyk, Anchore, and Dependency-Track can generate and continuously monitor SBOMs as part of your CI/CD workflow." }
          },
          {
            "@type": "Question",
            "name": "What did Log4Shell teach us about SBOMs?",
            "acceptedAnswer": { "@type": "Answer", "text": "Log4Shell (CVE-2021-44228) affected hundreds of thousands of applications that used Apache Log4j, most organisations had no idea they were using it because it was a transitive dependency (a dependency of a dependency). Organisations with SBOMs identified their exposure in hours. Those without spent days or weeks auditing codebases manually. It is the single most cited example of why SBOM adoption accelerated after 2021." }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
          { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
          { "@type": "ListItem", "position": 4, "name": "SBOM 101: Why Software Bills of Materials Matter", "item": "https://seccomply.net/resources/blog/sbom-software-bill-of-materials" }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to Generate an SBOM",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Choose a format", "text": "Decide between SPDX (license-focused) or CycloneDX (security-focused). For most security teams, CycloneDX is the right choice." },
          { "@type": "HowToStep", "position": 2, "name": "Install a generator", "text": "For containers: install Syft. For application code: install the CycloneDX plugin for your language (npm, pip, Maven, etc.)." },
          { "@type": "HowToStep", "position": 3, "name": "Run your first scan", "text": "Run 'syft <image> -o cyclonedx-json > sbom.json' for containers, or the appropriate CycloneDX CLI command for your codebase." },
          { "@type": "HowToStep", "position": 4, "name": "Ingest into a tracking tool", "text": "Upload the SBOM to Dependency-Track or Grype to continuously monitor for new CVEs against your component inventory." },
          { "@type": "HowToStep", "position": 5, "name": "Automate in CI/CD", "text": "Add SBOM generation as a pipeline step so every build produces a fresh, versioned SBOM automatically." }
        ]
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>SBOM 101: Why Software Bills of Materials Matter | SecComply</title>
        <meta name="description" content="What is an SBOM? A complete guide to Software Bills of Materials, why they are now a regulatory requirement, how SPDX and CycloneDX differ, what Log4Shell taught us, and how to generate your first SBOM today." />
        <meta name="keywords" content="SBOM, software bill of materials, what is SBOM, SBOM compliance India, SBOM ISO 27001, SBOM SOC 2, CycloneDX, SPDX, NTIA minimum elements, US Executive Order 14028, EU Cyber Resilience Act SBOM, supply chain security 2026, Log4Shell SBOM, Syft Dependency-Track, open source vulnerability management, software transparency" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Soham Sawant" />
        <meta name="language" content="en-IN" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/sbom-software-bill-of-materials" />
        <link rel="icon" href="/favicon.ico" /><link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#020617" /><meta charSet="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="SBOM 101: Why Software Bills of Materials Matter" />
        <meta property="og:description" content="Log4Shell exposed hundreds of thousands of apps using a library nobody knew they had. An SBOM would have changed that from weeks to hours. Here is everything you need to know." />
        <meta property="og:url" content="https://seccomply.net/resources/blog/sbom-software-bill-of-materials" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/sbom-software-bill-of-materials.png" />
        <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SBOM 101, Software Bill of Materials guide for security and compliance teams" />
        <meta property="og:site_name" content="SecComply" /><meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content="2026-03-20T08:00:00+05:30" />
        <meta property="article:modified_time" content="2026-03-20T08:00:00+05:30" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:section" content="Supply Chain Security" />
        <meta property="article:tag" content="SBOM" />
        <meta property="article:tag" content="Supply Chain Security" />
        <meta property="article:tag" content="ISO 27001" />
        <meta property="article:tag" content="SOC 2" />
        <meta property="article:tag" content="DevSecOps" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@seccomply" /><meta name="twitter:creator" content="@seccomply" />
        <meta name="twitter:title" content="SBOM 101: Why Software Bills of Materials Matter" />
        <meta name="twitter:description" content="Log4Shell affected apps that had no idea they were using Log4j. An SBOM changes that. Here is the complete beginner guide." />
        <meta name="twitter:image" content="https://seccomply.net/assets/images/blog/sbom-software-bill-of-materials.png" />
        <meta name="twitter:image:alt" content="SBOM 101 guide, Software Bill of Materials" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />      </Head>

      <style jsx global>{`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:var(--sans);background:var(--bg);color:var(--tx);-webkit-font-smoothing:antialiased;overflow-x:hidden}
        a{color:inherit;text-decoration:none}
        #reading-progress{position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,var(--accent),var(--accent-light));z-index:9999;transition:width .1s linear;border-radius:0 2px 2px 0}
        .tools-hero-wrap{background:linear-gradient(160deg,var(--bg-primary) 0%,var(--bg-secondary) 60%,var(--bg-card) 100%);border-bottom:1px solid var(--bs);padding:96px 0 60px;position:relative;overflow:hidden}
        .tools-hero-wrap::before{content:'';position:absolute;top:-120px;right:-80px;width:500px;height:500px;background:radial-gradient(circle,rgb(var(--accent-rgb) / .08) 0%,transparent 70%);pointer-events:none}
        .tools-hero-inner{max-width:860px;margin:0 auto;padding:0 24px}
        .tools-breadcrumb{display:flex;align-items:center;gap:8px;font-size:.78rem;color:var(--tm);margin-bottom:24px;flex-wrap:wrap}
        .tools-breadcrumb a{color:var(--cy);transition:opacity .2s}.tools-breadcrumb a:hover{opacity:.8}
        .tools-breadcrumb span{opacity:.4}
        .tools-cat-badge{display:inline-flex;align-items:center;gap:7px;padding:5px 14px;background:rgb(var(--accent-rgb) / .1);border:1px solid rgb(var(--accent-rgb) / .25);border-radius:100px;font-size:.72rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--cy);margin-bottom:20px}
        .tools-hero-h1{font-size:clamp(1.9rem,5vw,3rem);font-weight:900;line-height:1.1;letter-spacing:-.03em;color:var(--tx);margin-bottom:18px}
        .tools-hero-h1 .acc{background:linear-gradient(90deg,var(--accent),var(--accent-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .tools-hero-sub{font-size:1.08rem;line-height:1.75;color:var(--tm);max-width:740px;margin-bottom:28px}
        .tools-author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-top:24px;flex-wrap:wrap}
        .tools-author-strip .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-light));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.95rem;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgb(var(--accent-rgb) / .3)}
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
        .art a{color:var(--cy);text-decoration:underline;text-decoration-color:rgb(var(--accent-rgb) / .35);transition:all .2s}
        .art a:hover{text-decoration-color:var(--cy)}
        code{background:var(--bg-card-hover);color:var(--accent-light);padding:2px 7px;border-radius:5px;font-size:.88rem;font-family:var(--mono)}
        .pull-quote{border-left:3px solid var(--cy);padding:16px 24px;margin:2em 0;background:rgb(var(--accent-rgb) / .04);border-radius:0 12px 12px 0}
        .pull-quote p{font-size:1.05rem;font-style:italic;color:var(--tx);line-height:1.65;margin:0}
        .pull-quote cite{display:block;font-size:.8rem;color:var(--tm);margin-top:10px;font-style:normal}
        .def-box{background:rgb(var(--blue-rgb) / .05);border:1px solid rgb(var(--blue-rgb) / .15);border-left:3px solid var(--accent-light);border-radius:0 12px 12px 0;padding:18px 22px;margin:2em 0}
        .def-box strong{color:var(--accent-light);font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:10px}
        .def-box p{font-size:.9rem;color:var(--tb);line-height:1.65;margin-bottom:.5em}
        .def-box p:last-child{margin-bottom:0}
        .warn-box{background:rgb(var(--red-rgb) / .04);border:1px solid rgb(var(--red-rgb) / .15);border-left:3px solid var(--red);border-radius:0 12px 12px 0;padding:16px 22px;margin:2em 0}
        .warn-box strong{color:var(--red);font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:8px}
        .warn-box p{font-size:.9rem;color:var(--tb);line-height:1.65;margin:0}
        .tip-box{background:rgb(var(--green-rgb) / .05);border:1px solid rgb(var(--green-rgb) / .18);border-left:3px solid var(--green);border-radius:0 12px 12px 0;padding:16px 22px;margin:2em 0}
        .tip-box strong{color:var(--green-light);font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:8px}
        .tip-box p{font-size:.9rem;color:#A7F3D0;line-height:1.65;margin:0}
        .compliance-note{background:rgb(var(--accent-rgb) / .05);border:1px solid rgb(var(--accent-rgb) / .18);border-left:3px solid var(--cy);border-radius:0 12px 12px 0;padding:18px 22px;margin:2em 0}
        .compliance-note strong{color:var(--cy);font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;display:block;margin-bottom:10px}
        .compliance-note p{font-size:.9rem;color:var(--tb);line-height:1.65;margin-bottom:.6em}
        .compliance-note p:last-child{margin-bottom:0}
        .risk-card{background:var(--bgc);border:1px solid var(--bs);border-radius:16px;padding:26px 28px 22px;margin:1.4em 0;position:relative;overflow:hidden;transition:border-color .3s}
        .risk-card:hover{border-color:var(--bo)}
        .risk-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent-light))}
        .risk-num{position:absolute;top:22px;right:24px;font-size:2.5rem;font-weight:900;color:rgb(var(--accent-rgb) / .08);line-height:1}
        .risk-title{font-size:1.05rem;font-weight:800;color:var(--tx);margin-bottom:8px}
        .risk-desc{font-size:.97rem;line-height:1.75;color:var(--tb)}
        .sc-table{width:100%;border-collapse:collapse;margin:1.5em 0;font-size:.88rem}
        .sc-table th{background:rgb(var(--accent-rgb) / .08);color:var(--cy);font-weight:700;padding:10px 16px;text-align:left;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;border-bottom:2px solid rgb(var(--accent-rgb) / .2)}
        .sc-table td{padding:11px 16px;border-bottom:1px solid var(--bs);vertical-align:top;color:var(--tb)}
        .sc-table tr:last-child td{border-bottom:none}
        .sc-table tr:hover td{background:rgba(255,255,255,.02)}
        .sc-table td:first-child{font-weight:700;color:var(--tx)}
        .sc-table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5em 0;border-radius:8px}
        .sc-table-wrap .sc-table{margin:0}
        .checklist-card{background:var(--bgc);border:1px solid var(--bo);border-radius:16px;padding:28px;margin:2em 0}
        .checklist-card h3{font-size:1.05rem;font-weight:800;color:var(--tx);margin-bottom:16px}
        .checklist-item{display:flex;gap:14px;padding:13px 0;border-bottom:1px solid var(--bs);align-items:flex-start}
        .checklist-item:last-child{border-bottom:none}
        .check-icon{width:30px;height:30px;border-radius:8px;background:rgb(var(--accent-rgb) / .1);border:1px solid rgb(var(--accent-rgb) / .25);display:flex;align-items:center;justify-content:center;font-size:.9rem;flex-shrink:0;margin-top:1px}
        .check-title{font-size:.92rem;font-weight:700;color:var(--tx);margin-bottom:3px}
        .check-desc{font-size:.84rem;color:var(--tm);line-height:1.6}
        .art-cta{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .12),rgb(var(--accent-rgb) / .06));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:16px;padding:32px 28px;margin:3em 0;text-align:center}
        .art-cta h3{font-size:1.25rem;font-weight:800;color:var(--tx);margin-bottom:10px}
        .art-cta p{font-size:.92rem;color:var(--tm);margin-bottom:20px;line-height:1.6}
        .art-cta a{display:inline-flex;align-items:center;gap:8px;padding:12px 28px;background:linear-gradient(135deg,var(--accent),var(--accent-light));color:#fff;font-weight:700;font-size:.9rem;border-radius:100px;transition:all .3s;box-shadow:0 6px 24px rgb(var(--accent-rgb) / .3)}
        .art-cta a:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgb(var(--accent-rgb) / .4);text-decoration:none}
        .faq-section{margin:3em 0}
        .faq-section h2{font-size:1.4rem;font-weight:800;color:var(--tx);margin-bottom:1em;padding-bottom:.5em;border-bottom:1px solid var(--bs)}
        .faq-item{border:1px solid var(--bs);border-radius:12px;margin-bottom:10px;overflow:hidden;transition:border-color .3s}
        .faq-item.open{border-color:var(--bo)}
        .faq-question{background:var(--bgc);color:var(--tx);border:none;width:100%;text-align:left;padding:16px 20px;font-size:.95rem;font-weight:600;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:var(--sans);transition:background .2s}
        .faq-question:hover{background:var(--bgc2)}
        .faq-icon{color:var(--cy);font-size:1.2rem;font-weight:300;flex-shrink:0;margin-left:12px;transition:transform .3s}
        .faq-item.open .faq-icon{transform:rotate(45deg)}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height .4s ease}
        .faq-item.open .faq-answer{max-height:500px}
        .faq-answer-inner{padding:0 20px 16px;font-size:.9rem;color:var(--tm);line-height:1.7}
        .sidebar{position:sticky;top:88px;display:flex;flex-direction:column;gap:20px}
        .sidebar-card{background:var(--bgc);border:1px solid var(--bs);border-radius:14px;padding:20px}
        .sidebar-card h4{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--cy);margin-bottom:14px}
        .toc-link{display:block;font-size:.82rem;color:var(--tm);padding:5px 0 5px 12px;border-left:2px solid transparent;transition:all .2s;line-height:1.4}
        .toc-link:hover,.toc-link.active{color:var(--tx);border-left-color:var(--cy)}
        .sidebar-tags{display:flex;flex-wrap:wrap;gap:7px}
        .sidebar-tag{padding:4px 10px;background:rgba(255,255,255,.05);border:1px solid var(--bs);border-radius:100px;font-size:.72rem;color:var(--tm);transition:all .2s}
        .sidebar-tag:hover{border-color:var(--cy);color:var(--cy)}
        .sidebar-cta{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .15),rgb(var(--accent-rgb) / .07));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:14px;padding:20px;text-align:center}
        .sidebar-cta p{font-size:.83rem;color:var(--tm);margin-bottom:14px;line-height:1.55}
        .sidebar-cta a{display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:linear-gradient(135deg,var(--accent),var(--accent-light));color:#fff;font-weight:700;font-size:.8rem;border-radius:100px;transition:all .3s}
        .sidebar-cta a:hover{transform:translateY(-1px);text-decoration:none}
        #btt{position:fixed;bottom:28px;right:28px;width:42px;height:42px;background:var(--accent);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgb(var(--accent-rgb) / .4);opacity:0;transform:translateY(12px);transition:all .3s;pointer-events:none;z-index:999}
        #btt.vis{opacity:1;transform:translateY(0);pointer-events:auto}
        .b-figure{margin:2em 0;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.06)}
        .b-figure img{width:100%;display:block;height:260px;object-fit:cover;filter:brightness(.92)}
        .b-figure figcaption{background:var(--bg-secondary);padding:12px 18px;font-size:.8rem;color:var(--text-secondary);line-height:1.55;border-top:1px solid rgba(255,255,255,.06)}
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
            <span>SBOM 101</span>
          </nav>
          <div className="tools-cat-badge">🔗 Supply Chain Security</div>
          <h1 className="tools-hero-h1">
            <span className="acc">SBOM 101:</span> Why Software Bills<br />of Materials Matter
          </h1>
          <p className="tools-hero-sub">
            When Log4Shell detonated in December 2021, most organisations spent days trying to answer one question: do we use Log4j? An SBOM answers that question in seconds. Here is everything your security and compliance team needs to know about Software Bills of Materials, what they are, why regulators now require them, and how to generate one today.
          </p>
          <div className="tools-author-strip">
            <div className="avatar">SS</div>
            <div className="author-info">
              <div className="name">Soham Sawant</div>
              <div className="meta-row">
                <span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span>
                <span className="dot">·</span>
                <span id="read-time">📖 8 min read</span>
              </div>
              <div className="date-row">
                <span>📅 March 20, 2026</span><span className="dot">·</span><span>🏢 SecComply</span>
              </div>
            </div>
            <div className="tools-share-row">
              <a id="sl" href="#" target="_blank" rel="noopener noreferrer" className="tools-share-btn">🔗 LinkedIn</a>
              <a id="st" href="#" target="_blank" rel="noopener noreferrer" className="tools-share-btn">🐦 Twitter</a>
              <button onClick={() => window.copyLink && window.copyLink()} className="tools-share-btn">📋 Copy Link</button>
            </div>
          </div>
          <div className="tools-stats-bar">
            <div className="tools-stat"><div className="n">625K+</div><div className="l">Applications affected by Log4Shell in 72 hours</div></div>
            <div className="tools-stat"><div className="n">88%</div><div className="l">Open source codebases contain outdated components</div></div>
            <div className="tools-stat"><div className="n">742%</div><div className="l">Increase in software supply chain attacks since 2019</div></div>
            <div className="tools-stat"><div className="n">2021</div><div className="l">US Executive Order 14028 made SBOMs mandatory</div></div>
          </div>
        </div>
      </header>

      <div className="art-wrap">
        <article className="art">

          <p>In December 2021, a security researcher published a proof-of-concept exploit for a vulnerability in Apache Log4j, a Java logging library so ubiquitous that most developers had never consciously chosen to use it. It was just there, pulled in as a transitive dependency by something else they were using. Within 72 hours, over 625,000 applications were under active attack.</p>

          <p>The organisations that contained the damage fastest had one thing in common: they knew what was in their software. They had a list. They could search it, sort it by component, and immediately identify every system that needed patching. Everyone else was doing archaeology, manually digging through codebases, dependency trees, and container images trying to answer a question they should have been able to answer in seconds.</p>

          <p>That list has a name. It is called a Software Bill of Materials. And after Log4Shell, the question shifted from &ldquo;should we have one?&rdquo; to &ldquo;why don&apos;t we already?&rdquo;</p>

          <div className="pull-quote">
            <p>&ldquo;An SBOM is the difference between knowing your exposure in 30 seconds and spending three weeks in a war room. Log4Shell did not create the SBOM conversation, it ended the debate about whether it was necessary.&rdquo;</p>
            <cite>— Soham Sawant, Cybersecurity Expert &amp; Technical Writer, SecComply</cite>
          </div>

          <section id="what-is-sbom">
            <h2>What Is an SBOM?</h2>
            <div className="def-box">
              <strong>📖 Definition, Software Bill of Materials (SBOM)</strong>
              <p>An SBOM is a formal, machine-readable inventory of every component, library, dependency, and module in a software product, including open source packages, third-party libraries, commercial components, and their known vulnerability status.</p>
              <p>Think of it as the ingredient label for software. Just as a food label tells you exactly what is inside the product, not just the headline ingredients but the additives, preservatives, and allergens, an SBOM tells you exactly what is inside your application, including the things you did not consciously choose to include.</p>
            </div>

            <p>The analogy to a food ingredient label is more precise than it first appears. When a food safety recall happens, manufacturers with accurate ingredient labels can immediately determine whether they are affected. Those without them have to audit every product line from scratch. Software supply chain incidents work exactly the same way.</p>

            <p>An SBOM typically captures for each component: its name and version, the supplier, the relationship to your software (direct dependency or transitive), the licence, known vulnerabilities (CVEs), and cryptographic hash for integrity verification. The minimum elements required by the US National Telecommunications and Information Administration (NTIA) for a &ldquo;baseline&rdquo; SBOM are supplier name, component name, version, unique identifier, dependency relationships, author of SBOM data, and timestamp.</p>
          </section>

          <figure className="b-figure anim">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=520&fit=crop" alt="Software supply chain security and component inventory management" loading="lazy" />
            <figcaption>A Software Bill of Materials gives you complete visibility into every component in your software, the ones you chose, and the ones that came along for the ride.</figcaption>
          </figure>

          <section id="why-now">
            <h2>Why SBOMs Are No Longer Optional</h2>
            <p>SBOMs have existed as a concept for years. What changed is the regulatory and commercial pressure that has made them a hard requirement rather than a best practice.</p>

            <div className="risk-card anim">
              <div className="risk-num">01</div>
              <div className="risk-title">US Executive Order 14028 (May 2021)</div>
              <div className="risk-desc">Following the SolarWinds supply chain attack, President Biden signed EO 14028 on Improving the Nation&apos;s Cybersecurity. Section 4 specifically mandated that software vendors selling to the US federal government must provide an SBOM. This single order created a wave of procurement requirements that quickly spread beyond federal contracts into enterprise software buying generally.</div>
            </div>

            <div className="risk-card anim">
              <div className="risk-num">02</div>
              <div className="risk-title">EU Cyber Resilience Act (CRA)</div>
              <div className="risk-desc">The EU CRA, which entered into force in 2024, requires manufacturers of products with digital elements sold in the EU to maintain SBOMs throughout the product lifecycle. This includes IoT devices, software products, and connected hardware. Non-compliance can result in fines of up to €15 million or 2.5% of global annual turnover.</div>
            </div>

            <div className="risk-card anim">
              <div className="risk-num">03</div>
              <div className="risk-title">Enterprise Procurement Requirements</div>
              <div className="risk-desc">Enterprise buyers, particularly in financial services, healthcare, critical infrastructure, and government, are now routinely including SBOM requirements in vendor onboarding questionnaires and procurement contracts. If you are selling B2B SaaS to regulated industries, expect to be asked for an SBOM within the next 12–18 months if you are not already.</div>
            </div>

            <div className="risk-card anim">
              <div className="risk-num">04</div>
              <div className="risk-title">ISO 27001 and SOC 2 Audit Expectations</div>
              <div className="risk-desc">While neither ISO 27001 nor SOC 2 explicitly mandates an SBOM by name, the controls they require make one a practical necessity. ISO 27001:2022 Annex A.8.8 requires management of technical vulnerabilities in software you use. SOC 2 CC9.2 covers vendor and supply chain risk. Auditors are increasingly asking for evidence of software component inventory as part of these controls.</div>
            </div>
          </section>

          <section id="formats">
            <h2>SPDX vs CycloneDX, The Two Dominant Formats</h2>
            <p>Two formats have emerged as the industry standard for SBOMs. They serve overlapping but distinct purposes, and understanding the difference matters for choosing the right toolchain.</p>

            <div className="sc-table-wrap">
              <table className="sc-table">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>SPDX</th>
                    <th>CycloneDX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Governing body</td><td>Linux Foundation / ISO (ISO 5962)</td><td>OWASP</td></tr>
                  <tr><td>Primary focus</td><td>Licence compliance &amp; provenance</td><td>Security &amp; vulnerability tracking</td></tr>
                  <tr><td>Formats supported</td><td>SPDX tag-value, JSON, YAML, XML, RDF</td><td>JSON, XML, Protobuf</td></tr>
                  <tr><td>VEX support</td><td>Limited</td><td>Native (Vulnerability Exploitability eXchange)</td></tr>
                  <tr><td>Best for</td><td>Open source licence management, legal teams</td><td>Security teams, vulnerability management, DevSecOps</td></tr>
                  <tr><td>Tooling</td><td>FOSSology, SPDX tools, Syft</td><td>Syft, cdxgen, Snyk, Dependency-Track</td></tr>
                  <tr><td>Recommended for</td><td>Software selling into legal-compliance-heavy markets</td><td>Most security-focused teams</td></tr>
                </tbody>
              </table>
            </div>

            <div className="tip-box">
              <strong>✅ Which Should You Use?</strong>
              <p>For most security and compliance teams, <strong>CycloneDX</strong> is the right starting point. It has better tooling support for vulnerability tracking, native VEX (Vulnerability Exploitability eXchange) for communicating exploitability status, and is the format most commonly requested by enterprise security questionnaires. You can always generate both from the same tooling.</p>
            </div>
          </section>

          <section id="what-sbom-contains">
            <h2>What a Good SBOM Actually Contains</h2>
            <p>The NTIA defines the minimum elements, but a production-grade SBOM goes further. Here is what each layer adds:</p>

            <div className="sc-table-wrap">
              <table className="sc-table">
                <thead>
                  <tr><th>Level</th><th>What It Includes</th><th>Sufficient For</th></tr>
                </thead>
                <tbody>
                  <tr><td>Minimum (NTIA)</td><td>Supplier, name, version, unique ID, dependency relationships, SBOM author, timestamp</td><td>Basic regulatory compliance</td></tr>
                  <tr><td>Standard</td><td>Above + licence info, cryptographic hash, download URL, known CVEs at time of generation</td><td>Licence compliance, vendor questionnaires</td></tr>
                  <tr><td>Comprehensive</td><td>Above + VEX statements, build environment, signing info, transitive dependencies, SBOM of SBOMs</td><td>ISO 27001, SOC 2, enterprise procurement, regulated industries</td></tr>
                </tbody>
              </table>
            </div>

            <div className="warn-box">
              <strong>⚠️ Transitive Dependencies Are the Real Risk</strong>
              <p>Log4j was a transitive dependency for most affected organisations, a dependency of a dependency, not something teams had directly chosen. A baseline SBOM that only lists direct dependencies would not have caught it. Your SBOM must include the full dependency tree, not just the first level.</p>
            </div>
          </section>

          <figure className="b-figure anim">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=520&fit=crop" alt="SBOM tools and software supply chain audit process" loading="lazy" />
            <figcaption>Generating and maintaining SBOMs has become significantly easier, most modern CI/CD pipelines can produce one automatically on every build with a single tool integration.</figcaption>
          </figure>

          <section id="how-to-generate">
            <h2>How to Generate Your First SBOM</h2>
            <p>The tooling has matured significantly. Generating an SBOM no longer requires specialist knowledge, for most stacks it is a single command.</p>

            <div className="checklist-card anim">
              <h3>🛠️ SBOM Generation, Step by Step</h3>
              <div className="checklist-item">
                <div className="check-icon">1️⃣</div>
                <div>
                  <div className="check-title">For Container Images, Syft</div>
                  <div className="check-desc">Syft is the easiest starting point. Install it and run: <code>syft &lt;image-name&gt; -o cyclonedx-json &gt; sbom.json</code>. It scans the image layers and produces a CycloneDX SBOM covering all OS packages and application dependencies inside the container.</div>
                </div>
              </div>
              <div className="checklist-item">
                <div className="check-icon">2️⃣</div>
                <div>
                  <div className="check-title">For Application Code, CycloneDX Plugins</div>
                  <div className="check-desc">CycloneDX provides language-native plugins: <code>@cyclonedx/cyclonedx-npm</code> for Node.js, <code>cyclonedx-bom</code> for Python, <code>cyclonedx-maven-plugin</code> for Java, <code>cyclonedx-gomod</code> for Go. Each reads your existing package manifest and outputs a standards-compliant SBOM.</div>
                </div>
              </div>
              <div className="checklist-item">
                <div className="check-icon">3️⃣</div>
                <div>
                  <div className="check-title">Ingest Into a Tracking Tool, Dependency-Track</div>
                  <div className="check-desc">Generating an SBOM once is not enough. Dependency-Track (free, open source, OWASP) ingests your SBOM and continuously monitors it against the NVD, OSV, and GitHub Advisory databases, alerting you whenever a new CVE is published against any component you are using.</div>
                </div>
              </div>
              <div className="checklist-item">
                <div className="check-icon">4️⃣</div>
                <div>
                  <div className="check-title">Automate in CI/CD</div>
                  <div className="check-desc">Add SBOM generation as a pipeline step so every build produces a fresh, versioned SBOM automatically. This means your SBOM always reflects the current state of your software, not a snapshot from six months ago. GitHub Actions, GitLab CI, and Jenkins all have native integrations.</div>
                </div>
              </div>
              <div className="checklist-item">
                <div className="check-icon">5️⃣</div>
                <div>
                  <div className="check-title">Sign and Attest Your SBOMs</div>
                  <div className="check-desc">Use Sigstore/Cosign to cryptographically sign your SBOMs and container images. This provides proof that the SBOM was generated from your pipeline and has not been tampered with, increasingly required for enterprise vendor onboarding and US federal contracts.</div>
                </div>
              </div>
            </div>
          </section>

          <section id="compliance-mapping">
            <h2>How SBOMs Map to Your Compliance Frameworks</h2>
            <div className="compliance-note">
              <strong>📋 Framework Mapping</strong>
              <p><strong>ISO 27001:2022 Annex A.8.8</strong>, Management of Technical Vulnerabilities: An SBOM is the inventory that makes this control implementable at scale. Without knowing what components you are running, you cannot manage their vulnerabilities.</p>
              <p><strong>ISO 27001:2022 Annex A.15.1/15.2</strong>, Supplier Relationships: Requiring SBOMs from software vendors is a directly implementable control under supplier security agreements.</p>
              <p><strong>SOC 2 CC9.2</strong>, Vendor and Supply Chain Risk Management: An SBOM program demonstrates that you have a systematic approach to identifying and monitoring software supply chain risk.</p>
              <p><strong>SOC 2 CC7.1</strong>, Vulnerability Detection: Continuous SBOM monitoring via Dependency-Track directly produces the evidence auditors need for this control.</p>
              <p><strong>NIST CSF 2.0, ID.SC (Supply Chain Risk Management)</strong>: SBOMs are explicitly referenced in NIST guidance as a mechanism for implementing supply chain risk management controls.</p>
            </div>
          </section>

          <section id="common-mistakes">
            <h2>Common SBOM Mistakes to Avoid</h2>
            <ul>
              <li><strong>Generating once and forgetting:</strong> An SBOM from six months ago is not a security tool, it is false confidence. SBOMs must be regenerated on every build and monitored continuously.</li>
              <li><strong>Covering only direct dependencies:</strong> Log4j was a transitive dependency. If your SBOM does not include the full dependency tree, it will not catch the next Log4Shell.</li>
              <li><strong>No VEX statements:</strong> Not every CVE in your SBOM represents a real risk. A CVE in a component you ship but do not execute is not exploitable. VEX (Vulnerability Exploitability eXchange) statements let you document which CVEs are not exploitable in your context, critical for reducing noise.</li>
              <li><strong>Not sharing with customers:</strong> An SBOM you keep internal provides you with visibility. An SBOM you share with customers provides them with transparency, and is increasingly what enterprise buyers are asking for before they sign.</li>
              <li><strong>Treating it as a compliance checkbox:</strong> The value of an SBOM is operational, not administrative. The organisations that benefit most are those that use it as a live tool in their vulnerability management process, not a document they attach to audit submissions.</li>
            </ul>
          </section>

          <div className="art-cta anim">
            <h3>Need Help Building Your SBOM Program?</h3>
            <p>SecComply helps organisations implement SBOM generation, continuous monitoring, and compliance mapping across ISO 27001, SOC 2, and the EU Cyber Resilience Act, as part of a complete supply chain security program.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer">Book a Free Consultation →</a>
          </div>

          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            {[
              ['What is an SBOM (Software Bill of Materials)?', 'An SBOM is a formal, machine-readable inventory of every component, library, dependency, and module in a software product, including open source packages, third-party libraries, and their known vulnerabilities. Think of it as the ingredient label for software. It tells you exactly what is inside your application, including the transitive dependencies you never consciously chose to include.'],
              ['Is an SBOM required for ISO 27001?', 'ISO 27001:2022 Annex A.8.8 (Management of Technical Vulnerabilities) and A.15.1 (Supplier Relationships) both implicitly require you to know what software components you are running and to track vulnerabilities in them. An SBOM is the practical mechanism to satisfy these controls at scale. Auditors are increasingly asking for evidence of software component inventory as part of these requirements.'],
              ['What is the difference between SPDX and CycloneDX?', 'SPDX (Software Package Data Exchange) is an ISO standard focused primarily on licence compliance and provenance. CycloneDX is an OWASP standard focused primarily on security, vulnerability tracking, VEX statements, and supply chain risk. For most security teams, CycloneDX is the right starting point. Both formats are widely supported and you can generate both from the same tooling.'],
              ['Who requires an SBOM?', 'US Executive Order 14028 mandated SBOMs for software sold to the US federal government. The EU Cyber Resilience Act requires SBOMs for products with digital elements sold in the EU. Enterprise buyers in financial services, healthcare, and critical infrastructure are increasingly requiring SBOMs in vendor onboarding. ISO 27001 and SOC 2 auditors are starting to ask for them as part of supply chain risk controls.'],
              ['How do I generate an SBOM?', 'For container images, use Syft (free, open source), run syft <image-name> -o cyclonedx-json. For application code, use the CycloneDX language plugin for your stack (npm, pip, Maven, Go, .NET). For continuous monitoring, ingest the generated SBOM into Dependency-Track to get alerted whenever a new CVE is published against any component you are using.'],
              ['What did Log4Shell teach us about SBOMs?', 'Log4Shell (CVE-2021-44228) affected hundreds of thousands of applications that used Apache Log4j, most organisations had no idea they were using it because it was a transitive dependency (a dependency of a dependency). Organisations with SBOMs identified their exposure in minutes. Those without spent days or weeks auditing codebases manually. It remains the single most cited reason why SBOM adoption accelerated so rapidly after 2021.'],
            ].map(([q, a], i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={e => window.toggleFaq && window.toggleFaq(e.currentTarget)}>
                  {q}<span className="faq-icon">+</span>
                </button>
                <div className="faq-answer"><div className="faq-answer-inner">{a}</div></div>
              </div>
            ))}
          </div>

        </article>

        <aside className="sidebar">
          <div className="sidebar-card">
            <h4>In This Article</h4>
            <a href="#what-is-sbom" className="toc-link">What Is an SBOM?</a>
            <a href="#why-now" className="toc-link">Why SBOMs Are No Longer Optional</a>
            <a href="#formats" className="toc-link">SPDX vs CycloneDX</a>
            <a href="#what-sbom-contains" className="toc-link">What a Good SBOM Contains</a>
            <a href="#how-to-generate" className="toc-link">How to Generate Your First SBOM</a>
            <a href="#compliance-mapping" className="toc-link">Compliance Framework Mapping</a>
            <a href="#common-mistakes" className="toc-link">Common Mistakes to Avoid</a>
          </div>
          <div className="sidebar-cta">
            <h4 style={{fontSize:'.85rem',fontWeight:700,color:'var(--tx)',marginBottom:8}}>SBOM &amp; Supply Chain Security</h4>
            <p>Build a complete SBOM program mapped to ISO 27001, SOC 2, and the EU Cyber Resilience Act.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer">Book a Free Consultation →</a>
          </div>
          <div className="sidebar-card">
            <h4>Related Posts</h4>
            <a href="/resources/blog/cloud-native-security" className="toc-link">☁️ Cloud-Native Security Guide</a>
            <a href="/resources/blog/ai-generated-code-security-risks" className="toc-link">🤖 AI Code Security Risks</a>
            <a href="/resources/blog/vulnerability-management-startups" className="toc-link">🔍 Vulnerability Management Guide</a>
            <a href="/resources/blog/top-5-cloud-misconfigurations" className="toc-link">⚠️ Top 5 Cloud Misconfigurations</a>
          </div>
          <div className="sidebar-card">
            <h4>Tags</h4>
            <div className="sidebar-tags">
              {['SBOM','Supply Chain','ISO 27001','SOC 2','CycloneDX','SPDX','DevSecOps','Log4Shell','Open Source Security','EU CRA'].map(t => (
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
