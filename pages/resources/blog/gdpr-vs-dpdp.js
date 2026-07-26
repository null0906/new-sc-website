import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function GDPRvsDPDP() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/gdpr-vs-dpdp'); const ttl = encodeURIComponent('GDPR vs DPDP Act: Key Differences Every Indian Company Must Know, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/gdpr-vs-dpdp'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
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
        <title>GDPR vs DPDP Act: Key Differences Every Indian Company Must Know | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="Side-by-side comparison of GDPR and India's DPDP Act 2023. Consent, rights, penalties, cross-border transfers, children's data thresholds - what's the same, what's different, and the gaps GDPR-compliant companies still need to fix for India." />
        <meta name="keywords" content="GDPR vs DPDP, GDPR DPDP comparison, DPDP Act 2023 India GDPR, Indian data privacy GDPR, DPDP lawful basis, GDPR legitimate interests India, DPDP children data 18 years, cross border transfer DPDP, DPDP consent manager, data protection India" />
        <meta property="og:title" content="GDPR vs DPDP Act: Key Differences Every Indian Company Must Know" />
        <meta property="og:description" content="Already GDPR-compliant and treating DPDP as basically the same thing? That assumption creates compliance gaps. Here is the direct comparison you need." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/gdpr-vs-dpdp" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/gdpr-dpdp-og.png" />
        <meta property="article:published_time" content="2026-03-26" />
        <meta property="article:author" content="SecComply" />
        <meta property="article:tag" content="GDPR" />
        <meta property="article:tag" content="DPDP Act" />
        <meta property="article:tag" content="Data Privacy" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/gdpr-vs-dpdp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "GDPR vs DPDP Act: Key Differences Every Indian Company Must Know",
              "description": "Side-by-side comparison of GDPR and India's DPDP Act - consent, rights, penalties, cross-border transfers, and the gaps GDPR-compliant companies still need to fix for India.",
              "author": { "@type": "Organization", "name": "SecComply" },
              "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } },
              "datePublished": "2026-03-26", "dateModified": "2026-03-26",
              "mainEntityOfPage": "https://seccomply.net/resources/blog/gdpr-vs-dpdp",
              "keywords": "GDPR vs DPDP, DPDP Act 2023, India data privacy, GDPR comparison, lawful basis, consent manager, cross-border transfers",
              "articleSection": "DPDP Act", "wordCount": 1600, "timeRequired": "PT7M"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Does GDPR compliance mean you are DPDP compliant?", "acceptedAnswer": { "@type": "Answer", "text": "No. GDPR gives you a strong foundation - data mapping, consent flows, vendor DPAs, and breach response largely transfer. But the 22-language privacy notice requirement, the nomination right, Consent Manager integration, DPDP's narrower lawful basis framework (no Legitimate Interests), and the higher children's data threshold of 18 years all need India-specific work that a GDPR programme does not cover." } },
                { "@type": "Question", "name": "What is GDPR's Legitimate Interests basis and why doesn't DPDP have it?", "acceptedAnswer": { "@type": "Answer", "text": "GDPR's Legitimate Interests is a lawful basis allowing organisations to process personal data without consent when their interests are not overridden by the individual's rights - commonly used for marketing to existing customers, fraud detection, and internal analytics. DPDP has no equivalent. Under DPDP, the two lawful bases are Consent and Legitimate Use (specific enumerated purposes). Any processing currently running on Legitimate Interests under GDPR may need explicit consent for Indian users." } },
                { "@type": "Question", "name": "Which regulation has stricter children's data rules?", "acceptedAnswer": { "@type": "Answer", "text": "DPDP, significantly. GDPR sets the children's data threshold at 16 years (13 in some member states with parental consent). DPDP sets it at 18 with zero exceptions. Any organisation collecting data from users under 18 in India - regardless of what their GDPR programme allows - must obtain verifiable parental consent under DPDP." } },
                { "@type": "Question", "name": "How do cross-border data transfers differ between GDPR and DPDP?", "acceptedAnswer": { "@type": "Answer", "text": "GDPR operates on a positive list - transfers outside the EU/EEA are blocked unless the destination country has an adequacy decision or specific safeguards (SCCs, BCRs) are in place. DPDP operates on a negative list - transfers are permitted to all countries except those specifically blocked by the Indian government. In practice, this makes DPDP's cross-border transfer regime significantly more permissive than GDPR's." } },
                { "@type": "Question", "name": "Should Indian companies run one compliance programme or two?", "acceptedAnswer": { "@type": "Answer", "text": "One programme. Map both frameworks to a single control set. Your GDPR baseline handles data mapping, consent flows, vendor DPAs, breach response, and most rights workflows. Where DPDP requires more - 22 Indian language notices, the nomination right, Consent Manager integration, children's threshold at 18 - layer those on top. Running two separate programmes doubles administrative overhead without adding proportionate compliance benefit." } }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
                { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
                { "@type": "ListItem", "position": 4, "name": "GDPR vs DPDP", "item": "https://seccomply.net/resources/blog/gdpr-vs-dpdp" }
              ]
            }
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
    .compare-table-wrap{overflow-x:auto;margin:2rem 0;border-radius:14px;border:1px solid var(--bo)}
    .compare-table{width:100%;border-collapse:collapse}
    .compare-table th{background:var(--bgc);padding:.85rem 1.1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .compare-table th:nth-child(2){color:var(--purple)}
    .compare-table th:nth-child(3){color:var(--accent)}
    .compare-table td{padding:.82rem 1.1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .compare-table tr:last-child td{border-bottom:none}
    .compare-table tr:hover td{background:rgb(var(--accent-rgb) / .03)}
    .compare-table td:first-child{color:var(--tx);font-weight:600;font-size:.82rem}
    .tick-y{color:var(--green);font-weight:700}
    .tick-n{color:var(--red);font-weight:700}
    .tick-u{color:var(--yellow);font-weight:600}
    .gap-list{display:flex;flex-direction:column;gap:.65rem;margin:1.5rem 0}
    .gap-item{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s,background .2s}
    .gap-item:hover{border-color:var(--bo);background:var(--bgc)}
    .gap-badges{display:flex;flex-direction:column;gap:4px;flex-shrink:0;min-width:64px}
    .gap-effort,.gap-prio{font-size:.63rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:.15rem .5rem;border-radius:4px;text-align:center}
    .eff-med{background:rgb(var(--yellow-rgb) / .12);color:var(--yellow)}
    .eff-high{background:rgb(var(--red-rgb) / .12);color:var(--red)}
    .eff-low{background:rgb(var(--green-rgb) / .12);color:var(--green)}
    .pri-high{background:rgb(var(--accent-rgb) / .12);color:var(--accent)}
    .pri-med{background:rgb(var(--purple-rgb) / .12);color:var(--purple)}
    .gap-body strong{display:block;color:var(--tx);font-size:.9rem;margin-bottom:3px}
    .gap-body span{font-size:.83rem;color:var(--tm)}
    .rights-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;margin:1.5rem 0}
    .right-card{border-radius:10px;padding:.9rem 1.1rem;text-align:center}
    .right-both{background:rgb(var(--green-rgb) / .06);border:1px solid rgb(var(--green-rgb) / .2)}
    .right-gdpr{background:rgb(var(--purple-rgb) / .06);border:1px solid rgb(var(--purple-rgb) / .2)}
    .right-dpdp{background:rgb(var(--accent-rgb) / .06);border:1px solid rgb(var(--accent-rgb) / .2)}
    .right-card .rc-label{font-size:.62rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.3rem}
    .right-both .rc-label{color:var(--green)}
    .right-gdpr .rc-label{color:var(--purple)}
    .right-dpdp .rc-label{color:var(--accent)}
    .right-card h3{font-size:.85rem;font-weight:700;color:var(--tx);line-height:1.3}
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
    @media(max-width:900px){.stats-row{grid-template-columns:1fr}.rights-grid{grid-template-columns:1fr 1fr}}
    @media(max-width:768px){.blog-layout{padding:0 1.25rem 3rem}.cspm-hero-wrap{padding:2rem 1.25rem}}
    @media(max-width:600px){.cspm-hero-h1{font-size:1.65rem}.toc-grid{grid-template-columns:1fr}.rights-grid{grid-template-columns:1fr}}
      `}</style>

      <div id="reading-progress"></div>

      <div className="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="https://seccomply.net/" itemProp="item"><span itemProp="name">Home</span></a><meta itemProp="position" content="1"/></span>
        <span className="bc-sep">›</span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="https://seccomply.net/resources" itemProp="item"><span itemProp="name">Resources</span></a><meta itemProp="position" content="2"/></span>
        <span className="bc-sep">›</span>
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"><a href="https://seccomply.net/resources/blog" itemProp="item"><span itemProp="name">Blog</span></a><meta itemProp="position" content="3"/></span>
        <span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>GDPR vs DPDP Act</span>
      </div>

      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-bl">🇪🇺 GDPR</span>
          <span className="badge badge-cy">🇮🇳 DPDP Act</span>
          <span className="badge badge-am">⚖️ Side-by-Side</span>
          <span className="badge badge-gr">Founders · Legal Teams</span>
        </div>
        <h1 className="cspm-hero-h1">GDPR vs DPDP Act: <em>Key Differences</em> Every Indian Company Must Know</h1>
        <p className="cspm-hero-sub">Already GDPR-compliant and treating DPDP as basically the same thing? That assumption creates compliance gaps. DPDP is philosophically aligned with GDPR - both centre the individual - but diverges in operational ways that catch every company that tries to copy-paste their GDPR setup.</p>

        <div className="cspm-author-strip">
          <div className="avatar">SC</div>
          <div className="author-info">
            <div className="name">SecComply</div>
            <div className="meta-row"><span style={{color:'var(--cy)',fontWeight:600}}>🏢 SecComply Compliance Team</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
            <div className="date-row"><span>📅 March 2026</span><span className="dot">·</span><span>🇮🇳 India Compliance</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=480&fit=crop" alt="GDPR vs DPDP data protection law comparison India Europe" style={{width:'100%',display:'block',maxHeight:'460px',objectFit:'cover'}}/>
        </div>
        <p className="img-cap">GDPR and India's DPDP Act share the same philosophical foundation - data belongs to the individual - but diverge significantly in operational requirements. Understanding where they differ is the difference between a compliant programme and a false sense of security.</p>

        {/* SVG COMPARISON DASHBOARD */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 400" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="gg1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--purple)"/><stop offset="100%" stopColor="#6366f1"/></linearGradient>
              <linearGradient id="gg2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--accent)"/><stop offset="100%" stopColor="var(--accent-light)"/></linearGradient>
              <linearGradient id="gg3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="var(--green)"/><stop offset="100%" stopColor="var(--green)"/></linearGradient>
              <pattern id="gpat" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r=".7" fill="rgb(var(--accent-rgb) / 0.04)"/></pattern>
            </defs>
            <rect width="960" height="400" fill="url(#gpat)"/>
            <text x="480" y="32" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="13" fontWeight="700" fontFamily="sans-serif">GDPR vs DPDP Act - At a Glance</text>

            {/* GDPR header */}
            <rect x="16" y="46" width="440" height="340" rx="12" fill="var(--bg-secondary)" stroke="rgb(var(--purple-rgb) / 0.2)" strokeWidth="1.5"/>
            <rect x="16" y="46" width="440" height="4" rx="2" fill="url(#gg1)"/>
            <text x="236" y="70" textAnchor="middle" fill="var(--purple)" fontSize="13" fontWeight="700" fontFamily="sans-serif">🇪🇺  GDPR</text>
            <text x="236" y="84" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">EU General Data Protection Regulation · In force May 2018</text>

            {/* DPDP header */}
            <rect x="504" y="46" width="440" height="340" rx="12" fill="var(--bg-secondary)" stroke="rgb(var(--accent-rgb) / 0.2)" strokeWidth="1.5"/>
            <rect x="504" y="46" width="440" height="4" rx="2" fill="url(#gg2)"/>
            <text x="724" y="70" textAnchor="middle" fill="var(--accent)" fontSize="13" fontWeight="700" fontFamily="sans-serif">🇮🇳  DPDP Act 2023</text>
            <text x="724" y="84" textAnchor="middle" fill="rgba(200,214,229,0.4)" fontSize="8.5" fontFamily="sans-serif">India Digital Personal Data Protection Act · Rules: Nov 2025</text>

            {/* Dimension rows */}
            {[
              {dim:'Scope of data',       gdpr:'Digital + physical personal data',     dpdp:'Digital personal data only'},
              {dim:'Lawful bases',         gdpr:'6 bases incl. Legitimate Interests',   dpdp:'2 bases: Consent + Legitimate Use'},
              {dim:'User rights',          gdpr:'8 rights (incl. portability, object)', dpdp:'5 rights (incl. unique nomination)'},
              {dim:"Children's threshold", gdpr:'16 years (13 in some states)',          dpdp:'18 years - no exceptions'},
              {dim:'Language requirement', gdpr:'No specific language requirement',      dpdp:'22 scheduled Indian languages'},
              {dim:'Consent Manager',      gdpr:'No equivalent',                         dpdp:'Yes - India-specific infrastructure'},
              {dim:'Cross-border transfer',gdpr:'Positive list (blocked unless approved)',dpdp:'Negative list (permitted unless blocked)'},
              {dim:'Max penalty',          gdpr:'€20M or 4% global turnover',            dpdp:'₹250 crore flat cap'},
              {dim:'Regulator',            gdpr:'National DPAs (ICO, CNIL etc.)',         dpdp:'Data Protection Board of India'},
            ].map(({dim,gdpr,dpdp},i)=>(
              <g key={i}>
                <rect x="24" y={96+i*30} width="424" height="24" rx="6" fill={i%2===0?"rgba(255,255,255,0.015)":"transparent"}/>
                <text x="36" y={113+i*30} fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif" fontStyle="italic">{dim}</text>
                <text x="130" y={113+i*30} fill="rgba(200,214,229,0.8)" fontSize="9" fontFamily="sans-serif">{gdpr}</text>
                <rect x="512" y={96+i*30} width="424" height="24" rx="6" fill={i%2===0?"rgba(255,255,255,0.015)":"transparent"}/>
                <text x="524" y={113+i*30} fill="rgba(200,214,229,0.8)" fontSize="9" fontFamily="sans-serif">{dpdp}</text>
              </g>
            ))}

            {/* Bottom highlight: key differences */}
            <rect x="24" y="370" width="424" height="12" rx="4" fill="rgb(var(--purple-rgb) / 0.08)" stroke="rgb(var(--purple-rgb) / 0.2)" strokeWidth="1"/>
            <text x="236" y="380" textAnchor="middle" fill="var(--purple)" fontSize="8" fontWeight="700" fontFamily="sans-serif">Legitimate Interests · Data portability · Right to object</text>
            <rect x="512" y="370" width="424" height="12" rx="4" fill="rgb(var(--accent-rgb) / 0.08)" stroke="rgb(var(--accent-rgb) / 0.2)" strokeWidth="1"/>
            <text x="724" y="380" textAnchor="middle" fill="var(--accent)" fontSize="8" fontWeight="700" fontFamily="sans-serif">22 languages · Nomination right · Consent Manager · Age 18</text>
          </svg>
        </div>
        <p className="img-cap">GDPR vs DPDP Act - 9 key dimensions compared side by side. The bottom rows highlight what each framework has that the other does not - the gap list every GDPR-compliant company needs to address for India.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#at-a-glance">At a Glance - Key Differences</a>
            <a href="#lawful-basis">The Lawful Basis Gap</a>
            <a href="#rights">Rights Comparison</a>
            <a href="#childrens-data">Children's Data</a>
            <a href="#cross-border">Cross-Border Transfers</a>
            <a href="#gap-list">Your GDPR-to-DPDP Gap List</a>
            <a href="#one-programme">One Programme or Two?</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>

      <div className="blog-layout">
        <article className="art">

          {/* INTRO */}
          <p style={{fontSize:'1.05rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1.5rem',borderLeft:'3px solid rgb(var(--accent-rgb) / 0.3)',paddingLeft:'1.2rem'}}>India's DPDP Act and Europe's GDPR are built on the same foundation - the belief that personal data belongs to the individual, not the organisation that collects it. For Indian companies operating in both markets, or for global companies with Indian users, this creates a natural temptation to treat the two frameworks as interchangeable. That temptation is the source of most DPDP compliance gaps. This comparison covers every dimension where the two frameworks diverge - and tells you exactly what needs India-specific work even if your GDPR programme is already mature. If you are new to DPDP and want to understand the basics first, start with our <a href="https://seccomply.net/resources/blog/dpdp-act-2023-explained" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}}>DPDP Act 2023 plain-English explainer</a> before reading this comparison.</p>

          <div className="stats-row anim">
            <div className="stat-card"><div className="stat-n" data-target="6">0</div><div className="stat-l">lawful bases under GDPR - including Legitimate Interests<br/><span style={{fontSize:'.68rem',opacity:.55}}>GDPR Article 6</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="2">0</div><div className="stat-l">lawful bases under DPDP - Consent and Legitimate Use only<br/><span style={{fontSize:'.68rem',opacity:.55}}>DPDP Act 2023, Section 4</span></div></div>
            <div className="stat-card"><div className="stat-n" data-target="18" data-suffix=" years">0 years</div><div className="stat-l">children's data threshold under DPDP - versus 16 under GDPR<br/><span style={{fontSize:'.68rem',opacity:.55}}>DPDP Act 2023, Section 9</span></div></div>
          </div>

          <section id="at-a-glance">
            <h2>At a Glance - <em>The Key Differences</em></h2>
            <p>Both frameworks share the same core philosophy - data belongs to the individual - but diverge in meaningful ways across scope, lawful bases, rights, children's data, language requirements, and penalty structure. The table below is the reference your legal team needs before building your DPDP programme.</p>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead><tr><th>Dimension</th><th>🇪🇺 GDPR</th><th>🇮🇳 DPDP Act 2023</th></tr></thead>
                <tbody>
                  <tr><td>In force since</td><td>May 2018</td><td>August 2023 (Rules: November 2025)</td></tr>
                  <tr><td>Scope of data</td><td>Digital + physical personal data</td><td>Digital personal data only</td></tr>
                  <tr><td>Lawful bases</td><td>6 (including Legitimate Interests)</td><td>2 - Consent + Legitimate Use</td></tr>
                  <tr><td>Number of rights</td><td>8 rights</td><td>5 rights</td></tr>
                  <tr><td>Children's threshold</td><td>16 years (13 in some member states)</td><td>18 years - no exceptions</td></tr>
                  <tr><td>Language requirement</td><td>None specified</td><td>All 22 scheduled Indian languages</td></tr>
                  <tr><td>Consent Manager</td><td>No equivalent</td><td>Yes - India-specific infrastructure</td></tr>
                  <tr><td>Cross-border transfers</td><td>Positive list - blocked unless approved</td><td>Negative list - permitted unless blocked</td></tr>
                  <tr><td>Maximum penalty</td><td>€20M or 4% of global annual turnover</td><td>₹250 crore flat cap per violation</td></tr>
                  <tr><td>Regulator</td><td>National DPAs (ICO, CNIL, etc.)</td><td>Data Protection Board of India</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="lawful-basis">
            <h2>The Lawful Basis Gap - <em>The One That Catches Everyone</em></h2>
            <p>This is the single biggest operational difference between the two frameworks - and the one most likely to create immediate compliance gaps for companies that are already GDPR-compliant.</p>
            <p>GDPR's Legitimate Interests basis is widely used across Europe - marketing to existing customers, fraud detection, internal analytics, product improvement - without explicit consent. It allows organisations to process personal data when their interests are not overridden by the individual's rights. <strong>DPDP does not have this basis.</strong></p>
            <div className="pull-quote">
              <p>"GDPR's Legitimate Interests is the lawful basis that most organisations use for activities they would rather not ask consent for. DPDP removes that option entirely. Either it is Consent, or it falls under the narrow list of Legitimate Use purposes."</p>
            </div>
            <p>Under DPDP, the two lawful bases are Consent (freely given, specific, informed, and through a clear affirmative action) and Legitimate Use - a narrow list of specific purposes including employment-related processing, medical emergencies, legal obligations, and certain public interest activities. Processing that runs comfortably on Legitimate Interests under GDPR may need an entirely new consent flow for Indian users.</p>
            <div className="callout co-warn">
              <span className="co-icon">⚠️</span>
              <div className="co-body">
                <strong>Your Immediate Action</strong>
                <p>Audit every processing activity currently using GDPR's Legitimate Interests basis. Map each one to a valid DPDP lawful basis. Where no mapping exists, build a consent flow for Indian users before the Data Protection Board begins enforcement.</p>
              </div>
            </div>
          </section>

          <section id="rights">
            <h2>Rights Comparison - <em>What Transfers and What Does Not</em></h2>
            <p>Most of the rights your GDPR programme already handles transfer directly to DPDP. But there are two GDPR-only rights and one DPDP-only right that require specific attention.</p>
            <div className="rights-grid">
              <div className="right-card right-both anim"><div className="rc-label">Both Frameworks</div><h3>Access</h3></div>
              <div className="right-card right-both anim"><div className="rc-label">Both Frameworks</div><h3>Correction / Rectification</h3></div>
              <div className="right-card right-both anim"><div className="rc-label">Both Frameworks</div><h3>Erasure</h3></div>
              <div className="right-card right-both anim"><div className="rc-label">Both Frameworks</div><h3>Grievance Redressal</h3></div>
              <div className="right-card right-gdpr anim"><div className="rc-label">GDPR Only</div><h3>Data Portability</h3></div>
              <div className="right-card right-gdpr anim"><div className="rc-label">GDPR Only</div><h3>Right to Object</h3></div>
              <div className="right-card right-dpdp anim" style={{gridColumn:'1 / -1'}}><div className="rc-label">DPDP Only - Unique to India</div><h3>Nomination Right - appoint someone to exercise rights on your behalf after death or incapacity</h3></div>
            </div>
            <div className="callout co-key">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>The Nomination Right - Build This Workflow</strong>
                <p>The nomination right is unique to India - there is no GDPR equivalent. Data Principals can designate a nominee to exercise their rights on their behalf in the event of death or incapacity. You need a workflow for receiving, verifying, and acting on nominations. It has low volume but non-zero compliance weight under DPDP.</p>
              </div>
            </div>
          </section>

          <section id="childrens-data">
            <h2>Children's Data - <em>Where DPDP Is Significantly Stricter</em></h2>
            <p>GDPR's children's data threshold is 16 years - and member states can lower this to 13 with parental consent mechanisms. DPDP sets it at <strong>18 years with zero exceptions.</strong></p>
            <p>This matters for every organisation that collects data from users who may be under 18 in India - social platforms, gaming, e-commerce, edtech, and health apps being the most common categories. Under GDPR you may have been comfortable collecting data from 16 or 17 year olds with parental consent. Under DPDP, that is not permissible without verifiable parental consent for anyone under 18.</p>
            <div className="callout co-danger">
              <span className="co-icon">🚨</span>
              <div className="co-body">
                <strong>Children's Data Penalty: ₹200 Crore</strong>
                <p>Violations of children's data obligations under DPDP carry a maximum penalty of ₹200 crore - one of the highest penalty categories in the Act. If your product is used by or targeted at users under 18 in India, the children's data compliance gap is your highest-priority DPDP item.</p>
              </div>
            </div>

            <div className="img-wrap" style={{marginTop:'1.5rem'}}>
              <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1000&h=360&fit=crop" alt="India data protection compliance" style={{width:'100%',display:'block',maxHeight:'320px',objectFit:'cover'}}/>
            </div>
            <p className="img-cap">India's DPDP Act sets the children's data threshold at 18 - higher than any comparable global privacy regulation and one of the highest-penalty categories in the Act at ₹200 crore.</p>
          </section>

          <section id="cross-border">
            <h2>Cross-Border Transfers - <em>DPDP Is More Permissive</em></h2>
            <p>Cross-border data transfer rules are one area where DPDP is actually less restrictive than GDPR. The two frameworks operate on opposite models:</p>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead><tr><th>Aspect</th><th>🇪🇺 GDPR</th><th>🇮🇳 DPDP Act 2023</th></tr></thead>
                <tbody>
                  <tr><td>Transfer model</td><td>Positive list - blocked by default unless destination is approved</td><td>Negative list - permitted by default unless destination is blocked</td></tr>
                  <tr><td>Mechanism required</td><td>Adequacy decision, SCCs, BCRs, or derogation</td><td>No specific mechanism required for permitted destinations</td></tr>
                  <tr><td>Restricted destinations</td><td>All non-EEA countries without adequacy</td><td>Only countries specifically notified by the Indian government</td></tr>
                  <tr><td>Practical impact</td><td>Significant compliance overhead for data flowing outside EU</td><td>Simpler for most current transfer destinations</td></tr>
                </tbody>
              </table>
            </div>
            <p>In practice, if your organisation already manages GDPR cross-border transfer requirements - SCCs with vendors, adequacy decisions for key destinations - you are likely over-compliant for DPDP purposes on this specific issue. The blocked destination list under DPDP is expected to be short. Monitor the Data Protection Board's notifications for any updates.</p>
          </section>

          <section id="gap-list">
            <h2>If You Are Already GDPR-Compliant - <em>Your Gap List</em></h2>
            <p>Your data mapping, consent flows, vendor DPAs, breach response procedures, and most rights workflows from your GDPR programme transfer directly to DPDP. Here is what still needs India-specific work, prioritised by urgency:</p>
            <div className="gap-list">
              {[
                {gap:'22-language privacy notice', effort:'med', prio:'high', desc:'Your privacy notice must be made available in all 22 scheduled Indian languages, not just English. This is one of the most commonly missed DPDP requirements and one of the first things regulators will assess.'},
                {gap:"Children's data - raise threshold to 18", effort:'high', prio:'high', desc:'Review every user touchpoint where under-18 users may be present. Update age verification and parental consent mechanisms to apply to all users under 18, not just under 16.'},
                {gap:'Lawful basis audit (Legitimate Interests → DPDP)', effort:'med', prio:'high', desc:'Map every processing activity currently using GDPR Legitimate Interests to a valid DPDP basis. For activities that cannot be mapped to Legitimate Use, build a consent flow for Indian users specifically.'},
                {gap:'Nomination right workflow', effort:'low', prio:'med', desc:'Build a workflow for receiving, verifying, and processing nomination requests. Low volume expected initially but non-zero compliance requirement that auditors will ask about.'},
                {gap:'Consent Manager integration (when live)', effort:'high', prio:'med', desc:'Consent Manager infrastructure is defined in the DPDP Rules but requires registration and technical integration. Begin scoping this now - when the registry goes live, integration timelines will be short.'},
              ].map(({gap, effort, prio, desc}, i) => (
                <div key={i} className="gap-item anim">
                  <div className="gap-badges">
                    <span className={`gap-effort ${effort==='high'?'eff-high':effort==='med'?'eff-med':'eff-low'}`}>{effort==='high'?'High effort':effort==='med'?'Medium':'Low'}</span>
                    <span className={`gap-prio ${prio==='high'?'pri-high':'pri-med'}`}>{prio==='high'?'High priority':'Med priority'}</span>
                  </div>
                  <div className="gap-body"><strong>{gap}</strong><span>{desc}</span></div>
                </div>
              ))}
            </div>
          </section>

          <section id="one-programme">
            <h2>One Programme or Two? <em>The Right Answer</em></h2>
            <p>One programme. Map both frameworks to a single control set. Your GDPR baseline handles data mapping, consent flows, vendor DPAs, breach response, and most rights workflows. Where DPDP requires more - 22 Indian language notices, the nomination right, Consent Manager integration, children's threshold at 18 - layer those on top.</p>
            <p>Running two entirely separate compliance programmes doubles administrative overhead without adding proportionate compliance benefit. The two frameworks share enough structural DNA that a unified approach is significantly more efficient. The key is tracking which controls satisfy which framework in your GRC tool or compliance documentation, so that auditors from either jurisdiction can see clear evidence of how their specific requirements are met.</p>
            <div className="callout co-sc">
              <span className="co-icon">🛡️</span>
              <div className="co-body">
                <strong>SecComply: Unified GDPR + DPDP Compliance</strong>
                <p>SecComply maps your existing controls against both GDPR and DPDP simultaneously - identifying the gaps unique to each framework and building a single evidence set that satisfies both. Indian companies pursuing ISO 27001 or SOC 2 alongside DPDP can consolidate all three into one programme, dramatically reducing audit preparation overhead.</p>
              </div>
            </div>
          </section>

          {/* CLOSING + RELATED BLOGS */}
          <div style={{marginTop:'2.5rem',padding:'1.8rem 2rem',background:'rgb(var(--accent-rgb) / 0.04)',border:'1px solid rgb(var(--accent-rgb) / 0.12)',borderRadius:'14px'}}>
            <p style={{fontSize:'1rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:'1rem'}}>GDPR compliance is a strong foundation - not a finished DPDP programme. The 22-language notice, the nomination right, the absence of Legitimate Interests, and the 18-year children's threshold are not minor variations. They are operational requirements that need India-specific workflows, and they are the first areas the Data Protection Board of India will scrutinise when enforcement begins.</p>
            <p style={{fontSize:'1rem',lineHeight:'1.85',color:'var(--tb)',marginBottom:0}}>The good news: if you have already done the hard work of building a GDPR-compliant organisation, DPDP does not require starting over. It requires layering five specific gaps on top of a foundation you have already built. Address those gaps now - before a breach or a complaint forces a rushed remediation under regulatory scrutiny.</p>
          </div>

          {/* RELATED BLOGS */}
          <div style={{marginTop:'3rem'}}>
            <h2 style={{fontFamily:'var(--serif)',fontSize:'1.4rem',fontWeight:700,color:'var(--tx)',marginBottom:'1.2rem',lineHeight:1.3}}>Go Deeper on <em style={{color:'var(--cy)',fontStyle:'italic'}}>India Data Privacy</em></h2>
            <p style={{fontSize:'.92rem',color:'var(--tm)',marginBottom:'1.4rem'}}>This article is part of SecComply's DPDP series. If you are building your India compliance programme, these are the articles to read next:</p>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.8rem'}}>
              {[
                {href:'https://seccomply.net/resources/blog/dpdp-act-2023-explained', icon:'🇮🇳', title:'DPDP Act 2023 Explained in Plain English', desc:'New to DPDP? Start here - all 5 obligations, the penalty schedule, and your first 30 days action plan.'},
                {href:'https://seccomply.net/resources/blog/how-to-write-security-policy', icon:'📋', title:'How to Write a Security Policy People Follow', desc:'DPDP requires documented policies. Here is how to write ones that satisfy regulators and employees.'},
                {href:'https://seccomply.net/resources/blog/tprm-best-practices', icon:'🔗', title:'Third-Party Risk Management Best Practices', desc:'DPDP requires vendor DPAs. TPRM is the programme that manages them continuously.'},
                {href:'https://seccomply.net/resources/blog/dpdp-act-indian-startups', icon:'🚀', title:'DPDP Act: What Indian Startups Need to Know', desc:'Startup-specific guide to DPDP readiness - practical steps without the legal jargon.'},
              ].map(({href,icon,title,desc},i)=>(
                <a key={i} href={href} target="_blank" rel="noopener" style={{display:'flex',gap:'0.8rem',padding:'0.9rem 1.1rem',background:'var(--bgc2)',border:'1px solid var(--bs)',borderRadius:'10px',textDecoration:'none',transition:'border-color .2s',alignItems:'flex-start'}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor='rgb(var(--accent-rgb) / 0.3)'}
                  onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'}>
                  <span style={{fontSize:'1.3rem',flexShrink:0,marginTop:'1px'}}>{icon}</span>
                  <div>
                    <div style={{fontSize:'.87rem',fontWeight:700,color:'var(--tx)',marginBottom:'3px',lineHeight:1.3}}>{title}</div>
                    <div style={{fontSize:'.78rem',color:'var(--tm)',lineHeight:1.5}}>{desc}</div>
                  </div>
                </a>
              ))}
            </div>
            <p style={{fontSize:'.83rem',color:'var(--tm)',marginTop:'1.1rem',textAlign:'center'}}>Browse the full compliance library at <a href="https://seccomply.net/resources/blog" style={{color:'var(--cy)',textDecoration:'none',fontWeight:600}} target="_blank" rel="noopener">seccomply.net/resources/blog →</a></p>
          </div>

          <div className="cta-banner" style={{marginTop:'2.5rem'}}>
            <h3>Close Your GDPR-to-DPDP Gaps</h3>
            <p>SecComply maps your existing GDPR controls against DPDP obligations and builds the India-specific additions - 22-language notices, nomination right, Consent Manager readiness - as a single unified programme.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free DPDP Gap Assessment →</a>
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
                {q:"Does GDPR compliance mean you are DPDP compliant?", a:"No. GDPR gives you a strong foundation - data mapping, consent flows, vendor DPAs, and breach response largely transfer. But the 22-language privacy notice requirement, the nomination right, Consent Manager integration, DPDP's narrower lawful basis framework (no Legitimate Interests), and the higher children's data threshold of 18 years all need India-specific work that a GDPR programme does not cover."},
                {q:"What is GDPR's Legitimate Interests basis and why doesn't DPDP have it?", a:"GDPR's Legitimate Interests is a lawful basis allowing organisations to process personal data without consent when their interests are not overridden by the individual's rights - commonly used for marketing to existing customers, fraud detection, and internal analytics. DPDP has no equivalent. Under DPDP, the two lawful bases are Consent and Legitimate Use (specific enumerated purposes). Any processing currently running on Legitimate Interests under GDPR may need explicit consent for Indian users."},
                {q:"Which regulation has stricter children's data rules?", a:"DPDP, significantly. GDPR sets the children's data threshold at 16 years (13 in some member states with parental consent). DPDP sets it at 18 with zero exceptions. Any organisation collecting data from users under 18 in India must obtain verifiable parental consent under DPDP regardless of what their GDPR programme allows."},
                {q:"How do cross-border data transfers differ between GDPR and DPDP?", a:"GDPR operates on a positive list - transfers outside the EU/EEA are blocked unless the destination has an adequacy decision or specific safeguards are in place. DPDP operates on a negative list - transfers are permitted to all countries except those specifically blocked by the Indian government. In practice, DPDP's cross-border transfer regime is significantly more permissive than GDPR's."},
                {q:"Should Indian companies run one compliance programme or two?", a:"One programme. Map both frameworks to a single control set. Your GDPR baseline handles data mapping, consent flows, vendor DPAs, breach response, and most rights workflows. Where DPDP requires more - 22 Indian language notices, the nomination right, Consent Manager integration, children's threshold at 18 - layer those on top. Running two separate programmes doubles administrative overhead without proportionate benefit."},
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
              <li><a href="#at-a-glance" className="toc-link">At a Glance</a></li>
              <li><a href="#lawful-basis" className="toc-link">The Lawful Basis Gap</a></li>
              <li><a href="#rights" className="toc-link">Rights Comparison</a></li>
              <li><a href="#childrens-data" className="toc-link">Children's Data</a></li>
              <li><a href="#cross-border" className="toc-link">Cross-Border Transfers</a></li>
              <li><a href="#gap-list" className="toc-link">Your Gap List</a></li>
              <li><a href="#one-programme" className="toc-link">One Programme or Two?</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">📖 DPDP Series</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/resources/blog/dpdp-act-2023-explained" target="_blank">🇮🇳 DPDP Act 2023 Explained</a></li>
              <li><a href="https://seccomply.net/resources/blog/dpdp-act-indian-startups" target="_blank">🚀 DPDP for Indian Startups</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Services</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/services/compliance-as-a-service" target="_blank">📋 Compliance as a Service</a></li>
              <li><a href="https://seccomply.net/services/iso-27001" target="_blank">🌍 ISO 27001 Consulting</a></li>
              <li><a href="https://seccomply.net/services/soc-2" target="_blank">🛡️ SOC 2 Readiness</a></li>
              <li><a href="https://seccomply.net/services/ciso" target="_blank">💼 CISO as a Service</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">GDPR</span><span className="tag">DPDP Act</span><span className="tag">Data Privacy</span><span className="tag">India Compliance</span><span className="tag">Lawful Basis</span><span className="tag">Consent Manager</span><span className="tag">Children Data</span><span className="tag">Cross-Border</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Close Your DPDP Gaps</h4>
            <p>Free assessment - we map your GDPR programme against DPDP and identify exactly what needs India-specific work.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Assessment →</a>
          </div>
        </aside>
      </div>
      <button id="btt" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}
