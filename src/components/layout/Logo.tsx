import Link from "next/link";
import { Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg",
          inverse ? "bg-white" : "bg-brand-500"
        )}
      >
        <Landmark className={cn("h-5 w-5", inverse ? "text-brand-600" : "text-white")} />
      </span>
      <span
        className={cn(
          "font-heading text-xl font-bold tracking-tight",
          inverse ? "text-white" : "text-ink-900"
        )}
      >
        Taxivo
      </span>
    </Link>
  );
}
