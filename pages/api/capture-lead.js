// pages/api/capture-lead.js
// Handles lead form submission → saves to Google Sheets + sends email notification

import { google } from 'googleapis'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// ── Google Sheets auth ──────────────────────────────────────────────────────
function getGoogleAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
}

// ── Append row to Google Sheet ──────────────────────────────────────────────
async function appendToSheet(data) {
  const auth = getGoogleAuth()
  const sheets = google.sheets({ version: 'v4', auth })

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Leads!A:F',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        timestamp,
        data.name,
        data.email,
        data.phone,
        data.company,
        data.resource,
      ]],
    },
  })
}

// ── Send email notification ─────────────────────────────────────────────────
async function sendNotificationEmail(data) {
  await resend.emails.send({
    from: 'SecComply Leads <onboarding@resend.dev>',
    to: process.env.NOTIFICATION_EMAIL,
    subject: `🔔 New Lead — ${data.name} from ${data.company}`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;background:#020617;color:#c8d6e5;border-radius:16px;overflow:hidden;border:1px solid rgba(232,99,43,0.3)">
        
        <div style="background:linear-gradient(135deg,#E8632B,#d0521f);padding:28px 32px">
          <div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.8);margin-bottom:6px">New Lead — SecComply</div>
          <div style="font-size:22px;font-weight:700;color:#fff">${data.name}</div>
          <div style="font-size:14px;color:rgba(255,255,255,0.75);margin-top:4px">${data.company}</div>
        </div>

        <div style="padding:28px 32px">
          
          <table style="width:100%;border-collapse:collapse">
            ${[
              ['👤 Full Name',      data.name],
              ['🏢 Company',        data.company],
              ['📧 Work Email',     data.email],
              ['📞 Phone',          data.phone],
              ['📥 Downloaded',     data.resource],
              ['🕐 Time (IST)',     new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'long', timeStyle: 'short' })],
            ].map(([label, value]) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:12px;color:#6a8aaa;width:130px;vertical-align:top;padding-top:12px">${label}</td>
                <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;color:#fff;font-weight:500;padding-top:12px">${value}</td>
              </tr>
            `).join('')}
          </table>

          <div style="margin-top:24px;padding:16px 20px;background:rgba(232,99,43,0.08);border:1px solid rgba(232,99,43,0.25);border-radius:10px;font-size:13px;color:#c8d6e5">
            💡 <strong style="color:#E8632B">Reply directly</strong> to this email to follow up — it goes to ${data.email}
          </div>

        </div>

        <div style="padding:16px 32px;background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.06);font-size:11px;color:#6a8aaa;text-align:center">
          SecComply Lead Capture · seccomply.net · This lead has been saved to your Google Sheet
        </div>

      </div>
    `,
    replyTo: data.email,
  })
}

// ── Main handler ────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, company, resource } = req.body

  // Basic validation
  if (!name || !email || !phone || !company || !resource) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  try {
    // Run both in parallel for speed
    await Promise.all([
      appendToSheet({ name, email, phone, company, resource }),
      sendNotificationEmail({ name, email, phone, company, resource }),
    ])

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Lead capture error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}
