"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/hooks/useTheme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 transition-colors hover:bg-ink-50 dark:text-ink-300 dark:hover:bg-ink-800",
        !mounted && "invisible",
        className
      )}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
