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
          background:var(--bg-card);
          border:1px solid var(--border);
          border-radius:var(--radius-lg);
          box-shadow:var(--shadow-lg);
          padding:22px 26px;
          display:flex; align-items:center; gap:24px;
          flex-wrap:wrap;
          font-family:var(--font-sans);
        }
        .sc-banner-text{flex:1; min-width:280px}
        .sc-banner-title{
          font-size:15px; font-weight:700; color:var(--white);
          margin:0 0 6px;
        }
        .sc-banner-body{
          font-size:13.5px; line-height:1.6; color:var(--text-secondary);
          margin:0;
        }
        .sc-banner-link{
          color:var(--accent); text-decoration:none;
          border-bottom:1px solid rgb(var(--accent-rgb) / .4);
          transition:border-color .15s;
        }
        .sc-banner-link:hover{border-bottom-color:var(--accent)}
        .sc-banner-actions{
          display:flex; gap:10px; align-items:center; flex-wrap:wrap;
        }
        .sc-btn{
          font-family:inherit;
          font-size:13px; font-weight:600;
          padding:10px 18px; border-radius:var(--radius-md);
          border:1px solid transparent; cursor:pointer;
          transition:all .15s ease;
          letter-spacing:.005em;
          white-space:nowrap;
        }
        .sc-btn-primary{
          background:var(--accent); color:var(--p-bg-card);
          border-color:var(--accent);
        }
        .sc-btn-primary:hover{background:var(--accent-dark); border-color:var(--accent-dark)}
        .sc-btn-secondary{
          background:var(--bg-card-hover); color:var(--white);
          border-color:var(--border-hover);
        }
        .sc-btn-secondary:hover{background:var(--bg-secondary); border-color:var(--text-muted)}
        .sc-btn-ghost{
          background:transparent; color:var(--text-secondary);
          border-color:var(--border-hover);
        }
        .sc-btn-ghost:hover{color:var(--white); border-color:var(--text-muted)}

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
