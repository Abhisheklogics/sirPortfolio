'use client';

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdLocationOn } from 'react-icons/md';


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
    AOS.init({ duration: 800 });
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
      className="max-w-5xl mx-auto px-6 mt-10  py-16 rounded-3xl shadow-xl bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white relative"
      data-aos="fade-up"
      aria-label="Industrial Visits Gallery"
    >
      <h2 className="text-4xl font-extrabold mb-14 text-center border-b border-gray-700 pb-6 tracking-tight">
        Industrial Visits & Expos Gallery
      </h2>

      <Slider {...settings} aria-live="polite" aria-relevant="all" aria-atomic="true">
        {visits.map(({ place, location, year }, idx) => (
          <article
            key={idx}
            className="p-10 bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center text-center mx-4 sm:mx-6 md:mx-0 transition-transform duration-300 hover:scale-[1.03] focus-within:scale-[1.03]"
            tabIndex={0}
            aria-label={`${place}, visited in year ${year}, located at ${location}`}
          >
            <MdLocationOn className="text-blue-500 text-7xl mb-6" aria-hidden="true" />
            <h3 className="text-3xl font-semibold mb-2">{place}</h3>
            <p className="text-gray-300 max-w-xl text-lg leading-relaxed mb-4">{location}</p>
            <p className="text-blue-400 font-semibold text-lg">{year}</p>
          </article>
        ))}
      </Slider>
    </section>
  );
}
