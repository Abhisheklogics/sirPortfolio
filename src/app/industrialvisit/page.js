'use client';

import { useEffect } from 'react';
import AOS from 'aos';
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
  AOS.init({
    duration: 700,
    once: true,
  });
}, []);

  return (
    <section className="max-w-5xl mx-auto mt-8 px-4 md:px-8 py-10 bg-white rounded-3xl shadow-lg border border-blue-100">
      <header className="flex items-center gap-4 mb-10" data-aos="fade-down">
        <FaUniversity className="text-blue-700 text-3xl shrink-0" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 tracking-wide">
          Industrial Visits & Expos
        </h2>
      </header>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visits.map(({ place, location, year }, index) => (
          <li
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex items-start gap-3 p-5 rounded-xl bg-white shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200"
            aria-label={`${place} visited in year ${year} at ${location}`}
          >
            <MdLocationOn className="text-blue-600 text-2xl mt-1 shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 leading-snug hover:text-blue-800">
                {place} <span className="text-sm text-gray-500 font-normal">({year})</span>
              </h3>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
