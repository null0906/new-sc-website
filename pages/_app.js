import Layout from '../components/Layout'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isResourcePage = router.pathname.startsWith('/resources')

  if (isResourcePage) {
    return <Component {...pageProps} />
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}