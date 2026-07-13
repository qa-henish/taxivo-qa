import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { ResourcesFilter } from "@/components/shared/ResourcesFilter";
import { blogPosts } from "@/lib/data/blogPosts";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description:
    "Practical guides and updates on income tax, GST, company registration, ROC compliance, and startup finance from the Taxivo team.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources & Insights"
        title="Guides & Updates From Our Experts"
        description="Practical, jargon-free advice on tax, compliance, and business finance to help you make informed decisions."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <section className="bg-white py-16 md:py-24 dark:bg-ink-900">
        <Container>
          <ResourcesFilter posts={blogPosts} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
