import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { BlogCard } from "@/components/shared/BlogCard";
import { blogPosts } from "@/lib/data/blogPosts";

export function InsightsPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Latest Insights"
          title="Guides & Updates From Our Experts"
          description="Practical, jargon-free advice on tax, compliance, and business finance."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 80}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/resources" variant="outline" size="lg">
            Browse All Resources
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
