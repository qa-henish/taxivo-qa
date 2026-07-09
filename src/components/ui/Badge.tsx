import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold", {
  variants: {
    variant: {
      brand: "bg-brand-50 text-brand-700",
      gold: "bg-gold-500/10 text-gold-500",
      accent: "bg-accent-50 text-accent-600",
      ink: "bg-ink-100 text-ink-700",
    },
  },
  defaultVariants: {
    variant: "brand",
  },
});

export function Badge({
  children,
  className,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)}>{children}</span>;
}
