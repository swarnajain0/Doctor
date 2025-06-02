// src/components/ContactSection.jsx
import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Intro Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch with Dr. Harshit
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or want to schedule a consultation? Fill out the form below, and we'll get back to you shortly. Your health and well-being are our top priority!
          </p>
          <p className="mb-2">
            <a href="mailto:dr.dave@gmail.com" className="text-blue-600 hover:underline">
              dr.harshit@gmail.com
            </a>
          </p>
          <p className="text-gray-700">+91 9723022044</p>
        </div>

        {/* Right: Formspree-powered Contact Form */}
        <form
          action="https://formspree.io/f/mnndyyjv"
          method="POST"
          className="space-y-6"
        >
          {/* Hidden fields for subject & redirect */}
          <input type="hidden" name="_subject" value="New SpineDoc Inquiry" />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/thank-you.html"
          />

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2"
              />
            </div>
          </div>

          {/* Phone & Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 123 456 789"
                className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2 bg-transparent appearance-none"
              >
                <option>General Inquiry</option>
                <option>Consultation</option>
                <option>Emergency</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Type your message here..."
              className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2 resize-none"
            />
          </div>

          {/* Privacy */}
          {/* <div className="flex items-center">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              required
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="privacy" className="ml-2 text-gray-700">
              I agree with the{" "}
              <a href="/privacy-policy.html" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div> */}

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
