"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-ink-100 py-2 dark:border-ink-800">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-heading text-base font-semibold text-ink-900 md:text-lg dark:text-white">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300 motion-reduce:transition-none",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-4 pr-8 text-sm leading-relaxed text-ink-500 md:text-base dark:text-ink-400">{answer}</p>
        </div>
      </div>
    </div>
  );
}
