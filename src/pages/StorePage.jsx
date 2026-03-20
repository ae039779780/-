import ProductGrid from '../components/store/ProductGrid'
import BundleSection from '../components/store/BundleCard'

export default function StorePage() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-8">
        <div className="mb-20 space-y-4">
          <p className="font-label text-primary text-xs tracking-[0.2em] uppercase">
            The Recovery System
          </p>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight">
            PRODUCT <br />
            <span className="text-primary">ECOSYSTEM</span>
          </h1>
          <div className="w-24 h-px bg-primary" />
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Each product plays a precise role. Together, they form a complete recovery
            system for demanding lives.
          </p>
        </div>

        <ProductGrid />

        <div className="mt-32 mb-20 space-y-4">
          <p className="font-label text-primary text-xs tracking-[0.2em] uppercase">
            Curated Sets
          </p>
          <h2 className="font-headline text-4xl font-bold tracking-tight">BUNDLES</h2>
          <div className="w-24 h-px bg-primary" />
        </div>

        <BundleSection />

        <div className="mt-32 bg-surface-container-lowest border border-outline/10 p-12 md:p-20 text-center space-y-6">
          <p className="font-label text-primary text-xs tracking-[0.2em] uppercase">
            Coming Soon — Phase 2
          </p>
          <h3 className="font-headline text-3xl font-bold">DAY//AFTR BASE</h3>
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Daily Baseline Capsules. Mineral + routine support for demanding routines.
            Subscribe for priority access.
          </p>
          <span className="inline-block border border-outline/30 px-6 py-3 font-label text-xs tracking-widest uppercase text-white/40">
            Notify Me
          </span>
        </div>
      </div>
    </div>
  )
}
