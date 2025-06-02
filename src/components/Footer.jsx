import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1f26] text-white text-sm pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start pb-6">

        {/* Left Block */}
        <div className="space-y-4">
          <p className="text-gray-300">
            High level experience in spine care and a strong belief in evidence-based, minimally invasive techniques.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:shadow-md transition">
            Get started
          </button>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <p className="font-semibold">Contact Us</p>
          <div className="flex items-start space-x-2">
            <span><i className="fas fa-map-marker-alt text-gray-300"></i></span>
            <span>Ahmedabad, Gujarat, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <span><i className="fas fa-envelope text-gray-300"></i></span>
            <span>spinespecialist@clinicmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <span><i className="fas fa-phone text-gray-300"></i></span>
            <span>+91 99999 99999</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="space-y-2">
          <p className="font-semibold">Follow Us</p>
          <div className="flex space-x-4 text-xl text-white">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram hover:text-pink-500"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f hover:text-blue-500"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in hover:text-blue-400"></i>
            </a>
            <a href="mailto:spinespecialist@clinicmail.com" aria-label="Gmail">
              <i className="fas fa-envelope hover:text-red-400"></i>
            </a>
            <a href="https://maps.google.com/?q=Ahmedabad+Gujarat+India" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
              <i className="fas fa-map-marked-alt hover:text-green-400"></i>
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 mx-6" />
      <div className="text-center text-xs text-gray-400 py-4">
        © 2025 Dr. Harshit Dave. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
