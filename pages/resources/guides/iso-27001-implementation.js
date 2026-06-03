import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useState } from 'react'

// ── Lead Capture Modal ──────────────────────────────────────────────────────
function LeadModal({ onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, resource: 'ISO 27001 Implementation Guide' }),
      })
      const data = await res.json()
      if (!res.ok) { setErrorMsg(data.error || 'Something went wrong.'); setStatus('error'); return }
      setStatus('success')
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.75)',zIndex:1000,backdropFilter:'blur(4px)'}}/>

      {/* Modal */}
      <div style={{position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%)',zIndex:1001,width:'100%',maxWidth:'480px',padding:'0 16px'}}>
        <div style={{background:'#0B1120',border:'1px solid rgba(0, 129, 242,0.3)',borderRadius:'20px',overflow:'hidden',boxShadow:'0 25px 60px rgba(0,0,0,0.6)'}}>

          {/* Header */}
          <div style={{background:'linear-gradient(135deg,#0081f2,#d0521f)',padding:'24px 28px',position:'relative'}}>
            <button onClick={onClose} style={{position:'absolute',top:'14px',right:'16px',background:'rgba(255,255,255,0.15)',border:'none',color:'#fff',width:'28px',height:'28px',borderRadius:'50%',cursor:'pointer',fontSize:'14px',display:'flex',alignItems:'center',justifyContent:'center'}}>✕</button>
            <div style={{fontSize:'11px',fontWeight:700,letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,0.75)',marginBottom:'4px'}}>Free Download</div>
            <div style={{fontSize:'18px',fontWeight:700,color:'#fff'}}>ISO 27001 Implementation Guide</div>
            <div style={{fontSize:'13px',color:'rgba(255,255,255,0.7)',marginTop:'4px'}}>Fill in your details to download instantly</div>
          </div>

          {/* Body */}
          <div style={{padding:'24px 28px'}}>
            {status === 'success' ? (
              <div style={{textAlign:'center',padding:'16px 0'}}>
                <div style={{fontSize:'3rem',marginBottom:'12px'}}>✅</div>
                <div style={{fontSize:'18px',fontWeight:700,color:'#fff',marginBottom:'8px'}}>You're all set!</div>
                <div style={{fontSize:'14px',color:'#6a8aaa',marginBottom:'24px'}}>Thanks {form.name.split(' ')[0]}. Your download is ready.</div>
                <a
                  href="/pdfs/SecComply_ISO_27001_Implementation.pdf"
                  download
                  style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'#0081f2',color:'#fff',padding:'12px 28px',borderRadius:'10px',fontWeight:700,fontSize:'15px',textDecoration:'none'}}
                >
                  ⬇️ Download PDF Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Rahul Sharma' },
                  { label: 'Work Email', name: 'email', type: 'email', placeholder: 'rahul@company.com' },
                  { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                  { label: 'Company Name', name: 'company', type: 'text', placeholder: 'Acme Technologies' },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name} style={{marginBottom:'14px'}}>
                    <label style={{display:'block',fontSize:'12px',fontWeight:600,color:'#c8d6e5',marginBottom:'5px'}}>
                      {label} <span style={{color:'#0081f2'}}>*</span>
                    </label>
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      value={form[name]}
                      onChange={handleChange}
                      required
                      style={{width:'100%',background:'#0F172A',border:'1.5px solid rgba(255,255,255,0.08)',borderRadius:'8px',padding:'10px 14px',fontSize:'14px',color:'#fff',fontFamily:'inherit',outline:'none',transition:'border-color .2s'}}
                      onFocus={e => e.target.style.borderColor='#0081f2'}
                      onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.08)'}
                    />
                  </div>
                ))}

                {status === 'error' && (
                  <div style={{background:'rgba(255,77,109,0.08)',border:'1px solid rgba(255,77,109,0.25)',borderRadius:'8px',padding:'10px 14px',fontSize:'13px',color:'#ff4d6d',marginBottom:'12px'}}>
                    ⚠️ {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  style={{width:'100%',background:'linear-gradient(135deg,#0081f2,#d0521f)',color:'#fff',border:'none',borderRadius:'10px',padding:'13px',fontSize:'15px',fontWeight:700,cursor:'pointer',fontFamily:'inherit',marginTop:'4px',display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',opacity:status==='submitting'?0.7:1}}
                >
                  {status === 'submitting' ? (
                    <><span style={{display:'inline-block',width:'16px',height:'16px',border:'2px solid rgba(255,255,255,0.4)',borderTopColor:'#fff',borderRadius:'50%',animation:'spin .7s linear infinite'}}/> Processing…</>
                  ) : '⬇️ Download Free Guide'}
                </button>

                <p style={{fontSize:'11px',color:'#6a8aaa',textAlign:'center',marginTop:'10px',lineHeight:1.5}}>
                  🔒 Your information is never shared or sold.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </>
  )
}

// ── Main Page ───────────────────────────────────────────────────────────────
export default function ISO27001Guide() {
  const [showModal, setShowModal] = useState(false)

  return (
    <Layout>
      <Head>
        <title>ISO 27001 Implementation Guide - SecComply</title>
        <meta name="description" content="Complete step-by-step guide to implementing ISO 27001 for startups and mid-sized companies." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>

      {/* Lead Capture Modal */}
      {showModal && <LeadModal onClose={() => setShowModal(false)} />}

      <article className="article-wrap">
        <Link href="/resources/guides" className="article-back">← Back to Guides</Link>
        <span className="article-tag">GUIDE</span>
        <h1>ISO 27001 Implementation Guide: From Zero to Certified</h1>
        <div className="article-meta">
          <span>📅 March 2025</span>
          <span>⏱️ 20 min read</span>
          <span>✍️ SecComply Team</span>
        </div>

        {/* Download Banner */}
        <div style={{
          background: 'rgba(0, 129, 242,0.08)',
          border: '1px solid rgba(0, 129, 242,0.25)',
          borderRadius: '12px',
          padding: '20px 24px',
          marginBottom: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <p style={{ color: '#fff', fontWeight: 600, margin: 0, fontSize: '0.95rem' }}>📄 Download the Full Guide</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', margin: '4px 0 0', fontSize: '0.82rem' }}>Get the complete ISO 27001 Implementation Guide as a PDF</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              background: '#0081f2',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.88rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontFamily: 'inherit'
            }}
          >
            ⬇ Download PDF
          </button>
        </div>

        <img
          className="article-hero-img"
          src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=400&fit=crop"
          alt="Information Security Management"
        />

        <div className="article-content">
          <p>
            <strong>ISO/IEC 27001:2022</strong> is the international gold standard for Information Security Management Systems (ISMS). For startups and mid-sized companies looking to build trust with global clients, ISO 27001 certification is often the first major compliance milestone. Based on SecComply's more than five years of experience as a trusted compliance partner, this guide walks you through every key milestone, challenge, and best practice of the implementation process.
          </p>

          <h2>What is ISO 27001?</h2>
          <p>
            ISO/IEC 27001:2022 is an international standard designed to help businesses create a robust ISMS — a systematic approach to managing sensitive company information so it remains secure. It encompasses people, processes, and IT systems by applying a risk management process to daily data management workflows.
          </p>
          <p>
            An ISMS is a top-down approach ensuring the company has a transparent policy on who can access what information and how they can use it. Its main goal is to ensure the <strong>CIA triad</strong> — Confidentiality, Integrity, and Availability — of mission-critical sensitive data, both during normal operations and under attack.
          </p>
          <p>
            As an internationally recognized standard, ISO 27001 is recognized in over 160 countries and serves as a strong foundation for other frameworks including SOC 2, GDPR, HIPAA, TISAX, and India's DPDP Act. Over 20,000 companies worldwide are already ISO/IEC 27001:2022 certified.
          </p>

          <h2>Key Benefits of ISO 27001 Implementation</h2>

          <h3>Enhanced Security</h3>
          <p>By establishing and maintaining an ISMS, your organization achieves continuous improvement in data protection — reducing the risk of security breaches and safeguarding business reputation.</p>

          <h3>Regulatory Compliance</h3>
          <p>ISO 27001 aligns well with GDPR, HIPAA, and other privacy laws. Achieving it puts you in a strong position to meet multiple regulatory requirements simultaneously.</p>

          <h3>Improved Risk Management</h3>
          <p>The standard's systematic approach to risk assessment helps businesses identify threats, prioritize security efforts, and make informed decisions that protect the organization from vulnerabilities.</p>

          <h3>Competitive Advantage</h3>
          <p>ISO 27001 certification is increasingly required as a prerequisite for enterprise contracts and government tenders. It reassures clients and partners of your commitment to security.</p>

          <h3>Cost Effectiveness</h3>
          <p>While implementation requires an initial investment, long-term savings from avoided breaches — including legal fees, fines, and reputation damage — are substantial.</p>

          <h2>ISO 27001:2013 vs 2022 — What Changed?</h2>
          <p>
            In February 2022, the standard was updated to ISO/IEC 27001:2022. If your organization was certified under the 2013 version, you must transition to 2022 by <strong>October 2025</strong> to maintain compliance. Key differences include:
          </p>
          <ul>
            <li>Only Annex A security controls were updated — the body of the standard remains the same</li>
            <li>Controls decreased from <strong>114 to 93</strong>, now grouped into <strong>4 sections</strong> instead of 14</li>
            <li>There are <strong>11 new controls</strong> and several controls were merged</li>
          </ul>
          <p>These changes make the standard more logical and better aligned with modern IT realities. Organizations on the 2013 version should begin the update process immediately.</p>

          <blockquote>
            If your company is still on ISO 27001:2013, the October 2025 deadline is fast approaching. Contact SecComply to get an update roadmap tailored to your organization.
          </blockquote>

          <h2>The PDCA Implementation Framework</h2>
          <p>
            ISO 27001 implementation follows the <strong>PDCA cycle</strong> (Plan-Do-Check-Act), an iterative management method for continuously improving processes. For ISO 27001, the ISMS runs in year-long PDCA cycles:
          </p>

          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>
              <thead>
                <tr style={{ background: 'rgba(0, 129, 242,0.15)' }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#0081f2', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Phase</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#0081f2', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>What Has to Be Done</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: '#0081f2', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { phase: 'Plan', tasks: 'Define ISMS objectives and goals, organise information security roles, implement risk management framework', time: '1-3 months' },
                  { phase: 'Do', tasks: 'Develop key policies (BYOD, HR, Physical Security, Encryption), implement Annex A controls, create periodic records', time: '3-6 months' },
                  { phase: 'Check', tasks: 'Conduct internal ISMS audit, perform monitoring, measurement, analysis, and evaluation', time: '1-2 months' },
                  { phase: 'Act', tasks: 'Fix issues and non-conformities identified during the internal audit', time: '1-2 months' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#fff' }}>{row.phase}</td>
                    <td style={{ padding: '12px 16px' }}>{row.tasks}</td>
                    <td style={{ padding: '12px 16px', whiteSpace: 'nowrap', color: '#0081f2', fontWeight: 600 }}>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>After successfully completing one full cycle, a company can apply for ISO 27001 certification. The initial cycle can be shortened to speed up the process — SecComply clients typically achieve certification in 90 days.</p>

          <h2>Phase 1: Scoping & Gap Assessment (Weeks 1-3)</h2>
          <p>The first phase involves understanding where you stand today. A thorough gap assessment compares your current security practices against ISO 27001's 93 controls (Annex A) and identifies the work needed to close each gap.</p>
          <ul>
            <li><strong>Define the ISMS scope</strong> — Determine which business units, locations, systems, and data flows are in scope</li>
            <li><strong>Conduct stakeholder interviews</strong> — Meet with engineering, HR, operations, and leadership</li>
            <li><strong>Map your current controls</strong> — Document existing security measures</li>
            <li><strong>Produce a gap report</strong> — A prioritized list of gaps with effort estimates and risk ratings</li>
          </ul>

          <blockquote>
            Most startups are surprised to find they already meet 30-40% of ISO 27001 requirements through existing practices like code reviews, access controls, and cloud provider security features.
          </blockquote>

          <h2>Phase 2: Risk Assessment & Treatment (Weeks 3-6)</h2>
          <p>ISO 27001 is fundamentally risk-based. You must identify information security risks, assess their likelihood and impact, and decide how to treat each one. This phase produces your risk register and risk treatment plan — two of the most critical documents for your audit.</p>
          <p>A good risk register captures the asset, threat, vulnerability, existing controls, likelihood, impact, and risk score for each identified risk. For a typical startup, expect 40-80 risks across categories like data breaches, unauthorized access, service disruption, vendor failures, and human error.</p>

          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=350&fit=crop" alt="Risk Assessment Dashboard"/>

          <h2>Phase 3: ISMS Documentation (Weeks 4-8)</h2>
          <p>Documentation is the backbone of your ISMS. Mandatory documents include:</p>
          <ul>
            <li><strong>Information Security Policy</strong> — Your top-level commitment to information security</li>
            <li><strong>Statement of Applicability (SoA)</strong> — Lists all 93 Annex A controls and whether each applies</li>
            <li><strong>Risk Assessment Methodology</strong> — How you identify and evaluate risks</li>
            <li><strong>Risk Treatment Plan</strong> — How you address each identified risk</li>
            <li><strong>Internal Audit Procedure</strong> — How you verify ISMS effectiveness</li>
            <li><strong>Management Review Procedure</strong> — How leadership oversees the ISMS</li>
          </ul>

          <h2>Phase 4: Implementation & Evidence Collection (Weeks 6-12)</h2>
          <p>Deploy or configure technical controls: MFA enforcement, endpoint protection, encryption at rest and in transit, logging and monitoring, vulnerability scanning, and backup procedures.</p>
          <p>Every employee must complete security awareness training covering phishing awareness, data handling, incident reporting, and acceptable use policies.</p>

          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=350&fit=crop" alt="Security Training"/>

          <h2>Phase 5: Internal Audit & Management Review (Weeks 10-13)</h2>
          <p>Before the certification audit, you must conduct at least one internal audit and one management review. The internal audit verifies your ISMS is operating as documented, while the management review ensures leadership is actively engaged.</p>

          <h2>Phase 6: Certification Audit (Weeks 13-16)</h2>
          <p>Certification involves an on-site assessment by a certification body. <strong>Stage 1</strong> is a documentation review; <strong>Stage 2</strong> verifies controls are working in practice. A successful audit results in a certificate valid for three years.</p>

          <blockquote>
            SecComply clients achieve certification in an average of 90 days — about 50% faster than the industry average — thanks to our automated gap assessment, pre-built document templates, and continuous evidence collection platform.
          </blockquote>

          <h2>Assembling the Right Team</h2>
          <ul>
            <li><strong>PM / IS Manager</strong> — Orchestrates the project, manages documentation, tracks status.</li>
            <li><strong>IT & System Administration</strong> — Lots of ISMS activities depend on IT; good cooperation is essential.</li>
            <li><strong>C-Level Support</strong> — Companywide decisions require executive buy-in and budget authority.</li>
            <li><strong>Department Heads</strong> — Engineering, HR, and operations all need to be onboard.</li>
            <li><strong>Expert ISO 27001 / Virtual CISO</strong> — External experts prevent costly mistakes and prepare you for the audit.</li>
            <li><strong>Internal Auditor</strong> — Needed for independent evaluation before the certification audit.</li>
          </ul>

          <h2>Expert Tips from SecComply</h2>
          <h3>Tip 1: Don't cut corners on critical controls</h3>
          <p>Risk management, BYOD & device policies, Access control, Physical security, Information classification, and Incident management are especially important for IT companies.</p>
          <h3>Tip 2: Keep documentation clear and concise</h3>
          <p>Create a distilled 1-2 page summary of key IS rules to help staff understand and follow the ISMS without being overwhelmed.</p>
          <h3>Tip 3: Make documents easy to find</h3>
          <p>Store key ISMS policies on corporate Google Drive or equivalent secure cloud storage.</p>
          <h3>Tip 4: Invest genuinely in staff training</h3>
          <p>Make training practical and meaningful — not just a checkbox exercise.</p>

          <h2>Cost & Timeline Summary</h2>
          <p>On average, expect ISO 27001 implementation to take <strong>6-12 months</strong>, though with expert guidance it can be done faster. For a company with 20-100 employees, budget approximately Rs. 3-8 lakhs for consulting support plus Rs. 2-5 lakhs for the certification audit.</p>

          <hr className="article-divider" />

          {/* Download CTA */}
          <div className="article-cta-box" style={{ marginBottom: '24px' }}>
            <h3>📄 Download the Full Guide</h3>
            <p>Get the complete ISO 27001 Implementation Guide as a PDF — including the PDCA timeline, team structure, and expert tips from SecComply's consultants.</p>
            <button
              onClick={() => setShowModal(true)}
              className="article-cta-btn"
              style={{ background: '#0081f2', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              ⬇ Download PDF Guide
            </button>
          </div>

          <div className="article-cta-box">
            <h3>Ready to start your ISO 27001 journey?</h3>
            <p>SecComply can get you from zero to certified in 90 days. Book a free consultation to get your gap assessment started.</p>
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="article-cta-btn">Book Free Consultation →</a>
          </div>
        </div>
      </article>
    </Layout>
  )
}