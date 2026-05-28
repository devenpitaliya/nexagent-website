import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Sparkles, ArrowRight } from 'lucide-react'

export default function ExperiencePopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(t)
  }, [])

  const close = () => setVisible(false)

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none px-4"
          >
            <div className="relative pointer-events-auto w-full max-w-md rounded-2xl bg-slate-900 border border-purple-500/25 shadow-2xl shadow-purple-500/10 overflow-hidden">

              {/* Top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

              {/* Background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-purple-500/8 blur-[60px] rounded-full pointer-events-none" />

              {/* Close button */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="relative z-10 p-8">
                {/* Badge */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    Live AI Demos
                  </span>
                </div>

                {/* Icon + heading */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-400 flex items-center justify-center shadow-lg shadow-purple-500/25 flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl leading-tight mb-1">
                      Experience Real AI Agents
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Don't just read about it — talk to a live hospital booking bot, watch a cold email get written in real time, or screen resumes with AI. 9 agents ready to demo.
                    </p>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex items-center gap-3 mt-6">
                  <Link
                    to="/experience-room"
                    onClick={close}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-violet-400 text-white font-semibold text-sm rounded-xl shadow-lg shadow-purple-500/20 hover:opacity-90 transition-opacity"
                  >
                    <Sparkles className="w-4 h-4" />
                    Enter Experience Room
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={close}
                    className="px-4 py-3 text-slate-400 hover:text-white text-sm font-medium transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
