import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { avatarImage } from '../../lib/constants'
import { useCart, useCartDispatch, useCartTotals } from '../../lib/CartContext'

const platformLinks = [
  { to: '/platform', label: 'Overview', icon: 'dashboard', desc: 'AI workspace platform' },
  { to: '/platform/agents', label: 'Agents', icon: 'smart_toy', desc: 'Meet your AI team' },
  { to: '/platform/claw', label: 'Claw', icon: 'auto_mode', desc: 'Always-on AI employee' },
  { to: '/platform/enterprise', label: 'Enterprise', icon: 'business', desc: 'For teams & orgs' },
  { to: '/platform/pricing', label: 'Pricing', icon: 'toll', desc: 'Plans & credits' },
]

export default function Navbar() {
  const location = useLocation()
  const dispatch = useCartDispatch()
  const { totalItems } = useCartTotals()
  const [platformOpen, setPlatformOpen] = useState(false)
  const isActive = (path) => location.pathname === path
  const isPlatform = location.pathname.startsWith('/platform')

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

        {/* Platform Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setPlatformOpen(true)}
          onMouseLeave={() => setPlatformOpen(false)}
        >
          <Link
            className={`text-sm font-label uppercase tracking-[0.15em] transition-colors flex items-center gap-1 ${
              isPlatform
                ? 'text-primary border-b-2 border-primary pb-1'
                : 'text-white/70 hover:text-white'
            }`}
            to="/platform"
          >
            Platform
            <span className="material-symbols-outlined text-xs" style={{
              transform: platformOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}>
              expand_more
            </span>
          </Link>

          {platformOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
              <div className="bg-surface-container-lowest/95 backdrop-blur-xl border border-outline/10 p-2 w-64 shadow-2xl">
                {platformLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center gap-3 px-3 py-2.5 hover:bg-primary/5 transition-colors group ${
                      isActive(link.to) ? 'bg-primary/5' : ''
                    }`}
                    onClick={() => setPlatformOpen(false)}
                  >
                    <span className="material-symbols-outlined text-primary/60 group-hover:text-primary text-lg transition-colors">
                      {link.icon}
                    </span>
                    <div>
                      <span className="block text-xs font-label tracking-wider uppercase text-white/70 group-hover:text-white transition-colors">
                        {link.label}
                      </span>
                      <span className="block text-[10px] text-white/30">{link.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

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
