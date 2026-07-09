import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { PricingTier } from "@/types/pricing";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-2xl border p-8",
        tier.highlighted
          ? "border-brand-500 bg-brand-900 text-white shadow-soft-lg"
          : "border-ink-100 bg-white shadow-soft"
      )}
    >
      {tier.highlighted && (
        <Badge variant="gold" className="mb-4 w-fit bg-white/10 text-gold-500">
          Most Popular
        </Badge>
      )}
      <h3 className={cn("font-heading text-xl font-bold", tier.highlighted ? "text-white" : "text-ink-900")}>
        {tier.name}
      </h3>
      <p className={cn("mt-2 text-sm", tier.highlighted ? "text-brand-100" : "text-ink-500")}>
        {tier.description}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className={cn("font-heading text-4xl font-bold", tier.highlighted ? "text-white" : "text-ink-900")}>
          {tier.price}
        </span>
        {tier.billingNote && (
          <span className={cn("text-sm", tier.highlighted ? "text-brand-200" : "text-ink-500")}>
            {tier.billingNote}
          </span>
        )}
      </div>

      <ul className="mt-8 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              className={cn("mt-0.5 h-4 w-4 shrink-0", tier.highlighted ? "text-accent-500" : "text-accent-600")}
            />
            <span className={tier.highlighted ? "text-brand-50" : "text-ink-600"}>{feature}</span>
          </li>
        ))}
        {tier.notIncluded?.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <X className={cn("mt-0.5 h-4 w-4 shrink-0", tier.highlighted ? "text-brand-300" : "text-ink-300")} />
            <span className={tier.highlighted ? "text-brand-300" : "text-ink-400"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={tier.highlighted ? "inverse" : "primary"}
        className="mt-8 w-full"
      >
        {tier.ctaLabel}
      </Button>
    </div>
  );
}
