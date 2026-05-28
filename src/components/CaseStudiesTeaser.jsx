import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingBag, Code2, Heart, ArrowRight, TrendingUp } from 'lucide-react'

const TEASERS = [
  {
    icon: ShoppingBag,
    industry: 'E-Commerce',
    company: 'StyleForward',
    headline: 'From 48-hour support replies to 4-minute responses',
    stats: [
      { value: '65%', label: 'Cost Cut' },
      { value: '4 min', label: 'Response Time' },
      { value: '4.8★', label: 'CSAT' },
    ],
    slug: 'styleforward',
    colorText: 'text-orange-500',
    colorBg: 'bg-orange-50',
    colorBorder: 'border-orange-200',
    dotColor: 'bg-orange-500',
  },
  {
    icon: Code2,
    industry: 'SaaS Analytics',
    company: 'PivotMetrics',
    headline: '3 days of weekly manual data work eliminated overnight',
    stats: [
      { value: '80%', label: 'Manual Work Gone' },
      { value: '3 days', label: 'Saved/Week' },
      { value: '99.2%', label: 'Accuracy' },
    ],
    slug: 'pivotmetrics',
    colorText: 'text-amber-600',
    colorBg: 'bg-amber-50',
    colorBorder: 'border-amber-200',
    dotColor: 'bg-amber-500',
  },
  {
    icon: Heart,
    industry: 'Healthcare',
    company: 'WellPath Clinics',
    headline: '2 full-time employees worth of capacity — without hiring',
    stats: [
      { value: '120 hrs', label: 'Saved/Month' },
      { value: '35%', label: 'No-shows Down' },
      { value: '2 FTE', label: 'Capacity Added' },
    ],
    slug: 'wellpath',
    colorText: 'text-rose-500',
    colorBg: 'bg-rose-50',
    colorBorder: 'border-rose-200',
    dotColor: 'bg-rose-500',
  },
]

export default function CaseStudiesTeaser() {
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
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-rose-200 bg-rose-50 text-rose-500 mb-4">
            <TrendingUp className="w-3 h-3" />
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Real Results,{' '}
            <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Three companies. Three automations. Measurable impact from week one.
          </p>
        </motion.div>

        {/* Teaser cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TEASERS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/case-studies#${item.slug}`}
                  className={`group block rounded-2xl border ${item.colorBorder} bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                >
                  {/* Top color bar */}
                  <div className={`h-1 w-full ${item.dotColor}`} />

                  <div className="p-6">
                    {/* Industry + icon */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl ${item.colorBg} border ${item.colorBorder} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${item.colorText}`} />
                      </div>
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-widest ${item.colorText}`}>{item.industry}</p>
                        <p className="text-xs text-slate-400 font-medium">{item.company}</p>
                      </div>
                    </div>

                    {/* Headline */}
                    <p className="text-slate-800 font-bold text-base leading-snug mb-6">
                      "{item.headline}"
                    </p>

                    {/* Stats row */}
                    <div className={`grid grid-cols-3 gap-2 p-4 rounded-xl ${item.colorBg} border ${item.colorBorder} mb-5`}>
                      {item.stats.map(stat => (
                        <div key={stat.label} className="text-center">
                          <p className={`text-lg font-black ${item.colorText} leading-tight`}>{stat.value}</p>
                          <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Read more */}
                    <div className={`flex items-center gap-1.5 text-sm font-semibold ${item.colorText} group-hover:gap-2.5 transition-all duration-200`}>
                      Read full case study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-md text-sm font-semibold transition-all duration-200"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
