import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function SiteNav({ scrolled }) {
  const [openMenu, setOpenMenu] = useState(null) // 'services' | 'resources' | null
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)
  const closeTimer = useRef(null)

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const openNow = (key) => {
    clearCloseTimer()
    setOpenMenu(key)
  }
  const closeSoon = () => {
    clearCloseTimer()
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }
  const toggleMenu = (key) => {
    clearCloseTimer()
    setOpenMenu((cur) => (cur === key ? null : key))
  }
  const closeAll = () => {
    clearCloseTimer()
    setOpenMenu(null)
    setMobileOpen(false)
  }

  // Escape closes whatever's open; a click outside the nav closes the mega-menu.
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeAll() }
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('click', onClickOutside)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClickOutside)
    }
  }, [])

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'} id="navbar" ref={navRef}>
      <div className="navbar-inner">
        <Link href="/" className="logo" onClick={closeAll}>
          <img src="/assets/images/logo.png" alt="SecComply" style={{ height: '40px' }} />
          <span className="tm-mark">{'™'}</span>
        </Link>
        <ul className={mobileOpen ? 'nav-links open' : 'nav-links'}>
          <li><Link href="/northiron" className="nav-flagship" onClick={closeAll}>Northiron.ai</Link></li>
          <li><Link href="/about" onClick={closeAll}>About</Link></li>
          <li
            className={openMenu === 'services' ? 'nav-dropdown open' : 'nav-dropdown'}
            onMouseEnter={() => openNow('services')}
            onMouseLeave={closeSoon}
          >
            <span className="nav-dropdown-trigger">
              <Link href="/services" onFocus={() => openNow('services')} onClick={closeAll}>Services</Link>
              <button
                type="button"
                className="dropdown-arrow-btn"
                aria-expanded={openMenu === 'services'}
                aria-label="Toggle services menu"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMenu('services') }}
              >
                <span className="dropdown-arrow">{'▾'}</span>
              </button>
            </span>
            <div className="nav-dropdown-menu" role="menu">
              <div className="mega-inner">
                <div className="mega-section">
                  <div className="mega-section-head">
                    <span className="mega-section-icon">🏅</span>
                    <span className="mega-section-title">Certifications & Standards</span>
                  </div>
                  <div className="mega-grid">
                    <Link href="/services/iso-27001" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🌐</span><span className="mega-item-text">ISO 27001</span></Link>
                    <Link href="/services/iso-27701" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🔏</span><span className="mega-item-text">ISO 27701</span></Link>
                    <Link href="/services/soc-2" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🛡️</span><span className="mega-item-text">SOC 2 Audits</span></Link>
                    <Link href="/services/gdpr" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🇪🇺</span><span className="mega-item-text">GDPR Compliance</span></Link>
                    <Link href="/services/hipaa" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🏥</span><span className="mega-item-text">HIPAA</span></Link>
                    <Link href="/services/iso-42001" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🤖</span><span className="mega-item-text">ISO 42001</span></Link>
                    <Link href="/services/iso-27017" className="mega-item" onClick={closeAll}><span className="mega-item-icon">☁️</span><span className="mega-item-text">ISO 27017</span></Link>
                    <Link href="/services/iso-27018" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🔒</span><span className="mega-item-text">ISO 27018</span></Link>
                    <Link href="/services/nist-csf" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🇺🇸</span><span className="mega-item-text">NIST CSF 2.0</span></Link>
                    <Link href="/services/dpdp" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🇮🇳</span><span className="mega-item-text">DPDP Act</span></Link>
                  </div>
                </div>
                <div className="mega-divider"></div>
                <div className="mega-section">
                  <div className="mega-section-head">
                    <span className="mega-section-icon">🔐</span>
                    <span className="mega-section-title">Security Services</span>
                  </div>
                  <div className="mega-grid">
                    <Link href="/services/vapt" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🔍</span><span className="mega-item-text">VAPT Testing</span></Link>
                    <Link href="/services/ciso" className="mega-item" onClick={closeAll}><span className="mega-item-icon">💼</span><span className="mega-item-text">CISO as a Service</span></Link>
                    <Link href="/services/cloud-security" className="mega-item" onClick={closeAll}><span className="mega-item-icon">⛅</span><span className="mega-item-text">Cloud Security Audit</span></Link>
                    <Link href="/services/security-policy" className="mega-item" onClick={closeAll}><span className="mega-item-icon">📜</span><span className="mega-item-text">Security Policy</span></Link>
                    <Link href="/services/compliance-as-a-service" className="mega-item" onClick={closeAll}><span className="mega-item-icon">⚙️</span><span className="mega-item-text">Compliance as a Service</span></Link>
                    <Link href="/services/internal-audit" className="mega-item" onClick={closeAll}><span className="mega-item-icon">📊</span><span className="mega-item-text">Internal Audit</span></Link>
                  </div>
                </div>
                <div className="mega-divider"></div>
                <div className="mega-section">
                  <div className="mega-section-head">
                    <span className="mega-section-icon">🛠️</span>
                    <span className="mega-section-title">Engineering Solutions</span>
                  </div>
                  <div className="mega-grid">
                    <Link href="/services/ai-agents" className="mega-item" onClick={closeAll}><span className="mega-item-icon">🧬</span><span className="mega-item-text">AI Agents & Agentic Workflows</span></Link>
                    <Link href="/services/inventra" className="mega-item" onClick={closeAll}><span className="mega-item-icon">📦</span><span className="mega-item-text">Custom IT Asset Management</span></Link>
                    <Link href="/services/security-visualization" className="mega-item" onClick={closeAll}><span className="mega-item-icon">📈</span><span className="mega-item-text">Custom Security Visualizations</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            className={openMenu === 'resources' ? 'res-dd open' : 'res-dd'}
            onMouseEnter={() => openNow('resources')}
            onMouseLeave={closeSoon}
          >
            <span className="res-dd-trigger">
              <Link href="/resources" onFocus={() => openNow('resources')} onClick={closeAll}>Resources</Link>
              <button
                type="button"
                className="dropdown-arrow-btn"
                aria-expanded={openMenu === 'resources'}
                aria-label="Toggle resources menu"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleMenu('resources') }}
              >
                <span className="res-dd-arrow dropdown-arrow">{'▾'}</span>
              </button>
            </span>
            <div className="res-dd-menu" role="menu">
              <Link href="/resources/blog" onClick={closeAll}><span className="dropdown-icon">📝</span> Blog</Link>
              <Link href="/resources/guides" onClick={closeAll}><span className="dropdown-icon">📚</span> Guides</Link>
              <Link href="/resources/assessments" onClick={closeAll}><span className="dropdown-icon">🎯</span> Assessments</Link>
              <Link href="/resources/tools" onClick={closeAll}><span className="dropdown-icon">🛠️</span> Tools</Link>
              <Link href="/resources/events" onClick={closeAll}><span className="dropdown-icon">🎤</span> Events</Link>
            </div>
          </li>
          <li><Link href="/pricing" onClick={closeAll}>Pricing</Link></li>
          <li><Link href="/contact" onClick={closeAll}>Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" className="btn btn-primary" target="_blank" rel="noopener">
            Book Consultation <span className="btn-icon">{'→'}</span>
          </a>
        </div>
        <button
          type="button"
          className="mobile-toggle"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      <style jsx global>{`
        .nav-links a.nav-flagship{color:var(--accent-light);font-weight:600;transition:color .2s}
        .nav-links a.nav-flagship:hover{color:var(--accent)}
        .nav-dropdown{position:static;list-style:none}
        .nav-dropdown-trigger,.res-dd-trigger{display:inline-flex;align-items:center;gap:2px;font-size:14px;font-weight:500;color:var(--white);cursor:pointer;transition:var(--transition)}
        .dropdown-arrow-btn{display:inline-flex;align-items:center;justify-content:center;background:none;border:none;padding:4px;margin:0;cursor:pointer;color:inherit;font:inherit}
        .dropdown-arrow-btn:focus-visible{outline:2px solid var(--accent);outline-offset:2px;border-radius:4px}
        .dropdown-arrow{font-size:0.6rem;transition:transform 0.2s;display:inline-block}
        .nav-dropdown.open .dropdown-arrow,.res-dd.open .res-dd-arrow{transform:rotate(180deg)}
        .nav-links > li.nav-dropdown > .nav-dropdown-menu{
          position:fixed;
          top:var(--nav-h);
          left:50%;
          right:auto;
          width:min(1400px,calc(100vw - 32px));
          transform:translateX(-50%) translateY(10px);
          display:block;
          min-width:0;
          background:var(--bg-card);
          border:1px solid var(--border);
          border-radius:var(--radius-xl);
          padding:24px 0;
          opacity:0;
          visibility:hidden;
          transition:all .2s ease;
          box-shadow:var(--shadow-lg);
          z-index:200;
        }
        .nav-links > li.nav-dropdown.open > .nav-dropdown-menu{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}
        .nav-dropdown-menu .mega-inner{width:min(1320px,calc(100% - 28px));margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) 1px minmax(0,1fr) 1px minmax(0,0.85fr);gap:0;box-sizing:border-box}
        .nav-dropdown-menu .mega-divider{display:block;background:var(--border)}
        .nav-dropdown-menu .mega-section{padding:0 4px;min-width:0;display:flex;flex-direction:column}
        .nav-dropdown-menu .mega-section-head{display:inline-flex;align-items:center;gap:10px;margin-bottom:18px;padding:10px 14px;border:1px solid var(--border);border-radius:var(--radius-lg);background:var(--bg-secondary)}
        .nav-dropdown-menu .mega-section-icon{width:24px;height:24px;border-radius:var(--radius-sm);background:var(--accent-tint);border:1px solid rgb(var(--accent-rgb) / .2);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}
        .nav-dropdown-menu .mega-section-title{font-size:15px;font-weight:700;letter-spacing:.01em;color:var(--text-secondary);text-transform:none}
        .nav-dropdown-menu .mega-grid{display:grid;grid-template-columns:repeat(2,minmax(220px,1fr));gap:8px 18px;align-content:start}
        .nav-dropdown-menu .mega-section:last-child .mega-grid{flex:1;align-content:start;grid-template-columns:1fr;row-gap:8px}
        .nav-dropdown-menu .mega-section:last-child .mega-item{white-space:nowrap}
        .nav-dropdown-menu .mega-item{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:var(--radius-md);text-decoration:none;transition:all .15s;color:var(--text-secondary);font-size:15px;font-weight:500;min-width:0;white-space:normal}
        .nav-dropdown-menu .mega-item:hover,.nav-dropdown-menu .mega-item:focus-visible{background:var(--accent-tint);color:var(--white)}
        .nav-dropdown-menu .mega-item:hover .mega-item-icon,.nav-dropdown-menu .mega-item:focus-visible .mega-item-icon{background:rgb(var(--accent-rgb) / .2);border-color:rgb(var(--accent-rgb) / .35)}
        .nav-dropdown-menu .mega-item::after{display:none}
        .nav-dropdown-menu .mega-item-icon{width:34px;height:34px;border-radius:var(--radius-sm);background:var(--bg-secondary);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;transition:all .15s}
        .nav-dropdown-menu .mega-item-text{line-height:1.3;min-width:0}
        .res-dd{position:relative;list-style:none}
        .res-dd-menu{
          position:fixed;
          top:var(--nav-h);
          left:50%;
          transform:translateX(-50%) translateY(8px);
          background:var(--bg-card);
          border:1px solid var(--border);
          border-radius:var(--radius-xl);
          padding:14px;
          width:980px;
          max-width:calc(100vw - 32px);
          min-width:0;
          opacity:0;
          visibility:hidden;
          transition:all .2s ease;
          box-shadow:var(--shadow-lg);
          z-index:220;
          display:grid;
          grid-template-columns:repeat(3,minmax(0,1fr));
          gap:8px;
        }
        .res-dd.open .res-dd-menu{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}
        .res-dd-menu a{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:var(--radius-md);font-size:15px;font-weight:600;color:var(--text-secondary);transition:all .15s;white-space:nowrap}
        .res-dd-menu a:hover,.res-dd-menu a:focus-visible{background:var(--accent-tint);color:var(--white)}
        .res-dd-menu a::after{display:none}
        .dropdown-icon{width:30px;height:30px;border-radius:var(--radius-sm);background:var(--bg-secondary);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px}
        .res-dd-menu a:hover .dropdown-icon,.res-dd-menu a:focus-visible .dropdown-icon{background:rgb(var(--accent-rgb) / .2);border-color:rgb(var(--accent-rgb) / .35)}
        .tm-mark{font-size:14px !important;color:var(--text-secondary) !important;font-weight:500 !important;vertical-align:super !important;margin-left:2px !important;display:inline !important;line-height:1 !important}

        @media(max-width:1200px){
          .nav-dropdown-menu .mega-inner{width:calc(100% - 20px)}
          .nav-dropdown-menu .mega-divider{margin:0 18px}
          .nav-dropdown-menu .mega-grid{grid-template-columns:1fr}
          .nav-dropdown-menu .mega-section:last-child .mega-grid{row-gap:12px}
          .res-dd-menu{width:760px;max-width:calc(100vw - 32px);grid-template-columns:repeat(2,minmax(0,1fr))}
        }
        @media(max-width:920px){
          .nav-links > li.nav-dropdown > .nav-dropdown-menu{position:absolute;top:calc(100% + 8px);left:50%;right:auto;width:min(96vw,940px);transform:translateX(-50%) translateY(8px);border:1px solid var(--border);border-radius:14px;padding:18px 0}
          .nav-links > li.nav-dropdown.open > .nav-dropdown-menu{transform:translateX(-50%) translateY(0)}
          .nav-dropdown-menu .mega-inner{padding:0 14px;grid-template-columns:1fr}
          .nav-dropdown-menu .mega-divider{display:none}
          .nav-dropdown-menu .mega-section:last-child .mega-item{white-space:normal}
          .res-dd-menu{position:absolute;top:calc(100% + 8px);width:min(96vw,640px);grid-template-columns:repeat(2,minmax(0,1fr))}
        }
      `}</style>
    </nav>
  )
}
