import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Logo } from "@/components/layout/Logo";
import { NavServicesDropdown } from "@/components/layout/NavServicesDropdown";
import { MobileNav } from "@/components/layout/MobileNav";
import { headerNav } from "@/lib/data/nav";

export function Header() {
  return (
    <div className="sticky top-0 z-40 border-b border-ink-100 bg-white/95 backdrop-blur dark:border-ink-800 dark:bg-ink-900/95">
      <Container className="flex items-center justify-between py-4">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {headerNav.map((item) =>
            item.children ? (
              <NavServicesDropdown key={item.label} items={item.children} />
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                tabIndex={9}
                className="text-sm font-medium text-ink-700 transition-colors hover:text-brand-600 dark:text-ink-200 dark:hover:text-brand-400"
                style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(51, 51, 51)", fontSize: "14px" }}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:flex" />
          <Button href="/contact"
            size="sm"
            className="hidden md:inline-flex" tabIndex={2}
            style={{
              'backgroundColor': 'rgb(28, 51, 90)',
              'color': 'rgb(255, 255, 255)',
              'fontSize': '14px'
            }}>
            Contact Us
          </Button>
          <MobileNav items={headerNav} />
        </div>
      </Container>
    </div>
  );
}
