"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/lib/data/categories";
import { useCart, selectCartCount } from "@/lib/store/cart";
import { Icon } from "@/components/ui/Icon";
import { clsx } from "@/lib/clsx";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const count = useCart(selectCartCount);

  // Evita hidratación inconsistente del badge (localStorage)
  useEffect(() => setMounted(true), []);

  // Cierra el menú móvil al navegar
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10 shadow-[0_0_40px_rgba(255,98,34,0.05)]">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20">
        <Link
          href="/"
          className="font-headline-xl text-headline-xl font-bold tracking-tighter text-on-surface active:scale-95 transition-transform"
        >
          NEURAL_CORE
        </Link>

        {/* Enlaces desktop */}
        <div className="hidden lg:flex gap-2 items-center">
          {categories.map((cat) => {
            const href = `/catalogo?categoria=${cat.slug}`;
            return (
              <Link
                key={cat.slug}
                href={href}
                className="text-on-surface-variant/70 hover:text-on-surface hover:bg-white/5 transition-all duration-300 px-3 py-2 rounded-lg font-label-md text-label-md tracking-widest"
              >
                {cat.name}
              </Link>
            );
          })}
        </div>

        {/* Iconos de acción */}
        <div className="flex gap-2 items-center">
          <Link
            href="/favoritos"
            aria-label="Favoritos"
            className={clsx(
              "hover:bg-white/5 transition-all duration-300 p-2 rounded-full active:scale-95",
              pathname === "/favoritos"
                ? "text-primary"
                : "text-on-surface hover:text-primary"
            )}
          >
            <Icon name="favorite" />
          </Link>

          <Link
            href="/carrito"
            aria-label="Carrito"
            className={clsx(
              "relative hover:bg-white/5 transition-all duration-300 p-2 rounded-full active:scale-95",
              pathname === "/carrito"
                ? "text-primary"
                : "text-on-surface hover:text-primary"
            )}
          >
            <Icon name="shopping_cart" />
            {mounted && count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary-container text-white text-[10px] font-bold min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          <Link
            href="/cuenta"
            aria-label="Mi cuenta"
            className={clsx(
              "hover:bg-white/5 transition-all duration-300 p-2 rounded-full active:scale-95",
              pathname === "/cuenta"
                ? "text-primary"
                : "text-on-surface hover:text-primary"
            )}
          >
            <Icon name="person" />
          </Link>

          {/* Toggle menú móvil */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
            aria-expanded={open}
            className="lg:hidden text-on-surface hover:text-primary p-2 rounded-full hover:bg-white/5 transition-all active:scale-95"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="lg:hidden glass-card border-t border-outline-variant/10 px-margin-mobile py-stack-sm">
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/catalogo?categoria=${cat.slug}`}
                className="flex items-center gap-3 text-on-surface-variant hover:text-primary hover:bg-white/5 transition-all px-3 py-3 rounded-lg font-label-md text-label-md tracking-widest"
              >
                <Icon name={cat.icon} className="text-[20px]" />
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
