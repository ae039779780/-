import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import { platformFeatures } from '../../lib/platformConstants'

export default function FeatureShowcase() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-8">
        <SectionHeading
          label="THE WORKSPACE"
          heading="Everything You Need, One Platform"
          subtext="A unified AI workspace where specialized agents collaborate on your projects — from research to execution."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {platformFeatures.map((feature) => {
            const content = (
              <div className="glass-card glow-shadow p-8 space-y-4 border border-outline/10 hover:border-primary/15 transition-all group cursor-pointer h-full">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary text-xl">{feature.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                <div className="flex items-center gap-1 text-primary text-xs font-label tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            )

            return feature.link ? (
              <Link key={feature.title} to={feature.link} className="block">{content}</Link>
            ) : (
              <div key={feature.title}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
