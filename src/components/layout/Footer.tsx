import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { SocialIcon, type SocialPlatform } from "@/components/ui/SocialIcon";
import { footerGroups } from "@/lib/data/nav";
import { siteConfig } from "@/lib/constants";

const socialLinks: { platform: SocialPlatform; href: string; label: string }[] = [
  { platform: "linkedin", href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { platform: "twitter", href: siteConfig.socials.twitter, label: "Twitter" },
  { platform: "facebook", href: siteConfig.socials.facebook, label: "Facebook" },
  { platform: "instagram", href: siteConfig.socials.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <div className="bg-brand-900 text-brand-900">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo inverse />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ platform, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <SocialIcon platform={platform} className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-brand-200 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-sm font-semibold text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-brand-300 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
