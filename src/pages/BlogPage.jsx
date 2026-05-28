import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ParticleField from '../components/effects/ParticleField'
import { BLOG_POSTS } from '../data/blogPosts'

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Blog — AI Automation Insights | NexAgent'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'Practical guides on AI automation, workflow automation, and AI agents for business. Learn how to automate operations, reduce costs, and scale without hiring.')
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://nexagent.ai/blog')
    return () => {
      document.title = 'AI Automation Consulting Agency | NexAgent — Custom AI Agents in 14 Days'
      if (desc) desc.setAttribute('content', "NexAgent builds custom AI agents that automate 70%+ of business workflows — customer support, sales outreach, data pipelines, and internal ops. Fixed price, live in 14 days, you own the code. Book a free discovery call.")
      if (canonical) canonical.setAttribute('href', 'https://nexagent.ai')
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#fffcf9]">
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 pt-32 pb-20">
        <ParticleField />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-orange-500/30 bg-orange-500/10 text-orange-400 mb-5">
              NexAgent Blog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
              AI Automation Insights
            </h1>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Practical guides on automating business workflows with AI agents — written by practitioners, not theorists.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Posts */}
      <div className="container-wide py-16 lg:py-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block bg-white rounded-3xl border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-amber-400" />
                <div className="p-8 lg:p-10">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl lg:text-2xl font-black text-slate-900 leading-snug mb-4 group-hover:text-orange-600 transition-colors duration-200">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-500 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.keywords.slice(0, 4).map(kw => (
                      <span key={kw} className="text-[11px] text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full font-medium">
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* Author + CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                        <span className="text-white text-xs font-black">DP</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-700 leading-tight">{post.author.name}</p>
                        <p className="text-xs text-slate-400">{post.author.title}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-orange-500 group-hover:gap-2.5 transition-all duration-200">
                      Read article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
