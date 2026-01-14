'use client';

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
      animation: "fade-right",
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
       animation: "fade-right",
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
       animation: "fade-right",
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
      animation: "fade-right",
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
       animation: "fade-right",
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

export function CardSpotlightPublications() {
 

  return (
    <section className="px-6 md:px-16 py-16 bg-gradient-to-b from-white to-slate-50 text-black">
      <div className="max-w-7xl mx-auto">
      
<h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">📄 Research Publications</h2>
        <div  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {publications.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <p className="text-sm mb-2"><span className="font-semibold text-slate-800">S.No:</span> {item.no}</p>
              <p className="text-sm mb-2"><span className="font-semibold text-slate-800">Title:</span> {item.title}</p>
              <p className="text-sm mb-2"><span className="font-semibold text-slate-800">Authors:</span> {item.authors}</p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-800">Details:</span> {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CardSpotlightBooks() {


  const renderCard = (item, idx) => (
    <div
      key={idx}
      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <p className="text-sm mb-2"><span className="font-semibold text-slate-800">S.No:</span> {item.no}</p>
      <p className="text-sm mb-2"><span className="font-semibold text-slate-800">Title:</span> {item.title}</p>
      <p className="text-sm mb-2"><span className="font-semibold text-slate-800">Co-Authors:</span> {item.coAuthors}</p>
      <p className="text-sm mb-2"><span className="font-semibold text-slate-800">Publisher:</span> {item.publisher}</p>
      <p className="text-sm mb-2"><span className="font-semibold text-slate-800">Year:</span> {item.year}</p>
      <p className="text-sm">
        <span className="font-semibold text-slate-800">Status:</span>{' '}
        <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold 
          ${item.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>
          {item.status}
        </span>
      </p>
    </div>
  );

  return (
    <div className="px-6 md:px-16 py-16 bg-gradient-to-b from-slate-50 to-white text-black">
      <div className="max-w-7xl mx-auto space-y-20">
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-800">📘 Book Chapters</h2>
          <div  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {bookChaptersData.map(renderCard)}
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-800">📝 Proposed Books</h2>
          <div  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {proposedBooksData.map(renderCard)}
          </div>
        </section>
      </div>
    </div>
  );
}
