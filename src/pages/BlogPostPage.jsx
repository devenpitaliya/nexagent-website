import { Suspense, lazy, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BLOG_POSTS } from '../data/blogPosts'

const POST_CONTENT = {
  'automate-business-operations-ai-agents-2025':  lazy(() => import('./blog/Post1')),
  'ai-customer-support-automation-guide-2025':     lazy(() => import('./blog/Post2')),
  'ai-lead-generation-automation-2025':            lazy(() => import('./blog/Post3')),
  'ai-agents-vs-traditional-automation-2025':      lazy(() => import('./blog/Post4')),
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)
  const Content = POST_CONTENT[slug]

  useEffect(() => {
    if (!post) return
    window.scrollTo(0, 0)
    document.title = post.metaTitle
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', post.metaDescription)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `https://nexagent.ai/blog/${post.slug}`)

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'article-schema'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.metaDescription,
      keywords: post.keywords.join(', '),
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: { '@type': 'Person', name: post.author.name, jobTitle: post.author.title, url: 'https://nexagent.ai' },
      publisher: { '@type': 'Organization', name: 'NexAgent', logo: { '@type': 'ImageObject', url: 'https://nexagent.ai/favicon.svg' } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://nexagent.ai/blog/${post.slug}` },
      about: post.keywords.map(k => ({ '@type': 'Thing', name: k })),
    })
    document.head.appendChild(script)

    return () => {
      document.title = 'AI Automation Consulting Agency | NexAgent — Custom AI Agents in 14 Days'
      if (desc) desc.setAttribute('content', "NexAgent builds custom AI agents that automate 70%+ of business workflows — customer support, sales outreach, data pipelines, and internal ops. Fixed price, live in 14 days, you own the code. Book a free discovery call.")
      if (canonical) canonical.setAttribute('href', 'https://nexagent.ai')
      document.getElementById('article-schema')?.remove()
    }
  }, [post])

  if (!post || !Content) return <Navigate to="/blog" replace />

  return (
    <div className="min-h-screen bg-[#fffcf9]">
      <Navbar />

      {/* Hero */}
      <div className="bg-slate-950 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/8 blur-[120px] rounded-full" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/15 border border-orange-500/30 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-slate-400 text-xs flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="text-slate-400 text-xs flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-4xl mb-8">
              {post.title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                <span className="text-white text-sm font-black">DP</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{post.author.name}</p>
                <p className="text-slate-400 text-xs">{post.author.title}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <div className="container-wide py-12 lg:py-16">
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Suspense fallback={
              <div className="flex flex-col gap-4 py-12">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-4 bg-slate-100 rounded-full animate-pulse" style={{ width: `${75 + Math.random() * 25}%` }} />
                ))}
              </div>
            }>
              <Content />
            </Suspense>
          </motion.article>
        </div>
      </div>

      {/* Related posts */}
      <div className="border-t border-slate-100 bg-slate-50/50 py-14">
        <div className="container-wide">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">More from NexAgent</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3).map(related => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="group block bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 p-5"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">
                  {related.category}
                </span>
                <h3 className="font-bold text-slate-800 text-sm leading-snug mt-3 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {related.title}
                </h3>
                <p className="text-slate-400 text-xs flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> {related.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
