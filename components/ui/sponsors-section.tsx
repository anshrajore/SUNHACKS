"use client";

import React, { useEffect, useState } from "react";

const sponsors = [
  { name: "Sponsor 1", logo: "/public/logo1.png" },
  { name: "Sponsor 2", logo: "/public/logo1.png" },
  { name: "Sponsor 3", logo: "/public/logo1.png" },
  { name: "Sponsor 4", logo: "/public/logo1.png" },
  { name: "Sponsor 5", logo: "/public/logo1.png" },
  { name: "Sponsor 6", logo: "/public/logo1.png" },
  { name: "Sponsor 7", logo: "/public/logo1.png" },
  { name: "Sponsor 8", logo: "/public/logo1.png" },
  { name: "Sponsor 9", logo: "/public/logo1.png" },
  { name: "Sponsor 10", logo: "/public/logo1.png" },
  
];

export default function SponsorsSection() {
  const [stars, setStars] = useState<{ left: number; top: number; size: number; opacity: number }[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 120 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() > 0.98 ? 2 : 1,
        opacity: Math.random() * 0.7 + 0.2,
      }))
    );
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden py-16">
      {/* Starfield background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.left}%`,
              top: `${star.top}%`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
      {/* Heading */}
      <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-12 text-center" style={{ fontFamily: '"Press Start 2P", monospace' }}>
        Partners in building<br />for better
      </h2>
      {/* Sponsors grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 w-full max-w-6xl mb-12 px-2 md:px-0">
        {sponsors.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-center bg-white rounded-2xl shadow-lg h-24 md:h-28 px-4 py-2 transition-transform hover:scale-105"
            style={{ minHeight: 96 }}
          >
            <img
              src={s.logo}
              alt={s.name}
              className="max-h-12 md:max-h-16 object-contain mx-auto"
              style={{ maxWidth: "90%" }}
            />
          </div>
        ))}
      </div>
      {/* Retro pixel button */}
      <button
        className="relative z-10 mt-2 px-8 py-3 border-2 border-white rounded-full text-white text-lg font-bold tracking-wider bg-black hover:bg-white hover:text-black transition-colors duration-200 shadow-lg"
        style={{ fontFamily: '"Press Start 2P", monospace', boxShadow: '0 0 0 2px #fff, 0 0 16px #fff8' }}
      >
        • Sponsors
      </button>
      {/* Google Fonts for pixel style */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
      `}</style>
    </section>
  );
} 