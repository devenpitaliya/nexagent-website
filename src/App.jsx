import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ErrorBoundary from './components/ErrorBoundary'
import CursorGlow from './components/effects/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FloatingCTA from './components/FloatingCTA'
import ExperiencePopup from './components/ExperiencePopup'

const WhatWeAutomate    = lazy(() => import('./components/WhatWeAutomate'))
const OnboardingTimeline = lazy(() => import('./components/OnboardingTimeline'))
const ROICalculator     = lazy(() => import('./components/ROICalculator'))
const CaseStudiesTeaser = lazy(() => import('./components/CaseStudiesTeaser'))
const Testimonials      = lazy(() => import('./components/Testimonials'))
const FounderSection    = lazy(() => import('./components/FounderSection'))
const PricingSection    = lazy(() => import('./components/PricingSection'))
const TechStack         = lazy(() => import('./components/TechStack'))
const FAQSection        = lazy(() => import('./components/FAQSection'))
const CTASection        = lazy(() => import('./components/CTASection'))
const Footer            = lazy(() => import('./components/Footer'))
const CaseStudiesPage   = lazy(() => import('./pages/CaseStudiesPage'))
const BlogPage          = lazy(() => import('./pages/BlogPage'))
const BlogPostPage      = lazy(() => import('./pages/BlogPostPage'))
const ExperienceRoom    = lazy(() => import('./pages/ExperienceRoom'))

function HomePage() {
  return (
    <div className="min-h-screen bg-[#fffcf9]">
      <CursorGlow />
      <Navbar />
      <FloatingCTA />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <WhatWeAutomate />
          <OnboardingTimeline />
          <CaseStudiesTeaser />
          <Testimonials />
          <FounderSection />
          <TechStack />
          <FAQSection />
          <ROICalculator />
          <PricingSection />
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/case-studies"
            element={
              <Suspense fallback={null}>
                <CaseStudiesPage />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={null}>
                <BlogPage />
              </Suspense>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={null}>
                <BlogPostPage />
              </Suspense>
            }
          />
          <Route
            path="/experience-room"
            element={
              <Suspense fallback={null}>
                <ExperienceRoom />
              </Suspense>
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <AnimatedRoutes />
      <ExperiencePopup />
    </ErrorBoundary>
  )
}
