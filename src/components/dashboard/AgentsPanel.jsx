import { useState } from 'react'
import { useDashboard, useDashboardDispatch } from '../../lib/DashboardContext'

function AgentCard({ agent, onToggle, onDelete }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`bg-surface-container-low border transition-all glow-shadow ${
      agent.status === 'active' ? 'border-primary/15' : 'border-outline/10'
    }`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 flex items-center justify-center ${
              agent.status === 'active' ? 'bg-primary/10' : 'bg-surface-container'
            }`}>
              <span className={`material-symbols-outlined text-lg ${
                agent.status === 'active' ? 'text-primary' : 'text-white/30'
              }`}>
                {agent.icon}
              </span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-sm">{agent.name}</h3>
              <p className="font-label text-[10px] tracking-widest text-white/30 uppercase">
                {agent.model}
              </p>
            </div>
          </div>
          <button
            onClick={() => onToggle(agent.id)}
            className={`relative w-10 h-5 transition-colors cursor-pointer ${
              agent.status === 'active' ? 'bg-primary' : 'bg-surface-container-highest'
            }`}
          >
            <div className={`absolute top-0.5 w-4 h-4 bg-white transition-transform ${
              agent.status === 'active' ? 'translate-x-5' : 'translate-x-0.5'
            }`} />
          </button>
        </div>

        <p className="text-white/50 text-xs leading-relaxed mb-4">{agent.description}</p>

        <div className="grid grid-cols-3 gap-3 py-3 border-t border-outline/10">
          <div>
            <p className="font-headline text-lg font-bold">{agent.tasksCompleted}</p>
            <p className="font-label text-[9px] tracking-widest text-white/30 uppercase">Tasks</p>
          </div>
          <div>
            <p className="font-headline text-lg font-bold text-primary">
              {agent.successRate > 0 ? `${agent.successRate}%` : '—'}
            </p>
            <p className="font-label text-[9px] tracking-widest text-white/30 uppercase">Success</p>
          </div>
          <div>
            <p className="font-headline text-lg font-bold">{agent.creditsUsed}</p>
            <p className="font-label text-[9px] tracking-widest text-white/30 uppercase">Credits</p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-1 pt-3 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
        >
          <span className="font-label text-[10px] tracking-widest uppercase">
            {expanded ? 'Collapse' : 'Details'}
          </span>
          <span className="material-symbols-outlined text-xs">
            {expanded ? 'expand_less' : 'expand_more'}
          </span>
        </button>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-outline/10 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-label text-[10px] text-white/40 tracking-widest uppercase">Category</span>
              <span className="font-label text-xs capitalize">{agent.category}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-label text-[10px] text-white/40 tracking-widest uppercase">Status</span>
              <span className={`font-label text-xs ${agent.status === 'active' ? 'text-primary' : 'text-white/40'}`}>
                {agent.status}
              </span>
            </div>
            {agent.category !== 'core' && (
              <button
                onClick={() => onDelete(agent.id)}
                className="w-full text-center font-label text-[10px] tracking-widest text-error/60 hover:text-error uppercase py-2 border border-error/10 hover:border-error/30 transition-colors cursor-pointer"
              >
                Remove Agent
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function CreateAgentModal({ onClose, onCreate }) {
  const [form, setForm] = useState({ name: '', description: '', model: 'Claude Sonnet 4.6', category: 'custom' })

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreate({
      id: `custom-${Date.now()}`,
      ...form,
      icon: 'auto_awesome',
      status: 'idle',
      tasksCompleted: 0,
      successRate: 0,
      creditsUsed: 0,
      color: '#81ecff',
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-surface-container-low border border-outline/20 w-full max-w-lg">
        <div className="flex justify-between items-center p-6 border-b border-outline/10">
          <h2 className="font-headline text-xl font-bold">Create Custom Agent</h2>
          <button onClick={onClose} className="material-symbols-outlined text-white/40 hover:text-white cursor-pointer">
            close
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="font-label text-[10px] tracking-widest text-white/40 uppercase block mb-2">
              Agent Name
            </label>
            <input
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="E.G. EMAIL OUTREACH AGENT"
              required
              className="w-full bg-surface-container border border-outline/20 px-4 py-3 text-white placeholder:text-white/20 font-label text-sm tracking-widest focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="font-label text-[10px] tracking-widest text-white/40 uppercase block mb-2">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              placeholder="What does this agent do?"
              rows={3}
              required
              className="w-full bg-surface-container border border-outline/20 px-4 py-3 text-white placeholder:text-white/20 font-label text-sm tracking-wide focus:ring-1 focus:ring-primary focus:outline-none resize-none"
            />
          </div>
          <div>
            <label className="font-label text-[10px] tracking-widest text-white/40 uppercase block mb-2">
              Model
            </label>
            <div className="flex gap-2">
              {['Claude Haiku 4.5', 'Claude Sonnet 4.6', 'Claude Opus 4.6'].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, model: m }))}
                  className={`px-4 py-2.5 font-label text-[10px] tracking-widest uppercase transition-all cursor-pointer ${
                    form.model === m
                      ? 'bg-primary text-on-primary'
                      : 'border border-outline/20 text-white/50 hover:border-primary/30'
                  }`}
                >
                  {m.split(' ').pop()}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="font-label text-[10px] tracking-widest text-white/40 uppercase block mb-2">
              Category
            </label>
            <div className="flex flex-wrap gap-2">
              {['marketing', 'operations', 'creative', 'data', 'support', 'custom'].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, category: c }))}
                  className={`px-3 py-2 font-label text-[10px] tracking-widest uppercase transition-all cursor-pointer ${
                    form.category === c
                      ? 'bg-primary text-on-primary'
                      : 'border border-outline/20 text-white/50 hover:border-primary/30'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-on-primary py-4 font-headline font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all mt-4 cursor-pointer"
          >
            Create Agent
          </button>
        </form>
      </div>
    </div>
  )
}

const agentStoreTemplates = [
  { name: 'Email Outreach', icon: 'mail', description: 'Cold email sequences, follow-ups, personalization', category: 'marketing' },
  { name: 'SEO Optimizer', icon: 'search', description: 'Keyword research, meta tags, content optimization', category: 'marketing' },
  { name: 'Financial Analyst', icon: 'payments', description: 'Revenue forecasting, unit economics, P&L analysis', category: 'data' },
  { name: 'Legal Reviewer', icon: 'gavel', description: 'Contract review, compliance checks, regulatory guidance', category: 'operations' },
  { name: 'Social Listener', icon: 'hearing', description: 'Brand mentions, sentiment analysis, trend detection', category: 'data' },
  { name: 'Copywriter', icon: 'edit', description: 'Headlines, product descriptions, landing page copy', category: 'creative' },
]

export default function AgentsPanel() {
  const { agents } = useDashboard()
  const dispatch = useDashboardDispatch()
  const [showCreate, setShowCreate] = useState(false)
  const [filter, setFilter] = useState('all')
  const [showStore, setShowStore] = useState(false)

  const filtered = filter === 'all'
    ? agents
    : filter === 'active'
    ? agents.filter((a) => a.status === 'active')
    : agents.filter((a) => a.category === filter)

  const categories = ['all', 'active', 'core', 'marketing', 'operations', 'creative', 'data', 'support']

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="font-headline text-4xl font-bold tracking-tight">Agents</h1>
          <p className="text-on-surface-variant text-sm mt-1">
            {agents.length} agents &middot; {agents.filter((a) => a.status === 'active').length} active
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowStore(!showStore)}
            className="border border-outline/20 text-white px-5 py-3 font-label text-[10px] tracking-widest uppercase hover:bg-white/5 transition-all cursor-pointer flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">storefront</span>
            Agent Store
          </button>
          <button
            onClick={() => setShowCreate(true)}
            className="bg-primary text-on-primary px-5 py-3 font-label text-[10px] font-bold tracking-widest uppercase hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            Create Agent
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 font-label text-[10px] tracking-widest uppercase whitespace-nowrap transition-all cursor-pointer ${
              filter === c
                ? 'bg-primary text-on-primary'
                : 'border border-outline/15 text-white/40 hover:text-white hover:border-primary/20'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Agent Store */}
      {showStore && (
        <div className="bg-surface-container-lowest border border-outline/10 p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-headline text-lg font-bold">Agent Store</h2>
            <span className="font-label text-[10px] text-white/30 tracking-widest uppercase">
              Templates
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            {agentStoreTemplates.map((tpl) => (
              <button
                key={tpl.name}
                onClick={() => {
                  dispatch({
                    type: 'ADD_AGENT',
                    agent: {
                      id: `store-${Date.now()}-${tpl.name}`,
                      name: tpl.name,
                      icon: tpl.icon,
                      description: tpl.description,
                      category: tpl.category,
                      status: 'idle',
                      model: 'Claude Sonnet 4.6',
                      tasksCompleted: 0,
                      successRate: 0,
                      creditsUsed: 0,
                      color: '#81ecff',
                    },
                  })
                  setShowStore(false)
                }}
                className="p-4 bg-surface-container border border-outline/10 hover:border-primary/20 text-left transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-primary text-lg block mb-2">{tpl.icon}</span>
                <p className="font-headline text-sm font-bold">{tpl.name}</p>
                <p className="text-white/40 text-xs mt-1">{tpl.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Agent Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-1">
        {filtered.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            onToggle={(id) => dispatch({ type: 'TOGGLE_AGENT', agentId: id })}
            onDelete={(id) => dispatch({ type: 'DELETE_AGENT', agentId: id })}
          />
        ))}
      </div>

      {showCreate && (
        <CreateAgentModal
          onClose={() => setShowCreate(false)}
          onCreate={(agent) => dispatch({ type: 'ADD_AGENT', agent })}
        />
      )}
    </div>
  )
}
