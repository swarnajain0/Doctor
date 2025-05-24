// src/components/Hero.jsx
import React from "react";
import bgImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-no-repeat h-[600px] md:h-[900px]"
      style={{
        backgroundImage: `url(${bgImg})`,
        // Move the image down 15% so the top stays in view.
        // Increase/decrease the second value until you see the hair.
        backgroundPosition: "center 15%",
      }}
    >
      <div className="relative z-10 container mx-auto px-6 flex items-center h-full">
        <div className="w-full md:w-1/2">
          <h2 className="inline-block bg-blue-100 text-blue-600 uppercase text-sm mb-4 px-3 py-1 rounded">
            Your Trusted Spine Specialist
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Get Back to Pain-Free Living
          </h1>
          <p className="text-white mt-4 max-w-lg">
            Complete spine care - from your first visit to full recovery.<br></br>
            We combine expert evaluation, gentle treatments, and the latest in endoscopic and minimally invasive techniques to support your recovery.
            Offering complete care, from diagnosis to rehab, with a focus on comfort, precision, and long term relief.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Learn More →
            </button>
            <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition">
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
