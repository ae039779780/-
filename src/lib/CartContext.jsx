import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)
const CartDispatchContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.optionId === action.optionId)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.optionId === action.optionId ? { ...i, qty: i.qty + 1 } : i
          ),
        }
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            productId: action.productId,
            optionId: action.optionId,
            label: action.label,
            name: action.name,
            priceILS: action.priceILS,
            priceUSD: action.priceUSD,
            image: action.image,
            qty: 1,
          },
        ],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.optionId !== action.optionId),
      }
    case 'UPDATE_QTY': {
      if (action.qty <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.optionId !== action.optionId),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.optionId === action.optionId ? { ...i, qty: action.qty } : i
        ),
      }
    }
    case 'ADD_BUNDLE':
      return {
        ...state,
        items: [
          ...state.items,
          {
            productId: action.bundleId,
            optionId: action.bundleId,
            label: action.descriptor,
            name: action.name,
            priceILS: action.priceILS,
            priceUSD: action.priceUSD,
            image: null,
            qty: 1,
            isBundle: true,
          },
        ],
      }
    case 'CLEAR':
      return { ...state, items: [] }
    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: !state.drawerOpen }
    case 'SET_DRAWER':
      return { ...state, drawerOpen: action.open }
    default:
      return state
  }
}

const initialState = {
  items: [],
  drawerOpen: false,
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

export function useCartDispatch() {
  return useContext(CartDispatchContext)
}

export function useCartTotals() {
  const { items } = useCart()
  const totalItems = items.reduce((sum, i) => sum + i.qty, 0)
  const totalILS = items.reduce((sum, i) => sum + i.priceILS * i.qty, 0)
  const totalUSD = items.reduce((sum, i) => sum + i.priceUSD * i.qty, 0)
  return { totalItems, totalILS, totalUSD }
}
