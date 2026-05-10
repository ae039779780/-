import { enterpriseFeatures } from '../../lib/platformConstants'

export default function EnterpriseFeatures() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {enterpriseFeatures.map((feature) => (
        <div
          key={feature.title}
          className="bg-surface-container-low border border-outline/10 p-8 hover:border-primary/20 transition-all"
        >
          <div className="bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary">{feature.icon}</span>
          </div>
          <h3 className="font-headline text-lg font-bold">{feature.title}</h3>
          <p className="text-white/50 text-sm mt-2 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
