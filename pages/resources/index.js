import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

const categories = [
  {
    tag: 'GUIDE',
    icon: '📘',
    title: 'Guides',
    desc: 'Step-by-step implementation guides for ISO 27001, SOC 2, GRC frameworks, and compliance best practices.',
    href: '/resources/guides',
    cta: 'Browse Guides',
    count: '3 Guides'
  },
  {
    tag: 'CASE STUDY',
    icon: '🏆',
    title: 'Case Studies',
    desc: 'Real client success stories showing transformations from zero compliance to certified and audit-ready status.',
    href: '/resources/case-studies',
    cta: 'Read Stories',
    count: '3 Stories'
  },
  {
    tag: 'BLOG',
    icon: '📝',
    title: 'Blog & Insights',
    desc: 'Latest insights on cybersecurity, compliance trends, and regulatory updates to keep you informed and ahead.',
    href: '/resources/blog',
    cta: 'Read Blog',
    count: '3 Articles'
  },
  {
    tag: 'WEBINAR',
    icon: '🎥',
    title: 'Webinars & Events',
    desc: 'On-demand recordings of past webinars and upcoming live sessions with industry experts and thought leaders.',
    href: '/resources/webinars',
    cta: 'Watch Now',
    count: 'Coming Soon'
  },
  {
    tag: 'TOOL',
    icon: '🛠️',
    title: 'Free Tools',
    desc: 'Free assessments, security checklists, and readiness tools to evaluate your compliance posture instantly.',
    href: '/resources/tools',
    cta: 'Try Tools',
    count: '3 Tools'
  },
  {
    tag: 'PLATFORM',
    icon: '🚀',
    title: 'Platform',
    desc: "Explore SecComply's compliance automation platform — ISMS management, evidence collection, and continuous monitoring.",
    href: '/resources/platform',
    cta: 'Explore Platform',
    count: '6 Features'
  }
]

export default function Resources() {
  return (
    <Layout>
      <Head>
        <title>Resources - SecComply</title>
        <meta name="description" content="Compliance guides, case studies, tools, webinars and more from SecComply." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div dangerouslySetInnerHTML={{__html: `<style>
        .res-hero{padding:120px 24px 40px;text-align:center;max-width:800px;margin:0 auto}
        .res-hero h1{font-size:clamp(2rem,5vw,3.2rem);font-weight:800;color:#fff;margin-bottom:16px}
        .res-hero p{font-size:1.1rem;color:rgba(255,255,255,.55);line-height:1.7}
        .res-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:40px auto 100px;padding:0 24px}
        @media(max-width:900px){.res-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.res-grid{grid-template-columns:1fr}}
        .res-card{background:rgba(15,23,42,.6);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:36px 28px;display:flex;flex-direction:column;gap:14px;transition:all .3s ease;cursor:pointer;text-decoration:none;position:relative;overflow:hidden}
        .res-card:hover{border-color:rgba(232,99,43,.4);transform:translateY(-4px);box-shadow:0 12px 40px rgba(232,99,43,.1)}
        .res-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#e8632b,#f0813c);opacity:0;transition:opacity .3s}
        .res-card:hover::before{opacity:1}
        .res-tag-row{display:flex;align-items:center;justify-content:space-between}
        .res-tag{display:inline-block;padding:4px 12px;border-radius:20px;font-size:.7rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;background:rgba(232,99,43,.15);color:#e8632b}
        .res-count{font-size:.75rem;color:rgba(255,255,255,.35);font-weight:500}
        .res-icon{font-size:2.2rem;line-height:1}
        .res-card h3{font-size:1.3rem;font-weight:700;color:#fff;margin:0}
        .res-card p{font-size:.92rem;color:rgba(255,255,255,.5);line-height:1.6;margin:0;flex:1}
        .res-cta{color:#e8632b;font-size:.9rem;font-weight:600;display:flex;align-items:center;gap:6px;margin-top:4px;transition:gap .2s}
        .res-card:hover .res-cta{gap:10px}
      </style>`}} />

      <section className="res-hero">
        <h1>Resources</h1>
        <p>Stay informed with our latest compliance guides, checklists, and industry insights.</p>
      </section>

      <div className="res-grid">
        {categories.map((cat, i) => (
          <Link key={i} href={cat.href} className="res-card">
            <div className="res-tag-row">
              <span className="res-tag">{cat.tag}</span>
              <span className="res-count">{cat.count}</span>
            </div>
            <span className="res-icon">{cat.icon}</span>
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
            <span className="res-cta">{cat.cta} →</span>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
