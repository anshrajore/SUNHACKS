"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { StarfieldBackground } from "@/components/ui/space-tracks-demo";

const inter = Inter({ subsets: ["latin"] });

// Timeline data
const TIMELINE = [
  {
    day: "Day 1 – 21st August (Thursday)",
    events: [
      { time: "4:30 PM – 7:30 PM", icon: "🛬", title: "Check-In & Registration", description: "Participants arrive, collect kits, and complete entry formalities." },
      { time: "8:00 PM – 9:00 PM", icon: "🎤", title: "Opening Ceremony", description: "Welcome address, event overview, and speaker introductions." },
      { time: "9:00 PM – 10:00 PM", icon: "🚀", title: "Hackathon Begins + Ideation", description: "Problem statements are announced; teams begin brainstorming.", highlight: true },
      { time: "10:00 PM – 11:00 PM", icon: "🍽️", title: "Dinner Break", description: "Relax and enjoy a delicious meal before coding begins.", highlight: true },
      { time: "11:00 PM – 11:30 PM", icon: "🧑‍🏫", title: "Mentor Round 1 – Ideation Validation", description: "Mentors help refine and validate initial ideas." },
      { time: "11:30 PM onwards", icon: "💻", title: "All-Night Coding Begins", description: "Teams start building their solutions overnight." },
    ],
  },
  {
    day: "Day 2 – 22nd August (Friday)",
    events: [
      { time: "2:00 AM – 3:00 AM", icon: "🎮", title: "Chill Zone Opens (Optional)", description: "Take a breather with games, music, and snacks." },
      { time: "3:00 AM – 6:00 AM", icon: "🌙", title: "Late-Night Code Sprint", description: "Quiet deep-work hours for core development." },
      { time: "7:00 AM – 8:00 AM", icon: "🥞", title: "Breakfast", description: "Freshen up and grab morning breakfast." },
      { time: "10:00 AM – 11:00 AM", icon: "🧑‍🏫", title: "Mentor Round 2 – Feedback", description: "Get implementation feedback and guidance." },
      { time: "12:00 PM – 1:00 PM", icon: "🍛", title: "Lunch", description: "Midday meal and short recharge break." },
      { time: "3:00 PM – 4:00 PM", icon: "🎙️", title: "Expert Talk / Panel Discussion", description: "Learn from industry leaders and innovators." },
      { time: "4:00 PM – 5:00 PM", icon: "🧑‍🏫", title: "Mentor Round 3 – Final Check", description: "Final suggestions to polish and finalize projects." },
      { time: "6:00 PM – 6:30 PM", icon: "☕", title: "Refreshment Break", description: "Light snacks and drinks for a quick recharge." },
      { time: "7:00 PM – 8:30 PM", icon: "🔥", title: "Campfire + Chill Session", description: "Outdoor hangout with networking, music, and fun." },
      { time: "8:30 PM – 10:00 PM", icon: "🍪", title: "Dinner", description: "Night-time munchies for energy and focus." },
      { time: "10:00 PM onwards", icon: "💻", title: "Final Night of Hacking", description: "Wrap up development and prepare for demo." },
    ],
  },
  {
    day: "Day 3 – 23rd August (Saturday)",
    events: [
      { time: "7:00 AM – 8:00 AM", icon: "🥞", title: "Breakfast", description: "Energize for the final stretch." },
      { time: "8:00 AM – 9:30 AM", icon: "🧑‍⚖️", title: "Judging Round – Demos", description: "Present your project to the judging panel.", highlight: true },
      { time: "9:30 AM – 10:30 AM", icon: "👥", title: "Jury Deliberation + Group Photo", description: "Judges finalize scores; group photo session." },
      { time: "10:30 AM – 11:30 AM", icon: "🏆", title: "Closing Ceremony & Results", description: "Prize distribution, thank-you note, and wrap-up.", highlight: true },
    ],
  },
];

export default function TimelinePage() {
  const [selectedDay, setSelectedDay] = useState(0); // 0: Day 1, 1: Day 2, 2: Day 3

  return (
    <main
      className={`min-h-screen w-full bg-black relative ${inter.className}`}
      style={{
        background:
          "radial-gradient(ellipse at 60% 0%, rgb(0, 0, 0) 0%, transparent 70%), linear-gradient(120deg, rgba(30,30,30,0.7) 0%, rgba(0,0,0,1) 100%)",
      }}
    >
      {/* Space Starfield Background */}
      <StarfieldBackground starCount={160} className="absolute inset-0 z-0 pointer-events-none" />
      {/* Floating Space Icons for extra effect */}
      <div className="absolute z-10 pointer-events-none w-full h-full">
        <span className="absolute left-[10%] top-[20%] text-5xl animate-bounce-slow">🪐</span>
        <span className="absolute right-[12%] top-[30%] text-4xl animate-spin-slow">🛰️</span>
        <span className="absolute left-[18%] bottom-[18%] text-4xl animate-float">🌑</span>
        <span className="absolute right-[8%] bottom-[12%] text-5xl animate-bounce-slow">🚀</span>
        <span className="absolute left-1/2 top-[10%] text-3xl animate-float">🌟</span>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8 tracking-tight drop-shadow-lg">
          SUNHACKS 2025 Timeline
        </h1>
        <p className="text-lg text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          36 hours of innovation, collaboration, and GenAI magic. Here&apos;s your roadmap to the most energetic hackathon experience!
        </p>
        {/* Day Toggle Buttons */}
        <div className="flex justify-center gap-6 mb-12">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`px-7 py-3 rounded-xl font-bold text-lg transition-all duration-200 backdrop-blur-md border-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/60
                ${selectedDay === idx
                  ? "bg-gradient-to-r from-[#00FFFF]/30 to-[#A259FF]/30 border-cyan-400 text-white shadow-cyan-400/30 scale-105 ring-2 ring-cyan-400/40"
                  : "bg-[#1E1E1E]/70 border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-white hover:scale-105"}
              `}
              style={{
                boxShadow: selectedDay === idx
                  ? "0 0 16px 2px #00ffff55, 0 0 32px 4px #a259ff33"
                  : "0 0 8px 1px #2228, 0 0 16px 2px #2224"
              }}
            >
              {idx === 0 ? "Day 1" : idx === 1 ? "Day 2" : "Day 3"}
            </button>
          ))}
        </div>
        {/* Timeline Section for Selected Day */}
        <section key={TIMELINE[selectedDay].day}>
          {/* Section Divider */}
          <div className="flex items-center justify-center mb-10">
            <div className="h-1 w-8 bg-cyan-400 rounded-full shadow-cyan-400/50 shadow-md" />
            <span className="mx-4 text-xl md:text-2xl font-bold text-white/90 tracking-wide px-4 py-2 rounded-lg bg-gradient-to-r from-[#1E1E1E] via-black to-[#1E1E1E] border border-white/10 shadow-lg backdrop-blur-md">
              📅 {TIMELINE[selectedDay].day}
            </span>
            <div className="h-1 w-8 bg-purple-500 rounded-full shadow-purple-500/50 shadow-md" />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {TIMELINE[selectedDay].events.map((event) => (
              <div
                key={event.time + event.title}
                className={`relative group bg-gradient-to-br from-[#1E1E1E]/80 to-black/80 border border-white/10 rounded-2xl p-6 flex flex-col shadow-xl backdrop-blur-md transition-transform duration-200 hover:scale-[1.025] hover:border-cyan-400/40 hover:shadow-cyan-400/20 ${event.highlight ? "ring-2 ring-cyan-400/60" : ""}`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-black border-2 border-cyan-400/40 text-white text-xl font-bold shadow-inner shadow-cyan-400/10 ring-2 ring-cyan-400/30 animate-pulse-slow">
                    {event.icon}
                  </span>
                  <span className="text-2xl font-semibold text-white drop-shadow-md">
                    {event.title}
                  </span>
                </div>
                <div className="text-gray-200 text-lg font-mono mb-1">
                  <span className="font-bold text-white/90 text-xl mr-2 drop-shadow-glow">{event.time}</span>
                  {event.description && (
                    <span className="block text-base text-gray-400 font-normal mt-1">{event.description}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* TODO: Add TimelineRoadmap, SidebarNav, CopilotButton, BackToTopButton, and animations */}
      <style jsx global>{`
        body { background: #000 !important; }
        .drop-shadow-glow { filter: drop-shadow(0 0 8px #00ffff); }
        .animate-pulse-slow { animation: pulseGlow 2.5s infinite alternate; }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0px #00ffff44; }
          100% { box-shadow: 0 0 16px #00ffff99; }
        }
        .animate-bounce-slow {
          animation: bounceSlow 3.5s infinite alternate;
        }
        @keyframes bounceSlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-24px); }
        }
        .animate-spin-slow {
          animation: spinSlow 12s linear infinite;
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-18px) scale(1.08); }
        }
      `}</style>
    </main>
  );
} 