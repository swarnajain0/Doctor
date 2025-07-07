// src/components/Hero.jsx
import React from "react";
import bgImg from "../assets/heroo.png";
import "../index.css"; // Make sure this is included for styles to apply

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-no-repeat min-h-screen md:min-h-[750px]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "right center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen md:min-h-[750px]">
        <div className="w-full md:w-1/2 hero-text">
          <h2 className="inline-block bg-blue-100 text-blue-600 uppercase text-sm mb-4 px-3 py-1 rounded mt-40 md:mt-0">
            Your Trusted Spine Specialist
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight hero-heading">
            Get Back to Pain-Free Living
          </h1>

          <p className="mt-4 max-w-lg bg-white bg-opacity-90 text-gray-800 p-4 rounded-lg shadow-md 
              md:bg-transparent md:shadow-none md:p-0 md:text-white hero-paragraph">
  Complete spine care – from your first visit to full recovery.
  <br />
  We combine expert evaluation, gentle treatments, and the latest in endoscopic and minimally invasive techniques to support your recovery.
  Offering complete care, from diagnosis to rehab, with a focus on comfort, precision, and long term relief.
</p>


          <div className="mt-6 flex space-x-4">
            <a
              href="/about.html"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Know Your Doctor →
            </a>

            {/* <a
              href="#contact"
              className="border-2 px-6 py-2 rounded-full contact-button transition"
            >
              Contact Us →
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
