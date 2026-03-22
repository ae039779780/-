import { useState } from 'react'
import { useDashboard, useDashboardDispatch } from '../../lib/DashboardContext'

export default function HubsPanel() {
  const { hubs, agents } = useDashboard()
  const dispatch = useDashboardDispatch()
  const [showCreate, setShowCreate] = useState(false)
  const [newHub, setNewHub] = useState({ name: '', description: '' })

  const createHub = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_HUB',
      hub: {
        id: `hub-${Date.now()}`,
        name: newHub.name,
        description: newHub.description,
        icon: 'folder',
        conversations: 0,
        lastActive: 'Just now',
        agents: ['super-agent'],
      },
    })
    setNewHub({ name: '', description: '' })
    setShowCreate(false)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tight">Hubs</h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Project workspaces with persistent context
          </p>
        </div>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="bg-primary text-on-primary px-5 py-3 font-label text-[10px] font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          New Hub
        </button>
      </div>

      {showCreate && (
        <form onSubmit={createHub} className="bg-surface-container-lowest border border-outline/10 p-6 space-y-4">
          <input
            value={newHub.name}
            onChange={(e) => setNewHub((h) => ({ ...h, name: e.target.value }))}
            placeholder="HUB NAME"
            required
            className="w-full bg-surface-container border border-outline/20 px-4 py-3 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
          />
          <input
            value={newHub.description}
            onChange={(e) => setNewHub((h) => ({ ...h, description: e.target.value }))}
            placeholder="DESCRIPTION"
            className="w-full bg-surface-container border border-outline/20 px-4 py-3 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
          />
          <button type="submit" className="bg-primary text-on-primary px-6 py-3 font-label font-bold text-xs tracking-widest uppercase cursor-pointer">
            Create
          </button>
        </form>
      )}

      <div className="grid md:grid-cols-2 gap-1">
        {hubs.map((hub) => {
          const hubAgents = hub.agents.map((id) => agents.find((a) => a.id === id)).filter(Boolean)
          return (
            <div
              key={hub.id}
              className="bg-surface-container-low border border-outline/10 p-8 hover:border-primary/15 transition-all glow-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl">{hub.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold">{hub.name}</h3>
                    <p className="font-label text-[10px] tracking-widest text-white/30 uppercase">
                      {hub.lastActive}
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-white/20 hover:text-white transition-colors">
                  more_vert
                </span>
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-6">{hub.description}</p>

              <div className="flex justify-between items-center pt-4 border-t border-outline/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-white/30">chat</span>
                  <span className="text-xs text-white/40">{hub.conversations} conversations</span>
                </div>
                <div className="flex -space-x-1">
                  {hubAgents.map((agent) => (
                    <div
                      key={agent.id}
                      className="w-6 h-6 bg-surface-container border border-outline/20 flex items-center justify-center"
                      title={agent.name}
                    >
                      <span className="material-symbols-outlined text-primary text-[10px]">
                        {agent.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
