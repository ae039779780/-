import SectionHeading from '../ui/SectionHeading'
import ProductCard from '../ui/ProductCard'
import { products } from '../../lib/constants'

export default function ProductEcosystem() {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="The Ecosystem"
          heading="Three Pillars of Recovery"
          subtext="Each product plays a role. Together, they form a complete recovery system."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
