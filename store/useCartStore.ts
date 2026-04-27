import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item._id === product._id,
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item._id === product._id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "shopping-cart",
    },
  ),
);
