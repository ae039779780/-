import Button from '../ui/Button'
import GlowEffect from '../ui/GlowEffect'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <GlowEffect position="center" intensity="medium" />
      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-accent-cyan text-xs font-semibold uppercase tracking-micro mb-6 animate-fade-in-up">
          Recovery System for Demanding Lives
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}>
          Reset for the<br />Morning After
        </h1>
        <p className="text-accent-silver/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
           style={{ animationDelay: '0.2s' }}>
          A premium recovery line built for long nights, travel, heat, low sleep,
          and high-output days — combining powder, tea, and luxury confectionery
          in one sharp system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
             style={{ animationDelay: '0.3s' }}>
          <Button
            size="lg"
            onClick={() =>
              document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get Early Access
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View Product System
          </Button>
        </div>
      </div>
    </section>
  )
}
