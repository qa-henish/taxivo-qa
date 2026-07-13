import { Star, Quote } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import { Testimonial } from "@/types/testimonial";
import { cn } from "@/lib/utils";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col">
      <Quote className="h-7 w-7 text-brand-200 dark:text-brand-800" />
      <p className="mt-4 flex-1 text-sm italic leading-relaxed text-ink-600 dark:text-ink-300">&ldquo;{testimonial.quote}&rdquo;</p>

      <div className="mt-6 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={cn(
              "h-4 w-4",
              index < testimonial.rating ? "fill-gold-500 text-gold-500" : "text-ink-200 dark:text-ink-700"
            )}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Avatar initials={testimonial.initials} seed={testimonial.name} size="sm" />
        <div>
          <p className="text-sm font-semibold text-ink-900 dark:text-white">{testimonial.name}</p>
          <p className="text-xs text-ink-500 dark:text-ink-400"
            style={{ 'backgroundColor': 'rgb(255, 255, 255)', 'color': 'rgb(74, 74, 74)', 'fontSize': 12 }}>
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </Card >
  );
}
