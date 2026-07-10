"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);

  const close = () => {
    setIsOpen(false);
    setExpandedLabel(null);
  };

  return (
    <div className="md:hidden">
      <div
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-50"
      >
        <Menu className="h-6 w-6" />
      </div>

      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-dvh w-screen bg-ink-900/40 transition-opacity duration-300",
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={close}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-dvh w-full max-w-sm overflow-y-auto bg-white shadow-soft-lg transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-ink-100 px-6 py-5">
          <span className="font-heading text-lg font-bold text-ink-900">Menu</span>
          <div
            onClick={close}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-50"
          >
            <X className="h-5 w-5" />
          </div>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {items.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <div
                    onClick={() => setExpandedLabel((prev) => (prev === item.label ? null : item.label))}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-ink-800 hover:bg-ink-50"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        expandedLabel === item.label && "rotate-180"
                      )}
                    />
                  </div>
                  <div
                    className="grid transition-[grid-template-rows] duration-300"
                    style={{ gridTemplateRows: expandedLabel === item.label ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-0.5 py-1 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={close}
                            className="rounded-lg px-3 py-2.5 text-sm text-ink-600 hover:bg-ink-50 hover:text-brand-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  onClick={close}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-2 border-t border-ink-100 p-6">
          <Button href="/contact" className="w-full" onClick={close}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
