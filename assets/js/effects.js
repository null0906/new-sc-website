/* Card Hover Tilt + Button Ripple + Active Nav */
(function(){
  // Card tilt
  document.querySelectorAll('.service-card, .feature-card, .testi-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) perspective(600px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // Button ripple
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      ripple.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);width:0;height:0;left:${e.clientX-rect.left}px;top:${e.clientY-rect.top}px;transform:translate(-50%,-50%);animation:rippleOut 0.6s ease-out forwards;pointer-events:none;`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Active nav based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if(window.scrollY >= sec.offsetTop - 200) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  });
})();

// Ripple keyframe (injected)
const style = document.createElement('style');
style.textContent = '@keyframes rippleOut{to{width:300px;height:300px;opacity:0;}}';
document.head.appendChild(style);
