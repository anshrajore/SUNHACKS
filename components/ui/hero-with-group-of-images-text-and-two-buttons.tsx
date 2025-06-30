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
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-start">
          <div className="flex gap-4 flex-col">
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
    </div>
  );
}

export { Hero };
