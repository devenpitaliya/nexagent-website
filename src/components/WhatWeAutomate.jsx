import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import {
  Robot,
  Headset,
  PaperPlaneTilt,
  Database,
  Gear,
  UsersFour,
  CurrencyDollar,
} from '@phosphor-icons/react'

const USE_CASES = [
  { Icon: Headset,       title: 'Support Automation', gradient: 'from-orange-400 to-amber-400',   colorText: 'text-orange-500' },
  { Icon: PaperPlaneTilt,title: 'Sales Outreach',     gradient: 'from-purple-500 to-violet-400',  colorText: 'text-purple-500' },
  { Icon: Database,      title: 'Data Pipelines',     gradient: 'from-cyan-500 to-blue-400',      colorText: 'text-cyan-500'   },
  { Icon: Gear,          title: 'Internal Ops',       gradient: 'from-amber-500 to-orange-400',   colorText: 'text-amber-600'  },
  { Icon: UsersFour,     title: 'Recruiting',         gradient: 'from-emerald-500 to-teal-400',   colorText: 'text-emerald-500'},
  { Icon: CurrencyDollar,title: 'Finance Reports',   gradient: 'from-rose-500 to-pink-400',      colorText: 'text-rose-500'   },
]

const INDUSTRIES = [
  { name: 'E-Commerce & Retail',      items: ['Order status & returns automation','AI-powered product recommendations','Inventory reorder alerts','Abandoned cart recovery'] },
  { name: 'Healthcare & Clinics',     items: ['Appointment scheduling & reminders','Patient intake form automation','Insurance pre-auth checks','No-show follow-up workflows'] },
  { name: 'SaaS & Technology',        items: ['Customer onboarding sequences','Support ticket triage & routing','Churn risk detection & alerts','Usage analytics reporting'] },
  { name: 'Finance & Accounting',     items: ['Invoice processing & reconciliation','Expense report automation','Compliance monitoring alerts','Monthly close reporting'] },
  { name: 'Real Estate',              items: ['Lead qualification & scoring','Property listing alerts','Contract deadline tracking','Client follow-up sequences'] },
  { name: 'Logistics & Supply Chain', items: ['Shipment tracking notifications','Delay alert & re-routing','Purchase order processing','Supplier follow-up sequences'] },
  { name: 'HR & Recruiting',          items: ['Resume screening & ranking','Interview scheduling workflows','Employee onboarding automation','Payroll & leave reporting'] },
  { name: 'Marketing & Agencies',     items: ['Campaign performance reporting','Lead nurturing sequences','Social media monitoring','Client reporting automation'] },
  { name: 'Legal & Compliance',       items: ['Contract review & extraction','Deadline & filing reminders','Client intake automation','Compliance audit reporting'] },
  { name: 'Education & EdTech',       items: ['Student enrollment workflows','Progress report generation','Parent notification sequences','Course completion certificates'] },
  { name: 'Restaurants & Hospitality',items: ['Reservation confirmation & reminders','Inventory & ordering automation','Staff scheduling workflows','Guest review monitoring'] },
  { name: 'Manufacturing',            items: ['Quality control reporting','Preventive maintenance scheduling','Order processing automation','Shift handover summaries'] },
]

const LEFT  = INDUSTRIES.slice(0, 6)
const RIGHT = INDUSTRIES.slice(6)

const N = USE_CASES.length
const DEG = 360 / N
const RADIUS = 160
const SIZE = 380

function AccordionRow({ industry, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3.5 text-left group"
      >
        <span className={`text-sm font-semibold transition-colors ${isOpen ? 'text-orange-500' : 'text-slate-700 group-hover:text-slate-900'}`}>
          {industry.name}
        </span>
        <span className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
          {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="pb-3.5 flex flex-col gap-1.5">
              {industry.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-500">
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

export default function WhatWeAutomate() {
  const [active, setActive]     = useState(0)
  const [openLeft, setOpenLeft]   = useState(-1)
  const [openRight, setOpenRight] = useState(-1)
  const accRot = useRef(0)
  const [ringRot, setRingRot]   = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      accRot.current -= DEG
      setRingRot(accRot.current)
      setActive(a => (a + 1) % N)
    }, 3600)
    return () => clearInterval(id)
  }, [])

  const goTo = (i) => {
    if (i === active) return
    const steps = ((i - active) + N) % N
    accRot.current -= steps * DEG
    setRingRot(accRot.current)
    setActive(i)
  }

  const uc = USE_CASES[active]

  return (
    <section id="solutions" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-wide relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-label border-orange-200 bg-orange-50 text-orange-500 mb-4 inline-flex">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
            AI Agents Built for <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto mb-6">
            From e-commerce to healthcare, we deploy custom AI workflow automation that eliminates repetitive tasks, cuts operational costs by 70%, and goes live in 14 days.
          </p>
          <div className="flex items-center justify-center gap-10">
            {[['12+','Industries served'],['2 wks','Avg deploy time'],['70%','Ops automated']].map(([val, label]) => (
              <div key={label} className="text-center">
                <p className="text-2xl sm:text-3xl font-black text-slate-900">{val}</p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3-column: industries | orbit | industries */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-start">

          {/* Left industries */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-2"
          >
            {LEFT.map((ind, i) => (
              <AccordionRow
                key={ind.name}
                industry={ind}
                isOpen={openLeft === i}
                onToggle={() => setOpenLeft(openLeft === i ? -1 : i)}
              />
            ))}
          </motion.div>

          {/* Center: orbit animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative" style={{ width: SIZE, height: SIZE }}>

              {/* Ambient glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="w-56 h-56 rounded-full bg-orange-400/10 blur-[60px]"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>

              {/* Center hub */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                <motion.div
                  className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-2xl shadow-orange-500/40"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Robot weight="fill" size={44} className="text-white" />
                </motion.div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={active}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className={`mt-2.5 text-xs font-black tracking-wide ${uc.colorText}`}
                  >
                    {uc.title}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: ringRot }}
                transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="absolute rounded-full border-2 border-dashed border-orange-200/70"
                  style={{ width: RADIUS * 2, height: RADIUS * 2, left: SIZE / 2 - RADIUS, top: SIZE / 2 - RADIUS }}
                />
                {USE_CASES.map((item, i) => {
                  const angleDeg = -90 + DEG * i
                  const angleRad = angleDeg * (Math.PI / 180)
                  const cx = SIZE / 2 + RADIUS * Math.cos(angleRad) - 24
                  const cy = SIZE / 2 + RADIUS * Math.sin(angleRad) - 24
                  const { Icon } = item
                  const isActive = i === active
                  return (
                    <motion.div
                      key={item.title}
                      className="absolute"
                      style={{ left: cx, top: cy, width: 48, height: 48 }}
                      animate={{ rotate: -ringRot }}
                      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.button
                        onClick={() => goTo(i)}
                        animate={{ scale: isActive ? 1.2 : 1 }}
                        transition={{ duration: 0.4 }}
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md
                          ${isActive ? `bg-gradient-to-br ${item.gradient} shadow-lg` : 'bg-white border-2 border-slate-100 hover:border-slate-200'}`}
                      >
                        <Icon
                          weight={isActive ? 'fill' : 'duotone'}
                          size={22}
                          className={`transition-colors duration-300 ${isActive ? 'text-white' : item.colorText}`}
                        />
                      </motion.button>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Right industries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-2"
          >
            {RIGHT.map((ind, i) => (
              <AccordionRow
                key={ind.name}
                industry={ind}
                isOpen={openRight === i}
                onToggle={() => setOpenRight(openRight === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
