import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/shared/PageHero";
import { PricingCard } from "@/components/shared/PricingCard";
import { FaqAccordionItem } from "@/components/shared/FaqAccordionItem";
import { CTASection } from "@/components/shared/CTASection";
import { pricingTiers } from "@/lib/data/pricing";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, predictable pricing for Taxivo's accounting, tax, and compliance services — from freelancers to enterprise businesses.",
};

export default function PricingPage() {
  const pricingFaqs = faqs.filter((faq) => faq.category === "pricing");

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple, Transparent Pricing"
        description="No hidden fees, no surprise invoices. Choose the plan that fits your business, or talk to us for a custom quote."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />

      <section className="bg-white py-16 md:py-24 dark:bg-ink-900">
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <FadeIn key={tier.id} delay={index * 80}>
                <PricingCard tier={tier} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {pricingFaqs.length > 0 && (
        <section className="bg-ink-50 py-16 md:py-24 dark:bg-ink-800/40">
          <Container>
            <SectionHeading eyebrow="Questions" title="Pricing FAQs" />
            <div className="mx-auto mt-10 max-w-2xl">
              {pricingFaqs.map((faq, index) => (
                <FaqAccordionItem key={faq.id} faq={faq} defaultOpen={index === 0} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection title="Need a Custom Plan?" description="Tell us about your business and we'll put together a tailored quote." />
    </>
  );
}
