'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const patentList = [
  {
    title: "Smart Air: Transforming Air Quality Monitoring with IoT, AI and Drone Technology",
    inventors: ["Dr. Sanjay Saini", "Dr. Amarjeet Singh Chauhan", "Dr. Mohit Yadav"],
    description: `This work explores how cutting-edge innovations in IoT, AI, and drone technology are transforming air quality monitoring. The study investigates the integration of big data and cloud infrastructure to efficiently process and store large-scale environmental data.`,
    link: "#",
    aos: "fade-up"
  },
  {
    title: "High-Speed VTOL Remote-Controlled Drone",
    inventors: ["Dr. Amarjeet Singh Chauhan", "Dr. Mohit Yadav", "Aditya Vardhan", "Sukdev Roy"],
    description: `This design innovation, filed under class 12-07, represents a significant advancement in unmanned aerial vehicle (UAV) technology. The vertical take-off and landing mechanism allows enhanced mobility and speed for remote-controlled drone operations.`,
    link: "#",
    aos: "fade-up"
  },
  {
    title: "VTOL Patent Copy",
    inventors: ["Dr. Amarjeet Singh Chauhan", "Dr. Mohit Yadav", "Aditya Vardhan", "Sukdev Roy"],
    description: `This document represents an official patent filing for VTOL UAV design, showcasing modular capabilities and enhanced aerodynamics.`,
    link: "#",
    aos: "fade-up"
  },
];

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-[#111827] min-h-screen py-14 px-5">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-14 tracking-tight">
          <span className="text-blue-600">Research &</span> Patents
        </h1>

        <div className="space-y-10">
          {patentList.map((patent, index) => (
            <div
              key={index}
              data-aos={patent.aos}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all rounded-xl px-6 py-5"
            >
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  <i className="fas fa-flask text-2xl text-blue-500"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-500 transition duration-200">
                    {patent.title}
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Inventors:</strong>{' '}
                    {patent.inventors.map((inv, i) => (
                      <span key={i} className="hover:text-blue-500">
                        {inv}{i < patent.inventors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-justify leading-relaxed">{patent.description}</p>
                  <a href={patent.link} className="inline-block mt-4">
                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm tracking-wide transition">
                      View Details
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
