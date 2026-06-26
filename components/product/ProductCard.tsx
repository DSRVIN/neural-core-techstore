"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { formatPrice } from "@/lib/data/products";
import { useCart } from "@/lib/store/cart";
import { useWishlist } from "@/lib/store/wishlist";
import { Icon } from "@/components/ui/Icon";
import { Chip } from "@/components/ui/Chip";
import { clsx } from "@/lib/clsx";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCart((s) => s.addItem);
  const toggleWish = useWishlist((s) => s.toggle);
  const isWished = useWishlist((s) => s.items.some((p) => p.id === product.id));

  return (
    <div className="group flex flex-col relative">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <Chip tone={product.badge === "sale" ? "error" : "primary"}>
            {product.badge === "sale" ? "Oferta" : "Nuevo"}
          </Chip>
        </div>
      )}

      {/* Favorito */}
      <button
        onClick={() => toggleWish(product)}
        aria-label={isWished ? "Quitar de favoritos" : "Añadir a favoritos"}
        aria-pressed={isWished}
        className="absolute top-4 right-4 z-10 p-2 bg-surface/50 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
      >
        <Icon
          name="favorite"
          filled={isWished}
          className={clsx(
            "text-[20px]",
            isWished ? "text-primary" : "text-on-surface-variant hover:text-primary"
          )}
        />
      </button>

      <Link
        href={`/producto/${product.slug}`}
        className="block h-64 overflow-hidden relative rounded-2xl mb-6 bg-surface-container-low border border-white/5 group-hover:border-white/20 transition-colors"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </Link>

      <div className="flex flex-col flex-grow px-1">
        <Link href={`/producto/${product.slug}`}>
          <h3 className="font-body-lg text-body-lg text-on-surface mb-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-body-md text-body-md text-on-surface-variant/70 mb-4 flex-grow line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-baseline gap-2">
            {product.compareAtPrice && (
              <span className="font-body-md text-body-md text-on-surface-variant line-through opacity-50">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span className="text-[22px] text-on-surface font-medium">
              {formatPrice(product.price)}
            </span>
          </div>

          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            aria-label={`Añadir ${product.name} al carrito`}
            className="text-on-surface-variant hover:text-primary p-2 rounded-full hover:bg-white/5 transition-colors disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <Icon name={product.inStock ? "add_shopping_cart" : "block"} />
          </button>
        </div>
        {!product.inStock && (
          <span className="font-label-sm text-label-sm text-error/80 mt-2 uppercase tracking-wider">
            Agotado
          </span>
        )}
      </div>
    </div>
  );
}
