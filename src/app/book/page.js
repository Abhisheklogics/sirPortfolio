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
    <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <section className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-10">
        
        <header className="mb-10 flex items-center space-x-4 text-blue-900">
          <FaBook size={42} />
          <h1 className="text-4xl font-extrabold font-serif tracking-tight">Publications & Proposed Books</h1>
        </header>

        {/* Book Chapters Section */}
        <section className="mb-14">
          <h2 className="flex items-center text-3xl font-semibold mb-6 text-indigo-700">
            <FaPenFancy className="mr-3" />
            Book Chapters
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-800 text-lg leading-relaxed">
            {bookChapters.map((chapter, idx) => (
              <li key={idx} className="hover:text-indigo-900 transition-colors cursor-default">
                {chapter}
              </li>
            ))}
          </ol>
        </section>

        {/* Proposed Books Section */}
        <section>
          <h2 className="flex items-center text-3xl font-semibold mb-6 text-indigo-700">
            <FaFileAlt className="mr-3" />
            Proposed Books
          </h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            {proposedBooks.map((book, idx) => (
              <li key={idx} className="flex items-start space-x-3 hover:text-indigo-900 transition-colors cursor-default">
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
