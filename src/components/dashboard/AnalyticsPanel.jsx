import { useDashboard } from '../../lib/DashboardContext'

function BarChart({ data, maxValue }) {
  return (
    <div className="flex items-end gap-1 h-32">
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full bg-primary/80 hover:bg-primary transition-colors"
            style={{ height: `${(d.value / maxValue) * 100}%` }}
            title={`${d.label}: ${d.value}`}
          />
          <span className="font-label text-[8px] text-white/30">{d.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function AnalyticsPanel() {
  const { agents, credits } = useDashboard()

  const tasksByAgent = agents
    .filter((a) => a.tasksCompleted > 0)
    .sort((a, b) => b.tasksCompleted - a.tasksCompleted)

  const weeklyTasks = [
    { label: 'Mon', value: 45 }, { label: 'Tue', value: 62 },
    { label: 'Wed', value: 38 }, { label: 'Thu', value: 71 },
    { label: 'Fri', value: 55 }, { label: 'Sat', value: 23 },
    { label: 'Sun', value: 18 },
  ]

  const creditsByCategory = [
    { label: 'Marketing', value: 3350, color: '#81ecff' },
    { label: 'Operations', value: 1310, color: '#00d4ec' },
    { label: 'Research', value: 3980, color: '#55e3e3' },
    { label: 'Creative', value: 780, color: '#d7e5ec' },
    { label: 'Other', value: 1050, color: '#a7abb9' },
  ]

  const totalCreditsUsed = creditsByCategory.reduce((s, c) => s + c.value, 0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-4xl font-bold tracking-tight">Analytics</h1>
        <p className="text-on-surface-variant text-sm mt-1">
          Performance metrics and resource consumption
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-1">
        {/* Weekly Task Volume */}
        <div className="bg-surface-container-low border border-outline/10 p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-headline text-sm font-bold">Weekly Task Volume</h2>
            <span className="font-label text-[10px] text-white/30 tracking-widest uppercase">This Week</span>
          </div>
          <BarChart data={weeklyTasks} maxValue={80} />
          <div className="flex justify-between pt-2 border-t border-outline/10">
            <span className="font-label text-[10px] text-white/30 tracking-widest uppercase">Total</span>
            <span className="font-headline font-bold">{weeklyTasks.reduce((s, d) => s + d.value, 0)}</span>
          </div>
        </div>

        {/* Credit Consumption */}
        <div className="bg-surface-container-low border border-outline/10 p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-headline text-sm font-bold">Credit Consumption</h2>
            <span className="font-label text-[10px] text-white/30 tracking-widest uppercase">This Cycle</span>
          </div>
          <div className="space-y-3">
            {creditsByCategory.map((c) => (
              <div key={c.label} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs">{c.label}</span>
                  <span className="font-headline text-xs font-bold">{c.value.toLocaleString()}</span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest">
                  <div
                    className="h-full transition-all"
                    style={{ width: `${(c.value / totalCreditsUsed) * 100}%`, backgroundColor: c.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between pt-2 border-t border-outline/10">
            <span className="font-label text-[10px] text-white/30 tracking-widest uppercase">Remaining</span>
            <span className="font-headline font-bold text-primary">
              {(credits.total - credits.used).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Agent Performance Table */}
      <div className="bg-surface-container-low border border-outline/10">
        <div className="p-6 border-b border-outline/10">
          <h2 className="font-headline text-sm font-bold">Agent Performance</h2>
        </div>
        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-outline/10">
          <span className="col-span-3 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase">Agent</span>
          <span className="col-span-2 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase">Model</span>
          <span className="col-span-2 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase text-right">Tasks</span>
          <span className="col-span-2 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase text-right">Success</span>
          <span className="col-span-2 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase text-right">Credits</span>
          <span className="col-span-1 font-label text-[9px] tracking-[0.2em] text-white/30 uppercase text-center">Status</span>
        </div>
        {tasksByAgent.map((agent) => (
          <div key={agent.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline/5 items-center hover:bg-surface-container transition-colors">
            <div className="col-span-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">{agent.icon}</span>
              <span className="text-sm font-bold">{agent.name}</span>
            </div>
            <div className="col-span-2">
              <span className="font-label text-[10px] text-white/40">{agent.model}</span>
            </div>
            <div className="col-span-2 text-right font-headline font-bold text-sm">
              {agent.tasksCompleted}
            </div>
            <div className="col-span-2 text-right">
              <span className={`font-headline font-bold text-sm ${
                agent.successRate >= 95 ? 'text-primary' : agent.successRate >= 90 ? 'text-tertiary-dim' : 'text-error'
              }`}>
                {agent.successRate}%
              </span>
            </div>
            <div className="col-span-2 text-right font-headline text-sm">
              {agent.creditsUsed.toLocaleString()}
            </div>
            <div className="col-span-1 flex justify-center">
              <div className={`w-2 h-2 rounded-full ${
                agent.status === 'active' ? 'bg-primary' : 'bg-outline/40'
              }`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
