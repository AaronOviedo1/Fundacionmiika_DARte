import Header from './components/Header'
import Hero from './components/Hero'
import AboutAndMiika from './components/AboutAndMiika'
import Statistics from './components/Statistics'
import WhyVisitAndDonate from './components/WhyVisitAndDonate'
import Testimonials from './components/Testimonials'
import HowToHelp from './components/HowToHelp'
import FAQ from './components/FAQ'
import ContactAndMap from './components/ContactAndMap'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutAndMiika />
        <Statistics />
        <WhyVisitAndDonate />
        <Testimonials />
        <HowToHelp />
        <FAQ />
        <ContactAndMap />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
