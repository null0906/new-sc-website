import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const BOOK_URL = 'https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/'

/* ── Content ─────────────────────────────────────────────── */
const PILLARS = [
  {
    key: 'automation', icon: '🛡️', title: 'Compliance Automation',
    tagline: 'Map once, comply everywhere',
    features: [
      'Unified control mapping across SOC 2, ISO 27001, HIPAA, GDPR, DPDP and 50+ frameworks',
      'One-click evidence collection from 100+ integrations',
      'A live compliance score that moves as your posture changes',
      'AI-suggested gap remediation, prioritized by impact',
    ],
  },
  {
    key: 'monitoring', icon: '📡', title: '24/7 Continuous Monitoring',
    tagline: 'Never miss a drift',
    features: [
      'Cloud configuration testing against 200+ benchmarks',
      'Endpoint compliance tracking — MDM, encryption and AV',
      'Instant Slack and email alerts on control failures',
      'Historical drift timeline and trend analysis',
    ],
  },
  {
    key: 'risk', icon: '⚠️', title: 'AI Risk Engine',
    tagline: 'Predict and prevent before impact',
    features: [
      'ML-driven risk scoring and prioritization',
      'Impact heatmaps built for executive reporting',
      'Cross-system dependency mapping',
      'One-click remediation task assignment',
    ],
  },
  {
    key: 'evidence', icon: '📎', title: 'Evidence Vault',
    tagline: 'Audit-ready in minutes, not weeks',
    features: [
      'Automated evidence capture from connected systems',
      'Versioned, timestamped, audit-grade artifacts',
      'An audit room with auditor-scoped access',
      'Re-use the same evidence across every framework',
    ],
  },
  {
    key: 'trust', icon: '✅', title: 'Trust Center',
    tagline: 'Close deals faster with self-serve trust',
    features: [
      'A white-label, customer-facing trust portal',
      'NDA-gated document sharing',
      'AI-powered security questionnaire auto-fill',
      'CRM integration to track trust impact on deal velocity',
    ],
  },
]

const STATUS = {
  ready: { label: 'Audit-ready', color: 'var(--green)' },
  progress: { label: 'In progress', color: 'var(--accent)' },
  action: { label: 'Action needed', color: 'var(--yellow)' },
}

const FRAMEWORKS = [
  { name: 'SOC 2', icon: '🛡️', pct: 92, status: 'ready' },
  { name: 'ISO 27001', icon: '🌐', pct: 88, status: 'ready' },
  { name: 'GDPR', icon: '🇪🇺', pct: 81, status: 'progress' },
  { name: 'HIPAA', icon: '🏥', pct: 74, status: 'progress' },
  { name: 'NIST CSF', icon: '🇺🇸', pct: 79, status: 'progress' },
  { name: 'DPDP', icon: '🇮🇳', pct: 63, status: 'action' },
]

const ACTIVITY = [
  { icon: '✅', text: 'AWS S3 bucket policy validated', time: '2m ago', tone: 'ok' },
  { icon: '📎', text: 'New control evidence captured · SOC 2 CC6.1', time: '14m ago', tone: 'info' },
  { icon: '⚠️', text: 'Drift detected on prod EC2 security group', time: '1h ago', tone: 'warn' },
  { icon: '🔑', text: 'Okta SSO access review completed', time: '2h ago', tone: 'ok' },
  { icon: '🧠', text: 'AI mapped 12 controls to ISO 27001', time: '3h ago', tone: 'accent' },
]

const ALERTS = [
  { sev: 'High', text: 'Public S3 bucket detected in production', fix: 'Encryption + access policy remediation suggested' },
  { sev: 'Medium', text: 'MFA disabled for 2 admin accounts', fix: 'Enforce via Okta MFA policy' },
  { sev: 'Low', text: 'TLS certificate expires in 21 days', fix: 'Auto-renewal recommended' },
]

const INTEGRATIONS = [
  { n: 'AWS', i: '☁️' }, { n: 'GCP', i: '🌩️' }, { n: 'Azure', i: '🔷' }, { n: 'GitHub', i: '🐙' },
  { n: 'Jira', i: '📋' }, { n: 'Slack', i: '💬' }, { n: 'Okta', i: '🔑' }, { n: 'Datadog', i: '🐶' },
]

const STEPS = [
  { n: '01', icon: '🔌', title: 'Connect', desc: 'Plug in your stack — cloud, identity, code and tickets — in under 10 minutes. No agents to babysit.' },
  { n: '02', icon: '🧠', title: 'Map', desc: 'YourComply maps your controls to every framework you target — automatically — and keeps the mapping current.' },
  { n: '03', icon: '📡', title: 'Monitor', desc: 'Continuous evidence, drift alerts and an audit-ready posture, on tap — so the next audit is a formality.' },
]

const WHY = [
  { old: 'Spreadsheets and screenshot folders', neu: 'AI-mapped controls, always current' },
  { old: 'Legacy GRC consultants on retainer', neu: 'A self-serve platform your team owns' },
  { old: 'Manual, point-in-time evidence collection', neu: 'Live evidence from 100+ integrations' },
  { old: 'Audits that scramble teams for weeks', neu: 'Continuous, audit-ready posture year-round' },
]

const STATS = [
  { to: 10, suffix: 'x', label: 'faster audit prep', icon: '⚡' },
  { to: 50, suffix: '+', label: 'frameworks supported', icon: '🗂️' },
  { to: 100, suffix: '+', label: 'integrations', icon: '🔌' },
  { fixed: '24/7', label: 'continuous monitoring', icon: '📡' },
]

const FAQ = [
  {
    q: 'What is YourComply?',
    a: 'YourComply is an AI-embedded GRC platform that automates security compliance end to end. It maps your controls to frameworks like SOC 2, ISO 27001, HIPAA, GDPR and DPDP, collects evidence automatically from your stack, monitors for drift around the clock, and keeps you audit-ready without the spreadsheet sprawl.',
  },
  {
    q: 'Which frameworks does YourComply support?',
    a: 'Out of the box it covers SOC 2, ISO 27001, HIPAA, GDPR, DPDP and NIST CSF, plus 50+ additional standards and custom frameworks. Controls are mapped once and reused across every framework you target, so adding a new one rarely means starting over.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most teams connect their core stack — cloud, identity, code and ticketing — in under a day. Integrations begin pulling evidence immediately, and your live compliance score populates within the first week.',
  },
  {
    q: 'Is YourComply suitable for startups, or only enterprise?',
    a: 'Both. Startups use it to reach their first SOC 2 or ISO 27001 quickly and unblock enterprise deals; larger teams use it to manage many frameworks and continuous monitoring at scale. The platform grows with you rather than forcing a re-platform later.',
  },
  {
    q: 'How does YourComply differ from Vanta, Drata, or Sprinto?',
    a: 'Those are strong automation platforms. YourComply pairs the same continuous-monitoring and evidence-automation foundation with a deeper AI risk engine, and is backed by SecComply’s in-house audit and advisory team — so you get the software and the people who run real audits, not just a dashboard.',
  },
]

/* ── Reusable SVG progress ring ──────────────────────────── */
function Ring({ pct, size = 56, stroke = 6, color = 'var(--accent)' }) {
  const r = (size - stroke) / 2
  const c = +(2 * Math.PI * r).toFixed(2)
  const off = +(c * (1 - pct / 100)).toFixed(2)
  return (
    <svg className="yc-ring" width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <circle className="yc-ring-bg" cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} fill="none" />
      <circle
        className="yc-ring-fg" cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} fill="none"
        stroke={color} strokeLinecap="round" strokeDasharray={c}
        style={{ '--c': `${c}px`, '--off': `${off}px` }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  )
}

/* ── Per-pillar mini-app visual ──────────────────────────── */
function PillarMock({ pillarKey }) {
  if (pillarKey === 'automation') {
    return (
      <div className="ycm-app">
        <div className="ycm-bar"><span className="ycm-bicon">🛡️</span> Control mapping<span className="ycm-tag">live</span></div>
        <div className="ycm-app-body">
          {[
            { c: 'A.8.24 Encryption', fw: ['SOC 2', 'ISO', 'DPDP'] },
            { c: 'A.5.15 Access control', fw: ['SOC 2', 'GDPR'] },
            { c: 'A.8.16 Monitoring', fw: ['ISO', 'NIST'] },
          ].map((row) => (
            <div className="ycm-map-row" key={row.c}>
              <span className="ycm-map-ctrl"><i>✓</i>{row.c}</span>
              <span className="ycm-map-fws">{row.fw.map((f) => <em key={f}>{f}</em>)}</span>
            </div>
          ))}
          <div className="ycm-meter"><span className="ycm-meter-fill" style={{ '--w': '92%' }} /><b>92% coverage</b></div>
        </div>
      </div>
    )
  }
  if (pillarKey === 'monitoring') {
    return (
      <div className="ycm-app">
        <div className="ycm-bar"><span className="ycm-bicon">📡</span> Live monitor<span className="ycm-tag live"><i /> live</span></div>
        <div className="ycm-app-body">
          <svg className="ycm-wave" viewBox="0 0 240 56" preserveAspectRatio="none" aria-hidden="true">
            <polyline points="0,40 22,38 40,42 56,18 76,44 96,28 116,46 138,14 158,40 180,30 204,44 226,26 240,34"
              fill="none" stroke="var(--accent)" strokeWidth="2" />
          </svg>
          {[
            { l: 'Cloud config · 200+ benchmarks', s: 'ok' },
            { l: 'Endpoints · MDM + encryption', s: 'ok' },
            { l: 'MFA coverage', s: 'warn' },
          ].map((r) => (
            <div className={`ycm-status s-${r.s}`} key={r.l}><span className="ycm-status-dot" />{r.l}<i>{r.s === 'ok' ? 'Passing' : 'Drift'}</i></div>
          ))}
        </div>
      </div>
    )
  }
  if (pillarKey === 'risk') {
    const cells = [1, 0, 2, 3, 1, 0, 1, 2, 3, 2, 2, 1, 0, 1, 3, 0, 0, 1, 2, 0]
    const tone = ['low', 'mid', 'high', 'crit']
    return (
      <div className="ycm-app">
        <div className="ycm-bar"><span className="ycm-bicon">⚠️</span> Risk matrix<span className="ycm-tag crit">3 critical</span></div>
        <div className="ycm-app-body ycm-risk">
          <span className="ycm-axis y">Impact</span>
          <div className="ycm-heat">{cells.map((v, i) => <span key={i} className={`hc hc-${tone[v]}`} />)}</div>
          <span className="ycm-axis x">Likelihood →</span>
        </div>
      </div>
    )
  }
  if (pillarKey === 'evidence') {
    return (
      <div className="ycm-app">
        <div className="ycm-bar"><span className="ycm-bicon">📎</span> Evidence vault<span className="ycm-tag">audit room · 2</span></div>
        <div className="ycm-app-body">
          {[
            { f: 'evidence_SOC2_CC6.1.pdf', v: 'v4', t: '2m ago' },
            { f: 'access_review_Q2.csv', v: 'v2', t: '1h ago' },
            { f: 'pentest_report_2026.pdf', v: 'v1', t: '1d ago' },
          ].map((e) => (
            <div className="ycm-evrow" key={e.f}>
              <span className="ycm-evicon">📄</span>
              <span className="ycm-evname">{e.f}</span>
              <span className="ycm-evver">{e.v}</span>
              <span className="ycm-evsigned">✓ signed</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="ycm-app">
      <div className="ycm-bar"><span className="ycm-bicon">🔒</span> trust.yourcustomer.com</div>
      <div className="ycm-app-body">
        <div className="ycm-trust-badges"><span>SOC 2 ✓</span><span>ISO 27001 ✓</span><span>GDPR ✓</span></div>
        <div className="ycm-qa">
          <b>Security questionnaire</b>
          <div className="ycm-meter"><span className="ycm-meter-fill" style={{ '--w': '86%' }} /><b>86% auto-filled</b></div>
        </div>
        <span className="ycm-req">🔓 Access requested · Acme Corp</span>
      </div>
    </div>
  )
}

export default function YourComply() {
  const [active, setActive] = useState(0)

  const onTabKey = (e, i) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); setActive((i + 1) % PILLARS.length) }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); setActive((i - 1 + PILLARS.length) % PILLARS.length) }
  }

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups = []

    // Fill the dashboard rings once it scrolls into view
    const dash = document.querySelector('.yc-dash')
    if (dash && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((ents) => {
        ents.forEach((e) => { if (e.isIntersecting) { dash.classList.add('fill'); io.unobserve(dash) } })
      }, { threshold: 0.25 })
      io.observe(dash); cleanups.push(() => io.disconnect())
    }

    // Smooth in-page anchor scrolling
    const onAnchor = (ev) => {
      const a = ev.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id.length < 2) return
      const t = document.querySelector(id)
      if (!t) return
      ev.preventDefault()
      t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }
    document.addEventListener('click', onAnchor); cleanups.push(() => document.removeEventListener('click', onAnchor))

    if (!reduce) {
      // Hero background parallax + floating-card mouse parallax
      const hero = document.querySelector('.yc-hero')
      const bg = document.querySelector('.yc-hero-bg')
      let mx = 0, my = 0, sx = 0, sy = 0, raf = 0
      const onMove = (e) => {
        const r = hero.getBoundingClientRect()
        mx = (e.clientX - r.left) / r.width - 0.5
        my = (e.clientY - r.top) / r.height - 0.5
        if (!raf) raf = requestAnimationFrame(loop)
      }
      const loop = () => {
        sx += (mx - sx) * 0.08; sy += (my - sy) * 0.08
        hero.style.setProperty('--px', sx.toFixed(3))
        hero.style.setProperty('--py', sy.toFixed(3))
        raf = (Math.abs(mx - sx) > 0.001 || Math.abs(my - sy) > 0.001) ? requestAnimationFrame(loop) : 0
      }
      if (hero) { hero.addEventListener('mousemove', onMove); cleanups.push(() => hero.removeEventListener('mousemove', onMove)) }

      let ticking = false
      const onScroll = () => {
        if (ticking) return
        ticking = true
        requestAnimationFrame(() => {
          if (bg) { const y = Math.min(window.scrollY, 700); bg.style.transform = `translate3d(0, ${y * 0.2}px, 0)` }
          ticking = false
        })
      }
      window.addEventListener('scroll', onScroll, { passive: true }); cleanups.push(() => window.removeEventListener('scroll', onScroll))

      // Subtle 3D tilt on cards
      document.querySelectorAll('.yc-tilt').forEach((c) => {
        const mm = (e) => {
          const r = c.getBoundingClientRect()
          const x = ((e.clientX - r.left) / r.width - 0.5) * 6
          const y = ((e.clientY - r.top) / r.height - 0.5) * 6
          c.style.transform = `perspective(700px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-5px)`
        }
        const ml = () => { c.style.transform = '' }
        c.addEventListener('mousemove', mm); c.addEventListener('mouseleave', ml)
        cleanups.push(() => { c.removeEventListener('mousemove', mm); c.removeEventListener('mouseleave', ml) })
      })

      // Mouse-follow glow on primary CTAs
      document.querySelectorAll('.yc-cta-glow').forEach((b) => {
        const mm = (e) => {
          const r = b.getBoundingClientRect()
          b.style.setProperty('--mx', `${e.clientX - r.left}px`)
          b.style.setProperty('--my', `${e.clientY - r.top}px`)
        }
        b.addEventListener('mousemove', mm); cleanups.push(() => b.removeEventListener('mousemove', mm))
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return (
    <>
      <Head>
        <title>YourComply — AI-Embedded GRC Platform | SecComply</title>
        <meta name="description" content="YourComply is the AI-embedded GRC platform that turns weeks of audit prep into hours — compliance automation, 24/7 continuous monitoring, an AI risk engine, an evidence vault and a customer trust center, across SOC 2, ISO 27001, HIPAA, GDPR, DPDP and 50+ frameworks." />
        <meta name="keywords" content="GRC platform, compliance automation, SOC 2 automation, ISO 27001 software, continuous compliance monitoring, evidence collection, trust center, security questionnaire automation, HIPAA, GDPR, DPDP" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://seccomply.net/yourcomply" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YourComply — AI-Embedded GRC Platform | SecComply" />
        <meta property="og:description" content="Compliance, automated. The AI-embedded GRC platform that turns weeks of audit prep into hours — across SOC 2, ISO 27001, HIPAA, GDPR, DPDP and 50+ frameworks." />
        <meta property="og:url" content="https://seccomply.net/yourcomply" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop" />
        <meta property="og:site_name" content="SecComply" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YourComply — AI-Embedded GRC Platform | SecComply" />
        <meta name="twitter:description" content="Compliance, automated. The AI-embedded GRC platform that turns weeks of audit prep into hours." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{"@context":"https://schema.org","@graph":[{"@type":"SoftwareApplication","name":"YourComply","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"YourComply is an AI-embedded GRC platform that automates security compliance across SOC 2, ISO 27001, HIPAA, GDPR, DPDP and 50+ frameworks — with continuous monitoring, an AI risk engine, an evidence vault and a customer trust center.","url":"https://seccomply.net/yourcomply","publisher":{"@type":"Organization","name":"SecComply","logo":{"@type":"ImageObject","url":"https://seccomply.net/favicon.ico"}},"featureList":["Compliance automation","24/7 continuous monitoring","AI risk engine","Evidence vault","Trust center"]},{"@type":"FAQPage","mainEntity":[${FAQ.map((f) => `{"@type":"Question","name":${JSON.stringify(f.q)},"acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(f.a)}}}`).join(',')}]},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://seccomply.net"},{"@type":"ListItem","position":2,"name":"YourComply","item":"https://seccomply.net/yourcomply"}]}]}`,
          }}
        />
      </Head>

      <Script src="/assets/js/animations.js" strategy="afterInteractive" />
      <Script src="/assets/js/counters.js" strategy="afterInteractive" />
      <Script src="/assets/js/accordion.js" strategy="afterInteractive" />

      <main className="yc-page">
        {/* ── 1. HERO ─────────────────────────────────────── */}
        <section className="yc-hero">
          <div className="yc-hero-bg" aria-hidden="true">
            <span className="yc-aurora" />
            <span className="yc-orb yc-orb-1" /><span className="yc-orb yc-orb-2" /><span className="yc-orb yc-orb-3" />
            <span className="yc-beam" />
            <span className="yc-floor" />
          </div>
          <div className="yc-hero-glow" aria-hidden="true" />

          {/* Floating product cards (decorative, mouse-parallax) */}
          <div className="yc-floats" aria-hidden="true">
            <div className="yc-fcard fc-1" style={{ '--depth': 26 }}>
              <div className="yc-fcard-in">
                <div className="yc-fc-ring"><Ring pct={87} size={44} stroke={5} color="var(--green)" /><span>87</span></div>
                <div><strong>Compliance score</strong><em>▲ 6 pts this month</em></div>
              </div>
            </div>
            <div className="yc-fcard fc-2" style={{ '--depth': 18 }}>
              <div className="yc-fcard-in"><span className="yc-fc-ic ok">✓</span><div><strong>SOC 2 · Audit-ready</strong><em>Evidence captured · 2m ago</em></div></div>
            </div>
            <div className="yc-fcard fc-3" style={{ '--depth': 34 }}>
              <div className="yc-fcard-in"><span className="yc-fc-ic warn">⚠</span><div><strong>Drift auto-resolved</strong><em>prod EC2 · security group</em></div></div>
            </div>
            <div className="yc-fcard fc-4" style={{ '--depth': 22 }}>
              <div className="yc-fcard-in"><span className="yc-fc-live"><i />LIVE</span><div><strong>24/7 monitoring</strong><em>200+ benchmarks</em></div></div>
            </div>
          </div>

          <div className="yc-hero-inner">
            <span className="yc-eyebrow"><span className="yc-eyebrow-dot" /> The SecComply Platform</span>
            <h1 className="yc-h1">
              <span className="yc-grad" data-text="YourComply">YourComply</span>
              <span className="yc-h1-line">Compliance, automated.</span>
            </h1>
            <p className="yc-lede">
              The AI-embedded GRC platform that turns weeks of audit prep into hours. It maps your controls,
              gathers your evidence, and keeps your posture audit-ready around the clock.
            </p>
            <p className="yc-lede yc-lede-2">
              The modern alternative to spreadsheets, screenshots and legacy GRC tools — one place where
              AI does the mapping and your integrations do the proving.
            </p>
            <div className="yc-hero-ctas">
              <a href={BOOK_URL} target="_blank" rel="noopener" className="btn btn-primary btn-lg yc-cta-glow">
                <span className="yc-cta-label">Book a Demo <span className="btn-icon">→</span></span>
              </a>
              <a href="#how-it-works" className="btn btn-outline btn-lg yc-btn-sweep">See How It Works</a>
            </div>
            <div className="yc-trust">
              <span className="yc-trust-label">Trusted by teams shipping</span>
              <div className="yc-trust-row">
                {['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'DPDP'].map((t) => (
                  <span key={t} className="yc-trust-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="yc-hero-fade" aria-hidden="true" />
        </section>

        <div className="yc">
        {/* ── 2. FIVE PILLARS ─────────────────────────────── */}
        <section className="yc-section" id="pillars">
          <div className="yc-head reveal">
            <span className="yc-kicker">The five pillars</span>
            <h2 className="yc-h2">One platform. Five ways it keeps you compliant.</h2>
            <p className="yc-sub">Each pillar runs continuously and shares the same control model — so evidence, risk and posture stay in sync.</p>
          </div>

          <div className="yc-pillars reveal">
            <div className="yc-tablist" role="tablist" aria-label="Platform pillars">
              {PILLARS.map((p, i) => (
                <button
                  key={p.key} role="tab" id={`yc-tab-${p.key}`} aria-selected={active === i}
                  aria-controls={`yc-panel-${p.key}`} tabIndex={active === i ? 0 : -1}
                  className={`yc-tab ${active === i ? 'on' : ''}`}
                  onClick={() => setActive(i)} onKeyDown={(e) => onTabKey(e, i)}
                >
                  <span className="yc-tab-icon">{p.icon}</span>
                  <span className="yc-tab-text">
                    <strong>{p.title}</strong>
                    <em>{p.tagline}</em>
                  </span>
                  <span className="yc-tab-arrow">→</span>
                </button>
              ))}
            </div>

            <div
              className="yc-panel" key={active} role="tabpanel"
              id={`yc-panel-${PILLARS[active].key}`} aria-labelledby={`yc-tab-${PILLARS[active].key}`}
            >
              <div className="yc-panel-copy">
                <span className="yc-panel-icon">{PILLARS[active].icon}</span>
                <h3>{PILLARS[active].title}</h3>
                <p className="yc-panel-tag">{PILLARS[active].tagline}</p>
                <ul className="yc-panel-feats">
                  {PILLARS[active].features.map((f, fi) => (
                    <li key={f} style={{ '--d': `${fi * 70}ms` }}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="yc-panel-visual">
                <PillarMock pillarKey={PILLARS[active].key} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. LIVE DASHBOARD ───────────────────────────── */}
        <section className="yc-section yc-dash-section" id="dashboard">
          <div className="yc-dash-amb" aria-hidden="true" />
          <div className="yc-head reveal">
            <span className="yc-kicker">Live posture</span>
            <h2 className="yc-h2">Your whole compliance program, on one screen.</h2>
            <p className="yc-sub">A real-time view of where you stand — scores, frameworks, evidence and drift, updating as your stack changes.</p>
          </div>

          <div className="yc-window reveal">
            <div className="yc-chrome">
              <span className="yc-dot r" /><span className="yc-dot y" /><span className="yc-dot g" />
              <span className="yc-url">yourcomply.app/dashboard</span>
            </div>

            <div className="yc-dash">
              <div className="yc-dash-grid">
                {/* Score */}
                <div className="yc-card yc-score">
                  <div className="yc-score-ring">
                    <Ring pct={87} size={148} stroke={11} color="var(--green)" />
                    <div className="yc-score-center">
                      <strong><span data-count="87" data-suffix="">0</span></strong>
                      <i>/100</i>
                    </div>
                  </div>
                  <div className="yc-score-meta">
                    <span className="yc-score-title">Overall Compliance Score</span>
                    <span className="yc-score-up">▲ <span data-count="6" data-suffix="">0</span> pts this month</span>
                  </div>
                </div>

                {/* Frameworks */}
                <div className="yc-card yc-frameworks">
                  <div className="yc-card-head"><span>Framework status</span><span className="yc-card-meta">6 active</span></div>
                  <div className="yc-fw-grid">
                    {FRAMEWORKS.map((f) => (
                      <div className="yc-fw" key={f.name}>
                        <div className="yc-fw-ring"><Ring pct={f.pct} size={46} stroke={5} color={STATUS[f.status].color} /></div>
                        <div className="yc-fw-body">
                          <span className="yc-fw-name">{f.icon} {f.name}</span>
                          <span className="yc-fw-pct"><span data-count={f.pct} data-suffix="%">0%</span></span>
                        </div>
                        <span className="yc-pill" style={{ color: STATUS[f.status].color, borderColor: STATUS[f.status].color }}>
                          {STATUS[f.status].label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity */}
                <div className="yc-card yc-activity">
                  <div className="yc-card-head"><span>Recent activity</span><span className="yc-live"><i />live</span></div>
                  <ul className="yc-feed">
                    {ACTIVITY.map((a, i) => (
                      <li className={`yc-act t-${a.tone} reveal`} key={i} style={{ transitionDelay: `${i * 90}ms` }}>
                        <span className="yc-act-icon">{a.icon}</span>
                        <span className="yc-act-text">{a.text}</span>
                        <span className="yc-act-time">{a.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Drift alerts */}
                <div className="yc-card yc-alerts">
                  <div className="yc-card-head"><span>Drift alerts</span><span className="yc-card-meta">3 open</span></div>
                  <div className="yc-alert-list">
                    {ALERTS.map((al, i) => (
                      <div className={`yc-alert sev-${al.sev.toLowerCase()}`} key={i}>
                        <span className="yc-sev">{al.sev}</span>
                        <div className="yc-alert-body">
                          <strong>{al.text}</strong>
                          <span>{al.fix}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Integrations marquee */}
              <div className="yc-integrations">
                <span className="yc-int-label">Connected</span>
                <div className="yc-marq">
                  <div className="yc-marq-track">
                    {[...INTEGRATIONS, ...INTEGRATIONS].map((it, i) => (
                      <span className="yc-int-chip" key={i}><i>{it.i}</i>{it.n}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. HOW IT WORKS ─────────────────────────────── */}
        <section className="yc-section" id="how-it-works">
          <div className="yc-head reveal">
            <span className="yc-kicker">How it works</span>
            <h2 className="yc-h2">Live in a day. Audit-ready for good.</h2>
            <p className="yc-sub">Three steps from a cold start to continuous compliance.</p>
          </div>
          <div className="yc-steps reveal">
            <span className="yc-steps-line" aria-hidden="true" />
            {STEPS.map((s) => (
              <div className="yc-step" key={s.n}>
                <div className="yc-step-num">{s.n}</div>
                <div className="yc-step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. WHY YOURCOMPLY ───────────────────────────── */}
        <section className="yc-section" id="why">
          <div className="yc-head reveal">
            <span className="yc-kicker">Why YourComply</span>
            <h2 className="yc-h2">The old way was never built for continuous compliance.</h2>
            <p className="yc-sub">Compliance is no longer a once-a-year scramble. YourComply makes it a living state.</p>
          </div>
          <div className="yc-why reveal">
            <div className="yc-why-col yc-why-old">
              <span className="yc-why-h">The old way</span>
              {WHY.map((w, i) => <div className="yc-why-row" key={i}><span className="yc-x">✗</span>{w.old}</div>)}
            </div>
            <div className="yc-why-mid" aria-hidden="true">VS</div>
            <div className="yc-why-col yc-why-new yc-tilt">
              <span className="yc-why-h">The YourComply way</span>
              {WHY.map((w, i) => <div className="yc-why-row" key={i}><span className="yc-check">✓</span>{w.neu}</div>)}
            </div>
          </div>
        </section>

        {/* ── 6. STATS ────────────────────────────────────── */}
        <section className="yc-section yc-stats-section" id="stats">
          <div className="yc-stats reveal">
            {STATS.map((s, i) => (
              <div className="yc-stat yc-tilt" key={i}>
                <div className="yc-stat-icon">{s.icon}</div>
                <div className="yc-stat-num">
                  {s.fixed
                    ? s.fixed
                    : <><span data-count={s.to} data-suffix="">0</span>{s.suffix}</>}
                </div>
                <div className="yc-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. FAQ ──────────────────────────────────────── */}
        <section className="yc-section yc-faq-section" id="faq">
          <div className="yc-head reveal">
            <span className="yc-kicker">FAQ</span>
            <h2 className="yc-h2">Questions, answered.</h2>
          </div>
          <div className="yc-faq reveal">
            {FAQ.map((f, i) => (
              <div className={`faq-item ${i === 0 ? 'open' : ''}`} key={i}>
                <button className="faq-question">{f.q}<span className="faq-toggle">+</span></button>
                <div className="faq-answer" style={i === 0 ? { maxHeight: '400px' } : undefined}>
                  <div className="faq-answer-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 8. CLOSING CTA ──────────────────────────────── */}
        <section className="yc-cta-section">
          <div className="yc-cta reveal">
            <h2>Stop chasing compliance. Start shipping it.</h2>
            <p>See YourComply mapped to your stack in a 30-minute demo — and walk away with a clear path to your next audit.</p>
            <div className="yc-cta-btns">
              <a href={BOOK_URL} target="_blank" rel="noopener" className="btn btn-primary btn-lg yc-cta-glow">
                <span className="yc-cta-label">Book a Demo <span className="btn-icon">→</span></span>
              </a>
              <Link href="/pricing" className="btn btn-outline btn-lg yc-btn-sweep">View Pricing</Link>
            </div>
          </div>
        </section>
        </div>
      </main>

      <style jsx global>{`
        /* ===== YourComply — scoped to this page via yc- prefix ===== */
        .yc-page { overflow-x: clip; }
        .yc { max-width: 1180px; margin: 0 auto; padding: 0 24px 40px; overflow: clip; }
        .yc-section { padding: 96px 0; position: relative; }
        .yc-section::before { content: ''; position: absolute; width: 620px; height: 620px; border-radius: 50%; filter: blur(50px); pointer-events: none; z-index: 0; }
        .yc-section:nth-of-type(odd)::before { top: 3%; right: -210px; background: radial-gradient(circle, rgba(255,96,0,.06), transparent 68%); }
        .yc-section:nth-of-type(even)::before { top: 14%; left: -210px; background: radial-gradient(circle, rgba(59,130,246,.05), transparent 68%); }
        .yc-head, .yc-pillars, .yc-steps, .yc-why, .yc-stats, .yc-faq { position: relative; z-index: 1; }
        .yc-head { max-width: 720px; margin: 0 auto 50px; text-align: center; }
        .yc-kicker { display: inline-flex; align-items: center; gap: 8px; font-size: .72rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: var(--accent-light); margin-bottom: 18px; padding: 7px 16px; border-radius: var(--radius-full); background: rgba(255,96,0,.07); border: 1px solid rgba(255,96,0,.2); }
        .yc-kicker::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); }
        .yc-h2 { font-size: clamp(1.6rem, 3.4vw, 2.5rem); font-weight: 800; color: var(--white); line-height: 1.18; letter-spacing: -.01em; margin: 0 0 14px; }
        .yc-sub { font-size: 1.02rem; color: var(--text-secondary); line-height: 1.65; margin: 0; }

        /* ============ HERO ============ */
        .yc-hero { position: relative; min-height: calc(100vh - 60px); min-height: calc(100svh - 60px); display: flex; align-items: center; justify-content: center; padding: 96px 24px 104px; text-align: center; overflow: clip; --px: 0; --py: 0; }
        .yc-hero-bg { position: absolute; inset: -14% 0; z-index: 0; pointer-events: none; will-change: transform; }
        .yc-hero-glow { position: absolute; top: 44%; left: 50%; width: 820px; height: 820px; max-width: 130vw; transform: translate(-50%, -50%); background: radial-gradient(circle, rgba(255,96,0,.17), rgba(255,96,0,.04) 38%, transparent 64%); pointer-events: none; z-index: 0; animation: ycPulse 7s ease-in-out infinite; }
        .yc-hero-fade { position: absolute; left: 0; right: 0; bottom: 0; height: 160px; background: linear-gradient(to bottom, transparent, var(--bg-primary)); z-index: 1; pointer-events: none; }
        .yc-aurora { position: absolute; inset: -20%; background:
            radial-gradient(42% 42% at 26% 28%, rgba(255,96,0,.26), transparent 70%),
            radial-gradient(40% 40% at 78% 32%, rgba(255,138,61,.13), transparent 70%),
            radial-gradient(36% 36% at 72% 64%, rgba(59,130,246,.1), transparent 72%),
            radial-gradient(40% 40% at 40% 76%, rgba(139,92,246,.1), transparent 72%);
          filter: blur(30px); animation: ycSpin 38s linear infinite; transform-origin: 50% 45%; }
        .yc-orb { position: absolute; border-radius: 50%; filter: blur(90px); opacity: .5; }
        .yc-orb-1 { width: 440px; height: 440px; background: rgba(255,96,0,.16); top: -130px; left: 6%; animation: ycFloat 14s ease-in-out infinite; }
        .yc-orb-2 { width: 360px; height: 360px; background: rgba(59,130,246,.10); top: 30px; right: 4%; animation: ycFloat 18s ease-in-out infinite reverse; }
        .yc-orb-3 { width: 300px; height: 300px; background: rgba(139,92,246,.08); bottom: -120px; left: 44%; animation: ycFloat 16s ease-in-out infinite; }
        .yc-beam { position: absolute; top: 0; left: -40%; width: 32%; height: 130%; transform: skewX(-14deg); background: linear-gradient(100deg, transparent, rgba(255,255,255,.06), transparent); animation: ycBeam 9s ease-in-out infinite; }
        .yc-floor { position: absolute; left: -20%; right: -20%; bottom: -6%; height: 56%;
          background-image: linear-gradient(rgba(255,96,0,.24) 1px, transparent 1px), linear-gradient(90deg, rgba(255,96,0,.14) 1px, transparent 1px);
          background-size: 48px 48px; transform: perspective(440px) rotateX(64deg); transform-origin: bottom;
          mask-image: linear-gradient(to top, #000 0%, transparent 80%); -webkit-mask-image: linear-gradient(to top, #000 0%, transparent 80%);
          animation: ycFloor 7s linear infinite; opacity: .85; }

        .yc-floats { position: absolute; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: min(1360px, 96vw); z-index: 1; pointer-events: none; }
        .yc-fcard { position: absolute; transform: translate3d(calc(var(--px) * var(--depth) * 1px), calc(var(--py) * var(--depth) * 1px), 0); transition: transform .25s ease-out; }
        .yc-fcard-in { display: flex; align-items: center; gap: 11px; padding: 13px 16px; border-radius: 14px; background: linear-gradient(150deg, rgba(23,32,52,.92), rgba(15,21,38,.85)); border: 1px solid rgba(255,255,255,.12); box-shadow: 0 20px 54px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.07); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); animation: ycBob 7s ease-in-out infinite; }
        .yc-fcard strong { display: block; font-size: .82rem; color: var(--white); font-weight: 700; white-space: nowrap; }
        .yc-fcard em { display: block; font-style: normal; font-size: .7rem; color: var(--text-muted); white-space: nowrap; }
        .yc-fc-ring { position: relative; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .yc-fc-ring span { position: absolute; font-size: .72rem; font-weight: 800; color: var(--white); }
        .yc-fc-ring .yc-ring-fg { stroke-dashoffset: var(--off); transition: stroke-dashoffset 1.4s var(--ease-out) .5s; }
        .yc-fc-ic { width: 30px; height: 30px; flex-shrink: 0; border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: .85rem; font-weight: 800; }
        .yc-fc-ic.ok { background: rgba(16,185,129,.16); color: var(--green); }
        .yc-fc-ic.warn { background: rgba(245,158,11,.16); color: var(--yellow); }
        .yc-fc-live { display: inline-flex; align-items: center; gap: 6px; font-size: .64rem; font-weight: 800; letter-spacing: .08em; color: var(--green); flex-shrink: 0; }
        .yc-fc-live i { width: 7px; height: 7px; border-radius: 50%; background: var(--green); box-shadow: 0 0 8px var(--green); animation: pulse 1.6s infinite; }
        .fc-1 { top: 15%; left: 0; } .fc-1 .yc-fcard-in { animation-delay: 0s; }
        .fc-2 { top: 20%; right: 0; } .fc-2 .yc-fcard-in { animation-delay: -2s; }
        .fc-3 { bottom: 18%; left: 1%; } .fc-3 .yc-fcard-in { animation-delay: -4s; }
        .fc-4 { bottom: 22%; right: 0; } .fc-4 .yc-fcard-in { animation-delay: -3s; }
        @media (max-width: 1200px) { .yc-floats { display: none; } }

        .yc-hero-inner { position: relative; z-index: 2; max-width: 720px; margin: 0 auto; }
        .yc-hero-inner::before { content: ''; position: absolute; inset: -16% -22%; z-index: -1; background: radial-gradient(ellipse 62% 64% at 50% 46%, rgba(2,6,23,.74), rgba(2,6,23,.3) 55%, transparent 74%); pointer-events: none; }
        .yc-eyebrow { display: inline-flex; align-items: center; gap: 9px; padding: 7px 16px; border-radius: var(--radius-full); background: rgba(255,96,0,.08); border: 1px solid rgba(255,96,0,.22); font-size: .8rem; font-weight: 600; color: var(--accent-light); margin-bottom: 24px; animation: ycUp .7s var(--ease-out) both; }
        .yc-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); animation: pulse 2s infinite; }
        .yc-h1 { margin: 0 0 22px; display: flex; flex-direction: column; gap: 4px; animation: ycUp .7s var(--ease-out) .08s both; }
        .yc-grad { position: relative; font-size: clamp(2.9rem, 7.6vw, 5.6rem); font-weight: 900; line-height: 1; letter-spacing: -.03em; background: linear-gradient(90deg, #FF7A1F, #FFA458, #FFE0C2, #FFA458, #FF7A1F); background-size: 220% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; filter: drop-shadow(0 4px 26px rgba(255,96,0,.3)); animation: textShimmer 7s linear infinite; }
        .yc-grad::after { content: attr(data-text); position: absolute; inset: 0; background: inherit; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: blur(20px); opacity: .42; z-index: -1; }
        .yc-h1-line { font-size: clamp(1.45rem, 3.6vw, 2.3rem); font-weight: 800; color: #fff; letter-spacing: -.01em; text-shadow: 0 2px 34px rgba(0,0,0,.55); }
        .yc-lede { font-size: 1.14rem; color: #CBD6E6; line-height: 1.7; max-width: 640px; margin: 0 auto 14px; animation: ycUp .7s var(--ease-out) .16s both; }
        .yc-lede-2 { font-size: 1rem; color: var(--text-secondary); animation-delay: .22s; }
        .yc-hero-ctas { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; margin: 30px 0 36px; animation: ycUp .7s var(--ease-out) .3s both; }
        .yc-cta-glow { position: relative; }
        .yc-cta-glow::after { content: ''; position: absolute; inset: 0; border-radius: inherit; pointer-events: none; background: radial-gradient(150px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,.42), transparent 62%); opacity: 0; transition: opacity .35s ease; z-index: 0; }
        .yc-cta-glow:hover::after { opacity: 1; }
        .yc-cta-label { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: 8px; }
        .yc-btn-sweep { position: relative; overflow: hidden; }
        .yc-btn-sweep::before { content: ''; position: absolute; top: 0; left: -120%; width: 80%; height: 100%; background: linear-gradient(100deg, transparent, rgba(255,255,255,.16), transparent); transform: skewX(-18deg); transition: left .6s var(--ease-out); }
        .yc-btn-sweep:hover::before { left: 140%; }
        .yc-trust { animation: ycUp .7s var(--ease-out) .4s both; }
        .yc-trust-label { display: block; font-size: .72rem; text-transform: uppercase; letter-spacing: .12em; color: var(--text-muted); margin-bottom: 12px; }
        .yc-trust-row { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
        .yc-trust-chip { padding: 6px 16px; background: rgba(255,255,255,.04); border: 1px solid var(--border); border-radius: var(--radius-full); font-size: .78rem; font-weight: 700; color: var(--text-secondary); transition: all .25s var(--ease-out); }
        .yc-trust-chip:hover { border-color: rgba(255,96,0,.4); color: var(--accent-light); transform: translateY(-3px); box-shadow: 0 8px 22px rgba(255,96,0,.14); }

        /* ============ PILLARS (tabs) ============ */
        .yc-pillars { display: grid; grid-template-columns: minmax(0, 380px) minmax(0, 1fr); gap: 26px; align-items: start; }
        .yc-tablist { display: flex; flex-direction: column; gap: 10px; }
        .yc-tab { display: flex; align-items: center; gap: 14px; text-align: left; padding: 16px 18px; border-radius: var(--radius-lg); background: var(--bg-card); border: 1px solid var(--border); color: var(--white); cursor: pointer; font-family: inherit; transition: transform .3s var(--ease-out), border-color .3s, background .3s, box-shadow .3s; position: relative; overflow: hidden; }
        .yc-tab::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--gradient-accent); transform: scaleY(0); transform-origin: top; transition: transform .3s var(--ease-out); }
        .yc-tab::after { content: ''; position: absolute; inset: 0; border-radius: inherit; background: radial-gradient(160px circle at 50% 0%, rgba(255,96,0,.1), transparent 70%); opacity: 0; transition: opacity .3s; pointer-events: none; }
        .yc-tab:hover { border-color: rgba(255,96,0,.28); transform: translateX(3px); box-shadow: 0 10px 30px rgba(0,0,0,.28); }
        .yc-tab:hover::after { opacity: 1; }
        .yc-tab.on { border-color: rgba(255,96,0,.42); background: linear-gradient(135deg, rgba(255,96,0,.1), var(--bg-card)); box-shadow: 0 12px 36px rgba(255,96,0,.1); }
        .yc-tab.on::before { transform: scaleY(1); }
        .yc-tab-icon { width: 42px; height: 42px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; border-radius: 12px; background: rgba(255,255,255,.05); border: 1px solid var(--border); transition: transform .35s var(--ease-spring), background .3s, border-color .3s; }
        .yc-tab.on .yc-tab-icon { background: rgba(255,96,0,.16); border-color: rgba(255,96,0,.35); transform: scale(1.08); }
        .yc-tab:hover .yc-tab-icon { transform: rotate(-8deg) scale(1.12); }
        .yc-tab-text { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
        .yc-tab-text strong { font-size: .98rem; font-weight: 700; }
        .yc-tab-text em { font-style: normal; font-size: .8rem; color: var(--text-muted); }
        .yc-tab-arrow { margin-left: auto; color: var(--accent); opacity: 0; transform: translateX(-8px); transition: all .3s var(--ease-out); }
        .yc-tab.on .yc-tab-arrow { opacity: 1; transform: translateX(0); }

        .yc-panel { display: grid; grid-template-columns: 1fr 1.05fr; gap: 26px; border: 1px solid transparent; background: linear-gradient(150deg, var(--bg-card), var(--bg-secondary)) padding-box, linear-gradient(135deg, rgba(255,96,0,.5), rgba(255,255,255,.06) 45%, rgba(59,130,246,.2)) border-box; border-radius: var(--radius-xl); padding: 34px; min-height: 340px; box-shadow: 0 30px 70px rgba(0,0,0,.36); animation: ycPanelIn .5s var(--ease-out) both; position: relative; overflow: hidden; }
        .yc-panel::before { content: ''; position: absolute; top: -50%; right: -20%; width: 360px; height: 360px; background: radial-gradient(circle, rgba(255,96,0,.1), transparent 65%); pointer-events: none; }
        .yc-panel-copy { position: relative; }
        .yc-panel-icon { font-size: 2.3rem; display: inline-flex; width: 60px; height: 60px; align-items: center; justify-content: center; border-radius: 16px; background: rgba(255,96,0,.1); border: 1px solid rgba(255,96,0,.22); margin-bottom: 16px; animation: ycPop .5s var(--ease-spring) both; }
        .yc-panel-copy h3 { font-size: 1.5rem; font-weight: 800; color: var(--white); margin: 0 0 6px; }
        .yc-panel-tag { font-size: .92rem; color: var(--accent-light); font-weight: 600; margin: 0 0 20px; }
        .yc-panel-feats { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .yc-panel-feats li { position: relative; padding-left: 30px; font-size: .92rem; color: var(--text-secondary); line-height: 1.55; animation: ycSlide .5s var(--ease-out) both; animation-delay: var(--d); }
        .yc-panel-feats li::before { content: '✓'; position: absolute; left: 0; top: 1px; width: 20px; height: 20px; border-radius: 6px; background: rgba(16,185,129,.15); color: var(--green); font-size: .7rem; font-weight: 800; display: flex; align-items: center; justify-content: center; }
        .yc-panel-visual { display: flex; align-items: center; justify-content: center; }

        /* ---- Pillar mini-app ---- */
        .ycm-app { width: 100%; max-width: 380px; border-radius: 16px; border: 1px solid var(--border-hover); background: var(--bg-primary); box-shadow: 0 24px 60px rgba(0,0,0,.45); overflow: hidden; animation: ycMockIn .55s var(--ease-out) both; }
        .ycm-bar { display: flex; align-items: center; gap: 9px; padding: 12px 15px; font-size: .82rem; font-weight: 700; color: var(--white); background: rgba(255,255,255,.03); border-bottom: 1px solid var(--border); }
        .ycm-bicon { font-size: .95rem; }
        .ycm-tag { margin-left: auto; font-size: .62rem; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; color: var(--text-muted); background: rgba(255,255,255,.05); padding: 3px 8px; border-radius: 6px; }
        .ycm-tag.live { color: var(--green); background: rgba(16,185,129,.12); display: inline-flex; align-items: center; gap: 5px; }
        .ycm-tag.live i { width: 6px; height: 6px; border-radius: 50%; background: var(--green); box-shadow: 0 0 6px var(--green); animation: pulse 1.5s infinite; }
        .ycm-tag.crit { color: var(--red); background: rgba(239,68,68,.12); }
        .ycm-app-body { padding: 16px; display: flex; flex-direction: column; gap: 11px; }
        .ycm-map-row { display: flex; align-items: center; gap: 10px; justify-content: space-between; }
        .ycm-map-ctrl { display: inline-flex; align-items: center; gap: 8px; font-size: .82rem; font-weight: 600; color: var(--white); }
        .ycm-map-ctrl i { width: 17px; height: 17px; border-radius: 50%; background: rgba(16,185,129,.16); color: var(--green); font-style: normal; font-size: .64rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ycm-map-fws { display: flex; gap: 5px; flex-wrap: wrap; justify-content: flex-end; }
        .ycm-map-fws em { font-style: normal; font-size: .64rem; font-weight: 700; color: var(--accent-light); background: rgba(255,96,0,.1); border: 1px solid rgba(255,96,0,.2); padding: 2px 7px; border-radius: 5px; }
        .ycm-meter { position: relative; height: 26px; border-radius: 8px; background: rgba(255,255,255,.05); overflow: hidden; display: flex; align-items: center; }
        .ycm-meter-fill { position: absolute; left: 0; top: 0; bottom: 0; width: var(--w); background: var(--gradient-accent); border-radius: 8px; transform-origin: left; animation: ycGrow 1.2s var(--ease-out) both; }
        .ycm-meter b { position: relative; z-index: 1; font-size: .68rem; font-weight: 800; color: #fff; padding-left: 10px; }
        .ycm-wave { width: 100%; height: 56px; }
        .ycm-wave polyline { stroke-dasharray: 700; stroke-dashoffset: 700; animation: ycDraw 1.8s var(--ease-out) forwards; filter: drop-shadow(0 0 5px rgba(255,96,0,.5)); }
        .ycm-status { display: flex; align-items: center; gap: 9px; font-size: .8rem; color: var(--text-secondary); padding: 8px 10px; border-radius: 9px; background: rgba(255,255,255,.02); border: 1px solid var(--border); }
        .ycm-status i { margin-left: auto; font-style: normal; font-size: .64rem; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; }
        .ycm-status-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .ycm-status.s-ok .ycm-status-dot { background: var(--green); box-shadow: 0 0 7px rgba(16,185,129,.6); }
        .ycm-status.s-ok i { color: var(--green); }
        .ycm-status.s-warn .ycm-status-dot { background: var(--yellow); box-shadow: 0 0 7px rgba(245,158,11,.6); animation: pulse 1.5s infinite; }
        .ycm-status.s-warn i { color: var(--yellow); }
        .ycm-risk { position: relative; padding-left: 26px; padding-bottom: 24px; }
        .ycm-heat { display: grid; grid-template-columns: repeat(5, 1fr); gap: 7px; }
        .ycm-heat .hc { aspect-ratio: 1; border-radius: 6px; animation: ycPop .5s var(--ease-out) both; }
        .hc-low { background: rgba(16,185,129,.24); } .hc-mid { background: rgba(245,158,11,.3); }
        .hc-high { background: rgba(255,96,0,.36); } .hc-crit { background: rgba(239,68,68,.46); box-shadow: 0 0 12px rgba(239,68,68,.35); }
        .ycm-axis { position: absolute; font-size: .6rem; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: var(--text-muted); }
        .ycm-axis.y { left: -2px; top: 50%; transform: rotate(-90deg) translateX(50%); transform-origin: left; }
        .ycm-axis.x { left: 26px; bottom: 2px; }
        .ycm-evrow { display: flex; align-items: center; gap: 9px; font-size: .78rem; padding: 9px 10px; border-radius: 9px; background: rgba(255,255,255,.02); border: 1px solid var(--border); }
        .ycm-evicon { flex-shrink: 0; }
        .ycm-evname { flex: 1; color: var(--white); font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .ycm-evver { font-size: .62rem; font-weight: 800; color: var(--accent-light); background: rgba(255,96,0,.1); padding: 2px 6px; border-radius: 5px; }
        .ycm-evsigned { font-size: .64rem; color: var(--green); font-weight: 700; white-space: nowrap; }
        .ycm-trust-badges { display: flex; gap: 7px; flex-wrap: wrap; }
        .ycm-trust-badges span { font-size: .72rem; font-weight: 700; color: var(--green); background: rgba(16,185,129,.14); border: 1px solid rgba(16,185,129,.25); padding: 5px 10px; border-radius: 7px; }
        .ycm-qa { display: flex; flex-direction: column; gap: 8px; }
        .ycm-qa > b { font-size: .76rem; color: var(--text-secondary); font-weight: 600; }
        .ycm-req { font-size: .72rem; color: var(--text-muted); background: rgba(255,255,255,.03); border: 1px dashed var(--border-hover); padding: 8px 10px; border-radius: 8px; }

        /* ============ DASHBOARD ============ */
        .yc-dash-section { overflow: clip; }
        .yc-dash-amb { position: absolute; top: 20%; left: 50%; width: 760px; height: 520px; transform: translateX(-50%); background: radial-gradient(circle, rgba(255,96,0,.1), transparent 65%); filter: blur(40px); pointer-events: none; z-index: 0; animation: ycDrift 18s ease-in-out infinite; }
        .yc-window { position: relative; z-index: 1; border-radius: var(--radius-xl); border: 1px solid transparent; background: linear-gradient(var(--bg-secondary), var(--bg-secondary)) padding-box, linear-gradient(160deg, rgba(255,96,0,.42), rgba(255,255,255,.05) 42%, rgba(59,130,246,.16)) border-box; box-shadow: 0 44px 100px rgba(0,0,0,.55); overflow: hidden; max-width: 1080px; margin: 0 auto; transition: transform .5s var(--ease-out), box-shadow .5s; }
        .yc-window:hover { box-shadow: 0 50px 120px rgba(0,0,0,.6), 0 0 60px rgba(255,96,0,.06); }
        .yc-chrome { display: flex; align-items: center; gap: 8px; padding: 13px 18px; background: rgba(255,255,255,.03); border-bottom: 1px solid var(--border); }
        .yc-dot { width: 12px; height: 12px; border-radius: 50%; }
        .yc-dot.r { background: #ff5f57; } .yc-dot.y { background: #febc2e; } .yc-dot.g { background: #28c840; }
        .yc-url { margin-left: 14px; font-size: .8rem; color: var(--text-muted); font-family: var(--font-mono); background: rgba(255,255,255,.04); padding: 4px 14px; border-radius: 7px; }
        .yc-dash { padding: 22px; }
        .yc-dash-grid { display: grid; grid-template-columns: 1.15fr 1fr; grid-template-areas: 'score activity' 'frameworks activity' 'frameworks alerts'; gap: 16px; }
        .yc-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 18px; box-shadow: inset 0 1px 0 rgba(255,255,255,.04); transition: transform .3s var(--ease-out), border-color .3s, box-shadow .3s; }
        .yc-card:hover { transform: translateY(-3px); border-color: rgba(255,96,0,.25); box-shadow: 0 16px 40px rgba(0,0,0,.3); }
        .yc-card-head { display: flex; align-items: center; justify-content: space-between; font-size: .85rem; font-weight: 700; color: var(--white); margin-bottom: 14px; }
        .yc-card-meta { font-size: .72rem; color: var(--text-muted); font-weight: 600; }
        .yc-live { font-size: .7rem; color: var(--green); font-weight: 800; display: inline-flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: .04em; }
        .yc-live i { width: 7px; height: 7px; border-radius: 50%; background: var(--green); box-shadow: 0 0 8px var(--green); animation: pulse 1.5s infinite; }
        .yc-score { grid-area: score; display: flex; align-items: center; gap: 20px; }
        .yc-score-ring { position: relative; flex-shrink: 0; }
        .yc-score-center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .yc-score-center strong { font-size: 2.3rem; font-weight: 900; color: var(--white); line-height: 1; }
        .yc-score-center i { font-style: normal; font-size: .82rem; color: var(--text-muted); }
        .yc-score-title { display: block; font-size: 1rem; font-weight: 700; color: var(--white); margin-bottom: 6px; }
        .yc-score-up { font-size: .82rem; color: var(--green); font-weight: 700; }
        .yc-frameworks { grid-area: frameworks; }
        .yc-fw-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .yc-fw { display: flex; align-items: center; gap: 11px; padding: 11px; border-radius: 10px; background: rgba(255,255,255,.02); border: 1px solid var(--border); transition: transform .25s var(--ease-out), border-color .25s, background .25s; }
        .yc-fw:hover { transform: translateY(-2px); border-color: rgba(255,96,0,.3); background: rgba(255,96,0,.04); }
        .yc-fw-ring { flex-shrink: 0; }
        .yc-fw-body { display: flex; flex-direction: column; gap: 2px; min-width: 0; flex: 1; }
        .yc-fw-name { font-size: .8rem; font-weight: 700; color: var(--white); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .yc-fw-pct { font-size: .72rem; color: var(--text-muted); font-weight: 600; }
        .yc-pill { font-size: .6rem; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; padding: 3px 7px; border-radius: var(--radius-full); border: 1px solid; background: rgba(255,255,255,.02); white-space: nowrap; }
        .yc-activity { grid-area: activity; }
        .yc-feed { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
        .yc-act { display: flex; align-items: center; gap: 11px; padding: 11px 6px; border-bottom: 1px solid var(--border); border-radius: 8px; transition: background .25s, padding-left .25s; }
        .yc-act:hover { background: rgba(255,255,255,.03); padding-left: 12px; }
        .yc-act:last-child { border-bottom: none; }
        .yc-act-icon { width: 30px; height: 30px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: .9rem; border-radius: 8px; background: rgba(255,255,255,.04); }
        .yc-act-text { flex: 1; font-size: .82rem; color: var(--text-secondary); line-height: 1.4; }
        .yc-act-time { font-size: .7rem; color: var(--text-muted); white-space: nowrap; }
        .yc-act.t-warn .yc-act-icon { background: rgba(245,158,11,.14); }
        .yc-act.t-ok .yc-act-icon { background: rgba(16,185,129,.14); }
        .yc-act.t-accent .yc-act-icon { background: rgba(255,96,0,.14); }
        .yc-alerts { grid-area: alerts; }
        .yc-alert-list { display: flex; flex-direction: column; gap: 10px; }
        .yc-alert { display: flex; gap: 11px; padding: 11px; border-radius: 10px; background: rgba(255,255,255,.02); border: 1px solid var(--border); border-left: 3px solid var(--text-muted); transition: transform .25s var(--ease-out), background .25s; }
        .yc-alert:hover { transform: translateX(3px); background: rgba(255,255,255,.04); }
        .yc-alert.sev-high { border-left-color: var(--red); }
        .yc-alert.sev-medium { border-left-color: var(--yellow); }
        .yc-alert.sev-low { border-left-color: var(--blue); }
        .yc-sev { font-size: .62rem; font-weight: 800; text-transform: uppercase; letter-spacing: .04em; padding: 3px 8px; border-radius: 6px; height: fit-content; white-space: nowrap; }
        .sev-high .yc-sev { background: rgba(239,68,68,.16); color: var(--red); }
        .sev-medium .yc-sev { background: rgba(245,158,11,.16); color: var(--yellow); }
        .sev-low .yc-sev { background: rgba(59,130,246,.16); color: var(--blue); }
        .yc-alert-body { display: flex; flex-direction: column; gap: 3px; }
        .yc-alert-body strong { font-size: .82rem; color: var(--white); font-weight: 700; }
        .yc-alert-body span { font-size: .76rem; color: var(--text-muted); line-height: 1.45; }
        .yc-integrations { display: flex; align-items: center; gap: 16px; margin-top: 16px; padding: 14px 18px; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); }
        .yc-int-label { font-size: .72rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--text-muted); flex-shrink: 0; }
        .yc-marq { overflow: hidden; flex: 1; mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
        .yc-marq-track { display: flex; gap: 12px; width: max-content; animation: ycMarquee 24s linear infinite; }
        .yc-marq:hover .yc-marq-track { animation-play-state: paused; }
        .yc-int-chip { display: inline-flex; align-items: center; gap: 7px; padding: 7px 14px; border-radius: var(--radius-full); background: rgba(255,255,255,.04); border: 1px solid var(--border); font-size: .8rem; font-weight: 600; color: var(--text-secondary); white-space: nowrap; transition: transform .25s var(--ease-out), border-color .25s, color .25s; }
        .yc-int-chip:hover { transform: translateY(-3px); border-color: rgba(255,96,0,.35); color: var(--accent-light); }
        .yc-int-chip i { font-style: normal; }

        /* ---- Progress rings ---- */
        .yc-ring-bg { stroke: rgba(255,255,255,.08); }
        .yc-ring-fg { stroke-dashoffset: var(--c); transition: stroke-dashoffset 1.3s var(--ease-out); }
        .yc-dash.fill .yc-ring-fg { stroke-dashoffset: var(--off); }

        /* ============ HOW IT WORKS ============ */
        .yc-steps { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .yc-steps-line { position: absolute; top: 44px; left: 16%; right: 16%; height: 2px; background: linear-gradient(90deg, transparent, rgba(255,96,0,.5), transparent); transform: scaleX(0); transform-origin: left; transition: transform 1.1s var(--ease-out) .2s; }
        .yc-steps.visible .yc-steps-line { transform: scaleX(1); }
        .yc-step { text-align: center; padding: 24px 14px; border-radius: var(--radius-xl); border: 1px solid transparent; position: relative; transition: transform .3s var(--ease-out), border-color .3s, background .3s; }
        .yc-step:hover { transform: translateY(-6px); border-color: var(--border); background: rgba(255,255,255,.02); }
        .yc-step-num { width: 40px; height: 40px; margin: 0 auto 16px; border-radius: 50%; background: linear-gradient(135deg, rgba(255,96,0,.22), rgba(255,96,0,.05)); border: 1px solid rgba(255,96,0,.4); color: var(--accent-light); font-size: .82rem; font-weight: 800; display: flex; align-items: center; justify-content: center; position: relative; z-index: 1; transition: box-shadow .3s, transform .3s; }
        .yc-step:hover .yc-step-num { box-shadow: 0 0 22px rgba(255,96,0,.5); transform: scale(1.12); }
        .yc-step-icon { font-size: 2rem; margin-bottom: 14px; display: inline-block; transition: transform .35s var(--ease-spring); }
        .yc-step:hover .yc-step-icon { transform: translateY(-4px) scale(1.14); }
        .yc-step h3 { font-size: 1.2rem; font-weight: 800; color: var(--white); margin: 0 0 8px; }
        .yc-step p { font-size: .9rem; color: var(--text-secondary); line-height: 1.6; margin: 0; }

        /* ============ WHY ============ */
        .yc-why { display: grid; grid-template-columns: 1fr auto 1fr; gap: 18px; align-items: center; max-width: 980px; margin: 0 auto; }
        .yc-why-col { border-radius: var(--radius-xl); padding: 28px; }
        .yc-why-old { background: rgba(255,255,255,.02); border: 1px solid var(--border); }
        .yc-why-new { background: linear-gradient(135deg, rgba(255,96,0,.1), rgba(15,23,42,.5)); border: 1px solid rgba(255,96,0,.3); transition: transform .25s var(--ease-out), box-shadow .3s; }
        .yc-why-new:hover { box-shadow: 0 26px 60px rgba(0,0,0,.42), 0 0 50px rgba(255,96,0,.1); }
        .yc-why-h { display: block; font-size: .76rem; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 18px; }
        .yc-why-old .yc-why-h { color: var(--text-muted); }
        .yc-why-new .yc-why-h { color: var(--accent-light); }
        .yc-why-row { display: flex; align-items: flex-start; gap: 11px; padding: 11px 0; border-bottom: 1px solid var(--border); font-size: .92rem; line-height: 1.5; }
        .yc-why-row:last-child { border-bottom: none; }
        .yc-why-old .yc-why-row { color: var(--text-muted); }
        .yc-why-new .yc-why-row { color: var(--white); }
        .yc-x { color: var(--red); font-weight: 800; flex-shrink: 0; }
        .yc-check { color: var(--green); font-weight: 800; flex-shrink: 0; }
        .yc-why-mid { width: 54px; height: 54px; flex-shrink: 0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: .92rem; font-weight: 900; letter-spacing: .03em; color: #fff; background: var(--gradient-accent); box-shadow: 0 12px 30px rgba(255,96,0,.4); border: 3px solid var(--bg-primary); }

        /* ============ STATS ============ */
        .yc-stats-section { padding: 60px 0; }
        .yc-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .yc-stat { position: relative; text-align: center; padding: 34px 18px; border-radius: var(--radius-xl); background: var(--bg-card); border: 1px solid var(--border); overflow: hidden; transition: transform .25s var(--ease-out), border-color .3s, box-shadow .3s; }
        .yc-stat::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--gradient-accent); transform: scaleX(0); transform-origin: left; transition: transform .4s var(--ease-out); }
        .yc-stat:hover { border-color: rgba(255,96,0,.3); box-shadow: 0 20px 46px rgba(0,0,0,.38); }
        .yc-stat:hover::before { transform: scaleX(1); }
        .yc-stat-icon { width: 50px; height: 50px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; border-radius: 14px; background: rgba(255,96,0,.1); border: 1px solid rgba(255,96,0,.22); transition: transform .35s var(--ease-spring); }
        .yc-stat:hover .yc-stat-icon { transform: translateY(-3px) scale(1.08); }
        .yc-stat-num { font-size: clamp(2.2rem, 4.4vw, 3rem); font-weight: 900; line-height: 1; letter-spacing: -.02em; background: var(--gradient-accent); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; margin-bottom: 10px; }
        .yc-stat-label { font-size: .88rem; color: var(--text-secondary); font-weight: 600; }

        /* ============ FAQ ============ */
        .yc-faq-section { max-width: 820px; margin: 0 auto; }
        .yc-faq .faq-item { margin-bottom: 12px; transition: border-color .25s; }
        .yc-faq .faq-question { width: 100%; background: var(--bg-card); border: none; font-family: inherit; }
        .yc-faq .faq-toggle { font-size: 1.4rem; color: var(--accent); transition: transform .3s var(--ease-out); line-height: 1; }
        .yc-faq .faq-item.open .faq-toggle { transform: rotate(45deg); }
        .yc-faq .faq-item.open { border-color: rgba(255,96,0,.3); box-shadow: 0 12px 34px rgba(0,0,0,.28); }
        .yc-faq .faq-item.open .faq-question { background: linear-gradient(135deg, rgba(255,96,0,.09), var(--bg-card)); color: var(--accent-light); }

        /* ============ CLOSING CTA ============ */
        .yc-cta-section { padding: 40px 0 90px; }
        .yc-cta { position: relative; overflow: hidden; text-align: center; border-radius: var(--radius-xl); padding: 64px 32px; border: 1px solid transparent; background: linear-gradient(135deg, rgba(255,96,0,.16), rgba(11,17,32,.92)) padding-box, linear-gradient(135deg, rgba(255,96,0,.65), rgba(255,255,255,.08) 50%, rgba(255,96,0,.32)) border-box; box-shadow: 0 30px 80px rgba(0,0,0,.4); }
        .yc-cta::before { content: ''; position: absolute; top: -40%; left: 50%; width: 620px; height: 620px; transform: translateX(-50%); background: radial-gradient(circle, rgba(255,96,0,.18), transparent 65%); pointer-events: none; animation: ycDrift 8s ease-in-out infinite; }
        .yc-cta::after { content: ''; position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px); background-size: 26px 26px; mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000, transparent 75%); -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000, transparent 75%); pointer-events: none; }
        .yc-cta h2 { position: relative; font-size: clamp(1.7rem, 4vw, 2.6rem); font-weight: 900; color: var(--white); margin: 0 0 14px; letter-spacing: -.02em; }
        .yc-cta p { position: relative; font-size: 1.05rem; color: var(--text-secondary); max-width: 560px; margin: 0 auto 30px; line-height: 1.6; }
        .yc-cta-btns { position: relative; display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }

        /* ============ Keyframes ============ */
        @keyframes ycUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        @keyframes ycPanelIn { from { opacity: 0; transform: translateY(14px) scale(.99); } to { opacity: 1; transform: none; } }
        @keyframes ycMockIn { from { opacity: 0; transform: translateX(18px) scale(.97); } to { opacity: 1; transform: none; } }
        @keyframes ycSlide { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: none; } }
        @keyframes ycPop { from { opacity: 0; transform: scale(.7); } to { opacity: 1; transform: scale(1); } }
        @keyframes ycGrow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes ycFloat { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(28px, -26px) scale(1.08); } }
        @keyframes ycBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes ycSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ycBeam { 0% { transform: translateX(0) skewX(-14deg); opacity: 0; } 12% { opacity: 1; } 55%, 100% { transform: translateX(520%) skewX(-14deg); opacity: 0; } }
        @keyframes ycFloor { from { background-position: 0 0; } to { background-position: 0 46px; } }
        @keyframes ycDrift { 0%, 100% { opacity: .7; transform: translateX(-50%) scale(1); } 50% { opacity: 1; transform: translateX(-50%) scale(1.12); } }
        @keyframes ycMarquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ycDraw { to { stroke-dashoffset: 0; } }
        @keyframes ycNudge { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(5px); } }
        @keyframes ycFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ycPulse { 0%, 100% { opacity: .7; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); } }

        /* ============ Responsive ============ */
        @media (max-width: 940px) {
          .yc-pillars { grid-template-columns: 1fr; }
          .yc-panel { grid-template-columns: 1fr; }
          .yc-panel-visual { order: -1; }
          .yc-dash-grid { grid-template-columns: 1fr; grid-template-areas: 'score' 'frameworks' 'activity' 'alerts'; }
          .yc-score { justify-content: center; text-align: left; }
        }
        @media (max-width: 760px) {
          .yc-section { padding: 60px 0; }
          .yc-steps { grid-template-columns: 1fr; gap: 16px; }
          .yc-steps-line { display: none; }
          .yc-why { grid-template-columns: 1fr; }
          .yc-why-mid { margin: 2px auto; }
          .yc-stats { grid-template-columns: 1fr 1fr; }
          .yc-fw-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 420px) {
          .yc-stats { grid-template-columns: 1fr; }
        }

        /* ============ Reduced motion ============ */
        @media (prefers-reduced-motion: reduce) {
          .yc-grad, .yc-grad::after, .yc-aurora, .yc-beam, .yc-floor, .yc-orb, .yc-dash-amb,
          .yc-cta::before, .ycm-wave polyline, .yc-marq-track, .yc-eyebrow-dot, .yc-fcard-in,
          .ycm-tag.live i, .ycm-status.s-warn .ycm-status-dot, .yc-live i, .yc-fc-live i,
          .yc-why-mid, .ycm-meter-fill, .ycm-heat .hc, .yc-hero-glow { animation: none !important; }
          .yc-hero-bg { transform: none !important; }
          .yc-fcard { transform: none !important; }
          .yc-eyebrow, .yc-h1, .yc-lede, .yc-hero-ctas, .yc-trust, .yc-panel, .ycm-app,
          .yc-panel-feats li, .yc-panel-icon { animation: ycFade .4s ease both; }
          .yc-ring-fg, .yc-fc-ring .yc-ring-fg { transition: none; }
          .yc-steps-line { transition: opacity .3s ease; transform: none; }
          .ycm-wave polyline { stroke-dashoffset: 0; }
          .ycm-meter-fill { transform: scaleX(1); }
          .reveal, .reveal-left, .reveal-right { transition: opacity .4s ease !important; transform: none !important; }
          .yc-tab, .yc-trust-chip, .yc-stat, .yc-why-new, .yc-card, .yc-fw, .yc-int-chip, .yc-step, .yc-act, .yc-alert { transition: opacity .2s ease, border-color .2s ease, background .2s ease; }
        }
      `}</style>
    </>
  )
}
