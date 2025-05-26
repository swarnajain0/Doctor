import React, { useState } from 'react';

const services = [
  {
    title: 'Non-Surgical Spine Solutions',
    summary:
      'At Dr. Harshit Dave’s clinic, we believe surgery isn’t always the first or only solution. Many spine conditions can be effectively managed with non-surgical treatments, especially in the early stages. Our patient-focused approach includes a variety of evidence-based therapies designed to relieve pain, improve mobility, and restore quality of life — all without going under the knife',
    details: [
      'Medication Management: Pain relievers, anti-inflammatory medications, and muscle relaxants may be used to reduce discomfort and swelling. For chronic conditions, we ensure medications are used carefully and responsibly to provide relief while minimizing side effects.',
      'Lifestyle & Posture Counseling: Small adjustments in your daily routine — from the way you sit to how you lift objects — can significantly reduce back stress. We guide patients on ergonomic changes, activity modifications, and spine-friendly habits.',
      'Epidural Injections & Nerve Blocks: For patients with nerve-related pain (such as sciatica), targeted injections can help reduce inflammation around the spinal nerves, providing longer-term pain relief and improving function without surgery.',
      'Spinal Bracing & Support: In some cases, we may recommend temporary use of spinal braces to stabilize the spine, relieve pain, and support healing. These are especially helpful in cases of fractures, disc injuries, or postural imbalances.',
      'Advanced Pain Management Techniques: Other interventional procedures for chronic back or neck pain that doesn’t respond to conservative care.'
    ]
  },
  {
    title: 'Full Endoscopic Spine Surgery',
    summary:
      'Dr. Harshit Dave, a fellowship-trained leader in full endoscopic spine surgery, delivers expert care that gets patients back to living pain-free—quickly, safely, and effectively.',
    details:
      `Full Endoscopic spine surgery is a highly advanced, minimally invasive technique used to treat a range of spinal conditions, including herniated discs, spinal stenosis, and nerve compression. This procedure involves inserting a small, high-definition camera (endoscope) and specialized surgical instruments through a tiny incision—often less than 1 cm—to access and treat the problem area with pinpoint accuracy.
Unlike traditional open surgery, endoscopic spine surgery causes minimal disruption to muscles and tissues, resulting in significantly less pain, reduced blood loss, and a faster return to normal activities.

Dr. Dave brings specialized expertise in full endoscopic spine surgery to deliver exceptional outcomes with a patient-first approach. Our goal is to offer you effective solutions with compassionate care tailored just for you.`,
  },
  {
    title: 'Minimally Invasive Spine Surgery (MISS)',
    summary:
      'Minimally Invasive Spine Surgery (MISS) is a modern approach to treating spine problems with less pain and a quicker recovery. Instead of making large cuts, the surgeon uses small incisions and special tools to reach the spine with minimal damage to the muscles and tissues around it.',
    details:
      `This means you may experience less pain after surgery, spend less time in the hospital, and get back to your daily activities sooner.

We prioritize procedures that minimize trauma to the body. MISS can help with conditions like herniated discs, spinal stenosis, and other common spine issues. Our goal is to help you feel better and move better—with the least disruption to your life.`,
  },
  {
    title: 'Complex Spine Surgery',
    summary:
      'Complex spine surgeries are performed to treat severe or advanced spinal conditions that often involve multiple levels of the spine or haven’t improved with previous treatments. Some spine problems are more serious and need special care.',
    details:
      `These surgeries are carefully planned to relieve pain, improve movement, and help you return to daily life.

Common examples include revision spine surgery (to correct or improve a previous surgery), scoliosis correction, multi-level disc problems, osteoporotic spine fractures, spinal infections, and conditions like Pott’s spine (spinal tuberculosis). With advanced techniques and personalized care, we aim to provide safe and effective solutions for even the most challenging spine issues.`,
  }
];

export default function SpecialisedServices() {
  const [expanded, setExpanded] = useState(
    Array(services.length).fill(false)
  );

  const toggle = (index) => {
    setExpanded((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Specialised Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">
                {svc.title}
              </h3>
              <div className="text-gray-600">
                {/* Always show summary */}
                <p>{svc.summary}</p>
                {/* Show details when expanded */}
                {expanded[i] && (
                  Array.isArray(svc.details) ? (
                    <ul className="list-disc list-inside space-y-2 mt-4">
                      {svc.details.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    svc.details.split('\n\n').map((para, idx) => (
                      <p key={idx} className="mb-2 mt-4">
                        {para}
                      </p>
                    ))
                  )
                )}
              </div>
              <button
                onClick={() => toggle(i)}
                className="mt-4 text-blue-600 hover:underline focus:outline-none"
              >
                {expanded[i] ? 'Show Less' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
