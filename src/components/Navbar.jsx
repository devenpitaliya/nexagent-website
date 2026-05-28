import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Bot, Menu, X, Calendar, ChevronRight } from 'lucide-react'

function smoothScrollTo(selector, duration = 900) {
  const el = document.querySelector(selector)
  if (!el) return
  const navHeight = 80
  const target = el.getBoundingClientRect().top + window.scrollY - navHeight
  const start = window.scrollY
  const distance = target - start
  let startTime = null

  const ease = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  function step(ts) {
    if (!startTime) startTime = ts
    const progress = Math.min((ts - startTime) / duration, 1)
    window.scrollTo(0, start + distance * ease(progress))
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const NAV_LINKS = [
  { label: 'How It Works', href: '#after-booking' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'ROI Calculator', href: '#roi-calculator' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Experience Room', href: '/experience-room' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isDarkPage = location.pathname.startsWith('/blog') || location.pathname.startsWith('/case-studies') || location.pathname.startsWith('/experience-room')
  const useDarkText = scrolled || !isDarkPage

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      e.preventDefault()
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => smoothScrollTo(href), 400)
      } else {
        smoothScrollTo(href)
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl border-b border-orange-100 shadow-sm shadow-orange-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-300">
                <Bot className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className={`font-bold text-xl tracking-tight ${useDarkText ? 'text-slate-900' : 'text-white'}`}>
                Nex<span className="text-gradient">Agent</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                link.href === '/experience-room' ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-semibold text-purple-400 border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 hover:border-purple-400/60 hover:text-purple-300 transition-all duration-200 shadow-[0_0_12px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    {link.label}
                  </Link>
                ) : link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-sm font-medium transition-colors duration-200 py-1 group cursor-pointer ${useDarkText ? 'text-slate-500 hover:text-slate-900' : 'text-white/80 hover:text-white'}`}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-orange-500 to-amber-400 group-hover:w-full transition-all duration-300" />
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200 py-1 group ${useDarkText ? 'text-slate-500 hover:text-slate-900' : 'text-white/80 hover:text-white'}`}
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-orange-500 to-amber-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                )
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#cta"
                onClick={(e) => handleNavClick(e, '#cta')}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-orange-500/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Free Call
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border transition-all ${useDarkText ? 'border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:border-slate-300' : 'border-white/20 bg-white/10 text-white hover:bg-white/20'}`}
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
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-orange-100 lg:hidden"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-orange-50 text-sm font-medium transition-all duration-200 group"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-orange-50 text-sm font-medium transition-all duration-200 group"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                )
              ))}
              <div className="pt-2 pb-1">
                <a
                  href="#cta"
                  onClick={(e) => handleNavClick(e, '#cta')}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white text-sm font-semibold rounded-xl"
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
