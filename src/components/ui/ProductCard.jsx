export default function ProductCard({ name, sku, category, description, image }) {
  return (
    <div className="group bg-surface-container-low p-8 border-t border-outline/20 hover:bg-surface-container transition-all duration-500 glow-shadow">
      <div className="mb-12 aspect-[4/5] overflow-hidden bg-black/40 border border-outline/10">
        <img
          alt={`${name} product`}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          src={image}
        />
      </div>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <h4 className="font-headline text-3xl font-bold text-white">{name}</h4>
          <span className="font-label text-[10px] text-primary border border-primary/30 px-2 py-1">
            {sku}
          </span>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
        <div className="pt-4 flex justify-between items-center border-t border-outline/10">
          <span className="font-label text-xs tracking-widest text-white/40">{category}</span>
          <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
            arrow_forward
          </span>
        </div>
      </div>
    </div>
  )
}
