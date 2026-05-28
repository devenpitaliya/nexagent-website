import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import ParticleField from './effects/ParticleField'

const TESTIMONIALS = [
  {
    quote:
      "NexAgent cut our support response time from 48 hours to under 5 minutes. I was skeptical at first — but watching the agent handle 200 tickets a day without missing a beat changed everything.",
    name: 'Sarah Mitchell',
    title: 'COO',
    company: 'StyleForward',
    industry: 'E-Commerce',
    rating: 5,
    avatar: 'SM',
    avatarBg: 'bg-orange-500/20',
    avatarText: 'text-orange-400',
    accentBorder: 'border-orange-500/25',
    accentBg: 'bg-orange-500/10',
    accentText: 'text-orange-400',
  },
  {
    quote:
      "Our data team used to spend three full days every week just cleaning and formatting data. Now it just happens at 9am every morning. We moved two analysts onto product work instead.",
    name: 'James Thornton',
    title: 'Head of Data',
    company: 'PivotMetrics',
    industry: 'SaaS Analytics',
    rating: 5,
    avatar: 'JT',
    avatarBg: 'bg-blue-500/20',
    avatarText: 'text-blue-400',
    accentBorder: 'border-blue-500/25',
    accentBg: 'bg-blue-500/10',
    accentText: 'text-blue-400',
  },
  {
    quote:
      "We effectively added two full-time staff without hiring anyone. Patient intake, confirmations, insurance checks — all automated. Our admin team is finally doing actual admin work now.",
    name: 'Dr. Priya Nair',
    title: 'Clinical Director',
    company: 'WellPath Clinics',
    industry: 'Healthcare',
    rating: 5,
    avatar: 'PN',
    avatarBg: 'bg-emerald-500/20',
    avatarText: 'text-emerald-400',
    accentBorder: 'border-emerald-500/25',
    accentBg: 'bg-emerald-500/10',
    accentText: 'text-emerald-400',
  },
  {
    quote:
      "The 3-Sprint System was exactly what I needed — I knew what was happening every single day. Two weeks after our first call, the agent was live. No surprises, no delays.",
    name: 'Marcus Webb',
    title: 'Founder & CEO',
    company: 'LaunchLayer',
    industry: 'B2B SaaS',
    rating: 5,
    avatar: 'MW',
    avatarBg: 'bg-purple-500/20',
    avatarText: 'text-purple-400',
    accentBorder: 'border-purple-500/25',
    accentBg: 'bg-purple-500/10',
    accentText: 'text-purple-400',
  },
  {
    quote:
      "I was spending 6 hours a day just on outreach follow-ups. NexAgent built a personalized email sequence agent that tripled our reply rate. I now spend that time actually talking to clients.",
    name: 'Lena Kowalski',
    title: 'Sales Director',
    company: 'GrowthVessel',
    industry: 'Sales Tech',
    rating: 5,
    avatar: 'LK',
    avatarBg: 'bg-rose-500/20',
    avatarText: 'text-rose-400',
    accentBorder: 'border-rose-500/25',
    accentBg: 'bg-rose-500/10',
    accentText: 'text-rose-400',
  },
  {
    quote:
      "Monthly financial reconciliation used to take my team 4 days. The reporting agent pulls everything, formats it, and delivers a clean PDF to Slack by 8am on the 1st. Game changer.",
    name: 'Aiden Cho',
    title: 'CFO',
    company: 'NorthBridge Ventures',
    industry: 'Finance',
    rating: 5,
    avatar: 'AC',
    avatarBg: 'bg-amber-500/20',
    avatarText: 'text-amber-400',
    accentBorder: 'border-amber-500/25',
    accentBg: 'bg-amber-500/10',
    accentText: 'text-amber-400',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-slate-950">

      <ParticleField />
      {/* Glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-orange-500/7 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-amber-500/5 blur-[100px] rounded-full" />
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
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-orange-500/30 bg-orange-500/10 text-orange-400 mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Don't Take{' '}
            <span className="text-gradient">Our Word for It</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Real results from real business owners and operators who automated with NexAgent.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`group rounded-2xl p-6 border ${t.accentBorder} bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 flex flex-col gap-4`}
            >
              {/* Stars + quote icon */}
              <div className="flex items-center justify-between">
                <Stars count={t.rating} />
                <Quote className="w-5 h-5 text-white/10" />
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="h-px bg-white/8" />

              {/* Person */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.avatarBg} border ${t.accentBorder} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-xs font-black ${t.avatarText}`}>{t.avatar}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-white font-bold text-sm leading-tight">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.title} · {t.company}</p>
                </div>
                <span className={`ml-auto text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${t.accentBg} ${t.accentText} border ${t.accentBorder} whitespace-nowrap`}>
                  {t.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
