import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import HowItWorks from "./components/HowItWorks"
import CTA from "./components/CTA"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="pt-20">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
