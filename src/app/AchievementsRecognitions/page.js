'use client';

import {
  FaGraduationCap,
  FaAward,
  FaMicrophone,
  FaStar,
} from 'react-icons/fa';

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
    <section className="bg-white py-16 px-6 sm:px-10 md:px-20 rounded-xl shadow-2xl max-w-6xl mx-auto my-10">
      {/* Scholarships */}
      <div className="mb-16">
        <div className="flex items-center mb-6 space-x-4">
          <FaGraduationCap className="text-blue-600 text-3xl" />
          <h2 className="text-3xl font-extrabold text-blue-900 font-serif tracking-wide">
            Scholarships & Fellowships
          </h2>
        </div>
        <ul className="space-y-4 pl-5 list-disc text-gray-800 text-lg leading-relaxed">
          {scholarships.map((item, index) => (
            <li
              key={index}
              className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Recognitions */}
      <div>
        <div className="flex items-center mb-6 space-x-3">
          <FaAward className="text-yellow-600 text-2xl" />
          <h3 className="text-2xl font-semibold text-blue-900 font-serif tracking-wide">
            Professional Recognitions
          </h3>
        </div>
        <ul className="space-y-6">
          {recognitions.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <FaStar className="text-blue-600 mt-1 shrink-0" />
              <p className="text-gray-700 text-base leading-relaxed hover:text-blue-800 transition-colors duration-300">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
