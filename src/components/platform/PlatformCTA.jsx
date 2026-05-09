import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import EmailInput from '../ui/EmailInput'

export default function PlatformCTA({ headline = 'Ready to Deploy Your AI Team?', subtext = 'Start building with 2,400 free credits per day. No credit card required.', variant = 'email' }) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-container-lowest pointer-events-none" />
      <div className="container mx-auto px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            {headline.split(' ').map((word, i) => (
              i === headline.split(' ').length - 1
                ? <span key={i} className="text-primary">{word}</span>
                : <span key={i}>{word} </span>
            ))}
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
            {subtext}
          </p>
          {variant === 'email' ? (
            <EmailInput onSubmit={(email) => console.log('Platform signup:', email)} />
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/platform/pricing">
                <Button size="lg">Get Started Free</Button>
              </Link>
              <Link to="/platform/agents">
                <Button variant="secondary" size="lg">Explore Agents</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
