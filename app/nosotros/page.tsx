import type { Metadata } from "next";
import Image from "next/image";
import { HERO_IMAGE, getAllProducts } from "@/lib/data/products";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "La historia y la filosofía detrás de NEURAL_CORE.",
};

const values = [
  {
    icon: "bolt",
    title: "Rendimiento",
    text: "Cada producto que seleccionamos pasa por pruebas exigentes. Si no rinde, no entra.",
  },
  {
    icon: "diamond",
    title: "Calidad premium",
    text: "Materiales nobles, acabados impecables y diseño industrial de primer nivel.",
  },
  {
    icon: "support_agent",
    title: "Soporte real",
    text: "Personas que entienden de tecnología, no scripts. Te acompañamos antes y después.",
  },
];

const stats = [
  { value: "12K+", label: "Clientes" },
  { value: "98%", label: "Satisfacción" },
  { value: "24h", label: "Envío" },
  { value: "5★", label: "Valoración" },
];

export default function AboutPage() {
  const products = getAllProducts();
  const bento = [products[2].image, products[4].image, products[6].image];

  return (
    <div className="pt-32 pb-stack-xl">
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl">
        <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/20 text-primary font-label-sm text-label-sm uppercase border border-primary/30">
          Nuestra historia
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 font-bold max-w-3xl">
          Ingeniería al servicio de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
            quienes exigen más.
          </span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          NEURAL_CORE nació de una idea simple: la tecnología premium no debería
          ser complicada de comprar. Curamos lo mejor del hardware mundial y lo
          ponemos a tu alcance con una experiencia a la altura.
        </p>
      </section>

      {/* Misión / Visión */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="glass-card rounded-2xl p-10">
            <Icon name="target" className="text-primary text-3xl mb-4" />
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
              Misión
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Acercar el hardware de máximo rendimiento a profesionales y
              entusiastas, con una curaduría honesta y un servicio impecable.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-10">
            <Icon name="visibility" className="text-primary text-3xl mb-4" />
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-3">
              Visión
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ser la referencia regional en tecnología premium, donde cada
              compra se sienta tan cuidada como el producto que la motiva.
            </p>
          </div>
        </div>
      </section>

      {/* Bento de imágenes */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-gutter h-[480px]">
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden glass-card">
            <Image src={HERO_IMAGE} alt="Showroom" fill sizes="50vw" className="object-cover opacity-80" />
          </div>
          {bento.map((src, i) => (
            <div
              key={i}
              className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden glass-card"
            >
              <Image src={src} alt="Producto" fill sizes="25vw" className="object-cover opacity-80" />
            </div>
          ))}
          <div className="col-span-1 row-span-1 glass-card rounded-2xl flex flex-col items-center justify-center p-4 text-center">
            <span className="font-display-lg-mobile text-display-lg-mobile text-primary font-bold">
              2024
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Fundada
            </span>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {values.map((v) => (
            <div key={v.title} className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center">
                <Icon name={v.icon} className="text-primary text-2xl" />
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                {v.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter bg-surface-container-low border border-white/5 rounded-2xl p-stack-md">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display-lg-mobile text-display-lg-mobile text-on-surface font-bold">
                {s.value}
              </div>
              <div className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
          ¿Listo para dar el salto?
        </h2>
        <Button href="/catalogo" size="lg">
          EXPLORAR CATÁLOGO
        </Button>
      </section>
    </div>
  );
}
