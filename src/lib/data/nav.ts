import { NavItem, FooterLinkGroup } from "@/types/nav";
import { services } from "./services";

export const headerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
      description: service.shortDescription,
      icon: service.icon,
    })),
  },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

export const footerGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      ...services.slice(0, 6).map((service) => ({
        label: service.name,
        href: `/services/${service.slug}`,
      })),
      { label: "View All Services", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources & Insights", href: "/resources" },
      { label: "Industries We Serve", href: "/industries" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];
