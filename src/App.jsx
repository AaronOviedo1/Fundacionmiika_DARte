import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/AboutAndMiika'
import Miika from './components/Miika'
import Statistics from './components/Statistics'
import WhyVisitAndDonate from './components/WhyVisitAndDonate'
import Testimonials from './components/Testimonials'
import HowToHelp from './components/HowToHelp'
import FAQ from './components/FAQ'
import ContactAndMap from './components/ContactAndMap'
import Footer from './components/Footer'
import Innovation from './components/Innovation'
import WhatsAppButton from './components/WhatsAppButton'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<><Hero /><About /></>} />
          <Route path="/miika" element={<Miika />} />
          <Route path="/estadisticas" element={<><Statistics /><HowToHelp /></>} />
          <Route path="/por-que" element={<WhyVisitAndDonate />} />
          <Route path="/testimonios" element={<Testimonials />} />

          <Route path="/innovacion" element={<Innovation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacto" element={<ContactAndMap />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
