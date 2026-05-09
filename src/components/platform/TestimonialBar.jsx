export default function TestimonialBar() {
  return (
    <section className="py-16 bg-surface-container-lowest border-y border-outline/10">
      <div className="container mx-auto px-8 text-center space-y-6">
        <p className="font-label text-[10px] tracking-[0.3em] text-white/30 uppercase">
          Trusted by forward-thinking teams
        </p>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {['DTC Brands', 'Health & Wellness', 'E-Commerce', 'SaaS Teams', 'Agencies'].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-surface-container border border-outline/10 flex items-center justify-center">
                <span className="text-white/20 text-[8px] font-bold font-headline">{label[0]}</span>
              </div>
              <span className="font-label text-xs tracking-wider text-white/25 uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
