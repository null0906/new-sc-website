(function () {
  'use strict';

  var canvas = document.getElementById('particleSphere');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  /* SIZING */
  var W, H, CX, CY, SHIELD_W, SHIELD_H, shieldPath;

  function createShieldPath() {
    var hw = SHIELD_W * 0.5;
    var hh = SHIELD_H * 0.5;

    function sx(nx) { return CX + nx * hw; }
    function sy(ny) { return CY + ny * hh; }

    var path = new Path2D();
    path.moveTo(sx(0.00), sy(-1.00)); // top apex

    // Top-right crown curve.
    path.bezierCurveTo(
      sx(0.24), sy(-0.95),
      sx(0.62), sy(-0.79),
      sx(0.88), sy(-0.72)
    );

    // Right shoulder down to bottom tip.
    path.bezierCurveTo(
      sx(1.06), sy(-0.20),
      sx(0.78), sy(0.63),
      sx(0.00), sy(1.00)
    );

    // Bottom tip up left side.
    path.bezierCurveTo(
      sx(-0.78), sy(0.63),
      sx(-1.06), sy(-0.20),
      sx(-0.88), sy(-0.72)
    );

    // Top-left crown back to apex.
    path.bezierCurveTo(
      sx(-0.62), sy(-0.79),
      sx(-0.24), sy(-0.95),
      sx(0.00), sy(-1.00)
    );

    path.closePath();
    return path;
  }

  function resize() {
    var hero = canvas.parentElement;
    W = hero.offsetWidth;
    H = hero.offsetHeight;
    canvas.width = W;
    canvas.height = H;
    CX = W / 2;
    CY = H / 2;
    SHIELD_W = Math.min(W, H) * 0.72;
    SHIELD_H = SHIELD_W * 1.24;
    shieldPath = createShieldPath();
  }

  /* SHIELD FILL CHECK */
  function inShield(px, py) {
    return !!shieldPath && ctx.isPointInPath(shieldPath, px, py);
  }

  function isNearShieldEdge(px, py) {
    if (!inShield(px, py)) return false;

    // Probe in multiple directions; if any step exits, this point is near the border.
    var probe = Math.max(4, SHIELD_W * 0.0085);
    if (!inShield(px + probe, py)) return true;
    if (!inShield(px - probe, py)) return true;
    if (!inShield(px, py + probe)) return true;
    if (!inShield(px, py - probe)) return true;

    var d = probe * 0.72;
    if (!inShield(px + d, py + d)) return true;
    if (!inShield(px - d, py + d)) return true;
    if (!inShield(px + d, py - d)) return true;
    if (!inShield(px - d, py - d)) return true;

    return false;
  }

  /* BUILD TARGET POSITIONS */
  function buildTargets() {
    var targets = [];
    var targetCount = W < 900 ? 2600 : 4200;
    var xMin = CX - SHIELD_W * 0.56;
    var xMax = CX + SHIELD_W * 0.56;
    var yMin = CY - SHIELD_H * 0.5;
    var yMax = CY + SHIELD_H * 0.5;
    var attempts = 0;
    var maxAttempts = targetCount * 14;

    while (targets.length < targetCount && attempts < maxAttempts) {
      attempts++;
      var px = xMin + Math.random() * (xMax - xMin);
      var py = yMin + Math.random() * (yMax - yMin);
      if (inShield(px, py)) targets.push({ x: px, y: py });
    }

    return targets;
  }

  /* PARTICLES */
  var particles = [];
  var COLORS = [[0,220,255],[0,180,220],[20,200,240],[80,230,255],[0,160,200]];
  var particleSpriteCache = Object.create(null);
  var starSprite = null;

  function buildStarSprite() {
    var size = 24;
    var c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    var cctx = c.getContext('2d');
    if (!cctx) return null;

    var cx = size * 0.5;
    var cy = size * 0.5;
    var glow = cctx.createRadialGradient(cx, cy, 0, cx, cy, 12);
    glow.addColorStop(0, 'rgba(0, 220, 255, 0.4)');
    glow.addColorStop(1, 'rgba(0, 220, 255, 0)');
    cctx.fillStyle = glow;
    cctx.beginPath();
    cctx.arc(cx, cy, 12, 0, Math.PI * 2);
    cctx.fill();

    cctx.fillStyle = 'rgba(0, 220, 255, 0.6)';
    cctx.beginPath();
    cctx.arc(cx, cy, 4, 0, Math.PI * 2);
    cctx.fill();

    return c;
  }

  function getParticleSprite(cr, cg, cb) {
    var key = cr * 65536 + cg * 256 + cb;
    if (particleSpriteCache[key]) return particleSpriteCache[key];

    var size = 42;
    var c = document.createElement('canvas');
    c.width = size;
    c.height = size;
    var cctx = c.getContext('2d');
    if (!cctx) return null;

    var cx = size * 0.5;
    var cy = size * 0.5;
    var radius = size * 0.5;
    var glow = cctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    glow.addColorStop(0, 'rgba(' + cr + ',' + cg + ',' + cb + ',1)');
    glow.addColorStop(0.28, 'rgba(' + cr + ',' + cg + ',' + cb + ',0.78)');
    glow.addColorStop(0.62, 'rgba(' + cr + ',' + cg + ',' + cb + ',0.26)');
    glow.addColorStop(1, 'rgba(' + cr + ',' + cg + ',' + cb + ',0)');
    cctx.fillStyle = glow;
    cctx.beginPath();
    cctx.arc(cx, cy, radius, 0, Math.PI * 2);
    cctx.fill();

    cctx.fillStyle = 'rgba(' + cr + ',' + cg + ',' + cb + ',1)';
    cctx.beginPath();
    cctx.arc(cx, cy, size * 0.08, 0, Math.PI * 2);
    cctx.fill();

    particleSpriteCache[key] = c;
    return c;
  }

  function initParticles() {
    var targets = buildTargets();
    particles = [];
    targets.forEach(function (t) {
      var angle = Math.random() * Math.PI * 2;
      var dist = 300 + Math.random() * 500;
      var c = COLORS[Math.floor(Math.random() * COLORS.length)];
      particles.push({
        hx: t.x, hy: t.y,
        x: CX + Math.cos(angle) * dist,
        y: CY + Math.sin(angle) * dist,
        vx: 0, vy: 0,
        r: 0.3 + Math.random() * 0.24,
        cr: c[0], cg: c[1], cb: c[2],
        alpha: 0.65 + Math.random() * 0.35,
        edge: isNearShieldEdge(t.x, t.y),
        alive: true
      });
    });
  }

  /* MOUSE */
  var mouse = { x: -9999, y: -9999 };
  window.addEventListener('mousemove', function (e) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  window.addEventListener('mouseleave', function () {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  var MOUSE_R = 130, MOUSE_FORCE = 20, EASE = 0.072, FRICTION = 0.80;
  var startTime = Date.now();

  /* DRAW LOOP */
  function tick() {
    ctx.clearRect(0, 0, W, H);

    // Draw two larger circular borders.
    var borderRadius1 = Math.min(W, H) * 0.65;
    var borderRadius2 = Math.min(W, H) * 0.66;

    ctx.lineWidth = 2;

    // First circle.
    ctx.strokeStyle = 'rgba(0, 180, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(CX, CY, borderRadius1, 0, Math.PI * 2);
    ctx.stroke();

    // Second circle.
    ctx.strokeStyle = 'rgba(0, 180, 255, 0.2)';
    ctx.beginPath();
    ctx.arc(CX, CY, borderRadius2, 0, Math.PI * 2);
    ctx.stroke();

    // Rotating star points around the circles.
    var elapsed = (Date.now() - startTime) / 1000;
    var rotation1 = elapsed * 0.3;
    var rotation2 = -elapsed * 0.3;
    var numStars = 4;

    for (var s = 0; s < numStars; s++) {
      var angle = (s / numStars) * Math.PI * 2 + rotation1;
      var starX = CX + Math.cos(angle) * borderRadius1;
      var starY = CY + Math.sin(angle) * borderRadius1;

      if (starSprite) {
        ctx.drawImage(starSprite, starX - 12, starY - 12);
      } else {
        var starGlow = ctx.createRadialGradient(starX, starY, 0, starX, starY, 12);
        starGlow.addColorStop(0, 'rgba(0, 220, 255, 0.4)');
        starGlow.addColorStop(1, 'rgba(0, 220, 255, 0)');
        ctx.fillStyle = starGlow;
        ctx.beginPath();
        ctx.arc(starX, starY, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(0, 220, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(starX, starY, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (var s2 = 0; s2 < numStars; s2++) {
      var angle2 = (s2 / numStars) * Math.PI * 2 + rotation2;
      var starX2 = CX + Math.cos(angle2) * borderRadius2;
      var starY2 = CY + Math.sin(angle2) * borderRadius2;

      if (starSprite) {
        ctx.drawImage(starSprite, starX2 - 12, starY2 - 12);
      } else {
        var starGlow2 = ctx.createRadialGradient(starX2, starY2, 0, starX2, starY2, 12);
        starGlow2.addColorStop(0, 'rgba(0, 220, 255, 0.4)');
        starGlow2.addColorStop(1, 'rgba(0, 220, 255, 0)');
        ctx.fillStyle = starGlow2;
        ctx.beginPath();
        ctx.arc(starX2, starY2, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(0, 220, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(starX2, starY2, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Dots with enhanced glow.
    for (var k = 0; k < particles.length; k++) {
      var p = particles[k];
      if (!p.alive) continue;

      var ex = p.x - mouse.x, ey = p.y - mouse.y;
      var ed = Math.sqrt(ex * ex + ey * ey);
      if (ed < MOUSE_R && ed > 0) {
        var force = ((MOUSE_R - ed) / MOUSE_R);
        force = force * force * MOUSE_FORCE;
        p.vx += (ex / ed) * force;
        p.vy += (ey / ed) * force;
      }

      p.vx += (p.hx - p.x) * EASE;
      p.vy += (p.hy - p.y) * EASE;
      p.vx *= FRICTION;
      p.vy *= FRICTION;
      p.x += p.vx;
      p.y += p.vy;

      var sprite = getParticleSprite(p.cr, p.cg, p.cb);
      if (sprite) {
        var edgeScale = p.edge ? 1.5 : 1;
        var d = p.r * 7.6 * edgeScale;
        if (p.edge) {
          // Secondary halo pass for border particles.
          var hd = d * 2.05;
          ctx.globalAlpha = Math.min(1, p.alpha * 0.56);
          ctx.drawImage(sprite, p.x - hd * 0.5, p.y - hd * 0.5, hd, hd);
        }
        ctx.globalAlpha = Math.min(1, p.alpha * (p.edge ? 1.24 : 1));
        ctx.drawImage(sprite, p.x - d * 0.5, p.y - d * 0.5, d, d);
      } else {
        var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.5);
        grd.addColorStop(0, 'rgba(' + p.cr + ',' + p.cg + ',' + p.cb + ',' + p.alpha + ')');
        grd.addColorStop(0.4, 'rgba(' + p.cr + ',' + p.cg + ',' + p.cb + ',' + (p.alpha * 0.5) + ')');
        grd.addColorStop(1, 'rgba(' + p.cr + ',' + p.cg + ',' + p.cb + ',0)');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.cr + ',' + p.cg + ',' + p.cb + ',' + p.alpha + ')';
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    requestAnimationFrame(tick);
  }

  resize();
  starSprite = buildStarSprite();
  initParticles();
  tick();

  window.addEventListener('resize', function () {
    resize();
    initParticles();
  });
})();
