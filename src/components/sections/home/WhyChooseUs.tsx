import { ShieldCheck, Clock, Users2, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Accuracy You Can Rely On",
    description: "Every filing is reviewed twice by qualified professionals before submission.",
  },
  {
    icon: Clock,
    title: "Never Miss a Deadline",
    description: "Proactive reminders and a dedicated compliance calendar keep you ahead.",
  },
  {
    icon: Users2,
    title: "Dedicated Relationship Manager",
    description: "One point of contact who knows your business, not a rotating support queue.",
  },
  {
    icon: TrendingUp,
    title: "Advisory, Not Just Filing",
    description: "We help you plan ahead, not just file returns — with real financial insight.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink-50 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Taxivo"
          title="Why Businesses Choose Taxivo"
          description="A modern CA firm built around responsiveness, accuracy, and long-term financial guidance."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <reason.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{reason.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
