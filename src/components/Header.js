'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import useTheme from "./contaxt/themeContaxt";


// Inside your header JSX


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
    { href: "/patents", label: "Patents" },
    { href: "/book", label: "Publications" },
    { href: "/AchievementsRecognitions", label: "Achievements & Recognitions" },
   
    { href: "/gallery", label: "Gallery" },
    
    { href: "/team-member", label: "Team" },
      { href: "/contact", label: "Contact" },
  ];

  const NavLink = ({ href, label }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={closeMenu}
        className={`relative px-3 py-2 text-sm font-medium transition duration-300 group ${
          isActive ? "text-gray-900 font-semibold" : " text-white text-gray-900"
        }`}
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900 transform transition-transform duration-300 ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          } origin-left`}
        />
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50  bg-gradient-to-t from-blue-800 to-slate-700  backdrop-blur-md shadow-md border-b border-gray-800">
      {/* Header Info */}
      <div className="text-white px-4 py-4 animate-fadeInDown">
        <div className="max-w-7xl mx-auto text-center space-y-1">
          <h1 className="text-2xl md:text-3xl font-bold">
            Dr. Amarjeet Singh Chauhan 
          </h1>
          <p className="text-sm italic text-white">
            Ph.D. (CS) | M.Tech. (CS) | B.Tech. (CS)
          </p>
          <p className="text-sm  text-white">
            Lecturer, Department of Physics and Computer Science
          </p>
          <p className="text-xs md:text-sm text-white font-light">
            Faculty of Science, Dayalbagh Educational Institute (Deemed University), Agra
          </p>
        </div>

        {/* Contact Info */}
        <div className="hidden flex flex-wrap gap-4 justify-center items-center mt-4 text-sm text-white">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:amarjeetsinghchauhan96@gmail.com" className="hover:underline text-sm">
              amarjeetsinghchauhan96@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:amarjeetsinghchauhan@dei.ac.in" className="hover:underline text-sm">
              amarjeetsinghchauhan@dei.ac.in
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin />
            <Link
              href="https://www.linkedin.com/in/amarjeet-singh-chauhan-099243130"
              className="hover:underline text-sm"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-white/20  bg-gradient-to-t from-blue-900 to-slate-700 shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 md:ml-2 items-center font-medium text-white">
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
        <ul className="md:hidden bg-black/90 backdrop-blur-xl text-white shadow-lg rounded-b-xl animate-slideDownFade px-6 py-4 space-y-3 font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      )}
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
