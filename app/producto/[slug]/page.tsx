import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getProductBySlug,
  getAllProducts,
  getRelatedProducts,
  formatPrice,
} from "@/lib/data/products";
import { getCategory } from "@/lib/data/categories";
import { AddToCartPanel } from "@/components/product/AddToCartPanel";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { Chip } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(slug);

  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant/70 mb-stack-md uppercase tracking-widest">
        <Link href="/" className="hover:text-primary transition-colors">
          Inicio
        </Link>
        <Icon name="chevron_right" className="text-[16px]" />
        <Link
          href={`/catalogo?categoria=${product.category}`}
          className="hover:text-primary transition-colors"
        >
          {category?.name}
        </Link>
        <Icon name="chevron_right" className="text-[16px]" />
        <span className="text-on-surface">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
        {/* Imagen */}
        <div className="relative aspect-square rounded-2xl overflow-hidden glass-card">
          {product.badge && (
            <div className="absolute top-6 left-6 z-10">
              <Chip tone={product.badge === "sale" ? "error" : "primary"}>
                {product.badge === "sale" ? "Oferta" : "Nuevo"}
              </Chip>
            </div>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Información */}
        <div className="flex flex-col">
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-2">
            {product.brand}
          </span>
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-on-surface font-bold mb-4">
            {product.name}
          </h1>

          <div className="flex items-baseline gap-3 mb-6">
            {product.compareAtPrice && (
              <span className="font-headline-lg text-headline-lg text-on-surface-variant line-through opacity-50">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span className="font-headline-xl text-headline-xl text-on-surface font-bold">
              {formatPrice(product.price)}
            </span>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
            {product.description}
          </p>

          {product.specs && (
            <div className="grid grid-cols-2 gap-4 mb-stack-md">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-surface-container-low border border-white/5 rounded-lg p-4"
                >
                  <div className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider mb-1">
                    {spec.label}
                  </div>
                  <div className="font-body-md text-body-md text-on-surface">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 mb-stack-md font-label-sm text-label-sm">
            <Icon
              name={product.inStock ? "check_circle" : "cancel"}
              className={product.inStock ? "text-success" : "text-error"}
            />
            <span className={product.inStock ? "text-success" : "text-error"}>
              {product.inStock ? "En stock · Envío en 24h" : "Agotado"}
            </span>
          </div>

          <AddToCartPanel product={product} />
        </div>
      </div>

      <ProductCarousel title="También te puede gustar" products={related} />
    </div>
  );
}
