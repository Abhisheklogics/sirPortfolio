'use client'

import Image from 'next/image';
import photo from '../../public/as.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 md:py-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-14 w-full">
        
        {/* TEXT BLOCK */}
        <div data-aos="fade-right" className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Dr. Amarjeet Singh Chauhan
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 mb-6">
            Researcher in Swarm Intelligence & Optimization
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify mb-6">
            I specialize in solving complex optimization problems using swarm intelligence and evolutionary computation. My work focuses on developing scalable, nature-inspired algorithms for real-world applications in robotics, power systems, and intelligent control.
          </p>

          {/* Research Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              'Swarm Intelligence',
              'Evolutionary Algorithms',
              'Multi-objective Optimization',
              'AI for Engineering',
              'Real-Time Systems',
            ].map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="#publications"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all"
            >
              View Publications
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-lg text-sm font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* IMAGE BLOCK */}
        <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[260px] h-[340px] sm:w-[280px] sm:h-[360px] md:w-[320px] md:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-gray-300">
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
