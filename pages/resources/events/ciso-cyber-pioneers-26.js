import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect, useState } from 'react'

const EVENT = {
  name: 'CIO AXIS CISO & Cyber Pioneers 2026',
  fullName: 'CIO AXIS CISO & Cyber Pioneers Awards & Confex 2026',
  tagline: '15 Years of Recognising Technology Excellence',
  date: 'May 8, 2026',
  isoDate: '2026-05-08',
  location: 'Radisson Blu Plaza, Delhi',
  organizer: 'CIO AXIS',
  presentedBy: 'Garnet',
  role: 'Strategic Compliance Automation Partner',
  slug: 'ciso-cyber-pioneers-26',
}

const HIGHLIGHTS = [
  {
    icon: '🏆',
    title: 'Cyber Pioneer Award',
    body: "Sanil Nadkarni was recognised as a Cyber Pioneer at the CISO & Cyber Pioneers Awards 2026 — a milestone moment for SecComply's leadership in compliance automation.",
  },
  {
    icon: '🎤',
    title: 'Keynote: The Kingdom & The Crown',
    body: "Shivani Tikadia delivered the keynote 'The Kingdom & The Crown' — a CISO leadership narrative on the three enemies every security kingdom faces and the 100 messengers problem of organisational alignment.",
  },
  {
    icon: '💬',
    title: 'Panel — Resilience vs. Prevention',
    body: "SecComply participated in the panel 'Resilience vs. Prevention: SecOps, Ransomware, and Rapid Recovery' alongside India's leading security operators.",
  },
  {
    icon: '🛡️',
    title: 'Sponsor Presence',
    body: "SecComply hosted a sponsor booth showcasing the compliance automation platform — DPDP, ISO 27001, SOC 2, GDPR, HIPAA, RBI Audit, and vCISO services in one place.",
  },
]

const GALLERY = [
  { src: '01-hero-shivani-keynote.jpg', caption: 'Shivani Tikadia delivering the keynote', span: 'wide' },
  { src: '02-keynote-kingdom-and-crown.jpg', caption: '"The Kingdom & The Crown" — keynote in progress' },
  { src: '03-keynote-three-enemies.jpg', caption: '"Three enemies. Every kingdom. Every era."' },
  { src: '04-stage-group-photo.jpg', caption: 'Stage group photo, CISO & Cyber Pioneers backdrop' },
  { src: '07-panel-resilience-wide.jpg', caption: 'Panel: Resilience vs. Prevention (wide)' },
  { src: '08-panel-discussion-closeup.jpg', caption: 'Panel discussion — engaged moment' },
  { src: '09-audience-engaged.jpg', caption: 'Audience during the keynote' },
  { src: '05-vendor-booth-row.jpg', caption: 'SecComply alongside Proofpoint, Sophos, and other industry leaders' },
  { src: '06-seccomply-booth.jpg', caption: 'SecComply booth — Compliance Automation Simplified' },
  { src: '14-booth-engagement.jpg', caption: 'Aditya Hadke at the SecComply booth' },
  { src: '15-team-booth-portrait.jpg', caption: 'The SecComply team at the booth' },
  { src: '11-booth-networking-delegate.jpg', caption: 'Networking with delegates at the booth' },
  { src: '13-networking-senior-leader.jpg', caption: 'Conversation with a senior industry leader' },
  { src: '12-booth-networking-candid.jpg', caption: 'Candid moment at the booth' },
  { src: '18-team-step-and-repeat-banner.jpg', caption: 'Team at the event step-and-repeat' },
  { src: '17-team-step-and-repeat.jpg', caption: 'CISO & Cyber Pioneers 2026' },
  { src: '16-sanil-step-and-repeat-solo.jpg', caption: 'Sanil Nadkarni at the event backdrop' },
  { src: '19-team-member-step-and-repeat.jpg', caption: 'A SecComply moment, captured' },
]

const IMG_BASE = '/event-images/infosec-maestros-26/'

export default function CISOCyberPioneers26() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const bar = document.getElementById('reading-progress')
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (bar) bar.style.width = (h > 0 ? Math.min(window.scrollY / h * 100, 100) : 0) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: EVENT.fullName,
    startDate: EVENT.isoDate,
    endDate: EVENT.isoDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: { '@type': 'Place', name: 'Radisson Blu Plaza, Delhi', address: { '@type': 'PostalAddress', addressLocality: 'New Delhi', addressCountry: 'IN' } },
    organizer: { '@type': 'Organization', name: EVENT.organizer },
    sponsor: [{ '@type': 'Organization', name: 'SecComply', url: 'https://seccomply.net' }],
    image: 'https://seccomply.net' + IMG_BASE + '01-hero-shivani-keynote.jpg',
    description: 'SecComply at the CIO AXIS CISO & Cyber Pioneers Awards & Confex 2026 — Strategic Compliance Automation Partner, keynote, panel participation, and Cyber Pioneer Award recipient.',
  }

  return (
    <Layout>
      <Head>
        <title>{EVENT.name} — SecComply at New Delhi, May 2026 | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content={`SecComply at the ${EVENT.fullName} as Strategic Compliance Automation Partner — Sanil Nadkarni received the Cyber Pioneer Award, Shivani Tikadia delivered the keynote 'The Kingdom & The Crown', and SecComply hosted a sponsor booth showcasing compliance automation across DPDP, ISO 27001, SOC 2, and more.`} />
        <meta name="keywords" content="CISO Cyber Pioneers 2026, CIO AXIS, Garnet awards, SecComply event, cybersecurity awards India, Cyber Pioneer Award, Sanil Nadkarni, Shivani Tikadia, Strategic Compliance Automation Partner" />
        <meta property="og:title" content={`${EVENT.name} — SecComply`} />
        <meta property="og:description" content={`Cyber Pioneer Award, keynote, panel, sponsor booth — SecComply at ${EVENT.fullName}.`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://seccomply.net/resources/events/${EVENT.slug}`} />
        <meta property="og:image" content={`https://seccomply.net${IMG_BASE}01-hero-shivani-keynote.jpg`} />
        <link rel="canonical" href={`https://seccomply.net/resources/events/${EVENT.slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </Head>

      <style jsx global>{`
        :root{--cy:#0081f2;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(0, 129, 242,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--bl:#818cf8;--sans:'Inter',sans-serif}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
        body{font-family:var(--sans);background:var(--bg);color:var(--tb);line-height:1.7;-webkit-font-smoothing:antialiased}
        #reading-progress{position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#0081f2,#38A8FF);z-index:9999;transition:width .1s linear}
        .breadcrumb{max-width:1280px;margin:0 auto;padding:1.25rem 2rem 0;display:flex;align-items:center;gap:.5rem;font-size:.79rem;color:var(--tm)}
        .breadcrumb a{color:var(--tm);text-decoration:none}.breadcrumb a:hover{color:var(--cy)}.bc-sep{opacity:.4}

        .ev-hero{max-width:1280px;margin:0 auto;padding:2.5rem 2rem 1rem;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center}
        @media(max-width:900px){.ev-hero{grid-template-columns:1fr;gap:1.5rem}}
        .ev-hero-text{}
        .ev-status{display:inline-flex;align-items:center;gap:.5rem;padding:.35rem .9rem;border-radius:100px;font-size:.7rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;background:rgba(6,214,160,.1);color:var(--gr);border:1px solid rgba(6,214,160,.25);margin-bottom:1.2rem}
        .ev-status::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--gr)}
        .ev-hero h1{font-size:clamp(1.8rem,3.2vw,2.7rem);font-weight:700;color:var(--tx);line-height:1.2;margin-bottom:1rem}
        .ev-hero h1 em{font-style:italic;color:var(--cy)}
        .ev-tag{font-size:.95rem;color:var(--cy);font-weight:600;margin-bottom:1.2rem;letter-spacing:.02em}
        .ev-meta{display:flex;gap:1.5rem;flex-wrap:wrap;margin-bottom:1.5rem;font-size:.92rem;color:var(--tb)}
        .ev-meta-item{display:flex;align-items:center;gap:.5rem}
        .ev-meta-item strong{color:var(--tx);font-weight:600}
        .ev-intro{font-size:1.02rem;color:var(--tb);line-height:1.75;margin-bottom:1.5rem}
        .ev-hero-img{border-radius:16px;overflow:hidden;border:1px solid var(--bo);line-height:0;box-shadow:0 20px 60px rgba(0, 129, 242,.12)}
        .ev-hero-img img{width:100%;height:auto;display:block}

        .ev-section{max-width:1280px;margin:0 auto;padding:2.5rem 2rem}
        .ev-section h2{font-size:1.55rem;font-weight:700;color:var(--tx);margin-bottom:1.5rem;line-height:1.3}
        .ev-section h2 em{color:var(--cy);font-style:italic}

        .high-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}
        @media(max-width:720px){.high-grid{grid-template-columns:1fr}}
        .high-card{background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;padding:1.4rem 1.5rem;transition:all .25s;border-left:3px solid var(--cy)}
        .high-card:hover{border-color:var(--bo);transform:translateY(-2px)}
        .high-card-head{display:flex;align-items:center;gap:.6rem;margin-bottom:.6rem}
        .high-card-icon{font-size:1.35rem;line-height:1}
        .high-card h3{font-size:1.02rem;font-weight:700;color:var(--tx);margin:0;line-height:1.3}
        .high-card p{font-size:.92rem;color:var(--tb);line-height:1.65;margin:0}

        .gal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.85rem}
        @media(max-width:900px){.gal-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:560px){.gal-grid{grid-template-columns:1fr}}
        .gal-item{position:relative;border-radius:12px;overflow:hidden;border:1px solid var(--bs);cursor:pointer;background:var(--bgc2);transition:all .25s;aspect-ratio:4/3}
        .gal-item.wide{grid-column:span 2}
        @media(max-width:900px){.gal-item.wide{grid-column:span 2}}
        @media(max-width:560px){.gal-item.wide{grid-column:span 1}}
        .gal-item img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .35s}
        .gal-item:hover{border-color:var(--bo);transform:translateY(-2px)}
        .gal-item:hover img{transform:scale(1.04)}
        .gal-cap{position:absolute;left:0;right:0;bottom:0;padding:.7rem .85rem;background:linear-gradient(0deg,rgba(2,6,23,.92),rgba(2,6,23,0));font-size:.78rem;color:var(--tb);line-height:1.4;opacity:0;transition:opacity .25s}
        .gal-item:hover .gal-cap{opacity:1}

        .lightbox{position:fixed;inset:0;background:rgba(2,6,23,.96);z-index:9998;display:flex;align-items:center;justify-content:center;padding:2rem;cursor:zoom-out}
        .lightbox img{max-width:100%;max-height:90vh;border-radius:8px;box-shadow:0 30px 80px rgba(0,0,0,.6)}
        .lightbox-cap{position:absolute;left:0;right:0;bottom:1.2rem;text-align:center;font-size:.88rem;color:var(--tb);padding:0 2rem}
        .lightbox-close{position:absolute;top:1.1rem;right:1.4rem;width:38px;height:38px;border-radius:50%;background:var(--bgc2);border:1px solid var(--bo);color:#fff;font-size:1.3rem;cursor:pointer;display:flex;align-items:center;justify-content:center}
        .lightbox-close:hover{background:var(--cy)}

        .ev-about{font-size:1rem;color:var(--tb);line-height:1.8;max-width:780px}
        .ev-about p{margin-bottom:1rem}
        .ev-about strong{color:var(--tx)}

        .cta-final{background:linear-gradient(135deg,rgba(0, 129, 242,.1),rgba(15,23,42,.95));border:1px solid var(--bo);border-radius:16px;padding:2.5rem 2rem;text-align:center;margin:3rem 0}
        .cta-final h3{font-size:1.4rem;color:var(--tx);margin-bottom:.75rem}
        .cta-final p{font-size:.95rem;color:var(--tb);max-width:560px;margin:0 auto 1.5rem}
        .cta-final a{display:inline-flex;align-items:center;gap:.5rem;padding:.85rem 1.7rem;background:var(--cy);color:#fff;text-decoration:none;border-radius:10px;font-weight:700;font-size:.93rem;transition:background .2s}
        .cta-final a:hover{background:var(--cy2)}
      `}</style>

      <div id="reading-progress"></div>

      <div className="breadcrumb">
        <Link href="/">Home</Link><span className="bc-sep">/</span>
        <Link href="/resources">Resources</Link><span className="bc-sep">/</span>
        <Link href="/resources/events">Events</Link><span className="bc-sep">/</span>
        <span>CISO &amp; Cyber Pioneers 2026</span>
      </div>

      <section className="ev-hero">
        <div className="ev-hero-text">
          <span className="ev-status">Completed Event</span>
          <h1>{EVENT.name.split('CISO')[0]}<em>CISO &amp; Cyber Pioneers</em> 2026</h1>
          <div className="ev-tag">{EVENT.tagline}</div>
          <div className="ev-meta">
            <div className="ev-meta-item">📅 <strong>{EVENT.date}</strong></div>
            <div className="ev-meta-item">📍 <strong>{EVENT.location}</strong></div>
            <div className="ev-meta-item">🎖️ <strong>{EVENT.presentedBy}</strong> presents</div>
          </div>
          <p className="ev-intro">
            SecComply joined India&apos;s premier gathering of CISOs, cybersecurity leaders, and technology pioneers at the 15th annual {EVENT.fullName} in Delhi — as <strong>Strategic Compliance Automation Partner</strong>, a keynote speaker, a panel contributor, and a Cyber Pioneer Award recipient.
          </p>
        </div>
        <div className="ev-hero-img">
          <img src={IMG_BASE + '01-hero-shivani-keynote.jpg'} alt="Shivani Tikadia delivering the keynote 'The Kingdom & The Crown'" />
        </div>
      </section>

      <section className="ev-section">
        <h2>Event <em>Highlights</em></h2>
        <div className="high-grid">
          {HIGHLIGHTS.map((h, i) => (
            <div key={i} className="high-card">
              <div className="high-card-head">
                <span className="high-card-icon">{h.icon}</span>
                <h3>{h.title}</h3>
              </div>
              <p>{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ev-section">
        <h2>About the <em>Event</em></h2>
        <div className="ev-about">
          <p>
            The <strong>{EVENT.fullName}</strong>, presented by Garnet and hosted by CIO AXIS, is one of India&apos;s longest-running recognitions of cybersecurity and technology leadership — celebrating its 15th edition in 2026 in New Delhi.
          </p>
          <p>
            The event brought together CISOs, cybersecurity practitioners, and technology leaders from across India alongside sponsors including <strong>Proofpoint, Sophos, Forcepoint, Microsoft, Silverfort, Barracuda, 42Gears, NeoSOFT, FireCompass</strong>, and SecComply, with a day-long programme of keynotes, panels, awards, and networking.
          </p>
          <p>
            SecComply&apos;s participation spanned three roles: <strong>Strategic Compliance Automation Partner</strong>, with a booth showcasing the compliance automation platform; <strong>keynote</strong>, with Shivani Tikadia delivering &quot;The Kingdom &amp; The Crown&quot;; and <strong>award recipient</strong>, with Sanil Nadkarni recognised as a Cyber Pioneer.
          </p>
        </div>
      </section>

      <section className="ev-section">
        <h2>The <em>Gallery</em></h2>
        <div className="gal-grid">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={'gal-item' + (g.span === 'wide' ? ' wide' : '')}
              onClick={() => setLightbox(g)}
            >
              <img src={IMG_BASE + g.src} alt={g.caption} loading="lazy" />
              <div className="gal-cap">{g.caption}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ev-section">
        <div className="cta-final">
          <h3>Want to meet SecComply at the next event?</h3>
          <p>If you saw us at CISO &amp; Cyber Pioneers — or wish you had — book a call. We&apos;ll be at the next set of industry gatherings and would love to talk compliance automation.</p>
          <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener">Book a call →</a>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); setLightbox(null) }} aria-label="Close">×</button>
          <img src={IMG_BASE + lightbox.src} alt={lightbox.caption} />
          <div className="lightbox-cap">{lightbox.caption}</div>
        </div>
      )}
    </Layout>
  )
}
