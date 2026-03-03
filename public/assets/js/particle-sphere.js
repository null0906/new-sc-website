(function() {
  'use strict';

  var canvas = document.getElementById('particleSphere');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var isMobile = window.innerWidth < 768;

  // --- CONFIG ---
  var NODE_COUNT = isMobile ? 320 : 700;
  var SHIELD_SCALE = isMobile ? 0.64 : 0.74;
  var NODE_SIZE_MIN = 0.6;
  var NODE_SIZE_MAX = 1.8;
  var LINE_DIST = isMobile ? 0.09 : 0.065;
  var DISPERSE_RADIUS = isMobile ? 130 : 260;
  var DISPERSE_FORCE = 16;
  var RETURN_SPEED = 0.014;
  var RING_OUTER_PAD_PX = isMobile ? 5 : 8;
  var RING_GAP_PX = isMobile ? 5 : 8;
  var DUST_COUNT = isMobile ? 1400 : 3500;
  var DUST_SIZE = 0.35;
  var MOUSE_TILT = 0.12;
  var MAX_TILT = 0.08;

  var W, H, cx, cy, sH;
  var mx = 0.5, my = 0.5;
  var mpx = -9999, mpy = -9999;
  var cRx = 0, cRy = 0;
  var nodes = [];
  var dust = [];
  var ringAngle = 0;

  var C = [
    { r: 0, g: 220, b: 255 },
    { r: 0, g: 190, b: 240 },
    { r: 20, g: 160, b: 220 },
    { r: 60, g: 200, b: 255 },
    { r: 120, g: 235, b: 255 },
    { r: 0, g: 140, b: 200 },
  ];

  function resize() {
    var r = canvas.parentElement.getBoundingClientRect();
    var d = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    canvas.width = W * d; canvas.height = H * d;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(d, 0, 0, d, 0, 0);
    cx = W / 2; cy = H / 2;
    sH = Math.min(W, H) * SHIELD_SCALE;
  }

  // ============================================================
  // SHIELD SHAPE - crest profile tuned to reference proportions
  // ============================================================
  var shieldPts = [
    { x: 0.00, y: -0.66 },
    { x: -0.07, y: -0.63 },
    { x: -0.16, y: -0.60 },
    { x: -0.27, y: -0.56 },
    { x: -0.39, y: -0.52 },
    { x: -0.50, y: -0.48 },
    { x: -0.58, y: -0.44 },
    { x: -0.62, y: -0.35 },
    { x: -0.62, y: -0.22 },
    { x: -0.61, y: -0.07 },
    { x: -0.59, y: 0.09 },
    { x: -0.55, y: 0.24 },
    { x: -0.49, y: 0.38 },
    { x: -0.41, y: 0.52 },
    { x: -0.31, y: 0.64 },
    { x: -0.20, y: 0.75 },
    { x: -0.10, y: 0.84 },
    { x: 0.00, y: 0.90 },
    { x: 0.10, y: 0.84 },
    { x: 0.20, y: 0.75 },
    { x: 0.31, y: 0.64 },
    { x: 0.41, y: 0.52 },
    { x: 0.49, y: 0.38 },
    { x: 0.55, y: 0.24 },
    { x: 0.59, y: 0.09 },
    { x: 0.61, y: -0.07 },
    { x: 0.62, y: -0.22 },
    { x: 0.62, y: -0.35 },
    { x: 0.58, y: -0.44 },
    { x: 0.50, y: -0.48 },
    { x: 0.39, y: -0.52 },
    { x: 0.27, y: -0.56 },
    { x: 0.16, y: -0.60 },
    { x: 0.07, y: -0.63 },
  ];

  function catmullRom(p0, p1, p2, p3, t) {
    var tension = 0.78;
    var s = (1 - tension) / 2;
    var t2 = t * t, t3 = t2 * t;
    var m1x = (p2.x - p0.x) * s;
    var m1y = (p2.y - p0.y) * s;
    var m2x = (p3.x - p1.x) * s;
    var m2y = (p3.y - p1.y) * s;
    return {
      x: (2*t3 - 3*t2 + 1) * p1.x + (t3 - 2*t2 + t) * m1x + (-2*t3 + 3*t2) * p2.x + (t3 - t2) * m2x,
      y: (2*t3 - 3*t2 + 1) * p1.y + (t3 - 2*t2 + t) * m1y + (-2*t3 + 3*t2) * p2.y + (t3 - t2) * m2y
    };
  }

  function shieldEdge(t) {
    var n = shieldPts.length;
    var pos = t * n;
    var i = Math.floor(pos);
    var frac = pos - i;
    var p0 = shieldPts[(i - 1 + n) % n];
    var p1 = shieldPts[i % n];
    var p2 = shieldPts[(i + 1) % n];
    var p3 = shieldPts[(i + 2) % n];
    return catmullRom(p0, p1, p2, p3, frac);
  }

  var shieldOutline = [];
  var shieldBounds = { minX: -0.62, maxX: 0.62, minY: -0.66, maxY: 0.90 };
  var shieldMidXNorm = 0;
  var shieldMidYNorm = 0.12;
  var shieldRadiusNorm = 0.78;
  function buildOutline() {
    shieldOutline = [];
    for (var i = 0; i < 520; i++) {
      shieldOutline.push(shieldEdge(i / 520));
    }

    var minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (var j = 0; j < shieldOutline.length; j++) {
      var p = shieldOutline[j];
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }

    var pad = 0.02;
    shieldBounds = {
      minX: minX - pad,
      maxX: maxX + pad,
      minY: minY - pad,
      maxY: maxY + pad
    };

    shieldMidXNorm = (minX + maxX) * 0.5;
    shieldMidYNorm = (minY + maxY) * 0.5;

    var maxR = 0;
    for (var k = 0; k < shieldOutline.length; k++) {
      var q = shieldOutline[k];
      var dx = q.x - shieldMidXNorm;
      var dy = q.y - shieldMidYNorm;
      var rr = Math.sqrt(dx * dx + dy * dy);
      if (rr > maxR) maxR = rr;
    }
    shieldRadiusNorm = maxR;
  }

  function insideShield(px, py) {
    var inside = false;
    var n = shieldOutline.length;
    for (var i = 0, j = n - 1; i < n; j = i++) {
      var xi = shieldOutline[i].x, yi = shieldOutline[i].y;
      var xj = shieldOutline[j].x, yj = shieldOutline[j].y;
      if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
        inside = !inside;
      }
    }
    return inside;
  }

  function generate() {
    nodes = []; dust = [];
    buildOutline();

    // Edge nodes
    var edgeN = Math.floor(NODE_COUNT * 0.38);
    for (var i = 0; i < edgeN; i++) {
      var t = i / edgeN;
      var pt = shieldEdge(t);
      var j = 0.0035;
      nodes.push(mkNode(pt.x + (Math.random()-0.5)*j, pt.y + (Math.random()-0.5)*j, (Math.random()-0.5)*0.05, true));
    }

    // Interior nodes
    var fillN = NODE_COUNT - edgeN;
    var filled = 0, att = 0;
    var spanX = shieldBounds.maxX - shieldBounds.minX;
    var spanY = shieldBounds.maxY - shieldBounds.minY;
    while (filled < fillN && att < fillN * 15) {
      att++;
      var rx = shieldBounds.minX + Math.random() * spanX;
      var ry = shieldBounds.minY + Math.random() * spanY;
      if (insideShield(rx, ry)) {
        nodes.push(mkNode(rx, ry, (Math.random()-0.5)*0.08, false));
        filled++;
      }
    }

    // Dust
    var df = 0; att = 0;
    while (df < DUST_COUNT && att < DUST_COUNT * 10) {
      att++;
      var rx = shieldBounds.minX + Math.random() * spanX;
      var ry = shieldBounds.minY + Math.random() * spanY;
      if (insideShield(rx, ry)) {
        dust.push({
          ox: rx, oy: ry, oz: (Math.random()-0.5)*0.06,
          dx: 0, dy: 0, dz: 0,
          c: C[Math.floor(Math.random()*C.length)],
          sz: DUST_SIZE * (0.5 + Math.random()*0.5),
          br: 0.06 + Math.random()*0.1
        });
        df++;
      }
    }
  }

  function mkNode(x, y, z, isEdge) {
    var ci = isEdge ? (Math.random()<0.6 ? 0 : Math.floor(Math.random()*C.length)) : Math.floor(Math.random()*C.length);
    return {
      ox: x, oy: y, oz: z, dx: 0, dy: 0, dz: 0,
      c: C[ci],
      sz: isEdge ? (NODE_SIZE_MAX*(0.7+Math.random()*0.3)) : (NODE_SIZE_MIN+Math.random()*(NODE_SIZE_MAX-NODE_SIZE_MIN)),
      br: isEdge ? (0.7+Math.random()*0.3) : (0.25+Math.random()*0.45),
      tp: Math.random()*Math.PI*2,
      ts: 0.5+Math.random()*1.8,
      edge: isEdge
    };
  }

  function rot3(px, py, pz, rx, ry) {
    var cY=Math.cos(ry),sY=Math.sin(ry);
    var x1=px*cY-pz*sY, z1=px*sY+pz*cY;
    var cX=Math.cos(rx),sX=Math.sin(rx);
    return { x:x1, y:py*cX-z1*sX, z:py*sX+z1*cX };
  }

  function disperseP(p) {
    var wx=cx+(p.ox+p.dx)*sH, wy=cy+(p.oy+p.dy)*sH;
    var ddx=wx-mpx, ddy=wy-mpy;
    var md=Math.sqrt(ddx*ddx+ddy*ddy);
    if (md<DISPERSE_RADIUS && md>0) {
      var f=Math.pow(1-md/DISPERSE_RADIUS,1.2)*DISPERSE_FORCE;
      var a=Math.atan2(ddy,ddx);
      p.dx+=Math.cos(a)*f*0.18/sH;
      p.dy+=Math.sin(a)*f*0.18/sH;
      p.dz+=(Math.random()-0.5)*f*0.01;
    }
    p.dx*=(1-RETURN_SPEED); p.dy*=(1-RETURN_SPEED); p.dz*=(1-RETURN_SPEED*2);
  }

  function drawRing(angle, ox, oy, radius, thickness, alpha) {
    ctx.save(); ctx.translate(cx + ox, cy + oy);
    var seg=60;
    for (var i=0;i<seg;i++) {
      var a1=angle+(i/seg)*Math.PI*2;
      var a2=angle+((i+1)/seg)*Math.PI*2;
      var sa=alpha*(0.12+0.88*Math.pow(Math.abs(Math.sin(a1*1.5+angle)),0.7));
      ctx.beginPath(); ctx.arc(0,0,radius,a1,a2);
      ctx.strokeStyle='rgba(0,220,255,'+sa+')'; ctx.lineWidth=thickness; ctx.stroke();
    }
    for (var n=0;n<3;n++) {
      var na=angle+(n/3)*Math.PI*2;
      var nx=Math.cos(na)*radius, ny=Math.sin(na)*radius;
      var g=ctx.createRadialGradient(nx,ny,0,nx,ny,16);
      g.addColorStop(0,'rgba(0,240,255,0.55)');
      g.addColorStop(0.4,'rgba(0,200,255,0.12)');
      g.addColorStop(1,'rgba(0,200,255,0)');
      ctx.fillStyle=g; ctx.fillRect(nx-16,ny-16,32,32);
      ctx.beginPath(); ctx.arc(nx,ny,2,0,Math.PI*2);
      ctx.fillStyle='rgba(200,255,255,0.9)'; ctx.fill();
    }
    ctx.restore();
  }

  function render(time) {
    time=time||0;
    ctx.clearRect(0,0,W,H);

    var tRy=(mx-0.5)*MOUSE_TILT;
    var tRx=(my-0.5)*MOUSE_TILT*0.5;
    tRy=Math.max(-MAX_TILT,Math.min(MAX_TILT,tRy));
    tRx=Math.max(-MAX_TILT*0.6,Math.min(MAX_TILT*0.6,tRx));
    cRx+=(tRx-cRx)*0.02; cRy+=(tRy-cRy)*0.02;

    ringAngle+=0.005;
    var ringOffsetX = shieldMidXNorm * sH;
    var ringOffsetY = shieldMidYNorm * sH;
    var baseRingR = shieldRadiusNorm * sH + RING_OUTER_PAD_PX;
    drawRing(ringAngle, ringOffsetX, ringOffsetY, baseRingR, 1.6, 0.32);
    drawRing(-ringAngle*0.7+1.2, ringOffsetX, ringOffsetY, baseRingR + RING_GAP_PX, 0.9, 0.16);

    for (var i=0;i<dust.length;i++) disperseP(dust[i]);

    var proj=[];
    var ld2=LINE_DIST*LINE_DIST;

    for (var i=0;i<nodes.length;i++) {
      var p=nodes[i]; disperseP(p);
      var fx=(p.ox+p.dx)*sH, fy=(p.oy+p.dy)*sH, fz=(p.oz+p.dz)*sH;
      var r3=rot3(fx,fy,fz,cRx,cRy);
      var sc=900/(900+r3.z+sH*0.5);
      var dn=(r3.z+sH)/(sH*2);
      var tw=0.72+0.28*Math.sin(time*0.001*p.ts+p.tp);
      var da=Math.sqrt(p.dx*p.dx+p.dy*p.dy);
      var db=1+da*15;

      proj.push({
        x:cx+r3.x*sc, y:cy+r3.y*sc, z:r3.z,
        sz:p.sz*sc*Math.min(db,2.0),
        op:Math.min((0.12+dn*0.88)*p.br*tw*Math.min(db,2.5),1),
        c:p.c, edge:p.edge,
        nx:p.ox+p.dx, ny:p.oy+p.dy
      });
    }

    // Lines
    for (var i=0;i<proj.length;i++) {
      var a=proj[i]; if(a.op<0.08) continue;
      for (var j=i+1;j<proj.length;j++) {
        var b=proj[j]; if(b.op<0.08) continue;
        var dx=a.nx-b.nx, dy=a.ny-b.ny, d2=dx*dx+dy*dy;
        if (d2<ld2) {
          var la=(1-Math.sqrt(d2)/LINE_DIST)*Math.min(a.op,b.op)*0.35;
          if(la>0.01) {
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
            ctx.strokeStyle='rgba(0,200,255,'+la+')'; ctx.lineWidth=0.5; ctx.stroke();
          }
        }
      }
    }

    // Dust
    for (var i=0;i<dust.length;i++) {
      var d=dust[i];
      var fx=(d.ox+d.dx)*sH, fy=(d.oy+d.dy)*sH, fz=(d.oz+d.dz)*sH;
      var r3=rot3(fx,fy,fz,cRx,cRy);
      var sc=900/(900+r3.z+sH*0.5);
      ctx.beginPath(); ctx.arc(cx+r3.x*sc,cy+r3.y*sc,d.sz*sc,0,Math.PI*2);
      ctx.fillStyle='rgba('+d.c.r+','+d.c.g+','+d.c.b+','+d.br+')'; ctx.fill();
    }

    // Nodes
    proj.sort(function(a,b){return a.z-b.z;});
    for (var j=0;j<proj.length;j++) {
      var pt=proj[j], al=pt.op;
      if(al>0.2) {
        ctx.beginPath(); ctx.arc(pt.x,pt.y,pt.sz*(pt.edge?5:3.5),0,Math.PI*2);
        ctx.fillStyle='rgba('+pt.c.r+','+pt.c.g+','+pt.c.b+','+(al*0.08)+')'; ctx.fill();
      }
      if(al>0.35&&pt.sz>1.0) {
        ctx.beginPath(); ctx.arc(pt.x,pt.y,pt.sz*0.5,0,Math.PI*2);
        ctx.fillStyle='rgba(200,255,255,'+(al*0.6)+')'; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(pt.x,pt.y,pt.sz,0,Math.PI*2);
      ctx.fillStyle='rgba('+pt.c.r+','+pt.c.g+','+pt.c.b+','+al+')'; ctx.fill();
    }

    // Ambient
    var gr=ctx.createRadialGradient(cx,cy,0,cx,cy,sH*0.7);
    gr.addColorStop(0,'rgba(0,200,255,0.04)');
    gr.addColorStop(0.5,'rgba(0,140,220,0.02)');
    gr.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=gr; ctx.fillRect(0,0,W,H);

    requestAnimationFrame(render);
  }

  function onMM(e) {
    var r=canvas.parentElement.getBoundingClientRect();
    mx=(e.clientX-r.left)/r.width; my=(e.clientY-r.top)/r.height;
    mpx=e.clientX-r.left; mpy=e.clientY-r.top;
  }
  function onTM(e) {
    if(e.touches.length>0) {
      var r=canvas.parentElement.getBoundingClientRect();
      mx=(e.touches[0].clientX-r.left)/r.width; my=(e.touches[0].clientY-r.top)/r.height;
      mpx=e.touches[0].clientX-r.left; mpy=e.touches[0].clientY-r.top;
    }
  }
  function onML() { mpx=-9999; mpy=-9999; }

  function init() {
    resize(); generate();
    window.addEventListener('mousemove',onMM,{passive:true});
    window.addEventListener('touchmove',onTM,{passive:true});
    canvas.parentElement.addEventListener('mouseleave',onML,{passive:true});
    window.addEventListener('resize',function(){resize();},{passive:true});
    canvas.style.opacity='0'; canvas.style.transition='opacity 2s ease-out';
    setTimeout(function(){canvas.style.opacity='1';},500);
    render(0);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
