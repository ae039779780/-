import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function EnterpriseHero() {
  return (
    <section className="py-24 min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10 text-center max-w-4xl">
        <p className="font-label text-primary text-xs tracking-[0.2em] uppercase mb-4">
          FOR TEAMS &amp; ORGANIZATIONS
        </p>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-6">
          AI WORKFORCE AT SCALE
        </h1>
        <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Enterprise-grade security, team management, custom agent builders, and
          unlimited capacity. Built for organizations that demand total control
          over their AI infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Request Demo</Button>
          <Link to="/platform/pricing">
            <Button variant="secondary" size="lg">View Pricing</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
