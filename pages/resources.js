import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

export default function ResourcesPage() {

  return (
    <>
      <Head>
        <title>Resources — SecComply</title>
        <meta name="description" content="Free compliance guides, checklists, and industry insights from SecComply." />
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

<section class="service-hero">
  <div class="hero-grid"></div><div class="hero-glow hero-glow-1"></div><div class="hero-glow hero-glow-2"></div><div class="hero-glow-center"></div><div class="hero-glow-ring"></div>
  <div class="container"><div class="hero-content">
    <div class="hero-badge"><span class="hero-badge-dot"></span> Resources</div>
    <h1>Guides, Tools &amp; <span class="accent">Learning</span> <span class="green">Materials</span></h1>
    <p class="hero-sub">Everything you need to understand compliance, assess your readiness, and succeed in your journey.</p>
  </div></div>
</section>

<section class="resources-section" id="resources">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-badge"><span class="section-badge-dot"></span> Free Resources</div>
      <h2 class="section-title">Compliance Guides &amp; Insights</h2>
      <p class="section-desc">Stay informed with our latest compliance guides, checklists, and industry insights.</p>
    </div>
    <div class="resources-grid">
      <div class="resource-card reveal delay-1">
        <div class="resource-badge">Guide</div>
        <div class="resource-icon">&#x1F4D6;</div>
        <h3>ISO 27001 Implementation Guide</h3>
        <p>Comprehensive step-by-step guide to implementing an effective information security management system.</p>
        <a href="https://blobs.vusercontent.net/blob/SecComply%20ISO%2027001%20Implementation-NLbrfxZgtkfPajYOcN0haYcXesRweh.pdf" class="resource-link" target="_blank">Download Free PDF &#x2192;</a>
      </div>
      <div class="resource-card reveal delay-2">
        <div class="resource-badge">Guide</div>
        <div class="resource-icon">&#x1F4CA;</div>
        <h3>GRC Implementation Framework for Startups</h3>
        <p>A practical framework designed specifically for startups to implement governance, risk management, and compliance without complexity.</p>
        <a href="#" class="resource-link">Learn More &#x2192;</a>
      </div>
      <div class="resource-card reveal delay-3">
        <div class="resource-badge">Guide</div>
        <div class="resource-icon">&#x2696;&#xFE0F;</div>
        <h3>SOC 2 vs ISO 27001 — What's Right For You?</h3>
        <p>A comprehensive comparison guide to help you choose the right compliance framework for your business.</p>
        <a href="#" class="resource-link">Learn More &#x2192;</a>
      </div>
      <div class="resource-card reveal delay-1">
        <div class="resource-badge">Checklist</div>
        <div class="resource-icon">&#x2713;&#xFE0F;</div>
        <h3>Security Checklists</h3>
        <p>Pre-audit checklists and readiness assessments for every framework to help you prepare systematically.</p>
        <a href="#" class="resource-link">Download &#x2192;</a>
      </div>
      <div class="resource-card reveal delay-2">
        <div class="resource-badge">Case Study</div>
        <div class="resource-icon">&#x1F3C6;</div>
        <h3>Case Studies</h3>
        <p>Real client success stories showing transformations from zero compliance to certified and audit-ready status.</p>
        <a href="#" class="resource-link">Explore &#x2192;</a>
      </div>
      <div class="resource-card reveal delay-3">
        <div class="resource-badge">Blog</div>
        <div class="resource-icon">&#x1F4DD;</div>
        <h3>Blog &amp; Insights</h3>
        <p>Latest insights on cybersecurity, compliance trends, and regulatory updates to keep you informed and ahead.</p>
        <a href="#" class="resource-link">Read Blog &#x2192;</a>
      </div>
      <div class="resource-card reveal delay-1">
        <div class="resource-badge">Webinar</div>
        <div class="resource-icon">&#x1F4FA;</div>
        <h3>Webinars &amp; Events</h3>
        <p>On-demand recordings of past webinars and upcoming live sessions with industry experts and thought leaders.</p>
        <a href="#" class="resource-link">Watch &#x2192;</a>
      </div>
      <div class="resource-card reveal delay-2">
        <div class="resource-badge">Tool</div>
        <div class="resource-icon">&#x1F9EA;</div>
        <h3>Free DPDP Assessment</h3>
        <p>Take our free online assessment to understand your DPDP Act compliance readiness and get a personalized report.</p>
        <a href="https://verdant-conkies-4eccd1.netlify.app/" class="resource-link" target="_blank">Start Assessment &#x2192;</a>
      </div>
      <div class="resource-card reveal delay-3">
        <div class="resource-badge">API</div>
        <div class="resource-icon">&#x1F4BE;</div>
        <h3>API Documentation</h3>
        <p>Complete developer resources for integrating SecComply into your workflow and automating compliance tasks.</p>
        <a href="#" class="resource-link">View Docs &#x2192;</a>
      </div>
    </div>
  </div>
</section>

<section class="cta-section"><div class="cta-glow-1"></div><div class="cta-glow-2"></div><div class="container"><div class="cta-content reveal"><h2>Need Personalized <span class="accent">Guidance?</span></h2><p>Our experts can help you navigate the compliance landscape. Book a free 15-minute consultation.</p><div class="cta-buttons"><a href="https://outlook.office.com/book/SecComplyMeeting@seccomply.net/" class="btn btn-primary btn-lg" target="_blank">Book Free Consultation <span class="btn-icon">&rarr;</span></a></div></div></div></section>

<footer class="footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a href="/" class="logo"><img src="/assets/images/logo.png" alt="SecComply" style="height:40px"></a><p>We help businesses stay audit-ready, breach-proof, and compliant — without the complexity.</p></div><div class="footer-col"><h4>Services</h4><ul><li><a href="/services/iso-27001">ISO 27001</a></li><li><a href="/services/iso-27701">ISO 27701</a></li><li><a href="/services/soc-2">SOC 2 Audits</a></li><li><a href="/services/dpdp">DPDP Act</a></li><li><a href="/services/gdpr">GDPR Compliance</a></li><li><a href="/services/ciso">CISO as a Service</a></li></ul></div><div class="footer-col"><h4>Company</h4><ul><li><a href="/about">About Us</a></li><li><a href="/resources">Resources</a></li><li><a href="/contact">Contact</a></li></ul></div><div class="footer-col"><h4>Legal</h4><ul><li><a href="/privacy-policy">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li></ul></div></div><div class="footer-line"></div><div class="footer-bottom"><span class="footer-copy">&copy; 2026 SecComply. All rights reserved.</span><div class="footer-socials"><a href="https://www.linkedin.com/in/shivani-tikadia-nadkarni/" class="footer-social" target="_blank" aria-label="LinkedIn">in</a></div></div></div></footer>`}} />
      <Script src="/assets/js/navbar.js" strategy="afterInteractive" />
      <Script src="/assets/js/animations.js" strategy="afterInteractive" />
      <Script src="/assets/js/effects.js" strategy="afterInteractive" />
    </>
  )
}