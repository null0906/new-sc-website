import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

const features = [
  { icon: '🛡️', title: 'ISMS Automation', desc: 'Automate your entire Information Security Management System — policies, controls, risk registers, and evidence collection.' },
  { icon: '📡', title: 'Continuous Monitoring', desc: 'Real-time monitoring of your security posture with automated alerts, dashboards, and compliance drift detection.' },
  { icon: '🔗', title: 'Cross-Framework Mapping', desc: 'Map controls across ISO 27001, SOC 2, HIPAA, GDPR, and DPDP Act — implement once, comply with many.' },
  { icon: '📦', title: 'Evidence Collection', desc: 'Automated evidence gathering from your cloud infrastructure, HR systems, and development tools.' },
  { icon: '⚠️', title: 'Risk Management', desc: 'Identify, assess, and track risks with built-in risk registers, treatment plans, and vendor risk assessments.' },
  { icon: '📖', title: 'Audit Management', desc: 'Streamline internal and external audits with organized evidence rooms, auditor portals, and readiness dashboards.' }
]

export default function Platform() {
  return (
    <Layout>
      <Head>
        <title>Platform - SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>
      <section className="sub-hero">
        <Link href="/resources" className="sub-back">← Back to Resources</Link>
        <h1>🚀 Platform</h1>
        <p>{"Explore SecComply's compliance automation platform — ISMS management, evidence collection, and continuous monitoring."}</p>
      </section>
      <div className="sub-grid">
        {features.map((item, i) => (
          <div key={i} className="sub-card">
            <div className="sub-card-img-placeholder">{item.icon}</div>
            <div className="sub-card-body">
              <span className="sub-tag">PLATFORM</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
