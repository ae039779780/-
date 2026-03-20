import EmailInput from '../ui/EmailInput'

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-container-lowest pointer-events-none" />
      <div className="container mx-auto px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">
            JOIN THE <br />
            <span className="text-primary">VANGUARD</span>
          </h2>
          <p className="font-label text-white/50 text-xs tracking-[0.3em] uppercase">
            Limited release alpha access opens Q3 2026.
          </p>
          <EmailInput onSubmit={(email) => console.log('Waitlist signup:', email)} />
        </div>
      </div>
    </section>
  )
}
