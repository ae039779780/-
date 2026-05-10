import EnterpriseHero from '../components/platform/EnterpriseHero'
import EnterpriseFeatures from '../components/platform/EnterpriseFeatures'
import IntegrationShowcase from '../components/platform/IntegrationShowcase'
import SectionHeading from '../components/ui/SectionHeading'
import EmailInput from '../components/ui/EmailInput'

export default function EnterprisePage() {
  const teamMembers = [
    { name: 'Asaf K.', email: 'asaf@dayaftr.com', role: 'Owner', initial: 'A' },
    { name: 'Maya L.', email: 'maya@dayaftr.com', role: 'Editor', initial: 'M' },
    { name: 'Dan R.', email: 'dan@dayaftr.com', role: 'Viewer', initial: 'D' },
  ]

  return (
    <div className="min-h-screen pt-24 pb-32">
      {/* Hero */}
      <EnterpriseHero />

      {/* Enterprise Features */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <SectionHeading label="ENTERPRISE FEATURES" heading="Built for Scale" />
          <EnterpriseFeatures />
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-8">
          <SectionHeading label="INTEGRATIONS" heading="Connect Everything" />
          <IntegrationShowcase />
        </div>
      </section>

      {/* Team Management Preview */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <SectionHeading
            label="TEAM MANAGEMENT"
            heading="Your Org, Your Rules"
          />
          <div className="bg-surface-container-low border border-outline/10 p-8 max-w-2xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.email}
                className="flex items-center justify-between py-3 border-b border-outline/5 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center">
                    <span className="font-headline text-xs font-bold text-white/50">
                      {member.initial}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm block">{member.name}</span>
                    <span className="text-[10px] text-white/30 block">{member.email}</span>
                  </div>
                </div>
                <span
                  className={`font-label text-[10px] tracking-widest uppercase px-2 py-1 ${
                    member.role === 'Owner'
                      ? 'text-primary bg-primary/10'
                      : member.role === 'Editor'
                        ? 'text-white/50 bg-white/5'
                        : 'text-white/30 bg-white/5'
                  }`}
                >
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Agent Builder */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <SectionHeading
            label="CUSTOM AGENTS"
            heading="Build Domain-Specific AI"
            subtext="Create custom agents tailored to your industry, workflows, and data sources."
          />
          <div className="bg-surface-container-low border border-outline/10 p-8 max-w-2xl mx-auto space-y-6">
            {/* Agent name input */}
            <div className="space-y-2">
              <label className="font-label text-[10px] tracking-widest text-white/40 uppercase block">
                Agent Name
              </label>
              <div className="bg-surface-container-lowest border border-outline/10 px-4 py-3 text-sm text-white/50">
                Regulatory Compliance Agent
              </div>
            </div>

            {/* Model selector */}
            <div className="space-y-2">
              <label className="font-label text-[10px] tracking-widest text-white/40 uppercase block">
                Model
              </label>
              <div className="flex gap-0">
                {['Haiku', 'Sonnet', 'Opus'].map((model) => (
                  <button
                    key={model}
                    className={`flex-1 px-4 py-3 font-label text-xs tracking-widest uppercase border border-outline/10 transition-all cursor-default ${
                      model === 'Opus'
                        ? 'bg-primary/10 text-primary border-primary/30'
                        : 'bg-surface-container-lowest text-white/30'
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            {/* Category dropdown */}
            <div className="space-y-2">
              <label className="font-label text-[10px] tracking-widest text-white/40 uppercase block">
                Category
              </label>
              <div className="bg-surface-container-lowest border border-outline/10 px-4 py-3 text-sm text-white/50 flex items-center justify-between">
                Operations
                <span className="material-symbols-outlined text-white/20 text-sm">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="container mx-auto px-8 text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Ready for Enterprise?
          </h2>
          <EmailInput onSubmit={(email) => console.log('Enterprise signup:', email)} />
        </div>
      </section>
    </div>
  )
}
