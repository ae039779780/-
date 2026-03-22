import { Link, useLocation } from 'react-router-dom'
import { avatarImage } from '../../lib/constants'
import { useCart, useCartDispatch, useCartTotals } from '../../lib/CartContext'

export default function Navbar() {
  const location = useLocation()
  const dispatch = useCartDispatch()
  const { totalItems } = useCartTotals()
  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-[#090e18]/80 backdrop-blur-xl border-b border-[#717582]/20">
      <Link
        to="/"
        className="text-xl font-black tracking-tighter text-white uppercase font-headline"
      >
        DAY//AFTR
      </Link>
      <div className="hidden md:flex items-center space-x-8">
        <Link
          className={`text-sm font-label uppercase tracking-[0.15em] transition-colors ${
            isActive('/')
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-white/70 hover:text-white'
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`text-sm font-label uppercase tracking-[0.15em] transition-colors ${
            isActive('/store') || location.pathname.startsWith('/store/')
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-white/70 hover:text-white'
          }`}
          to="/store"
        >
          Store
        </Link>
        <a
          className="text-white/70 hover:text-white transition-colors text-sm font-label uppercase tracking-[0.15em]"
          href="/#products"
        >
          Ecosystem
        </a>
        <a
          className="text-white/70 hover:text-white transition-colors text-sm font-label uppercase tracking-[0.15em]"
          href="/#waitlist"
        >
          Waitlist
        </a>
        <Link
          className={`text-sm font-label uppercase tracking-[0.15em] transition-colors ${
            location.pathname.startsWith('/dashboard')
              ? 'text-primary border-b-2 border-primary pb-1'
              : 'text-white/70 hover:text-white'
          }`}
          to="/dashboard"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => dispatch({ type: 'TOGGLE_DRAWER' })}
          className="relative material-symbols-outlined text-white/70 hover:text-primary transition-all p-2"
        >
          shopping_bag
          {totalItems > 0 && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-on-primary text-[9px] font-bold flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
        <button className="material-symbols-outlined text-white/70 hover:text-primary transition-all p-2">
          notifications
        </button>
        <div className="w-8 h-8 bg-surface-container-highest border border-outline/20 overflow-hidden">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src={avatarImage}
          />
        </div>
      </div>
    </nav>
  )
}
