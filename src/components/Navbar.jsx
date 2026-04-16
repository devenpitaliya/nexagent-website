import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Menu, X, Calendar, ChevronRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Tech Stack', href: '#tech-stack' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#07080f]/85 backdrop-blur-2xl border-b border-white/[0.07]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300">
                <Bot className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Nex<span className="text-gradient">Agent</span>
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#cta"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-500/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Free Call
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#07080f]/95 backdrop-blur-2xl border-b border-white/[0.07] lg:hidden"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.04] text-sm font-medium transition-all duration-200 group"
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <div className="pt-2 pb-1">
                <a
                  href="#cta"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold rounded-xl"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Free Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
