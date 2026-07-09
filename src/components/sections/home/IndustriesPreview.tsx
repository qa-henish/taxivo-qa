import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { IndustryCard } from "@/components/shared/IndustryCard";
import { industries } from "@/lib/data/industries";

export function IndustriesPreview() {
  const previewIndustries = industries.slice(0, 4);

  return (
    <section className="bg-ink-50 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Sector-Specific Expertise"
          description="We understand the nuances of your industry, not just generic accounting rules."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewIndustries.map((industry, index) => (
            <FadeIn key={industry.slug} delay={index * 60}>
              <IndustryCard industry={industry} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/industries" variant="outline" size="lg">
            View All Industries
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
