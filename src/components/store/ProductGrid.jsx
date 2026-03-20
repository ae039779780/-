import { Link } from 'react-router-dom'
import { products } from '../../lib/constants'

export default function ProductGrid() {
  const available = products.filter((p) => p.status === 'available')

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
      {available.map((product) => (
        <Link
          key={product.id}
          to={`/store/${product.id}`}
          className="group bg-surface-container-low p-8 border-t border-outline/20 hover:bg-surface-container transition-all duration-500 glow-shadow"
        >
          <div className="mb-8 aspect-square overflow-hidden bg-black/40 border border-outline/10">
            <img
              alt={`${product.name} product`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              src={product.image}
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="font-headline text-2xl font-bold">{product.name}</h3>
              <span className="font-label text-[10px] text-primary border border-primary/30 px-2 py-1">
                {product.sku}
              </span>
            </div>
            <p className="text-white/40 text-xs font-label">{product.descriptor}</p>
            <p className="text-white/60 text-sm leading-relaxed">{product.description}</p>
            <div className="pt-4 flex justify-between items-center border-t border-outline/10">
              <span className="font-headline font-bold text-primary">
                {product.priceILS} ILS
              </span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
