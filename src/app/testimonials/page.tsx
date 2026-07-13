import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { TestimonialsFilter } from "@/components/shared/TestimonialsFilter";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Hear from businesses and individuals across India who trust Taxivo with their tax, compliance, and financial advisory needs.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Stories"
        title="Trusted by Businesses Across India"
        description="From startups to established enterprises, here's what our clients have to say about working with Taxivo."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />

      <section className="bg-white py-16 md:py-24 dark:bg-ink-900">
        <Container>
          <TestimonialsFilter testimonials={testimonials} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
