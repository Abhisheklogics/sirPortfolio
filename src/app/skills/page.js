'use client'

import {
  FaCloud, FaMicrochip, FaProjectDiagram, FaRobot, FaSatelliteDish,
  FaSwatchbook, FaNetworkWired, FaCode
} from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SkillsPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: 'ease-in-out' });
  }, []);

  const skills = [
    { name: "Internet of Things (IoT)", icon: <FaNetworkWired />, desc: "Interconnected systems with sensors, microcontrollers (Arduino, ESP32), and protocols like MQTT, BLE, and HTTP." },
    { name: "Swarm Intelligence", icon: <FaProjectDiagram />, desc: "Modeling distributed systems inspired by collective intelligence, applied in robotics and optimization." },
    { name: "Cloud Computing", icon: <FaCloud />, desc: "Scalable deployment using AWS, Azure, GCP for real-time analytics and IoT applications." },
    { name: "Machine Learning", icon: <FaRobot />, desc: "Supervised and unsupervised learning for intelligent decision systems and predictive models." },
    { name: "Particle Swarm Optimization", icon: <FaSwatchbook />, desc: "Metaheuristic optimization for complex computational problems in AI and engineering." },
    { name: "Embedded Programming", icon: <FaMicrochip />, desc: "Real-time firmware for microcontrollers using C/C++, peripherals, and RTOS." },
    { name: "Drone Piloting & Development", icon: <FaSatelliteDish />, desc: "UAV design, path planning, IoT-based aerial monitoring, and autonomous flight control." },
    { name: "Technical Content Writing", icon: <FaSwatchbook />, desc: "Authoring clear, technical documentation, research articles, and tutorials in CS and IoT." },
    { name: "Mobile App Development", icon: <FaProjectDiagram />, desc: "Cross-platform apps using Flutter & React Native with IoT dashboards and real-time sync." },
    { name: "Web Development", icon: <FaNetworkWired />, desc: "Full-stack interfaces with Next.js, React, Node.js, REST APIs and real-time visualizations." },
    { name: "Cryptography", icon: <FaMicrochip />, desc: "Implementation of AES, RSA, SSL/TLS, secure key exchange, and network security protocols." },
    { name: "Robotics", icon: <FaRobot />, desc: "Hardware-software integration using ROS, sensor fusion, AI planning, and motion control." },
    { name: "Database Technologies", icon: <FaCloud />, desc: "Expertise in MySQL, Oracle, MongoDB, Supabase for structured and NoSQL data." },
    { name: "Programming Languages", icon: <FaCode />, desc: "Proficient in Python, C/C++, Java, SQL, JS, Ruby, Arduino, and systems programming." }
  ];

  const courses = [
    "Programming of IoT Principles", "Cognitive Robotics", "Big Data Technologies",
    "Cloud Computing", "Digital Electronics", "Programming Paradigms",
    "Cryptography & Network Security", "C Programming", "Computer Networks",
    "Applied Computer Vision", "Operating Systems", "Computer Architecture",
    "Applied Machine Learning", "Languages: Python, C/C++, Java, SQL, HTML, JS, Arduino"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-white py-12 px-4 sm:px-6 lg:px-8 text-gray-900">
      {/* Skills & Expertise Section */}
      <section className="max-w-7xl mx-auto p-6 md:p-12 bg-white/90 rounded-3xl shadow-xl">
        <header className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-indigo-800" data-aos="fade-down">
            Skills & Expertise
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700" data-aos="fade-up">
            A detailed overview of technical proficiencies and research strengths in Computer Science and Engineering.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg p-6 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-indigo-600 text-3xl bg-indigo-100 p-3 rounded-full shadow-inner">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-indigo-900">{skill.name}</h3>
              </div>
              <p className="text-sm text-gray-700">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Experience */}
      <section className="max-w-7xl mx-auto mt-20 p-6 md:p-12 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-3xl shadow-xl">
        <h2
          className="text-2xl md:text-4xl font-bold text-yellow-700 text-center mb-10 border-b-2 pb-3 border-yellow-500"
          data-aos="fade-up"
        >
          Teaching Experience
        </h2>

        <div
          className="bg-white/90 p-6 border-l-8 border-yellow-500 rounded-2xl shadow-lg mb-12"
          data-aos="fade-up"
        >
          <h3 className="text-xl md:text-2xl font-bold text-yellow-900 mb-1">
            Lecturer, Department of Physics and Computer Science
          </h3>
          <p className="text-base font-medium text-yellow-800">
            Faculty of Science, Dayalbagh Educational Institute (Deemed University), Agra
          </p>
          <p className="italic text-sm text-yellow-700 mt-1 font-medium">2019 – Present</p>
        </div>

        <h4 className="text-xl md:text-3xl font-semibold text-center text-yellow-800 mb-10" data-aos="fade-up">
          Courses Taught
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-4 rounded-xl shadow hover:shadow-md text-sm text-gray-800"
              data-aos="fade-up"
              data-aos-delay={idx * 60}
            >
              {course}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
