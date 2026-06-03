/* ============================================
   SecComply — Cursor & Dynamic Effects
   Matches glow-effects.css classes:
   .cursor-dot, .cursor-ring, #cursor-spotlight,
   .card-glow-active, .ambient-orb, #scroll-progress
   ============================================ */

(function() {

  // Skip on touch devices
  var isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  if (isTouch) return;

  // Track mouse globally
  var mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });


  // ==========================================
  // 1. CUSTOM CURSOR — .cursor-dot + .cursor-ring
  // ==========================================
  // Remove duplicates
  var oldDot = document.querySelector('.cursor-dot');
  var oldRing = document.querySelector('.cursor-ring');
  if (oldDot) oldDot.remove();
  if (oldRing) oldRing.remove();

  // Create cursor elements (styled by glow-effects.css)
  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  var ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);

  // Smooth animation — dot is snappy, ring lags behind
  var ringX = 0, ringY = 0;

  function animateCursor() {
    // Dot follows mouse instantly
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';

    // Ring follows with lag
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover detection — expand ring on interactive elements
  var hoverTargets = 'a, button, [role="button"], input, select, textarea, .btn-primary, .btn-outline, .service-card, .feature-card, .product-tab, .platform-tab, .fw-card, .team-card, .resource-card, .testi-card';

  document.addEventListener('mouseover', function(e) {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.addEventListener('mouseout', function(e) {
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove('cursor-hover');
    }
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', function() {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function() {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });


  // ==========================================
  // 2. CURSOR SPOTLIGHT — #cursor-spotlight
  // ==========================================
  var oldSpot = document.getElementById('cursor-spotlight');
  if (oldSpot) oldSpot.remove();

  var spotlight = document.createElement('div');
  spotlight.id = 'cursor-spotlight';
  document.body.appendChild(spotlight);

  var spotX = 0, spotY = 0;

  function animateSpotlight() {
    spotX += (mouseX - spotX) * 0.06;
    spotY += (mouseY - spotY) * 0.06;
    // position: fixed — no scroll offset needed
    spotlight.style.left = spotX + 'px';
    spotlight.style.top = spotY + 'px';
    requestAnimationFrame(animateSpotlight);
  }
  animateSpotlight();


  // ==========================================
  // 3. CARD PROXIMITY GLOW — .card-glow-active
  // ==========================================
  var glowCards = document.querySelectorAll(
    '.feature-card, .service-card, .team-card, .resource-card, .tab-card, .fw-card, .step-card, .testi-card, .platform-visual'
  );

  glowCards.forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      card.style.setProperty('--glow-x', x + 'px');
      card.style.setProperty('--glow-y', y + 'px');
      card.classList.add('card-glow-active');
    });

    card.addEventListener('mouseleave', function() {
      card.classList.remove('card-glow-active');
    });
  });


  // ==========================================
  // 4. HERO PARTICLE NETWORK
  // ==========================================
  var heroSection = document.querySelector('.hero');
  if (heroSection) {
    var oldCanvas = document.getElementById('hero-particles');
    if (oldCanvas) oldCanvas.remove();

    var canvas = document.createElement('canvas');
    canvas.id = 'hero-particles';
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
    heroSection.style.position = 'relative';
    heroSection.insertBefore(canvas, heroSection.firstChild);

    var ctx = canvas.getContext('2d');
    var particles = [];
    var heroW, heroH;

    function resizeCanvas() {
      heroW = heroSection.offsetWidth;
      heroH = heroSection.offsetHeight;
      canvas.width = heroW;
      canvas.height = heroH;
    }

    function initParticles() {
      particles = [];
      var count = Math.floor((heroW * heroH) / 18000);
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * heroW,
          y: Math.random() * heroH,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.4 + 0.1
        });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, heroW, heroH);

      // Connections
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            var opacity = (1 - dist / 120) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 129, 242, ' + opacity + ')';
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Move & draw particles
      particles.forEach(function(p) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > heroW) p.vx *= -1;
        if (p.y < 0 || p.y > heroH) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 129, 242, ' + p.alpha + ')';
        ctx.fill();
      });

      // Mouse interaction with particles
      var heroRect = heroSection.getBoundingClientRect();
      var relX = mouseX - heroRect.left;
      var relY = mouseY - heroRect.top;

      if (relX > 0 && relX < heroW && relY > 0 && relY < heroH) {
        particles.forEach(function(p) {
          var dx2 = relX - p.x;
          var dy2 = relY - p.y;
          var dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist2 < 150) {
            p.vx += dx2 * 0.0003;
            p.vy += dy2 * 0.0003;
          }
        });

        // Glow at cursor position
        var gradient = ctx.createRadialGradient(relX, relY, 0, relX, relY, 150);
        gradient.addColorStop(0, 'rgba(0, 129, 242, 0.08)');
        gradient.addColorStop(1, 'rgba(0, 129, 242, 0)');
        ctx.beginPath();
        ctx.arc(relX, relY, 150, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    initParticles();
    drawParticles();

    window.addEventListener('resize', function() {
      resizeCanvas();
      initParticles();
    });
  }


  // ==========================================
  // 5. FLOATING AMBIENT ORBS — .ambient-orb
  // ==========================================
  var orbSections = document.querySelectorAll(
    '.services-section, .features-section, .cta-section, .frameworks-section'
  );

  orbSections.forEach(function(section) {
    if (section.querySelector('.ambient-orb')) return;
    section.style.position = 'relative';
    section.style.overflow = 'hidden';

    var orb1 = document.createElement('div');
    orb1.className = 'ambient-orb ambient-orb-1';
    section.appendChild(orb1);

    var orb2 = document.createElement('div');
    orb2.className = 'ambient-orb ambient-orb-2';
    section.appendChild(orb2);
  });


  // ==========================================
  // 6. MAGNETIC BUTTONS
  // ==========================================
  document.querySelectorAll('.btn-primary, .btn-outline').forEach(function(btn) {
    btn.addEventListener('mousemove', function(e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
    });

    btn.addEventListener('mouseleave', function() {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(.16,1,.3,1)';
      setTimeout(function() { btn.style.transition = ''; }, 400);
    });
  });


  // ==========================================
  // 7. TEXT SCRAMBLE ON SCROLL REVEAL
  // ==========================================
  var scrambleObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var text = el.textContent;
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        var iteration = 0;

        var interval = setInterval(function() {
          el.textContent = text.split('').map(function(char, i) {
            if (i < iteration) return text[i];
            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('');

          if (iteration >= text.length) clearInterval(interval);
          iteration += 1.5;
        }, 30);

        scrambleObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.section-title').forEach(function(el) {
    scrambleObs.observe(el);
  });


  // ==========================================
  // 8. SCROLL PROGRESS — #scroll-progress
  // ==========================================
  var oldProgress = document.getElementById('scroll-progress');
  if (oldProgress) oldProgress.remove();

  var progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      progressBar.style.width = ((scrollTop / docHeight) * 100) + '%';
    }
  }, { passive: true });


  // ==========================================
  // 9. SMOOTH PARALLAX
  // ==========================================
  var parallaxEls = document.querySelectorAll('.section-header');
  window.addEventListener('scroll', function() {
    parallaxEls.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.style.transform = 'translateY(' + ((rect.top - window.innerHeight / 2) * 0.03) + 'px)';
      }
    });
  }, { passive: true });

})();