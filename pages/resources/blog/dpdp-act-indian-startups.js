import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DpdpActIndianStartups() {
  useEffect(() => {
    (function () {
      'use strict';
      const bar = document.getElementById('reading-progress');
      window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.width = (h > 0 ? Math.min(window.scrollY / h * 100, 100) : 0) + '%';
      }, { passive: true });
      const artEl = document.querySelector('.art');
      const rtEl = document.getElementById('read-time');
      if (artEl && rtEl) {
        const words = (artEl.innerText || '').trim().split(/\s+/).length;
        rtEl.textContent = '📖 ' + Math.max(1, Math.round(words / 220)) + ' min read';
      }
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const t = document.querySelector(a.getAttribute('href'));
          if (!t) return;
          e.preventDefault();
          window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 24, behavior: 'smooth' });
          history.pushState(null, '', a.getAttribute('href'));
        });
      });
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
      const btt = document.getElementById('btt');
      window.addEventListener('scroll', () => { if (btt) btt.classList.toggle('vis', window.scrollY > 600); }, { passive: true });
      const url = encodeURIComponent('https://seccomply.net/resources/blog/dpdp-act-indian-startups');
      const ttl = encodeURIComponent('DPDP Act 2023: What Indian Startups Need to Know, SecComply');
      const sl = document.getElementById('sl');
      const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () {
        const raw = 'https://seccomply.net/resources/blog/dpdp-act-indian-startups';
        (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject())
          .catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); });
        toast('Link copied!');
      };
      function toast(msg) {
        let t = document.getElementById('sc-toast');
        if (!t) { t = document.createElement('div'); t.id = 'sc-toast'; t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgb(var(--accent-rgb) / .4);opacity:0;transition:opacity .3s;pointer-events:none'; document.body.appendChild(t); }
        t.textContent = msg; t.style.opacity = '1'; clearTimeout(t._tid); t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500);
      }
      const fadeEls = document.querySelectorAll('.anim');
      if (fadeEls.length && 'IntersectionObserver' in window) {
        const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
        fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); });
      }
      window.toggleFaq = function (q) {
        const item = q.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      };
    })();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": "DPDP Act 2023: What Indian Startups Need to Know",
        "description": "India's Digital Personal Data Protection Act 2023 is now enforceable. Here is a plain-language breakdown of what it requires, who it affects, and the exact steps Indian startups must take to comply before penalties hit.",
        "image": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/blog/dpdp-act-2023-indian-startups-guide.png", "width": 1200, "height": 630, "caption": "DPDP Act 2023 compliance guide for Indian startups" },
        "author": { "@type": "Person", "name": "Soham Sawant", "worksFor": { "@type": "Organization", "name": "SecComply" } },
        "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } },
        "datePublished": "2026-03-11", "dateModified": "2026-03-11",
        "mainEntityOfPage": "https://seccomply.net/resources/blog/dpdp-act-indian-startups",
        "articleSection": "DPDP Act", "inLanguage": "en-IN", "timeRequired": "PT8M"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the DPDP Act 2023?", "acceptedAnswer": { "@type": "Answer", "text": "The Digital Personal Data Protection Act 2023 is India's comprehensive data privacy law, notified in August 2023. It governs the processing of digital personal data of Indian residents by any entity operating in India or processing Indian residents' data from outside India." } },
          { "@type": "Question", "name": "What is the penalty for DPDP Act non-compliance?", "acceptedAnswer": { "@type": "Answer", "text": "Penalties under the DPDP Act 2023 range up to ₹250 crore per instance for data breaches, up to ₹200 crore for failure to notify the Data Protection Board, and up to ₹50 crore for violating children's data provisions. The Board can also direct deletion of data." } },
          { "@type": "Question", "name": "Does the DPDP Act apply to startups?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The DPDP Act applies to any entity that processes digital personal data of individuals in India, regardless of company size or sector. There is no SME exemption, though the government may notify certain categories of Data Fiduciaries as Significant Data Fiduciaries with additional obligations." } }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
          { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
          { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
          { "@type": "ListItem", "position": 4, "name": "DPDP Act 2023", "item": "https://seccomply.net/resources/blog/dpdp-act-indian-startups" }
        ]
      }
    ]
  };

  return (
    <Layout>
      <Head>
        <title>DPDP Act 2023: What Indian Startups Need to Know, SecComply</title>
        <meta name="description" content="India's DPDP Act 2023 is enforceable. Plain-language breakdown of obligations, penalties up to ₹250 crore, consent rules, breach notification deadlines, and exact compliance steps for Indian startups." />
        <meta name="keywords" content="DPDP Act 2023, Digital Personal Data Protection Act India, DPDP compliance startups, data protection India, DPDP penalties, consent manager India, Data Protection Board India, DPDP breach notification" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Soham Sawant" />
        <meta name="language" content="en-IN" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-act-indian-startups" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#020617" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="DPDP Act 2023: What Indian Startups Need to Know" />
        <meta property="og:description" content="Plain-language breakdown of DPDP Act 2023 obligations, penalties up to ₹250 crore, and exact compliance steps for Indian startups." />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-act-indian-startups" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/dpdp-act-2023-indian-startups-guide.png" />
        <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DPDP Act 2023 compliance guide for Indian startups" />
        <meta property="og:site_name" content="SecComply" /><meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content="2026-03-11T08:00:00+05:30" />
        <meta property="article:modified_time" content="2026-03-11T08:00:00+05:30" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:section" content="DPDP Act" />
        <meta property="article:tag" content="DPDP Act" /><meta property="article:tag" content="Data Protection India" /><meta property="article:tag" content="Startup Compliance" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@seccomply" /><meta name="twitter:creator" content="@seccomply" />
        <meta name="twitter:title" content="DPDP Act 2023: What Indian Startups Need to Know" />
        <meta name="twitter:description" content="Penalties up to ₹250 crore. Consent requirements. Breach notification deadlines. Here's what you must do." />
        <meta name="twitter:image" content="https://seccomply.net/assets/images/blog/dpdp-act-2023-indian-startups-guide.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />      </Head>

      <style jsx global>{`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:var(--sans);background:var(--bg);color:var(--tx);-webkit-font-smoothing:antialiased;overflow-x:hidden}
        a{color:inherit;text-decoration:none}
        #reading-progress{position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,var(--accent),var(--accent-light));z-index:9999;transition:width .1s linear;border-radius:0 2px 2px 0}
        .b-hero-wrap{background:linear-gradient(160deg,var(--bg-primary) 0%,var(--bg-secondary) 60%,var(--bg-card) 100%);border-bottom:1px solid var(--bs);padding:96px 0 60px;position:relative;overflow:hidden}
        .b-hero-wrap::before{content:'';position:absolute;top:-120px;right:-80px;width:500px;height:500px;background:radial-gradient(circle,rgb(var(--accent-rgb) / .08) 0%,transparent 70%);pointer-events:none}
        .b-hero-inner{max-width:860px;margin:0 auto;padding:0 24px}
        .b-breadcrumb{display:flex;align-items:center;gap:8px;font-size:.78rem;color:var(--tm);margin-bottom:24px;flex-wrap:wrap}
        .b-breadcrumb a{color:var(--cy);transition:opacity .2s}.b-breadcrumb a:hover{opacity:.8}.b-breadcrumb span{opacity:.4}
        .b-cat-badge{display:inline-flex;align-items:center;gap:7px;padding:5px 14px;background:rgb(var(--accent-rgb) / .1);border:1px solid rgb(var(--accent-rgb) / .25);border-radius:100px;font-size:.72rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--cy);margin-bottom:20px}
        .b-hero-h1{font-size:clamp(1.9rem,5vw,3rem);font-weight:900;line-height:1.1;letter-spacing:-.03em;color:var(--tx);margin-bottom:18px}
        .b-hero-h1 .acc{background:linear-gradient(90deg,var(--accent),var(--accent-light));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .b-hero-sub{font-size:1.08rem;line-height:1.75;color:var(--tm);max-width:740px;margin-bottom:28px}
        /* Author card */
        .b-author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-top:24px;flex-wrap:wrap}
        .b-author-strip .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-light));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.95rem;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgb(var(--accent-rgb) / .3)}
        .b-author-strip .author-info{flex:1;min-width:0}
        .b-author-strip .name{font-weight:700;color:var(--tx);font-size:.95rem;margin-bottom:3px}
        .b-author-strip .meta-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.8rem;margin-bottom:2px}
        .b-author-strip .date-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.78rem;color:var(--tm)}
        .b-author-strip .dot{opacity:.3}
        .b-share-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;width:100%}
        .b-share-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:.75rem;font-weight:600;border:1px solid var(--bs);background:rgba(255,255,255,.04);color:var(--tm);transition:all .2s;cursor:pointer}
        .b-share-btn:hover{border-color:var(--cy);color:var(--cy)}
        .b-stats-bar{display:flex;gap:0;border:1px solid var(--bs);border-radius:16px;overflow:hidden;margin:40px 0 0;background:var(--bgc)}
        .b-stat{flex:1;padding:20px 24px;text-align:center;border-right:1px solid var(--bs)}.b-stat:last-child{border-right:none}
        .b-stat .n{font-size:1.7rem;font-weight:900;color:var(--cy);line-height:1}
        .b-stat .l{font-size:.72rem;color:var(--tm);margin-top:4px;font-weight:500}
        .art-wrap{max-width:1160px;margin:0 auto;padding:56px 24px 80px;display:grid;grid-template-columns:1fr 280px;gap:48px;align-items:start}
        .art{font-size:1.02rem;line-height:1.8;color:var(--tb);min-width:0}
        .art p{margin-bottom:1.3em}
        .art h2{font-size:1.55rem;font-weight:800;color:var(--tx);margin:2.4em 0 .7em;letter-spacing:-.02em;padding-bottom:.5em;border-bottom:1px solid var(--bs)}
        .art h3{font-size:1.15rem;font-weight:700;color:var(--cy);margin:1.8em 0 .5em}
        .art strong{color:var(--tx);font-weight:700}.art ul,.art ol{padding-left:1.5em;margin-bottom:1.3em}.art li{margin-bottom:.5em}
        .art a{color:var(--cy);text-decoration:underline;text-decoration-color:rgb(var(--accent-rgb) / .35)}.art a:hover{text-decoration-color:var(--cy)}
        .info-card{background:var(--bgc);border:1px solid var(--bs);border-radius:16px;padding:28px;margin:2em 0;position:relative;overflow:hidden;transition:border-color .3s}
        .info-card:hover{border-color:var(--bo)}
        .info-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent-light))}
        .info-card-title{font-size:1.1rem;font-weight:800;color:var(--tx);margin-bottom:14px;display:flex;align-items:center;gap:10px}
        .info-card ul{padding-left:1.4em;margin:0}.info-card li{font-size:.93rem;color:var(--tb);margin-bottom:.55em;line-height:1.6}
        .key-takeaway{background:rgb(var(--green-rgb) / .06);border:1px solid rgb(var(--green-rgb) / .2);border-radius:14px;padding:20px 24px;margin:2em 0}
        .key-takeaway strong{color:var(--green-light);display:block;font-size:.8rem;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}
        .key-takeaway p{font-size:.97rem;color:#A7F3D0;line-height:1.65;margin:0}
        .pull-quote{border-left:3px solid var(--cy);padding:16px 24px;margin:2em 0;background:rgb(var(--accent-rgb) / .04);border-radius:0 12px 12px 0}
        .pull-quote p{font-size:1.08rem;font-style:italic;color:var(--tx);line-height:1.65;margin:0}
        .penalty-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin:1.5em 0}
        .penalty-card{background:var(--bgc);border:1px solid rgb(var(--red-rgb) / .2);border-radius:14px;padding:20px;text-align:center}
        .penalty-card .amt{font-size:1.5rem;font-weight:900;color:var(--red);line-height:1;margin-bottom:6px}
        .penalty-card .label{font-size:.82rem;color:var(--tm);line-height:1.5}
        .sc-table{width:100%;border-collapse:collapse;margin:1.5em 0;font-size:.88rem}
        .sc-table th{background:rgb(var(--accent-rgb) / .08);color:var(--cy);font-weight:700;padding:10px 16px;text-align:left;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;border-bottom:2px solid rgb(var(--accent-rgb) / .2)}
        .sc-table td{padding:11px 16px;border-bottom:1px solid var(--bs);vertical-align:top;color:var(--tb)}
        .sc-table tr:last-child td{border-bottom:none}.sc-table tr:hover td{background:rgba(255,255,255,.02)}.sc-table td:first-child{font-weight:700;color:var(--tx)}
        .art-cta{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .12),rgb(var(--accent-rgb) / .06));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:16px;padding:32px 28px;margin:3em 0;text-align:center}
        .art-cta h3{font-size:1.25rem;font-weight:800;color:var(--tx);margin-bottom:10px}
        .art-cta p{font-size:.92rem;color:var(--tm);margin-bottom:20px;line-height:1.6}
        .art-cta a{display:inline-flex;align-items:center;gap:8px;padding:12px 28px;background:linear-gradient(135deg,var(--accent),var(--accent-light));color:#fff;font-weight:700;font-size:.9rem;border-radius:100px;transition:all .3s;box-shadow:0 6px 24px rgb(var(--accent-rgb) / .3)}
        .art-cta a:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgb(var(--accent-rgb) / .4);text-decoration:none}
        .faq-section{margin:3em 0}
        .faq-section h2{font-size:1.4rem;font-weight:800;color:var(--tx);margin-bottom:1em;padding-bottom:.5em;border-bottom:1px solid var(--bs)}
        .faq-item{border:1px solid var(--bs);border-radius:12px;margin-bottom:10px;overflow:hidden;transition:border-color .3s}.faq-item.open{border-color:var(--bo)}
        .faq-question{background:var(--bgc);color:var(--tx);border:none;width:100%;text-align:left;padding:16px 20px;font-size:.95rem;font-weight:600;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:var(--sans);transition:background .2s}
        .faq-question:hover{background:var(--bgc2)}
        .faq-icon{color:var(--cy);font-size:1.2rem;font-weight:300;flex-shrink:0;margin-left:12px;transition:transform .3s}.faq-item.open .faq-icon{transform:rotate(45deg)}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height .4s ease}.faq-item.open .faq-answer{max-height:500px}
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
        .sc-table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5em 0;border-radius:8px}
        .sc-table-wrap .sc-table{margin:0}
        @media(max-width:900px){.art-wrap{grid-template-columns:1fr}.sidebar{display:none}.b-stats-bar{flex-wrap:wrap}.b-stat{min-width:50%;flex:1 1 50%}.cost-grid,.penalty-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.b-hero-h1{font-size:1.65rem}.b-hero-sub{font-size:.97rem}.b-author-strip{flex-direction:column;align-items:flex-start;gap:12px}.b-stat{min-width:100%;flex:1 1 100%}.cost-grid,.penalty-grid{grid-template-columns:1fr}.sc-table{font-size:.8rem}.sc-table th,.sc-table td{padding:8px 10px}}
        @media(max-width:480px){.b-hero-h1{font-size:1.45rem}.b-hero-inner{padding:0 16px}.art-wrap{padding:40px 16px 60px}.b-share-row{gap:6px}.b-share-btn{padding:5px 10px;font-size:.72rem}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .anim{animation:fadeUp .6s ease both}
      `}</style>

      <div id="reading-progress" aria-hidden="true" />

      <header className="b-hero-wrap">
        <div className="b-hero-inner">
          <nav className="b-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/resources">Resources</Link><span>/</span>
            <Link href="/resources/blog">Blog</Link><span>/</span>
            <span>DPDP Act</span>
          </nav>
          <div className="b-cat-badge">🇮🇳 DPDP Act 2023</div>
          <h1 className="b-hero-h1">
            <span className="acc">DPDP Act 2023:</span> What Indian<br />Startups Need to Know
          </h1>
          <p className="b-hero-sub">India's Digital Personal Data Protection Act is now enforceable. Penalties reach ₹250 crore per instance. Here is a plain-language breakdown of what it requires, who it applies to, and exactly what your startup needs to do.</p>
          <div className="b-author-strip">
            <div className="avatar">SS</div>
            <div className="author-info">
              <div className="name">Soham Sawant</div>
              <div className="meta-row">
                <span style={{color:"var(--cy)",fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span>
                <span className="dot">·</span>
                <span id="read-time">📖 8 min read</span>
              </div>
              <div className="date-row">
                <span>📅 March 11, 2026</span>
                <span className="dot">·</span>
                <span>🏢 SecComply</span>
              </div>
            </div>
            <div className="b-share-row">
              <a id="sl" href="#" target="_blank" rel="noopener" className="b-share-btn">in LinkedIn</a>
              <a id="st" href="#" target="_blank" rel="noopener" className="b-share-btn">𝕏 Twitter</a>
              <button onClick={() => typeof window !== "undefined" && window.copyLink()} className="b-share-btn">🔗 Copy link</button>
            </div>
          </div>
          <div className="b-stats-bar">
            <div className="b-stat"><div className="n">₹250Cr</div><div className="l">Max penalty per data breach</div></div>
            <div className="b-stat"><div className="n">72 hrs</div><div className="l">Breach notification window</div></div>
            <div className="b-stat"><div className="n">1.4B</div><div className="l">Data principals covered</div></div>
            <div className="b-stat"><div className="n">100%</div><div className="l">Startups collecting PII are in scope</div></div>
          </div>
        </div>
      </header>

      <div className="art-wrap">
        <article className="art">

          <section id="intro">
            <p>Most Indian startups have spent the last two years watching the DPDP Act move through notification, consultation, and draft rules, assuming the enforcement timeline was still distant. That assumption is now a risk. The rules are finalised, the Data Protection Board is being constituted, and enforcement is moving from paper to practice.</p>
            <p>This guide covers what the Act actually requires, who qualifies as a Data Fiduciary, what the penalties look like in practice, and the specific steps a startup needs to take before an investigation arrives.</p>
            <div className="key-takeaway">
              <strong>🎯 Bottom Line</strong>
              <p>If your product collects, stores, or processes any personal data of individuals in India, names, emails, phone numbers, location, health data, financial data, you are a Data Fiduciary under the DPDP Act. There is no minimum size threshold.</p>
            </div>
          </section>

          <section id="what-is-dpdp">
            <h2>What is the DPDP Act 2023?</h2>
            <p>The Digital Personal Data Protection Act 2023 was notified in August 2023. It is India's first comprehensive personal data protection law, replacing the patchwork of provisions in the IT Act 2000 that previously governed data privacy.</p>
            <p>The Act governs the processing of <strong>digital personal data</strong>, any data about an identifiable individual that is collected or stored in digital form. It applies to:</p>
            <ul>
              <li>Any entity that processes personal data of individuals in India, within India</li>
              <li>Any entity outside India that processes personal data of individuals in India in connection with offering goods or services to them</li>
            </ul>
            <p>This extraterritorial scope mirrors the GDPR model. An Indian SaaS startup serving users in India, or a foreign company with Indian users, both fall within scope.</p>

            <h3>Key Definitions</h3>
            <div className="info-card anim">
              <div className="info-card-title">📖 Who's Who Under the DPDP Act</div>
              <ul>
                <li><strong>Data Principal</strong>, the individual whose personal data is being processed. In India, this includes minors whose data is processed by a guardian.</li>
                <li><strong>Data Fiduciary</strong>, the entity (startup, company, organisation) that determines the purpose and means of processing personal data. This is where most obligations sit.</li>
                <li><strong>Data Processor</strong>, an entity that processes data on behalf of a Data Fiduciary. Cloud providers, analytics vendors, payment processors.</li>
                <li><strong>Significant Data Fiduciary (SDF)</strong>, a Data Fiduciary designated by the government based on volume of data processed, sensitivity of data, national security risk, and other criteria. SDFs have additional obligations including a Data Protection Officer, Data Auditor, and Data Protection Impact Assessments.</li>
                <li><strong>Consent Manager</strong>, an accredited entity through which a Data Principal can give, manage, review, or withdraw consent.</li>
              </ul>
            </div>
          </section>

          <section id="core-obligations">
            
            <figure className="b-figure">
              <img src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=760&q=80&auto=format&fit=crop" alt="Digital data privacy and protection concept, India DPDP Act 2023" loading="lazy" />
              <figcaption>The DPDP Act 2023 governs digital personal data of all 1.4 billion Indians, regardless of where the processing entity is headquartered.</figcaption>
            </figure>

          <h2>Core Obligations for Data Fiduciaries</h2>

            <h3>1. Lawful Basis: Consent First</h3>
            <p>The DPDP Act operates primarily on a <strong>consent-first</strong> model. Before processing personal data, a Data Fiduciary must obtain free, specific, informed, unconditional, and unambiguous consent from the Data Principal. The consent request must:</p>
            <ul>
              <li>Be presented in clear, plain language, not legalese</li>
              <li>State the specific purpose of processing</li>
              <li>Be presented separately from terms of service or other documents</li>
              <li>Be available in all 22 official languages of India (for consumer-facing applications)</li>
            </ul>
            <p>The Act also recognises "legitimate uses", processing without consent for employment purposes, state functions, medical emergencies, and certain research activities. But most startup use cases will require explicit consent.</p>

            <h3>2. Purpose Limitation & Data Minimisation</h3>
            <p>Personal data may only be processed for the specific purpose for which consent was obtained. Once that purpose is fulfilled, the data must be erased. You cannot collect user email addresses for account creation and then use them for marketing without separate consent.</p>

            <h3>3. Data Principal Rights</h3>
            <div className="info-card anim">
              <div className="info-card-title">⚖️ Rights Every User Has Against Your Startup</div>
              <ul>
                <li><strong>Right to access</strong>, summary of personal data processed and processing activities</li>
                <li><strong>Right to correction and erasure</strong>, correct inaccurate data or erase data no longer needed for the stated purpose</li>
                <li><strong>Right to grievance redressal</strong>, a readily available mechanism to raise complaints, with response within a defined period</li>
                <li><strong>Right to nominate</strong>, nominate an individual to exercise rights on their behalf in case of death or incapacity</li>
                <li><strong>Right to withdraw consent</strong>, withdrawal must be as easy as giving consent. You cannot make withdrawal harder than opt-in.</li>
              </ul>
            </div>

            <h3>4. Breach Notification</h3>
            <p>On becoming aware of a personal data breach, a Data Fiduciary must notify <strong>both</strong> the Data Protection Board and each affected Data Principal. The draft rules indicate a <strong>72-hour notification window</strong> to the Board, matching GDPR's standard. Delayed notification is itself a separately penalised offence.</p>

            <h3>5. Children's Data</h3>
            <p>Processing of personal data of children (under 18) requires verifiable parental consent before processing. Behavioural tracking and targeted advertising to children is <strong>prohibited outright</strong>. This is one of the most strictly enforced provisions and carries a separate penalty tier.</p>
          </section>

          <section id="penalties">
            <h2>Penalties: How Much Does Non-Compliance Actually Cost?</h2>
            <div className="penalty-grid anim">
              <div className="penalty-card"><div className="amt">₹250 Cr</div><div className="label">Data breach due to failure to implement adequate security safeguards</div></div>
              <div className="penalty-card"><div className="amt">₹200 Cr</div><div className="label">Failure to notify the Data Protection Board of a personal data breach</div></div>
              <div className="penalty-card"><div className="amt">₹200 Cr</div><div className="label">Failure to notify affected Data Principals of a personal data breach</div></div>
              <div className="penalty-card"><div className="amt">₹50 Cr</div><div className="label">Violation of provisions relating to processing children's personal data</div></div>
              <div className="penalty-card"><div className="amt">₹50 Cr</div><div className="label">Failure to fulfil obligations of a Significant Data Fiduciary</div></div>
              <div className="penalty-card"><div className="amt">₹10,000</div><div className="label">Failure to maintain accuracy of data, honour erasure requests, or provide grievance redressal</div></div>
            </div>
            <div className="pull-quote">
              <p>These are per-instance penalties, not annual caps. A single breach affecting 50,000 users could attract multiple simultaneous penalties across notification failure, security failure, and erasure failures.</p>
            </div>
          </section>

          <section id="compliance-steps">
            
          <figure className="b-figure">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=760&q=80&auto=format&fit=crop" alt="Compliance roadmap and legal documentation for startups" loading="lazy" />
              <figcaption>A documented compliance posture is not just a regulatory requirement, it is increasingly a commercial prerequisite for enterprise sales in India.</figcaption>
            </figure>

          <h2>6-Step DPDP Compliance Roadmap for Startups</h2>
            <div className="sc-table-wrap">
            <table className="sc-table">
              <thead><tr><th>Step</th><th>What to Do</th><th>Timeline</th></tr></thead>
              <tbody>
                {[
                  ['1. Data Mapping', 'Map every category of personal data your product collects, stores, or transmits. Include third-party integrations (analytics, payments, CRM).', 'Week 1–2'],
                  ['2. Consent Architecture', 'Redesign signup and data collection flows to capture granular, purpose-specific consent. Remove pre-ticked boxes. Build consent withdrawal flows.', 'Week 2–4'],
                  ['3. Privacy Notice', 'Draft a plain-language privacy notice covering: what data is collected, why, how long it is retained, who it is shared with, and how users exercise rights. Available in relevant Indian languages for consumer apps.', 'Week 2–3'],
                  ['4. Security Safeguards', 'Implement encryption at rest and in transit, access controls, audit logging, and a data breach detection mechanism. Document all safeguards.', 'Week 3–6'],
                  ['5. Breach Response Plan', 'Create a documented incident response procedure covering: detection, internal escalation, Board notification within 72 hours, and Data Principal notification drafts.', 'Week 4–5'],
                  ['6. Vendor Contracts', 'Audit Data Processor agreements. Every vendor handling Indian personal data must have a contract specifying processing restrictions, security obligations, and breach notification requirements.', 'Week 5–8'],
                ].map(([s, w, t]) => <tr key={s}><td>{s}</td><td>{w}</td><td style={{whiteSpace:"nowrap",color:"var(--cy)"}}>{t}</td></tr>)}
              </tbody>
            </table>
            </div>
          </section>

          <section id="dpdp-vs-gdpr">
            <h2>DPDP Act vs GDPR: Key Differences</h2>
            <p>Many startups already have GDPR compliance in place. Here is what transfers, and what does not.</p>
            <div className="sc-table-wrap">
            <table className="sc-table">
              <thead><tr><th>Dimension</th><th>DPDP Act 2023</th><th>GDPR</th></tr></thead>
              <tbody>
                {[
                  ['Lawful bases', 'Primarily consent + legitimate uses', '6 lawful bases including legitimate interests'],
                  ['Right to portability', 'Not included in current Act', 'Explicit right to data portability'],
                  ['Data localisation', 'Government may restrict cross-border transfers to certain countries', 'SCCs and adequacy decisions govern transfers'],
                  ['Children\'s age', 'Under 18 (higher than GDPR\'s 16)', '13–16 depending on member state'],
                  ['DPO requirement', 'Only for Significant Data Fiduciaries', 'Required for certain processing activities'],
                  ['Max penalty', '₹250 crore per instance', '€20M or 4% global annual turnover'],
                  ['Enforcement body', 'Data Protection Board of India', 'National supervisory authorities (28 DPAs)'],
                ].map(([d, dp, g]) => <tr key={d}><td>{d}</td><td>{dp}</td><td>{g}</td></tr>)}
              </tbody>
            </table>
            </div>
          </section>

          <div className="art-cta anim">
            <h3>Map your DPDP Act gaps before the Board does</h3>
            <p>SecComply runs a dedicated DPDP Act readiness assessment, data mapping, consent architecture review, breach notification readiness, and vendor contract audit. Output: a prioritised remediation roadmap with timelines.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener">Book Free DPDP Assessment →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked Questions</h2>
            {[
              ['Does the DPDP Act apply to B2B startups?', 'Yes. If your B2B product processes personal data of employees or end-users of your clients, even indirectly, you are processing personal data of individuals in India and the Act applies. You will likely be a Data Processor for your clients, who are Data Fiduciaries. Your contracts must reflect this.'],
              ['What is a Significant Data Fiduciary?', 'The government will designate certain Data Fiduciaries as Significant based on volume and sensitivity of data processed, risk to rights of Data Principals, national security implications, and other criteria. SDFs must appoint a Data Protection Officer in India, conduct annual data audits, and perform Data Protection Impact Assessments for high-risk processing.'],
              ['Can we store Indian users\' data outside India?', 'The DPDP Act permits cross-border data transfers to countries notified by the government as permissible. The government has not yet published the restricted countries list, but the Act gives it power to restrict transfers to specific countries. Monitor MeitY notifications closely.'],
              ['What counts as a personal data breach under DPDP?', 'Any unauthorised processing, accidental disclosure, loss, destruction, or alteration of personal data that may cause harm to Data Principals. This is broader than just external cyberattacks, it includes internal misuse, accidental email to wrong recipients, and system misconfiguration exposing data.'],
              ['We are a small startup with 10 employees. Do we still need to comply?', 'Yes. The DPDP Act has no SME exemption based on employee count. If you process personal data of individuals in India, you are a Data Fiduciary. The Act may provide some relaxation in obligations for certain categories of Data Fiduciaries through notifications, but no blanket exemption exists for startups.'],
            ].map(([q, a]) => (
              <div key={q} className="faq-item">
                <button className="faq-question" onClick={(e) => typeof window !== 'undefined' && window.toggleFaq(e.currentTarget)}>{q} <span className="faq-icon">+</span></button>
                <div className="faq-answer"><div className="faq-answer-inner">{a}</div></div>
              </div>
            ))}
          </section>

        </article>

        <aside className="sidebar">
          <div className="sidebar-card">
            <h4>Table of Contents</h4>
            {[['#intro','Introduction'],['#what-is-dpdp','What is the DPDP Act?'],['#core-obligations','Core Obligations'],['#penalties','Penalties'],['#compliance-steps','6-Step Roadmap'],['#dpdp-vs-gdpr','DPDP vs GDPR'],['#faq','FAQ']].map(([href, label]) => (
              <a key={href} href={href} className="toc-link">{label}</a>
            ))}
          </div>
          <div className="sidebar-cta">
            <h4 style={{fontSize:".72rem",fontWeight:700,textTransform:"uppercase",letterSpacing:".1em",color:"var(--cy)",marginBottom:"10px"}}>Free Assessment</h4>
            <p>Find out exactly where your startup stands against DPDP Act requirements.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener">Book Now →</a>
          </div>
          <div className="sidebar-card">
            <h4>Tags</h4>
            <div className="sidebar-tags">
              {['DPDP Act','Data Protection India','Privacy Compliance','Personal Data','Consent','Breach Notification','MeitY','Startup Compliance','ISO 27001','SecComply'].map(t => (
                <span key={t} className="sidebar-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="sidebar-card">
            <h4>Related Reading</h4>
            {[['/resources/blog/soc2-vs-iso27001','SOC 2 vs ISO 27001, Which First?'],['/resources/blog/top-security-tools-startup','Top 10 Security Tools for Startups'],['/resources/blog/skt-breach-compliance-failure','SK Telecom: $97M Compliance Failure']].map(([href, label]) => (
              <a key={href} href={href} className="toc-link" style={{borderLeft:"none",paddingLeft:0}}>{label} →</a>
            ))}
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
    </Layout>
  )
}