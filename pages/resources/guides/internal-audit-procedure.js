import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function InternalAudit() {
  return (
    <Layout>
      <Head>
        <title>Internal Audit Procedure Guide - SecComply</title>
        <meta name="description" content="A structured guide to conducting effective internal audits for ISO 27001 and SOC 2 compliance programs." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>

      <article className="article-wrap">
        <Link href="/resources/guides" className="article-back">← Back to Guides</Link>
        <span className="article-tag">GUIDE</span>
        <h1>Internal Audit Procedure: A Complete Guide for ISMS & SOC 2</h1>
        <div className="article-meta">
          <span>📅 March 2025</span>
          <span>⏱️ 18 min read</span>
          <span>✍️ SecComply Team</span>
        </div>

        <img
          className="article-hero-img"
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop"
          alt="Internal Audit Process"
        />

        <div className="article-content">
          <p>
            An effective internal audit program is one of the most critical — and most underestimated — components of a mature compliance program. This guide establishes a structured, risk-based approach for conducting internal audits of an Information Security Management System (ISMS) and associated operational, technical, and compliance controls, aligned with <strong>ISO/IEC 27001:2022 Clause 9.2</strong> and <strong>SOC 2 Trust Services Criteria</strong>.
          </p>

          <h2>Purpose of Internal Audits</h2>
          <p>Internal audits are designed to:</p>
          <ul>
            <li>Verify the effectiveness of controls implemented as part of your ISMS and SOC 2 compliance programs</li>
            <li>Ensure ongoing conformity with ISO/IEC 27001:2022 and SOC 2 requirements</li>
            <li>Identify nonconformities, control weaknesses, and improvement opportunities before external audits</li>
            <li>Provide senior management with objective assurance regarding the performance and maturity of the security program</li>
          </ul>

          <h2>Scope of the Audit Programme</h2>
          <p>The internal audit programme should cover all relevant functions and domains, including:</p>
          <ul>
            <li>Information security policies and controls</li>
            <li>IT operations and infrastructure management</li>
            <li>Asset and access management</li>
            <li>Risk management and vulnerability handling</li>
            <li>Incident management and business continuity</li>
            <li>Vendor and third-party risk management</li>
            <li>Privacy and data protection practices</li>
            <li>Human resources and onboarding/offboarding</li>
            <li>Physical and environmental security controls</li>
          </ul>

          <h2>Key Roles and Responsibilities</h2>

          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
              <thead>
                <tr style={{ background: 'rgba(232,99,43,0.15)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#e8632b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)', minWidth: '160px' }}>Role</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#e8632b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Key Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['CISO', 'Owns the audit programme, reviews high-risk findings, reports outcomes to senior management'],
                  ['Audit Lead', 'Plans and coordinates audits, ensures impartiality, reviews reports and follow-up activities'],
                  ['Internal Auditor', 'Conducts audits objectively, collects evidence, identifies nonconformities, prepares reports'],
                  ['Auditee (Process Owner)', 'Cooperates fully, provides access to evidence, addresses nonconformities through corrective actions'],
                  ['Risk & Compliance Team', 'Maintains audit calendar, nonconformity register, and corrective action tracker'],
                  ['Executive Management', 'Reviews critical findings, approves corrective action plans, drives accountability'],
                ].map(([role, resp], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#fff' }}>{role}</td>
                    <td style={{ padding: '12px 16px' }}>{resp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Core Audit Principles</h2>
          <ul>
            <li><strong>Objectivity</strong> — Findings must be based on facts, not assumptions</li>
            <li><strong>Evidence-based approach</strong> — All findings supported by verifiable, sufficient audit evidence</li>
            <li><strong>Independence</strong> — Auditors must not audit their own work or areas of direct responsibility</li>
            <li><strong>Risk orientation</strong> — Audit focus prioritized based on process criticality, control maturity, and past incidents</li>
            <li><strong>Confidentiality</strong> — All audit data and findings handled confidentially</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=350&fit=crop"
            alt="Audit Process"
          />

          <h2>Audit Planning</h2>
          <p>
            An annual Internal Audit Programme should be developed and approved by the CISO or ISMS Steering Committee. Audit frequency and coverage should be determined based on business criticality, regulatory obligations (ISO 27001, SOC 2, DPDP Act), results from past audits, and known or emerging risks. High-risk or high-impact areas may be audited more frequently. No control or process within the ISMS scope should remain unaudited for more than 12 months.
          </p>
          <p>Ad-hoc audits may also be initiated in response to major security incidents, whistleblower complaints, regulatory inquiries, or significant organizational changes.</p>

          <h2>Types of Audits</h2>
          <ul>
            <li><strong>Process Audits</strong> — Evaluate control implementation in a specific department or process</li>
            <li><strong>Thematic Audits</strong> — Focus on specific control domains (e.g., access control, patch management)</li>
            <li><strong>Compliance Audits</strong> — Assess conformance with ISO 27001, SOC 2, or DPDP</li>
            <li><strong>Technical Audits</strong> — Review systems and configurations against hardening standards</li>
            <li><strong>Follow-up Audits</strong> — Re-assess closure of previous findings or corrective actions</li>
          </ul>

          <h2>Audit Execution</h2>
          <p>Auditors use a combination of methods to gather sufficient evidence:</p>
          <ul>
            <li><strong>Interviews</strong> — Discussions with personnel responsible for controls</li>
            <li><strong>Documentation review</strong> — Evaluation of policies, procedures, and logs</li>
            <li><strong>Observation</strong> — On-site or virtual observation of processes in action</li>
            <li><strong>Sampling</strong> — Review of representative transactions, logs, or records</li>
            <li><strong>Technical validation</strong> — Direct verification of access controls, system settings, and configurations</li>
          </ul>

          <h2>Nonconformity Classification</h2>

          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
              <thead>
                <tr style={{ background: 'rgba(232,99,43,0.15)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#e8632b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Classification</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#e8632b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Definition</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#e8632b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Examples</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Major Nonconformity', 'Complete or systemic failure to meet a control requirement, exposing the organization to significant risk', 'Missing access reviews, no documented risk assessment, repeated unresolved findings'],
                  ['Minor Nonconformity', 'Partial or isolated lapse that does not pose immediate high risk', 'Outdated procedure with minor deviation, delayed logging of backup verification'],
                  ['Observation / OFI', 'Noted weakness or inefficiency that may impact long-term performance or audit readiness', 'Inconsistent ticket tagging, no periodic review tracker for awareness training'],
                ].map(([cls, def, ex], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#fff' }}>{cls}</td>
                    <td style={{ padding: '12px 16px' }}>{def}</td>
                    <td style={{ padding: '12px 16px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Corrective Action & Follow-Up</h2>
          <p>
            For each Major or Minor nonconformity, the assigned process owner must develop a <strong>Corrective Action Plan (CAP)</strong> within 10 business days of the audit report. The CAP must include the corrective action to be taken, the responsible person, a target date, and supporting evidence required for closure. Overdue CAPs should be escalated based on how long they've been outstanding.
          </p>

          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
              <thead>
                <tr style={{ background: 'rgba(232,99,43,0.15)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#e8632b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Overdue Duration</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#e8632b', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Escalation Level</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['0–15 Days', 'ISMS Manager / Risk & Compliance'],
                  ['16–30 Days', 'CISO / Department Head'],
                  ['>30 Days or Repeat Delay', 'Executive Sponsor / Risk Committee'],
                ].map(([days, level], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '12px 16px', color: '#fff', fontWeight: 600 }}>{days}</td>
                    <td style={{ padding: '12px 16px' }}>{level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Audit Records & Retention</h2>
          <p>
            All audit records — including audit programmes, plans, checklists, evidence, reports, CAPs, and follow-up documentation — must be retained securely for a minimum of <strong>five years</strong>, or longer if required by regulatory or contractual obligations. Records must be stored in a secure, access-controlled repository and must not be altered post-factum except to correct clerical errors with a documented change log.
          </p>

          <blockquote>
            An internal audit is only as valuable as the corrective actions it drives. Treat findings as opportunities to strengthen your security posture — not just compliance checkboxes.
          </blockquote>

          <hr className="article-divider" />

          <div className="article-cta-box">
            <h3>Need help structuring your internal audit programme?</h3>
            <p>SecComply helps organizations design and execute risk-based internal audit programmes aligned with ISO 27001 and SOC 2 requirements.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="article-cta-btn">Book Free Consultation →</a>
          </div>
        </div>
      </article>
    </Layout>
  )
}