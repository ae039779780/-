import { agentShowcaseData } from '../../lib/platformConstants'

export default function MixtureOfAgents() {
  const outerAgents = agentShowcaseData.filter((a) => a.id !== 'super-agent')

  return (
    <section className="py-24">
      <div className="container mx-auto px-8">
        {/* Diagram */}
        <div className="flex flex-col items-center">
          <div className="relative flex items-center justify-center py-16">
            {/* Central node */}
            <div className="relative z-10 w-24 h-24 bg-primary/10 border border-primary/30 flex flex-col items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">hub</span>
              <span className="font-label text-[8px] tracking-widest text-primary uppercase mt-1">
                Super Agent
              </span>
            </div>

            {/* Surrounding agent nodes with connection lines */}
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
                    className="absolute w-16 h-16 bg-surface-container-low border border-outline/20 flex flex-col items-center justify-center hover:border-primary/30 transition-colors"
                    style={{
                      top: `calc(50% + ${y}px - 32px)`,
                      left: `calc(50% + ${x}px - 32px)`,
                    }}
                  >
                    <span className="material-symbols-outlined text-primary/60 text-sm">
                      {agent.icon}
                    </span>
                    <span className="font-label text-[6px] tracking-wider text-white/40 uppercase mt-0.5 text-center leading-tight px-1">
                      {agent.name.replace(' Agent', '')}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Explanation text */}
          <div className="max-w-2xl text-center mt-8 space-y-4">
            <p className="text-white/50 text-sm leading-relaxed">
              The Mixture-of-Agents architecture routes every task to the optimal specialized model.
              The Super Agent orchestrates 9 LLMs simultaneously, breaking complex requests into
              sub-tasks and distributing them across domain-specific agents for parallel execution.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Results are synthesized into a unified output, combining the strengths of each model
              while maintaining full context across the entire workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
