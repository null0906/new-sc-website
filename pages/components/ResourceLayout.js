import Head from 'next/head'
import Link from 'next/link'

export default function ResourceLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title || 'Resources - SecComply'}</title>
        <meta name="description" content={description || 'Compliance resources from SecComply.'} />
        <link rel="icon" type="image/png" href="/icon-192.png" />
      </Head>

      <style jsx global>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
        :root{--bg-dark:#020617;--bg-card:rgba(15,23,42,.6);--white:#F8FAFC;--accent:#E8632B;--accent-light:#F0813C;--blue-400:#94A3B8;--blue-600:#64748B;--blue-700:#475569;--green:#10B981;--radius-sm:8px;--radius-lg:16px;--transition:all .3s ease}
        html{scroll-behavior:smooth}
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:var(--bg-dark);color:var(--white);-webkit-font-smoothing:antialiased;overflow-x:hidden}
        a{text-decoration:none;color:inherit}

        /* Navbar */
        .rl-navbar{position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(2,6,23,.92);backdrop-filter:blur(20px) saturate(180%);border-bottom:1px solid rgba(255,255,255,.06)}
        .rl-navbar-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;align-items:center;justify-content:space-between;height:72px}
        .rl-logo{display:flex;align-items:center;gap:10px;text-decoration:none}
        .rl-logo-text{font-size:22px;font-weight:800;color:var(--white);letter-spacing:-.5px}
        .rl-logo-text span{color:var(--accent)}
        .rl-nav{display:flex;align-items:center;gap:32px;list-style:none}
        .rl-nav a{font-size:14px;font-weight:500;color:var(--blue-400);transition:var(--transition)}
        .rl-nav a:hover{color:var(--white)}
        .rl-nav a.active{color:var(--white)}
        .rl-btn-cta{padding:10px 22px;background:var(--accent);color:var(--white);font-size:13px;font-weight:700;border-radius:999px;transition:var(--transition);white-space:nowrap}
        .rl-btn-cta:hover{background:var(--accent-light);transform:translateY(-1px)}

        /* Page content */
        .rl-page{padding-top:72px;min-height:100vh}

        /* Footer */
        .rl-footer{padding:48px 0 24px;border-top:1px solid rgba(255,255,255,.04)}
        .rl-footer-inner{max-width:1200px;margin:0 auto;padding:0 24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
        .rl-footer-copy{font-size:12px;color:var(--blue-700)}
        .rl-footer-links{display:flex;gap:24px}
        .rl-footer-links a{font-size:12px;color:var(--blue-600);transition:var(--transition)}
        .rl-footer-links a:hover{color:var(--accent-light)}

        /* Shared card styles */
        .sub-hero{padding:80px 24px 40px;text-align:center;max-width:800px;margin:0 auto}
        .sub-hero h1{font-size:clamp(2rem,5vw,3rem);font-weight:800;color:#fff;margin-bottom:12px}
        .sub-hero p{font-size:1.05rem;color:rgba(255,255,255,.55);line-height:1.7}
        .sub-back{display:inline-flex;align-items:center;gap:6px;color:rgba(255,255,255,.5);font-size:.85rem;margin-bottom:16px;text-decoration:none;transition:color .2s}
        .sub-back:hover{color:var(--accent)}
        .sub-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:40px auto 80px;padding:0 24px}
        .sub-card{background:var(--bg-card);border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-lg);padding:32px 24px;display:flex;flex-direction:column;gap:14px;transition:all .3s ease}
        .sub-card:hover{border-color:rgba(232,99,43,.35);transform:translateY(-3px);box-shadow:0 8px 30px rgba(232,99,43,.08)}
        .sub-tag{display:inline-block;padding:4px 12px;border-radius:20px;font-size:.7rem;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;background:rgba(232,99,43,.15);color:var(--accent);width:fit-content}
        .sub-icon{font-size:1.8rem}
        .sub-card h3{font-size:1.15rem;font-weight:700;color:#fff;margin:0}
        .sub-card p{font-size:.9rem;color:rgba(255,255,255,.55);line-height:1.6;margin:0;flex:1}
        .sub-cta{color:var(--accent);font-size:.88rem;font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:6px;transition:gap .2s}
        .sub-cta:hover{gap:10px}

        /* Category tiles (main resources page) */
        .res-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:40px auto 80px;padding:0 24px}
        .res-card{background:var(--bg-card);border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-lg);padding:36px 28px;display:flex;flex-direction:column;gap:16px;transition:all .3s ease;cursor:pointer;text-decoration:none;position:relative;overflow:hidden}
        .res-card:hover{border-color:rgba(232,99,43,.4);transform:translateY(-4px);box-shadow:0 12px 40px rgba(232,99,43,.1)}
        .res-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent-light));opacity:0;transition:opacity .3s}
        .res-card:hover::before{opacity:1}
        .res-card h3{font-size:1.3rem;font-weight:700;color:#fff;margin:0}
        .res-card p{font-size:.92rem;color:rgba(255,255,255,.55);line-height:1.6;margin:0;flex:1}
        .res-cta{color:var(--accent);font-size:.9rem;font-weight:600;display:flex;align-items:center;gap:6px;margin-top:8px;transition:gap .2s}
        .res-card:hover .res-cta{gap:10px}

        /* PDF badge */
        .pdf-badge{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;background:rgba(239,68,68,.12);color:#EF4444;font-size:.65rem;font-weight:700;border-radius:4px;letter-spacing:.5px;text-transform:uppercase}

        @media(max-width:900px){.sub-grid,.res-grid{grid-template-columns:repeat(2,1fr)}.rl-nav{display:none}}
        @media(max-width:600px){.sub-grid,.res-grid{grid-template-columns:1fr}.rl-footer-inner{flex-direction:column;text-align:center}}
      `}</style>

      <div className="rl-navbar">
        <div className="rl-navbar-inner">
          <Link href="/" className="rl-logo">
            <span className="rl-logo-text">Sec<span>Comply</span>™</span>
          </Link>
          <ul className="rl-nav">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/resources" className="active">Resources</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <Link href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/?ismsaljsauthenabled" target="_blank" rel="noopener" className="rl-btn-cta">
            Book Consultation →
          </Link>
        </div>
      </div>

      <div className="rl-page">
        {children}
      </div>

      <footer className="rl-footer">
        <div className="rl-footer-inner">
          <span className="rl-footer-copy">© {new Date().getFullYear()} SecComply™. All rights reserved.</span>
          <div className="rl-footer-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
