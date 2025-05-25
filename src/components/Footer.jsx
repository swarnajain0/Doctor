import React from 'react';
import { Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Column */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 mb-6">
            <li>
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            </li>
            <li>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact Us</a>
            </li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Say Hello..
          </a>
        </div>

        {/* Branding & Copyright Column */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">SpinePlus</h2>
          <p className="text-gray-600 mb-4">
            Dedicated to your spinal health and wellness with compassionate, expert care.
          </p>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SpinePlus. All rights reserved.</p>
        </div>

        {/* Contact & Social Column */}
        <div className="md:text-right">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-700">+1 (555) 123-4567</p>
          <p className="text-gray-700 mb-4">
            <a href="mailto:info@spineplus.com" className="hover:underline">
              info@spineplus.com
            </a>
          </p>
          <div className="flex space-x-4 justify-start md:justify-end">
            <a href="www.facebook.com" aria-label="Facebook" className="text-gray-600 hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="www.facebook.com" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600">
              <Linkedin size={20} />
            </a>
            <a href="www.facebook.com" aria-label="YouTube" className="text-gray-600 hover:text-blue-600">
              <Youtube size={20} />
            </a>
            <a href="www.facebook.com" aria-label="Twitter" className="text-gray-600 hover:text-blue-600">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
