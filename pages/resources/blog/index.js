import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const posts = [
  { slug: 'dpdp-act-indian-startups', icon: '🇮🇳', title: 'DPDP Act 2023: What Indian Startups Need to Know', desc: "A breakdown of India's Digital Personal Data Protection Act and practical steps for compliance readiness.", date: 'March 2025' },
  { slug: 'top-10-security-controls', icon: '🔒', title: 'Top 10 Security Controls Every Startup Should Implement', desc: 'Essential security controls that form the foundation of any compliance program, explained in plain language.', date: 'February 2025' },
  { slug: 'cost-of-non-compliance', icon: '💰', title: 'The True Cost of Non-Compliance in 2025', desc: 'Data-driven analysis of what compliance failures cost companies — from fines to lost deals and reputation damage.', date: 'January 2025' }
]

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog & Insights - SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>
      <section className="sub-hero">
        <Link href="/resources" className="sub-back">← Back to Resources</Link>
        <h1>📝 Blog & Insights</h1>
        <p>Latest insights on cybersecurity, compliance trends, and regulatory updates.</p>
      </section>
      <div className="sub-grid">
        {posts.map((item, i) => (
          <Link key={i} href={'/resources/blog/' + item.slug} className="sub-card">
            <div className="sub-card-img-placeholder">{item.icon}</div>
            <div className="sub-card-body">
              <span className="sub-tag">BLOG</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="sub-cta">Read Article →</span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
