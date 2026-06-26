# NEURAL_CORE — TechStore

Tienda premium de tecnología construida con **Next.js 16 (App Router)**, **TypeScript** y **Tailwind CSS**. Estética "deep-tech" (Charcoal Ember) con design system unificado, datos mock tipados y arquitectura preparada para escalar a un ecommerce real.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS 3.4** — design system unificado en `tailwind.config.ts`
- **Zustand** — estado de carrito y favoritos (persistido en `localStorage`)
- Fuente **Geist** vía `next/font` · iconos **Material Symbols**

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:3000)
npm run build    # build de producción
npm run start    # servir el build
```

## Estructura

```
app/                  Rutas (App Router)
  page.tsx            Home
  catalogo/           Catálogo con filtros, orden y paginación
  producto/[slug]/    Ficha de producto (SSG)
  carrito/            Carrito + resumen
  favoritos/          Wishlist
  cuenta/             Dashboard de usuario
  contacto/           Formulario de contacto
  nosotros/           Sobre nosotros
components/
  layout/             Navbar, Footer
  product/            ProductCard, ProductGrid, CatalogView, carrusel…
  cart/               CartView
  ui/                 Button, Chip, Icon, SectionHeader
lib/
  data/               products, categories, orders (fuente única mock)
  store/              cart, wishlist (Zustand)
types/                Contrato de dominio (Product, CartItem, Order…)
```

## Cómo escalar (sin reescribir la UI)

La UI nunca toca los datos directamente: consume las funciones de `lib/data/*`
(`getAllProducts`, `getProductBySlug`, …). Para conectar un backend real:

1. Reemplaza el cuerpo de esas funciones por `fetch`/consultas a tu DB/API.
2. Mantén los tipos de `types/index.ts` como contrato.
3. El carrito/favoritos (`lib/store/*`) puede sincronizarse con el servidor
   añadiendo llamadas dentro de las acciones del store.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. Importa el proyecto en [vercel.com/new](https://vercel.com/new).
3. Framework detectado: **Next.js** (sin configuración extra).
4. Deploy.

> Las imágenes de producto usan URLs remotas de Google ya autorizadas en
> `next.config.mjs` (`remotePatterns`). Para producción se recomienda migrar
> esas imágenes a `public/images` o a un CDN propio.

## Design system

Toda la identidad visual vive en `tailwind.config.ts` (colores, tipografía,
spacing, radios) y en utilidades de `app/globals.css` (`.glass-card`,
`.primary-glow`). Acento oficial: **Coral / Ember `#ff6222`**.
