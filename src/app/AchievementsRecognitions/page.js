'use client';

import { FaGraduationCap, FaAward, FaStar } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

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
    AOS.init({
      duration: 800,      
      easing: 'ease-in-out',
      once: true           
    });
  }, []);

  return (
    <section className="bg-white relative py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto font-sans z-10">
     
      <div className="space-y-24 relative z-10">

        {/* Scholarships Section */}
        <div data-aos="fade-up" className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-700  rounded-full shadow-lg">
              <FaGraduationCap className="text-3xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
              Scholarships & Fellowships
            </h2>
          </div>
          <ul className="space-y-6">
            {scholarships.map((item, index) => (
              <li
                key={index}
                className="bg-white/10 border border-white/20 rounded-xl px-6 py-5  backdrop-blur-sm shadow hover:scale-[1.02] transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-400 dark:border-gray-600 opacity-30" />

        {/* Recognitions Section */}
        <div data-aos="fade-up" className="space-y-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-yellow-500 rounded-full shadow-lg">
              <FaAward className="text-3xl " />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
              Professional Recognitions
            </h3>
          </div>
          <ul className="space-y-6">
            {recognitions.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 bg-white/10 border border-white/20  backdrop-blur-sm px-6 py-5 rounded-xl shadow hover:scale-[1.02] transition duration-300"
              >
                <FaStar className="mt-1 text-blue-400 text-xl shrink-0" />
                <p className="text-sm sm:text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
