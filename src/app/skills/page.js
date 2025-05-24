'use client'
import {
  FaCloud,
  FaMicrochip,
  FaProjectDiagram,
  FaRobot,
  FaSatelliteDish,
  FaSwatchbook,
  FaNetworkWired,
} from "react-icons/fa";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    {
      name: "Internet of Things (IoT)",
      icon: <FaNetworkWired className="text-2xl text-blue-600" />,
      description:
        "Design and implementation of connected systems using microcontrollers, sensors, and wireless protocols for smart automation.",
    },
    {
      name: "Swarm Intelligence",
      icon: <FaProjectDiagram className="text-2xl text-blue-600" />,
      description:
        "Study of decentralized, self-organizing systems inspired by natural swarm behavior such as ants, birds, and bees.",
    },
    {
      name: "Cloud Computing",
      icon: <FaCloud className="text-2xl text-blue-600" />,
      description:
        "Utilizing scalable cloud platforms for data processing, storage, and real-time remote monitoring of IoT systems.",
    },
    {
      name: "Machine Learning",
      icon: <FaRobot className="text-2xl text-blue-600" />,
      description:
        "Application of supervised and unsupervised learning algorithms to intelligent systems, data analytics, and automation.",
    },
    {
      name: "Particle Swarm Optimization",
      icon: <FaSwatchbook className="text-2xl text-blue-600" />,
      description:
        "Metaheuristic optimization technique based on swarm behavior for solving complex engineering and AI problems.",
    },
    {
      name: "Embedded Programming",
      icon: <FaMicrochip className="text-2xl text-blue-600" />,
      description:
        "Low-level firmware development using C/C++ for microcontrollers (e.g., Arduino, ESP32, STM32) in real-time applications.",
    },
    {
      name: "Drone Technology",
      icon: <FaSatelliteDish className="text-2xl text-blue-600" />,
      description:
        "Research on autonomous drone systems, sensor fusion, and UAV-based IoT applications for environmental and surveillance tasks.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 font-sans">
      <section className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10">
        <div className="mb-8">
          <h2
            className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-2"
            data-aos="fade-up"
          >
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-5 bg-blue-50 border border-blue-100 rounded-2xl hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center space-x-3 mb-3">
                  {skill.icon}
                  <span className="text-lg font-semibold text-blue-900">
                    {skill.name}
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
