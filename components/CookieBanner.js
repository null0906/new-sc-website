import { useEffect, useState } from 'react'
import { setConsent, hasConsented, checkGPC, initConsent } from '../lib/consent'
import CookiePreferences from './CookiePreferences'

export default function CookieBanner() {
  const [show, setShow] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)

  useEffect(() => {
    // Initialize consent state on mount (honors existing consent + GPC)
    initConsent()

    // Show banner on first visit (no record + no GPC)
    if (!hasConsented() && !checkGPC()) {
      const t = setTimeout(() => setShow(true), 600)
      return () => clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    // Footer "Cookie Preferences" link triggers this event
    const openPrefs = () => setShowPrefs(true)
    window.addEventListener('sc:open-cookie-preferences', openPrefs)
    return () => window.removeEventListener('sc:open-cookie-preferences', openPrefs)
  }, [])

  const handleAcceptAll = () => {
    setConsent({ analytics: true })
    setShow(false)
  }

  const handleRejectAll = () => {
    setConsent({ analytics: false })
    setShow(false)
  }

  const handleCustomise = () => {
    setShowPrefs(true)
  }

  const handlePrefsClose = (didSave) => {
    setShowPrefs(false)
    if (didSave) setShow(false)
  }

  return (
    <>
      {show && (
        <div className="sc-banner-wrap" role="dialog" aria-label="Cookie consent banner" aria-live="polite">
          <div className="sc-banner">
            <div className="sc-banner-text">
              <h2 className="sc-banner-title">Cookies on seccomply.net</h2>
              <p className="sc-banner-body">
                We use a small number of cookies to keep the site working and, with your consent,
                to understand how our content is performing. You can accept everything, reject the
                optional ones, or choose for yourself. Read our{' '}
                <a href="/cookie-policy" className="sc-banner-link">Cookie Policy</a>{' '}
                for the full breakdown.
              </p>
            </div>
            <div className="sc-banner-actions">
              <button type="button" className="sc-btn sc-btn-ghost" onClick={handleRejectAll}>Reject All</button>
              <button type="button" className="sc-btn sc-btn-secondary" onClick={handleCustomise}>Customise</button>
              <button type="button" className="sc-btn sc-btn-primary" onClick={handleAcceptAll}>Accept All</button>
            </div>
          </div>
        </div>
      )}

      <CookiePreferences open={showPrefs} onClose={handlePrefsClose} />

      <style jsx global>{`
        .sc-banner-wrap{
          position:fixed; left:0; right:0; bottom:0; z-index:9998;
          padding:16px; pointer-events:none;
          animation:sc-slide-up .4s cubic-bezier(.16,1,.3,1);
        }
        @keyframes sc-slide-up{
          from{transform:translateY(110%);opacity:0}
          to{transform:translateY(0);opacity:1}
        }
        .sc-banner{
          pointer-events:auto;
          max-width:1180px; margin:0 auto;
          background:#0F172A;
          border:1px solid rgba(232,99,43,.25);
          border-radius:14px;
          box-shadow:0 20px 60px rgba(0,0,0,.55), inset 0 0 0 1px rgba(255,255,255,.04);
          padding:22px 26px;
          display:flex; align-items:center; gap:24px;
          flex-wrap:wrap;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;
        }
        .sc-banner-text{flex:1; min-width:280px}
        .sc-banner-title{
          font-size:15px; font-weight:700; color:#F8FAFC;
          margin:0 0 6px;
        }
        .sc-banner-body{
          font-size:13.5px; line-height:1.6; color:#94A3B8;
          margin:0;
        }
        .sc-banner-link{
          color:#E8632B; text-decoration:none;
          border-bottom:1px solid rgba(232,99,43,.4);
          transition:border-color .15s;
        }
        .sc-banner-link:hover{border-bottom-color:#E8632B}
        .sc-banner-actions{
          display:flex; gap:10px; align-items:center; flex-wrap:wrap;
        }
        .sc-btn{
          font-family:inherit;
          font-size:13px; font-weight:600;
          padding:10px 18px; border-radius:8px;
          border:1px solid transparent; cursor:pointer;
          transition:all .15s ease;
          letter-spacing:.005em;
          white-space:nowrap;
        }
        .sc-btn-primary{
          background:#E8632B; color:#fff;
          border-color:#E8632B;
        }
        .sc-btn-primary:hover{background:#d0521f; border-color:#d0521f}
        .sc-btn-secondary{
          background:rgba(255,255,255,.05); color:#F8FAFC;
          border-color:rgba(255,255,255,.12);
        }
        .sc-btn-secondary:hover{background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.2)}
        .sc-btn-ghost{
          background:transparent; color:#94A3B8;
          border-color:rgba(148,163,184,.25);
        }
        .sc-btn-ghost:hover{color:#F8FAFC; border-color:rgba(148,163,184,.5)}

        @media(max-width:768px){
          .sc-banner-wrap{padding:12px}
          .sc-banner{padding:18px 20px; gap:16px}
          .sc-banner-actions{width:100%; justify-content:flex-end}
          .sc-btn{flex:1; min-width:0; padding:11px 14px; font-size:12.5px}
        }
        @media(max-width:480px){
          .sc-banner-actions{flex-direction:column-reverse; gap:8px}
          .sc-btn{width:100%; flex:none}
        }
      `}</style>
    </>
  )
}
