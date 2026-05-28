import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Bot } from 'lucide-react'

const INDUSTRIES = [
  {
    name: 'E-Commerce & Retail',
    items: [
      'Order status & returns automation',
      'AI-powered product recommendations',
      'Inventory reorder alerts',
      'Customer review response',
      'Abandoned cart recovery sequences',
    ],
  },
  {
    name: 'Healthcare & Clinics',
    items: [
      'Appointment scheduling & reminders',
      'Insurance pre-authorisation checks',
      'Patient intake form automation',
      'Billing & coding support',
      'No-show follow-up workflows',
    ],
  },
  {
    name: 'SaaS & Technology',
    items: [
      'Customer onboarding sequences',
      'Support ticket triage & routing',
      'Usage analytics reporting',
      'Churn risk detection & alerts',
      'Release notes & changelog automation',
    ],
  },
  {
    name: 'Finance & Accounting',
    items: [
      'Invoice processing & reconciliation',
      'Expense report automation',
      'Compliance monitoring alerts',
      'Fraud pattern detection',
      'Monthly close reporting',
    ],
  },
  {
    name: 'Real Estate',
    items: [
      'Lead qualification & scoring',
      'Property listing alerts to buyers',
      'Contract deadline tracking',
      'Client follow-up sequences',
      'Market report generation',
    ],
  },
  {
    name: 'Logistics & Supply Chain',
    items: [
      'Shipment tracking notifications',
      'Carrier communication automation',
      'Delay alert & re-routing workflows',
      'Purchase order processing',
      'Supplier follow-up sequences',
    ],
  },
  {
    name: 'HR & Recruiting',
    items: [
      'Resume screening & ranking',
      'Interview scheduling workflows',
      'Employee onboarding automation',
      'Payroll & leave report generation',
      'Performance review reminders',
    ],
  },
  {
    name: 'Marketing & Agencies',
    items: [
      'Campaign performance reporting',
      'Lead nurturing sequences',
      'Social media monitoring & alerts',
      'Content calendar scheduling',
      'Client reporting automation',
    ],
  },
  {
    name: 'Legal & Compliance',
    items: [
      'Contract review & extraction',
      'Deadline & filing reminders',
      'Client intake automation',
      'Document generation from templates',
      'Compliance audit reporting',
    ],
  },
  {
    name: 'Education & EdTech',
    items: [
      'Student enrollment workflows',
      'Assignment grading assistance',
      'Progress report generation',
      'Parent notification sequences',
      'Course completion certificates',
    ],
  },
  {
    name: 'Restaurants & Hospitality',
    items: [
      'Reservation confirmation & reminders',
      'Inventory & ordering automation',
      'Staff scheduling workflows',
      'Guest review monitoring',
      'Loyalty program notifications',
    ],
  },
  {
    name: 'Manufacturing',
    items: [
      'Quality control reporting',
      'Supply chain delay alerts',
      'Preventive maintenance scheduling',
      'Order processing automation',
      'Shift handover summaries',
    ],
  },
]

function Row({ industry, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-base font-semibold transition-colors ${isOpen ? 'text-orange-500' : 'text-slate-800 group-hover:text-slate-900'}`}>
          {industry.name}
        </span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="pb-5 flex flex-col gap-2">
              {industry.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function IndustriesSection() {
  const [openIdx, setOpenIdx] = useState(0)

  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i)

  return (
    <section id="industries" className="pt-10 pb-12 lg:pt-12 lg:pb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: sticky */}
          <div className="lg:sticky lg:top-15">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label border-orange-200 bg-orange-50 text-orange-500 mb-4 inline-flex">
                Industries We Serve
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-5">
                AI Agents Built for{' '}
                <span className="text-gradient">Every Industry</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                No matter your sector, repetitive workflows are costing you time and money.
                We've deployed agents across 12+ industries — the playbook is proven,
                the deployment is fast.
              </p>

              {/* Mini stat */}
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-black text-slate-900">12+</p>
                  <p className="text-sm text-slate-400 font-medium mt-0.5">Industries served</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">2 wks</p>
                  <p className="text-sm text-slate-400 font-medium mt-0.5">Avg deploy time</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900">70%</p>
                  <p className="text-sm text-slate-400 font-medium mt-0.5">Ops automated</p>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-full shadow-lg shadow-orange-500/25 text-sm"
              >
                <Bot className="w-4 h-4" />
                Build My Industry Agent
              </motion.a>

              {/* Hero image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mt-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="AI automation professional"
                  className="w-full h-[340px] object-cover object-top"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 via-transparent to-transparent" />
                {/* Badge overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 glass-card rounded-xl px-4 py-3 border border-orange-200/30">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <p className="text-white text-xs font-semibold drop-shadow">AI agents running across 12+ industries, 24/7</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: scrollable accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-card rounded-2xl border border-slate-200 divide-y-0 px-6 py-2 shadow-lg"
          >
            {INDUSTRIES.map((ind, i) => (
              <Row
                key={ind.name}
                industry={ind}
                isOpen={openIdx === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
