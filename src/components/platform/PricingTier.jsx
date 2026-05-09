import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export default function PricingTier({ name, price, period, credits, description, features, cta, highlighted }) {
  return (
    <div className={`relative p-8 space-y-6 border transition-all ${
      highlighted
        ? 'border-primary/30 bg-surface-container-low'
        : 'border-outline/10 bg-surface-container-lowest'
    }`}>
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 font-label text-[9px] tracking-[0.2em] uppercase font-bold">
          Most Popular
        </div>
      )}

      <div>
        <h3 className="font-headline text-2xl font-bold">{name}</h3>
        <p className="text-white/40 text-sm mt-1">{description}</p>
      </div>

      <div className="py-4 border-y border-outline/10">
        <div className="flex items-baseline gap-1">
          {price === 0 ? (
            <span className="font-headline text-5xl font-bold">Free</span>
          ) : (
            <>
              <span className="font-headline text-5xl font-bold">${price}</span>
              <span className="text-white/40 text-sm">{period}</span>
            </>
          )}
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-white/40 font-label tracking-wider">
          <span className="material-symbols-outlined text-primary text-sm">toll</span>
          {credits} credits
        </div>
      </div>

      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-white/60">
            <span className="material-symbols-outlined text-primary text-sm">check</span>
            {feature}
          </li>
        ))}
      </ul>

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
  )
}
