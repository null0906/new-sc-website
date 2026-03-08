import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const cases = [
  {
    slug: 'healthcare-ai-soc2-hipaa',
    icon: '🏥',
    title: 'Healthcare AI Startup Achieves SOC 2 + HIPAA in 90 Days',
    desc: "How a healthcare AI platform went from zero compliance to dual-certified with SecComply's accelerated readiness program.",
    date: 'March 2025'
  },
  {
    slug: 'fintech-iso27001',
    icon: '💳',
    title: 'Fintech Company Passes ISO 27001 Audit First Attempt',
    desc: 'A mid-sized fintech firm implemented a complete ISMS and achieved ISO 27001 certification in under 6 months.',
    date: 'February 2025'
  },
  {
    slug: 'saas-multi-framework',
    icon: '☁️',
    title: 'SaaS Platform Scales Compliance Across 3 Frameworks',
    desc: "How a growing SaaS company managed SOC 2, ISO 27001, and GDPR simultaneously using SecComply's cross-framework mapping.",
    date: 'January 2025'
  },
  {
    slug: 'pci-dss-fintech',
    icon: '💳',
    title: 'PCI DSS Compliance Enablement for a Fintech Organization',
    desc: 'How SecComply helped a payment fintech achieve PCI DSS-aligned logging, monitoring, and audit readiness in under 30 days.',
    date: 'March 2025'
  }
]

export default function CaseStudies() {
  return (
    <Layout>
      <Head>
        <title>Case Studies - SecComply</title>
        <meta name="description" content="Real compliance success stories from SecComply clients." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>

      <section className="sub-hero">
        <Link href="/resources" className="sub-back">← Back to Resources</Link>
        <h1>🏆 Case Studies</h1>
        <p>Real client success stories showing transformations from zero compliance to certified and audit-ready status.</p>
      </section>

      <div className="sub-grid">
        {cases.map((item, i) => (
          <Link key={i} href={`/resources/case-studies/${item.slug}`} className="sub-card">
            <div className="sub-card-img-placeholder">{item.icon}</div>
            <div className="sub-card-body">
              <span className="sub-tag">CASE STUDY</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="sub-cta">Read Story →</span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}