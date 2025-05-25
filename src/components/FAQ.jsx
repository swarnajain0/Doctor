import React, { useState } from 'react';

const faqs = [
  {
    question: "Do all spine problems require surgery?",
    answer: "Not at all. Dr. Dave believes most spine conditions can be treated without surgery using conservative care."
  },
  {
    question: "When is spine surgery needed?",
    answer: "Spine surgery is usually considered when non-surgical treatments like physical therapy, medications, or injections haven’t helped, and symptoms like pain, weakness, or numbness are affecting your daily life."
  },
  {
    question: "What should I expect during my first consultation?",
    answer: "During your first visit, Dr. Dave will review your medical history, perform a physical exam, and may order imaging tests. He will explain your diagnosis and discuss treatment options in clear, easy-to-understand terms."
  },
  {
    question: "What conditions do you treat with spine surgery?",
    answer: "We treat a wide range of conditions including herniated discs, spinal stenosis, scoliosis, degenerative disc disease, fractures, infections, and more."
  },
  {
    question: "How do I know if I need surgery?",
    answer: "After a thorough evaluation, Dr. Dave will recommend surgery only if absolutely necessary."
  },
  {
    question: "What is endoscopic spine surgery?",
    answer: "It’s a minimally invasive procedure using a small camera and special instruments to treat spine conditions through a tiny incision—usually less than 1 cm, allowing faster recovery and less pain."
  },
  {
    question: "Is endoscopic spine surgery safe?",
    answer: "Yes, it is considered very safe when performed by a trained and experienced spine surgeon. The risks are generally lower compared to traditional open surgery."
  },
  {
    question: "Am I a candidate for endoscopic spine surgery?",
    answer: "Not everyone is a candidate. Your surgeon will evaluate your condition, medical history, and imaging to determine if this approach is right for you."
  },
  {
    question: "How soon can I return to work or daily activities?",
    answer: "Most patients return to light activities within a few days and can resume work within 1 to 2 weeks, depending on the type of work and the individual’s healing progress."
  },
  {
    question: "Does Dr. Dave provide follow-up care after surgery?",
    answer: "Yes, Dr. Dave and his team provide comprehensive follow-up care to monitor your recovery and support you throughout the healing process."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <span className="text-2xl text-gray-600">
                  {openIndex === idx ? '-' : '+'}
                </span>
              </button>
              {openIndex === idx && (
                <div className="p-4 pt-0 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
