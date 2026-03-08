import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'

export default function FintechCase() {
  return (
    <Layout>
      <Head>
        <title>Fintech Company Passes ISO 27001 First Attempt - SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>
      <article className="article-wrap">
        <Link href="/resources/case-studies" className="article-back">← Back to Case Studies</Link>
        <span className="article-tag">CASE STUDY</span>
        <h1>Fintech Company Passes ISO 27001 Audit First Attempt</h1>
        <div className="article-meta"><span>📅 February 2025</span><span>⏱️ 7 min read</span></div>
        <img className="article-hero-img" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop" alt="Fintech Compliance" />
        <div className="article-content">
          <p><strong>A mid-sized fintech company processing digital payments needed ISO 27001 certification to win enterprise banking clients.</strong> With RBI compliance requirements tightening and three major bank partnerships contingent on certification, they needed a structured, fast-track approach.</p>
          <h2>The Challenge</h2>
          <p>The company had 85 employees across two offices in Pune and Bangalore. Their payment processing platform handled sensitive financial data for thousands of merchants. While they had invested in technical security — firewalls, encryption, WAFs — they lacked the management system documentation, risk assessment processes, and evidence collection that ISO 27001 demands.</p>
          <h2>The SecComply Approach</h2>
          <p>SecComply deployed a dedicated compliance advisor who embedded with the client's team for the first two weeks. We conducted a comprehensive gap assessment, built a risk register with 67 identified risks, and created a complete ISMS documentation suite of 23 policies and SOPs customized for fintech operations.</p>
          <p>Our platform connected directly to their AWS infrastructure and GitHub repos to automate evidence collection for technical controls, while our advisory team guided them through process controls like background checks, vendor assessments, and business continuity planning.</p>
          <h2>The Results</h2>
          <ul>
            <li><strong>5 months</strong> from zero to ISO 27001 certification</li>
            <li><strong>Zero non-conformities</strong> in the Stage 2 audit</li>
            <li><strong>67 risks</strong> identified and treated in the risk register</li>
            <li><strong>2 bank partnerships</strong> signed within 45 days of certification</li>
          </ul>
          <blockquote>ISO 27001 felt overwhelming until SecComply broke it down into manageable phases. Their platform made evidence collection almost automatic.</blockquote>
          <hr className="article-divider" />
          <div className="article-cta-box">
            <h3>Fintech compliance made simple</h3>
            <p>SecComply helps fintech companies achieve ISO 27001, SOC 2, and RBI compliance faster.</p>
            <a href="/contact" className="article-cta-btn">Book Free Consultation →</a>
          </div>
        </div>
      </article>
    </Layout>
  )
}
