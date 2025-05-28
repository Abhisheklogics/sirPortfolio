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
    <section className=" bg-white py-16 px-4 sm:px-6 lg:px-12 rounded-3xl shadow-2xl max-w-6xl mx-auto my-12">
      <div className="space-y-20">

        {/* Scholarships Section */}
        <div data-aos="fade-up">
          <div className="  md:mt-[-20px] flex items-center gap-4 mb-6">
            <FaGraduationCap className="text-blue-700 text-4xl" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide">
              Scholarships & Fellowships
            </h2>
          </div>
          <ul className="list-disc pl-6 sm:pl-8 space-y-5 text-gray-800 text-[1.05rem] sm:text-lg leading-relaxed">
            {scholarships.map((item, index) => (
              <li
                key={index}
                className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:bg-blue-50 hover:text-blue-800 transition-all duration-300 ease-in-out"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-t border-gray-300" />

        {/* Recognitions Section */}
        <div data-aos="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <FaAward className="text-yellow-500 text-3xl" />
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide">
              Professional Recognitions
            </h3>
          </div>
          <ul className="space-y-6">
            {recognitions.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300 ease-in-out"
              >
                <FaStar className="text-blue-600 mt-1 shrink-0" />
                <p className="text-gray-800 text-[1.05rem] sm:text-lg leading-relaxed">
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
