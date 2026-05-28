import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Calendar, Play, Sparkles, Clock, TrendingDown } from 'lucide-react'
import WorkflowDiagram from './WorkflowDiagram'
import ParticleField from './effects/ParticleField'

const TYPED_WORDS = [
  'Customer Support',
  'Sales Outreach',
  'Data Pipelines',
  'HR Recruiting',
  'Finance Reporting',
  'Internal Ops',
]

function useTyped(words, { typeSpeed = 75, deleteSpeed = 40, pauseMs = 1600 } = {}) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!isDeleting && displayed === current) {
      // Fully typed — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseMs)
    } else if (isDeleting && displayed === '') {
      // Fully deleted — move to next word
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      // Type or delete one character
      timeout = setTimeout(() => {
        setDisplayed(isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
        )
      }, isDeleting ? deleteSpeed : typeSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseMs])

  return displayed
}

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

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
  const typedWord = useTyped(TYPED_WORDS)

  return (
    <section className="relative flex items-center pt-24 pb-10 bg-gradient-to-b from-orange-50 via-amber-50/40 to-orange-50/20">

      {/* Particle network */}
      <ParticleField />

      {/* Gradient atmosphere orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] -left-[18%] w-[650px] h-[650px] rounded-full bg-orange-400 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.11, 0.06] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[5%] -right-[14%] w-[580px] h-[580px] rounded-full bg-amber-400 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-[45%] left-[40%] w-[400px] h-[400px] rounded-full bg-orange-300 blur-[100px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="flex flex-col gap-7">

            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <motion.span
                animate={{ boxShadow: ['0 0 0px rgba(249,115,22,0)', '0 0 18px rgba(249,115,22,0.3)', '0 0 0px rgba(249,115,22,0)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-300 bg-orange-50 text-orange-600 text-sm font-medium"
              >
                <Sparkles className="w-3 h-3" />
                AI-Powered Workflow Automation
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={0.1} variants={fadeUp} initial="hidden" animate="visible"
              className="font-black text-slate-900 tracking-[-0.02em] flex flex-col gap-1"
            >
              {/* Line 1: static + animated 70% */}
              <span className="block text-[2.6rem] sm:text-5xl lg:text-[3.35rem] leading-[1.15]">
                Automate{' '}
                <span className="text-gradient tabular-nums">
                  <CountUp to={70} />%
                </span>
                {' '}of Your
              </span>

              {/* Line 2: typed cycling word — block keeps full height, no clipping */}
              <span className="block text-[2.6rem] sm:text-5xl lg:text-[3.35rem] leading-[1.15]" style={{ minHeight: '1.2em' }}>
                <span className="text-gradient">{typedWord || ' '}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
                  className="inline-block ml-1 w-[3px] rounded-sm bg-orange-500 align-middle"
                  style={{ height: '0.8em' }}
                />
              </span>

              {/* Line 3: subdued closing phrase */}
              <span className="block text-xl sm:text-2xl lg:text-[1.7rem] font-bold text-slate-400 leading-[1.3]">
                — without hiring more people.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p custom={0.2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg text-slate-600 leading-relaxed max-w-[500px]"
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
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-full shadow-lg shadow-orange-500/25 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Discovery Call
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.03, borderColor: 'rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-200 text-slate-600 font-semibold rounded-full hover:text-slate-900 transition-colors text-sm"
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Animated Stats */}
            <motion.div custom={0.4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-x-8 gap-y-4 pt-3 border-t border-slate-200"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  className="flex flex-col"
                >
                  <span className="text-2xl font-black text-slate-900 tracking-tight tabular-nums">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: WorkflowDiagram */}
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
              className="absolute inset-0 bg-gradient-to-br from-orange-400/15 to-amber-400/15 rounded-3xl blur-3xl scale-105"
            />
            <div className="relative">
              <WorkflowDiagram />
            </div>

            {/* Floating badge bottom-left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -bottom-5 -left-5 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl border border-emerald-200"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
              </div>
              <div>
                <p className="text-slate-800 text-xs font-semibold">Zero Downtime</p>
                <p className="text-slate-400 text-[10px]">Runs 24 / 7 automatically</p>
              </div>
            </motion.div>

            {/* Floating badge top-right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute -top-5 -right-5 glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl border border-orange-200"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ['12px', `${8 + Math.random() * 16}px`, '12px'] }}
                    transition={{ duration: 0.6 + i * 0.12, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
                    className="w-1 rounded-full bg-gradient-to-t from-orange-500 to-amber-400"
                    style={{ height: '12px' }}
                  />
                ))}
              </div>
              <div>
                <p className="text-slate-800 text-xs font-semibold">Live Processing</p>
                <p className="text-slate-400 text-[10px]">Real-time inference</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Cloud wave divider */}
      <div
        className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none"
        style={{ filter: 'drop-shadow(0 -8px 24px rgba(180,80,0,0.18)) drop-shadow(0 -2px 6px rgba(249,115,22,0.22))' }}
      >
        <svg
          viewBox="-120 0 1680 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{ height: '90px' }}
        >
          {/* Shade layer — amber tint, 5px lower */}
          <path
            d="M-120,90 L-120,55 Q420,0 780,55 Q1140,100 1560,50 L1560,90 Z"
            fill="rgba(251,146,60,0.20)"
          />
          {/* Main cloud — white */}
          <path
            d="M-120,90 L-120,50 Q420,-5 780,50 Q1140,95 1560,44 L1560,90 Z"
            fill="#fffcf9"
          />
        </svg>
      </div>
    </section>
  )
}
