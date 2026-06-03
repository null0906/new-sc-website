import { useEffect, useState } from 'react'
import { getConsent, setConsent } from '../lib/consent'

export default function CookiePreferences({ open, onClose }) {
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    if (!open) return
    // Load existing consent state when modal opens
    const existing = getConsent()
    setAnalytics(existing?.analytics ?? false)
  }, [open])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [open])

  // ESC key to close
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const handleSavePreferences = () => {
    setConsent({ analytics })
    onClose(true)
  }

  const handleAcceptAll = () => {
    setAnalytics(true)
    setConsent({ analytics: true })
    onClose(true)
  }

  const handleRejectAll = () => {
    setAnalytics(false)
    setConsent({ analytics: false })
    onClose(true)
  }

  return (
    <>
      <div className="sc-pref-overlay" onClick={() => onClose(false)} />
      <div className="sc-pref-modal" role="dialog" aria-modal="true" aria-label="Cookie preferences">

        <div className="sc-pref-header">
          <h2>Cookie Preferences</h2>
          <button type="button" className="sc-pref-close" onClick={() => onClose(false)} aria-label="Close">×</button>
        </div>

        <div className="sc-pref-body">
          <p className="sc-pref-intro">
            Choose which cookie categories you allow on seccomply.net. You can change this at any
            time using the <strong>Cookie Preferences</strong> link in the footer of every page.
          </p>

          {/* Strictly Necessary — always on, disabled */}
          <div className="sc-pref-row">
            <div className="sc-pref-info">
              <div className="sc-pref-row-title">
                Strictly Necessary
                <span className="sc-pref-tag sc-pref-tag-on">Always Active</span>
              </div>
              <div className="sc-pref-row-desc">
                Required for the site to function. These cookies remember your cookie choices so
                the banner does not reappear on every page. They cannot be switched off.
              </div>
            </div>
            <div className="sc-pref-toggle-wrap">
              <span className="sc-toggle sc-toggle-disabled" aria-disabled="true" title="Always on">
                <span className="sc-toggle-knob sc-toggle-knob-on" />
              </span>
            </div>
          </div>

          {/* Analytics — user-controllable */}
          <div className="sc-pref-row">
            <div className="sc-pref-info">
              <div className="sc-pref-row-title">Analytics</div>
              <div className="sc-pref-row-desc">
                Helps us understand how visitors discover and use our content (Google Analytics 4).
                Data is used in aggregate; individual visitors are not identified.
              </div>
            </div>
            <div className="sc-pref-toggle-wrap">
              <button
                type="button"
                role="switch"
                aria-checked={analytics}
                aria-label="Toggle analytics cookies"
                className={`sc-toggle ${analytics ? 'sc-toggle-on' : ''}`}
                onClick={() => setAnalytics(!analytics)}
              >
                <span className={`sc-toggle-knob ${analytics ? 'sc-toggle-knob-on' : ''}`} />
              </button>
            </div>
          </div>

          {/* Functional — not in use */}
          <div className="sc-pref-row sc-pref-row-muted">
            <div className="sc-pref-info">
              <div className="sc-pref-row-title">
                Functional
                <span className="sc-pref-tag">Not currently in use</span>
              </div>
              <div className="sc-pref-row-desc">
                We do not currently set cookies to remember preferences such as language or theme.
                If we add functional cookies in future, we will ask for your consent first.
              </div>
            </div>
            <div className="sc-pref-toggle-wrap">
              <span className="sc-toggle sc-toggle-disabled" aria-disabled="true">
                <span className="sc-toggle-knob" />
              </span>
            </div>
          </div>

          {/* Marketing — not in use */}
          <div className="sc-pref-row sc-pref-row-muted">
            <div className="sc-pref-info">
              <div className="sc-pref-row-title">
                Marketing
                <span className="sc-pref-tag">Not currently in use</span>
              </div>
              <div className="sc-pref-row-desc">
                We do not currently run advertising or marketing automation cookies on seccomply.net.
                If that changes, we will ask for your consent first.
              </div>
            </div>
            <div className="sc-pref-toggle-wrap">
              <span className="sc-toggle sc-toggle-disabled" aria-disabled="true">
                <span className="sc-toggle-knob" />
              </span>
            </div>
          </div>
        </div>

        <div className="sc-pref-footer">
          <button type="button" className="sc-btn sc-btn-ghost" onClick={handleRejectAll}>Reject All</button>
          <div className="sc-pref-footer-right">
            <button type="button" className="sc-btn sc-btn-secondary" onClick={handleSavePreferences}>Save Preferences</button>
            <button type="button" className="sc-btn sc-btn-primary" onClick={handleAcceptAll}>Accept All</button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .sc-pref-overlay{
          position:fixed; inset:0; z-index:9998;
          background:rgba(2,6,23,.78); backdrop-filter:blur(4px);
          animation:sc-fade-in .2s ease-out;
        }
        @keyframes sc-fade-in{from{opacity:0}to{opacity:1}}
        .sc-pref-modal{
          position:fixed; z-index:9999;
          top:50%; left:50%; transform:translate(-50%,-50%);
          width:min(640px,calc(100vw - 32px));
          max-height:calc(100vh - 64px);
          background:#0F172A;
          border:1px solid rgba(255,255,255,.08);
          border-radius:16px;
          box-shadow:0 30px 80px rgba(0,0,0,.6);
          display:flex; flex-direction:column;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;
          animation:sc-pref-pop .25s cubic-bezier(.16,1,.3,1);
        }
        @keyframes sc-pref-pop{
          from{opacity:0;transform:translate(-50%,-48%) scale(.96)}
          to{opacity:1;transform:translate(-50%,-50%) scale(1)}
        }
        .sc-pref-header{
          padding:22px 26px 16px;
          border-bottom:1px solid rgba(255,255,255,.06);
          display:flex; align-items:center; justify-content:space-between;
          flex-shrink:0;
        }
        .sc-pref-header h2{
          font-size:17px; font-weight:700; color:#F8FAFC; margin:0;
        }
        .sc-pref-close{
          background:none; border:none; color:#94A3B8;
          font-size:26px; line-height:1; cursor:pointer;
          width:32px; height:32px; border-radius:8px;
          display:flex; align-items:center; justify-content:center;
          transition:all .15s; padding:0;
          font-family:inherit;
        }
        .sc-pref-close:hover{background:rgba(255,255,255,.06); color:#F8FAFC}
        .sc-pref-body{
          padding:18px 26px; overflow-y:auto; flex:1;
        }
        .sc-pref-intro{
          font-size:13.5px; line-height:1.65; color:#94A3B8;
          margin:0 0 18px;
        }
        .sc-pref-intro strong{color:#F8FAFC; font-weight:600}
        .sc-pref-row{
          display:flex; gap:18px; align-items:flex-start;
          padding:16px 0; border-bottom:1px solid rgba(255,255,255,.05);
        }
        .sc-pref-row:last-child{border-bottom:none}
        .sc-pref-row-muted{opacity:.6}
        .sc-pref-info{flex:1; min-width:0}
        .sc-pref-row-title{
          font-size:14px; font-weight:600; color:#F8FAFC;
          margin-bottom:5px;
          display:flex; align-items:center; gap:8px; flex-wrap:wrap;
        }
        .sc-pref-tag{
          font-size:10px; font-weight:700; letter-spacing:.06em;
          text-transform:uppercase;
          padding:3px 8px; border-radius:6px;
          background:rgba(148,163,184,.12); color:#94A3B8;
        }
        .sc-pref-tag-on{
          background:rgba(6,214,160,.12); color:#06d6a0;
        }
        .sc-pref-row-desc{
          font-size:12.5px; line-height:1.6; color:#94A3B8;
        }
        .sc-pref-toggle-wrap{flex-shrink:0; padding-top:2px}
        .sc-toggle{
          width:40px; height:22px;
          background:rgba(148,163,184,.2); border:none;
          border-radius:11px; cursor:pointer; padding:0;
          position:relative; transition:background .2s;
          display:inline-block; vertical-align:middle;
          font-family:inherit;
        }
        .sc-toggle-on{background:#0081f2}
        .sc-toggle-disabled{cursor:not-allowed; opacity:.5}
        .sc-toggle-knob{
          display:block;
          width:16px; height:16px; border-radius:50%;
          background:#fff;
          position:absolute; top:3px; left:3px;
          transition:left .2s ease;
        }
        .sc-toggle-knob-on{left:21px}
        .sc-pref-footer{
          padding:18px 26px 22px;
          border-top:1px solid rgba(255,255,255,.06);
          display:flex; justify-content:space-between; gap:12px;
          flex-wrap:wrap;
          flex-shrink:0;
        }
        .sc-pref-footer-right{display:flex; gap:10px; flex-wrap:wrap}

        @media(max-width:520px){
          .sc-pref-header{padding:18px 20px 14px}
          .sc-pref-body{padding:14px 20px}
          .sc-pref-footer{padding:14px 20px 18px; flex-direction:column}
          .sc-pref-footer-right{width:100%}
          .sc-pref-footer .sc-btn{width:100%}
          .sc-pref-row{gap:12px; padding:14px 0}
        }
      `}</style>
    </>
  )
}
