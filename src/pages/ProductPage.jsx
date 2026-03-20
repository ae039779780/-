import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { products } from '../lib/constants'
import { useCartDispatch } from '../lib/CartContext'

export default function ProductPage() {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)
  const dispatch = useCartDispatch()
  const [selectedOption, setSelectedOption] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-headline text-4xl font-bold">Product Not Found</h1>
          <Link to="/store" className="text-primary font-label text-sm tracking-widest uppercase hover:underline">
            Back to Store
          </Link>
        </div>
      </div>
    )
  }

  const option = product.options[selectedOption]

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      productId: product.id,
      optionId: option.id,
      label: option.label,
      name: product.fullName,
      priceILS: option.priceILS,
      priceUSD: option.priceUSD,
      image: product.image,
    })
    dispatch({ type: 'SET_DRAWER', open: true })
  }

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-8">
        <Link
          to="/store"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white font-label text-xs tracking-widest uppercase mb-12 transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Store
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="aspect-square bg-surface-container-low border-t border-outline/20 overflow-hidden relative">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-headline text-4xl font-bold text-white/10">
                    {product.name}
                  </span>
                </div>
              )}
              <div className="absolute bottom-6 right-6 text-right">
                <span className="block font-label text-[10px] text-white/40 tracking-[0.2em]">
                  {product.sku}
                </span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <span className="font-label text-primary text-xs tracking-[0.2em] uppercase">
                {product.category}
              </span>
              <h1 className="font-headline text-5xl font-bold tracking-tight mt-2">
                {product.name}
              </h1>
              <p className="text-white/40 text-sm font-label mt-1">{product.descriptor}</p>
            </div>

            <p className="text-white/70 text-lg leading-relaxed">
              {product.longDescription}
            </p>

            {/* Ingredients */}
            <div>
              <h3 className="font-label text-xs tracking-widest uppercase text-white/40 mb-3">
                Key Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="border border-outline/20 px-3 py-1.5 text-xs font-label text-white/60"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Flavors */}
            {product.flavors.length > 0 && (
              <div>
                <h3 className="font-label text-xs tracking-widest uppercase text-white/40 mb-3">
                  Available Flavors
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor) => (
                    <span
                      key={flavor}
                      className="border border-primary/20 px-3 py-1.5 text-xs font-label text-primary/80"
                    >
                      {flavor}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Format + Serving */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-outline/10">
              <div>
                <span className="font-label text-[10px] tracking-widest text-white/40 uppercase block mb-1">
                  Format
                </span>
                <span className="text-sm">{product.format}</span>
              </div>
              <div>
                <span className="font-label text-[10px] tracking-widest text-white/40 uppercase block mb-1">
                  Serving
                </span>
                <span className="text-sm">{product.servingSize}</span>
              </div>
            </div>

            {/* Option Selector */}
            <div className="space-y-3">
              <h3 className="font-label text-xs tracking-widest uppercase text-white/40">
                Select Option
              </h3>
              <div className="flex gap-2">
                {product.options.map((opt, i) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedOption(i)}
                    className={`px-6 py-3 font-label text-xs tracking-widest uppercase transition-all cursor-pointer ${
                      i === selectedOption
                        ? 'bg-primary text-on-primary'
                        : 'border border-outline/20 text-white/60 hover:border-primary/30'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price + Add to Cart */}
            <div className="flex items-center gap-8">
              <div>
                <span className="font-headline text-4xl font-bold">{option.priceILS}</span>
                <span className="text-white/40 text-sm ml-2">ILS</span>
                <span className="text-white/20 text-sm ml-3">(${option.priceUSD} USD)</span>
              </div>
            </div>

            {product.status === 'available' ? (
              <button
                onClick={addToCart}
                className="w-full bg-primary text-on-primary py-5 font-headline font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all cursor-pointer"
              >
                Add to Cart
              </button>
            ) : (
              <div className="w-full border border-outline/20 py-5 text-center font-label text-xs tracking-widest uppercase text-white/40">
                Coming Soon
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
