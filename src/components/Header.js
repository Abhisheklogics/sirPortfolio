
'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills & Expertise" },
    { href: "/projects", label: "Projects" },
    { href: "/publication", label: "Patents & Publications" },
    { href: "/book", label: "Book Chapters" },
    { href: "/AchievementsRecognitions", label: "Achievements & Recognitions" },
    { href: "/industrialvisit", label: "Industrial Visits" },
    { href: "/gallery", label: "Gallery" },
  ];

  const NavLink = ({ href, label }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`relative px-1 md:px-1 md:ml-1 py-2 transition-colors duration-300 whitespace-nowrap ${
          isActive
            ? "text-blue-800 font-semibold"
            : "text-gray-700 hover:text-blue-700"
        }`}
        aria-current={isActive ? "page" : undefined}
        onClick={() => setIsOpen(false)}
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-blue-700 transition-transform duration-300 ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          } origin-left`}
        />
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white text-center py-6 px-4 animate-fadeInDown">
        <h1 className="text-2xl md:text-3xl font-serif font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-blue-300">
          Dr. Amarjeet Singh Chauhan
        </h1>
      
        <p className="mt-1 text-sm md:text-base italic text-blue-200">
          Researcher in{" "}
          <span className="font-semibold text-white underline underline-offset-4 decoration-blue-300">
            Swarm Intelligence
          </span>
          , AI, IoT & Embedded Systems
        </p>
        <p className="text-xs md:text-sm text-blue-300 mt-1 font-light">
          IoT Proctor, Physics & Computer Science, DEI, Agra, UP, India
        </p>
      </div>

      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">
          
          {/* Desktop Menu */}
      <ul className="flex space-x-6 font-medium overflow-x-auto hide-scrollbar max-w-full">
  {navLinks.map((link) => (
    <li key={link.href} className="relative group min-w-max">
      <NavLink href={link.href} label={link.label} />
    </li>
  ))}
</ul>



          {/* Mobile Toggle Button */}
         
        </div>

        {/* Mobile Menu */}
  
      </nav>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.6s ease forwards;
        }

        @keyframes slideDownFade {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDownFade {
          animation: slideDownFade 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
}
