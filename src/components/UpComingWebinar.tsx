'use client'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";
function UpComingWebinar() {
 const projects = [
    {
      title: "Web Development Essentials",
      description:
        "A comprehensive course covering HTML, CSS, and JavaScript to build foundational web development skills.",
      link: "https://www.freecodecamp.org/learn/responsive-web-design/",
      isFeatured: true,
    },
    {
      title: "Data Science with Python",
      description:
        "Learn data analysis, visualization, and machine learning using Python in this beginner-to-advanced course.",
      link: "https://www.coursera.org/specializations/data-science-python",
      isFeatured: true,
    },
    {
      title: "Cloud Computing Fundamentals",
      description:
        "An introductory course to cloud services, focusing on platforms like AWS, Azure, and Google Cloud.",
      link: "https://aws.amazon.com/training/learn-about/cloud-fundamentals/",
      isFeatured: true,
    },
    {
      title: "Cybersecurity Basics",
      description:
        "Understand the essentials of cybersecurity to protect networks, devices, and data from cyber threats.",
      link: "https://www.cybrary.it/course/introduction-to-it-and-cybersecurity/",
      isFeatured: true,
    },
    {
      title: "AI and Machine Learning",
      description:
        "Dive into the world of AI and learn machine learning algorithms, neural networks, and more.",
      link: "https://www.coursera.org/learn/machine-learning",
      isFeatured: true,
    },
    {
      title: "Blockchain Technology",
      description:
        "Explore the fundamentals of blockchain and decentralized technologies, covering use cases and real-world applications.",
      link: "https://www.edx.org/course/blockchain-fundamentals",
      isFeatured: true,
    },
  ];
  

  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'> Empowering Minds, Shaping the Future of IT</h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Unlock Your Potential with Tech-Driven Courses</p>
        </div>
        <div className='mt-10'>
        <HoverEffect items={projects} />
        </div>
        <div className=' mt-10 text-center'>
          <Link href={'/'}
           className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
Join Webinar

          </Link>
        </div>
      </div>
      </div>
  )
}

export default UpComingWebinar