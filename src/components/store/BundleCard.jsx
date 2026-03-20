import { useCartDispatch } from '../../lib/CartContext'
import { bundles, products } from '../../lib/constants'

export default function BundleSection() {
  const dispatch = useCartDispatch()

  const addBundle = (bundle) => {
    dispatch({
      type: 'ADD_BUNDLE',
      bundleId: bundle.id,
      name: bundle.name,
      descriptor: bundle.descriptor,
      priceILS: bundle.priceILS,
      priceUSD: bundle.priceUSD,
    })
    dispatch({ type: 'SET_DRAWER', open: true })
  }

  return (
    <div className="grid md:grid-cols-3 gap-1">
      {bundles.map((bundle) => {
        const bundleProducts = bundle.items
          .map((id) => products.find((p) => p.id === id))
          .filter(Boolean)

        return (
          <div
            key={bundle.id}
            className="bg-surface-container-low p-8 border border-outline/10 hover:border-primary/20 transition-all glow-shadow"
          >
            <div className="space-y-6">
              <div>
                <span className="font-label text-[10px] text-primary tracking-[0.2em] uppercase">
                  SAVE {bundle.savings}
                </span>
                <h3 className="font-headline text-2xl font-bold mt-2">{bundle.name}</h3>
                <p className="text-white/40 text-sm mt-1">{bundle.descriptor}</p>
              </div>

              <div className="flex gap-2">
                {bundleProducts.map((p) => (
                  <div
                    key={p.id}
                    className="w-12 h-12 bg-black/40 border border-outline/10 overflow-hidden"
                  >
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-outline/10 flex justify-between items-center">
                <span className="font-headline text-xl font-bold text-primary">
                  {bundle.priceILS} ILS
                </span>
                <button
                  onClick={() => addBundle(bundle)}
                  className="bg-primary text-on-primary px-6 py-3 font-label font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
