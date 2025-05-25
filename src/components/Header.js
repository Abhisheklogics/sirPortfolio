'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills & Expertise" },
    { href: "/projects", label: "Projects" },
    { href: "/publication", label: "Patents & Publications" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200 transition-all duration-300">
      
      {/* Academic Banner with subtle slide-in and gradient text */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white text-center py-6 px-4 animate-fadeInDown relative overflow-hidden">
        <h1 className="text-2xl md:text-3xl font-serif font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-300 drop-shadow-lg">
          Dr. Amarjeet Singh Chauhan
        </h1>
        <p className="mt-2 text-sm md:text-base italic text-blue-200 max-w-3xl mx-auto">
          Researcher in <span className="font-semibold text-white underline decoration-blue-300 decoration-2 underline-offset-4">Swarm Intelligence</span>, Artificial Intelligence, IoT & Embedded Systems
        </p>
        <p className="text-xs md:text-sm text-blue-300 mt-1 font-light tracking-wide">
          IoT Proctor, Physics and Computer Science, Dayalbagh Educational Institute, Agra, UP, India
        </p>

        {/* Subtle decorative glowing line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 opacity-60 blur-md"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

          {/* Desktop Navigation with animated underline on hover and active */}
          <div className="hidden md:flex space-x-8 font-semibold text-gray-800">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} legacyBehavior>
                <a
                  className={`relative px-3 py-2 transition-colors duration-300 hover:text-blue-700 group ${
                    pathname === href ? 'text-blue-900' : 'text-gray-700'
                  }`}
                >
                  {label}
                  {/* Animated underline */}
                  <span
                    className={`block h-[2px] bg-blue-700 absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ${
                      pathname === href ? 'scale-x-100' : ''
                    }`}
                  />
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle with scale on toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="text-gray-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded transition-transform duration-200 active:scale-95"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with smooth slide down and fade */}
        {isOpen && (
          <div
            className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-4 space-y-3 font-medium text-gray-800 shadow-lg rounded-b-md animate-slideDownFade"
            role="menu"
          >
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} legacyBehavior>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md hover:bg-blue-100 transition-colors ${
                    pathname === href ? 'text-blue-800 font-semibold' : ''
                  }`}
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Additional keyframes for animation */}
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
          animation: fadeInDown 0.8s ease forwards;
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
