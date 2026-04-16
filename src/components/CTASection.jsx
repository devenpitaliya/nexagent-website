import { motion } from 'framer-motion'
import { Calendar, Play, ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-cyan-600/20" />
          <div className="absolute inset-0 border border-white/10 rounded-3xl" />

          {/* Decorative orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-purple-500/10 rounded-full blur-[60px]" />

{/* Content */}
          <div className="relative z-10 px-8 py-16 lg:py-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/15 text-indigo-300 text-sm font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Free 30-Minute Discovery Call
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-[1.06]"
            >
              Ready to Automate Your{' '}
              <span className="text-gradient">Operations?</span>
            </motion.h2>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.7 }}
              className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Book a free 30-minute call. We'll analyze your biggest workflow
              bottleneck and show you exactly how AI agents can solve it — no
              fluff, no commitment.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold rounded-full hover:opacity-90 hover:scale-[1.03] active:scale-100 transition-all duration-200 shadow-xl shadow-indigo-500/25 text-base"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-4 border border-white/15 text-slate-300 font-semibold rounded-full hover:border-white/30 hover:text-white hover:bg-white/[0.04] transition-all duration-200 text-base"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                Watch a Demo
              </a>
            </motion.div>

            {/* Trust micro-copy */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-7 text-slate-600 text-xs font-medium"
            >
              No credit card required &nbsp;·&nbsp; No long-term commitment &nbsp;·&nbsp; Results in under 2 weeks
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
