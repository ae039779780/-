import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import GlowEffect from '../ui/GlowEffect'
import DashboardPreview from './DashboardPreview'

export default function PlatformHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <GlowEffect position="center" intensity="low" />
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="max-w-xl">
          <p className="font-label text-primary uppercase tracking-[0.3em] mb-6 text-xs">
            AI WORKSPACE PLATFORM
          </p>
          <h1 className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            YOUR ENTIRE TEAM, <br />
            <span className="text-primary">POWERED BY AI</span>
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
              <Button variant="secondary" size="lg">Meet the Agents</Button>
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/30 text-xs font-label tracking-wider">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              No credit card
            </div>
            <div className="flex items-center gap-2 text-white/30 text-xs font-label tracking-wider">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
              2,400 credits/day free
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-8 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
