import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function PricingTier({ tier }) {
  const { name, price, period, credits, description, features, cta, highlighted } = tier

  return (
    <div
      className={`relative p-8 bg-surface-container-low border ${
        highlighted ? 'border-primary/30' : 'border-outline/10'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 text-[10px] font-label tracking-widest uppercase">
          MOST POPULAR
        </div>
      )}

      <p className="font-label text-xs tracking-widest uppercase text-white/40">{name}</p>

      <div className="flex items-baseline gap-1 mt-4">
        {price === 0 ? (
          <span className="font-headline text-5xl font-bold">Free</span>
        ) : (
          <>
            <span className="font-headline text-2xl font-bold">$</span>
            <span className="font-headline text-5xl font-bold">{price}</span>
            <span className="text-sm text-white/40">{period}</span>
          </>
        )}
      </div>

      <div className="flex items-center gap-2 text-primary text-sm font-label mt-2">
        <span className="material-symbols-outlined text-sm">toll</span>
        {credits} credits
      </div>

      <p className="text-white/50 text-sm mt-4">{description}</p>

      <ul className="space-y-3 mt-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link to="/dashboard" className="block">
          <Button
            variant={highlighted ? 'primary' : 'secondary'}
            size="lg"
            className="w-full"
          >
            {cta}
          </Button>
        </Link>
      </div>
    </div>
  )
}
