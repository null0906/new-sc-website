import Head from 'next/head'
import Script from 'next/script'

export default function ServiceCloudSecurityPage() {

  return (
    <>
      <Head>
        <title>Cloud Security Assessments — SecComply</title>
        <meta name="description" content="Comprehensive security reviews for AWS, Azure, and GCP — identify misconfigurations, enforce best practices, and secure your cloud infrastructure." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />



</Head>
      <div dangerouslySetInnerHTML={{__html: `<section class="service-hero">
  <div class="hero-grid"></div>
  <div class="hero-glow hero-glow-1"></div>
  <div class="hero-glow hero-glow-2"></div>
  <div class="container">
    <div class="hero-badge"><span class="hero-badge-dot"></span> ☁️ Cloud Infrastructure Protection</div>
    <h1>Cloud Security Assessments</h1>
    <p>Comprehensive security reviews for AWS, Azure, and GCP — identify misconfigurations, enforce best practices, and secure your cloud infrastructure.</p>
    <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Get Started &rarr;</a>
  </div>
</section>

<section class="benefits-section">
  <div class="container">
    <div class="section-header reveal"><div class="section-badge"><span class="section-badge-dot"></span> Key Benefits</div><h2 class="section-title">Why Choose Our Cloud Security Assessments Services</h2></div>
    <div class="benefits-grid"><div class="benefit-card reveal delay-1"><div class="benefit-icon">🏗️</div><h3>Architecture Review</h3><p>Evaluate your cloud architecture against security best practices including network segmentation, identity management, and data protection.</p></div>
<div class="benefit-card reveal delay-2"><div class="benefit-icon">⚙️</div><h3>Configuration Audit</h3><p>Automated and manual review of cloud service configurations against CIS Benchmarks and cloud provider best practices.</p></div>
<div class="benefit-card reveal delay-3"><div class="benefit-icon">🔐</div><h3>IAM Assessment</h3><p>Review identity and access management policies, roles, and permissions to ensure least-privilege access across your cloud environment.</p></div>
<div class="benefit-card reveal delay-1"><div class="benefit-icon">📊</div><h3>Compliance Mapping</h3><p>Map your cloud security posture against regulatory requirements including SOC 2, ISO 27001, HIPAA, and PCI DSS.</p></div>
<div class="benefit-card reveal delay-2"><div class="benefit-icon">🛡️</div><h3>Threat Modeling</h3><p>Identify potential attack vectors specific to your cloud architecture and develop mitigation strategies.</p></div>
<div class="benefit-card reveal delay-3"><div class="benefit-icon">📋</div><h3>Remediation Roadmap</h3><p>Prioritized action plan with clear steps to address identified security gaps and strengthen your cloud defenses.</p></div>
</div>
  </div>
</section>

<section class="timeline-section">
  <div class="container">
    <div class="section-header reveal"><div class="section-badge"><span class="section-badge-dot"></span> Our Process</div><h2 class="section-title">How We Deliver</h2></div>
    <div class="timeline"><div class="timeline-step reveal delay-1"><div class="timeline-dot"></div><h3>Discovery & Scoping</h3><p>Inventory your cloud assets, understand your architecture, and define the assessment scope across all cloud providers.</p></div>
<div class="timeline-step reveal delay-2"><div class="timeline-dot"></div><h3>Automated Scanning</h3><p>Run comprehensive automated checks against 200+ security benchmarks covering compute, storage, networking, and IAM.</p></div>
<div class="timeline-step reveal delay-3"><div class="timeline-dot"></div><h3>Manual Deep-Dive</h3><p>Expert manual review of critical areas including network architecture, data flows, encryption, and access controls.</p></div>
<div class="timeline-step reveal delay-4"><div class="timeline-dot"></div><h3>Risk Scoring & Prioritization</h3><p>Score findings by severity and business impact, mapping to relevant compliance frameworks.</p></div>
<div class="timeline-step reveal delay-1"><div class="timeline-dot"></div><h3>Reporting & Remediation Support</h3><p>Deliver detailed report with findings, risk ratings, and step-by-step remediation guidance.</p></div>
</div>
  </div>
</section>

<section class="faq-section">
  <div class="container">
    <div class="section-header reveal"><div class="section-badge"><span class="section-badge-dot"></span> FAQs</div><h2 class="section-title">Frequently Asked Questions</h2></div>
    <div class="faq-list"><div class="faq-item"><div class="faq-question"><span>Which cloud providers do you support?</span><span class="faq-toggle">+</span></div><div class="faq-answer"><div class="faq-answer-inner">We support all major cloud providers including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and multi-cloud environments.</div></div></div>
<div class="faq-item"><div class="faq-question"><span>How long does a cloud security assessment take?</span><span class="faq-toggle">+</span></div><div class="faq-answer"><div class="faq-answer-inner">Typical assessments take 2-4 weeks depending on the complexity of your cloud environment and the number of services in scope.</div></div></div>
<div class="faq-item"><div class="faq-question"><span>Do you need admin access to our cloud accounts?</span><span class="faq-toggle">+</span></div><div class="faq-answer"><div class="faq-answer-inner">We require read-only access to perform the assessment. We'll work with your team to set up secure, time-limited access with appropriate permissions.</div></div></div>
<div class="faq-item"><div class="faq-question"><span>Can you help fix the issues you find?</span><span class="faq-toggle">+</span></div><div class="faq-answer"><div class="faq-answer-inner">Absolutely. We provide detailed remediation guidance and can assist your team with implementing fixes through our remediation support services.</div></div></div>
</div>
  </div>
</section>

<section class="cta-section">
  <div class="cta-glow-1"></div><div class="cta-glow-2"></div>
  <div class="container">
    <div class="cta-content reveal">
      <h2>Ready to Get Started with <span class="accent">Cloud Security Assessments?</span></h2>
      <p>Book a free 15-minute consultation to discuss your needs and get a customized roadmap.</p>
      <div class="cta-buttons"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Book Free Consultation &rarr;</a><a href="/pricing" class="btn btn-outline btn-lg">See Pricing &rarr;</a><a href="/contact" class="btn btn-outline btn-lg">Contact Us</a></div>
    </div>
  </div>
</section>

`}} />
<Script src="/assets/js/animations.js" strategy="afterInteractive" />
      <Script src="/assets/js/accordion.js" strategy="afterInteractive" />
    </>
  )
}
