import { useEffect, useRef } from 'react'

// Blue-fire particle class
class Particle {
  constructor(x, y) {
    this.x = x + (Math.random() - 0.5) * 12
    this.y = y + (Math.random() - 0.5) * 12
    this.vx = (Math.random() - 0.5) * 1.8
    this.vy = -(Math.random() * 3.5 + 0.8)        // upward fire motion
    this.life = 1.0
    this.decay = Math.random() * 0.022 + 0.016
    this.size = Math.random() * 7 + 3
    // Blue-fire hue range: 190 (cyan-blue) to 255 (deep blue)
    this.hue = Math.random() * 65 + 190
    this.lightness = 60 + Math.random() * 35        // 60–95% lightness
    this.turbX = (Math.random() - 0.5) * 0.08       // micro turbulence
  }

  update() {
    this.x += this.vx + Math.sin(this.life * 12) * this.turbX
    this.y += this.vy
    this.vy -= 0.08                                  // upward acceleration
    this.vx *= 0.97
    this.life -= this.decay
    this.size *= 0.972
  }

  draw(ctx) {
    if (this.life <= 0) return
    const alpha = Math.max(0, this.life)
    const r = Math.max(0.1, this.size)

    const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, r * 2.8)
    g.addColorStop(0,   `hsla(${this.hue}, 100%, 96%, ${alpha})`)
    g.addColorStop(0.25, `hsla(${this.hue}, 100%, ${this.lightness}%, ${alpha * 0.85})`)
    g.addColorStop(0.7,  `hsla(${this.hue}, 100%, 45%, ${alpha * 0.4})`)
    g.addColorStop(1,    `hsla(${this.hue}, 100%, 30%, 0)`)

    ctx.beginPath()
    ctx.arc(this.x, this.y, r * 2.8, 0, Math.PI * 2)
    ctx.fillStyle = g
    ctx.fill()
  }
}

// Small bright ember sparks
class Ember {
  constructor(x, y) {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 3.5 + 1.5
    this.x = x
    this.y = y
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed - 2
    this.life = 1.0
    this.decay = Math.random() * 0.04 + 0.03
    this.size = Math.random() * 2.5 + 0.8
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.vy += 0.12  // gravity pull
    this.vx *= 0.96
    this.life -= this.decay
    this.size *= 0.95
  }

  draw(ctx) {
    if (this.life <= 0) return
    const alpha = Math.max(0, this.life)
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(180, 220, 255, ${alpha * 0.9})`
    ctx.fill()
  }
}

export default function CursorGlow() {
  const canvasRef = useRef()
  const mouse = useRef({ x: -999, y: -999 })
  const moving = useRef(false)
  const movingTimer = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    let embers = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      moving.current = true
      clearTimeout(movingTimer.current)
      movingTimer.current = setTimeout(() => { moving.current = false }, 120)

      // Main fire particles
      const count = Math.floor(Math.random() * 4) + 3
      for (let i = 0; i < count; i++) particles.push(new Particle(e.clientX, e.clientY))
      // Occasional ember spark
      if (Math.random() < 0.25) embers.push(new Ember(e.clientX, e.clientY))
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mx = mouse.current.x
      const my = mouse.current.y

      // ── Cursor icon (always visible) ──
      if (mx > 0) {
        // Outer glow ring
        const halo = ctx.createRadialGradient(mx, my, 0, mx, my, 28)
        halo.addColorStop(0,   'rgba(100, 180, 255, 0.35)')
        halo.addColorStop(0.4, 'rgba(99, 102, 241, 0.12)')
        halo.addColorStop(1,   'rgba(0, 0, 0, 0)')
        ctx.beginPath()
        ctx.arc(mx, my, 28, 0, Math.PI * 2)
        ctx.fillStyle = halo
        ctx.fill()

        // Inner bright dot
        const dot = ctx.createRadialGradient(mx, my, 0, mx, my, 4)
        dot.addColorStop(0, 'rgba(220, 240, 255, 0.95)')
        dot.addColorStop(1, 'rgba(100, 160, 255, 0)')
        ctx.beginPath()
        ctx.arc(mx, my, 4, 0, Math.PI * 2)
        ctx.fillStyle = dot
        ctx.fill()
      }

      // ── Fire particles — only render while moving ──
      particles = particles.filter(p => p.life > 0)
      for (const p of particles) { p.update(); p.draw(ctx) }

      // ── Embers — only render while moving ──
      embers = embers.filter(e => e.life > 0)
      for (const e of embers) { e.update(); e.draw(ctx) }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(movingTimer.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
