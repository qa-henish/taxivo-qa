import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read Taxivo's privacy policy to understand how we collect, use, and protect your personal and financial information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="Last updated: 1 January 2026"
        breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-3xl">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-ink-900 prose-p:text-ink-600 prose-li:text-ink-600 prose-a:text-brand-600">
            <p>
              This Privacy Policy describes how {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) collects, uses, and safeguards the information you provide when you use our
              website or engage our services. This is placeholder content for demonstration purposes and
              should be reviewed by qualified legal counsel before use in production.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, phone number, and
              business details when you fill out a contact form, request a consultation, or apply for a
              role on our Careers page. We may also collect financial documents you voluntarily share with
              us as part of an engagement.
            </p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To respond to your enquiries and provide requested services</li>
              <li>To prepare and file tax, GST, and compliance documents on your behalf</li>
              <li>To send relevant updates about your engagement or regulatory changes</li>
              <li>To improve our website and service offerings</li>
            </ul>

            <h2>3. Data Confidentiality</h2>
            <p>
              We treat all client financial data as strictly confidential. Access to client records is
              restricted to authorised team members directly involved in your engagement, and we use
              access-controlled systems to store sensitive documents.
            </p>

            <h2>4. Data Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. Information may be
              shared with regulatory authorities only where legally required, such as in response to a
              valid notice from a tax or regulatory body.
            </p>

            <h2>5. Cookies</h2>
            <p>
              Our website may use cookies to improve browsing experience and analyse site traffic. You can
              disable cookies through your browser settings at any time.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information held by
              us, subject to applicable statutory retention requirements for financial and tax records.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              For any questions about this Privacy Policy, please reach out to us at{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
