import type { Metadata } from "next";
import { HeartHandshake, GraduationCap, Coffee, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { PageHero } from "@/components/shared/PageHero";
import { JobCard } from "@/components/shared/JobCard";
import { CareersApplyForm } from "@/components/shared/CareersApplyForm";
import { jobs } from "@/lib/data/jobs";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Taxivo team. Explore open roles in tax, GST, audit, and operations, and apply to build your career with us.",
};

const perks = [
  { icon: GraduationCap, title: "Continuous Learning", description: "Structured support for professional certifications and exam leave." },
  { icon: HeartHandshake, title: "Collaborative Culture", description: "Flat structure where your ideas reach leadership directly." },
  { icon: Coffee, title: "Hybrid Flexibility", description: "A mix of in-office collaboration and remote flexibility." },
  { icon: TrendingUp, title: "Real Growth Paths", description: "Clear progression from associate to partner-track roles." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career at Taxivo"
        description="We're always looking for sharp, client-focused professionals to join our growing team."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Why Taxivo" title="Life at Taxivo" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk, index) => (
              <FadeIn key={perk.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-soft">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <perk.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-ink-900">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{perk.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Open Roles" title="Current Openings" />
          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {jobs.map((job) => (
              <div key={job.id} id={job.id}>
                <JobCard job={job} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-2xl">
          <Card hoverable={false} className="p-8">
            <h2 className="font-heading text-2xl font-bold text-ink-900">Apply Now</h2>
            <p className="mt-2 text-sm text-ink-500">
              Don&apos;t see the perfect role? Send us your details and we&apos;ll reach out when a fit opens up.
            </p>
            <div className="mt-8">
              <CareersApplyForm jobs={jobs} />
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
