import { PricingTier } from "@/types/pricing";

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹2,999",
    billingNote: "/month",
    description: "For freelancers and small businesses that need the essentials covered.",
    features: [
      "Monthly bookkeeping (up to 100 transactions)",
      "1 GST return filing per month",
      "Annual income tax filing",
      "Email support",
    ],
    notIncluded: ["Payroll processing", "Dedicated relationship manager", "Quarterly advisory calls"],
    ctaLabel: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹7,999",
    billingNote: "/month",
    description: "For growing companies that need full-scope compliance and reporting.",
    features: [
      "Monthly bookkeeping (up to 500 transactions)",
      "GST returns + reconciliation",
      "ROC annual compliance",
      "Payroll processing (up to 15 employees)",
      "Quarterly advisory calls",
      "Priority email & phone support",
    ],
    highlighted: true,
    ctaLabel: "Choose Growth",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "For established businesses with complex, high-volume financial operations.",
    features: [
      "Unlimited bookkeeping & reconciliation",
      "Full GST, ROC, and audit compliance",
      "Unlimited payroll processing",
      "Dedicated relationship manager",
      "Monthly CFO-style advisory sessions",
      "Custom MIS & board reporting",
    ],
    ctaLabel: "Talk to Us",
  },
];
