'use client';

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Skills & Expertise" },
    { href: "/patents", label: "Patents" },
    { href: "/#projects", label: "Projects" },
    { href: "/publication", label: "Publications" },
    { href: "/galler", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 py-3 text-center border-b border-gray-200">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700">
          Dr. Amarjeet Singh Chauhan
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 italic">
          Researcher in Swarm Intelligence, Artificial Intelligence, IoT & Embedded Systems
        </p>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <span className="hover:bg-blue-600 hover:text-white transition px-4 py-2 rounded-md text-sm font-medium text-gray-800 cursor-pointer">
                  {label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setIsOpen(false)}>
                <div className="block bg-gray-50 hover:bg-blue-100 text-gray-800 px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition">
                  {label}
                </div>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
