import React, { useState } from "react";
import googleLogo from "../assets/google.png"; // ← put your logo file here

const reviews = [
  {
    name: "Vaibhav Gupta",
    date: "February 16",
    quote:
      "He's an exceptional doctor who truly focuses on identifying the root cause of the problem. Dr. Harshit patiently explained my condition in detail and provided a clear treatment plan. I am feeling so much better now and recovering quickly. If you're dealing with any spine-related issues, I highly recommend Dr. Harshit Dave!"
  },
  {
    name: "Meenakshi Vyas",
    date: "October 30",
    quote:
      "Dr. Harshit is talented, compassionate yet brutally honest. We worked with him for my MIL's spine surgery, he maintained the urgency of the surgery without pushing us. I highly recommend Dr. Dave for his professionalism and overall effectiveness."
  },
  {
    name: "Simnan Qureshi",
    date: "August 5",
    quote:
      "It was time my mummy not even walk 10m of distance now she can walk easily 1 km. Her back problem has improve so much and sir is so kind and they treat us like their own family !!"
  },
  {
    name: "Ruhi Teli",
    date: "July 20",
    quote:
      "Dr Harshit is very helpful. When all the treatment measures were not showing any progress in my father in law's condition.His accurate diagnosis of koch,'s spine and treatment helped my father in law to recuperate early.Now, he could perform daily activities and living healthy life. So, Thank you Dr Harshit from our family. He is caring and his dedication towards patients makes him a great doctor.All the best for your future"
  },
  {
    name: "Aanchal Mathur-Mishra",
    date: "June 2",
    quote:
      "Dr Harshit is very detailed and takes the time to answer all our queries at all times. He always remembered our case pre and post surgery and that helped us get alot of confidence in the doctors prognosis or advise for further..."
  },
   {
    name: "Shreyas Sanghvi",
    date: "September 12",
    quote:
      "Dr. Harshit Dave is not only an exceptional spine surgeon but also a wonderful human being. He helped me through a challenging time with an L4-L5 spine bulging and a rotator cuff ligament tear. His expertise in endoscopic and minimally invasive techniques is of the highest order, arguably one of the best in the country."
  }
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIdx((i) => (i + 1) % reviews.length);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left: Heading & controls */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-2">
            What Patients Say About Dr. Harshit
          </h2>
          <p className="text-gray-600 mb-6">
            We're proud to have helped thousands of patients take steps toward better health.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Link to add review */}
          <a
            href="https://maps.app.goo.gl/U8Fwqg3bEbkoDBF76"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Click here to add your review
          </a>
        </div>

        {/* Right: Active review */}
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
            {/* Google Reviews logo link */}
            <a
              href="https://maps.app.goo.gl/U8Fwqg3bEbkoDBF76"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-4"
            >
              <img
                src={googleLogo}
                alt="Add your review on Google"
                className="h-40 w-48 mx-auto"
              />
            </a>
            <p className="text-lg italic text-gray-800 mb-6">
              “{reviews[idx].quote}”
            </p>
            <div className="flex items-center justify-center">
              <p className="font-semibold text-gray-900">~ {reviews[idx].name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
