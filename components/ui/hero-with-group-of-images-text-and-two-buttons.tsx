import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { StarfieldBackground } from "@/components/ui/space-tracks-demo";

const aboutImages = [
  { src: "/tt8.jpg", alt: "Group discussion in classroom" },
  { src: "/IMG_6142.jpeg", alt: "Group discussion in classroom" },
  { src: "/IMG_6155.jpeg", alt: "SunHacks participants and mentors" },
  { src: "/IMG_6162.jpeg", alt: "Audience in seminar hall" },
  { src: "/IMG_6171.jpeg", alt: "Group photo with UDAAN frame" },
  { src: "/IMG_6130.jpeg", alt: "Team presenting at podium" },
];

function Hero() {
  return (
    <div className="relative w-full pt-8 pb-12 lg:pt-12 lg:pb-20 px-4 overflow-hidden bg-black">
      {/* Starfield Background */}
      <StarfieldBackground starCount={120} />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 items-start">
          <div className="flex gap-2 flex-col">
            <div>
              <Badge variant="outline" className="text-white border-white">About</Badge>
            </div>
            <div className="flex gap-0.5 flex-col">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl md:max-w-2xl tracking-tighter text-left font-bold text-white">
                Innovate Boldly. Break Records. Build the Future.
              </h1>
              <div className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-xl md:max-w-2xl text-left space-y-2">
                <p>
                  SunHacks is India&apos;s premier GenAI hackathon, hosted in Nashik by Sandip University. Designed to unite the country&apos;s brightest minds, this groundbreaking <b> 36-hour in-person </b> event brings together over 1500+ developers, data scientists, and AI innovators to solve real-world challenges using Generative AI and cutting-edge technologies.
                </p>
                <p>
                  As the organizers of India&apos;s Largest GenAI Hackathon, SunHacks is not only a platform for breakthrough ideas — it&apos;s a <b>World Record attempt</b>, pushing the boundaries of collaborative innovation at scale.
                </p>
                <p>
                  With curated tracks like FinTech, HealthTech, Sustainability, SaaS, and GenAI/ML, participants will engage in high-impact ideation, hands-on mentorship, and live pitching to top industry experts. Whether you&apos;re a seasoned developer or a rising tech enthusiast, SunHacks offers national visibility, deep learning experiences, and unmatched networking with recruiters, mentors, and fellow visionaries.
                </p>
                <p>
                  Join us in this transformative journey — where technology meets ambition, and innovation makes history.
                </p>
              </div>
              {/* Glass/space-themed button to timeline */}
              <a
                href="/timeline"
                className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-cyan-400/40 text-cyan-200 font-bold text-lg shadow-lg transition-all duration-200 hover:bg-cyan-400/20 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 glassy-space-btn relative overflow-hidden"
                style={{boxShadow: '0 0 24px 4px #00ffff33, 0 0 48px 8px #a259ff22'}}
              >
                <span className="mr-2 text-2xl animate-spin-slow">🪐</span>
                View Full Timeline
                <span className="ml-2 text-xl animate-float">🚀</span>
                {/* Sparkle effect */}
                <span className="absolute left-2 top-2 w-2 h-2 bg-cyan-300 rounded-full opacity-70 animate-pulse-slow" />
                <span className="absolute right-2 bottom-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60 animate-float" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8 mt-8 md:mt-0">
            <div className="bg-muted rounded-md aspect-square overflow-hidden relative">
              <Image src={aboutImages[0].src} alt={aboutImages[0].alt} fill style={{objectFit:'cover'}} />
            </div>
            <div className="bg-muted rounded-md row-span-2 overflow-hidden relative">
              <Image src={aboutImages[1].src} alt={aboutImages[1].alt} fill style={{objectFit:'cover'}} />
            </div>
            <div className="bg-muted rounded-md aspect-square overflow-hidden relative">
              <Image src={aboutImages[2].src} alt={aboutImages[2].alt} fill style={{objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .glassy-space-btn {
          background: linear-gradient(120deg, rgba(0,0,32,0.7) 0%, rgba(0,0,0,0.8) 100%);
          border: 1.5px solid rgba(0,255,255,0.18);
          box-shadow: 0 0 24px 4px #00ffff33, 0 0 48px 8px #a259ff22;
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
          100% { transform: translateY(-8px) scale(1.08); }
        }
      `}</style>
    </div>
  );
}

export { Hero };
