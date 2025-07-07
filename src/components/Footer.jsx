import React from 'react';
import logo from '../assets/logo-spine-plus.png'; // update the path if needed

const Footer = () => {
  return (
    <footer className="bg-[#22416d] text-white text-sm pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* Logo + Clinic Info (left) */}
        <div className="flex items-center space-x-5">
          <img
            src={logo}
            alt="Clinic Logo"
            className="w-28 h-28 object-contain"
          />
          <div>
            <p className="text-xl font-semibold text-white">Spine Plus

 Clinic</p>
            <p className="text-gray-400 mt-1">Dr. Harshit Dave</p>
          </div>
        </div>

        {/* Contact Us (middle) */}
        <div className="space-y-3">
          <p className="font-semibold text-white">Contact Us</p>
          <div className="flex items-start space-x-2 text-gray-300">
            <i className="fas fa-map-marker-alt mt-1"></i>
            <span>Indore, Madhya Pradesh, India</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <i className="fas fa-envelope"></i>
            <span>dr.harshit@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <i className="fas fa-phone-alt"></i>
            <span>+91 9723022044</span>
          </div>
        </div>

        {/* Social Media (right) */}
        <div className="space-y-3">
          <p className="font-semibold text-white">Follow Us</p>
          <div className="flex space-x-6 text-white text-xl">
            <a href="https://www.instagram.com/spineplus_drharshit?igsh=MXVicDh5OTd6dHFlOA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram hover:text-pink-500"></i>
            </a>
            <a href="https://www.facebook.com/share/14DhMpYDJaW/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f hover:text-blue-500"></i>
            </a>
            <a href="https://www.linkedin.com/in/dr-harshit-dave-137b45118?trk=contact-info" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in hover:text-blue-400"></i>
            </a>
            <a href="mailto:spinespecialist@clinicmail.com" aria-label="Gmail">
              <i className="fas fa-envelope hover:text-red-500"></i>
            </a>
            <a
              href="Spine Plus- Ortho Spine and Pain Care Clinic (By Dr. Harshit Dave) would love your feedback. Post a review to our profile.
https://g.page/r/CdTBMIak_3QCEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
            >
              <i className="fas fa-map-marker-alt hover:text-green-500"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <hr className="border-gray-700 mx-6 mt-10" />
      <div className="text-center text-xs text-gray-500 pt-4">
        © 2025 Dr. Harshit Dave. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
