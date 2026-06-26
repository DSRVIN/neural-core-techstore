import type { Category } from "@/types";

/** Categorías de la tienda — usadas por navbar, home y filtros del catálogo. */
export const categories: Category[] = [
  { slug: "smartphones", name: "Smartphones", icon: "smartphone" },
  { slug: "audio", name: "Audio", icon: "headphones" },
  { slug: "gaming", name: "Gaming", icon: "stadia_controller" },
  { slug: "computers", name: "Computers", icon: "computer" },
  { slug: "components", name: "Components", icon: "memory" },
  { slug: "accessories", name: "Accessories", icon: "cable" },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
