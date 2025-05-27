'use client';

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
  return (
    <section className="max-w-4xl mx-auto mt-6 p-8 bg-white to-blue-50 rounded-2xl shadow-xl border border-blue-100">
      <header className="flex items-center mb-8 space-x-4 text-blue-900">
        <FaUniversity size={36} className="text-gradient-to-r from-blue-700 via-blue-500 to-blue-700" />
        <h2 className="text-3xl font-serif font-semibold tracking-wide drop-shadow-sm">
          Industrial Visits & Expos
        </h2>
      </header>

      <ul className="space-y-6">
        {visits.map(({ place, location, year }, index) => (
          <li
            key={index}
            className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            aria-label={`${place} visited in year ${year} at ${location}`}
          >
            <MdLocationOn
              size={28}
              className="text-blue-600 mt-1 flex-shrink-0 group-hover:text-blue-700 transition-colors duration-300"
            />
            <div>
              <p className="font-semibold text-gray-900 text-lg leading-tight group-hover:text-blue-800 transition-colors duration-300">
                {place} <span className="text-sm font-light text-gray-500">({year})</span>
              </p>
              <p className="text-gray-600 text-sm tracking-wide">{location}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
