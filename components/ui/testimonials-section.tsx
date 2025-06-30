"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const testimonials = [
  {
    text: "Sunhacks was intense and immersive! The 36-hour challenge pushed our limits and helped us grow as a team. We walked in as students and walked out as real builders.",
    image: "data:image/png;base64,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",
    name: "Akshay Desale",
    role: "Developer",
  },
  {
    text: "I loved the inclusivity at Sunhacks. As someone from a non-coding background, I felt empowered to contribute through UI/UX. The mentors made it easy to stay confident and creative",
    image: "data:image/jpeg;base64,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",
    name: "Shakuntala Saund",
    role: "UI/UX Designer",
  },
  {
    text: "The hardware lab was a dream come true. From soldering kits to Raspberry Pis, we had it all. Sunhacks was the perfect blend of chaos, code, and caffeine.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8QEA8QFRUPEBAQEBcQEBAQFQ8QFRUWFhUVFRUYHSggGB4mGxUYITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0gHyUtMC8tKy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgIDBAUHAQj/xABGEAACAQIDBAYHBwYEBQUAAAABAAIDBBEFEiEGMUFREyJhcYGRBzJCobHB0RQjUnLwM2KCkrLhQ3OiwhUks+LxNWODk9L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQb/EACwRAAICAQIFBwYEBQUAAAAAAAAABAgMRBBASITFBUQYTQWGRobHh8f/aAAgBAQABPyH/AP/Z",
    name: "Fizaan Mansuri",
    role: "Hardware Hacker",
  },
  {
    text: "I was nervous joining my first hackathon, but Sunhacks made me feel right at home. Friendly mentors, helpful volunteers, and the best midnight chai ever.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8QEA8QFRUPEBAQEBcQEBAQFQ8QFRUWFhUVFRUYHSggGB4mGxUYITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0gHyUtMC8tKy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABIEAACAQIDBAYHBwYEBQUAAAABAAIDBBEFEiEGMUFREyJhcYGRBzJCobHB0RQjUnLwM2KCkrLhQ3OiwhUks+LxNWODk9L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQb/EACwRAAICAQIFBwYEBQUAAAAAAAAABAgMRBBASITFBUQYTQWGRobHh8f/aAAgBAQABPyH/AP/Z",
    name: "Kartik Patil",
    role: "First-time Hacker",
  },
  {
    text: "What stood out was the amazing networking. I met developers from different states, exchanged ideas, and even found a co-founder. Sunhacks wasn't just a hackathon—it was a turning point.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8QEA8QFRUPEBAQEBcQEBAQFQ8QFRUWFhUVFRUYHSggGB4mGxUYITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0gHyUtMC8tKy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgIDBAUHAQj/xABIEAACAQIDBAYHBwYEBQUAAAABAAIDBBEFEiEGMUFREyJhcYGRBzJCobHB0RQjUnLwM2KCkrLhQ3OiwhUks+LxNWODk9L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQb/EACwRAAICAQIFBwYEBQUAAAAAAAAABAgMRBBASITFBUQYTQWGRobHh8f/aAAgBAQABPyH/AP/Z",
    name: "Nikhil Patil",
    role: "Final Year Student",
  },
  {
    text: "Sunhacks gave us access to incredible APIs and cloud credits. We prototyped an AI tool in less than 24 hours. The technical support and workshops were top-notch.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfkj3AaFBJBkJOANddXsL5BKh_aX8S0Hl_Q&s",
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
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8QEA8QFRUPEBAQEBcQEBAQFQ8QFRUWFhUVFRUYHSggGB4mGxUYITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0gHyUtMC8tKy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgIDBAUHAQj/xABIEAACAQIDBAYHBwYEBQUAAAABAAIDBBEFEiEGMUFREyJhcYGRBzJCobHB0RQjUnLwM2KCkrLhQ3OiwhUks+LxNWODk9L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQb/EACwRAAICAQIFBwYEBQUAAAAAAAAABAgMRBBASITFBUQYTQWGRobHh8f/aAAgBAQABPyH/AP/Z",
    name: "Prathamesh Tiwari",
    role: "CSE Fresher",
  },
  {
    text: "I've attended hackathons across India, but Sunhacks had a different vibe—retro aesthetics, fast-paced energy, and a strong sense of community. Definitely one to watch!",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8QEA8QFRUPEBAQEBcQEBAQFQ8QFRUWFhUVFRUYHSggGB4mGxUYITEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGy0gHyUtMC8tKy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAgj/xABIEAACAQIDBAYHBwYEBQUAAAABAAIDBBEFEiEGMUFREyJhcYGRBzJCobHB0RQjUnLwM2KCkrLhQ3OiwhUks+LxNWODk9L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQb/EACwRAAICAQIFBwYEBQUAAAAAAAAABAgMRBBASITFBUQYTQWGRobHh8f/aAAgBAQABPyH/AP/Z",
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