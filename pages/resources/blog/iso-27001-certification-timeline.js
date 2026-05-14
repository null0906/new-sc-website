import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function ISO27001CertificationTimeline() {
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
      window.copyLink = function () { (navigator.clipboard ? navigator.clipboard.writeText(window.location.href) : Promise.reject()).catch(() => {}); };
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
      const first = document.querySelector('.faq-item'); if (first) first.classList.add('open');
    })();
  }, []);

  return (
    <Layout>
      <Head>
        <title>How Long Does ISO 27001 Certification Take? A Realistic Timeline | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="A realistic ISO 27001 certification timeline. The four variables that determine project length, typical timelines from 4-month sprint to 14-month standard, why the '10-week ISO' claim is rarely true, and the most common causes of delay." />
        <meta name="keywords" content="ISO 27001 certification timeline, how long ISO 27001, ISO 27001 duration, certification project timeline, ISO 27001 weeks, ISO 27001 months, Stage 1 Stage 2 timing, surveillance audit, recertification" />
        <meta property="og:title" content="How Long Does ISO 27001 Certification Take? A Realistic Timeline" />
        <meta property="og:description" content="Most blogs say 'three to six months.' Real projects rarely finish that fast. The four variables, the honest timelines, and where projects actually slip." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/iso-27001-certification-timeline" />
        <meta property="article:published_time" content="2026-05-08" />
        <meta property="article:author" content="Soham Sawant" />
        <meta property="article:tag" content="ISO 27001" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/iso-27001-certification-timeline" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"How Long Does ISO 27001 Certification Take? A Realistic Timeline","description":"The honest answer on ISO 27001 project length -the four variables, typical timelines, and where projects slip.","author":{"@type":"Person","name":"Soham Sawant","jobTitle":"Cybersecurity Expert & Technical Writer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-08","dateModified":"2026-05-08","mainEntityOfPage":"https://seccomply.net/resources/blog/iso-27001-certification-timeline","articleSection":"ISO 27001","image":"https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"ISO 27001 Certification Timeline","item":"https://seccomply.net/resources/blog/iso-27001-certification-timeline"}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can ISO 27001 really be done in 3 months?","acceptedAnswer":{"@type":"Answer","text":"Only in narrow circumstances -a very small organisation, a tight scope, an already-mature security posture, and a dedicated project team. For most organisations starting from a low baseline, 3 months is unrealistic. The certification audit alone requires 4-6 weeks between Stage 1 and Stage 2, plus the corrective action window, so even a perfectly executed project rarely finishes in under 5 months end-to-end."}},{"@type":"Question","name":"What is the most common timeline?","acceptedAnswer":{"@type":"Answer","text":"For a small-to-medium organisation with moderate maturity and a part-time internal lead, 9-12 months from project kickoff to certificate. Faster is possible with full-time resources and external consultancy; slower is common when the project loses momentum or scope creeps mid-implementation."}},{"@type":"Question","name":"What slows projects down most?","acceptedAnswer":{"@type":"Answer","text":"Three things in order of frequency -scope changes mid-implementation, missing operational evidence at the time of audit (controls designed but not yet operating long enough to test), and unavailable certification body slots which can add 4-8 weeks to the calendar regardless of how ready you are."}},{"@type":"Question","name":"How long is the certificate valid?","acceptedAnswer":{"@type":"Answer","text":"Three years. Surveillance audits occur annually in years 1 and 2, and a full recertification audit in year 3. The certificate remains valid as long as surveillance audits pass and no major nonconformities arise."}},{"@type":"Question","name":"Can we book the certification body before we are ready?","acceptedAnswer":{"@type":"Answer","text":"Yes, and it is recommended. Certification body slots are scarce in some markets and booking 3-6 months ahead is common. The contract is usually flexible enough to reschedule if you slip, but securing the date keeps the project honest about its deadline."}}]}]}) }} />
      </Head>

      <style jsx global>{`
    :root{--cy:#E8632B;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(232,99,43,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--rd:#ff4d6d;--bl:#818cf8;--sans:'Inter',sans-serif}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#E8632B,#FF8A50);z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgba(232,99,43,.1);color:var(--cy);border:1px solid rgba(232,99,43,.25)}
    .badge-bl{background:rgba(99,102,241,.1);color:var(--bl);border:1px solid rgba(99,102,241,.25)}
    .badge-gr{background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25)}
    .hero-h1{font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .hero-h1 em{font-style:italic;color:var(--cy)}
    .hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#E8632B,#FF8A50);display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(232,99,43,.3)}
    .author-info{flex:1}.aname{font-weight:700;font-size:.95rem;color:var(--tx);margin-bottom:3px}
    .ameta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.8rem;margin-bottom:2px}
    .adate{display:flex;align-items:center;gap:8px;font-size:.78rem;color:var(--tm)}.dot{opacity:.3}
    .img-wrap{border-radius:16px;overflow:hidden;border:1px solid var(--bo);margin-bottom:1.5rem;line-height:0}
    .img-cap{text-align:center;font-size:.76rem;color:var(--tm);margin-bottom:2rem;font-style:italic}
    .toc-box{background:var(--bgc2);border:1px solid var(--bo);border-radius:14px;padding:1.6rem;margin-bottom:3rem}
    .toc-lbl{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:1rem}
    .toc-grid{display:grid;grid-template-columns:1fr 1fr;gap:.35rem 1.5rem}
    .toc-grid a{color:var(--tb);text-decoration:none;font-size:.83rem;padding:.28rem 0;border-bottom:1px solid var(--bs);transition:color .2s;display:flex;align-items:center;gap:6px}
    .toc-grid a::before{content:'';width:4px;height:4px;border-radius:50%;background:var(--cy);opacity:.4;flex-shrink:0}
    .toc-grid a:hover{color:var(--cy)}.toc-grid a:hover::before{opacity:1}
    .stat-band{display:grid;grid-template-columns:repeat(4,1fr);gap:.85rem;margin-bottom:3rem}
    @media(max-width:700px){.stat-band{grid-template-columns:repeat(2,1fr)}}
    .stat-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.25rem 1rem;text-align:center;transition:all .25s}
    .stat-card:hover{border-color:var(--bo);transform:translateY(-2px)}
    .stat-num{font-size:1.6rem;font-weight:800;color:var(--cy);line-height:1;margin-bottom:.35rem}
    .stat-lbl{font-size:.72rem;color:var(--tm);text-transform:uppercase;letter-spacing:.05em;font-weight:600;line-height:1.4}
    .blog-layout{max-width:1280px;margin:0 auto;padding:0 2rem 5rem;display:grid;grid-template-columns:1fr 285px;gap:3rem;align-items:start}
    .art{min-width:0}
    .art h2{font-size:1.65rem;font-weight:700;color:var(--tx);margin:3rem 0 1.2rem;line-height:1.3}
    .art h2 em{color:var(--cy);font-style:italic}
    .art h3{font-size:1.05rem;font-weight:700;color:var(--cy);margin:1.8rem 0 .8rem}
    .art p{font-size:1rem;line-height:1.85;color:var(--tb);margin-bottom:1.2rem}
    .art p strong{color:var(--tx)}
    .art a.inline-link{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgba(232,99,43,0.3)}
    .art a.inline-link:hover{border-bottom-color:var(--cy)}
    .art ul{margin:0 0 1.4rem;padding:0;list-style:none}
    .art ul li{padding:.4rem 0 .4rem 1.4rem;position:relative;font-size:.95rem;color:var(--tb);border-bottom:1px solid var(--bs)}
    .art ul li:last-child{border-bottom:none}
    .art ul li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:2px;background:var(--cy);opacity:.7}
    .art ul li strong{color:var(--tx)}
    .data-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .data-table{width:100%;border-collapse:collapse;min-width:640px}
    .data-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .data-table td{padding:.7rem 1rem;font-size:.84rem;color:var(--tm);border-bottom:1px solid var(--bs);vertical-align:top}
    .data-table tr:last-child td{border-bottom:none}
    .data-table td:first-child{color:var(--tx);font-weight:600;white-space:nowrap}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgba(232,99,43,.06);border:1px solid rgba(232,99,43,.2)}
    .co-warn{background:rgba(255,183,3,.06);border:1px solid rgba(255,183,3,.2)}
    .co-info{background:rgba(99,102,241,.07);border:1px solid rgba(99,102,241,.2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .timeline-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.4rem 0;border-left:3px solid var(--cy)}
    .timeline-card-head{display:flex;align-items:center;gap:.75rem;margin-bottom:.85rem;flex-wrap:wrap}
    .timeline-tag{display:inline-flex;align-items:center;padding:.3rem .8rem;color:white;border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;font-family:'JetBrains Mono',monospace}
    .timeline-card.t-fast .timeline-tag{background:var(--rd)}
    .timeline-card.t-std .timeline-tag{background:var(--cy)}
    .timeline-card.t-slow .timeline-tag{background:var(--bl)}
    .timeline-card.t-fast{border-left-color:var(--rd)}
    .timeline-card.t-slow{border-left-color:var(--bl)}
    .timeline-duration{font-size:.78rem;color:var(--tm);font-weight:600;letter-spacing:.04em}
    .timeline-card h3{font-size:1.15rem;font-weight:700;color:var(--tx);margin:0 0 .65rem;letter-spacing:-.01em}
    .timeline-card p{font-size:.95rem;color:var(--tb);line-height:1.7;margin-bottom:.8rem!important}
    .timeline-card p:last-child{margin-bottom:0!important}
    .timeline-card .req{background:rgba(255,255,255,.03);border-radius:8px;padding:.7rem .9rem;font-size:.83rem;margin-top:.85rem}
    .timeline-card .req strong{color:var(--cy);display:block;margin-bottom:.3rem;font-size:.72rem;letter-spacing:.06em;text-transform:uppercase}
    .faq-section{margin:3rem 0}
    .faq-item{border:1px solid var(--bs);border-radius:12px;margin-bottom:.65rem;overflow:hidden;transition:border-color .2s}
    .faq-item:hover{border-color:var(--bo)}
    .faq-q{padding:1.15rem 1.5rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:1rem;background:var(--bgc2)}
    .faq-q strong{font-size:.92rem;color:var(--tx)}
    .faq-ch{color:var(--cy);transition:transform .3s;flex-shrink:0}
    .faq-item.open .faq-ch{transform:rotate(180deg)}
    .faq-a{display:none;padding:1.15rem 1.5rem;border-top:1px solid var(--bs);background:var(--bgc)}
    .faq-item.open .faq-a{display:block}
    .faq-a p{font-size:.89rem!important;margin-bottom:0!important}
    .sidebar{position:sticky;top:80px;align-self:start}
    @media(max-width:1024px){.blog-layout{grid-template-columns:1fr}.sidebar{position:static;margin-top:2rem}}
    .side-card{background:var(--bgc2);border:1px solid var(--bo);border-radius:14px;padding:1.25rem;margin-bottom:1.2rem}
    .side-lbl{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:.85rem}
    .side-card h3{font-size:.92rem;color:var(--tx);font-weight:700;margin-bottom:.65rem}
    .side-card p{font-size:.82rem;color:var(--tb);line-height:1.65;margin-bottom:.95rem}
    .side-card .side-cta{display:inline-flex;align-items:center;gap:.4rem;padding:.55rem 1rem;background:var(--cy);color:#fff;text-decoration:none;border-radius:8px;font-size:.78rem;font-weight:700}
    .side-card .side-cta:hover{background:var(--cy2)}
    .side-card ul{list-style:none;padding:0;margin:0}
    .side-card ul li{padding:.45rem 0;border-bottom:1px solid var(--bs);font-size:.82rem}
    .side-card ul li:last-child{border-bottom:none}
    .side-card ul li a{color:var(--tb);text-decoration:none;display:block}
    .side-card ul li a:hover{color:var(--cy)}
    .cta-bottom{background:linear-gradient(135deg,rgba(232,99,43,.08),rgba(15,23,42,.95));border:1px solid var(--bo);border-radius:16px;padding:2rem;text-align:center;margin:3rem 0}
    .cta-bottom h3{font-size:1.3rem;color:var(--tx);margin-bottom:.75rem}
    .cta-bottom p{font-size:.95rem;color:var(--tb);max-width:540px;margin:0 auto 1.5rem!important}
    .cta-bottom .cta-btn{display:inline-flex;align-items:center;gap:.5rem;padding:.85rem 1.6rem;background:var(--cy);color:#fff;text-decoration:none;border-radius:10px;font-weight:700;font-size:.92rem;transition:background .2s}
    .cta-bottom .cta-btn:hover{background:var(--cy2)}
    #btt{position:fixed;bottom:1.5rem;right:1.5rem;width:42px;height:42px;background:var(--cy);color:#fff;border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;pointer-events:none;transition:all .25s;z-index:99;font-size:1.1rem}
    #btt.vis{opacity:1;pointer-events:auto}
      `}</style>

      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="bc-sep">/</span>
        <Link href="/resources">Resources</Link><span className="bc-sep">/</span>
        <Link href="/resources/blog">Blog</Link><span className="bc-sep">/</span>
        <span>Certification Timeline</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">ISO 27001</span>
          <span className="badge badge-bl">Planning</span>
          <span className="badge badge-gr">Project Management</span>
        </div>
        <h1 className="hero-h1">How Long Does ISO 27001 Certification Take? A <em>Realistic</em> Timeline</h1>
        <p className="hero-sub">Most blogs say "three to six months." Real projects rarely finish that fast. The four variables that decide timeline, three honest project profiles from sprint to extended, and the most common causes of slippage.</p>

        <div className="author-strip">
          <div className="avatar">SS</div>
          <div className="author-info">
            <div className="aname">Soham Sawant</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Cybersecurity Expert</span></div>
            <div className="adate"><span>May 8, 2026</span><span className="dot">·</span><span id="read-time">📖 7 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1280&h=520&fit=crop" alt="Calendar and timeline planning" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">The honest timeline depends on four things -none of which is "how badly do you want it."</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#variables" className="toc-link">1. The Four Variables</a>
            <a href="#typical" className="toc-link">2. Three Typical Timelines</a>
            <a href="#breakdown" className="toc-link">3. Phase-by-Phase Breakdown</a>
            <a href="#myths" className="toc-link">4. Two Common Timeline Myths</a>
            <a href="#slippage" className="toc-link">5. Where Projects Actually Slip</a>
            <a href="#post-cert" className="toc-link">6. Surveillance & Recertification</a>
            <a href="#faq" className="toc-link">7. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">9-12mo</div><div className="stat-lbl">Most Common</div></div>
          <div className="stat-card"><div className="stat-num">4-6mo</div><div className="stat-lbl">Sprint (Rare)</div></div>
          <div className="stat-card"><div className="stat-num">14+mo</div><div className="stat-lbl">Extended (Common)</div></div>
          <div className="stat-card"><div className="stat-num">3 yr</div><div className="stat-lbl">Certificate Validity</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>"How long will it take?" is the first question every founder asks about ISO 27001. The honest answer is "it depends" -which is unsatisfying enough that most blogs invent a confident-sounding number instead. The result: timelines that bear no relation to what actually happens.</p>

          <p>This piece gives you the honest version. Four variables decide the timeline, three project profiles cover most real situations, and the slippage patterns are predictable enough to plan for. If you have read our <Link href="/resources/blog/iso-27001-implementation-roadmap" className="inline-link">implementation roadmap</Link>, this is the schedule view of the same content.</p>

          <section id="variables">
            <h2>1. The <em>Four Variables</em> That Decide Your Timeline</h2>
            <p>Project length is not a function of how hard you want it. It is a function of four conditions:</p>

            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Variable</th><th>Fast Path</th><th>Slow Path</th></tr></thead>
                <tbody>
                  <tr><td>Organisation size</td><td>Under 50 people, single location</td><td>500+ people, multi-site or multi-country</td></tr>
                  <tr><td>Scope</td><td>Single product or service, one platform</td><td>Multiple products, multiple cloud providers, legacy systems</td></tr>
                  <tr><td>Starting maturity</td><td>Some security policies exist, basic controls operating</td><td>Greenfield -no documented policies, no internal audits ever run</td></tr>
                  <tr><td>Dedicated resources</td><td>Full-time project lead plus engaged executives</td><td>Part-time owner with day job, low executive engagement</td></tr>
                </tbody>
              </table>
            </div>

            <p>The single most predictive variable is the fourth -dedicated resources. A small organisation with a full-time project lead will finish faster than a large organisation with a part-time owner, even though the larger organisation has more people to work on it. ISO 27001 is a project that needs an owner, not a side hustle.</p>

            <div className="callout co-info">
              <div className="co-icon">📌</div>
              <div className="co-body">
                <strong>The "part-time pitfall"</strong>
                <p>The most common reason projects take 14+ months instead of 9 is that the project owner has a day job. The work happens in stolen evenings and weekend hours. Documentation gets drafted but never reviewed. Controls get designed but never implemented. The project does not slip dramatically -it slips constantly, by a few days each week, until the calendar has gone past 18 months.</p>
              </div>
            </div>
          </section>

          <section id="typical">
            <h2>2. Three <em>Typical Timelines</em></h2>
            <p>Most real ISO 27001 projects fit into one of three profiles. Pick the one your organisation actually matches -not the one you wish it did.</p>

            <div className="timeline-card t-fast">
              <div className="timeline-card-head">
                <span className="timeline-tag">SPRINT</span>
                <span className="timeline-duration">4-6 months</span>
              </div>
              <h3>The Sprint Profile</h3>
              <p>A small organisation (under 50 people), a tight scope (single SaaS product on one cloud platform), an already-mature security posture (you have policies, you do code reviews, you have an incident response runbook), and a dedicated full-time project lead.</p>
              <p>This profile exists. It is not the norm. About 1 in 6 real projects fits these conditions. The certification body Stage 1 to Stage 2 gap alone consumes 4-8 weeks of the timeline, which makes anything under 4 months practically impossible regardless of how prepared you are.</p>
              <div className="req"><strong>What it requires</strong>Full-time project lead, mature starting baseline, narrow scope, engaged executive sponsor, external consultant providing methodology so internal time goes on implementation not invention.</div>
            </div>

            <div className="timeline-card t-std">
              <div className="timeline-card-head">
                <span className="timeline-tag">STANDARD</span>
                <span className="timeline-duration">9-12 months</span>
              </div>
              <h3>The Standard Profile</h3>
              <p>A small-to-medium organisation (50-250 people), a typical scope (one or two products plus the supporting infrastructure), a moderate starting baseline (some security work has been done, but documentation is patchy and internal audits have never been run), and a dedicated internal lead -either full-time on this project or with this as the clear 50%-plus priority.</p>
              <p>This is the most common profile. About half of real projects fit here. The project runs roughly: 6-8 weeks gap assessment and scope, 12-16 weeks implementation, 4-6 weeks internal audit and management review, 6-10 weeks certification audit cycle.</p>
              <div className="req"><strong>What it requires</strong>Internal lead with majority time on the project, executive sponsor for blocker resolution, external consultancy for methodology and Annex A interpretation, certification body slot booked early.</div>
            </div>

            <div className="timeline-card t-slow">
              <div className="timeline-card-head">
                <span className="timeline-tag">EXTENDED</span>
                <span className="timeline-duration">14+ months</span>
              </div>
              <h3>The Extended Profile</h3>
              <p>Any project where one or more variables go to the slow path. A larger organisation, a wide scope, low starting maturity, or a part-time owner -any of those tips the project past 12 months. Two or more, and you are looking at 16-20 months.</p>
              <p>This is not a failure profile. Plenty of organisations land here for legitimate reasons -multiple business units that need stakeholder alignment, legacy systems that need significant uplift before they can be brought into scope, geographic distribution requiring local champion enrolment. The cost is in carrying the cost of the project longer; the certification is identical at the end.</p>
              <div className="req"><strong>How to keep it from drifting past 18 months</strong>Lock the scope in writing at month 2 and refuse all changes. Schedule the certification body audit by month 8 -having a date on the calendar is the strongest anti-drift force in the project.</div>
            </div>
          </section>

          <section id="breakdown">
            <h2>3. Phase-by-Phase <em>Breakdown</em></h2>
            <p>The 9-12 month standard timeline broken down into its constituent phases. Sprint profile compresses these; extended profile stretches them, particularly Phase 2.</p>

            <div className="data-table-wrap">
              <table className="data-table">
                <thead><tr><th>Phase</th><th>Standard Duration</th><th>Critical Output</th></tr></thead>
                <tbody>
                  <tr><td>Gap assessment + scope</td><td>4-6 weeks</td><td>Gap register, scope statement, project plan</td></tr>
                  <tr><td>Risk assessment</td><td>3-4 weeks</td><td>Risk register, treatment plan, SoA v1</td></tr>
                  <tr><td>Control implementation</td><td>12-20 weeks</td><td>Policies, procedures, technical controls operating</td></tr>
                  <tr><td>Records accumulation</td><td>6-12 weeks (overlap)</td><td>Operating evidence -audit logs, change records, training</td></tr>
                  <tr><td>Internal audit</td><td>4-6 weeks</td><td>Internal audit report, corrective actions started</td></tr>
                  <tr><td>Management review</td><td>1-2 weeks</td><td>Documented review with all required inputs</td></tr>
                  <tr><td>Stage 1 certification audit</td><td>1 week onsite + 1 week reporting</td><td>Stage 1 report, findings to address</td></tr>
                  <tr><td>Stage 1 to Stage 2 gap</td><td>4-8 weeks</td><td>Stage 1 findings closed, evidence ready</td></tr>
                  <tr><td>Stage 2 certification audit</td><td>1-2 weeks onsite + 2-3 weeks reporting</td><td>Certificate issued</td></tr>
                </tbody>
              </table>
            </div>

            <div className="callout co-key">
              <div className="co-icon">🎯</div>
              <div className="co-body">
                <strong>The records-accumulation overlap is non-negotiable</strong>
                <p>Auditors at Stage 2 want to see controls operating for at least 2-3 months -that means logs, evidence, records over a meaningful window. You cannot implement a control on Monday and audit it on Friday. Build records-accumulation into the schedule before the internal audit, not after.</p>
              </div>
            </div>
          </section>

          <section id="myths">
            <h2>4. Two Common <em>Timeline Myths</em></h2>

            <h3>Myth 1: "10-week ISO 27001"</h3>
            <p>You will see this in some marketing material. The reality is that 10 weeks is roughly the time it takes to write the documentation, not the time it takes to get certified. The certification audit cycle alone takes 4-8 weeks across Stage 1 and Stage 2. Add the time controls need to operate before they can be tested, and 10 weeks is structurally impossible -not because of consulting hours, but because of how the audit standard works.</p>

            <h3>Myth 2: "We can compress the Stage 1 to Stage 2 gap"</h3>
            <p>Some teams hope to book Stage 1 and Stage 2 back-to-back. Certification bodies generally will not do this. The gap exists for a reason -to allow closure of Stage 1 findings and accumulation of the operational evidence Stage 2 will sample. A typical certification body requires at least 4 weeks between stages; some require 6. Plan the calendar around this.</p>
          </section>

          <section id="slippage">
            <h2>5. Where Projects Actually <em>Slip</em></h2>
            <p>From the patterns we see across implementations, three slippage causes dominate. They are predictable; if you plan for them you avoid most of the delay.</p>

            <h3>Cause 1: Scope changes mid-implementation</h3>
            <p>Month 4 of an 8-month project, someone realises the proposed scope leaves out the customer support tooling. The decision is to expand scope. The expanded scope adds 2-3 months of work. The result: 11-month project. Mitigation: lock scope by month 2, in writing, signed by the executive sponsor. Treat scope changes as project changes that require new sign-off and a revised timeline.</p>

            <h3>Cause 2: Insufficient operational evidence at Stage 2</h3>
            <p>The team designs all the controls, writes all the policies, and arrives at Stage 2 expecting certification. The auditor asks to see 3 months of access reviews; the team has done one. The auditor asks for 6 months of vulnerability scans; the team has done two. Stage 2 produces Minor or Major NCs on every under-evidenced control, and certification slips by the corrective action window. Mitigation: start operating controls 4-6 months before Stage 2, not 4-6 weeks. Records cannot be retrofitted.</p>

            <h3>Cause 3: Unavailable certification body slots</h3>
            <p>This is outside the team's control but predictable. In tight markets, certification body slots are booked 3-6 months ahead. If you wait until you are "ready" to book the audit, the next available date may be 4 months away. Mitigation: book Stage 1 and Stage 2 dates by month 4 of the project, before you are ready, with the contract structured to permit rescheduling. The booked date functions as a forcing function for everything else.</p>
          </section>

          <section id="post-cert">
            <h2>6. After Certification -<em>Surveillance & Recertification</em></h2>
            <p>The certificate is valid for three years. To maintain it:</p>
            <ul>
              <li><strong>Year 1 surveillance audit.</strong> Approximately 12 months after certification. Smaller audit than Stage 2 -typically 1-3 days onsite. Auditor samples a subset of the ISMS, focuses on changes since certification, and checks that the management system is being maintained.</li>
              <li><strong>Year 2 surveillance audit.</strong> Same structure as Year 1. Different auditor scope -they will sample what Year 1 did not.</li>
              <li><strong>Year 3 recertification audit.</strong> Closer in scale to the original Stage 2. Re-tests the full ISMS scope, refreshes the certificate for another three years.</li>
            </ul>
            <p>Plan for 5-10 person-days of internal time per surveillance audit and 15-25 person-days for recertification. The ongoing cost is significant but predictable.</p>
          </section>

          <div className="cta-bottom">
            <h3>Get a realistic timeline for your project</h3>
            <p>We will scope your project against the four variables and give you an honest timeline -not the marketing number. Plus the schedule, milestones, and certification body availability you will need to plan around.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a scoping call →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Can ISO 27001 really be done in 3 months?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Only in narrow circumstances -a very small organisation, a tight scope, an already-mature security posture, and a dedicated project team. For most organisations starting from a low baseline, 3 months is unrealistic. The certification audit alone requires 4-6 weeks between Stage 1 and Stage 2, plus the corrective action window, so even a perfectly executed project rarely finishes in under 5 months end-to-end.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>What is the most common timeline?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>For a small-to-medium organisation with moderate maturity and a part-time internal lead, 9-12 months from project kickoff to certificate. Faster is possible with full-time resources and external consultancy; slower is common when the project loses momentum or scope creeps mid-implementation.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>What slows projects down most?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Three things in order of frequency -scope changes mid-implementation, missing operational evidence at the time of audit (controls designed but not yet operating long enough to test), and unavailable certification body slots which can add 4-8 weeks to the calendar regardless of how ready you are.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>How long is the certificate valid?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Three years. Surveillance audits occur annually in years 1 and 2, and a full recertification audit in year 3. The certificate remains valid as long as surveillance audits pass and no major nonconformities arise.</p></div>
            </div>

            <div className="faq-item">
              <div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}>
                <strong>Can we book the certification body before we are ready?</strong>
                <span className="faq-ch">▼</span>
              </div>
              <div className="faq-a"><p>Yes, and it is recommended. Certification body slots are scarce in some markets and booking 3-6 months ahead is common. The contract is usually flexible enough to reschedule if you slip, but securing the date keeps the project honest about its deadline.</p></div>
            </div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Plan Your Project</div>
            <h3>Get an honest timeline</h3>
            <p>30-minute scoping call. We assess your variables and give you the realistic path to certification.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a scoping call →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">ISO 27001 Series</div>
            <ul>
              <li><Link href="/resources/blog/iso-27001-implementation-roadmap">Implementation Roadmap</Link></li>
              <li><Link href="/resources/blog/iso-27001-gap-assessment">Gap Assessment Guide</Link></li>
              <li><Link href="/resources/blog/iso-27001-mandatory-documents">Mandatory Documents</Link></li>
              <li><Link href="/resources/blog/iso-27001-internal-audit">Internal Audit Guide</Link></li>
              <li><Link href="/resources/blog/iso-27001-clause-by-clause">Clause by Clause</Link></li>
              <li><Link href="/resources/blog/iso-27001-scope-definition">Scope Definition</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
