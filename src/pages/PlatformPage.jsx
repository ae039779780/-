import { Link } from 'react-router-dom'
import PlatformHero from '../components/platform/PlatformHero'
import PlatformStats from '../components/platform/PlatformStats'
import FeatureShowcase from '../components/platform/FeatureShowcase'
import AgentTypeCard from '../components/platform/AgentTypeCard'
import TestimonialBar from '../components/platform/TestimonialBar'
import DashboardPreview from '../components/platform/DashboardPreview'
import PlatformCTA from '../components/platform/PlatformCTA'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import GlowEffect from '../components/ui/GlowEffect'
import { agentShowcaseData } from '../lib/platformConstants'

export default function PlatformPage() {
  const previewAgents = agentShowcaseData.slice(0, 4)

  return (
    <>
      <PlatformHero />
      <PlatformStats />
      <FeatureShowcase />

      {/* Agent Preview */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
          <SectionHeading
            label="AGENTS"
            heading="Specialized AI for Every Function"
            subtext="Each agent masters a specific domain. Together, they form an autonomous workforce."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {previewAgents.map((agent) => (
              <AgentTypeCard key={agent.id} {...agent} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/platform/agents">
              <Button variant="secondary" size="md">View All Agents</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Full Dashboard Preview */}
      <section className="py-32 relative overflow-hidden">
        <GlowEffect position="center" intensity="medium" />
        <div className="container mx-auto px-8 relative z-10">
          <SectionHeading
            label="THE INTERFACE"
            heading="Command Center for Your AI Workforce"
            subtext="Monitor agents, track tasks, manage files, and analyze performance — all from one unified dashboard."
          />
          <div className="relative group">
            <div className="absolute -inset-8 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <DashboardPreview />
          </div>
        </div>
      </section>

      <TestimonialBar />

      <PlatformCTA
        headline="Ready to Deploy Your AI Team?"
        subtext="Start building with 2,400 free credits per day. No credit card required."
        variant="buttons"
      />
    </>
  )
}
