'use client';

import { FaBook, FaPenFancy, FaFileAlt } from 'react-icons/fa';

const bookChapters = [
  "Mohit Yadav, Amarjeet Singh and Sanjay Saini, “Drone Swarms: Tactical Advancements with AI”, Medical and Surgical Drone & Artificial Intelligence: The New Face of Warfare, Wiley, 2024 (In Press).",
  "Amarjeet Singh, Mohit Yadav and Sanjay Saini, “Artificial Intelligence for monitoring and forecasting of air quality using IoT”, Frontiers of IoT Excellence: Connecting Tomorrow with the power of AI and ML, CRC Press, 2024 (In Press).",
  "Amarjeet Singh and Sanjay Saini, “IoT based Smart indoor agriculture system using LoRa Technology and Cloud Computing”, Frontiers of IoT Excellence: Connecting Tomorrow with the power of AI and ML, CRC Press, 2024 (In Press).",
  "Amarjeet Singh, Mohit Yadav, Aditya Vardhan and Sanjay Saini, “Precision Agriculture Techniques with Drone”, Drones in Farming: Innovation & Future Prospects, Springer Nature, 2023.",
  "Amarjeet Singh and Sanjay Saini, “Artificial intelligence for sustainable agriculture”, Agriculture 5.0: Smart Farming based on Industries 4.0, CRC Press, 2023.",
  "Amarjeet Singh and Mohit Yadav “Sustainability and Environmental Impact of Drone Technology in Agriculture”, Drones in Farming: Innovation & Future Prospects, Springer Nature, 2023",
];

const proposedBooks = [
  "Amarjeet Singh, Mohit Yadav and Sanjay Saini, “Smart Forestry: Integration of IoT and AI in Ecosystem, Taylor and Francis, 2024 (Under Editing)",
  "Amarjeet Singh, Mohit Yadav and Sanjay Saini, “Internet of Agriculture Drones”, Springer Nature, 2024 (In Press)",
  "Amarjeet Singh and Sanjay Saini, “Smart Justice: Modern Law with Integration of IoT and Blockchain”, Springer Nature, 2024 (Proposal Submitted)",
  "Mohit Yadav, Sanjay Saini and Amarjeet Singh Chauhan, “Nature’s Algorithms: Harnessing Swarm Intelligence for Complex Computational Paradigms”, Taylor and Francis, 2024 (Under Review)",
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-16 px-6 md:px-12">
      <section className="max-w-6xl mt-[-40px] mx-auto bg-white shadow-2xl rounded-3xl p-12 md:p-16 space-y-20 border border-gray-100">

        {/* Header */}
        <header className="flex items-center gap-6 text-blue-900 select-none">
          <FaBook size={48} className="text-indigo-700" />
          <h1 className="text-2xl md:text-4xl font-extrabold font-serif tracking-tight drop-shadow-sm">
            Publications & Proposed Books
          </h1>
        </header>

        {/* Book Chapters */}
        <section>
          <h2 className="flex items-center text-xl md:text-2xl font-bold mb-8 text-indigo-700 select-none">
            <FaPenFancy className="mr-4 text-indigo-600" />
            Book Chapters
          </h2>
          <ol className="list-decimal list-inside space-y-8 text-gray-800 text-xl leading-relaxed pl-5">
            {bookChapters.map((chapter, idx) => (
              <li
                key={idx}
                className="transition-all duration-300 ease-in-out cursor-default rounded-lg px-4 py-2
                  hover:text-indigo-900 hover:bg-indigo-50 hover:shadow-lg hover:scale-[1.02]"
              >
                {chapter}
              </li>
            ))}
          </ol>
        </section>

        {/* Proposed Books */}
        <section>
          <h2 className="flex items-center text-xl md:text-2xl font-bold mb-8 text-indigo-700 select-none">
            <FaFileAlt className="mr-4 text-indigo-600" />
            Proposed Books
          </h2>
          <ul className="space-y-6 text-gray-700 text-xl leading-relaxed">
            {proposedBooks.map((book, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 cursor-default rounded-lg px-5 py-3 transition-all duration-300 ease-in-out
                  hover:text-indigo-900 hover:bg-indigo-50 hover:shadow-lg hover:scale-[1.02]"
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
