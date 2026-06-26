import Link from "next/link";

export function SectionHeader({
  title,
  action,
}: {
  title: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex justify-between items-end mb-stack-sm">
      <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold">
        {title}
      </h2>
      {action && (
        <Link
          href={action.href}
          className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors tracking-widest"
        >
          {action.label} →
        </Link>
      )}
    </div>
  );
}
