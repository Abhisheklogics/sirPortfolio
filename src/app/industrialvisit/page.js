'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdLocationOn } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';

const visits = [
  { place: "IoT Expo", location: "Pragati Maidan, New Delhi", year: 2022 },
  { place: "Bharat Drone Shakti", location: "Hindan Air Force Station, Ghaziabad", year: 2023 },
  { place: "Two-day Akhil Bharatiya Shiksha Samagam", location: "Pragati Maidan, New Delhi", year: 2023 },
  { place: "Traffic Infra Tech", location: "Pragati Maidan, New Delhi", year: 2023 },
  { place: "IoT Expo", location: "Pragati Maidan, New Delhi", year: 2023 },
  { place: "Narora Atomic Power Plant", location: "Narora, Uttar Pradesh", year: 2023 },
  { place: "Yara Fertilizers", location: "Babrala, Uttar Pradesh", year: 2023 },
  { place: "Aerial Delivery Research and Development Establishment", location: "Agra", year: 2023 },
  { place: "IFFCO", location: "Aonla, Bareilly", year: 2022 },
];

export default function IndustrialVisits() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto mt-12 px-6 sm:px-10 lg:px-16 py-16 bg-white rounded-3xl shadow-xl border border-blue-100">
      {/* Header */}
      <div
        className="flex items-center gap-4 mb-14 border-b border-gray-300 pb-5"
        data-aos="fade-down"
      >
        <FaUniversity className="text-blue-700 text-4xl shrink-0" />
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-wide">
          Industrial Visits & Expos
        </h2>
      </div>

      {/* Grid Items */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visits.map(({ place, location, year }, index) => (
          <li
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 120}
            className="group flex items-start gap-5 p-6 bg-white rounded-3xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-blue-400 transition-shadow transition-colors duration-300 ease-in-out cursor-pointer"
          >
            <MdLocationOn className="text-blue-600 text-3xl mt-1 shrink-0 transition-transform group-hover:scale-110" />
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                {place}{' '}
                <span className="text-sm sm:text-base text-gray-500 font-normal">({year})</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">{location}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
