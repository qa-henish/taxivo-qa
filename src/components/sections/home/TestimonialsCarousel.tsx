"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.8;
    node.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 md:py-24 dark:bg-ink-900">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Client Stories"
            title="What Our Clients Say"
            align="left"
            className="mx-0"
          />
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:bg-ink-50 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:bg-ink-50 dark:border-ink-700 dark:text-ink-300 dark:hover:bg-ink-800"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-[320px] shrink-0 snap-start sm:w-[360px]">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
