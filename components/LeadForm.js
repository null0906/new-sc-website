import { useState } from 'react'

// DPDP Rule 3 consent notice — shown on the contact form, scanner email and
// scope request. Reused across the funnel so the wording stays identical.
export const CONSENT_NOTICE =
  'Your name, work email, mobile number and organisation details are collected by SecComply Technologies under Section 6 (Consent) of the DPDP Act 2023, solely to respond to your enquiry, provide the assessment or pricing you requested, and connect you with our team. You can withdraw consent or exercise your rights to access, correct or erase this data at any time by writing to our DPO at dpo@seccomply.net. Concerns can be raised with the Data Protection Board of India.'

export const EMPLOYEE_BANDS = ['1–10', '11–50', '51–100', '101–250', '251–500', '500+']
export const INTERESTS = ['DPDP Sprint', 'SOC 2', 'ISO 27001', 'CISO-as-a-Service', 'Multiple']
export const HEARD_OPTIONS = ['Search engine', 'LinkedIn', 'Referral', 'Event / Webinar', 'News / Article', 'Other']

/**
 * Gated lead form per the DPDP Funnel PRD.
 * Props:
 *  - source: 'assessment' | 'pricing' | 'scope' (lead source tag)
 *  - presetInterest: preselect the "Interested in" value (pricing)
 *  - submitLabel: button text
 *  - onSuccess(payload): called after a successful submit. If provided, the form
 *    does NOT render its own success card (used to advance the assessment).
 *  - successTitle / successMessage: shown when onSuccess is NOT provided.
 *  - extraDetails: optional array of {label,value} appended to the lead email.
 */
export default function LeadForm({
  source = 'assessment',
  presetInterest = '',
  interestOptions = INTERESTS,
  submitLabel = 'Continue',
  onSuccess,
  successTitle = 'Thank you — we’ve received your details.',
  successMessage = 'Our team will email you within one business day.',
  extraDetails = [],
}) {
  const [form, setForm] = useState({
    organisation: '',
    employees: '',
    email: '',
    mobile: '',
    interestedIn: presetInterest || '',
    multiSelect: [], // services chosen when interestedIn === 'Multiple'
    heardAbout: '',
    consentEnquiry: false,
    consentMarketing: false,
  })
  const [status, setStatus] = useState('idle') // idle | submitting | done | error
  const [error, setError] = useState('')

  // Services shown as checkboxes under the "Multiple" choice (everything except
  // the "Multiple" entry itself). Always the full list, regardless of any preset.
  const multiChoices = interestOptions.filter((o) => o !== 'Multiple')

  // When a service is preset (e.g. the pricing modal opened for one service), the
  // dropdown only needs that service + "Multiple" — showing all 17 is overwhelming.
  // The full list still lives behind "Multiple" as checkboxes.
  const dropdownOptions =
    presetInterest && interestOptions.includes(presetInterest)
      ? [presetInterest, ...(interestOptions.includes('Multiple') ? ['Multiple'] : [])]
      : interestOptions

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [k]: v }))
  }

  // Switching the "Interested in" dropdown. When the user picks "Multiple" and
  // had a single service selected, seed the checkboxes with that service.
  const onInterestChange = (e) => {
    const v = e.target.value
    setForm((f) => {
      const next = { ...f, interestedIn: v }
      if (v === 'Multiple' && f.multiSelect.length === 0 && f.interestedIn && f.interestedIn !== 'Multiple') {
        next.multiSelect = [f.interestedIn]
      }
      return next
    })
  }

  const toggleMulti = (key) => () => {
    setForm((f) => ({
      ...f,
      multiSelect: f.multiSelect.includes(key)
        ? f.multiSelect.filter((k) => k !== key)
        : [...f.multiSelect, key],
    }))
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.organisation.trim()) return setError('Please enter your organisation name.')
    if (!form.employees) return setError('Please select your number of employees.')
    if (!emailValid) return setError('Please enter a valid work email.')
    if (!form.mobile.trim()) return setError('Please enter a mobile number.')
    if (!form.interestedIn) return setError('Please tell us what you’re interested in.')
    if (form.interestedIn === 'Multiple' && form.multiSelect.length < 2)
      return setError('Please select at least two services, or choose a single service above.')
    if (!form.consentEnquiry) return setError('Enquiry consent is required to continue.')

    // When "Multiple" is chosen, record the actual services picked.
    const interestedIn =
      form.interestedIn === 'Multiple'
        ? `Multiple: ${form.multiSelect.join(', ')}`
        : form.interestedIn

    setStatus('submitting')
    const payload = {
      source,
      organisation: form.organisation.trim(),
      employees: form.employees,
      email: form.email.trim(),
      mobile: form.mobile.trim(),
      interestedIn,
      heardAbout: form.heardAbout || undefined,
      consentEnquiry: form.consentEnquiry,
      consentMarketing: form.consentMarketing,
      consentTimestamp: new Date().toISOString(),
      details: extraDetails,
    }
    try {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('request failed')
      if (onSuccess) {
        onSuccess(payload)
      } else {
        setStatus('done')
      }
    } catch (err) {
      setStatus('error')
      setError('Something went wrong sending your details. Please try again.')
    }
  }

  if (status === 'done') {
    return (
      <div className="lf-success">
        <div className="lf-success-icon">✓</div>
        <h3>{successTitle}</h3>
        <p>{successMessage}</p>
        <style jsx>{lfStyles}</style>
      </div>
    )
  }

  return (
    <form className="lf" onSubmit={submit} noValidate>
      <div className="lf-grid">
        <label className="lf-field lf-col-2">
          <span>Organisation name <em>*</em></span>
          <input type="text" value={form.organisation} onChange={set('organisation')} placeholder="Acme Pvt. Ltd." />
        </label>

        <label className="lf-field">
          <span>Number of employees <em>*</em></span>
          <select value={form.employees} onChange={set('employees')}>
            <option value="">Select…</option>
            {EMPLOYEE_BANDS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>

        <label className="lf-field">
          <span>Interested in <em>*</em></span>
          <select value={form.interestedIn} onChange={onInterestChange}>
            <option value="">Select…</option>
            {dropdownOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>

        {form.interestedIn === 'Multiple' && (
          <div className="lf-field lf-col-2 lf-multi">
            <span>Select the services you’re interested in <em>*</em></span>
            <div className="lf-multi-grid">
              {multiChoices.map((o) => {
                const checked = form.multiSelect.includes(o)
                return (
                  <label key={o} className={`lf-multi-opt ${checked ? 'checked' : ''}`}>
                    <input type="checkbox" checked={checked} onChange={toggleMulti(o)} />
                    <span>{o}</span>
                  </label>
                )
              })}
            </div>
            <span className="lf-multi-hint">
              {form.multiSelect.length > 0
                ? `${form.multiSelect.length} selected`
                : 'Pick two or more.'}
            </span>
          </div>
        )}

        <label className="lf-field">
          <span>Work email <em>*</em></span>
          <input type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" />
        </label>

        <label className="lf-field">
          <span>Mobile number <em>*</em></span>
          <input type="tel" value={form.mobile} onChange={set('mobile')} placeholder="+91 98765 43210" />
        </label>

        <label className="lf-field lf-col-2">
          <span>How did you hear about us?</span>
          <select value={form.heardAbout} onChange={set('heardAbout')}>
            <option value="">Select… (optional)</option>
            {HEARD_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
      </div>

      <div className="lf-consent-notice">{CONSENT_NOTICE}</div>

      <label className="lf-check">
        <input type="checkbox" checked={form.consentEnquiry} onChange={set('consentEnquiry')} />
        <span>I consent to SecComply processing my details to respond to this enquiry. <em>*</em></span>
      </label>
      <label className="lf-check">
        <input type="checkbox" checked={form.consentMarketing} onChange={set('consentMarketing')} />
        <span>I’d like to receive service offers, product updates and marketing. (optional)</span>
      </label>

      {error && <p className="lf-error">{error}</p>}

      <button type="submit" className="lf-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting…' : submitLabel}
      </button>
      <p className="lf-fineprint">
        See our <a href="/privacy-policy">Privacy Notice</a>. Required fields marked <em>*</em>.
      </p>

      <style jsx>{lfStyles}</style>
    </form>
  )
}

const lfStyles = `
  .lf { display:flex; flex-direction:column; gap:1rem; }
  .lf-grid { display:grid; grid-template-columns:1fr 1fr; gap:.9rem; }
  .lf-col-2 { grid-column:1 / -1; }
  @media (max-width:560px){ .lf-grid { grid-template-columns:1fr; } }
  .lf-field { display:flex; flex-direction:column; gap:.35rem; }
  .lf-field span { font-size:.8rem; font-weight:600; color:var(--text-secondary,#94A3B8); }
  .lf-field em { color:var(--accent,#E8632B); font-style:normal; }
  .lf-field input, .lf-field select {
    background:var(--bg-primary,#020617);
    border:1px solid var(--border-hover,rgba(255,255,255,.12));
    border-radius:10px;
    padding:.7rem .85rem;
    color:var(--white,#F8FAFC);
    font-size:.92rem;
    font-family:inherit;
    outline:none;
    transition:border-color .2s ease;
  }
  .lf-field input:focus, .lf-field select:focus { border-color:var(--accent,#E8632B); }
  .lf-multi { gap:.5rem; }
  .lf-multi-grid { display:grid; grid-template-columns:1fr 1fr; gap:.5rem; }
  @media (max-width:560px){ .lf-multi-grid { grid-template-columns:1fr; } }
  .lf-multi-opt {
    display:flex; align-items:center; gap:.55rem;
    font-size:.85rem; color:var(--text-secondary,#94A3B8);
    background:var(--bg-primary,#020617);
    border:1px solid var(--border-hover,rgba(255,255,255,.12));
    border-radius:10px; padding:.55rem .7rem; cursor:pointer;
    transition:border-color .2s ease, background .2s ease, color .2s ease;
  }
  .lf-multi-opt:hover { border-color:var(--accent,#E8632B); }
  .lf-multi-opt.checked { border-color:var(--accent,#E8632B); background:rgba(232,99,43,.08); color:var(--white,#F8FAFC); }
  .lf-multi-opt input { width:16px; height:16px; accent-color:var(--accent,#E8632B); flex-shrink:0; cursor:pointer; }
  .lf-multi-hint { font-size:.74rem; color:var(--text-muted,#64748B); }
  .lf-consent-notice {
    font-size:.74rem; line-height:1.55; color:var(--text-muted,#64748B);
    background:rgba(255,255,255,.03); border:1px solid var(--border,rgba(255,255,255,.06));
    border-radius:10px; padding:.85rem 1rem;
  }
  .lf-check { display:flex; align-items:flex-start; gap:.6rem; font-size:.84rem; color:var(--text-secondary,#94A3B8); line-height:1.45; cursor:pointer; }
  .lf-check input { margin-top:2px; width:16px; height:16px; accent-color:var(--accent,#E8632B); flex-shrink:0; }
  .lf-check em { color:var(--accent,#E8632B); font-style:normal; }
  .lf-error { color:var(--red,#EF4444); font-size:.85rem; margin:0; }
  .lf-submit {
    background:var(--gradient-accent,linear-gradient(135deg,#E8632B,#FF8A50));
    color:#fff; border:none; border-radius:10px; padding:.9rem 1.4rem;
    font-size:.95rem; font-weight:700; cursor:pointer; font-family:inherit;
    transition:transform .15s ease, box-shadow .2s ease;
  }
  .lf-submit:hover:not(:disabled){ transform:translateY(-1px); box-shadow:0 8px 24px rgba(232,99,43,.3); }
  .lf-submit:disabled { opacity:.6; cursor:not-allowed; }
  .lf-fineprint { font-size:.74rem; color:var(--text-muted,#64748B); margin:0; text-align:center; }
  .lf-fineprint a { color:var(--accent,#E8632B); }
  .lf-success { text-align:center; padding:2rem 1rem; }
  .lf-success-icon {
    width:56px; height:56px; border-radius:50%; margin:0 auto 1rem;
    background:var(--green-dim,rgba(16,185,129,.15)); color:var(--green,#10B981);
    display:flex; align-items:center; justify-content:center; font-size:1.8rem; font-weight:800;
  }
  .lf-success h3 { margin:0 0 .5rem; color:var(--white,#F8FAFC); font-size:1.25rem; }
  .lf-success p { margin:0; color:var(--text-secondary,#94A3B8); font-size:.95rem; }
`
