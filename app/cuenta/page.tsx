import type { Metadata } from "next";
import Link from "next/link";
import { orders, statusLabels } from "@/lib/data/orders";
import { formatPrice } from "@/lib/data/products";
import { Icon } from "@/components/ui/Icon";
import { clsx } from "@/lib/clsx";

export const metadata: Metadata = {
  title: "Mi cuenta",
  description: "Panel de usuario de NEURAL_CORE.",
};

const sidebarItems = [
  { icon: "dashboard", label: "Resumen", active: true },
  { icon: "package_2", label: "Pedidos", active: false },
  { icon: "favorite", label: "Favoritos", href: "/favoritos", active: false },
  { icon: "location_on", label: "Direcciones", active: false },
  { icon: "settings", label: "Ajustes", active: false },
];

const statusTone: Record<string, string> = {
  delivered: "text-success",
  shipped: "text-secondary",
  processing: "text-tertiary",
};

export default function AccountPage() {
  const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <div className="pt-32 pb-stack-xl px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <div className="flex flex-col lg:flex-row gap-stack-lg">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="glass-card rounded-xl p-6 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-stack-md pb-stack-sm border-b border-white/5">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                <Icon name="person" filled className="text-primary" />
              </div>
              <div>
                <div className="font-body-md text-body-md text-on-surface font-medium">
                  Alex Rivera
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant/70">
                  Miembro Pro
                </div>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              {sidebarItems.map((item) => {
                const cls = clsx(
                  "flex items-center gap-3 px-3 py-3 rounded-lg font-label-md text-label-md tracking-widest transition-colors",
                  item.active
                    ? "bg-primary-container/15 text-primary"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                );
                return item.href ? (
                  <Link key={item.label} href={item.href} className={cls}>
                    <Icon name={item.icon} className="text-[20px]" />
                    {item.label}
                  </Link>
                ) : (
                  <button key={item.label} className={cls}>
                    <Icon name={item.icon} className="text-[20px]" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Contenido */}
        <div className="flex-grow">
          <header className="mb-stack-lg">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              Hola, Alex.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Bienvenido de nuevo a tu panel.
            </p>
          </header>

          {/* Stats bento */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter mb-stack-lg">
            {[
              { label: "Pedidos", value: orders.length, icon: "package_2" },
              {
                label: "Gastado",
                value: formatPrice(totalSpent),
                icon: "payments",
              },
              { label: "Puntos", value: "2.450", icon: "stars" },
              { label: "Cupones", value: 3, icon: "confirmation_number" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-container-low border border-white/5 rounded-xl p-6"
              >
                <Icon
                  name={stat.icon}
                  className="text-primary text-2xl mb-3"
                />
                <div className="font-headline-lg text-headline-lg text-on-surface">
                  {stat.value}
                </div>
                <div className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Pedidos */}
          <div className="bg-surface-container-low border border-white/5 rounded-xl overflow-hidden">
            <h2 className="font-headline-lg text-headline-lg text-on-surface p-6 border-b border-white/5">
              Pedidos recientes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="font-label-sm text-label-sm text-on-surface-variant/70 uppercase tracking-wider">
                    <th className="px-6 py-4 font-medium">Pedido</th>
                    <th className="px-6 py-4 font-medium">Fecha</th>
                    <th className="px-6 py-4 font-medium">Estado</th>
                    <th className="px-6 py-4 font-medium text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-t border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 font-body-md text-body-md text-on-surface">
                        #{order.id}
                      </td>
                      <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">
                        {new Date(order.date).toLocaleDateString("es-ES", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={clsx(
                            "font-label-sm text-label-sm flex items-center gap-1.5",
                            statusTone[order.status]
                          )}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {statusLabels[order.status]}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-body-md text-body-md text-on-surface text-right">
                        {formatPrice(order.total)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
