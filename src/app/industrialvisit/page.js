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
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <header className="flex items-center mb-6 space-x-3 text-blue-900">
        <FaUniversity size={32} />
        <h2 className="text-2xl font-semibold font-serif">Industrial Visits & Expos</h2>
      </header>

      <ul className="space-y-4">
        {visits.map(({ place, location, year }, index) => (
          <li key={index} className="flex items-start space-x-3">
            <MdLocationOn size={24} className="text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">{place} <span className="text-sm font-light text-gray-500">({year})</span></p>
              <p className="text-gray-600">{location}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
