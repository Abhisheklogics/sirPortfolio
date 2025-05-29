'use client';

import { FaGraduationCap, FaAward, FaStar } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const scholarships = [
  'Undergraduate research fellowship in BTech, 2015-2017.',
  'GATE Fellowship in MTech, 2017-2019',
];

const recognitions = [
  'Invited Editor at International Journal of Statistics in Medical Research in 2024.',
  'Appointed as a Reviewer on the International journal of Internet of Things in 2024.',
  'Invited Reviewer at Journal Recent Advances in Electrical & Electronic Engineering in 2024.',
  'Invited as a Speaker at IoT-Club at Guru Gobind Singh Indraprastha University New Delhi, India, 7 September 2023.',
  'Invited as a Session Chair at Science Model Competition, Queen Victoria College, Agra, India, April 24, 2023.',
  'Invited as a keynote speaker to give a talk on “Mobile Applications Development” at 15-Days IoT Boot Camp Organized by Dayalbagh Educational Institute, Agra, 2023.',
  'Invited as a keynote speaker to give a talk on “Agri-Bot Drone” at 15-Days Unmanned Aerial System Boot Camp Organized by Dayalbagh Educational Institute, Agra, 2023.',
  'Invited as a keynote speaker to give a talk on “Fundamental and Practical implementation of IoT” at M.D. Jain Inter College, Agra, One Day Workshop on IoT and AI, 2023.',
  'Invited as a keynote speaker to give a talk on “Arduino Programming and its Applications” at Baluni Public School, Agra, One Day Camp on Learn Technology, 2022.',
  'Invited as a keynote speaker to give a talk on “Implementation of Garbage Collection system” at Agra Smart City Ltd., Agra, One Day Smart City Idea Hackathon 2.0.',
];

export default function ScholarshipsRecognitions() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 sm:px-12 lg:px-20 rounded-3xl shadow-2xl max-w-7xl mx-auto my-12 font-sans">
      <div className="space-y-24">

        {/* Scholarships Section */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-4 mb-8">
            <FaGraduationCap className="text-blue-700 dark:text-blue-400 text-5xl sm:text-6xl" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Scholarships & Fellowships
            </h2>
          </div>
          <ul className="list-disc pl-8 space-y-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            {scholarships.map((item, index) => (
              <li
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-5 shadow-md hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-400 transition duration-300 ease-in-out"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-300 dark:border-gray-700 max-w-4xl mx-auto" />

        {/* Recognitions Section */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-4 mb-8">
            <FaAward className="text-yellow-500 dark:text-yellow-400 text-4xl sm:text-5xl" />
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Professional Recognitions
            </h3>
          </div>
          <ul className="space-y-8 max-w-4xl mx-auto">
            {recognitions.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-6 py-5 shadow-md hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900 transition duration-300 ease-in-out"
              >
                <FaStar className="text-blue-600 dark:text-blue-400 mt-1 shrink-0 text-xl sm:text-2xl" />
                <p className="text-gray-800 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
