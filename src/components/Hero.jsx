import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar, Play, Sparkles, Clock, TrendingDown } from 'lucide-react'
import WorkflowDiagram from './WorkflowDiagram'
import ParticleField from './effects/ParticleField'

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ── Animated counter ──────────────────────────────────────────
function CountUp({ to, suffix = '' }) {
  const ref    = useRef()
  const inView = useInView(ref, { once: true })
  const [val,  setVal]  = useState(0)

  useEffect(() => {
    if (!inView) return
    let start     = 0
    const numeric = parseFloat(to)
    const dur     = 1800
    const step    = numeric / dur
    const id = setInterval(() => {
      start += step * 16
      if (start >= numeric) { setVal(numeric); clearInterval(id) }
      else setVal(Math.floor(start * 10) / 10)
    }, 16)
    return () => clearInterval(id)
  }, [inView, to])

  return (
    <span ref={ref}>
      {typeof to === 'string' && to.includes('.')
        ? val.toFixed(1)
        : Math.floor(val)}
      {suffix}
    </span>
  )
}

const STATS = [
  { value: '70', suffix: '%',     label: 'Ops Automated',  icon: TrendingDown },
  { value: '60', suffix: '%',     label: 'Cost Reduction',  icon: TrendingDown },
  { value: '24', suffix: '/7',    label: 'Always Running',  icon: Clock },
  { value: '2',  suffix: ' wks',  label: 'Deploy Time',     icon: Clock },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

      {/* ── Layer 1: Particle network ── */}
      <ParticleField />

      {/* ── Layer 2: Gradient atmosphere orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.07, 0.12, 0.07] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] -left-[18%] w-[650px] h-[650px] rounded-full bg-indigo-600 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[5%] -right-[14%] w-[580px] h-[580px] rounded-full bg-cyan-500 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-[45%] left-[40%] w-[400px] h-[400px] rounded-full bg-purple-500 blur-[100px]"
        />
      </div>



      {/* ── Layer 4: Content ── */}
      <div className="relative z-10 container-wide w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div className="flex flex-col gap-7">

            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <motion.span
                animate={{ boxShadow: ['0 0 0px rgba(99,102,241,0)', '0 0 18px rgba(99,102,241,0.4)', '0 0 0px rgba(99,102,241,0)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/35 bg-indigo-500/12 text-indigo-300 text-sm font-medium"
              >
                <Sparkles className="w-3 h-3" />
                AI-Powered Workflow Automation
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={0.1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-[2.6rem] sm:text-5xl lg:text-[3.35rem] font-black text-white leading-[1.06] tracking-[-0.02em]"
            >
              Automate{' '}
              <motion.span
                className="text-gradient inline-block"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 200%' }}
              >
                70% of Your Ops
              </motion.span>
              {' '}—{' '}
              <br className="hidden sm:block" />
              Without Hiring{' '}
              <span className="relative inline-block">
                More People
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-400 to-cyan-400 origin-left"
                />
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p custom={0.2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg text-slate-400 leading-relaxed max-w-[500px]"
            >
              We design and deploy custom AI agents that handle your repetitive
              workflows — from customer support to data pipelines — so your team
              focuses on what actually moves the needle.
            </motion.p>

            {/* CTAs */}
            <motion.div custom={0.3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/25 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Discovery Call
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/12 text-slate-300 font-semibold rounded-full hover:text-white transition-colors text-sm"
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Animated Stats */}
            <motion.div custom={0.4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-x-8 gap-y-4 pt-3 border-t border-white/[0.07]"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="flex flex-col"
                >
                  <span className="text-2xl font-black text-white tracking-tight tabular-nums">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: WorkflowDiagram ── */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow backdrop */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 rounded-3xl blur-3xl scale-105"
            />
            <div className="relative">
              <WorkflowDiagram />
            </div>

            {/* Floating badge bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -bottom-5 -left-5 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl border border-emerald-500/20"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Zero Downtime</p>
                <p className="text-slate-500 text-[10px]">Runs 24 / 7 automatically</p>
              </div>
            </motion.div>

            {/* Floating badge top-right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute -top-5 -right-5 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl border border-indigo-500/20"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ['12px', `${8 + Math.random() * 16}px`, '12px'] }}
                    transition={{ duration: 0.6 + i * 0.12, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
                    className="w-1 rounded-full bg-gradient-to-t from-indigo-500 to-cyan-400"
                    style={{ height: '12px' }}
                  />
                ))}
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Live Processing</p>
                <p className="text-slate-500 text-[10px]">Real-time inference</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center gap-2 mt-20"
        >
          <span className="text-[10px] text-slate-600 uppercase tracking-widest font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
