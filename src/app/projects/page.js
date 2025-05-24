'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFlask } from 'react-icons/fa';

const projectList = [
  {
    title: 'Smart Air: Transforming Air Quality Monitoring with IoT, AI and Drone Technology',
    inventors: ['Dr. Sanjay Saini', 'Dr. Amarjeet Singh Chauhan', 'Dr. Mohit Yadav'],
    description:
      'This book presents an interdisciplinary exploration of how IoT, AI, and drone technologies are revolutionizing air quality monitoring. It also explores how big data and cloud infrastructure support scalable, intelligent environmental analysis.',
    link: '#',
    aos: 'fade-up',
  },
  {
    title: 'High-Speed VTOL Remote-Controlled Drone',
    inventors: ['Dr. Amarjeet Singh Chauhan', 'Dr. Mohit Yadav', 'Aditya Vardhan', 'Sukdev Roy'],
    description:
      'Filed under class 12-07, this innovation in UAV design integrates VTOL capabilities with high-speed propulsion to enhance drone agility, making it highly effective in urban and tactical applications.',
    link: '#',
    aos: 'fade-up',
  },
  {
    title: 'VTOL Patent Copy',
    inventors: ['Dr. Amarjeet Singh Chauhan', 'Dr. Mohit Yadav', 'Aditya Vardhan', 'Sukdev Roy'],
    description:
      'This official patent outlines a modular VTOL UAV system with improved aerodynamic efficiency and customizable configurations for research and industrial use.',
    link: '#',
    aos: 'fade-up',
  },
];

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="min-h-screen py-16 px-6 md:px-12 bg-gray-50 dark:bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h1
          data-aos="zoom-in"
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          <span className="text-blue-600">Research Projects</span> & Patents
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((item, index) => (
            <article
              key={index}
              data-aos={item.aos}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition-all p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 text-blue-600 mb-4">
                  <FaFlask className="text-2xl" />
                  <h2 className="text-xl font-semibold dark:text-white text-gray-900">
                    {item.title}
                  </h2>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Inventors:</strong>{' '}
                  {item.inventors.map((inv, i) => (
                    <span key={i} className="hover:text-blue-600">
                      {inv}
                      {i < item.inventors.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-justify leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="w-full text-sm bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
                    View Details
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
