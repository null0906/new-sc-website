/* Animated Counters (why-section) */
(function(){
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        if(isNaN(target)) return;
        let start = 0;
        const duration = 1800;
        const startTime = performance.now();
        function animate(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(start + (target - start) * eased) + suffix;
          if(progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
        counterObs.unobserve(el);
      }
    });
  }, { threshold:0.3 });
  document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));
})();
