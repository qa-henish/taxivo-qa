import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Trusted Chartered Accountants & Tax Advisors`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "chartered accountant",
    "income tax filing",
    "GST registration",
    "company registration",
    "ROC compliance",
    "audit and assurance",
    "tax planning India",
  ],
  openGraph: {
    title: `${siteConfig.name} | Trusted Chartered Accountants & Tax Advisors`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Trusted Chartered Accountants & Tax Advisors`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${sora.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Header />
        <div>{children}</div>
        <Footer />
        <Script
          src="https://staging-widget.braoza.com/v1/assets/static-pages/injector.js"
          type="module"
          data-account="mrejmsedwj"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
