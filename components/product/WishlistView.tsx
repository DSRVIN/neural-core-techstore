"use client";

import { useWishlist } from "@/lib/store/wishlist";
import { ProductGrid } from "./ProductGrid";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function WishlistView() {
  const items = useWishlist((s) => s.items);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-stack-xl glass-card rounded-2xl">
        <Icon
          name="favorite"
          className="text-6xl text-on-surface-variant/40 mb-stack-sm"
        />
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
          Aún no tienes favoritos
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
          Guarda los productos que te interesan para encontrarlos fácilmente.
        </p>
        <Button href="/catalogo">EXPLORAR CATÁLOGO</Button>
      </div>
    );
  }

  return <ProductGrid products={items} />;
}
