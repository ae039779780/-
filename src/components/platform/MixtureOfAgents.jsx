import { agentShowcaseData } from '../../lib/platformConstants'

export default function MixtureOfAgents() {
  const outerAgents = agentShowcaseData.filter(a => a.id !== 'super-agent')

  return (
    <section className="py-24">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Diagram */}
          <div className="relative flex items-center justify-center py-12">
            {/* Center node */}
            <div className="relative z-10 w-28 h-28 bg-primary/10 border border-primary/30 flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">hub</span>
              <span className="font-label text-[8px] tracking-widest text-primary uppercase mt-1">Super Agent</span>
            </div>

            {/* Radiating connection lines + agent nodes */}
            {outerAgents.map((agent, i) => {
              const angle = (i * 360) / outerAgents.length - 90
              const radius = 140
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius

              return (
                <div key={agent.id}>
                  {/* Connection line */}
                  <div
                    className="absolute top-1/2 left-1/2 h-px bg-outline/20 origin-left"
                    style={{
                      width: `${radius}px`,
                      transform: `rotate(${angle}deg)`,
                    }}
                  />
                  {/* Agent node */}
                  <div
                    className="absolute w-16 h-16 bg-surface-container border border-outline/20 flex flex-col items-center justify-center hover:border-primary/30 transition-colors"
                    style={{
                      top: `calc(50% + ${y}px - 32px)`,
                      left: `calc(50% + ${x}px - 32px)`,
                    }}
                  >
                    <span className="material-symbols-outlined text-primary/60 text-sm">{agent.icon}</span>
                    <span className="font-label text-[6px] tracking-wider text-white/40 uppercase mt-0.5 text-center leading-tight px-1">
                      {agent.name.replace(' Agent', '')}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Explanation */}
          <div className="space-y-6">
            <p className="font-label text-primary text-xs tracking-[0.2em] uppercase">
              Mixture-of-Agents Architecture
            </p>
            <h2 className="font-headline text-4xl font-bold tracking-tight">
              9 Models. <br />
              One Orchestrator.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              The Super Agent sits at the center, routing each task to the optimal
              specialized model. Complex requests are broken into sub-tasks and
              distributed across multiple agents simultaneously.
            </p>
            <ul className="space-y-3">
              {[
                'Automatic model selection per task type',
                'Parallel execution across specialized agents',
                'Context shared seamlessly between agents',
                'Results synthesized into unified output',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-1.5 h-1.5 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
