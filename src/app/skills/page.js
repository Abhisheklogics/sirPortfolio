'use client'

import {
  FaCloud,
  FaMicrochip,
  FaProjectDiagram,
  FaRobot,
  FaSatelliteDish,
  FaSwatchbook,
  FaNetworkWired,
  FaCode
} from "react-icons/fa";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const skills = [
    {
      name: "Internet of Things (IoT)",
      icon: <FaNetworkWired className="text-3xl text-indigo-600" />,
      description:
        "Design and development of interconnected systems using microcontrollers, sensors, and communication protocols such as MQTT, HTTP, and BLE.",
    },
    {
      name: "Swarm Intelligence",
      icon: <FaProjectDiagram className="text-3xl text-indigo-600" />,
      description:
        "Modeling and simulation of distributed systems inspired by collective behaviors of natural organisms, applied in robotics and optimization problems.",
    },
    {
      name: "Cloud Computing",
      icon: <FaCloud className="text-3xl text-indigo-600" />,
      description:
        "Deployment and scaling of applications on cloud platforms such as AWS, Azure, and GCP for real-time IoT monitoring and big data analytics.",
    },
    {
      name: "Machine Learning",
      icon: <FaRobot className="text-3xl text-indigo-600" />,
      description:
        "Development of intelligent systems using supervised, unsupervised, and reinforcement learning algorithms for predictive and classification tasks.",
    },
    {
      name: "Particle Swarm Optimization",
      icon: <FaSwatchbook className="text-3xl text-indigo-600" />,
      description:
        "Metaheuristic approach for solving complex optimization problems using collaborative strategies inspired by natural swarms.",
    },
    {
      name: "Embedded Programming",
      icon: <FaMicrochip className="text-3xl text-indigo-600" />,
      description:
        "Real-time firmware development using C/C++ for platforms like Arduino, ESP32, STM32, with experience in peripherals and RTOS.",
    },
    {
      name: "Drone Piloting & Development",
      icon: <FaSatelliteDish className="text-3xl text-indigo-600" />,
      description:
        "Design and control of UAV systems with sensor integration, path planning, autonomous flight, and IoT-enabled aerial monitoring.",
    },
    {
      name: "Technical Content Writing",
      icon: <FaSwatchbook className="text-3xl text-indigo-600" />,
      description:
        "Crafting well-structured documentation, tutorials, and research content for technical domains such as robotics, IoT, and AI.",
    },
    {
      name: "Mobile Application Development",
      icon: <FaProjectDiagram className="text-3xl text-indigo-600" />,
      description:
        "Building cross-platform mobile apps using frameworks like Flutter and React Native with real-time IoT dashboard integration.",
    },
    {
      name: "Web Development",
      icon: <FaNetworkWired className="text-3xl text-indigo-600" />,
      description:
        "Full-stack development using React, Node.js, Next.js, and REST APIs for real-time interfaces, dashboards, and learning platforms.",
    },
    {
      name: "Cryptography",
      icon: <FaMicrochip className="text-3xl text-indigo-600" />,
      description:
        "Implementation of cryptographic algorithms and network security protocols including AES, RSA, SSL/TLS, and secure key exchanges.",
    },
    {
      name: "Robotics",
      icon: <FaRobot className="text-3xl text-indigo-600" />,
      description:
        "Integration of hardware and software systems for autonomous robots using ROS, sensor fusion, motion control, and AI planning.",
    },
    {
      name: "Database Technologies",
      icon: <FaCloud className="text-3xl text-indigo-600" />,
      description:
        "Proficient in designing and managing databases including MySQL, Oracle, MongoDB, and Supabase for structured and real-time data handling.",
    },
    {
      name: "Programming Languages",
      icon: <FaCode className="text-3xl text-indigo-600" />,
      description:
        "Skilled in Python, C, C++, Java, Ruby, SQL, JavaScript, and Arduino for software development, data science, and systems programming.",
    },
  ];

  return (
  <>
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 text-black relative">
      

      <section className="max-w-7xl mx-auto rounded-3xl p-6 md:p-12 bg-white backdrop-blur-md ">
        <header className="mb-12 text-center">
          <h1 className="text-2xl md:text-5xl font-bold tracking-tight" data-aos="fade-down">
            Skills & Expertise
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80" data-aos="fade-up" data-aos-delay={200}>
            A comprehensive overview of my technical capabilities and domain knowledge.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <article
              key={index}
              className=" text-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 cursor-default"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-indigo-100 rounded-full shadow-inner">{skill.icon}</div>
                <h3 className="text-lg font-bold">{skill.name}</h3>
              </div>
              <p className="text-sm text-gray-800">{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto rounded-3xl p-6 md:p-14 mt-20  backdrop-blur-md border border-white/10 ">
        <h2
          id="teaching-experience"
          className="text-2xl md:text-4xl font-bold text-yellow-400 border-b-4 border-yellow-500 pb-3 mb-12 text-center"
          data-aos="fade-up"
        >
          Teaching Experience
        </h2>

        <div
          className="bg-yellow-100 text-yellow-900 border-l-8 border-yellow-500 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 mb-10"
          data-aos="fade-up"
        >
          <h3 className="text-xl md:text-3xl font-bold mb-2">Lecturer, Department of Physics and Computer Science</h3>
          <p className="text-base font-semibold">Faculty of Science, Dayalbagh Educational Institute, Agra</p>
          <p className="italic text-sm mt-1 font-medium">Duration: From 2019 to Present</p>
        </div>

        <h4 className="text-xl md:text-3xl font-semibold text-white text-center mb-10" data-aos="fade-up">
          Courses Taught
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Programming of IoT Principles",
            "Cognitive Robotics",
            "Bigdata Technologies",
            "Cloud Computing Technologies",
            "Digital Electronics",
            "Programming Paradigms",
            "Cryptography and Network Security",
            "C Programming",
            "Computer Networks",
            "Applied Computer Vision",
            "Operating Systems",
            "Computer Architecture",
            "Applied Machine Learning",
            "Programming Languages: Python, C/C++, Visual C++, Java, SQL, HTML, CSS, JavaScript, PHP, NodeJS and Arduino"
          ].map((course, idx) => (
            <div
              key={idx}
              className="bg-white/90 text-gray-900 border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <p className="text-sm font-medium">{course}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
