"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// Define the type for the testimonials array
interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "KnowledgeTech Academy provided me with the hands-on experience I needed to feel confident in my IT skills. The instructors were always supportive and made sure I understood the concepts before moving forward.",
    name: "Jazil Ahmed Siddique",
    title: "Web Development Graduate",
  },
  {
    quote:
      "This academy changed my career! I came in with limited tech knowledge and left with the skills to land a job in software development. The curriculum was challenging but rewarding, and the real-world projects were invaluable.",
    name: "Muhammed Salman",
    title: "Software Engineering Student",
  },
  {
    quote:
      "What sets KnowledgeTech Academy apart is the quality of teaching and the practical approach. I’ve gained a strong foundation in cybersecurity that has opened doors for me professionally. The personalized support was exceptional.",
    name: "Rao Abdul Hai",
    title: "Cybersecurity Course Graduate",
  },
  {
    quote:
      "I’ve never felt more prepared for a career in IT. KnowledgeTech Academy gave me the tools to succeed, from hands-on labs to guidance on career-building. I’m grateful for the experience and highly recommend it!",
    name: "Khubab Siddique",
    title: "IT Support Specialist Program Alumni",
  },
  {
    quote:
      "The training at KnowledgeTech Academy is on another level. The instructors shared real-world insights, and the career-ready curriculum made me job-ready. I now have a rewarding job in data science, thanks to them!",
    name: "Hanan Baloch",
    title: "Data Science Graduate",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-white text-center mb-8 z-10 ">
        Success Stories from KnowledgeTech Academy
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
