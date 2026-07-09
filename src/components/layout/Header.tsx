import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { NavServicesDropdown } from "@/components/layout/NavServicesDropdown";
import { MobileNav } from "@/components/layout/MobileNav";
import { headerNav } from "@/lib/data/nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/95 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {headerNav.map((item) =>
            item.children ? (
              <NavServicesDropdown key={item.label} items={item.children} />
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-600"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/contact" size="sm" className="hidden md:inline-flex">
            Contact Us
          </Button>
          <MobileNav items={headerNav} />
        </div>
      </Container>
    </header>
  );
}
