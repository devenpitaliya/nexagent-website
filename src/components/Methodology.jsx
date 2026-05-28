import { motion } from 'framer-motion'
import { Search, Code2, Rocket, CheckCircle, ArrowRight } from 'lucide-react'

const SPRINTS = [
  {
    number: 'Sprint 1',
    label: 'Discover',
    icon: Search,
    duration: 'Days 1–3',
    colorText: 'text-orange-400',
    colorBg: 'bg-orange-500/10',
    colorBorder: 'border-orange-500/30',
    colorDot: 'bg-orange-500',
    deliverables: [
      'Process discovery call',
      'Workflow audit & bottleneck map',
      'ROI projection report',
      'Automation roadmap',
    ],
    description:
      'We embed into your operations and map every repetitive task, manual handoff, and wasted hour. You get a full written roadmap before we write a single line of code.',
  },
  {
    number: 'Sprint 2',
    label: 'Build',
    icon: Code2,
    duration: 'Days 4–10',
    colorText: 'text-amber-400',
    colorBg: 'bg-amber-500/10',
    colorBorder: 'border-amber-500/30',
    colorDot: 'bg-amber-500',
    deliverables: [
      'Custom AI agent architecture',
      'Integration with your existing tools',
      'Internal QA & stress testing',
      'Staging environment demo',
    ],
    description:
      'Our engineers build purpose-built AI agents for your exact workflows — not templates, not off-the-shelf tools. Everything is tested against your real data before we ship.',
  },
  {
    number: 'Sprint 3',
    label: 'Deploy',
    icon: Rocket,
    duration: 'Days 11–14',
    colorText: 'text-emerald-400',
    colorBg: 'bg-emerald-500/10',
    colorBorder: 'border-emerald-500/30',
    colorDot: 'bg-emerald-500',
    deliverables: [
      'Production deployment',
      'Live monitoring dashboard',
      'Team onboarding session',
      'Week-1 performance report',
    ],
    description:
      'We go live with zero disruption to your team. You get a monitoring dashboard, a live handover session, and your first performance report within 7 days of launch.',
  },
]

export default function Methodology() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-slate-950">

      {/* Glow orbs */}
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
            Our Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            The NexAgent{' '}
            <span className="text-gradient">3-Sprint System</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From your first call to live AI agents in production — in under 2 weeks.
            A repeatable, battle-tested process with zero guesswork.
          </p>
        </motion.div>

        {/* Sprint pipeline */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-[88px] left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-0.5 bg-gradient-to-r from-orange-500/50 via-amber-500/50 to-emerald-500/50 z-0" />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {SPRINTS.map((sprint, i) => {
              const Icon = sprint.icon
              return (
                <motion.div
                  key={sprint.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group"
                >
                  {/* Connector dot */}
                  <div className={`hidden lg:flex absolute top-[80px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${sprint.colorDot} border-4 border-slate-950 shadow-lg z-10`} />

                  <div className={`rounded-2xl p-7 h-full border ${sprint.colorBorder} bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl ${sprint.colorBg} border ${sprint.colorBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-5 h-5 ${sprint.colorText}`} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${sprint.colorBg} ${sprint.colorText} border ${sprint.colorBorder}`}>
                        {sprint.duration}
                      </span>
                    </div>

                    <p className={`text-xs font-semibold uppercase tracking-widest ${sprint.colorText} mb-1`}>{sprint.number}</p>
                    <h3 className="text-white font-black text-2xl mb-3">{sprint.label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{sprint.description}</p>

                    {/* Deliverables */}
                    <div className={`p-4 rounded-xl ${sprint.colorBg} border ${sprint.colorBorder}`}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Deliverables</p>
                      <ul className="flex flex-col gap-2">
                        {sprint.deliverables.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-sm text-slate-300">
                            <CheckCircle className={`w-3.5 h-3.5 ${sprint.colorText} flex-shrink-0`} />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
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
          className="flex justify-center mt-12"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors group"
          >
            Start your first sprint this week
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
