export interface PricingTier {
  id: string;
  name: string;
  price: string;
  billingNote?: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  highlighted?: boolean;
  ctaLabel: string;
}
