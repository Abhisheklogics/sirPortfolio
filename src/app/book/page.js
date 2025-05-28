'use client';

import { FaBook, FaPenFancy, FaFileAlt } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const bookChapters = [
  "Mohit Yadav, Amarjeet Singh and Sanjay Saini, “Drone Swarms: Tactical Advancements with AI”, Medical and Surgical Drone & Artificial Intelligence: The New Face of Warfare, Wiley, 2024 (In Press).",
  "Amarjeet Singh, Mohit Yadav and Sanjay Saini, “Artificial Intelligence for monitoring and forecasting of air quality using IoT”, Frontiers of IoT Excellence: Connecting Tomorrow with the power of AI and ML, CRC Press, 2024 (In Press).",
  "Amarjeet Singh and Sanjay Saini, “IoT based Smart indoor agriculture system using LoRa Technology and Cloud Computing”, Frontiers of IoT Excellence: Connecting Tomorrow with the power of AI and ML, CRC Press, 2024 (In Press).",
  "Amarjeet Singh, Mohit Yadav, Aditya Vardhan and Sanjay Saini, “Precision Agriculture Techniques with Drone”, Drones in Farming: Innovation & Future Prospects, Springer Nature, 2023.",
  "Amarjeet Singh and Sanjay Saini, “Artificial intelligence for sustainable agriculture”, Agriculture 5.0: Smart Farming based on Industries 4.0, CRC Press, 2023.",
  "Amarjeet Singh and Mohit Yadav “Sustainability and Environmental Impact of Drone Technology in Agriculture”, Drones in Farming: Innovation & Future Prospects, Springer Nature, 2023",
];

const proposedBooks = [
  "Amarjeet Singh, Mohit Yadav and Sanjay Saini, “Smart Forestry: Integration of IoT and AI in Ecosystem, Taylor and Francis, 2024 (Under Editing)”",
  "Amarjeet Singh, Mohit Yadav and Sanjay Saini, “Internet of Agriculture Drones”, Springer Nature, 2024 (In Press)",
  "Amarjeet Singh and Sanjay Saini, “Smart Justice: Modern Law with Integration of IoT and Blockchain”, Springer Nature, 2024 (Proposal Submitted)",
  "Mohit Yadav, Sanjay Saini and Amarjeet Singh Chauhan, “Nature’s Algorithms: Harnessing Swarm Intelligence for Complex Computational Paradigms”, Taylor and Francis, 2024 (Under Review)",
];

export default function BooksPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className=" md:mt-[-20px] min-h-screen bg-gradient-to-br from-[#f8fafc] to-white py-16 px-4 sm:px-6 lg:px-12">
      <section className="max-w-6xl mx-auto bg-white border border-gray-200 shadow-2xl rounded-3xl p-6 sm:p-10 md:p-14 space-y-20">

        {/* Header */}
        <header className="flex items-center gap-5   select-none" data-aos="fade-up">
          <FaBook size={42} className="text-indigo-700 drop-shadow-md" />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-wide">
            Publications & Proposed Books
          </h1>
        </header>

        <hr className="border-t border-gray-200 mt-[-50px]" />

        {/* Book Chapters */}
        <section data-aos="fade-up  ">
          <h2 className=" mt-[-50px] flex items-center text-2xl font-semibold text-indigo-800 mb-6">
            <FaPenFancy className=" mr-3 text-indigo-600" />
            Book Chapters
          </h2>
          <ol className=" list-decimal space-y-6 text-gray-800 text-[1.07rem] sm:text-lg leading-relaxed sm:pl-5">
            {bookChapters.map((chapter, idx) => (
              <li
                key={idx}
                className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:bg-indigo-50"
              >
                {chapter}
              </li>
            ))}
          </ol>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Proposed Books */}
        <section data-aos="fade-up">
          <h2 className="flex items-center text-2xl font-semibold text-indigo-800 mb-6">
            <FaFileAlt className="mr-3 text-indigo-600" />
            Proposed Books
          </h2>
          <ul className="space-y-5 text-gray-800 text-[1.07rem] sm:text-lg leading-relaxed">
            {proposedBooks.map((book, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:bg-indigo-50"
              >
                <FaBook className="mt-1 text-indigo-600 flex-shrink-0" />
                <p>{book}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
