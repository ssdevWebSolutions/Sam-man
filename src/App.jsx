import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import TrustedLogos from './components/TrustedLogos/TrustedLogos'
import About from './components/About/About'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Statistics from './components/Statistics/Statistics.jsx'
import WhatWeDo from './components/WhatWeDo/WhatWeDo'
import GoogleAdsSection from './components/GoogleAdsSection/GoogleAdsSection'
import SeoServices from './components/SeoServices/SeoServices'
import SocialMedia from './components/SocialMedia/SocialMedia'
import ProvenStrategy from './components/MarketingStrategy/ProvenStrategy'
import MarketingStrategies from './components/MarketingStrategy/MarketingStrategies'
import DesignSystemPreview from './components/DesignSystemPreview'
import { sections } from './data/sections'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Newsletter from './components/Newsletter/Newsletter.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustedLogos />
      <About />
      <WhyChooseUs />
      <Statistics />
      <WhatWeDo />
      <GoogleAdsSection />
      <SeoServices />
      <SocialMedia />
      <ProvenStrategy />
      <MarketingStrategies />
      <Testimonials />
      <Newsletter/>
      <Footer />
    </div>
  )
}

export default App
