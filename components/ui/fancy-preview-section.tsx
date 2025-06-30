"use client";

import { useEffect } from "react";
import { useAnimate } from "motion/react";
import SpaceTracksDemo from "./space-tracks-demo";
import SponsorsSection from "./sponsors-section";
import Testimonials from "./testimonials-section";
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";

export function FancyPreviewSection() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // Removed animate('img', ...) effect since there are no images to animate
  }, [animate]);

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="w-full h-full flex items-center justify-center" ref={scope}>
          <SpaceTracksDemo />
        </div>
      </section>
      <SponsorsSection />
      <HeroScrollDemo />
      <Testimonials />
    </>
  );
} 