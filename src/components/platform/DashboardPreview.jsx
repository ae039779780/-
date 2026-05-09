export default function DashboardPreview({ compact = false }) {
  return (
    <div className={`bg-surface-container-lowest border border-outline/10 overflow-hidden ${compact ? '' : 'shadow-2xl'}`}>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-48 bg-surface-container border-r border-outline/10 p-4 space-y-6 hidden sm:block">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-primary/20 flex items-center justify-center">
              <span className="text-primary text-[8px] font-bold">D</span>
            </div>
            <span className="font-headline text-[10px] font-bold tracking-tight">DAY//AFTR</span>
          </div>
          <div className="space-y-2">
            {['Overview', 'Agents', 'Hubs', 'Drive', 'Analytics'].map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-2 px-2 py-1.5 text-[9px] font-label tracking-wider uppercase ${
                  i === 0 ? 'bg-primary/10 text-primary' : 'text-white/30'
                }`}
              >
                <div className={`w-1 h-1 ${i === 0 ? 'bg-primary' : 'bg-white/20'}`} />
                {item}
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-outline/10">
            <div className="text-[8px] text-white/20 font-label tracking-widest uppercase mb-2">Agents</div>
            <div className="space-y-1.5">
              {['Super Agent', 'Marketing', 'Brand'].map((agent) => (
                <div key={agent} className="flex items-center gap-1.5 text-[8px] text-white/40">
                  <div className="w-1.5 h-1.5 bg-primary/40" />
                  {agent}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-headline text-xs font-bold">Overview</span>
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-4 h-4 bg-surface-container" />
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Active Agents', value: '7' },
              { label: 'Tasks Done', value: '1,284' },
              { label: 'Success Rate', value: '94.2%' },
              { label: 'Credits', value: '10.4K' },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface-container p-2.5 border border-outline/5">
                <div className="text-[7px] font-label tracking-widest text-white/30 uppercase">{stat.label}</div>
                <div className="font-headline text-sm font-bold mt-0.5">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Activity Feed */}
          <div className="space-y-1.5">
            <div className="text-[8px] font-label tracking-widest text-white/30 uppercase">Recent Activity</div>
            {[
              { text: 'Marketing Agent completed campaign draft', time: '2m ago', color: 'bg-primary' },
              { text: 'Analytics Agent generated weekly report', time: '15m ago', color: 'bg-tertiary-dim' },
              { text: 'Brand Agent reviewed packaging copy', time: '1h ago', color: 'bg-secondary' },
            ].map((activity) => (
              <div key={activity.text} className="flex items-center gap-2 py-1.5 border-b border-outline/5">
                <div className={`w-1.5 h-1.5 ${activity.color}`} />
                <span className="text-[9px] text-white/50 flex-1">{activity.text}</span>
                <span className="text-[8px] text-white/20">{activity.time}</span>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          {!compact && (
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="bg-surface-container p-3 border border-outline/5">
                <div className="text-[8px] font-label tracking-widest text-white/30 uppercase mb-2">Active Hubs</div>
                {['Q3 Launch', 'Content Engine'].map((hub) => (
                  <div key={hub} className="flex items-center gap-1.5 text-[9px] text-white/40 mb-1">
                    <div className="w-1 h-1 bg-primary/60" />
                    {hub}
                  </div>
                ))}
              </div>
              <div className="bg-surface-container p-3 border border-outline/5">
                <div className="text-[8px] font-label tracking-widest text-white/30 uppercase mb-2">Credit Usage</div>
                <div className="w-full h-1.5 bg-surface-container-highest mt-1">
                  <div className="h-full bg-primary w-[70%]" />
                </div>
                <div className="text-[8px] text-white/30 mt-1">10,470 / 15,000</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
