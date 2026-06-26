"use client";

import { useState } from "react";
import type { Product } from "@/types";
import { useCart } from "@/lib/store/cart";
import { useWishlist } from "@/lib/store/wishlist";
import { Icon } from "@/components/ui/Icon";
import { clsx } from "@/lib/clsx";

export function AddToCartPanel({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCart((s) => s.addItem);
  const toggleWish = useWishlist((s) => s.toggle);
  const isWished = useWishlist((s) => s.items.some((p) => p.id === product.id));

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="flex flex-col gap-stack-md">
      <div className="flex items-center gap-4">
        <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">
          Cantidad
        </span>
        <div className="flex items-center bg-surface-dim border border-white/10 rounded-lg">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Disminuir cantidad"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <Icon name="remove" className="text-sm" />
          </button>
          <span className="font-label-md text-label-md px-4 py-1 text-on-surface min-w-[40px] text-center">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            aria-label="Aumentar cantidad"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <Icon name="add" className="text-sm" />
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleAdd}
          disabled={!product.inStock}
          className={clsx(
            "flex-grow flex items-center justify-center gap-2 font-label-md text-label-md font-bold tracking-widest rounded-lg px-6 py-4 transition-all duration-300 active:scale-95 disabled:opacity-40",
            added
              ? "bg-success text-surface"
              : "bg-primary-container text-white hover:shadow-glow"
          )}
        >
          <Icon name={added ? "check" : "shopping_cart"} className="text-[20px]" />
          {!product.inStock
            ? "Agotado"
            : added
              ? "Añadido al carrito"
              : "Añadir al carrito"}
        </button>

        <button
          onClick={() => toggleWish(product)}
          aria-label="Añadir a favoritos"
          aria-pressed={isWished}
          className="w-14 shrink-0 flex items-center justify-center border border-outline-variant/30 rounded-lg hover:border-primary transition-colors"
        >
          <Icon
            name="favorite"
            filled={isWished}
            className={isWished ? "text-primary" : "text-on-surface-variant"}
          />
        </button>
      </div>
    </div>
  );
}
