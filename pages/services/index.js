import Head from 'next/head'
import Link from 'next/link'

// All SecComply services, flagship/high-demand first. `slug` maps to the
// existing /services/<slug> detail page.
const SERVICES = [
  { slug: 'dpdp', icon: '🇮🇳', title: 'DPDP Act', featured: true, pitch: 'India’s Digital Personal Data Protection Act 2023 readiness — from gap assessment to implementation.' },
  { slug: 'iso-27001', icon: '🌐', title: 'ISO 27001', featured: true, pitch: 'A full ISMS build through to certification — gap analysis, controls, evidence and audit support.' },
  { slug: 'soc-2', icon: '🛡️', title: 'SOC 2', featured: true, pitch: 'SOC 2 Type I & II readiness and ongoing monitoring — audit-ready with zero nonconformities.' },
  { slug: 'gdpr', icon: '🇪🇺', title: 'GDPR', pitch: 'End-to-end GDPR compliance for EU operations — from assessment to ongoing management.' },
  { slug: 'hipaa', icon: '🏥', title: 'HIPAA', pitch: 'HIPAA compliance to protect patient data, meet requirements and avoid costly penalties.' },
  { slug: 'vapt', icon: '🔍', title: 'VAPT', pitch: 'Vulnerability assessment & penetration testing for web apps, networks and cloud.' },
  { slug: 'ciso', icon: '💼', title: 'CISO-as-a-Service', pitch: 'A fractional CISO for strategy, board reporting and governance — without the full-time cost.' },
  { slug: 'compliance-as-a-service', icon: '⚙️', title: 'Compliance-as-a-Service', pitch: 'Ongoing managed compliance — stay audit-ready year-round on a retainer.' },
  { slug: 'cloud-security', icon: '⛅', title: 'Cloud Security Audit', pitch: 'Security reviews for AWS, Azure and GCP — find misconfigurations and enforce best practices.' },
  { slug: 'iso-27701', icon: '🔏', title: 'ISO 27701', pitch: 'A privacy information management system (PIMS) extending your ISO 27001 ISMS.' },
  { slug: 'iso-42001', icon: '🤖', title: 'ISO 42001', pitch: 'Certification for the global AI management standard — govern AI responsibly and demonstrably.' },
  { slug: 'nist-csf', icon: '🇺🇸', title: 'NIST CSF 2.0', pitch: 'Map your security program to NIST CSF 2.0 — Govern, Identify, Protect, Detect, Respond, Recover.' },
  { slug: 'iso-27017', icon: '☁️', title: 'ISO 27017', pitch: 'Cloud-specific security controls to meet enterprise cloud security requirements.' },
  { slug: 'iso-27018', icon: '🔒', title: 'ISO 27018', pitch: 'Protect PII in public cloud and prove cloud privacy compliance to enterprise customers.' },
  { slug: 'internal-audit', icon: '📊', title: 'Internal Audit', pitch: 'Independent internal audits for risk management, control effectiveness and governance.' },
  { slug: 'security-policy', icon: '📜', title: 'Security Policy', pitch: 'Custom security policies and procedures, professionally crafted to pass audits.' },
  { slug: 'ai-agents', icon: '🧬', title: 'AI Agents & Agentic Workflows', pitch: 'Custom AI agents that automate repetitive security work inside your policies and guardrails.' },
]

export default function ServicesIndex() {
  return (
    <>
      <Head>
        <title>Services | SecComply</title>
        <meta name="description" content="Explore SecComply's full range of compliance and security services — ISO 27001, SOC 2, GDPR, HIPAA, DPDP Act, VAPT, CISO-as-a-Service and more. Certification to continuous monitoring." />
        <link rel="canonical" href="https://seccomply.net/services" />
      </Head>

      <main className="sv">
        <section className="sv-hero">
          <span className="sv-badge"><span className="sv-badge-dot" /> Our Services</span>
          <h1>Compliance &amp; Security Services <span className="accent">That Scale With You</span></h1>
          <p>From certification to continuous monitoring, our team delivers the full spectrum of GRC and security expertise — tailored to your stage, frameworks and budget.</p>
        </section>

        <section className="sv-grid">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className={`sv-card ${s.featured ? 'featured' : ''}`}>
              {s.featured && <span className="sv-flag">Most requested</span>}
              <span className="sv-icon">{s.icon}</span>
              <h2>{s.title}</h2>
              <p>{s.pitch}</p>
              <span className="sv-learn">Learn More →</span>
            </Link>
          ))}
        </section>

        <section className="sv-cta">
          <div className="sv-cta-inner">
            <div>
              <h3>Not sure which service you need?</h3>
              <p>Tell us about your business and we’ll recommend the right path — and email tailored pricing within one business day.</p>
            </div>
            <div className="sv-cta-btns">
              <Link href="/pricing" className="sv-cta-btn primary">Get Pricing →</Link>
              <Link href="/contact" className="sv-cta-btn ghost">Talk to an Expert</Link>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .sv { max-width:1180px; margin:0 auto; padding:7rem 1.5rem 5rem; }
        .sv-hero { text-align:center; max-width:760px; margin:0 auto 3rem; }
        .sv-badge { display:inline-flex; align-items:center; gap:8px; padding:.4rem 1rem; border-radius:var(--radius-full); background:rgba(255, 96, 0,.08); color:var(--accent-light); border:1px solid rgba(255, 96, 0,.2); font-size:.72rem; font-weight:700; text-transform:uppercase; letter-spacing:.12em; margin-bottom:1.1rem; }
        .sv-badge-dot { width:6px; height:6px; border-radius:50%; background:var(--accent); }
        .sv-hero h1 { font-size:clamp(2.1rem,5vw,3.2rem); font-weight:800; line-height:1.12; letter-spacing:-1.5px; margin:0 0 1.1rem; color:var(--white); }
        .accent { color:var(--accent-light); }
        .sv-hero p { color:var(--text-secondary); font-size:1.05rem; line-height:1.7; margin:0; }

        .sv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; }
        @media (max-width:900px){ .sv-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:600px){ .sv-grid { grid-template-columns:1fr; } }

        .sv-card { position:relative; overflow:hidden; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:1.7rem 1.6rem; display:flex; flex-direction:column; gap:.55rem; transition:all .3s ease; color:inherit; text-decoration:none; }
        .sv-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:var(--gradient-accent); transform:scaleX(0); transform-origin:left; transition:transform .45s cubic-bezier(.16,1,.3,1); }
        .sv-card:hover::before { transform:scaleX(1); }
        .sv-card:hover { border-color:rgba(255, 96, 0,.3); transform:translateY(-4px); box-shadow:0 16px 50px rgba(0,0,0,.3); background:var(--bg-card-hover); }
        .sv-card.featured { border-color:rgba(255, 96, 0,.35); }
        .sv-flag { position:absolute; top:-.6rem; right:1rem; background:var(--gradient-accent); color:#fff; font-size:.6rem; font-weight:800; letter-spacing:.05em; text-transform:uppercase; padding:.22rem .6rem; border-radius:var(--radius-full); }
        .sv-icon { font-size:2rem; }
        .sv-card h2 { font-size:1.12rem; font-weight:800; color:var(--white); margin:.3rem 0 0; }
        .sv-card p { color:var(--text-secondary); font-size:.88rem; line-height:1.55; margin:0; flex:1; }
        .sv-learn { display:inline-flex; align-items:center; gap:6px; margin-top:.5rem; font-size:.85rem; font-weight:700; color:var(--accent-light); transition:gap .2s ease; }
        .sv-card:hover .sv-learn { gap:11px; }

        .sv-cta { margin-top:3rem; }
        .sv-cta-inner { background:linear-gradient(135deg,rgba(255, 96, 0,.1),rgba(15,23,42,.6)); border:1px solid rgba(255, 96, 0,.3); border-radius:var(--radius-lg); padding:2.2rem 2.4rem; display:flex; align-items:center; justify-content:space-between; gap:1.5rem; flex-wrap:wrap; }
        .sv-cta h3 { font-size:1.4rem; font-weight:800; color:var(--white); margin:0 0 .5rem; }
        .sv-cta p { color:var(--text-secondary); font-size:.95rem; line-height:1.6; margin:0; max-width:560px; }
        .sv-cta-btns { display:flex; gap:.7rem; flex-wrap:wrap; }
        .sv-cta-btn { white-space:nowrap; padding:.8rem 1.5rem; border-radius:10px; font-weight:700; text-decoration:none; font-size:.92rem; transition:all .2s ease; }
        .sv-cta-btn.primary { background:var(--gradient-accent); color:#fff; box-shadow:0 0 20px rgba(255, 96, 0,.25); }
        .sv-cta-btn.primary:hover { transform:translateY(-2px); box-shadow:0 0 32px rgba(255, 96, 0,.35); }
        .sv-cta-btn.ghost { background:var(--bg-card); border:1px solid var(--accent); color:var(--accent-light); }
        .sv-cta-btn.ghost:hover { background:rgba(255, 96, 0,.1); }
      `}</style>
    </>
  )
}
