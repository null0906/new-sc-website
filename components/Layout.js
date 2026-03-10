import { useEffect } from 'react'
import Head from 'next/head'

export default function Layout({ children }) {

  useEffect(() => {
    try {
      const s = document.createElement('script');
      s.textContent = `(function(){
/* === CURSOR SPOTLIGHT === */
var old=document.getElementById('cursor-spotlight');if(old)old.remove();
var spot=document.createElement('div');spot.id='cursor-spotlight';document.body.appendChild(spot);
var mx=0,my=0,sx=0,sy=0;
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY});
function animSpot(){sx+=(mx-sx)*0.08;sy+=(my-sy)*0.08;spot.style.left=sx+'px';spot.style.top=(sy+window.scrollY)+'px';requestAnimationFrame(animSpot)}
animSpot();

/* === CARD PROXIMITY GLOW === */
document.querySelectorAll('.feature-card,.service-card,.team-card,.resource-card,.fw-card,.step-card,.testi-card,.platform-visual').forEach(function(c){
  c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--glow-x',(e.clientX-r.left)+'px');c.style.setProperty('--glow-y',(e.clientY-r.top)+'px');c.classList.add('card-glow-active')});
  c.addEventListener('mouseleave',function(){c.classList.remove('card-glow-active')});
});

/* === HERO PARTICLE NETWORK === */
var hero=document.querySelector('.hero');
if(hero){
  var oldC=document.getElementById('hero-particles');if(oldC)oldC.remove();
  var cv=document.createElement('canvas');cv.id='hero-particles';cv.style.cssText='position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
  hero.style.position='relative';hero.insertBefore(cv,hero.firstChild);
  var ctx=cv.getContext('2d'),pts=[],hw,hh;
  function rz(){hw=hero.offsetWidth;hh=hero.offsetHeight;cv.width=hw;cv.height=hh}
  function initP(){pts=[];var n=Math.floor((hw*hh)/18000);for(var i=0;i<n;i++)pts.push({x:Math.random()*hw,y:Math.random()*hh,vx:(Math.random()-0.5)*0.4,vy:(Math.random()-0.5)*0.4,r:Math.random()*1.5+0.5,a:Math.random()*0.4+0.1})}
  function draw(){ctx.clearRect(0,0,hw,hh);
    for(var i=0;i<pts.length;i++){for(var j=i+1;j<pts.length;j++){var dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<120){ctx.beginPath();ctx.strokeStyle='rgba(232,99,43,'+(1-d/120)*0.12+')';ctx.lineWidth=0.5;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}}
    pts.forEach(function(p){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>hw)p.vx*=-1;if(p.y<0||p.y>hh)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(232,99,43,'+p.a+')';ctx.fill()});
    var hr=hero.getBoundingClientRect(),rx=mx-hr.left,ry=my-hr.top;
    if(rx>0&&rx<hw&&ry>0&&ry<hh){pts.forEach(function(p){var dx2=rx-p.x,dy2=ry-p.y,d2=Math.sqrt(dx2*dx2+dy2*dy2);if(d2<150){p.vx+=dx2*0.0003;p.vy+=dy2*0.0003}});var g=ctx.createRadialGradient(rx,ry,0,rx,ry,150);g.addColorStop(0,'rgba(232,99,43,0.08)');g.addColorStop(1,'rgba(232,99,43,0)');ctx.beginPath();ctx.arc(rx,ry,150,0,Math.PI*2);ctx.fillStyle=g;ctx.fill()}
    requestAnimationFrame(draw)}
  rz();initP();draw();window.addEventListener('resize',function(){rz();initP()});
}

/* === FLOATING GLOW ORBS === */
document.querySelectorAll('.services-section,.features-section,.cta-section,.frameworks-section').forEach(function(sec){
  if(sec.querySelector('.ambient-orb'))return;sec.style.position='relative';sec.style.overflow='hidden';
  var o1=document.createElement('div');o1.className='ambient-orb ambient-orb-1';sec.appendChild(o1);
  var o2=document.createElement('div');o2.className='ambient-orb ambient-orb-2';sec.appendChild(o2);
});

/* === MAGNETIC BUTTONS === */
document.querySelectorAll('.btn-primary,.btn-outline').forEach(function(b){
  b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*0.15+'px,'+(e.clientY-r.top-r.height/2)*0.15+'px)'});
  b.addEventListener('mouseleave',function(){b.style.transform='';b.style.transition='transform 0.4s cubic-bezier(.16,1,.3,1)';setTimeout(function(){b.style.transition=''},400)});
});

/* === CARD HOVER TILT === */
document.querySelectorAll('.feature-card,.service-card,.team-card,.resource-card,.fw-card,.step-card,.testi-card').forEach(function(c){
  c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();var x=((e.clientX-r.left)/r.width-0.5)*8;var y=((e.clientY-r.top)/r.height-0.5)*8;c.style.transform='translateY(-4px) perspective(600px) rotateX('+(-y)+'deg) rotateY('+x+'deg)'});
  c.addEventListener('mouseleave',function(){c.style.transform='';c.style.transition='transform 0.5s cubic-bezier(.16,1,.3,1)';setTimeout(function(){c.style.transition=''},500)});
});

/* === TEXT SCRAMBLE ON REVEAL === */
var scrObs=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){var el=entry.target,text=el.textContent,chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&*',iter=0;
var iv=setInterval(function(){el.textContent=text.split('').map(function(ch,i){if(i<iter)return text[i];if(ch===' ')return ' ';return chars[Math.floor(Math.random()*chars.length)]}).join('');if(iter>=text.length)clearInterval(iv);iter+=1.5},30);
scrObs.unobserve(el)}})},{threshold:0.5});
document.querySelectorAll('.section-title').forEach(function(el){scrObs.observe(el)});

/* === SCROLL PROGRESS BAR === */
var oldP=document.getElementById('scroll-progress');if(oldP)oldP.remove();
var pb=document.createElement('div');pb.id='scroll-progress';document.body.appendChild(pb);
window.addEventListener('scroll',function(){var st=window.scrollY,dh=document.documentElement.scrollHeight-window.innerHeight;pb.style.width=(st/dh)*100+'%'},{passive:true});

/* === BUTTON RIPPLE === */
if(!document.querySelector('#ripple-styles')){var rs=document.createElement('style');rs.id='ripple-styles';rs.textContent='@keyframes rippleExpand{to{transform:scale(4);opacity:0}}';document.head.appendChild(rs)}
document.querySelectorAll('.btn-primary,.btn-outline').forEach(function(b){b.addEventListener('click',function(e){var r=this.getBoundingClientRect(),rip=document.createElement('span');rip.style.cssText='position:absolute;border-radius:50%;background:rgba(255,255,255,0.25);width:100px;height:100px;left:'+(e.clientX-r.left-50)+'px;top:'+(e.clientY-r.top-50)+'px;transform:scale(0);animation:rippleExpand 0.6s ease-out forwards;pointer-events:none;';this.style.position='relative';this.style.overflow='hidden';this.appendChild(rip);setTimeout(function(){rip.remove()},600)})});

/* === ACTIVE NAV LINK === */
var cp=window.location.pathname;document.querySelectorAll('.nav-links a').forEach(function(l){var h=l.getAttribute('href');if(h&&h!=='/'&&h!=='#'&&cp.includes(h)){l.style.color='var(--white)'}});

/* === TEAM AVATAR FADE === */
document.querySelectorAll('.team-avatar img').forEach(function(img){img.style.opacity='0';img.style.transition='opacity 0.6s ease';if(img.complete){img.style.opacity='1'}else{img.addEventListener('load',function(){img.style.opacity='1'})}});

/* === PLATFORM TAB KEYBOARD === */
var ptabs=document.querySelectorAll('.platform-tab');ptabs.forEach(function(tab,i){tab.setAttribute('tabindex','0');tab.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();tab.click()}if(e.key==='ArrowRight'){var n=ptabs[(i+1)%ptabs.length];n.focus();n.click()}if(e.key==='ArrowLeft'){var p=ptabs[(i-1+ptabs.length)%ptabs.length];p.focus();p.click()}})});

/* === FOOTER LINK HOVER === */
document.querySelectorAll('.footer-col a').forEach(function(l){l.addEventListener('mouseenter',function(){l.style.transition='color 0.3s ease,padding-left 0.3s ease';l.style.paddingLeft='4px'});l.addEventListener('mouseleave',function(){l.style.paddingLeft='0'})});

})();`;
      document.body.appendChild(s);
      return () => { if(s.parentNode) s.parentNode.removeChild(s); };
    } catch(e) { console.error('Layout effects error:', e); }
  }, []);

  return (
    <>
      <Head>
        <style>{`
#cursor-spotlight{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(232,99,43,0.06) 0%,rgba(232,99,43,0.02) 30%,transparent 70%);pointer-events:none;z-index:1;transform:translate(-50%,-50%);transition:opacity 0.3s;will-change:left,top}
@media(hover:none){#cursor-spotlight{display:none}}
.feature-card,.service-card,.team-card,.resource-card,.tab-card,.fw-card,.step-card,.testi-card{position:relative;overflow:hidden}
.feature-card::before,.service-card::before,.team-card::before,.resource-card::before,.fw-card::before,.step-card::before,.testi-card::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;opacity:0;transition:opacity 0.4s ease;background:radial-gradient(300px circle at var(--glow-x,50%) var(--glow-y,50%),rgba(232,99,43,0.12),transparent 60%);pointer-events:none;z-index:1}
.card-glow-active::before{opacity:1}
.feature-card::after,.service-card::after,.team-card::after{content:'';position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;border-radius:inherit;opacity:0;transition:opacity 0.4s ease;background:radial-gradient(400px circle at var(--glow-x,50%) var(--glow-y,50%),rgba(232,99,43,0.25),transparent 50%);z-index:-1;pointer-events:none}
.card-glow-active::after{opacity:1}
.ambient-orb{position:absolute;border-radius:50%;pointer-events:none;z-index:0;filter:blur(80px)}
.ambient-orb-1{width:400px;height:400px;background:rgba(232,99,43,0.06);top:10%;right:-100px;animation:orbFloat1 12s ease-in-out infinite}
.ambient-orb-2{width:350px;height:350px;background:rgba(16,185,129,0.04);bottom:10%;left:-80px;animation:orbFloat2 15s ease-in-out infinite}
@keyframes orbFloat1{0%,100%{transform:translate(0,0) scale(1);opacity:0.6}33%{transform:translate(-40px,30px) scale(1.1);opacity:0.8}66%{transform:translate(20px,-20px) scale(0.95);opacity:0.5}}
@keyframes orbFloat2{0%,100%{transform:translate(0,0) scale(1);opacity:0.5}50%{transform:translate(50px,-30px) scale(1.15);opacity:0.7}}
.btn-primary{position:relative;overflow:visible !important}
.btn-primary::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border-radius:inherit;background:var(--gradient-accent);z-index:-1;opacity:0;filter:blur(12px);transition:opacity 0.4s ease}
.btn-primary:hover::before{opacity:0.6;animation:btnGlowPulse 2s ease-in-out infinite}
@keyframes btnGlowPulse{0%,100%{filter:blur(12px);opacity:0.5}50%{filter:blur(18px);opacity:0.7}}
#scroll-progress{position:fixed;top:0;left:0;height:3px;width:0;background:var(--gradient-accent);z-index:10000;transition:width 0.1s linear;box-shadow:0 0 10px rgba(232,99,43,0.5),0 0 20px rgba(232,99,43,0.2)}
#hero-particles{opacity:0.7}
.section-title{transition:text-shadow 0.4s ease}
.section-title:hover{text-shadow:0 0 30px rgba(232,99,43,0.2),0 0 60px rgba(232,99,43,0.1)}
.feature-card,.service-card,.team-card{transition:transform 0.4s cubic-bezier(.16,1,.3,1),border-color 0.4s ease,box-shadow 0.4s ease,background 0.4s ease}
.feature-card:hover,.service-card:hover,.team-card:hover{box-shadow:0 20px 60px rgba(0,0,0,0.4),0 0 40px rgba(232,99,43,0.08)}
.navbar.scrolled{box-shadow:0 4px 30px rgba(0,0,0,0.3),0 1px 0 rgba(232,99,43,0.08)}
.fw-card:hover{border-color:rgba(232,99,43,0.2);box-shadow:0 8px 32px rgba(0,0,0,0.3),0 0 20px rgba(232,99,43,0.06)}
.cta-section{position:relative}
.cta-section::before{content:'';position:absolute;top:50%;left:50%;width:600px;height:600px;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(232,99,43,0.1) 0%,transparent 70%);border-radius:50%;pointer-events:none;animation:ctaGlow 4s ease-in-out infinite}
@keyframes ctaGlow{0%,100%{opacity:0.5;transform:translate(-50%,-50%) scale(1)}50%{opacity:0.8;transform:translate(-50%,-50%) scale(1.1)}}
.step-number{text-shadow:0 0 20px rgba(232,99,43,0.4);transition:text-shadow 0.3s ease}
.step-card:hover .step-number{text-shadow:0 0 30px rgba(232,99,43,0.6),0 0 60px rgba(232,99,43,0.3)}
        `}</style>
      </Head>
      <style dangerouslySetInnerHTML={{__html: `.nav-dropdown{position:relative;list-style:none}.nav-dropdown-trigger{display:inline-flex;align-items:center;gap:4px;font-size:14px;font-weight:500;color:#FFFFFF;cursor:pointer;transition:var(--transition)}.nav-dropdown-trigger:hover{color:var(--white)}.nav-dropdown:hover .dropdown-arrow{transform:rotate(180deg)}.nav-dropdown-menu{position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(8px);background:var(--bg-card);border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-lg);padding:10px;min-width:540px;opacity:0;visibility:hidden;transition:all .25s ease;box-shadow:0 25px 60px rgba(0,0,0,.6);z-index:100;display:grid;grid-template-columns:repeat(3,1fr);gap:4px}.nav-dropdown:hover .nav-dropdown-menu{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}.nav-dropdown-menu a{display:flex;align-items:center;gap:10px;padding:9px 14px;border-radius:var(--radius-sm);font-size:13px;color:var(--blue-400);transition:all .15s;white-space:nowrap}.nav-dropdown-menu a:hover{background:rgba(232,99,43,.08);color:var(--white)}.nav-dropdown-menu a::after{display:none}button.faq-question{background:var(--bg-card,#111B2E);color:var(--white,#fff);border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-md,12px);padding:20px 24px;width:100%;text-align:left;font-size:16px;font-weight:500;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:all .3s ease;font-family:inherit}button.faq-question:hover{background:var(--bg-card-hover,#162036);border-color:rgba(255,255,255,.12)}.tm-mark{font-size:14px !important;color:#94A3B8 !important;font-weight:500 !important;vertical-align:super !important;margin-left:2px !important;display:inline !important;line-height:1 !important}`}} />
      <div dangerouslySetInnerHTML={{__html: `<!-- NAVBAR -->
<nav class="navbar" id="navbar">
  <div class="navbar-inner">
    <a href="/" class="logo"><img src="/assets/images/logo.png" alt="SecComply" style="height:40px"><span class="tm-mark">&trade;</span></a>
    <ul class="nav-links">
      <li><a href="/about">About</a></li>
      <li class="nav-dropdown"><span class="nav-dropdown-trigger"><a href="/#services">Services</a><span class="dropdown-arrow">&#9662;</span></span><div class="nav-dropdown-menu"><a href="/services/iso-27001"><span class="dropdown-icon">&#x1F30D;</span> ISO 27001</a><a href="/services/iso-27701"><span class="dropdown-icon">&#x1F512;</span> ISO 27701</a><a href="/services/soc-2"><span class="dropdown-icon">&#x1F6E1;&#xFE0F;</span> SOC 2</a><a href="/services/dpdp"><span class="dropdown-icon">&#x1F1EE;&#x1F1F3;</span> DPDP Act</a><a href="/services/gdpr"><span class="dropdown-icon">&#x1F1EA;&#x1F1FA;</span> GDPR</a><a href="/services/hipaa"><span class="dropdown-icon">&#x1F3E5;</span> HIPAA</a><a href="/services/vapt"><span class="dropdown-icon">&#x1F50D;</span> VAPT</a><a href="/services/cloud-security"><span class="dropdown-icon">&#x2601;&#xFE0F;</span> Cloud Security</a><a href="/services/security-policy"><span class="dropdown-icon">&#x1F4DC;</span> Security Policy</a><a href="/services/compliance-as-a-service"><span class="dropdown-icon">&#x1F6E1;&#xFE0F;</span> CaaS</a><a href="/services/internal-audit"><span class="dropdown-icon">&#x1F4CA;</span> Internal Audit</a><a href="/services/ciso"><span class="dropdown-icon">&#x1F4BC;</span> CISO as a Service</a></div></li>
      <li><a href="/resources">Resources</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <div class="nav-actions"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/?ismsaljsauthenabled" class="btn btn-primary" target="_blank" rel="noopener">Book Consultation <span class="btn-icon">&rarr;</span></a></div>
    <button class="mobile-toggle">&#9776;</button>
  </div>
</nav>`}} />
      {children}
      <div dangerouslySetInnerHTML={{__html: `<!-- FOOTER -->
<footer class="footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a href="/" class="logo"><img src="/assets/images/logo.png" alt="SecComply" style="height:40px"><span class="tm-mark">&trade;</span></a><p>We help businesses stay audit-ready, breach-proof, and compliant — without the complexity.</p></div><div class="footer-col"><h4>Services</h4><ul><li><a href="/services/iso-27001">ISO 27001</a></li><li><a href="/services/iso-27701">ISO 27701</a></li><li><a href="/services/soc-2">SOC 2 Audits</a></li><li><a href="/services/dpdp">DPDP Act</a></li><li><a href="/services/gdpr">GDPR Compliance</a></li><li><a href="/services/ciso">CISO as a Service</a></li></ul></div><div class="footer-col"><h4>Company</h4><ul><li><a href="/about">About Us</a></li><li><a href="/resources">Resources</a></li><li><a href="/contact">Contact</a></li></ul></div><div class="footer-col"><h4>Legal</h4><ul><li><a href="/privacy-policy">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li></ul></div></div><div class="footer-line"></div><div class="footer-bottom"><span class="footer-copy">&copy; 2026 SecComply&trade;. All rights reserved.<br><span style="font-size:12px;color:#64748B">SecComply&trade; and its logo are proprietary trademarks of SecComply.<br>All content, design, text, and materials on this website are protected by copyright and other intellectual property laws. Any unauthorized use is strictly prohibited.</span></span><div class="footer-socials"><a href="https://www.linkedin.com/in/shivani-tikadia-nadkarni/" class="footer-social" target="_blank" aria-label="LinkedIn">in</a></div></div></div></footer>`}} />
    </>
  )
}