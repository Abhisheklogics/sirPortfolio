'use client';

import { useEffect } from "react";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdLocationOn } from 'react-icons/md';
import Image from "next/image";
import { Meteors } from "@/components/ui/meteors";

// Match number of images with visits (1-to-1)
const projectPhotos = [
  'https://ik.imagekit.io/vtbtnuxcb/Website/SAVE_20221225_203309.jpg?updatedAt=1748899039420',
  'https://ik.imagekit.io/vtbtnuxcb/Website/SAVE_20221225_203144.jpg?updatedAt=1748899033776',
  'https://ik.imagekit.io/vtbtnuxcb/Website/pic5.JPG?updatedAt=1748899012557',
  'https://ik.imagekit.io/vtbtnuxcb/Website/pic4.JPG?updatedAt=1748898996390',
  'https://ik.imagekit.io/vtbtnuxcb/Website/pic10.JPG?updatedAt=1748898993885',
  'https://ik.imagekit.io/vtbtnuxcb/Website/pic3.JPG?updatedAt=1748898991588',
'https://ik.imagekit.io/vtbtnuxcb/Website/pic9.JPG?updatedAt=1748898980890',
'https://ik.imagekit.io/vtbtnuxcb/Website/pic1.JPG?updatedAt=1748898961766',
'https://ik.imagekit.io/vtbtnuxcb/Website/SAVE_20221225_203340.jpg?updatedAt=1748898954923',
'https://ik.imagekit.io/vtbtnuxcb/Website/pic2.JPG?updatedAt=1748898941427',
'https://ik.imagekit.io/vtbtnuxcb/Website/pic2.JPG?updatedAt=1748898941427',
'https://ik.imagekit.io/vtbtnuxcb/Website/SAVE_20221130_183255.jpg?updatedAt=1748898905014',
'https://ik.imagekit.io/vtbtnuxcb/Website/pic8.jpg?updatedAt=1748898884075',
'https://ik.imagekit.io/vtbtnuxcb/Website/pic6.jpeg?updatedAt=1748898878960',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20231012_122958.jpg?updatedAt=1748898867472',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20231012_122958.jpg?updatedAt=1748898867472',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20250130_190120.jpg?updatedAt=1748898867298',
'https://ik.imagekit.io/vtbtnuxcb/Website/pic11.jpg?updatedAt=1748898866614',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5512.JPG?updatedAt=1748898865478',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5514.JPG?updatedAt=1748898864314',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_1441.JPG?updatedAt=1748898856974',

];

const visits = [
  { place: "IoT Expo", location: "Pragati Maidan, New Delhi", year: 2022 },
  { place: "Bharat Drone Shakti", location: "Hindan Air Force Station, Ghaziabad", year: 2023 },
  { place: "Two-day Akhil Bharatiya Shiksha Samagam", location: "Pragati Maidan, New Delhi", year: 2023 },
  { place: "Traffic Infra Tech", location: "Pragati Maidan, New Delhi", year: 2023 },
  { place: "IoT Expo", location: "Pragati Maidan, New Delhi", year: 2023 },
  { place: "Narora Atomic Power Plant", location: "Narora, Uttar Pradesh", year: 2023 },
  { place: "Yara Fertilizers", location: "Babrala, Uttar Pradesh", year: 2023 },
  { place: "Aerial Delivery Research and Development Establishment", location: "Agra", year: 2023 },
  { place: "IFFCO", location: "Aonla, Bareilly", year: 2022 }
];


// ... keep imports and AOS.init same ...

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
    autoplaySpeed: 4000,
    arrows: true,
    dots: true,
    fade: true,
    swipeToSlide: true,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <Meteors number={40} />

      {/* 🔼 FIRST: Projects Gallery Section - moved to top and changed to slider */}
      <div
        className="bg-gradient-to-r from-gray-900 via-black to-gray-900  mt-[-100px] rounded-3xl shadow-xl text-white p-8"
        data-aos="fade-up"
        aria-label="Projects Gallery Photos"
      >
        <h2 className="text-4xl font-extrabold mb-12 text-center border-b border-gray-700 pb-6 tracking-tight">
          Projects Gallery
        </h2>

        <div className="max-w-5xl mx-auto">
          <Slider {...settings}>
  {projectPhotos.map((src, idx) => (
    <div
      key={idx}
      className="relative aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer"
      tabIndex={0}
      aria-label={`Project photo ${idx + 1}`}
    >
      <Image
        src={src}
        alt={`Project photo ${idx + 1}`}
        fill

        className="object-cover rounded-xl mt-8"
        priority={idx === 0}
      />
    </div>
  ))}
</Slider>
        </div>
      </div>

      {/* 🔽 THEN: Industrial Visits Section */}
      <div
        className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl shadow-xl text-white p-8"
        data-aos="fade-up"
        aria-label="Industrial Visits Details"
      >
        <h2 className="text-4xl font-extrabold mb-12 text-center border-b border-gray-700 pb-6 tracking-tight">
          Industrial Visits
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {visits.map(({ place, location, year }, idx) => (
            <article
              key={idx}
              tabIndex={0}
              aria-label={`${place} visit in year ${year} at ${location}`}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">{place}</h3>
              <div className="flex items-center text-gray-300 mb-3">
                <MdLocationOn className="text-blue-500 mr-2 text-2xl" />
                <p className="text-lg">{location}</p>
              </div>
              <p className="text-blue-400 font-medium text-lg">{year}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
