import { motion } from 'framer-motion'
import {
  MessageCircle,
  Mail,
  BarChart3,
  Cog,
  UserCheck,
  Receipt,
  ArrowUpRight,
  TrendingDown,
} from 'lucide-react'

const USE_CASES = [
  {
    icon: MessageCircle,
    category: 'Customer Experience',
    title: 'Support Automation',
    problem: 'Your team spends 6+ hours/day answering repetitive tickets.',
    solution: 'AI agent triages, responds to, and resolves 80% of support tickets automatically.',
    outcome: '↓ 80% ticket volume',
    color: 'blue',
    colorText: 'text-blue-400',
    colorBg: 'bg-blue-500/10',
    colorBorder: 'border-blue-500/20',
    gradient: 'from-blue-500/20 to-transparent',
  },
  {
    icon: Mail,
    category: 'Sales',
    title: 'Outreach Agents',
    problem: 'Your sales reps waste hours on copy-paste follow-ups.',
    solution: 'Personalized multi-step email sequences generated and sent by AI, at scale.',
    outcome: '3x more outreach',
    color: 'purple',
    colorText: 'text-purple-400',
    colorBg: 'bg-purple-500/10',
    colorBorder: 'border-purple-500/20',
    gradient: 'from-purple-500/20 to-transparent',
  },
  {
    icon: BarChart3,
    category: 'Data & Analytics',
    title: 'Data Pipeline Automation',
    problem: 'Raw data sits in silos; your analysts spend days cleaning it.',
    solution: 'Agents collect, transform, and deliver clean structured data — on a schedule.',
    outcome: '↓ 90% manual effort',
    color: 'cyan',
    colorText: 'text-cyan-400',
    colorBg: 'bg-cyan-500/10',
    colorBorder: 'border-cyan-500/20',
    gradient: 'from-cyan-500/20 to-transparent',
  },
  {
    icon: Cog,
    category: 'Operations',
    title: 'Internal Ops Automation',
    problem: 'Routine back-office tasks drain your most valuable people.',
    solution: 'AI handles approvals, routing, reporting, and notifications automatically.',
    outcome: '120 hrs saved/month',
    color: 'orange',
    colorText: 'text-orange-400',
    colorBg: 'bg-orange-500/10',
    colorBorder: 'border-orange-500/20',
    gradient: 'from-orange-500/20 to-transparent',
  },
  {
    icon: UserCheck,
    category: 'HR & Talent',
    title: 'Recruiting Pipeline',
    problem: 'Screening hundreds of resumes takes days before you talk to anyone.',
    solution: 'AI pre-screens applicants, schedules calls, and sends status updates automatically.',
    outcome: '↓ 70% screening time',
    color: 'emerald',
    colorText: 'text-emerald-400',
    colorBg: 'bg-emerald-500/10',
    colorBorder: 'border-emerald-500/20',
    gradient: 'from-emerald-500/20 to-transparent',
  },
  {
    icon: Receipt,
    category: 'Finance',
    title: 'Reporting & Reconciliation',
    problem: 'Monthly closes drag on for days, pulling your finance team offline.',
    solution: 'Agents pull, reconcile, and format financial data into ready-to-share reports.',
    outcome: '↓ 85% report time',
    color: 'pink',
    colorText: 'text-pink-400',
    colorBg: 'bg-pink-500/10',
    colorBorder: 'border-pink-500/20',
    gradient: 'from-pink-500/20 to-transparent',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function WhatWeAutomate() {
  return (
    <section id="solutions" className="section-padding relative overflow-hidden">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 lg:mb-18"
        >
          <span className="section-label border-cyan-500/25 bg-cyan-500/8 text-cyan-400 mb-4 inline-flex">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            What We{' '}
            <span className="text-gradient">Automate</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Six high-impact areas where AI agents replace manual work —
            delivering measurable results from day one.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {USE_CASES.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="group relative glass-card rounded-2xl p-6 border border-white/[0.06] hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-xl transition-all duration-400 overflow-hidden"
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${item.gradient}`} />
                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Category + icon */}
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-[10px] font-semibold uppercase tracking-widest ${item.colorText} opacity-70`}>
                      {item.category}
                    </span>
                    <div className={`w-9 h-9 rounded-xl ${item.colorBg} border ${item.colorBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-4 h-4 ${item.colorText}`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>

                  {/* Problem */}
                  <div className="mb-3">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">The Problem</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">Our Solution</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.solution}</p>
                  </div>

                  {/* Outcome chip */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${item.colorBg} border ${item.colorBorder} ${item.colorText} text-xs font-semibold`}>
                      <TrendingDown className="w-3 h-3" />
                      {item.outcome}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 text-slate-600 group-hover:${item.colorText} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200`} />
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
