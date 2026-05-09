import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import GlowEffect from '../ui/GlowEffect'

export default function ClawHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center pt-16 overflow-hidden">
      <GlowEffect position="top-right" intensity="low" />
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="max-w-xl">
          <p className="font-label text-primary uppercase tracking-[0.3em] mb-6 text-xs">
            INTRODUCING CLAW
          </p>
          <h1 className="font-headline font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            YOUR ALWAYS-ON <br />
            <span className="text-primary">AI EMPLOYEE</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-lg">
            An autonomous AI worker that runs 24/7 — managing multi-step tasks
            across your agents while you focus on what matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/platform/pricing">
              <Button size="lg">Deploy Claw</Button>
            </Link>
            <Link to="/platform/pricing">
              <Button variant="secondary" size="lg">See Pricing</Button>
            </Link>
          </div>
        </div>

        {/* Task List Mockup */}
        <div className="relative group">
          <div className="absolute -inset-8 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="bg-surface-container-lowest border border-outline/10 p-6 space-y-4 relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">auto_mode</span>
                <span className="font-headline text-sm font-bold">Claw Autopilot</span>
              </div>
              <span className="font-label text-[9px] tracking-widest text-primary/60 uppercase bg-primary/10 px-2 py-1">Active</span>
            </div>
            {[
              { task: 'Competitor Analysis Report', progress: 100, status: 'done' },
              { task: 'Weekly Content Pipeline', progress: 72, status: 'running' },
              { task: 'Supplier Outreach Campaign', progress: 45, status: 'running' },
              { task: 'SEO & Performance Audit', progress: 0, status: 'queued' },
            ].map((item) => (
              <div key={item.task} className="bg-surface-container p-4 border border-outline/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/70">{item.task}</span>
                  <span className={`font-label text-[8px] tracking-widest uppercase ${
                    item.status === 'done' ? 'text-primary' : item.status === 'running' ? 'text-tertiary-dim' : 'text-white/30'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest">
                  <div
                    className={`h-full transition-all ${item.status === 'done' ? 'bg-primary' : 'bg-tertiary-dim'}`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
