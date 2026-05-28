import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Zap, Calendar, Phone } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    price: '$2,500',
    period: 'one-time',
    tagline: 'Perfect for one high-impact workflow',
    popular: false,
    features: [
      '1 custom AI agent',
      'Single workflow automation',
      'Integration with 2 existing tools',
      '2-week delivery',
      '30-day post-launch support',
      'Performance report at Day 30',
    ],
    cta: 'Get Started',
    ctaStyle: 'border border-orange-200 text-orange-500 hover:bg-orange-50',
    badge: null,
  },
  {
    name: 'Growth',
    price: '$5,000',
    period: 'one-time',
    tagline: 'For teams ready to automate seriously',
    popular: true,
    features: [
      '3 custom AI agents',
      'Up to 3 workflow automations',
      'Integration with unlimited tools',
      '2-week delivery',
      '60-day post-launch support',
      'Weekly performance reports',
      'Monthly optimization session',
      'Priority Slack support',
    ],
    cta: 'Most Popular — Book a Call',
    ctaStyle: 'bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/20',
    badge: 'Most Popular',
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: 'tailored to your ops',
    tagline: 'For companies automating at full scale',
    popular: false,
    features: [
      'Unlimited AI agents',
      'Full operations audit & roadmap',
      'Dedicated automation engineer',
      'Enterprise integrations',
      'Ongoing retainer support',
      'Quarterly strategy sessions',
      'SLA with 99.9% uptime',
      'Custom reporting dashboard',
    ],
    cta: 'Talk to Us',
    ctaStyle: 'border border-slate-200 text-slate-700 hover:bg-slate-50',
    badge: null,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-400/5 blur-[120px] rounded-full" />
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
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Simple, Honest{' '}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            No retainer lock-ins. No hidden fees. You pay once, you own the agents. All plans include a free discovery call first.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'border-orange-300 bg-gradient-to-b from-orange-50 to-white shadow-2xl shadow-orange-200/40 scale-[1.02]'
                  : 'border-slate-100 bg-white shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white text-xs font-bold shadow-lg shadow-orange-500/25">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name + price */}
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{plan.name}</p>
                <div className="flex items-end gap-2 mb-1">
                  <span className={`text-4xl font-black ${plan.popular ? 'text-orange-500' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
                </div>
                <p className="text-slate-500 text-sm">{plan.tagline}</p>
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.popular ? 'bg-orange-200' : 'bg-slate-100'}`} />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-orange-500' : 'text-emerald-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#cta"
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] ${plan.ctaStyle}`}
              >
                {plan.popular ? <Calendar className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            Free discovery call before any commitment
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            You own all agents — no lock-in
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-500" />
            Not sure which plan? Let's talk first
          </div>
        </motion.div>
      </div>
    </section>
  )
}
