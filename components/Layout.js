import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SiteNav from './SiteNav'
import SiteFooter from './SiteFooter'

export default function Layout({ children }) {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [scrolled, setScrolled] = useState(!isHome)

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return
    }
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome, router.pathname])

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html,body{margin:0;padding:0}
            #__next{display:flex;flex-direction:column;min-height:100vh}
            .footer{margin-top:auto;flex-shrink:0}
            button.faq-question{background:var(--bg-card);color:var(--white);border:1px solid var(--border);border-radius:var(--radius-md);padding:20px 24px;width:100%;text-align:left;font-size:16px;font-weight:500;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:all .3s ease;font-family:inherit}
            button.faq-question:hover{background:var(--bg-card-hover);border-color:var(--border-hover)}
          `,
        }}
      />
      <SiteNav scrolled={scrolled} />
      <div style={{ paddingTop: isHome ? '0' : 'var(--nav-h)' }}>{children}</div>
      <SiteFooter />
    </>
  )
}
