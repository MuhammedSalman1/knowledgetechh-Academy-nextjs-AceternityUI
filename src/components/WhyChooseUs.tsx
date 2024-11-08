"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
  {
    title: "Hands-On Learning",
    description:
      "At KnowledgeTech Academy, we believe in learning by doing. Our courses emphasize practical, hands-on training, enabling students to apply knowledge directly to real-world scenarios. Learn, practice, and master the skills that industry leaders demand.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
        Hands-On Learning
      </div>
    ),
  },
  {
    title: "Expert-Led Classes",
    description:
      "Learn from industry professionals with years of experience in the IT field. Our instructors bring real-world insights and up-to-date knowledge, ensuring you receive high-quality education that is relevant and impactful.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        Expert-Led Classes
      </div>
    ),
  },
  {
    title: "Career-Ready Curriculum",
    description:
      "Our courses are designed to prepare you for the job market. Gain valuable skills and certifications that boost your employability and set you on the path to a successful career in IT.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Career-Ready Curriculum
      </div>
    ),
  },
  {
    title: "Personalized Support",
    description:
      "We’re committed to your success. Receive personalized support, one-on-one mentoring, and a learning experience tailored to meet your individual goals. At KnowledgeTech Academy, we help you succeed every step of the way.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--green-500))] flex items-center justify-center text-white">
        Personalized Support
      </div>
    ),
  },
];
 

function WhyChooseUs() {
  return (
    <div className="p-10">
    <StickyScroll content={content} />
  </div>
  )
}

export default WhyChooseUs
