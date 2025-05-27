'use client';

import Image from 'next/image';
import photo from '../../public/as.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';
import Footer from './Footer';
import {
  FaEnvelope,
  FaLinkedin,
  FaPhoneAlt,
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
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="bg-white md:mt-[-80px] py-16 md:py-24 md:ml-10  min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image for Mobile First */}
        

          {/* Text Content */}
          <div data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight text-center md:text-left">
              Dr. Amarjeet Singh Chauhan
            </h1>
  <div
            data-aos="fade-up"
            className="md:hidden flex justify-center"
          >
            <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white/50 backdrop-blur-md">
              <Image
                src={photo}
                alt="Dr. Amarjeet Singh Chauhan"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
          </div>
            <p className="text-xl mt-4 md:text-2xl text-blue-800 font-semibold mb-4 text-center md:text-left">
              Ph.D. (CS) | M.Tech (CS) | Lecturer – Dept. of Physics & CS, DEI Agra
            </p>

            {/* Bio */}
            <div className="text-gray-700 text-justify space-y-4 text-base sm:text-lg leading-relaxed mb-6">
              <p>
               I am a dedicated academician and researcher with a Ph.D. in Computer Science, specializing in Resource Allocation in IoT Cloud Environments using Swarm Optimization, and over five years of teaching experience at both undergraduate and postgraduate levels.
</p>
              <p>
               As a multidisciplinary researcher, my interests lie in the Internet of Things (IoT), Drone Technologies, AI-Driven Agriculture, Embedded Systems, and Cloud Computing. I have authored multiple publications in reputed conferences, journals, and book chapters with international publishers such as Springer, Wiley, and CRC Press. I have also filed and been granted over 10 national and international patents, particularly in drone technology and IoT-based smart systems, and have received several project grants under MHRD and university funding schemes. I actively contribute to academia and industry-focused innovation by serving as a reviewer, editor, keynote speaker, and mentor.

              </p>
              <p>
              As a faculty member at DEI, I have independently taught a wide range of core and advanced subjects, including Big Data Technologies, Cognitive Robotics, Applied Machine Learning, Cloud Computing, and Cryptography and Network Security. I also possess hands-on expertise in programming (Python, C/C++, Java), web and mobile development, and hardware integration for IoT and drone-based systems.
              </p>
              <p>
               Beyond my academic and research endeavors, I have successfully led and supervised student innovations and projects in areas such as air quality monitoring, precision farming, mobile robotics, and drone-assisted services. My skill set also includes technical writing, drone piloting, embedded systems, full-stack web development, and mobile app development—areas I continuously explore to stay aligned with emerging technological trends.

              </p>
                <p>
               This portfolio serves as a comprehensive reflection of my journey through research, teaching, technological innovation, and academic contributions. It highlights not only my scholarly achievements but also my commitment to developing impactful, real-world IoT and AI solutions for sustainable development.

              </p>
            </div>

            {/* Research Interests */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {[
                { icon: <FaBrain />, text: 'Swarm Intelligence' },
                { icon: <FaProjectDiagram />, text: 'Evolutionary Algorithms' },
                { icon: <FaCogs />, text: 'Real-Time Systems' },
                { icon: <FaBookOpen />, text: 'Optimization Techniques' },
                { icon: <FaMicrochip />, text: 'Embedded Systems' },
                { icon: <FaRobot />, text: 'Artificial Intelligence' },
                { icon: <FaNetworkWired />, text: 'IoT Applications' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-blue-100 rounded-lg px-3 py-2 text-blue-800 shadow-sm">
                  <span className="text-blue-600 text-lg">{icon}</span>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/publication"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-md transition flex items-center gap-2"
              >
                <FaBookOpen /> View Publications
              </Link>
              <Link
                href="/contact"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-xl text-sm font-semibold transition flex items-center gap-2"
              >
                <FaEnvelope /> Contact Me
              </Link>
            </div>
          </div>

          {/* Image for Desktop */}
          <div
            data-aos="fade-top"
            className="hidden md:flex justify-center"
          >
            <div className="relative w-80 h-[440px] md:mt-[-780px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white/50 backdrop-blur-md">
              <Image
                src={photo}
                alt="Dr. Amarjeet Singh Chauhan"
                fill
                className="object-cover scale-105"
                priority
              />
            </div>
          </div>
 <div className="space-y-4 max-w-md mx-auto md:mx-0">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <FaEnvelope className="text-xl text-blue-700" />
          <a href="mailto:amarjeetsinghchauhan96@gmail.com" className="hover:underline">
            amarjeetsinghchauhan96@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <FaEnvelope className="text-xl text-blue-700" />
          <a href="mailto:amarjeetsinghchauhan@dei.ac.in" className="hover:underline">
            amarjeetsinghchauhan@dei.ac.in
          </a>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <FaLinkedin className="text-xl text-blue-700" />
          <Link
            href="https://www.linkedin.com/in/amarjeet-singh-chauhan-099243130"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </Link>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <FaPhoneAlt className="text-xl text-blue-700" />
          <a href="tel:+917248132510" className="hover:underline">
            +91 7248132510
          </a>
        </div>
        </div>
        </div>
      </section>
    </>
  );
}
