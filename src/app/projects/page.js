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
      'This research proposes an integrative architecture combining IoT sensors, machine learning algorithms, and drone-based data acquisition to monitor and analyze air quality in real-time, supported by scalable cloud infrastructure.',
    link: '#',
    aos: 'fade-up',
  },
  {
    title: 'High-Speed VTOL UAV for Tactical Aerial Surveillance',
    inventors: ['Dr. Amarjeet Singh Chauhan', 'Dr. Mohit Yadav', 'Aditya Vardhan', 'Sukdev Roy'],
    description:
      'This project details a novel design of a vertical take-off and landing (VTOL) drone incorporating high-thrust propulsion mechanisms, optimized for agile movement in complex terrains and urban scenarios.',
    link: '#',
    aos: 'fade-up',
  },
  {
    title: 'Patent: Modular VTOL UAV with Enhanced Aerodynamic Efficiency',
    inventors: ['Dr. Amarjeet Singh Chauhan', 'Dr. Mohit Yadav', 'Aditya Vardhan', 'Sukdev Roy'],
    description:
      'This intellectual property covers a customizable VTOL drone architecture with reconfigurable flight modules, promoting use in research, industrial inspections, and high-precision mapping tasks.',
    link: '#',
    aos: 'fade-up',
  },
];

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen py-16   md:mt-[-30px] px-6 md:px-12 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h1
          data-aos="zoom-in"
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          <span className="text-blue-700"> Projects</span> & Patents
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((item, index) => (
            <article
              key={index}
              data-aos={item.aos}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between border border-gray-200 dark:border-slate-700"
            >
              <div>
                <div className="flex items-center gap-3 text-blue-700 mb-3">
                  <FaFlask className="text-xl" />
                  <h2 className="text-lg font-semibold dark:text-white text-gray-900 leading-tight">
                    {item.title}
                  </h2>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <span className="font-medium">Contributors:</span>{' '}
                  {item.inventors.map((inv, i) => (
                    <span key={i} className="hover:text-blue-500">
                      {inv}
                      {i < item.inventors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 text-justify leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <button className="w-full text-sm bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-md transition duration-200">
                    View Full Details
                  </button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
