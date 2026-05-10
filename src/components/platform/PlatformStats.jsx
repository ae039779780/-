import { platformStats } from '../../lib/platformConstants'

export default function PlatformStats() {
  return (
    <section className="bg-surface-container-lowest border-y border-outline/10 py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {platformStats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <span className="material-symbols-outlined text-primary text-2xl">{stat.icon}</span>
              <div className="font-headline text-3xl font-bold">{stat.value}</div>
              <div className="font-label text-[10px] tracking-widest text-white/40 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
