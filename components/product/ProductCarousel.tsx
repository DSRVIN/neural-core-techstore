import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";

/** Carrusel horizontal con scroll-snap. Reutilizado en ficha y carrito. */
export function ProductCarousel({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  if (products.length === 0) return null;

  return (
    <section className="mt-stack-xl">
      <h2 className="font-headline-xl text-headline-xl text-on-surface mb-stack-md">
        {title}
      </h2>
      <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 snap-x">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[280px] w-[280px] snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
