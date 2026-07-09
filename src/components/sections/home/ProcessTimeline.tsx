import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessStepItem } from "@/components/shared/ProcessStepItem";
import { engagementProcess } from "@/lib/data/process";

export function ProcessTimeline() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple, Transparent Process"
          description="From your first call to ongoing compliance, here's what working with Taxivo looks like."
        />

        <div className="mx-auto mt-14 max-w-xl">
          {engagementProcess.map((step, index) => (
            <ProcessStepItem
              key={step.step}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === engagementProcess.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
