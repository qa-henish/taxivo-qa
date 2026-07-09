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
        "rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-shadow duration-300",
        hoverable && "hover:shadow-soft-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
