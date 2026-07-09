"use client";

import { cn } from "@/lib/utils";

export function TabButtons({
  tabs,
  activeTab,
  onChange,
}: {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          aria-pressed={activeTab === tab.id}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
            activeTab === tab.id
              ? "bg-brand-500 text-white"
              : "bg-ink-50 text-ink-600 hover:bg-ink-100"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
