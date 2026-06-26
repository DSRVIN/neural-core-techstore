"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/types";

interface WishlistState {
  items: Product[];
  toggle: (product: Product) => void;
  remove: (productId: string) => void;
  has: (productId: string) => boolean;
}

/** Lista de favoritos persistida en localStorage. */
export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (product) =>
        set((state) =>
          state.items.some((p) => p.id === product.id)
            ? { items: state.items.filter((p) => p.id !== product.id) }
            : { items: [...state.items, product] }
        ),
      remove: (productId) =>
        set((state) => ({
          items: state.items.filter((p) => p.id !== productId),
        })),
      has: (productId) => get().items.some((p) => p.id === productId),
    }),
    { name: "techstore-wishlist" }
  )
);

export const selectWishlistCount = (state: WishlistState) => state.items.length;
