import SectionHeading from '../ui/SectionHeading'
import { clawCapabilities } from '../../lib/platformConstants'

export default function ClawCapabilities() {
  return (
    <section className="py-32 bg-surface-container-lowest border-y border-outline/10">
      <div className="container mx-auto px-8">
        <SectionHeading
          label="CAPABILITIES"
          heading="What Claw Can Do"
          subtext="An autonomous execution engine with human oversight at every critical decision point."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {clawCapabilities.map((cap) => (
            <div key={cap.title} className="p-8 border border-outline/10 hover:border-primary/15 transition-all group">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-xl">{cap.icon}</span>
              </div>
              <h3 className="font-headline text-lg font-bold mb-2">{cap.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
