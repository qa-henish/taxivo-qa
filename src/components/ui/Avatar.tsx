import { cn } from "@/lib/utils";

const PALETTE = [
  "bg-brand-500",
  "bg-brand-700",
  "bg-ink-700",
  "bg-accent-600",
  "bg-brand-600",
  "bg-ink-800",
];

function hashToIndex(seed: string, length: number) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % length;
}

export function Avatar({
  initials,
  seed,
  size = "md",
  className,
}: {
  initials: string;
  seed?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const colorClass = PALETTE[hashToIndex(seed ?? initials, PALETTE.length)];

  const sizeClasses = {
    sm: "h-10 w-10 text-sm",
    md: "h-12 w-12 text-base",
    lg: "h-16 w-16 text-lg",
  };

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-heading font-semibold text-white",
        colorClass,
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
