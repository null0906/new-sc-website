import { Resend } from 'resend'

// ── Heuristic DPDP scanner ───────────────────────────────────────────────
// Fetches the target URL server-side and detects six DPDP signals plus a set
// of bonus flags from the raw HTML. This is automated / heuristic / indicative
// — NOT a legal audit. It cannot see JS-rendered SPA content or pages behind a
// login, and link detection is presence-based (it does not crawl sub-pages).

const SIGNALS = [
  {
    key: 'consent',
    label: 'Consent banner / CMP',
    points: 25,
    fix: 'Deploy a consent banner (CMP) that blocks non-essential cookies until the visitor opts in — e.g. your existing sc_consent CMP, OneTrust or CookieYes.',
    test: (html) =>
      /sc_consent|onetrust|optanon|cookieyes|cookie-?bot|cookieconsent|cookie-consent|cookie-banner|cookie-notice|osano|termly|iubenda|_iub|quantcast|trustarc|truste|usercentrics|didomi|klaro|tarteaucitron|cookiehub|gdpr[-_]?cookie/i.test(html),
  },
  {
    key: 'privacy',
    label: 'Privacy policy',
    points: 20,
    fix: 'Publish a privacy notice covering purpose, consent withdrawal, data principal rights and how to complain to the Board, and link it from every page.',
    test: (html) =>
      /href\s*=\s*["'][^"']*privacy[^"']*["']/i.test(html) ||
      />[^<]*privacy\s*(policy|notice)[^<]*</i.test(html),
  },
  {
    key: 'cookie',
    label: 'Cookie policy',
    points: 15,
    fix: 'Add a dedicated cookie policy page listing the cookies you set, their purpose and retention, and link to it from the consent banner.',
    test: (html) =>
      /href\s*=\s*["'][^"']*cookie[^"']*["']/i.test(html) ||
      />[^<]*cookie\s*(policy|notice)[^<]*</i.test(html),
  },
  {
    key: 'grievance',
    label: 'Grievance redressal',
    points: 20,
    fix: 'Name a grievance officer and publish a complaint route (Sec 13) with contact details and a response timeline.',
    test: (html) => /grievance|redressal/i.test(html),
  },
  {
    key: 'rights',
    label: 'Data principal rights',
    points: 10,
    fix: 'Document and link a route for data principals to access, correct and erase their data (Sec 11–12).',
    test: (html) =>
      /data\s*principal\s*rights|data\s*subject\s*rights/i.test(html) ||
      /right[s]?\s*to\s*(access|correct|rectif|erase|erasure|delete)/i.test(html) ||
      /access[,\s]+correct(ion)?[,\s]+(and\s+)?(eras|delet)/i.test(html),
  },
  {
    key: 'dpo',
    label: 'Data Protection Officer',
    points: 10,
    fix: 'Publish a named Data Protection Officer (role + email, e.g. dpo@yourdomain) so data principals can reach you.',
    test: (html) => /data\s*protection\s*officer/i.test(html) || /dpo@|\bdpo\b/i.test(html),
  },
]

const BONUS = [
  { key: 'ageGate', label: 'Age gate', test: (h) => /age\s*(gate|verification|verify)|are you (over|18)|18\+|over 18|minimum age/i.test(h) },
  { key: 'multiLang', label: 'Multi-language notice', test: (h) => /hreflang\s*=/i.test(h) || /(lang|language)[-_]?(switch|selector|picker)/i.test(h) },
  { key: 'formConsent', label: 'Contact-form consent', test: (h) => /<form[\s>]/i.test(h) && /consent|i agree|agree to (the|our)/i.test(h) },
  { key: 'trackers', label: 'Third-party trackers', test: (h) => /google-analytics|googletagmanager|gtag\(|fbq\(|fbevents|hotjar|mixpanel|cdn\.segment|clarity\.ms/i.test(h) },
  { key: 'children', label: "Children's consent", test: (h) => /parental consent|guardian consent|children'?s?\s*(data|consent)|under (the age of )?18/i.test(h) },
]

function bandFor(score) {
  if (score <= 40) return { band: 'High Risk', tone: 'red' }
  if (score <= 70) return { band: 'Developing', tone: 'amber' }
  return { band: 'Mature', tone: 'green' }
}

function normalizeUrl(raw) {
  let u = (raw || '').trim()
  if (!u) return null
  if (!/^https?:\/\//i.test(u)) u = 'https://' + u
  try {
    const parsed = new URL(u)
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null
    return parsed.toString()
  } catch {
    return null
  }
}

async function fetchHtml(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 15000)
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; SecComplyDPDPScanner/1.0; +https://seccomply.net/resources/assessments/scanner)',
        Accept: 'text/html,application/xhtml+xml',
      },
    })
    if (!res.ok) return { ok: false, status: res.status }
    // Cap the body we read so a huge page can't exhaust memory.
    const reader = res.body?.getReader?.()
    if (!reader) {
      const text = await res.text()
      return { ok: true, html: text.slice(0, 3_000_000), finalUrl: res.url }
    }
    const decoder = new TextDecoder()
    let html = ''
    while (html.length < 3_000_000) {
      const { done, value } = await reader.read()
      if (done) break
      html += decoder.decode(value, { stream: true })
    }
    return { ok: true, html, finalUrl: res.url }
  } catch (e) {
    return { ok: false, error: e.name === 'AbortError' ? 'timeout' : 'fetch_failed' }
  } finally {
    clearTimeout(timer)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { url, email } = req.body || {}
  const normalized = normalizeUrl(url)
  if (!normalized) return res.status(400).json({ error: 'Please enter a valid website URL.' })

  const result = await fetchHtml(normalized)
  if (!result.ok) {
    const msg =
      result.error === 'timeout'
        ? 'The site took too long to respond. It may be slow or blocking automated requests.'
        : "We couldn't reach that site. Check the URL, or the site may be blocking automated requests."
    return res.status(502).json({ error: msg })
  }

  const html = result.html || ''

  const signals = SIGNALS.map((s) => {
    const passed = s.test(html)
    return {
      key: s.key,
      label: s.label,
      points: s.points,
      earned: passed ? s.points : 0,
      passed,
      fix: passed ? null : s.fix,
    }
  })

  const score = signals.reduce((sum, s) => sum + s.earned, 0)
  const { band, tone } = bandFor(score)
  const bonus = BONUS.map((b) => ({ key: b.key, label: b.label, present: b.test(html) }))

  // Best-effort lead capture if an email was supplied. Never block the scan on this.
  if (email && process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'SecComply <onboarding@resend.dev>',
        to: [process.env.NOTIFICATION_EMAIL],
        subject: `Scanner Lead: ${email} — ${score}/100 (${band})`,
        html: `<div style="font-family:Arial,sans-serif"><h2>New Scanner lead</h2>
          <p><b>Email:</b> ${email}</p>
          <p><b>Scanned URL:</b> ${normalized}</p>
          <p><b>Score:</b> ${score}/100 — ${band}</p>
          <p><b>Source:</b> scanner</p></div>`,
      })
    } catch (e) {
      console.error('Scanner lead email failed:', e)
    }
  }

  return res.status(200).json({
    url: result.finalUrl || normalized,
    score,
    band,
    tone,
    signals,
    bonus,
    disclaimer: 'Automated, heuristic and indicative — not a legal audit.',
  })
}
