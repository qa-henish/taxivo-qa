import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AbstractBlob } from "@/components/illustrations/AbstractBlob";
import { BlogCard } from "@/components/shared/BlogCard";
import { CTASection } from "@/components/shared/CTASection";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blogPosts";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Taxivo`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-900 py-16 md:py-20">
        <AbstractBlob className="-right-40 -top-40 h-[500px] w-[500px]" />
        <Container className="relative max-w-3xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: post.title },
            ]}
          />
          <Badge variant="gold" className="mt-6 bg-white/10">
            {post.category}
          </Badge>
          <h1 className="mt-4 font-heading text-3xl font-bold text-white md:text-5xl">{post.title}</h1>
          <div className="mt-6 flex items-center gap-4">
            <Avatar initials={post.author.initials} seed={post.author.name} size="sm" />
            <div>
              <p className="text-sm font-semibold text-white">{post.author.name}</p>
              <p className="text-xs text-brand-200">{post.author.role}</p>
            </div>
            <span className="mx-2 h-8 w-px bg-white/20" />
            <div className="text-xs text-brand-200">
              <p>{formatDate(post.publishedAt)}</p>
              <p className="mt-0.5 flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTimeMinutes} min read
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="relative -mt-8 max-w-3xl md:-mt-10">
        <figure>
          <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-soft-lg md:h-80">
            <Image
              src={post.coverImageUrl}
              alt={post.coverImageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
          <figcaption className="mt-2 text-xs text-ink-400 dark:text-ink-500">{post.coverImageAlt}</figcaption>
        </figure>
      </Container>

      <section className="bg-white pt-10 pb-16 md:pb-24 dark:bg-ink-900">
        <Container className="max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-ink-900 prose-p:text-ink-600 prose-a:text-brand-600 dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-ink-300 dark:prose-a:text-brand-400">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="ink">
                {tag}
              </Badge>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 md:py-24 dark:bg-ink-800/40">
        <Container>
          <SectionHeading eyebrow="Keep Reading" title="More Insights" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
