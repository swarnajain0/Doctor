import React from "react";
import doctorImg from "../assets/about-doctor-image.jpg";  // replace with your portrait file

export default function DoctorSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left: Doctor Image */}
        <div className="w-full md:w-1/3">
          <img
            src={doctorImg}
            alt="Dr. Harshit Dave"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right: Description */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
          
          <h3 className="text-3xl font-bold mb-4">
            About Dr. Harshit Dave
          </h3><h2 className="text-blue-600 uppercase text-sm mb-2">
            Consultant Spine Surgeon
          </h2>
          <p className="text-gray-700 mb-4">
            Dr. Harshit Dave is a top-rated spine surgeon known for his patient-first, conservative approach. He specializes in non-surgical treatments, and when needed, performs minimally invasive and endoscopic spine surgeries with precision and care.
            With extensive training from premier institutions across India, he combines advanced medical knowledge with a compassionate touch.

          </p>
          <p className="text-gray-700 mb-2 font-semibold">Key Highlights:</p>
<ul className="list-disc list-inside text-gray-700 mb-4">
  <li>10+ Years of Experience in Spine Care & Surgery</li>
  <li>Fellowship-Trained in Endoscopic & Minimally Invasive Techniques</li>
  <li>Trained at India's Leading Hospitals</li>
  <li>Focused on Non-Surgical Solutions First</li>
  <li>Thousands of Patients Treated Successfully</li>
  <li>Clear Communication & Personalized Care</li>
</ul>

         <a href="about.html" class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
  Read Full Bio →
</a>

        </div>
      </div>
    </section>
  );
}
