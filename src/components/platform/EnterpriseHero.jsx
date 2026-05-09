import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import GlowEffect from '../ui/GlowEffect'

export default function EnterpriseHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center pt-16 overflow-hidden">
      <GlowEffect position="bottom-left" intensity="low" />
      <div className="container mx-auto px-8 relative z-10 text-center max-w-4xl">
        <p className="font-label text-primary uppercase tracking-[0.3em] mb-6 text-xs">
          FOR TEAMS & ORGANIZATIONS
        </p>
        <h1 className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
          AI WORKFORCE <br />
          <span className="text-primary">AT SCALE</span>
        </h1>
        <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Enterprise-grade security, team management, custom agents, and unlimited
          capacity. Built for organizations that demand more from their AI infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/platform/pricing">
            <Button size="lg">Get Pro</Button>
          </Link>
          <Button variant="secondary" size="lg">Contact Sales</Button>
        </div>
      </div>
    </section>
  )
}
