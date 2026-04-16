import { Suspense, lazy } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import CursorGlow from './components/effects/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy-load all below-the-fold sections to improve initial page load
const HowItWorks    = lazy(() => import('./components/HowItWorks'))
const WhatWeAutomate = lazy(() => import('./components/WhatWeAutomate'))
const CaseStudies   = lazy(() => import('./components/CaseStudies'))
const TechStack     = lazy(() => import('./components/TechStack'))
const CTASection    = lazy(() => import('./components/CTASection'))
const Footer        = lazy(() => import('./components/Footer'))

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#07080f]">
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={null}>
            <HowItWorks />
            <WhatWeAutomate />
            <CaseStudies />
            <TechStack />
            <CTASection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}
