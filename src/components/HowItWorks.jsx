import { motion } from 'framer-motion'
import { Search, Wrench, Rocket, ArrowRight } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'We Map Your Workflow',
    description:
      'We deep-dive into your current operations — understanding every bottleneck, repetitive task, and manual handoff that costs you time and money.',
    details: ['Process discovery call', 'Bottleneck identification', 'ROI analysis', 'Automation roadmap'],
    colorText: 'text-orange-500',
    colorBg: 'bg-orange-50',
    colorBorder: 'border-orange-200',
    colorGlow: 'shadow-orange-100',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'We Build Your AI Agents',
    description:
      'Our engineers design custom AI agents tailored to your exact workflow — not generic tools, but purpose-built systems that speak your business language.',
    details: ['Custom agent design', 'LLM integration', 'Workflow logic', 'Integration with your tools'],
    colorText: 'text-amber-500',
    colorBg: 'bg-amber-50',
    colorBorder: 'border-amber-200',
    colorGlow: 'shadow-amber-100',
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'We Deploy & Optimize',
    description:
      'We ship to production, monitor performance, and continuously tune your agents for better accuracy, speed, and cost efficiency — all with zero disruption to your team.',
    details: ['Production deployment', 'Real-time monitoring', 'Ongoing optimization', 'Weekly performance reports'],
    colorText: 'text-rose-500',
    colorBg: 'bg-rose-50',
    colorBorder: 'border-rose-200',
    colorGlow: 'shadow-rose-100',
    gradient: 'from-rose-500 to-orange-400',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden bg-orange-50/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-label border-orange-200 bg-orange-50 text-orange-500 mb-4 inline-flex">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Simple. Powerful.{' '}
            <span className="text-gradient">Automatic.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From discovery to deployment in under 2 weeks. We handle the complexity
            — you just watch the results roll in.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-[60px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-gradient-to-r from-orange-400/40 via-amber-400/40 to-rose-400/40" />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="group relative"
              >
                <div className={`glass-card rounded-2xl p-7 h-full border ${step.colorBorder} hover:shadow-xl ${step.colorGlow} transition-all duration-500 hover:-translate-y-1`}>
                  {/* Step number + icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`relative w-12 h-12 rounded-xl ${step.colorBg} border ${step.colorBorder} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${step.colorText}`} />
                      {/* Connector dot for desktop */}
                      <div className="hidden lg:block absolute -top-[33px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 bg-white border-orange-300" />
                    </div>
                    <span className={`text-5xl font-black ${step.colorText} opacity-15 leading-none mt-0.5`}>
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-slate-900 font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{step.description}</p>

                  {/* Detail list */}
                  <ul className="flex flex-col gap-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-slate-500">
                        <span className={`w-1 h-1 rounded-full ${step.colorText.replace('text-', 'bg-')} flex-shrink-0`} />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors group"
          >
            See what we can automate for you
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
