import React from 'react'
import Footer from './components/Footer.jsx'
import CTASection from './components/CTASection.jsx'
import Header from './components/Header.jsx'
import FeatureSection from './components/FeatureSection.jsx'
import Testimonials from './components/Testimonials.jsx'

const App = () => {
  return (
    <main className='min-h-screen'>
      <Header />
      <FeatureSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App