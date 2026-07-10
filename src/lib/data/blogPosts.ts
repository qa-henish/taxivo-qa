import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    slug: "income-tax-deductions-you-might-be-missing",
    title: "5 Income Tax Deductions You Might Be Missing",
    excerpt:
      "Beyond Section 80C, there are several lesser-known deductions that can meaningfully reduce your tax liability.",
    category: "Tax Planning",
    author: { name: "Ritu Sharma", role: "Senior Tax Consultant", initials: "RS" },
    publishedAt: "2026-05-12",
    readTimeMinutes: 6,
    tags: ["Income Tax", "Deductions", "Tax Planning"],
    coverImageUrl: "/images/blog/income-tax-deductions.jpg",
    coverImageAlt: "Tax documents, calculator, and pen laid out on a desk for income tax review",
    content: [
      "Most taxpayers are familiar with Section 80C, but the Income Tax Act offers several other deductions that often go unclaimed.",
      "Section 80D allows deductions for health insurance premiums, including a separate limit for parents. Section 80TTA and 80TTB cover interest earned on savings accounts and deposits for senior citizens respectively.",
      "If you're paying rent but not receiving HRA, Section 80GG can still provide relief. Similarly, interest paid on education loans is fully deductible under Section 80E with no upper limit.",
      "Reviewing these lesser-known provisions with a tax advisor before the financial year ends can uncover meaningful savings that are easy to miss when filing in a hurry.",
    ],
  },
  {
    slug: "gst-return-filing-checklist-for-small-businesses",
    title: "GST Return Filing Checklist for Small Businesses",
    excerpt:
      "A practical checklist to keep your monthly and quarterly GST filings accurate and penalty-free.",
    category: "GST",
    author: { name: "Karthik Iyer", role: "GST Advisory Lead", initials: "KI" },
    publishedAt: "2026-04-28",
    readTimeMinutes: 7,
    tags: ["GST", "Compliance", "Small Business"],
    coverImageUrl: "/images/blog/gst-checklist.jpg",
    coverImageAlt: "Person reviewing GST filing documents at a desk",
    content: [
      "GST compliance can feel overwhelming for small business owners juggling multiple responsibilities. A structured monthly checklist makes the process far more manageable.",
      "Start by reconciling your sales register with GSTR-1 data before the 11th of each month. Cross-check input tax credit against GSTR-2B to avoid mismatches that could trigger notices.",
      "Ensure e-invoices, where applicable, are generated correctly and within the required timeframe. Finally, review your GSTR-3B summary carefully before submission — errors here are harder to correct after filing.",
      "Building this checklist into your monthly routine, or delegating it to a compliance partner, significantly reduces the risk of late fees and scrutiny.",
    ],
  },
  {
    slug: "choosing-the-right-business-structure-in-india",
    title: "Choosing the Right Business Structure in India",
    excerpt:
      "Private Limited, LLP, or OPC? Here's how to decide which entity type fits your business stage and goals.",
    category: "Company Registration",
    author: { name: "Naina Verma", role: "Startup Advisory Partner", initials: "NV" },
    publishedAt: "2026-04-10",
    readTimeMinutes: 8,
    tags: ["Startups", "Company Registration", "Legal Structure"],
    coverImageUrl: "/images/blog/business-structure.jpg",
    coverImageAlt: "Close-up of a hand signing a business incorporation document",
    content: [
      "One of the earliest and most consequential decisions founders make is choosing their business structure. The right choice depends on funding plans, liability protection, and compliance appetite.",
      "A Private Limited Company is best suited for startups planning to raise external funding, given its familiarity with investors and flexibility in equity structuring.",
      "An LLP offers a simpler compliance burden and is well suited for professional services firms or businesses that don't plan to raise venture capital.",
      "A One Person Company (OPC) works well for solo founders who want limited liability without bringing in a co-founder immediately, though it has restrictions on scaling.",
      "Whichever structure you choose, it's worth revisiting the decision as your business evolves — conversion between structures is possible, but planning ahead saves time and cost.",
    ],
  },
  {
    slug: "understanding-roc-annual-compliance-deadlines",
    title: "Understanding ROC Annual Compliance Deadlines",
    excerpt:
      "A year-round view of the ROC filings every Indian company needs to track, and what happens if you miss them.",
    category: "Compliance",
    author: { name: "Suresh Nambiar", role: "Company Secretary", initials: "SN" },
    publishedAt: "2026-03-22",
    readTimeMinutes: 5,
    tags: ["ROC", "Compliance", "Company Law"],
    coverImageUrl: "/images/blog/roc-compliance.jpg",
    coverImageAlt: "Close-up of a desk calendar used to track compliance deadlines",
    content: [
      "Every registered company in India, regardless of size or activity level, has annual obligations to the Registrar of Companies that are easy to overlook amid daily operations.",
      "Form AOC-4, covering the company's financial statements, is typically due within 30 days of the AGM. Form MGT-7, the annual return, follows within 60 days of the AGM.",
      "Directors must also complete their annual DIR-3 KYC to keep their DIN active, and any changes in directorship, registered office, or capital structure require event-based filings.",
      "Missing these deadlines results in escalating additional fees per day of delay, and in serious cases, can lead to director disqualification. Building a compliance calendar at the start of the financial year is the simplest way to stay ahead.",
    ],
  },
  {
    slug: "financial-planning-tips-for-new-startups",
    title: "Financial Planning Tips for New Startups",
    excerpt:
      "Early-stage financial discipline sets the foundation for sustainable growth. Here's where to start.",
    category: "Startup Advisory",
    author: { name: "Naina Verma", role: "Startup Advisory Partner", initials: "NV" },
    publishedAt: "2026-02-15",
    readTimeMinutes: 6,
    tags: ["Startups", "Financial Planning", "Fundraising"],
    coverImageUrl: "/images/blog/startup-planning.jpg",
    coverImageAlt: "Team collaborating around a whiteboard while planning startup finances",
    content: [
      "In the early days, it's tempting to defer financial process in favour of building the product. But a few disciplined habits early on pay off significantly later.",
      "Separate business and personal finances from day one, even before formal incorporation. This makes bookkeeping, tax filing, and eventual due diligence far simpler.",
      "Maintain a rolling 12-month cash flow forecast. Investors and lenders will ask for this, and it forces founders to think ahead about runway and burn rate.",
      "Finally, invest in proper bookkeeping earlier than feels necessary. Clean historical records are one of the most common gaps founders discover — usually during their first fundraise, when it's hardest to fix retroactively.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
