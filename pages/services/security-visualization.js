import Head from 'next/head'
import Script from 'next/script'

export default function ServiceSecurityVisualizationPage() {
  return (
    <>
      <Head>
        <title>Custom Security Visualization System | SecComply</title>
        <meta name="description" content="Turn scattered security exports into one live picture of your risk posture. Self-hosted dashboard that ingests CSV/Excel reports from firewalls, EDR, scanners and DLP — no vendor APIs required." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Custom Security Visualization System | SecComply" />
        <meta property="og:description" content="Turn scattered security exports into one live picture of your risk posture. Drop-in ingestion, automated normalization, self-hosted deployment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seccomply.net/services/security-visualization" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Security Visualization System | SecComply" />
        <meta name="twitter:description" content="Turn scattered security exports into one live picture of your risk posture." />
        <link rel="canonical" href="https://seccomply.net/services/security-visualization" />        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"Service","name":"Custom Security Visualization System","description":"Self-hosted security visualization that ingests CSV/Excel exports from existing security tools, normalizes findings into a unified schema, and surfaces everything in one live dashboard.","provider":{"@type":"Organization","name":"SecComply","url":"https://seccomply.net"},"areaServed":"Worldwide","url":"https://seccomply.net/services/security-visualization"}`}}
        />
        <style dangerouslySetInnerHTML={{__html: `
/* ── Security Visualization — page-scoped styles ────────── */

/* Hero two-column layout */
.svz-hero { text-align:left; padding:140px 0 80px; }
.svz-hero-inner { display:grid; grid-template-columns:1fr 1.05fr; gap:56px; align-items:center; position:relative; z-index:2; }
.svz-hero .hero-content { text-align:left; max-width:none; margin:0; }
.svz-hero .hero-sub { margin-left:0; max-width:520px; }
.svz-hero .hero-ctas { justify-content:flex-start; }

/* Gradient mesh background */
.svz-mesh-bg { position:absolute; inset:0; z-index:0; overflow:hidden; pointer-events:none; }
.svz-mesh-layer { position:absolute; border-radius:50%; filter:blur(100px); will-change:transform,opacity; pointer-events:none; }
.svz-mesh-l1 { width:600px; height:600px; background:rgb(var(--blue-rgb) / 0.08); top:-150px; right:-100px; animation:svzMesh1 50s ease-in-out infinite; }
.svz-mesh-l2 { width:480px; height:480px; background:rgb(var(--accent-rgb) / 0.07); top:-60px; left:-80px; animation:svzMesh2 50s ease-in-out infinite 15s; }
.svz-mesh-l3 { width:400px; height:400px; background:rgb(var(--red-rgb) / 0.04); bottom:-80px; left:45%; animation:svzMesh1 50s ease-in-out infinite 30s; }
@keyframes svzMesh1 { 0%,100%{ transform:translate(0,0); opacity:0.7; } 50%{ transform:translate(-70px,40px); opacity:1; } }
@keyframes svzMesh2 { 0%,100%{ transform:translate(0,0); opacity:0.5; } 50%{ transform:translate(60px,50px); opacity:0.8; } }

/* ── Animated ingestion-pipeline panel ── */
.svz-motif { position:relative; display:flex; justify-content:center; align-items:center; }
.svz-panel { position:relative; width:100%; max-width:500px; background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-xl); box-shadow:0 25px 80px rgb(var(--p-white-rgb) / 0.5), 0 0 40px rgb(var(--accent-rgb) / 0.05); overflow:hidden; animation:svzPanelIn 0.9s var(--ease-out) 0.2s both; }
@keyframes svzPanelIn { from{ opacity:0; transform:translateY(30px) scale(0.96); } to{ opacity:1; transform:translateY(0) scale(1); } }
.svz-topbar { display:flex; align-items:center; gap:6px; padding:12px 16px; background:rgb(var(--p-white-rgb) / 0.02); border-bottom:1px solid var(--border); }
.svz-dots { display:flex; gap:5px; }
.svz-dots span { width:9px; height:9px; border-radius:50%; }
.svz-title { flex:1; text-align:center; font-size:11px; color:var(--text-muted); font-family:var(--font-mono); }
.svz-body { display:grid; grid-template-columns:auto auto 1fr; gap:12px; align-items:center; padding:18px 16px; }

/* Column 1: file chips dropping into the pipeline */
.svz-files { display:flex; flex-direction:column; gap:8px; }
.svz-file { display:flex; align-items:center; gap:7px; background:rgb(var(--p-white-rgb) / 0.03); border:1px solid rgb(var(--p-white-rgb) / 0.07); border-radius:var(--radius-md); padding:7px 10px; font-size:9.5px; font-family:var(--font-mono); color:var(--text-secondary); white-space:nowrap; animation:svzFilePulse 8s ease-in-out infinite; }
.svz-file:nth-child(1) { animation-delay:0s; }
.svz-file:nth-child(2) { animation-delay:2s; }
.svz-file:nth-child(3) { animation-delay:4s; }
.svz-file:nth-child(4) { animation-delay:6s; }
@keyframes svzFilePulse { 0%,100%{ border-color:rgb(var(--p-white-rgb) / 0.07); transform:translateX(0); } 4%{ border-color:rgb(var(--accent-rgb) / 0.5); transform:translateX(5px); } 10%{ border-color:rgb(var(--p-white-rgb) / 0.07); transform:translateX(0); } }
.svz-file .ext { font-weight:800; font-size:8px; padding:2px 5px; border-radius:4px; flex-shrink:0; }
.svz-file .ext.csv { background:var(--green-dim); color:var(--green); }
.svz-file .ext.xls { background:var(--teal-dim); color:var(--teal); }

/* Column 2: flow dots + normalizer node */
.svz-flow { display:flex; flex-direction:column; align-items:center; gap:8px; }
.svz-flow-dots { display:flex; gap:4px; }
.svz-flow-dots span { width:5px; height:5px; border-radius:50%; background:var(--accent); opacity:0.25; animation:svzDot 1.6s linear infinite; }
.svz-flow-dots span:nth-child(2) { animation-delay:0.25s; }
.svz-flow-dots span:nth-child(3) { animation-delay:0.5s; }
@keyframes svzDot { 0%,100%{ opacity:0.25; } 50%{ opacity:1; } }
.svz-normalizer { display:flex; flex-direction:column; align-items:center; gap:3px; background:rgb(var(--accent-rgb) / 0.08); border:1px solid rgb(var(--accent-rgb) / 0.3); border-radius:var(--radius-md); padding:10px 12px; animation:svzNormPulse 3s ease-in-out infinite; }
@keyframes svzNormPulse { 0%,100%{ box-shadow:0 0 0 rgb(var(--accent-rgb) / 0); } 50%{ box-shadow:0 0 22px rgb(var(--accent-rgb) / 0.25); } }
.svz-normalizer .ico { font-size:16px; }
.svz-normalizer .lbl { font-size:8px; font-weight:800; text-transform:uppercase; letter-spacing:0.6px; color:var(--accent-light); }

/* Column 3: live dashboard with growing severity bars */
.svz-dash { background:rgb(var(--p-white-rgb) / 0.025); border:1px solid rgb(var(--p-white-rgb) / 0.06); border-radius:var(--radius-md); padding:12px; }
.svz-dash-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }
.svz-dash-title { font-size:9px; font-weight:800; text-transform:uppercase; letter-spacing:0.7px; color:var(--text-secondary); }
.svz-live { display:inline-flex; align-items:center; gap:4px; font-size:8px; font-weight:800; color:var(--green); text-transform:uppercase; letter-spacing:0.5px; }
.svz-live::before { content:''; width:6px; height:6px; border-radius:50%; background:var(--green); box-shadow:0 0 7px var(--green); animation:svzDot 1.5s linear infinite; }
.svz-bars { display:flex; flex-direction:column; gap:7px; }
.svz-bar-row { display:flex; align-items:center; gap:7px; }
.svz-bar-l { font-size:8.5px; font-weight:700; color:var(--text-muted); width:44px; flex-shrink:0; text-align:right; }
.svz-bar-track { flex:1; height:11px; background:rgb(var(--p-white-rgb) / 0.04); border-radius:6px; overflow:hidden; }
.svz-bar { height:100%; border-radius:6px; transform-origin:left; animation:svzBarGrow 7s ease-in-out infinite; }
.svz-bar.crit { background:linear-gradient(90deg,var(--red),#F87171); width:32%; }
.svz-bar.high { background:linear-gradient(90deg,var(--yellow),#FBBF24); width:55%; animation-delay:0.4s; }
.svz-bar.med  { background:linear-gradient(90deg,var(--accent),var(--accent-light)); width:74%; animation-delay:0.8s; }
.svz-bar.low  { background:linear-gradient(90deg,var(--green),var(--green-light)); width:88%; animation-delay:1.2s; }
@keyframes svzBarGrow { 0%{ transform:scaleX(0.1); } 18%,78%{ transform:scaleX(1); } 100%{ transform:scaleX(0.1); } }
.svz-trend { margin-top:10px; display:flex; align-items:flex-end; gap:3px; height:26px; }
.svz-trend span { flex:1; background:rgb(var(--accent-rgb) / 0.35); border-radius:2px 2px 0 0; animation:svzTrend 4s ease-in-out infinite; }
.svz-trend span:nth-child(odd) { animation-delay:0.6s; }
.svz-trend span:nth-child(3n) { animation-delay:1.2s; }
@keyframes svzTrend { 0%,100%{ opacity:0.4; } 50%{ opacity:1; } }

/* Floating chips */
.svz-chip { position:absolute; display:flex; align-items:center; gap:7px; background:rgb(var(--bg-card-rgb) / 0.95); border:1px solid var(--border-hover); border-radius:var(--radius-full); padding:8px 14px; font-size:11px; font-weight:600; color:var(--text-primary); box-shadow:var(--shadow-md); white-space:nowrap; z-index:3; }
.svz-chip .d { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
.svz-chip-1 { top:-5%; right:8%; animation:svzChipFloat 6s ease-in-out infinite; }
.svz-chip-1 .d { background:var(--green); box-shadow:0 0 8px var(--green); }
.svz-chip-2 { bottom:-6%; left:-4%; animation:svzChipFloat 7s ease-in-out infinite 2s; }
.svz-chip-2 .d { background:var(--blue); box-shadow:0 0 8px var(--blue); }
@keyframes svzChipFloat { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-9px); } }

/* Overview statement */
.svz-overview { padding:90px 0 30px; }
.svz-overview-inner { max-width:840px; margin:0 auto; text-align:center; }
.svz-overview-inner p { font-size:1.18rem; line-height:1.8; color:var(--text-secondary); }
.svz-overview-inner p strong { color:var(--white); font-weight:700; }

/* Differentiators: 2-col grid */
.svz-diff-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:20px; max-width:900px; margin:0 auto; }

/* Use cases: 3-col */
.svz-uses-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }

@media (max-width:900px) {
  .svz-hero-inner { grid-template-columns:1fr; gap:40px; }
  .svz-motif { order:-1; }
  .svz-diff-grid, .svz-uses-grid { grid-template-columns:1fr; }
  .svz-chip-1 { right:0; }
}
@media (max-width:600px) {
  .svz-body { grid-template-columns:1fr; }
  .svz-flow { flex-direction:row; }
  .svz-chip { display:none; }
}
        `}} />
      </Head>

      <div dangerouslySetInnerHTML={{__html: `
<section class="service-hero svz-hero"><div class="svz-mesh-bg"><div class="svz-mesh-layer svz-mesh-l1"></div><div class="svz-mesh-layer svz-mesh-l2"></div><div class="svz-mesh-layer svz-mesh-l3"></div></div><div class="hero-grid"></div><div class="container"><div class="svz-hero-inner"><div class="hero-content"><div class="hero-badge"><span class="hero-badge-dot"></span> Engineering Solutions &middot; Self-Hosted</div><h1>Security <span class="accent">Visualization</span></h1><p class="hero-sub">Turn scattered security exports into one live picture of your risk posture.</p><div class="hero-ctas"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">See a Live Demo <span class="btn-icon">&rarr;</span></a><a href="#how-it-works" class="btn btn-outline btn-lg">How It Works</a></div></div>
<div class="svz-motif"><div class="svz-panel"><div class="svz-topbar"><div class="svz-dots"><span style="background:var(--red)"></span><span style="background:var(--yellow)"></span><span style="background:var(--green)"></span></div><div class="svz-title">security-viz &mdash; unified posture</div></div><div class="svz-body"><div class="svz-files"><div class="svz-file"><span class="ext csv">CSV</span> firewall_logs</div><div class="svz-file"><span class="ext xls">XLSX</span> edr_alerts</div><div class="svz-file"><span class="ext csv">CSV</span> vuln_scan</div><div class="svz-file"><span class="ext xls">XLSX</span> dlp_flags</div></div><div class="svz-flow"><div class="svz-flow-dots"><span></span><span></span><span></span></div><div class="svz-normalizer"><span class="ico">&#x2699;&#xFE0F;</span><span class="lbl">Normalize</span></div><div class="svz-flow-dots"><span></span><span></span><span></span></div></div><div class="svz-dash"><div class="svz-dash-head"><span class="svz-dash-title">Findings by Severity</span><span class="svz-live">Live</span></div><div class="svz-bars"><div class="svz-bar-row"><span class="svz-bar-l">Critical</span><div class="svz-bar-track"><div class="svz-bar crit"></div></div></div><div class="svz-bar-row"><span class="svz-bar-l">High</span><div class="svz-bar-track"><div class="svz-bar high"></div></div></div><div class="svz-bar-row"><span class="svz-bar-l">Medium</span><div class="svz-bar-track"><div class="svz-bar med"></div></div></div><div class="svz-bar-row"><span class="svz-bar-l">Low</span><div class="svz-bar-track"><div class="svz-bar low"></div></div></div></div><div class="svz-trend"><span style="height:35%"></span><span style="height:55%"></span><span style="height:42%"></span><span style="height:70%"></span><span style="height:58%"></span><span style="height:85%"></span><span style="height:64%"></span><span style="height:92%"></span></div></div></div></div><div class="svz-chip svz-chip-1"><span class="d"></span> 4 sources normalized</div><div class="svz-chip svz-chip-2"><span class="d"></span> Data never leaves your environment</div></div></div></div></section>

<section class="svz-overview"><div class="container"><div class="svz-overview-inner reveal"><p>Most mid-sized organizations run a patchwork of security tools &mdash; firewalls, EDR, vulnerability scanners, DLP, IAM logs &mdash; that don&rsquo;t talk to each other and rarely export in the same format. Instead of forcing costly API integrations across every vendor, our system ingests the <strong>CSV/Excel reports your tools already produce</strong>, normalizes them into a single schema, and surfaces everything in <strong>one visual dashboard</strong>.</p></div></div></section>

<section class="timeline-section" id="how-it-works"><div class="container"><div class="section-header reveal"><div class="section-badge"><span class="section-badge-dot"></span> How It Works</div><h2 class="section-title">From Raw Exports to <span class="accent">One Live Picture</span></h2></div><div class="timeline"><div class="timeline-step reveal delay-1"><div class="timeline-dot"></div><h3>Drop-in Ingestion</h3><p>Export reports from your existing tools &mdash; firewall logs, EDR alerts, scanner output, DLP flags &mdash; as CSV/Excel and drop them into a watched folder.</p></div><div class="timeline-step reveal delay-2"><div class="timeline-dot"></div><h3>Automated Normalization</h3><p>Findings are parsed, de-duplicated, and mapped into a unified schema regardless of source tool or vendor.</p></div><div class="timeline-step reveal delay-3"><div class="timeline-dot"></div><h3>Self-Hosted Deployment</h3><p>Ships as a containerized stack that runs on the client&rsquo;s own infrastructure &mdash; no data leaves their environment.</p></div><div class="timeline-step reveal delay-4"><div class="timeline-dot"></div><h3>Live Dashboard</h3><p>A clear, real-time view of findings by severity, source, and trend over time.</p></div><div class="timeline-step reveal delay-5"><div class="timeline-dot"></div><h3>Ingestion &amp; Processing History</h3><p>Full traceability of what was ingested, when, and from where.</p></div></div></div></section>

<section class="benefits-section"><div class="container"><div class="section-header reveal"><div class="section-badge"><span class="section-badge-dot"></span> Key Differentiators</div><h2 class="section-title">Why Teams <span class="accent">Choose It</span></h2></div><div class="svz-diff-grid">
<div class="feature-card reveal delay-1"><div class="feature-icon orange">&#x1F517;</div><h3>No Vendor Lock-In</h3><p>No dependency on vendor APIs or expensive licensing.</p></div>
<div class="feature-card reveal delay-2"><div class="feature-icon green">&#x1F4C4;</div><h3>Works With What You Have</h3><p>Works with tools that only offer CSV/Excel export &mdash; which is most of them.</p></div>
<div class="feature-card reveal delay-1"><div class="feature-icon blue">&#x1F3E0;</div><h3>Data Sovereignty</h3><p>Deployed entirely within the client&rsquo;s environment &mdash; your data never leaves your infrastructure.</p></div>
<div class="feature-card reveal delay-2"><div class="feature-icon purple">&#x1F3A8;</div><h3>Purpose-Built Design</h3><p>Visual design tailored to each client&rsquo;s data &mdash; not a recycled generic BI dashboard.</p></div>
</div></div></section>

<section class="benefits-section" style="padding-top:0"><div class="container"><div class="section-header reveal"><div class="section-badge"><span class="section-badge-dot"></span> Use Cases</div><h2 class="section-title">Where It <span class="accent">Fits</span></h2></div><div class="svz-uses-grid">
<div class="feature-card reveal delay-1"><div class="feature-icon teal">&#x1F441;&#xFE0F;</div><h3>Consolidated Visibility</h3><p>One picture of security posture for teams without a mature monitoring stack.</p></div>
<div class="feature-card reveal delay-2"><div class="feature-icon orange">&#x1F4CA;</div><h3>Leadership Reporting</h3><p>Board and leadership-level reporting on security posture &mdash; without manual spreadsheet wrangling.</p></div>
<div class="feature-card reveal delay-3"><div class="feature-icon green">&#x2705;</div><h3>Compliance &amp; Audit Feeds</h3><p>Feed structured findings data into compliance and audit workflows &mdash; ISO 27001, SOC 2, DPDPA.</p></div>
</div></div></section>

<section class="cta-section"><div class="cta-glow-1"></div><div class="cta-glow-2"></div><div class="container"><div class="cta-content reveal"><h2>Your Exports. <span class="accent">One Dashboard.</span></h2><p>See a live demo of how your existing tool exports become a single security dashboard.</p><div class="cta-buttons"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">See a Live Demo <span class="btn-icon">&rarr;</span></a><a href="/contact" class="btn btn-outline btn-lg">Talk to an Expert <span class="btn-icon">&rarr;</span></a></div></div></div></section>
      `}} />

      <Script src="/assets/js/animations.js" strategy="afterInteractive" />
    </>
  )
}
