"use client";
import { useEffect, useState } from "react";
import { FaUsers, FaIdBadge, FaLightbulb, FaCode, FaChalkboardTeacher, FaBed, FaBan, FaCertificate, FaExclamationTriangle, FaBullseye } from "react-icons/fa";

export default function ParticipantGuidelines() {
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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden py-12 px-4">
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
      <div className="relative z-10 w-full max-w-3xl mx-auto bg-black/80 rounded-2xl shadow-2xl p-6 md:p-12 border border-white/10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#ff0055] via-white to-[#0077b5] bg-clip-text text-transparent animate-gradient-glow">🛡️ SUNHACKS 2025 – Participation Guidelines</h1>
        <p className="text-white/80 text-center mb-8 text-lg">SUNHACKS 2025 invites the nation&apos;s brightest minds to innovate with integrity and build transformative GenAI solutions. To ensure fairness, safety, and a world-class experience, participants are expected to adhere to the following official guidelines:</p>
        <div className="space-y-8">
          {/* Team Composition */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2"><FaUsers /> Team Composition</h2>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>Each team must comprise of 2 to 4 members.</li>
              <li>Solo participation and post-registration team changes are strictly prohibited.</li>
              <li>Teams must select only one track at registration. Track changes post-registration will lead to disqualification.</li>
            </ul>
          </div>
          {/* Eligibility & Verification */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2"><FaIdBadge /> Eligibility & Verification</h2>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>Participants must present a valid government or college-issued photo ID during check-in.</li>
              <li>The hackathon is a fully in-person event. Remote collaboration or virtual participation is not permitted.</li>
              <li>Only registered participants are permitted inside the event premises. Guests, parents, or guardians are not allowed.</li>
            </ul>
          </div>
          {/* Ideation & Development Rules */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2"><FaLightbulb /> Ideation & Development Rules</h2>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>All development must begin strictly after the official hackathon kick-off.</li>
              <li>Usage of public APIs, datasets, and open-source libraries is allowed with proper citation and license compliance.</li>
              <li>Use of AI tools like ChatGPT is allowed, but must be declared and documented in the submission.</li>
              <li>Pre-written code, forked projects, or prior work will result in disqualification.</li>
            </ul>
          </div>
          {/* Code Submission Requirements */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2"><FaCode /> Code Submission Requirements</h2>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>All projects must be submitted via a fresh GitHub repository created on the day of the event. Repositories must include:</li>
              <ul className="ml-6 list-[circle]">
                <li>Complete source code</li>
                <li>README with setup and run instructions</li>
                <li>Optional: Live hosted/demo link</li>
                <li>Short pitch deck or feature list</li>
              </ul>
            </ul>
          </div>
          {/* Mentorship & Judging Flow */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2"><FaChalkboardTeacher /> Mentorship & Judging Flow</h2>
            <div className="ml-6">
              <div className="mb-2 text-white/90 font-semibold">🔹 Mentorship Rounds</div>
              <ul className="text-white/90 list-disc ml-6 space-y-1">
                <li>Ideation & Relevance</li>
                <li>Implementation Feedback</li>
                <li>Testing & Deployment Review</li>
              </ul>
              <div className="mb-2 mt-4 text-white/90 font-semibold">🔹 Judging Criteria</div>
              <ul className="text-white/90 list-disc ml-6 space-y-1">
                <li>Innovation & Impact</li>
                <li>Technical Robustness</li>
                <li>Presentation & Communication</li>
              </ul>
              <div className="mt-2 text-white/80">Live demo presentations are mandatory. Failure to attend your demo slot may result in disqualification.</div>
            </div>
          </div>
          {/* Accommodation & Facilities */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2"><FaBed /> Accommodation & Facilities</h2>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>Free accommodation is provided.</li>
              <li>For early arrival, participants must inform the organizing team at least 72 hours in advance (note: early meals/services will not be provided).</li>
              <li>Participants must bring their own laptops, chargers, and peripherals. Power and internet access will be available.</li>
            </ul>
          </div>
          {/* Prohibited Activities & Ethics */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2"><FaBan /> Prohibited Activities & Ethics</h2>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>SUNHACKS enforces a zero-tolerance policy for:</li>
              <ul className="ml-6 list-[circle]">
                <li>Plagiarism or code theft</li>
                <li>Harassment, discrimination, or disruptive behavior</li>
                <li>Unauthorized AI or hacking tools</li>
                <li>Drug, alcohol, or tobacco use</li>
                <li>Tampering with venue infrastructure</li>
              </ul>
              <li>Violations will result in immediate disqualification, venue removal, and potential blacklisting from future events.</li>
            </ul>
          </div>
          {/* Certificate & World Record Participation */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2"><FaCertificate /> Certificate & World Record Participation</h2>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>All registered participants will receive an official digital participation certificate from SUNHACKS.</li>
              <li>If a world record is officially achieved, participants may apply for a separate world record certificate from the relevant authority.</li>
              <li>Note: Associated costs must be borne by the participant directly.</li>
            </ul>
          </div>
          {/* Additional Rules */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2"><FaExclamationTriangle /> Additional Rules</h2>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>No travel allowance will be provided.</li>
              <li>Bus schedule (if applicable) will be shared ahead of the event.</li>
              <li>Event decisions are final. All disputes will be resolved by the SUNHACKS Governance Panel.</li>
            </ul>
          </div>
          {/* Final Note */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2"><FaBullseye /> Final Note</h2>
            <p className="text-white/90 ml-6">Participation in SUNHACKS 2025 implies full acceptance of these guidelines. By joining, you agree to collaborate ethically, innovate fearlessly, and contribute meaningfully to the GenAI revolution.</p>
            <p className="text-white/90 ml-6 mt-2 font-bold">Let&apos;s build the future — one line of code at a time. 🚀</p>
          </div>
        </div>
      </div>
      <style jsx>{`
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
      `}</style>
    </section>
  );
} 