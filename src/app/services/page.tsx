import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Taxivo's full range of Chartered Accountancy services — income tax filing, GST, company registration, ROC compliance, accounting, payroll, audit, and business advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete Financial & Compliance Services"
        description="Whatever stage your business is at, our services are designed to keep you compliant and financially informed."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="bg-white py-16 md:py-24 dark:bg-ink-900">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={(index % 3) * 60}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
