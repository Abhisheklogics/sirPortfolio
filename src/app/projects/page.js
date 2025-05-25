'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFlask } from 'react-icons/fa';

const projectList = [
  {
    title: 'Smart Air: A Multi-Modal Framework for Air Quality Monitoring using IoT, AI, and Drones',
    inventors: ['Dr. Sanjay Saini', 'Dr. Amarjeet Singh Chauhan', 'Dr. Mohit Yadav'],
    description:
      'An integrative architecture combining IoT sensors, AI models, and drone data acquisition to monitor and analyze air quality in real-time.',
    link: '#',
    aos: 'fade-up',
  },
  {
    title: 'High-Speed VTOL UAV for Tactical Aerial Surveillance',
    inventors: ['Dr. Amarjeet Singh Chauhan', 'Dr. Mohit Yadav', 'Aditya Vardhan', 'Sukdev Roy'],
    description:
      'A vertical take-off and landing (VTOL) UAV featuring high-thrust propulsion optimized for surveillance in complex terrains.',
    link: '#',
    aos: 'fade-up',
  },
  {
    title: 'Patent: Modular VTOL UAV with Enhanced Aerodynamic Efficiency',
    inventors: ['Dr. Amarjeet Singh Chauhan', 'Dr. Mohit Yadav', 'Aditya Vardhan', 'Sukdev Roy'],
    description:
      'Covers a customizable VTOL drone with reconfigurable modules for industrial inspections, mapping, and research.',
    link: '#',
    aos: 'fade-up',
  },
];

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      className="min-h-screen py-16 px-4 md:px-12 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-gray-800 transition-colors"
      data-aos="fade-in"
    >
      <div className="max-w-5xl mx-auto">
        <h1
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-slate-800 dark:text-white tracking-tight"
        >
          <span className="text-blue-700">Projects</span> & Patents
        </h1>

        <div className="grid grid-cols-1 gap-10">
          {projectList.map((item, index) => (
            <article
              key={index}
              data-aos={item.aos}
              data-aos-delay={index * 150}
              className="relative group bg-white/80 dark:bg-slate-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl backdrop-blur-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 z-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition duration-300"></div>
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-blue-700 mb-4">
                    <FaFlask className="text-2xl" />
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.inventors.map((inv, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-medium dark:bg-blue-900 dark:text-blue-300"
                      >
                        {inv}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 text-justify leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
    </section>
  );
}
