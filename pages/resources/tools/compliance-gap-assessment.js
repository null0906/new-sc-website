import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import { useEffect } from 'react'

const assessments = [
  {
    id: 'dpdpa',
    flag: '🇮🇳',
    name: 'DPDPA',
    fullName: 'Digital Personal Data Protection Act',
    tagline: 'For any organisation collecting or processing personal data of Indian citizens.',
    questions: 10,
    minutes: '~2 min',
    accent: '#E8632B',
    accentSoft: 'rgba(232, 99, 43, 0.12)',
    accentBorder: 'rgba(232, 99, 43, 0.35)',
    href: 'https://forms.gle/nq6WFu9zfhWrMiAbA',
    bestFor: 'SaaS, fintech, e-commerce, healthtech, EdTech — anyone handling Indian user data.'
  },
  {
    id: 'iso27001',
    flag: '🔐',
    name: 'ISO 27001',
    fullName: 'Information Security Management',
    tagline: 'Globally recognised standard for proving you take information security seriously.',
    questions: 10,
    minutes: '~2 min',
    accent: '#06d6a0',
    accentSoft: 'rgba(6, 214, 160, 0.12)',
    accentBorder: 'rgba(6, 214, 160, 0.35)',
    href: 'https://forms.gle/yWGhhAfhKKm2WQb4A',
    bestFor: 'Companies asked for security proof by enterprise clients or expanding globally.'
  },
  {
    id: 'iso27701',
    flag: '🔏',
    name: 'ISO 27701',
    fullName: 'Privacy Information Management',
    tagline: 'The privacy extension to ISO 27001 — for organisations processing personal data at scale.',
    questions: 10,
    minutes: '~2 min',
    accent: '#818cf8',
    accentSoft: 'rgba(129, 140, 248, 0.12)',
    accentBorder: 'rgba(129, 140, 248, 0.35)',
    href: 'https://forms.gle/wTR2oa62PU6Kpd8aA',
    bestFor: 'Data processors needing to demonstrate GDPR / DPDPA / privacy compliance to clients.'
  },
  {
    id: 'soc2',
    flag: '☁️',
    name: 'SOC 2',
    fullName: 'Service Organization Controls',
    tagline: 'The de-facto trust standard for SaaS and cloud providers — especially serving US clients.',
    questions: 10,
    minutes: '~2 min',
    accent: '#3b82f6',
    accentSoft: 'rgba(59, 130, 246, 0.12)',
    accentBorder: 'rgba(59, 130, 246, 0.35)',
    href: 'https://forms.gle/s82T98kTMKJaLqE79',
    bestFor: 'SaaS, MSPs, and cloud platforms whose customers ask for a SOC 2 report.'
  },
  {
    id: 'vapt',
    flag: '🛡️',
    name: 'VAPT',
    fullName: 'Vulnerability Assessment & Penetration Testing',
    tagline: 'Active security testing for your applications, APIs, and infrastructure.',
    questions: 10,
    minutes: '~2 min',
    accent: '#ef4444',
    accentSoft: 'rgba(239, 68, 68, 0.12)',
    accentBorder: 'rgba(239, 68, 68, 0.35)',
    href: 'https://forms.gle/SJsgn1BddgKZYFqw8',
    bestFor: 'Anyone running a web app, mobile app, or API exposed to the internet.'
  },
  {
    id: 'hipaa',
    flag: '⚕️',
    name: 'HIPAA',
    fullName: 'Health Insurance Portability & Accountability Act',
    tagline: 'US privacy and security rules for handling protected health information (PHI).',
    questions: 10,
    minutes: '~2 min',
    accent: '#14b8a6',
    accentSoft: 'rgba(20, 184, 166, 0.12)',
    accentBorder: 'rgba(20, 184, 166, 0.35)',
    href: 'https://forms.gle/LC7M6x2GXJ4ueBAi6',
    bestFor: 'Healthtech, hospitals, insurers, and any vendor handling US patient or health data.'
  }
]

export default function ComplianceGapAssessment() {
  useEffect(() => {
    try {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.textContent = `(function(){
        const revealObs = new IntersectionObserver(e=>{e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('visible')})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
        document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));
      })();`
      document.body.appendChild(s)
      return () => { if (s.parentNode) s.parentNode.removeChild(s) }
    } catch (e) { console.error('Script error:', e) }
  }, [])

  return (
    <Layout>
      <Head>
        <title>Identify Your Compliance Gaps | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Quick 2-minute assessments across DPDPA, ISO 27001, ISO 27701, SOC 2, VAPT, and HIPAA. Find out exactly which compliance frameworks your organization actually needs." />
        <meta property="og:title" content="Identify Your Compliance Gaps — SecComply" />
        <meta property="og:description" content="Free 2-minute assessments to identify your DPDPA, ISO 27001, ISO 27701, SOC 2, VAPT, and HIPAA readiness." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seccomply.net/resources/tools/compliance-gap-assessment" />
        <link rel="canonical" href="https://seccomply.net/resources/tools/compliance-gap-assessment" />
      </Head>

      <style jsx global>{`
        :root {
          --bg: #020617;
          --surface: #0a1628;
          --accent: #E8632B;
          --accent-soft: rgba(232, 99, 43, 0.15);
          --accent-border: rgba(232, 99, 43, 0.3);
          --text-primary: #f8fafc;
          --text-body: #c8d6e5;
          --text-muted: #94a3b8;
        }
        body {
          background: var(--bg);
          color: var(--text-primary);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          color: var(--text-muted);
          font-size: .95rem;
          padding: 1.5rem 2rem 0;
          text-decoration: none;
          max-width: 1200px;
          margin: 0 auto;
        }
        .back-link:hover { color: var(--accent); }

        .gap-hero {
          text-align: center;
          padding: 3rem 2rem 1.5rem;
          max-width: 880px;
          margin: 0 auto;
        }
        .gap-hero .gap-icon {
          font-size: 3.5rem;
          margin-bottom: 1.25rem;
          display: inline-block;
        }
        .gap-hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 800;
          margin: 0 0 1rem;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff 0%, #c8d6e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.15;
        }
        .gap-hero p {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0 0 1.25rem;
        }

        .meta-row {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
          padding: .85rem 1.5rem;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          margin-top: .5rem;
        }
        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: .4rem;
          font-size: .85rem;
          color: var(--text-body);
          font-weight: 600;
        }
        .meta-pill strong { color: var(--accent); }

        .gap-wrap { max-width: 1200px; margin: 0 auto; padding: 2rem; }

        .gap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 1000px) {
          .gap-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .gap-grid { grid-template-columns: 1fr; }
        }

        .gap-card {
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 1.75rem 1.6rem 1.85rem;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .gap-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, var(--card-soft, transparent), transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .gap-card:hover {
          transform: translateY(-6px);
          border-color: var(--card-border, var(--accent-border));
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px var(--card-border, var(--accent-border));
        }
        .gap-card:hover::before { opacity: 1; }

        .gap-card-flag {
          font-size: 2.5rem;
          line-height: 1;
          margin-bottom: 1rem;
          position: relative;
        }
        .gap-card-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0 0 .25rem;
          letter-spacing: -0.01em;
          position: relative;
        }
        .gap-card-fullname {
          font-size: .82rem;
          color: var(--card-color, var(--accent));
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1rem;
          position: relative;
        }
        .gap-card-tagline {
          font-size: .94rem;
          color: var(--text-body);
          line-height: 1.6;
          margin: 0 0 1.1rem;
          position: relative;
        }
        .gap-card-bestfor {
          font-size: .82rem;
          color: var(--text-muted);
          line-height: 1.55;
          padding: .75rem .9rem;
          background: rgba(255,255,255,0.025);
          border-left: 2px solid var(--card-color, var(--accent));
          border-radius: 0 8px 8px 0;
          margin-bottom: 1.25rem;
          position: relative;
        }
        .gap-card-bestfor strong { color: var(--text-body); font-weight: 700; }

        .gap-card-stats {
          display: flex;
          gap: 1rem;
          padding-top: 1rem;
          margin-bottom: 1.1rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          position: relative;
        }
        .gap-card-stat {
          display: flex;
          flex-direction: column;
          gap: .15rem;
        }
        .gap-card-stat-label {
          font-size: .68rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
        }
        .gap-card-stat-value {
          font-size: .95rem;
          color: var(--text-primary);
          font-weight: 700;
        }

        .gap-card-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: .5rem;
          padding: .85rem 1.2rem;
          background: var(--card-color, var(--accent));
          color: white;
          border-radius: 10px;
          font-weight: 700;
          font-size: .92rem;
          margin-top: auto;
          transition: all 0.2s ease;
          position: relative;
        }
        .gap-card:hover .gap-card-cta {
          transform: translateX(2px);
          filter: brightness(1.1);
        }

        .info-banner {
          background: linear-gradient(135deg, rgba(232,99,43,0.08) 0%, rgba(10,22,40,0.95) 100%);
          border: 1px solid var(--accent-border);
          border-radius: 18px;
          padding: 1.5rem 1.75rem;
          margin-bottom: 2.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .info-banner-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          line-height: 1.3;
        }
        .info-banner-text {
          color: var(--text-body);
          font-size: .95rem;
          line-height: 1.6;
          margin: 0;
        }
        .info-banner-text strong { color: var(--text-primary); }

        .cta-banner {
          background: linear-gradient(135deg, rgba(232,99,43,0.12) 0%, rgba(10,22,40,0.95) 100%);
          border: 1px solid var(--accent-border);
          border-radius: 20px;
          padding: 2.75rem;
          text-align: center;
          margin: 2rem 0;
        }
        .cta-banner h3 { font-size: 1.75rem; font-weight: 800; margin: 0 0 .75rem; letter-spacing: -0.01em; }
        .cta-banner h3 em { color: var(--accent); font-style: normal; }
        .cta-banner p {
          color: var(--text-body);
          font-size: 1.02rem;
          max-width: 620px;
          margin: 0 auto 1.75rem;
          line-height: 1.6;
        }
        .cta-btns { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .9rem 1.6rem;
          background: var(--accent);
          color: white;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          font-size: .95rem;
          transition: all 0.2s ease;
        }
        .btn-primary:hover {
          background: #D9541F;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(232,99,43,0.3);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .9rem 1.6rem;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
          font-size: .95rem;
          transition: all 0.2s ease;
        }
        .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }

        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <Link href="/resources/tools" className="back-link">← Back to Tools</Link>

      <section className="gap-hero">
        <div className="gap-icon">🎯</div>
        <h1>Identify Your Compliance Gaps</h1>
        <p>Six quick assessments. Pick the framework that fits your situation, answer 10 yes/no questions, and find out whether you actually need it — before you commit to any audit, certification, or vendor.</p>
        <div className="meta-row">
          <span className="meta-pill"><strong>6</strong> frameworks</span>
          <span className="meta-pill"><strong>10</strong> questions each</span>
          <span className="meta-pill"><strong>~2 min</strong> per assessment</span>
        </div>
      </section>

      <div className="gap-wrap">

        <div className="info-banner reveal">
          <span className="info-banner-icon">💡</span>
          <p className="info-banner-text">
            <strong>Not sure where to start?</strong> If you handle Indian user data, begin with DPDPA. If enterprise clients are asking for security proof, start with ISO 27001 or SOC 2. If you handle US health data, start with HIPAA. Our team will follow up with a personalised reading once you submit.
          </p>
        </div>

        <div className="gap-grid reveal">
          {assessments.map((a) => (
            <a
              key={a.id}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-card"
              style={{
                '--card-color': a.accent,
                '--card-soft': a.accentSoft,
                '--card-border': a.accentBorder
              }}
            >
              <div className="gap-card-flag">{a.flag}</div>
              <h2 className="gap-card-name">{a.name}</h2>
              <div className="gap-card-fullname">{a.fullName}</div>
              <p className="gap-card-tagline">{a.tagline}</p>
              <div className="gap-card-bestfor">
                <strong>Best for:</strong> {a.bestFor}
              </div>
              <div className="gap-card-stats">
                <div className="gap-card-stat">
                  <span className="gap-card-stat-label">Questions</span>
                  <span className="gap-card-stat-value">{a.questions}</span>
                </div>
                <div className="gap-card-stat">
                  <span className="gap-card-stat-label">Time</span>
                  <span className="gap-card-stat-value">{a.minutes}</span>
                </div>
              </div>
              <span className="gap-card-cta">Start Assessment →</span>
            </a>
          ))}
        </div>

        <div className="cta-banner reveal">
          <h3>Already know what you need? <em>Talk to our team.</em></h3>
          <p>Skip the assessment and get straight to a scoping call. We will map your current posture against the framework, identify gaps, and outline the path to audit-readiness.</p>
          <div className="cta-btns">
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Consultation →
            </a>
            <a href="mailto:info@seccomply.net" className="btn-secondary">
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}