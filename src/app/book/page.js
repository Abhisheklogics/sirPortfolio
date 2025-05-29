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
    AOS.init({ duration: 1100, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-24 px-6 sm:px-12 lg:px-20 font-sans">
      <section className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-indigo-200 rounded-3xl shadow-2xl p-10 sm:p-16 space-y-20">

        {/* Header */}
        <header className="flex items-center gap-6 select-none" data-aos="fade-down">
          <FaBook
            size={52}
            className="text-indigo-700 drop-shadow-md transition-transform duration-500 hover:scale-110 hover:text-indigo-900"
            aria-hidden="true"
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-indigo-900 drop-shadow-sm leading-tight">
            Publications & Proposed Books
          </h1>
        </header>

        {/* Book Chapters */}
        <section data-aos="fade-up" aria-labelledby="book-chapters-title">
          <h2
            id="book-chapters-title"
            className="flex items-center gap-4 text-3xl font-semibold text-indigo-800 mb-12 tracking-wide drop-shadow-sm"
          >
            <FaPenFancy className="text-indigo-600 animate-pulse" />
            Book Chapters
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-gray-900 text-lg leading-relaxed tracking-wide [&>li]:bg-white/95 [&>li]:backdrop-blur-sm [&>li]:border [&>li]:border-indigo-300 [&>li]:rounded-xl [&>li]:p-6 [&>li]:shadow-lg [&>li]:hover:shadow-indigo-400/50 [&>li]:hover:scale-[1.04] [&>li]:transform [&>li]:transition-all [&>li]:duration-300 cursor-default">
            {bookChapters.map((chapter, idx) => (
              <li
                key={idx}
                tabIndex={0}
                aria-label={`Book Chapter ${idx + 1}`}
                className="text-gray-800 text-base sm:text-lg font-medium"
              >
                {chapter}
              </li>
            ))}
          </ol>
        </section>

        {/* Proposed Books */}
        <section data-aos="fade-up" aria-labelledby="proposed-books-title">
          <h2
            id="proposed-books-title"
            className="flex items-center gap-4 text-3xl font-semibold text-indigo-800 mb-12 tracking-wide drop-shadow-sm"
          >
            <FaFileAlt className="text-indigo-600 animate-pulse" />
            Proposed Books
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-gray-900 text-lg leading-relaxed tracking-wide">
            {proposedBooks.map((book, idx) => (
              <li
                key={idx}
                tabIndex={0}
                aria-label={`Proposed Book ${idx + 1}`}
                className="flex items-start gap-4 bg-white/95 backdrop-blur-sm border border-indigo-300 rounded-xl p-6 shadow-lg hover:shadow-indigo-400/50 hover:scale-[1.04] transform transition-all duration-300 cursor-default"
              >
                <FaBook className="mt-1 text-indigo-600 flex-shrink-0" aria-hidden="true" />
                <p className="text-gray-800 text-base sm:text-lg font-medium">{book}</p>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
