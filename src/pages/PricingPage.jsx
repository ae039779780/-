import SectionHeading from '../components/ui/SectionHeading'
import PricingTier from '../components/platform/PricingTier'
import PricingComparison from '../components/platform/PricingComparison'
import PlatformCTA from '../components/platform/PlatformCTA'
import { pricingTiers } from '../lib/platformConstants'
import { useState } from 'react'

const faqItems = [
  {
    q: 'What are credits?',
    a: 'Credits are the unit of work for AI agents. Each agent action — research, content generation, analysis — consumes credits based on complexity. Simple tasks use fewer credits; multi-step workflows use more.',
  },
  {
    q: 'Can I switch plans?',
    a: 'Yes. You can upgrade or downgrade at any time. When upgrading, you get immediate access to new features. When downgrading, your current plan runs until the billing cycle ends.',
  },
  {
    q: 'What happens when I run out of credits?',
    a: 'Free plan credits reset daily. Plus and Pro credits reset monthly. You can purchase additional credit packs at any time without changing your plan.',
  },
  {
    q: 'Do unused credits roll over?',
    a: 'Free plan daily credits do not roll over. Plus and Pro monthly credits expire at the end of each billing cycle.',
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen pt-24 pb-0">
      <div className="container mx-auto px-8">
        <div className="mb-20 space-y-4 text-center">
          <p className="font-label text-primary text-xs tracking-[0.2em] uppercase">
            Pricing
          </p>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
            SCALE YOUR <br />
            <span className="text-primary">AI WORKFORCE</span>
          </h1>
          <div className="w-24 h-px bg-primary mx-auto" />
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Start free with 2,400 daily credits. Scale to enterprise-grade AI operations with Pro.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-1 mb-32">
          {pricingTiers.map((tier) => (
            <PricingTier key={tier.name} {...tier} />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-32">
          <SectionHeading
            label="COMPARE PLANS"
            heading="Feature Breakdown"
          />
          <PricingComparison />
        </div>

        {/* FAQ */}
        <div className="mb-32 max-w-3xl mx-auto">
          <SectionHeading
            label="FAQ"
            heading="Common Questions"
          />
          <div className="space-y-0">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-outline/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                >
                  <span className="font-headline text-sm font-bold group-hover:text-primary transition-colors">
                    {item.q}
                  </span>
                  <span className="material-symbols-outlined text-white/30 text-sm transition-transform" style={{
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    expand_more
                  </span>
                </button>
                {openFaq === i && (
                  <div className="pb-5 text-white/50 text-sm leading-relaxed animate-fade-in-up">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <PlatformCTA
        headline="Start Building Today"
        subtext="Deploy your AI team in minutes. Free forever on the starter plan."
        variant="buttons"
      />
    </div>
  )
}
