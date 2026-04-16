import { useEffect, useRef } from 'react'

const PARTICLE_COUNT  = 70
const MAX_LINK_DIST   = 140
const CURSOR_REPEL_R  = 110
const BASE_SPEED      = 0.25

export default function ParticleField() {
  const canvasRef = useRef()
  const mouse     = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = canvas.parentElement?.offsetWidth  || window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement || document.body)
    window.addEventListener('resize', resize, { passive: true })

    // Initialise particles
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      vx:   (Math.random() - 0.5) * BASE_SPEED,
      vy:   (Math.random() - 0.5) * BASE_SPEED,
      size: Math.random() * 1.8 + 0.6,
    }))

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const W = canvas.width
      const H = canvas.height

      // ── Update ──
      for (const p of particles) {
        // Cursor repulsion
        const dx   = p.x - mouse.current.x
        const dy   = p.y - mouse.current.y
        const dist = Math.hypot(dx, dy)
        if (dist < CURSOR_REPEL_R && dist > 0) {
          const force = ((CURSOR_REPEL_R - dist) / CURSOR_REPEL_R) * 0.6
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Natural drift randomness
        p.vx += (Math.random() - 0.5) * 0.008
        p.vy += (Math.random() - 0.5) * 0.008

        // Speed damping + cap
        p.vx *= 0.992
        p.vy *= 0.992
        const spd = Math.hypot(p.vx, p.vy)
        if (spd > 1.4) { p.vx = (p.vx / spd) * 1.4; p.vy = (p.vy / spd) * 1.4 }

        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < 0)  p.x = W
        if (p.x > W)  p.x = 0
        if (p.y < 0)  p.y = H
        if (p.y > H)  p.y = 0
      }

      // ── Draw connections ──
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < MAX_LINK_DIST) {
            const alpha = (1 - dist / MAX_LINK_DIST) * 0.18
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // ── Draw particles ──
      for (const p of particles) {
        // Glow halo
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
        glow.addColorStop(0, 'rgba(120,140,255,0.35)')
        glow.addColorStop(1, 'rgba(99,102,241,0)')
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(148,160,255,0.55)'
        ctx.fill()
      }

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
