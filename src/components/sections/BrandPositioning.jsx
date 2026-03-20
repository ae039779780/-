const phases = [
  {
    label: 'Phase 01: Hydration',
    text: 'RECOVERY FOR LONG DAYS UNDER HIGH INTENSITY ENVIRONMENTS.',
  },
  {
    label: 'Phase 02: Equilibrium',
    text: 'STABILIZE CORTISOL SPIKES INDUCED BY TRANSCONTINENTAL TRAVEL.',
  },
  {
    label: 'Phase 03: Thermal',
    text: 'MITIGATE CORE TEMPERATURE STRESS DURING EXTREME HEAT EXPOSURE.',
  },
]

export default function BrandPositioning() {
  return (
    <section className="py-24 bg-surface-container-lowest border-y border-outline/10">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-16">
          {phases.map((phase) => (
            <div key={phase.label} className="space-y-4">
              <h3 className="font-label text-primary text-xs tracking-[0.2em] uppercase">
                {phase.label}
              </h3>
              <p className="font-headline text-2xl text-white/90 leading-snug">
                {phase.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
