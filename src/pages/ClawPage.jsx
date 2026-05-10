import ClawHero from '../components/platform/ClawHero'
import ClawCapabilities from '../components/platform/ClawCapabilities'
import ClawHowItWorks from '../components/platform/ClawHowItWorks'
import SectionHeading from '../components/ui/SectionHeading'
import EmailInput from '../components/ui/EmailInput'
import { clawUseCases } from '../lib/platformConstants'

export default function ClawPage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <ClawHero />

      {/* Capabilities */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <SectionHeading label="CAPABILITIES" heading="What Claw Can Do" />
          <ClawCapabilities />
        </div>
      </section>

      {/* How It Works */}
      <ClawHowItWorks />

      {/* Use Cases */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <SectionHeading label="USE CASES" heading="Claw In Action" />
          <div className="grid md:grid-cols-2 gap-6">
            {clawUseCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-surface-container-low border border-outline/10 p-6 space-y-4"
              >
                <h3 className="font-headline text-lg font-bold">{uc.title}</h3>

                {/* Agent badges */}
                <div className="flex gap-2 flex-wrap">
                  {uc.agents.map((agent) => (
                    <span
                      key={agent}
                      className="bg-primary/10 text-primary text-[10px] font-label px-2 py-1"
                    >
                      {agent}
                    </span>
                  ))}
                </div>

                {/* Step list */}
                <div className="space-y-2">
                  {uc.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-white/30 text-sm font-headline font-bold w-5 shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-white/50 text-sm">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Duration badge */}
                <div className="pt-2 border-t border-outline/10">
                  <span className="font-label text-[10px] tracking-widest text-white/30 uppercase">
                    {uc.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="container mx-auto px-8 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Put Your Operations on Autopilot
          </h2>
          <EmailInput onSubmit={(email) => console.log('Claw signup:', email)} />
        </div>
      </section>
    </div>
  )
}
