export default function ProductCard({ name, category, description, gradient }) {
  return (
    <div className="group bg-brand-card border border-white/5 rounded-lg overflow-hidden hover:border-accent-blue/20 transition-all duration-300">
      <div
        className={`h-48 ${gradient || 'bg-gradient-to-br from-brand-surface to-midnight-navy'} flex items-center justify-center`}
      >
        <span className="font-display text-2xl font-bold uppercase tracking-micro text-white/20 group-hover:text-white/40 transition-colors">
          {name}
        </span>
      </div>
      <div className="p-6">
        <p className="text-accent-cyan text-[10px] font-semibold uppercase tracking-micro mb-2">
          {category}
        </p>
        <h3 className="font-display text-lg font-bold uppercase tracking-wide mb-3">
          DAY//AFTR {name}
        </h3>
        <p className="text-accent-silver/60 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
