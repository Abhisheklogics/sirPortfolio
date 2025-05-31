'use client';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Meteors } from "@/components/ui/meteors";

import { CardSpotlight } from "@/components/ui/card-spotlight";
export default function Page() {
  useEffect(() => {
     AOS.init({ duration: 1100, once: true, easing: 'ease-in-out' });
   }, []);

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



function CardSpotlightPatents() {
  return (
    <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {patents.map((patent, index) => (
        <CardSpotlight
          key={index}
          className="p-5 rounded-2xl min-h-[260px]"
          data-aos={patent.animation}
        >
          <div className="z-20 relative flex flex-col h-full">
            <p className="text-white text-lg font-semibold mb-2">
              {patent.title}
            </p>

            {patent.designNumber && (
              <p className="text-neutral-300 text-sm mb-1">
                <span className="font-medium">Design Number:</span> {patent.designNumber}
              </p>
            )}

            {patent.applicationNumber && (
              <p className="text-neutral-300 text-sm mb-1">
                <span className="font-medium">Application Number:</span> {patent.applicationNumber}
              </p>
            )}

            <p className="text-neutral-400 text-xs mb-1">
              <span className="font-medium">Country:</span> {patent.country}
            </p>

            {patent.status && (
              <p className="text-neutral-400 text-xs">
                <span className="font-medium">Status:</span> {patent.status}
              </p>
            )}

            <p className="text-neutral-400 text-xs mt-auto">
              <span className="font-medium">Type:</span> {patent.type}
            </p>
          </div>
        </CardSpotlight>
      ))}
    </div>
  );
}





  return (
    <section className="py-20 mt-[-40px] bg-black text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <Meteors number={40} />
  <div className="container mx-auto px-6 md:px-12">
    <h1
      className=" text-2xl sm:text-4xl font-bold   text-white tracking-wide text-center "
      data-aos="fade-down"
    >
      My <span className="">Patents</span>
    </h1>

    {/* Patents Section */}
   
    
<CardSpotlightPatents/>
    
  </div>
</section>
 );
}
