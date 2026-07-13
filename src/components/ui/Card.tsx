import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hoverable = true,
}: {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-shadow duration-300 dark:border-ink-800 dark:bg-ink-800 dark:shadow-none",
        hoverable && "hover:shadow-soft-lg dark:hover:border-ink-700",
        className
      )}
    >
      {children}
    </div>
  );
}
