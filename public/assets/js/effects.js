/* ============================================
   SecComply — Effects System
   Card tilt, button ripple, nav highlighting,
   smooth hover states, micro-interactions
   
   NOTE: Uses IIFE (not DOMContentLoaded) because
   Next.js afterInteractive loads AFTER DOM ready
   ============================================ */

(function() {

  // === 1. CARD HOVER TILT (3D Perspective) ===
  var tiltCards = document.querySelectorAll(
    '.feature-card, .service-card, .team-card, .resource-card, .fw-card, .step-card, .testi-card'
  );

  tiltCards.forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      var y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
      card.style.transform = 'translateY(-4px) perspective(600px) rotateX(' + (-y) + 'deg) rotateY(' + x + 'deg)';
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(.16,1,.3,1)';
      setTimeout(function() { card.style.transition = ''; }, 500);
    });
  });


  // === 2. BUTTON RIPPLE EFFECT ===
  if (!document.querySelector('#ripple-styles')) {
    var style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = '@keyframes rippleExpand { to { transform: scale(4); opacity: 0; } }';
    document.head.appendChild(style);
  }

  document.querySelectorAll('.btn-primary, .btn-outline').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      var rect = this.getBoundingClientRect();
      var ripple = document.createElement('span');
      ripple.style.cssText = 'position:absolute;border-radius:50%;background:rgba(255,255,255,0.25);width:100px;height:100px;left:' + (e.clientX - rect.left - 50) + 'px;top:' + (e.clientY - rect.top - 50) + 'px;transform:scale(0);animation:rippleExpand 0.6s ease-out forwards;pointer-events:none;';
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(function() { ripple.remove(); }, 600);
    });
  });


  // === 3. ACTIVE NAV LINK HIGHLIGHT ===
  var currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href !== '/' && href !== '#' && currentPath.includes(href)) {
      link.classList.add('active');
      link.style.color = 'var(--white)';
    }
  });


  // === 4. STAGGERED GRID REVEAL ===
  var grids = document.querySelectorAll(
    '.features-grid, .services-grid, .frameworks-grid, .resources-grid, .testimonials-grid'
  );

  grids.forEach(function(grid) {
    var cards = grid.children;
    Array.from(cards).forEach(function(card, i) {
      if (!card.style.transitionDelay) {
        card.style.transitionDelay = (0.05 + i * 0.06) + 's';
      }
    });
  });


  // === 5. PLATFORM TAB HOVER ===
  document.querySelectorAll('.platform-tab').forEach(function(tab) {
    tab.addEventListener('mouseenter', function() {
      tab.style.transition = 'all 0.3s cubic-bezier(.34,1.56,.64,1)';
    });
  });


  // === 6. FOOTER LINK HOVER ===
  document.querySelectorAll('.footer-col a').forEach(function(link) {
    link.addEventListener('mouseenter', function() {
      link.style.transition = 'color 0.3s ease, padding-left 0.3s ease';
      link.style.paddingLeft = '4px';
    });
    link.addEventListener('mouseleave', function() {
      link.style.paddingLeft = '0';
    });
  });


  // === 7. TEAM AVATAR FADE-IN ===
  document.querySelectorAll('.team-avatar img').forEach(function(img) {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.6s ease';
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', function() {
        img.style.opacity = '1';
      });
    }
  });


  // === 8. KEYBOARD ACCESSIBILITY FOR TABS ===
  var tabs = document.querySelectorAll('.platform-tab');
  tabs.forEach(function(tab, i) {
    tab.setAttribute('tabindex', '0');
    tab.setAttribute('role', 'tab');
    tab.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tab.click();
      }
      if (e.key === 'ArrowRight') {
        var next = tabs[(i + 1) % tabs.length];
        next.focus();
        next.click();
      }
      if (e.key === 'ArrowLeft') {
        var prev = tabs[(i - 1 + tabs.length) % tabs.length];
        prev.focus();
        prev.click();
      }
    });
  });

})();