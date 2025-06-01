'use client';


import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CardSpotlight } from "@/components/ui/card-spotlight";



 export function CardSpotlightBooks() {
  
  const bookChaptersData = [
    {
      no: 1,
      title: "Drone Swarms: Tactical Advancements with AI",
      coAuthors: "Mohit Yadav, Amarjeet Singh, Sanjay Saini",
      publisher: "Wiley",
      year: "2024",
      status: "In Press",
    },
    {
      no: 2,
      title: "Artificial Intelligence for monitoring and forecasting of air quality using IoT",
      coAuthors: "Amarjeet Singh, Mohit Yadav, Sanjay Saini",
      publisher: "CRC Press",
      year: "2024",
      status: "In Press",
    },
    {
      no: 3,
      title: "IoT based Smart indoor agriculture system using LoRa Technology and Cloud Computing",
      coAuthors: "Amarjeet Singh, Sanjay Saini",
      publisher: "CRC Press",
      year: "2024",
      status: "In Press",
    },
    {
      no: 4,
      title: "Precision Agriculture Techniques with Drone",
      coAuthors: "Amarjeet Singh, Mohit Yadav, Aditya Vardhan, Sanjay Saini",
      publisher: "Springer Nature",
      year: "2023",
      status: "Published",
    },
    {
      no: 5,
      title: "Artificial intelligence for sustainable agriculture",
      coAuthors: "Amarjeet Singh, Sanjay Saini",
      publisher: "CRC Press",
      year: "2023",
      status: "Published",
    },
    {
      no: 6,
      title: "Sustainability and Environmental Impact of Drone Technology in Agriculture",
      coAuthors: "Amarjeet Singh, Mohit Yadav",
      publisher: "Springer Nature",
      year: "2023",
      status: "Published",
    },
  ];

  const proposedBooksData = [
    {
      no: 1,
      title: "Smart Forestry: Integration of IoT and AI in Ecosystem",
      coAuthors: "Amarjeet Singh, Mohit Yadav, Sanjay Saini",
      publisher: "Taylor and Francis",
      year: "2024",
      status: "Under Editing",
    },
    {
      no: 2,
      title: "Internet of Agriculture Drones",
      coAuthors: "Amarjeet Singh, Mohit Yadav, Sanjay Saini",
      publisher: "Springer Nature",
      year: "2024",
      status: "In Press",
    },
    {
      no: 3,
      title: "Smart Justice: Modern Law with Integration of IoT and Blockchain",
      coAuthors: "Amarjeet Singh, Sanjay Saini",
      publisher: "Springer Nature",
      year: "2024",
      status: "Proposal Submitted",
    },
    {
      no: 4,
      title: "Nature’s Algorithms: Harnessing Swarm Intelligence for Complex Computational Paradigms",
      coAuthors: "Mohit Yadav, Sanjay Saini, Amarjeet Singh Chauhan",
      publisher: "Taylor and Francis",
      year: "2024",
      status: "Under Review",
    },
  ];

 

  return (
    <div className="space-y-12 px-4 sm:px-6 lg:px-8">
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">📘 Book Chapters</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {bookChaptersData.map((item) => (
            <CardSpotlight
            key={`pub-${item.no}`}
            className="min-h-[260px] p-6">
             <p className="text-neutral-300 text-sm z-20 relative">
              <strong className='text-blue-600'>S.No:</strong> {item.no}
              <br />
              <strong className='text-blue-600'>Title:</strong> {item.title}
              <br />
              <strong className='text-blue-600'>coAuthors:</strong> {item.coAuthors}
              <br />
              <strong className='text-blue-600'>Publisher:</strong> {item.publisher}
                <br />
                      <strong className='text-blue-600'>year:</strong> {item.year}
                        <br />
                              <strong className='text-blue-600'>Status:</strong> {item.status}
            </p>
             </CardSpotlight>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">📝 Proposed Books</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {proposedBooksData.map((item) => (
               <CardSpotlight
            key={`pub-${item.no}`}
            className="min-h-[260px] p-6">
              <p className="text-neutral-300 text-sm z-20 relative">
              <strong className='text-blue-600'>S.No:</strong> {item.no}
              <br />
              <strong className='text-blue-600'>Title:</strong> {item.title}
              <br />
              <strong className='text-blue-600'>coAuthors:</strong> {item.coAuthors}
              <br />
              <strong className='text-blue-600'>Publisher:</strong> {item.publisher}
                <br />
                      <strong className='text-blue-600'>year:</strong> {item.year}
                        <br />
                              <strong className='text-blue-600'>Status:</strong> {item.status}
            </p>
             </CardSpotlight>
          ))}
        </div>
      </section>
    </div>
  );
}





export function CardSpotlightPublications() {
  const publications = [
    {
      no: 1,
      title: "Appraisal Study and Analytics of Industrial 4.0 - A Rebellion Towards Existing Twins",
      authors: "Mohit Yadav, Amarjeet Singh, Aditya Vardhan, Sanjay Saini",
      description:
        "IEEE International Students' Conference on Electrical, Electronics and Computer Science (SCEECS), MANIT, Bhopal, 2024.",
      animation: "fade-right",
    },
    {
      no: 2,
      title:
        "IoT and IoE Transformations in Precision Farming Agriculture: Sensor Based Monitoring, Automated Irrigation and Livestock Monitoring",
      authors: "Mohit Yadav, Amarjeet Singh, Varun Shrivastav, Sanjay Saini",
      description:
        "IEEE International Students' Conference on Electrical, Electronics and Computer Science (SCEECS), MANIT, Bhopal, 2024.",
      animation: "fade-left",
    },
    {
      no: 3,
      title:
        "A Study on Creation of Industry 5.0: New Innovations using Big Data Through Artificial Intelligence, Internet of Things and Next-Origination Technology Policy",
      authors: "Mohit Yadav, Amarjeet Singh, Aditya Vardhan, Sanjay Saini",
      description:
        "IEEE International Students' Conference on Electrical, Electronics and Computer Science (SCEECS), MANIT, Bhopal, 2023.",
      animation: "fade-right",
    },
    {
      no: 4,
      title:
        "A Review Study of Industry 5.0: Integrating Human Creativity with Advanced Technologies, IoT, AI, Big Data",
      authors: "Mohit Yadav, Amarjeet Singh Chauhan, Sanjay Saini",
      description:
        "45th National Systems Conference, September 26 – 30, 2022, SSI and DEI.",
      animation: "fade-left",
    },
    {
      no: 5,
      title: "A Survey on Aerial Swarm Robotics",
      authors: "Mohit Yadav, Amarjeet Singh Chauhan, Sanjay Saini",
      description:
        "45th National Systems Conference, September 26 – 30, 2022, SSI and DEI.",
      animation: "fade-right",
    },
    {
      no: 6,
      title: "Unmanned Aerial Vehicles (UAVs): A Step Towards Industry 5.0",
      authors: "Amarjeet Singh Chauhan, Sanjay Saini",
      description:
        "44th National Systems Conference, May 22 – 23, 2021, SSI and DEI.",
      animation: "fade-left",
    },
    {
      no: 7,
      title:
        "Integration of Smart Irrigation System and Water Quality Monitoring for Sustainable Management System",
      authors: "Mohit Yadav, Amarjeet Singh Chauhan, Sanjay Saini",
      description:
        "44th National Systems Conference, May 22 – 23, 2021, SSI and DEI.",
      animation: "fade-right",
    },
    {
      no: 8,
      title: "IoT based Smart Residence System",
      authors:
        "Mohit Yadav, Aditya Vardhan, Amarjeet Singh Chauhan, Sanjay Saini",
      description:
        "International Journal of Creative Research Thoughts, ISSN: 2320-2882, Volume 10, Issue 1, January 2022.",
      animation: "fade-left",
    },
    {
      no: 9,
      title: "IoT based Health Monitoring System",
      authors:
        "Mohit Yadav, Aditya Vardhan, Amarjeet Singh Chauhan, Sanjay Saini",
      description:
        "International Journal of Creative Research Thoughts, ISSN: 2320-2882, Volume 10, Issue 1, January 2022.",
      animation: "fade-right",
    },
    {
      no: 10,
      title:
        "IoT based Smart Electricity Meter with Energy Prediction and Consumption",
      authors:
        "Amarjeet Singh Chauhan, Mohit Yadav, Aditya Vardhan, Sanjay Saini",
      description:
        "Journal of Emerging Technologies and Innovative Research (JETIR), ISSN: 2349-5162, Volume 9, Issue 1, pp. 554-561, January 2022.",
      animation: "fade-left",
    },
    {
      no: 11,
      title: "IoT based Smart Agriculture Using LoRa Technology",
      authors: "Amarjeet Singh Chauhan, Sanjay Saini",
      description:
        "Intelligent Computing and Technologies Conference, ASTU, Assam & Central Institute of Technology, Kokrajhar, Assam, 2021.",
      animation: "fade-right",
    },
  ];

  return (
    <div className="space-y-8">
   
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {publications.map((item) => (
          <CardSpotlight
            key={`pub-${item.no}`}
            className="min-h-[260px] p-6"
            data-aos={item.animation}
          >
            <p className="text-neutral-300 text-sm z-20 relative">
              <strong className='text-blue-600'>S.No:</strong> {item.no}
              <br />
              <strong className='text-blue-600'>Title:</strong> {item.title}
              <br />
              <strong className='text-blue-600'>Authors:</strong> {item.authors}
              <br />
              <strong className='text-blue-600'>Details:</strong> {item.description}
            </p>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
}

export default function BooksPage() {
  useEffect(() => {
    AOS.init({ duration: 1100 }); // corrected duration
  }, []);

  return (
    <main className="space-y-16 px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <CardSpotlightBooks />
      </section>
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">📄 Research Publications</h2>
        <CardSpotlightPublications />
      </section>
    </main>
  );
}

