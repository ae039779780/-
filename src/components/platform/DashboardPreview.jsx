import GlowEffect from '../ui/GlowEffect'

export default function DashboardPreview() {
  return (
    <div className="relative">
      <GlowEffect position="center" intensity="low" />
      <div className="relative z-10 bg-surface-container-lowest border border-outline/10 overflow-hidden shadow-2xl">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-48 bg-surface-container border-r border-outline/10 p-4 space-y-4 hidden sm:block">
            <div className="w-full h-3 bg-white/10" />
            <div className="space-y-2">
              {[0.7, 0.5, 0.6, 0.4, 0.55, 0.45].map((w, i) => (
                <div
                  key={i}
                  className={`h-2.5 ${i === 0 ? 'bg-primary/30' : 'bg-white/5'}`}
                  style={{ width: `${w * 100}%` }}
                />
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 p-4 space-y-4">
            {/* 4 Stat Cards */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { border: 'border-t-2 border-t-primary', label: 'Active Agents', value: '7' },
                { border: 'border-t-2 border-t-green-400', label: 'Tasks Done', value: '1,284' },
                { border: 'border-t-2 border-t-yellow-400', label: 'Success Rate', value: '94.2%' },
                { border: 'border-t-2 border-t-purple-400', label: 'Credits', value: '10.4K' },
              ].map((stat) => (
                <div key={stat.label} className={`bg-surface-container p-2.5 border border-outline/5 ${stat.border}`}>
                  <div className="text-[7px] font-label tracking-widest text-white/30 uppercase">{stat.label}</div>
                  <div className="font-headline text-sm font-bold mt-0.5">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Activity Feed */}
            <div className="space-y-1.5">
              <div className="text-[8px] font-label tracking-widest text-white/30 uppercase">Recent Activity</div>
              {[
                { text: 'Marketing Agent completed campaign draft', time: '2m ago' },
                { text: 'Analytics Agent generated weekly report', time: '15m ago' },
                { text: 'Brand Agent reviewed packaging copy', time: '1h ago' },
                { text: 'Super Agent orchestrated content pipeline', time: '2h ago' },
              ].map((activity) => (
                <div key={activity.text} className="flex items-center gap-2 py-1.5 border-b border-outline/5">
                  <div className="w-1.5 h-1.5 bg-primary" />
                  <span className="text-[9px] text-white/50 flex-1">{activity.text}</span>
                  <span className="text-[8px] text-white/20">{activity.time}</span>
                </div>
              ))}
            </div>

            {/* Mini Bar Chart */}
            <div className="bg-surface-container p-3 border border-outline/5">
              <div className="text-[8px] font-label tracking-widest text-white/30 uppercase mb-3">Weekly Usage</div>
              <div className="flex items-end gap-1.5 h-12">
                {[40, 65, 50, 80, 70, 90, 55].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/30"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
