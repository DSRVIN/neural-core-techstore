"use client";

import Image from "next/image";
import { useCart, selectCartSubtotal } from "@/lib/store/cart";
import { formatPrice } from "@/lib/data/products";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Chip } from "@/components/ui/Chip";
import { getCategory } from "@/lib/data/categories";

export function CartView() {
  const items = useCart((s) => s.items);
  const updateQuantity = useCart((s) => s.updateQuantity);
  const removeItem = useCart((s) => s.removeItem);
  const subtotal = useCart(selectCartSubtotal);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-stack-xl glass-card rounded-2xl">
        <Icon
          name="shopping_cart"
          className="text-6xl text-on-surface-variant/40 mb-stack-sm"
        />
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
          Tu carrito está vacío
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
          Descubre nuestra selección de tecnología premium.
        </p>
        <Button href="/catalogo">EXPLORAR CATÁLOGO</Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Items */}
      <div className="lg:col-span-8 space-y-stack-md">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="bg-surface-container-low border border-white/5 rounded-xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:border-white/20 transition-colors group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="w-32 h-32 shrink-0 bg-surface-dim rounded-lg border border-white/10 overflow-hidden relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="128px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex-grow flex flex-col sm:flex-row justify-between w-full">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mb-2">
                    <Chip>{getCategory(product.category)?.name}</Chip>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface">
                    {product.name}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 mt-1">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center bg-surface-dim border border-white/10 rounded-lg">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity - 1)
                      }
                      aria-label="Disminuir"
                      className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <Icon name="remove" className="text-sm" />
                    </button>
                    <span className="font-label-md text-label-md px-4 py-1 text-on-surface">
                      {quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity + 1)
                      }
                      aria-label="Aumentar"
                      className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <Icon name="add" className="text-sm" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1 font-label-sm text-label-sm"
                  >
                    <Icon name="delete" className="text-[16px]" /> Eliminar
                  </button>
                </div>
              </div>

              <div className="text-right mt-4 sm:mt-0">
                <span className="font-headline-xl text-headline-xl text-on-surface">
                  {formatPrice(product.price * quantity)}
                </span>
                {quantity > 1 && (
                  <span className="block font-label-sm text-label-sm text-on-surface-variant mt-1">
                    {formatPrice(product.price)} c/u
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resumen */}
      <div className="lg:col-span-4">
        <div className="bg-surface-container-high rounded-xl p-8 sticky top-32 border border-white/5">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 border-b border-white/5 pb-4">
            Resumen del pedido
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between font-body-lg text-body-lg text-on-surface-variant">
              <span>Subtotal</span>
              <span className="text-on-surface">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between font-body-lg text-body-lg text-on-surface-variant">
              <span>Envío</span>
              <span className="text-on-surface">Calculado al pagar</span>
            </div>
            <div className="flex justify-between font-body-lg text-body-lg text-on-surface-variant">
              <span>Impuestos</span>
              <span className="text-on-surface">Calculado al pagar</span>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 mb-8 flex justify-between items-end">
            <span className="font-headline-lg text-headline-lg text-on-surface">
              Total
            </span>
            <span className="font-display-lg text-[40px] leading-[48px] font-bold text-on-surface tracking-tighter">
              {formatPrice(subtotal)}
            </span>
          </div>
          <Button className="w-full" size="lg">
            Proceder al pago
            <Icon name="arrow_forward" className="text-[20px]" />
          </Button>
          <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
            <Icon name="lock" className="text-[16px]" />
            Pago cifrado y seguro
          </div>
        </div>
      </div>
    </div>
  );
}
