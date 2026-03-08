import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'

export default function DPDPAct() {
  return (
    <Layout>
      <Head>
        <title>DPDP Act 2023: What Indian Startups Need to Know - SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>
      <article className="article-wrap">
        <Link href="/resources/blog" className="article-back">← Back to Blog</Link>
        <span className="article-tag">BLOG</span>
        <h1>DPDP Act 2023: What Indian Startups Need to Know</h1>
        <div className="article-meta"><span>📅 March 2025</span><span>⏱️ 10 min read</span><span>✍️ SecComply Team</span></div>
        <img className="article-hero-img" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop" alt="Data Protection India" />
        <div className="article-content">
          <p><strong>India's Digital Personal Data Protection (DPDP) Act 2023</strong> represents a watershed moment for data privacy in India. For startups collecting, processing, or storing personal data of Indian citizens, compliance is no longer optional — it's a legal requirement with significant penalties for non-compliance.</p>
          <h2>Key Provisions That Affect Startups</h2>
          <p>The DPDP Act introduces several obligations that directly impact how startups handle personal data. Understanding these provisions is the first step toward compliance.</p>
          <h3>Consent Requirements</h3>
          <p>Every collection of personal data requires clear, informed, and specific consent from the data principal (the individual). Gone are the days of burying consent in lengthy terms of service. The Act requires consent to be free, specific, informed, unconditional, and unambiguous — presented in clear, plain language.</p>
          <h3>Data Principal Rights</h3>
          <p>Individuals now have the right to access their data, correct inaccuracies, erase their data, and nominate someone to exercise these rights on their behalf. Startups must build processes to handle these requests within the prescribed timelines.</p>
          <h3>Data Fiduciary Obligations</h3>
          <p>As a data fiduciary (the entity collecting data), startups must implement reasonable security safeguards, retain data only as long as necessary, ensure accuracy of data, and notify the Data Protection Board of any breaches.</p>
          <img src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=350&fit=crop" alt="Data Privacy Compliance" />
          <h2>Penalties</h2>
          <p>The Act prescribes penalties up to <strong>₹250 crores</strong> for the most serious violations. Even for smaller infractions, penalties can reach ₹50 crores. For startups, these penalties could be existential — making proactive compliance essential.</p>
          <h2>How SecComply Helps</h2>
          <p>SecComply's DPDP compliance module provides automated data mapping, consent management templates, data principal request workflows, and breach notification procedures — all tailored specifically for Indian startups. Our platform maps DPDP Act requirements against your existing ISO 27001 or SOC 2 controls, so you don't duplicate effort.</p>
          <blockquote>The DPDP Act isn't just about avoiding penalties. It's about building the kind of data practices that earn customer trust and enable sustainable growth.</blockquote>
          <hr className="article-divider" />
          <div className="article-cta-box">
            <h3>Check your DPDP Act readiness</h3>
            <p>Take our free DPDP assessment to understand your compliance gaps and get a personalized roadmap.</p>
            <a href="/contact" className="article-cta-btn">Start Free Assessment →</a>
          </div>
        </div>
      </article>
    </Layout>
  )
}
