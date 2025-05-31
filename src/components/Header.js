'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import useTheme from "./contaxt/themeContaxt";
import { Vortex } from './ui/vortex';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { ThemeMode, darkTheme, lightTheme } = useTheme();

  const toggleTheme = () => ThemeMode === 'dark' ? lightTheme() : darkTheme();
 
  const closeMenu = () => setIsOpen(false);

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
        className={`relative px-2 py-1 whitespace-nowrap font-medium transition duration-300 group ${
          isActive ? "text-blue-400 font-semibold" : "text-white hover:text-blue-300"
        }`}
        onClick={closeMenu}
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400 transform transition-transform duration-300 ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          } origin-left`}
        />
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md shadow-sm border-b border-gray-800">
      <Vortex>
        {/* Header Info */}
        <div className="text-white px-4 py-4 animate-fadeInDown">
          <div className="max-w-7xl mx-auto text-center space-y-1">
            <h1 className="text-xl md:text-2xl font-semibold">
             Dr. Amarjeet Singh Chauhan (Ph.D (CS) | M.Tech (CS) | B.Tech (CS))

            </h1>
            <p className="text-sm md:text-base italic text-blue-300">
              Lecturer, Department of Physics and Computer Science

            </p>
            <p className="text-xs md:text-sm text-blue-400 font-light">
              Faculty of Science, Dayalbagh Educational Institute (Deemed University), Agra

            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 justify-center items-center mt-4 text-sm text-white">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:amarjeetsinghchauhan96@gmail.com" className="hover:underline">
                amarjeetsinghchauhan96@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:amarjeetsinghchauhan@dei.ac.in" className="hover:underline">
                amarjeetsinghchauhan@dei.ac.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin />
              <Link
                href="https://www.linkedin.com/in/amarjeet-singh-chauhan-099243130"
                className="hover:underline"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">
            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-6 items-center font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} label={link.label} />
                </li>
              ))}
             
            </ul>

              {/* Mobile Toggle */}
            <div className="md:hidden text-white">
              <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden bg-black text-white shadow-md animate-slideDownFade px-4 p-2 pb-4 space-y-2 font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          )}
        </nav>
      </Vortex>



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
          animation: fadeInDown 0.6s ease-out forwards;
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
          animation: slideDownFade 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
