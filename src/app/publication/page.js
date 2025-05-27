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
    // International Design Patents
    {
      title: "Device for Distribution and Monitoring of Nutrients for Hydroponics",
      designNumber: "Design No – 6326599",
      country: "United Kingdom",
      type: "International Design Patent",
      animation: "fade-right",
    },
    {
      title: "Medi-Drone: Medicine Delivery Drone",
      designNumber: "Design Number – 6317960",
      country: "United Kingdom",
      type: "International Design Patent",
      animation: "fade-left",
    },
    {
      title: "Printed Circuit Board",
      designNumber: "Design Number – 6328234",
      country: "United Kingdom",
      type: "International Design Patent",
      animation: "fade-right",
    },
    {
      title: "Light Weight Drone",
      designNumber: "Design Number - 6299404",
      country: "United Kingdom",
      type: "International Design Patent",
      animation: "fade-left",
    },
    {
      title: "16 Rotor High Payload Drone",
      designNumber: "Design Number – 6304506",
      country: "United Kingdom",
      type: "International Design Patent",
      animation: "fade-right",
    },
    {
      title: "32 Rotor High Payload Drone",
      designNumber: "Design Number - 6312678",
      country: "United Kingdom",
      type: "International Design Patent",
      animation: "fade-left",
    },
    {
      title: "Remote Controlled Helicopter Drone",
      designNumber: "Design Number - 6309933",
      country: "United Kingdom",
      type: "International Design Patent",
      animation: "fade-right",
    },
    // National Patents
    {
      title: "IoT Based Smart Drip Irrigation System",
      applicationNumber: "Application Number – 202211058572",
      country: "India",
      status: "PUBLISHED",
      type: "National Patent",
      animation: "fade-left",
    },
    {
      title: "High Speed V.T.O.L. Drone",
      applicationNumber: "Application Number – 400661-001",
      country: "India",
      status: "GRANTED",
      type: "National Patent",
      animation: "fade-right",
    },
    {
      title: "Optimized Hybrid Drone Using Ionic Propulsion Along with Toroidal Propeller’s",
      applicationNumber: "Application Number – 202411018436",
      country: "India",
      status: "PUBLISHED",
      type: "National Patent",
      animation: "fade-left",
    },
  ];

  const publications = [
    {
      title: "Appraisal Study and Analytics of Industrial 4.0 - A Rebellion Towards Existing Twins",
      authors: ["Mohit Yadav", "Amarjeet Singh", "Aditya Vardhan", "Sanjay Saini"],
      description: "IEEE International Students' Conference on Electrical, Electronics and Computer Science (SCEECS), MANIT, Bhopal, 2024.",
      animation: "fade-right",
    },
    {
      title: "IoT and IoE Transformations in Precision Farming Agriculture: Sensor Based Monitoring, Automated Irrigation and Livestock Monitoring",
      authors: ["Mohit Yadav", "Amarjeet Singh", "Varun Shrivastav", "Sanjay Saini"],
      description: "IEEE International Students' Conference on Electrical, Electronics and Computer Science (SCEECS), MANIT, Bhopal, 2024.",
      animation: "fade-left",
    },
    {
      title: "A Study on Creation of Industry 5.0: New Innovations using Big Data Through Artificial Intelligence, Internet of Things and Next-Origination Technology Policy",
      authors: ["Mohit Yadav", "Amarjeet Singh", "Aditya Vardhan", "Sanjay Saini"],
      description: "IEEE International Students' Conference on Electrical, Electronics and Computer Science (SCEECS), MANIT, Bhopal, 2023.",
      animation: "fade-right",
    },
    {
      title: "A Review Study of Industry 5.0: Integrating Human Creativity with Advanced Technologies, IoT, AI, Big Data",
      authors: ["Mohit Yadav", "Amarjeet Singh Chauhan", "Sanjay Saini"],
      description: "45th National Systems Conference, September 26 – 30, 2022, SSI and DEI.",
      animation: "fade-left",
    },
    {
      title: "A Survey on Aerial Swarm Robotics",
      authors: ["Mohit Yadav", "Amarjeet Singh Chauhan", "Sanjay Saini"],
      description: "45th National Systems Conference, September 26 – 30, 2022, SSI and DEI.",
      animation: "fade-right",
    },
    {
      title: "Unmanned Aerial Vehicles (UAVs): A Step Towards Industry 5.0",
      authors: ["Amarjeet Singh Chauhan", "Sanjay Saini"],
      description: "44th National Systems Conference, May 22 – 23, 2021, SSI and DEI.",
      animation: "fade-left",
    },
    {
      title: "Integration of Smart Irrigation System and Water Quality Monitoring for Sustainable Management System",
      authors: ["Mohit Yadav", "Amarjeet Singh Chauhan", "Sanjay Saini"],
      description: "44th National Systems Conference, May 22 – 23, 2021, SSI and DEI.",
      animation: "fade-right",
    },
    {
      title: "IoT based Smart Residence System",
      authors: ["Mohit Yadav", "Aditya Vardhan", "Amarjeet Singh Chauhan", "Sanjay Saini"],
      description: "International Journal of Creative Research Thoughts, ISSN: 2320-2882, Volume 10, Issue 1, January 2022.",
      animation: "fade-left",
    },
    {
      title: "IoT based Health Monitoring System",
      authors: ["Mohit Yadav", "Aditya Vardhan", "Amarjeet Singh Chauhan", "Sanjay Saini"],
      description: "International Journal of Creative Research Thoughts, ISSN: 2320-2882, Volume 10, Issue 1, January 2022.",
      animation: "fade-right",
    },
    {
      title: "IoT based Smart Electricity Meter with Energy Prediction and Consumption",
      authors: ["Amarjeet Singh Chauhan", "Mohit Yadav", "Aditya Vardhan", "Sanjay Saini"],
      description: "Journal of Emerging Technologies and Innovative Research (JETIR), ISSN: 2349-5162, Volume 9, Issue 1, pp. 554-561, January 2022.",
      animation: "fade-left",
    },
    {
      title: "IoT based Smart Agriculture Using LoRa Technology",
      authors: ["Amarjeet Singh Chauhan", "Sanjay Saini"],
      description: "Intelligent Computing and Technologies Conference, ASTU, Assam & Central Institute of Technology, Kokrajhar, Assam, 2021.",
      animation: "fade-right",
    },
  ];

  const renderEntry = (item, idx, icon, btnLabel) => (
    <article
      key={idx}
      data-aos={item.animation}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-md w-full max-w-3xl p-6 hover:shadow-xl transition-transform hover:scale-[1.03] cursor-pointer"
      tabIndex={0}
      role="region"
      aria-labelledby={`entry-title-${idx}`}
    >
      {icon}
      <h3
        id={`entry-title-${idx}`}
        className="text-xl font-semibold text-gray-800 dark:text-white mb-2 hover:text-blue-500 transition-colors"
      >
        {item.title}
      </h3>
      {/* For patents, show either designNumber or applicationNumber + status */}
      {item.designNumber && (
        <p className="text-gray-600 dark:text-gray-300 mb-1 text-sm">
          <strong>{item.type}:</strong> {item.designNumber} ({item.country})
        </p>
      )}
      {item.applicationNumber && (
        <p className="text-gray-600 dark:text-gray-300 mb-1 text-sm">
          <strong>{item.type}:</strong> {item.applicationNumber} ({item.country}) - <em>{item.status}</em>
        </p>
      )}
      {/* For publications, show authors */}
      {item.authors && (
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
      )}
      {item.description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {item.description}
        </p>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={() => alert(`Viewing: ${item.title}`)}
        aria-label={`${btnLabel} for ${item.title}`}
      >
        {btnLabel}
      </button>
    </article>
  );

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <h1
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
          data-aos="fade-down"
        >
          My <span className="text-blue-600">Patents & Publications</span>
        </h1>

        {/* Patents */}
        <h2
          className="text-2xl font-semibold text-gray-800 dark:text-white mb-6"
          data-aos="zoom-in"
        >
          🧪 Patents
        </h2>
        <div className="flex flex-col items-center gap-8 mb-14">
          {patents.map((item, idx) =>
            renderEntry(item, idx, <FaAtom className="text-indigo-500 text-4xl mb-4" />, "View Patent")
          )}
        </div>

        {/* Publications */}
        <h2
          className="text-2xl font-semibold text-gray-800 dark:text-white mb-6"
          data-aos="zoom-in"
        >
          📘 Research Publications
        </h2>
        <div className="flex flex-col items-center gap-8">
          {publications.map((item, idx) =>
            renderEntry(item, idx, <FaBook className="text-green-600 text-3xl mb-4" />, "Read Publication")
          )}
        </div>
      </div>
    </section>
  );
}
