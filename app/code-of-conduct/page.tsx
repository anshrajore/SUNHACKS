"use client";

export default function CodeOfConduct() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden py-12 px-4">
      <div className="relative z-10 w-full max-w-3xl mx-auto bg-black/80 rounded-2xl shadow-2xl p-6 md:p-12 border border-white/10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#ff0055] via-white to-[#0077b5] bg-clip-text text-transparent animate-gradient-glow">🧭 CODE OF CONDUCT</h1>
        <p className="text-white/80 text-center mb-8 text-lg">At SUNHACKS 2025, we are committed to providing a safe, inclusive, and fair environment for all participants. Our Code of Conduct ensures that innovation thrives while maintaining mutual respect and integrity.</p>
        <div className="space-y-8">
          {/* Zero Tolerance Policy */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff0055] mb-2">🚫 Zero Tolerance Policy</h2>
            <p className="text-white/90 mb-2">The following actions are strictly prohibited and will lead to immediate disqualification, removal from the venue, and possible blacklisting from future events:</p>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>Plagiarism or code theft</li>
              <li>Harassment or discrimination (verbal, physical, or online)</li>
              <li>Use of drugs, alcohol, or tobacco on premises</li>
              <li>Disruptive, aggressive, or inappropriate behavior</li>
              <li>Data manipulation or any form of cheating</li>
              <li>Tampering with venue infrastructure or event software/tools</li>
              <li>Use of unauthorized hacking tools (e.g., packet sniffers, reverse engineering tools)</li>
            </ul>
          </div>
          {/* Expected Behavior */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#00ff99] mb-2">✅ Expected Behavior</h2>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>Maintain a respectful, inclusive, and collaborative attitude at all times.</li>
              <li>Seek mentorship and feedback constructively.</li>
              <li>Acknowledge and cite use of AI tools (e.g., ChatGPT), open-source resources, or external APIs in your project submission.</li>
              <li>Respect fellow participants, volunteers, mentors, judges, and organizers.</li>
            </ul>
          </div>
          {/* Grievance Reporting */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ffcc00] mb-2">📢 Grievance Reporting</h2>
            <p className="text-white/90">Anonymous reporting channels will be available during the event for any participant experiencing or witnessing misconduct. All concerns will be addressed confidentially and with seriousness.</p>
          </div>
          {/* Media & Event Coverage */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#00bfff] mb-2">📷 Media & Event Coverage</h2>
            <p className="text-white/90">By participating, you grant SUNHACKS permission to use photos/videos taken during the event for promotional and documentation purposes, with proper acknowledgment.</p>
          </div>
          {/* Safety & Responsibility */}
          <div>
            <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-[#ff8800] mb-2">⚠️ Safety & Responsibility</h2>
            <ul className="text-white/90 list-disc ml-6 space-y-1">
              <li>Bring your own equipment (laptops, chargers, peripherals).</li>
              <li>Keep your belongings secure — label your devices clearly.</li>
              <li>SUNHACKS is not responsible for any lost or damaged items</li>
            </ul>
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
      </div>
    </section>
  );
} 