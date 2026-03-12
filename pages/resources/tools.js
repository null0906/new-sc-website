import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

const tools = [
  { icon: '🔍', title: 'Free DPDP Assessment', desc: 'Take our free online assessment to understand your DPDP Act compliance readiness and get a personalized report.', cta: 'Start Assessment', href: 'https://verdant-conkies-4eccd1.netlify.app/' },
  { icon: '✅', title: 'Security Checklists', desc: 'Pre-audit security and readiness checklists for ISO 27001, SOC 2, HIPAA, and DPDP Act.', cta: 'Download Checklists', href: '#' },
  { icon: '📋', title: 'Compliance Readiness Score', desc: 'Get an instant compliance readiness score across ISO 27001, SOC 2, and DPDP Act with our self-assessment tool.', cta: 'Check Your Score', href: '#' }
]

export default function Tools() {
  return (
    <Layout>
      <Head>
        <title>Free Compliance Tools - SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>
      <section className="sub-hero">
        <Link href="/resources" className="sub-back">← Back to Resources</Link>
        <h1>🛠️ Free Tools</h1>
        <p>Free assessments, security checklists, and readiness tools to evaluate your compliance posture.</p>
      </section>
      <div className="sub-grid">
        {tools.map((item, i) => (
          <a key={i} href={item.href} className="sub-card" style={{textDecoration:'none'}} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
            <div className="sub-card-img-placeholder">{item.icon}</div>
            <div className="sub-card-body">
              <span className="sub-tag">TOOL</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="sub-cta">{item.cta} →</span>
            </div>
          </a>
        ))}
      </div>
    </Layout>
  )
}