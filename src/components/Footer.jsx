import { motion } from 'framer-motion'
import { Bot, Linkedin, Mail, Twitter, ArrowUpRight } from 'lucide-react'

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
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Book a Call', href: '#cta' },
  ],
}

const SOCIAL_LINKS = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@nexagent.ai' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#04050a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="relative z-10 container-wide py-16 lg:py-20">
        {/* Top: Brand + Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Nex<span className="text-gradient">Agent</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-[220px]">
              Automating the operations of modern businesses with custom AI agents.
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
                    className="w-9 h-9 glass-card rounded-lg border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="w-3.5 h-3.5" />
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
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                    </a>
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
                href="mailto:hello@nexagent.ai"
                className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
              >
                <Mail className="w-3.5 h-3.5" />
                hello@nexagent.ai
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm transition-colors group"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Mini CTA */}
            <div className="mt-6 p-4 glass-card rounded-xl border border-indigo-500/20 bg-indigo-500/5">
              <p className="text-slate-400 text-xs mb-2.5 leading-relaxed">
                Ready to automate your biggest workflow?
              </p>
              <a
                href="#cta"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
              >
                Book a free call
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} NexAgent. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
