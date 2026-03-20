import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import BrandPositioning from './components/sections/BrandPositioning'
import ProductEcosystem from './components/sections/ProductEcosystem'
import AppEcosystem from './components/sections/AppEcosystem'
import Waitlist from './components/sections/Waitlist'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandPositioning />
        <ProductEcosystem />
        <AppEcosystem />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
