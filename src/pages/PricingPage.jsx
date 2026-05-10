import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import PricingTier from '../components/platform/PricingTier'
import PricingComparison from '../components/platform/PricingComparison'
import { pricingTiers } from '../lib/platformConstants'

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-8">
        <SectionHeading
          label="PRICING"
          heading="Scale Your AI Workforce"
        />

        {/* Billing toggle (visual only) */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`font-label text-xs tracking-widest uppercase cursor-pointer transition-colors ${
              billingPeriod === 'monthly' ? 'text-white' : 'text-white/40'
            }`}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly
          </span>
          <span
            className={`font-label text-xs tracking-widest uppercase cursor-pointer transition-colors ${
              billingPeriod === 'annual' ? 'text-white' : 'text-white/40'
            }`}
            onClick={() => setBillingPeriod('annual')}
          >
            Annual
          </span>
        </div>

        {/* Pricing tiers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {pricingTiers.map((tier) => (
            <PricingTier key={tier.name} tier={tier} />
          ))}
        </div>

        {/* Feature comparison */}
        <div className="mb-32">
          <SectionHeading
            label="COMPARE PLANS"
            heading="Feature Breakdown"
          />
          <PricingComparison />
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white">
            Start Building Today
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
            Deploy your AI team in minutes. Free forever on the starter plan.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button variant="primary" size="lg">Start Free</Button>
            </Link>
            <Link to="/platform/enterprise">
              <Button variant="secondary" size="lg">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
