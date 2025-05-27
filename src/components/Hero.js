'use client';

import Image from 'next/image';
import photo from '../../public/as.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';
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
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20 md:py-32 md:mt-[-100px] mt-[-40px] md:ml-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Block */}
        <div data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
            Dr. Amarjeet Singh Chauhan
          </h1>
          <p className="text-lg md:text-xl text-blue-700 font-medium mb-2">
            Ph.D. (CS) | M.Tech (CS) | Lecturer – Dept. of Physics & CS, DEI Agra
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 text-blue-800 text-sm md:text-base mb-6">
            <div className="flex items-center gap-2"><FaEnvelope /> amarjeetsinghchauhan96@gmail.com</div>
            <div className="flex items-center gap-2"><FaEnvelope /> amarjeetsinghchauhan@dei.ac.in</div>
            <div className="flex items-center gap-2"><FaLinkedin /> <Link href="https://www.linkedin.com/in/amarjeet-singh-chauhan-099243130" className="hover:underline">LinkedIn Profile</Link></div>
            <div className="flex items-center gap-2"><FaPhoneAlt /> +91 7248132510</div>
          </div>

          {/* Bio Summary */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 text-justify">
           I am a dedicated academician and researcher with a Ph.D. in Computer Science, specializing in Resource Allocation in IoT Cloud Environments using Swarm Optimization, and over five years of teaching experience at both undergraduate and postgraduate levels.

          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 text-justify">
           As a multidisciplinary researcher, my interests lie in the Internet of Things (IoT), Drone Technologies, AI-Driven Agriculture, Embedded Systems, and Cloud Computing. I have authored multiple publications in reputed conferences, journals, and book chapters with international publishers such as Springer, Wiley, and CRC Press. I have also filed and been granted over 10 national and international patents, particularly in drone technology and IoT-based smart systems, and have received several project grants under MHRD and university funding schemes. I actively contribute to academia and industry-focused innovation by serving as a reviewer, editor, keynote speaker, and mentor.

          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-justify">
            As a faculty member at DEI, I have independently taught a wide range of core and advanced subjects, including Big Data Technologies, Cognitive Robotics, Applied Machine Learning, Cloud Computing, and Cryptography and Network Security. I also possess hands-on expertise in programming (Python, C/C++, Java), web and mobile development, and hardware integration for IoT and drone-based systems.
          </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-justify">
           Beyond my academic and research endeavors, I have successfully led and supervised student innovations and projects in areas such as air quality monitoring, precision farming, mobile robotics, and drone-assisted services. My skill set also includes technical writing, drone piloting, embedded systems, full-stack web development, and mobile app development—areas I continuously explore to stay aligned with emerging technological trends.

          </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-justify">
            This portfolio serves as a comprehensive reflection of my journey through research, teaching, technological innovation, and academic contributions. It highlights not only my scholarly achievements but also my commitment to developing impactful, real-world IoT and AI solutions for sustainable development.

          </p>

          {/* Research Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { icon: <FaBrain />, text: 'Swarm Intelligence' },
              { icon: <FaProjectDiagram />, text: 'Evolutionary Algorithms' },
              { icon: <FaCogs />, text: 'Real-Time Systems' },
              { icon: <FaBookOpen />, text: 'Optimization Techniques' },
              { icon: <FaMicrochip />, text: 'Embedded Systems' },
              { icon: <FaRobot />, text: 'Artificial Intelligence' },
              { icon: <FaNetworkWired />, text: 'IoT Applications' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-blue-800">
                <span className="text-blue-600">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/publication"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
            >
              <FaBookOpen /> View Publications
            </Link>
            <Link
              href="/contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
            >
              <FaEnvelope /> Contact Me
            </Link>
          </div>
        </div>

        {/* Image Block */}
        <div data-aos="fade-left" className="hidden md:flex justify-center md:mt-[-200px]">
          <div className="relative w-[320px] h-[440px] rounded-2xl overflow-hidden shadow-xl border border-gray-300">
            <Image
              src={photo}
              alt="Dr. Amarjeet Singh Chauhan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
