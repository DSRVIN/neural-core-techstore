import { clsx } from "@/lib/clsx";

interface IconProps {
  name: string;
  className?: string;
  /** Relleno del símbolo (0 = outline, 1 = filled) */
  filled?: boolean;
}

/** Wrapper de Material Symbols Outlined. */
export function Icon({ name, className, filled = false }: IconProps) {
  return (
    <span
      className={clsx("material-symbols-outlined select-none", className)}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
