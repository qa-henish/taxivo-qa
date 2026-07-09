import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { FaqCategoryFilter } from "@/components/shared/FaqCategoryFilter";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to frequently asked questions about Taxivo's services, pricing, and compliance process.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Can't find what you're looking for? Reach out and our team will be happy to help."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <FaqCategoryFilter faqs={faqs} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
