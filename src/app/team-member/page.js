
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

import Photo1 from '../../../public/as.jpg';
import Photo2 from '../../../public/aditya.jpg';
import Photo3 from '../../../public/mohit.jpg';
import Photo4 from '../../../public/varun.jpg';
import Photo5 from '../../../public/deepakkumar.jpg';
import Photo6 from '../../../public/sumitsharma.jpg';
import Photo7 from '../../../public/aman.jpg';
import Photo8 from '../../../public/amanraj.jpg';
import Photo9 from '../../../public/hariom.jpg';
import Photo10 from '../../../public/mohit1styear.jpg';
import Photo11 from '../../../public/nitin.jpg';
import Photo12 from '../../../public/Gaurav.jpg';
import Photo13 from '../../../public/akashsikarwar.jpg';
const teamMembers = [
  {
    name: 'Dr. Amarjeet Singh Chauhan',
    role: 'Lecturer | Researcher | AI | IOT | Automation | Swarm Intelligence | UAV, Dronese',
    image: Photo1,
    linkedin: 'https://www.linkedin.com/in/dr-amarjeet-singh-chauhan-099243130/',
  },
  {
    name: 'Aditya Vardhan',
    role: 'Research Scholar',
    image: Photo2,
    linkedin: 'https://www.linkedin.com/in/adityavardhan3098/',
  },
  {
    name: 'Mohit yadav',
    role: 'Research Scholar',
    image: Photo3,
    linkedin: 'https://www.linkedin.com/in/mohit-yadav-280233153/',
  },
   {
    name: 'Nitin Parmar',
    role: 'Data Analyst | Internet of Things | Drones Technology',
    image: Photo11,
    linkedin: 'https://www.linkedin.com/in/nitin-parmar-da/',
  },
  {
    name: 'Aman Raj',
    role: 'Pursuing a Bachelor s of Vocational Courses in IoT(Internet Of Things)',
    image: Photo8,
    linkedin: 'https://www.linkedin.com/in/aman-raj-a1111a156/',
  },
    {
    name: 'Akash Sikarwar',
    role: 'Pursuing a Bachelor s of Vocational Courses in IoT(Internet Of Things)',
    image: Photo13,
    linkedin: 'https://www.linkedin.com/in/akash-sikarwar-849a5b346',
  },
  {
    name: 'Hariom Singh',
    role: 'Pursuing a Bachelor s of Vocational Courses in IoT(Internet Of Things)',
    image: Photo9,
    linkedin: 'https://www.linkedin.com/in/hariom-singh-3318532bb/',
  },
  {
    name: 'Gaurav Chaudhary',
    role: 'Data Science , ML, Python, SQL , Data Analytics , Data Visualisation, , Power-Bi , Tableau , Django ,Web Development',
    image: Photo12,
    linkedin: 'https://www.linkedin.com/in/gaurav-chaudhary-ds/',
  },
  {
    name: 'Mohit Sharma',
    role: 'Pursuing a Bachelor s of Vocational Courses in IoT(Internet Of Things)',
    image: Photo10,
    linkedin: 'https://www.linkedin.com/in/mohit-sharma-232780328/',
  },
  {
    name: 'Varun Shrivastav',
    role: 'Ex-Raspberry pi Engineer',
    image: Photo4,
    linkedin: 'https://www.linkedin.com/in/varun-shrivastav-011b1022b/',
  },
  {
    name: 'Deepak Kumar',
    role: 'Mern Stack developer',
    image: Photo5,
    linkedin: 'https://www.linkedin.com/in/deepakkumar182002/',
  },
  {
    name: 'Sumit Sharma',
    role: 'IOT | Arduino |Git | GitHub | Microsoft power point | Embedded system |power point animation',
    image: Photo6,
    linkedin: 'https://www.linkedin.com/in/sumit-sharma-929167229/',
  },
  {
    name: 'Aman Sharma',
    role: 'Postman API Expert | Internet of Things | Machine Learning | Artificial Intelligence | Backend | Django | Drone Intelligence | Python | Arduino | Embedded Systems',
    image: Photo7,
    linkedin: 'https://www.linkedin.com/in/aman-sharma-b83a82222/',
  },
  
  
];

export const metadata = {
  title: "Our Team | Dr. Amarjeet Singh Chauhan & Research Scholars",
  description:
    "Meet the expert research team led by Dr. Amarjeet Singh Chauhan, featuring scholars and professionals in IoT, AI, Embedded Systems, Drones, and Data Science—committed to driving technological innovation and education.",

  authors: [{ name: "Dr. Amarjeet Singh Chauhan" }],
  creator: "Dr. Amarjeet Singh Chauhan",
  publisher: "Dr. Amarjeet Singh Chauhan",

  openGraph: {
    title: "Our Team | Dr. Amarjeet Singh Chauhan & Research Scholars",
    description:
      "Discover the passionate team working under Dr. Amarjeet Singh Chauhan in fields like IoT, Artificial Intelligence, Embedded Systems, Drones, and Data Science—driving excellence in research and innovation.",
    url: "https://www.amarjeetsinghchauhan.com/team-member",
    siteName: "Dr. Amarjeet Singh Chauhan",
    type: "profile",
    images: [
      {
        url: "https://ik.imagekit.io/vtbtnuxcb/Website/team-banner.webp", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "Team led by Dr. Amarjeet Singh Chauhan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Team | Dr. Amarjeet Singh Chauhan & Research Scholars",
    description:
      "Explore the brilliant team of researchers led by Dr. Amarjeet Singh Chauhan in IoT, AI, and emerging tech domains.",
    images: [
      "https://ik.imagekit.io/vtbtnuxcb/Website/team-banner.webp", 
    ],
    creator: "Dr. Amarjeet Singh Chauhan",
  },
};

export default function OurTeam() {
  const leader = teamMembers[0];
  const members = teamMembers.slice(1);

  return (
    <section className="bg-gradient-to-t from-blue-800 to-slate-900 py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Meet Our Leadership</h2>
          <p className="mt-4 text-lg text-slate-300">
            A passionate team committed to excellence in education, research, and innovation.
          </p>
        </div>

       
        <div className="mb-24 flex flex-col items-center text-center">
          <Image
            src={leader.image}
            alt={leader.name}
            className="rounded-full border-4 border-yellow-400 shadow-xl"
            width={140}
            height={140}
          />
          <h3 className="mt-6 text-2xl font-bold text-white">{leader.name}</h3>

          <Link
            href={leader.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn profile of ${leader.name}`}
            className="mt-1 flex items-center gap-1 text-white hover:text-indigo-300 text-sm"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </Link>

         <p className="mt-2 max-w-xl text-indigo-300">{leader.role}</p>
          <span className="mt-3 inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-black shadow-md">
            Team Leader
          </span>
        </div>

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
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn profile of ${member.name}`}
                className="mt-1 flex items-center gap-1 text-white hover:text-indigo-300 text-sm"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </Link>
              <p className="text-sm text-indigo-300 text-center mt-2">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
