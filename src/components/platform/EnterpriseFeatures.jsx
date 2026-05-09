import SectionHeading from '../ui/SectionHeading'
import { enterpriseFeatures } from '../../lib/platformConstants'

export default function EnterpriseFeatures() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-8">
        <SectionHeading
          label="ENTERPRISE FEATURES"
          heading="Built for Serious Operations"
          subtext="Security, compliance, and control for teams that rely on AI for mission-critical workflows."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {enterpriseFeatures.map((feature) => (
            <div key={feature.title} className="glass-card glow-shadow p-8 space-y-4 border border-outline/10 hover:border-primary/15 transition-all">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">{feature.icon}</span>
              </div>
              <h3 className="font-headline text-lg font-bold">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
