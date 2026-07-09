"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { FormField, Input, Textarea, Select } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { JobOpening } from "@/types/job";

const applySchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  role: z.string().min(1, "Please select a role"),
  message: z.string().min(10, "Tell us a little about yourself"),
});

type ApplyFormValues = z.infer<typeof applySchema>;

export function CareersApplyForm({ jobs }: { jobs: JobOpening[] }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <Alert variant="success">
        <p className="font-semibold">Application received!</p>
        <p className="mt-1">Our HR team will review your profile and reach out if there&apos;s a fit.</p>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField id="applicant-name" label="Full Name" error={errors.name?.message}>
          <Input id="applicant-name" placeholder="Your name" {...register("name")} />
        </FormField>
        <FormField id="applicant-email" label="Email Address" error={errors.email?.message}>
          <Input id="applicant-email" type="email" placeholder="you@example.com" {...register("email")} />
        </FormField>
      </div>

      <FormField id="applicant-role" label="Role You're Applying For" error={errors.role?.message}>
        <Select id="applicant-role" defaultValue="" {...register("role")}>
          <option value="" disabled>
            Select a role
          </option>
          {jobs.map((job) => (
            <option key={job.id} value={job.title}>
              {job.title}
            </option>
          ))}
          <option value="General Application">General Application</option>
        </Select>
      </FormField>

      <FormField id="applicant-message" label="Tell Us About Yourself" error={errors.message?.message}>
        <Textarea
          id="applicant-message"
          placeholder="Share a brief summary of your experience and why you'd be a good fit..."
          {...register("message")}
        />
      </FormField>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
