import { DemoHeroGeometric } from "@/components/ui/shape-landing-hero";
import { HeroSectionWithStarfield } from "@/components/ui/space-tracks-demo";
import { FancyPreviewSection } from "./../components/ui/fancy-preview-section";

export default function Home() {
  return (
    <>
      <DemoHeroGeometric />
      <HeroSectionWithStarfield />
      <FancyPreviewSection />
    </>
  );
}
