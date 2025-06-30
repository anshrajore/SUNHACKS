import { DemoHeroGeometric } from "@/components/ui/shape-landing-hero";
import { HeroSectionWithStarfield } from "@/components/ui/space-tracks-demo";
import { FancyPreviewSection } from "./../components/ui/fancy-preview-section";
import { Component as MusicReactiveHero } from "@/components/ui/music-reactive-hero-section";

export default function Home() {
  return (
    <>
      <DemoHeroGeometric />
      <HeroSectionWithStarfield />
      <MusicReactiveHero />
      <FancyPreviewSection />
    </>
  );
}
