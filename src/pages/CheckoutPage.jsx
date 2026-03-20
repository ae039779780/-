import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart, useCartDispatch, useCartTotals } from '../lib/CartContext'

export default function CheckoutPage() {
  const { items } = useCart()
  const dispatch = useCartDispatch()
  const { totalItems, totalILS, totalUSD } = useCartTotals()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    country: 'Israel',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    dispatch({ type: 'CLEAR' })
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center space-y-6">
          <span className="material-symbols-outlined text-white/20 text-6xl block">
            shopping_bag
          </span>
          <h1 className="font-headline text-3xl font-bold">Cart is Empty</h1>
          <Link
            to="/store"
            className="inline-block bg-primary text-on-primary px-8 py-4 font-headline font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all"
          >
            Browse Store
          </Link>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto animate-fade-in-up">
          <div className="w-16 h-16 border-2 border-primary mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl">check</span>
          </div>
          <h1 className="font-headline text-4xl font-bold">ORDER CONFIRMED</h1>
          <p className="text-white/60 leading-relaxed">
            Your order has been received. We'll send you a confirmation email with tracking
            details. Welcome to the DAY//AFTR recovery system.
          </p>
          <p className="font-label text-xs tracking-[0.2em] text-primary uppercase">
            Estimated delivery: 5-7 business days
          </p>
          <Link
            to="/"
            className="inline-block border border-outline/30 text-white px-8 py-4 font-label font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-8">
        <Link
          to="/store"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white font-label text-xs tracking-widest uppercase mb-12 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Store
        </Link>

        <h1 className="font-headline text-5xl font-bold tracking-tight mb-16">CHECKOUT</h1>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-label text-xs tracking-widest uppercase text-white/40 mb-6">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="FIRST NAME"
                  required
                  className="bg-surface-container border border-outline/20 px-4 py-4 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="LAST NAME"
                  required
                  className="bg-surface-container border border-outline/20 px-4 py-4 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="EMAIL ADDRESS"
                  required
                  className="bg-surface-container border border-outline/20 px-4 py-4 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
                />
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="PHONE"
                  className="bg-surface-container border border-outline/20 px-4 py-4 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <h2 className="font-label text-xs tracking-widest uppercase text-white/40 mb-6">
                Shipping Address
              </h2>
              <div className="space-y-4">
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="STREET ADDRESS"
                  required
                  className="w-full bg-surface-container border border-outline/20 px-4 py-4 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
                />
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="CITY"
                    required
                    className="bg-surface-container border border-outline/20 px-4 py-4 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                  <input
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    placeholder="ZIP CODE"
                    required
                    className="bg-surface-container border border-outline/20 px-4 py-4 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="COUNTRY"
                    required
                    className="bg-surface-container border border-outline/20 px-4 py-4 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-white/20 text-xs font-label mb-6">
                Payment processing will be available at launch. This is a pre-order reservation.
              </p>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-5 font-headline font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all cursor-pointer"
              >
                Place Pre-Order — {totalILS.toLocaleString()} ILS
              </button>
            </div>
          </form>

          {/* Order Summary */}
          <div className="bg-surface-container-low border border-outline/10 p-8 h-fit space-y-6">
            <h2 className="font-headline text-lg font-bold">
              ORDER SUMMARY ({totalItems})
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.optionId} className="flex justify-between items-start">
                  <div>
                    <p className="font-headline text-sm font-bold">{item.name}</p>
                    <p className="text-white/40 text-xs font-label">
                      {item.label} x{item.qty}
                    </p>
                  </div>
                  <span className="font-headline text-sm">
                    {(item.priceILS * item.qty).toLocaleString()} ILS
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-outline/10 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-white/40 text-xs font-label uppercase tracking-widest">
                  Shipping
                </span>
                <span className="text-xs font-label text-primary">FREE</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-label text-xs tracking-widest text-white/60 uppercase">
                  Total
                </span>
                <div className="text-right">
                  <span className="font-headline text-2xl font-bold block">
                    {totalILS.toLocaleString()} ILS
                  </span>
                  <span className="text-white/30 text-xs">(${totalUSD} USD)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
