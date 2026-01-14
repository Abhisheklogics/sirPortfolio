'use client';


import { FaFlask, FaProjectDiagram } from 'react-icons/fa';
import { Button } from '@/components/ui/moving-border';

const fundedProjects = [
  {
    title: 'Internet of Things',
    sponsor: 'MHRD Virtual Labs',
    amount: '₹20 Lakhs',
    description:
      'A project sanctioned under MHRD Virtual Labs focusing on IoT development and research.',
    link: '#',
  },
  {
    title: 'Smart Home Automation Kit',
    sponsor: 'University Research Grant',
    amount: '₹2 Lakhs',
    description: 'Research grant for developing innovative smart home automation solutions.',
    link: '#',
  },
  {
    title: 'AI based Agricultural Drone',
    sponsor: 'University Research Grant',
    amount: '₹2 Lakhs',
    description:
      'Project focusing on AI integration with drones for agricultural applications.',
    link: '#',
  },
];

const supervisprojects = [
  'IoT based Automatic Irrigation System in Agriculture',
  'Smart Polyhouse using IoT',
  'Plant disease detection using Image Processing',
  'Smart Garbage Collection using LORA Technology and IoT',
  'IoT Lab Automation',
  'Air Quality Monitoring and Analysis System using IoT',
  'Mobile Robot',
  'Smart Attendance System using Fingerprint and Face Recognition',
  'Smart Health Kit',
  'Fire Detection Alarm System using IoT',
  'Soil and Water Quality Monitoring System using IoT',
  'Baal Jyoti: An E-Learning Android Application for Kids Learning',
  'Women’s Safety Mobile Application',
  'Mobile Application for Multi-QR Scanning',
  'Inventory Management System',
  'Blog Application using Python',
  'Quad-copter Drone',
  'Flower Dropping Drone',
  'Medicine Delivery Drone',
  'High Payload Drone using 16 Rotors',
  '32-Rotor High Payload Drone',
  'Air-Ambulance up to 45 KG Payload',
];

export default function Page() {


  return (
    <section className="min-h-screen py-20 overflow-x-hidden
 px-6 md:px-16 bg-white text-black transition-colors">
      <div className="max-w-6xl mx-auto">
       
        <h1
         
          className="text-center font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight"
        >
          Funded <span className="text-indigo-600">Projects</span> &{' '}
          <span className="text-purple-600">Supervised Work</span>
        </h1>

        
        <section className="mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gray-900">
            Funded Research Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {fundedProjects.map((item, index) => (
              <article
                key={index}
               
                className="rounded-3xl border border-gray-300 bg-white shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
              >
                <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-indigo-700">
                      <div className="p-2 rounded-full bg-indigo-100">
                        <FaFlask className="text-xl" />
                      </div>
                      <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                    </div>
                    <p className="text-sm mb-1">
                      <span className="font-semibold">Sanctioned By:</span> {item.sponsor}
                    </p>
                    <p className="text-sm mb-4">
                      <span className="font-semibold">Amount:</span> {item.amount}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        borderRadius="1.75rem"
                        className="bg-blue-700 hover:bg-blue-800 text-sm md:text-md font-semibold text-white border-neutral-200"
                      >
                        View Full Details
                      </Button>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h2
           
            className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10"
          >
            Academic Projects Supervised
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supervisprojects.map((title, idx) => (
              <div
                key={idx}
               
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition duration-200"
              >
                <div className="flex items-start gap-3 mb-2 text-purple-700">
  <FaProjectDiagram className="text-xl flex-shrink-0" />
  <p className="text-sm font-medium leading-snug text-gray-900">{title}</p>
</div>

              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
