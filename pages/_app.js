import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import CookieBanner from '../components/CookieBanner'
import { pageview } from '../lib/gtag'
import { fontVariables } from '../lib/fonts'
import '../styles/tailwind.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isResourcePage = router.pathname.startsWith('/resources')

  // Track SPA route changes for GA. pageview() is a no-op until consent is given,
  // so this is safe to leave wired up unconditionally.
  useEffect(() => {
    const handleRouteChange = (url) => pageview(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return (
    // display:contents keeps this an inert wrapper for layout purposes
    // (preserves #__next's flex context for the footer's margin-top:auto)
    // while still giving next/font's CSS variables a real DOM node to
    // cascade from — next/font is not supported directly in _document.js,
    // so --font-inter/--font-inter-tight/--font-jetbrains-mono can only
    // exist below :root, never at it.
    //
    // --font-sans/--font-display/--font-mono are redeclared here (not
    // just referenced) because nested var() substitution resolves using
    // the cascade at the element where the OUTER property is declared —
    // variables.css declares --font-sans at :root, where --font-inter
    // doesn't exist, so var(--font-inter) inside it fails there and stays
    // failed through inheritance, even though a descendant defines
    // --font-inter. Redeclaring the full stack at this element, where
    // --font-inter genuinely is in scope, is what makes it resolve.
    // variables.css keeps a system-font-only fallback for the same
    // tokens in case JS fails before hydration.
    <div
      className={fontVariables}
      style={{
        display: 'contents',
        '--font-sans': 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, Roboto, Helvetica, Arial, sans-serif',
        '--font-display': 'var(--font-inter-tight), var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, Roboto, Helvetica, Arial, sans-serif',
        '--font-mono': 'var(--font-jetbrains-mono), ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {isResourcePage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      {/* Mounted at App level so the banner appears on every page. */}
      <CookieBanner />
    </div>
  )
}
