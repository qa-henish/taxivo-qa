import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group flex h-full flex-col">
      <Badge variant="brand" className="w-fit">
        {post.category}
      </Badge>
      <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-ink-900">
        <Link href={`/resources/${post.slug}`} className="transition-colors group-hover:text-brand-600">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{post.excerpt}</p>

      <div className="mt-5 flex items-center justify-between text-xs text-ink-400">
        <span>{formatDate(post.publishedAt)}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {post.readTimeMinutes} min read
        </span>
      </div>

      <Link
        href={`/resources/${post.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors group-hover:text-brand-700"
      >
        Read Article
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Card>
  );
}
