import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mic, Lock, Sparkles, Phone, Users, FileText, Mail, ArrowLeft, Zap, Home, Receipt, Video, BarChart2, MessageSquare } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AGENTS = [
  {
    id: 'hospital-voice-bot',
    icon: Phone,
    label: 'Healthcare',
    name: 'Hospital Appointment Voice Bot',
    description: 'Call in, speak naturally, and book, reschedule, or cancel your appointment — no human needed. Handles insurance queries, doctor availability, and reminders automatically.',
    features: ['Voice-based booking', 'Real-time availability', 'Insurance pre-auth', 'Automated reminders'],
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'shadow-blue-500/20',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
    badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    dot: 'bg-blue-400',
  },
  {
    id: 'hr-system',
    icon: Users,
    label: 'Human Resources',
    name: 'AI HR Assistant',
    description: 'Ask anything about company policies, leave balances, onboarding steps, or payroll — and get instant accurate answers. Built for internal HR teams and employees.',
    features: ['Policy Q&A', 'Leave management', 'Onboarding flows', 'Payroll queries'],
    gradient: 'from-purple-500 to-violet-400',
    glow: 'shadow-purple-500/20',
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/5',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    dot: 'bg-purple-400',
  },
  {
    id: 'resume-screening',
    icon: FileText,
    label: 'Recruiting',
    name: 'Resume Screening Agent',
    description: 'Drop in a job description and a stack of resumes — the agent ranks candidates, flags red flags, and delivers a shortlist with reasoning in seconds.',
    features: ['JD matching', 'Candidate ranking', 'Red flag detection', 'Shortlist with reasoning'],
    gradient: 'from-amber-500 to-orange-400',
    glow: 'shadow-amber-500/20',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/5',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    dot: 'bg-amber-400',
  },
  {
    id: 'cold-email',
    icon: Mail,
    label: 'Sales',
    name: 'Cold Email Personalization Engine',
    description: 'Enter any company name — the agent researches the prospect, identifies pain points, and writes a fully personalized cold email in seconds. Not a template. A real message.',
    features: ['Prospect research', 'Personalized copy', 'Subject line variants', 'Tone matching'],
    gradient: 'from-emerald-500 to-teal-400',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    dot: 'bg-emerald-400',
  },
  {
    id: 'real-estate',
    icon: Home,
    label: 'Real Estate',
    name: 'Property Inquiry Agent',
    description: 'Ask about listings, pricing, availability, or neighborhood info in natural language. The agent qualifies buyer intent and books a viewing — all without an agent picking up the phone.',
    features: ['Listing Q&A', 'Buyer qualification', 'Viewing scheduler', 'Price comparison'],
    gradient: 'from-rose-500 to-pink-400',
    glow: 'shadow-rose-500/20',
    border: 'border-rose-500/20',
    bg: 'bg-rose-500/5',
    badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    dot: 'bg-rose-400',
  },
  {
    id: 'invoice-extractor',
    icon: Receipt,
    label: 'Finance',
    name: 'Invoice PDF Extractor',
    description: 'Upload any invoice PDF — the agent pulls out vendor, amount, line items, due date, and tax, then outputs clean structured data ready for your accounting system.',
    features: ['PDF parsing', 'Line item extraction', 'Tax detection', 'Structured export'],
    gradient: 'from-cyan-500 to-blue-400',
    glow: 'shadow-cyan-500/20',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    dot: 'bg-cyan-400',
  },
  {
    id: 'meeting-summarizer',
    icon: Video,
    label: 'Productivity',
    name: 'Meeting Summarizer',
    description: 'Paste a meeting transcript and get a clean summary, key decisions, open questions, and a formatted action item list with owners — in under 10 seconds.',
    features: ['Summary generation', 'Action item list', 'Decision log', 'Owner assignment'],
    gradient: 'from-violet-500 to-purple-400',
    glow: 'shadow-violet-500/20',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    dot: 'bg-violet-400',
  },
  {
    id: 'lead-scorer',
    icon: BarChart2,
    label: 'Marketing',
    name: 'Lead Scoring Agent',
    description: 'Submit a lead\'s details — company, role, behavior signals — and the agent scores them 1–100, explains the reasoning, and recommends the next best action.',
    features: ['Fit scoring', 'Signal analysis', 'Reasoning output', 'Next action rec'],
    gradient: 'from-orange-500 to-amber-400',
    glow: 'shadow-orange-500/20',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/5',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    dot: 'bg-orange-400',
  },
  {
    id: 'support-chat-bot',
    icon: MessageSquare,
    label: 'Customer Support',
    name: 'Live Support Chat Bot',
    description: 'A fully functional e-commerce support agent — handles order status, returns, refund requests, and FAQs in real time. Watch it fetch data and respond like a trained human agent.',
    features: ['Order lookups', 'Return handling', 'Refund processing', 'FAQ resolution'],
    gradient: 'from-teal-500 to-emerald-400',
    glow: 'shadow-teal-500/20',
    border: 'border-teal-500/20',
    bg: 'bg-teal-500/5',
    badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    dot: 'bg-teal-400',
  },
]

function AgentCard({ agent, index }) {
  const Icon = agent.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl border ${agent.border} ${agent.bg} p-6 overflow-hidden group`}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      {/* Animated pulse ring behind icon */}
      <div className="relative w-14 h-14 mb-5">
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${agent.gradient} opacity-20`}
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        />
        <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center shadow-lg ${agent.glow}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Label badge */}
      <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${agent.badge} mb-3`}>
        <span className={`w-1.5 h-1.5 rounded-full ${agent.dot}`} />
        {agent.label}
      </span>

      <h3 className="text-white font-bold text-lg leading-tight mb-2">{agent.name}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{agent.description}</p>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {agent.features.map(f => (
          <span key={f} className="text-[11px] text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
            {f}
          </span>
        ))}
      </div>

      {/* Coming soon button */}
      <div className="relative">
        <button
          disabled
          className={`w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-gradient-to-r ${agent.gradient} opacity-40 cursor-not-allowed text-white font-semibold text-sm`}
        >
          <Mic className="w-4 h-4" />
          Try Live Demo
        </button>
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-slate-900/60 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">Coming Soon</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceRoom() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Experience Room | NexAgent — Live AI Agent Demos'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Try NexAgent\'s live AI agent demos — hospital appointment voice bot, HR assistant, resume screening, and sales outreach. Experience AI automation firsthand.')
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://nexagent.ai/experience-room')
    return () => {
      document.title = 'AI Automation Consulting Agency | NexAgent — Custom AI Agents in 14 Days'
      if (desc) desc.setAttribute('content', 'NexAgent builds custom AI agents that automate 70%+ of business workflows — customer support, sales outreach, data pipelines, and internal ops. Fixed price, live in 14 days, you own the code.')
      if (canonical) canonical.setAttribute('href', 'https://nexagent.ai')
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[400px] bg-orange-500/8 blur-[120px] rounded-full" />
          <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-purple-500/8 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/6 blur-[100px] rounded-full" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.3 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none" />

        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Back link */}
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-10 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>

            {/* Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3.5 h-3.5" />
                Interactive AI Demos
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              The Experience{' '}
              <span className="text-gradient">Room</span>
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              Don't take our word for it —{' '}
              <span className="text-gradient font-black">experience</span>{' '}
              <span className="font-light italic text-slate-300">yourself.</span>
            </p>
            <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
              Each demo below is a real AI agent built for a specific industry. Pick one, grab your mic, and experience what AI automation actually feels like in production.
            </p>
          </motion.div>
        </div>
      </div>

      {/* What is the Experience Room */}
      <div className="container-wide pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/8 bg-white/3 p-8 lg:p-10 mb-16 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
        >
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-white font-bold text-xl lg:text-2xl mb-3">What is the Experience Room?</h2>
            <p className="text-slate-400 text-base leading-relaxed mb-4">
              Most agencies show you screenshots. We let you have an actual conversation with the AI agents we build. The Experience Room is a collection of live, working demos — each one a fully functional AI agent deployed for a real-world business use case.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Speak to the hospital bot. Feed resumes to the screening agent. Watch the outreach system write a personalized email in real time. These are not prototypes — they are production-grade agents, the same kind we deploy for our clients in 14 days.
            </p>
          </div>
        </motion.div>

        {/* Agents grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Live Demos</p>
          <h2 className="text-white font-black text-2xl sm:text-3xl">Choose Your Agent</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {AGENTS.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-10 text-center"
        >
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">Ready to go live?</p>
          <h3 className="text-white font-black text-2xl sm:text-3xl mb-3">Want This Built for Your Business?</h3>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-8">
            Every agent in this room can be customised for your workflows, your data, and your brand — deployed in 14 days. Book a free call and we'll scope it out together.
          </p>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold rounded-full shadow-lg shadow-orange-500/25 hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            <Mic className="w-4 h-4" />
            Book a Free Call
          </a>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
