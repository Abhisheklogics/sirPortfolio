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
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      {/* Banner */}
    {/* Banner */}
<div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white text-center py-5 px-4">
  <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">
    Dr. Amarjeet Singh Chauhan
  </h1>
  <p className="mt-1 text-sm md:text-base italic text-blue-200 max-w-2xl mx-auto">
    Researcher in Swarm Intelligence, Artificial Intelligence, IoT & Embedded Systems
  </p>
  <p className="text-xs md:text-sm text-blue-300 mt-1">
    IOT Procter, Physics and Computer Science , Dayalbagh Educational Institute Agra UP India
  </p>
</div>


      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium text-gray-800">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} legacyBehavior>
                <a
                  className={`relative px-3 py-2 rounded-md transition-colors hover:text-blue-800 ${
                    pathname === href ? 'text-blue-900 font-semibold' : ''
                  }`}
                >
                  {label}
                  {pathname === href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded" />
                  )}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="text-gray-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-200 px-4 py-3 space-y-2 font-medium text-gray-800">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} legacyBehavior>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md hover:bg-blue-100 ${
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
    </header>
  );
}
