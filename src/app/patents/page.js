'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFlask } from 'react-icons/fa';
import Link from 'next/link';
const patentList = [
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
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-[#0f172a] min-h-screen py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-12">
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
            Research &amp; Patents
          </span>
        </h1>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {patentList.map((patent, index) => (
            <article
              key={index}
              data-aos={patent.aos}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-blue-600 text-3xl">
                  <FaFlask />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 transition duration-200">
                    {patent.title}
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                    <strong>Inventors:</strong>{' '}
                    {patent.inventors.map((inv, i) => (
                      <span key={i} className="hover:text-blue-600">
                        {inv}
                        {i < patent.inventors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-justify text-sm leading-relaxed">
                    {patent.description}
                  </p>
                  <Link
                    href={patent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                  >
                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-all">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
