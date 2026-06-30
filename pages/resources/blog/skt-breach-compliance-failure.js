import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function SKTBreach() {
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

      const url = encodeURIComponent('https://seccomply.net/resources/blog/skt-breach-compliance-failure');
      const ttl = encodeURIComponent('SK Telecom Breach: When Compliance Failures Become a $97M Bill, SecComply');
      const sl = document.getElementById('sl');
      const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';

      window.copyLink = function () {
        const raw = 'https://seccomply.net/resources/blog/skt-breach-compliance-failure';
        (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject())
          .catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); });
        toast('Link copied!');
      };

      function toast(msg) {
        let t = document.getElementById('sc-toast');
        if (!t) {
          t = document.createElement('div');
          t.id = 'sc-toast';
          t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:#FF6000;color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgba(255, 96, 0,.4);opacity:0;transition:opacity .3s;pointer-events:none';
          document.body.appendChild(t);
        }
        t.textContent = msg;
        t.style.opacity = '1';
        clearTimeout(t._tid);
        t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500);
      }

      const fadeEls = document.querySelectorAll('.anim');
      if (fadeEls.length && 'IntersectionObserver' in window) {
        const fo = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
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

  return (
    <Layout>
      <Head>
        <title>SK Telecom Breach: When Compliance Failures Become a $97M Bill, SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="SK Telecom's $97M fine wasn't caused by a sophisticated attack, it was basic compliance failures. No encryption, weak access controls, delayed breach notification. Here's the full breakdown." />
        <meta name="keywords" content="SK Telecom breach, PIPC fine, data breach compliance, ISO 27001 breach, SOC 2 breach, DPDP Act breach notification, encryption compliance, network segmentation, least privilege" />
        <meta property="og:title" content="SK Telecom Breach: When Compliance Failures Become a $97M Bill" />
        <meta property="og:description" content="South Korea's biggest telecom wasn't brought down by a zero-day. It was brought down by missing basics. Here's what every organisation should take from the $97M SKT fine." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/skt-breach-compliance-failure" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/skt-breach-compliance-failure" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {"@type":"Article","headline":"SK Telecom Breach: When Compliance Failures Become a $97M Bill","author":{"@type":"Person","name":"SecComply Team","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/assets/images/logo.png"}},"datePublished":"2026-03-09","dateModified":"2026-03-09","mainEntityOfPage":"https://seccomply.net/resources/blog/skt-breach-compliance-failure"},
            {"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What caused the SK Telecom data breach?","acceptedAnswer":{"@type":"Answer","text":"Malware infiltrated SKT's USIM servers and exfiltrated 25 types of subscriber data. The PIPC found the root cause was basic compliance failures: no encryption, no network segmentation, poor access privilege management, and delayed breach notification."}},{"@type":"Question","name":"How much was SK Telecom fined?","acceptedAnswer":{"@type":"Answer","text":"South Korea's PIPC imposed a record $97.2 million fine, the largest data protection penalty in South Korean history. SKT also received a separate fine for delayed breach notification."}},{"@type":"Question","name":"What compliance controls did SK Telecom fail?","acceptedAnswer":{"@type":"Answer","text":"The PIPC cited four failures: no encryption on USIM authentication keys (ISO 27001 A.8.24), no access controls between internet-facing and internal systems (ISO 27001 A.8.22), inadequate privilege management (ISO 27001 A.8.2), and delayed breach notification."}}]},
            {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"SK Telecom Breach","item":"https://seccomply.net/resources/blog/skt-breach-compliance-failure"}]}
          ]
        }) }} />
      </Head>

      <style jsx global>{`
        :root{--cy:#FF6000;--cy2:#d0521f;--glow:rgba(255, 96, 0,.12);--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#F8FAFC;--tb:#E2E8F0;--tm:#94A3B8;--bo:rgba(255, 96, 0,.2);--bs:rgba(255,255,255,.06);--red:#ff4d6d;--am:#ffb703;--gr:#10B981;--serif:'Inter',sans-serif;--sans:'Inter',sans-serif;--mono:'JetBrains Mono',monospace}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
        #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#FF6000,#FF8A3D);z-index:9999;transition:width .1s linear}
        .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
        .breadcrumb a{color:var(--tm);text-decoration:none;transition:color .2s}
        .breadcrumb a:hover{color:var(--cy)}
        .bc-sep{opacity:.4}
        .skt-hero{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem;display:block !important;grid-template-columns:none !important;flex-direction:column !important}
        .skt-hero-badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem;clear:both}
        .badge{display:inline-flex;align-items:center;gap:5px;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
        .badge-cy{background:rgba(255, 96, 0,.1);color:var(--cy);border:1px solid rgba(255, 96, 0,.3)}
        .badge-bl{background:rgba(99,102,241,.1);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
        .badge-red{background:rgba(255,77,109,.1);color:#ff4d6d;border:1px solid rgba(255,77,109,.25)}
        .skt-hero-h1{font-family:var(--serif);font-size:clamp(1.85rem,3.5vw,3rem);font-weight:800;color:var(--tx);line-height:1.2;max-width:780px;margin-bottom:1.1rem;letter-spacing:-1px;display:block;clear:both}
        .skt-hero-h1 em{font-style:italic;color:var(--cy)}
        .skt-hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72;display:block;clear:both}
        /* Author card */
        .skt-author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;clear:both;flex-wrap:wrap}
        .skt-author-strip .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#FF6000,#FF8A3D);display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(255, 96, 0,.3)}
        .skt-author-strip .author-info{flex:1;min-width:0}
        .skt-author-strip .name{font-weight:700;font-size:.95rem;color:var(--tx);margin-bottom:3px}
        .skt-author-strip .meta-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.8rem;margin-bottom:2px}
        .skt-author-strip .date-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.78rem;color:var(--tm)}
        .skt-author-strip .dot{opacity:.3}
        .img-wrap{border-radius:16px;overflow:hidden;border:1px solid var(--bo);margin-bottom:3rem;line-height:0;display:block;clear:both;width:100%}
        .img-cap{text-align:center;font-size:.76rem;color:var(--tm);margin-top:.55rem;font-style:italic;line-height:1.5}
        .blog-layout{max-width:1280px;margin:0 auto;padding:0 2rem 5rem;display:grid;grid-template-columns:1fr 285px;gap:3rem;align-items:start}
        .art{min-width:0}
        .toc-box{background:var(--bgc2);border:1px solid var(--bo);border-radius:14px;padding:1.6rem;margin-bottom:3rem}
        .toc-lbl{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:1rem}
        .toc-grid{display:grid;grid-template-columns:1fr 1fr;gap:.35rem 1.5rem}
        .toc-grid a{color:var(--tb);text-decoration:none;font-size:.83rem;padding:.28rem 0;border-bottom:1px solid var(--bs);transition:color .2s;display:flex;align-items:center;gap:6px}
        .toc-grid a::before{content:'';width:4px;height:4px;border-radius:50%;background:var(--cy);opacity:.4;flex-shrink:0}
        .toc-grid a:hover{color:var(--cy)}
        .art h2{font-family:var(--serif);font-size:1.55rem;font-weight:800;color:var(--tx);margin:3rem 0 1.2rem;line-height:1.3;letter-spacing:-.5px}
        .art h2 em{color:var(--cy);font-style:italic}
        .art p{font-size:1rem;line-height:1.85;color:var(--tb);margin-bottom:1.2rem}
        .art p strong{color:var(--tx);font-weight:600}
        .pull-quote{border-left:4px solid var(--cy);padding:1.4rem 2rem;margin:2.5rem 0;background:linear-gradient(135deg,rgba(255, 96, 0,.06),transparent);border-radius:0 12px 12px 0}
        .pull-quote p{font-size:1.05rem;font-style:italic;color:var(--tx)!important;margin-bottom:.5rem!important;line-height:1.65!important}
        .pull-quote cite{font-size:.77rem;color:var(--tm)}
        .def-box{background:linear-gradient(135deg,rgba(255, 96, 0,.07),rgba(255, 96, 0,.02));border:1px solid rgba(255, 96, 0,.22);border-radius:14px;padding:1.6rem 2rem;margin:2rem 0}
        .def-lbl{font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--cy);margin-bottom:.6rem}
        .def-box p{font-size:.97rem;color:var(--tx)!important;margin-bottom:0!important;line-height:1.7}
        .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:2.5rem 0}
        .stat-card{background:var(--bgc);border:1px solid var(--bo);border-radius:14px;padding:1.5rem;text-align:center;position:relative;overflow:hidden}
        .stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#FF6000,#FF8A3D)}
        .stat-n{font-family:var(--serif);font-size:2.1rem;font-weight:800;color:var(--cy);line-height:1;margin-bottom:.4rem}
        .stat-l{font-size:.75rem;color:var(--tm);line-height:1.4}
        .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
        .co-info{background:rgba(255, 96, 0,.06);border:1px solid rgba(255, 96, 0,.2)}
        .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
        .co-danger{background:rgba(255,77,109,.06);border:1px solid rgba(255,77,109,.2)}
        .co-verdict{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
        .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
        .co-body p{margin-bottom:0!important;font-size:.89rem!important;line-height:1.7}
        .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
        .failure-block{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.6rem 2rem;margin:2rem 0;border-left:3px solid var(--cy)}
        .failure-num{font-size:.67rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--cy);margin-bottom:.5rem}
        .failure-title{font-size:1.1rem;font-weight:700;color:var(--tx);margin-bottom:1rem}
        .table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
        .cmp-table{width:100%;border-collapse:collapse}
        .cmp-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.76rem;font-weight:700;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
        .cmp-table td{padding:.78rem 1rem;font-size:.84rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
        .cmp-table tr:last-child td{border-bottom:none}
        .cmp-table tr:hover td{background:rgba(255, 96, 0,.03)}
        .cost-list{list-style:none;margin:1.5rem 0;display:flex;flex-direction:column;gap:.5rem}
        .cost-list li{display:flex;align-items:flex-start;gap:.75rem;padding:.9rem 1.1rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;font-size:.88rem;color:var(--tb)}
        .cost-list li::before{content:'▸';color:var(--cy);flex-shrink:0;margin-top:1px;font-size:.8rem}
        .cost-list li strong{color:var(--tx)}
        .feat-list{list-style:none;margin:1.5rem 0;display:flex;flex-direction:column;gap:.65rem}
        .feat-list li{display:flex;align-items:flex-start;gap:1rem;padding:1rem 1.2rem;background:var(--bgc2);border:1px solid var(--bs);border-radius:10px;transition:border-color .2s}
        .feat-list li:hover{border-color:var(--bo)}
        .f-num{width:26px;height:26px;border-radius:7px;background:linear-gradient(135deg,#FF6000,#FF8A3D);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff;flex-shrink:0;margin-top:2px}
        .f-body strong{display:block;color:var(--tx);font-size:.89rem;margin-bottom:3px}
        .f-body span{font-size:.83rem;color:var(--tm)}
        .mapping-table-wrap{overflow-x:auto;margin:2rem 0;border-radius:14px;border:1px solid var(--bo)}
        .map-table{width:100%;border-collapse:collapse}
        .map-table th{background:var(--bgc);padding:.85rem 1.1rem;text-align:left;font-size:.76rem;font-weight:700;letter-spacing:.04em;color:var(--cy);border-bottom:1px solid var(--bo)}
        .map-table td{padding:.82rem 1.1rem;font-size:.84rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
        .map-table tr:last-child td{border-bottom:none}
        .map-table tr:hover td{background:rgba(255, 96, 0,.03)}
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
        .cta-banner h3{font-size:1.5rem;font-weight:800;color:var(--tx);margin-bottom:.7rem}
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
        .rel-links a:last-child{border-bottom:none}
        .rel-links a:hover{color:var(--cy)}
        .tag-cloud{display:flex;flex-wrap:wrap;gap:.42rem}
        .tag{padding:.26rem .68rem;border:1px solid var(--bs);border-radius:6px;font-size:.68rem;color:var(--tm);cursor:default;transition:all .2s}
        .tag:hover{border-color:var(--cy);color:var(--cy);background:var(--glow)}
        .sb-cta{background:linear-gradient(135deg,rgba(255, 96, 0,.08),rgba(255, 96, 0,.02));border:1px solid rgba(255, 96, 0,.22);border-radius:14px;padding:1.55rem 1.35rem;text-align:center}
        .sb-cta h4{font-size:.98rem;font-weight:700;color:var(--tx);margin-bottom:.5rem}
        .sb-cta p{font-size:.77rem;color:var(--tm);margin-bottom:.9rem!important}
        .sb-cta-btn{display:block;background:var(--cy);color:#fff;padding:.58rem 1rem;border-radius:8px;font-weight:700;font-size:.79rem;text-decoration:none;transition:background .2s}
        .sb-cta-btn:hover{background:var(--cy2)}
        #btt{position:fixed;bottom:2rem;right:2rem;width:41px;height:41px;background:var(--cy);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.05rem;display:none;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(255, 96, 0,.4);transition:transform .2s;z-index:50}
        #btt.vis{display:flex}
        #btt:hover{transform:translateY(-3px)}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
        .anim{animation:fadeUp .55s ease both}
        @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sb{position:static}}
        @media(max-width:768px){.stats-row{grid-template-columns:1fr}.toc-grid{grid-template-columns:1fr}.blog-layout{padding:0 1.25rem 3rem}.skt-hero{padding:2rem 1.25rem}}
        @media(max-width:600px){.skt-hero-h1{font-size:1.65rem}.skt-author-strip{flex-direction:column;align-items:flex-start;gap:12px}}
        @media(max-width:480px){.skt-hero{padding:1.5rem 1rem}.blog-layout{padding:0 1rem 3rem}}
      `}</style>

      <div id="reading-progress"></div>

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <a href="https://seccomply.net/">Home</a>
        <span className="bc-sep">›</span>
        <a href="/resources">Resources</a>
        <span className="bc-sep">›</span>
        <a href="/resources/blog">Blog</a>
        <span className="bc-sep">›</span>
        <span style={{color:'var(--tb)'}}>SK Telecom Breach</span>
      </div>

      {/* HERO */}
      <div className="skt-hero">
        <div className="skt-hero-badges">
          <span className="badge badge-red">🚨 Data Breach</span>
          <span className="badge badge-cy">💸 Regulatory Fine</span>
          <span className="badge badge-bl">✓ ISO 27001 · SOC 2 · DPDP</span>
        </div>

        <h1 className="skt-hero-h1">SK Telecom Breach: When Compliance Failures Become a <em>$97M Bill</em></h1>

        <p className="skt-hero-sub">South Korea's biggest telecom wasn't brought down by a sophisticated zero-day. It was brought down by missing basics, no encryption, weak access controls, and a delayed breach notification. Regulators made it cost $97 million to find out.</p>

        <div className="skt-author-strip">
          <div className="avatar">SC</div>
          <div className="author-info">
            <div className="name">SecComply Team</div>
            <div className="meta-row">
              <span style={{color:"var(--cy)",fontWeight:600}}>✍️ Cybersecurity &amp; Compliance</span>
              <span className="dot">·</span>
              <span id="read-time">📖 7 min read</span>
            </div>
            <div className="date-row">
              <span>📅 March 9, 2026</span>
              <span className="dot">·</span>
              <span>🏢 SecComply</span>
            </div>
          </div>
        </div>

        {/* IMAGE 1, SKT Breach Dashboard SVG */}
        <div className="img-wrap">
          <svg viewBox="0 0 960 420" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'linear-gradient(160deg,#0a0f1e 0%,#04060f 100%)'}}>
            <defs>
              <linearGradient id="gOr" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FF6000"/><stop offset="100%" stopColor="#FF8A3D"/></linearGradient>
              <linearGradient id="gRd" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff4d6d"/><stop offset="100%" stopColor="#cc2244"/></linearGradient>
              <linearGradient id="gGr" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#10B981"/><stop offset="100%" stopColor="#059669"/></linearGradient>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255, 96, 0,0.04)" strokeWidth="1"/></pattern>
            </defs>
            <rect width="960" height="420" fill="url(#grid)"/>
            {/* Title */}
            <text x="480" y="38" textAnchor="middle" fill="rgba(255, 96, 0,0.9)" fontSize="13" fontWeight="700" fontFamily="sans-serif" letterSpacing="2">SK TELECOM BREACH, COMPLIANCE FAILURE TIMELINE</text>
            {/* Timeline line */}
            <line x1="60" y1="110" x2="900" y2="110" stroke="rgba(255, 96, 0,0.2)" strokeWidth="1.5" strokeDasharray="6,4"/>
            {/* Event 1 */}
            <circle cx="140" cy="110" r="8" fill="#FF6000"/>
            <rect x="80" y="128" width="120" height="62" rx="8" fill="#0d1626" stroke="rgba(255, 96, 0,0.25)" strokeWidth="1"/>
            <text x="140" y="148" textAnchor="middle" fill="#FF6000" fontSize="9" fontWeight="700" fontFamily="sans-serif">APR 2025</text>
            <text x="140" y="163" textAnchor="middle" fill="rgba(226,232,240,0.9)" fontSize="9" fontFamily="sans-serif">Malware detected</text>
            <text x="140" y="177" textAnchor="middle" fill="rgba(226,232,240,0.9)" fontSize="9" fontFamily="sans-serif">on USIM servers</text>
            {/* Event 2 */}
            <circle cx="300" cy="110" r="8" fill="#ff4d6d"/>
            <rect x="240" y="128" width="120" height="62" rx="8" fill="#0d1626" stroke="rgba(255,77,109,0.25)" strokeWidth="1"/>
            <text x="300" y="148" textAnchor="middle" fill="#ff4d6d" fontSize="9" fontWeight="700" fontFamily="sans-serif">APR 22</text>
            <text x="300" y="163" textAnchor="middle" fill="rgba(226,232,240,0.9)" fontSize="9" fontFamily="sans-serif">25 data types</text>
            <text x="300" y="177" textAnchor="middle" fill="rgba(226,232,240,0.9)" fontSize="9" fontFamily="sans-serif">exfiltrated</text>
            {/* Event 3 */}
            <circle cx="460" cy="110" r="8" fill="#ffb703"/>
            <rect x="400" y="128" width="120" height="62" rx="8" fill="#0d1626" stroke="rgba(255,183,3,0.25)" strokeWidth="1"/>
            <text x="460" y="148" textAnchor="middle" fill="#ffb703" fontSize="9" fontWeight="700" fontFamily="sans-serif">MAY 2025</text>
            <text x="460" y="163" textAnchor="middle" fill="rgba(226,232,240,0.9)" fontSize="9" fontFamily="sans-serif">9M SIM cards</text>
            <text x="460" y="177" textAnchor="middle" fill="rgba(226,232,240,0.9)" fontSize="9" fontFamily="sans-serif">replaced</text>
            {/* Event 4 */}
            <circle cx="620" cy="110" r="8" fill="#818cf8"/>
            <rect x="560" y="128" width="120" height="62" rx="8" fill="#0d1626" stroke="rgba(129,140,248,0.25)" strokeWidth="1"/>
            <text x="620" y="148" textAnchor="middle" fill="#818cf8" fontSize="9" fontWeight="700" fontFamily="sans-serif">JUN 2025</text>
            <text x="620" y="163" textAnchor="middle" fill="rgba(226,232,240,0.9)" fontSize="9" fontFamily="sans-serif">PIPC investigation</text>
            <text x="620" y="177" textAnchor="middle" fill="rgba(226,232,240,0.9)" fontSize="9" fontFamily="sans-serif">opened</text>
            {/* Event 5 */}
            <circle cx="820" cy="110" r="10" fill="url(#gRd)"/>
            <rect x="750" y="128" width="140" height="62" rx="8" fill="#1a0a10" stroke="rgba(255,77,109,0.4)" strokeWidth="1.5"/>
            <text x="820" y="148" textAnchor="middle" fill="#ff4d6d" fontSize="9" fontWeight="700" fontFamily="sans-serif">VERDICT</text>
            <text x="820" y="163" textAnchor="middle" fill="rgba(226,232,240,0.9)" fontSize="9" fontFamily="sans-serif">$97.2M fine</text>
            <text x="820" y="177" textAnchor="middle" fill="rgba(226,232,240,0.9)" fontSize="9" fontFamily="sans-serif">Largest in Korean history</text>
            {/* Stat cards row */}
            <rect x="60" y="230" width="200" height="90" rx="12" fill="#0d1626" stroke="rgba(255,77,109,0.3)" strokeWidth="1"/>
            <rect x="60" y="230" width="200" height="3" rx="1.5" fill="url(#gRd)"/>
            <text x="160" y="263" textAnchor="middle" fill="#ff4d6d" fontSize="26" fontWeight="800" fontFamily="sans-serif">$97.2M</text>
            <text x="160" y="283" textAnchor="middle" fill="rgba(148,163,184,0.8)" fontSize="9" fontFamily="sans-serif">PIPC regulatory fine</text>
            <text x="160" y="298" textAnchor="middle" fill="rgba(148,163,184,0.5)" fontSize="8" fontFamily="sans-serif">Largest in South Korean history</text>
            <rect x="280" y="230" width="200" height="90" rx="12" fill="#0d1626" stroke="rgba(255, 96, 0,0.3)" strokeWidth="1"/>
            <rect x="280" y="230" width="200" height="3" rx="1.5" fill="url(#gOr)"/>
            <text x="380" y="263" textAnchor="middle" fill="#FF6000" fontSize="26" fontWeight="800" fontFamily="sans-serif">23M</text>
            <text x="380" y="283" textAnchor="middle" fill="rgba(148,163,184,0.8)" fontSize="9" fontFamily="sans-serif">Subscribers affected</text>
            <text x="380" y="298" textAnchor="middle" fill="rgba(148,163,184,0.5)" fontSize="8" fontFamily="sans-serif">USIM auth keys exposed</text>
            <rect x="500" y="230" width="200" height="90" rx="12" fill="#0d1626" stroke="rgba(255,183,3,0.3)" strokeWidth="1"/>
            <rect x="500" y="230" width="200" height="3" rx="1.5" fill="#ffb703"/>
            <text x="600" y="263" textAnchor="middle" fill="#ffb703" fontSize="26" fontWeight="800" fontFamily="sans-serif">$5.6B</text>
            <text x="600" y="283" textAnchor="middle" fill="rgba(148,163,184,0.8)" fontSize="9" fontFamily="sans-serif">Estimated 3-year business impact</text>
            <text x="600" y="298" textAnchor="middle" fill="rgba(148,163,184,0.5)" fontSize="8" fontFamily="sans-serif">Churn + remediation + legal</text>
            <rect x="720" y="230" width="200" height="90" rx="12" fill="#0d1626" stroke="rgba(16,185,129,0.25)" strokeWidth="1"/>
            <rect x="720" y="230" width="200" height="3" rx="1.5" fill="url(#gGr)"/>
            <text x="820" y="263" textAnchor="middle" fill="#10B981" fontSize="26" fontWeight="800" fontFamily="sans-serif">4</text>
            <text x="820" y="283" textAnchor="middle" fill="rgba(148,163,184,0.8)" fontSize="9" fontFamily="sans-serif">Compliance failures cited</text>
            <text x="820" y="298" textAnchor="middle" fill="rgba(148,163,184,0.5)" fontSize="8" fontFamily="sans-serif">All were preventable</text>
            {/* Footer */}
            <text x="480" y="360" textAnchor="middle" fill="rgba(148,163,184,0.3)" fontSize="8.5" fontFamily="sans-serif">Source: South Korea PIPC official findings · April–June 2025</text>
          </svg>
          <p className="img-cap">Fig 1. SK Telecom breach timeline and impact, $97.2M fine, 23M subscribers affected, and a 3-year business impact estimated at $5.6B. All from preventable compliance failures.</p>
        </div>
      </div>

      {/* BLOG LAYOUT */}
      <div className="blog-layout">
        <article className="art">

          <div className="toc-box">
            <div className="toc-lbl">📋 In This Article</div>
            <div className="toc-grid">
              <a href="#what-happened">What Happened</a>
              <a href="#failure1">Failure 1: No Encryption</a>
              <a href="#failure2">Failure 2: No Segmentation</a>
              <a href="#failure3">Failure 3: Poor Access Controls</a>
              <a href="#failure4">Failure 4: Delayed Notification</a>
              <a href="#real-cost">The Real Cost</a>
              <a href="#seccomply-mapping">SecComply Mapping</a>
              <a href="#checklist">5 Controls to Audit</a>
            </div>
          </div>

          <section id="what-happened">
            <h2>What <em>Happened</em></h2>
            <p>On 22 April 2025, SK Telecom, South Korea's largest mobile carrier with 23 million subscribers, detected unusual traffic on its network. Investigation revealed malware had infiltrated its USIM servers and exfiltrated 25 types of subscriber data, including phone numbers, International Mobile Subscriber Identity (IMSI) numbers, and critically, SIM authentication keys.</p>
            <p>The authentication keys (called 'Ki' values) are the master credentials used to verify a subscriber's identity on a mobile network. In the wrong hands, they enable SIM cloning, an attacker could replicate your SIM card and intercept your calls, texts, and two-factor authentication codes.</p>
            <p>SKT offered free SIM replacements to all 23 million affected subscribers. Over 9 million replaced their SIMs within weeks. The CEO publicly apologised. The SK Group Chairman publicly apologised. Then the regulator published their findings, and the real story came out.</p>

            <div className="callout co-verdict">
              <div className="co-icon">📋</div>
              <div className="co-body">
                <strong>The Regulator's Verdict</strong>
                <p>PIPC Chairperson Haksoo Ko stated: "The company had been in a vulnerable state for quite a long time, with significant weaknesses across the board." This wasn't a targeted attack that bypassed world-class defences. It was a compliance failure waiting to be exploited.</p>
              </div>
            </div>
          </section>

          <section id="failure1">
            <h2>Failure 1: <em>No Encryption</em> on USIM Authentication Keys</h2>
            <p>The PIPC found that over 26 million USIM authentication keys, the most sensitive data SKT held, were stored in plain text. Completely unencrypted. When the attacker accessed the database, they didn't need to crack anything. The keys were just there.</p>
            <div className="table-wrap">
              <table className="cmp-table">
                <thead><tr><th>Framework</th><th>Specific Control</th><th>Requirement</th></tr></thead>
                <tbody>
                  <tr><td><strong>ISO 27001:2022</strong></td><td>Annex A.8.24</td><td>Encryption of sensitive data at rest is mandatory for all data classified as confidential or above.</td></tr>
                  <tr><td><strong>SOC 2</strong></td><td>CC6.1</td><td>Encryption controls must be applied to protect data from unauthorized access, including at-rest storage.</td></tr>
                  <tr><td><strong>DPDP Act 2023</strong></td><td>Section 8(4)</td><td>Data fiduciaries must implement appropriate technical measures, encryption of authentication credentials is a baseline expectation.</td></tr>
                  <tr><td><strong>HIPAA / PCI DSS</strong></td><td>§164.312(a)(2)(iv)</td><td>Encrypt electronic protected health information. PCI DSS Req. 3.5 mandates encryption of stored cardholder data.</td></tr>
                </tbody>
              </table>
            </div>
            <div className="callout co-info">
              <div className="co-icon">💡</div>
              <div className="co-body">
                <strong>The Fix</strong>
                <p>Classify your sensitive data. Anything in the top tier, authentication credentials, PII, financial data, must be encrypted at rest using AES-256 or equivalent. This is not optional under any major compliance framework. If you haven't done a data classification exercise, start there.</p>
              </div>
            </div>
          </section>

          <section id="failure2">
            <h2>Failure 2: No <em>Access Controls</em> Between Internet-Facing and Internal Systems</h2>
            <p>The PIPC's finding was stark: SKT <strong>"did not even implement basic access controls"</strong> between its internet-facing infrastructure and its internal management network. The attacker pivoted from the perimeter into SKT's core systems with no resistance.</p>
            <p>This is the network segmentation problem. When your front door and your safe are in the same room with no wall between them, a breach becomes a catastrophe.</p>
            <div className="callout co-info">
              <div className="co-icon">💡</div>
              <div className="co-body">
                <strong>The Fix</strong>
                <p>Implement network segmentation, separate internet-facing systems from internal management networks and critical data stores using firewalls, VLANs, and Zero Trust access policies. ISO 27001 Annex A.8.22 (Network Segmentation) and SOC 2 CC6.6 both require logical separation of network environments.</p>
              </div>
            </div>

            {/* IMAGE 2, Network segmentation diagram */}
            <div style={{margin:'2rem 0'}}>
              <svg viewBox="0 0 780 200" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',display:'block',background:'#06101a',borderRadius:'14px',border:'1px solid rgba(255, 96, 0,0.15)'}}>
                <defs>
                  <marker id="ar2" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="rgba(255,77,109,0.6)"/></marker>
                  <marker id="ar3" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="rgba(16,185,129,0.6)"/></marker>
                </defs>
                {/* SKT BAD */}
                <text x="190" y="25" textAnchor="middle" fill="#ff4d6d" fontSize="10" fontWeight="700" fontFamily="sans-serif">❌ SKT, No Segmentation</text>
                <rect x="20" y="38" width="100" height="50" rx="8" fill="#1a0a0a" stroke="rgba(255,77,109,0.4)" strokeWidth="1"/>
                <text x="70" y="62" textAnchor="middle" fill="rgba(226,232,240,0.7)" fontSize="9" fontFamily="sans-serif">Internet</text>
                <text x="70" y="76" textAnchor="middle" fill="rgba(226,232,240,0.7)" fontSize="9" fontFamily="sans-serif">/ APIs</text>
                <line x1="120" y1="63" x2="175" y2="63" stroke="rgba(255,77,109,0.7)" strokeWidth="2" strokeDasharray="4,3" markerEnd="url(#ar2)"/>
                <text x="147" y="57" textAnchor="middle" fill="#ff4d6d" fontSize="8" fontFamily="sans-serif">no wall</text>
                <rect x="178" y="38" width="100" height="50" rx="8" fill="#1a0810" stroke="rgba(255,77,109,0.5)" strokeWidth="1"/>
                <text x="228" y="62" textAnchor="middle" fill="rgba(226,232,240,0.7)" fontSize="9" fontFamily="sans-serif">USIM DB</text>
                <text x="228" y="76" textAnchor="middle" fill="#ff4d6d" fontSize="8" fontWeight="700" fontFamily="sans-serif">PLAIN TEXT</text>
                <text x="190" y="120" textAnchor="middle" fill="rgba(255,77,109,0.6)" fontSize="8" fontFamily="sans-serif">Attacker pivoted freely → 26M keys exposed</text>
                {/* Divider */}
                <line x1="390" y1="20" x2="390" y2="180" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                {/* CORRECT */}
                <text x="585" y="25" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="700" fontFamily="sans-serif">✓ Correct, Zero Trust Segmentation</text>
                <rect x="415" y="38" width="100" height="50" rx="8" fill="#071a12" stroke="rgba(16,185,129,0.3)" strokeWidth="1"/>
                <text x="465" y="62" textAnchor="middle" fill="rgba(226,232,240,0.7)" fontSize="9" fontFamily="sans-serif">Internet</text>
                <text x="465" y="76" textAnchor="middle" fill="rgba(226,232,240,0.7)" fontSize="9" fontFamily="sans-serif">/ APIs</text>
                <rect x="528" y="48" width="30" height="30" rx="6" fill="#0a1f14" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5"/>
                <text x="543" y="67" textAnchor="middle" fill="#10B981" fontSize="11" fontFamily="sans-serif">🔒</text>
                <text x="543" y="90" textAnchor="middle" fill="rgba(16,185,129,0.7)" fontSize="7.5" fontFamily="sans-serif">Firewall</text>
                <line x1="515" y1="63" x2="528" y2="63" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" markerEnd="url(#ar3)"/>
                <line x1="558" y1="63" x2="572" y2="63" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" markerEnd="url(#ar3)"/>
                <rect x="572" y="38" width="115" height="50" rx="8" fill="#071a12" stroke="rgba(16,185,129,0.3)" strokeWidth="1"/>
                <text x="629" y="60" textAnchor="middle" fill="rgba(226,232,240,0.7)" fontSize="9" fontFamily="sans-serif">USIM DB</text>
                <text x="629" y="75" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="700" fontFamily="sans-serif">AES-256 ENCRYPTED</text>
                <text x="585" y="120" textAnchor="middle" fill="rgba(16,185,129,0.6)" fontSize="8" fontFamily="sans-serif">Attacker stopped at perimeter, no lateral movement</text>
              </svg>
              <p className="img-cap">Fig 2. The difference between SKT's architecture (no segmentation, plain-text keys) vs a correctly segmented Zero Trust network with encrypted storage.</p>
            </div>
          </section>

          <section id="failure3">
            <h2>Failure 3: Inadequate <em>Access Privilege</em> Management</h2>
            <p>The PIPC also cited SKT's failure to manage access privileges correctly. Too many accounts had access to too many systems, a textbook violation of the principle of least privilege. Once the attacker was inside, they could move laterally without encountering meaningful access barriers.</p>
            <p>This is the same control failure that enabled the M&amp;S breach. It's also one of the most commonly cited deficiencies in any compliance audit.</p>
            <div className="callout co-info">
              <div className="co-icon">💡</div>
              <div className="co-body">
                <strong>The Fix</strong>
                <p>Conduct a quarterly access review. Every user, service account, and third-party integration should have only the permissions required to do their job, nothing more. Privileged Access Management (PAM) tools automate this enforcement. ISO 27001 Annex A.8.2 (Privileged Access Rights) and SOC 2 CC6.3 require documented, enforced least-privilege policies.</p>
              </div>
            </div>
          </section>

          <section id="failure4">
            <h2>Failure 4: <em>Delayed Breach Notification</em>, A Separate Fine</h2>
            <p>This one is particularly important for Indian organisations. SKT received a <strong>separate administrative fine</strong> specifically for failing to notify affected customers within the legally required timeframe after discovering the breach.</p>
            <p>Breach notification isn't just an ethical obligation, it's a hard regulatory deadline. Miss it, and you get fined twice: once for the breach, once for the cover-up.</p>
            <div className="table-wrap">
              <table className="cmp-table">
                <thead><tr><th>Regulation</th><th>Notification Deadline</th><th>Penalty for Non-Compliance</th></tr></thead>
                <tbody>
                  <tr><td><strong>DPDP Act 2023 (India)</strong></td><td>Without unreasonable delay (72-hour guideline expected)</td><td><strong style={{color:'#ff4d6d'}}>Up to ₹250 crore per incident</strong></td></tr>
                  <tr><td><strong>GDPR (EU)</strong></td><td>72 hours to supervisory authority</td><td><strong style={{color:'#ff4d6d'}}>Up to €20M or 4% global turnover</strong></td></tr>
                  <tr><td><strong>South Korea PIPA</strong></td><td>24–72 hours</td><td><strong style={{color:'#ff4d6d'}}>Separate administrative fine + criminal liability</strong></td></tr>
                  <tr><td><strong>HIPAA (US Healthcare)</strong></td><td>60 days from discovery (&gt;500 affected)</td><td><strong style={{color:'#ff4d6d'}}>$100–$50,000 per violation</strong></td></tr>
                </tbody>
              </table>
            </div>
            <div className="callout co-warn">
              <div className="co-icon">⚠️</div>
              <div className="co-body">
                <strong>Why This Matters for Indian Businesses</strong>
                <p>India's DPDP Act 2023 introduces mandatory breach notification obligations for the first time. Organisations handling personal data must notify both the Data Protection Board of India and affected individuals after a breach. You cannot notify if you haven't detected the breach, which means detection capability is now a compliance requirement, not just a security best practice.</p>
              </div>
            </div>
          </section>

          <section id="real-cost">
            <h2>The Real <em>Cost</em> of Non-Compliance</h2>
            <p>The $97.2M fine is just the headline number. The full cost of SKT's compliance failures is far larger:</p>
            <ul className="cost-list">
              <li><strong>$97.2M regulatory fine</strong>, from South Korea's PIPC</li>
              <li><strong>$153.8M estimated cost</strong>, of replacing SIM cards for 23 million subscribers</li>
              <li><strong>250,000 subscribers left immediately</strong>, with churn projected to reach 2.5 million</li>
              <li><strong>800 billion won cut from 2025 revenue forecast</strong>, due to customer compensation packages</li>
              <li><strong>$560M committed over 5 years</strong>, to rebuild data security infrastructure, after the breach</li>
              <li><strong>Class action lawsuits filed</strong>, with damages sought for each of the 23 million affected individuals</li>
            </ul>
            <div className="callout co-verdict">
              <div className="co-icon">📌</div>
              <div className="co-body">
                <strong>The Key Lesson</strong>
                <p>SKT will spend more fixing this in the next five years than it would have cost to build proper compliance controls from the start. This is the pattern in every major regulatory breach: the cure is always more expensive than the prevention. Compliance isn't a cost centre, it's risk capital.</p>
              </div>
            </div>
          </section>

          <section id="seccomply-mapping">
            <h2>How <em>SecComply</em> Maps to These Exact Controls</h2>
            <p>Every failure the PIPC cited in SK Telecom's case is something SecComply's platform is specifically built to identify and remediate. Here's the direct mapping:</p>
            <div className="mapping-table-wrap">
              <table className="map-table">
                <thead><tr><th>SKT Compliance Failure</th><th>SecComply Feature</th><th>Framework Covered</th></tr></thead>
                <tbody>
                  <tr><td>No data encryption</td><td>Automated data classification + encryption control tracking in the SecComply gap dashboard</td><td><strong>ISO 27001 A.8.24, SOC 2 CC6.1, DPDP Act S.8</strong></td></tr>
                  <tr><td>No network segmentation</td><td>Cloud Security Scanner flags exposed management interfaces and missing segmentation in AWS, Azure, GCP</td><td><strong>ISO 27001 A.8.22, SOC 2 CC6.6</strong></td></tr>
                  <tr><td>Poor access privilege management</td><td>Continuous access control monitoring + quarterly access review workflows built into platform</td><td><strong>ISO 27001 A.8.2, SOC 2 CC6.3</strong></td></tr>
                  <tr><td>Delayed breach notification</td><td>Pre-built Incident Response playbooks with automated notification workflow templates; breach timer built in</td><td><strong>DPDP Act, GDPR Art.33, HIPAA §164.412</strong></td></tr>
                  <tr><td>Long-standing undetected vulnerabilities</td><td>Continuous vulnerability scanning with CVSS-priority remediation queue, no 'set and forget' gaps</td><td><strong>ISO 27001 A.8.8, SOC 2 CC7.1</strong></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="checklist">
            <h2>5 Compliance Controls to <em>Audit This Week</em></h2>
            <p>Based directly on the PIPC's findings, if SKT had checked these five things, the $97M fine wouldn't exist.</p>
            <ul className="feat-list">
              <li><div className="f-num">1</div><div className="f-body"><strong>Inventory your sensitive data</strong><span>Where is your most sensitive data stored? Is it encrypted at rest? If you can't answer both questions today, that's your gap.</span></div></li>
              <li><div className="f-num">2</div><div className="f-body"><strong>Map your network zones</strong><span>Can an attacker pivot from a public-facing service to your internal database? Draw the network boundary. Close the gaps.</span></div></li>
              <li><div className="f-num">3</div><div className="f-body"><strong>Run a least-privilege access review</strong><span>Who has admin access? Does every service account need the permissions it has? Revoke what isn't needed.</span></div></li>
              <li><div className="f-num">4</div><div className="f-body"><strong>Test your breach notification process</strong><span>If you discovered a breach tonight, do you know exactly who to call and what to file? Time it. It should take hours, not days.</span></div></li>
              <li><div className="f-num">5</div><div className="f-body"><strong>Book a compliance gap assessment</strong><span>Get an independent view of where you stand against ISO 27001, SOC 2, or DPDP Act before a regulator does it for you.</span></div></li>
            </ul>
          </section>

          <div className="cta-banner">
            <h3>Don't Wait for Your $97M Wake-Up Call</h3>
            <p>Every control SKT failed is something SecComply's platform monitors continuously, encryption gaps, network exposure, access privilege drift, and breach notification readiness. Get an independent compliance gap assessment before a regulator does it for you.</p>
            <div className="cta-btns">
              <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn-p" target="_blank" rel="noopener">Book a Compliance Assessment →</a>
              <a href="https://seccomply.net/services/compliance-as-a-service" className="btn-o" target="_blank" rel="noopener">View Compliance Services</a>
            </div>
            <div className="share-strip">
              <span className="share-lbl">Share:</span>
              <a className="share-btn" id="sl" href="#" target="_blank" rel="noopener"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>LinkedIn</a>
              <a className="share-btn" id="st" href="#" target="_blank" rel="noopener">𝕏 Twitter</a>
              <button className="share-btn" onClick={() => window.copyLink && window.copyLink()}>🔗 Copy Link</button>
            </div>
          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="sb">
          <div className="sb-card">
            <div className="sb-title">In This Article</div>
            <ul className="sb-toc">
              <li><a href="#what-happened" className="toc-link">What Happened</a></li>
              <li><a href="#failure1" className="toc-link">Failure 1: No Encryption</a></li>
              <li><a href="#failure2" className="toc-link">Failure 2: No Segmentation</a></li>
              <li><a href="#failure3" className="toc-link">Failure 3: Access Controls</a></li>
              <li><a href="#failure4" className="toc-link">Failure 4: Late Notification</a></li>
              <li><a href="#real-cost" className="toc-link">The Real Cost</a></li>
              <li><a href="#seccomply-mapping" className="toc-link">SecComply Mapping</a></li>
              <li><a href="#checklist" className="toc-link">5 Controls to Audit</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🔗 Related Services</div>
            <ul className="rel-links">
              <li><a href="https://seccomply.net/services/iso-27001" target="_blank">🌍 ISO 27001 Consulting</a></li>
              <li><a href="https://seccomply.net/services/soc-2" target="_blank">🛡️ SOC 2 Readiness</a></li>
              <li><a href="https://seccomply.net/services/cloud-security" target="_blank">☁️ Cloud Security Assessments</a></li>
              <li><a href="https://seccomply.net/services/compliance-as-a-service" target="_blank">🛡️ Compliance-as-a-Service</a></li>
              <li><a href="https://seccomply.net/services/ciso" target="_blank">💼 CISO as a Service</a></li>
              <li><a href="https://seccomply.net/services/vapt" target="_blank">🔍 VAPT Services</a></li>
            </ul>
          </div>
          <div className="sb-card">
            <div className="sb-title">🏷️ Tags</div>
            <div className="tag-cloud">
              <span className="tag">SK Telecom</span><span className="tag">Data Breach</span><span className="tag">PIPC Fine</span><span className="tag">ISO 27001</span><span className="tag">SOC 2</span><span className="tag">DPDP Act</span><span className="tag">Encryption</span><span className="tag">Breach Notification</span><span className="tag">Least Privilege</span><span className="tag">Network Segmentation</span>
            </div>
          </div>
          <div className="sb-cta">
            <h4>Is Your Organisation Audit-Ready?</h4>
            <p>Book a free 30-minute compliance consultation with SecComply's experts.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="sb-cta-btn" target="_blank" rel="noopener">Book Free Consultation →</a>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} title="Back to top">↑</button>
    </Layout>
  )
}