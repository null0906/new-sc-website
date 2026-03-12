import Head from 'next/head'
import { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'

export default function CloudMisconfigurations() {
  const [scrollPct, setScrollPct] = useState(0)
  const [showTop, setShowTop] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setScrollPct(pct)
      setShowTop(el.scrollTop > 400)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const faqs = [
    { q: 'What is the most common cause of cloud breaches?', a: 'Customer misconfiguration, not provider vulnerabilities. Gartner found that through 2025, 99% of cloud security failures were caused by the customer, not AWS, GCP, or Azure. Public S3 buckets, overpermissive IAM roles, and missing logging are the top culprits.' },
    { q: 'How quickly can attackers find a public S3 bucket?', a: 'Within hours of creation. Automated scanners and dedicated search engines continuously probe the internet for exposed cloud storage. The Capital One breach is a real-world example of what happens when an S3 bucket and an overpermissive IAM role are left unchecked.' },
    { q: 'Can I enable encryption on an existing unencrypted RDS database?', a: 'Not directly. AWS does not allow enabling encryption on an existing unencrypted RDS instance. You must create an encrypted snapshot of the database and restore a new instance from it. This is why encryption should be enabled at creation time.' },
    { q: 'How do these misconfigurations affect SOC 2 audits?', a: 'Each of the five maps directly to SOC 2 Common Criteria controls. Public storage buckets fail CC6.6, overpermissive IAM fails CC6.1 and CC6.3, missing encryption fails CC6.7, open security groups fail CC6.6, and disabled logging fails CC4.1 and CC7.1.' },
    { q: 'Is a manual quarterly audit enough to keep cloud environments secure?', a: 'No. Cloud environments change constantly, a bucket that was private last week may be public today. Manual audits capture a point in time. Without continuous posture monitoring, misconfigurations accumulate between reviews and often go undetected until a breach or audit reveals them.' },
  ]

  const shareUrl = 'https://www.seccomply.in/resources/blog/top-5-cloud-misconfigurations'

  return (
    <Layout>
      <Head>
        <title>Top 5 Cloud Misconfigurations and How to Fix Them | SecComply</title>
        <meta name="description" content="The five cloud misconfigurations that appear most often in breach investigations, with exact fixes for AWS S3, IAM, encryption, security groups, and logging." />
        <meta property="og:title" content="Top 5 Cloud Misconfigurations and How to Fix Them" />
        <meta property="og:description" content="99% of cloud breaches are the customer's fault. Here are the five misconfigurations that appear most often, and exactly how to fix each one." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=630&fit=crop" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top 5 Cloud Misconfigurations and How to Fix Them" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=630&fit=crop" />
        <link rel="canonical" href={shareUrl} />
        <style>{`
          .b-progress{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#E8632B,#FF8A50);z-index:9999;transition:width .1s linear}
          .b-wrap{max-width:1100px;margin:0 auto;padding:0 24px 80px}
          .b-hero{background:linear-gradient(135deg,#0B1120 0%,#0F172A 100%);border-bottom:1px solid rgba(255,255,255,.07);padding:56px 24px 48px;text-align:center}
          .b-back{display:inline-flex;align-items:center;gap:6px;color:#94A3B8;font-size:13px;text-decoration:none;margin-bottom:24px;transition:color .2s}
          .b-back:hover{color:#E8632B}
          .b-tag-row{display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:16px}
          .b-cat{background:rgba(232,99,43,.15);color:#E8632B;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:4px 12px;border-radius:20px;border:1px solid rgba(232,99,43,.3)}
          .b-hero h1{font-size:clamp(1.7rem,4vw,2.6rem);font-weight:800;color:#F8FAFC;line-height:1.2;max-width:820px;margin:0 auto 20px}
          /* Author card */
          .b-author-strip{display:flex;align-items:center;gap:16px;padding:16px 20px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.09);border-radius:14px;margin-top:24px;flex-wrap:wrap}
          .b-author-strip .avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#E8632B,#FF8A50);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.95rem;color:#fff;flex-shrink:0;box-shadow:0 4px 16px rgba(232,99,43,.3)}
          .b-author-strip .author-info{flex:1;min-width:0}
          .b-author-strip .name{font-weight:700;color:#F8FAFC;font-size:.95rem;margin-bottom:3px}
          .b-author-strip .meta-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.8rem;margin-bottom:2px}
          .b-author-strip .date-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:.78rem;color:#94A3B8}
          .b-author-strip .dot{opacity:.3}
          .b-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(255,255,255,.06);border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06)}
          .b-stat{background:#0B1120;padding:20px 16px;text-align:center}
          .b-stat-val{font-size:1.6rem;font-weight:800;color:#E8632B;display:block;line-height:1}
          .b-stat-lbl{font-size:11px;color:#64748B;margin-top:6px;display:block;line-height:1.4}
          .b-layout{display:grid;grid-template-columns:1fr 300px;gap:48px;margin-top:48px;align-items:start}
          .b-article h2{font-size:1.35rem;font-weight:700;color:#E2E8F0;margin:40px 0 14px;padding-top:8px;border-top:1px solid rgba(255,255,255,.06)}
          .b-article p{color:#94A3B8;line-height:1.8;margin-bottom:16px;font-size:15px}
          .b-fix{background:rgba(16,185,129,.06);border:1px solid rgba(16,185,129,.2);border-left:3px solid #10B981;border-radius:10px;padding:16px 20px;margin:20px 0}
          .b-fix strong{color:#10B981;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;display:block;margin-bottom:6px}
          .b-fix p{color:#94A3B8;font-size:14px;line-height:1.7;margin:0}
          .b-num-card{background:#0F172A;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:24px;margin:20px 0}
          .b-num-card-head{display:flex;align-items:center;gap:14px;margin-bottom:14px}
          .b-num{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#E8632B,#FF8A50);color:#fff;font-weight:800;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
          .b-num-title{font-size:1.05rem;font-weight:700;color:#E2E8F0}
          .b-figure{margin:32px 0;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,.07)}
          .b-figure img{width:100%;height:260px;object-fit:cover;display:block}
          .b-figure figcaption{background:#0B1120;color:#64748B;font-size:12px;padding:10px 16px;text-align:center}
          .b-mapping{background:#0F172A;border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden;margin:20px 0}
          .b-mapping table{width:100%;border-collapse:collapse}
          .b-mapping th{background:rgba(232,99,43,.1);color:#E8632B;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;padding:10px 16px;text-align:left}
          .b-mapping td{padding:10px 16px;color:#94A3B8;font-size:13px;border-top:1px solid rgba(255,255,255,.05)}
          .b-sidebar{display:flex;flex-direction:column;gap:20px;position:sticky;top:88px}
          .b-sidebar-box{background:#0F172A;border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:22px}
          .b-sidebar-box h4{font-size:13px;font-weight:700;color:#E2E8F0;text-transform:uppercase;letter-spacing:.06em;margin-bottom:14px}
          .b-toc-link{display:block;color:#94A3B8;font-size:13px;padding:5px 0;text-decoration:none;border-left:2px solid transparent;padding-left:10px;transition:all .2s}
          .b-toc-link:hover{color:#E8632B;border-color:#E8632B}
          .b-cta-box{background:linear-gradient(135deg,rgba(232,99,43,.12),rgba(232,99,43,.05));border:1px solid rgba(232,99,43,.25);border-radius:14px;padding:24px;text-align:center}
          .b-cta-box h4{color:#E2E8F0;font-size:15px;font-weight:700;margin-bottom:8px}
          .b-cta-box p{color:#64748B;font-size:13px;margin-bottom:16px;line-height:1.6}
          .b-cta-btn{display:block;background:linear-gradient(135deg,#E8632B,#FF8A50);color:#fff;font-weight:700;font-size:13px;padding:11px 16px;border-radius:8px;text-decoration:none;transition:opacity .2s}
          .b-cta-btn:hover{opacity:.88}
          .b-share{display:flex;gap:8px;flex-wrap:wrap;margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,.07)}
          .b-share-btn{display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:8px;font-size:12px;font-weight:600;text-decoration:none;transition:opacity .2s;color:#fff}
          .b-share-btn:hover{opacity:.8}
          .b-faq{margin-top:48px}
          .b-faq h2{font-size:1.3rem;font-weight:700;color:#E2E8F0;margin-bottom:20px}
          .b-faq-item{border:1px solid rgba(255,255,255,.08);border-radius:12px;margin-bottom:10px;overflow:hidden}
          .b-faq-q{width:100%;background:#0F172A;border:none;color:#E2E8F0;font-size:15px;font-weight:500;padding:18px 20px;text-align:left;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:inherit;transition:background .2s}
          .b-faq-q:hover{background:#162036}
          .b-faq-a{padding:0 20px;max-height:0;overflow:hidden;transition:max-height .3s ease,padding .3s ease}
          .b-faq-a.open{max-height:300px;padding:14px 20px 18px}
          .b-faq-a p{color:#94A3B8;font-size:14px;line-height:1.7;margin:0}
          .b-back-top{position:fixed;bottom:32px;right:32px;width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#E8632B,#FF8A50);color:#fff;font-size:18px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s;z-index:999}
          .b-back-top.show{opacity:1}
          code{background:#1E293B;color:#38BDF8;padding:2px 7px;border-radius:5px;font-size:13px;font-family:'JetBrains Mono',monospace}
          @media(max-width:768px){.b-layout{grid-template-columns:1fr}.b-sidebar{position:static}.b-stats{grid-template-columns:repeat(2,1fr)}}
          @media(max-width:600px){.b-hero h1{font-size:1.65rem}.b-author-strip{flex-direction:column;align-items:flex-start;gap:12px}.b-stats{grid-template-columns:1fr}}
          @media(max-width:480px){.b-hero{padding:40px 16px 32px}.b-wrap{padding:0 16px 60px}}
        `}</style>
      </Head>

      <div className="b-progress" style={{ width: `${scrollPct}%` }} />

      <section className="b-hero">
        <a href="/resources/blog" className="b-back">← Back to Blog</a>
        <div className="b-tag-row">
          <span className="b-cat">☁️ Cloud Security</span>
          <span className="b-cat">🔐 AWS</span>
        </div>
        <h1>Top 5 Cloud Misconfigurations and How to Fix Them</h1>
        <div className="b-author-strip">
          <div className="avatar">BD</div>
          <div className="author-info">
            <div className="name">Bhumika Deshmukh</div>
            <div className="meta-row">
              <span style={{color:"var(--cy)",fontWeight:600}}>✍️ Security Researcher &amp; Technical Writer</span>
              <span className="dot">·</span>
              <span id="read-time">📖 7 min read</span>
            </div>
            <div className="date-row">
              <span>📅 March 11, 2026</span>
              <span className="dot">·</span>
              <span>🏢 SecComply</span>
            </div>
          </div>
        </div>
      </section>

      <div className="b-stats">
        <div className="b-stat"><span className="b-stat-val">99%</span><span className="b-stat-lbl">Cloud breaches caused by customer misconfiguration</span></div>
        <div className="b-stat"><span className="b-stat-val">194</span><span className="b-stat-lbl">Median days to detect a breach in 2024</span></div>
        <div className="b-stat"><span className="b-stat-val">Hours</span><span className="b-stat-lbl">Time for scanners to find a public S3 bucket</span></div>
        <div className="b-stat"><span className="b-stat-val">$4.88M</span><span className="b-stat-lbl">Average cost of a data breach</span></div>
      </div>

      <div className="b-wrap">
        <div className="b-layout">
          <article className="b-article">
            <p>Cloud infrastructure gets breached not because attackers are sophisticated, but because a setting was left on default, a permission was never cleaned up, or a log was never turned on. Here are the five misconfigurations that appear most often in breach investigations, and exactly what to do about each one.</p>
            <p>Gartner put a number on this: through 2025, <strong style={{color:'#E2E8F0'}}>99% of cloud security failures were the customer's fault</strong>, not the cloud provider's. AWS, GCP, and Azure are secure by design. The misconfiguration is always on the other side of the shared responsibility model, in the settings, policies, and access controls that engineering teams configure and own.</p>

            <figure className="b-figure">
              <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=520&fit=crop" alt="Cloud security infrastructure monitoring" loading="lazy" />
              <figcaption>Cloud misconfiguration accounts for the majority of modern breaches, not sophisticated attacker techniques.</figcaption>
            </figure>

            <h2>The Shared Responsibility Problem</h2>
            <p>The provider secures the hardware, network, and hypervisor. Everything above that layer, IAM policies, encryption settings, network access controls, storage permissions, belongs to the customer. That boundary is where all five misconfigurations below live. None of them are failures of the cloud platform. All of them are failures of configuration, usually introduced quickly, under pressure, and never revisited.</p>

            <div className="b-num-card">
              <div className="b-num-card-head"><div className="b-num">1</div><div className="b-num-title">Public S3 Buckets, The Breach That Keeps Happening</div></div>
              <p>An S3 bucket set to public access means every file in it is readable by anyone on the internet. Finding that URL takes less than a minute. Capital One, GoDaddy, and dozens of less-reported breaches trace directly to publicly accessible cloud storage. The exposure is often discovered not by the company but by a security researcher, or an attacker who had been quietly exfiltrating data for months.</p>
              <div className="b-fix"><strong>📌 The Fix</strong><p>Enable S3 Block Public Access at the AWS account level, a single toggle that prevents any bucket from being made public. Run AWS Trusted Advisor or Prowler to audit existing buckets. For genuinely public content, use CloudFront as the delivery layer and keep the origin bucket private.</p></div>
            </div>

            <div className="b-num-card">
              <div className="b-num-card-head"><div className="b-num">2</div><div className="b-num-title">Overly Permissive IAM Roles, The Widest Open Door</div></div>
              <p>The Capital One breach of 2019 used an overpermissioned IAM role to enumerate and download data from over 700 S3 buckets, exposing 100 million customer records at a cost of over $190 million. The root cause: a role with <code>AdministratorAccess</code> attached to an internet-facing service. The principle of least privilege exists precisely to prevent this.</p>
              <div className="b-fix"><strong>📌 The Fix</strong><p>Run AWS IAM Access Analyzer across the entire environment. It identifies roles with unused permissions, wildcard resource access, and over-scoped policies. Replace <code>AdministratorAccess</code> with specific resource-scoped policies. Enable IAM Access Analyzer at the organisation level to flag new overpermissive policies automatically.</p></div>
            </div>

            <figure className="b-figure">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=520&fit=crop" alt="Security audit and compliance review" loading="lazy" />
              <figcaption>Each misconfiguration maps directly to a SOC 2 Common Criteria control that auditors specifically test for.</figcaption>
            </figure>

            <div className="b-num-card">
              <div className="b-num-card-head"><div className="b-num">3</div><div className="b-num-title">Unencrypted Data at Rest and in Transit</div></div>
              <p>SK Telecom's 2025 breach, resulting in a £97 million regulatory fine, listed unencrypted storage of USIM authentication keys as the primary compliance failure. 26 million of the most sensitive credentials were stored in plaintext. No encryption. No key management. No protection. RDS databases, S3 buckets, EBS volumes, and internal service connections are all common encryption gaps in cloud environments.</p>
              <div className="b-fix"><strong>📌 The Fix</strong><p>For RDS, enable encryption at creation time (it cannot be added to an existing instance without migration). For S3, apply a bucket policy that denies any <code>PutObject</code> without server-side encryption. Enforce TLS 1.2 minimum at the load balancer. AWS Certificate Manager provides free TLS certificates for all public endpoints.</p></div>
            </div>

            <div className="b-num-card">
              <div className="b-num-card-head"><div className="b-num">4</div><div className="b-num-title">Unrestricted Security Group Rules, The Forgotten Open Port</div></div>
              <p>A rule allowing inbound traffic from <code>0.0.0.0/0</code> on any port is an open invitation to the entire internet. An RDS instance with port 3306 open to the world will be found by port scanners within hours. This misconfiguration appears in environments of every scale and is flagged in virtually every cloud security assessment.</p>
              <div className="b-fix"><strong>📌 The Fix</strong><p>Enable AWS Security Hub with the Foundational Security Best Practices standard, it automatically flags security groups with unrestricted inbound access. Replace all <code>0.0.0.0/0</code> source rules with specific IP ranges or VPC CIDR blocks. For SSH access, use AWS Systems Manager Session Manager, fully audited shell access with no inbound ports required.</p></div>
            </div>

            <div className="b-num-card">
              <div className="b-num-card-head"><div className="b-num">5</div><div className="b-num-title">Disabled Logging, Flying Blind</div></div>
              <p>The median time to identify a breach in 2024 was 194 days. In most cases, the logs that would have revealed the intrusion either were not being collected, were not retained long enough, or were not being monitored. Logging is the one control that cannot be fixed retroactively, if CloudTrail was not enabled in two AWS regions, those 12 months of API activity are gone forever.</p>
              <div className="b-fix"><strong>📌 The Fix</strong><p>Enable AWS CloudTrail in all regions with log file validation. Store logs in a dedicated S3 bucket with object lock enabled. Enable VPC Flow Logs on every production VPC with 12-month retention. Create five CloudWatch alarms: root account usage, console login without MFA, CloudTrail configuration changes, security group modifications, and unusual data transfer volumes.</p></div>
            </div>

            <h2>SOC 2 &amp; Framework Mapping</h2>
            <div className="b-mapping">
              <table>
                <thead><tr><th>Misconfiguration</th><th>SOC 2 Control</th><th>ISO 27001</th><th>DPDP Act</th></tr></thead>
                <tbody>
                  <tr><td>Public S3 Buckets</td><td>CC6.6</td><td>A.9.4</td><td>Section 8</td></tr>
                  <tr><td>Overpermissive IAM</td><td>CC6.1, CC6.3</td><td>A.9.2</td><td>Section 8</td></tr>
                  <tr><td>Missing Encryption</td><td>CC6.7</td><td>A.10.1</td><td>Section 8</td></tr>
                  <tr><td>Open Security Groups</td><td>CC6.6</td><td>A.13.1</td><td>Section 8</td></tr>
                  <tr><td>Disabled Logging</td><td>CC4.1, CC7.1</td><td>A.12.4</td><td>Section 9</td></tr>
                </tbody>
              </table>
            </div>

            <div className="b-share">
              <span style={{color:'#64748B',fontSize:'13px',fontWeight:600,alignSelf:'center'}}>Share:</span>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.seccomply.in/resources/blog/top-5-cloud-misconfigurations" target="_blank" rel="noopener noreferrer" className="b-share-btn" style={{background:'#0077B5'}}>LinkedIn</a>
              <a href="https://twitter.com/intent/tweet?url=https://www.seccomply.in/resources/blog/top-5-cloud-misconfigurations&text=Top 5 Cloud Misconfigurations" target="_blank" rel="noopener noreferrer" className="b-share-btn" style={{background:'#1DA1F2'}}>Twitter</a>
              <a href="https://wa.me/?text=Top 5 Cloud Misconfigurations https://www.seccomply.in/resources/blog/top-5-cloud-misconfigurations" target="_blank" rel="noopener noreferrer" className="b-share-btn" style={{background:'#25D366'}}>WhatsApp</a>
            </div>

            <div className="b-faq">
              <h2>Frequently Asked Questions</h2>
              {faqs.map((f, i) => (
                <div key={i} className="b-faq-item">
                  <button className="b-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{f.q}<span>{openFaq === i ? '▲' : '▼'}</span></button>
                  <div className={`b-faq-a${openFaq === i ? ' open' : ''}`}><p>{f.a}</p></div>
                </div>
              ))}
            </div>
          </article>

          <aside className="b-sidebar">
            <div className="b-sidebar-box">
              <h4>In This Article</h4>
              <a href="#" className="b-toc-link">The Shared Responsibility Problem</a>
              <a href="#" className="b-toc-link">1. Public S3 Buckets</a>
              <a href="#" className="b-toc-link">2. Overly Permissive IAM</a>
              <a href="#" className="b-toc-link">3. Unencrypted Data</a>
              <a href="#" className="b-toc-link">4. Open Security Groups</a>
              <a href="#" className="b-toc-link">5. Disabled Logging</a>
              <a href="#" className="b-toc-link">SOC 2 Framework Mapping</a>
            </div>
            <div className="b-cta-box">
              <h4>Cloud Posture Review</h4>
              <p>SecComply continuously monitors your cloud infrastructure against SOC 2, ISO 27001, and DPDP Act, and flags every gap before an auditor finds it.</p>
              <a href="/contact" className="b-cta-btn">Book a Free Gap Assessment →</a>
            </div>
            <div className="b-sidebar-box">
              <h4>Related Posts</h4>
              <a href="/resources/blog/what-is-cspm-scan" className="b-toc-link">☁️ What is a CSPM Scan?</a>
              <a href="/resources/blog/soc2-vs-iso27001" className="b-toc-link">📋 SOC 2 vs ISO 27001</a>
              <a href="/resources/blog/skt-breach-compliance-failure" className="b-toc-link">📡 SK Telecom Breach Analysis</a>
            </div>
          </aside>
        </div>
      </div>

      <button className={`b-back-top${showTop ? ' show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
    </Layout>
  )
}