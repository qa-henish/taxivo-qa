import { AccordionItem } from "@/components/ui/Accordion";
import { FaqItem } from "@/types/faq";

export function FaqAccordionItem({ faq, defaultOpen }: { faq: FaqItem; defaultOpen?: boolean }) {
  return <AccordionItem question={faq.question} answer={faq.answer} defaultOpen={defaultOpen} />;
}
