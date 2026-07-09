import { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "income-tax-filing",
    name: "Income Tax Filing",
    shortDescription: "Accurate, on-time ITR filing for individuals, professionals, and businesses.",
    heroDescription:
      "From salaried individuals to complex multi-source income filers, our tax experts ensure your Income Tax Return is filed accurately, on time, and with every eligible deduction claimed.",
    icon: "Receipt",
    featured: true,
    benefits: [
      "Maximised deductions under Sections 80C, 80D, and more",
      "Filing for salary, capital gains, business & freelance income",
      "Advance tax and TDS reconciliation",
      "Dedicated tax expert reviews your return before filing",
    ],
    process: [
      { step: 1, title: "Document Collection", description: "Share Form 16, investment proofs, and income details securely." },
      { step: 2, title: "Computation & Review", description: "Our team computes tax liability and identifies eligible savings." },
      { step: 3, title: "Draft Approval", description: "You review the computed return before we proceed to filing." },
      { step: 4, title: "E-Filing & Acknowledgement", description: "We e-file your return and share the acknowledgement receipt." },
    ],
    faqs: [
      { question: "What is the due date for ITR filing?", answer: "For most individuals, the due date is 31st July of the assessment year, unless extended by the tax department." },
      { question: "Can I file a belated return?", answer: "Yes, belated returns can be filed with applicable late fees before the extended deadline." },
    ],
    relatedServiceSlugs: ["tax-planning", "accounting-bookkeeping"],
  },
  {
    slug: "gst-registration-returns",
    name: "GST Registration & Returns",
    shortDescription: "End-to-end GST registration, monthly filing, and reconciliation support.",
    heroDescription:
      "We handle your complete GST lifecycle — from new registration to monthly and annual return filing — so you stay compliant without the paperwork burden.",
    icon: "Landmark",
    featured: true,
    benefits: [
      "New GST registration within a few working days",
      "GSTR-1, GSTR-3B, and annual return filing",
      "Input tax credit reconciliation",
      "GST notice handling and query resolution",
    ],
    process: [
      { step: 1, title: "Eligibility Check", description: "We assess your turnover and business type to confirm registration requirements." },
      { step: 2, title: "Document Preparation", description: "PAN, address proof, and bank details are compiled for the application." },
      { step: 3, title: "Application Filing", description: "Registration is filed on the GST portal and tracked to approval." },
      { step: 4, title: "Ongoing Return Filing", description: "Monthly/quarterly returns are prepared and filed before due dates." },
    ],
    faqs: [
      { question: "Who needs GST registration?", answer: "Businesses with turnover above the prescribed threshold, or those making inter-state supplies, must register for GST." },
      { question: "What happens if I miss a GST return deadline?", answer: "Late filing attracts interest and late fees; we track your due dates to help you avoid penalties." },
    ],
    relatedServiceSlugs: ["company-registration", "accounting-bookkeeping"],
  },
  {
    slug: "company-registration",
    name: "Company Registration",
    shortDescription: "Private Limited, LLP, and OPC incorporation handled from start to finish.",
    heroDescription:
      "Launch your business on a solid legal foundation. We manage the entire incorporation process — name approval, documentation, and registration — for Private Limited Companies, LLPs, and OPCs.",
    icon: "Building2",
    featured: true,
    benefits: [
      "Guidance on choosing the right business structure",
      "Name approval and DIN/DSC processing",
      "MOA, AOA, and incorporation filing",
      "Post-incorporation compliance checklist included",
    ],
    process: [
      { step: 1, title: "Structure Consultation", description: "We help you choose between Private Limited, LLP, or OPC based on your goals." },
      { step: 2, title: "Name & Digital Signature", description: "Name approval is filed and digital signatures are obtained for directors." },
      { step: 3, title: "Incorporation Filing", description: "SPICe+ forms, MOA, and AOA are prepared and submitted to the ROC." },
      { step: 4, title: "Certificate & Onboarding", description: "You receive your Certificate of Incorporation along with a compliance calendar." },
    ],
    faqs: [
      { question: "How long does company registration take?", answer: "Typically 7–12 working days, depending on document readiness and ROC processing times." },
      { question: "Do I need a physical office to register?", answer: "A registered address is required, but it can be a residential or virtual office address with proof." },
    ],
    relatedServiceSlugs: ["roc-compliance", "startup-advisory"],
  },
  {
    slug: "roc-compliance",
    name: "ROC Compliance",
    shortDescription: "Annual filings, statutory registers, and event-based ROC compliance.",
    heroDescription:
      "Keep your company in good standing with the Registrar of Companies. We manage annual returns, board resolutions, and event-based filings so you never miss a statutory deadline.",
    icon: "ClipboardCheck",
    featured: true,
    benefits: [
      "Annual return (MGT-7) and financial statement (AOC-4) filing",
      "Maintenance of statutory registers and minutes",
      "Director KYC (DIR-3 KYC) filing",
      "Event-based filings for changes in directors, capital, or address",
    ],
    process: [
      { step: 1, title: "Compliance Audit", description: "We review your company's current filing status and pending obligations." },
      { step: 2, title: "Document Preparation", description: "Financial statements and board resolutions are prepared for filing." },
      { step: 3, title: "ROC Filing", description: "Annual and event-based forms are filed on the MCA portal." },
      { step: 4, title: "Compliance Calendar", description: "You receive a year-round calendar of upcoming due dates." },
    ],
    faqs: [
      { question: "What happens if ROC filings are delayed?", answer: "Delayed filings attract a per-day additional fee and can lead to director disqualification in severe cases." },
      { question: "Is ROC compliance required even for a dormant company?", answer: "Yes, annual filings are mandatory regardless of business activity, until the company is formally struck off." },
    ],
    relatedServiceSlugs: ["company-registration", "audit-assurance"],
  },
  {
    slug: "accounting-bookkeeping",
    name: "Accounting & Bookkeeping",
    shortDescription: "Accurate books, monthly MIS reports, and reconciliation you can rely on.",
    heroDescription:
      "Our bookkeeping team maintains accurate, audit-ready books of accounts, giving you real-time visibility into your business finances through monthly MIS reports.",
    icon: "BookOpen",
    featured: true,
    benefits: [
      "Day-to-day bookkeeping on cloud accounting software",
      "Bank and vendor reconciliation",
      "Monthly MIS and profitability reports",
      "Audit-ready books at year-end",
    ],
    process: [
      { step: 1, title: "System Setup", description: "We set up or align your books on a cloud accounting platform." },
      { step: 2, title: "Transaction Recording", description: "Sales, purchases, and expenses are recorded on an ongoing basis." },
      { step: 3, title: "Reconciliation", description: "Bank statements and vendor ledgers are reconciled monthly." },
      { step: 4, title: "Reporting", description: "You receive monthly MIS reports summarising financial performance." },
    ],
    faqs: [
      { question: "Which accounting software do you use?", answer: "We work with popular cloud platforms like Tally, Zoho Books, and QuickBooks based on your preference." },
      { question: "Can you take over books mid-year?", answer: "Yes, we regularly onboard clients mid-year and reconstruct opening balances as needed." },
    ],
    relatedServiceSlugs: ["payroll-services", "audit-assurance"],
  },
  {
    slug: "payroll-services",
    name: "Payroll Services",
    shortDescription: "Payroll processing, statutory deductions, and compliance, fully managed.",
    heroDescription:
      "From salary computation to PF, ESI, and TDS compliance, we manage your entire payroll cycle so your team gets paid accurately and on time, every time.",
    icon: "Users",
    benefits: [
      "Monthly salary processing and payslip generation",
      "PF, ESI, and professional tax compliance",
      "TDS on salary computation and Form 16 issuance",
      "Full and final settlement processing",
    ],
    process: [
      { step: 1, title: "Payroll Setup", description: "Employee master data and salary structures are configured." },
      { step: 2, title: "Monthly Processing", description: "Attendance and variable inputs are processed into final payroll." },
      { step: 3, title: "Statutory Compliance", description: "PF, ESI, and TDS deductions are computed and deposited." },
      { step: 4, title: "Payslips & Reports", description: "Payslips and payroll MIS are shared with HR each cycle." },
    ],
    faqs: [
      { question: "Can you handle payroll for remote/multi-state teams?", answer: "Yes, we manage state-specific professional tax and labour compliance for distributed teams." },
      { question: "Do you issue Form 16 to employees?", answer: "Yes, annual Form 16 generation and issuance is included in our payroll service." },
    ],
    relatedServiceSlugs: ["accounting-bookkeeping", "income-tax-filing"],
  },
  {
    slug: "tax-planning",
    name: "Tax Planning",
    shortDescription: "Proactive, year-round strategies to legally minimise your tax outflow.",
    heroDescription:
      "Effective tax planning goes beyond filing season. We work with you throughout the year to structure income, investments, and business decisions in the most tax-efficient way.",
    icon: "TrendingUp",
    benefits: [
      "Personalised tax-saving investment strategy",
      "Business structuring for tax efficiency",
      "Capital gains and property transaction planning",
      "Advance tax estimation and planning",
    ],
    process: [
      { step: 1, title: "Financial Review", description: "We review your income sources, investments, and financial goals." },
      { step: 2, title: "Strategy Design", description: "A customised tax-saving plan is built around your specific situation." },
      { step: 3, title: "Implementation Support", description: "We guide you through executing the recommended strategies." },
      { step: 4, title: "Periodic Review", description: "Your plan is revisited quarterly to adapt to changing regulations." },
    ],
    faqs: [
      { question: "Is tax planning only for high-income individuals?", answer: "No, tax planning benefits anyone with taxable income by ensuring deductions and exemptions are fully utilised." },
      { question: "How often should a tax plan be reviewed?", answer: "We recommend at least a quarterly review, especially around major financial decisions." },
    ],
    relatedServiceSlugs: ["income-tax-filing", "business-consulting"],
  },
  {
    slug: "audit-assurance",
    name: "Audit & Assurance",
    shortDescription: "Statutory, internal, and tax audits conducted with independence and rigor.",
    heroDescription:
      "Our audit team delivers thorough, independent statutory, internal, and tax audits that give stakeholders confidence in your financial statements.",
    icon: "ShieldCheck",
    benefits: [
      "Statutory audit under the Companies Act",
      "Tax audit under Section 44AB",
      "Internal audit and process controls review",
      "Detailed management letter with actionable insights",
    ],
    process: [
      { step: 1, title: "Audit Planning", description: "We assess risk areas and design a tailored audit approach." },
      { step: 2, title: "Fieldwork", description: "Transactions, controls, and balances are tested against evidence." },
      { step: 3, title: "Findings Review", description: "Observations are discussed with management before finalisation." },
      { step: 4, title: "Report Issuance", description: "The audit report and management letter are issued." },
    ],
    faqs: [
      { question: "Who is required to get a statutory audit?", answer: "All companies registered under the Companies Act, regardless of turnover, require a statutory audit." },
      { question: "What is the difference between statutory and tax audit?", answer: "Statutory audit examines financial statements under company law, while tax audit verifies compliance under the Income Tax Act." },
    ],
    relatedServiceSlugs: ["roc-compliance", "accounting-bookkeeping"],
  },
  {
    slug: "startup-advisory",
    name: "Startup Advisory",
    shortDescription: "From incorporation to fundraising, financial guidance built for founders.",
    heroDescription:
      "We support founders across the startup journey — entity structuring, funding readiness, ESOP design, and compliance — so you can focus on building your product.",
    icon: "Rocket",
    benefits: [
      "Entity structuring and cap table advisory",
      "Financial modelling for fundraising",
      "ESOP pool design and documentation support",
      "Startup India recognition and tax benefits",
    ],
    process: [
      { step: 1, title: "Discovery Call", description: "We understand your business model, stage, and funding plans." },
      { step: 2, title: "Structuring Advisory", description: "Entity and cap table structuring recommendations are shared." },
      { step: 3, title: "Documentation", description: "Financial models, ESOP policies, and compliance documents are prepared." },
      { step: 4, title: "Ongoing Support", description: "We remain on call for investor due diligence and follow-on rounds." },
    ],
    faqs: [
      { question: "Can you help with DPIIT Startup India recognition?", answer: "Yes, we assist with the full recognition process to unlock tax exemptions and other benefits." },
      { question: "Do you support due diligence during fundraising?", answer: "Yes, we prepare financial data rooms and support investor due diligence queries." },
    ],
    relatedServiceSlugs: ["company-registration", "business-consulting"],
  },
  {
    slug: "business-consulting",
    name: "Business Consulting",
    shortDescription: "Strategic financial and operational advisory for growing businesses.",
    heroDescription:
      "Our consulting team partners with business owners on financial strategy, cost optimisation, and growth planning — turning numbers into actionable business decisions.",
    icon: "Briefcase",
    benefits: [
      "Financial health assessment and benchmarking",
      "Cost optimisation and profitability analysis",
      "Business plan and budgeting support",
      "Growth and expansion advisory",
    ],
    process: [
      { step: 1, title: "Business Assessment", description: "We analyse your financials, operations, and market position." },
      { step: 2, title: "Strategy Workshop", description: "Findings are discussed and priorities are aligned with leadership." },
      { step: 3, title: "Action Plan", description: "A practical roadmap with clear milestones is delivered." },
      { step: 4, title: "Implementation Support", description: "We check in periodically to track progress against the plan." },
    ],
    faqs: [
      { question: "Is this a one-time engagement or ongoing?", answer: "We offer both — a one-time strategic review or an ongoing quarterly advisory retainer." },
      { question: "Do you work with businesses outside your registered city?", answer: "Yes, most of our consulting engagements are conducted remotely with periodic in-person reviews." },
    ],
    relatedServiceSlugs: ["tax-planning", "startup-advisory"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
