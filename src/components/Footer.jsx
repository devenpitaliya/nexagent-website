import { Link } from 'react-router-dom'
import { Bot, Linkedin, ArrowUpRight, Mail } from 'lucide-react'
import { siWhatsapp } from 'simple-icons'

const FOOTER_LINKS = {
  Solutions: [
    { label: 'Support Automation', href: '#solutions' },
    { label: 'Sales Outreach Agents', href: '#solutions' },
    { label: 'Data Pipeline Automation', href: '#solutions' },
    { label: 'Internal Ops', href: '#solutions' },
    { label: 'HR Automation', href: '#solutions' },
    { label: 'Finance Automation', href: '#solutions' },
  ],
  Company: [
    { label: 'How It Works', href: '#after-booking' },
    { label: 'Case Studies', href: '/case-studies', isRoute: true },
    { label: 'Blog', href: '/blog', isRoute: true },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Book a Call', href: '#cta' },
  ],
}

const SOCIAL_LINKS = [
  { type: 'lucide', icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/devendra-pitaliya' },
  { type: 'simple', icon: siWhatsapp, label: 'WhatsApp', href: 'https://wa.me/919503362310' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-orange-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 container-wide py-16 lg:py-20">
        {/* Top: Brand + Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Nex<span className="text-gradient">Agent</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-[240px]">
              NexAgent is an AI automation consulting agency. We build custom AI agents that automate business workflows — support, sales, data, and ops — in 14 days.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {social.type === 'simple' ? (
                      <svg role="img" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                        <path d={Icon.path} />
                      </svg>
                    ) : (
                      <Icon className="w-3.5 h-3.5" />
                    )}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-slate-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:devenpitaliya@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors group"
              >
                <Mail className="w-3.5 h-3.5" />
                devenpitaliya@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/devendra-pitaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors group"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://wa.me/919503362310"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors group"
              >
                <svg role="img" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                  <path d={siWhatsapp.path} />
                </svg>
                WhatsApp
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Mini CTA */}
            <div className="mt-6 p-4 bg-orange-500/10 rounded-xl border border-orange-500/20">
              <p className="text-slate-300 text-xs mb-2.5 leading-relaxed">
                Ready to automate your biggest workflow?
              </p>
              <a
                href="#cta"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors group"
              >
                Book a free call
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} NexAgent. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
