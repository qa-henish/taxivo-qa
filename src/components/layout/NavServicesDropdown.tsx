"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { NavLink } from "@/types/nav";
import { cn } from "@/lib/utils";

export function NavServicesDropdown({ items }: { items: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsOpen(true);
  };

  const close = () => {
    closeTimeout.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>
      <span
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 text-sm font-medium text-ink-700 transition-colors hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-400"
        style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(51, 51, 51)", fontSize: "14px" }}
      >
        Services
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </span>

      <div
        aria-hidden="true"
        className={cn(
          "absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-4 transition-all duration-200",
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-ink-100 bg-white p-4 shadow-soft-lg dark:border-ink-800 dark:bg-ink-800 dark:shadow-none">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50 dark:hover:bg-ink-700"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-ink-900 dark:text-brand-400">
                <Icon name={item.icon ?? "FileText"} className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink-900 dark:text-white">{item.label}</span>
                <span className="mt-0.5 block text-xs text-ink-500 line-clamp-1 dark:text-ink-400">{item.description}</span>
              </span>
            </Link>
          ))}
          <Link
            href="/services"
            className="col-span-2 mt-1 flex items-center justify-center gap-1.5 rounded-xl border-t border-ink-100 pt-4 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:border-ink-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
