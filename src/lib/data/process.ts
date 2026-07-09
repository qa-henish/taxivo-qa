import { ProcessStep } from "@/types/process";

export const engagementProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We understand your business, current compliance status, and financial goals.",
    icon: "PhoneCall",
  },
  {
    step: 2,
    title: "Custom Proposal",
    description: "You receive a tailored scope of work and transparent pricing, no surprises.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Onboarding",
    description: "We set up secure document sharing and transition any existing records.",
    icon: "ClipboardList",
  },
  {
    step: 4,
    title: "Ongoing Delivery",
    description: "Your dedicated team manages filings, reporting, and advisory on a set cadence.",
    icon: "RefreshCcw",
  },
  {
    step: 5,
    title: "Continuous Review",
    description: "Regular check-ins ensure your financial strategy evolves with your business.",
    icon: "TrendingUp",
  },
];
