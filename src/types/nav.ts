export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavLink[];
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}
