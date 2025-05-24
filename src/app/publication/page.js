'use client';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAtom, FaBook } from 'react-icons/fa';

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const patents = [
    {
      title: "Smart Air: Transforming Air Quality Monitoring with IoT, AI and Drone Technology",
      authors: ["Sanjay Saini", "Amarjeet Singh Chauhan", "Mohit Yadav"],
      description:
        "Explores how cutting-edge technologies such as IoT, AI, and drone-based systems are reshaping the future of air quality monitoring.",
      animation: "fade-right",
    },
    {
      title: "HIGH SPEED VTOL REMOTE CONTROLLED DRONE",
      authors: ["Amarjeet Singh Chauhan", "Mohit Yadav", "Aditya Vardhan", "Sukdev Roy"],
      description:
        "Design registered in class 12-07 for HIGH SPEED VTOL REMOTE CONTROLLED DRONE used in high-mobility applications and aerial monitoring.",
      animation: "fade-left",
    },
    {
      title: "Printed Circuit Board",
      authors: ["Varun Shrivastav", "Amarjeet Singh Chauhan", "Mohit Yadav", "Sanjay Saini"],
      description:
        "Patent focused on optimizing printed circuit board design through advanced traversal algorithms like TSP to improve path efficiency.",
      animation: "fade-right",
    },
  ];

 const publications = [
  // ...existing items
  {
    title: "Use of Deep Learning Algorithms for Efficient Plant Disease Detection using Leaf Images",
    authors: ["Amarjeet Singh Chauhan", "Varun Shrivastav", "Sanjay Saini"],
    description:
      "This paper presents a system using deep learning for detecting plant diseases from leaf images, improving accuracy in early detection.",
    animation: "fade-right",
  },
  {
    title: "Advanced Monitoring System for Agriculture using IoT",
    authors: ["Amarjeet Singh Chauhan", "Mohit Yadav", "Sanjay Saini"],
    description:
      "A smart agriculture system leveraging IoT sensors for real-time monitoring of soil, weather, and crop health.",
    animation: "fade-left",
  },
  {
    title: "An IoT-Enabled Healthcare System for Patient Monitoring",
    authors: ["Amarjeet Singh Chauhan", "Mohit Yadav", "Aman Sharma"],
    description:
      "A framework integrating IoT devices for continuous health monitoring, enhancing patient care with remote tracking.",
    animation: "fade-right",
  },
  {
    title: "Smart Traffic Management System using Computer Vision and IoT",
    authors: ["Amarjeet Singh Chauhan", "Mohit Yadav", "Sanjay Saini"],
    description:
      "A computer vision and IoT based system that automates traffic control and enhances road safety in urban areas.",
    animation: "fade-left",
  }
];


  const renderEntry = (item, idx, icon, btnLabel) => (
    <article
      key={idx}
      data-aos={item.animation}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-md w-full max-w-3xl p-6 hover:shadow-xl transition-transform hover:scale-[1.03] cursor-pointer"
    >
      {icon}
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 hover:text-blue-500 transition-colors">
        {item.title}
      </h3>
      <p className="flex flex-wrap gap-3 mb-3 text-blue-600 text-sm">
        {item.authors.map((author, i) => (
          <span
            key={i}
            className="hover:text-blue-400 cursor-pointer transition-colors"
          >
            {author}
          </span>
        ))}
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
        {item.description}
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={() => alert(`Viewing: ${item.title}`)}
      >
        {btnLabel}
      </button>
    </article>
  );

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My <span className="text-blue-600">Patents & Publications</span>
        </h1>

        {/* Patents */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6" data-aos="zoom-in">
          🧪 Patents
        </h2>
        <div className="flex flex-col items-center gap-8 mb-14">
          {patents.map((item, idx) =>
            renderEntry(
              item,
              idx,
              <FaAtom className="text-indigo-500 text-4xl mb-4" />,
              "View Patent"
            )
          )}
        </div>

        {/* Publications */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6" data-aos="zoom-in">
          📘 Research Publications
        </h2>
        <div className="flex flex-col items-center gap-8">
          {publications.map((item, idx) =>
            renderEntry(
              item,
              idx,
              <FaBook className="text-green-600 text-3xl mb-4" />,
              "Read Publication"
            )
          )}
        </div>
      </div>
    </section>
  );
}
