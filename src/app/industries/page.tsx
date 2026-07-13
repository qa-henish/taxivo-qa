import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Taxivo brings sector-specific financial and compliance expertise to startups, e-commerce, manufacturing, healthcare, real estate, IT, NGOs, and hospitality businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Sector-Specific Financial Expertise"
        description="Every industry has its own compliance quirks. We bring specialised knowledge, not generic advice."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="bg-white py-16 md:py-24 dark:bg-ink-900">
        <Container className="space-y-6">
          {industries.map((industry, index) => (
            <FadeIn key={industry.slug} delay={(index % 4) * 60}>
              <div className="grid grid-cols-1 gap-8 rounded-2xl border border-ink-100 bg-white p-8 shadow-soft md:grid-cols-[auto_1fr_1fr] md:items-start dark:border-ink-800 dark:bg-ink-800 dark:shadow-none">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-900 text-white">
                  <Icon name={industry.icon} className="h-7 w-7" />
                </span>

                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink-900 dark:text-white">{industry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{industry.description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">Challenges</p>
                  <ul className="mt-2 space-y-2">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-300 dark:text-ink-600" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-400 md:mt-8 dark:text-ink-500">
                    How Taxivo Helps
                  </p>
                  <ul className="mt-2 space-y-2">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600 dark:text-accent-500" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
