"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { FormField, Input, Textarea, Select } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please share a few details about your requirement"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const serviceOptions = [
  "Income Tax Filing",
  "GST Registration & Returns",
  "Company Registration",
  "ROC Compliance",
  "Accounting & Bookkeeping",
  "Payroll Services",
  "Tax Planning",
  "Audit & Assurance",
  "Startup Advisory",
  "Business Consulting",
  "Something Else",
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <Alert variant="success">
        <p className="font-semibold">Thanks for reaching out!</p>
        <p className="mt-1">Our team will get back to you within one business day.</p>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="name" label="Full Name" error={errors.name?.message}>
          <Input id="name" placeholder="Your name" {...register("name")} />
        </FormField>
        <FormField id="email" label="Email Address" error={errors.email?.message}>
          <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="phone" label="Phone Number" error={errors.phone?.message}>
          <Input id="phone" type="tel" placeholder="+91 98765 43210" {...register("phone")} />
        </FormField>
        <FormField id="service" label="Service Needed" error={errors.service?.message}>
          <Select id="service" defaultValue="" {...register("service")}>
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

      <FormField id="message" label="How can we help?" error={errors.message?.message}>
        <Textarea id="message" placeholder="Tell us a bit about your business and requirement..." {...register("message")} />
      </FormField>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
