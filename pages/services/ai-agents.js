import Head from 'next/head'
import Script from 'next/script'

export default function ServiceAiAgentsPage() {
  return (
    <>
      <Head>
        <title>Custom Cybersecurity AI Agents &amp; Agentic Workflows — SecComply</title>
        <meta name="description" content="Stop drowning in repetitive security work. SecComply builds custom AI agents that automate firewall reviews, vendor risk, audits &amp; more — securely." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="AI Agents Built for Your Security Team — SecComply" />
        <meta property="og:description" content="Custom-built cybersecurity AI agents and agentic workflows that plug into your existing stack and operate within your policies. From firewall analysis to vendor reviews — automated, auditable, secure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seccomply.net/services/ai-agents" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Agents Built for Your Security Team — SecComply" />
        <meta name="twitter:description" content="Custom-built cybersecurity AI agents and agentic workflows that plug into your existing stack and operate within your policies." />
        <link rel="canonical" href="https://seccomply.net/services/ai-agents" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: `{"@context":"https://schema.org","@type":"Service","name":"AI Agents & Agentic Workflows","description":"Custom-built cybersecurity AI agents and agentic workflows that automate firewall reviews, vendor risk assessments, access recertifications, and more.","provider":{"@type":"Organization","name":"SecComply","url":"https://seccomply.net"},"areaServed":"Worldwide","url":"https://seccomply.net/services/ai-agents"}`}}
        />
        <style dangerouslySetInnerHTML={{__html: `
/* ── AI Agents — page-scoped styles ────────────────────── */

/* Hero two-column layout */
.ai-agents-hero { text-align:left; padding:140px 0 80px; }
.ai-agents-hero-inner {
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:56px;
  align-items:center;
  position:relative;
  z-index:2;
}
.ai-agents-hero .hero-content { text-align:left; max-width:none; margin:0; }
.ai-agents-hero .hero-sub { margin-left:0; max-width:540px; }
.ai-agents-hero .hero-ctas { justify-content:flex-start; }
.ai-agents-hero-motif { display:flex; justify-content:center; align-items:center; overflow:visible; }

/* Gradient mesh background (GPU: transform + opacity only) */
.ai-mesh-bg { position:absolute; inset:0; z-index:0; overflow:hidden; pointer-events:none; }
.ai-mesh-layer { position:absolute; border-radius:50%; filter:blur(100px); will-change:transform,opacity; pointer-events:none; }
.ai-mesh-l1 { width:600px; height:600px; background:rgba(20,184,166,0.10); top:-150px; left:-100px; animation:aiMesh1 60s ease-in-out infinite; }
.ai-mesh-l2 { width:500px; height:500px; background:rgba(124,92,255,0.07); top:-80px; right:-80px; animation:aiMesh2 60s ease-in-out infinite 20s; }
.ai-mesh-l3 { width:400px; height:400px; background:rgba(0, 129, 242,0.05); bottom:-60px; left:40%; animation:aiMesh3 60s ease-in-out infinite 40s; }
@keyframes aiMesh1 { 0%,100%{ transform:translate(0,0); opacity:0.7; } 50%{ transform:translate(80px,40px); opacity:1; } }
@keyframes aiMesh2 { 0%,100%{ transform:translate(0,0); opacity:0.5; } 50%{ transform:translate(-60px,50px); opacity:0.8; } }
@keyframes aiMesh3 { 0%,100%{ transform:translate(0,0); opacity:0.4; } 50%{ transform:translate(40px,-50px); opacity:0.7; } }

/* Badge violet dot (only #7C5CFF usage on this page) */
.ai-badge-dot { width:6px; height:6px; border-radius:50%; background:#7C5CFF; display:inline-block; flex-shrink:0; animation:pulse 2s infinite; }

/* Trust strip */
.ai-trust-strip { margin-top:16px; font-size:0.8rem; color:var(--text-muted); line-height:1.6; }
.ai-trust-strip a { color:var(--text-secondary); text-decoration:underline; text-underline-offset:2px; text-decoration-color:rgba(148,163,184,0.3); transition:color 0.2s; }
.ai-trust-strip a:hover { color:var(--accent-light); }

/* Orchestration motif SVG */
.ai-motif-svg { width:100%; max-width:480px; overflow:visible; }
.ai-node-glow { animation:aiVioletPulse 3s ease-in-out infinite; }
@keyframes aiVioletPulse { 0%,100%{ opacity:0.25; } 50%{ opacity:0.65; } }

/* Ticket pill animations — 20s cycle, 5 pills x 4s visible each */
@keyframes aiTicket0 {
  0%   { transform:translate(151px,47px); opacity:0; }
  5%   { opacity:1; }
  15%  { opacity:1; }
  20%  { transform:translate(-29px,247px); opacity:0; }
  100% { transform:translate(-29px,247px); opacity:0; }
}
@keyframes aiTicket1 {
  0%,20% { transform:translate(-14px,247px); opacity:0; }
  25%    { opacity:1; }
  35%    { opacity:1; }
  40%    { transform:translate(346px,247px); opacity:0; }
  100%   { transform:translate(346px,247px); opacity:0; }
}
@keyframes aiTicket2 {
  0%,40% { transform:translate(341px,247px); opacity:0; }
  45%    { opacity:1; }
  55%    { opacity:1; }
  60%    { transform:translate(161px,47px); opacity:0; }
  100%   { transform:translate(161px,47px); opacity:0; }
}
@keyframes aiTicket3 {
  0%,60% { transform:translate(176px,47px); opacity:0; }
  65%    { opacity:1; }
  75%    { opacity:1; }
  80%    { transform:translate(356px,247px); opacity:0; }
  100%   { transform:translate(356px,247px); opacity:0; }
}
@keyframes aiTicket4 {
  0%,80% { transform:translate(1px,247px); opacity:0; }
  85%    { opacity:1; }
  95%    { opacity:1; }
  100%   { transform:translate(181px,47px); opacity:0; }
}
.ai-t0 { animation:aiTicket0 20s linear infinite; }
.ai-t1 { animation:aiTicket1 20s linear infinite; }
.ai-t2 { animation:aiTicket2 20s linear infinite; }
.ai-t3 { animation:aiTicket3 20s linear infinite; }
.ai-t4 { animation:aiTicket4 20s linear infinite; }

/* Agent showcase section */
.ai-showcase-section { padding:80px 0; background:var(--bg-primary); }
.ai-showcase-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-bottom:28px; }
.ai-showcase-card {
  background:var(--bg-card);
  border:1px solid var(--border);
  border-radius:var(--radius-lg);
  padding:28px;
  position:relative;
  transition:transform 0.3s var(--ease-out), box-shadow 0.3s var(--ease-out), border-color 0.3s;
  display:flex; flex-direction:column;
}
.ai-showcase-card:hover { transform:translateY(-4px); box-shadow:var(--shadow-lg); border-color:rgba(20,184,166,0.2); }
.ai-showcase-card:hover .ai-card-connects { color:var(--text-secondary); }
.ai-card-tag {
  display:inline-block; align-self:flex-start;
  padding:3px 10px; margin-bottom:10px;
  background:rgba(255,255,255,0.04); border:1px solid var(--border);
  border-radius:var(--radius-full);
  font-size:0.68rem; font-weight:600; color:var(--text-muted);
  text-transform:uppercase; letter-spacing:0.04em; white-space:nowrap;
}
.ai-card-name { color:var(--white); font-size:1.05rem; font-weight:600; margin:0 0 10px; line-height:1.4; }
.ai-card-desc { color:var(--text-secondary); font-size:0.875rem; line-height:1.65; margin-bottom:18px; }
.ai-card-automates-label { font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:9px; }
.ai-card-list { list-style:none; padding:0; margin:0 0 18px; display:flex; flex-direction:column; gap:7px; flex:1; }
.ai-card-list li { display:flex; align-items:flex-start; gap:8px; font-size:0.84rem; color:var(--text-secondary); line-height:1.5; }
.ai-card-check { color:var(--green); font-weight:700; flex-shrink:0; }
.ai-card-divider { height:1px; background:var(--border); margin-bottom:12px; }
.ai-card-connects { font-size:0.78rem; color:var(--text-muted); transition:color 0.3s; }
.ai-showcase-closing { text-align:center; font-style:italic; color:var(--text-muted); font-size:0.9rem; padding:0 20px; }

/* Who this is for */
.ai-for-section { padding:80px 0; background:var(--bg-secondary); }
.ai-for-grid { display:grid; grid-template-columns:1fr 1fr; gap:28px; margin-top:40px; }
.ai-for-col { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); padding:32px; }
.ai-for-col-header { display:flex; align-items:center; gap:10px; margin-bottom:20px; font-size:1rem; font-weight:700; color:var(--white); }
.ai-for-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:12px; }
.ai-for-list li { display:flex; align-items:flex-start; gap:10px; font-size:0.88rem; color:var(--text-secondary); line-height:1.5; }
.ai-for-yes { color:var(--green); font-weight:700; flex-shrink:0; }
.ai-for-no { color:var(--red); font-weight:700; flex-shrink:0; }

/* Responsive */
@media (max-width:1024px) {
  .ai-showcase-grid { grid-template-columns:repeat(2,1fr); }
}
@media (max-width:768px) {
  .ai-agents-hero { text-align:center; padding:120px 0 60px; }
  .ai-agents-hero-inner { grid-template-columns:1fr; gap:32px; }
  .ai-agents-hero-motif { order:-1; }
  .ai-motif-svg { max-width:280px; }
  .ai-agents-hero .hero-sub { max-width:none; margin:0 auto 24px; }
  .ai-agents-hero .hero-ctas { justify-content:center; }
  .ai-for-grid { grid-template-columns:1fr; }
}
@media (max-width:640px) {
  .ai-showcase-grid { grid-template-columns:1fr; }
}

/* Reduced motion */
@media (prefers-reduced-motion:reduce) {
  .ai-mesh-l1,.ai-mesh-l2,.ai-mesh-l3 { animation:none !important; }
  .ai-node-glow { animation:none !important; opacity:0.3; }
  .ai-t0,.ai-t1,.ai-t2,.ai-t4 { display:none; }
  .ai-t3 { animation:none !important; transform:translate(176px,47px); opacity:1; }
}

/* ── Firewall Pipeline Diagram ───────────────────────────── */
.ag-section { padding:80px 0; background:var(--bg-secondary); }
.ag-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius-lg); overflow:hidden; }
.ag-card-header { display:flex; flex-wrap:wrap; gap:8px; padding:14px 24px; background:rgba(0,0,0,0.2); border-bottom:1px solid var(--border); }
.ag-badge-pill { padding:4px 12px; background:rgba(20,184,166,0.08); border:1px solid rgba(20,184,166,0.18); border-radius:20px; font-size:0.72rem; font-weight:600; color:var(--teal); }
/* Zone bar */
.ag-zones { display:flex; align-items:center; padding:8px 28px; border-bottom:1px solid var(--border); background:rgba(0,0,0,0.15); gap:0; }
.ag-zone { font-size:0.65rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; }
.ag-zone-admin { color:rgba(0, 129, 242,0.65); flex:0 0 108px; }
.ag-zone-agent { flex:1; text-align:center; color:rgba(20,184,166,0.65); }
.ag-zone-sys { color:rgba(148,163,184,0.5); flex:0 0 116px; text-align:right; }
/* Pipeline scroll */
.ag-pipe-scroll { overflow-x:auto; padding:28px 24px 12px; scrollbar-width:thin; scrollbar-color:rgba(255,255,255,0.08) transparent; }
.ag-pipe-row { display:flex; align-items:flex-start; min-width:840px; }
/* Node */
.ag-pipe-node { flex-shrink:0; width:108px; display:flex; flex-direction:column; align-items:center; }
.ag-pipe-box {
  width:88px; height:88px;
  background:rgba(15,23,42,0.85);
  border:1px solid rgba(255,255,255,0.07);
  border-radius:16px;
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:5px;
  position:relative; overflow:hidden;
  transition:transform 0.22s ease, border-color 0.22s, box-shadow 0.22s;
}
.ag-pipe-box::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; border-radius:0 0 2px 2px; }
.ag-pipe-box:hover { transform:translateY(-4px); border-color:rgba(255,255,255,0.13); box-shadow:0 12px 32px rgba(0,0,0,0.4); }
.ag-pipe-icon { font-size:1.75rem; line-height:1; display:block; }
.ag-pipe-short { font-size:0.62rem; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; color:var(--text-muted); }
.ag-pipe-name { margin-top:10px; font-size:0.72rem; font-weight:600; color:var(--white); text-align:center; line-height:1.35; padding:0 4px; min-height:2.7em; }
/* Accent bottom bars */
.ag-n-orange .ag-pipe-box::after { background:var(--accent); }
.ag-n-teal   .ag-pipe-box::after { background:var(--teal); }
.ag-n-purple .ag-pipe-box::after { background:var(--purple); }
.ag-n-blue   .ag-pipe-box::after { background:#3B82F6; }
.ag-n-indigo .ag-pipe-box::after { background:#6366F1; }
.ag-n-yellow .ag-pipe-box::after { background:#F59E0B; }
.ag-n-green  .ag-pipe-box::after { background:var(--green); }
/* Gate node glow */
.ag-n-gate .ag-pipe-box { border-color:rgba(245,158,11,0.2); background:rgba(245,158,11,0.04); box-shadow:0 0 24px rgba(245,158,11,0.07); }
.ag-n-gate .ag-pipe-box:hover { border-color:rgba(245,158,11,0.35); box-shadow:0 12px 32px rgba(245,158,11,0.12); }
/* Connectors */
.ag-pipe-conn { flex:1; min-width:14px; height:88px; display:flex; align-items:center; position:relative; }
.ag-pipe-conn::before { content:''; position:absolute; top:50%; left:2px; right:2px; height:1px; background:rgba(255,255,255,0.07); }
.ag-pipe-conn::after { content:'›'; position:absolute; right:0; top:50%; transform:translateY(-53%); color:rgba(255,255,255,0.1); font-size:1rem; line-height:1; }
.ag-pipe-dot { position:absolute; top:50%; width:6px; height:6px; border-radius:50%; background:var(--teal); box-shadow:0 0 8px rgba(20,184,166,0.9); transform:translateY(-50%); animation:agPipeDot 2.2s ease-in-out infinite; }
@keyframes agPipeDot { 0%{ left:0; opacity:0; } 10%{ opacity:1; } 90%{ opacity:1; } 100%{ left:calc(100% - 6px); opacity:0; } }
/* System chips */
.ag-pipe-chips { display:flex; flex-direction:column; align-items:center; gap:5px; margin-top:8px; width:100%; }
.ag-pipe-vline { width:1px; height:18px; background:repeating-linear-gradient(to bottom,rgba(255,255,255,0.1) 0,rgba(255,255,255,0.1) 4px,transparent 4px,transparent 8px); }
.ag-chip { display:flex; align-items:center; gap:5px; padding:4px 8px 4px 5px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.07); border-radius:20px; white-space:nowrap; width:max-content; max-width:100px; }
.ag-chip.ag-chip-write { border-color:rgba(20,184,166,0.22); background:rgba(20,184,166,0.05); }
.ag-chip-ico { font-size:0.8rem; }
.ag-chip-name { font-size:0.64rem; font-weight:700; color:var(--text-secondary); line-height:1.2; display:block; }
.ag-chip-acc { font-size:0.57rem; font-family:var(--font-mono); color:var(--text-muted); display:block; }
.ag-chip.ag-chip-write .ag-chip-name { color:var(--teal); }
.ag-chip.ag-chip-write .ag-chip-acc { color:rgba(20,184,166,0.65); }
/* Stats bar */
.ag-stats-bar { display:flex; align-items:center; justify-content:space-around; padding:20px 24px; background:rgba(0,0,0,0.25); border-top:1px solid var(--border); flex-wrap:wrap; gap:16px; }
.ag-stat { text-align:center; }
.ag-stat-val { display:block; font-size:1.25rem; font-weight:800; color:var(--white); line-height:1; margin-bottom:4px; }
.ag-stat-sub { display:block; font-size:0.7rem; color:var(--text-muted); line-height:1.3; }
.ag-stat-divider { width:1px; height:40px; background:var(--border); flex-shrink:0; }
@media (max-width:768px) {
  .ag-zones { display:none; }
  .ag-pipe-conn { height:28px; transform:rotate(90deg); flex:none; }
  .ag-pipe-row { flex-direction:column; align-items:center; min-width:0; }
  .ag-pipe-chips { display:none; }
  .ag-stat-divider { display:none; }
}
@media (prefers-reduced-motion:reduce) {
  .ag-pipe-dot { animation:none !important; left:50% !important; opacity:0.35; }
  .ag-pipe-box { transition:none !important; }
}
        `}} />
      </Head>

      <div dangerouslySetInnerHTML={{__html: `

<!-- ════════════════════════════════════════════════════════
     SECTION A — HERO
════════════════════════════════════════════════════════ -->
<section class="service-hero ai-agents-hero">
  <div class="hero-grid"></div>
  <div class="hero-glow hero-glow-1"></div>
  <div class="hero-glow hero-glow-2"></div>
  <div class="hero-glow-center"></div>
  <div class="hero-glow-ring"></div>
  <div class="ai-mesh-bg" aria-hidden="true">
    <div class="ai-mesh-layer ai-mesh-l1"></div>
    <div class="ai-mesh-layer ai-mesh-l2"></div>
    <div class="ai-mesh-layer ai-mesh-l3"></div>
  </div>
  <div class="container">
    <div class="ai-agents-hero-inner">

      <!-- Left: text content -->
      <div class="ai-agents-hero-text">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="ai-badge-dot"></span>&nbsp; AI AGENT ENGINEERING
          </div>
          <h1>Cybersecurity AI Agents,<br>Built Around Your Stack.</h1>
          <p class="hero-sub">Custom AI agents and agentic workflows engineered by SecComply — designed to automate the repetitive, high-volume security work draining your team, while staying inside your policies, your tools, and your guardrails.</p>
          <div class="hero-ctas">
            <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Scope Your First Agent <span class="btn-icon">&rarr;</span></a>
            <a href="#use-cases" class="btn btn-outline btn-lg">&#9654; See Use Cases</a>
          </div>
          <p class="ai-trust-strip">Built on the same engineering rigour behind SecComply's AI Governance, <a href="/services/iso-42001">ISO 42001</a>, and <a href="/services/dpdp">DPDPA</a> practices.</p>
        </div>
      </div>

      <!-- Right: orchestration motif -->
      <div class="ai-agents-hero-motif">
        <svg aria-hidden="true" role="img" aria-label="" class="ai-motif-svg" viewBox="0 0 480 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="aiTealGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="rgba(20,184,166,0.9)"/>
              <stop offset="100%" stop-color="rgba(20,184,166,0.25)"/>
            </radialGradient>
          </defs>

          <!-- Connection lines (dotted, muted border colour) -->
          <line x1="240" y1="60" x2="60" y2="260" stroke="rgba(148,163,184,0.18)" stroke-width="1.5" stroke-dasharray="5 4"/>
          <line x1="240" y1="60" x2="420" y2="260" stroke="rgba(148,163,184,0.18)" stroke-width="1.5" stroke-dasharray="5 4"/>
          <line x1="60" y1="260" x2="420" y2="260" stroke="rgba(148,163,184,0.18)" stroke-width="1.5" stroke-dasharray="5 4"/>

          <!-- Agent node — top centre -->
          <circle class="ai-node-glow" cx="240" cy="60" r="40" fill="rgba(124,92,255,0.08)" stroke="#7C5CFF" stroke-width="1"/>
          <circle cx="240" cy="60" r="28" fill="url(#aiTealGrad)"/>
          <text x="240" y="65" text-anchor="middle" fill="rgba(248,250,252,0.95)" font-size="10" font-family="Inter,sans-serif" font-weight="700" letter-spacing="0.05em">AGENT</text>
          <text x="240" y="107" text-anchor="middle" fill="rgba(148,163,184,0.75)" font-size="11" font-family="Inter,sans-serif" font-weight="500">Agent</text>

          <!-- Tools node — bottom left -->
          <circle class="ai-node-glow" cx="60" cy="260" r="40" fill="rgba(124,92,255,0.08)" stroke="#7C5CFF" stroke-width="1" style="animation-delay:1.1s"/>
          <circle cx="60" cy="260" r="28" fill="url(#aiTealGrad)"/>
          <text x="60" y="265" text-anchor="middle" fill="rgba(248,250,252,0.95)" font-size="10" font-family="Inter,sans-serif" font-weight="700" letter-spacing="0.05em">TOOLS</text>
          <text x="60" y="308" text-anchor="middle" fill="rgba(148,163,184,0.75)" font-size="11" font-family="Inter,sans-serif" font-weight="500">Tools</text>

          <!-- Guardrails node — bottom right -->
          <circle class="ai-node-glow" cx="420" cy="260" r="40" fill="rgba(124,92,255,0.08)" stroke="#7C5CFF" stroke-width="1" style="animation-delay:2.2s"/>
          <circle cx="420" cy="260" r="28" fill="url(#aiTealGrad)"/>
          <text x="420" y="265" text-anchor="middle" fill="rgba(248,250,252,0.95)" font-size="9" font-family="Inter,sans-serif" font-weight="700" letter-spacing="0.05em">GUARD</text>
          <text x="420" y="308" text-anchor="middle" fill="rgba(148,163,184,0.75)" font-size="11" font-family="Inter,sans-serif" font-weight="500">Guardrails</text>

          <!-- Ticket pill 0 — "Firewall rule review queued" Agent→Tools (w=178) -->
          <g class="ai-t0">
            <rect x="0" y="0" width="178" height="26" rx="13" fill="#0F172A" stroke="rgba(20,184,166,0.4)" stroke-width="1"/>
            <text x="89" y="17" text-anchor="middle" fill="rgba(226,232,240,0.9)" font-size="9.5" font-family="Inter,sans-serif">Firewall rule review queued</text>
          </g>

          <!-- Ticket pill 1 — "Vendor SAQ drafted" Tools→Guardrails (w=148) -->
          <g class="ai-t1">
            <rect x="0" y="0" width="148" height="26" rx="13" fill="#0F172A" stroke="rgba(20,184,166,0.4)" stroke-width="1"/>
            <text x="74" y="17" text-anchor="middle" fill="rgba(226,232,240,0.9)" font-size="9.5" font-family="Inter,sans-serif">Vendor SAQ drafted</text>
          </g>

          <!-- Ticket pill 2 — "Access drift detected" Guardrails→Agent (w=158) -->
          <g class="ai-t2">
            <rect x="0" y="0" width="158" height="26" rx="13" fill="#0F172A" stroke="rgba(20,184,166,0.4)" stroke-width="1"/>
            <text x="79" y="17" text-anchor="middle" fill="rgba(226,232,240,0.9)" font-size="9.5" font-family="Inter,sans-serif">Access drift detected</text>
          </g>

          <!-- Ticket pill 3 — "Evidence pulled" Agent→Guardrails (w=128) -->
          <g class="ai-t3">
            <rect x="0" y="0" width="128" height="26" rx="13" fill="#0F172A" stroke="rgba(20,184,166,0.4)" stroke-width="1"/>
            <text x="64" y="17" text-anchor="middle" fill="rgba(226,232,240,0.9)" font-size="9.5" font-family="Inter,sans-serif">Evidence pulled</text>
          </g>

          <!-- Ticket pill 4 — "Alert triaged" Tools→Agent (w=118) -->
          <g class="ai-t4">
            <rect x="0" y="0" width="118" height="26" rx="13" fill="#0F172A" stroke="rgba(20,184,166,0.4)" stroke-width="1"/>
            <text x="59" y="17" text-anchor="middle" fill="rgba(226,232,240,0.9)" font-size="9.5" font-family="Inter,sans-serif">Alert triaged</text>
          </g>
        </svg>
      </div>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION B — WHY NOW / PROBLEM
════════════════════════════════════════════════════════ -->
<section class="benefits-section">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-badge"><span class="section-badge-dot"></span> Why Now</div>
      <h2 class="section-title">Your security team isn't slow. It's overloaded.</h2>
      <p class="section-desc">Every modern security team is buried under work that's high-volume, repetitive, and surprisingly hard to outsource — firewall rule reviews, vendor security questionnaires, access recertifications, log triage, evidence collection, control testing. The work is judgment-light but context-heavy. Hiring more people is slow and expensive. Buying more SaaS adds another dashboard to ignore. AI agents are the third option — purpose-built for your context, operating inside guardrails your CISO and legal team will sign off on.</p>
    </div>
    <div class="benefits-grid">
      <div class="feature-card reveal delay-1">
        <div class="feature-icon orange">&#x23F1;&#xFE0F;</div>
        <h3>The Toil Problem</h3>
        <p>Up to 60% of a security analyst's week is spent on tasks an agent could handle — leaving the high-judgment work starved for time.</p>
      </div>
      <div class="feature-card reveal delay-2">
        <div class="feature-icon purple">&#x1F9E0;</div>
        <h3>The Context Problem</h3>
        <p>Off-the-shelf AI tools don't know your firewall taxonomy, your vendor tiers, or your control library. Custom agents do.</p>
      </div>
      <div class="feature-card reveal delay-3">
        <div class="feature-icon teal">&#x1F510;</div>
        <h3>The Trust Problem</h3>
        <p>Generic AI raises governance, data-leakage, and audit concerns. Agents we build are scoped, logged, and operate inside your guardrails by design.</p>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION C — WHAT WE BUILD (AGENT SHOWCASE)
════════════════════════════════════════════════════════ -->
<section class="ai-showcase-section" id="use-cases">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-badge"><span class="section-badge-dot"></span> What We Build</div>
      <h2 class="section-title">Agents that do the work — not just describe it.</h2>
      <p class="section-desc">Each agent is custom-engineered for one job, plugged into your existing tools, and bounded by your existing policies. You stay in control. The agent does the legwork.</p>
    </div>

    <div class="ai-showcase-grid">

      <!-- Card 1 -->
      <div class="ai-showcase-card reveal delay-1">
        <span class="ai-card-tag">Network Security</span>
        <h3 class="ai-card-name">Firewall Rule Review Agent</h3>
        <p class="ai-card-desc">Reads your firewall rule base, flags shadowed or overly permissive rules, drafts cleanup recommendations, and prepares change tickets for human approval.</p>
        <p class="ai-card-automates-label">What it automates</p>
        <ul class="ai-card-list">
          <li><span class="ai-card-check">&#10003;</span> Quarterly firewall rule certifications</li>
          <li><span class="ai-card-check">&#10003;</span> Detection of shadowed, redundant, and stale rules</li>
          <li><span class="ai-card-check">&#10003;</span> Drafting of CR tickets in your change-management tool</li>
        </ul>
        <div class="ai-card-divider"></div>
        <p class="ai-card-connects"><strong>Connects to:</strong> Palo Alto &middot; Fortinet &middot; Cisco ASA &middot; ServiceNow</p>
      </div>

      <!-- Card 2 -->
      <div class="ai-showcase-card reveal delay-2">
        <span class="ai-card-tag">Third-Party Risk</span>
        <h3 class="ai-card-name">Vendor Security Questionnaire Agent</h3>
        <p class="ai-card-desc">Auto-fills inbound security questionnaires (CAIQ, SIG, custom) from your trust centre, evidence vault, and policy library — with confidence scores and human review on edge cases.</p>
        <p class="ai-card-automates-label">What it automates</p>
        <ul class="ai-card-list">
          <li><span class="ai-card-check">&#10003;</span> First-pass answers across 200+ question banks</li>
          <li><span class="ai-card-check">&#10003;</span> Mapping new questions to existing controls</li>
          <li><span class="ai-card-check">&#10003;</span> Surfacing answers that need human judgement</li>
        </ul>
        <div class="ai-card-divider"></div>
        <p class="ai-card-connects"><strong>Connects to:</strong> OneTrust &middot; Whistic &middot; SecurityScorecard &middot; SharePoint</p>
      </div>

      <!-- Card 3 -->
      <div class="ai-showcase-card reveal delay-3">
        <span class="ai-card-tag">Identity &amp; Access</span>
        <h3 class="ai-card-name">Access Review &amp; Recertification Agent</h3>
        <p class="ai-card-desc">Pulls user-to-resource mappings, flags toxic combinations and orphaned access, drafts recertification campaigns, and chases reviewers — without you opening a spreadsheet.</p>
        <p class="ai-card-automates-label">What it automates</p>
        <ul class="ai-card-list">
          <li><span class="ai-card-check">&#10003;</span> Quarterly access recertifications</li>
          <li><span class="ai-card-check">&#10003;</span> Toxic combination &amp; SoD detection</li>
          <li><span class="ai-card-check">&#10003;</span> Reviewer nudge cycles in Slack or email</li>
        </ul>
        <div class="ai-card-divider"></div>
        <p class="ai-card-connects"><strong>Connects to:</strong> Okta &middot; Azure AD &middot; AWS IAM &middot; Slack</p>
      </div>

      <!-- Card 4 -->
      <div class="ai-showcase-card reveal delay-1">
        <span class="ai-card-tag">Compliance Ops</span>
        <h3 class="ai-card-name">Compliance Evidence Collector</h3>
        <p class="ai-card-desc">A long-running agent that watches your stack, pulls fresh evidence on a schedule, validates it against the right control, and files it where your auditor expects it.</p>
        <p class="ai-card-automates-label">What it automates</p>
        <ul class="ai-card-list">
          <li><span class="ai-card-check">&#10003;</span> Continuous evidence collection across cloud, code, and SaaS</li>
          <li><span class="ai-card-check">&#10003;</span> Mapping evidence to ISO 27001 / SOC 2 / DPDPA controls</li>
          <li><span class="ai-card-check">&#10003;</span> Expiry tracking and refresh scheduling</li>
        </ul>
        <div class="ai-card-divider"></div>
        <p class="ai-card-connects"><strong>Connects to:</strong> AWS &middot; GitHub &middot; Jira &middot; Drive</p>
      </div>

      <!-- Card 5 -->
      <div class="ai-showcase-card reveal delay-2">
        <span class="ai-card-tag">Detection &amp; Response</span>
        <h3 class="ai-card-name">SOC Alert Triage Agent</h3>
        <p class="ai-card-desc">Triages incoming SIEM alerts and threat-intel feeds, deduplicates noise, enriches with asset and owner context, and surfaces only what genuinely needs analyst eyes — with a first-line assessment already attached.</p>
        <p class="ai-card-automates-label">What it automates</p>
        <ul class="ai-card-list">
          <li><span class="ai-card-check">&#10003;</span> Alert deduplication and clustering</li>
          <li><span class="ai-card-check">&#10003;</span> Context enrichment (asset, owner, business impact)</li>
          <li><span class="ai-card-check">&#10003;</span> First-line triage notes for your SOC analyst</li>
        </ul>
        <div class="ai-card-divider"></div>
        <p class="ai-card-connects"><strong>Connects to:</strong> Splunk &middot; Sentinel &middot; CrowdStrike &middot; CMDB</p>
      </div>

      <!-- Card 6 -->
      <div class="ai-showcase-card reveal delay-3">
        <span class="ai-card-tag">Governance &amp; Docs</span>
        <h3 class="ai-card-name">Policy &amp; Standards Drafting Agent</h3>
        <p class="ai-card-desc">Drafts new policies, control standards, and playbooks against your house style — pulling from your existing library so nothing contradicts what's already approved.</p>
        <p class="ai-card-automates-label">What it automates</p>
        <ul class="ai-card-list">
          <li><span class="ai-card-check">&#10003;</span> First drafts of new policies &amp; SOPs</li>
          <li><span class="ai-card-check">&#10003;</span> Cross-referencing against existing approved documents</li>
          <li><span class="ai-card-check">&#10003;</span> Highlighting gaps against frameworks you're certified to</li>
        </ul>
        <div class="ai-card-divider"></div>
        <p class="ai-card-connects"><strong>Connects to:</strong> Confluence &middot; Notion &middot; SharePoint &middot; OneTrust</p>
      </div>

    </div>

    <p class="ai-showcase-closing">Don&rsquo;t see your use case? We build to your workflow, not a product catalogue. Most engagements start with a single high-value agent &mdash; scoped, piloted, and expanded from there.</p>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION C.5 — FIREWALL AGENT PIPELINE
════════════════════════════════════════════════════════ -->
<section class="ag-section">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-badge"><span class="section-badge-dot"></span> Live Example</div>
      <h2 class="section-title">The Firewall Review Agent, end-to-end.</h2>
      <p class="section-desc">Trigger a quarterly review on Monday morning. By lunchtime, a prioritised findings report and pre-drafted change requests are waiting in ServiceNow &mdash; without the agent ever writing to a firewall.</p>
    </div>
    <div class="ag-card reveal">
      <div class="ag-card-header">
        <span class="ag-badge-pill">&#x1F512; Read-only firewall access</span>
        <span class="ag-badge-pill">&#x23F8; Human approval gate</span>
        <span class="ag-badge-pill">&#x1FAB5; Immutable audit log</span>
        <span class="ag-badge-pill">&#x1F4EC; CRs auto-drafted to ServiceNow</span>
      </div>

      <!-- Zone labels -->
      <div class="ag-zones">
        <div class="ag-zone ag-zone-admin">Admin</div>
        <div class="ag-zone ag-zone-agent">&#x2014;&#x2014; AI Agent Orchestrator &#x2014;&#x2014;</div>
        <div class="ag-zone ag-zone-sys">Systems</div>
      </div>

      <!-- Horizontal pipeline -->
      <div class="ag-pipe-scroll">
        <div class="ag-pipe-row">

          <!-- Node 0: Admin -->
          <div class="ag-pipe-node ag-n-orange">
            <div class="ag-pipe-box"><span class="ag-pipe-icon">&#x1F9D1;&#x200D;&#x1F4BB;</span><span class="ag-pipe-short">Admin</span></div>
            <div class="ag-pipe-name">Trigger review</div>
          </div>
          <div class="ag-pipe-conn" aria-hidden="true"><div class="ag-pipe-dot" style="animation-delay:0s"></div></div>

          <!-- Node 1: Pull -->
          <div class="ag-pipe-node ag-n-teal">
            <div class="ag-pipe-box"><span class="ag-pipe-icon">&#x1F50C;</span><span class="ag-pipe-short">Pull</span></div>
            <div class="ag-pipe-name">Fetch rule bases</div>
            <div class="ag-pipe-chips">
              <div class="ag-pipe-vline"></div>
              <div class="ag-chip"><span class="ag-chip-ico">&#x1F525;</span><div><span class="ag-chip-name">Palo Alto</span><span class="ag-chip-acc">read-only</span></div></div>
              <div class="ag-chip"><span class="ag-chip-ico">&#x1F6E1;&#xFE0F;</span><div><span class="ag-chip-name">Fortinet</span><span class="ag-chip-acc">read-only</span></div></div>
              <div class="ag-chip"><span class="ag-chip-ico">&#x1F310;</span><div><span class="ag-chip-name">Cisco ASA</span><span class="ag-chip-acc">read-only</span></div></div>
            </div>
          </div>
          <div class="ag-pipe-conn" aria-hidden="true"><div class="ag-pipe-dot" style="animation-delay:0.37s"></div></div>

          <!-- Node 2: Analyse -->
          <div class="ag-pipe-node ag-n-purple">
            <div class="ag-pipe-box"><span class="ag-pipe-icon">&#x1F50D;</span><span class="ag-pipe-short">Analyse</span></div>
            <div class="ag-pipe-name">Flag risky rules</div>
          </div>
          <div class="ag-pipe-conn" aria-hidden="true"><div class="ag-pipe-dot" style="animation-delay:0.74s"></div></div>

          <!-- Node 3: Enrich -->
          <div class="ag-pipe-node ag-n-blue">
            <div class="ag-pipe-box"><span class="ag-pipe-icon">&#x1F3F7;&#xFE0F;</span><span class="ag-pipe-short">Enrich</span></div>
            <div class="ag-pipe-name">Map to CMDB &amp; owners</div>
            <div class="ag-pipe-chips">
              <div class="ag-pipe-vline"></div>
              <div class="ag-chip"><span class="ag-chip-ico">&#x1F5C4;&#xFE0F;</span><div><span class="ag-chip-name">CMDB</span><span class="ag-chip-acc">read-only</span></div></div>
            </div>
          </div>
          <div class="ag-pipe-conn" aria-hidden="true"><div class="ag-pipe-dot" style="animation-delay:1.11s"></div></div>

          <!-- Node 4: Draft -->
          <div class="ag-pipe-node ag-n-indigo">
            <div class="ag-pipe-box"><span class="ag-pipe-icon">&#x1F4DD;</span><span class="ag-pipe-short">Draft</span></div>
            <div class="ag-pipe-name">Findings &amp; CRs</div>
          </div>
          <div class="ag-pipe-conn" aria-hidden="true"><div class="ag-pipe-dot" style="animation-delay:1.48s"></div></div>

          <!-- Node 5: Gate -->
          <div class="ag-pipe-node ag-n-gate ag-n-yellow">
            <div class="ag-pipe-box"><span class="ag-pipe-icon">&#x23F8;</span><span class="ag-pipe-short">Gate</span></div>
            <div class="ag-pipe-name">Human approves</div>
          </div>
          <div class="ag-pipe-conn" aria-hidden="true"><div class="ag-pipe-dot" style="animation-delay:1.85s"></div></div>

          <!-- Node 6: File -->
          <div class="ag-pipe-node ag-n-green">
            <div class="ag-pipe-box"><span class="ag-pipe-icon">&#x2705;</span><span class="ag-pipe-short">File</span></div>
            <div class="ag-pipe-name">Submit &amp; seal log</div>
            <div class="ag-pipe-chips">
              <div class="ag-pipe-vline"></div>
              <div class="ag-chip ag-chip-write"><span class="ag-chip-ico">&#x1F4CB;</span><div><span class="ag-chip-name">ServiceNow</span><span class="ag-chip-acc">CR write</span></div></div>
            </div>
          </div>

        </div>
      </div>

      <div class="ag-stats-bar">
        <div class="ag-stat"><span class="ag-stat-val">&lt;&nbsp;2 hrs</span><span class="ag-stat-sub">vs. 2&ndash;3 days manually</span></div>
        <div class="ag-stat-divider"></div>
        <div class="ag-stat"><span class="ag-stat-val">100%</span><span class="ag-stat-sub">rules analysed, not sampled</span></div>
        <div class="ag-stat-divider"></div>
        <div class="ag-stat"><span class="ag-stat-val">0</span><span class="ag-stat-sub">firewall writes without approval</span></div>
        <div class="ag-stat-divider"></div>
        <div class="ag-stat"><span class="ag-stat-val">Audit-ready</span><span class="ag-stat-sub">full decision trail, always</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION D — HOW IT WORKS (4 PROCESS STEPS)
════════════════════════════════════════════════════════ -->
<section class="timeline-section">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-badge"><span class="section-badge-dot"></span> How It Works</div>
      <h2 class="section-title">From scoping call to live agent in 4&ndash;8 weeks.</h2>
    </div>
    <div class="timeline">
      <div class="timeline-item reveal delay-1">
        <div class="timeline-dot"></div>
        <h3>Discovery &amp; Scoping</h3>
        <p>We map the workflow end-to-end: who owns it today, how often it runs, which tools it touches, and where the toil sits. <strong style="color:var(--text-secondary)">Output: a one-page scope doc, a clear ROI hypothesis, and a go/no-go recommendation &mdash; before you spend a penny.</strong></p>
      </div>
      <div class="timeline-item reveal delay-2">
        <div class="timeline-dot"></div>
        <h3>Agent Design &amp; Guardrails</h3>
        <p>We design the agent&rsquo;s tool access, action boundaries, escalation paths, audit logging, and human-in-the-loop checkpoints. Every agent ships with a written governance spec &mdash; designed to clear ISO 42001, EU AI Act, and your internal AI-use policy.</p>
      </div>
      <div class="timeline-item reveal delay-3">
        <div class="timeline-dot"></div>
        <h3>Build, Integrate &amp; Pilot</h3>
        <p>We build the agent against your real tools (read-only first, write access on staged approval), run a 2-week shadow pilot alongside your team, and tune behaviour against real cases.</p>
      </div>
      <div class="timeline-item reveal delay-4">
        <div class="timeline-dot"></div>
        <h3>Deploy, Monitor &amp; Iterate</h3>
        <p>The agent goes live with full observability, drift monitoring, and a kill-switch. We hand over runbooks, train your team, and stay on retainer for tuning, expansion, or new agents.</p>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION E — TRUST, SAFETY & GOVERNANCE
════════════════════════════════════════════════════════ -->
<section class="benefits-section">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-badge"><span class="section-badge-dot"></span> Built Securely by Default</div>
      <h2 class="section-title">Every agent ships with the guardrails enterprises actually require.</h2>
      <p class="section-desc">We don&rsquo;t bolt governance on at the end &mdash; it&rsquo;s the first thing we design. SecComply&rsquo;s day job is governance, risk, and compliance. That same rigour goes into every agent we build.</p>
    </div>
    <div class="benefits-grid">
      <div class="feature-card reveal delay-1">
        <div class="feature-icon orange">&#x1FAB5;</div>
        <h3>Full Audit Logging</h3>
        <p>Every agent action &mdash; input, decision, tool call, output &mdash; written to immutable logs, exportable to your SIEM.</p>
      </div>
      <div class="feature-card reveal delay-2">
        <div class="feature-icon blue">&#x1F6A7;</div>
        <h3>Scoped Tool Access</h3>
        <p>Agents get least-privilege access to only the systems and actions they need. No standing admin credentials.</p>
      </div>
      <div class="feature-card reveal delay-3">
        <div class="feature-icon green">&#x1F464;</div>
        <h3>Human-in-the-Loop</h3>
        <p>High-impact actions require human approval by default. Approval thresholds tuned per workflow.</p>
      </div>
      <div class="feature-card reveal delay-1">
        <div class="feature-icon purple">&#x1F6D1;</div>
        <h3>Kill-Switch &amp; Pause</h3>
        <p>One-click disable. Built-in rate limits and circuit breakers stop runaway behaviour before it becomes an incident.</p>
      </div>
      <div class="feature-card reveal delay-2">
        <div class="feature-icon teal">&#x1F512;</div>
        <h3>Data Residency Controls</h3>
        <p>Choose where your agent runs, where prompts are processed, and which models are allowed to see your data.</p>
      </div>
      <div class="feature-card reveal delay-3">
        <div class="feature-icon orange">&#x1F4DC;</div>
        <h3>ISO 42001 Aligned</h3>
        <p>Every agent designed to map cleanly to <a href="/services/iso-42001" style="color:var(--accent-light);text-decoration:underline;text-underline-offset:2px">ISO 42001</a> AIMS controls &mdash; so it&rsquo;s audit-ready from day one.</p>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION F — WHO THIS IS FOR
════════════════════════════════════════════════════════ -->
<section class="ai-for-section">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-badge"><span class="section-badge-dot"></span> Is This For You?</div>
      <h2 class="section-title">Built for security teams that have outgrown checklists.</h2>
    </div>
    <div class="ai-for-grid">
      <div class="ai-for-col reveal delay-1">
        <div class="ai-for-col-header">
          <span style="font-size:1.3rem">&#x2705;</span> This is for you if&hellip;
        </div>
        <ul class="ai-for-list">
          <li><span class="ai-for-yes">&#10003;</span> You have a defined, repeating security workflow that takes hours each week</li>
          <li><span class="ai-for-yes">&#10003;</span> Your team is the bottleneck on audits, vendor reviews, or access certifications</li>
          <li><span class="ai-for-yes">&#10003;</span> You need the agent to live inside your stack &mdash; not on a separate vendor&rsquo;s cloud</li>
          <li><span class="ai-for-yes">&#10003;</span> You care about audit trails, data residency, and AI governance</li>
        </ul>
      </div>
      <div class="ai-for-col reveal delay-2">
        <div class="ai-for-col-header">
          <span style="font-size:1.3rem">&#x274C;</span> This isn&rsquo;t a fit if&hellip;
        </div>
        <ul class="ai-for-list">
          <li><span class="ai-for-no">&#10005;</span> You&rsquo;re looking for an off-the-shelf SaaS subscription</li>
          <li><span class="ai-for-no">&#10005;</span> You don&rsquo;t yet have the underlying process documented</li>
          <li><span class="ai-for-no">&#10005;</span> You want a generic chatbot to answer security questions</li>
          <li><span class="ai-for-no">&#10005;</span> Leadership is still working through the AI risk and governance case internally</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION G — FAQ ACCORDION
════════════════════════════════════════════════════════ -->
<section class="faq-section">
  <div class="container">
    <div class="section-header reveal">
      <div class="section-badge"><span class="section-badge-dot"></span> FAQ</div>
      <h2 class="section-title">Frequently Asked Questions</h2>
    </div>
    <div class="faq-list">

      <div class="faq-item">
        <button class="faq-question">How is this different from buying an AI security tool off the shelf? <span class="faq-icon">+</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">Off-the-shelf tools solve a generic version of a problem, then ask you to bend your workflow to fit. We build for your workflow, against your tools, inside your policies. The agent inherits your taxonomy, your risk thresholds, and your approval chains &mdash; so it produces output your team will actually trust and use.</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Which AI models do you build on? <span class="faq-icon">+</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">We&rsquo;re model-agnostic. Most engagements use a frontier model (Claude, GPT, Gemini) for reasoning, often combined with smaller, cheaper models for routine sub-steps. We pick what fits your data residency, latency, and cost requirements &mdash; and we&rsquo;ll happily build on a model you&rsquo;ve already approved internally.</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Will the agent have access to our production systems? <span class="faq-icon">+</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">Only what&rsquo;s strictly required, only with the privilege level you approve, and almost always read-only first. Write access &mdash; anything that changes state &mdash; is gated behind explicit approval workflows. Every action is logged. You can revoke access in one click.</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-question">How does this stay compliant with the EU AI Act, DPDPA, and our internal AI policy? <span class="faq-icon">+</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">Every agent we build ships with an ISO 42001-aligned governance spec &mdash; system inventory entry, risk assessment, impact assessment, model card, control mappings, and audit log schema. If you&rsquo;re already a SecComply AI governance client, this folds directly into your existing AIMS. If you&rsquo;re not, this is the right time to start.</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-question">How much does it cost? <span class="faq-icon">+</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">Each agent is custom-scoped, but most first engagements land between a defined fixed-fee build (typically 4&ndash;8 weeks) and a monthly retainer for monitoring, tuning, and iteration. We give you a one-page proposal with the build fee, retainer, and expected ROI before any commitment.</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Who owns the agent &mdash; us or you? <span class="faq-icon">+</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">You own the agent, the prompts, the workflow logic, and all the data. Code is delivered to your repo. We retain rights to anonymised, generalised patterns we develop along the way &mdash; never your data, your prompts, or your IP.</div></div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Can you work with agents we&rsquo;ve already started building? <span class="faq-icon">+</span></button>
        <div class="faq-answer"><div class="faq-answer-inner">Yes &mdash; and we often do. Many teams have prototyped with LangChain, n8n, Zapier AI, or in-house Python and hit a wall around governance, evaluation, or production reliability. We harden what you have rather than starting from scratch.</div></div>
      </div>

    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════
     SECTION H — CLOSING CTA
════════════════════════════════════════════════════════ -->
<section class="cta-section">
  <div class="cta-glow-1"></div>
  <div class="cta-glow-2"></div>
  <div class="container">
    <div class="cta-content reveal">
      <h2>Pick one workflow. We&rsquo;ll scope the <span class="accent">business case.</span></h2>
      <p>A 30-minute call with a SecComply engineer &mdash; not a salesperson. We&rsquo;ll assess whether your workflow is a strong candidate, sketch the architecture, and hand you a one-page proposal with a build timeline and ROI estimate. No commitment, no lock-in.</p>
      <div class="cta-buttons">
        <a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Book Your Scoping Call <span class="btn-icon">&rarr;</span></a>
        <a href="/pricing" class="btn btn-outline btn-lg">See Pricing <span class="btn-icon">&rarr;</span></a>
      </div>
      <p style="margin-top:16px;font-size:0.85rem;color:var(--text-muted)">Or email us at <a href="mailto:hello@seccomply.net" style="color:var(--text-secondary);text-decoration:underline;text-underline-offset:2px">hello@seccomply.net</a></p>
    </div>
  </div>
</section>

      `}} />

      <Script src="/assets/js/animations.js" strategy="afterInteractive" />
      <Script src="/assets/js/counters.js" strategy="afterInteractive" />
      <Script src="/assets/js/accordion.js" strategy="afterInteractive" />
      <Script src="/assets/js/effects.js" strategy="afterInteractive" />
    </>
  )
}
