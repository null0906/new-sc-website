import Head from 'next/head'
import Link from 'next/link'

export default function CookiePolicy() {
  const openPrefs = (e) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('sc:open-cookie-preferences'))
    }
  }

  return (
    <>
      <Head>
        <title>Cookie Policy | SecComply</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="What cookies we set on seccomply.net — what they do, how long they stay, and who else can see them. Cookie Policy v2.0." />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://seccomply.net/cookie-policy" />
      </Head>

      <style jsx global>{`
        :root{--cy:#E8632B;--cy2:#d0521f;--bg:#020617;--bgc:#0B1120;--bgc2:#0F172A;--tx:#fff;--tb:#c8d6e5;--tm:#6a8aaa;--bo:rgba(232,99,43,.2);--bs:rgba(255,255,255,.06);--gr:#06d6a0;--am:#ffb703;--sans:'Inter',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}
        body{background:var(--bg);color:var(--tb);font-family:var(--sans);line-height:1.7;margin:0;-webkit-font-smoothing:antialiased}
        .cp-wrap{max-width:880px;margin:0 auto;padding:3.5rem 2rem 5rem}
        .cp-eyebrow{font-size:.75rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--cy);margin-bottom:1.2rem;display:block}
        .cp-h1{font-size:clamp(2rem,4vw,3rem);font-weight:700;color:var(--tx);line-height:1.15;margin:0 0 1rem;letter-spacing:-.015em}
        .cp-lede{font-size:1.05rem;color:var(--tm);margin:0 0 2.4rem;font-style:italic;max-width:680px}
        .cp-meta{display:grid;grid-template-columns:repeat(4,1fr);gap:0;background:var(--bgc2);border:1px solid var(--bs);border-radius:14px;overflow:hidden;margin-bottom:2rem}
        .cp-meta-cell{padding:14px 18px;border-right:1px solid var(--bs)}
        .cp-meta-cell:last-child{border-right:none}
        .cp-meta-label{font-size:.66rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:4px}
        .cp-meta-val{font-size:.92rem;color:var(--tx);font-weight:600}
        .cp-callout{background:linear-gradient(135deg,rgba(232,99,43,.08),rgba(232,99,43,.03));border:1px solid rgba(232,99,43,.25);border-left:4px solid var(--cy);border-radius:14px;padding:1.4rem 1.6rem;margin:0 0 3rem}
        .cp-callout-label{font-size:.7rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--cy);margin-bottom:6px}
        .cp-callout-body{font-size:.95rem;color:var(--tb);line-height:1.65;margin:0}
        .cp-callout-body strong{color:var(--tx)}
        .cp-callout-body a{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgba(232,99,43,.3)}
        .cp-callout-body a:hover{border-bottom-color:var(--cy)}
        .cp-h2{font-size:1.5rem;font-weight:700;color:var(--tx);margin:2.6rem 0 1rem;letter-spacing:-.005em}
        .cp-p{font-size:1rem;line-height:1.8;color:var(--tb);margin:0 0 1.1rem}
        .cp-p strong{color:var(--tx);font-weight:600}
        .cp-p a{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgba(232,99,43,.3);transition:border-color .15s}
        .cp-p a:hover{border-bottom-color:var(--cy)}
        .cp-cat{margin:2rem 0 0;border:1px solid var(--bs);border-radius:14px;overflow:hidden;background:var(--bgc2)}
        .cp-cat-banner{padding:1rem 1.4rem;border-bottom:1px solid var(--bs);background:rgba(232,99,43,.06)}
        .cp-cat-banner.muted{background:rgba(148,163,184,.06)}
        .cp-cat-label{font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--cy);margin-bottom:4px}
        .cp-cat-banner.muted .cp-cat-label{color:var(--tm)}
        .cp-cat-summary{font-size:.92rem;color:var(--tb);margin:0;line-height:1.6}
        .cp-table{width:100%;border-collapse:collapse}
        .cp-table th{background:var(--bgc);padding:.75rem 1rem;text-align:left;font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--cy);border-bottom:1px solid var(--bo)}
        .cp-table td{padding:.85rem 1rem;font-size:.88rem;color:var(--tm);border-bottom:1px solid var(--bs);vertical-align:top}
        .cp-table tr:last-child td{border-bottom:none}
        .cp-table td:first-child{color:var(--tx);font-weight:600;font-family:'JetBrains Mono',Menlo,Consolas,monospace;font-size:.82rem}
        .cp-cat-empty{padding:1.2rem 1.4rem;font-size:.9rem;color:var(--tm);font-style:italic;line-height:1.6}
        .cp-list{margin:0 0 1.4rem;padding:0;list-style:none}
        .cp-list li{padding:.45rem 0 .45rem 1.4rem;position:relative;font-size:.96rem;color:var(--tb);border-bottom:1px solid var(--bs);line-height:1.6}
        .cp-list li:last-child{border-bottom:none}
        .cp-list li::before{content:'';position:absolute;left:0;top:14px;width:6px;height:6px;border-radius:2px;background:var(--cy);opacity:.7}
        .cp-list li strong{color:var(--tx)}
        .cp-list li a{color:var(--cy);text-decoration:none;font-weight:600;border-bottom:1px solid rgba(232,99,43,.3)}
        .cp-list li a:hover{border-bottom-color:var(--cy)}
        @media(max-width:640px){
          .cp-wrap{padding:2.4rem 1.2rem 3rem}
          .cp-meta{grid-template-columns:repeat(2,1fr)}
          .cp-meta-cell{border-right:none;border-bottom:1px solid var(--bs)}
          .cp-meta-cell:nth-child(odd){border-right:1px solid var(--bs)}
          .cp-meta-cell:nth-last-child(-n+2){border-bottom:none}
          .cp-h1{font-size:1.75rem}
          .cp-table{display:block;overflow-x:auto}
        }
      `}</style>

      <main className="cp-wrap">
        <span className="cp-eyebrow">Legal · Cookie Policy</span>
        <h1 className="cp-h1">Cookie Policy</h1>
        <p className="cp-lede">What cookies we set on seccomply.net — what they do, how long they stay, and who else can see them.</p>

        <div className="cp-meta">
          <div className="cp-meta-cell"><div className="cp-meta-label">Effective</div><div className="cp-meta-val">30 April 2026</div></div>
          <div className="cp-meta-cell"><div className="cp-meta-label">Last Updated</div><div className="cp-meta-val">30 April 2026</div></div>
          <div className="cp-meta-cell"><div className="cp-meta-label">Version</div><div className="cp-meta-val">2.0</div></div>
          <div className="cp-meta-cell"><div className="cp-meta-label">Applies To</div><div className="cp-meta-val">seccomply.net</div></div>
        </div>

        <div className="cp-callout">
          <div className="cp-callout-label">Your choice matters</div>
          <p className="cp-callout-body">We do not set any non-essential cookie on your device until you give consent through our cookie banner. You can change your choice at any time through the <a href="#" onClick={openPrefs}>Cookie Preferences</a> link in the footer of every page.</p>
        </div>

        <h2 className="cp-h2">1. About this policy</h2>
        <p className="cp-p">This Cookie Policy explains what cookies and similar tracking technologies SecComply Technologies Private Limited (<strong>"SecComply," "we," "our," or "us"</strong>) uses on seccomply.net, why we use them, and how you can control them. It should be read alongside our Privacy Notice, which describes how we process personal data more generally.</p>
        <p className="cp-p">We comply with the requirements of the Digital Personal Data Protection Act, 2023 of India, the General Data Protection Regulation for visitors from the European Economic Area, and other applicable privacy laws.</p>

        <h2 className="cp-h2">2. What cookies are</h2>
        <p className="cp-p">Cookies are small text files that a website stores on your browser when you visit. They let the site recognise your device on subsequent visits, remember your preferences, and understand how the site is used. We also use similar technologies such as local storage; in this policy we refer to all of these collectively as "cookies."</p>
        <p className="cp-p">Cookies are either <strong>first-party</strong> (set directly by seccomply.net) or <strong>third-party</strong> (set by services we embed). They can also be <strong>session cookies</strong> (deleted when you close your browser) or <strong>persistent cookies</strong> (stored until they expire or you delete them).</p>

        <h2 className="cp-h2">3. Cookies we use</h2>
        <p className="cp-p">We currently use cookies in only two of the four standard categories: <strong>Strictly Necessary</strong> (always active, the site cannot function without them) and <strong>Analytics</strong> (active only with your consent). We do not currently set Functional or Marketing cookies. If that changes, we will update this policy and re-prompt you to review your consent before any new category is activated.</p>

        <div className="cp-cat">
          <div className="cp-cat-banner">
            <div className="cp-cat-label">Strictly Necessary · Required for the site to work</div>
            <p className="cp-cat-summary">These cookies remember your cookie choices so the banner does not reappear on every page. They cannot be switched off.</p>
          </div>
          <table className="cp-table">
            <thead><tr><th>Cookie</th><th>Purpose</th><th>Party</th><th>Duration</th></tr></thead>
            <tbody>
              <tr><td>sc_consent</td><td>Stores your cookie consent choices and the banner version that produced them</td><td>First-party</td><td>12 months</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cp-cat">
          <div className="cp-cat-banner">
            <div className="cp-cat-label">Analytics · Helps us improve the site</div>
            <p className="cp-cat-summary">These cookies let us measure how visitors discover and use our content. We use the data in aggregate; individual visitors are not identified. Active only after you consent.</p>
          </div>
          <table className="cp-table">
            <thead><tr><th>Cookie</th><th>Purpose</th><th>Party</th><th>Duration</th></tr></thead>
            <tbody>
              <tr><td>_ga</td><td>Google Analytics — distinguishes unique users across sessions</td><td>Google</td><td>2 years</td></tr>
              <tr><td>_ga_&lt;id&gt;</td><td>Google Analytics 4 — maintains session state for each property</td><td>Google</td><td>2 years</td></tr>
              <tr><td>_gid</td><td>Google Analytics — distinguishes users on short timeframes</td><td>Google</td><td>24 hours</td></tr>
            </tbody>
          </table>
        </div>

        <div className="cp-cat">
          <div className="cp-cat-banner muted">
            <div className="cp-cat-label">Functional · Not currently in use</div>
            <p className="cp-cat-summary">We do not currently set cookies to remember preferences such as language or theme. If we add functional cookies in future, we will update this policy and ask for your consent before activating them.</p>
          </div>
        </div>

        <div className="cp-cat">
          <div className="cp-cat-banner muted">
            <div className="cp-cat-label">Marketing · Not currently in use</div>
            <p className="cp-cat-summary">We do not currently run advertising or marketing automation cookies on seccomply.net. Our marketing reaches you through email and content channels that you have opted into separately, not through site-side ad targeting. If that changes, we will update this policy and ask for your consent first.</p>
          </div>
        </div>

        <h2 className="cp-h2">4. Third-party processors</h2>
        <p className="cp-p">When you consent to analytics cookies, we share limited information with the third party below. They act as our processor under their own privacy notice:</p>
        <ul className="cp-list">
          <li><strong>Google LLC</strong> — Google Analytics 4. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>.</li>
        </ul>
        <p className="cp-p">These transfers involve sending data outside India. For visitors from the European Economic Area, such transfers rely on Standard Contractual Clauses. For Indian data principals, we rely on mechanisms permitted under the DPDP Act 2023. See our Privacy Notice, Section 10 for full details.</p>

        <h2 className="cp-h2">5. Third-party services we redirect to</h2>
        <p className="cp-p">Some links on seccomply.net send you to third-party services that we do not host or embed. These services are operated independently and do not set cookies on seccomply.net itself; once you leave our site, the destination service governs the data it collects from you.</p>
        <ul className="cp-list">
          <li><strong>Microsoft Bookings</strong> — when you click <em>"Book a consultation"</em>, you are redirected to Microsoft Bookings (outlook.office.com), which operates independently and may process your data under its own privacy terms. SecComply does not place any Microsoft cookie on seccomply.net. See <a href="https://privacy.microsoft.com" target="_blank" rel="noopener">privacy.microsoft.com</a>.</li>
        </ul>

        <h2 className="cp-h2">6. Browser controls</h2>
        <p className="cp-p">In addition to our preference centre, every modern browser lets you block or delete cookies directly. These controls are site-wide and apply to every website you visit:</p>
        <ul className="cp-list">
          <li>Google Chrome — <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">support.google.com/chrome/answer/95647</a></li>
          <li>Mozilla Firefox — <a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener">support.mozilla.org/kb/cookies-information-websites-store-on-your-computer</a></li>
          <li>Apple Safari — <a href="https://support.apple.com/en-in/guide/safari/sfri11471" target="_blank" rel="noopener">support.apple.com/en-in/guide/safari/sfri11471</a></li>
          <li>Microsoft Edge — <a href="https://support.microsoft.com/windows/manage-cookies-in-microsoft-edge" target="_blank" rel="noopener">support.microsoft.com/windows/manage-cookies-in-microsoft-edge</a></li>
        </ul>
        <p className="cp-p">We honour the <strong>Global Privacy Control (GPC)</strong> browser signal where it is sent. If your browser sends a GPC header, we treat it as a withdrawal of consent for any non-essential cookies.</p>

        <h2 className="cp-h2">7. Your rights</h2>
        <p className="cp-p">You have rights in relation to cookies and the data they collect, summarised in our Privacy Notice, Section 8. In particular, you can:</p>
        <ul className="cp-list">
          <li>Manage your preferences at any time through our cookie banner or the <a href="#" onClick={openPrefs}>Cookie Preferences</a> link in the site footer.</li>
          <li>Withdraw consent previously given, with the same ease as giving it. Withdrawal does not affect the lawfulness of processing carried out before withdrawal.</li>
          <li>Access, correct, or delete the personal data we hold about you, subject to legal retention obligations.</li>
          <li>Lodge a grievance with our designated officer (Section 9 below) or with the relevant data protection authority — the Data Protection Board of India for Indian visitors, or your local supervisory authority for European visitors.</li>
        </ul>

        <h2 className="cp-h2">8. Changes to this policy</h2>
        <p className="cp-p">We review this Cookie Policy whenever we add, remove, or materially change a cookie. When categories, vendors, or legal bases change, we publish a new version, update the <em>"Last updated"</em> date at the top, and where required re-prompt you to review your consent through the cookie banner. Previous versions are available on request.</p>

        <h2 className="cp-h2">9. Contact us</h2>
        <p className="cp-p">If you have questions about this policy or our cookie practices, reach out:</p>
        <ul className="cp-list">
          <li>Email: <a href="mailto:info@seccomply.net">info@seccomply.net</a></li>
          <li>Website: <a href="https://seccomply.net">seccomply.net</a></li>
          <li>Grievance redressal: as designated under Section 13 of our Privacy Notice</li>
          <li>Regulator (India): Data Protection Board of India</li>
        </ul>
      </main>
    </>
  )
}
