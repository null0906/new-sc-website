// SecComply Google Analytics helpers
// Safe to call from anywhere — silently no-ops if GA isn't loaded (consent denied).

export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

function gaReady() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

// Fire on SPA route changes (wired up in _app.js)
export function pageview(url) {
  if (!gaReady() || !GA_ID) return
  window.gtag('config', GA_ID, { page_path: url })
}

// Fire custom events from anywhere — buttons, form submits, etc.
// Usage:  event({ action: 'book_consultation_click', category: 'CTA', label: 'Hero' })
export function event({ action, category, label, value }) {
  if (!gaReady()) return
  const params = {}
  if (category) params.event_category = category
  if (label) params.event_label = label
  if (value !== undefined) params.value = value
  window.gtag('event', action, params)
}
