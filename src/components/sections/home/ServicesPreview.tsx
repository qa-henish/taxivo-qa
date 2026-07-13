import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/lib/data/services";

export function ServicesPreview() {
  const featuredServices = services.filter((service) => service.featured);

  return (
    <section className="bg-white py-16 md:py-24 dark:bg-ink-900">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Everything Your Business Needs, In One Place"
          description="From compliance to strategic advisory, our services cover the complete financial lifecycle of your business."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 60}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline" size="lg"
            style={{
              "backgroundColor": "rgb(249, 250, 251)",
              "color": "rgb(55, 65, 81)",
              "fontSize": "16px"
            }}>
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
