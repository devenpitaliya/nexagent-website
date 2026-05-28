import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, TrendingDown, Calendar, ArrowRight } from 'lucide-react'

const AVG_HOURLY_RATE = 35

function Slider({ label, icon: Icon, value, min, max, step, unit, onChange }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-semibold text-slate-700">{label}</span>
        </div>
        <span className="text-lg font-black text-orange-500">
          {value}{unit}
        </span>
      </div>
      <div className="relative h-2 rounded-full bg-slate-100">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-150"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-orange-500 shadow-md shadow-orange-200 transition-all duration-150 pointer-events-none"
          style={{ left: `calc(${pct}% - 10px)` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-slate-400 font-medium">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  )
}

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10)
  const [hoursPerWeek, setHoursPerWeek] = useState(15)
  const [automatable, setAutomatable] = useState(70)
  const [animated, setAnimated] = useState(false)

  const totalHoursPerMonth = teamSize * hoursPerWeek * 4
  const automatedHours = Math.round((automatable / 100) * totalHoursPerMonth)
  const moneySaved = automatedHours * AVG_HOURLY_RATE
  const annualSavings = moneySaved * 12

  useEffect(() => {
    setAnimated(false)
    const t = setTimeout(() => setAnimated(true), 50)
    return () => clearTimeout(t)
  }, [teamSize, hoursPerWeek, automatable])

  const fmt = (n) =>
    n >= 1000 ? `$${(n / 1000).toFixed(1)}k` : `$${n}`

  return (
    <section id="roi-calculator" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #64748b 2px, transparent 2px)', backgroundSize: '28px 28px', opacity: 0.75 }} />
        {/* Fade edges so grid doesn't hit borders hard */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffcf9] via-transparent to-[#fffcf9]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fffcf9] via-transparent to-[#fffcf9]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-400/5 blur-[100px] rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label border-orange-200 bg-orange-50 text-orange-500 mb-4 inline-flex">
            ROI Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            How Much Are You{' '}
            <span className="text-gradient">Losing Right Now?</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Adjust the sliders to see exactly how much manual work is costing your business every month.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left: Sliders */}
          <div className="glass-card rounded-2xl p-8 border border-slate-100 shadow-lg">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Adjust your numbers</p>
            <div className="flex flex-col gap-10">
              <Slider
                label="Team members doing manual work"
                icon={Users}
                value={teamSize}
                min={1}
                max={50}
                step={1}
                unit=" people"
                onChange={setTeamSize}
              />
              <Slider
                label="Hours per person per week on manual tasks"
                icon={Clock}
                value={hoursPerWeek}
                min={1}
                max={40}
                step={1}
                unit=" hrs/wk"
                onChange={setHoursPerWeek}
              />
              <Slider
                label="% of tasks that can be automated"
                icon={TrendingDown}
                value={automatable}
                min={30}
                max={90}
                step={5}
                unit="%"
                onChange={setAutomatable}
              />
            </div>
          </div>

          {/* Right: Output */}
          <div className="flex flex-col gap-5">
            {/* Main result */}
            <div className="relative rounded-2xl overflow-hidden border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-8">
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-400/10 rounded-full blur-2xl" />
              <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">Your team wastes</p>
              <motion.p
                key={automatedHours}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-5xl lg:text-6xl font-black text-slate-900 leading-none mb-1"
              >
                {automatedHours.toLocaleString()}
                <span className="text-2xl font-bold text-slate-500 ml-2">hrs/mo</span>
              </motion.p>
              <p className="text-slate-500 text-sm mt-2">on tasks AI agents can handle automatically</p>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Lost per month', value: fmt(moneySaved), sub: `at $${AVG_HOURLY_RATE}/hr avg`, highlight: true },
                { label: 'Lost per year', value: fmt(annualSavings), sub: 'in wasted productivity', highlight: false },
                { label: 'Hours reclaimed/mo', value: `${automatedHours.toLocaleString()}`, sub: 'with NexAgent agents', highlight: false },
                { label: 'Typical payback', value: '< 60 days', sub: 'from first deployment', highlight: false },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: animated ? 1 : 0, scale: animated ? 1 : 0.95 }}
                  transition={{ duration: 0.35 }}
                  className={`rounded-xl p-4 border ${stat.highlight ? 'bg-orange-500 border-orange-400' : 'bg-white border-slate-100'}`}
                >
                  <p className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${stat.highlight ? 'text-orange-100' : 'text-slate-400'}`}>
                    {stat.label}
                  </p>
                  <p className={`text-2xl font-black leading-none ${stat.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {stat.value}
                  </p>
                  <p className={`text-[11px] mt-1 ${stat.highlight ? 'text-orange-200' : 'text-slate-400'}`}>
                    {stat.sub}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#cta"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-orange-500/20 text-sm"
            >
              <Calendar className="w-4 h-4" />
              Book a Free Call — Let's Get These Hours Back
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-center text-slate-400 text-xs">
              Estimates based on industry averages. Actual savings vary by workflow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
