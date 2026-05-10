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
        />
        <div className="grid md:grid-cols-3 gap-1">
          {platformFeatures.map((feature) => {
            const inner = (
              <>
                <span className="material-symbols-outlined text-primary text-3xl mb-4">{feature.icon}</span>
                <h3 className="font-headline text-lg font-bold">{feature.title}</h3>
                <p className="text-white/50 text-sm mt-2">{feature.description}</p>
              </>
            )

            return feature.link ? (
              <Link
                key={feature.title}
                to={feature.link}
                className="block bg-surface-container-low border border-outline/10 p-8 glow-shadow"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={feature.title}
                className="bg-surface-container-low border border-outline/10 p-8 glow-shadow"
              >
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
