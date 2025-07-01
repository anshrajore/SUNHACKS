"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Component as FAQSection, ContactUsSection } from "@/components/ui/faq-section";

const testimonials = [
  {
    text: "Sunhacks was intense and immersive! The 36-hour challenge pushed our limits and helped us grow as a team. We walked in as students and walked out as real builders.",
    image: "/A1.jpeg",
    name: "Akshay Desale",
    role: "Developer",
  },
  {
    text: "I loved the inclusivity at Sunhacks. As someone from a non-coding background, I felt empowered to contribute through UI/UX. The mentors made it easy to stay confident and creative",
    image: "/A5.jpeg",
    name: "Shakuntala Saud",
    role: "UI/UX Designer",
  },
  {
    text: "The hardware lab was a dream come true. From soldering kits to Raspberry Pis, we had it all. Sunhacks was the perfect blend of chaos, code, and caffeine.",
    image: "/A3.jpeg",
    name: "Fizaan Mansuri",
    role: "Hardware Hacker",
  },
  {
    text: "I was nervous joining my first hackathon, but Sunhacks made me feel right at home. Friendly mentors, helpful volunteers, and the best midnight chai ever.",
    image: "/A4.jpeg",
    name: "Kartik Patil",
    role: "First-time Hacker",
  },
  {
    text: "What stood out was the amazing networking. I met developers from different states, exchanged ideas, and even found a co-founder. Sunhacks wasn't just a hackathon—it was a turning point.",
    image: "/A6.jpeg",
    name: "Nikhil Patil",
    role: "Final Year Student",
  },
  {
    text: "Sunhacks gave us access to incredible APIs and cloud credits. We prototyped an AI tool in less than 24 hours. The technical support and workshops were top-notch.",
    image: "/A7.jpeg",
    name: "Anushka Deshmukh",
    role: "AI Enthusiast",
  },
  {
    text: "As a mentor, I was amazed by the energy and curiosity of the hackers. The organizing team did a fantastic job balancing creativity and structure.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1S3geHH6KDq3TSQbRxsBAFdVDnP5zdDR9g&s",
    name: "Dr Rohit Gupta",
    role: "Mentor",
  },
  {
    text: "My biggest takeaway was confidence. I pitched my idea for the first time, collaborated with strangers, and built something I was proud of. Can't wait for Season 2!",
    image: "/A2.jpeg",
    name: "Prathamesh Tiwari",
    role: "CSE Fresher",
  },
  {
    text: "I've attended hackathons across India, but Sunhacks had a different vibe—retro aesthetics, fast-paced energy, and a strong sense of community. Definitely one to watch!",
    image: "/A8.jpeg",
    name: "Vedant Lokhande ",
    role: " Developer & Blogger",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
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
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-white bg-black/60">Testimonials</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-white">
          Voices of Sunhacks
          </h2>
          <p className="text-center mt-5 opacity-75 text-white">
          Commits, Collabs & Comments
          </p>
        </motion.div>
        <div className="flex justify-center gap-26 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-black"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-black/80 text-white" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

// Add the FAQ section after the testimonials
export function TestimonialsWithFAQ() {
  return (
    <>
      <Testimonials />
      <FAQSection />
      <ContactUsSection />
    </>
  );
} 