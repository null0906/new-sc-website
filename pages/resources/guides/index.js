import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const guides = [
  {
    slug: 'iso-27001-implementation',
    icon: '🛡️',
    title: 'ISO 27001 Implementation Guide',
    desc: 'Comprehensive step-by-step guide to implementing an effective information security management system from scratch.',
    date: 'March 2025',
    readTime: '15 min read'
  },
  {
    slug: 'grc-framework-startups',
    icon: '📊',
    title: 'GRC Implementation Framework for Startups',
    desc: 'A practical framework designed specifically for startups to implement governance, risk management, and compliance without complexity.',
    date: 'February 2025',
    readTime: '12 min read'
  },
  {
    slug: 'soc2-vs-iso27001',
    icon: '⚖️',
    title: "SOC 2 vs ISO 27001 — What's Right For You?",
    desc: 'A comprehensive comparison guide to help you choose the right compliance framework for your business needs.',
    date: 'January 2025',
    readTime: '10 min read'
  }
]

export default function Guides() {
  return (
    <Layout>
      <Head>
        <title>Compliance Guides - SecComply</title>
        <meta name="description" content="Step-by-step compliance implementation guides from SecComply." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>

      <section className="sub-hero">
        <Link href="/resources" className="sub-back">← Back to Resources</Link>
        <h1>📘 Compliance Guides</h1>
        <p>Step-by-step implementation guides for ISO 27001, SOC 2, GRC frameworks, and compliance best practices.</p>
      </section>

      <div className="sub-grid">
        {guides.map((item, i) => (
          <Link key={i} href={`/resources/guides/${item.slug}`} className="sub-card">
            <div className="sub-card-img-placeholder">{item.icon}</div>
            <div className="sub-card-body">
              <span className="sub-tag">GUIDE</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="sub-cta">Read Guide →</span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
