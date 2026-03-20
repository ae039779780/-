export default function AppEcosystem() {
  return (
    <section className="py-32 bg-surface">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2">
          <div className="relative max-w-sm mx-auto">
            <div className="absolute -inset-10 bg-primary/20 blur-[80px] rounded-full" />
            <div className="relative bg-[#000000] border-[8px] border-surface-container-highest h-[600px] w-full p-6">
              <div className="flex justify-between items-center mb-10">
                <span className="font-headline font-black text-xs">RECOVERY OS</span>
                <span className="material-symbols-outlined text-primary text-sm">bolt</span>
              </div>
              <div className="space-y-8">
                <div>
                  <label className="font-label text-[10px] tracking-widest text-white/40 block mb-2 uppercase">
                    Current Readiness
                  </label>
                  <div className="text-4xl font-headline font-bold text-white">
                    84<span className="text-primary text-xl">%</span>
                  </div>
                  <div className="w-full h-1 bg-surface-container-highest mt-2">
                    <div className="h-full bg-primary w-[84%]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container p-4">
                    <label className="font-label text-[8px] tracking-widest text-white/40 block mb-1 uppercase">
                      Hydration
                    </label>
                    <div className="text-xl font-headline font-bold">2.4L</div>
                  </div>
                  <div className="bg-surface-container p-4 border-l border-primary">
                    <label className="font-label text-[8px] tracking-widest text-white/40 block mb-1 uppercase">
                      Reset Dose
                    </label>
                    <div className="text-xl font-headline font-bold">14:00</div>
                  </div>
                </div>
                <div className="aspect-video bg-surface-container border border-outline/10 flex items-center justify-center">
                  <span className="font-label text-[10px] tracking-[0.2em] text-white/20">
                    BIOMETRIC FEED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="font-headline text-5xl font-bold tracking-tight">
            THE OS FOR <br />
            <span className="text-primary">HUMAN CALIBRATION</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            Our closed-loop ecosystem bridges the gap between clinical supplements and real-time
            data. Tracking hydration cycles, readiness scores, and metabolic windows through a
            high-precision digital interface.
          </p>
          <ul className="space-y-4 font-label text-sm tracking-widest uppercase">
            <li className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-primary" />
              Adaptive Hydration Protocol
            </li>
            <li className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-primary" />
              Circadian Alignment Engine
            </li>
            <li className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-primary" />
              Supplement Schedule Optimizer
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
