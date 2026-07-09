import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { MapPlaceholder } from "@/components/illustrations/MapPlaceholder";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Taxivo team for a free consultation on tax, GST, compliance, or business advisory services.",
};

const contactDetails = [
  { icon: MapPin, label: "Office Address", value: siteConfig.address },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat, 9:30 AM – 6:30 PM IST" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Finances"
        description="Whether you have a quick question or need a full compliance overhaul, our team is ready to help."
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <Card hoverable={false}>
              <ul className="space-y-5">
                {contactDetails.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <detail.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{detail.label}</p>
                      <p className="mt-0.5 text-sm text-ink-700">{detail.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="overflow-hidden rounded-2xl border border-ink-100">
              <MapPlaceholder />
            </div>
          </div>

          <Card hoverable={false} className="p-8">
            <h2 className="font-heading text-2xl font-bold text-ink-900">Send Us a Message</h2>
            <p className="mt-2 text-sm text-ink-500">
              Fill out the form below and our team will get back to you within one business day.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
