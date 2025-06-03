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
'https://ik.imagekit.io/vtbtnuxcb/Website/pic7.jpg?updatedAt=1748898937616',
'https://ik.imagekit.io/vtbtnuxcb/Website/SAVE_20221130_183255.jpg?updatedAt=1748898905014',
'https://ik.imagekit.io/vtbtnuxcb/Website/pic8.jpg?updatedAt=1748898884075',
'https://ik.imagekit.io/vtbtnuxcb/Website/pic6.jpeg?updatedAt=1748898878960',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20231012_122958.jpg?updatedAt=1748898867472',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20250130_190120.jpg?updatedAt=1748898867298',
'https://ik.imagekit.io/vtbtnuxcb/Website/pic11.jpg?updatedAt=1748898866614',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5512.JPG?updatedAt=1748898865478',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5514.JPG?updatedAt=1748898864314',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_1441.JPG?updatedAt=1748898856974',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20230813_003218.jpg?updatedAt=1748898855493',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20230825_170221.jpg?updatedAt=1748898854581',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20230825_091010.jpg?updatedAt=1748898852269',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20230825_090909.jpg?updatedAt=1748898850960',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5513.JPG?updatedAt=1748898847267',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5510.JPG?updatedAt=1748898845024',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250212-WA0052.jpg?updatedAt=1748898835582',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250212-WA0053.jpg?updatedAt=1748898835447',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250201-WA0012.jpg?updatedAt=1748898835414',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250201-WA0014.jpg?updatedAt=1748898834825',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250212-WA0051.jpg?updatedAt=1748898834811',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250130-WA0019.jpg?updatedAt=1748898828632',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5480.JPG?updatedAt=1748898827876',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250201-WA0011.jpg?updatedAt=1748898825440',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250122-WA0026.jpg?updatedAt=1748898824373',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250131-WA0016.jpg?updatedAt=1748898824466',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20240815-WA0023.jpg?updatedAt=1748898816644',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20240815-WA0022.jpg?updatedAt=1748898815710',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20240802-WA0011.jpg?updatedAt=1748898815508',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250122-WA0024.jpg?updatedAt=1748898815280',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20240509-WA0011.jpg?updatedAt=1748898811648',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230925-WA0044.jpg?updatedAt=1748898807122',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20231012-WA0028.jpg?updatedAt=1748898806657',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230925-WA0063.jpg?updatedAt=1748898805051',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20231012-WA0023.jpg?updatedAt=1748898804836',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230819-WA0012.jpg?updatedAt=1748898786585',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230825-WA0043.jpg?updatedAt=1748898783150',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230825-WA0030.jpg?updatedAt=1748898781372',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230819-WA0000.jpg?updatedAt=1748898769440',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230819-WA0011.jpg?updatedAt=1748898769112',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230815-WA0068.jpg?updatedAt=1748898768298',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230802-WA0065.jpg?updatedAt=1748898760612',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230802-WA0242.jpg?updatedAt=1748898760289',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230802-WA0038.jpg?updatedAt=1748898756572',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20220625-WA0018.jpg?updatedAt=1748898751887',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20220625-WA0019.jpg?updatedAt=1748898751233',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230802-WA0035.jpg?updatedAt=1748898748653',
'https://ik.imagekit.io/vtbtnuxcb/Website/1717139124908.jpg?updatedAt=1748898740114',

'https://ik.imagekit.io/vtbtnuxcb/Website/1717139124491.jpg?updatedAt=1748898739065',
'https://ik.imagekit.io/vtbtnuxcb/Website/1717139125100.jpg?updatedAt=1748898739043',

'https://ik.imagekit.io/vtbtnuxcb/Website/1717139124537.jpg?updatedAt=1748898738881',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG20231012130539.jpg?updatedAt=1748898856530',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5023.JPG?updatedAt=1748898802185',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_4828.JPG?updatedAt=1748898795040',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230825-WA0045.jpg?updatedAt=1748898795447'
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
    
    fade: true,
    swipeToSlide: true,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <Meteors number={40} />
<div
  className="bg-gradient-to-r from-gray-900 via-black to-gray-900 mt-[-100px] rounded-3xl shadow-xl text-white p-8"
  data-aos="fade-up"
  aria-label=" Dr. Amarjeet Singh Chauhan  Projects Gallery Photos"
>
  <h2 className="text-4xl font-extrabold mb-12 text-center border-b border-gray-700 pb-6 tracking-tight">
    Projects Gallery
  </h2>

  <div className="max-w-5xl mx-auto">
    <Slider {...settings}>
      {projectPhotos.map((src, idx) => (
        <div
          key={idx}
          className="relative w-full h-[440px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
          tabIndex={0}
          aria-label={` Dr. Amarjeet Singh Chauhan  Project photos ${idx + 1}`}
        >
          <Image
            src={src}
            alt={`  Dr. Amarjeet Singh Chauhan  Project photos ${idx + 1}`}
            fill
            className="object-contain  rounded-xl transition-transform duration-300 "
            priority={idx === 0}
           sizes="(max-width: 890px) 100vw, (max-width: 1024px) 100vw, 100vw"

          />
        </div>
      ))}
    </Slider>
  </div>
</div>
   <Meteors number={40} />
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
