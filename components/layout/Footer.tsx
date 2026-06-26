import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

const footerLinks = {
  Tienda: [
    { label: "Catálogo", href: "/catalogo" },
    { label: "Favoritos", href: "/favoritos" },
    { label: "Carrito", href: "/carrito" },
  ],
  Compañía: [
    { label: "Sobre nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "Mi cuenta", href: "/cuenta" },
  ],
  Legal: [
    { label: "Términos", href: "#" },
    { label: "Privacidad", href: "#" },
    { label: "Garantía", href: "#" },
  ],
};

const social = [
  { icon: "public", label: "Web", href: "#" },
  { icon: "alternate_email", label: "Email", href: "#" },
  { icon: "chat", label: "Chat", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-stack-xl pb-stack-md border-t border-outline-variant/10 mt-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-stack-lg">
        <div className="col-span-2 md:col-span-1">
          <div className="font-headline-lg text-headline-lg font-black text-on-surface mb-4">
            NEURAL_CORE
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant/70 mb-6 max-w-xs">
            Ingeniería de alto rendimiento para quienes no aceptan
            compromisos.
          </p>
          <div className="flex gap-3">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors"
              >
                <Icon name={s.icon} className="text-[20px]" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface mb-4">
              {title}
            </h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center text-on-surface-variant/50 font-label-sm text-label-sm max-w-container-max mx-auto px-margin-desktop pt-stack-md border-t border-outline-variant/10">
        © {new Date().getFullYear()} NEURAL_CORE. ENGINEERED FOR PERFORMANCE.
      </div>
    </footer>
  );
}
