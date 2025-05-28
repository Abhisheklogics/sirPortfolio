'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFlask, FaProjectDiagram } from 'react-icons/fa';

const fundedProjects = [
  {
    title: 'Internet of Things',
    sponsor: 'MHRD Virtual Labs',
    amount: '₹20 Lakhs',
    description:
      'A project sanctioned under MHRD Virtual Labs focusing on IoT development and research.',
    link: '#',
  },
  {
    title: 'Smart Home Automation Kit',
    sponsor: 'University Research Grant',
    amount: '₹2 Lakhs',
    description: 'Research grant for developing innovative smart home automation solutions.',
    link: '#',
  },
  {
    title: 'AI based Agricultural Drone',
    sponsor: 'University Research Grant',
    amount: '₹2 Lakhs',
    description:
      'Project focusing on AI integration with drones for agricultural applications.',
    link: '#',
  },
];

const supervisedProjects = [
  'IoT based Automatic Irrigation System in Agriculture',
  'Smart Polyhouse using IoT',
  'Plant disease detection using Image Processing',
  'Smart Garbage Collection using LORA Technology and IoT',
  'IoT Lab Automation',
  'Air Quality Monitoring and Analysis System using IoT',
  'Mobile Robot',
  'Smart Attendance System using Fingerprint and Face Recognition',
  'Smart Health Kit',
  'Fire Detection Alarm System using IoT',
  'Soil and Water Quality Monitoring System using IoT',
  'Baal Jyoti: An E-Learning Android Application for Kids Learning',
  'Women’s Safety Mobile Application',
  'Mobile Application for Multi-QR Scanning',
  'Inventory Management System',
  'Blog Application using Python',
  'Quad-copter Drone',
  'Flower Dropping Drone',
  'Medicine Delivery Drone',
  'High Payload Drone using 16 Rotors',
  '32-Rotor High Payload Drone',
  'Air-Ambulance up to 45 KG Payload',
];

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      className="min-h-screen py-16 px-4 md:px-12 bg-white dark:from-slate-900 dark:to-gray-800 transition-colors"
      data-aos="fade-in"
    >
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <h1
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-4xl md:text-5xl font-bold text-center mb-16  dark:text-white tracking-tight"
        >
          <span className="">Funded Projects</span> &{' '}
          <span className="">Supervised Projects</span>
        </h1>

        {/* Funded Projects */}
        <div>
          <h2
            data-aos="fade-up"
            data-aos-delay={100}
            className="text-2xl font-semibold  mb-8"
          >
            Funded Projects
          </h2>
          <div className="grid grid-cols-1 gap-10">
            {fundedProjects.map((item, index) => (
              <article
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="relative group bg-white/80 dark:bg-slate-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl backdrop-blur-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 z-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition duration-300"></div>
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-blue-700 mb-4">
                      <FaFlask className="text-2xl" />
                      <h2 className="text-md md:text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h2>
                    </div>

                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <span className="font-semibold">Sanctioned By: </span>
                      {item.sponsor}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                      <span className="font-semibold">Amount Sanctioned: </span>
                      {item.amount}
                    </p>

                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button className="relative inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-full shadow-md transition duration-200">
                        View Full Details
                      </button>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Projects Supervised */}
        <div className="mt-20">
          <h2
            data-aos="fade-up"
            data-aos-delay={100}
            className="text-2xl font-semibold  mb-8"
          >
            Projects Supervised
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supervisedProjects.map((title, idx) => (
              <article
                key={idx}
                data-aos="fade-left"
                data-aos-delay={idx * 60}
                className="relative group bg-white/80 dark:bg-slate-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl backdrop-blur-lg shadow-lg p-5 cursor-default transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 text-purple-700 mb-3">
                  <FaProjectDiagram className="text-xl" />
                  <h3 className="font-semi text-gray-900 dark:text-white text-base">
                    {title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
