import { AmbientSoundToggle } from "@/components/ui/AmbientSoundToggle";
import { Hero } from "@/components/sections/home/Hero";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { IndustriesPreview } from "@/components/sections/home/IndustriesPreview";
import { StatsBand } from "@/components/sections/home/StatsBand";
import { ProcessTimeline } from "@/components/sections/home/ProcessTimeline";
import { TestimonialsCarousel } from "@/components/sections/home/TestimonialsCarousel";
import { FaqPreview } from "@/components/sections/home/FaqPreview";
import { InsightsPreview } from "@/components/sections/home/InsightsPreview";
import { ContactCta } from "@/components/sections/home/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <IndustriesPreview />
      <StatsBand />
      <ProcessTimeline />
      <TestimonialsCarousel />
      <FaqPreview />
      <InsightsPreview />
      <ContactCta />
      <AmbientSoundToggle />
    </>
  );
}
