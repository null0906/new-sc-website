/* Navbar: sticky, mobile toggle, smooth scroll */
(function(){
  const nav = document.getElementById('navbar');
  const toggle = document.querySelector('.mobile-toggle');
  const links = document.querySelector('.nav-links');
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  if(toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Mobile dropdown toggle
  dropdowns.forEach(dd => {
    const trigger = dd.querySelector('.nav-dropdown-trigger');
    if(trigger) {
      trigger.addEventListener('click', (e) => {
        if(window.innerWidth <= 768) {
          e.preventDefault();
          dd.classList.toggle('open');
        }
      });
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if(target) {
        e.preventDefault();
        target.scrollIntoView({ behavior:'smooth', block:'start' });
        if(links) links.classList.remove('open');
        if(toggle) toggle.textContent = '☰';
      }
    });
  });

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      if(links) links.classList.remove('open');
      if(toggle) toggle.textContent = '☰';
    });
  });
})();
