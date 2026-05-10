import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import EmailInput from '../ui/EmailInput'

export default function PlatformCTA({ headline, subtext, showEmail = false, buttonText, buttonLink }) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-container-lowest pointer-events-none" />
      <div className="container mx-auto px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white">
            {headline}
          </h2>
          {subtext && (
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              {subtext}
            </p>
          )}
          {showEmail ? (
            <EmailInput onSubmit={(email) => console.log('Platform signup:', email)} />
          ) : (
            <Link to={buttonLink || '/'}>
              <Button size="lg">{buttonText || 'Get Started'}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
