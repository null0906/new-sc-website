import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function DPDPErasureDeletionRequests() {
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
        <title>How to Handle Data Deletion (Erasure) Requests Under DPDP | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="The DPDP Act gives data principals the right to have their personal data erased. The seven-step workflow for handling erasure requests, the retention obligations that override deletion, and how to design deletion into your architecture." />
        <meta name="keywords" content="DPDP erasure, right to be forgotten India, data deletion DPDP, erasure request workflow, deletion rights India, data subject deletion, DPDP retention obligations" />
        <meta property="og:title" content="How to Handle Data Deletion (Erasure) Requests Under DPDP" />
        <meta property="og:description" content="Erasure is not a support ticket -it is a legal obligation with a compliance trail. The seven-step workflow, retention obligations, and architecture patterns that make deletion actually reliable." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://seccomply.net/resources/blog/dpdp-erasure-deletion-requests" />
        <meta property="article:published_time" content="2026-05-12" />
        <meta property="article:author" content="Chandrika Mulage" />
        <meta property="article:tag" content="DPDP Act" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/dpdp-erasure-deletion-requests" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Article","headline":"How to Handle Data Deletion (Erasure) Requests Under DPDP","description":"The seven-step erasure workflow, retention obligations, and architecture patterns for DPDP-compliant deletion.","author":{"@type":"Person","name":"Chandrika Mulage","jobTitle":"Security Engineer","worksFor":{"@type":"Organization","name":"SecComply"}},"publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"datePublished":"2026-05-12","dateModified":"2026-05-12","mainEntityOfPage":"https://seccomply.net/resources/blog/dpdp-erasure-deletion-requests","articleSection":"DPDP Act","image":"https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1200&h=480&fit=crop"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"Resources","item":"https://seccomply.net/resources"},{"@type":"ListItem","position":3,"name":"Blog","item":"https://seccomply.net/resources/blog"},{"@type":"ListItem","position":4,"name":"DPDP Erasure Requests","item":"https://seccomply.net/resources/blog/dpdp-erasure-deletion-requests"}]},{"@type":"HowTo","name":"Handle a DPDP Erasure Request","step":[{"@type":"HowToStep","name":"Receive and Acknowledge","text":"Set up a clear channel for erasure requests. Acknowledge receipt immediately with a reference number and expected resolution timeline."},{"@type":"HowToStep","name":"Verify Identity","text":"Confirm the requester is the data principal or their authorised representative -typically by matching the request to a registered email or account."},{"@type":"HowToStep","name":"Locate All Instances","text":"Find the data across primary databases, backups, third-party processors, analytics systems, and CRM platforms."},{"@type":"HowToStep","name":"Assess Retention Obligations","text":"Check if you have legal obligation to retain -GST, employment, or financial records. Document any legal basis for retention."},{"@type":"HowToStep","name":"Execute Deletion","text":"Perform hard delete or anonymisation. Soft deletes alone do not satisfy the obligation."},{"@type":"HowToStep","name":"Notify Third Parties","text":"Notify processors, partners, and vendors who hold the data, instructing them to delete as well."},{"@type":"HowToStep","name":"Confirm and Document","text":"Send written confirmation to the data principal specifying what was deleted and what was retained, and log everything in your internal record."}]},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How quickly must we respond to an erasure request?","acceptedAnswer":{"@type":"Answer","text":"The DPDP Act does not yet prescribe a fixed timeline through rules. As a defensible default, acknowledge within 24-72 hours and complete the deletion within 30 days. Many global frameworks (GDPR) require completion within one month; aligning to that benchmark keeps you safe while specific Indian rules are finalised."}},{"@type":"Question","name":"Can we refuse an erasure request?","acceptedAnswer":{"@type":"Answer","text":"You can refuse only where you have an overriding legal obligation to retain -GST records, employment records under labour law, financial records under sectoral regulation, or active legal hold. You must document the refusal with the specific legal basis and communicate this to the data principal. You cannot refuse simply because deletion is inconvenient or commercially undesirable."}},{"@type":"Question","name":"Do we need to delete from backups?","acceptedAnswer":{"@type":"Answer","text":"Yes, but the timing can be different from primary system deletion. Backups are typically rotated out on a schedule (30-90 days is common). The accepted practice is to delete from primary systems immediately, and confirm that backups containing the data will be rotated out within the documented backup retention period. Document the backup rotation policy as part of the erasure response."}},{"@type":"Question","name":"Is soft delete acceptable?","acceptedAnswer":{"@type":"Answer","text":"No -not on its own. Soft delete (marking a record as deleted but keeping the data in the database) does not satisfy the erasure obligation. If you use soft deletes operationally for recovery, you must run a scheduled purge process that permanently removes soft-deleted records after a defined period. The end state is data that genuinely cannot be retrieved or reconstructed."}},{"@type":"Question","name":"What about anonymisation instead of deletion?","acceptedAnswer":{"@type":"Answer","text":"Anonymisation is an accepted alternative to deletion provided the anonymisation is irreversible -the data can no longer be linked to the individual, even by combining it with other information you hold. Pseudonymisation (where a re-identification key exists somewhere) is not anonymisation and does not satisfy the obligation."}}]}]}) }} />
      </Head>

      <style jsx global>{`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
    body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.75;-webkit-font-smoothing:antialiased}
    #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,var(--accent),var(--accent-light));z-index:9999;transition:width .1s linear}
    .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
    .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}
    .hero-wrap{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 2rem}
    .badges{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.5rem}
    .badge{display:inline-flex;align-items:center;padding:.3rem .9rem;border-radius:100px;font-size:.72rem;font-weight:600;letter-spacing:.04em;text-transform:uppercase}
    .badge-cy{background:rgb(var(--accent-rgb) / .1);color:var(--cy);border:1px solid rgb(var(--accent-rgb) / .25)}
    .badge-bl{background:rgb(var(--purple-rgb) / .1);color:var(--bl);border:1px solid rgb(var(--purple-rgb) / .25)}
    .badge-gr{background:rgb(var(--green-rgb) / .1);color:var(--gr);border:1px solid rgb(var(--green-rgb) / .25)}
    .hero-h1{font-size:clamp(1.85rem,3.5vw,3rem);font-weight:700;color:var(--tx);line-height:1.2;max-width:820px;margin-bottom:1.1rem}
    .hero-h1 em{font-style:italic;color:var(--cy)}
    .hero-sub{font-size:1.04rem;color:var(--tb);max-width:680px;margin-bottom:2rem;line-height:1.72}
    .author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-bottom:2.5rem;flex-wrap:wrap}
    .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--accent-light));display:flex;align-items:center;justify-content:center;font-size:.95rem;font-weight:800;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgb(var(--accent-rgb) / .3)}
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
    .art a.inline-link{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgb(var(--accent-rgb) / 0.3)}
    .art a.inline-link:hover{border-bottom-color:var(--cy)}
    .art ul{margin:0 0 1.4rem;padding:0;list-style:none}
    .art ul li{padding:.4rem 0 .4rem 1.4rem;position:relative;font-size:.95rem;color:var(--tb);border-bottom:1px solid var(--bs)}
    .art ul li:last-child{border-bottom:none}
    .art ul li::before{content:'';position:absolute;left:0;top:13px;width:6px;height:6px;border-radius:2px;background:var(--cy);opacity:.7}
    .art ul li strong{color:var(--tx)}
    .callout{border-radius:12px;padding:1.2rem 1.5rem;margin:2rem 0;display:flex;gap:.9rem;align-items:flex-start}
    .co-key{background:rgb(var(--accent-rgb) / .06);border:1px solid rgb(var(--accent-rgb) / .2)}
    .co-warn{background:rgb(var(--yellow-rgb) / .06);border:1px solid rgb(var(--yellow-rgb) / .2)}
    .co-info{background:rgb(var(--purple-rgb) / .07);border:1px solid rgb(var(--purple-rgb) / .2)}
    .co-icon{font-size:1.2rem;flex-shrink:0;margin-top:2px}
    .co-body p{margin-bottom:0!important;font-size:.89rem!important}
    .co-body strong{display:block;margin-bottom:.3rem;font-size:.82rem;color:var(--tx)}
    .step-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.5rem 1.6rem;margin:1.4rem 0;border-left:3px solid var(--cy)}
    .step-card-head{display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem;flex-wrap:wrap}
    .step-num{display:inline-flex;align-items:center;padding:.25rem .7rem;background:var(--cy);color:white;border-radius:6px;font-size:.7rem;font-weight:800;letter-spacing:.06em;font-family:'JetBrains Mono',monospace}
    .step-card h3{font-size:1.1rem;font-weight:700;color:var(--tx);margin:0 0 .55rem}
    .step-card p{font-size:.93rem;color:var(--tb);line-height:1.72;margin-bottom:.7rem!important}
    .step-card p:last-child{margin-bottom:0!important}
    .step-card ul{margin:.5rem 0 0!important}
    .step-card ul li{font-size:.88rem!important;padding:.28rem 0 .28rem 1.2rem!important}
    .retention-table-wrap{overflow-x:auto;margin:1.5rem 0;border-radius:12px;border:1px solid var(--bo)}
    .retention-table{width:100%;border-collapse:collapse;min-width:480px}
    .retention-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.77rem;font-weight:700;color:var(--cy);border-bottom:1px solid var(--bo)}
    .retention-table td{padding:.7rem 1rem;font-size:.86rem;color:var(--tb);border-bottom:1px solid var(--bs);vertical-align:top}
    .retention-table tr:last-child td{border-bottom:none}
    .retention-table td:first-child{color:var(--tx);font-weight:600;white-space:nowrap}
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
    .cta-bottom{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .08),rgb(var(--bg-card-rgb) / .95));border:1px solid var(--bo);border-radius:16px;padding:2rem;text-align:center;margin:3rem 0}
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
        <span>DPDP Erasure Requests</span>
      </div>

      <section className="hero-wrap">
        <div className="badges">
          <span className="badge badge-cy">DPDP Act</span>
          <span className="badge badge-bl">Phase 3 -Implementation</span>
          <span className="badge badge-gr">Data Principal Rights</span>
        </div>
        <h1 className="hero-h1">How to Handle Data Deletion (Erasure) Requests <em>Under DPDP</em></h1>
        <p className="hero-sub">Erasure is not a support ticket -it is a legal obligation with a compliance trail. The seven-step workflow, the retention obligations that override deletion, and the architecture patterns that make deletion actually reliable.</p>

        <div className="author-strip">
          <div className="avatar">CM</div>
          <div className="author-info">
            <div className="aname">Chandrika Mulage</div>
            <div className="ameta"><span style={{color:'var(--tm)'}}>Security Engineer</span></div>
            <div className="adate"><span>May 12, 2026</span><span className="dot">·</span><span id="read-time">📖 8 min read</span></div>
          </div>
        </div>

        <div className="img-wrap">
          <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1280&h=520&fit=crop" alt="Data deletion and database management" style={{width:'100%',height:'auto',display:'block'}}/>
        </div>
        <p className="img-cap">The right to erasure is a test of how well you actually know your own data. If you cannot find it, you cannot delete it.</p>

        <div className="toc-box">
          <div className="toc-lbl">In This Article</div>
          <div className="toc-grid">
            <a href="#when-applies" className="toc-link">1. When Erasure Applies</a>
            <a href="#workflow" className="toc-link">2. The Seven-Step Workflow</a>
            <a href="#retention" className="toc-link">3. Retention That Overrides Deletion</a>
            <a href="#pitfalls" className="toc-link">4. Common Pitfalls</a>
            <a href="#architecture" className="toc-link">5. Designing for Deletion</a>
            <a href="#faq" className="toc-link">6. FAQ</a>
          </div>
        </div>

        <div className="stat-band">
          <div className="stat-card"><div className="stat-num">7</div><div className="stat-lbl">Steps in the Workflow</div></div>
          <div className="stat-card"><div className="stat-num">30d</div><div className="stat-lbl">Defensible Default SLA</div></div>
          <div className="stat-card"><div className="stat-num">8yr</div><div className="stat-lbl">GST Retention Floor</div></div>
          <div className="stat-card"><div className="stat-num">0</div><div className="stat-lbl">Soft Deletes Count</div></div>
        </div>
      </section>

      <div className="blog-layout">
        <article className="art">

          <p>The right to erasure -sometimes called the right to be forgotten -is one of the most operationally demanding rights in any data protection framework. Under India's DPDP Act, you must be able to honour it reliably, within prescribed timelines, and with documented proof. Treat it as a support ticket and you will fail an audit; treat it as a workflow and you will pass.</p>

          <p>This is Step 6 territory of the wider DPDP programme -see our <Link href="/resources/blog/dpdp-compliance-roadmap-90-days" className="inline-link">90-day roadmap</Link> for the full sequence. For how erasure relates to consent withdrawal, see our <Link href="/resources/blog/dpdp-consent-mechanism-web-app" className="inline-link">consent mechanism guide</Link> -withdrawal often triggers an erasure obligation downstream.</p>

          <section id="when-applies">
            <h2>1. When Does the Right to Erasure <em>Apply</em>?</h2>
            <p>A data principal can request erasure of their personal data in several situations:</p>
            <ul>
              <li><strong>Purpose fulfilled</strong> -the reason you collected the data has been served. A delivery is complete; the address you held to complete it is no longer needed.</li>
              <li><strong>Consent withdrawn</strong> -and there is no other legal basis for continued processing. Marketing consent withdrawn means the marketing profile is no longer lawful to hold.</li>
              <li><strong>Data no longer necessary</strong> -the data has aged past the point where it serves the original purpose.</li>
              <li><strong>Unlawful processing</strong> -the data was processed without a valid basis from the start.</li>
            </ul>

            <div className="callout co-info">
              <div className="co-icon">📌</div>
              <div className="co-body">
                <strong>Erasure does not override legitimate retention</strong>
                <p>If you must retain data for tax, audit, employment, or sectoral regulatory purposes, you may decline erasure for that specific data -but you must document the legal basis for retention and delete everything else. The data principal is entitled to a clear written explanation of what is being retained and why.</p>
              </div>
            </div>
          </section>

          <section id="workflow">
            <h2>2. The <em>Seven-Step Workflow</em></h2>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 1</span></div>
              <h3>Receive and acknowledge</h3>
              <p>Set up a clear, accessible channel for erasure requests -a dedicated email (privacy@yourcompany.com), a form inside your app, or a "Delete My Data" button in account settings. Acknowledge receipt immediately with a reference number and expected resolution timeline. This sets expectations and begins your audit trail.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 2</span></div>
              <h3>Verify identity</h3>
              <p>Before processing any deletion, confirm the requester is the data principal (or their authorised representative). A simple identity check -matching the request to a registered email or account, or a verification token sent to the registered address -is sufficient. Do not create unnecessary friction. Do not delete data based on an unverified request.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 3</span></div>
              <h3>Locate all instances of the data</h3>
              <p>This is where the data inventory you built earlier pays off. You need to find the data across:</p>
              <ul>
                <li>Primary databases (application, customer, transactional)</li>
                <li>Backup and archive systems</li>
                <li>Third-party processors and vendors you have shared data with</li>
                <li>Analytics and logging systems</li>
                <li>Marketing and CRM platforms</li>
                <li>Support ticketing systems</li>
                <li>Data warehouse and BI systems</li>
              </ul>
              <p>Document every system searched, even where no data was found. The completeness of the search is part of your defensibility.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 4</span></div>
              <h3>Assess retention obligations</h3>
              <p>Before deleting, check whether you have a legal obligation to retain the data. See the retention table in the next section. Where retention applies, communicate this to the data principal, specify what data will be retained and why, and delete everything else.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 5</span></div>
              <h3>Execute the deletion</h3>
              <p>Deletion must be thorough. Two acceptable approaches:</p>
              <ul>
                <li><strong>Hard delete</strong> -data is permanently removed from all systems.</li>
                <li><strong>Anonymisation</strong> -data is stripped of all identifying attributes so it can no longer be linked to the individual. Must be irreversible.</li>
              </ul>
              <p>Soft deletes (marking a record as deleted but keeping the data in the database) are not sufficient compliance. If you use soft deletes operationally for recovery, ensure you have a scheduled purge process that permanently removes data after a defined period.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 6</span></div>
              <h3>Notify third parties</h3>
              <p>If you have shared the data principal's data with third parties -processors, partners, analytics vendors, marketing platforms -you must notify them of the erasure request and instruct them to delete as well. Document this in your response log. Your Data Processing Agreement with each vendor should explicitly cover the cascade obligation; if it does not, you have a gap to close.</p>
            </div>

            <div className="step-card">
              <div className="step-card-head"><span className="step-num">STEP 7</span></div>
              <h3>Confirm and document</h3>
              <p>Send the data principal a written confirmation that their data has been deleted, specifying what was deleted, from which systems, and what (if anything) was retained and why. Maintain an internal record of:</p>
              <ul>
                <li>Request received date and identity verification completed</li>
                <li>Systems searched and deletion actions taken</li>
                <li>Third parties notified</li>
                <li>Confirmation sent to data principal</li>
                <li>Any retention exception applied, with legal basis cited</li>
              </ul>
            </div>
          </section>

          <section id="retention">
            <h2>3. <em>Retention</em> Obligations That Override Deletion</h2>
            <p>Several Indian regulations require data retention for fixed periods regardless of erasure requests. The most common are:</p>

            <div className="retention-table-wrap">
              <table className="retention-table">
                <thead>
                  <tr>
                    <th>Data Category</th>
                    <th>Retention Period</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>GST records</td><td>8 years from end of relevant financial year</td><td>CGST Act</td></tr>
                  <tr><td>Income tax / audit records</td><td>6-8 years</td><td>Income Tax Act, Companies Act</td></tr>
                  <tr><td>Employment records</td><td>Varies by state -typically 3-7 years</td><td>State labour laws</td></tr>
                  <tr><td>Financial transaction records</td><td>5-10 years</td><td>PMLA, RBI rules, SEBI regulations</td></tr>
                  <tr><td>KYC records</td><td>5-10 years after relationship ends</td><td>PMLA, RBI/SEBI/IRDAI rules</td></tr>
                  <tr><td>Active legal hold</td><td>Until matter is resolved</td><td>Court orders, litigation</td></tr>
                </tbody>
              </table>
            </div>

            <p>The principle: retention applies only to the specific data categories required by the regulation, not your entire customer record. If GST law requires you to retain invoices for 8 years, you keep the invoice -not the marketing preferences, not the device identifiers, not the support chat history.</p>
          </section>

          <section id="pitfalls">
            <h2>4. <em>Common Pitfalls</em> to Avoid</h2>
            <ul>
              <li>Failing to delete from backup systems -backups need to be rotated out within the documented retention window</li>
              <li>Not notifying third-party processors -they continue to hold the data after you have deleted it</li>
              <li>Over-retaining data beyond the stated legal basis -keeping a customer record for 10 years because "GST law" when only the invoice needed retention</li>
              <li>No acknowledgement or response within the expected timeline -silence reads as non-compliance</li>
              <li>Deleting data that is subject to a legal hold or active regulatory requirement</li>
              <li>Treating soft delete as sufficient -without a purge schedule, the data still exists</li>
              <li>Pseudonymisation labelled as anonymisation -if a re-identification key exists anywhere, it is not anonymisation</li>
            </ul>
          </section>

          <section id="architecture">
            <h2>5. <em>Building Deletion Into</em> Your Architecture</h2>
            <p>The best time to design erasure capability is when you build the system, not when the first request arrives. Architectural patterns that make deletion straightforward:</p>
            <ul>
              <li><strong>Data subject ID as a primary linking field.</strong> Every record that references a data principal carries a stable identifier. Targeted deletion becomes a single ID-based query across systems.</li>
              <li><strong>Avoid duplicating personal data across tables without a reason.</strong> Each duplicate is another place to delete from and another place to forget.</li>
              <li><strong>Backup retention policies in writing.</strong> If backups roll over every 35 days, that becomes the latest-possible delete date for backups. Document it.</li>
              <li><strong>Sub-processor capability check before onboarding.</strong> Verify each new vendor can honour an erasure cascade before you sign the DPA. Vendors who cannot delete are vendors who will fail you on a future request.</li>
              <li><strong>Erasure runbook.</strong> A documented internal procedure that lists every system, the deletion API or process for each, the responsible owner, and the verification step.</li>
              <li><strong>Quarterly purge of soft-deleted records.</strong> A scheduled job that permanently removes anything marked deleted older than the retention window.</li>
            </ul>

            <p>The right to erasure is a test of how well you actually know your own data. If you cannot find it, you cannot delete it. Invest in data mapping -it will serve you well beyond just erasure requests.</p>
          </section>

          <div className="cta-bottom">
            <h3>Need a reliable erasure workflow?</h3>
            <p>SecComply designs and operationalises DPDP rights workflows -including the erasure runbook, vendor cascade procedures, and audit-ready logging that turns a legal obligation into a routine operation.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="cta-btn" target="_blank" rel="noopener">Book a rights workflow review →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>FAQ</h2>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>How quickly must we respond to an erasure request?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>The DPDP Act does not yet prescribe a fixed timeline through rules. As a defensible default, acknowledge within 24-72 hours and complete the deletion within 30 days. Many global frameworks (GDPR) require completion within one month; aligning to that benchmark keeps you safe while specific Indian rules are finalised.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Can we refuse an erasure request?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>You can refuse only where you have an overriding legal obligation to retain -GST records, employment records under labour law, financial records under sectoral regulation, or active legal hold. You must document the refusal with the specific legal basis and communicate this to the data principal. You cannot refuse simply because deletion is inconvenient or commercially undesirable.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Do we need to delete from backups?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Yes, but the timing can be different from primary system deletion. Backups are typically rotated out on a schedule (30-90 days is common). The accepted practice is to delete from primary systems immediately, and confirm that backups containing the data will be rotated out within the documented backup retention period. Document the backup rotation policy as part of the erasure response.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>Is soft delete acceptable?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>No -not on its own. Soft delete (marking a record as deleted but keeping the data in the database) does not satisfy the erasure obligation. If you use soft deletes operationally for recovery, you must run a scheduled purge process that permanently removes soft-deleted records after a defined period. The end state is data that genuinely cannot be retrieved or reconstructed.</p></div></div>
            <div className="faq-item"><div className="faq-q" onClick={(e) => window.toggleFaq(e.currentTarget)}><strong>What about anonymisation instead of deletion?</strong><span className="faq-ch">▼</span></div><div className="faq-a"><p>Anonymisation is an accepted alternative to deletion provided the anonymisation is irreversible -the data can no longer be linked to the individual, even by combining it with other information you hold. Pseudonymisation (where a re-identification key exists somewhere) is not anonymisation and does not satisfy the obligation.</p></div></div>
          </section>

        </article>

        <aside className="sidebar">
          <div className="side-card">
            <div className="side-lbl">Rights Workflows</div>
            <h3>Operationalise erasure</h3>
            <p>Runbook, vendor cascade, audit-ready logging -designed once and used reliably.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="side-cta" target="_blank" rel="noopener">Book a review →</a>
          </div>
          <div className="side-card">
            <div className="side-lbl">DPDP Series</div>
            <ul>
              <li><Link href="/resources/blog/dpdp-compliance-roadmap-90-days">90-Day Roadmap</Link></li>
              <li><Link href="/resources/blog/dpdp-consent-mechanism-web-app">Consent Mechanism</Link></li>
              <li><Link href="/resources/blog/dpdp-privacy-notice-template">Privacy Notice Template</Link></li>
              <li><Link href="/resources/blog/dpdp-breach-notification">Breach Notification</Link></li>
              <li><Link href="/resources/blog/dpdp-cross-border-data-transfer">Cross-Border Transfer</Link></li>
              <li><Link href="/resources/blog/what-is-dpdp-act-explained">DPDP Act Explained</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <button id="btt" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top">↑</button>
    </Layout>
  )
}
