import { motion } from 'framer-motion'
import { Linkedin, Calendar, CheckCircle } from 'lucide-react'
import founderImg from '../assets/images/My image.png'

const CREDENTIALS = [
  '5+ years building AI automation systems for B2B companies',
  'Former software engineer turned automation consultant',
  'Helped 30+ businesses cut operational costs by 50%+',
  'Specialized in LangChain, n8n, and custom agent pipelines',
]

export default function FounderSection() {
  return (
    <section id="founder" className="section-padding relative overflow-hidden bg-orange-50/40">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-400/6 blur-[120px] rounded-full" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[340px] h-[340px] rounded-full border-2 border-orange-200/50" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] rounded-full border border-orange-100/40" />
            </div>

            {/* Photo container */}
            <div className="relative w-72 h-96 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-orange-200/40">
              <img
                src={founderImg}
                alt="Devendra Pitaliya — Founder, NexAgent"
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 60%', transform: 'scale(1.35)', transformOrigin: '50% 60%' }}
              />
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 glass-card rounded-2xl px-5 py-4 border border-orange-200 shadow-lg"
            >
              <p className="text-3xl font-black text-orange-500">30+</p>
              <p className="text-xs text-slate-500 font-medium">Businesses Automated</p>
            </motion.div>

            {/* Floating available badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 border border-emerald-200 shadow-lg flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-semibold text-slate-700">Taking new clients</p>
            </motion.div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Label */}
            <span className="section-label border-orange-200 bg-orange-50 text-orange-500 w-fit">
              Meet the Founder
            </span>

            {/* Name + title */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-1">
                Hi, I'm{' '}
                <span className="text-gradient">Devendra Pitaliya</span>
              </h2>
              <p className="text-slate-500 font-medium">Founder & AI Automation Engineer, NexAgent</p>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-4 text-slate-600 text-base leading-relaxed">
              <p>
                I started NexAgent after watching talented teams spend half their day on tasks a well-built AI agent could handle in seconds. It wasn't a tool problem — it was an implementation problem.
              </p>
              <p>
                I'm an engineer by background, so when I say "custom-built," I mean it. Every agent we deploy is purpose-designed for your specific workflow — not a template someone else used for a different industry.
              </p>
              <p className="font-medium text-slate-700">
                My promise: you'll see automation running in your production environment within 2 weeks, or I work for free until you do.
              </p>
            </div>

            {/* Credentials */}
            <ul className="flex flex-col gap-2.5">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold rounded-full shadow-lg shadow-orange-500/20 hover:opacity-90 hover:scale-105 transition-all duration-200 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Book a Call with Me Directly
              </a>
              <a
                href="https://www.linkedin.com/in/devendra-pitaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
