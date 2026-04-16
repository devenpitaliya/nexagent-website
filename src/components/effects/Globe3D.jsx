import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

const RADIUS = 2.2
const GOLDEN_RATIO = (1 + Math.sqrt(5)) / 2

// Convert lat/lon → 3D point on sphere
function latLon(lat, lon, r = RADIUS) {
  const phi   = (90 - lat) * (Math.PI / 180)
  const theta = lon * (Math.PI / 180)
  return [
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ]
}

// ── Lat/Lon wireframe grid ──
function GlobeGrid() {
  const geo = useMemo(() => {
    const verts = []
    // Latitude rings every 20°
    for (let lat = -80; lat <= 80; lat += 20) {
      for (let lon = 0; lon < 360; lon += 3) {
        verts.push(...latLon(lat, lon), ...latLon(lat, lon + 3))
      }
    }
    // Longitude meridians every 20°
    for (let lon = 0; lon < 360; lon += 20) {
      for (let lat = -87; lat < 90; lat += 3) {
        verts.push(...latLon(lat, lon), ...latLon(lat + 3, lon))
      }
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
    return g
  }, [])

  return (
    <lineSegments geometry={geo}>
      <lineBasicMaterial color="#6366f1" transparent opacity={0.09} />
    </lineSegments>
  )
}

// ── Evenly distributed surface nodes (Fibonacci sphere) ──
function GlobeNodes({ count = 90 }) {
  const geo = useMemo(() => {
    const pos  = new Float32Array(count * 3)
    const col  = new Float32Array(count * 3)
    const R = RADIUS + 0.05

    for (let i = 0; i < count; i++) {
      const y     = 1 - (i / (count - 1)) * 2
      const rRing = Math.sqrt(Math.max(0, 1 - y * y))
      const theta = 2 * Math.PI * i / GOLDEN_RATIO

      pos[i * 3]     = R * rRing * Math.cos(theta)
      pos[i * 3 + 1] = R * y
      pos[i * 3 + 2] = R * rRing * Math.sin(theta)

      // Cyan ↔ indigo gradient by latitude
      const t = (y + 1) / 2
      col[i * 3]     = 0.38 + t * 0.3   // R
      col[i * 3 + 1] = 0.7  - t * 0.28  // G
      col[i * 3 + 2] = 1.0               // B
    }

    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    g.setAttribute('color',    new THREE.Float32BufferAttribute(col, 3))
    return g
  }, [count])

  return (
    <points geometry={geo}>
      <pointsMaterial
        vertexColors
        size={0.07}
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  )
}

// ── Single animated arc between two nodes ──
function ArcLine({ geo, phase, speed = 0.7 }) {
  const matRef = useRef()
  useFrame(({ clock }) => {
    if (matRef.current) {
      const t = (Math.sin(clock.elapsedTime * speed + phase) + 1) / 2
      matRef.current.opacity = t * 0.55 + 0.04
    }
  })
  return (
    <line geometry={geo}>
      <lineBasicMaterial ref={matRef} color="#06b6d4" transparent opacity={0.3} />
    </line>
  )
}

// ── All connection arcs ──
function ConnectionArcs({ nodeCount = 90 }) {
  const arcs = useMemo(() => {
    const R = RADIUS + 0.05
    const nodes = Array.from({ length: nodeCount }, (_, i) => {
      const y = 1 - (i / (nodeCount - 1)) * 2
      const r = Math.sqrt(Math.max(0, 1 - y * y))
      const theta = 2 * Math.PI * i / GOLDEN_RATIO
      return new THREE.Vector3(R * r * Math.cos(theta), R * y, R * r * Math.sin(theta))
    })

    const pairs = [
      [0,18],[3,27],[7,44],[12,60],[1,33],
      [22,65],[5,48],[20,75],[8,38],[25,70],
      [10,55],[15,80],[4,36],[30,68],[11,52],
      [6,41],[17,62],[26,77],[2,50],[14,85],
    ]

    return pairs.map(([a, b]) => {
      if (a >= nodeCount || b >= nodeCount) return null
      const start = nodes[a].clone()
      const end   = nodes[b].clone()
      const mid   = start.clone().add(end).multiplyScalar(0.5)
      mid.normalize().multiplyScalar(RADIUS * 1.38)
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
      return new THREE.BufferGeometry().setFromPoints(curve.getPoints(40))
    }).filter(Boolean)
  }, [nodeCount])

  return (
    <>
      {arcs.map((geo, i) => (
        <ArcLine key={i} geo={geo} phase={i * 0.42} speed={0.55 + (i % 4) * 0.15} />
      ))}
    </>
  )
}

// ── Outer atmospheric halo ──
function Atmosphere() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.opacity = 0.035 + Math.sin(clock.elapsedTime * 0.4) * 0.012
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[RADIUS + 0.28, 32, 32]} />
      <meshBasicMaterial color="#06b6d4" transparent opacity={0.04} side={THREE.BackSide} />
    </mesh>
  )
}

// ── Pulsing equatorial ring ──
function Ring() {
  const ref = useRef()
  const geo = useMemo(() => {
    const pts = Array.from({ length: 129 }, (_, i) => {
      const t = (i / 128) * Math.PI * 2
      return new THREE.Vector3(Math.cos(t) * (RADIUS + 0.12), 0, Math.sin(t) * (RADIUS + 0.12))
    })
    return new THREE.BufferGeometry().setFromPoints(pts)
  }, [])
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.opacity = 0.15 + Math.sin(clock.elapsedTime * 0.6) * 0.12
    }
  })
  return (
    <line ref={ref} geometry={geo}>
      <lineBasicMaterial color="#818cf8" transparent opacity={0.25} />
    </line>
  )
}

// ── Secondary tilted ring ──
function Ring2() {
  const ref = useRef()
  const geo = useMemo(() => {
    const pts = Array.from({ length: 129 }, (_, i) => {
      const t = (i / 128) * Math.PI * 2
      return new THREE.Vector3(Math.cos(t) * (RADIUS + 0.08), Math.sin(t) * 0.6 * (RADIUS + 0.08), 0)
    })
    return new THREE.BufferGeometry().setFromPoints(pts)
  }, [])
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.material.opacity = 0.1 + Math.sin(clock.elapsedTime * 0.8 + 1.2) * 0.07
    }
  })
  return (
    <line ref={ref} geometry={geo}>
      <lineBasicMaterial color="#a78bfa" transparent opacity={0.15} />
    </line>
  )
}

// ── Rotating data pulses (bright traveling dots on the grid) ──
function DataPulses() {
  const groupRef = useRef()
  const pulses = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      lat: (Math.random() - 0.5) * 160,
      startLon: Math.random() * 360,
      speed: 0.3 + Math.random() * 0.4,
      phase: i * 0.8,
    }))
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((mesh, i) => {
      const p = pulses[i]
      const lon = (p.startLon + clock.elapsedTime * p.speed * 30) % 360
      const [x, y, z] = latLon(p.lat, lon, RADIUS + 0.06)
      mesh.position.set(x, y, z)
      const bright = (Math.sin(clock.elapsedTime * 2 + p.phase) + 1) / 2
      mesh.material.opacity = 0.4 + bright * 0.6
    })
  })

  return (
    <group ref={groupRef}>
      {pulses.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.045, 6, 6]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

// ── Main rotating globe group ──
function Globe() {
  const groupRef = useRef()
  useFrame(({ clock }, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.055
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.045
    }
  })
  return (
    <group ref={groupRef}>
      <GlobeGrid />
      <GlobeNodes count={90} />
      <ConnectionArcs nodeCount={90} />
      <Atmosphere />
      <DataPulses />
    </group>
  )
}

// ── Canvas export ──
export default function Globe3D() {
  // Skip on mobile for perf — use a hook-safe check
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
  if (isMobile) return null

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Stars radius={90} depth={70} count={2500} factor={3.5} fade speed={0.25} />
        <Globe />
        <Ring />
        <Ring2 />
      </Canvas>
    </div>
  )
}
