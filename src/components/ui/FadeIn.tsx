"use client";

import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  delay = 0,
  className,
  as = "fade-up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "fade-up" | "fade-in";
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reduce:opacity-100",
        isInView ? (as === "fade-up" ? "animate-fade-up" : "animate-fade-in") : "fade-in-hidden",
        className
      )}
      style={{ animationDelay: isInView ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
