'use client'

import Image from 'next/image';
import photo from '../../public/as.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className=" bg-gradient-to-br from-white to-blue-50 py-20 md:py-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:mt-[-100px]  md:ml-10 md:grid-cols-2 gap-12 items-center">

        {/* TEXT BLOCK */}
        <div data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Dr. Amarjeet Singh Chauhan
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 mb-5">
            Lecturer – Dept. of Physics & Computer Science  
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mb-4">
            Dr. Amarjeet Singh Chauhan is a Lecturer at the Department of Physics and Computer Science, Faculty of Science, Dayalbagh Educational Institute, Agra, India. He received his M.Tech and Ph.D. in Computer Science from the same institute.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mb-6">
            His expertise lies in Swarm Intelligence, Real-Time Systems, and Nature-Inspired Optimization. Prior to joining academia, he served as a Systems Engineer at Tata Consultancy Services (TCS). His research contributes to the advancement of smart systems, robotics, and intelligent control.
          </p>

          {/* Research Interests */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              'Swarm Intelligence',
              'Evolutionary Algorithms',
              'Real-Time Systems',
              'Multi-objective Optimization',
              'Embedded Systems',
              'Artificial Intelligence',
              'IoT Applications',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/publication"
            
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition"
            >
              View Publications
            </Link>
            <Link
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-lg text-sm font-medium transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* IMAGE BLOCK */}
        <div data-aos="fade-left" className="flex justify-center">
          <div className="relative w-[260px] h-[340px] sm:w-[280px] sm:h-[360px] md:w-[320px] md:h-[440px] rounded-2xl overflow-hidden shadow-xl md:mt-[-200px] border border-gray-300">
            <Image
              src={photo}
              alt="Dr. Amarjeet Singh Chauhan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
