export default function TestimonialBar() {
  return (
    <section className="bg-surface-container-lowest py-16 border-y border-outline/10">
      <div className="container mx-auto px-8 text-center space-y-8">
        <p className="font-label text-[10px] tracking-[0.3em] uppercase text-white/30">
          TRUSTED BY 500+ TEAMS WORLDWIDE
        </p>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {['ACME', 'NEXUS', 'ORBIT', 'VERTEX', 'HELIOS'].map((name) => (
            <span key={name} className="text-white/10 font-headline text-xl font-bold">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
