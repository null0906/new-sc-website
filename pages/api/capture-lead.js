import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, company } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    await resend.emails.send({
      from: 'SecComply <onboarding@resend.dev>',
      to: [process.env.NOTIFICATION_EMAIL],
      subject: `New Lead: ${name} from ${company || 'Unknown Company'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
          <div style="background: #E8632B; padding: 16px 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Lead — SecComply Website</h2>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px; width: 120px;">Full Name</td>
                <td style="padding: 12px 0; color: #111827; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">Work Email</td>
                <td style="padding: 12px 0; color: #111827; font-weight: 600; font-size: 14px;"><a href="mailto:${email}" style="color: #E8632B;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">Phone</td>
                <td style="padding: 12px 0; color: #111827; font-weight: 600; font-size: 14px;">${phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">Company</td>
                <td style="padding: 12px 0; color: #111827; font-weight: 600; font-size: 14px;">${company || '—'}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 12px 16px; background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px;">
              <p style="margin: 0; color: #166534; font-size: 13px;">Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}