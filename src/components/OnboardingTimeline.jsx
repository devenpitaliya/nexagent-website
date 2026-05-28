import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { Phone, FileText, Code2, Rocket, BarChart3, Calendar } from 'lucide-react'
import ParticleField from './effects/ParticleField'

const STEPS = [
  {
    day: 'Day 1',
    icon: Phone,
    title: 'Discovery Call',
    description:
      'A focused 30-minute call where we learn your biggest operational bottleneck and confirm NexAgent is the right fit. No pitch — just diagnosis.',
    colorText: 'text-orange-400',
    colorBg: 'bg-orange-500/15',
    colorBorder: 'border-orange-500/30',
    colorDot: 'bg-orange-500',
    glowColor: 'rgba(249,115,22,0.4)',
  },
  {
    day: 'Day 2–3',
    icon: FileText,
    title: 'Roadmap Delivered',
    description:
      "You receive a written automation roadmap — every workflow we'll automate, the agent architecture, integrations, and a projected ROI. All before we write a line of code.",
    colorText: 'text-amber-400',
    colorBg: 'bg-amber-500/15',
    colorBorder: 'border-amber-500/30',
    colorDot: 'bg-amber-500',
    glowColor: 'rgba(245,158,11,0.4)',
  },
  {
    day: 'Day 4–10',
    icon: Code2,
    title: 'Agents Built & Tested',
    description:
      'We build your agents, integrate them with your existing tools, and run them against real data in a staging environment. You review a live demo before we go near production.',
    colorText: 'text-blue-400',
    colorBg: 'bg-blue-500/15',
    colorBorder: 'border-blue-500/30',
    colorDot: 'bg-blue-500',
    glowColor: 'rgba(59,130,246,0.4)',
  },
  {
    day: 'Day 11–14',
    icon: Rocket,
    title: 'Live in Production',
    description:
      "We deploy to production, run a team onboarding session, and hand over full documentation. Your agents go live — your team doesn't need to touch a thing.",
    colorText: 'text-emerald-400',
    colorBg: 'bg-emerald-500/15',
    colorBorder: 'border-emerald-500/30',
    colorDot: 'bg-emerald-500',
    glowColor: 'rgba(16,185,129,0.4)',
  },
  {
    day: 'Week 3+',
    icon: BarChart3,
    title: 'Ongoing Performance',
    description:
      'Weekly performance reports land in your inbox. We monitor, tune, and optimize. If something breaks or drifts, we fix it before you even notice.',
    colorText: 'text-purple-400',
    colorBg: 'bg-purple-500/15',
    colorBorder: 'border-purple-500/30',
    colorDot: 'bg-purple-500',
    glowColor: 'rgba(168,85,247,0.4)',
  },
]

const N = STEPS.length
// Dot stops at each step: evenly spaced 0→1
const DOT_STOPS = STEPS.map((_, i) => i / (N - 1))
const DOT_PERCENTS = STEPS.map((_, i) => `${(i / (N - 1)) * 88 + 6}%`)

function Card({ step, isActive }) {
  const Icon = step.icon
  return (
    <motion.div
      animate={{
        scale: isActive ? 1.04 : 1,
        boxShadow: isActive
          ? `0 0 0 1px ${step.glowColor}, 0 8px 32px ${step.glowColor}`
          : '0 0 0 0px transparent',
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl p-6 border ${step.colorBorder} bg-white/[0.04] backdrop-blur-sm transition-colors duration-300`}
    >
      {/* Day badge */}
      <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${step.colorBg} ${step.colorText} border ${step.colorBorder} mb-4`}>
        {step.day}
      </span>

      {/* Icon + title */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-xl ${step.colorBg} border ${step.colorBorder} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-4 h-4 ${step.colorText}`} />
        </div>
        <h3 className={`font-bold text-base transition-colors duration-300 ${isActive ? step.colorText : 'text-white'}`}>
          {step.title}
        </h3>
      </div>

      <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
        {step.description}
      </p>
    </motion.div>
  )
}

export default function OnboardingTimeline() {
  const sectionRef = useRef()
  const timelineRef = useRef()
  const [activeIdx, setActiveIdx] = useState(-1)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.6', 'end 0.8'],
  })

  // Dot moves from first step to last step position
  const dotTop = useTransform(scrollYProgress, DOT_STOPS, DOT_PERCENTS)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.round(v * (N - 1))
    setActiveIdx(Math.min(Math.max(idx, 0), N - 1))
  })

  return (
    <section ref={sectionRef} id="after-booking" className="section-padding relative overflow-hidden bg-slate-950">
      <ParticleField />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/8 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-amber-500/6 blur-[100px] rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-orange-500/30 bg-orange-500/10 text-orange-400 mb-4">
            What Happens Next
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            After You Book —{' '}
            <span className="text-gradient">Here's Exactly What Happens</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            No mystery. No weeks of silence. Every step is predictable, documented, and on a fixed timeline.
          </p>
        </motion.div>

        {/* ── Desktop ── */}
        <div className="hidden lg:block">
          <div ref={timelineRef} className="relative flex flex-col gap-8">

            {/* Static gradient line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-orange-500/30 via-blue-500/20 to-purple-500/30" />

            {/* Scroll-driven glowing dot */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none"
              style={{ top: dotTop, x: '-50%' }}
            >
              {/* Outer pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-orange-500/30"
                animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                style={{ width: 20, height: 20, margin: -4 }}
              />
              {/* Inner dot */}
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 shadow-[0_0_12px_rgba(249,115,22,0.9)]" />
            </motion.div>

            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0
              const Icon = step.icon
              const isActive = activeIdx === i

              return (
                <div key={step.day} className="grid grid-cols-[1fr_64px_1fr] items-center gap-0">
                  {/* Left column */}
                  <div className="pr-8 flex justify-end">
                    {isLeft ? (
                      <div className="max-w-sm w-full">
                        <Card step={step} isActive={isActive} />
                      </div>
                    ) : <div />}
                  </div>

                  {/* Center: icon dot */}
                  <div className="flex justify-center">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.25 : 1,
                        boxShadow: isActive ? `0 0 20px ${step.glowColor}` : '0 0 0px transparent',
                      }}
                      transition={{ duration: 0.4 }}
                      className={`relative z-10 w-12 h-12 rounded-2xl ${step.colorBg} border-2 ${step.colorBorder} flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${step.colorText}`} />
                    </motion.div>
                  </div>

                  {/* Right column */}
                  <div className="pl-8 flex justify-start">
                    {!isLeft ? (
                      <div className="max-w-sm w-full">
                        <Card step={step} isActive={isActive} />
                      </div>
                    ) : <div />}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Mobile ── */}
        <div className="lg:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 via-blue-500/30 to-purple-500/50" />
          <div className="flex flex-col gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 pl-2"
                >
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-xl ${step.colorBg} border-2 ${step.colorBorder} flex items-center justify-center shadow-md`}>
                    <Icon className={`w-4 h-4 ${step.colorText}`} />
                  </div>
                  <div className={`flex-1 rounded-2xl p-5 border ${step.colorBorder} bg-white/[0.04] backdrop-blur-sm`}>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${step.colorText} mb-2 block`}>{step.day}</span>
                    <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center mt-14"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            Start Day 1 This Week
          </a>
        </motion.div>
      </div>
    </section>
  )
}
