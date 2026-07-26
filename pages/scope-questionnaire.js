import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { CONSENT_NOTICE } from '../components/LeadForm'

const TRISTATE = ['Yes', 'No', 'Unsure']

const FIELDS = [
  { key: 'context', label: 'Organisation context', hint: 'What does your organisation do, and roughly how many people / customers?', type: 'textarea' },
  { key: 'purposes', label: 'Processing purposes', hint: 'Why do you collect and use personal data? (e.g. onboarding, payments, support, marketing)', type: 'textarea' },
  { key: 'inventory', label: 'Data inventory scope', hint: 'What categories of personal data do you hold? (e.g. names, contact, KYC, health, payment)', type: 'textarea' },
  { key: 'systems', label: 'Systems', hint: 'Where does that data live? (apps, databases, cloud providers, SaaS tools)', type: 'textarea' },
  { key: 'processors', label: 'Processors / vendors', hint: 'Which third parties process data on your behalf?', type: 'textarea' },
  { key: 'crossBorder', label: 'Cross-border transfers', hint: 'Do you store or transfer personal data outside India?', type: 'tristate' },
  { key: 'sdf', label: 'Significant Data Fiduciary (SDF) status', hint: 'Do you believe you may be notified as an SDF (large-scale / sensitive processing)?', type: 'tristate' },
  { key: 'children', label: "Children's data", hint: 'Do you process the personal data of anyone under 18?', type: 'tristate' },
]

export default function ScopeQuestionnaire() {
  const [form, setForm] = useState({
    organisation: '', email: '', mobile: '',
    context: '', purposes: '', inventory: '', systems: '', processors: '',
    crossBorder: '', sdf: '', children: '', consentEnquiry: false,
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [k]: v }))
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.organisation.trim()) return setError('Please enter your organisation name.')
    if (!emailValid) return setError('Please enter a valid work email.')
    if (!form.consentEnquiry) return setError('Enquiry consent is required to submit.')

    setStatus('submitting')
    const details = FIELDS.map((f) => ({ label: f.label, value: form[f.key] }))
    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'scope',
          organisation: form.organisation.trim(),
          email: form.email.trim(),
          mobile: form.mobile.trim() || undefined,
          consentEnquiry: true,
          consentTimestamp: new Date().toISOString(),
          details,
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('done')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setStatus('error')
      setError('Something went wrong sending your questionnaire. Please try again.')
    }
  }

  return (
    <>
      <Head>
        <title>Scope Questionnaire | SecComply</title>
        <meta name="description" content="Complete SecComply's DPDP scope questionnaire — processing purposes, data inventory, processors, cross-border transfers and SDF status. We review it and book a call to confirm scope." />
        <link rel="canonical" href="https://seccomply.net/scope-questionnaire" />
      </Head>

      <main className="sq">
        <Link href="/pricing" className="sq-back">← Back to Pricing</Link>

        {status === 'done' ? (
          <div className="sq-done">
            <div className="sq-done-icon">✓</div>
            <h1>Thank you — your questionnaire is in.</h1>
            <p>Our team will review your scope and email you within one business day to book a call.</p>
            <Link href="/resources/assessments" className="sq-done-link">Back to Assessments →</Link>
          </div>
        ) : (
          <>
            <header className="sq-head">
              <span className="sq-badge">📋 Scope Questionnaire</span>
              <h1>Tell us about your <span className="accent">processing</span></h1>
              <p>This helps us scope a paid engagement accurately before quoting. It takes about 10 minutes — rough answers are fine, we’ll refine them on a call.</p>
            </header>

            <form className="sq-form" onSubmit={submit} noValidate>
              <div className="sq-row2">
                <label className="sq-field">
                  <span>Organisation name <em>*</em></span>
                  <input type="text" value={form.organisation} onChange={set('organisation')} placeholder="Acme Pvt. Ltd." />
                </label>
                <label className="sq-field">
                  <span>Work email <em>*</em></span>
                  <input type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" />
                </label>
              </div>
              <label className="sq-field">
                <span>Mobile number</span>
                <input type="tel" value={form.mobile} onChange={set('mobile')} placeholder="+91 98765 43210" />
              </label>

              {FIELDS.map((f) => (
                <label key={f.key} className="sq-field">
                  <span>{f.label}</span>
                  <small>{f.hint}</small>
                  {f.type === 'textarea' ? (
                    <textarea rows={3} value={form[f.key]} onChange={set(f.key)} />
                  ) : (
                    <div className="sq-tristate">
                      {TRISTATE.map((opt) => (
                        <button
                          type="button" key={opt}
                          className={`sq-tri ${form[f.key] === opt ? 'sel' : ''}`}
                          onClick={() => setForm((s) => ({ ...s, [f.key]: opt }))}
                        >{opt}</button>
                      ))}
                    </div>
                  )}
                </label>
              ))}

              <div className="sq-consent-notice">{CONSENT_NOTICE}</div>
              <label className="sq-check">
                <input type="checkbox" checked={form.consentEnquiry} onChange={set('consentEnquiry')} />
                <span>I consent to SecComply processing these details to scope my enquiry. <em>*</em></span>
              </label>

              {error && <p className="sq-error">{error}</p>}
              <button type="submit" className="sq-submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Submit questionnaire →'}
              </button>
              <p className="sq-fineprint">See our <a href="/privacy-policy">Privacy Notice</a>. Required fields marked <em>*</em>.</p>
            </form>
          </>
        )}
      </main>

      <style jsx>{`
        .sq { max-width:760px; margin:0 auto; padding:2rem 1.5rem 5rem; }
        .sq-back { display:inline-block; color:var(--text-muted); font-size:.9rem; text-decoration:none; margin-bottom:1.5rem; }
        .sq-back:hover { color:var(--accent); }
        .sq-head { text-align:center; margin-bottom:2.25rem; }
        .sq-badge { display:inline-block; padding:.35rem .9rem; border-radius:var(--radius-full); background:rgb(var(--accent-rgb) / .1); color:var(--accent-light); border:1px solid rgb(var(--accent-rgb) / .25); font-size:.74rem; font-weight:700; margin-bottom:1rem; }
        .sq-head h1 { font-size:clamp(1.9rem,5vw,2.7rem); font-weight:800; color:var(--white); margin:0 0 .75rem; }
        .accent { background:var(--gradient-accent); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .sq-head p { color:var(--text-secondary); font-size:1rem; line-height:1.6; max-width:560px; margin:0 auto; }

        .sq-form { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:2rem; display:flex; flex-direction:column; gap:1.1rem; }
        .sq-row2 { display:grid; grid-template-columns:1fr 1fr; gap:1.1rem; }
        @media (max-width:560px){ .sq-row2 { grid-template-columns:1fr; } }
        .sq-field { display:flex; flex-direction:column; gap:.35rem; }
        .sq-field > span { font-size:.85rem; font-weight:600; color:var(--white); }
        .sq-field em { color:var(--accent); font-style:normal; }
        .sq-field small { font-size:.76rem; color:var(--text-muted); line-height:1.45; margin-bottom:.15rem; }
        .sq-field input, .sq-field textarea {
          background:var(--bg-primary); border:1px solid var(--border-hover); border-radius:10px;
          padding:.7rem .85rem; color:var(--white); font-size:.92rem; font-family:inherit; outline:none; resize:vertical;
        }
        .sq-field input:focus, .sq-field textarea:focus { border-color:var(--accent); }
        .sq-tristate { display:flex; gap:.5rem; }
        .sq-tri { flex:1; padding:.6rem; background:var(--bg-primary); border:1px solid var(--border-hover); border-radius:8px; color:var(--text-secondary); font-size:.88rem; cursor:pointer; font-family:inherit; transition:all .15s ease; }
        .sq-tri:hover { border-color:var(--accent); }
        .sq-tri.sel { background:rgb(var(--accent-rgb) / .12); border-color:var(--accent); color:var(--white); font-weight:600; }
        .sq-consent-notice { font-size:.74rem; line-height:1.55; color:var(--text-muted); background:rgb(var(--p-white-rgb) / .03); border:1px solid var(--border); border-radius:10px; padding:.85rem 1rem; }
        .sq-check { display:flex; align-items:flex-start; gap:.6rem; font-size:.84rem; color:var(--text-secondary); line-height:1.45; cursor:pointer; }
        .sq-check input { margin-top:2px; width:16px; height:16px; accent-color:var(--accent); flex-shrink:0; }
        .sq-check em { color:var(--accent); font-style:normal; }
        .sq-error { color:var(--red); font-size:.85rem; margin:0; }
        .sq-submit { background:var(--gradient-accent); color:#fff; border:none; border-radius:10px; padding:.9rem 1.4rem; font-size:.95rem; font-weight:700; cursor:pointer; font-family:inherit; }
        .sq-submit:disabled { opacity:.6; cursor:not-allowed; }
        .sq-fineprint { font-size:.74rem; color:var(--text-muted); margin:0; text-align:center; }
        .sq-fineprint a, .sq-fineprint em { color:var(--accent); font-style:normal; }

        .sq-done { text-align:center; padding:4rem 1rem; }
        .sq-done-icon { width:64px; height:64px; border-radius:50%; margin:0 auto 1.25rem; background:var(--green-dim); color:var(--green); display:flex; align-items:center; justify-content:center; font-size:2rem; font-weight:800; }
        .sq-done h1 { font-size:1.6rem; color:var(--white); margin:0 0 .75rem; }
        .sq-done p { color:var(--text-secondary); margin:0 0 1.5rem; }
        .sq-done-link { color:var(--accent); font-weight:700; text-decoration:none; }
      `}</style>
    </>
  )
}
