import { useDashboard, useDashboardDispatch } from '../../lib/DashboardContext'
import { Link } from 'react-router-dom'

const navItems = [
  { id: 'overview', label: 'Overview', icon: 'dashboard' },
  { id: 'agents', label: 'Agents', icon: 'smart_toy' },
  { id: 'hubs', label: 'Hubs', icon: 'workspaces' },
  { id: 'drive', label: 'AI Drive', icon: 'cloud_upload' },
  { id: 'analytics', label: 'Analytics', icon: 'bar_chart' },
  { id: 'autopilot', label: 'Autopilot', icon: 'auto_mode' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
]

export default function Sidebar() {
  const { currentView, credits, team } = useDashboard()
  const dispatch = useDashboardDispatch()

  const creditPercent = Math.round((credits.used / credits.total) * 100)

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-lowest border-r border-outline/10 flex flex-col z-40">
      {/* Brand */}
      <div className="p-6 border-b border-outline/10">
        <Link to="/" className="font-headline font-black text-lg tracking-tighter text-white">
          DAY//AFTR
        </Link>
        <p className="font-label text-[10px] tracking-[0.2em] text-primary uppercase mt-1">
          {team.plan} Workspace
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="px-4 mb-2">
          <span className="font-label text-[9px] tracking-[0.25em] text-white/30 uppercase">
            Workspace
          </span>
        </div>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => dispatch({ type: 'SET_VIEW', view: item.id })}
            className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all cursor-pointer ${
              currentView === item.id
                ? 'bg-primary/10 text-primary border-l-2 border-primary'
                : 'text-white/50 hover:text-white hover:bg-white/3 border-l-2 border-transparent'
            }`}
          >
            <span className="material-symbols-outlined text-lg">{item.icon}</span>
            <span className="font-label text-xs tracking-widest uppercase">{item.label}</span>
          </button>
        ))}

        <div className="px-4 mt-6 mb-2">
          <span className="font-label text-[9px] tracking-[0.25em] text-white/30 uppercase">
            Quick Agents
          </span>
        </div>
        {[
          { icon: 'hub', label: 'Super Agent', color: 'text-primary' },
          { icon: 'campaign', label: 'Marketing', color: 'text-primary/70' },
          { icon: 'palette', label: 'Brand', color: 'text-primary/70' },
          { icon: 'inventory_2', label: 'Product', color: 'text-[#00d4ec]' },
        ].map((agent) => (
          <button
            key={agent.label}
            className="w-full flex items-center gap-3 px-6 py-2.5 text-left text-white/40 hover:text-white/70 transition-all cursor-pointer"
          >
            <span className={`material-symbols-outlined text-base ${agent.color}`}>
              {agent.icon}
            </span>
            <span className="font-label text-[11px] tracking-wide">{agent.label}</span>
          </button>
        ))}
      </nav>

      {/* Credits */}
      <div className="p-6 border-t border-outline/10 space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-label text-[10px] tracking-widest text-white/40 uppercase">
            Credits
          </span>
          <span className="font-headline text-xs font-bold">
            {credits.used.toLocaleString()} / {credits.total.toLocaleString()}
          </span>
        </div>
        <div className="w-full h-1 bg-surface-container-highest">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${creditPercent}%` }}
          />
        </div>
        <p className="font-label text-[9px] text-white/30">
          Resets {credits.resetDate}
        </p>
      </div>
    </aside>
  )
}
