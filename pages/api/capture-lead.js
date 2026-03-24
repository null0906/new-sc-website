// pages/api/capture-lead.js
// Handles lead form submission → sends email notification only

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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
    await resend.emails.send({
      from: 'SecComply Leads <onboarding@resend.dev>',
      to: process.env.NOTIFICATION_EMAIL,
      subject: `🔔 New Lead — ${name} from ${company}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:560px;margin:0 auto;background:#020617;color:#c8d6e5;border-radius:16px;overflow:hidden;border:1px solid rgba(232,99,43,0.3)">
          
          <div style="background:linear-gradient(135deg,#E8632B,#d0521f);padding:28px 32px">
            <div style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.8);margin-bottom:6px">New Lead — SecComply</div>
            <div style="font-size:22px;font-weight:700;color:#fff">${name}</div>
            <div style="font-size:14px;color:rgba(255,255,255,0.75);margin-top:4px">${company}</div>
          </div>

          <div style="padding:28px 32px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:12px;color:#6a8aaa;width:140px">👤 Full Name</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;color:#fff;font-weight:500">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:12px;color:#6a8aaa">🏢 Company</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;color:#fff;font-weight:500">${company}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:12px;color:#6a8aaa">📧 Work Email</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;color:#fff;font-weight:500">${email}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:12px;color:#6a8aaa">📞 Phone</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;color:#fff;font-weight:500">${phone}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:12px;color:#6a8aaa">📥 Downloaded</td>
                <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:14px;color:#fff;font-weight:500">${resource}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;font-size:12px;color:#6a8aaa">🕐 Time (IST)</td>
                <td style="padding:12px 0;font-size:14px;color:#fff;font-weight:500">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'long', timeStyle: 'short' })}</td>
              </tr>
            </table>

            <div style="margin-top:24px;padding:16px 20px;background:rgba(232,99,43,0.08);border:1px solid rgba(232,99,43,0.25);border-radius:10px;font-size:13px;color:#c8d6e5">
              💡 <strong style="color:#E8632B">Reply directly</strong> to this email to follow up — it goes straight to ${email}
            </div>
          </div>

          <div style="padding:16px 32px;background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.06);font-size:11px;color:#6a8aaa;text-align:center">
            SecComply Lead Capture · seccomply.net
          </div>

        </div>
      `,
      replyTo: email,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Lead capture error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}