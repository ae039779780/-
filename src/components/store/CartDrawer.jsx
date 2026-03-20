import { useCart, useCartDispatch, useCartTotals } from '../../lib/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, drawerOpen } = useCart()
  const dispatch = useCartDispatch()
  const { totalItems, totalILS } = useCartTotals()

  if (!drawerOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        onClick={() => dispatch({ type: 'SET_DRAWER', open: false })}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface-container-low border-l border-outline/20 z-[70] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-outline/10">
          <h2 className="font-headline text-xl font-bold tracking-tight">
            CART ({totalItems})
          </h2>
          <button
            onClick={() => dispatch({ type: 'SET_DRAWER', open: false })}
            className="material-symbols-outlined text-white/60 hover:text-white transition-colors"
          >
            close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-white/20 text-5xl block mb-4">
                shopping_bag
              </span>
              <p className="font-label text-xs tracking-widest text-white/40 uppercase">
                Your cart is empty
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.optionId}
                className="flex gap-4 p-4 bg-surface-container border border-outline/10"
              >
                {item.image && (
                  <div className="w-16 h-16 bg-black/40 border border-outline/10 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="font-headline font-bold text-sm">{item.name}</h4>
                  <p className="text-white/40 text-xs font-label">{item.label}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QTY',
                            optionId: item.optionId,
                            qty: item.qty - 1,
                          })
                        }
                        className="w-6 h-6 border border-outline/20 text-xs flex items-center justify-center hover:bg-white/5 transition-colors"
                      >
                        -
                      </button>
                      <span className="font-label text-xs w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QTY',
                            optionId: item.optionId,
                            qty: item.qty + 1,
                          })
                        }
                        className="w-6 h-6 border border-outline/20 text-xs flex items-center justify-center hover:bg-white/5 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-headline font-bold text-sm">
                      {(item.priceILS * item.qty).toLocaleString()} ILS
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-outline/10 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-label text-xs tracking-widest text-white/60 uppercase">
                Total
              </span>
              <span className="font-headline text-2xl font-bold">
                {totalILS.toLocaleString()} ILS
              </span>
            </div>
            <Link
              to="/checkout"
              onClick={() => dispatch({ type: 'SET_DRAWER', open: false })}
              className="block w-full bg-primary text-on-primary py-4 text-center font-headline font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] transition-all"
            >
              Checkout
            </Link>
            <button
              onClick={() => dispatch({ type: 'CLEAR' })}
              className="w-full text-center font-label text-xs tracking-widest text-white/40 hover:text-white transition-colors uppercase py-2"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
