import { integrations } from '../../lib/platformConstants'

export default function IntegrationShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-surface-container-low border border-outline/10 p-6 text-center hover:border-primary/20 transition-all"
        >
          <span className="material-symbols-outlined text-2xl text-primary mb-2 block">
            {integration.icon}
          </span>
          <span className="text-sm font-label block mb-2">{integration.name}</span>
          <div className="flex items-center justify-center gap-1">
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full ${
                integration.connected ? 'bg-green-500' : 'bg-white/20'
              }`}
            />
            <span className="text-[10px] text-white/30">
              {integration.connected ? 'Connected' : 'Available'}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
