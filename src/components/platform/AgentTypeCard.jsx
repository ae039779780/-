export default function AgentTypeCard({ name, icon, tagline, description, capabilities, model, category }) {
  return (
    <div className="glass-card glow-shadow p-6 space-y-4 border border-outline/10 hover:border-primary/15 transition-all group">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
        </div>
        <span className="font-label text-[9px] tracking-widest uppercase text-white/30 border border-outline/10 px-2 py-0.5">
          {category}
        </span>
      </div>
      <div>
        <h3 className="font-headline text-lg font-bold">{name}</h3>
        <p className="text-primary text-xs font-label tracking-wider uppercase mt-0.5">{tagline}</p>
      </div>
      <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      <ul className="space-y-1.5">
        {capabilities.map((cap) => (
          <li key={cap} className="flex items-center gap-2 text-xs text-white/40">
            <span className="w-1 h-1 bg-primary" />
            {cap}
          </li>
        ))}
      </ul>
      <div className="pt-3 border-t border-outline/10">
        <span className="font-label text-[9px] tracking-widest text-white/20 uppercase">
          {model}
        </span>
      </div>
    </div>
  )
}
