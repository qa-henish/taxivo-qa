import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-600 sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold text-ink-900 md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-ink-500 md:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
