'use client';
import Image from 'next/image';

import Photo1 from '../../../public/as.jpg';
import Photo2 from '../../../public/aditya.jpg';
import Photo3 from '../../../public/mohit.jpg';
import Photo4 from '../../../public/varun.jpg';
import Photo5 from '../../../public/deepakkumar.jpg';
import Photo6 from '../../../public/sumitsharma.jpg';
import Photo7 from '../../../public/aman.jpg';
import Photo8 from '../../../public/amanraj.jpg';

const teamMembers = [
  {
    name: 'Dr. Amarjeet Singh Chauhan',
    role: 'Lecturer | Researcher | AI | IOT | Automation | Swarm Intelligence | UAV, Dronese',
    image: Photo1,
  },
  {
    name: 'Aditya Vardhan',
    role: 'Research Scholar',
    image: Photo2,
  },
  {
    name: 'Mohit yadav',
    role: 'Research Scholar',
    image: Photo3,
  },
  {
    name: 'Varun Singh',
    role: 'Ex-Raspberry pi Engineer',
    image: Photo4,
  },
  {
    name: 'Deepak Kumar',
    role: 'Mern Stack developer',
    image: Photo5,
  },
  {
    name: 'Sumit Sharma',
    role: 'IOT | Arduino |Git | GitHub | Microsoft power point | Embedded system |power point animation',
    image: Photo6,
  },
  {
    name: 'Aman Sharma',
    role: 'Postman API Expert | Internet of Things | Machine Learning | Artificial Intelligence | Backend | Django | Drone Intelligence | Python | Arduino | Embedded Systems',
    image: Photo7,
  },
  {
    name: 'Aman Raj',
    role: 'Pursuing a Bachelor s of Vocational Courses in IoT(Internet Of Things)',
    image: Photo8,
  },
];

export default function OurTeam() {
  const leader = teamMembers[0]; // Team Leader
  const members = teamMembers.slice(1); // Other Members

  return (
    <section className="bg-gradient-to-t from-blue-800 to-slate-900 py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Meet Our Leadership</h2>
          <p className="mt-4 text-lg text-slate-300">
            A passionate team committed to excellence in education, research, and innovation.
          </p>
        </div>

        {/* Team Leader Spotlight */}
        <div className="mb-24 flex flex-col items-center text-center">
          <Image
            src={leader.image}
            alt={leader.name}
            className="rounded-full border-4 border-yellow-400 shadow-xl"
            width={140}
            height={140}
          />
          <h3 className="mt-6 text-2xl font-bold text-white">{leader.name}</h3>
          <p className="mt-2 max-w-xl text-indigo-300">{leader.role}</p>
          <span className="mt-3 inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-black shadow-md">
            Team Leader
          </span>
        </div>

        {/* Other Team Members */}
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((member, index) => (
            <li
              key={index}
              className="flex flex-col items-center bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md transition hover:scale-105"
            >
              <Image
                src={member.image}
                alt={member.name}
                className="rounded-full border-4 border-white/20"
                width={100}
                height={100}
              />
              <h3 className="mt-4 text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-sm text-indigo-300 text-center mt-1">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
