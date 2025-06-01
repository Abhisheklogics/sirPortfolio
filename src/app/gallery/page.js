'use client';

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdLocationOn } from 'react-icons/md';
import Image from "next/image";
import photo from '../../../public/as.jpg';
import { Meteors } from "@/components/ui/meteors";

const visits = [
  { place: "IoT Expo", location: "Pragati Maidan, New Delhi", year: 2022 },
  { place: "Bharat Drone Shakti", location: "Hindan Air Force Station, Ghaziabad", year: 2023 },
  { place: "Two-day Akhil Bharatiya Shiksha Samagam", location: "Pragati Maidan, New Delhi", year: 2023 },
  { place: "Traffic Infra Tech", location: "Pragati Maidan, New Delhi", year: 2023 },
  { place: "IoT Expo", location: "Pragati Maidan, New Delhi", year: 2023 },
  { place: "Narora Atomic Power Plant", location: "Narora, Uttar Pradesh", year: 2023 },
  { place: "Yara Fertilizers", location: "Babrala, Uttar Pradesh", year: 2023 },
  { place: "Aerial Delivery Research and Development Establishment", location: "Agra", year: 2023 },
  { place: "IFFCO", location: "Aonla, Bareilly", year: 2022 },
];

export default function IndustrialVisitsGallery() {
  useEffect(() => {
      AOS.init({ duration: 1100, once: true, easing: 'ease-in-out' });
    }, []);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    fade: true,
    swipeToSlide: true,
  };

  return (
    <section
      className="max-w-5xl mx-auto px-4 sm:px-6 mt-4 lg:px-8 py-16 rounded-3xl shadow-xl bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative"
      data-aos="fade-up"
      aria-label="Industrial Visits Gallery"
    >
      <Meteors number={40} />
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-14 text-center border-b border-gray-700 pb-6 tracking-tight">
        Industrial Visits & Projects Gallery
      </h2>

      <Slider {...settings}>
        {visits.map(({ place, location, year }, idx) => (
          <article
            key={idx}
            className="bg-gray-800  rounded-2xl md:ml-[250px] shadow-lg p-5 sm:p-8 mx-2 sm:mx-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] focus-within:scale-[1.02] max-w-md mx-auto"
            tabIndex={0}
            aria-label={`${place}, visited in year ${year}, located at ${location}`}
          >
            <div className="relative w-full h-56  sm:h-64 mb-4 rounded-xl overflow-hidden">
              <Image
                src={photo}
                alt={`${place} visit image`}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-2">{place}</h3>

            <div className="flex items-center justify-center text-gray-300 mb-2 text-sm sm:text-base">
              <MdLocationOn className="text-blue-500 mr-1 text-lg sm:text-xl" />
              <span className="max-w-xs">{location}</span>
            </div>

            <p className="text-blue-400 font-medium text-sm sm:text-base">{year}</p>
          </article>
        ))}
      </Slider>
    </section>
  );
}
