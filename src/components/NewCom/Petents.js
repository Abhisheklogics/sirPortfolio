'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const patents = [
  // International Design Patents
  {
    title: "Device for Distribution and Monitoring of Nutrients for Hydroponics",
    designNumber: "Design No – 6326599",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-right",
  },
  {
    title: "Medi-Drone: Medicine Delivery Drone",
    designNumber: "Design Number – 6317960",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-left",
  },
  {
    title: "Printed Circuit Board",
    designNumber: "Design Number – 6328234",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-right",
  },
  {
    title: "Light Weight Drone",
    designNumber: "Design Number - 6299404",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-left",
  },
  {
    title: "16 Rotor High Payload Drone",
    designNumber: "Design Number – 6304506",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-right",
  },
  {
    title: "32 Rotor High Payload Drone",
    designNumber: "Design Number - 6312678",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-left",
  },
  {
    title: "Remote Controlled Helicopter Drone",
    designNumber: "Design Number - 6309933",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-right",
  },
  // National Patents
  {
    title: "IoT Based Smart Drip Irrigation System",
    applicationNumber: "Application Number – 202211058572",
    country: "India",
    status: "PUBLISHED",
    type: "National Patent",
    animation: "fade-left",
  },
  {
    title: "High Speed V.T.O.L. Drone",
    applicationNumber: "Application Number – 400661-001",
    country: "India",
    status: "GRANTED",
    type: "National Patent",
    animation: "fade-right",
  },
  {
    title: "Optimized Hybrid Drone Using Ionic Propulsion Along with Toroidal Propeller’s",
    applicationNumber: "Application Number – 202411018436",
    country: "India",
    status: "PUBLISHED",
    type: "National Patent",
    animation: "fade-left",
  },
];

export default function CardSpotlightPatents() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="min-h-screen px-6 md:px-16 py-16 bg-gradient-to-b from-white to-slate-50 text-black">
      <div className="max-w-7xl mx-auto">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {patents.map((patent, index) => (
            <div
              key={index}
              data-aos={patent.animation}
              className="flex flex-col justify-between h-full border border-gray-200 rounded-2xl p-6 bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3 leading-snug">
                  {patent.title}
                </h3>

                {patent.designNumber && (
                  <p className="text-sm text-slate-700 mb-1">
                    <span className="font-medium text-slate-900">Design Number:</span> {patent.designNumber}
                  </p>
                )}

                {patent.applicationNumber && (
                  <p className="text-sm text-slate-700 mb-1">
                    <span className="font-medium text-slate-900">Application Number:</span> {patent.applicationNumber}
                  </p>
                )}

                <p className="text-sm text-slate-700 mb-1">
                  <span className="font-medium text-slate-900">Country:</span> {patent.country}
                </p>

                {patent.status && (
                  <p className="text-sm text-slate-700 mb-1">
                    <span className="font-medium text-slate-900">Status:</span>{' '}
                    <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold
                      ${patent.status === 'GRANTED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}
                    `}>
                      {patent.status}
                    </span>
                  </p>
                )}
              </div>

              <div className="mt-4">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  {patent.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}