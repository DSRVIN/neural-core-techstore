"use client";

import { useMemo, useState } from "react";
import type { Product, CategorySlug } from "@/types";
import { categories } from "@/lib/data/categories";
import { ProductGrid } from "./ProductGrid";
import { Icon } from "@/components/ui/Icon";
import { clsx } from "@/lib/clsx";

type SortKey = "featured" | "newest" | "price-asc" | "price-desc";

const PAGE_SIZE = 6;

export function CatalogView({
  products,
  initialCategory,
}: {
  products: Product[];
  initialCategory?: CategorySlug;
}) {
  const [selectedCats, setSelectedCats] = useState<Set<CategorySlug>>(
    initialCategory ? new Set([initialCategory]) : new Set()
  );
  const [brands, setBrands] = useState<Set<string>>(new Set());
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const allBrands = useMemo(
    () => Array.from(new Set(products.map((p) => p.brand))).sort(),
    [products]
  );

  const filtered = useMemo(() => {
    const minN = min ? parseFloat(min) : 0;
    const maxN = max ? parseFloat(max) : Infinity;
    const result = products.filter((p) => {
      if (selectedCats.size && !selectedCats.has(p.category)) return false;
      if (brands.size && !brands.has(p.brand)) return false;
      if (p.price < minN || p.price > maxN) return false;
      return true;
    });
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort(
          (a, b) => (b.badge === "new" ? 1 : 0) - (a.badge === "new" ? 1 : 0)
        );
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return result;
  }, [products, selectedCats, brands, min, max, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice(
    (current - 1) * PAGE_SIZE,
    current * PAGE_SIZE
  );

  function toggleCat(slug: CategorySlug) {
    setPage(1);
    setSelectedCats((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  }

  function toggleBrand(brand: string) {
    setPage(1);
    setBrands((prev) => {
      const next = new Set(prev);
      next.has(brand) ? next.delete(brand) : next.add(brand);
      return next;
    });
  }

  const checkboxCls =
    "form-checkbox rounded bg-surface border-outline-variant/30 text-primary-container focus:ring-primary/50 focus:ring-offset-0";

  const sidebar = (
    <div className="flex flex-col gap-stack-md">
      <div>
        <h3 className="font-body-lg text-body-lg text-on-surface mb-stack-sm border-b border-outline-variant/20 pb-2">
          Categoría
        </h3>
        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <label className="flex items-center gap-2 cursor-pointer text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">
                <input
                  type="checkbox"
                  className={checkboxCls}
                  checked={selectedCats.has(cat.slug)}
                  onChange={() => toggleCat(cat.slug)}
                />
                {cat.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-body-lg text-body-lg text-on-surface mb-stack-sm border-b border-outline-variant/20 pb-2">
          Precio
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={min}
            onChange={(e) => {
              setMin(e.target.value);
              setPage(1);
            }}
            className="w-full bg-surface-dim border border-outline-variant/20 rounded-md px-3 py-2 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none"
          />
          <span className="text-on-surface-variant">-</span>
          <input
            type="number"
            placeholder="Max"
            value={max}
            onChange={(e) => {
              setMax(e.target.value);
              setPage(1);
            }}
            className="w-full bg-surface-dim border border-outline-variant/20 rounded-md px-3 py-2 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none"
          />
        </div>
      </div>

      <div>
        <h3 className="font-body-lg text-body-lg text-on-surface mb-stack-sm border-b border-outline-variant/20 pb-2">
          Marca
        </h3>
        <ul className="flex flex-col gap-2">
          {allBrands.map((brand) => (
            <li key={brand}>
              <label className="flex items-center gap-2 cursor-pointer text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md">
                <input
                  type="checkbox"
                  className={checkboxCls}
                  checked={brands.has(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-gutter">
      {/* Sidebar desktop */}
      <aside className="hidden md:block w-64 shrink-0">{sidebar}</aside>

      {/* Sidebar móvil colapsable */}
      <div className="md:hidden">
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className="flex items-center gap-2 text-on-surface font-label-md text-label-md tracking-widest border border-outline-variant/20 rounded-lg px-4 py-3 w-full justify-center"
        >
          <Icon name="tune" className="text-[20px]" />
          Filtros
        </button>
        {filtersOpen && (
          <div className="mt-stack-sm glass-card rounded-xl p-6">{sidebar}</div>
        )}
      </div>

      {/* Grid */}
      <div className="flex-grow flex flex-col gap-stack-md">
        <div className="flex justify-between items-center bg-surface-container-low p-4 rounded-lg border border-outline-variant/10">
          <span className="text-on-surface-variant font-body-md text-body-md">
            {filtered.length}{" "}
            {filtered.length === 1 ? "producto" : "productos"}
          </span>
          <div className="flex items-center gap-4">
            <label className="text-on-surface-variant font-body-md text-body-md hidden sm:block">
              Ordenar:
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-surface-dim border border-outline-variant/20 rounded-md px-4 py-2 text-on-surface font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary/50 outline-none"
            >
              <option value="featured">Destacados</option>
              <option value="newest">Novedades</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
            </select>
          </div>
        </div>

        <ProductGrid products={visible} />

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-stack-lg">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={current === 1}
              aria-label="Página anterior"
              className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-on-surface-variant hover:bg-white/10 transition-colors disabled:opacity-30"
            >
              <Icon name="chevron_left" className="text-sm" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={clsx(
                  "w-10 h-10 rounded flex items-center justify-center font-body-md text-body-md transition-all",
                  n === current
                    ? "bg-primary-container text-white shadow-glow"
                    : "border border-white/20 text-on-surface-variant hover:bg-white/10"
                )}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={current === totalPages}
              aria-label="Página siguiente"
              className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-on-surface-variant hover:bg-white/10 transition-colors disabled:opacity-30"
            >
              <Icon name="chevron_right" className="text-sm" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
