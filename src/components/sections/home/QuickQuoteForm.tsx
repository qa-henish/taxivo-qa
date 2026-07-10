"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FormField, Input, Select } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { siteConfig } from "@/lib/constants";

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const serviceOptions = [
  "Income Tax Filing",
  "GST Registration & Returns",
  "Company Registration",
  "ROC Compliance",
  "Accounting & Bookkeeping",
  "Tax Planning",
  "Audit & Assurance",
  "Something Else",
];

export function QuickQuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitted(true);
    reset();
  };

  return (
    <section className="bg-ink-50 py-16 md:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          eyebrow="Get Started"
          title="Get a Free Consultation in Minutes"
          description="Share a few details and one of our chartered accountants will reach out within one business day with a plan tailored to your business."
          align="left"
          className="max-w-xl"
        />

        <Card hoverable={false} className="p-6 sm:p-8">
          {isSubmitted ? (
            <Alert variant="success">
              <p className="font-semibold">Thanks for reaching out!</p>
              <p className="mt-1">Our team will get back to you within one business day.</p>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField id="quote-name" label="Full Name" error={errors.name?.message}>
                  <Input id="quote-name" placeholder="Your name" {...register("name")} />
                </FormField>
                <FormField id="quote-email" label="Email Address" error={errors.email?.message}>
                  <Input id="quote-email" type="email" placeholder="you@company.com" {...register("email")} />
                </FormField>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField id="quote-phone" label="Phone Number" error={errors.phone?.message}>
                  <Input id="quote-phone" type="tel" placeholder="+91 98765 43210" {...register("phone")} />
                </FormField>
                <FormField id="quote-service" label="Service Needed" error={errors.service?.message}>
                  <Select id="quote-service" defaultValue="" {...register("service")}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Request Consultation"}
              </Button>
            </form>
          )}

          <p className="mt-5 text-sm text-ink-500">
            Prefer to share more detail, or reach us at {siteConfig.email}?{" "}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              Visit our full contact page
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </p>
        </Card>
      </Container>
    </section>
  );
}
