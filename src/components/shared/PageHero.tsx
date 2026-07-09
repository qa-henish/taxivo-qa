import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AbstractBlob } from "@/components/illustrations/AbstractBlob";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbItems,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbItems: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 md:py-24">
      <AbstractBlob className="-right-40 -top-40 h-[500px] w-[500px]" />
      <Container className="relative">
        <Breadcrumb items={breadcrumbItems} />
        {eyebrow && (
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-300 sm:text-sm">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 max-w-3xl font-heading text-3xl font-bold text-white md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100 md:text-lg">{description}</p>
        )}
      </Container>
    </section>
  );
}
