import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Calendar } from 'lucide-react'

const FAQS = [
  {
    q: 'How long does it take to go live?',
    a: 'Most projects are live in 14 days or less. Our 3-Sprint System is designed around a fixed 2-week timeline: 3 days to map your workflow, 7 days to build and test, 4 days to deploy and onboard. We\'ve never missed a 2-week deadline.',
  },
  {
    q: 'How much does it cost?',
    a: 'Projects start at $2,500 for a single-workflow automation. Most clients fall in the $5,000–$8,000 range for a full operations package. We\'re transparent about pricing upfront — you\'ll receive a fixed quote before any work begins. No hourly billing, no hidden fees.',
  },
  {
    q: 'Do we need a technical team to use your agents?',
    a: 'No. We handle all the technical implementation. Your team needs zero coding knowledge to use the agents we build. We also provide a full onboarding session and documentation so anyone on your team can operate and monitor the system.',
  },
  {
    q: 'What if an AI agent makes a mistake?',
    a: 'All agents are built with human-in-the-loop escalation for edge cases. We define clear thresholds — if a situation falls outside what the agent is confident handling, it routes to a human automatically. We also monitor all outputs for the first 30 days and tune accuracy continuously.',
  },
  {
    q: 'What tools and platforms do you integrate with?',
    a: 'Almost anything. We commonly integrate with Slack, HubSpot, Salesforce, Notion, Google Workspace, Airtable, Zapier, n8n, PostgreSQL, Shopify, Zendesk, and custom APIs. If your tool has an API or webhook, we can connect to it.',
  },
  {
    q: 'Who owns the agents after they\'re built?',
    a: 'You do — 100%. We hand over all code, documentation, and credentials at project completion. You\'re not locked into any subscription or ongoing dependency on us. You can choose to keep us on retainer for optimization, but it\'s entirely optional.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We\'ve built agents for e-commerce, SaaS, healthcare, finance, real estate, recruiting, and professional services. Automation patterns are often cross-industry — if your team has repetitive workflows, we can automate them regardless of sector.',
  },
  {
    q: 'What happens on the free discovery call?',
    a: 'It\'s a 30-minute call — no pitch, no pressure. We listen to your biggest operational bottleneck, ask clarifying questions, and tell you honestly whether we\'re the right fit. You\'ll leave with at least one actionable idea regardless of whether we work together.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        open ? 'border-orange-200 shadow-md shadow-orange-100/50' : 'border-slate-100 hover:border-slate-200'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-200 ${
          open ? 'bg-orange-50' : 'bg-white hover:bg-slate-50'
        }`}
      >
        <span className={`font-semibold text-sm sm:text-base leading-snug ${open ? 'text-orange-600' : 'text-slate-800'}`}>
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
          open ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 bg-white">
              <div className="h-px bg-orange-100 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-amber-400/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-14 lg:gap-20 items-start">

          {/* Left: sticky header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <span className="section-label border-orange-200 bg-orange-50 text-orange-500 mb-4 inline-flex">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
              Every Question{' '}
              <span className="text-gradient">Answered</span>
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Still have a question? Book the free call — we'll answer anything in 30 minutes.
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-full text-sm shadow-lg shadow-orange-500/20 hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Call
            </a>
          </motion.div>

          {/* Right: accordion */}
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
