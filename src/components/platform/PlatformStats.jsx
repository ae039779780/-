import { platformStats } from '../../lib/platformConstants'

export default function PlatformStats() {
  return (
    <section className="py-12 border-y border-outline/10 bg-surface-container-lowest">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {platformStats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <span className="material-symbols-outlined text-primary text-2xl">{stat.icon}</span>
              <div className="font-headline text-3xl font-bold">{stat.value}</div>
              <div className="font-label text-[10px] tracking-[0.2em] text-white/40 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
