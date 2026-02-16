import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

export default function ContactPage() {

  return (
    <>
      <Head>
        <title>Contact — SecComply</title>
        <meta name="description" content="Get in touch with SecComply. Connect with our CEO Shivani Tikadia for compliance and cybersecurity services." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style dangerouslySetInnerHTML={{__html: `.contact-section{padding:80px 0;background:var(--bg-primary,#020617)}.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1000px;margin:0 auto}@media(max-width:768px){.contact-grid{grid-template-columns:1fr;gap:40px}}.contact-photo{width:320px;height:320px;border-radius:24px;overflow:hidden;border:3px solid rgba(232,99,43,.3);box-shadow:0 25px 60px rgba(0,0,0,.4),0 0 40px rgba(232,99,43,.08);margin:0 auto}.contact-photo img{width:100%;height:100%;object-fit:cover}.contact-info{}.contact-label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#E8632B;margin-bottom:12px}.contact-name{font-size:clamp(32px,4vw,44px);font-weight:800;color:#F8FAFC;margin-bottom:4px;letter-spacing:-1px}.contact-role{font-size:20px;font-weight:600;color:#FF8A50;margin-bottom:24px}.contact-bio{font-size:16px;color:#94A3B8;line-height:1.8;margin-bottom:32px}.contact-bg{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:24px;margin-bottom:32px}.contact-bg h3{font-size:16px;font-weight:700;color:#F8FAFC;margin-bottom:16px}.contact-bg-list{list-style:none;padding:0;margin:0}.contact-bg-list li{font-size:14px;color:#94A3B8;line-height:1.8;padding-left:18px;position:relative;margin-bottom:8px}.contact-bg-list li::before{content:"\\25B8";position:absolute;left:0;color:#E8632B;font-weight:bold}.contact-buttons{display:flex;flex-wrap:wrap;gap:12px}.contact-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border-radius:12px;font-size:14px;font-weight:600;text-decoration:none;transition:all .3s ease}.contact-btn-primary{background:linear-gradient(135deg,#E8632B,#FF8A50);color:white;box-shadow:0 4px 20px rgba(232,99,43,.3)}.contact-btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(232,99,43,.4)}.contact-btn-dark{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#E2E8F0}.contact-btn-dark:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.2);transform:translateY(-2px)}.contact-btn-blue{background:rgba(59,130,246,.15);border:1px solid rgba(59,130,246,.25);color:#60A5FA}.contact-btn-blue:hover{background:rgba(59,130,246,.25);transform:translateY(-2px)}.contact-btn svg{width:18px;height:18px;fill:currentColor}.contact-touch-label{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#64748B;margin-bottom:14px}`}} />
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
      <div class="hero-badge"><span class="hero-badge-dot"></span> Get In Touch</div>
      <h1>Connect With <span class="accent">Our</span> <span class="green">Leadership</span></h1>
      <p class="hero-sub">Have questions about compliance? Let's discuss how SecComply can help your organization.</p>
    </div>
  </div>
</section>

<!-- CONTACT / LEADERSHIP PROFILE -->
<section class="contact-section">
  <div class="container">
    <div class="contact-grid">
      <!-- Photo -->
      <div class="reveal-left">
        <div class="contact-photo">
          <img src="/assets/images/shivani.png" alt="Shivani Tikadia, CEO &amp; Founder of SecComply" loading="lazy">
        </div>
      </div>

      <!-- Info -->
      <div class="contact-info reveal-right">
        <div class="contact-label">Leadership</div>
        <h2 class="contact-name">Shivani Tikadia</h2>
        <div class="contact-role">CEO &amp; Founder</div>

        <p class="contact-bio">A seasoned cybersecurity advisor with over a decade of hands-on experience, Shivani has been a trusted partner to more than 50 Fortune 500 companies. She specializes in making robust, enterprise-grade security solutions accessible and scalable for businesses of all sizes, bridging the gap between security compliance and real-world business needs.</p>

        <div class="contact-bg">
          <h3>Background</h3>
          <ul class="contact-bg-list">
            <li>Ex-PwC, Trusted Cybersecurity Advisor to 100+ companies</li>
            <li>10+ Years of Enterprise Security Leadership</li>
            <li>Trusted advisor to 50+ Fortune 500 companies</li>
          </ul>
        </div>

        <div class="contact-touch-label">Get in Touch</div>
        <div class="contact-buttons">
          <a href="tel:+919860013381" class="contact-btn contact-btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +91 9860013381
          </a>
          <a href="mailto:shivani@seccomply.net" class="contact-btn contact-btn-dark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Email
          </a>
          <a href="https://www.linkedin.com/in/shivani-tikadia-nadkarni/" target="_blank" rel="noopener noreferrer" class="contact-btn contact-btn-blue">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section"><div class="cta-glow-1"></div><div class="cta-glow-2"></div><div class="container"><div class="cta-content reveal"><h2>Ready to Get <span class="accent">Started?</span></h2><p>Connect with Shivani to discuss how SecComply can help your organization achieve compliance without complexity. Book a free 15-minute consultation.</p><div class="cta-buttons"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/?ismsaljsauthenabled" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Book a Consultation <span class="btn-icon">&rarr;</span></a><a href="/" class="btn btn-outline btn-lg">Back to Home <span class="btn-icon">&rarr;</span></a></div></div></div></section>

`}} />
<Script src="/assets/js/animations.js" strategy="afterInteractive" />
      <Script src="/assets/js/effects.js" strategy="afterInteractive" />
    </>
  )
}