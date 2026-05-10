import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import AgentTypeCard from '../components/platform/AgentTypeCard'
import MixtureOfAgents from '../components/platform/MixtureOfAgents'
import { agentShowcaseData, agentCategories, agentStoreTemplates } from '../lib/platformConstants'

export default function AgentsShowcasePage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredAgents = activeCategory === 'all'
    ? agentShowcaseData
    : agentShowcaseData.filter((a) => a.category === activeCategory)

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-8">
        <SectionHeading
          label="AI AGENTS"
          heading="Meet Your AI Team"
          subtext="Nine specialized agents powered by a Mixture-of-Agents architecture that routes every task to the optimal model for maximum accuracy and speed."
        />
      </div>

      {/* Mixture of Agents diagram */}
      <MixtureOfAgents />

      {/* Category filter + Agent grid */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {agentCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-label tracking-widest uppercase cursor-pointer transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-on-primary'
                    : 'border border-outline/20 text-white/60 hover:border-primary/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => (
              <AgentTypeCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Agent Store */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <SectionHeading
            label="AGENT STORE"
            heading="Extend Your Team"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentStoreTemplates.map((template) => (
              <div
                key={template.name}
                className="bg-surface-container-low border border-outline/10 p-6 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-lg">
                      {template.icon}
                    </span>
                  </div>
                  <span className="font-label text-[9px] tracking-widest uppercase text-white/30 border border-outline/10 px-2 py-0.5">
                    {template.category}
                  </span>
                </div>
                <h4 className="font-headline text-sm font-bold">{template.name}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{template.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="container mx-auto px-8 text-center space-y-6">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white">
          Deploy Your First Agent
        </h2>
        <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
          Get started in seconds. No setup required.
        </p>
        <Link to="/dashboard">
          <Button variant="primary" size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  )
}
