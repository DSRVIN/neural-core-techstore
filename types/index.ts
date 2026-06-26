/**
 * Tipos centralizados del dominio.
 * Son el "contrato" de datos: hoy los llenan mocks en lib/data,
 * mañana una API/DB real sin tocar los componentes.
 */

export type CategorySlug =
  | "smartphones"
  | "audio"
  | "gaming"
  | "computers"
  | "components"
  | "accessories";

export interface Category {
  slug: CategorySlug;
  name: string;
  icon: string; // nombre del Material Symbol
}

export type ProductBadge = "new" | "sale" | null;

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: CategorySlug;
  brand: string;
  price: number;
  /** Precio anterior si está en oferta */
  compareAtPrice?: number;
  image: string;
  badge?: ProductBadge;
  featured?: boolean;
  inStock: boolean;
  specs?: { label: string; value: string }[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  status: "delivered" | "shipped" | "processing";
  total: number;
  items: number;
}
