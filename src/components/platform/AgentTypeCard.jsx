export default function AgentTypeCard({ agent }) {
  return (
    <div className="bg-surface-container-low border border-outline/10 p-6 hover:border-primary/20 transition">
      <div className="bg-primary/10 w-12 h-12 flex items-center justify-center">
        <span className="material-symbols-outlined text-primary text-xl">{agent.icon}</span>
      </div>
      <h3 className="font-headline text-lg font-bold mt-4">{agent.name}</h3>
      <p className="text-primary text-xs font-label tracking-widest uppercase">{agent.tagline}</p>
      <p className="text-white/50 text-sm mt-2">{agent.description}</p>
      <ul className="mt-4 space-y-1.5">
        {agent.capabilities.map((cap) => (
          <li key={cap} className="flex items-center gap-2 text-xs text-white/40">
            <span className="w-1.5 h-1.5 bg-primary" />
            {cap}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <span className="border border-outline/20 px-2 py-1 text-[10px] font-label tracking-widest text-white/30">
          {agent.model}
        </span>
      </div>
    </div>
  )
}
