import Button from '../ui/Button'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-micro uppercase text-white"
        >
          DAY//AFTR
        </a>
        <Button
          size="sm"
          onClick={() =>
            document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Get Early Access
        </Button>
      </div>
    </nav>
  )
}
