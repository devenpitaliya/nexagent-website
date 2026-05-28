import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Code2, Heart, ArrowLeft, ArrowRight, Quote, Calendar } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticleField from '../components/effects/ParticleField'

const CASES = [
  {
    id: 'styleforward',
    icon: ShoppingBag,
    industry: 'E-Commerce',
    company: 'StyleForward',
    tagline: 'From 48-hour support replies to 4-minute responses',
    challenge:
      "StyleForward's support team was drowning in 1,200+ daily tickets — returns, sizing questions, order status lookups. Response times had hit 48 hours and customer satisfaction was falling fast. They were hiring more agents, but volume was outpacing headcount.",
    built:
      'We built a multi-agent support system: a classification agent that triages every incoming ticket by type and urgency, an order-data agent that fetches live context from Shopify, and a reply agent that drafts and sends context-aware responses. Anything that requires a human judgement call — refunds over a threshold, complaints, edge cases — gets escalated immediately with full context pre-filled.',
    timeline: '11 days from discovery call to production',
    stats: [
      { value: '65%', label: 'Operational Cost Reduction' },
      { value: '4 min', label: 'Avg. Response Time (was 48hr)' },
      { value: '4.8★', label: 'Customer Satisfaction Score' },
      { value: '80%', label: 'Tickets Fully Automated' },
    ],
    quote:
      'We went from 48-hour replies to 4-minute responses. Our support team now handles only the hard stuff — the agent takes care of everything else.',
    quoteName: 'Sarah Mitchell',
    quoteTitle: 'COO, StyleForward',
    colorText: 'text-orange-500',
    colorBg: 'bg-orange-50',
    colorBorder: 'border-orange-200',
    colorDark: 'text-orange-400',
    colorDarkBg: 'bg-orange-500/15',
    colorDarkBorder: 'border-orange-500/30',
    barColor: 'bg-orange-500',
  },
  {
    id: 'pivotmetrics',
    icon: Code2,
    industry: 'SaaS Analytics',
    company: 'PivotMetrics',
    tagline: '3 days of weekly manual data work eliminated overnight',
    challenge:
      "PivotMetrics's data team spent 3 days every week manually pulling data from 8 different sources — CRM, billing, product analytics, ad platforms — cleaning it, normalizing formats, and formatting it before any actual analysis could happen. Two senior analysts were spending more time on data plumbing than insight generation.",
    built:
      "We built a nightly data pipeline agent that runs at 2am every day. It authenticates and pulls from all 8 sources, runs normalization and deduplication logic, applies quality validation checks, and delivers a clean, formatted report to the team's Slack channel by 9am. Analysts wake up to clean data, not a queue of manual tasks.",
    timeline: '9 days from discovery call to production',
    stats: [
      { value: '80%', label: 'Manual Work Eliminated' },
      { value: '3 days', label: 'Saved Per Week' },
      { value: '99.2%', label: 'Data Accuracy Rate' },
      { value: '2', label: 'Analysts Freed for Product Work' },
    ],
    quote:
      'What used to take three days a week now just happens automatically. Our analysts actually do analysis now — not data janitorial work.',
    quoteName: 'James Thornton',
    quoteTitle: 'Head of Data, PivotMetrics',
    colorText: 'text-amber-600',
    colorBg: 'bg-amber-50',
    colorBorder: 'border-amber-200',
    colorDark: 'text-amber-400',
    colorDarkBg: 'bg-amber-500/15',
    colorDarkBorder: 'border-amber-500/30',
    barColor: 'bg-amber-500',
  },
  {
    id: 'wellpath',
    icon: Heart,
    industry: 'Healthcare',
    company: 'WellPath Clinics',
    tagline: '2 FTE worth of capacity added — without hiring anyone',
    challenge:
      "WellPath's admin staff was spending 4+ hours daily on patient intake tasks: appointment confirmations, reminder calls across multiple channels, insurance pre-verification, and chasing incomplete intake forms. It was repetitive, time-consuming, and pulling skilled staff away from patient-facing work.",
    built:
      'We built an intake automation agent that handles the entire patient communication flow: it sends appointment confirmations, runs a 3-step reminder sequence across SMS, email, and phone, pre-fills insurance verification fields from the patient record, and flags any incomplete intake information to staff 24 hours before the appointment — with the specific fields missing and a one-click link to resolve.',
    timeline: '13 days from discovery call to production',
    stats: [
      { value: '120 hrs', label: 'Admin Hours Saved Per Month' },
      { value: '35%', label: 'No-show Rate Reduction' },
      { value: '2 FTE', label: 'Equivalent Capacity Added' },
      { value: '4 hrs', label: 'Daily Admin Time Reclaimed' },
    ],
    quote:
      'We effectively added two full-time employees worth of capacity without hiring anyone. Our admin team is finally doing actual admin work.',
    quoteName: 'Dr. Priya Nair',
    quoteTitle: 'Clinical Director, WellPath Clinics',
    colorText: 'text-rose-500',
    colorBg: 'bg-rose-50',
    colorBorder: 'border-rose-200',
    colorDark: 'text-rose-400',
    colorDarkBg: 'bg-rose-500/15',
    colorDarkBorder: 'border-rose-500/30',
    barColor: 'bg-rose-500',
  },
]

function CaseCard({ item, index }) {
  const Icon = item.icon
  return (
    <motion.div
      id={item.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-3xl border ${item.colorBorder} bg-white overflow-hidden shadow-sm`}
    >
      {/* Top bar */}
      <div className={`h-1.5 w-full ${item.barColor}`} />

      <div className="p-8 lg:p-12">
        {/* Industry header */}
        <div className="flex items-center gap-3 mb-8">
          <div className={`w-12 h-12 rounded-2xl ${item.colorBg} border ${item.colorBorder} flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${item.colorText}`} />
          </div>
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest ${item.colorText}`}>{item.industry}</p>
            <p className="text-xl font-black text-slate-900">{item.company}</p>
          </div>
          <span className={`ml-auto hidden sm:flex items-center gap-1.5 text-xs font-semibold ${item.colorText} ${item.colorBg} border ${item.colorBorder} px-3 py-1.5 rounded-full`}>
            <Calendar className="w-3 h-3" />
            {item.timeline}
          </span>
        </div>

        {/* Tagline */}
        <h3 className="text-2xl lg:text-3xl font-black text-slate-900 leading-snug mb-10">
          "{item.tagline}"
        </h3>

        {/* Two columns: story + stats */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-10">
          {/* Story (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-7">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">The Challenge</h4>
              <p className="text-slate-700 leading-relaxed">{item.challenge}</p>
            </div>
            <div className={`w-full h-px ${item.colorBg} border-t ${item.colorBorder}`} />
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">What We Built</h4>
              <p className="text-slate-700 leading-relaxed">{item.built}</p>
            </div>
          </div>

          {/* Stats (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-5">Results</h4>
            <div className="grid grid-cols-2 gap-4">
              {item.stats.map(stat => (
                <div key={stat.label} className={`p-4 rounded-2xl ${item.colorBg} border ${item.colorBorder}`}>
                  <p className={`text-3xl font-black ${item.colorText} leading-none mb-1`}>{stat.value}</p>
                  <p className="text-xs text-slate-500 font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className={`flex gap-4 p-6 rounded-2xl ${item.colorBg} border ${item.colorBorder}`}>
          <Quote className={`w-5 h-5 ${item.colorText} flex-shrink-0 mt-0.5`} />
          <div>
            <p className={`text-base font-medium ${item.colorText} leading-relaxed mb-3 italic`}>
              "{item.quote}"
            </p>
            <p className="text-sm font-bold text-slate-700">{item.quoteName}</p>
            <p className="text-xs text-slate-500">{item.quoteTitle}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function CaseStudiesPage() {
  const { hash } = useLocation()

  useEffect(() => {
    document.title = 'AI Automation Case Studies | NexAgent — Real Results, Real Businesses'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Read how NexAgent automated workflows for e-commerce, SaaS, and healthcare businesses. Real results: 65% cost reduction, 4-minute support response times, 120 hours saved per month.')
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://nexagent.ai/case-studies')
    return () => {
      document.title = 'AI Automation Consulting Agency | NexAgent — Custom AI Agents in 14 Days'
      if (desc) desc.setAttribute('content', "NexAgent builds custom AI agents that automate 70%+ of business workflows — customer support, sales outreach, data pipelines, and internal ops. Fixed price, live in 14 days, you own the code. Book a free discovery call.")
      if (canonical) canonical.setAttribute('href', 'https://nexagent.ai')
    }
  }, [])

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <div className="min-h-screen bg-[#fffcf9]">
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 pt-32 pb-20">
        <ParticleField />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
              Case Studies
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Real automations. Real numbers. Here's exactly what we built, why we built it, and what changed.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case studies */}
      <div className="container-wide py-16 lg:py-20 flex flex-col gap-10">
        {CASES.map((item, i) => (
          <CaseCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-950 py-20 text-center relative overflow-hidden">
        <ParticleField />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/8 blur-[120px] rounded-full" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-4">Ready to be next?</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Your results could be on this page.
            </h2>
            <Link
              to="/#cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              Book a Discovery Call
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
