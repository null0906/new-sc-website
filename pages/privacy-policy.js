import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

export default function PrivacyPolicyPage() {

  return (
    <>
      <Head>
        <title>Privacy Policy — SecComply</title>
        <meta name="description" content="SecComply Privacy Policy. How we collect, use, and protect your information." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/variables.css" />
        <link rel="stylesheet" href="/assets/css/base.css" />
        <link rel="stylesheet" href="/assets/css/animations.css" />
        <link rel="stylesheet" href="/assets/css/components.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <style dangerouslySetInnerHTML={{__html: `.policy-section{padding:80px 0;background:var(--bg-primary,#020617)}.policy-content{max-width:800px;margin:0 auto}.policy-content h2{font-size:22px;font-weight:700;color:#F8FAFC;margin:40px 0 16px}.policy-content h2:first-child{margin-top:0}.policy-content p{font-size:15px;color:#94A3B8;line-height:1.8;margin-bottom:16px}.policy-content ul{list-style:none;padding:0;margin-bottom:20px}.policy-content ul li{font-size:15px;color:#94A3B8;line-height:1.8;padding-left:20px;position:relative;margin-bottom:8px}.policy-content ul li::before{content:"\\25B8";position:absolute;left:0;color:#E8632B;font-weight:bold}.policy-content strong{color:#E2E8F0}.policy-date{font-size:14px;color:#64748B;margin-bottom:32px}`}} />
      </Head>
      <div dangerouslySetInnerHTML={{__html: `<!-- NAVBAR -->
<nav class="navbar" id="navbar">
  <div class="navbar-inner">
    <a href="/" class="logo"><img src="/assets/images/logo.png" alt="SecComply" style="height:40px"></a>
    <ul class="nav-links">
      <li><a href="/about">About</a></li>
      <li class="nav-dropdown"><span class="nav-dropdown-trigger"><a href="/#services">Services</a><span class="dropdown-arrow">&#9662;</span></span><div class="nav-dropdown-menu"><a href="/services/iso-27001"><span class="dropdown-icon">&#x1F30D;</span> ISO 27001</a><a href="/services/iso-27701"><span class="dropdown-icon">&#x1F512;</span> ISO 27701</a><a href="/services/soc-2"><span class="dropdown-icon">&#x1F6E1;&#xFE0F;</span> SOC 2</a><a href="/services/dpdp"><span class="dropdown-icon">&#x1F1EE;&#x1F1F3;</span> DPDP Act</a><a href="/services/gdpr"><span class="dropdown-icon">&#x1F1EA;&#x1F1FA;</span> GDPR</a><a href="/services/hipaa"><span class="dropdown-icon">&#x1F3E5;</span> HIPAA</a><a href="/services/vapt"><span class="dropdown-icon">&#x1F50D;</span> VAPT</a><a href="/services/cloud-security"><span class="dropdown-icon">&#x2601;&#xFE0F;</span> Cloud Security</a><a href="/services/ciso"><span class="dropdown-icon">&#x1F4BC;</span> CISO as a Service</a></div></li>
      <li><a href="/resources">Resources</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <div class="nav-actions"><a href="https://outlook.office.com/book/SecComplyMeeting@seccomply.net/" class="btn btn-primary" target="_blank" rel="noopener">Book Consultation <span class="btn-icon">&rarr;</span></a></div>
    <button class="mobile-toggle">&#9776;</button>
  </div>
</nav>

<!-- HERO -->
<section class="service-hero">
  <div class="hero-grid"></div>
  <div class="hero-glow hero-glow-1"></div>
  <div class="hero-glow hero-glow-2"></div>
  <div class="hero-glow-center"></div>
  <div class="hero-glow-ring"></div>
  <div class="container">
    <div class="hero-content">
      <div class="hero-badge"><span class="hero-badge-dot"></span> Legal</div>
      <h1>Privacy <span class="accent">Policy</span></h1>
      <p class="hero-sub">How we collect, use, and protect your information at SecComply.</p>
    </div>
  </div>
</section>

<!-- PRIVACY POLICY CONTENT -->
<section class="policy-section">
  <div class="container">
    <div class="policy-content">
      <p class="policy-date"><strong>Effective Date:</strong> January 1, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> February 16, 2026</p>

      <h2>1. Introduction</h2>
      <p>SecComply ("we", "our", or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website <strong>seccomply.net</strong>, use our platform, or engage with our consulting services.</p>
      <p>By using our services, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.</p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <p><strong>Personal Information You Provide:</strong></p>
      <ul>
        <li>Name, email address, phone number, and company name</li>
        <li>Job title and professional details</li>
        <li>Billing and payment information</li>
        <li>Information provided through consultation bookings, contact forms, or email correspondence</li>
        <li>Compliance-related documents and data shared during engagements</li>
      </ul>
      <p><strong>Information Collected Automatically:</strong></p>
      <ul>
        <li>IP address, browser type, operating system, and device information</li>
        <li>Pages visited, time spent on pages, and navigation patterns</li>
        <li>Referring URLs and search terms</li>
        <li>Cookies and similar tracking technologies</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, maintain, and improve our compliance consulting services and platform</li>
        <li>Process transactions and send related information including invoices</li>
        <li>Respond to your inquiries, comments, or requests</li>
        <li>Send you technical notices, updates, security alerts, and administrative messages</li>
        <li>Communicate about services, offers, promotions, and events (with your consent)</li>
        <li>Monitor and analyze trends, usage, and activities to improve user experience</li>
        <li>Detect, investigate, and prevent fraudulent transactions and unauthorized access</li>
        <li>Comply with legal obligations and enforce our agreements</li>
      </ul>

      <h2>4. Information Sharing and Disclosure</h2>
      <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
      <ul>
        <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our platform, conducting business, or servicing you (e.g., cloud hosting, payment processors, CRM tools)</li>
        <li><strong>Compliance and Legal Requirements:</strong> When required by law, regulation, or legal process, or to protect the rights, property, or safety of SecComply, our clients, or others</li>
        <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets</li>
        <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>We implement industry-standard security measures to protect your personal information, including:</p>
      <ul>
        <li>Encryption of data in transit (TLS/SSL) and at rest</li>
        <li>Access controls and authentication mechanisms</li>
        <li>Regular security assessments and vulnerability testing</li>
        <li>Employee training on data protection and security best practices</li>
        <li>Secure cloud infrastructure with SOC 2 compliant providers</li>
      </ul>
      <p>While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.</p>

      <h2>6. Data Retention</h2>
      <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we will securely delete or anonymize it.</p>

      <h2>7. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
        <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
        <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
        <li><strong>Objection:</strong> Object to the processing of your data for certain purposes</li>
        <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
      </ul>
      <p>To exercise any of these rights, please contact us at <strong>privacy@seccomply.net</strong>.</p>

      <h2>8. Cookies and Tracking Technologies</h2>
      <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance</li>
      </ul>
      <p>You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.</p>

      <h2>9. Third-Party Links</h2>
      <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>

      <h2>10. Compliance with DPDP Act (India)</h2>
      <p>As a company headquartered in India, we comply with the Digital Personal Data Protection (DPDP) Act, 2023. This includes:</p>
      <ul>
        <li>Processing personal data only for lawful purposes with valid consent</li>
        <li>Providing clear notice about data collection and usage</li>
        <li>Implementing reasonable security safeguards</li>
        <li>Honoring data principal rights including access, correction, and erasure</li>
        <li>Appointing a Data Protection Officer to handle data-related inquiries</li>
      </ul>

      <h2>11. Compliance with GDPR (EU/EEA)</h2>
      <p>For individuals in the European Union or European Economic Area, we process personal data in accordance with the General Data Protection Regulation (GDPR). Our lawful bases for processing include consent, contractual necessity, legitimate interests, and legal compliance.</p>

      <h2>12. Children's Privacy</h2>
      <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.</p>

      <h2>13. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.</p>

      <h2>14. Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
      <ul>
        <li><strong>Email:</strong> privacy@seccomply.net</li>
        <li><strong>Website:</strong> seccomply.net</li>
        <li><strong>Address:</strong> Pune, Maharashtra, India</li>
      </ul>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section"><div class="cta-glow-1"></div><div class="cta-glow-2"></div><div class="container"><div class="cta-content reveal"><h2>Have Questions About <span class="accent">Your Data?</span></h2><p>We take your privacy seriously. Reach out to our team if you have any questions about how we handle your information.</p><div class="cta-buttons"><a href="https://outlook.office.com/book/SecComplyMeeting@seccomply.net/" class="btn btn-primary btn-lg" target="_blank">Contact Us <span class="btn-icon">&rarr;</span></a></div></div></div></section>

<!-- FOOTER -->
<footer class="footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a href="/" class="logo"><img src="/assets/images/logo.png" alt="SecComply" style="height:40px"></a><p>We help businesses stay audit-ready, breach-proof, and compliant — without the complexity.</p></div><div class="footer-col"><h4>Services</h4><ul><li><a href="/services/iso-27001">ISO 27001</a></li><li><a href="/services/iso-27701">ISO 27701</a></li><li><a href="/services/soc-2">SOC 2 Audits</a></li><li><a href="/services/dpdp">DPDP Act</a></li><li><a href="/services/gdpr">GDPR Compliance</a></li><li><a href="/services/ciso">CISO as a Service</a></li></ul></div><div class="footer-col"><h4>Company</h4><ul><li><a href="/about">About Us</a></li><li><a href="/resources">Resources</a></li><li><a href="/contact">Contact</a></li></ul></div><div class="footer-col"><h4>Legal</h4><ul><li><a href="/privacy-policy">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li></ul></div></div><div class="footer-line"></div><div class="footer-bottom"><span class="footer-copy">&copy; 2026 SecComply. All rights reserved.</span><div class="footer-socials"><a href="https://www.linkedin.com/in/shivani-tikadia-nadkarni/" class="footer-social" target="_blank" aria-label="LinkedIn">in</a></div></div></div></footer>`}} />
      <Script src="/assets/js/navbar.js" strategy="afterInteractive" />
      <Script src="/assets/js/animations.js" strategy="afterInteractive" />
      <Script src="/assets/js/effects.js" strategy="afterInteractive" />
    </>
  )
}