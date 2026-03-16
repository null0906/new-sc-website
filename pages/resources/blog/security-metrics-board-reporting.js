import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function SecurityMetricsBoardReporting() {
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

      /* 6. COPY CODE */
      window.copyCode = function (btn) {
        const pre = btn.closest('.cspm-code')?.querySelector('pre');
        if (!pre) return;
        const text = pre.innerText;
        (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
          .catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: text, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); })
          .finally(() => { btn.textContent = '✓ Copied!'; btn.style.color = '#06d6a0'; setTimeout(() => { btn.textContent = 'Copy'; btn.style.color = ''; }, 2000); });
      };

      /* 7. BACK TO TOP */
      const btt = document.getElementById('btt');
      window.addEventListener('scroll', () => { if (btt) btt.classList.toggle('vis', window.scrollY > 600); }, { passive: true });

      /* 8. SOCIAL SHARE */
      const url = encodeURIComponent('https://seccomply.net/resources/blog/security-metrics-board-reporting');
      const ttl = encodeURIComponent('Security Metrics That Actually Matter to the Board, SecComply');
      const sl = document.getElementById('sl');
      const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';

      window.copyLink = function () {
        const raw = 'https://seccomply.net/resources/blog/security-metrics-board-reporting';
        (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject())
          .catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); });
        toast('Link copied!');
      };

      function toast(msg) {
        let t = document.getElementById('sc-toast');
        if (!t) {
          t = document.createElement('div');
          t.id = 'sc-toast';
          t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:#E8632B;color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgba(232,99,43,.4);opacity:0;transition:opacity .3s;pointer-events:none';
          document.body.appendChild(t);
        }
        t.textContent = msg;
        t.style.opacity = '1';
        clearTimeout(t._tid);
        t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500);
      }

      /* 9. SCROLL FADE-IN */
      const fadeEls = document.querySelectorAll('.anim');
      if (fadeEls.length && 'IntersectionObserver' in window) {
        const fo = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
        fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); });
      }

      /* 10. FAQ TOGGLE */
      window.toggleFaq = function (q) {
        const item = q.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      };
      const first = document.querySelector('.faq-item');
      if (first) first.classList.add('open');

      /* 11. dateModified updater */
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
        <title>Security Metrics That Actually Matter to the Board, SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="Most board security reports measure activity, not risk. Discover the six metric categories and five governance questions every CISO should bring to the boardroom — with a framework boards can actually act on." />
        <meta name="keywords" content="security metrics board, CISO board reporting, cybersecurity governance, board risk metrics, security KPIs executives, MTTD MTTR board reporting, third party risk board, SEC cybersecurity disclosure, compliance posture board, board level security" />
        <meta property="og:title" content="Security Metrics That Actually Matter to the Board" />
        <meta property="og:description" content="Six metric categories and five governance questions every CISO should bring to the boardroom. Stop reporting activity. Start reporting risk." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/security-metrics-board-reporting" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/security-metrics-board-og.png" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/security-metrics-board-reporting" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Security Metrics That Actually Matter to the Board",
              "description": "Most board security reports measure activity, not risk. Six metric categories and five governance questions every CISO should bring to the boardroom.",
              "author": { "@type": "Person", "name": "Bhumika Deshmukh", "jobTitle": "Cyber Security Analyst & Technical Writer", "worksFor": { "@type": "Organization", "name": "SecComply" } },
              "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } },
              "datePublished": "2026-03-16",
              "dateModified": "2026-03-16",
              "mainEntityOfPage": "https://seccomply.net/resources/blog/security-metrics-board-reporting",
              "keywords": "security metrics board, CISO board reporting, cybersecurity governance, board risk metrics, MTTD, third party risk, SEC cybersecurity rules",
              "articleSection": "Security Governance",
              "wordCount": 2100,
              "timeRequired": "PT8M"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What security metrics should a CISO present to the board?", "acceptedAnswer": { "@type": "Answer", "text": "CISOs should lead with risk-framed metrics: business systems with unmitigated exposure, mean time to detect and contain incidents, regulatory compliance posture with residual risks named, third-party risk coverage with verified (not just contracted) controls, resilience and recovery readiness that has been tested, and security culture indicators. Activity metrics like patch counts belong in operational reviews, not board packs." } },
                { "@type": "Question", "name": "Why do most security board reports fail to communicate risk?", "acceptedAnswer": { "@type": "Answer", "text": "Most reports lead with activity metrics — vulnerabilities patched, phishing emails blocked, training hours completed — which show effort but not exposure. Under frameworks like the SEC cybersecurity disclosure rules and EU AI Act, board directors now carry personal accountability for how security risk is governed. They need risk-outcome data that informs decisions, not technical status updates." } },
                { "@type": "Question", "name": "What is mean time to detect (MTTD) and why does the board care?", "acceptedAnswer": { "@type": "Answer", "text": "MTTD measures the average time between an attacker entering an environment and the organisation becoming aware. For boards, this is a survival metric: the longer an attacker operates undetected, the greater the business, regulatory, and reputational damage. Boards should see this number, understand its trend, and know what investments are reducing it." } },
                { "@type": "Question", "name": "What regulatory frameworks require boards to govern cybersecurity risk?", "acceptedAnswer": { "@type": "Answer", "text": "The SEC's cybersecurity disclosure rules, the EU AI Act, DORA (Digital Operational Resilience Act), GDPR, and several national frameworks explicitly assign board-level accountability for cybersecurity governance. Directors can face personal liability for inadequate oversight." } },
                { "@type": "Question", "name": "How can SecComply help improve board-level security reporting?", "acceptedAnswer": { "@type": "Answer", "text": "SecComply reviews your current security reporting framework, identifies gaps between what you are presenting and what your board actually needs, and builds a metrics structure that maps risk to business outcomes. The assessment covers detection and response benchmarks, compliance posture gaps, third-party verification status, and resilience readiness." } }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" },
                { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" },
                { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" },
                { "@type": "ListItem", "position": 4, "name": "Security Metrics That Actually Matter to the Board", "item": "https://seccomply.net/resources/blog/security-metrics-board-reporting" }
              ]
            }
          ]
        }) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#E8632B;--cy2:#d0521f;--glow:rgba(232,99,43,.12);--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(232,99,43,.2);--bs:rgba(255,255,255,.06);--red:#ff4d6d;--am:#ffb703;--gr:#06d6a0;--serif:'Inter',sans-serif;--sans:'Inter',sans-serif;--mono:'JetBrains Mono',monospace}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#E8632B,#FF8A50);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none;transition:color .2s}
    .breadcrumb a:hover{color:var(--cy)}
    .bc-sep{opacity:.4}
    .cspm-hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem;display:block !important;grid-template-columns:none !important}
    .cspm-hero-badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;gap:5px;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(232,99,43,.1);color:var(--cy);border:1px solid rgba(232,99,43,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
    .cspm-hero-h1{font-family:var(--serif);font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:780px;margin-bottom:1.1rem}
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
    .art p{font-size:1rem;line-height:1.85;color:var(--tb);margin-bottom:1.2rem}
    .art p strong{color:var(--tx);font-weight:600}
    .pull-quote{border-left:4px solid var(--cy);padding:1.4rem 2rem;margin:2.5rem 0;background:linear-gradient(135deg,rgba(232,99,43,.06),transparent);border-radius:0 12px 12px 0}
    .pull-quote p{font-family:var(--serif);font-size:1.1rem;font-style:italic;color:var(--tx)!important;margin-bottom:.5rem!important;line-height:1.6!important}
    .pull-quote cite{font-size:.77rem;color:var(--tm)}
    .def-box{background:linear-gradient(135deg,rgba(232,99,43,.07),rgba(232,99,43,.02));border:1px solid rgba(232,99,43,.22);border-radius:14px;padding:1.6rem 2rem;margin:2rem 0}
    .def-lbl{font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--cy);margin-bottom:.6rem}
    .def-box p{font-size:.97rem;color:var(--tx)!important;margin-bottom:0!important;line-height:1.7}
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
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .feat-list{list-style:none;margin:1.5rem 0;display:flex;flex-direction:column;gap:.65rem}
    .feat-list li{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s,background .2s}
    .feat-list li:hover{border-color:var(--bo);background:var(--bgc)}
    .f-num{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,#E8632B,#FF8A50);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff;flex-shrink:0}
    .f-body strong{display:block;color:var(--tx);font-size:.89rem;margin-bottom:3px}
    .f-body span{font-size:.83rem;color:var(--tm)}
    .cmp-wrap{overflow-x:auto;margin:2rem 0;border-radius:14px;border:1px solid var(--bo)}
    .cmp-table{width:100%;border-collapse:collapse}
    .cmp-table th{background:var(--bgc);padding:.85rem 1.1rem;text-align:left;font-size:.77rem;font-weight:600;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
    .cmp-table td{padding:.82rem 1.1rem;font-size:.85rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .cmp-table tr:last-child td{border-bottom:none}
    .cmp-table tr:hover td{background:rgba(232,99,43,.03)}
    .tg-y{color:var(--gr);font-weight:600}.tg-n{color:var(--red);font-weight:600}.tg-m{color:var(--am);font-weight:600}
    .cat-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:2rem 0}
    .cat-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;padding:1.3rem 1.5rem;transition:border-color .2s,background .2s}
    .cat-card:hover{border-color:var(--bo);background:var(--bgc)}
    .cat-num{font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--cy);margin-bottom:.4rem}
    .cat-card h3{font-size:.93rem;font-weight:700;color:var(--tx);margin-bottom:.5rem;line-height:1.35}
    .cat-card p{font-size:.82rem;color:var(--tm);margin-bottom:0;line-height:1.6}
    .q-list{list-style:none;margin:1.5rem 0;display:flex;flex-direction:column;gap:.75rem}
    .q-item{display:flex;align-items:flex-start;gap:1rem;padding:1.2rem 1.4rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:12px;transition:border-color .2s}
    .q-item:hover{border-color:var(--bo)}
    .q-num{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#E8632B,#FF8A50);display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:1px}
    .q-body strong{display:block;color:var(--tx);font-size:.91rem;margin-bottom:.35rem;line-height:1.4}
    .q-body span{font-size:.83rem;color:var(--tm);line-height:1.65}
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
    .rel-links a:last-child{border-bottom:none}
    .rel-links a:hover{color:var(--cy)}
    .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
    .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);cursor:default;transition:all .2s}
    .tag:hover{border-color:var(--cy);color:var(--cy);background:var(--glow)}
    .sb-cta{background:linear-gradient(135deg,rgba(232,99,43,.08),rgba(232,99,43,.03));border:1px solid rgba(232,99,43,.25);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
    .sb-cta h4{font-family:var(--serif);font-size:.98rem;color:var(--tx);margin-bottom:.5rem}
    .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
    .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
    .sb-cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(232,99,43,.4);transition:transform .2s;z-index:50}
    #btt.vis{display:flex}
    #btt:hover{transform:translateY(-3px)}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
    .anim{animation:fadeUp .55s ease both}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
    @media(max-width:768px){.stats-row{grid-template-columns:1fr}.cat-grid{grid-template-columns:1fr}.blog-layout{padding:0 1.25rem 3rem}.cspm-hero-wrap{padding:2rem 1.25rem}}
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
        <span style={{color:'var(--tb)'}}>Security Metrics &amp; Board Reporting</span>
      </div>

      {/* ── HERO ── */}
      <div className="cspm-hero-wrap">
        <div className="cspm-hero-badges">
          <span className="badge badge-cy">📊 Security Governance</span>
          <span className="badge badge-bl">🏢 Board Reporting</span>
          <span className="badge badge-gr">✓ CISO · Risk Management</span>
        </div>

        <h1 className="cspm-hero-h1">Security Metrics That <em>Actually Matter</em> to the Board</h1>

        <p className="cspm-hero-sub">Forty-five minutes. A slide deck full of numbers. And by the end, nobody in the room more confident about whether the organisation is actually secure. The metrics boards need are not the hardest to collect — they are the ones that answer the questions directors lie awake worrying about.</p>

        <div className="cspm-author-strip">
          <div className="avatar">BD</div>
          <div className="author-info">
            <div className="name">Bhumika Deshmukh</div>
            <div className="meta-row">
              <span style={{color:'var(--cy)',fontWeight:600}}>✍️ Cyber Security Analyst &amp; Technical Writer</span>
              <span className="dot">·</span>
              <span id="read-time">📖 8 min read</span>
            </div>
            <div className="date-row">
              <span>📅 March 2026</span>
              <span className="dot">·</span>
              <span>🏢 SecComply</span>
            </div>
          </div>
        </div>

        {/* ── INLINE SVG ILLUSTRATION ── */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 440" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#071728 0%,#040f1b 100%)'}}>
            <defs>
              <linearGradient id="gOr" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#E8632B"/><stop offset="100%" stopColor="#FF8A50"/></linearGradient>
              <linearGradient id="gGr" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#06d6a0"/><stop offset="100%" stopColor="#04b080"/></linearGradient>
              <linearGradient id="gRd" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff4d6d"/><stop offset="100%" stopColor="#d0304e"/></linearGradient>
              <linearGradient id="gAm" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ffb703"/><stop offset="100%" stopColor="#e09500"/></linearGradient>
              <pattern id="bdots" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="13" cy="13" r=".9" fill="rgba(232,99,43,0.055)"/></pattern>
            </defs>
            <rect width="960" height="440" fill="url(#bdots)"/>

            {/* ── BOARD SCORECARD: left panel ── */}
            <rect x="22" y="20" width="200" height="130" rx="11" fill="#091d2e" stroke="rgba(232,99,43,0.2)" strokeWidth="1"/>
            <rect x="22" y="20" width="200" height="4" rx="2" fill="url(#gOr)"/>
            <text x="44" y="46" fill="rgba(200,214,229,0.6)" fontSize="8.5" fontFamily="sans-serif">CATEGORY 01</text>
            <text x="44" y="62" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">Business Risk Exposure</text>
            <rect x="44" y="72" width="120" height="7" rx="3.5" fill="rgba(255,255,255,0.05)"/>
            <rect x="44" y="72" width="84" height="7" rx="3.5" fill="url(#gAm)"/>
            <text x="170" y="79" fill="#ffb703" fontSize="8" fontWeight="700" fontFamily="sans-serif">70%</text>
            <text x="44" y="99" fill="#ff4d6d" fontSize="9" fontWeight="600" fontFamily="sans-serif">⚠ 3 systems: unmitigated risk</text>
            <text x="44" y="115" fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif">Finance · HR · Customer DB</text>
            <text x="44" y="140" fill="rgba(200,214,229,0.35)" fontSize="7.5" fontFamily="sans-serif">Last updated: 2h ago</text>

            <rect x="22" y="164" width="200" height="130" rx="11" fill="#091d2e" stroke="rgba(232,99,43,0.2)" strokeWidth="1"/>
            <rect x="22" y="164" width="200" height="4" rx="2" fill="url(#gGr)"/>
            <text x="44" y="190" fill="rgba(200,214,229,0.6)" fontSize="8.5" fontFamily="sans-serif">CATEGORY 02</text>
            <text x="44" y="206" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">Detection &amp; Response</text>
            <rect x="44" y="216" width="120" height="7" rx="3.5" fill="rgba(255,255,255,0.05)"/>
            <rect x="44" y="216" width="108" height="7" rx="3.5" fill="url(#gGr)"/>
            <text x="170" y="223" fill="#06d6a0" fontSize="8" fontWeight="700" fontFamily="sans-serif">90%</text>
            <text x="44" y="243" fill="#06d6a0" fontSize="9" fontWeight="600" fontFamily="sans-serif">✓ MTTD: 4.2 hrs (down from 11h)</text>
            <text x="44" y="259" fill="#06d6a0" fontSize="9" fontWeight="600" fontFamily="sans-serif">✓ MTTR: 6.1 hrs (SLA: 8h)</text>
            <text x="44" y="284" fill="rgba(200,214,229,0.35)" fontSize="7.5" fontFamily="sans-serif">Tested: tabletop exercise Feb 2026</text>

            <rect x="22" y="308" width="200" height="112" rx="11" fill="#0f1c2a" stroke="rgba(255,77,109,0.25)" strokeWidth="1"/>
            <rect x="22" y="308" width="200" height="4" rx="2" fill="url(#gRd)"/>
            <text x="44" y="334" fill="rgba(200,214,229,0.6)" fontSize="8.5" fontFamily="sans-serif">CATEGORY 03</text>
            <text x="44" y="350" fill="#fff" fontSize="11" fontWeight="700" fontFamily="sans-serif">Regulatory Posture</text>
            <rect x="44" y="360" width="120" height="7" rx="3.5" fill="rgba(255,255,255,0.05)"/>
            <rect x="44" y="360" width="74" height="7" rx="3.5" fill="url(#gRd)"/>
            <text x="170" y="367" fill="#ff4d6d" fontSize="8" fontWeight="700" fontFamily="sans-serif">62%</text>
            <circle cx="34" cy="392" r="4" fill="#ff4d6d"/>
            <text x="44" y="396" fill="#ff4d6d" fontSize="9" fontWeight="600" fontFamily="sans-serif">CRITICAL: DPDP gap — 2 obligations</text>
            <text x="44" y="412" fill="#ffb703" fontSize="9" fontFamily="sans-serif">HIGH: ISO 27001 clause 9.1 pending</text>

            {/* ── DIVIDER ── */}
            <line x1="238" y1="16" x2="238" y2="424" stroke="rgba(232,99,43,0.07)" strokeWidth="1"/>

            {/* ── CENTRE: Board Risk Dashboard ── */}
            <text x="490" y="50" textAnchor="middle" fill="rgba(200,214,229,0.85)" fontSize="14" fontWeight="700" fontFamily="sans-serif">Board Security Risk Score</text>
            <text x="490" y="66" textAnchor="middle" fill="rgba(100,160,200,0.45)" fontSize="8.5" fontFamily="sans-serif">6 categories · Q1 2026 · Updated this week</text>

            {/* Donut */}
            <circle cx="490" cy="185" r="64" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="11"/>
            <circle cx="490" cy="185" r="64" fill="none" stroke="url(#gOr)" strokeWidth="11"
              strokeDasharray="281 402" strokeDashoffset="100" strokeLinecap="round"/>
            <text x="490" y="178" textAnchor="middle" fill="#fff" fontSize="26" fontWeight="700" fontFamily="sans-serif">74%</text>
            <text x="490" y="195" textAnchor="middle" fill="rgba(232,99,43,0.7)" fontSize="9" fontFamily="sans-serif">Board Risk Score</text>
            <text x="490" y="210" textAnchor="middle" fill="rgba(200,214,229,0.35)" fontSize="8" fontFamily="sans-serif">↑ 6% from last quarter</text>

            {/* Mini stat cards */}
            <rect x="368" y="262" width="94" height="60" rx="9" fill="#091826" stroke="rgba(6,214,160,0.18)" strokeWidth="1"/>
            <text x="415" y="285" textAnchor="middle" fill="#06d6a0" fontSize="20" fontWeight="700" fontFamily="sans-serif">4</text>
            <text x="415" y="300" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif">Categories</text>
            <text x="415" y="314" textAnchor="middle" fill="rgba(6,214,160,0.55)" fontSize="7.5" fontFamily="sans-serif">on track ↑</text>

            <rect x="472" y="262" width="94" height="60" rx="9" fill="#091826" stroke="rgba(255,77,109,0.18)" strokeWidth="1"/>
            <text x="519" y="285" textAnchor="middle" fill="#ff4d6d" fontSize="20" fontWeight="700" fontFamily="sans-serif">2</text>
            <text x="519" y="300" textAnchor="middle" fill="rgba(200,214,229,0.45)" fontSize="8" fontFamily="sans-serif">Require</text>
            <text x="519" y="314" textAnchor="middle" fill="rgba(255,77,109,0.55)" fontSize="7.5" fontFamily="sans-serif">board action</text>

            {/* Trend lines area */}
            <text x="368" y="352" fill="rgba(200,214,229,0.6)" fontSize="9" fontWeight="600" fontFamily="sans-serif">Quarterly Trend</text>
            <polyline points="368,420 418,400 468,390 518,370 568,358" fill="none" stroke="url(#gOr)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="368" cy="420" r="3.5" fill="#E8632B"/>
            <circle cx="418" cy="400" r="3.5" fill="#E8632B"/>
            <circle cx="468" cy="390" r="3.5" fill="#E8632B"/>
            <circle cx="518" cy="370" r="3.5" fill="#E8632B"/>
            <circle cx="568" cy="358" r="3.5" fill="#E8632B"/>
            <text x="365" y="432" fill="rgba(200,214,229,0.35)" fontSize="7.5" fontFamily="sans-serif">Q2 25</text>
            <text x="412" y="432" fill="rgba(200,214,229,0.35)" fontSize="7.5" fontFamily="sans-serif">Q3 25</text>
            <text x="462" y="432" fill="rgba(200,214,229,0.35)" fontSize="7.5" fontFamily="sans-serif">Q4 25</text>
            <text x="512" y="432" fill="rgba(200,214,229,0.35)" fontSize="7.5" fontFamily="sans-serif">Q1 26</text>
            <text x="556" y="432" fill="rgba(232,99,43,0.7)" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Now</text>

            {/* ── RIGHT PANEL: 5 board questions ── */}
            <line x1="600" y1="16" x2="600" y2="424" stroke="rgba(232,99,43,0.07)" strokeWidth="1"/>
            <text x="626" y="46" fill="rgba(200,214,229,0.7)" fontSize="11" fontWeight="700" fontFamily="sans-serif">5 Questions Boards Ask</text>

            {[
              { y: 70,  q: "Would we know about a breach today?",    s: "MTTD: 4.2 hrs",      c: "#06d6a0" },
              { y: 148, q: "Could we contain it in time?",            s: "MTTR: 6.1 hrs",      c: "#06d6a0" },
              { y: 226, q: "Are our vendors as secure as we are?",    s: "68% independently verified", c: "#ffb703" },
              { y: 304, q: "What would a regulator find today?",      s: "2 open gaps",         c: "#ff4d6d" },
              { y: 348, q: "Keeping pace with business changes?",     s: "New product: assessed", c: "#06d6a0" },
            ].map(({ y, q, s, c }, i) => (
              <g key={i}>
                <rect x="618" y={y} width="316" height="64" rx="9" fill="#091826" stroke={`${c}30`} strokeWidth="1"/>
                <circle cx="635" cy={y + 20} r="9" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1"/>
                <text x="635" y={y + 24} textAnchor="middle" fill={c} fontSize="9" fontWeight="700" fontFamily="sans-serif">{i+1}</text>
                <text x="652" y={y + 22} fill="rgba(200,214,229,0.85)" fontSize="9" fontWeight="600" fontFamily="sans-serif">{q}</text>
                <text x="652" y={y + 48} fill={c} fontSize="8.5" fontWeight="600" fontFamily="sans-serif">{s}</text>
              </g>
            ))}
          </svg>
        </div>
        <p className="img-cap">A board security risk dashboard — showing six metric categories, trend lines, and the five governance questions every director needs answered each quarter.</p>

        {/* ── INLINE TOC ── */}
        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#scene">The Scene in the Boardroom</a>
            <a href="#wrong">What Most Reports Get Wrong</a>
            <a href="#six">The Six Board-Ready Categories</a>
            <a href="#five">Five Questions Boards Ask</a>
            <a href="#better">How to Report Better</a>
            <a href="#board-duties">Board Responsibilities</a>
            <a href="#principle">The Underlying Principle</a>
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
              <div className="stat-n" data-target="68" data-suffix="%">0%</div>
              <div className="stat-l">of boards lack risk-framed security metrics<br/><span style={{fontSize:'.68rem',opacity:.55}}>Gartner, 2024</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-n" data-target="287" data-suffix=" days">0 days</div>
              <div className="stat-l">avg breach dwell time — the hidden board exposure<br/><span style={{fontSize:'.68rem',opacity:.55}}>IBM Cost of a Data Breach</span></div>
            </div>
            <div className="stat-card">
              <div className="stat-n" data-target="6" data-suffix="">0</div>
              <div className="stat-l">metric categories every board report needs<br/><span style={{fontSize:'.68rem',opacity:.55}}>This guide</span></div>
            </div>
          </div>

          {/* PULL QUOTE */}
          <div className="pull-quote">
            <p>"The board does not need to know how many vulnerabilities were patched. They need to know whether a breach today would be discovered, contained, and survivable — and on what timeline."</p>
          </div>

          {/* SECTION 1 */}
          <section id="scene">
            <h2>The Scene in the <em>Boardroom</em></h2>
            <p>Here is a scene that plays out in boardrooms more often than most CISOs would admit: forty-five minutes to present, a slide deck full of numbers, and by the end of it not a single person in the room is any more confident about whether the organisation is actually secure.</p>
            <p>This is not a competence problem. Most CISOs presenting to boards are technically brilliant. It is a <strong>translation problem</strong> — and it has a fix.</p>
            <p>Picture the quarterly security update. Patch compliance is up, phishing click rates are down, vulnerabilities remediated are at an all-time high. The board nods. Someone asks a politely confused question. The CISO explains a technical concept. The slide moves on.</p>
            <p>Nobody in that room is asking the question they actually want answered: <em>"Are we going to be in the news next quarter?"</em> And the CISO is not answering it — not because they do not care, but because the metrics they have been asked to report on do not get anywhere near it. This is the gap. And it is entirely closable.</p>
          </section>

          {/* SECTION 2 */}
          <section id="wrong">
            <h2>What Most Security Reports <em>Get Wrong</em></h2>
            <p>Reporting on activity made sense in an era when security was purely a technical function — show the work, justify the budget, prove the team is busy. But boards have changed. Under frameworks like the <strong>SEC's cybersecurity disclosure rules</strong> and the <strong>EU AI Act</strong>, directors now carry personal accountability for how security risk is governed — not just whether they were informed about it.</p>
            <p>That changes everything about what a board report is for. It is no longer a status update. It is a governance tool. And governance tools need to answer governance questions.</p>

            <div className="cmp-wrap">
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th>✕ Activity metrics — what not to lead with</th>
                    <th>→ Risk metrics — what to lead with instead</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Number of vulnerabilities remediated</td><td className="tg-y">Business systems with critical unmitigated exposure</td></tr>
                  <tr><td>Percentage of endpoints with latest patch</td><td className="tg-y">Time to detect and contain an incident right now</td></tr>
                  <tr><td>Number of phishing emails blocked</td><td className="tg-y">Regulatory obligations currently at risk</td></tr>
                  <tr><td>Hours of security training completed</td><td className="tg-y">Critical third parties with verified controls</td></tr>
                  <tr><td>Number of incidents logged</td><td className="tg-y">Coverage gaps in incident response capability</td></tr>
                  <tr><td>Firewall rule changes this period</td><td className="tg-y">Recovery time for priority systems — tested</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout co-info">
              <span className="co-icon">ℹ️</span>
              <div className="co-body">
                <strong>Both columns matter — just not equally</strong>
                <p>The left column belongs in an operational security review. The point is that it should not be the headline act when sitting in front of non-technical directors who need to make business decisions.</p>
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="six">
            <h2>The Six Categories That Belong in Every <em>Board Report</em></h2>
            <p>Think of these not as prescriptive formulas but as the six questions every board is implicitly asking — whether or not they know how to phrase them yet.</p>

            <div className="cat-grid">
              <div className="cat-card anim">
                <div className="cat-num">Category 01</div>
                <h3>Business Risk Exposure</h3>
                <p>Which business-critical systems or data assets are currently operating with known unmitigated risk? Frame this as business impact, not technical severity.</p>
              </div>
              <div className="cat-card anim">
                <div className="cat-num">Category 02</div>
                <h3>Detection &amp; Response Capability</h3>
                <p>If an attacker were present today, how long to detect them? How long to contain? These are testable, measurable commitments — not estimates.</p>
              </div>
              <div className="cat-card anim">
                <div className="cat-num">Category 03</div>
                <h3>Regulatory &amp; Compliance Posture</h3>
                <p>Which obligations are met, which are in progress, and which carry residual risk? Connect each gap directly to its legal or contractual consequence.</p>
              </div>
              <div className="cat-card anim">
                <div className="cat-num">Category 04</div>
                <h3>Third-Party Risk Coverage</h3>
                <p>What proportion of critical suppliers have had their controls independently verified in the past twelve months — not just contractually assured?</p>
              </div>
              <div className="cat-card anim">
                <div className="cat-num">Category 05</div>
                <h3>Resilience &amp; Recovery Readiness</h3>
                <p>Has the organisation tested its ability to recover from a serious incident? What is the realistic recovery time for priority systems?</p>
              </div>
              <div className="cat-card anim">
                <div className="cat-num">Category 06</div>
                <h3>Security Culture &amp; Human Risk</h3>
                <p>What proportion of staff can recognise a social engineering attempt? Culture metrics reveal whether security is embedded or merely trained.</p>
              </div>
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="five">
            <h2>Five Questions the Board Is <em>Actually Asking</em></h2>
            <p>A useful test for any security metric is whether it helps answer the questions a thoughtful, worried board member carries into that meeting room. Here they are — with no diplomatic softening.</p>

            <ul className="q-list">
              <li className="q-item anim">
                <div className="q-num">1</div>
                <div className="q-body">
                  <strong>If we suffered a serious breach today, would we know?</strong>
                  <span>This tests detection capability. The honest answer for many organisations is "eventually." The board needs to know how long "eventually" is, and what the business exposure looks like during that window. If the answer involves a lot of "it depends" — that is the metric to fix first.</span>
                </div>
              </li>
              <li className="q-item anim">
                <div className="q-num">2</div>
                <div className="q-body">
                  <strong>If we knew, could we contain it before it reached customers or regulators?</strong>
                  <span>This tests containment capability and incident response maturity. The answer depends on having tested playbooks, clear escalation paths, and actual authority to take systems offline quickly — not just a well-formatted policy document that nobody has rehearsed since it was written.</span>
                </div>
              </li>
              <li className="q-item anim">
                <div className="q-num">3</div>
                <div className="q-body">
                  <strong>Are our most important vendors as secure as we are?</strong>
                  <span>Third-party breaches have become one of the most common attack entry points. The board should understand what verification actually exists behind the confidence being expressed — beyond contracts that say the right things but have never been tested.</span>
                </div>
              </li>
              <li className="q-item anim">
                <div className="q-num">4</div>
                <div className="q-body">
                  <strong>What would a regulator find if they looked closely right now?</strong>
                  <span>This is not about perfection. It is about honesty. Boards carry personal liability under several regulatory frameworks. They should know the genuine, unvarnished answer to this question before a regulator asks it — not a polished version prepared for the slide deck.</span>
                </div>
              </li>
              <li className="q-item anim">
                <div className="q-num">5</div>
                <div className="q-body">
                  <strong>Is our security programme keeping pace with how the business is changing?</strong>
                  <span>New products, acquisitions, cloud migrations, and remote working expansions all change the risk profile — often faster than security programmes adapt. Board reporting should reflect whether the programme is ahead of those changes, aligned with them, or quietly running to catch up.</span>
                </div>
              </li>
            </ul>
          </section>

          {/* SECTION 5 */}
          <section id="better">
            <h2>How to Have a <em>Better Conversation</em></h2>
            <p>The format of a board security report matters as much as its content. A well-structured report allows board members to engage at the level they have time for, ask the questions that concern them, and track whether the programme is improving over time.</p>

            <ul className="feat-list">
              <li className="anim">
                <div className="f-num">1</div>
                <div className="f-body">
                  <strong>Lead with the risk narrative, not the data</strong>
                  <span>Before any numbers, there should be two or three sentences answering: is our posture better, worse, or unchanged from last quarter — and why? Board members will engage with a clear, honest narrative far more readily than a table of metrics that requires them to interpret context they do not have.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">2</div>
                <div className="f-body">
                  <strong>Be honest about the edges of your visibility</strong>
                  <span>One of the most powerful things a CISO can say in a board meeting is: "Here is where our detection coverage is strong, and here is where it is limited." That is not weakness — it is the kind of honesty that builds trust and makes resource conversations meaningful.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">3</div>
                <div className="f-body">
                  <strong>Every metric should point to a decision</strong>
                  <span>Ask this before including anything in a board pack: does this metric require a board decision, inform a board decision, or provide assurance that no board decision is currently required? If none of those three — it belongs in an operational report, not in front of directors.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">4</div>
                <div className="f-body">
                  <strong>Show the trend, not just the number</strong>
                  <span>A single data point tells a board nothing about direction. Show every key metric across at least four reporting periods. The direction of travel — improving, stable, or declining — is almost always more important than where the number sits today.</span>
                </div>
              </li>
              <li className="anim">
                <div className="f-num">5</div>
                <div className="f-body">
                  <strong>Connect the security programme to what the business is doing</strong>
                  <span>If the company opened a new office, launched a product, or made an acquisition this quarter — the board should hear how those changes affected the security risk profile and what was done about it. Security is a business function, not a technical silo.</span>
                </div>
              </li>
            </ul>

            <div className="callout co-key">
              <span className="co-icon">💡</span>
              <div className="co-body">
                <strong>Key Principle</strong>
                <p>"Our detection coverage is strong in these areas and limited in these others" is a better basis for a budget conversation than a dashboard that implies everything is covered. Boards respect honesty. What erodes confidence is being surprised.</p>
              </div>
            </div>
          </section>

          {/* SECTION 6 */}
          <section id="board-duties">
            <h2>The Board Has <em>Responsibilities</em> Here Too</h2>
            <p>It is easy to frame poor security reporting as a CISO problem. But boards that consistently receive poor security reporting have usually not asked clearly enough for what they actually need. The challenge runs in both directions.</p>
            <p>Several regulatory frameworks — including the <strong>SEC's cybersecurity rules</strong> and the <strong>EU AI Act</strong> — now make explicit that boards carry accountability for how security risk is governed. That is not something that can be delegated to a committee and forgotten. It requires active, informed engagement.</p>

            <ul className="q-list">
              <li className="q-item anim">
                <div className="q-num">1</div>
                <div className="q-body">
                  <strong>Do we genuinely understand what we are approving?</strong>
                  <span>When the board approves a security budget, a risk tolerance statement, or an incident response plan — is that approval based on genuine understanding of the trade-offs? Or is it based on trust that the people presenting the slide know what they are doing? Both may lead to the same approval, but only one constitutes governance.</span>
                </div>
              </li>
              <li className="q-item anim">
                <div className="q-num">2</div>
                <div className="q-body">
                  <strong>Have we walked through what a breach would actually look like?</strong>
                  <span>Board-level crisis simulations are standard practice in financial services and increasingly expected in other regulated sectors. A board that has never walked through a breach scenario — who calls whom, what gets disclosed, who takes decisions when — is simply not prepared to lead through one when it happens.</span>
                </div>
              </li>
              <li className="q-item anim">
                <div className="q-num">3</div>
                <div className="q-body">
                  <strong>Does our CISO feel safe telling us difficult things?</strong>
                  <span>One of the clearest predictors of security programme effectiveness is whether the person responsible for security has direct board access, genuine authority, and the political safety to say uncomfortable things without consequence. If the CISO feels they need to manage their messaging with the board, that is a governance failure — not a communications style choice.</span>
                </div>
              </li>
            </ul>
          </section>

          {/* SECTION 7 */}
          <section id="principle">
            <h2>The <em>Underlying Principle</em></h2>
            <p>Security metrics that matter to the board are those that help directors do their job: understand the risks the organisation faces, ensure appropriate resources and governance are in place, and demonstrate that — when regulators, investors, or customers ask.</p>
            <p>This is not primarily a technical challenge. It is a communication and governance challenge. The technical work still needs doing — but how it gets reported needs to serve the people who are ultimately accountable for the organisation's resilience, not just the people who are building it.</p>

            <div className="pull-quote">
              <p>"Security is not a technical function that occasionally needs to brief the board. It is a business risk function that requires board-level attention and active governance."</p>
            </div>

            <p>When the right metrics are in front of the right people, with the right framing, something shifts in that boardroom conversation. Security stops being a line item to approve and becomes a strategic priority that directors actively govern. That shift — more than any individual metric or dashboard — is what actually improves an organisation's resilience over time.</p>

            <div className="callout co-warn">
              <span className="co-icon">🎯</span>
              <div className="co-body">
                <strong>Start With One Question at Your Next Board Meeting</strong>
                <p>Ask your security team: "If an attacker were in our environment right now, how long would it take us to know?" If the answer is uncertain, vague, or untested — that is the metric your board report should lead with next quarter. Everything else follows from there.</p>
              </div>
            </div>
          </section>

          {/* CTA BANNER */}
          <div className="cta-banner">
            <h3>Don't let your board ask questions you aren't prepared to answer.</h3>
            <p>SecComply reviews your current security reporting, identifies what your board actually needs to see, and builds a metrics framework that connects risk to business outcomes.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Free Board Reporting Assessment →</a>
              <a href="https://seccomply.net/services/ciso" className="btn-o" target="_blank" rel="noopener">View CISO-as-a-Service</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" id="sl" href="#" target="_blank" rel="noopener"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>
              <a className="share-btn" id="st" href="#" target="_blank" rel="noopener"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>X</a>
              <button className="share-btn" onClick={() => window.copyLink && window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="faq-section">
            <h2>Frequently Asked <em>Questions</em></h2>
            <div itemScope itemType="https://schema.org/FAQPage">

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">What security metrics should a CISO present to the board?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">CISOs should lead with risk-framed metrics: business systems with unmitigated exposure, mean time to detect and contain incidents, regulatory compliance posture with residual risks named, third-party risk coverage with verified (not just contracted) controls, resilience and recovery readiness that has been tested, and security culture indicators. Activity metrics like patch counts belong in operational reviews, not board packs.</p></div>
              </div>

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">Why do most board security reports fail to communicate risk effectively?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">Most reports lead with activity metrics — vulnerabilities patched, phishing emails blocked, training hours completed — which show effort but not exposure. Under frameworks like the SEC cybersecurity disclosure rules and EU AI Act, board directors now carry personal accountability for how security risk is governed. They need risk-outcome data that informs decisions, not technical status updates.</p></div>
              </div>

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">What is mean time to detect (MTTD) and why does the board care?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">MTTD measures the average time between an attacker entering an environment and the organisation becoming aware. The industry average is 287 days. For boards, this is a survival metric: the longer an attacker operates undetected, the greater the business, regulatory, and reputational damage. Boards should see this number, understand its trend, and know what investments are reducing it.</p></div>
              </div>

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">What regulatory frameworks require boards to govern cybersecurity risk?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">The SEC's cybersecurity disclosure rules (applicable to US-listed companies), the EU AI Act, DORA (Digital Operational Resilience Act for financial entities), GDPR, India's DPDP Act, and several national frameworks explicitly assign board-level accountability for cybersecurity governance. Directors can face personal liability for inadequate oversight — making informed engagement a legal as well as governance imperative.</p></div>
              </div>

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">How does third-party risk fit into board-level security reporting?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">Supply chain and third-party breaches have become one of the most prevalent attack vectors. Board reporting should distinguish between contractually assured security (vendor agreements that say the right things) and independently verified security (actual assessments confirming controls work). The board should know what percentage of critical suppliers fall into each category — and which critical vendors have had zero independent verification.</p></div>
              </div>

              <div className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <div className="faq-q" onClick={(e) => window.toggleFaq && window.toggleFaq(e.currentTarget)}><strong itemProp="name">How can SecComply help improve board-level security reporting?</strong><span className="faq-ch">▾</span></div>
                <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">SecComply reviews your current security reporting framework, identifies gaps between what you are presenting and what your board actually needs, and builds a metrics structure that maps risk to business outcomes. The assessment covers detection and response benchmarks, compliance posture gaps, third-party verification status, and resilience readiness — presented in a format your board can engage with and act on.</p></div>
              </div>

            </div>
          </section>

        </article>

        {/* ── SIDEBAR ── */}
        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#scene" className="toc-link">The Scene in the Boardroom</a></li>
              <li><a href="#wrong" className="toc-link">What Most Reports Get Wrong</a></li>
              <li><a href="#six" className="toc-link">Six Board-Ready Categories</a></li>
              <li><a href="#five" className="toc-link">Five Questions Boards Ask</a></li>
              <li><a href="#better" className="toc-link">How to Report Better</a></li>
              <li><a href="#board-duties" className="toc-link">Board Responsibilities</a></li>
              <li><a href="#principle" className="toc-link">The Underlying Principle</a></li>
              <li><a href="#faq" className="toc-link">FAQ</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Services</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/services/ciso" target="_blank">💼 CISO as a Service</a></li>
              <li><a href="https://seccomply.net/services/iso-27001" target="_blank">🌍 ISO 27001 Consulting</a></li>
              <li><a href="https://seccomply.net/services/soc-2" target="_blank">🛡️ SOC 2 Readiness</a></li>
              <li><a href="https://seccomply.net/services/compliance-as-a-service" target="_blank">📋 Compliance as a Service</a></li>
              <li><a href="https://seccomply.net/services/vapt" target="_blank">🔍 VAPT Services</a></li>
              <li><a href="https://seccomply.net/services/cloud-security" target="_blank">☁️ Cloud Security Audit</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">Security Governance</span>
              <span className="tag">Board Reporting</span>
              <span className="tag">CISO</span>
              <span className="tag">Risk Management</span>
              <span className="tag">MTTD</span>
              <span className="tag">Compliance</span>
              <span className="tag">SEC Rules</span>
              <span className="tag">EU AI Act</span>
              <span className="tag">DPDP Act</span>
              <span className="tag">Leadership</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Ready to Improve Your Board Reporting?</h4>
            <p>Get a free assessment of your current security metrics and what your board actually needs to see.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Assessment →</a>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}