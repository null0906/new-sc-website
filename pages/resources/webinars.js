import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

const webinars = [
  { icon: '🎥', title: 'ISO 27001 in 90 Days: A Live Walkthrough', desc: 'Watch our step-by-step walkthrough of achieving ISO 27001 certification in 90 days for startups.', cta: 'Watch Recording', href: '#', status: 'RECORDING' },
  { icon: '🎙️', title: 'DPDP Act Compliance: Expert Panel Discussion', desc: 'Industry experts discuss practical approaches to DPDP Act compliance for Indian businesses.', cta: 'Watch Recording', href: '#', status: 'RECORDING' },
  { icon: '📅', title: 'SOC 2 Readiness Masterclass', desc: 'Join our live masterclass covering SOC 2 Type II preparation, common pitfalls, and audit best practices.', cta: 'Register Now', href: '#', status: 'UPCOMING' }
]

export default function Webinars() {
  return (
    <Layout>
      <Head>
        <title>Webinars & Events - SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>
      <section className="sub-hero">
        <Link href="/resources" className="sub-back">← Back to Resources</Link>
        <h1>🎥 Webinars & Events</h1>
        <p>On-demand recordings and upcoming live sessions with industry experts.</p>
      </section>
      <div className="sub-grid">
        {webinars.map((item, i) => (
          <a key={i} href={item.href} className="sub-card" style={{textDecoration:'none'}}>
            <div className="sub-card-img-placeholder">{item.icon}</div>
            <div className="sub-card-body">
              <span className="sub-tag">{item.status}</span>
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
