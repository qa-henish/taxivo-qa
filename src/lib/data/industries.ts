import { Industry } from "@/types/industry";

export const industries: Industry[] = [
  {
    slug: "startups-saas",
    name: "Startups & SaaS",
    description: "Financial infrastructure for early-stage and scaling technology companies.",
    icon: "Rocket",
    challenges: ["Complex cap tables and ESOP tracking", "Investor-ready financial reporting", "Multi-entity or cross-border structuring"],
    solutions: ["Fundraising-ready financial models", "ESOP design and compliance", "Startup India tax benefit filings"],
  },
  {
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    description: "GST, inventory accounting, and multi-channel reconciliation for online and offline retailers.",
    icon: "ShoppingBag",
    challenges: ["Multi-state GST compliance", "Marketplace commission reconciliation", "Inventory valuation across channels"],
    solutions: ["Automated GST return filing", "Marketplace settlement reconciliation", "Real-time inventory and margin reporting"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Cost accounting, input credit optimisation, and compliance for manufacturers.",
    icon: "Factory",
    challenges: ["Input tax credit tracking on raw materials", "Cost audit requirements", "Capital expenditure planning"],
    solutions: ["ITC reconciliation and optimisation", "Cost audit and internal controls", "CapEx and depreciation planning"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Clinics",
    description: "Accounting and compliance tailored for hospitals, clinics, and healthcare practices.",
    icon: "HeartPulse",
    challenges: ["Mixed taxable and exempt GST supplies", "Equipment financing and depreciation", "Practice-level profitability tracking"],
    solutions: ["GST exemption classification support", "Asset financing advisory", "Department-wise profitability reports"],
  },
  {
    slug: "real-estate-construction",
    name: "Real Estate & Construction",
    description: "Project-wise accounting and RERA-aligned compliance for developers and contractors.",
    icon: "Building2",
    challenges: ["Project-wise cost and revenue tracking", "GST on under-construction property", "RERA financial disclosures"],
    solutions: ["Project accounting and WIP reporting", "GST advisory for real estate transactions", "RERA compliance support"],
  },
  {
    slug: "it-technology-services",
    name: "IT & Technology Services",
    description: "Export incentives, SEZ compliance, and payroll support for tech service firms.",
    icon: "Cpu",
    challenges: ["Export of services GST treatment", "SEZ/STPI compliance", "Contractor vs. employee classification"],
    solutions: ["LUT filing and export GST advisory", "SEZ/STPI compliance management", "Payroll structuring for tech teams"],
  },
  {
    slug: "ngos-trusts",
    name: "NGOs & Trusts",
    description: "Section 12A/80G registration and donor-compliant reporting for non-profits.",
    icon: "HandHeart",
    challenges: ["12A/80G registration and renewal", "Donor fund utilisation reporting", "FCRA compliance for foreign contributions"],
    solutions: ["End-to-end 12A/80G filing", "Fund-wise utilisation statements", "FCRA registration and return support"],
  },
  {
    slug: "hospitality-restaurants",
    name: "Hospitality & Restaurants",
    description: "Daily accounting, GST, and cost control for hotels, restaurants, and cafes.",
    icon: "UtensilsCrossed",
    challenges: ["Daily high-volume transaction recording", "GST rate classification across menu items", "Food cost and margin control"],
    solutions: ["Automated daily bookkeeping", "GST classification advisory", "Cost-of-goods and margin dashboards"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
