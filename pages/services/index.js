import Head from 'next/head'
import Script from 'next/script'

// All SecComply services grouped to mirror the header mega-menu taxonomy.
// `slug` maps to the existing /services/<slug> detail page.
const GROUPS = [
  {
    key: 'certs',
    icon: '\u{1F3C5}',
    title: 'Certifications & Standards',
    desc: 'Framework certification and readiness — from gap assessment to a passed audit.',
    items: [
      { slug: 'dpdp', icon: '\u{1F1EE}\u{1F1F3}', title: 'DPDP Act', featured: true, pitch: 'India’s Digital Personal Data Protection Act 2023 readiness — from gap assessment to implementation.' },
      { slug: 'iso-27001', icon: '\u{1F310}', title: 'ISO 27001', featured: true, pitch: 'A full ISMS build through to certification — gap analysis, controls, evidence and audit support.' },
      { slug: 'soc-2', icon: '\u{1F6E1}️', title: 'SOC 2', featured: true, pitch: 'SOC 2 Type I & II readiness and ongoing monitoring — audit-ready with zero nonconformities.' },
      { slug: 'gdpr', icon: '\u{1F1EA}\u{1F1FA}', title: 'GDPR', pitch: 'End-to-end GDPR compliance for EU operations — from assessment to ongoing management.' },
      { slug: 'hipaa', icon: '\u{1F3E5}', title: 'HIPAA', pitch: 'HIPAA compliance to protect patient data, meet requirements and avoid costly penalties.' },
      { slug: 'iso-27701', icon: '\u{1F50F}', title: 'ISO 27701', pitch: 'A privacy information management system (PIMS) extending your ISO 27001 ISMS.' },
      { slug: 'iso-42001', icon: '\u{1F916}', title: 'ISO 42001', pitch: 'Certification for the global AI management standard — govern AI responsibly and demonstrably.' },
      { slug: 'nist-csf', icon: '\u{1F1FA}\u{1F1F8}', title: 'NIST CSF 2.0', pitch: 'Map your security program to NIST CSF 2.0 — Govern, Identify, Protect, Detect, Respond, Recover.' },
      { slug: 'iso-27017', icon: '☁️', title: 'ISO 27017', pitch: 'Cloud-specific security controls to meet enterprise cloud security requirements.' },
      { slug: 'iso-27018', icon: '\u{1F512}', title: 'ISO 27018', pitch: 'Protect PII in public cloud and prove cloud privacy compliance to enterprise customers.' },
    ],
  },
  {
    key: 'security',
    icon: '\u{1F510}',
    title: 'Security Services',
    desc: 'Hands-on security work — testing, leadership, audits and always-on compliance.',
    items: [
      { slug: 'vapt', icon: '\u{1F50D}', title: 'VAPT', featured: true, pitch: 'Vulnerability assessment & penetration testing for web apps, networks and cloud.' },
      { slug: 'ciso', icon: '\u{1F4BC}', title: 'CISO-as-a-Service', pitch: 'A fractional CISO for strategy, board reporting and governance — without the full-time cost.' },
      { slug: 'cloud-security', icon: '⛅', title: 'Cloud Security Audit', pitch: 'Security reviews for AWS, Azure and GCP — find misconfigurations and enforce best practices.' },
      { slug: 'compliance-as-a-service', icon: '⚙️', title: 'Compliance-as-a-Service', pitch: 'Ongoing managed compliance — stay audit-ready year-round on a retainer.' },
      { slug: 'internal-audit', icon: '\u{1F4CA}', title: 'Internal Audit', pitch: 'Independent internal audits for risk management, control effectiveness and governance.' },
      { slug: 'security-policy', icon: '\u{1F4DC}', title: 'Security Policy', pitch: 'Custom security policies and procedures, professionally crafted to pass audits.' },
    ],
  },
  {
    key: 'engineering',
    icon: '\u{1F6E0}️',
    title: 'Engineering Solutions',
    desc: 'Custom-built products and automation, engineered by our team for your environment.',
    items: [
      { slug: 'ai-agents', icon: '\u{1F9EC}', title: 'AI Agents & Agentic Workflows', pitch: 'Custom AI agents that automate repetitive security work inside your policies and guardrails.' },
      { slug: 'inventra', icon: '\u{1F4E6}', title: 'Inventra — IT Asset Management', featured: true, pitch: 'Full-visibility IT asset management — lifecycle, licenses, kits and audits, built for how your teams actually work.' },
      { slug: 'security-visualization', icon: '\u{1F4C8}', title: 'Custom Security Visualizations', pitch: 'Turn scattered security exports into one live picture of your risk posture — self-hosted, tool-agnostic.' },
    ],
  },
]

export default function ServicesIndex() {
  return (
    <>
      <Head>
        <title>Services | SecComply</title>
        <meta name="description" content="Explore SecComply's full range of compliance and security services — ISO 27001, SOC 2, GDPR, HIPAA, DPDP Act, VAPT, CISO-as-a-Service, custom engineering solutions and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://seccomply.net/services" />
        <style dangerouslySetInnerHTML={{__html: `
/* ── Services index — page-scoped styles ─────────────────── */
.svc-groups { padding:10px 0 40px; }
.svc-group { margin-bottom:64px; }
.svc-group:last-child { margin-bottom:0; }

/* Group header row: icon chip + title + rule line */
.svc-group-head { display:flex; align-items:center; gap:14px; margin-bottom:8px; }
.svc-group-ico { width:44px; height:44px; flex-shrink:0; display:flex; align-items:center; justify-content:center; font-size:20px; border-radius:12px; background:rgb(var(--accent-rgb) / 0.1); border:1px solid rgb(var(--accent-rgb) / 0.2); }
.svc-group-head h2 { font-size:1.35rem; font-weight:800; color:var(--white); letter-spacing:-0.5px; white-space:nowrap; }
.svc-group-line { flex:1; height:1px; background:linear-gradient(to right, rgb(var(--accent-rgb) / 0.35), rgb(var(--p-white-rgb) / 0.05)); }
.svc-group-desc { color:var(--text-secondary); font-size:0.92rem; margin:0 0 26px 58px; }

/* Card grid — equal-height, aligned */
.svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.svc-card { position:relative; overflow:hidden; display:flex; flex-direction:column; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:26px 24px; transition:all 0.35s var(--ease-out); text-decoration:none; color:inherit; }
.svc-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:var(--gradient-accent); transform:scaleX(0); transform-origin:left; transition:transform 0.45s var(--ease-out); }
.svc-card:hover::before { transform:scaleX(1); }
.svc-card:hover { border-color:rgb(var(--accent-rgb) / 0.3); background:var(--bg-card-hover); transform:translateY(-5px); box-shadow:0 16px 50px rgb(var(--p-white-rgb) / 0.35), 0 0 24px rgb(var(--accent-rgb) / 0.06); }
.svc-card.featured { border-color:rgb(var(--accent-rgb) / 0.35); }
.svc-flag { position:absolute; top:14px; right:-34px; transform:rotate(38deg); background:var(--gradient-accent); color:#fff; font-size:0.56rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; padding:4px 38px; pointer-events:none; }
.svc-ico { width:48px; height:48px; display:flex; align-items:center; justify-content:center; font-size:22px; border-radius:12px; background:rgb(var(--accent-rgb) / 0.1); border:1px solid rgb(var(--p-white-rgb) / 0.06); margin-bottom:16px; transition:transform 0.35s var(--ease-spring); }
.svc-card:hover .svc-ico { transform:scale(1.08) rotate(-3deg); }
.svc-card h3 { font-size:1.05rem; font-weight:800; color:var(--white); margin-bottom:8px; letter-spacing:-0.3px; }
.svc-card p { font-size:0.87rem; line-height:1.6; color:var(--text-secondary); flex:1; margin-bottom:16px; }
.svc-learn { display:inline-flex; align-items:center; gap:6px; font-size:0.85rem; font-weight:700; color:var(--accent-light); transition:gap 0.2s ease; margin-top:auto; }
.svc-card:hover .svc-learn { gap:12px; }

/* Bottom CTA band */
.svc-cta { padding:40px 0 90px; }
.svc-cta-inner { background:linear-gradient(135deg, rgb(var(--accent-rgb) / 0.1), rgb(var(--bg-card-rgb) / 0.6)); border:1px solid rgb(var(--accent-rgb) / 0.3); border-radius:var(--radius-xl); padding:38px 42px; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; }
.svc-cta-inner h3 { font-size:1.4rem; font-weight:800; color:var(--white); margin-bottom:8px; letter-spacing:-0.5px; }
.svc-cta-inner p { color:var(--text-secondary); font-size:0.95rem; line-height:1.6; max-width:560px; }
.svc-cta-btns { display:flex; gap:12px; flex-wrap:wrap; }

@media (max-width:900px) { .svc-grid { grid-template-columns:repeat(2,1fr); } }
@media (max-width:768px) {
  .svc-group-desc { margin-left:0; }
  .svc-cta-inner { padding:28px 22px; }
}
@media (max-width:600px) { .svc-grid { grid-template-columns:1fr; } }
        `}} />
      </Head>

      <div dangerouslySetInnerHTML={{__html: `
<section class="service-hero"><div class="hero-grid"></div><div class="hero-glow hero-glow-1"></div><div class="hero-glow hero-glow-2"></div><div class="hero-glow-center"></div><div class="container"><div class="hero-content"><div class="hero-badge"><span class="hero-badge-dot"></span> Our Services</div><h1>Compliance &amp; Security Services <br><span class="accent">That Scale With You</span></h1><p class="hero-sub">From certification to continuous monitoring, our team delivers the full spectrum of GRC and security expertise &mdash; tailored to your stage, frameworks and budget.</p></div></div></section>

<section class="svc-groups"><div class="container">
${GROUPS.map((g, gi) => `
<div class="svc-group" id="${g.key}">
  <div class="svc-group-head reveal"><span class="svc-group-ico">${g.icon}</span><h2>${g.title}</h2><span class="svc-group-line"></span></div>
  <p class="svc-group-desc reveal">${g.desc}</p>
  <div class="svc-grid">
    ${g.items.map((s, i) => `
    <a href="/services/${s.slug}" class="svc-card${s.featured ? ' featured' : ''} reveal delay-${(i % 3) + 1}">
      ${s.featured ? '<span class="svc-flag">Most requested</span>' : ''}
      <span class="svc-ico">${s.icon}</span>
      <h3>${s.title}</h3>
      <p>${s.pitch}</p>
      <span class="svc-learn">Learn More &rarr;</span>
    </a>`).join('')}
  </div>
</div>`).join('')}
</div></section>

<section class="svc-cta"><div class="container"><div class="svc-cta-inner reveal">
  <div>
    <h3>Not sure which service you need?</h3>
    <p>Tell us about your business and we&rsquo;ll recommend the right path &mdash; and email tailored pricing within one business day.</p>
  </div>
  <div class="svc-cta-btns">
    <a href="/pricing" class="btn btn-primary btn-lg">Get Pricing <span class="btn-icon">&rarr;</span></a>
    <a href="/contact" class="btn btn-outline btn-lg">Talk to an Expert</a>
  </div>
</div></div></section>
      `}} />

      <Script src="/assets/js/animations.js" strategy="afterInteractive" />
    </>
  )
}
