import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const canvasRef = useRef()
  const mouse = useRef({ x: -999, y: -999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mx = mouse.current.x
      const my = mouse.current.y

      if (mx > 0) {
        const halo = ctx.createRadialGradient(mx, my, 0, mx, my, 28)
        halo.addColorStop(0,   'rgba(249, 115, 22, 0.18)')
        halo.addColorStop(0.5, 'rgba(251, 146, 60, 0.06)')
        halo.addColorStop(1,   'rgba(249, 115, 22, 0)')
        ctx.beginPath()
        ctx.arc(mx, my, 28, 0, Math.PI * 2)
        ctx.fillStyle = halo
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  )
}
