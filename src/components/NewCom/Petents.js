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
    <div className="space-y-12 px-4 sm:px-6 lg:px-8 py-8">
     
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {patents.map((patent, index) => (
          <div
            key={index}
            data-aos={patent.animation}
            className=" border border-neutral-800  rounded-2xl p-4 h-full flex flex-col shadow-lg"
          >
            <h3 className="text-black text-base font-semibold mb-2">
              {patent.title}
            </h3>

            {patent.designNumber && (
              <p className="text-neutral-900 text-sm mb-1">
                <span className="font-medium">Design Number:</span> {patent.designNumber}
              </p>
            )}

            {patent.applicationNumber && (
              <p className="text-neutral-900 text-sm mb-1">
                <span className="font-medium">Application Number:</span> {patent.applicationNumber}
              </p>
            )}

            <p className="text-neutral-900 text-xs mb-1">
              <span className="font-medium">Country:</span> {patent.country}
            </p>

            {patent.status && (
              <p className="text-neutral-900 text-xs mb-1">
                <span className="font-medium">Status:</span> {patent.status}
              </p>
            )}

            <p className="text-neutral-900 text-xs mt-auto">
              <span className="font-medium">Type:</span> {patent.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
