import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import BrandPositioning from './components/sections/BrandPositioning'
import ProductEcosystem from './components/sections/ProductEcosystem'
import PackagingPhilosophy from './components/sections/PackagingPhilosophy'
import Waitlist from './components/sections/Waitlist'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandPositioning />
        <ProductEcosystem />
        <PackagingPhilosophy />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
