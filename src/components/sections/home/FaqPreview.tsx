import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FaqAccordionItem } from "@/components/shared/FaqAccordionItem";
import { faqs } from "@/lib/data/faqs";

export function FaqPreview() {
  const previewFaqs = faqs.slice(0, 5);

  return (
    <section className="bg-ink-50 py-16 md:py-24 dark:bg-ink-800/40">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to the questions we hear most often."
        />

        <div className="mx-auto mt-12 max-w-2xl">
          {previewFaqs.map((faq, index) => (
            <FaqAccordionItem key={faq.id} faq={faq} defaultOpen={index === 0} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/faq" variant="outline" size="lg">
            View All FAQs
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
