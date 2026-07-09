import { JobOpening } from "@/types/job";

export const jobs: JobOpening[] = [
  {
    id: "j1",
    title: "Senior Tax Associate",
    department: "Direct Tax",
    location: "Mumbai (Hybrid)",
    type: "Full-time",
    description:
      "We're looking for an experienced tax associate to manage individual and corporate income tax filings for a diverse client portfolio.",
    responsibilities: [
      "Prepare and review income tax returns for individuals and businesses",
      "Advise clients on tax planning strategies",
      "Liaise with the Income Tax Department on notices and assessments",
    ],
    requirements: [
      "Chartered Accountant or CA Inter with 3+ years of experience",
      "Strong knowledge of the Income Tax Act",
      "Excellent client communication skills",
    ],
  },
  {
    id: "j2",
    title: "GST Compliance Executive",
    department: "Indirect Tax",
    location: "Mumbai (On-site)",
    type: "Full-time",
    description:
      "Join our indirect tax team to manage GST registration, return filing, and reconciliation for clients across industries.",
    responsibilities: [
      "File monthly and quarterly GST returns",
      "Reconcile input tax credit against GSTR-2B",
      "Support clients during GST audits and assessments",
    ],
    requirements: [
      "B.Com/M.Com with 2+ years of GST compliance experience",
      "Familiarity with the GST portal and e-invoicing",
      "Detail-oriented with strong Excel skills",
    ],
  },
  {
    id: "j3",
    title: "Audit Associate",
    department: "Audit & Assurance",
    location: "Mumbai (Hybrid)",
    type: "Full-time",
    description:
      "We're hiring an audit associate to support statutory and internal audit engagements across our client base.",
    responsibilities: [
      "Conduct audit fieldwork and prepare working papers",
      "Test internal controls and identify process gaps",
      "Draft audit findings and management letters",
    ],
    requirements: [
      "CA Articleship completed or CA Inter qualified",
      "Understanding of auditing standards and the Companies Act",
      "Strong analytical and documentation skills",
    ],
  },
  {
    id: "j4",
    title: "Client Onboarding Intern",
    department: "Operations",
    location: "Mumbai (On-site)",
    type: "Internship",
    description:
      "A great opportunity for a finance student to gain hands-on exposure to client onboarding and compliance operations at a CA firm.",
    responsibilities: [
      "Assist with new client documentation and setup",
      "Coordinate with internal teams to track onboarding checklists",
      "Support the team with data entry and filing preparation",
    ],
    requirements: [
      "Pursuing a degree in Commerce, Finance, or related field",
      "Strong organisational skills and attention to detail",
      "Available for a minimum 3-month internship",
    ],
  },
];
