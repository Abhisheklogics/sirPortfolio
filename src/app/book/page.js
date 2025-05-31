'use client';


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CardSpotlight } from "@/components/ui/card-spotlight";


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

 
export function CardSpotlightBooks() {
  return (
    <div className="space-y-8 ">
      <h2 className="text-2xl font-bold text-white"> Book Chapters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {bookChapters.map((item, index) => (
          <CardSpotlight
            key={`book-${index}`}
            className="min-h-[200px] p-6"
            data-aos="zoom-in"
          >
           
            <p className="text-neutral-300 text-sm z-20 relative">{item}</p>
          </CardSpotlight>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-10">📝 Proposed Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {proposedBooks.map((item, index) => (
          <CardSpotlight
            key={`proposed-${index}`}
            className="min-h-[200px] p-6"
            data-aos="fade-up"
          >
            
            <p className="text-neutral-300 text-sm z-20 relative">{item}</p>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
}



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

 function CardSpotlightPublications() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {publications.map((pub, index) => (
        <CardSpotlight
          key={index}
          className="p-4 sm:p-6 rounded-2xl min-h-[240px] sm:min-h-[260px]"
          data-aos={pub.animation}
        >
          <div className="z-20 relative flex flex-col h-full">
            <p className="text-white text-base sm:text-lg font-semibold mb-2">
              {pub.title}
            </p>

            <p className="text-neutral-300 text-sm sm:text-base mb-2">
              <span className="font-medium">Authors:</span>{" "}
              {pub.authors.join(", ")}
            </p>

            <p className="text-neutral-400 text-sm sm:text-sm text-left sm:text-justify mt-auto">
              {pub.description}
            </p>
          </div>
        </CardSpotlight>
      ))}
    </div>
  );
}

export default function BooksPage() {
  useEffect(() => {
    AOS.init({ duration: 1100, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <main className="min-h-screen  bg-black py-24 px-6 mt-[-100px] sm:px-12 lg:px-20 font-sans">
      <section className="max-w-7xl mx-auto  backdrop-blur-md  rounded-3xl shadow-2xl p-10 sm:p-16 space-y-20">

        
       <CardSpotlightBooks/>
        <div className=" bg-black min-h-screen">
      <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">Research Publications</h2>
      <CardSpotlightPublications />
    </div>
        </section>
      
    </main>
  );
}
