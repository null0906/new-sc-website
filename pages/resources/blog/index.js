import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const posts = [
  { slug: 'how-to-evaluate-security-vendor', icon: '🛡️', tag: 'Vendor Risk', title: 'How to Evaluate Your Security Vendor Without Getting Burned', desc: "Choosing the wrong security vendor can cost you your ISO 27001 cert, your SOC 2 audit, and your customers' trust. A structured framework: the right questions, red flags, certifications table, and contract clauses.", author: 'Aditya Hadke', date: 'March 2026', read: '7 min read' },
  { slug: 'ai-generated-code-security-risks', icon: '🤖', tag: 'AI Security', title: 'AI-Generated Code and Security Risks', desc: '3 in 5 AI code suggestions contain at least one flaw. Here is where the risk actually lives — insecure defaults, stale dependencies, credential leaks — and how to build the review layer that makes AI-speed development safe.', author: 'Gauri Khatate', date: 'March 2026', read: '5 min read' },
  { slug: 'top-5-cloud-misconfigurations', icon: '☁️', tag: 'Cloud Security', title: 'Top 5 Cloud Misconfigurations and How to Fix Them', desc: '99% of cloud breaches are the customer\'s fault. Here are the five misconfigurations that appear most often in breach investigations, with exact fixes for each.', author: 'Bhumika Deshmukh', date: 'March 11, 2026', read: '7 min read' },
  { slug: 'soc2-type1-vs-type2', icon: '📋', tag: 'SOC 2', title: 'SOC 2 Type I vs Type II, The Distinction That Actually Matters', desc: 'One is a snapshot. The other is proof over time. Here is exactly what separates them, why enterprise buyers always ask for Type II, and the practical path from one to the other.', author: 'Gauri Khatate', date: 'March 2026', read: '5 min read' },
  { slug: 'top-security-tools-startup', icon: '🔐', tag: 'Security Tools', title: 'Top 10 Security Tools Every Startup Should Know in 2026', desc: 'Ten tools in deployment order, each one closes a SOC 2 gap and builds enterprise trust. Several are free.', author: 'Bhumika Deshmukh', date: 'March 2026', read: '8 min read' },
  { slug: 'soc2-vs-iso27001', icon: '📋', tag: 'Compliance Guide', title: 'SOC 2 vs ISO 27001: Which Certification Should You Choose? [2026]', desc: 'Cost, timeline, market fit, and the honest recommendation for Indian startups and SaaS companies expanding globally.', author: 'SecComply', date: 'March 2026', read: '9 min read' },
  { slug: 'what-is-cspm-scan', icon: '☁️', tag: 'Cloud Security', title: 'What is a CSPM Scan? Cloud Security Posture Management Explained', desc: 'How CSPM scans work, what they detect, and how to stay continuously compliant across AWS, Azure, and GCP.', author: 'SecComply', date: 'March 2025', read: '7 min read' },
  { slug: 'skt-breach-compliance-failure', icon: '📡', tag: 'Breach Analysis', title: 'SK Telecom Breach: When Compliance Failures Become a $97M Bill', desc: "South Korea's biggest telecom wasn't brought down by a zero-day, it was missing basics. Here's what every organisation should take from the $97M fine.", author: 'SecComply', date: 'March 2026', read: '10 min read' },
  { slug: 'dpdp-act-indian-startups', icon: '🇮🇳', tag: 'DPDP Act', title: 'DPDP Act 2023: What Indian Startups Need to Know', desc: "A breakdown of India's Digital Personal Data Protection Act and practical steps for compliance readiness.", author: 'SecComply', date: 'March 2025', read: '6 min read' },
  { slug: 'top-10-security-controls', icon: '🔒', tag: 'Security Controls', title: 'Top 10 Security Controls Every Startup Should Implement', desc: 'Essential security controls that form the foundation of any compliance program, explained in plain language.', author: 'SecComply', date: 'February 2025', read: '5 min read' },
  { slug: 'cost-of-non-compliance', icon: '💰', tag: 'Compliance', title: 'The True Cost of Non-Compliance in 2025', desc: 'Data-driven analysis of what compliance failures cost companies, from fines to lost deals and reputation damage.', author: 'SecComply', date: 'January 2025', read: '6 min read' },
]

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog & Insights, SecComply</title>
        <meta name="description" content="Latest insights on cybersecurity, compliance trends, and regulatory updates from the SecComply team." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/resource-pages.css" />
      </Head>

      <style jsx global>{`
        .blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:40px auto 80px;padding:0 24px}
        .blog-card{background:rgba(15,23,42,.6);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:28px 24px;display:flex;flex-direction:column;gap:12px;transition:all .3s ease;text-decoration:none;color:inherit;position:relative;overflow:hidden}
        .blog-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#E8632B,#FF8A50);transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.16,1,.3,1)}
        .blog-card:hover::before{transform:scaleX(1)}
        .blog-card:hover{border-color:rgba(232,99,43,.3);transform:translateY(-4px);box-shadow:0 12px 40px rgba(232,99,43,.1)}
        .blog-tag{display:inline-block;padding:4px 12px;border-radius:20px;font-size:.68rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;background:rgba(232,99,43,.12);color:#E8632B;width:fit-content}
        .blog-icon{font-size:1.6rem;line-height:1}
        .blog-card h3{font-size:1rem;font-weight:700;color:#F8FAFC;margin:0;line-height:1.4}
        .blog-card p{font-size:.86rem;color:#94A3B8;line-height:1.6;margin:0;flex:1}
        .blog-meta{font-size:.75rem;color:#64748B;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
        .blog-meta .dot{opacity:.4}
        .blog-cta{color:#E8632B;font-size:.85rem;font-weight:600;display:inline-flex;align-items:center;gap:5px;transition:gap .2s;margin-top:4px}
        .blog-card:hover .blog-cta{gap:9px}
        @media(max-width:900px){.blog-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.blog-grid{grid-template-columns:1fr;padding:0 16px}}
      `}</style>

      <section className="sub-hero">
        <Link href="/resources" className="sub-back">← Back to Resources</Link>
        <h1>📝 Blog & Insights</h1>
        <p>Latest insights on cybersecurity, compliance trends, and regulatory updates.</p>
      </section>

      <div className="blog-grid">
        {posts.map((post) => (
          <Link key={post.slug} href={'/resources/blog/' + post.slug} className="blog-card">
            <span className="blog-tag">{post.tag}</span>
            <div className="blog-icon">{post.icon}</div>
            <h3>{post.title}</h3>
            <p>{post.desc}</p>
            <div className="blog-meta">
              <span>{post.author}</span>
              <span className="dot">·</span>
              <span>{post.date}</span>
              <span className="dot">·</span>
              <span>{post.read}</span>
            </div>
            <span className="blog-cta">Read article →</span>
          </Link>
        ))}
      </div>
    </Layout>
  )
}