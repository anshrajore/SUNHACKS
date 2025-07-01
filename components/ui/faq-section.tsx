"use client";

import * as React from "react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FaInstagram, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

type ViewType = "general" 

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

interface FAQSection {
  category: string;
  items: FAQItem[];
}

interface FAQAccordionProps {
  category: string;
  items: FAQItem[];
}

const FAQ_SECTIONS: Record<ViewType, FAQSection> = {
  general: {
    category: "General",
    items: [
      {
        id: "who-can-participate",
        question: "Who can participate in SunHacks 2025?",
        answer: "All college students, professionals, startup teams, and AI enthusiasts across India are welcome to participate. You don't need to be an expert — just bring passion and curiosity!",
      },
      {
        id: "registration-fee",
        question: "Is there any registration fee?",
        answer: "No. Registration and participation in SunHacks 2025 is absolutely free.",
      },
      {
        id: "solo-participation",
        question: "Can I participate solo?",
        answer: "No, each team must have 2 to 4 members. If you register alone, don't worry — we'll help you form a team during the event.",
      },
      {
        id: "hackathon-format",
        question: "What is the format of the hackathon?",
        answer: "It's an in-person, 36-hour non-stop hackathon held at Sandip University, Nashik on 22nd–23rd July 2025.",
      },
      {
        id: "accommodation-meals",
        question: "Will accommodation and meals be provided?",
        answer: "Yes! All participants will receive free accommodation and meals during the event dates (22nd–23rd July only).",
      },
      {
        id: "what-to-bring",
        question: "What should I bring to the event?",
        answer: "Your laptop, charger, ID proof (college or government-issued), any required personal items, and your creativity.",
      },
      {
        id: "certificate",
        question: "Will I get a certificate?",
        answer: "Yes. All registered participants will receive a free digital participation certificate from SunHacks 2025.\n\nIf our record is officially approved by any world record organization, participants can optionally apply for an official world record certificate directly from that authority. Please note: this certificate is not handled or paid for by SunHacks. (See Rule 9 in our rulebook)",
      },
      {
        id: "winner-selection",
        question: "How will winners be selected?",
        answer: "Your project will go through 3 mentorship rounds and 3 judging rounds, focusing on creativity, problem-solving, execution, and real-world relevance.",
      },
      {
        id: "sleep-during-hackathon",
        question: "Can I sleep during the hackathon?",
        answer: "Yes… technically. But while you sleep, others will be coding their way to victory (and maybe your prize 🧠💻). There's a chill zone and snacks, but the energy will keep you awake!",
      },
    ],
  },
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({ category, items }) => (
  <div className="">
    <Badge variant={"outline"} className="py-2 px-6 rounded-md border-white text-black bg-white mb-6">{category}</Badge>
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id} className="border-b border-white">
          <AccordionTrigger className="text-left hover:no-underline text-white">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-white bg-black/80 border-t border-white">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export const Component = () => {
  const [activeView] = useState<ViewType>("general");

  // Starfield background (copied from testimonials-section)
  const [stars, setStars] = React.useState<{ left: number; top: number; size: number; opacity: number }[]>([]);
  React.useEffect(() => {
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
      <div className="container z-10 mx-auto px-4 py-16 max-w-4xl">
        <header className="text-center mb-12">
          <p className="text-sm font-medium text-black mb-2 bg-white inline-block px-3 py-1 rounded">FAQs</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">Frequently asked questions</h1>
          <p className="text-xl text-white/70">Need help with something? Here are our most frequently asked questions.</p>
        </header>
        <FAQAccordion
          category={FAQ_SECTIONS[activeView].category}
          items={FAQ_SECTIONS[activeView].items}
        />
      </div>
    </section>
  );
};

export const ContactUsSection = () => {
  // Starfield background (reuse from above)
  const [stars, setStars] = React.useState<{ left: number; top: number; size: number; opacity: number }[]>([]);
  React.useEffect(() => {
    setStars(
      Array.from({ length: 80 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() > 0.98 ? 2 : 1,
        opacity: Math.random() * 0.7 + 0.2,
      }))
    );
  }, []);

  return (
    <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center bg-black overflow-hidden py-16 px-4">
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
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
        {/* Left: SunHacks Info */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans mb-2 animate-pulse bg-gradient-to-r from-[#ff0055] via-white to-[#0077b5] bg-clip-text text-transparent" style={{ fontFamily: 'monospace, "Orbitron", "Montserrat", sans-serif' }}>Contact <span className="drop-shadow-glow">Us</span></h2>
          <div className="text-white/80 text-2xl md:text-3xl font-extrabold mb-1 tracking-widest animate-gradient-glow" style={{ fontFamily: 'monospace, "Orbitron", "Montserrat", sans-serif', letterSpacing: '0.1em' }}>SunHacks 2025</div>
          <div className="text-[#ff0055] text-base md:text-lg font-semibold animate-pulse">India&apos;s Most Energetic Student Hackathon</div>
          <div className="text-white/70 text-base md:text-lg max-w-md">36 hours of non-stop innovation, collaboration, and fun! Join 1500+ hackers, creators, and dreamers at Sandip University, Nashik.</div>
          <div className="flex flex-col gap-1 mt-2">
            <div className="text-white/80 text-sm md:text-base"><span className="font-bold text-[#ff0055]">Event Dates:</span> 22nd–23rd July 2025</div>
            <div className="text-white/80 text-sm md:text-base"><span className="font-bold text-[#ff0055]">Venue:</span> Sandip University, Mahiravani, Tal & Dist: Nashik - Trambakeshwar Rd, Nashik, Maharashtra 422213</div>
            <div className="text-white/80 text-sm md:text-base"><span className="font-bold text-[#ff0055]">Organizer Phone:</span> +91-9096946604</div>
          </div>
          {/* Glowing Join Discord Button */}
          <a href="https://discord.gg/8hWwtGbt" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block px-8 py-3 rounded-full font-bold text-lg bg-gradient-to-r from-[#5865F2] via-[#ff0055] to-[#0077b5] text-white shadow-lg shadow-[#5865F2]/40 animate-glow hover:scale-105 transition-transform duration-200 border-2 border-white/10 hover:border-[#5865F2] focus:outline-none focus:ring-2 focus:ring-[#5865F2]">
            <span className="flex items-center gap-2"><FaDiscord className="text-2xl animate-spin-slow" /> Join our Discord</span>
          </a>
        </div>
        {/* Right: Contact & Socials */}
        <div className="flex-1 flex flex-col gap-6 md:items-end items-start">
          <div className="flex flex-col gap-2">
            <div className="text-white/80 text-lg font-semibold mb-1">Email:</div>
            <div className="flex gap-4">
              <a href="mailto:anshrajore.csa@sandipuniversity.edu.in" className="bg-white/10 hover:bg-[#ff0055] hover:text-white text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center text-2xl animate-glow" title="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="text-white/80 text-lg font-semibold mb-1">Follow Us:</div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/sunhack_official?igsh=eng2MnJjMGJvNDR1" className="bg-white/10 hover:bg-[#ff0055] hover:text-white text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center text-2xl animate-glow"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/sun-hacks-69a5b9371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-white/10 hover:bg-[#0077b5] hover:text-white text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center text-2xl animate-glow"><FaLinkedin /></a>
              <a href="https://discord.gg/8hWwtGbt" className="bg-white/10 hover:bg-[#5865F2] hover:text-white text-white p-3 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center text-2xl animate-glow"><FaDiscord /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Fun Animated Divider */}
      <div className="w-full flex justify-center my-10">
        <div className="flex gap-2 animate-pulse">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-[#ff0055]' : 'bg-[#5865F2]'} shadow-lg animate-bounce`} style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      {/* Meet the Team Row */}
      
      {/* Footer */}
      <div className="w-full border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-xs md:text-sm">
        <div>© {new Date().getFullYear()} SunHacks. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Code of Conduct</a>
          <Link href="/participant-guidelines" className="hover:text-white">Participant Guidelines</Link>
        </div>
        <div className="flex items-center gap-1">Made by Ansh Rajore <span className="text-[#ff0055]">♥</span></div>
      </div>
      {/* Custom Animations */}
      <style jsx>{`
        .animate-glow {
          box-shadow: 0 0 16px #ff0055, 0 0 32px #5865F2, 0 0 8px #fff2;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #ff0055);
        }
        .animate-gradient-glow {
          background: linear-gradient(90deg, #ff0055, #fff, #5865F2, #0077b5);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientMove 3s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};