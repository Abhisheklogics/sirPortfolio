'use client';

import { FaGraduationCap, FaAward, FaStar } from 'react-icons/fa';


export default function ScholarshipsRecognitions() {


  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto font-sans bg-gradient-to-b from-white to-slate-50 text-black z-10 rounded-3xl shadow-2xl overflow-hidden">
     

      <div className="space-y-28 relative z-10">
       
        <div
        
          className="space-y-12"
          aria-label="Scholarships and Fellowships"
        >
          <div className="flex items-center gap-5">
            <div className="p-5 bg-blue-700 rounded-full shadow-xl flex items-center justify-center ring-2 ring-blue-500">
              <FaGraduationCap className="text-4xl " />
            </div>
            <h2 className="text-4xl sm:text-5xl  text-indigo-600 font-bold tracking-tight drop-shadow-lg">
              Scholarships & Fellowships
            </h2>
          </div>
          <ul className="space-y-8">
            {[
              'Undergraduate research fellowship in BTech, 2015-2017.',
              'GATE Fellowship in MTech, 2017-2019',
            ].map((item, index) => (
              <li
                key={index}
                className="bg-white/10 border border-white/25  rounded-2xl px-8 py-6 backdrop-blur-md shadow-lg hover:shadow-2xl transform hover:scale-[1.04] transition duration-350 ease-in-out cursor-default"
              >
                <p className="text-lg sm:text-xl leading-relaxed font-medium tracking-wide">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-500 opacity-30" />

       
        <div
         
          className="space-y-12"
          aria-label="Professional Recognitions"
        >
          <div className="flex items-center gap-5">
            <div className="p-5 bg-yellow-500 rounded-full shadow-xl flex items-center justify-center ring-2 ring-yellow-400">
              <FaAward className="text-4xl " />
            </div>
            <h3 className="text-4xl sm:text-5xl text-indigo-600 font-bold tracking-tight drop-shadow-lg">
              Professional Recognitions
            </h3>
          </div>
          <ul className="space-y-8">
            {[
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
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-5 bg-white/10 border border-white/25 backdrop-blur-md px-8 py-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.04] transition duration-350 ease-in-out cursor-default"
              >
                <FaStar className="mt-1 text-yellow-400 text-2xl flex-shrink-0 drop-shadow" />
                <p className="text-base sm:text-lg  leading-relaxed font-medium tracking-wide">
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
