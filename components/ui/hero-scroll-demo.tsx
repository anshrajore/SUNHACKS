"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { StarfieldBackground } from "@/components/ui/space-tracks-demo";
import CircularText from "./CircularText";
import "./CircularText.css";
import ShiftingCountdown from "@/components/ui/countdown-timer";

const DemoOne = () => {
  return (
    <div className="w-full">
      <ShiftingCountdown />
    </div>
  );
};

export { DemoOne };

export function HeroScrollDemo() {
  return (
    <div className="min-h-[80vh] sm:min-h-screen w-full bg-black overflow-hidden relative px-2 sm:px-0">
      {/* Top Left CircularText */}
      <div className="absolute top-4 left-2 md:top-8 md:left-8 z-30">
        <CircularText
          text="SUNHACKS*HACKATHON*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
      {/* Top Right CircularText */}
      <div className="absolute top-4 right-2 md:top-8 md:right-8 z-30">
        <CircularText
          text="SUNHACKS*HACKATHON*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
      <StarfieldBackground />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
            🏆 Prize Pool Reveal! <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                1,50,000+ 
              </span>
            </h1>
          </>
        }
      >
        <div className="h-full w-full overflow-hidden rounded-2xl bg-black md:rounded-2xl md:p-4">
          {/* Desktop/Tablet: Landscape image */}
          <Image
            alt="hero"
            draggable={false}
            width={1400}
            height={720}
            className="mx-auto w-[400px] md:w-[850px] rounded-2xl hidden md:block md:object-fill h-fit md:h-full"
            src={"/trophy2.png"}
            priority
          />
          {/* Mobile: Portrait image */}
          <Image
            alt="hero"
            draggable={false}
            width={1400}
            height={720}
            className="mx-auto w-[400px] md:w-[800px] rounded-2xl block md:hidden md:object-cover h-fit md:h-full"
            src={"/trophy4.png"}
            priority
          />
        </div>
      </ContainerScroll>
      {/* Countdown at the bottom */}
      <div className="w-full flex justify-center mt-8">
        <DemoOne />
      </div>
    </div>
  );
} 