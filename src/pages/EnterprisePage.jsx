import EnterpriseHero from '../components/platform/EnterpriseHero'
import EnterpriseFeatures from '../components/platform/EnterpriseFeatures'
import IntegrationShowcase from '../components/platform/IntegrationShowcase'
import SectionHeading from '../components/ui/SectionHeading'
import PlatformCTA from '../components/platform/PlatformCTA'

export default function EnterprisePage() {
  return (
    <>
      <EnterpriseHero />
      <EnterpriseFeatures />
      <IntegrationShowcase />

      {/* Team Management Preview */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <SectionHeading
            label="TEAM MANAGEMENT"
            heading="Your Org, Your Rules"
            subtext="Role-based access, member permissions, and workspace controls for your entire team."
          />
          <div className="max-w-3xl mx-auto bg-surface-container-lowest border border-outline/10 p-6 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-outline/10">
              <div>
                <h4 className="font-headline text-sm font-bold">DAY//AFTR LABS</h4>
                <span className="font-label text-[9px] tracking-widest text-primary/60 uppercase">Pro Workspace</span>
              </div>
              <span className="border border-outline/20 px-3 py-1.5 font-label text-xs tracking-widest uppercase text-white/40 cursor-pointer hover:border-primary/30 transition-colors">
                Invite Member
              </span>
            </div>
            {[
              { name: 'Asaf K.', email: 'asaf@dayaftr.com', role: 'Owner', initial: 'A' },
              { name: 'Maya L.', email: 'maya@dayaftr.com', role: 'Editor', initial: 'M' },
              { name: 'Dan R.', email: 'dan@dayaftr.com', role: 'Editor', initial: 'D' },
            ].map((member) => (
              <div key={member.email} className="flex items-center justify-between py-3 border-b border-outline/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-surface-container flex items-center justify-center">
                    <span className="font-headline text-xs font-bold text-white/50">{member.initial}</span>
                  </div>
                  <div>
                    <span className="text-sm">{member.name}</span>
                    <span className="block text-[10px] text-white/30">{member.email}</span>
                  </div>
                </div>
                <span className={`font-label text-[9px] tracking-widest uppercase ${
                  member.role === 'Owner' ? 'text-primary' : 'text-white/40'
                }`}>
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Agents */}
      <section className="py-32 bg-surface-container-lowest border-y border-outline/10">
        <div className="container mx-auto px-8">
          <SectionHeading
            label="CUSTOM AGENTS"
            heading="Build Domain-Specific AI"
            subtext="Create custom agents tailored to your industry, workflows, and data sources."
          />
          <div className="max-w-3xl mx-auto bg-surface-container border border-outline/10 p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-[10px] tracking-widest text-white/40 uppercase block">
                  Agent Name
                </label>
                <div className="bg-surface-container-lowest border border-outline/10 px-4 py-3 text-sm text-white/50">
                  Regulatory Compliance Agent
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] tracking-widest text-white/40 uppercase block">
                  Model
                </label>
                <div className="bg-surface-container-lowest border border-outline/10 px-4 py-3 text-sm text-white/50 flex items-center justify-between">
                  Claude Opus
                  <span className="material-symbols-outlined text-white/20 text-sm">expand_more</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] tracking-widest text-white/40 uppercase block">
                System Instructions
              </label>
              <div className="bg-surface-container-lowest border border-outline/10 px-4 py-3 text-sm text-white/30 h-24">
                You are a regulatory compliance specialist for the health & wellness industry...
              </div>
            </div>
            <div className="flex gap-4">
              {['FDA Guidelines', 'EU Regulations', 'Company SOPs'].map((source) => (
                <span key={source} className="border border-primary/20 px-3 py-1.5 text-[9px] font-label text-primary/60 tracking-wider uppercase">
                  {source}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PlatformCTA
        headline="Ready to Scale Your AI Operations?"
        subtext="Deploy enterprise-grade AI infrastructure for your team. Contact sales for custom pricing."
      />
    </>
  )
}
