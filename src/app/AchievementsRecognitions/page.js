'use client';

import { FaGraduationCap, FaAward, FaMicrophone, FaStar } from 'react-icons/fa';

const scholarships = [
  "Undergraduate research fellowship in BTech, 2015-2017.",
  "GATE Fellowship in MTech, 2017-2019",
];

const recognitions = [
  "Invited Editor at International Journal of Statistics in Medical Research in 2024.",
  "Appointed as a Reviewer on the International journal of Internet of Things in 2024.",
  "Invited Reviewer at Journal Recent Advances in Electrical & Electronic Engineering in 2024.",
  "Invited as a Speaker at IoT-Club at Guru Gobind Singh Indraprastha University New Delhi, India, 7 September 2023.",
  "Invited as a Session Chair at Science Model Competition, Queen Victoria College, Agra, India, April 24, 2023.",
  "Invited as a keynote speaker to give a talk on “Mobile Applications Development” at 15-Days IoT Boot Camp Organized by Dayalbagh Educational Institute, Agra, 2023.",
  "Invited as a keynote speaker to give a talk on “Agri-Bot Drone” at 15-Days Unmanned Aerial System Boot Camp Organized by Dayalbagh Educational Institute, Agra, 2023.",
  "Invited as a keynote speaker to give a talk on “Fundamental and Practical implementation of IoT” at M.D. Jain Inter College, Agra, One Day Workshop on IoT and AI, 2023.",
  "Invited as a keynote speaker to give a talk on “Arduino Programming and its Applications” at Baluni Public School, Agra, One Day Camp on Learn Technology, 2022.",
  "Invited as a keynote speaker to give a talk on “Implementation of Garbage Collection system” at Agra Smart City Ltd., Agra, One Day Smart City Idea Hackathon 2.0.",
];

export default function ScholarshipsRecognitions() {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      
      {/* Header */}
      <header className="mb-8 flex items-center space-x-4 text-blue-900">
        <FaGraduationCap size={36} />
        <h1 className="text-3xl font-extrabold font-serif">Scholarships & Fellowships</h1>
      </header>

      {/* Scholarships List */}
      <ul className="mb-12 space-y-4 list-disc list-inside text-gray-800 text-lg">
        {scholarships.map((item, i) => (
          <li key={i} className="hover:text-blue-700 transition-colors duration-300 cursor-default">
            {item}
          </li>
        ))}
      </ul>

      {/* Professional Recognitions Header */}
      <header className="mb-6 flex items-center space-x-3 text-blue-900">
        <FaAward size={28} />
        <h2 className="text-2xl font-semibold font-serif">Professional Recognitions</h2>
      </header>

      {/* Recognitions List */}
      <ul className="space-y-5 text-gray-700 text-base">
        {recognitions.map((item, i) => (
          <li key={i} className="flex items-start space-x-3">
            <FaStar className="mt-1 text-blue-600 flex-shrink-0" />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
