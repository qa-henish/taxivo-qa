import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, HeartHandshake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/shared/PageHero";
import { TeamMemberCard } from "@/components/shared/TeamMemberCard";
import { CTASection } from "@/components/shared/CTASection";
import { StatCounter } from "@/components/ui/StatCounter";
import { team } from "@/lib/data/team";
import { companyStats } from "@/lib/data/stats";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Taxivo's story, mission, and the qualified team of Chartered Accountants and finance professionals behind our client work.",
};

const values = [
  { icon: ShieldCheck, title: "Integrity", description: "We give honest advice, even when it's not what clients want to hear." },
  { icon: Target, title: "Precision", description: "Every filing and figure is reviewed with meticulous attention to detail." },
  { icon: HeartHandshake, title: "Partnership", description: "We see ourselves as an extension of your team, not just a vendor." },
  { icon: Eye, title: "Transparency", description: "Clear pricing, clear communication, no fine print surprises." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Financial Expertise, Built on Trust"
        description={`Since ${siteConfig.foundedYear}, Taxivo has helped individuals and businesses across India navigate tax, compliance, and financial strategy with confidence.`}
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 sm:text-sm">Our Story</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ink-900 md:text-4xl">
              Built by accountants who understood the gap.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-500">
              Taxivo was founded by a small group of Chartered Accountants who saw too many businesses
              treating compliance as an afterthought — filed at the last minute, poorly documented, and
              disconnected from actual business strategy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              We built Taxivo to be different: a firm that combines rigorous compliance with genuine
              financial advisory, backed by modern tools and a team that actually picks up the phone.
              Today, we support over a thousand businesses and individuals across India, from first-time
              founders to established manufacturing groups.
            </p>
          </div>
          <figure>
            <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-soft-lg md:h-96">
              <Image
                src="/images/pages/about-team.jpg"
                alt="The Taxivo team collaborating together in a modern office"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <figcaption className="mt-2 text-xs text-ink-400">
              Members of the Taxivo team collaborating in our office
            </figcaption>
          </figure>
        </Container>
      </section>

      <section className="bg-brand-900 py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {companyStats.map((stat) => (
              <StatCounter key={stat.id} value={stat.value} prefix={stat.prefix} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What Guides Our Work" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-soft">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <value.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-ink-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Meet the Team"
            title="Qualified Professionals, Personally Invested"
            description="Every client is supported by named specialists, not a rotating queue."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <FadeIn key={member.id} delay={index * 60}>
                <TeamMemberCard member={member} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
