'use client';

import Image from 'next/image';
import photo from '../../public/as.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';
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
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <section className="bg-white md:mt-[-60px] py-20 mt-[-20px] md:py-28 md:ml-10 min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div data-aos="fade-right" className="space-y-8">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-gray-900 drop-shadow-sm">
              Dr. Amarjeet Singh Chauhan <br />
              <span className="text-lg md:text-xl font-semibold text-blue-700">
                (Ph.D (CS) | M.Tech (CS) | B.Tech (CS))
              </span>
            </h1>
 <div
            data-aos="fade-up"
            className="md:hidden flex justify-center "
          >
            <div className="relative w-72 h-80  rounded-3xl overflow-hidden shadow-lg border border-gray-300 bg-white/60 backdrop-blur-lg">
              <Image
                src={photo}
                alt="Dr. Amarjeet Singh Chauhan"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
          </div>
            {/* Bio */}
            <div className="text-gray-700 text-justify space-y-5 text-base sm:text-lg leading-relaxed max-w-3xl">
              <p>
               I am a dedicated academician and researcher with a Ph.D. in Computer Science, specializing in Resource Allocation in IoT Cloud Environments\
                using Swarm Optimization, and over five years of teaching experience at both undergraduate and postgraduate levels.

              </p>
              <p>
                As a multidisciplinary researcher, my interests lie in the Internet of Things (IoT), 
                Drone Technologies, AI-Driven Agriculture, Embedded Systems, and Cloud Computing. I have authored multiple publications in reputed conferences, journals, and book chapters with international publishers such as Springer, Wiley, and CRC Press. I have also filed and been granted over 10 national and international patents, particularly in drone technology and IoT-based smart systems, and have received several project grants under MHRD and university funding schemes. I actively contribute to academia and industry-focused innovation by serving as a reviewer, editor, keynote speaker, and mentor.

              </p>
              <p>
                As a faculty member at DEI, I have independently taught a wide range of core and advanced subjects, 
                including Big Data Technologies, Cognitive Robotics, Applied Machine Learning, Cloud Computing, and 
                Cryptography and Network Security. I also possess hands-on expertise in programming (Python, C/C++, Java), web and mobile development, and hardware integration for IoT and drone-based systems.

              </p>
              <p>
                Beyond my academic and research endeavors, I have successfully led and supervised student innovations and projects in areas such as air quality monitoring, precision farming, mobile robotics, and drone-assisted services. My skill set also includes technical writing, drone piloting, embedded systems, full-stack web development, and mobile app development—areas I continuously explore to stay aligned with emerging technological trends.

              </p>
              <p>
                This portfolio serves as a comprehensive reflection of my journey through research, teaching, technological innovation, and academic contributions. It highlights not only my scholarly achievements but also my commitment to developing impactful, real-world IoT and AI solutions for sustainable development.

              </p>
            </div>

            {/* Research Interests */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
              {[
                { icon: <FaBrain />, text: 'Swarm Intelligence' },
                { icon: <FaProjectDiagram />, text: 'Evolutionary Algorithms' },
                { icon: <FaCogs />, text: 'Real-Time Systems' },
                { icon: <FaBookOpen />, text: 'Optimization Techniques' },
                { icon: <FaMicrochip />, text: 'Embedded Systems' },
                { icon: <FaRobot />, text: 'Artificial Intelligence' },
                { icon: <FaNetworkWired />, text: 'IoT Applications' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-lg px-4 py-2 text-blue-900 shadow-md transition-transform transform hover:scale-105"
                >
                  <span className="text-blue-700 text-xl">{icon}</span>
                  <span className="text-sm font-semibold">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <Link
                href="/publication"
                className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-2xl text-md font-semibold shadow-lg transition transform hover:-translate-y-1"
              >
                <FaBookOpen className="text-lg" /> View Publications
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-100 px-8 py-3 rounded-2xl text-md font-semibold shadow-sm transition transform hover:-translate-y-1"
              >
                <FaEnvelope className="text-lg" /> Contact Me
              </Link>
            </div>
          </div>

          {/* Image for Desktop */}
          <div
           
            className="hidden md:flex justify-center"
          >
            <div className="relative w-80 h-[480px] md:mt-[-730px] rounded-3xl overflow-hidden shadow-2xl border border-gray-300 bg-white/60 backdrop-blur-lg hover:shadow-3xl transition-shadow duration-500">
              <Image
               data-aos="fade-left"
                src={photo}
                alt="Dr. Amarjeet Singh Chauhan"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
          </div>

          {/* Image for Mobile */}
         
        </div>
      </section>
    </>
  );
}
