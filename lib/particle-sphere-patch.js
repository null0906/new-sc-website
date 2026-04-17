/**
 * SecComply — particle-sphere-patch.js
 *
 * Security fix C-12: Throttle mouse/touch event listeners to rAF cadence.
 *
 * Problem: Unthrottled mousemove fires hundreds of times per second on modern
 * trackpads, causing excessive canvas redraws, high CPU usage, and battery drain.
 *
 * HOW TO APPLY:
 * Open your existing particle-sphere.js and replace the event listener setup
 * section with the throttled version below. The key changes are:
 *
 *   1. Use a pending RAF ID to cancel duplicate frames
 *   2. Clamp mouse coordinates to canvas bounds
 *   3. Skip interaction on devices that prefer reduced motion
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * BEFORE (unthrottled — replace this pattern in your file):
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * canvas.addEventListener('mousemove', (e) => {
 *   mouse.x = e.clientX;
 *   mouse.y = e.clientY;
 * });
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * AFTER (throttled + bounds-clamped — use this):
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Paste this block into your particle-sphere.js init function,
// replacing the existing mousemove / touchmove listeners:

/*

// Respect prefers-reduced-motion for accessibility
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Shared RAF handle for throttling
let mouseMoveRaf = null;

function onMouseMove(e) {
  if (prefersReduced) return;

  // Cancel any pending frame — we only process the latest position
  if (mouseMoveRaf) cancelAnimationFrame(mouseMoveRaf);

  mouseMoveRaf = requestAnimationFrame(() => {
    const rect = canvas.getBoundingClientRect();

    // Clamp to canvas bounds — prevents out-of-range particle calculations
    mouse.x = Math.max(rect.left, Math.min(e.clientX, rect.right));
    mouse.y = Math.max(rect.top,  Math.min(e.clientY, rect.bottom));

    mouseMoveRaf = null;
  });
}

function onTouchMove(e) {
  if (prefersReduced || !e.touches.length) return;
  if (mouseMoveRaf) cancelAnimationFrame(mouseMoveRaf);

  mouseMoveRaf = requestAnimationFrame(() => {
    const touch = e.touches[0];
    const rect  = canvas.getBoundingClientRect();

    mouse.x = Math.max(rect.left, Math.min(touch.clientX, rect.right));
    mouse.y = Math.max(rect.top,  Math.min(touch.clientY, rect.bottom));

    mouseMoveRaf = null;
  });
}

canvas.addEventListener('mousemove', onMouseMove, { passive: true });
canvas.addEventListener('touchmove',  onTouchMove, { passive: true });

// Cleanup on unmount (important in React useEffect):
return () => {
  canvas.removeEventListener('mousemove', onMouseMove);
  canvas.removeEventListener('touchmove',  onTouchMove);
  if (mouseMoveRaf) cancelAnimationFrame(mouseMoveRaf);
};

*/
