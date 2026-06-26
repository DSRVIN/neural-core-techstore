import type { Product } from "@/types";

/**
 * Catálogo mock — fuente única de datos de producto.
 * Reemplazar el array por un fetch a DB/API mantiene intacta toda la UI:
 * los componentes consumen las funciones get* de abajo, no el array.
 */
const IMG = {
  phone: "/images/phone.png",
  headphones: "/images/headphones.png",
  keyboard: "/images/keyboard.png",
  ssd: "/images/ssd.png",
  cable: "/images/cable.png",
  powerbank: "/images/powerbank.png",
  hub: "/images/hub.png",
  watch: "/images/watch.png",
  hub2: "/images/hub2.png",
  hero: "/images/hero.png",
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "quantum-x1",
    name: "Quantum X1",
    description:
      "Smartphone insignia con chip neural de 3nm, pantalla AMOLED 144Hz y batería de día completo. Ingeniería sin concesiones.",
    category: "smartphones",
    brand: "Neural_Core",
    price: 999,
    image: IMG.phone,
    badge: "new",
    featured: true,
    inStock: true,
    specs: [
      { label: "Pantalla", value: "6.7\" AMOLED 144Hz" },
      { label: "Chip", value: "Neural N3 (3nm)" },
      { label: "Almacenamiento", value: "256 GB" },
      { label: "Cámara", value: "Triple 50MP" },
    ],
  },
  {
    id: "p2",
    slug: "core-prism-12",
    name: "Core Prism 12",
    description:
      "256GB en acabado Obsidian Black. Marco de titanio y el sistema de cámaras más avanzado de la serie Prism.",
    category: "smartphones",
    brand: "Neural_Core",
    price: 899,
    image: IMG.phone,
    featured: true,
    inStock: true,
    specs: [
      { label: "Pantalla", value: "6.5\" OLED 120Hz" },
      { label: "Marco", value: "Titanio grado 5" },
      { label: "Almacenamiento", value: "256 GB" },
    ],
  },
  {
    id: "p3",
    slug: "sonic-void-pro",
    name: "Sonic Void Pro",
    description:
      "Auriculares over-ear con cancelación activa de ruido adaptativa y 40h de autonomía. Audio de alta fidelidad.",
    category: "audio",
    brand: "Synapse",
    price: 349,
    image: IMG.headphones,
    badge: "new",
    featured: true,
    inStock: true,
    specs: [
      { label: "Drivers", value: "40mm dinámicos" },
      { label: "ANC", value: "Adaptativo -45dB" },
      { label: "Batería", value: "40h (ANC on)" },
    ],
  },
  {
    id: "p4",
    slug: "aura-void-x9",
    name: "Aura Void X9",
    description:
      "Over-ear premium con audio espacial y materiales de aluminio mecanizado. El estándar del estudio.",
    category: "audio",
    brand: "Synapse",
    price: 449,
    compareAtPrice: 529,
    image: IMG.headphones,
    badge: "sale",
    inStock: true,
  },
  {
    id: "p5",
    slug: "nova-console",
    name: "Nova Console",
    description:
      "Sistema de gaming de próxima generación con ray tracing en tiempo real y 8K a 120fps.",
    category: "gaming",
    brand: "QuantumX",
    price: 499,
    image: IMG.hub2,
    featured: true,
    inStock: true,
    specs: [
      { label: "GPU", value: "RDNA neural" },
      { label: "Resolución", value: "8K @ 120fps" },
      { label: "SSD", value: "2 TB NVMe" },
    ],
  },
  {
    id: "p6",
    slug: "tactile-zero-g",
    name: "Tactile Zero-G",
    description:
      "Teclado mecánico de bajo perfil con switches lineales y retroiluminación por tecla.",
    category: "accessories",
    brand: "Synapse",
    price: 199,
    image: IMG.keyboard,
    inStock: true,
    specs: [
      { label: "Switches", value: "Lineales hot-swap" },
      { label: "Conexión", value: "BT 5.3 / 2.4G / USB-C" },
    ],
  },
  {
    id: "p7",
    slug: "quantum-nvme-2tb",
    name: "Quantum NVMe 2TB",
    description:
      "Solución de almacenamiento PCIe Gen4 ultrarrápida con disipador integrado. Hasta 7.400 MB/s.",
    category: "components",
    brand: "QuantumX",
    price: 249,
    image: IMG.ssd,
    badge: "new",
    inStock: true,
    specs: [
      { label: "Interfaz", value: "PCIe Gen4 x4" },
      { label: "Lectura", value: "7.400 MB/s" },
      { label: "Capacidad", value: "2 TB" },
    ],
  },
  {
    id: "p8",
    slug: "corelink-pro-cable",
    name: "CoreLink Pro Cable",
    description: "Cable Thunderbolt 4 trenzado de 100W PD. 2m de durabilidad militar.",
    category: "accessories",
    brand: "Neural_Core",
    price: 39,
    image: IMG.cable,
    inStock: true,
  },
  {
    id: "p9",
    slug: "nexus-power-20k",
    name: "Nexus Power 20K",
    description:
      "Cargador portátil de 20.000mAh con pantalla OLED y carga rápida de 65W.",
    category: "accessories",
    brand: "QuantumX",
    price: 89.99,
    compareAtPrice: 129.99,
    image: IMG.powerbank,
    badge: "sale",
    inStock: true,
  },
  {
    id: "p10",
    slug: "synapse-hub-v2",
    name: "Synapse Hub V2",
    description: "Docking station Thunderbolt 4 de 10 puertos en aluminio mecanizado.",
    category: "computers",
    brand: "Synapse",
    price: 199.99,
    image: IMG.hub,
    inStock: true,
  },
  {
    id: "p11",
    slug: "chrono-sync-v2",
    name: "Chrono Sync v2",
    description: "Smartwatch de titanio con pantalla sin bisel y monitor de salud avanzado.",
    category: "accessories",
    brand: "Neural_Core",
    price: 450,
    image: IMG.watch,
    featured: true,
    inStock: true,
  },
  {
    id: "p12",
    slug: "nexus-node",
    name: "Nexus Node",
    description: "Hub central de automatización del hogar con IA local y conectividad universal.",
    category: "components",
    brand: "Neural_Core",
    price: 129,
    image: IMG.hub2,
    inStock: false,
  },
];

export const HERO_IMAGE = IMG.hero;

// --- API de acceso (la UI sólo usa estas funciones) ---

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .concat(products.filter((p) => p.category !== current.category))
    .slice(0, limit);
}

/** Formatea precio en USD. */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
