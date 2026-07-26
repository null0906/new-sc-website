import Head from 'next/head'
import Script from 'next/script'

export default function ServiceInventraPage() {
  return (
    <>
      <Head>
        <title>Inventra — Custom IT Asset Management | SecComply</title>
        <meta name="description" content="Inventra: full-visibility IT asset management built for how your teams actually work. Lifecycle tracking, licenses, kits, barcode audits, RBAC and API-first architecture — white-labeled per client." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Inventra — Custom IT Asset Management | SecComply" />
        <meta property="og:description" content="Full-visibility IT asset management, built for how your teams actually work. From procurement to decommissioning — hardware, licenses, accessories and everything in between." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seccomply.net/services/inventra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inventra — Custom IT Asset Management | SecComply" />
        <meta name="twitter:description" content="Full-visibility IT asset management, built for how your teams actually work." />
        <link rel="canonical" href="https://seccomply.net/services/inventra" />        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"Service","name":"Inventra — Custom IT Asset Management","description":"Full-visibility IT asset management built for real-world asset complexity — hardware, licenses, accessories, kits and audits — deployable as a white-labeled solution per client.","provider":{"@type":"Organization","name":"SecComply","url":"https://seccomply.net"},"areaServed":"Worldwide","url":"https://seccomply.net/services/inventra"}`}}
        />
        <style dangerouslySetInnerHTML={{__html: `
/* ── Inventra — page-scoped styles ─────────────────────── */

/* Hero two-column layout */
.inv-hero { text-align:left; padding:140px 0 80px; }
.inv-hero-inner { display:grid; grid-template-columns:1.05fr 1fr; gap:56px; align-items:center; position:relative; z-index:2; }
.inv-hero .hero-content { text-align:left; max-width:none; margin:0; }
.inv-hero .hero-sub { margin-left:0; max-width:520px; }
.inv-hero .hero-ctas { justify-content:flex-start; }

/* Gradient mesh background */
.inv-mesh-bg { position:absolute; inset:0; z-index:0; overflow:hidden; pointer-events:none; }
.inv-mesh-layer { position:absolute; border-radius:50%; filter:blur(100px); will-change:transform,opacity; pointer-events:none; }
.inv-mesh-l1 { width:600px; height:600px; background:rgb(var(--accent-rgb) / 0.09); top:-150px; left:-100px; animation:invMesh1 50s ease-in-out infinite; }
.inv-mesh-l2 { width:480px; height:480px; background:rgb(var(--green-rgb) / 0.06); top:-60px; right:-80px; animation:invMesh2 50s ease-in-out infinite 15s; }
.inv-mesh-l3 { width:400px; height:400px; background:rgb(var(--blue-rgb) / 0.05); bottom:-80px; left:38%; animation:invMesh1 50s ease-in-out infinite 30s; }
@keyframes invMesh1 { 0%,100%{ transform:translate(0,0); opacity:0.7; } 50%{ transform:translate(70px,40px); opacity:1; } }
@keyframes invMesh2 { 0%,100%{ transform:translate(0,0); opacity:0.5; } 50%{ transform:translate(-60px,50px); opacity:0.8; } }

/* ── Animated asset-registry panel ── */
.inv-motif { position:relative; display:flex; justify-content:center; align-items:center; }
.inv-panel { position:relative; width:100%; max-width:460px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-xl); box-shadow:0 25px 80px rgb(var(--p-white-rgb) / 0.5), 0 0 40px rgb(var(--accent-rgb) / 0.05); overflow:hidden; animation:invPanelIn 0.9s var(--ease-out) 0.2s both; }
@keyframes invPanelIn { from{ opacity:0; transform:translateY(30px) scale(0.96); } to{ opacity:1; transform:translateY(0) scale(1); } }
.inv-topbar { display:flex; align-items:center; gap:6px; padding:12px 16px; background:rgb(var(--p-white-rgb) / 0.02); border-bottom:1px solid var(--border); }
.inv-dots { display:flex; gap:5px; }
.inv-dots span { width:9px; height:9px; border-radius:50%; }
.inv-title { flex:1; text-align:center; font-size:11px; color:var(--text-muted); font-family:var(--font-mono); }
.inv-kpis { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; padding:14px 16px 6px; }
.inv-kpi { background:rgb(var(--p-white-rgb) / 0.025); border:1px solid rgb(var(--p-white-rgb) / 0.05); border-radius:var(--radius-md); padding:10px 12px; }
.inv-kpi-n { font-size:19px; font-weight:900; color:var(--white); line-height:1; }
.inv-kpi-n.o { color:var(--accent-light); }
.inv-kpi-n.g { color:var(--green); }
.inv-kpi-l { font-size:8.5px; font-weight:700; text-transform:uppercase; letter-spacing:0.6px; color:var(--text-muted); margin-top:4px; }

/* Asset rows with staggered entry + cycling highlight */
.inv-rows { position:relative; padding:8px 16px 16px; display:flex; flex-direction:column; gap:7px; }
.inv-row { display:flex; align-items:center; gap:10px; padding:9px 12px; background:rgb(var(--p-white-rgb) / 0.025); border:1px solid rgb(var(--p-white-rgb) / 0.05); border-radius:var(--radius-md); opacity:0; animation:invRowIn 0.5s var(--ease-out) forwards, invRowGlow 12s ease-in-out infinite; }
.inv-row:nth-child(1) { animation-delay:0.5s, 2s; }
.inv-row:nth-child(2) { animation-delay:0.65s, 5s; }
.inv-row:nth-child(3) { animation-delay:0.8s, 8s; }
.inv-row:nth-child(4) { animation-delay:0.95s, 11s; }
@keyframes invRowIn { from{ opacity:0; transform:translateX(-14px); } to{ opacity:1; transform:translateX(0); } }
@keyframes invRowGlow { 0%,6%,100%{ border-color:rgb(var(--p-white-rgb) / 0.05); box-shadow:none; } 3%{ border-color:rgb(var(--accent-rgb) / 0.4); box-shadow:0 0 16px rgb(var(--accent-rgb) / 0.12); } }
.inv-row-ico { font-size:15px; flex-shrink:0; }
.inv-row-name { font-size:11.5px; font-weight:600; color:var(--text-primary); line-height:1.2; }
.inv-row-serial { font-size:9px; color:var(--text-muted); font-family:var(--font-mono); }
.inv-pill { margin-left:auto; font-size:8.5px; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; padding:3px 9px; border-radius:var(--radius-full); flex-shrink:0; }
.inv-pill.dep { background:var(--green-dim); color:var(--green); }
.inv-pill.pen { background:var(--yellow-dim); color:var(--yellow); }
.inv-pill.out { background:rgb(var(--accent-rgb) / 0.14); color:var(--accent-light); }
.inv-pill.arc { background:rgba(148,163,184,0.12); color:var(--text-secondary); }

/* Scan beam sweeping the registry (barcode-audit feel) */
.inv-scan { position:absolute; left:0; right:0; top:0; height:44px; background:linear-gradient(to bottom, transparent, rgb(var(--accent-rgb) / 0.07), rgb(var(--accent-rgb) / 0.14), rgb(var(--accent-rgb) / 0.07), transparent); border-top:1px solid rgb(var(--accent-rgb) / 0.25); pointer-events:none; animation:invScan 5.5s ease-in-out infinite; z-index:2; }
@keyframes invScan { 0%{ transform:translateY(-50px); opacity:0; } 10%{ opacity:1; } 85%{ opacity:1; } 100%{ transform:translateY(320px); opacity:0; } }

/* Floating event chips */
.inv-chip { position:absolute; display:flex; align-items:center; gap:7px; background:rgb(var(--bg-card-rgb) / 0.95); border:1px solid var(--border-hover); border-radius:var(--radius-full); padding:8px 14px; font-size:11px; font-weight:600; color:var(--text-primary); box-shadow:var(--shadow-md); white-space:nowrap; z-index:3; }
.inv-chip .d { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
.inv-chip-1 { top:8%; right:-4%; animation:invChipFloat 6s ease-in-out infinite; }
.inv-chip-1 .d { background:var(--green); box-shadow:0 0 8px var(--green); }
.inv-chip-2 { bottom:22%; left:-7%; animation:invChipFloat 7s ease-in-out infinite 1.5s; }
.inv-chip-2 .d { background:var(--yellow); box-shadow:0 0 8px var(--yellow); }
.inv-chip-3 { bottom:-4%; right:6%; animation:invChipFloat 6.5s ease-in-out infinite 3s; }
.inv-chip-3 .d { background:var(--accent); box-shadow:0 0 8px var(--accent); }
@keyframes invChipFloat { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }

/* Overview statement */
.inv-overview { padding:90px 0 30px; }
.inv-overview-inner { max-width:820px; margin:0 auto; text-align:center; }
.inv-overview-inner p { font-size:1.25rem; line-height:1.75; color:var(--text-secondary); }
.inv-overview-inner p strong { color:var(--white); font-weight:700; }

/* Capability cards: consistent icon boxes */
.inv-cap-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.inv-cap-grid .feature-card h3 { font-size:0.98rem; }
.inv-cap-grid .feature-card p { font-size:0.85rem; }

/* Why We Built It band */
.inv-why { padding:100px 0; position:relative; overflow:hidden; background:var(--bg-secondary); }
.inv-why-glow { position:absolute; top:50%; left:50%; width:640px; height:640px; transform:translate(-50%,-50%); border-radius:50%; background:radial-gradient(circle, rgb(var(--accent-rgb) / 0.09) 0%, transparent 70%); pointer-events:none; animation:invWhyPulse 5s ease-in-out infinite; }
@keyframes invWhyPulse { 0%,100%{ opacity:0.55; transform:translate(-50%,-50%) scale(1); } 50%{ opacity:0.9; transform:translate(-50%,-50%) scale(1.08); } }
.inv-why-inner { position:relative; max-width:780px; margin:0 auto; text-align:center; }
.inv-why-inner blockquote { font-size:clamp(1.3rem,2.6vw,1.75rem); font-weight:700; color:var(--white); line-height:1.5; letter-spacing:-0.5px; margin:26px 0 18px; }
.inv-why-inner blockquote em { color:var(--accent-light); font-style:normal; }
.inv-why-inner p { color:var(--text-secondary); font-size:1rem; line-height:1.75; max-width:680px; margin:0 auto; }

@media (max-width:900px) {
  .inv-hero-inner { grid-template-columns:1fr; gap:40px; }
  .inv-motif { order:-1; }
  .inv-panel { max-width:420px; }
  .inv-chip-1 { right:0; }
  .inv-chip-2 { left:0; }
  .inv-cap-grid { grid-template-columns:repeat(2,1fr); }
}
@media (max-width:600px) { .inv-cap-grid { grid-template-columns:1fr; } .inv-chip { display:none; } }
        `}} />
      </Head>

      <div dangerouslySetInnerHTML={{__html: `
<section class="service-hero inv-hero"><div class="inv-mesh-bg"><div class="inv-mesh-layer inv-mesh-l1"></div><div class="inv-mesh-layer inv-mesh-l2"></div><div class="inv-mesh-layer inv-mesh-l3"></div></div><div class="hero-grid"></div><div class="container"><div class="inv-hero-inner"><div class="hero-content"><div class="hero-badge"><span class="hero-badge-dot"></span> Engineering Solutions &middot; Flagship Build</div><h1><span class="accent">Inventra</span></h1><p class="hero-sub">Full-visibility IT asset management, built for how your teams actually work.</p><div class="hero-ctas"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Book a Walkthrough <span class="btn-icon">&rarr;</span></a><a href="#capabilities" class="btn btn-outline btn-lg">Explore Capabilities</a></div></div>
<div class="inv-motif"><div class="inv-panel"><div class="inv-scan"></div><div class="inv-topbar"><div class="inv-dots"><span style="background:var(--red)"></span><span style="background:var(--yellow)"></span><span style="background:var(--green)"></span></div><div class="inv-title">inventra &mdash; asset registry</div></div><div class="inv-kpis"><div class="inv-kpi"><div class="inv-kpi-n">1,284</div><div class="inv-kpi-l">Total Assets</div></div><div class="inv-kpi"><div class="inv-kpi-n g">96%</div><div class="inv-kpi-l">Deployed</div></div><div class="inv-kpi"><div class="inv-kpi-n o">14</div><div class="inv-kpi-l">Renewals Due</div></div></div><div class="inv-rows"><div class="inv-row"><span class="inv-row-ico">&#x1F4BB;</span><div><div class="inv-row-name">MacBook Pro 14&Prime;</div><div class="inv-row-serial">SN&middot;C02XR3JGMD6T</div></div><span class="inv-pill out">Checked Out</span></div><div class="inv-row"><span class="inv-row-ico">&#x1F5A5;&#xFE0F;</span><div><div class="inv-row-name">Dell U2723QE Monitor</div><div class="inv-row-serial">SN&middot;CN0H3JK4</div></div><span class="inv-pill dep">Deployable</span></div><div class="inv-row"><span class="inv-row-ico">&#x1F511;</span><div><div class="inv-row-name">M365 E5 &mdash; 250 seats</div><div class="inv-row-serial">LIC&middot;renews 14d</div></div><span class="inv-pill pen">Pending</span></div><div class="inv-row"><span class="inv-row-ico">&#x1F5A8;&#xFE0F;</span><div><div class="inv-row-name">HP LaserJet M404</div><div class="inv-row-serial">SN&middot;PHBLD59201</div></div><span class="inv-pill arc">Archived</span></div></div></div><div class="inv-chip inv-chip-1"><span class="d"></span> Checked out &rarr; Priya S.</div><div class="inv-chip inv-chip-2"><span class="d"></span> License renewal in 14 days</div><div class="inv-chip inv-chip-3"><span class="d"></span> New-hire kit deployed</div></div></div></div></section>

<section class="inv-overview"><div class="container"><div class="inv-overview-inner reveal"><p>Off-the-shelf asset trackers force you into <strong>their</strong> data model. <strong>Inventra</strong> was engineered from the ground up for real-world asset complexity &mdash; hardware, licenses, accessories, and everything in between &mdash; while staying flexible enough to adapt to each client&rsquo;s environment.</p></div></div></section>

<section class="benefits-section" id="capabilities"><div class="container"><div class="section-header reveal"><div class="section-badge"><span class="section-badge-dot"></span> Core Capabilities</div><h2 class="section-title">Everything Your Assets Do, <span class="accent">Tracked</span></h2><p class="section-desc">From procurement to decommissioning &mdash; one system of record for every asset, license and accessory you own.</p></div><div class="inv-cap-grid">
<div class="feature-card reveal delay-1"><div class="feature-icon orange">&#x1F504;</div><h3>Complete Asset Lifecycle Tracking</h3><p>From procurement to decommissioning, with full status states &mdash; Deployable, Undeployable, Archived, Pending.</p></div>
<div class="feature-card reveal delay-2"><div class="feature-icon green">&#x21C4;</div><h3>Checkout / Check-in Workflows</h3><p>Assign assets to users or locations with full audit history.</p></div>
<div class="feature-card reveal delay-3"><div class="feature-icon blue">&#x1F511;</div><h3>License &amp; Software Management</h3><p>Seat tracking, renewal alerts, compliance mapping.</p></div>
<div class="feature-card reveal delay-1"><div class="feature-icon purple">&#x1F5B1;&#xFE0F;</div><h3>Accessories, Consumables &amp; Components</h3><p>Track everything from peripherals to spare parts &mdash; not just serialized hardware.</p></div>
<div class="feature-card reveal delay-2"><div class="feature-icon teal">&#x1F392;</div><h3>Predefined Kits</h3><p>Bundle standard issue equipment for fast onboarding &mdash; e.g., new-hire laptop + monitor + accessories kit.</p></div>
<div class="feature-card reveal delay-3"><div class="feature-icon orange">&#x1F9E9;</div><h3>Custom Fields</h3><p>Model any asset attribute your business actually needs.</p></div>
<div class="feature-card reveal delay-1"><div class="feature-icon green">&#x1F4CD;</div><h3>Location &amp; Multi-Site Support</h3><p>Track assets across offices, warehouses, or client sites.</p></div>
<div class="feature-card reveal delay-2"><div class="feature-icon blue">&#x1F527;</div><h3>Maintenance Records</h3><p>Full service history per asset.</p></div>
<div class="feature-card reveal delay-3"><div class="feature-icon purple">&#x1F4F7;</div><h3>Barcode &amp; QR Support</h3><p>Fast physical audits.</p></div>
<div class="feature-card reveal delay-1"><div class="feature-icon teal">&#x1F4E4;</div><h3>Import / Export</h3><p>Bulk onboarding and reporting via CSV/Excel.</p></div>
<div class="feature-card reveal delay-2"><div class="feature-icon orange">&#x1F6E1;&#xFE0F;</div><h3>Role-Based Access Control</h3><p>Granular permissions by team or function.</p></div>
<div class="feature-card reveal delay-3"><div class="feature-icon green">&#x1F4DC;</div><h3>Full Audit Trail</h3><p>Every change, logged and attributable.</p></div>
<div class="feature-card reveal delay-1"><div class="feature-icon blue">&#x1F50C;</div><h3>API-First Architecture</h3><p>Integrate with existing IT/security tooling.</p></div>
<div class="feature-card reveal delay-2"><div class="feature-icon purple">&#x1F3F7;&#xFE0F;</div><h3>Custom Branding &amp; Multi-Tenancy</h3><p>Built to run as a white-labeled deployment per client.</p></div>
</div></div></section>

<section class="inv-why"><div class="inv-why-glow"></div><div class="container"><div class="inv-why-inner reveal"><div class="section-badge"><span class="section-badge-dot"></span> Why We Built It</div><blockquote>You can&rsquo;t secure or govern <em>what you can&rsquo;t see.</em></blockquote><p>Inventra closes the asset-visibility gap that most compliance and security programs quietly struggle with &mdash; feeding clean, structured asset data into audits, CMDB reviews, and security posture work.</p></div></div></section>

<section class="cta-section"><div class="cta-glow-1"></div><div class="cta-glow-2"></div><div class="container"><div class="cta-content reveal"><h2>See Inventra on <span class="accent">Your Assets</span></h2><p>Book a walkthrough to see how Inventra maps to your existing asset environment.</p><div class="cta-buttons"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Book a Walkthrough <span class="btn-icon">&rarr;</span></a><a href="/contact" class="btn btn-outline btn-lg">Talk to an Expert <span class="btn-icon">&rarr;</span></a></div></div></div></section>
      `}} />

      <Script src="/assets/js/animations.js" strategy="afterInteractive" />
    </>
  )
}
