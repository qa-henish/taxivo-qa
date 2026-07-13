import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the terms and conditions governing the use of Taxivo's website and professional services.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        description="Last updated: 1 January 2026"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />

      <section className="bg-white py-16 md:py-24 dark:bg-ink-900">
        <Container className="max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-ink-900 prose-p:text-ink-600 prose-li:text-ink-600 prose-a:text-brand-600 dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-ink-300 dark:prose-li:text-ink-300 dark:prose-a:text-brand-400">
            <p>
              These Terms &amp; Conditions govern your use of the {siteConfig.name} website and any
              professional services engagement with our firm. This is placeholder content for
              demonstration purposes and should be reviewed by qualified legal counsel before use in
              production.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website or engaging {siteConfig.name} for services, you agree to be bound
              by these Terms &amp; Conditions and any engagement-specific agreement signed separately.
            </p>

            <h2>2. Scope of Services</h2>
            <p>
              Services described on this website are indicative. The exact scope, deliverables, and fees
              for any engagement will be confirmed in a written proposal or engagement letter prior to
              commencement of work.
            </p>

            <h2>3. Client Responsibilities</h2>
            <ul>
              <li>Provide accurate, complete, and timely information and documentation</li>
              <li>Review and approve filings before submission where applicable</li>
              <li>Notify us promptly of any changes affecting your compliance obligations</li>
            </ul>

            <h2>4. Fees and Payment</h2>
            <p>
              Fees are billed as per the agreed plan or engagement letter. Late payments may result in
              suspension of services until outstanding invoices are settled.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              While we exercise professional care and diligence, {siteConfig.name} shall not be liable for
              losses arising from inaccurate or incomplete information provided by the client, or from
              regulatory changes beyond our control.
            </p>

            <h2>6. Termination</h2>
            <p>
              Either party may terminate an ongoing engagement with written notice as specified in the
              engagement letter. Fees for services rendered up to the termination date remain payable.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These terms are governed by the laws of India, and any disputes shall be subject to the
              exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              For questions about these Terms &amp; Conditions, please contact us at{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
