import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [navOffset, setNavOffset] = useState(72)

  useEffect(() => {
    if (isHome) return

    const updateNavOffset = () => {
      const navbar = document.getElementById('navbar')
      if (!navbar) return
      setNavOffset(Math.ceil(navbar.getBoundingClientRect().height))
    }

    updateNavOffset()
    window.addEventListener('resize', updateNavOffset)
    return () => window.removeEventListener('resize', updateNavOffset)
  }, [isHome, router.pathname])

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    if (!navbar) return

    const updateNavbarState = () => {
      if (isHome) {
        navbar.classList.toggle('scrolled', window.scrollY > 40)
      } else {
        navbar.classList.add('scrolled')
      }
    }

    updateNavbarState()
    window.addEventListener('scroll', updateNavbarState, { passive: true })
    return () => window.removeEventListener('scroll', updateNavbarState)
  }, [isHome, router.pathname])

  // Cookie Preferences footer link → opens preferences modal via global event
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('[data-cookie-prefs]')
      if (target) {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('sc:open-cookie-preferences'))
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

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
    for(var i=0;i<pts.length;i++){for(var j=i+1;j<pts.length;j++){var dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<120){ctx.beginPath();ctx.strokeStyle='rgba(255, 96, 0,'+(1-d/120)*0.12+')';ctx.lineWidth=0.5;ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke()}}}
    pts.forEach(function(p){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>hw)p.vx*=-1;if(p.y<0||p.y>hh)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(255, 96, 0,'+p.a+')';ctx.fill()});
    var hr=hero.getBoundingClientRect(),rx=mx-hr.left,ry=my-hr.top;
    if(rx>0&&rx<hw&&ry>0&&ry<hh){pts.forEach(function(p){var dx2=rx-p.x,dy2=ry-p.y,d2=Math.sqrt(dx2*dx2+dy2*dy2);if(d2<150){p.vx+=dx2*0.0003;p.vy+=dy2*0.0003}});var g=ctx.createRadialGradient(rx,ry,0,rx,ry,150);g.addColorStop(0,'rgba(255, 96, 0,0.08)');g.addColorStop(1,'rgba(255, 96, 0,0)');ctx.beginPath();ctx.arc(rx,ry,150,0,Math.PI*2);ctx.fillStyle=g;ctx.fill()}
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
var cp=window.location.pathname;document.querySelectorAll('.nav-links a').forEach(function(l){var h=l.getAttribute('href');if(h&&h!=='/'&&h!=='#'&&cp.includes(h)){l.style.color='var(--accent-light)';l.classList.add('active')}});

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
#cursor-spotlight{position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(255, 96, 0,0.06) 0%,rgba(255, 96, 0,0.02) 30%,transparent 70%);pointer-events:none;z-index:1;transform:translate(-50%,-50%);transition:opacity 0.3s;will-change:left,top}
@media(hover:none){#cursor-spotlight{display:none}}
.feature-card,.service-card,.team-card,.resource-card,.tab-card,.fw-card,.step-card,.testi-card{position:relative;overflow:hidden}
.feature-card::before,.service-card::before,.team-card::before,.resource-card::before,.fw-card::before,.step-card::before,.testi-card::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;opacity:0;transition:opacity 0.4s ease;background:radial-gradient(300px circle at var(--glow-x,50%) var(--glow-y,50%),rgba(255, 96, 0,0.12),transparent 60%);pointer-events:none;z-index:1}
.card-glow-active::before{opacity:1}
.feature-card::after,.service-card::after,.team-card::after{content:'';position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;border-radius:inherit;opacity:0;transition:opacity 0.4s ease;background:radial-gradient(400px circle at var(--glow-x,50%) var(--glow-y,50%),rgba(255, 96, 0,0.25),transparent 50%);z-index:-1;pointer-events:none}
.card-glow-active::after{opacity:1}
.ambient-orb{position:absolute;border-radius:50%;pointer-events:none;z-index:0;filter:blur(80px)}
.ambient-orb-1{width:400px;height:400px;background:rgba(255, 96, 0,0.06);top:10%;right:-100px;animation:orbFloat1 12s ease-in-out infinite}
.ambient-orb-2{width:350px;height:350px;background:rgba(16,185,129,0.04);bottom:10%;left:-80px;animation:orbFloat2 15s ease-in-out infinite}
@keyframes orbFloat1{0%,100%{transform:translate(0,0) scale(1);opacity:0.6}33%{transform:translate(-40px,30px) scale(1.1);opacity:0.8}66%{transform:translate(20px,-20px) scale(0.95);opacity:0.5}}
@keyframes orbFloat2{0%,100%{transform:translate(0,0) scale(1);opacity:0.5}50%{transform:translate(50px,-30px) scale(1.15);opacity:0.7}}
.btn-primary{position:relative;overflow:visible !important}
.btn-primary::before{content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border-radius:inherit;background:var(--gradient-accent);z-index:-1;opacity:0;filter:blur(12px);transition:opacity 0.4s ease}
.btn-primary:hover::before{opacity:0.6;animation:btnGlowPulse 2s ease-in-out infinite}
@keyframes btnGlowPulse{0%,100%{filter:blur(12px);opacity:0.5}50%{filter:blur(18px);opacity:0.7}}
#scroll-progress{position:fixed;top:0;left:0;height:3px;width:0;background:var(--gradient-accent);z-index:10000;transition:width 0.1s linear;box-shadow:0 0 10px rgba(255, 96, 0,0.5),0 0 20px rgba(255, 96, 0,0.2)}
#hero-particles{opacity:0.7}
.section-title{transition:text-shadow 0.4s ease}
.section-title:hover{text-shadow:0 0 30px rgba(255, 96, 0,0.2),0 0 60px rgba(255, 96, 0,0.1)}
.feature-card,.service-card,.team-card{transition:transform 0.4s cubic-bezier(.16,1,.3,1),border-color 0.4s ease,box-shadow 0.4s ease,background 0.4s ease}
.feature-card:hover,.service-card:hover,.team-card:hover{box-shadow:0 20px 60px rgba(0,0,0,0.4),0 0 40px rgba(255, 96, 0,0.08)}
.navbar.scrolled{box-shadow:0 4px 30px rgba(0,0,0,0.3),0 1px 0 rgba(255, 96, 0,0.08)}
.fw-card:hover{border-color:rgba(255, 96, 0,0.2);box-shadow:0 8px 32px rgba(0,0,0,0.3),0 0 20px rgba(255, 96, 0,0.06)}
.cta-section{position:relative}
.cta-section::before{content:'';position:absolute;top:50%;left:50%;width:600px;height:600px;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(255, 96, 0,0.1) 0%,transparent 70%);border-radius:50%;pointer-events:none;animation:ctaGlow 4s ease-in-out infinite}
@keyframes ctaGlow{0%,100%{opacity:0.5;transform:translate(-50%,-50%) scale(1)}50%{opacity:0.8;transform:translate(-50%,-50%) scale(1.1)}}
.step-number{text-shadow:0 0 20px rgba(255, 96, 0,0.4);transition:text-shadow 0.3s ease}
.step-card:hover .step-number{text-shadow:0 0 30px rgba(255, 96, 0,0.6),0 0 60px rgba(255, 96, 0,0.3)}
        `}</style>
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .nav-links a.nav-flagship{color:var(--accent-light);font-weight:600;transition:color .2s}
            .nav-links a.nav-flagship:hover{color:var(--accent)}
            .nav-dropdown{position:static;list-style:none}
            .nav-dropdown-trigger,.res-dd-trigger{display:inline-flex;align-items:center;gap:4px;font-size:14px;font-weight:500;color:#FFFFFF;cursor:pointer;transition:var(--transition)}
            .nav-dropdown-trigger:hover,.res-dd-trigger:hover{color:var(--white)}
            .nav-dropdown:hover .dropdown-arrow,.res-dd:hover .res-dd-arrow{transform:rotate(180deg)}
            .nav-links > li.nav-dropdown > .nav-dropdown-menu{
              position:fixed;
              top:64px;
              left:50%;
              right:auto;
              width:min(1400px,calc(100vw - 32px));
              transform:translateX(-50%) translateY(10px);
              display:block;
              min-width:0;
              background:#0D1526;
              border:1px solid rgba(255,255,255,.08);
              border-radius:16px;
              padding:24px 0;
              opacity:0;
              visibility:hidden;
              transition:all .2s ease;
              box-shadow:0 30px 80px rgba(0,0,0,.7);
              z-index:200;
            }
            .nav-links > li.nav-dropdown:hover > .nav-dropdown-menu{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}
            .nav-dropdown-menu .mega-inner{width:min(1320px,calc(100% - 28px));margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) 1px minmax(0,1fr) 1px minmax(0,0.65fr);gap:0;box-sizing:border-box}
            .nav-dropdown-menu .mega-divider{display:block;background:rgba(255,255,255,.08);margin:0 30px}
            .nav-dropdown-menu .mega-section{padding:0 4px;min-width:0;display:flex;flex-direction:column}
            .nav-dropdown-menu .mega-section-head{display:inline-flex;align-items:center;gap:10px;margin-bottom:18px;padding:10px 14px;border:1px solid rgba(255,255,255,.08);border-radius:12px;background:rgba(255,255,255,.03)}
            .nav-dropdown-menu .mega-section-icon{width:24px;height:24px;border-radius:8px;background:rgba(255, 96, 0,.15);border:1px solid rgba(255, 96, 0,.2);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}
            .nav-dropdown-menu .mega-section-title{font-size:15px;font-weight:700;letter-spacing:.01em;color:rgba(148,163,184,.7);text-transform:none}
            .nav-dropdown-menu .mega-grid{display:grid;grid-template-columns:repeat(2,minmax(220px,1fr));gap:8px 18px;align-content:start}
            .nav-dropdown-menu .mega-section:last-child .mega-grid{flex:1;align-content:start;row-gap:42px}
            .nav-dropdown-menu .mega-item{display:flex;align-items:center;gap:10px;padding:9px 10px;border-radius:10px;text-decoration:none;transition:all .15s;color:#94A3B8;font-size:15px;font-weight:500;min-width:0;white-space:normal}
            .nav-dropdown-menu .mega-item:hover{background:rgba(255, 96, 0,.08);color:#F8FAFC}
            .nav-dropdown-menu .mega-item:hover .mega-item-icon{background:rgba(255, 96, 0,.2);border-color:rgba(255, 96, 0,.35)}
            .nav-dropdown-menu .mega-item::after{display:none}
            .nav-dropdown-menu .mega-item-icon{width:34px;height:34px;border-radius:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;transition:all .15s}
            .nav-dropdown-menu .mega-item-text{line-height:1.3;min-width:0}
            .res-dd{position:relative;list-style:none}
            .res-dd-menu{
              position:fixed;
              top:64px;
              left:50%;
              transform:translateX(-50%) translateY(8px);
              background:#0D1526;
              border:1px solid rgba(255,255,255,.08);
              border-radius:16px;
              padding:14px;
              width:980px;
              max-width:calc(100vw - 32px);
              min-width:0;
              opacity:0;
              visibility:hidden;
              transition:all .2s ease;
              box-shadow:0 25px 60px rgba(0,0,0,.6);
              z-index:220;
              display:grid;
              grid-template-columns:repeat(3,minmax(0,1fr));
              gap:8px;
            }
            .res-dd:hover .res-dd-menu{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}
            .res-dd-menu a{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;font-size:15px;font-weight:600;color:var(--blue-400);transition:all .15s;white-space:nowrap}
            .res-dd-menu a:hover{background:rgba(255, 96, 0,.08);color:var(--white)}
            .res-dd-menu a::after{display:none}
            .dropdown-icon{width:30px;height:30px;border-radius:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px}
            .res-dd-menu a:hover .dropdown-icon{background:rgba(255, 96, 0,.2);border-color:rgba(255, 96, 0,.35)}
            .footer-socials-box{display:flex;gap:10px;margin-top:16px;flex-wrap:wrap}
            .fsoc{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);color:#94A3B8;transition:all .2s;text-decoration:none}
            .fsoc:hover{background:rgba(255, 96, 0,.15);border-color:rgba(255, 96, 0,.35);color:#FF6000}
            .fsoc svg{width:15px;height:15px;fill:currentColor}
            html,body{margin:0;padding:0}
            #__next{display:flex;flex-direction:column;min-height:100vh}
            .footer{margin-top:auto;flex-shrink:0}
            button.faq-question{background:var(--bg-card,#111B2E);color:var(--white,#fff);border:1px solid rgba(255,255,255,.08);border-radius:var(--radius-md,12px);padding:20px 24px;width:100%;text-align:left;font-size:16px;font-weight:500;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:all .3s ease;font-family:inherit}
            button.faq-question:hover{background:var(--bg-card-hover,#162036);border-color:rgba(255,255,255,.12)}
            .tm-mark{font-size:14px !important;color:#94A3B8 !important;font-weight:500 !important;vertical-align:super !important;margin-left:2px !important;display:inline !important;line-height:1 !important}
            @media(max-width:1200px){
              .nav-dropdown-menu .mega-inner{width:calc(100% - 20px)}
              .nav-dropdown-menu .mega-divider{margin:0 18px}
              .nav-dropdown-menu .mega-grid{grid-template-columns:1fr}
              .nav-dropdown-menu .mega-section:last-child .mega-grid{row-gap:12px}
              .res-dd-menu{width:760px;max-width:calc(100vw - 32px);grid-template-columns:repeat(2,minmax(0,1fr))}
            }
            @media(max-width:920px){
              .nav-links > li.nav-dropdown > .nav-dropdown-menu{position:absolute;top:calc(100% + 8px);left:50%;right:auto;width:min(96vw,940px);transform:translateX(-50%) translateY(8px);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:18px 0}
              .nav-links > li.nav-dropdown:hover > .nav-dropdown-menu{transform:translateX(-50%) translateY(0)}
              .nav-dropdown-menu .mega-inner{padding:0 14px;grid-template-columns:1fr}
              .nav-dropdown-menu .mega-divider{display:none}
              .res-dd-menu{position:absolute;top:calc(100% + 8px);width:min(96vw,640px);grid-template-columns:repeat(2,minmax(0,1fr))}
            }
          `,
        }}
      />
      <div dangerouslySetInnerHTML={{__html: `<!-- NAVBAR -->
<nav class="navbar" id="navbar">
  <div class="navbar-inner">
    <a href="/" class="logo"><img src="/assets/images/logo.png" alt="SecComply" style="height:40px"><span class="tm-mark">&trade;</span></a>
    <ul class="nav-links">
      <li><a href="/yourcomply" class="nav-flagship">YourComply</a></li>
      <li><a href="/about">About</a></li>
      <li class="nav-dropdown"><span class="nav-dropdown-trigger"><a href="/services">Services</a><span class="dropdown-arrow">&#9662;</span></span><div class="nav-dropdown-menu"><div class="mega-inner"><div class="mega-section"><div class="mega-section-head"><span class="mega-section-icon">🏅</span><span class="mega-section-title">Certifications &amp; Standards</span></div><div class="mega-grid"><a href="/services/iso-27001" class="mega-item"><span class="mega-item-icon">🌐</span><span class="mega-item-text">ISO 27001</span></a><a href="/services/iso-27701" class="mega-item"><span class="mega-item-icon">🔏</span><span class="mega-item-text">ISO 27701</span></a><a href="/services/soc-2" class="mega-item"><span class="mega-item-icon">🛡️</span><span class="mega-item-text">SOC 2 Audits</span></a><a href="/services/gdpr" class="mega-item"><span class="mega-item-icon">🇪🇺</span><span class="mega-item-text">GDPR Compliance</span></a><a href="/services/hipaa" class="mega-item"><span class="mega-item-icon">🏥</span><span class="mega-item-text">HIPAA</span></a><a href="/services/iso-42001" class="mega-item"><span class="mega-item-icon">🤖</span><span class="mega-item-text">ISO 42001</span></a><a href="/services/iso-27017" class="mega-item"><span class="mega-item-icon">☁️</span><span class="mega-item-text">ISO 27017</span></a><a href="/services/iso-27018" class="mega-item"><span class="mega-item-icon">🔒</span><span class="mega-item-text">ISO 27018</span></a><a href="/services/nist-csf" class="mega-item"><span class="mega-item-icon">🇺🇸</span><span class="mega-item-text">NIST CSF 2.0</span></a><a href="/services/dpdp" class="mega-item"><span class="mega-item-icon">🇮🇳</span><span class="mega-item-text">DPDP Act</span></a></div></div><div class="mega-divider"></div><div class="mega-section"><div class="mega-section-head"><span class="mega-section-icon">🔐</span><span class="mega-section-title">Security Services</span></div><div class="mega-grid"><a href="/services/vapt" class="mega-item"><span class="mega-item-icon">🔍</span><span class="mega-item-text">VAPT Testing</span></a><a href="/services/ciso" class="mega-item"><span class="mega-item-icon">💼</span><span class="mega-item-text">CISO as a Service</span></a><a href="/services/cloud-security" class="mega-item"><span class="mega-item-icon">⛅</span><span class="mega-item-text">Cloud Security Audit</span></a><a href="/services/security-policy" class="mega-item"><span class="mega-item-icon">📜</span><span class="mega-item-text">Security Policy</span></a><a href="/services/compliance-as-a-service" class="mega-item"><span class="mega-item-icon">⚙️</span><span class="mega-item-text">Compliance as a Service</span></a><a href="/services/internal-audit" class="mega-item"><span class="mega-item-icon">📊</span><span class="mega-item-text">Internal Audit</span></a></div></div><div class="mega-divider"></div><div class="mega-section"><div class="mega-section-head"><span class="mega-section-icon">🤖</span><span class="mega-section-title">AI Engineering</span></div><div class="mega-grid"><a href="/services/ai-agents" class="mega-item"><span class="mega-item-icon">🧬</span><span class="mega-item-text">AI Agents &amp; Agentic Workflows</span></a></div></div></div></div></li>
      <li class="res-dd"><span class="res-dd-trigger"><a href="/resources">Resources</a><span class="res-dd-arrow dropdown-arrow">&#9662;</span></span><div class="res-dd-menu"><a href="/resources/blog"><span class="dropdown-icon">&#x1F4DD;</span> Blog</a><a href="/resources/guides"><span class="dropdown-icon">&#x1F4DA;</span> Guides</a><a href="/resources/assessments"><span class="dropdown-icon">&#x1F3AF;</span> Assessments</a><a href="/resources/tools"><span class="dropdown-icon">&#x1F6E0;&#xFE0F;</span> Tools</a><a href="/resources/events"><span class="dropdown-icon">&#x1F3A4;</span> Events</a></div></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <div class="nav-actions"><a href="https://outlook.office.com/book/SecComplyMeeting1@seccomply.net/" class="btn btn-primary" target="_blank" rel="noopener">Book Consultation <span class="btn-icon">&rarr;</span></a></div>
    <button class="mobile-toggle">&#9776;</button>
  </div>
</nav>`}} />
      <div style={{ paddingTop: isHome ? '0' : `${navOffset}px` }}>{children}</div>
      <div dangerouslySetInnerHTML={{__html: `<!-- FOOTER -->
<footer class="footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a href="/" class="logo"><img src="/assets/images/logo.png" alt="SecComply" style="height:40px"><span class="tm-mark">&trade;</span></a><p style="color:#64748B;font-size:14px;line-height:1.65;margin:14px 0 18px">We help businesses stay audit-ready, breach-proof, and compliant — without the complexity.</p><div class="footer-socials-box"><a href="mailto:info@seccomply.net" class="fsoc" title="info@seccomply.net" aria-label="Email"><svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></a><a href="tel:+919876543210" class="fsoc" title="Call Us" aria-label="Phone"><svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.32.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.62 21 3 13.38 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg></a><a href="https://www.linkedin.com/company/sec-comply" class="fsoc" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.988V9h3.128v1.561h.045c.435-.824 1.497-1.693 3.082-1.693 3.296 0 3.904 2.171 3.904 4.994v6.59zM5.337 7.433a1.814 1.814 0 110-3.628 1.814 1.814 0 010 3.628zm1.567 13.019H3.77V9h3.134v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a><a href="https://www.instagram.com/seccomply/" class="fsoc" target="_blank" rel="noopener" title="Instagram" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.773.131 4.548.425 3.465 1.508 2.382 2.591 2.088 3.816 2.029 5.096 1.971 6.376 1.957 6.784 1.957 12c0 5.216.014 5.624.072 6.904.059 1.28.353 2.505 1.436 3.588 1.083 1.083 2.308 1.377 3.588 1.436C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.28-.059 2.505-.353 3.588-1.436 1.083-1.083 1.377-2.308 1.436-3.588.058-1.28.072-1.688.072-6.904 0-5.216-.014-5.624-.072-6.904-.059-1.28-.353-2.505-1.436-3.588C20.452.425 19.227.131 17.947.072 16.667.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a><a href="https://www.youtube.com/@thenadkarnees" class="fsoc" target="_blank" rel="noopener" title="YouTube" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg></a></div></div><div class="footer-col"><h4>Services</h4><ul><li><a href="/services/iso-27001">ISO 27001</a></li><li><a href="/services/iso-27701">ISO 27701</a></li><li><a href="/services/soc-2">SOC 2 Audits</a></li><li><a href="/services/dpdp">DPDP Act</a></li><li><a href="/services/gdpr">GDPR Compliance</a></li><li><a href="/services/hipaa">HIPAA</a></li><li><a href="/services/vapt">VAPT</a></li><li><a href="/services/ciso">CISO as a Service</a></li><li><a href="/services/iso-42001">ISO 42001</a></li><li><a href="/services/iso-27017">ISO 27017</a></li><li><a href="/services/iso-27018">ISO 27018</a></li><li><a href="/services/nist-csf">NIST CSF 2.0</a></li><li><a href="/services/ai-agents">AI Agents</a></li></ul></div><div class="footer-col"><h4>Company</h4><ul><li><a href="/about">About Us</a></li><li><a href="/resources">Resources</a></li><li><a href="/pricing">Pricing</a></li><li><a href="/contact">Contact</a></li></ul></div><div class="footer-col"><h4>Legal</h4><ul><li><a href="/privacy-policy">Privacy Policy</a></li><li><a href="/cookie-policy">Cookie Policy</a></li><li><a href="#" data-cookie-prefs="1">Cookie Preferences</a></li><li><a href="#">Terms of Service</a></li></ul></div></div><div class="footer-line"></div><div class="footer-bottom"><span class="footer-copy" style="font-size:12px;color:#64748B">&copy; 2026 SecComply&trade;. All rights reserved. &nbsp;|&nbsp; SecComply&trade; and its logo are proprietary trademarks of SecComply. All content, design, text, and materials on this website are protected by copyright and intellectual property laws. Any unauthorized use is strictly prohibited.</span></div></div></footer>`}} />
    </>
  )
}
