import type { Metadata } from "next";
import { WishlistView } from "@/components/product/WishlistView";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Tu lista de deseos en NEURAL_CORE.",
};

export default function WishlistPage() {
  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <header className="mb-stack-lg">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
          Favoritos
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          Los productos que has guardado.
        </p>
      </header>

      <WishlistView />
    </div>
  );
}
