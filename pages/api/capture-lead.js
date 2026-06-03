import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const SOURCE_LABELS = {
  assessment: 'Free DPDP Assessment',
  pricing: 'Pricing Request',
  scope: 'Scope Questionnaire',
  scanner: 'DPDP Scanner',
  contact: 'Contact Form',
}

const esc = (v) =>
  String(v == null ? '' : v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

function row(label, value) {
  if (value == null || value === '') return ''
  return `<tr style="border-bottom:1px solid #f3f4f6;">
    <td style="padding:10px 0;color:#6b7280;font-size:13px;width:170px;vertical-align:top;">${esc(label)}</td>
    <td style="padding:10px 0;color:#111827;font-weight:600;font-size:13px;">${esc(value)}</td>
  </tr>`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const b = req.body || {}

  // Accept both the new rich payload and the legacy {name,email,phone,company} shape.
  const source = b.source || 'contact'
  const email = b.email
  const organisation = b.organisation || b.company || ''
  const contactName = b.contactName || b.name || ''
  const mobile = b.mobile || b.phone || ''

  if (!email) return res.status(400).json({ error: 'A work email is required.' })
  // The enquiry consent is mandatory under DPDP for any gated lead.
  if (b.consentEnquiry === false) {
    return res.status(400).json({ error: 'Enquiry consent is required to submit.' })
  }

  const sourceLabel = SOURCE_LABELS[source] || 'Website Lead'

  // Optional structured detail rows (assessment results, scope answers, etc.)
  const details = Array.isArray(b.details) ? b.details : []
  const detailRows = details
    .filter((d) => d && d.label)
    .map((d) => row(d.label, d.value))
    .join('')

  const consentLine = (label, given, ts) =>
    given == null
      ? ''
      : row(label, `${given ? '✓ Given' : '✗ Not given'}${ts ? ` (${ts})` : ''}`)

  const headline = esc(organisation || contactName || email)

  try {
    await resend.emails.send({
      from: 'SecComply <onboarding@resend.dev>',
      to: [process.env.NOTIFICATION_EMAIL],
      subject: `New ${sourceLabel}: ${organisation || contactName || email}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:8px;">
          <div style="background:#0081f2;padding:16px 24px;border-radius:8px 8px 0 0;">
            <h2 style="color:white;margin:0;font-size:20px;">${sourceLabel} — ${headline}</h2>
          </div>
          <div style="background:white;padding:24px;border-radius:0 0 8px 8px;border:1px solid #e5e7eb;">
            <table style="width:100%;border-collapse:collapse;">
              ${row('Lead source', sourceLabel)}
              ${row('Organisation', organisation)}
              ${row('Contact name', contactName)}
              ${row('Work email', email)}
              ${row('Mobile', mobile)}
              ${row('Employees', b.employees)}
              ${row('Interested in', b.interestedIn)}
              ${row('Heard about us', b.heardAbout)}
              ${consentLine('Consent — enquiry', b.consentEnquiry, b.consentTimestamp)}
              ${consentLine('Consent — marketing', b.consentMarketing, b.consentTimestamp)}
            </table>
            ${
              detailRows
                ? `<div style="margin-top:20px;">
                     <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#0081f2;text-transform:uppercase;letter-spacing:.05em;">Submitted details</p>
                     <table style="width:100%;border-collapse:collapse;">${detailRows}</table>
                   </div>`
                : ''
            }
            <div style="margin-top:24px;padding:12px 16px;background:#f0fdf4;border:1px solid #86efac;border-radius:6px;">
              <p style="margin:0;color:#166534;font-size:13px;">Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
            </div>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
