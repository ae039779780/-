import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function ClawHero() {
  const tasks = [
    { name: 'Competitor Analysis Report', status: 'completed', progress: 100 },
    { name: 'Weekly Content Pipeline', status: 'running', progress: 68 },
    { name: 'Supplier Outreach Campaign', status: 'queued', progress: 0 },
  ]

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          <p className="font-label text-primary text-xs tracking-[0.2em] uppercase mb-4">
            INTRODUCING CLAW
          </p>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-6">
            YOUR ALWAYS-ON AI EMPLOYEE
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-8">
            Claw is your autonomous AI worker that operates 24/7 — orchestrating
            multi-agent workflows, executing complex tasks, and delivering results
            while you focus on strategy. No micromanagement required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/dashboard">
              <Button size="lg">Deploy Claw</Button>
            </Link>
            <Link to="/platform/pricing">
              <Button variant="secondary" size="lg">See Pricing</Button>
            </Link>
          </div>
        </div>

        {/* Right column — Task list mockup */}
        <div className="bg-surface-container-low border border-outline/10 p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-lg">auto_mode</span>
            <span className="font-headline text-sm font-bold">Claw Autopilot</span>
            <span className="ml-auto font-label text-[9px] tracking-widest text-primary uppercase bg-primary/10 px-2 py-1">
              Active
            </span>
          </div>
          {tasks.map((task) => (
            <div
              key={task.name}
              className="bg-surface-container-low border border-outline/10 p-4 mb-2"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/70">{task.name}</span>
                <span
                  className={`font-label text-[9px] tracking-widest uppercase px-2 py-0.5 ${
                    task.status === 'completed'
                      ? 'text-primary bg-primary/10'
                      : task.status === 'running'
                        ? 'text-yellow-400 bg-yellow-400/10'
                        : 'text-white/30 bg-white/5'
                  }`}
                >
                  {task.status}
                </span>
              </div>
              <div className="h-1 bg-surface-container-highest">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${task.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
