import type { Metadata } from "next";
import { getAllProducts } from "@/lib/data/products";
import { getCategory } from "@/lib/data/categories";
import { CatalogView } from "@/components/product/CatalogView";
import type { CategorySlug } from "@/types";

export const metadata: Metadata = {
  title: "Catálogo",
  description: "Explora toda la tecnología premium de NEURAL_CORE.",
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;
  const category = categoria ? getCategory(categoria) : undefined;
  const products = getAllProducts();

  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <header className="mb-stack-lg">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
          {category ? category.name : "Catálogo"}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          Hardware de alto rendimiento, seleccionado con criterio.
        </p>
      </header>

      <CatalogView
        products={products}
        initialCategory={category?.slug as CategorySlug | undefined}
      />
    </div>
  );
}
