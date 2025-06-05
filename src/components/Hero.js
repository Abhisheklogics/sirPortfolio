'use client';

import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';
import photo from '../../public/as.jpg';

import { Spotlight } from './ui/spotlight-new';
import {
  FaEnvelope,
  FaBookOpen,
  FaBrain,
  FaRobot,
  FaNetworkWired,
  FaCogs,
  FaMicrochip,
  FaProjectDiagram,
} from 'react-icons/fa';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const expertise = [
    { icon: <FaBrain />, text: 'Swarm Intelligence' },
    { icon: <FaProjectDiagram />, text: 'Evolutionary Algorithms' },
    { icon: <FaCogs />, text: 'Real-Time Systems' },
    { icon: <FaBookOpen />, text: 'Optimization Techniques' },
    { icon: <FaMicrochip />, text: 'Embedded Systems' },
    { icon: <FaRobot />, text: 'Artificial Intelligence' },
    { icon: <FaNetworkWired />, text: 'IoT Applications' },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden px-4 py-16 md:py-24 text-black ">

    

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left Content */}
        <div className="w-full md:w-7/12 space-y-6 text-sm md:text-base text-center md:text-left">
          <h1
            data-aos="fade-right"
            className="text-3xl md:text-5xl font-bold leading-snug"
          >
            Dr. Amarjeet Singh Chauhan
            <span className="block mt-2 text-blue-900 text-lg md:text-2xl font-semibold">
              Ph.D. (CS) | M.Tech. (CS) | B.Tech. (CS)
            </span>
          </h1>

          {/* Mobile Image */}
          <div className="md:hidden">
            <Image
              src={photo}
              alt="Dr. Amarjeet Singh Chauhan"
              height={300}
              width={300}
              className="rounded-xl object-cover shadow-xl mx-auto"
              loading="lazy"
            />
          </div>

          {/* Description */}
          <div data-aos="fade-up" className="space-y-4 text-justify">
            <p>
              I am a dedicated academician and researcher with a Ph.D. in Computer Science,
              specializing in Resource Allocation in IoT Cloud Environments using Swarm Optimization,
              and over five years of teaching experience at both undergraduate and postgraduate levels.
            </p>
            <p>
              As a multidisciplinary researcher, my interests lie in the Internet of Things (IoT),
              Drone Technologies, AI-Driven Agriculture, Embedded Systems, and Cloud Computing.
              I have authored multiple publications in reputed conferences, journals, and book chapters
              with international publishers such as Springer, Wiley, and CRC Press. I have also filed
              and been granted over 10 national and international patents.
            </p>
            <p>
              As a faculty member at DEI, I have independently taught a wide range of subjects,
              including Big Data Technologies, Cognitive Robotics, Applied Machine Learning,
              Cloud Computing, and Cryptography and Network Security. I also possess hands-on expertise
              in programming (Python, C/C++, Java), web and mobile development, and hardware integration
              for IoT and drone-based systems.
            </p>
          </div>

          {/* Extended Description (Mobile) */}
          <div className="md:hidden space-y-4 text-justify">
            <p>
              Beyond my academic and research endeavors, I have successfully led and supervised student
              innovations and projects in areas such as air quality monitoring, precision farming,
              mobile robotics, and drone-assisted services. My skill set also includes technical writing,
              drone piloting, embedded systems, full-stack web development, and mobile app development.
            </p>
            <p>
              This portfolio reflects my journey through research, teaching, innovation, and impact—
              highlighting my commitment to developing real-world IoT and AI solutions for sustainable development.
            </p>
          </div>

          {/* Expertise Tags */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            {expertise.map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-lg px-4 py-2 text-blue-900 shadow-md hover:scale-105 transition-transform"
              >
                <span className="text-blue-700 text-xl">{icon}</span>
                <span className="text-sm font-semibold">{text}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <Link
              href="/book"
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl text-sm md:text-md font-semibold shadow-lg transition hover:-translate-y-1"
            >
              <FaBookOpen className="text-lg" /> View Publications
            </Link>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block  w-full md:w-[400px] relative">
        <div
  data-aos="fade-left"
  className="absolute top-[-200px] md:top-[-280px] left-0 right-0 mx-auto w-fit z-20 rounded-xl border border-white/10 backdrop-blur-md bg-white/10 p-2 shadow-2xl"
>

            <Image
              src={photo}
              alt="Dr. Amarjeet Singh Chauhan"
              width={500}
              height={200}
              className="rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Extended Desktop Description */}
      <div className="hidden md:block mt-12 max-w-4xl mx-auto text-justify space-y-4 text-sm md:text-base px-4">
        <p>
          Beyond my academic and research endeavors, I have successfully led and supervised student
          innovations and projects in areas such as air quality monitoring, precision farming,
          mobile robotics, and drone-assisted services. My skill set also includes technical writing,
          drone piloting, embedded systems, full-stack web development, and mobile app development—
          areas I continuously explore to stay aligned with emerging technological trends.
        </p>
        <p>
          This portfolio serves as a comprehensive reflection of my journey through research,
          teaching, technological innovation, and academic contributions. It highlights not only my
          scholarly achievements but also my commitment to developing impactful, real-world IoT and
          AI solutions for sustainable development.
        </p>
      </div>
    </section>
  );
}
