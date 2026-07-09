"use client";

import { useMemo, useState } from "react";
import { TabButtons } from "@/components/ui/Tabs";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { Testimonial } from "@/types/testimonial";

export function TestimonialsFilter({ testimonials }: { testimonials: Testimonial[] }) {
  const industries = useMemo(() => {
    const unique = Array.from(
      new Set(testimonials.map((t) => t.industry).filter((value): value is string => Boolean(value)))
    );
    return [{ id: "all", label: "All Industries" }, ...unique.map((industry) => ({ id: industry, label: industry }))];
  }, [testimonials]);

  const [activeIndustry, setActiveIndustry] = useState("all");

  const filtered =
    activeIndustry === "all" ? testimonials : testimonials.filter((t) => t.industry === activeIndustry);

  return (
    <div>
      <TabButtons tabs={industries} activeTab={activeIndustry} onChange={setActiveIndustry} />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
