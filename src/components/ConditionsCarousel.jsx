// src/components/ConditionsCarousel.jsx
import React, { useRef } from "react";
import cond1 from "../assets/lumbar.jpg";
import cond2 from "../assets/con1.webp";
import cond3 from "../assets/scoliosis.jpg";
import cond4 from "../assets/herniated-disc.jpg";
import cond5 from "../assets/stenosis.webp";
import cond6 from "../assets/sciaticca.png";
import cond7 from "../assets/kyphosis.webp";
import cond8 from "../assets/spondylolisthesis.webp";
import cond9 from "../assets/cervical.jpeg";
import cond10 from "../assets/infection.png";
import cond11 from "../assets/tumor.jpg";
import cond12 from "../assets/fracture.jpg";

export default function ConditionsCarousel() {
  const scrollRef = useRef(null);

  const conditions = [
    {
      image: cond1,
      title: "Lumbar Spondylosis",
      desc:
        "A degenerative condition of the lumbar spine; often asymptomatic but can cause back or sciatica pain.",
      link: "https://med.uth.edu/neurosciences/conditions-and-treatments/spine-disorders-and-back-pain/lumbar-spondylosis-degeneration/"
    },
    {
      image: cond2,
      title: "Back Pain",
      desc:
        "Solutions for acute and chronic back pain, a leading cause of missed workdays and reduced quality of life.",
      link: "https://www.niams.nih.gov/health-topics/back-pain"
    },
    {
      image: cond4,
      title: "Herniated Disc",
      desc:
        "A condition where the soft center of a spinal disc pushes through a crack in the tougher exterior, causing pain, numbness, or weakness.",
      link: "https://www.mayoclinic.org/diseases-conditions/herniated-disk/symptoms-causes/syc-20354095"
    },
    {
      image: cond5,
      title: "Spinal Stenosis",
      desc:
        "Narrowing of the spinal canal that puts pressure on the spinal cord and nerves, often leading to pain, numbness, or difficulty walking.",
      link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/lumbar-spinal-stenosis"
    },
    {
      image: cond3,
      title: "Scoliosis",
      desc:
        "Treatment for abnormal lateral curvature of the spine, from bracing to corrective surgery.",
      link: "https://my.clevelandclinic.org/health/diseases/15837-scoliosis"
    },
    {
      image: cond6,
      title: "Sciatica",
      desc:
        "Pain that radiates along the sciatic nerve, usually caused by a herniated disc or spinal narrowing compressing part of the nerve.",
      link: "https://www.physio-pedia.com/Sciatica"
    },
    {
      image: cond7,
      title: "Kyphosis",
      desc:
        "Abnormal forward rounding of the upper spine, which can cause a hunchback appearance and discomfort.",
      link: "https://orthoinfo.aaos.org/en/diseases--conditions/kyphosis-roundback-of-the-spine/"
    },
    {
      image: cond8,
      title: "Spondylolisthesis",
      desc:
        "A condition where a vertebra slips out of place over the one below it, potentially compressing nerves and causing instability or pain.",
      link: "https://medlineplus.gov/ency/article/001260.htm"
    },
    {
      image: cond9,
      title: "Cervical Radiculopathy",
      desc:
        "Nerve pain radiating from the neck into the shoulders or arms, often caused by a herniated disc or bone spur.",
      link: "https://my.clevelandclinic.org/health/diseases/22639-cervical-radiculopathy-pinched-nerve"
    },
    {
      image: cond10,
      title: "Spinal Infections (e.g., Discitis, Osteomyelitis)",
      desc:
        "Infections in the spine or spinal discs that can cause severe pain, fever, and potential nerve damage if not treated early.",
      link: "https://www.aurorahealthcare.org/services/aurora-spine-services/spinal-infections/discitis-osteomyelitis"
    },
    {
      image: cond11,
      title: "Spinal Tumors",
      desc:
        "Benign or malignant growths in or around the spine that can cause pain, neurological deficits, or spinal instability.",
      link: "https://www.mayoclinic.org/diseases-conditions/spinal-cord-tumor/symptoms-causes/syc-20350103"
    },
    {
      image: cond12,
      title: "Osteoporosis-Related Vertebral Fractures",
      desc:
        "Weak bones due to osteoporosis may cause compression fractures in the spine, leading to sudden or chronic back pain.",
      link: "https://orthoinfo.aaos.org/en/diseases--conditions/osteoporosis-and-spinal-fractures/"
    }
    
  ];

  const scrollBy = (offset) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Spine Conditions We Treat
        </h2>

        <div className="relative">
          {/* Scrollable list */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar pb-2"
          >
            {conditions.map((c, i) => (
              <div
                key={i}
                className="flex-none w-72 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-80 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                  <a
                    href={c.link}
                    className="mt-2 inline-block text-blue-600 hover:underline"
                  >
                    Know More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Left arrow */}
          <button
            onClick={() => scrollBy(-300)}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            {/* ← SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollBy(300)}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            {/* → SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
