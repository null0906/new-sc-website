import Link from 'next/link'

const openCookiePreferences = (e) => {
  e.preventDefault()
  window.dispatchEvent(new CustomEvent('sc:open-cookie-preferences'))
}

// Verbatim transliteration of the footer previously injected via
// dangerouslySetInnerHTML in Layout.js — markup and behavior unchanged.
export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <img src="/assets/images/logo.png" alt="SecComply" style={{ height: '40px' }} />
              <span className="tm-mark">{'™'}</span>
            </Link>
            <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.65, margin: '14px 0 18px' }}>
              We help businesses stay audit-ready, breach-proof, and compliant — without the complexity.
            </p>
            <div className="footer-socials-box">
              <a href="mailto:info@seccomply.net" className="fsoc" title="info@seccomply.net" aria-label="Email">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </a>
              <a href="tel:+919876543210" className="fsoc" title="Call Us" aria-label="Phone">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.32.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.62 21 3 13.38 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/sec-comply" className="fsoc" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.988V9h3.128v1.561h.045c.435-.824 1.497-1.693 3.082-1.693 3.296 0 3.904 2.171 3.904 4.994v6.59zM5.337 7.433a1.814 1.814 0 110-3.628 1.814 1.814 0 010 3.628zm1.567 13.019H3.77V9h3.134v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="https://www.instagram.com/seccomply/" className="fsoc" target="_blank" rel="noopener" title="Instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.773.131 4.548.425 3.465 1.508 2.382 2.591 2.088 3.816 2.029 5.096 1.971 6.376 1.957 6.784 1.957 12c0 5.216.014 5.624.072 6.904.059 1.28.353 2.505 1.436 3.588 1.083 1.083 2.308 1.377 3.588 1.436C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.28-.059 2.505-.353 3.588-1.436 1.083-1.083 1.377-2.308 1.436-3.588.058-1.28.072-1.688.072-6.904 0-5.216-.014-5.624-.072-6.904-.059-1.28-.353-2.505-1.436-3.588C20.452.425 19.227.131 17.947.072 16.667.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://www.youtube.com/@thenadkarnees" className="fsoc" target="_blank" rel="noopener" title="YouTube" aria-label="YouTube">
                <svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/iso-27001">ISO 27001</Link></li>
              <li><Link href="/services/iso-27701">ISO 27701</Link></li>
              <li><Link href="/services/soc-2">SOC 2 Audits</Link></li>
              <li><Link href="/services/dpdp">DPDP Act</Link></li>
              <li><Link href="/services/gdpr">GDPR Compliance</Link></li>
              <li><Link href="/services/hipaa">HIPAA</Link></li>
              <li><Link href="/services/vapt">VAPT</Link></li>
              <li><Link href="/services/ciso">CISO as a Service</Link></li>
              <li><Link href="/services/iso-42001">ISO 42001</Link></li>
              <li><Link href="/services/iso-27017">ISO 27017</Link></li>
              <li><Link href="/services/iso-27018">ISO 27018</Link></li>
              <li><Link href="/services/nist-csf">NIST CSF 2.0</Link></li>
              <li><Link href="/services/ai-agents">AI Agents</Link></li>
              <li><Link href="/services/inventra">Inventra — IT Asset Management</Link></li>
              <li><Link href="/services/security-visualization">Security Visualizations</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy">Cookie Policy</Link></li>
              <li><a href="#" onClick={openCookiePreferences}>Cookie Preferences</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <span className="footer-copy" style={{ fontSize: '12px', color: '#64748B' }}>
            {'©'} 2026 SecComply{'™'}. All rights reserved. {' | '} SecComply{'™'} and its logo are proprietary trademarks of SecComply. All content, design, text, and materials on this website are protected by copyright and intellectual property laws. Any unauthorized use is strictly prohibited.
          </span>
        </div>
      </div>

      <style jsx global>{`
        .footer-socials-box{display:flex;gap:10px;margin-top:16px;flex-wrap:wrap}
        .fsoc{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:var(--bg-card-hover);border:1px solid var(--border);color:var(--text-secondary);transition:all .2s;text-decoration:none}
        .fsoc:hover,.fsoc:focus-visible{background:var(--accent-tint);border-color:rgb(var(--accent-rgb) / .35);color:var(--accent)}
        .fsoc svg{width:15px;height:15px;fill:currentColor}
      `}</style>
    </footer>
  )
}
