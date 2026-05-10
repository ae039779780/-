import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import GlowEffect from '../ui/GlowEffect'
import DashboardPreview from './DashboardPreview'

export default function PlatformHero() {
  return (
    <section className="relative min-h-screen pt-24 flex items-center overflow-hidden">
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Column */}
        <div className="max-w-xl">
          <p className="font-label text-primary uppercase tracking-[0.3em] mb-6 text-xs">
            AI WORKSPACE PLATFORM
          </p>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            YOUR ENTIRE TEAM, POWERED BY AI
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
            Deploy specialized AI agents that work together. Research, create, analyze,
            and execute — autonomously, around the clock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/platform/pricing">
              <Button size="lg">Start Free</Button>
            </Link>
            <Link to="/platform/agents">
              <Button variant="secondary" size="lg">Explore Agents</Button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <GlowEffect position="center" intensity="medium" />
          <div className="relative z-10">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
