import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { AbstractBlob } from "@/components/illustrations/AbstractBlob";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-16 md:pt-20 md:pb-24">
      <video
        src="/hero-background.mp4"
        autoPlay
        loop
        muted
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <AbstractBlob className="-right-56 -top-56 h-[600px] w-[600px]" />
      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700 sm:text-sm">
            <ShieldCheck className="h-4 w-4" />
            Trusted by 1,200+ businesses across India
          </span>

          <div className="mt-6 font-heading text-4xl font-bold tracking-tight text-ink-900 md:text-6xl">
            Chartered Accountants You Can{" "}
            <span className="text-brand-500">Actually Trust</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-500 md:text-lg">
            From income tax filing to GST, ROC compliance, and audit — Taxivo handles your
            entire financial compliance so you can focus on growing your business.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["AM", "PN", "RK", "SR"].map((initials) => (
                <Avatar key={initials} initials={initials} size="sm" className="ring-2 ring-white" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="mt-0.5 text-xs text-ink-500">Rated 4.9/5 by our clients</p>
            </div>
          </div>
        </div>

        <figure className="relative">
          <HeroIllustration />
          <figcaption className="mt-3 text-center text-xs text-ink-400 lg:text-left">
            Illustration of a financial dashboard tracking business growth
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
