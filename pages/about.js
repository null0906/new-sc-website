import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

export default function AboutPage() {

  return (
    <>
      <Head>
        <title>About | SecComply — Cybersecurity Compliance Experts</title>
        <meta name="description" content="Meet the SecComply team. Ex-CISOs, senior auditors, and security experts who have been in your shoes." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <div class="hero-badge"><span class="hero-badge-dot"></span> About SecComply</div>
      <h1>Cybersecurity Experts <span class="accent">Who've Been</span> <span class="green">In Your Shoes</span></h1>
      <p class="hero-sub">We combine deep expertise with practical experience to deliver compliance results that matter.</p>
      <div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;margin-top:30px">
        <span style="padding:7px 18px;background:rgba(255,255,255,.05);border:2px solid rgba(255,255,255,.85);border-radius:9999px;font-size:12px;font-weight:600;color:#fff">&#10003; Ex-PwC Led Team</span>
        <span style="padding:7px 18px;background:rgba(255,255,255,.05);border:2px solid rgba(255,255,255,.85);border-radius:9999px;font-size:12px;font-weight:600;color:#fff">&#10003; ISO 27001 Lead Auditors</span>
        <span style="padding:7px 18px;background:rgba(255,255,255,.05);border:2px solid rgba(255,255,255,.85);border-radius:9999px;font-size:12px;font-weight:600;color:#fff">&#10003; 100% First-Attempt Pass Rate</span>
        <span style="padding:7px 18px;background:rgba(255,255,255,.05);border:2px solid rgba(255,255,255,.85);border-radius:9999px;font-size:12px;font-weight:600;color:#fff">&#10003; Global Delivery</span>
      </div>
    </div>
  </div>
</section>

<!-- OUR STORY -->
<section class="about-story">
  <div class="container">
    <div class="about-story-grid">
      <div class="about-story-content reveal-left">
        <div class="section-badge"><span class="section-badge-dot"></span> Our Story</div>
        <h2>Founded by Security Professionals Who Get It</h2>
        <p>SecComply was founded by security professionals who experienced firsthand the complexity and frustration of achieving compliance in fast growing companies.</p>
        <p>After years of working as CISOs and senior security leaders, we realized that most compliance frameworks were designed by auditors for auditors — not for the businesses that need to implement them.</p>
        <p>We started SecComply to bridge that gap, bringing real world experience and practical solutions to companies struggling with security compliance.</p>
      </div>
      <div class="reveal-right">
        <div class="trust-inner" style="flex-direction:column;gap:32px;">
          <div class="trust-stat"><div class="trust-stat-number" data-count="100" data-suffix="+">0+</div><div class="trust-stat-label">Companies Secured</div></div>
          <div class="trust-stat"><div class="trust-stat-number">Zero</div><div class="trust-stat-label">Failed Audits — 100% success rate</div></div>
          <div class="trust-stat"><div class="trust-stat-number">4-8</div><div class="trust-stat-label">Weeks Average Time to Compliance</div></div>
          <div class="trust-stat"><div class="trust-stat-number" data-count="50" data-suffix="+">0+</div><div class="trust-stat-label">Certifications Across Our Team</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TEAM -->
<section class="team-section" id="team">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-badge"><span class="section-badge-dot"></span> Our Team</div>
      <h2 class="section-title">Meet Our Team</h2>
      <p class="section-desc">Ex-CISOs, senior auditors, and security experts who've been in your shoes.</p>
    </div>
    <div class="team-grid">
      <!-- Shivani Tikadia -->
      <div class="team-card reveal delay-1">
        <div class="team-avatar-glow">
          <img src="https://ik.imagekit.io/nprf964by/SecComply/PBP_8254.jpg" alt="Shivani Tikadia" loading="lazy">
        </div>
        <h3>Shivani Tikadia</h3>
        <div class="team-role">CEO &amp; Founder</div>
        <div class="team-exp">Ex-PwC &bull; 10+ Years of Enterprise Security Leadership</div>
        <p class="team-bio">A seasoned cybersecurity advisor with over a decade of hands-on experience, Shivani has been a trusted partner to more than 50 Fortune 500 companies. She specializes in making robust, enterprise-grade security solutions accessible and scalable for businesses of all sizes.</p>
        <a href="https://www.linkedin.com/in/shivani-tikadia-nadkarni/" class="team-linkedin" target="_blank">Connect on LinkedIn &rarr;</a>
      </div>

      <!-- Vandana Pawar -->
      <div class="team-card reveal delay-3">
        <div class="team-avatar-glow">
          <img src="https://ik.imagekit.io/rvhhw2reg/Vandana.jpeg?updatedAt=1756119884821" alt="Vandana Pawar" loading="lazy">
        </div>
        <h3>Vandana Pawar</h3>
        <div class="team-role">GRC Lead</div>
        <div class="team-exp">ISO 27001 Lead Auditor &bull; 5+ years</div>
        <p class="team-bio">Governance, Risk, and Compliance expert specializing in guiding organizations toward achieving and maintaining compliance with ISO 27001, ISO 27701, and ISO 42001. Her expertise extends to GDPR and HIPAA.</p>
        <a href="https://www.linkedin.com/in/vandana-pawar-2681892b2/" class="team-linkedin" target="_blank">Connect on LinkedIn &rarr;</a>
      </div>
      <!-- Shyam V -->
      <div class="team-card reveal delay-3">
        <div class="team-avatar-glow">
          <img src="https://ik.imagekit.io/rvhhw2reg/Shyam.jpeg?updatedAt=1756120108422" alt="Shyam V" loading="lazy">
        </div>
        <h3>Shyam V</h3>
        <div class="team-role">Advisory Board</div>
        <div class="team-exp">CCNA, ISO 27001 Lead Auditor &bull; 12+ years</div>
        <p class="team-bio">Cybersecurity and AI expert with leadership roles at BYJU'S, Myntra, and PropertyGuru. Co-Founder of TradeOn.Ai and PXLSense.Ai, building next-gen solutions at the intersection of AI, finance, and security.</p>
        <a href="https://www.linkedin.com/in/shyamv89/" class="team-linkedin" target="_blank">Connect on LinkedIn &rarr;</a>
      </div>
      <!-- Pratap Shahane -->
      <div class="team-card reveal delay-2">
        <div class="team-avatar-glow">
          <img src="/assets/images/pratap-shahane.png" alt="Pratap Shahane" loading="lazy">
        </div>
        <h3>Pratap Shahane</h3>
        <div class="team-role">Advisory Board</div>
        <div class="team-exp">Ex-Mphasis, Ex-Accenture &bull; CISO &amp; Information Security Leader</div>
        <p class="team-bio">A veteran CISO and information security leader with deep expertise across governance, risk, and compliance. Pratap has built and led enterprise security and SoX/ITGC programs at firms including Mphasis, Accenture, and 3i Infotech, and advises organizations on ISO 27001, SOC 2, PCI DSS, and incident response.</p>
        <a href="https://www.linkedin.com/in/pratap-shahane-5a1bb29/" class="team-linkedin" target="_blank">Connect on LinkedIn &rarr;</a>
      </div>
    </div>
  </div>
</section>

<!-- APPROACH -->
<section class="approach-section">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-badge"><span class="section-badge-dot"></span> Our Approach</div>
      <h2 class="section-title">How We Work</h2>
    </div>
    <div class="approach-grid">
      <div class="feature-card reveal delay-1">
        <div class="feature-icon orange">&#x1F3AF;</div>
        <h3>Practical Over Perfect</h3>
        <p>We focus on solutions that work in your environment, not textbook perfection.</p>
      </div>
      <div class="feature-card reveal delay-2">
        <div class="feature-icon green">&#x1F4C8;</div>
        <h3>Business-First Mindset</h3>
        <p>Security should enable business growth, not hinder it. We design with your business goals in mind.</p>
      </div>
      <div class="feature-card reveal delay-3">
        <div class="feature-icon blue">&#x1F4AC;</div>
        <h3>Transparent Communication</h3>
        <p>No jargon, no hidden costs, no surprises. We explain everything in plain English.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section"><div class="cta-glow-1"></div><div class="cta-glow-2"></div><div class="container"><div class="cta-content reveal"><h2>Ready to Work <span class="accent">Together?</span></h2><p>Let's discuss how we can help you achieve compliance without the complexity. Book a free 15-minute consultation to get started.</p><div class="cta-buttons"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank">Book Your Free Consultation <span class="btn-icon">&rarr;</span></a></div></div></div></section>

`}} />
<Script src="/assets/js/animations.js" strategy="afterInteractive" />
      <Script src="/assets/js/counters.js" strategy="afterInteractive" />
      <Script src="/assets/js/effects.js" strategy="afterInteractive" />
    </>
  )
}