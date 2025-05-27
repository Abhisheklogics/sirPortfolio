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
      duration: 1000,
      once: true,
    });
  }, []);
const skills = [
  {
    name: "Internet of Things (IoT)",
    icon: <FaNetworkWired className="text-2xl text-blue-600" />,
    description:
      "Design and development of interconnected systems using microcontrollers, sensors, and communication protocols such as MQTT, HTTP, and BLE.",
  },
  {
    name: "Swarm Intelligence",
    icon: <FaProjectDiagram className="text-2xl text-blue-600" />,
    description:
      "Modeling and simulation of distributed systems inspired by collective behaviors of natural organisms, applied in robotics and optimization problems.",
  },
  {
    name: "Cloud Computing",
    icon: <FaCloud className="text-2xl text-blue-600" />,
    description:
      "Deployment and scaling of applications on cloud platforms such as AWS, Azure, and GCP for real-time IoT monitoring and big data analytics.",
  },
  {
    name: "Machine Learning",
    icon: <FaRobot className="text-2xl text-blue-600" />,
    description:
      "Development of intelligent systems using supervised, unsupervised, and reinforcement learning algorithms for predictive and classification tasks.",
  },
  {
    name: "Particle Swarm Optimization",
    icon: <FaSwatchbook className="text-2xl text-blue-600" />,
    description:
      "Metaheuristic approach for solving complex optimization problems using collaborative strategies inspired by natural swarms.",
  },
  {
    name: "Embedded Programming",
    icon: <FaMicrochip className="text-2xl text-blue-600" />,
    description:
      "Real-time firmware development using C/C++ for platforms like Arduino, ESP32, STM32, with experience in peripherals and RTOS.",
  },
  {
    name: "Drone Piloting & Development",
    icon: <FaSatelliteDish className="text-2xl text-blue-600" />,
    description:
      "Design and control of UAV systems with sensor integration, path planning, autonomous flight, and IoT-enabled aerial monitoring.",
  },
  {
    name: "Technical Content Writing",
    icon: <FaSwatchbook className="text-2xl text-blue-600" />,
    description:
      "Crafting well-structured documentation, tutorials, and research content for technical domains such as robotics, IoT, and AI.",
  },
  {
    name: "Mobile Application Development",
    icon: <FaProjectDiagram className="text-2xl text-blue-600" />,
    description:
      "Building cross-platform mobile apps using frameworks like Flutter and React Native with real-time IoT dashboard integration.",
  },
  {
    name: "Web Development",
    icon: <FaNetworkWired className="text-2xl text-blue-600" />,
    description:
      "Full-stack development using React, Node.js, Next.js, and REST APIs for real-time interfaces, dashboards, and learning platforms.",
  },
  {
    name: "Cryptography",
    icon: <FaMicrochip className="text-2xl text-blue-600" />,
    description:
      "Implementation of cryptographic algorithms and network security protocols including AES, RSA, SSL/TLS, and secure key exchanges.",
  },
  {
    name: "Robotics",
    icon: <FaRobot className="text-2xl text-blue-600" />,
    description:
      "Integration of hardware and software systems for autonomous robots using ROS, sensor fusion, motion control, and AI planning.",
  },
  {
    name: "Database Technologies",
    icon: <FaCloud className="text-2xl text-blue-600" />,
    description:
      "Proficient in designing and managing databases including MySQL, Oracle, MongoDB, and Supabase for structured and real-time data handling.",
  },
  {
    name: "Programming Languages",
    icon: <FaCode className="text-2xl text-blue-600" />,
    description:
      "Skilled in Python, C, C++, Java, Ruby, SQL, JavaScript, and Arduino for software development, data science, and systems programming.",
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
   <section className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 mt-10">
  <h2
    className="text-2xl font-semibold text-gray-700 mb-6 border-b pb-2"
    data-aos="fade-up"
  >
    Teaching Experience
  </h2>

  <div
    className="bg-yellow-50 border border-yellow-100 p-6 rounded-2xl mb-8"
    data-aos="fade-up"
  >
    <h3 className="text-xl font-bold text-yellow-800 mb-1">
      Lecturer, Department of Physics and Computer Science
    </h3>
    <p className="text-gray-700 mb-1">
      Faculty of Science, Dayalbagh Educational Institute, Agra
    </p>
    <p className="text-sm text-gray-600 italic mb-4">
      Duration: From 2019 to Present
    </p>
  </div>

  <h4 className="text-lg font-semibold text-gray-800 mb-4" data-aos="fade-up">
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
        className="bg-white border border-gray-200 p-4 rounded-xl shadow hover:shadow-md transition"
        data-aos="fade-up"
        data-aos-delay={idx * 50}
      >
        <p className="text-sm text-gray-700">{course}</p>
      </div>
    ))}
  </div>
</section>

    </main>
  );
}
