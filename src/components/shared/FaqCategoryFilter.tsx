"use client";

import { useState } from "react";
import { TabButtons } from "@/components/ui/Tabs";
import { FaqAccordionItem } from "@/components/shared/FaqAccordionItem";
import { FaqItem, FaqCategory } from "@/types/faq";

const categoryLabels: Record<FaqCategory, string> = {
  general: "General",
  services: "Services",
  pricing: "Pricing",
  compliance: "Compliance",
};

export function FaqCategoryFilter({ faqs }: { faqs: FaqItem[] }) {
  const categories: { id: string; label: string }[] = [
    { id: "all", label: "All" },
    ...(Object.keys(categoryLabels) as FaqCategory[]).map((category) => ({
      id: category,
      label: categoryLabels[category],
    })),
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? faqs : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <div>
      <TabButtons tabs={categories} activeTab={activeCategory} onChange={setActiveCategory} />

      <div className="mx-auto mt-12 max-w-2xl">
        {filtered.map((faq, index) => (
          <FaqAccordionItem key={faq.id} faq={faq} defaultOpen={index === 0} />
        ))}
      </div>
    </div>
  );
}
