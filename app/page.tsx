import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { getFeaturedProducts, HERO_IMAGE } from "@/lib/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div className="pt-24 pb-stack-xl">
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl mt-stack-md">
        <div className="relative w-full rounded-2xl overflow-hidden glass-card aspect-[3/4] sm:aspect-[21/9] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={HERO_IMAGE}
              alt="Quantum X1"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
          <div className="relative z-10 p-8 sm:p-12 md:p-24 max-w-2xl">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm uppercase border border-primary/30 backdrop-blur-sm">
              Nueva generación
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 font-bold leading-tight">
              Absolute Power.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                Infinite Potential.
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
              Experimenta la cima de la computación móvil con el nuevo Quantum X1.
              Ingeniería para quienes exigen rendimiento sin concesiones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/producto/quantum-x1" size="lg">
                COMPRAR AHORA
              </Button>
              <Button href="/catalogo" variant="secondary" size="lg">
                VER CATÁLOGO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl">
        <SectionHeader title="Explora categorías" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-gutter">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/catalogo?categoria=${cat.slug}`}
              className="group glass-card glass-card-hover rounded-xl p-8 flex flex-col items-center justify-center aspect-square relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-50 z-0" />
              <Icon
                name={cat.icon}
                className="text-4xl mb-4 text-on-surface-variant group-hover:text-primary transition-colors duration-300 z-10"
              />
              <h3 className="font-label-md text-label-md text-on-surface z-10 uppercase tracking-widest text-center">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Destacados */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeader
          title="Productos destacados"
          action={{ label: "Ver todo", href: "/catalogo" }}
        />
        <ProductGrid products={featured} />
      </section>
    </div>
  );
}
