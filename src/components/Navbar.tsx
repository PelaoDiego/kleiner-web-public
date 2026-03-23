"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Define nav links for easier translation/updates later
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#products" },
    { name: "Shipping", href: "#shipping" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-kleiner-blue text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/kleiner-logo.png"
                alt="Kleiner Printing Services Logo"
                width={56} // Adjust size as needed
                height={56}
                className="rounded-full bg-white p-1" // White border around logo to stand out on blue
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-wider text-white">
                  KLEINER
                </span>
                <span className="text-sm font-semibold tracking-wide text-kleiner-yellow">
                  PRINTING SERVICES
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-semibold text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-kleiner-yellow transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white hover:text-kleiner-yellow focus:outline-none p-2"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-kleiner-blue border-t border-blue-800">
          <div className="px-3 pt-3 pb-5 space-y-1 sm:px-4 text-center font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 hover:bg-blue-800 hover:text-kleiner-yellow rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
