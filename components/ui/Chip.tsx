import { clsx } from "@/lib/clsx";

type Tone = "primary" | "secondary" | "error";

const tones: Record<Tone, string> = {
  primary: "bg-primary/20 text-primary border-primary/30",
  secondary: "bg-secondary/20 text-secondary border-secondary/30",
  error: "bg-error/20 text-error border-error/30",
};

export function Chip({
  children,
  tone = "primary",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-block px-2 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider border backdrop-blur-sm",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
