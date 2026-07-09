"use client";

import { useInView } from "@/lib/hooks/useInView";
import { useCountUp } from "@/lib/hooks/useCountUp";

export function StatCounter({
  value,
  prefix,
  suffix,
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const count = useCountUp(value, isInView);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-4xl font-bold text-white md:text-5xl">
        {prefix}
        {count.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-brand-100 md:text-base">{label}</p>
    </div>
  );
}
