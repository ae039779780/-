import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import AgentTypeCard from '../components/platform/AgentTypeCard'
import MixtureOfAgents from '../components/platform/MixtureOfAgents'
import PlatformCTA from '../components/platform/PlatformCTA'
import { agentShowcaseData } from '../lib/platformConstants'

const categories = ['All', 'Core', 'Marketing', 'Operations', 'Creative', 'Data', 'Support']

const storeTemplates = [
  { name: 'Email Outreach', icon: 'forward_to_inbox', description: 'Automated email campaigns with personalization.' },
  { name: 'SEO Optimizer', icon: 'travel_explore', description: 'On-page SEO analysis and keyword recommendations.' },
  { name: 'Financial Analyst', icon: 'account_balance', description: 'Revenue modeling and financial projections.' },
  { name: 'Legal Reviewer', icon: 'gavel', description: 'Contract review and compliance checking.' },
  { name: 'Social Listener', icon: 'hearing', description: 'Social media monitoring and sentiment analysis.' },
  { name: 'Copywriter', icon: 'edit_note', description: 'Long-form and short-form content generation.' },
]

export default function AgentsShowcasePage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredAgents = activeCategory === 'All'
    ? agentShowcaseData
    : agentShowcaseData.filter(a => a.category === activeCategory)

  return (
    <div className="min-h-screen pt-24 pb-0">
      <div className="container mx-auto px-8">
        <div className="mb-20 space-y-4">
          <p className="font-label text-primary text-xs tracking-[0.2em] uppercase">
            AI Agent Ecosystem
          </p>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
            MEET YOUR <br />
            <span className="text-primary">AI TEAM</span>
          </h1>
          <div className="w-24 h-px bg-primary" />
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Nine specialized agents, each mastering a different domain. Powered by a
            Mixture-of-Agents architecture that routes every task to the optimal model.
          </p>
        </div>
      </div>

      <MixtureOfAgents />

      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-label text-xs tracking-widest uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary text-on-primary'
                    : 'border border-outline/20 text-white/50 hover:border-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAgents.map((agent) => (
              <AgentTypeCard key={agent.id} {...agent} />
            ))}
          </div>
        </div>
      </section>

      {/* Agent Store Preview */}
      <section className="py-24 bg-surface-container-lowest border-y border-outline/10">
        <div className="container mx-auto px-8">
          <SectionHeading
            label="AGENT STORE"
            heading="Extend Your Workforce"
            subtext="Install pre-built agent templates for specialized tasks. Available on Plus and Pro plans."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {storeTemplates.map((template) => (
              <div
                key={template.name}
                className="flex items-start gap-4 p-5 border border-outline/10 hover:border-primary/15 transition-all group"
              >
                <div className="w-10 h-10 bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary/60 text-lg">{template.icon}</span>
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold">{template.name}</h4>
                  <p className="text-white/40 text-xs mt-1 leading-relaxed">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlatformCTA
        headline="Deploy Your First Agent Today"
        subtext="Get started in seconds. No setup required."
        variant="buttons"
      />
    </div>
  )
}
