/* Product Tabs */
(function(){
  const tabs = document.querySelectorAll('.product-tab');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.querySelector(`[data-panel="${target}"]`);
      if(panel) {
        panel.classList.add('active');
        // Re-trigger reveals inside panel
        panel.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
          el.classList.remove('visible');
          void el.offsetWidth;
          el.classList.add('visible');
        });
      }
    });
  });
})();

/* Video play handler */
function handleVideoPlay(el) {
  const label = el.parentElement.querySelector('.tab-video-label');
  if(label) label.textContent = '▶ Demo coming soon — contact us for a live walkthrough';
  el.style.opacity = '0.5';
  el.style.pointerEvents = 'none';
}
