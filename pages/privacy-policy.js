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
<style dangerouslySetInnerHTML={{__html: `.policy-section{padding:80px 0 100px;background:var(--bg-primary,#020617)}.policy-content{max-width:820px;margin:0 auto}.policy-date{display:inline-block;font-size:13px;font-weight:600;color:#E8632B;background:rgba(232,99,43,.08);border:1px solid rgba(232,99,43,.15);padding:8px 20px;border-radius:999px;margin-bottom:40px}.policy-content h2{font-size:24px;font-weight:800;color:#F8FAFC;margin:48px 0 8px;letter-spacing:-.5px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.06)}.policy-content h2:first-of-type{margin-top:0}.policy-content h3{font-size:17px;font-weight:700;color:#E2E8F0;margin:24px 0 12px}.policy-content p{font-size:15px;color:#94A3B8;line-height:1.85;margin-bottom:16px}.policy-content ul{list-style:none;padding:0;margin:0 0 24px}.policy-content ul li{font-size:15px;color:#94A3B8;line-height:1.85;padding:10px 0 10px 28px;position:relative;border-bottom:1px solid rgba(255,255,255,.03)}.policy-content ul li:last-child{border-bottom:none}.policy-content ul li::before{content:"";position:absolute;left:0;top:18px;width:8px;height:8px;border-radius:2px;background:linear-gradient(135deg,#E8632B,#FF8A50)}.policy-content strong{color:#E2E8F0}.policy-intro{font-size:16px;color:#CBD5E1;line-height:1.9;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:28px 32px;margin-bottom:40px;border-left:3px solid #E8632B}.policy-note{font-size:14px;color:#94A3B8;font-style:italic;background:rgba(232,99,43,.04);border:1px solid rgba(232,99,43,.1);border-radius:12px;padding:20px 24px;margin-top:8px}.policy-section-num{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:8px;background:rgba(232,99,43,.1);color:#E8632B;font-size:13px;font-weight:800;margin-right:10px;flex-shrink:0}`}} />
      </Head>
      <div dangerouslySetInnerHTML={{__html: `<!-- HERO -->
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

      <div class="policy-date">Effective Date: February 5, 2026</div>

      <!-- Introduction -->
      <h2><span class="policy-section-num">1</span> Introduction</h2>
      <div class="policy-intro">SecComply ("we," "our," or "us") operates the website <strong>seccomply.net</strong> and provides cybersecurity compliance consulting, vulnerability assessment and penetration testing (VAPT), and related advisory services. We are committed to protecting and respecting your privacy in accordance with applicable data protection laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act) of India, the General Data Protection Regulation (GDPR) for EU/EEA residents, and other relevant legislation.</div>
      <p>This Privacy Policy describes the types of personal information we collect, how we use and protect it, and the choices available to you regarding your data. By accessing our website or engaging our services, you acknowledge that you have read and understood this policy.</p>

      <!-- Information We Collect -->
      <h2><span class="policy-section-num">2</span> Information We Collect</h2>

      <h3>Information You Provide Directly</h3>
      <p>We collect personal information that you voluntarily provide when interacting with us, including:</p>
      <ul>
        <li><strong>Contact information:</strong> Name, email address, phone number, company name, and job title when you book a consultation, fill out a contact form, or correspond with us.</li>
        <li><strong>Engagement information:</strong> Details you share during consultations, assessments, or project engagements, including business requirements, compliance documentation, and technical infrastructure details.</li>
        <li><strong>Communication records:</strong> Emails, messages, and other correspondence exchanged with our team.</li>
        <li><strong>Payment information:</strong> Billing details necessary to process service payments (processed securely through third-party payment providers).</li>
      </ul>

      <h3>Information Collected Automatically</h3>
      <p>When you visit our website, we do not collect cookies.</p>

      <h3>Information from Third Parties</h3>
      <p>We may receive information about you from third-party sources such as business partners, referral sources, publicly available databases, and social media platforms when you interact with our content.</p>

      <!-- How We Use Your Information -->
      <h2><span class="policy-section-num">3</span> How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li><strong>Service delivery:</strong> To provide, manage, and deliver our cybersecurity compliance consulting, VAPT, and related services.</li>
        <li><strong>Communication:</strong> To respond to your inquiries, schedule consultations, and send service updates.</li>
        <li><strong>Legal compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
        <li><strong>Security:</strong> To detect, prevent, and respond to fraud, security incidents, and technical issues.</li>
        <li><strong>Business operations:</strong> For invoicing, accounting, contract management, and internal administrative purposes.</li>
      </ul>

      <!-- Legal Basis for Processing -->
      <h2><span class="policy-section-num">4</span> Legal Basis for Processing</h2>
      <p>We process your personal data on the following legal grounds:</p>
      <ul>
        <li><strong>Consent:</strong> Where you have provided explicit consent for specific processing activities.</li>
        <li><strong>Contractual necessity:</strong> Where processing is necessary to perform a contract with you or take pre-contractual steps at your request (e.g., delivering consulting engagements).</li>
        <li><strong>Legitimate interests:</strong> Where processing is necessary for our legitimate business interests, such as improving our services and ensuring security, provided these interests do not override your fundamental rights.</li>
        <li><strong>Legal obligation:</strong> Where processing is required to comply with applicable legal or regulatory requirements.</li>
      </ul>

      <!-- Information Sharing & Disclosure -->
      <h2><span class="policy-section-num">5</span> Information Sharing &amp; Disclosure</h2>
      <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
      <ul>
        <li><strong>Service providers:</strong> With trusted third-party vendors who assist us in operating our website, conducting our business, and delivering services to you (e.g., cloud hosting providers, email service platforms, payment processors). These providers are contractually obligated to protect your data.</li>
        <li><strong>Audit and certification bodies:</strong> Where necessary for certification audits conducted on behalf of our clients, with prior client approval.</li>
        <li><strong>Legal requirements:</strong> When disclosure is required by law, regulation, court order, or governmental authority.</li>
        <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, subject to applicable privacy obligations.</li>
        <li><strong>With your consent:</strong> In any other circumstance where you have provided explicit consent for such sharing.</li>
      </ul>

      <!-- Data Security -->
      <h2><span class="policy-section-num">6</span> Data Security</h2>
      <p>We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
      <ul>
        <li>Encryption of data in transit (TLS/SSL) and at rest</li>
        <li>Access controls and role-based permissions for internal systems</li>
        <li>Regular security assessments and vulnerability testing</li>
        <li>Employee training on data protection and security best practices</li>
        <li>Secure cloud infrastructure with reputable service providers</li>
        <li>Incident response procedures for prompt action in case of a data breach</li>
      </ul>
      <p>While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to continuously improving our safeguards.</p>

      <!-- Data Retention -->
      <h2><span class="policy-section-num">7</span> Data Retention</h2>
      <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.</p>
      <ul>
        <li><strong>Client engagement data:</strong> Retained for the duration of the engagement and thereafter as required for legal and compliance purposes. Once no longer required, data is securely deleted.</li>
        <li><strong>Financial records:</strong> Retained as required by applicable tax and accounting laws.</li>
      </ul>
      <p>When personal information is no longer required, we securely delete or anonymize it in accordance with our data retention policies.</p>

      <!-- Your Rights -->
      <h2><span class="policy-section-num">8</span> Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Right to access:</strong> Request a copy of the personal data we hold about you.</li>
        <li><strong>Right to correction:</strong> Request correction of inaccurate or incomplete data.</li>
        <li><strong>Right to erasure:</strong> Request deletion of your personal data, subject to legal retention obligations.</li>
        <li><strong>Right to restrict processing:</strong> Request that we limit the processing of your data in certain circumstances.</li>
        <li><strong>Right to data portability:</strong> Request your data in a structured, commonly used, machine-readable format.</li>
        <li><strong>Right to object:</strong> Object to the processing of your personal data for specific purposes.</li>
        <li><strong>Right to withdraw consent:</strong> Withdraw previously given consent at any time, without affecting the lawfulness of processing based on consent before withdrawal.</li>
        <li><strong>Right to nominate:</strong> Under the DPDP Act, nominate an individual to exercise your rights on your behalf in the event of your death or incapacity.</li>
        <li><strong>Right to grievance redressal:</strong> Lodge a complaint with the relevant data protection authority.</li>
      </ul>
      <p>To exercise any of these rights, please contact us using the details provided in Section 13. We will respond to your request within the timeframe required by applicable law.</p>

      <!-- Third-Party Links & Services -->
      <h2><span class="policy-section-num">9</span> Third-Party Links &amp; Services</h2>
      <p>Our website may contain links to third-party websites, tools, or services (such as Microsoft Outlook for booking consultations). We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party websites or services you access through our site.</p>

      <!-- International Data Transfers -->
      <h2><span class="policy-section-num">10</span> International Data Transfers</h2>
      <p>Your personal data may be transferred to and processed in countries other than your country of residence. Where we transfer data internationally, we ensure that appropriate safeguards are in place, including standard contractual clauses, adequacy decisions, or other legally recognized transfer mechanisms to protect your personal data in compliance with applicable laws.</p>

      <!-- Children's Privacy -->
      <h2><span class="policy-section-num">11</span> Children's Privacy</h2>
      <p>Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a child, we will take prompt steps to delete such information.</p>

      <!-- Changes to This Policy -->
      <h2><span class="policy-section-num">12</span> Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make material changes, we will notify you by updating the "Effective Date" at the top of this policy and, where appropriate, provide additional notice via our website. We encourage you to review this policy periodically.</p>

      <!-- Contact Us -->
      <h2><span class="policy-section-num">13</span> Contact Us</h2>
      <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us:</p>
      <ul>
        <li><strong>Email:</strong> shivani@seccomply.net</li>
        <li><strong>Website:</strong> seccomply.net</li>
        <li><strong>Phone:</strong> +91 9860013381</li>
      </ul>
      <div class="policy-note">For grievance redressal under the DPDP Act, you may also contact the Data Protection Board of India.</div>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section"><div class="cta-glow-1"></div><div class="cta-glow-2"></div><div class="container"><div class="cta-content reveal"><h2>Have Questions About <span class="accent">Your Data?</span></h2><p>We take your privacy seriously. Reach out to our team if you have any questions about how we handle your information.</p><div class="cta-buttons"><a href="/contact" class="btn btn-primary btn-lg">Contact Us <span class="btn-icon">&rarr;</span></a><a href="/" class="btn btn-outline btn-lg">Back to Home <span class="btn-icon">&rarr;</span></a></div></div></div></section>

`}} />
<Script src="/assets/js/animations.js" strategy="afterInteractive" />
      <Script src="/assets/js/effects.js" strategy="afterInteractive" />
    </>
  )
}