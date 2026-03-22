import { useDashboard } from '../../lib/DashboardContext'

function StatCard({ icon, label, value, change, color = 'text-primary' }) {
  return (
    <div className="bg-surface-container-low border border-outline/10 p-6 space-y-4 glow-shadow">
      <div className="flex justify-between items-start">
        <span className={`material-symbols-outlined text-2xl ${color}`}>{icon}</span>
        {change && (
          <span className={`font-label text-[10px] tracking-wider ${change > 0 ? 'text-primary' : 'text-error'}`}>
            {change > 0 ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <div>
        <p className="font-headline text-3xl font-bold">{value}</p>
        <p className="font-label text-[10px] tracking-[0.2em] text-white/40 uppercase mt-1">
          {label}
        </p>
      </div>
    </div>
  )
}

function ActivityItem({ agent, action, time, status }) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-outline/5 last:border-0">
      <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0">
        <span className="material-symbols-outlined text-primary text-sm">{
          status === 'completed' ? 'check_circle' : status === 'running' ? 'sync' : 'schedule'
        }</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white/80">{action}</p>
        <p className="font-label text-[10px] text-white/30 mt-0.5">
          {agent} &middot; {time}
        </p>
      </div>
      <span className={`font-label text-[9px] tracking-widest uppercase px-2 py-1 border ${
        status === 'completed' ? 'text-primary border-primary/20' :
        status === 'running' ? 'text-tertiary-dim border-tertiary-dim/20' :
        'text-white/40 border-outline/20'
      }`}>
        {status}
      </span>
    </div>
  )
}

export default function OverviewPanel() {
  const { agents, hubs, credits, driveFiles } = useDashboard()

  const activeAgents = agents.filter((a) => a.status === 'active').length
  const totalTasks = agents.reduce((s, a) => s + a.tasksCompleted, 0)
  const avgSuccess = agents.filter(a => a.tasksCompleted > 0).length > 0
    ? (agents.filter(a => a.tasksCompleted > 0).reduce((s, a) => s + a.successRate, 0) / agents.filter(a => a.tasksCompleted > 0).length).toFixed(1)
    : 0

  const recentActivity = [
    { agent: 'Marketing Agent', action: 'Generated 12 Instagram captions for RESET launch campaign', time: '15 min ago', status: 'completed' },
    { agent: 'Autopilot', action: 'Running competitor price analysis across 8 markets', time: '32 min ago', status: 'running' },
    { agent: 'Brand Agent', action: 'Reviewed packaging copy for PRALINES 12-piece box', time: '1 hour ago', status: 'completed' },
    { agent: 'Supplier Agent', action: 'Sent follow-up emails to 3 tea manufacturers', time: '2 hours ago', status: 'completed' },
    { agent: 'Super Agent', action: 'Compiled Q3 launch readiness report with risk assessment', time: '3 hours ago', status: 'completed' },
    { agent: 'Analytics Agent', action: 'Updated conversion funnel metrics from waitlist data', time: '4 hours ago', status: 'completed' },
    { agent: 'Design Agent', action: 'Generating RITUAL tea box 3D mockup renders', time: '5 hours ago', status: 'running' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-bold tracking-tight">
          Dashboard
        </h1>
        <p className="text-on-surface-variant text-sm mt-1">
          DAY//AFTR Workspace &middot; {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
        <StatCard icon="smart_toy" label="Active Agents" value={activeAgents} change={12} />
        <StatCard icon="task_alt" label="Tasks Completed" value={totalTasks.toLocaleString()} change={8} />
        <StatCard icon="verified" label="Avg Success Rate" value={`${avgSuccess}%`} change={2.1} />
        <StatCard icon="toll" label="Credits Used" value={credits.used.toLocaleString()} color="text-tertiary-dim" />
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-1">
        {/* Activity Feed */}
        <div className="lg:col-span-2 bg-surface-container-low border border-outline/10 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline text-lg font-bold">Recent Activity</h2>
            <span className="font-label text-[10px] tracking-widest text-white/40 uppercase">
              Live Feed
            </span>
          </div>
          <div>
            {recentActivity.map((item, i) => (
              <ActivityItem key={i} {...item} />
            ))}
          </div>
        </div>

        {/* Right Sidebar Panels */}
        <div className="space-y-1">
          {/* Active Hubs */}
          <div className="bg-surface-container-low border border-outline/10 p-6">
            <h3 className="font-headline text-sm font-bold mb-4">Active Hubs</h3>
            <div className="space-y-3">
              {hubs.slice(0, 3).map((hub) => (
                <div key={hub.id} className="flex items-center gap-3 p-3 bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-primary text-base">{hub.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">{hub.name}</p>
                    <p className="text-[10px] text-white/30">{hub.conversations} conversations</p>
                  </div>
                  <span className="text-[9px] text-white/20">{hub.lastActive}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Agent Status */}
          <div className="bg-surface-container-low border border-outline/10 p-6">
            <h3 className="font-headline text-sm font-bold mb-4">Agent Status</h3>
            <div className="space-y-2">
              {agents.slice(0, 5).map((agent) => (
                <div key={agent.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${agent.status === 'active' ? 'bg-primary' : 'bg-outline/40'}`} />
                    <span className="text-xs">{agent.name}</span>
                  </div>
                  <span className={`text-[9px] tracking-widest uppercase ${agent.status === 'active' ? 'text-primary' : 'text-white/30'}`}>
                    {agent.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Files */}
          <div className="bg-surface-container-low border border-outline/10 p-6">
            <h3 className="font-headline text-sm font-bold mb-4">Recent Files</h3>
            <div className="space-y-2">
              {driveFiles.slice(0, 4).map((file) => (
                <div key={file.id} className="flex items-center gap-3 py-2 cursor-pointer hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-sm text-white/30">
                    {file.type === 'doc' ? 'description' : file.type === 'slides' ? 'slideshow' : file.type === 'sheet' ? 'grid_on' : 'image'}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs truncate">{file.name}</p>
                    <p className="text-[9px] text-white/20">{file.modified}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
