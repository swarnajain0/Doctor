// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import logo from "../assets/logo-spine-plus.png"; // ← your logo file here

export default function NavBar({ onNavigateGallery, onNavigateHome }) {
  const [solid, setSolid] = useState(false);
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      const threshold = hero ? hero.offsetHeight - 70 : 200;
      setSolid(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        solid ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <a href="#home" className="flex items-center" onClick={onNavigateHome}>
          <img src={logo} alt="Spine Plus Logo" className="h-16 w-auto mr-2" />
          <span
            className={`text-2xl font-bold transition-colors duration-300 ${
              solid ? "text-blue-600" : "text-white"
            }`}
          >
            Spine Plus
          </span>
        </a>

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex space-x-8 transition-colors duration-300 ${
            solid ? "text-gray-600" : "text-white"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Gallery CTA */}
        <button
          onClick={onNavigateGallery}
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Gallery
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button aria-label="Toggle menu">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 mb-${i < 2 ? "1" : "0"} transition-colors duration-300 ${
                  solid ? "bg-gray-800" : "bg-white"
                }`}
              />
            ))}
          </button>
        </div>
      </div>
    </nav>
  );
}
