import ClawHero from '../components/platform/ClawHero'
import ClawCapabilities from '../components/platform/ClawCapabilities'
import ClawHowItWorks from '../components/platform/ClawHowItWorks'
import SectionHeading from '../components/ui/SectionHeading'
import PlatformCTA from '../components/platform/PlatformCTA'
import { clawUseCases } from '../lib/platformConstants'

export default function ClawPage() {
  return (
    <>
      <ClawHero />
      <ClawCapabilities />
      <ClawHowItWorks />

      {/* Use Cases */}
      <section className="py-32 bg-surface-container-lowest border-y border-outline/10">
        <div className="container mx-auto px-8">
          <SectionHeading
            label="USE CASES"
            heading="Real Workflows, Real Results"
            subtext="See how Claw orchestrates multi-agent tasks from start to finish."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {clawUseCases.map((uc) => (
              <div key={uc.title} className="p-6 border border-outline/10 hover:border-primary/15 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline text-lg font-bold">{uc.title}</h3>
                  <span className="font-label text-[9px] tracking-widest text-white/30 uppercase">{uc.duration}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {uc.agents.map((agent) => (
                    <span key={agent} className="border border-primary/20 px-2 py-0.5 text-[9px] font-label text-primary/70 tracking-wider uppercase">
                      {agent}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {uc.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-surface-container flex items-center justify-center shrink-0">
                        <span className="text-[8px] font-headline font-bold text-white/30">{i + 1}</span>
                      </div>
                      <span className="text-xs text-white/50">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PlatformCTA
        headline="Put Claw to Work"
        subtext="Start automating multi-step workflows today. Available on Plus and Pro plans."
        variant="buttons"
      />
    </>
  )
}
