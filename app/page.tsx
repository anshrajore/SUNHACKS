import { DemoHeroGeometric } from "@/components/ui/shape-landing-hero";
import { DemoOne } from "@/components/ui/rubik-s-cube";
import { FancyPreviewSection } from "./../components/ui/fancy-preview-section";
import { Component as MusicReactiveHero } from "@/components/ui/music-reactive-hero-section";

export default function Home() {
  return (
    <>
      <DemoHeroGeometric />
      <DemoOne />
      <MusicReactiveHero />
      <FancyPreviewSection />
    </>
  );
}
