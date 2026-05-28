import { motion } from 'framer-motion'
import { ShoppingBag, Code2, Heart, ArrowRight, Quote } from 'lucide-react'

const CASES = [
  {
    icon: ShoppingBag,
    industry: 'E-Commerce',
    company: 'Mid-size fashion brand',
    challenge:
      'Their support team was drowning in 1,200+ daily tickets — returns, sizing questions, order status. Response times hit 48 hours. Customer satisfaction was falling.',
    built:
      'A multi-agent system: one agent classifies tickets, another fetches order data, a third drafts and sends context-aware replies. Escalates to humans only when needed.',
    stats: [
      { value: '65%', label: 'Cost Reduction' },
      { value: '4 min', label: 'Avg Response Time' },
      { value: '4.8★', label: 'Customer Rating' },
    ],
    quote: 'We went from 48-hour replies to 4-minute responses. Our support team now handles only the hard stuff.',
    quoteName: 'Sarah Mitchell, COO @ StyleForward',
    colorText: 'text-orange-500',
    colorBg: 'bg-orange-50',
    colorBorder: 'border-orange-200',
  },
  {
    icon: Code2,
    industry: 'SaaS',
    company: 'B2B analytics startup',
    challenge:
      'Their data team spent 3 days every week manually pulling, cleaning, and formatting data from 8 different sources before any analysis could happen.',
    built:
      'An automated data pipeline agent that runs nightly — fetching from all sources, normalizing formats, running quality checks, and delivering a clean report to Slack by 9am.',
    stats: [
      { value: '80%', label: 'Manual Work Removed' },
      { value: '3 days', label: 'Saved Per Week' },
      { value: '99.2%', label: 'Data Accuracy' },
    ],
    quote: 'What took three days a week now just happens automatically. Our analysts actually do analysis now.',
    quoteName: 'James Thornton, Head of Data @ PivotMetrics',
    colorText: 'text-amber-600',
    colorBg: 'bg-amber-50',
    colorBorder: 'border-amber-200',
  },
  {
    icon: Heart,
    industry: 'Healthcare',
    company: 'Private clinic group',
    challenge:
      'Admin staff spent 4+ hours daily on appointment confirmations, insurance pre-checks, reminder calls, and patient intake form follow-ups.',
    built:
      'An intake automation agent that handles confirmation messages, sends reminder sequences across channels, pre-fills insurance fields, and flags missing info to staff.',
    stats: [
      { value: '120 hrs', label: 'Saved Per Month' },
      { value: '35%', label: 'No-show Reduction' },
      { value: '2 FTE', label: 'Equivalent Capacity' },
    ],
    quote: 'We effectively added two full-time employees worth of capacity — without hiring anyone.',
    quoteName: 'Dr. Priya Nair, Clinical Director @ WellPath Clinics',
    colorText: 'text-rose-500',
    colorBg: 'bg-rose-50',
    colorBorder: 'border-rose-200',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding relative overflow-hidden bg-slate-50/60">
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-orange-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label border-rose-200 bg-rose-50 text-rose-500 mb-4 inline-flex">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Real Results,{' '}
            <span className="text-gradient-purple">Real Businesses</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Here's how we've turned operational drag into competitive advantage for our clients.
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {CASES.map((item, i) => {
            const Icon = item.icon
            const isReversed = i % 2 === 1
            return (
              <motion.div
                key={item.industry}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`glass-card rounded-2xl overflow-hidden border ${item.colorBorder} shadow-lg`}
              >
                <div className={`grid lg:grid-cols-5 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left: story content (3 cols) */}
                  <div className={`lg:col-span-3 p-7 lg:p-9 ${isReversed ? 'lg:order-2' : ''}`}>
                    {/* Industry tag */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-9 h-9 rounded-lg ${item.colorBg} border ${item.colorBorder} flex items-center justify-center`}>
                        <Icon className={`w-4 h-4 ${item.colorText}`} />
                      </div>
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-wider ${item.colorText}`}>
                          {item.industry}
                        </p>
                        <p className="text-xs text-slate-400">{item.company}</p>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="mb-5">
                      <h4 className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">The Challenge</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">{item.challenge}</p>
                    </div>

                    {/* What was built */}
                    <div className="mb-6">
                      <h4 className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">What We Built</h4>
                      <p className="text-slate-700 text-sm leading-relaxed">{item.built}</p>
                    </div>

                    {/* Quote */}
                    <div className={`flex gap-3 p-4 rounded-xl ${item.colorBg} border ${item.colorBorder}`}>
                      <Quote className={`w-4 h-4 ${item.colorText} flex-shrink-0 mt-0.5`} />
                      <div>
                        <p className={`text-sm italic ${item.colorText} leading-relaxed mb-2`}>
                          {item.quote}
                        </p>
                        <p className={`text-xs font-semibold ${item.colorText} opacity-70`}>
                          — {item.quoteName}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: stats (2 cols) */}
                  <div className={`lg:col-span-2 ${item.colorBg} border-l ${item.colorBorder} p-7 lg:p-9 flex flex-col justify-center gap-6 ${isReversed ? 'lg:order-1 lg:border-l-0 lg:border-r' : ''}`}>
                    <h4 className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Results</h4>
                    {item.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col">
                        <span className={`text-4xl lg:text-5xl font-black ${item.colorText} leading-none`}>
                          {stat.value}
                        </span>
                        <span className="text-slate-500 text-sm font-medium mt-1">{stat.label}</span>
                      </div>
                    ))}

                    <a
                      href="#cta"
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${item.colorText} hover:gap-3 transition-all mt-2 group`}
                    >
                      Get similar results
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
