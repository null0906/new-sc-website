import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

export default function Top10SecurityControls() {
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
      const url = encodeURIComponent('https://seccomply.net/resources/blog/top-10-security-controls'); const ttl = encodeURIComponent('Top 10 Security Controls Every Startup Should Implement, SecComply');
      const sl = document.getElementById('sl'); const st = document.getElementById('st');
      if (sl) sl.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
      if (st) st.href = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + ttl + '&via=seccomply';
      window.copyLink = function () { const raw = 'https://seccomply.net/resources/blog/top-10-security-controls'; (navigator.clipboard ? navigator.clipboard.writeText(raw) : Promise.reject()).catch(() => { const ta = Object.assign(document.createElement('textarea'), { value: raw, style: 'position:fixed;opacity:0' }); document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }); toast('Link copied!'); };
      function toast(msg) { let t = document.getElementById('sc-toast'); if (!t) { t = document.createElement('div'); t.id = 'sc-toast'; t.style.cssText = 'position:fixed;bottom:5rem;left:50%;transform:translateX(-50%);background:var(--accent);color:#fff;padding:.6rem 1.4rem;border-radius:100px;font-weight:600;font-size:.83rem;z-index:9999;box-shadow:0 6px 24px rgb(var(--accent-rgb) / .4);opacity:0;transition:opacity .3s;pointer-events:none'; document.body.appendChild(t); } t.textContent = msg; t.style.opacity = '1'; clearTimeout(t._tid); t._tid = setTimeout(() => { t.style.opacity = '0'; }, 2500); }
      const fadeEls = document.querySelectorAll('.anim'); if (fadeEls.length && 'IntersectionObserver' in window) { const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; fo.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }); fadeEls.forEach(el => { el.style.animationPlayState = 'paused'; fo.observe(el); }); }
      window.toggleFaq = function (q) { const item = q.closest('.faq-item'); const wasOpen = item.classList.contains('open'); document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open')); if (!wasOpen) item.classList.add('open'); };
    })();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BlogPosting", "headline": "Top 10 Security Controls Every Startup Should Implement", "description": "The ten security controls that form the foundation of every SOC 2, ISO 27001, and DPDP Act compliance programme, explained in plain language with implementation guidance.", "image": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/blog/top-10-security-controls-startup.png", "width": 1200, "height": 630 }, "author": { "@type": "Person", "name": "Soham Sawant", "worksFor": { "@type": "Organization", "name": "SecComply" } }, "publisher": { "@type": "Organization", "name": "SecComply", "logo": { "@type": "ImageObject", "url": "https://seccomply.net/assets/images/logo.png" } }, "datePublished": "2026-03-11", "dateModified": "2026-03-11", "mainEntityOfPage": "https://seccomply.net/resources/blog/top-10-security-controls", "articleSection": "Security Controls", "inLanguage": "en-IN", "timeRequired": "PT7M" },
      { "@type": "FAQPage", "mainEntity": [
        { "@type": "Question", "name": "What are the most important security controls for a startup?", "acceptedAnswer": { "@type": "Answer", "text": "The ten most critical controls are: MFA enforcement, access control with least privilege, data encryption, vulnerability management, security awareness training, incident response planning, vendor risk management, backup and recovery, audit logging, and patch management. These cover the highest-weight criteria in SOC 2, ISO 27001, and DPDP Act." } },
        { "@type": "Question", "name": "How long does it take to implement these controls?", "acceptedAnswer": { "@type": "Answer", "text": "Controls 1–3 (MFA, access control, encryption) can be configured in 1–2 weeks using existing cloud infrastructure. Controls 4–7 take 2–4 weeks each. Controls 8–10 can be completed in 1–2 weeks. A full implementation typically takes 8–12 weeks for a startup with 10–50 employees." } }
      ]},
      { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seccomply.net" }, { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://seccomply.net/resources" }, { "@type": "ListItem", "position": 3, "name": "Blog", "item": "https://seccomply.net/resources/blog" }, { "@type": "ListItem", "position": 4, "name": "Top 10 Security Controls", "item": "https://seccomply.net/resources/blog/top-10-security-controls" }] }
    ]
  };

  const controls = [
    { num: '01', icon: '🔐', title: 'Multi-Factor Authentication (MFA)', tag: 'Access Security', body: 'MFA is the single highest-impact control a startup can implement. Over 80% of breaches involve compromised credentials, MFA stops the vast majority of them. Enforce MFA across every system: cloud console, code repository, email, HR system, and any tool containing customer data. No exceptions for founders, engineers, or administrators.', impl: 'Enable MFA in Google Workspace or Microsoft 365 at the organisation level. Enforce in AWS IAM with an explicit deny policy for non-MFA sessions. Okta or JumpCloud centralises enforcement across all tools in one place.', frameworks: 'SOC 2 CC6.1 · ISO 27001 A.8.5 · DPDP Act Security Safeguard' },
    { num: '02', icon: '🛡️', title: 'Access Control & Least Privilege', tag: 'Identity Management', body: 'Every employee should have access to exactly the systems and data they need to do their job, and nothing more. "Everyone has admin" is not an access control policy. Role-based access control (RBAC) defines permissions by job function, not by individual. Access reviews quarterly ensure that permissions are still appropriate as roles change.', impl: 'Define three roles minimum: read-only, operator, and administrator. Review all permissions when someone changes roles or leaves. Automate offboarding through Okta Lifecycle Management to revoke all access within minutes of a departure.', frameworks: 'SOC 2 CC6.2, CC6.3 · ISO 27001 A.5.15, A.8.2 · DPDP Act Purpose Limitation' },
    { num: '03', icon: '🔒', title: 'Data Encryption (at Rest & in Transit)', tag: 'Data Protection', body: 'Unencrypted data is a breach waiting to happen. Encryption at rest means data stored in databases, file systems, and backups is encrypted. Encryption in transit means all data moving between systems, APIs, and users is protected with TLS 1.2 or higher. Both are non-negotiable for any compliance framework and most enterprise security questionnaires.', impl: 'Enable AES-256 encryption at rest for all AWS RDS, S3, and EBS volumes, one checkbox per service. Enforce HTTPS on all endpoints. Audit using AWS Config rule: "encrypted-volumes" and "s3-bucket-ssl-requests-only".', frameworks: 'SOC 2 CC6.7 · ISO 27001 A.8.24 · DPDP Act Security Safeguard' },
    { num: '04', icon: '🔍', title: 'Vulnerability Management', tag: 'Threat Reduction', body: 'Known vulnerabilities in dependencies, containers, and infrastructure are the most predictable attack vector. Vulnerability management means scanning continuously, prioritising by severity, and remediating within defined SLAs. A critical CVE (CVSS 9.0+) in production code with no remediation plan is a material risk, and a finding in every security audit.', impl: 'Snyk for application dependencies integrated into every pull request. AWS Inspector for EC2 and container image scanning. Set remediation SLAs: Critical ≤7 days, High ≤30 days, Medium ≤90 days. Track in Jira or Linear.', frameworks: 'SOC 2 CC7.1 · ISO 27001 A.8.8 · DPDP Act Security Safeguard' },
    { num: '05', icon: '🎓', title: 'Security Awareness Training', tag: 'Human Layer', body: 'The majority of successful attacks start with a human, a phishing email clicked, a credential reused, a USB drive plugged in. Annual security awareness training is not a nice-to-have; it is a mandatory SOC 2 control and an ISO 27001 requirement. Training must cover phishing recognition, password hygiene, incident reporting, and data handling.', impl: 'KnowBe4 or Proofpoint Security Awareness for automated phishing simulations and training modules. Run a quarterly phishing simulation. Track completion rate, 100% completion is the SOC 2 auditor\'s expectation. Under £2,000/year for a 20-person startup.', frameworks: 'SOC 2 CC2.2 · ISO 27001 A.6.3 · DPDP Act Security Safeguard' },
    { num: '06', icon: '🚨', title: 'Incident Response Plan', tag: 'Resilience', body: 'When, not if, a security incident occurs, the response quality determines the outcome. An undocumented, improvised response leads to delayed containment, regulatory notification failures, and customer trust destruction. An incident response plan defines: what counts as an incident, who is on the response team, the escalation sequence, the containment steps, and the notification obligations under DPDP Act and other regulations.', impl: 'Document a one-page incident response procedure covering: detection → triage → containment → eradication → recovery → post-incident review. Define your DPDP Act breach notification trigger (72-hour clock starts on awareness). Test with a tabletop exercise once per year.', frameworks: 'SOC 2 CC7.3, CC7.4 · ISO 27001 A.5.24, A.5.26 · DPDP Act Breach Notification' },
    { num: '07', icon: '🤝', title: 'Vendor Risk Management', tag: 'Supply Chain', body: 'Your security posture is only as strong as your weakest vendor. The Okta breach in 2022 came through a third-party support vendor. The MOVEit breach in 2023 affected thousands of companies through a single file transfer tool. Every vendor that processes your customer data or has access to your systems extends your attack surface. Vendor risk management means assessing, documenting, and monitoring that surface.', impl: 'Maintain a vendor inventory. For any vendor with access to personal data or production systems, obtain their SOC 2 report or ISO 27001 certificate annually. Include security obligations in every vendor contract. Review quarterly.', frameworks: 'SOC 2 CC9.2 · ISO 27001 A.5.19, A.5.20 · DPDP Act Data Processor Obligations' },
    { num: '08', icon: '💾', title: 'Backup & Recovery Testing', tag: 'Business Continuity', body: 'A backup that has never been tested is not a backup, it is a hope. Ransomware attacks are now the most common cause of business disruption for startups, and the only real defence is clean, recent, tested backups that are stored separately from production systems. Recovery testing once per quarter proves that backups work before you need them.', impl: 'Enable automated daily backups for all databases to a separate AWS account. Set retention to 30 days minimum. Run a full restore test quarterly and document the result. Recovery Time Objective (RTO) and Recovery Point Objective (RPO) should be defined and tested.', frameworks: 'SOC 2 A1.2 · ISO 27001 A.8.13, A.5.30 · DPDP Act Security Safeguard' },
    { num: '09', icon: '📋', title: 'Audit Logging & Monitoring', tag: 'Visibility', body: 'You cannot investigate what you cannot see. Audit logging captures who did what, when, and from where across every system. Monitoring alerts on suspicious patterns, failed logins, privilege escalation, unusual data exports. Twelve months of log retention is a hard SOC 2 requirement. Three specific alerts cover the majority of first-time audit findings.', impl: 'Enable AWS CloudTrail in all regions with 12-month S3 retention. Create three CloudWatch alarms: root account login, console login without MFA, security group modification. For SaaS logs, centralise in Datadog or Elasticsearch.', frameworks: 'SOC 2 CC7.2, CC7.3 · ISO 27001 A.8.15, A.8.16 · DPDP Act Accountability' },
    { num: '10', icon: '🔧', title: 'Patch Management', tag: 'Vulnerability Hygiene', body: 'Unpatched systems running known vulnerabilities are responsible for a significant proportion of breaches every year, including high-profile incidents like the 2021 Microsoft Exchange attacks. Patch management means tracking OS, application, and library versions, applying security patches within defined windows, and maintaining a record that satisfies auditors.', impl: 'Enable AWS Systems Manager Patch Manager for EC2 instances. For container workloads, rebuild base images monthly. Define patch SLAs in policy: Critical within 48 hours, High within 14 days. Use Snyk or Dependabot for library patches in application code.', frameworks: 'SOC 2 CC7.1 · ISO 27001 A.8.8, A.8.19 · DPDP Act Security Safeguard' },
  ];

  return (
    <Layout>
      <Head>
        <title>Top 10 Security Controls Every Startup Should Implement, SecComply</title>
        <meta name="description" content="The 10 security controls that form the foundation of every SOC 2, ISO 27001, and DPDP Act compliance programme, explained in plain language with implementation steps and cost estimates." />
        <meta name="keywords" content="security controls startups, SOC 2 controls, ISO 27001 controls, MFA enforcement, access control, data encryption, vulnerability management, incident response plan, vendor risk management, startup security compliance India" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Soham Sawant" /><meta name="language" content="en-IN" />
        <link rel="canonical" href="https://seccomply.net/resources/blog/top-10-security-controls" />
        <link rel="icon" href="/favicon.ico" /><link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#020617" /><meta charSet="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Top 10 Security Controls Every Startup Should Implement" />
        <meta property="og:description" content="The 10 controls that form the foundation of SOC 2, ISO 27001, and DPDP Act, with implementation steps and cost estimates." />
        <meta property="og:url" content="https://seccomply.net/resources/blog/top-10-security-controls" />
        <meta property="og:image" content="https://seccomply.net/assets/images/blog/top-10-security-controls-startup.png" />
        <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SecComply" /><meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content="2026-03-11T08:00:00+05:30" />
        <meta property="article:modified_time" content="2026-03-11T08:00:00+05:30" />
        <meta property="article:author" content="Soham Sawant" /><meta property="article:section" content="Security Controls" />
        <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:site" content="@seccomply" />
        <meta name="twitter:title" content="Top 10 Security Controls Every Startup Should Implement" />
        <meta name="twitter:description" content="Foundation controls for SOC 2, ISO 27001, and DPDP Act, with plain-language implementation steps." />
        <meta name="twitter:image" content="https://seccomply.net/assets/images/blog/top-10-security-controls-startup.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />      </Head>

      <style jsx global>{`
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}body{font-family:var(--sans);background:var(--bg);color:var(--tx);-webkit-font-smoothing:antialiased;overflow-x:hidden}a{color:inherit;text-decoration:none}
        #reading-progress{position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,var(--accent),var(--accent-light));z-index:9999;transition:width .1s linear;border-radius:0 2px 2px 0}
        .b-hero-wrap{background:linear-gradient(160deg,var(--bg-primary) 0%,var(--bg-secondary) 60%,var(--bg-card) 100%);border-bottom:1px solid var(--bs);padding:96px 0 60px;position:relative;overflow:hidden}
        .b-hero-wrap::before{content:'';position:absolute;top:-120px;right:-80px;width:500px;height:500px;background:radial-gradient(circle,rgb(var(--accent-rgb) / .08) 0%,transparent 70%);pointer-events:none}
        .b-hero-inner{max-width:860px;margin:0 auto;padding:0 24px}
        .b-breadcrumb{display:flex;align-items:center;gap:8px;font-size:.78rem;color:var(--tm);margin-bottom:24px;flex-wrap:wrap}.b-breadcrumb a{color:var(--cy)}.b-breadcrumb span{opacity:.4}
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
        .b-share-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:.75rem;font-weight:600;border:1px solid var(--bs);background:rgba(255,255,255,.04);color:var(--tm);transition:all .2s;cursor:pointer}.b-share-btn:hover{border-color:var(--cy);color:var(--cy)}
        .b-stats-bar{display:flex;gap:0;border:1px solid var(--bs);border-radius:16px;overflow:hidden;margin:40px 0 0;background:var(--bgc)}
        .b-stat{flex:1;padding:20px 24px;text-align:center;border-right:1px solid var(--bs)}.b-stat:last-child{border-right:none}
        .b-stat .n{font-size:1.7rem;font-weight:900;color:var(--cy);line-height:1}.b-stat .l{font-size:.72rem;color:var(--tm);margin-top:4px;font-weight:500}
        .art-wrap{max-width:1160px;margin:0 auto;padding:56px 24px 80px;display:grid;grid-template-columns:1fr 280px;gap:48px;align-items:start}
        .art{font-size:1.02rem;line-height:1.8;color:var(--tb);min-width:0}.art p{margin-bottom:1.3em}
        .art h2{font-size:1.55rem;font-weight:800;color:var(--tx);margin:2.4em 0 .7em;letter-spacing:-.02em;padding-bottom:.5em;border-bottom:1px solid var(--bs)}
        .art h3{font-size:1.15rem;font-weight:700;color:var(--cy);margin:1.8em 0 .5em}.art strong{color:var(--tx);font-weight:700}
        .art ul,.art ol{padding-left:1.5em;margin-bottom:1.3em}.art li{margin-bottom:.5em}
        .art a{color:var(--cy);text-decoration:underline;text-decoration-color:rgb(var(--accent-rgb) / .35)}.art a:hover{text-decoration-color:var(--cy)}
        .ctrl-card{background:var(--bgc);border:1px solid var(--bs);border-radius:16px;padding:28px 28px 22px;margin:2em 0;position:relative;overflow:hidden;transition:border-color .3s}
        .ctrl-card:hover{border-color:var(--bo)}
        .ctrl-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent-light))}
        .ctrl-num{position:absolute;top:22px;right:24px;font-size:2.2rem;font-weight:900;color:rgb(var(--accent-rgb) / .07);line-height:1}
        .ctrl-tag{display:inline-block;padding:3px 10px;border-radius:100px;font-size:.68rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:rgb(var(--accent-rgb) / .1);border:1px solid rgb(var(--accent-rgb) / .2);color:var(--cy);margin-bottom:10px}
        .ctrl-title{font-size:1.15rem;font-weight:800;color:var(--tx);margin-bottom:10px;display:flex;align-items:center;gap:10px}
        .ctrl-body{font-size:.95rem;line-height:1.75;color:var(--tb);margin-bottom:14px}
        .ctrl-impl{background:rgb(var(--green-rgb) / .05);border:1px solid rgb(var(--green-rgb) / .15);border-radius:10px;padding:12px 16px;font-size:.87rem;line-height:1.65;color:#A7F3D0;margin-bottom:12px}
        .ctrl-impl strong{color:var(--green-light)}
        .ctrl-frameworks{font-size:.75rem;color:var(--tm);font-weight:600;letter-spacing:.03em}
        .key-takeaway{background:rgb(var(--green-rgb) / .06);border:1px solid rgb(var(--green-rgb) / .2);border-radius:14px;padding:20px 24px;margin:2em 0}
        .key-takeaway strong{color:var(--green-light);display:block;font-size:.8rem;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}
        .key-takeaway p{font-size:.97rem;color:#A7F3D0;line-height:1.65;margin:0}
        .sc-table{width:100%;border-collapse:collapse;margin:1.5em 0;font-size:.88rem}
        .sc-table th{background:rgb(var(--accent-rgb) / .08);color:var(--cy);font-weight:700;padding:10px 16px;text-align:left;font-size:.78rem;text-transform:uppercase;letter-spacing:.06em;border-bottom:2px solid rgb(var(--accent-rgb) / .2)}
        .sc-table td{padding:11px 16px;border-bottom:1px solid var(--bs);vertical-align:top;color:var(--tb)}
        .sc-table tr:last-child td{border-bottom:none}.sc-table tr:hover td{background:rgba(255,255,255,.02)}.sc-table td:first-child{font-weight:700;color:var(--tx)}
        .art-cta{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .12),rgb(var(--accent-rgb) / .06));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:16px;padding:32px 28px;margin:3em 0;text-align:center}
        .art-cta h3{font-size:1.25rem;font-weight:800;color:var(--tx);margin-bottom:10px}.art-cta p{font-size:.92rem;color:var(--tm);margin-bottom:20px;line-height:1.6}
        .art-cta a{display:inline-flex;align-items:center;gap:8px;padding:12px 28px;background:linear-gradient(135deg,var(--accent),var(--accent-light));color:#fff;font-weight:700;font-size:.9rem;border-radius:100px;transition:all .3s;box-shadow:0 6px 24px rgb(var(--accent-rgb) / .3)}
        .art-cta a:hover{transform:translateY(-2px);box-shadow:0 10px 32px rgb(var(--accent-rgb) / .4);text-decoration:none}
        .faq-section{margin:3em 0}.faq-section h2{font-size:1.4rem;font-weight:800;color:var(--tx);margin-bottom:1em;padding-bottom:.5em;border-bottom:1px solid var(--bs)}
        .faq-item{border:1px solid var(--bs);border-radius:12px;margin-bottom:10px;overflow:hidden;transition:border-color .3s}.faq-item.open{border-color:var(--bo)}
        .faq-question{background:var(--bgc);color:var(--tx);border:none;width:100%;text-align:left;padding:16px 20px;font-size:.95rem;font-weight:600;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:var(--sans);transition:background .2s}.faq-question:hover{background:var(--bgc2)}
        .faq-icon{color:var(--cy);font-size:1.2rem;flex-shrink:0;margin-left:12px;transition:transform .3s}.faq-item.open .faq-icon{transform:rotate(45deg)}
        .faq-answer{max-height:0;overflow:hidden;transition:max-height .4s ease}.faq-item.open .faq-answer{max-height:500px}
        .faq-answer-inner{padding:0 20px 16px;font-size:.9rem;color:var(--tm);line-height:1.7}
        .sidebar{position:sticky;top:88px;display:flex;flex-direction:column;gap:20px}
        .sidebar-card{background:var(--bgc);border:1px solid var(--bs);border-radius:14px;padding:20px}
        .sidebar-card h4{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--cy);margin-bottom:14px}
        .toc-link{display:block;font-size:.82rem;color:var(--tm);padding:5px 0 5px 12px;border-left:2px solid transparent;transition:all .2s;line-height:1.4}
        .toc-link:hover,.toc-link.active{color:var(--tx);border-left-color:var(--cy)}
        .sidebar-tags{display:flex;flex-wrap:wrap;gap:7px}
        .sidebar-tag{padding:4px 10px;background:rgba(255,255,255,.05);border:1px solid var(--bs);border-radius:100px;font-size:.72rem;color:var(--tm);transition:all .2s}.sidebar-tag:hover{border-color:var(--cy);color:var(--cy)}
        .sidebar-cta{background:linear-gradient(135deg,rgb(var(--accent-rgb) / .15),rgb(var(--accent-rgb) / .07));border:1px solid rgb(var(--accent-rgb) / .25);border-radius:14px;padding:20px;text-align:center}
        .sidebar-cta p{font-size:.83rem;color:var(--tm);margin-bottom:14px;line-height:1.55}
        .sidebar-cta a{display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:linear-gradient(135deg,var(--accent),var(--accent-light));color:#fff;font-weight:700;font-size:.8rem;border-radius:100px;transition:all .3s}.sidebar-cta a:hover{transform:translateY(-1px);text-decoration:none}
        #btt{position:fixed;bottom:28px;right:28px;width:42px;height:42px;background:var(--accent);color:#fff;border:none;border-radius:50%;cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgb(var(--accent-rgb) / .4);opacity:0;transform:translateY(12px);transition:all .3s;pointer-events:none;z-index:999}
        #btt.vis{opacity:1;transform:translateY(0);pointer-events:auto}
        .sc-table-wrap{overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5em 0;border-radius:8px}
        .sc-table-wrap .sc-table{margin:0}
        @media(max-width:900px){.art-wrap{grid-template-columns:1fr}.sidebar{display:none}.b-stats-bar{flex-wrap:wrap}.b-stat{min-width:50%;flex:1 1 50%}.cost-grid,.penalty-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.b-hero-h1{font-size:1.65rem}.b-hero-sub{font-size:.97rem}.b-author-strip{flex-direction:column;align-items:flex-start;gap:12px}.b-stat{min-width:100%;flex:1 1 100%}.cost-grid,.penalty-grid{grid-template-columns:1fr}.sc-table{font-size:.8rem}.sc-table th,.sc-table td{padding:8px 10px}}
        @media(max-width:480px){.b-hero-h1{font-size:1.45rem}.b-hero-inner{padding:0 16px}.art-wrap{padding:40px 16px 60px}.b-share-row{gap:6px}.b-share-btn{padding:5px 10px;font-size:.72rem}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.anim{animation:fadeUp .6s ease both}
        .b-figure{margin:2em 0;border-radius:14px;overflow:hidden;border:1px solid var(--bs)}
        .b-figure img{width:100%;display:block;height:260px;object-fit:cover;filter:brightness(.92)}
        .b-figure figcaption{background:var(--bgc);padding:12px 18px;font-size:.8rem;color:var(--tm);line-height:1.55;border-top:1px solid var(--bs)}

      `}</style>

      <div id="reading-progress" aria-hidden="true" />

      <header className="b-hero-wrap">
        <div className="b-hero-inner">
          <nav className="b-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><Link href="/resources">Resources</Link><span>/</span><Link href="/resources/blog">Blog</Link><span>/</span><span>Security Controls</span>
          </nav>
          <div className="b-cat-badge">🔒 Security Controls</div>
          <h1 className="b-hero-h1">Top <span className="acc">10 Security Controls</span><br />Every Startup Should Implement</h1>
          <p className="b-hero-sub">The controls that form the foundation of every SOC 2, ISO 27001, and DPDP Act compliance programme, explained in plain language with implementation steps, cost estimates, and framework mappings.</p>
          <div className="b-author-strip">
            <div className="avatar">SS</div>
            <div className="author-info">
              <div className="name">Soham Sawant</div>
              <div className="meta-row">
                <span style={{color:"var(--cy)",fontWeight:600}}>✍️ Cybersecurity Expert &amp; Technical Writer</span>
                <span className="dot">·</span>
                <span id="read-time">📖 7 min read</span>
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
            <div className="b-stat"><div className="n">90%</div><div className="l">Of breaches preventable by these controls</div></div>
            <div className="b-stat"><div className="n">10</div><div className="l">Controls covering SOC 2, ISO 27001 & DPDP</div></div>
            <div className="b-stat"><div className="n">8 wks</div><div className="l">Typical full implementation timeline</div></div>
            <div className="b-stat"><div className="n">$0</div><div className="l">Starting cost for 4 of the 10 controls</div></div>
          </div>
        </div>
      </header>

      <div className="art-wrap">
        <article className="art">
          <section id="intro">
            <p>Compliance frameworks look overwhelming at first glance, SOC 2 has 64 criteria, ISO 27001 has 93 Annex A controls, and DPDP Act adds its own obligations on top. But underneath all of them, the same foundational controls appear again and again. Get these ten right, and you have answered the most common audit questions before the auditor asks them.</p>
            
            <figure className="b-figure">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=760&q=80&auto=format&fit=crop" alt="Cybersecurity controls and network security monitoring" loading="lazy" />
              <figcaption>The 10 controls in this guide address the root cause of over 90% of security incidents, and collectively satisfy the core requirements of SOC 2, ISO 27001, and DPDP Act.</figcaption>
            </figure>

          <div className="key-takeaway">
              <strong>🎯 The Pattern</strong>
              <p>These 10 controls collectively address the root cause of over 90% of security incidents. They are not the most complex controls, they are the most commonly missing ones. Implement them in order, starting with MFA.</p>
            </div>
          </section>

          {controls.map((c) => (
            <section key={c.num} id={`ctrl-${c.num}`}>
              <div className="ctrl-card anim">
                <div className="ctrl-num">{c.num}</div>
                <div className="ctrl-tag">{c.tag}</div>
                <div className="ctrl-title"><span>{c.icon}</span>{c.title}</div>
                <p className="ctrl-body">{c.body}</p>
                <div className="ctrl-impl"><strong>💡 Implementation:</strong> {c.impl}</div>
                <div className="ctrl-frameworks">📋 Framework coverage: {c.frameworks}</div>
              </div>
            </section>
          ))}

          
          <figure className="b-figure">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=760&q=80&auto=format&fit=crop" alt="Security audit and compliance maturity assessment for startups" loading="lazy" />
              <figcaption>Maturity moves in one direction: from missing controls to documented evidence. Auditors look for both, a working control and proof that it was working throughout the audit period.</figcaption>
            </figure>

          <section id="maturity">
            <h2>Where Does Your Startup Stand?</h2>
            <p>Use this maturity grid to benchmark which controls are in place, partially implemented, or missing entirely. Any "missing" cell in the first five controls is a material finding in a SOC 2 audit.</p>
            <div className="sc-table-wrap">
            <table className="sc-table">
              <thead><tr><th>Control</th><th>Not Started</th><th>Partial</th><th>Implemented</th></tr></thead>
              <tbody>
                {controls.map(c => (
                  <tr key={c.num}><td>{c.num}. {c.title.split(' (')[0]}</td><td style={{color:"var(--red)"}}>No MFA / no policy</td><td style={{color:"var(--am)"}}>Partial rollout</td><td style={{color:"var(--green-light)"}}>Enforced + evidence</td></tr>
                ))}
              </tbody>
            </table>
            </div>
          </section>

          <div className="art-cta anim">
            <h3>See which controls you're missing, in 48 hours</h3>
            <p>SecComply runs a gap assessment across all 10 controls and maps findings against SOC 2, ISO 27001, and DPDP Act simultaneously. You receive a prioritised remediation roadmap, not a generic checklist.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener">Book Free Gap Assessment →</a>
          </div>

          <section id="faq" className="faq-section">
            <h2>Frequently Asked Questions</h2>
            {[
              ['What are the most important security controls for a startup?', 'Start with MFA, access control, and data encryption, these three collectively address the majority of breach vectors and close the highest-weight criteria in SOC 2 and ISO 27001. Everything else builds on this foundation.'],
              ['How long does it take to implement all 10 controls?', 'Controls 1–3 (MFA, access control, encryption) can be configured in 1–2 weeks using existing cloud infrastructure. Controls 4–7 take 2–4 weeks each. Full implementation typically takes 8–12 weeks for a startup with 10–50 employees.'],
              ['Do these controls satisfy SOC 2 requirements?', 'These 10 controls cover the majority of SOC 2 Trust Service Criteria, particularly the CC6 (Logical Access), CC7 (System Operations), and CC9 (Risk Management) series that form the core of most Type II audits. A compliance automation platform like SecComply maps implementation evidence directly to criteria.'],
              ['Which controls are free to implement?', 'Controls 3 (encryption), 6 (incident response plan), 8 (backup, if using existing cloud), and 9 (CloudTrail + CloudWatch) have zero incremental cost on AWS. MFA within Google Workspace or Microsoft 365 is included in existing licences. Snyk has a free tier covering open-source scanning.'],
              ['How do I prove these controls exist to an auditor?', 'Each control generates specific evidence: MFA configuration exports, access review records, encryption settings screenshots, vulnerability scan reports, training completion logs, incident response test records, vendor assessment files, backup restore test documentation, CloudTrail logs, and patch records. SecComply collects this evidence automatically from connected tools.'],
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
            {[['#intro','Introduction'],...controls.map(c => [`#ctrl-${c.num}`, `${c.num}. ${c.title.split(' (')[0]}`]),['#maturity','Maturity Grid'],['#faq','FAQ']].map(([href, label]) => (
              <a key={href} href={href} className="toc-link">{label}</a>
            ))}
          </div>
          <div className="sidebar-cta">
            <h4 style={{fontSize:".72rem",fontWeight:700,textTransform:"uppercase",letterSpacing:".1em",color:"var(--cy)",marginBottom:"10px"}}>Free Gap Assessment</h4>
            <p>Find out which of these 10 controls are missing in your stack.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener">Book Now →</a>
          </div>
          <div className="sidebar-card">
            <h4>Tags</h4>
            <div className="sidebar-tags">
              {['SOC 2','ISO 27001','MFA','Access Control','Encryption','Incident Response','Vendor Risk','DPDP Act','Startup Security','SecComply'].map(t => (
                <span key={t} className="sidebar-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="sidebar-card">
            <h4>Related Reading</h4>
            {[['/resources/blog/top-security-tools-startup','Top 10 Security Tools for Startups'],['/resources/blog/cost-of-non-compliance','The True Cost of Non-Compliance'],['/resources/blog/soc2-vs-iso27001','SOC 2 vs ISO 27001, Which First?']].map(([href, label]) => (
              <a key={href} href={href} className="toc-link" style={{borderLeft:"none",paddingLeft:0}}>{label} →</a>
            ))}
          </div>
        </aside>
      </div>
      <button id="btt" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
    </Layout>
  )
}