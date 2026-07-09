import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessStepItem } from "@/components/shared/ProcessStepItem";
import { FaqAccordionItem } from "@/components/shared/FaqAccordionItem";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { services, getServiceBySlug } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.name,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | Taxivo`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedServices = (service.relatedServiceSlugs ?? [])
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.name}
        description={service.heroDescription}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon name={service.icon} className="h-7 w-7" />
            </span>
            <h2 className="mt-6 font-heading text-2xl font-bold text-ink-900 md:text-3xl">
              What&apos;s Included
            </h2>
            <ul className="mt-6 space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-600 md:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-ink-900 md:text-3xl">Our Process</h2>
            <div className="mt-8">
              {service.process.map((step, index) => (
                <ProcessStepItem
                  key={step.step}
                  step={step.step}
                  title={step.title}
                  description={step.description}
                  isLast={index === service.process.length - 1}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-ink-50 py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="Questions" title={`FAQs About ${service.name}`} />
            <div className="mx-auto mt-10 max-w-2xl">
              {service.faqs.map((faq, index) => (
                <FaqAccordionItem
                  key={faq.question}
                  faq={{ id: `${service.slug}-${index}`, category: "services", ...faq }}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="Related" title="You Might Also Need" />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <ServiceCard key={related.slug} service={related} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={`Ready to Get Started With ${service.name}?`}
        description="Book a free consultation and we'll map out exactly what you need."
      />
    </>
  );
}
