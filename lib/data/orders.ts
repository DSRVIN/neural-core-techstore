import type { Order } from "@/types";

/** Pedidos mock para el dashboard de cuenta. */
export const orders: Order[] = [
  { id: "NC-10428", date: "2026-06-18", status: "delivered", total: 1348, items: 2 },
  { id: "NC-10391", date: "2026-06-02", status: "shipped", total: 449, items: 1 },
  { id: "NC-10377", date: "2026-05-24", status: "processing", total: 288.99, items: 3 },
  { id: "NC-10350", date: "2026-05-11", status: "delivered", total: 999, items: 1 },
];

export const statusLabels: Record<Order["status"], string> = {
  delivered: "Entregado",
  shipped: "En camino",
  processing: "Procesando",
};
