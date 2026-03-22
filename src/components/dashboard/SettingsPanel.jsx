import { useDashboard } from '../../lib/DashboardContext'

export default function SettingsPanel() {
  const { team, credits, agents } = useDashboard()

  const teamMembers = [
    { name: 'Asaf', role: 'Owner', email: 'asaf@dayaftr.com', avatar: 'A' },
    { name: 'Brand Manager', role: 'Editor', email: 'brand@dayaftr.com', avatar: 'B' },
    { name: 'Marketing Lead', role: 'Editor', email: 'marketing@dayaftr.com', avatar: 'M' },
  ]

  const integrations = [
    { name: 'Gmail', icon: 'mail', connected: true },
    { name: 'Google Drive', icon: 'folder', connected: true },
    { name: 'Google Calendar', icon: 'calendar_month', connected: true },
    { name: 'Slack', icon: 'chat', connected: false },
    { name: 'Shopify', icon: 'storefront', connected: false },
    { name: 'Instagram API', icon: 'photo_camera', connected: false },
    { name: 'Supabase', icon: 'database', connected: true },
    { name: 'GitHub', icon: 'code', connected: true },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-bold tracking-tight">Settings</h1>
        <p className="text-on-surface-variant text-sm mt-1">
          Workspace configuration, team management, and integrations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-1">
        {/* Workspace */}
        <div className="bg-surface-container-low border border-outline/10 p-8 space-y-6">
          <h2 className="font-headline text-lg font-bold">Workspace</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-outline/5">
              <span className="font-label text-xs tracking-widest text-white/40 uppercase">Name</span>
              <span className="font-headline font-bold text-sm">{team.name}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-outline/5">
              <span className="font-label text-xs tracking-widest text-white/40 uppercase">Plan</span>
              <span className="font-headline font-bold text-sm text-primary">{team.plan}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-outline/5">
              <span className="font-label text-xs tracking-widest text-white/40 uppercase">Members</span>
              <span className="font-headline font-bold text-sm">{team.members}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-outline/5">
              <span className="font-label text-xs tracking-widest text-white/40 uppercase">Agents</span>
              <span className="font-headline font-bold text-sm">{agents.length}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-label text-xs tracking-widest text-white/40 uppercase">Credits</span>
              <span className="font-headline font-bold text-sm">
                {credits.used.toLocaleString()} / {credits.total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-surface-container-low border border-outline/10 p-8 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="font-headline text-lg font-bold">Team Members</h2>
            <button className="font-label text-[10px] text-primary tracking-widest uppercase cursor-pointer">
              + Invite
            </button>
          </div>
          <div className="space-y-3">
            {teamMembers.map((m) => (
              <div key={m.email} className="flex items-center justify-between p-4 bg-surface-container">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 flex items-center justify-center font-headline font-bold text-primary text-sm">
                    {m.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{m.name}</p>
                    <p className="font-label text-[10px] text-white/30">{m.email}</p>
                  </div>
                </div>
                <span className={`font-label text-[9px] tracking-widest uppercase px-2 py-1 border ${
                  m.role === 'Owner' ? 'text-primary border-primary/20' : 'text-white/40 border-outline/20'
                }`}>
                  {m.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="bg-surface-container-low border border-outline/10 p-8 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="font-headline text-lg font-bold">Integrations</h2>
          <span className="font-label text-[10px] text-white/30 tracking-widest uppercase">
            {integrations.filter((i) => i.connected).length} / {integrations.length} connected
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {integrations.map((int) => (
            <div
              key={int.name}
              className={`p-4 border transition-all cursor-pointer ${
                int.connected
                  ? 'border-primary/15 bg-primary/5'
                  : 'border-outline/10 hover:border-primary/10'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`material-symbols-outlined ${
                  int.connected ? 'text-primary' : 'text-white/30'
                }`}>
                  {int.icon}
                </span>
                <div className={`w-2 h-2 rounded-full ${
                  int.connected ? 'bg-primary' : 'bg-outline/30'
                }`} />
              </div>
              <p className="font-headline text-sm font-bold">{int.name}</p>
              <p className="font-label text-[10px] tracking-widest text-white/30 uppercase mt-1">
                {int.connected ? 'Connected' : 'Not connected'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-surface-container-low border border-error/10 p-8 space-y-4">
        <h2 className="font-headline text-lg font-bold text-error/80">Danger Zone</h2>
        <div className="flex justify-between items-center py-3">
          <div>
            <p className="text-sm">Reset all agent configurations</p>
            <p className="font-label text-[10px] text-white/30">This will reset all custom agents and their data</p>
          </div>
          <button className="border border-error/20 text-error/60 px-4 py-2 font-label text-[10px] tracking-widest uppercase hover:bg-error/5 transition-colors cursor-pointer">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
