/**
 * Mini utilidad para componer clases condicionalmente,
 * evitando una dependencia externa para algo tan simple.
 */
export type ClassValue = string | number | false | null | undefined;

export function clsx(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
