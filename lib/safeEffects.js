/**
 * SecComply — lib/safeEffects.js
 *
 * Security fix C-11: Safe patterns for useEffect hooks that read from
 * window.location, URLSearchParams, or document.title.
 *
 * Problem: Passing URL-derived values directly into DOM innerHTML or href
 * attributes enables Reflected XSS via crafted URLs.
 *
 * Solution: Always use encodeURIComponent() for URL-sourced values,
 * and always use textContent (not innerHTML) for DOM text writes.
 *
 * Drop-in replacements for the social share and copy-code useEffect blocks
 * in your blog [slug].js files.
 */

// ── Safe Social Share Links ───────────────────────────────────────────────────
// Use this pattern in your social share useEffect.
// NEVER construct share URLs from raw window.location.search params.

export function getSafeShareUrls() {
  if (typeof window === 'undefined') return {};

  // Safe: encodeURIComponent encodes all special chars including <, >, ", '
  const pageUrl   = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  return {
    twitter:  `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`,
  };
}

// ── Safe Copy-to-Clipboard ────────────────────────────────────────────────────
// Never write clipboard content to innerHTML; use navigator.clipboard API.

export async function safeCopyToClipboard(text) {
  try {
    // navigator.clipboard is the modern, safe API
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback — still safe: createTextNode never executes scripts
    const el = document.createElement('textarea');
    el.value = text; // Sets .value (not innerHTML) — safe
    el.style.position = 'fixed';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.focus();
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    return true;
  }
}

// ── Safe DOM Text Write ───────────────────────────────────────────────────────
// Use textContent, never innerHTML, when writing URL-derived values to DOM.

export function safeSetText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = text; // Safe: textContent never executes scripts
    // ❌ NEVER: el.innerHTML = text  — XSS risk if text contains <script>
  }
}

// ── Safe useEffect template for blog pages ────────────────────────────────────
/**
 * Replace your existing social share useEffect with this pattern:
 *
 * useEffect(() => {
 *   const urls = getSafeShareUrls();
 *
 *   const twitterBtn = document.getElementById('share-twitter');
 *   const linkedinBtn = document.getElementById('share-linkedin');
 *   const whatsappBtn = document.getElementById('share-whatsapp');
 *
 *   // Safe: setting .href attribute (not innerHTML)
 *   if (twitterBtn)  twitterBtn.href  = urls.twitter;
 *   if (linkedinBtn) linkedinBtn.href = urls.linkedin;
 *   if (whatsappBtn) whatsappBtn.href = urls.whatsapp;
 * }, []);
 */
