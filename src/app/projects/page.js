'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFlask, FaProjectDiagram } from 'react-icons/fa';
import { Button } from '@/components/ui/moving-border';
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
  <section className="min-h-screen py-20 px-6 md:px-16  dark:from-slate-900 dark:to-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto mt-4 ">

        {/* Page Header */}
        <h1
          data-aos="fade-down"
          className="text-3xl sm:text-4xl md:mt-[-40px] text-center font-bold text-white tracking-wide"
        >
          <span className="">Funded Projects</span> &{' '}
          <span className="">Supervised Projects</span>
        </h1>

        {/* Funded Projects */}
        <div>
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl font-semibold mt-10 text-white dark:text-gray-100 mb-10"
          >
             Funded Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {fundedProjects.map((item, index) => (
              <article
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="relative  dark:bg-slate-800/80 border border-gray-300 dark:border-gray-700 rounded-3xl backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-blue-700 dark:text-blue-400 mb-4">
                      <FaFlask className="text-2xl" />
                      <h2 className="text-lg md:text-xl font-bold text-white dark:text-white tracking-wide">
                        {item.title}
                      </h2>
                    </div>

                    <p className="text-sm text-white dark:text-gray-300 mb-1">
                      <span className="font-semibold">Sanctioned By:</span> {item.sponsor}
                    </p>
                    <p className="text-sm text-white dark:text-gray-300 mb-4">
                      <span className="font-semibold">Amount:</span> {item.amount}
                    </p>

                    <p className="text-sm md:text-base text-white dark:text-gray-300 text-justify leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Button borderRadius="1.75rem"
        className="bg-gray-900 dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800">
                        View Full Details
                      </Button>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Projects Supervised */}
        <div className="mt-24">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-3xl font-semibold text-white dark:text-gray-100 mb-10"
          >
             Projects Supervised
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supervisedProjects.map((title, idx) => (
              <article
                key={idx}
                data-aos="fade-left"
                data-aos-delay={idx * 60}
                className=" dark:bg-slate-800/80 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
              >
                <div className="flex items-center gap-3 text-purple-700 dark:text-purple-400 mb-2">
                  <FaProjectDiagram className="text-xl" />
                  <h3 className="text-sm md:text-base font-medium text-white dark:text-white tracking-tight">
                    {title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>  );
}
