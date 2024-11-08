import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpComingWebinar from "@/components/UpComingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
 <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
  <HeroSection/>
  <FeaturedCourses/>
  <WhyChooseUs/>
  <TestimonialCards/>
  <UpComingWebinar/>
  <Instructors/>
  <Footer/>
 </main>
  );
}
