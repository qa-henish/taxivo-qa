"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterSignup({ className }: { className?: string }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubscribed(true);
    reset();
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-ink-100 bg-ink-50 p-6 sm:p-8 dark:border-ink-800 dark:bg-ink-800",
        className
      )}
    >
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold text-ink-900 dark:text-white">Never Miss a Deadline</h3>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            Subscribe for monthly tax deadlines, compliance updates, and business finance tips.
          </p>
        </div>

        {isSubscribed ? (
          <p className="text-sm font-semibold text-accent-600 dark:text-accent-500">You&apos;re subscribed. Thanks for joining!</p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full shrink-0 sm:w-auto"
            noValidate
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-300 dark:text-ink-600" />
                <input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email address"
                  className="h-12 w-full rounded-full border border-ink-200 bg-white pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-300 transition-colors duration-200 focus:border-brand-500 focus:outline-none sm:w-64 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:placeholder:text-ink-600"
                  {...register("email")}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-500 px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-600 disabled:pointer-events-none disabled:opacity-50"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                <Send className="h-4 w-4" />
              </button>
            </div>
            {errors.email && <p className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">{errors.email.message}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
