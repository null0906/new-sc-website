/* Scroll Reveal + Puzzle Dashboard Assembly + Hero Parallax */
(function(){
  // Scroll reveals
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold:0.1, rootMargin:'0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObs.observe(el));

  // Puzzle Dashboard Assembly
  const dashboard = document.getElementById('puzzleDashboard');
  if(dashboard) {
    let assembled = false;
    const puzzleObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting && !assembled) {
          assembled = true;
          const pieces = dashboard.querySelectorAll('.puzzle-piece');
          pieces.forEach(piece => {
            const delay = parseInt(piece.dataset.puzzleDelay) || 0;
            setTimeout(() => {
              piece.classList.add('assembled');
            }, delay);
          });

          // Animate dashboard counters
          setTimeout(() => {
            dashboard.querySelectorAll('.dash-counter').forEach(counter => {
              const target = parseInt(counter.dataset.dashTarget);
              const suffix = counter.dataset.dashSuffix || '';
              const after = counter.dataset.dashAfter || '';
              const comma = counter.dataset.dashComma === 'true';
              if(isNaN(target)) return;
              let start = 0;
              const duration = 1500;
              const startTime = performance.now();
              function animate(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(start + (target - start) * eased);
                let display = comma ? current.toLocaleString() : current;
                counter.innerHTML = display + suffix + after;
                if(progress < 1) requestAnimationFrame(animate);
              }
              requestAnimationFrame(animate);
            });
          }, 500);

          puzzleObs.unobserve(dashboard);
        }
      });
    }, { threshold:0.15 });
    puzzleObs.observe(dashboard);
  }

  // Hero glow parallax
  const hero = document.querySelector('.hero');
  if(hero) {
    const glows = hero.querySelectorAll('.hero-glow');
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      glows.forEach((g, i) => {
        const speed = (i + 1) * 15;
        g.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });
  }
})();
