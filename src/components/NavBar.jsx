// src/components/NavBar.jsx
import React from "react";

export default function NavBar() {
  const links = ["Home", "About", "Pages", "Portfolio", "Blog", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Spine Plus
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white">
          {links.map((l) => (
            <li
              key={l}
              className="hover:text-gray-200 cursor-pointer flex items-center"
            >
              {l}
              {["Pages", "Portfolio", "Blog"].includes(l) && (
                <span className="ml-1 text-base">+</span>
              )}
            </li>
          ))}
        </ul>

        {/* Get Started CTA */}
        <button className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
          Get Started →
        </button>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button aria-label="Toggle menu">
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
