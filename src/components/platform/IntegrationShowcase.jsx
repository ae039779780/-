import SectionHeading from '../ui/SectionHeading'
import { integrations } from '../../lib/platformConstants'

export default function IntegrationShowcase() {
  return (
    <section className="py-32 bg-surface-container-lowest border-y border-outline/10">
      <div className="container mx-auto px-8">
        <SectionHeading
          label="INTEGRATIONS"
          heading="Connect Everything"
          subtext="Your agents work where you work. Connect the tools your team already uses."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center gap-3 p-6 border border-outline/10 hover:border-primary/15 transition-all group"
            >
              <div className="w-12 h-12 bg-surface-container flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-white/40 group-hover:text-primary text-xl transition-colors">
                  {integration.icon}
                </span>
              </div>
              <span className="font-label text-xs tracking-wider text-white/50">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
