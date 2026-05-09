import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/store/CartDrawer'
import LandingPage from './pages/LandingPage'
import StorePage from './pages/StorePage'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'
import DashboardPage from './pages/DashboardPage'
import PlatformPage from './pages/PlatformPage'
import AgentsShowcasePage from './pages/AgentsShowcasePage'
import PricingPage from './pages/PricingPage'
import ClawPage from './pages/ClawPage'
import EnterprisePage from './pages/EnterprisePage'

export default function App() {
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard')

  if (isDashboard) {
    return (
      <Routes>
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    )
  }

  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/platform/agents" element={<AgentsShowcasePage />} />
          <Route path="/platform/pricing" element={<PricingPage />} />
          <Route path="/platform/claw" element={<ClawPage />} />
          <Route path="/platform/enterprise" element={<EnterprisePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/store/:productId" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
