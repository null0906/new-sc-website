import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import LeadForm from '../components/LeadForm'

// Every service, in priority order (flagship / high-demand first).
// `key` is the lead-form "Interested in" value and must exist in INTEREST_OPTIONS.
const SERVICES = [
  { key: 'DPDP Act', icon: '🇮🇳', title: 'DPDP Act', featured: true, pitch: 'India’s Digital Personal Data Protection Act 2023 readiness — from gap assessment to implementation.' },
  { key: 'ISO 27001', icon: '🌐', title: 'ISO 27001', featured: true, pitch: 'A full ISMS build through to certification — gap analysis, controls, evidence and audit support.' },
  { key: 'SOC 2', icon: '🛡️', title: 'SOC 2', featured: true, pitch: 'SOC 2 Type I & II readiness and ongoing monitoring — audit-ready with zero nonconformities.' },
  { key: 'GDPR', icon: '🇪🇺', title: 'GDPR', pitch: 'End-to-end GDPR compliance for EU operations — from assessment to ongoing management.' },
  { key: 'HIPAA', icon: '🏥', title: 'HIPAA', pitch: 'HIPAA compliance to protect patient data, meet requirements and avoid costly penalties.' },
  { key: 'VAPT', icon: '🔍', title: 'VAPT', pitch: 'Vulnerability assessment & penetration testing for web apps, networks and cloud.' },
  { key: 'CISO-as-a-Service', icon: '💼', title: 'CISO-as-a-Service', pitch: 'A fractional CISO for strategy, board reporting and governance — without the full-time cost.' },
  { key: 'Compliance-as-a-Service', icon: '⚙️', title: 'Compliance-as-a-Service', pitch: 'Ongoing managed compliance — stay audit-ready year-round on a retainer.' },
  { key: 'Cloud Security Audit', icon: '⛅', title: 'Cloud Security Audit', pitch: 'Security reviews for AWS, Azure and GCP — find misconfigurations and enforce best practices.' },
  { key: 'ISO 27701', icon: '🔏', title: 'ISO 27701', pitch: 'A privacy information management system (PIMS) extending your ISO 27001 ISMS.' },
  { key: 'ISO 42001', icon: '🤖', title: 'ISO 42001', pitch: 'Certification for the global AI management standard — govern AI responsibly and demonstrably.' },
  { key: 'NIST CSF 2.0', icon: '🇺🇸', title: 'NIST CSF 2.0', pitch: 'Map your security program to NIST CSF 2.0 — Govern, Identify, Protect, Detect, Respond, Recover.' },
  { key: 'ISO 27017', icon: '☁️', title: 'ISO 27017', pitch: 'Cloud-specific security controls to meet enterprise cloud security requirements.' },
  { key: 'ISO 27018', icon: '🔒', title: 'ISO 27018', pitch: 'Protect PII in public cloud and prove cloud privacy compliance to enterprise customers.' },
  { key: 'Internal Audit', icon: '📊', title: 'Internal Audit', pitch: 'Independent internal audits for risk management, control effectiveness and governance.' },
  { key: 'Security Policy', icon: '📜', title: 'Security Policy', pitch: 'Custom security policies and procedures, professionally crafted to pass audits.' },
  { key: 'AI Agents', icon: '🧬', title: 'AI Agents & Agentic Workflows', pitch: 'Custom AI agents that automate repetitive security work inside your policies and guardrails.' },
]

const INTEREST_OPTIONS = [...SERVICES.map((s) => s.key), 'Multiple']

export default function Pricing() {
  const [modal, setModal] = useState(null) // service key or null
  const active = SERVICES.find((s) => s.key === modal)

  return (
    <>
      <Head>
        <title>Pricing | SecComply</title>
        <meta name="description" content="Request pricing for any SecComply service — DPDP, ISO 27001, SOC 2, GDPR, HIPAA, VAPT, CISO-as-a-Service and more. We scope every engagement and email tailored pricing within one business day." />
        <link rel="canonical" href="https://seccomply.net/pricing" />
      </Head>

      <main className="pr">
        <section className="pr-hero">
          <span className="pr-badge">💰 Pricing</span>
          <h1>Pricing built around <span className="accent">your scope</span></h1>
          <p>Every engagement is scoped to your size, frameworks and timeline — so we price it manually rather than with a misleading sticker number. Pick a service, share a few details, and we’ll email tailored pricing within one business day.</p>
        </section>

        <section className="pr-grid">
          {SERVICES.map((s) => (
            <div key={s.key} className={`pr-card ${s.featured ? 'featured' : ''}`}>
              {s.featured && <span className="pr-card-flag">Most requested</span>}
              <span className="pr-card-icon">{s.icon}</span>
              <h2>{s.title}</h2>
              <p>{s.pitch}</p>
              <button className="pr-card-btn" onClick={() => setModal(s.key)}>View Pricing →</button>
            </div>
          ))}
        </section>

        {/* Scope Questionnaire callout */}
        <section className="pr-scope">
          <div className="pr-scope-inner">
            <div>
              <h3>Not sure of your scope yet?</h3>
              <p>Complete our Scope Questionnaire — processing purposes, data inventory, processors, cross-border transfers and SDF status. We review it and book a call to confirm scope before quoting.</p>
            </div>
            <Link href="/scope-questionnaire" className="pr-scope-btn">Open the Scope Questionnaire →</Link>
          </div>
        </section>
      </main>

      {/* ── Lead-form modal ── */}
      {active && (
        <div className="pr-overlay" onClick={() => setModal(null)}>
          <div className="pr-modal" onClick={(e) => e.stopPropagation()}>
            <button className="pr-modal-close" onClick={() => setModal(null)} aria-label="Close">×</button>
            <h3 className="pr-modal-title">Request pricing — {active.title}</h3>
            <p className="pr-modal-sub">Share your details and we’ll email tailored pricing within one business day. No payment, no obligation.</p>
            <LeadForm
              source="pricing"
              interestOptions={INTEREST_OPTIONS}
              presetInterest={active.key}
              submitLabel="Request pricing →"
              successTitle="Request received."
              successMessage="Our team will email your tailored pricing within one business day."
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .pr { max-width:1100px; margin:0 auto; padding:2.5rem 1.5rem 5rem; }
        .pr-hero { text-align:center; max-width:680px; margin:0 auto 2.5rem; }
        .pr-badge { display:inline-block; padding:.35rem .9rem; border-radius:var(--radius-full); background:rgba(255, 96, 0,.1); color:var(--accent-light); border:1px solid rgba(255, 96, 0,.25); font-size:.74rem; font-weight:700; margin-bottom:1rem; }
        .pr-hero h1 { font-size:clamp(2rem,5vw,3rem); font-weight:800; margin:0 0 1rem; color:var(--white); }
        .accent { background:var(--gradient-accent); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .pr-hero p { color:var(--text-secondary); font-size:1.02rem; line-height:1.6; margin:0; }

        .pr-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.1rem; }
        @media (max-width:900px){ .pr-grid { grid-template-columns:repeat(2,1fr); } }
        @media (max-width:600px){ .pr-grid { grid-template-columns:1fr; } }
        .pr-card { position:relative; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:1.6rem 1.5rem; display:flex; flex-direction:column; gap:.6rem; transition:all .3s ease; }
        .pr-card:hover { border-color:rgba(255, 96, 0,.3); transform:translateY(-3px); box-shadow:var(--shadow-md); }
        .pr-card.featured { border-color:rgba(255, 96, 0,.35); }
        .pr-card-flag { position:absolute; top:-.6rem; right:1rem; background:var(--gradient-accent); color:#fff; font-size:.62rem; font-weight:800; letter-spacing:.04em; text-transform:uppercase; padding:.2rem .6rem; border-radius:var(--radius-full); }
        .pr-card-icon { font-size:1.9rem; }
        .pr-card h2 { font-size:1.15rem; font-weight:800; color:var(--white); margin:0; }
        .pr-card p { color:var(--text-secondary); font-size:.88rem; line-height:1.55; margin:0; flex:1; }
        .pr-card-btn { align-self:flex-start; margin-top:.4rem; background:var(--gradient-accent); color:#fff; border:none; border-radius:10px; padding:.65rem 1.2rem; font-size:.86rem; font-weight:700; cursor:pointer; font-family:inherit; transition:transform .15s ease; }
        .pr-card-btn:hover { transform:translateY(-1px); }

        .pr-scope { margin-top:2.5rem; }
        .pr-scope-inner { background:linear-gradient(135deg,rgba(255, 96, 0,.1),rgba(15,23,42,.6)); border:1px solid rgba(255, 96, 0,.3); border-radius:var(--radius-lg); padding:2rem 2.25rem; display:flex; align-items:center; justify-content:space-between; gap:1.5rem; flex-wrap:wrap; }
        .pr-scope h3 { font-size:1.25rem; font-weight:800; color:var(--white); margin:0 0 .5rem; }
        .pr-scope p { color:var(--text-secondary); font-size:.92rem; line-height:1.6; margin:0; max-width:560px; }
        .pr-scope-btn { white-space:nowrap; background:var(--bg-card); border:1px solid var(--accent); color:var(--accent-light); padding:.8rem 1.4rem; border-radius:10px; font-weight:700; text-decoration:none; font-size:.92rem; }
        .pr-scope-btn:hover { background:rgba(255, 96, 0,.1); }

        .pr-overlay { position:fixed; inset:0; background:rgba(2,6,23,.8); backdrop-filter:blur(4px); display:flex; align-items:center; justify-content:center; padding:1.5rem; z-index:1000; }
        .pr-modal { background:var(--bg-secondary); border:1px solid var(--border-hover); border-radius:var(--radius-lg); padding:2rem; max-width:560px; width:100%; max-height:90vh; overflow-y:auto; position:relative; }
        .pr-modal-close { position:absolute; top:1rem; right:1.1rem; background:none; border:none; color:var(--text-muted); font-size:1.6rem; line-height:1; cursor:pointer; }
        .pr-modal-close:hover { color:var(--white); }
        .pr-modal-title { font-size:1.3rem; font-weight:800; color:var(--white); margin:0 0 .4rem; padding-right:2rem; }
        .pr-modal-sub { color:var(--text-secondary); font-size:.9rem; line-height:1.55; margin:0 0 1.5rem; }
      `}</style>
    </>
  )
}
