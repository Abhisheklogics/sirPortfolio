'use client';

import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';
import photo from '../../public/as.jpg';

import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { Spotlight } from './ui/Spotlight';
import { Vortex } from './ui/vortex';

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
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-10 "
    >
      <Spotlight />

      <div className="w-full text-white flex flex-col items-center justify-center gap-10 px-4">
        <div className="w-full mt-md:w-2/3 space-y-6 text-sm md:text-base text-center md:text-left">
          <h1
            data-aos="fade-right"
            className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-md"
          >
            Dr. Amarjeet Singh Chauhan
            <br />
            <span className="text-lg md:text-2xl text-blue-400 font-semibold block mt-2">
              (Ph.D (CS) | M.Tech (CS) | B.Tech (CS))
            </span>
          </h1>

          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <CardContainer className="inter-var mt-28 w-full max-w-xs">
              <CardBody className="relative group/card w-full h-auto rounded-xl p-4 border bg-white/10 backdrop-blur-md border-white/10">
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full"
                >
                  <Image
                    src={photo}
                    alt="Dr. Amarjeet Singh Chauhan"
                    height={500}
                    width={500}
                    className="rounded-xl object-cover shadow-xl"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Bio Paragraphs */}
          <div data-aos="fade-up" className="space-y-4 text-justify">
            <p>
              I am a dedicated academician and researcher with a Ph.D. in Computer Science,
              specializing in Resource Allocation in IoT Cloud Environments using Swarm
              Optimization, and over five years of teaching experience at both undergraduate and
              postgraduate levels.
            </p>
            <p>
              As a multidisciplinary researcher, my interests lie in the Internet of Things (IoT),
              Drone Technologies, AI-Driven Agriculture, Embedded Systems, and Cloud Computing...
            </p>
            <p>
              As a faculty member at DEI, I have taught a wide range of subjects like Big Data,
              Robotics, Machine Learning, Cloud, and Cryptography...
            </p>
           <p>
  I&#39;ve supervised student innovations like air quality monitors, mobile robotics,
  drone-assisted services, and I&#39;m skilled in embedded systems, full-stack, and mobile
  development.
</p>

            <p>
              This portfolio reflects my journey in research, teaching, and real-world IoT & AI
              innovation for sustainable development.
            </p>
          </div>

          {/* Research Interests */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
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
          <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-6">
            <Link
              href="/publication"
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl text-sm md:text-md font-semibold shadow-lg transition transform hover:-translate-y-1"
            >
              <FaBookOpen className="text-lg" /> View Publications
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-2xl text-sm md:text-md font-semibold shadow-sm transition transform hover:-translate-y-1"
            >
              <FaEnvelope className="text-lg" /> Contact Me
            </Link>
          </div>
        </div>
      </div>
    </Vortex>
  );
}
