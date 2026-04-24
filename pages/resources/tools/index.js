import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const tools = [
  {
    icon: '🔍',
    title: 'Free DPDP Assessment',
    desc: 'Take our free online assessment to understand your DPDP Act compliance readiness and get a personalized report.',
    cta: 'Start Assessment',
    href: 'https://verdant-conkies-4eccd1.netlify.app/'
  },
  {
    icon: '🎯',
    title: 'Identify Your Compliance Gaps',
    desc: 'Quick 2-minute assessments across DPDPA, ISO 27001, ISO 27701, SOC 2, and VAPT — find out exactly which compliance frameworks your organization actually needs.',
    cta: 'Find Your Gaps',
    href: '/resources/tools/compliance-gap-assessment'
  },
  {
    icon: '✅',
    title: 'Security Checklists',
    desc: 'Pre-audit security and readiness checklists for ISO 27001, SOC 2, HIPAA, and DPDP Act.',
    cta: 'Download Checklists',
    href: '#'
  }
]

export default function Tools() {
  return (
    <Layout>
      <Head>
        <title>Free Compliance Tools - SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
        <meta name="description" content="Free compliance assessments, security checklists, and gap-analysis tools for DPDPA, ISO 27001, ISO 27701, SOC 2, and VAPT." />
        <link rel="canonical" href="https://seccomply.net/resources/tools" />
      </Head>
      <section className="sub-hero">
        <Link href="/resources" className="sub-back">← Back to Resources</Link>
        <h1>🛠️ Free Tools</h1>
        <p>Free assessments, security checklists, and readiness tools to evaluate your compliance posture.</p>
      </section>
      <div className="sub-grid">
        {tools.map((item, i) => {
          const isExternal = item.href.startsWith('http')
          const isPlaceholder = item.href === '#'
          const cardInner = (
            <>
              <div className="sub-card-img-placeholder">{item.icon}</div>
              <div className="sub-card-body">
                <span className="sub-tag">TOOL</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="sub-cta">{item.cta} →</span>
              </div>
            </>
          )

          if (isExternal) {
            return (
              <a key={i} href={item.href} className="sub-card" style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                {cardInner}
              </a>
            )
          }
          if (isPlaceholder) {
            return (
              <a key={i} href={item.href} className="sub-card" style={{ textDecoration: 'none' }}>
                {cardInner}
              </a>
            )
          }
          return (
            <Link key={i} href={item.href} className="sub-card" style={{ textDecoration: 'none' }}>
              {cardInner}
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}
