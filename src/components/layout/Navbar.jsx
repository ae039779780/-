import { avatarImage } from '../../lib/constants'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-[#090e18]/80 backdrop-blur-xl border-b border-[#717582]/20">
      <div className="text-xl font-black tracking-tighter text-white uppercase font-headline">
        DAY//AFTR
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a
          className="text-primary border-b-2 border-primary pb-1 text-sm font-label uppercase tracking-[0.15em]"
          href="#"
        >
          Dashboard
        </a>
        <a
          className="text-white/70 hover:text-white transition-colors text-sm font-label uppercase tracking-[0.15em]"
          href="#"
        >
          Wellness
        </a>
        <a
          className="text-white/70 hover:text-white transition-colors text-sm font-label uppercase tracking-[0.15em]"
          href="#"
        >
          Schedule
        </a>
        <a
          className="text-white/70 hover:text-white transition-colors text-sm font-label uppercase tracking-[0.15em]"
          href="#"
        >
          Analytics
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="material-symbols-outlined text-white/70 hover:text-primary transition-all p-2">
          notifications
        </button>
        <button className="material-symbols-outlined text-white/70 hover:text-primary transition-all p-2">
          settings
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
