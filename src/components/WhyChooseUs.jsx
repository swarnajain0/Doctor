import React from "react";
import ico1 from "../assets/board.png";
import ico2 from "../assets/trust.png";
import ico3 from "../assets/endoscopic.webp";
import ico4 from "../assets/minimally.webp";
import ico5 from "../assets/compassionate.png";
import ico6 from "../assets/proven-results.png";

export default function Features() {
  const features = [
    {
      icon: ico1,
      title: "Board-certified spine specialist",
      desc: "Dr. Harshit Dave, fellowship-trained in endoscopic spine techniques, is known for expert, compassionate care that helps patients recover faster and live pain-free.",
      bg: "bg-blue-50"
    },
    {
      icon: ico2,
      title: "All-Inclusive Spine Solutions ",
      desc: "Whether you're dealing back pain or spinal stenosis we offer complete care, from diagnosis and non-surgical management to surgical intervention when needed.",
      bg: "bg-yellow-50"
    },
    {
      icon: ico3,
      title: "Expertise in Endoscopic Spine Surgery",
      desc: "Leading-edge full endoscopic spine surgery allows for precise treatment with smaller incisions, less scarring, and quicker recovery.",
      bg: "bg-blue-50"
    },
    {
      icon: ico4,
      title: "Minimally Invasive Techniques for Faster Recovery",
      desc: "We prioritize procedures that minimize trauma to the body. This means less post-operative pain, reduced hospital time, and a quicker recovery.",
      bg: "bg-yellow-50"
    },
    {
      icon: ico5,
      title: "Personalised Care At Every Step",
      desc: "Dr. Harshit Dave is dedicated to providing patients with emotional support, clear communication, and professional guidance throughout their entire journey.",
      bg: "bg-blue-50"
    },
    {
      icon: ico6,
      title: "Proven Results with a Focus on Patient Outcomes",
      desc: "Patients consistently experience significant pain relief, improved mobility, and a higher quality of life after treatment.",
      bg: "bg-yellow-50"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* <h2 className="text-blue-600 uppercase text-sm mb-2">heading</h2> */}
        <h3 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose Us? 
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className={`${f.bg} p-8 rounded-lg shadow-md flex flex-col items-center`}
            >
              <img src={f.icon} alt={f.title} className="h-22 w-16 mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                {f.title}
              </h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
