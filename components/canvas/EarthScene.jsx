import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const TEXTURES = {
  day: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_atmos_2048.jpg',
  night: 'https://raw.githubusercontent.com/turban/webgl-earth/master/images/earth-night.jpg',
  clouds: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_clouds_1024.png',
  bump: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r128/examples/textures/planets/earth_normal_2048.jpg',
}

const threatPairs = [
  ['Eastern Europe', 52.5, 21.0, 'Mumbai', 19.0, 72.8],
  ['East Asia', 35.7, 139.7, 'Bangalore', 12.97, 77.59],
  ['North Africa', 30.0, 31.2, 'London', 51.5, -0.1],
  ['SE Asia', 13.7, 100.5, 'Pune', 18.52, 73.85],
  ['Eastern Europe', 50.4, 30.5, 'Singapore', 1.3, 103.8],
  ['East Asia', 31.2, 121.5, 'New York', 40.7, -74.0],
  ['South America', -23.5, -46.6, 'Delhi', 28.61, 77.2],
  ['West Africa', 6.5, 3.4, 'Mumbai', 19.0, 72.8],
  ['North America', 37.8, -122.4, 'Bangalore', 12.97, 77.59],
]

const networkHubs = [
  ['Mumbai', 19.0, 72.8], ['Bangalore', 12.97, 77.59], ['Pune', 18.52, 73.85],
  ['Delhi', 28.61, 77.2], ['Singapore', 1.3, 103.8], ['London', 51.5, -0.1],
  ['New York', 40.7, -74.0], ['Frankfurt', 50.1, 8.7], ['Tokyo', 35.7, 139.7],
  ['Sydney', -33.86, 151.2], ['Dubai', 25.2, 55.3], ['São Paulo', -23.5, -46.6],
  ['Toronto', 43.65, -79.38], ['Amsterdam', 52.36, 4.9], ['Jakarta', -6.2, 106.8],
  ['Johannesburg', -26.2, 28.0], ['Seoul', 37.56, 126.97], ['Paris', 48.85, 2.35],
]

function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

function createFallbackTexture(type) {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const ctx = canvas.getContext('2d')

  if (type === 'night') {
    ctx.fillStyle = '#050914'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(255,138,61,0.75)'
    for (let i = 0; i < 260; i += 1) {
      const x = Math.random() * canvas.width
      const y = 120 + Math.random() * 240
      ctx.fillRect(x, y, 1.2, 1.2)
    }
  } else if (type === 'clouds') {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < 120; i += 1) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const w = 35 + Math.random() * 120
      const g = ctx.createRadialGradient(x, y, 0, x, y, w)
      g.addColorStop(0, 'rgba(255,255,255,0.38)')
      g.addColorStop(0.6, 'rgba(255,255,255,0.14)')
      g.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.ellipse(x, y, w, w * 0.3, Math.random() * Math.PI, 0, Math.PI * 2)
      ctx.fill()
    }
  } else {
    const ocean = ctx.createLinearGradient(0, 0, 0, canvas.height)
    ocean.addColorStop(0, '#123b66')
    ocean.addColorStop(0.52, '#0c2748')
    ocean.addColorStop(1, '#04172e')
    ctx.fillStyle = ocean
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    const land = [
      [185, 190, 165, 86], [310, 265, 120, 76], [520, 176, 150, 88],
      [637, 236, 105, 70], [753, 187, 168, 74], [870, 310, 118, 58],
    ]
    land.forEach(([x, y, w, h], index) => {
      const g = ctx.createRadialGradient(x, y, 10, x, y, Math.max(w, h))
      g.addColorStop(0, index % 2 ? '#6f8f5d' : '#527b54')
      g.addColorStop(0.7, '#315a43')
      g.addColorStop(1, 'rgba(28,58,48,0)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.ellipse(x, y, w, h, index * 0.3, 0, Math.PI * 2)
      ctx.fill()
    })
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

function loadTexture(loader, url, fallback, onLoaded) {
  loader.load(
    url,
    (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace
      texture.anisotropy = 4
      onLoaded(texture)
      fallback.dispose()
    },
    undefined,
    () => onLoaded(fallback),
  )
}

function createArcCurve(start, end, height = 0.4) {
  const mid = start.clone().add(end).multiplyScalar(0.5).normalize()
  mid.multiplyScalar(1 + height)
  return new THREE.CatmullRomCurve3([start, mid, end], false, 'catmullrom', 0.5)
}

function orientSurfaceObject(object, position, camera) {
  object.position.copy(position)
  object.lookAt(camera.position)
}

function targetCameraDistance(progress, isMobile) {
  return isMobile ? 2.58 : 2.42
}

function targetScrollRotation(progress) {
  return progress * Math.PI * 4
}

function targetCameraHeight(progress) {
  return 0.24
}

function isLandApprox(lat, lon) {
  const inEllipse = (centerLat, centerLon, latRadius, lonRadius) => {
    const dLat = (lat - centerLat) / latRadius
    const dLon = (lon - centerLon) / lonRadius
    return dLat * dLat + dLon * dLon < 1
  }

  return (
    inEllipse(48, -102, 27, 42) ||
    inEllipse(16, -88, 18, 18) ||
    inEllipse(-16, -60, 34, 24) ||
    inEllipse(5, 20, 38, 24) ||
    inEllipse(49, 18, 19, 34) ||
    inEllipse(56, 82, 26, 55) ||
    inEllipse(24, 78, 16, 17) ||
    inEllipse(31, 112, 18, 21) ||
    inEllipse(4, 112, 14, 25) ||
    inEllipse(-25, 134, 18, 24) ||
    inEllipse(63, -42, 11, 18) ||
    inEllipse(-42, 172, 9, 8)
  )
}

function createDigitalLandDots(isMobile) {
  const step = isMobile ? 3.1 : 2.1
  const positions = []
  const sizes = []
  for (let lat = -58; lat <= 74; lat += step) {
    for (let lon = -180; lon <= 180; lon += step) {
      if (!isLandApprox(lat, lon)) continue
      const jitterLat = lat + (Math.random() - 0.5) * step * 0.38
      const jitterLon = lon + (Math.random() - 0.5) * step * 0.38
      const point = latLonToVector3(jitterLat, jitterLon, 1.014)
      positions.push(point.x, point.y, point.z)
      sizes.push(0.65 + Math.random() * 0.8)
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))
  return geometry
}

export default function EarthScene() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return undefined

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isMobile = window.innerWidth < 768
    const maxActiveArcs = isMobile ? 3 : 6
    const brandAccent = getComputedStyle(document.documentElement).getPropertyValue('--brand-primary').trim() || '#FF6000'

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x020408)

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      1000,
    )
    camera.position.set(0, 0.24, isMobile ? 2.58 : 2.42)
    camera.lookAt(0, -0.28, 0)

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    } catch (error) {
      container.classList.add('earth-scene-fallback')
      console.error('EarthScene WebGL unavailable:', error)
      return undefined
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 0.8

    const earthGroup = new THREE.Group()
    earthGroup.position.y = isMobile ? -0.58 : -0.52
    scene.add(earthGroup)

    const earthGeometry = new THREE.SphereGeometry(1, isMobile ? 32 : 64, isMobile ? 32 : 64)
    const earthMaterial = new THREE.MeshBasicMaterial({
      color: 0x040810,
      transparent: true,
      opacity: 0.42,
    })
    const earth = new THREE.Mesh(earthGeometry, earthMaterial)
    earth.rotation.x = THREE.MathUtils.degToRad(23.5)
    earthGroup.add(earth)

    const landDotGeometry = createDigitalLandDots(isMobile)
    const landDotMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(brandAccent),
      size: isMobile ? 0.022 : 0.025,
      sizeAttenuation: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const landDots = new THREE.Points(landDotGeometry, landDotMaterial)
    earthGroup.add(landDots)

    const wireGeometry = new THREE.WireframeGeometry(new THREE.SphereGeometry(1.018, 36, 22))
    const wireMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(brandAccent),
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const wireGlobe = new THREE.LineSegments(wireGeometry, wireMaterial)
    earthGroup.add(wireGlobe)

    const atmosphereGeometry = new THREE.SphereGeometry(1.06, isMobile ? 32 : 64, isMobile ? 32 : 64)
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: { glowColor: { value: new THREE.Color(brandAccent) } },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        uniform vec3 glowColor;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
          gl_FragColor = vec4(glowColor, intensity * 1.28);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    earthGroup.add(atmosphere)

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.8)
    sunLight.position.set(5, 3, 5)
    scene.add(sunLight)
    scene.add(new THREE.AmbientLight(0x111122, 0.4))
    const rimLight = new THREE.DirectionalLight(0x1144aa, 0.3)
    rimLight.position.set(-5, 0, -3)
    scene.add(rimLight)

    const starCount = isMobile ? 1500 : 3000
    const starGeometry = new THREE.BufferGeometry()
    const starPositions = new Float32Array(starCount * 3)
    const starSizes = new Float32Array(starCount)
    for (let i = 0; i < starCount; i += 1) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 80 + Math.random() * 70
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      starPositions[i * 3 + 2] = r * Math.cos(phi)
      starSizes[i] = Math.random() * 1.5 + 0.3
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1))
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
    })
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    const defendedCities = Array.from(
      new Map(threatPairs.map((pair) => [pair[3], [pair[3], pair[4], pair[5]]])).values(),
    )
    const cityDotGeometry = new THREE.SphereGeometry(0.008, 8, 8)
    const haloGeometry = new THREE.PlaneGeometry(0.09, 0.09)
    const makeHaloTexture = () => {
      const haloCanvas = document.createElement('canvas')
      haloCanvas.width = 96
      haloCanvas.height = 96
      const ctx = haloCanvas.getContext('2d')
      const g = ctx.createRadialGradient(48, 48, 0, 48, 48, 48)
      g.addColorStop(0, 'rgba(255,255,255,0.82)')
      g.addColorStop(0.26, 'rgba(255,255,255,0.5)')
      g.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, 96, 96)
      const texture = new THREE.CanvasTexture(haloCanvas)
      texture.colorSpace = THREE.SRGBColorSpace
      return texture
    }
    const haloTexture = makeHaloTexture()
    const cityNodes = defendedCities.map((city, index) => {
      const position = latLonToVector3(city[1], city[2], 1.016)
      const dot = new THREE.Mesh(
        cityDotGeometry,
        new THREE.MeshBasicMaterial({ color: new THREE.Color(brandAccent), transparent: true, opacity: 0.95 }),
      )
      dot.position.copy(position)
      dot.userData.phase = index * 0.72 + Math.random()
      const halo = new THREE.Mesh(
        haloGeometry,
        new THREE.MeshBasicMaterial({
          map: haloTexture,
          color: new THREE.Color(brandAccent),
          transparent: true,
          opacity: 0.26,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.DoubleSide,
        }),
      )
      orientSurfaceObject(halo, position.clone().multiplyScalar(1.006), camera)
      earthGroup.add(dot, halo)
      return { name: city[0], lat: city[1], lon: city[2], position, dot, halo, boost: 0 }
    })

    let scannerSweep = null
    let scannerMaterial = null
    if (!isMobile) {
      const sweepGeometry = new THREE.TorusGeometry(1.018, 0.0016, 6, 160)
      scannerMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(brandAccent),
        transparent: true,
        opacity: 0.24,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      scannerSweep = new THREE.Mesh(sweepGeometry, scannerMaterial)
      scannerSweep.rotation.x = Math.PI / 2
      earthGroup.add(scannerSweep)
    }

    const networkObjects = []
    if (!isMobile) {
      const hubPositions = networkHubs.map((hub) => latLonToVector3(hub[1], hub[2], 1.011))
      const hubGeometry = new THREE.SphereGeometry(0.004, 6, 6)
      const hubMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(brandAccent), transparent: true, opacity: 0.26 })
      hubPositions.forEach((position) => {
        const hub = new THREE.Mesh(hubGeometry, hubMaterial)
        hub.position.copy(position)
        earthGroup.add(hub)
        networkObjects.push(hub)
      })
      const meshMaterial = new THREE.LineBasicMaterial({ color: new THREE.Color(brandAccent), transparent: true, opacity: 0.12 })
      for (let i = 0; i < hubPositions.length - 1; i += 1) {
        const curve = createArcCurve(hubPositions[i], hubPositions[(i + 5) % hubPositions.length], 0.13)
        const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(34)), meshMaterial.clone())
        earthGroup.add(line)
        networkObjects.push(line)
      }
      networkObjects.push({ geometry: hubGeometry, material: hubMaterial })
    }

    const activeArcs = []
    const flashes = []
    const arcPool = []
    const arcPoolSize = isMobile ? 5 : 10
    const arcPointCount = 100
    const packetGeometry = new THREE.SphereGeometry(0.006, 10, 10)
    const flashGeometry = new THREE.RingGeometry(0, 0.001, 20)
    const flashMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(brandAccent),
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    })

    for (let i = 0; i < arcPoolSize; i += 1) {
      const neutralGeometry = new THREE.BufferGeometry()
      const redGeometry = new THREE.BufferGeometry()
      const blankPoints = Array.from({ length: arcPointCount + 1 }, () => new THREE.Vector3())
      neutralGeometry.setFromPoints(blankPoints)
      redGeometry.setFromPoints(blankPoints)
      neutralGeometry.setDrawRange(0, 0)
      redGeometry.setDrawRange(0, 0)
      const neutralLine = new THREE.Line(
        neutralGeometry,
        new THREE.LineBasicMaterial({ color: new THREE.Color(brandAccent), transparent: true, opacity: 0 }),
      )
      const redLine = new THREE.Line(
        redGeometry,
        new THREE.LineBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0 }),
      )
      const packet = new THREE.Mesh(
        packetGeometry,
        new THREE.MeshBasicMaterial({ color: new THREE.Color(brandAccent), transparent: true, opacity: 0, blending: THREE.AdditiveBlending }),
      )
      neutralLine.visible = false
      redLine.visible = false
      packet.visible = false
      earthGroup.add(neutralLine, redLine, packet)
      arcPool.push({ neutralGeometry, redGeometry, neutralLine, redLine, packet, active: false })
    }

    let pairIndex = 0

    const spawnArc = () => {
      if (activeArcs.length >= maxActiveArcs) return
      const pooled = arcPool.find((arc) => !arc.active)
      if (!pooled) return
      const pair = threatPairs[pairIndex % threatPairs.length]
      pairIndex += 1
      const start = latLonToVector3(pair[1], pair[2], 1.02)
      const end = latLonToVector3(pair[4], pair[5], 1.02)
      const curve = createArcCurve(start, end, 0.25 + Math.random() * 0.25)
      const points = curve.getPoints(arcPointCount)
      pooled.neutralGeometry.setFromPoints(points)
      pooled.redGeometry.setFromPoints(points)
      pooled.neutralLine.geometry.setDrawRange(0, 1)
      pooled.redLine.geometry.setDrawRange(0, 1)
      pooled.neutralLine.material.opacity = 0.88
      pooled.redLine.material.opacity = 0.95
      pooled.packet.material.opacity = 1
      pooled.neutralLine.visible = true
      pooled.redLine.visible = true
      pooled.packet.visible = true
      pooled.active = true
      activeArcs.push({
        pooled,
        curve,
        progress: 0,
        speed: 0.22 + Math.random() * 0.18,
        state: 'traveling',
        fadeAlpha: 1,
        pairIndex,
        target: end,
      })
    }

    const spawnFlash = (position) => {
      const ring = new THREE.Mesh(flashGeometry, flashMaterial.clone())
      ring.position.copy(position)
      ring.lookAt(position.clone().multiplyScalar(2))
      ring.userData.life = 0
      earthGroup.add(ring)
      flashes.push(ring)
    }

    const updateThreatArcs = (delta) => {
      while (activeArcs.length < maxActiveArcs) spawnArc()

      for (let i = activeArcs.length - 1; i >= 0; i -= 1) {
        const arc = activeArcs[i]
        const visible = Math.max(1, Math.floor(Math.min(arc.progress, 1) * arcPointCount))
        if (arc.state === 'traveling') {
          arc.progress += arc.speed * delta
          const headStart = Math.max(0, visible - 9)
          arc.pooled.neutralGeometry.setDrawRange(0, visible)
          arc.pooled.redGeometry.setDrawRange(headStart, Math.max(1, visible - headStart))
          arc.pooled.packet.position.copy(arc.curve.getPointAt(Math.min(arc.progress, 1)))
          arc.pooled.packet.scale.setScalar(1 + Math.sin(performance.now() * 0.012) * 0.22)
          if (arc.progress >= 1) {
            arc.state = 'intercepted'
            spawnFlash(arc.target)
          }
        } else {
          arc.state = 'fading'
          arc.fadeAlpha -= delta * 2.2
          arc.pooled.neutralLine.material.opacity = Math.max(arc.fadeAlpha * 0.88, 0)
          arc.pooled.redLine.material.opacity = Math.max(arc.fadeAlpha * 0.5, 0)
          arc.pooled.packet.material.opacity = Math.max(arc.fadeAlpha, 0)
          if (arc.fadeAlpha <= 0) {
            arc.pooled.neutralLine.visible = false
            arc.pooled.redLine.visible = false
            arc.pooled.packet.visible = false
            arc.pooled.active = false
            activeArcs.splice(i, 1)
          }
        }
      }
    }

    const updateCityPulses = (elapsed, sweepAngle, delta) => {
      cityNodes.forEach((node) => {
        const pulse = (Math.sin(elapsed * Math.PI + node.dot.userData.phase) + 1) / 2
        const longitudeAngle = THREE.MathUtils.euclideanModulo(THREE.MathUtils.degToRad(node.lon + 180), Math.PI * 2)
        const sweepDelta = Math.abs(Math.atan2(Math.sin(longitudeAngle - sweepAngle), Math.cos(longitudeAngle - sweepAngle)))
        const sweepBoost = !isMobile && sweepDelta < 0.16 ? 1 - sweepDelta / 0.16 : 0
        node.dot.scale.setScalar(1 + pulse * 1.5 + sweepBoost * 1.3)
        node.dot.material.opacity = 0.55 + pulse * 0.3 + sweepBoost * 0.45
        node.halo.material.opacity = 0.14 + pulse * 0.08 + sweepBoost * 0.24
        node.halo.lookAt(camera.position)
      })

      for (let i = flashes.length - 1; i >= 0; i -= 1) {
        const flash = flashes[i]
        flash.userData.life += delta
        const progress = Math.min(flash.userData.life / 0.4, 1)
        flash.scale.setScalar(progress * 100)
        flash.material.opacity = 1 - progress
        if (progress >= 1) {
          earthGroup.remove(flash)
          flash.material.dispose()
          flashes.splice(i, 1)
        }
      }
    }

    let mouseX = 0
    let mouseY = 0
    let mouseParallaxX = 0
    let mouseParallaxY = 0
    let scrollProgress = 0
    let camDist = isMobile ? 2.58 : 2.42
    let camHeight = 0.24
    let scrollRotY = 0
    let autoSpin = Math.PI
    const updateScrollProgress = () => {
      const total = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      scrollProgress = Math.min(Math.max(window.scrollY / total, 0), 1)
    }
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    const resize = () => {
      const width = container.clientWidth
      const height = Math.max(container.clientHeight, 1)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      earthGroup.scale.setScalar(width < 640 ? 1.16 : width < 1024 ? 1.22 : 1.34)
    }
    window.addEventListener('resize', resize)
    resize()
    updateScrollProgress()
    while (activeArcs.length < (reducedMotionQuery.matches ? Math.min(maxActiveArcs, 3) : maxActiveArcs)) spawnArc()

    const clock = new THREE.Clock()
    let animationId = 0
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      const elapsed = clock.getElapsedTime()
      const reducedMotion = reducedMotionQuery.matches

      if (reducedMotion) {
        camera.position.set(0, 0.24, isMobile ? 2.58 : 2.42)
        camera.lookAt(0, -0.28, 0)
        earthGroup.rotation.x = 0
        earthGroup.rotation.y = Math.PI
      } else {
        const tDist = targetCameraDistance(scrollProgress, isMobile)
        const tHeight = targetCameraHeight(scrollProgress)
        const tRotY = targetScrollRotation(scrollProgress)
        camDist += (tDist - camDist) * 0.06
        camHeight += (tHeight - camHeight) * 0.06
        scrollRotY += (tRotY - scrollRotY) * 0.045
        camera.position.set(0, camHeight, camDist)
        camera.lookAt(0, -0.28, 0)

        mouseParallaxX += (-mouseY * 0.05 - mouseParallaxX) * 0.05
        mouseParallaxY += (mouseX * 0.05 - mouseParallaxY) * 0.05
        autoSpin += 0.00055
        earthGroup.rotation.x = mouseParallaxX
        earthGroup.rotation.y = autoSpin + scrollRotY + mouseParallaxY
      }

      if (!reducedMotion) {
        landDots.rotation.y += 0.00012
        wireGlobe.rotation.y += 0.00008
        atmosphere.rotation.y += 0.0008
        stars.rotation.y += 0.00002
        if (scannerSweep) scannerSweep.rotation.z = elapsed * ((Math.PI * 2) / 8)
        updateThreatArcs(delta)
        updateCityPulses(elapsed, scannerSweep ? THREE.MathUtils.euclideanModulo(scannerSweep.rotation.z, Math.PI * 2) : 0, delta)
      } else {
        updateCityPulses(elapsed, 0, 0)
      }

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', resize)
      arcPool.forEach((arc) => {
        earthGroup.remove(arc.neutralLine, arc.redLine, arc.packet)
        arc.neutralGeometry.dispose()
        arc.redGeometry.dispose()
        arc.neutralLine.material.dispose()
        arc.redLine.material.dispose()
        arc.packet.material.dispose()
      })
      flashes.forEach((flash) => {
        earthGroup.remove(flash)
        flash.material.dispose()
      })
      flashGeometry.dispose()
      flashMaterial.dispose()
      packetGeometry.dispose()
      cityNodes.forEach((node) => {
        node.dot.material.dispose()
        node.halo.material.dispose()
      })
      cityDotGeometry.dispose()
      haloGeometry.dispose()
      haloTexture.dispose()
      if (scannerSweep) {
        earthGroup.remove(scannerSweep)
        scannerSweep.geometry.dispose()
        scannerMaterial.dispose()
      }
      networkObjects.forEach((object) => {
        if (object.isLine || object.isMesh) {
          earthGroup.remove(object)
          if (object.geometry) object.geometry.dispose()
          if (object.material) object.material.dispose()
        } else {
          if (object.geometry) object.geometry.dispose()
          if (object.material) object.material.dispose()
        }
      })
      earthGeometry.dispose()
      earthMaterial.dispose()
      landDotGeometry.dispose()
      landDotMaterial.dispose()
      wireGeometry.dispose()
      wireMaterial.dispose()
      atmosphereGeometry.dispose()
      atmosphereMaterial.dispose()
      starGeometry.dispose()
      starMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="earth-scene-canvas" ref={containerRef}>
      <div className="earth-scene-fallback-globe" aria-hidden="true" />
      <canvas ref={canvasRef} className="earth-scene-surface" />
    </div>
  )
}
