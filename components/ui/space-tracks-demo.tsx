"use client";

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

const TRACK_ICONS: Record<string, string> = {
  'Gen AI & ML': '🤖',
  'SaaS': '☁️',
  'HealthTech': '💊',
  'Fintech': '💳',
  'Sustainable ': '🌱',
  'Mystery Track': '✨',
};

interface TrackRingProps {
  radius?: number;
  duration?: number;
  className?: string;
}

function TrackRing({
  duration = 30,
  className
}: TrackRingProps) {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [sizes, setSizes] = useState({
    baseRadius: 120,
    isMobile: false,
    trackRings: [
      { tracks: ['Gen AI & ML', 'SaaS'], radius: 96, duration: duration, delay: 0 },
      { tracks: ['HealthTech', 'Fintech'], radius: 132, duration: duration * 1.1, delay: 2 },
      { tracks: ['Sustainable ', 'Mystery Track'], radius: 168, duration: duration * 0.9, delay: 4 },
    ]
  });
  const ringRef = useRef<HTMLDivElement>(null);
  const [parallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Calculate responsive sizes only on client
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const minDim = Math.min(vw, vh);
    const baseRadius = Math.max(70, Math.min(minDim * 0.22, 160));
    const isMobile = minDim < 700;
    
    setSizes({
      baseRadius,
      isMobile,
      trackRings: [
        { tracks: ['Gen AI & ML', 'SaaS'], radius: baseRadius * 0.8, duration: duration, delay: 0 },
        { tracks: ['HealthTech', 'Fintech'], radius: baseRadius * 1.1, duration: duration * 1.1, delay: 2 },
        { tracks: ['Sustainable ', 'Mystery Track'], radius: baseRadius * 1.4, duration: duration * 0.9, delay: 4 },
      ]
    });

    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      ref={ringRef}
      className={cn("relative w-full h-full flex items-center justify-center", className)}
      style={{
        perspective: 1200,
        transform: `rotateY(${parallax.x * 10}deg) rotateX(${-parallax.y * 10}deg)`
      }}
    >
      {/* Central Tracks Heading */}
      <div className="relative z-20 text-center">
        <h1 className="text-[clamp(2rem,7vw,3.5rem)] font-extrabold bg-gradient-to-b from-white via-blue-200 to-blue-400 bg-clip-text text-transparent animate-gradient-glow">
          Tracks
        </h1>
      </div>

      {/* Multiple Rotating Ring Containers */}
      {sizes.trackRings.map((ring, ringIndex) => (
        <motion.div
          key={ringIndex}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: ring.duration,
            ease: "linear",
            repeat: Infinity,
            delay: animationStarted ? ring.delay : 0,
          }}
          style={{ 
            width: sizes.isMobile ? '100vw' : '100%', 
            height: sizes.isMobile ? '100vw' : '100%' 
          }}
        >
          {ring.tracks.map((track, index) => {
            const angle = (index / ring.tracks.length) * 360;
            const x = Math.cos((angle - 90) * (Math.PI / 180)) * ring.radius;
            const y = Math.sin((angle - 90) * (Math.PI / 180)) * ring.radius;
            const icon = TRACK_ICONS[track] || '';
            return (
              <div
                key={track}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  minWidth: sizes.isMobile ? 64 : 100,
                  maxWidth: sizes.isMobile ? 110 : 160,
                }}
              >
                <motion.button
                  tabIndex={0}
                  aria-label={track}
                  className="px-2 sm:px-4 py-1 sm:py-2 bg-background/20 backdrop-blur-md border border-white/30 rounded-full text-xs sm:text-sm md:text-base font-semibold text-white whitespace-nowrap shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-105 hover:shadow-blue-400/60 transition-all duration-200 ring-glow"
                  style={{
                    boxShadow: '0 0 12px 2px rgba(59,130,246,0.25), 0 0 24px 4px rgba(147,51,234,0.18)',
                    fontSize: sizes.isMobile ? 'clamp(0.8rem, 3vw, 1.1rem)' : 'clamp(1rem, 1.5vw, 1.2rem)',
                  }}
                  onClick={() => alert(`More info about ${track}`)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      alert(`More info about ${track}`);
                    }
                  }}
                >
                  <span className="mr-2 text-lg align-middle">{icon}</span>
                  <span className="align-middle">{track}</span>
                </motion.button>
              </div>
            );
          })}
        </motion.div>
      ))}

      {/* Background Concentric Circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {sizes.trackRings.map((ring, index) => (
          <div
            key={index}
            className="absolute border border-white/10 rounded-full ring-blur"
            style={{
              width: `${ring.radius * 2}px`,
              height: `${ring.radius * 2}px`,
              boxShadow: '0 0 32px 4px rgba(59,130,246,0.08)',
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500/20 rounded-full flex items-center justify-center"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute top-3/4 right-1/4 w-4 sm:w-6 h-4 sm:h-6 bg-purple-500/20 rounded-full flex items-center justify-center"
        animate={{
          y: [10, -10, 10],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-1 sm:w-2 h-1 sm:h-2 bg-purple-400 rounded-full" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-3 sm:w-4 h-3 sm:h-4 bg-green-500/20 rounded-full flex items-center justify-center"
        animate={{
          x: [-5, 5, -5],
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-1 sm:w-2 h-1 sm:h-2 bg-green-400 rounded-full" />
      </motion.div>
    </div>
  );
}

// Reusable starfield background
export function StarfieldBackground({ starCount = 100, className = "absolute inset-0" }: { starCount?: number; className?: string }) {
  const [stars, setStars] = React.useState<{ left: number; top: number; duration: number; delay: number }[]>([]);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
    setStars(
      Array.from({ length: starCount }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, [starCount]);

  return (
    <div className={className}>
      {isClient && stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}

function SpaceTracksDemo() {
  return (
    <div className="min-h-[80vh] sm:min-h-screen w-full bg-black overflow-hidden relative px-2 sm:px-0">
      {/* Starfield Background */}
      <StarfieldBackground />

      {/* Main Content */}
      <div className="relative z-10 h-[60vh] sm:h-screen flex items-center justify-center p-2 sm:p-8">
        <TrackRing />
      </div>
    </div>
  );
}

export function HeroSectionWithStarfield() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-screen w-full bg-black overflow-hidden flex items-center justify-center px-4 py-16">
      {/* Starfield Background */}
      <StarfieldBackground starCount={120} />
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-b from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mb-6 animate-gradient-glow">
          Innovate Boldly. Break Records. Build the Future.
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/90 font-medium leading-relaxed shadow-lg rounded-xl bg-black/60 backdrop-blur-md p-6">
          SunHacks is India&apos;s premier GenAI hackathon, hosted in Nashik by Sandip University. Designed to unite the country&apos;s brightest minds, this groundbreaking 36-hour in-person event brings together over 1500+ developers, data scientists, and AI innovators to solve real-world challenges using Generative AI and cutting-edge technologies.<br/><br/>
          As the organizers of India&apos;s Largest GenAI Hackathon, SunHacks is not only a platform for breakthrough ideas — it&apos;s a World Record attempt, pushing the boundaries of collaborative innovation at scale.<br/><br/>
          With curated tracks like FinTech, HealthTech, Sustainability, SaaS, and GenAI/ML, participants will engage in high-impact ideation, hands-on mentorship, and live pitching to top industry experts. Whether you&apos;re a seasoned developer or a rising tech enthusiast, SunHacks offers national visibility, deep learning experiences, and unmatched networking with recruiters, mentors, and fellow visionaries.<br/><br/>
          Join us in this transformative journey — where technology meets ambition, and innovation makes history.
        </p>
      </div>
    </section>
  );
}

export default SpaceTracksDemo; 