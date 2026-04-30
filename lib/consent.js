// SecComply Consent Management
// Single source of truth for cookie consent state, GA load/unload, GPC handling.
// Called from CookieBanner.js and CookiePreferences.js.

const STORAGE_KEY = 'sc_consent'
const BANNER_VERSION = '2.0'
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// === READ ===

export function getConsent() {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    // Banner version bump invalidates old consent → re-prompt
    if (parsed.version !== BANNER_VERSION) return null
    return parsed
  } catch (e) {
    return null
  }
}

export function hasConsented() {
  return getConsent() !== null
}

export function checkGPC() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return false
  return navigator.globalPrivacyControl === true
}

// === WRITE ===

export function setConsent({ analytics }) {
  if (typeof window === 'undefined') return

  const record = {
    analytics: !!analytics,
    timestamp: new Date().toISOString(),
    version: BANNER_VERSION,
    gpc: checkGPC(),
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record))
  } catch (e) {}

  if (analytics) {
    loadGA()
  } else {
    unloadGA()
  }

  // Notify any listeners (e.g. footer link state)
  try {
    window.dispatchEvent(new CustomEvent('sc:consent-changed', { detail: record }))
  } catch (e) {}
}

export function clearConsent() {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (e) {}
  unloadGA()
}

// === GA LOAD / UNLOAD ===

let gaLoaded = false

export function loadGA() {
  if (typeof window === 'undefined') return
  if (!GA_ID) {
    console.warn('[consent] NEXT_PUBLIC_GA_MEASUREMENT_ID not set — GA not loaded')
    return
  }
  if (gaLoaded || document.getElementById('sc-ga-script')) {
    // Already loaded — just update consent state
    if (window.gtag) {
      window.gtag('consent', 'update', { analytics_storage: 'granted' })
    }
    gaLoaded = true
    return
  }

  // Initialize dataLayer + gtag stub
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments) }

  // Consent Mode v2 defaults — analytics granted (user just accepted), ads denied always
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted',
    wait_for_update: 500,
  })

  // Inject the gtag.js loader
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  script.id = 'sc-ga-script'
  document.head.appendChild(script)

  // Configure
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    anonymize_ip: true,
    send_page_view: true,
  })

  gaLoaded = true
}

export function unloadGA() {
  if (typeof window === 'undefined') return

  // If gtag is initialized, signal denial via Consent Mode v2
  if (window.gtag) {
    try {
      window.gtag('consent', 'update', { analytics_storage: 'denied' })
    } catch (e) {}
  }

  // Delete _ga, _gid, _ga_<container-id> cookies on this domain (and subdomains)
  try {
    const cookies = document.cookie.split(';').map(c => c.trim())
    const host = window.location.hostname
    cookies.forEach(cookie => {
      const name = cookie.split('=')[0]
      if (name === '_ga' || name === '_gid' || name.startsWith('_ga_')) {
        const expire = 'expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;'
        document.cookie = `${name}=; ${expire}`
        document.cookie = `${name}=; ${expire} domain=${host};`
        document.cookie = `${name}=; ${expire} domain=.${host};`
      }
    })
  } catch (e) {}

  gaLoaded = false
}

// === INIT ON PAGE LOAD ===
// Called once from _app.js / CookieBanner.js to honor existing consent + GPC.

export function initConsent() {
  if (typeof window === 'undefined') return

  // GPC: if browser sends GPC and no explicit consent record → record rejection silently
  if (checkGPC() && !hasConsented()) {
    setConsent({ analytics: false })
    return
  }

  // Existing consent → load GA if previously granted
  const consent = getConsent()
  if (consent && consent.analytics) {
    loadGA()
  }
}

export const BANNER = { version: BANNER_VERSION }
