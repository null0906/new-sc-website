import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

export default function ServiceCloudSecurityPage() {

  return (
    <>
      <Head>
        <title>Cloud Security Assessments — SecComply</title>
        <meta name="description" content="Comprehensive security reviews for AWS, Azure, and GCP — identify misconfigurations, enforce best practices, and secure your cloud infrastructure." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/variables.css" />
        <link rel="stylesheet" href="/assets/css/base.css" />
        <link rel="stylesheet" href="/assets/css/animations.css" />
        <link rel="stylesheet" href="/assets/css/components.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </Head>
      <div dangerouslySetInnerHTML={{__html: `<nav class="navbar" id="navbar">
  <div class="navbar-inner">
    <a href="/" class="logo"><div class="logo-mark"><svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FF8A50"/><stop offset="100%" style="stop-color:#E8632B"/></linearGradient></defs><path d="M30 2 L56 16 L56 38 C56 52 44 62 30 68 C16 62 4 52 4 38 L4 16 Z" fill="none" stroke="url(#shieldGrad)" stroke-width="3.5" stroke-linejoin="round"/><path d="M30 14 L48 24 L48 38 C48 48 40 55 30 60 C20 55 12 48 12 38 L12 24 Z" fill="url(#shieldGrad)" opacity="0.9"/><path d="M22 36 L28 42 L40 28" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="logo-text">Sec<span>Comply</span></div></a>
    <ul class="nav-links">
      <li><a href="/about">About</a></li>
      <li class="nav-dropdown"><span class="nav-dropdown-trigger"><a href="/#services">Services</a><span class="dropdown-arrow">&#9662;</span></span><div class="nav-dropdown-menu"><a href="/services/iso-27001"><span class="dropdown-icon">&#x1F30D;</span> ISO 27001</a><a href="/services/iso-27701"><span class="dropdown-icon">&#x1F512;</span> ISO 27701</a><a href="/services/soc-2"><span class="dropdown-icon">&#x1F6E1;&#xFE0F;</span> SOC 2</a><a href="/services/dpdp"><span class="dropdown-icon">&#x1F1EE;&#x1F1F3;</span> DPDP Act</a><a href="/services/gdpr"><span class="dropdown-icon">&#x1F1EA;&#x1F1FA;</span> GDPR</a><a href="/services/hipaa"><span class="dropdown-icon">&#x1F3E5;</span> HIPAA</a><a href="/services/vapt"><span class="dropdown-icon">&#x1F50D;</span> VAPT</a><a href="/services/ciso"><span class="dropdown-icon">&#x1F4BC;</span> CISO as a Service</a></div></li>
      <li><a href="/resources">Resources</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <div class="nav-actions"><a href="https://outlook.office.com/book/SecComplyMeeting@seccomply.net/" class="btn btn-primary" target="_blank" rel="noopener">Book Consultation <span class="btn-icon">&rarr;</span></a></div>
    <button class="mobile-toggle">&#9776;</button>
  </div>
</nav>

<section class="service-hero">
  <div class="hero-grid"></div>
  <div class="hero-glow hero-glow-1"></div>
  <div class="hero-glow hero-glow-2"></div>
  <div class="container">
    <div class="hero-badge"><span class="hero-badge-dot"></span> ☁️ Cloud Infrastructure Protection</div>
    <h1>Cloud Security Assessments</h1>
    <p>Comprehensive security reviews for AWS, Azure, and GCP — identify misconfigurations, enforce best practices, and secure your cloud infrastructure.</p>
    <a href="https://outlook.office.com/book/SecComplyMeeting@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Get Started &rarr;</a>
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
      <div class="cta-buttons"><a href="https://outlook.office.com/book/SecComplyMeeting@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Book Free Consultation &rarr;</a><a href="/contact" class="btn btn-outline btn-lg">Contact Us</a></div>
    </div>
  </div>
</section>

<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand"><a href="/" class="logo"><div class="logo-mark"><svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="shieldGrad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FF8A50"/><stop offset="100%" style="stop-color:#E8632B"/></linearGradient></defs><path d="M30 2 L56 16 L56 38 C56 52 44 62 30 68 C16 62 4 52 4 38 L4 16 Z" fill="none" stroke="url(#shieldGrad2)" stroke-width="3.5" stroke-linejoin="round"/><path d="M30 14 L48 24 L48 38 C48 48 40 55 30 60 C20 55 12 48 12 38 L12 24 Z" fill="url(#shieldGrad2)" opacity="0.9"/><path d="M22 36 L28 42 L40 28" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="logo-text">Sec<span>Comply</span></div></a><p>Expert cybersecurity compliance &mdash; without the complexity.</p></div>
      <div class="footer-col"><h4>Services</h4><ul><li><a href="/services/iso-27001">ISO 27001</a></li><li><a href="/services/soc-2">SOC 2</a></li><li><a href="/services/dpdp">DPDP Act</a></li><li><a href="/services/gdpr">GDPR</a></li><li><a href="/services/hipaa">HIPAA</a></li><li><a href="/services/vapt">VAPT</a></li><li><a href="/services/ciso">CISO as a Service</a></li></ul></div>
      <div class="footer-col"><h4>Company</h4><ul><li><a href="/about">About</a></li><li><a href="/resources">Resources</a></li><li><a href="/contact">Contact</a></li></ul></div>
      <div class="footer-col"><h4>Legal</h4><ul><li><a href="/privacy-policy">Privacy Policy</a></li></ul></div>
    </div>
    <div class="footer-line"></div>
    <div class="footer-bottom"><span class="footer-copy">&copy; 2026 SecComply. All rights reserved.</span><div class="footer-socials"><a href="https://www.linkedin.com/in/shivani-tikadia-nadkarni/" class="footer-social" target="_blank" rel="noopener">in</a></div></div>
  </div>
</footer>`}} />
      <Script src="/assets/js/navbar.js" strategy="afterInteractive" />
      <Script src="/assets/js/animations.js" strategy="afterInteractive" />
      <Script src="/assets/js/accordion.js" strategy="afterInteractive" />
      <Script src="/assets/js/effects.js" strategy="afterInteractive" />
    </>
  )
}
