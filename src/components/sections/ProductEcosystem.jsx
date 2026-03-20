import ProductCard from '../ui/ProductCard'
import { products } from '../../lib/constants'

export default function ProductEcosystem() {
  return (
    <section id="products" className="py-32">
      <div className="container mx-auto px-8">
        <div className="mb-20 space-y-4">
          <h2 className="font-headline text-4xl font-bold tracking-tight">PRODUCT ECOSYSTEM</h2>
          <div className="w-24 h-px bg-primary" />
        </div>
        <div className="grid md:grid-cols-3 gap-1">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
