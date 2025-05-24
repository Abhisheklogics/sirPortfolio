'use client'

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAtom } from 'react-icons/fa';

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const patents = [
    {
      title: "Smart Air : Transforming Air Quality Monitoring with IoT, AI and Drone Technology",
      authors: ["Sanjay Saini", "Amarjeet Singh Chauhan", "Mohit Yadav"],
      description:
        'The book "Smart Air: Transforming Air Quality Monitoring with IoT, AI, and Drone Technology" explores how cutting-edge technologies...',
      animation: "fade-right",
    },
    {
      title: "HIGH SPEED VTOL REMOTE CONTROLLED DRONE",
      authors: ["Amarjeet Singh Chauhan", "Mohit Yadav", "Aditya Vardhan", "Sukdev Roy"],
      description:
        "Certified that the design of which a copy is annexed hereto has been registered as of the number and date given above in class 12-07 in respect of the application of such design to HIGH SPEED VTOL REMOTE CONTROLLED DRONE in the name of 1.Amarjeet Singh Chauhan 2. Mohit Yadav 3.Aditya Vardhan 4.Varun Shrivastav 5.Deepak Kumar 6.Aman Sharma 7.Sumit Sharma...",
      animation: "fade-left",
    },
    {
      title: "HIGH SPEED VTOL REMOTE CONTROLLED DRONE",
      authors: ["Amarjeet Singh Chauhan", "Mohit Yadav", "Aditya Vardhan", "Sukdev Roy"],
      description:
        "Certified that the design of which a copy is annexed hereto has been registered as of the number and date given above in class 12-07 in respect of the application of such design to HIGH SPEED VTOL REMOTE CONTROLLED DRONE in the name of 1.Amarjeet Singh Chauhan 2. Mohit Yadav 3.Aditya Vardhan 4.Varun Shrivastav 5.Deepak Kumar 6.Aman Sharma 7.Sumit Sharma...",
      animation: "fade-left",
    },
  ];

  return (
    <section className="py-10 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 hover:text-blue-500 transition-colors">
          ALL <span className="text-blue-600">PATENTS</span>
        </h1>

        <div className="flex flex-col items-center gap-8">
          {patents.map((patent, idx) => (
            <article
              key={idx}
              data-aos={patent.animation}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md w-full max-w-3xl p-6 transition-transform hover:scale-[1.03] cursor-pointer"
              aria-label={`Patent titled ${patent.title}`}
            >
              <FaAtom className="text-indigo-500 text-4xl mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 hover:text-blue-500 transition-colors">
                {patent.title}
              </h3>
              <p className="flex flex-wrap gap-4 mb-3 text-blue-600">
                {patent.authors.map((author, i) => (
                  <span
                    key={i}
                    className="hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {author}
                  </span>
                ))}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{patent.description}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
                aria-label={`View details of patent titled ${patent.title}`}
                onClick={() => alert(`Viewing: ${patent.title}`)} // Placeholder action
              >
                View
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
