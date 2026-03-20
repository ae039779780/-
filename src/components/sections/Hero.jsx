import Button from '../ui/Button'
import { heroImage } from '../../lib/constants'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px]" />
      </div>
      <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-2xl">
          <p className="font-label text-primary uppercase tracking-[0.3em] mb-6 text-xs md:text-sm">
            RECOVERY SYSTEM FOR DEMANDING LIVES
          </p>
          <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
            RESET FOR THE <br />
            <span className="text-white">MORNING AFTER</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
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
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="aspect-square bg-surface-container-low border-t border-outline/20 flex items-center justify-center relative overflow-hidden">
            <img
              alt="RESET Powder"
              className="w-4/5 h-4/5 object-contain mix-blend-lighten"
              src={heroImage}
            />
            <div className="absolute bottom-6 right-6 text-right">
              <span className="block font-label text-[10px] text-white/40 tracking-[0.2em]">
                FORMULA NO.
              </span>
              <span className="block font-headline font-bold text-primary text-xl">
                R-01.ALPHA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
