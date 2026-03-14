import Head from 'next/head'
import Script from 'next/script'

export default function ServiceVaptPage() {

  return (
    <>
      <Head>
        <title>Vulnerability Assessment & Penetration Testing — SecComply</title>
        <meta name="description" content="Identify and fix security vulnerabilities before attackers exploit them — comprehensive VAPT services for web apps, networks, and cloud infrastructure." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />




</Head>
      <div dangerouslySetInnerHTML={{__html: `<section class="service-hero">
  <div class="hero-grid"></div>
  <div class="hero-glow hero-glow-1"></div>
  <div class="hero-glow hero-glow-2"></div>
  <div class="container">
    <div class="hero-badge"><span class="hero-badge-dot"></span> 🔍 Security Testing</div>
    <h1>Vulnerability Assessment & Penetration Testing</h1>
    <p>Identify and fix security vulnerabilities before attackers exploit them — comprehensive VAPT services for web apps, networks, and cloud infrastructure.</p>
    <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Get Started &rarr;</a>
  </div>
</section>

<section class="benefits-section">
  <div class="container">
    <div class="section-header reveal"><div class="section-badge"><span class="section-badge-dot"></span> Key Benefits</div><h2 class="section-title">Why Choose Our Vulnerability Assessment & Penetration Testing Services</h2></div>
    <div class="benefits-grid"><div class="benefit-card reveal delay-1"><div class="benefit-icon">🌐</div><h3>Web Application Testing</h3><p>OWASP Top 10 testing, API security assessment, and business logic vulnerability analysis for your web applications.</p></div>
<div class="benefit-card reveal delay-2"><div class="benefit-icon">🖧</div><h3>Network Penetration Testing</h3><p>External and internal network assessments to identify weaknesses in your network infrastructure and perimeter defenses.</p></div>
<div class="benefit-card reveal delay-3"><div class="benefit-icon">☁️</div><h3>Cloud Security Testing</h3><p>AWS, Azure, and GCP security configuration reviews and penetration testing for cloud-native environments.</p></div>
<div class="benefit-card reveal delay-1"><div class="benefit-icon">📱</div><h3>Mobile App Security</h3><p>Security assessment of iOS and Android applications including data storage, authentication, and API communication.</p></div>
<div class="benefit-card reveal delay-2"><div class="benefit-icon">📊</div><h3>Detailed Reporting</h3><p>Executive summaries and technical reports with clear remediation guidance prioritized by risk severity.</p></div>
<div class="benefit-card reveal delay-3"><div class="benefit-icon">🔄</div><h3>Revalidation Testing</h3><p>Follow-up testing to verify all identified vulnerabilities have been properly remediated and closed.</p></div>
</div>
  </div>
</section>

<section class="timeline-section">
  <div class="container">
    <div class="section-header reveal"><div class="section-badge"><span class="section-badge-dot"></span> Our Process</div><h2 class="section-title">How We Deliver</h2></div>
    <div class="timeline"><div class="timeline-step reveal delay-1"><div class="timeline-dot"></div><h3>Scoping & Planning</h3><p>Define testing scope, rules of engagement, target systems, and testing methodology aligned with OWASP/PTES standards.</p></div>
<div class="timeline-step reveal delay-2"><div class="timeline-dot"></div><h3>Reconnaissance & Discovery</h3><p>Gather intelligence on target systems, enumerate services, and identify potential attack surfaces.</p></div>
<div class="timeline-step reveal delay-3"><div class="timeline-dot"></div><h3>Vulnerability Assessment</h3><p>Automated and manual testing to identify security weaknesses across all in-scope systems and applications.</p></div>
<div class="timeline-step reveal delay-4"><div class="timeline-dot"></div><h3>Exploitation & Penetration Testing</h3><p>Controlled exploitation of discovered vulnerabilities to demonstrate real-world impact and risk.</p></div>
<div class="timeline-step reveal delay-1"><div class="timeline-dot"></div><h3>Reporting & Remediation Support</h3><p>Deliver detailed findings report with severity ratings and guide your team through remediation.</p></div>
</div>
  </div>
</section>

<section class="faq-section">
  <div class="container">
    <div class="section-header reveal"><div class="section-badge"><span class="section-badge-dot"></span> FAQs</div><h2 class="section-title">Frequently Asked Questions</h2></div>
    <div class="faq-list"><div class="faq-item"><div class="faq-question"><span>What's the difference between VA and PT?</span><span class="faq-toggle">+</span></div><div class="faq-answer"><div class="faq-answer-inner">Vulnerability Assessment identifies and catalogs known vulnerabilities, while Penetration Testing actively exploits those vulnerabilities to demonstrate real-world impact and test your defenses.</div></div></div>
<div class="faq-item"><div class="faq-question"><span>How often should we conduct VAPT?</span><span class="faq-toggle">+</span></div><div class="faq-answer"><div class="faq-answer-inner">We recommend quarterly vulnerability assessments and annual penetration tests, or after any major infrastructure or application changes.</div></div></div>
<div class="faq-item"><div class="faq-question"><span>Will testing disrupt our production systems?</span><span class="faq-toggle">+</span></div><div class="faq-answer"><div class="faq-answer-inner">We use carefully controlled testing methodologies and coordinate timing with your team. Most tests are designed to minimize any risk of disruption to production environments.</div></div></div>
<div class="faq-item"><div class="faq-question"><span>What standards do you follow?</span><span class="faq-toggle">+</span></div><div class="faq-answer"><div class="faq-answer-inner">We follow OWASP Testing Guide, PTES, NIST SP 800-115, and SANS methodologies to ensure comprehensive and consistent testing coverage.</div></div></div>
</div>
  </div>
</section>

<section class="cta-section">
  <div class="cta-glow-1"></div><div class="cta-glow-2"></div>
  <div class="container">
    <div class="cta-content reveal">
      <h2>Ready to Get Started with <span class="accent">Vulnerability Assessment & Penetration Testing?</span></h2>
      <p>Book a free 15-minute consultation to discuss your needs and get a customized roadmap.</p>
      <div class="cta-buttons"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Book Free Consultation &rarr;</a><a href="/contact" class="btn btn-outline btn-lg">Contact Us</a></div>
    </div>
  </div>
</section>

`}} />
<Script src="/assets/js/animations.js" strategy="afterInteractive" />
      <Script src="/assets/js/accordion.js" strategy="afterInteractive" />
      <Script src="/assets/js/effects.js" strategy="afterInteractive" />
    </>
  )
}
