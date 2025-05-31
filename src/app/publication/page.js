'use client';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaAtom, FaBook } from 'react-icons/fa';
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/moving-border";
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
const renderEntry = (item, idx, icon, btnLabel, isPatent = true) => (
  <article
    key={`${isPatent ? 'patent' : 'pub'}-${idx}`}
    data-aos={item.animation}
    className="group relative text-white bg-gray-900 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-4xl p-8 cursor-pointer hover:scale-[1.02]"
    tabIndex={0}
    role="region"
    aria-labelledby={`entry-title-${isPatent ? 'patent' : 'pub'}-${idx}`}
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="text-4xl text-blue-600 dark:text-blue-400">{icon}</div>
      <div>
        <h3
          id={`entry-title-${isPatent ? 'patent' : 'pub'}-${idx}`}
          className="md:text-2xl font-semibold text-white dark:text-white group-hover:text-blue-600 transition"
        >
          {item.title}
        </h3>

        {item.designNumber && (
          <p className="text-white dark:text-gray-300 text-sm mt-1">
            <strong>{item.type}:</strong> {item.designNumber} ({item.country})
          </p>
        )}

        {item.applicationNumber && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
            <strong>{item.type}:</strong> {item.applicationNumber} ({item.country}) — <em>{item.status}</em>
          </p>
        )}
      </div>
    </div>

    {item.authors && (
      <p className="flex flex-wrap gap-2 mb-4 text-sm text-blue-500 dark:text-blue-400 font-medium">
        {item.authors.map((author, i) => (
          <span key={i} className="hover:underline transition">{author}</span>
        ))}
      </p>
    )}

    {item.description && (
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
        {item.description}
      </p>
    )}

    <Button
        borderRadius="1.75rem"
        className="bg-gray-900 dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
      >
     
 
      {btnLabel}
     
    </Button>
       <Meteors number={20} />
  </article>
);


  return (
    <section className="py-20 mt-[-40px] bg-black text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
  <div className="container mx-auto px-6 md:px-12">
    <h1
      className=" text-2xl sm:text-4xl font-bold   text-white tracking-wide text-center "
      data-aos="fade-down"
    >
      My <span className="">Patents & Publications</span>
    </h1>

    {/* Patents Section */}
    <h2 className="text-lg  md:text-2xl mt-10 font-bold text-white dark:text-white mb-8" data-aos="zoom-in">
      🧪 Patents
    </h2>
    <div className="flex flex-col items-center gap-10 mb-20">
      {patents.map((item, idx) =>
        renderEntry(item, idx, <FaAtom />, "View Patent", true)
      )}
      
    </div>

    {/* Publications Section */}
    <h2 className="md:text-2xl text-lg font-bold text-white dark:text-white mb-8" data-aos="zoom-in">
      📘 Publications
    </h2>
    <div className="flex flex-col items-center gap-10">
      {publications.map((item, idx) =>
        renderEntry(item, idx, <FaBook />, "View Publication", false)
      )}
      
    </div>
  </div>
</section>
 );
}
