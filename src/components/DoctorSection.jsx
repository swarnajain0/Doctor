import React from "react";
import doctorImg from "../assets/about-doctor.jpeg";  // replace with your portrait file

export default function DoctorSection() {
  return (
    <section className="py-16 bg-gray-50">
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
            Dr. Harshit Dave is a board-certified spine surgeon with over 15 years of
            experience in minimally invasive and complex spinal procedures.
          </p>
          <p className="text-gray-700 mb-4">
            He specializes in lumbar decompression, spinal fusion, and
            corrective scoliosis surgery, delivering personalized care from
            diagnosis through rehabilitation.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Read Full Bio →
          </button>
        </div>
      </div>
    </section>
  );
}
