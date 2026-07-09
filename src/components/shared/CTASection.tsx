import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AbstractBlob } from "@/components/illustrations/AbstractBlob";

export function CTASection({
  title = "Ready to simplify your finances?",
  description = "Talk to our team today and get a tailored compliance plan for your business.",
  primaryLabel = "Book a Free Consultation",
  primaryHref = "/contact",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 md:py-24">
      <AbstractBlob className="-left-40 -bottom-40 h-[500px] w-[500px]" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-brand-100 md:text-lg">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="inverse" size="lg">
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={secondaryHref} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
