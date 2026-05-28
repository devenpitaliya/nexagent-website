import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function H2({ children, id }) {
  return (
    <h2 id={id} className="text-2xl lg:text-3xl font-black text-slate-900 mt-14 mb-5 leading-snug scroll-mt-24">
      {children}
    </h2>
  )
}

export function H3({ children }) {
  return <h3 className="text-lg font-bold text-slate-800 mt-8 mb-3">{children}</h3>
}

export function P({ children, className = '' }) {
  return <p className={`text-slate-600 leading-relaxed mb-5 ${className}`}>{children}</p>
}

export function Callout({ icon: Icon, color = 'orange', title, children }) {
  const colors = {
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    green:  'bg-emerald-50 border-emerald-200 text-emerald-700',
    blue:   'bg-blue-50 border-blue-200 text-blue-700',
    red:    'bg-red-50 border-red-200 text-red-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
  }
  return (
    <div className={`rounded-2xl border p-5 mb-6 ${colors[color]}`}>
      <div className="flex items-start gap-3">
        {Icon && <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />}
        <div>
          {title && <p className="font-bold text-sm mb-1">{title}</p>}
          <p className="text-sm leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  )
}

export function StatCard({ value, label, sub }) {
  return (
    <div className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
      <p className="text-4xl font-black text-orange-500 leading-none mb-1">{value}</p>
      <p className="text-slate-700 font-semibold text-sm">{label}</p>
      {sub && <p className="text-slate-400 text-xs mt-1">{sub}</p>}
    </div>
  )
}

export function StepCard({ num, title, desc }) {
  return (
    <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100">
      <span className="text-2xl font-black text-orange-200 flex-shrink-0 leading-none">{num}</span>
      <div>
        <p className="font-bold text-slate-800 mb-1">{title}</p>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export function CompareRow({ label, ai, traditional, header }) {
  if (header) {
    return (
      <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-400">
        <span></span>
        <span className="text-orange-500">AI Agents</span>
        <span>Traditional</span>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-3 gap-3 p-4 border-b border-slate-100 last:border-0 text-sm">
      <span className="font-semibold text-slate-700">{label}</span>
      <span className="text-emerald-600 font-medium">{ai}</span>
      <span className="text-slate-400">{traditional}</span>
    </div>
  )
}

export function CaseBlock({ company, industry, challenge, result, stats, color = 'orange' }) {
  const colors = {
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', bar: 'bg-orange-500' },
    amber:  { bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-600',  bar: 'bg-amber-500'  },
    rose:   { bg: 'bg-rose-50',   border: 'border-rose-200',   text: 'text-rose-600',   bar: 'bg-rose-500'   },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', bar: 'bg-purple-500' },
    blue:   { bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-600',   bar: 'bg-blue-500'   },
  }
  const c = colors[color]
  return (
    <div className={`rounded-2xl border ${c.border} overflow-hidden mb-6`}>
      <div className={`h-1 w-full ${c.bar}`} />
      <div className="p-6 bg-white">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-bold uppercase tracking-widest ${c.text} ${c.bg} border ${c.border} px-2.5 py-1 rounded-full`}>{industry}</span>
          <span className="text-slate-700 font-bold">{company}</span>
        </div>
        <p className="text-sm text-slate-500 mb-1.5"><span className="font-semibold text-slate-700">Challenge: </span>{challenge}</p>
        <p className="text-sm text-slate-500 mb-4"><span className="font-semibold text-slate-700">Result: </span>{result}</p>
        <div className="grid grid-cols-3 gap-3">
          {stats.map(s => (
            <div key={s.label} className={`text-center p-3 rounded-xl ${c.bg} border ${c.border}`}>
              <p className={`text-xl font-black ${c.text}`}>{s.value}</p>
              <p className="text-[10px] text-slate-500 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function TOC({ items }) {
  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 mb-10">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Table of Contents</p>
      <ol className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={e => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }) }}
              className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-orange-500 transition-colors duration-200 group"
            >
              <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-500 text-[10px] font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {i + 1}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function FAQ({ items }) {
  return (
    <div className="flex flex-col gap-5 mt-2">
      {items.map((item, i) => (
        <div key={i}>
          <h3 className="font-bold text-slate-800 text-base mb-2">{item.q}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  )
}

export function ClosingCTA() {
  return (
    <div className="mt-14 p-8 lg:p-10 bg-slate-950 rounded-3xl text-center">
      <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-3">Ready to automate?</p>
      <h2 className="text-2xl lg:text-3xl font-black text-white mb-4">
        See exactly what we would automate for your business.
      </h2>
      <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
        Book a free 30-minute discovery call. We will map your highest-cost manual workflow, estimate your ROI, and show you exactly how an AI agent would handle it. No pitch, no pressure.
      </p>
      <Link
        to="/#cta"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:opacity-90 hover:scale-105 transition-all duration-200"
      >
        Book a Free Discovery Call
        <ArrowRight className="w-4 h-4" />
      </Link>
      <p className="text-slate-500 text-xs mt-4">No credit card · No commitment · Results in under 2 weeks</p>
    </div>
  )
}
