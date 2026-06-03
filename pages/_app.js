import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import CookieBanner from '../components/CookieBanner'
import { pageview } from '../lib/gtag'

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
    <>
      {isResourcePage ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      {/* Mounted at App level so the banner appears on every page. */}
      <CookieBanner />
    </>
  )
}
