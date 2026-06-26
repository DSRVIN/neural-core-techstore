import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { getFeaturedProducts } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Revisa los productos de tu carrito.",
};

export default function CartPage() {
  const recommendations = getFeaturedProducts().slice(0, 4);

  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <header className="mb-stack-lg">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
          Tu carrito
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          Revisa y confirma antes del pago seguro.
        </p>
      </header>

      <CartView />

      <ProductCarousel title="También te puede gustar" products={recommendations} />
    </div>
  );
}
