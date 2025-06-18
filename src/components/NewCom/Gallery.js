'use client';

import { useEffect,useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { MdLocationOn } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import Image from "next/image";

// ye 82 images

const projectPhotos = [


  'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202354.jpg?updatedAt=1750286163405',
'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202337.jpg?updatedAt=1750286162308',
'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202319.jpg?updatedAt=1750286161420',
'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202287.jpg?updatedAt=1750286161118',
'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202387.jpg?updatedAt=1750286160855',

'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202402.jpg?updatedAt=1750286160679',
'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202303.jpg?updatedAt=1750286160227',
'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202418.jpg?updatedAt=1750286159521',
'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202370.jpg?updatedAt=1750286158323',
  'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202435.jpg?updatedAt=1750286155735',
  
  'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202271.jpg?updatedAt=1750286155517',
'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202234.jpg?updatedAt=1750286155467',
'https://ik.imagekit.io/vtbtnuxcb/Website/1750284202255.jpg?updatedAt=1750286155400',
  
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
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5514.JPG?updatedAt=1748899207978',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_1441.JPG?updatedAt=1748898856974',

'https://ik.imagekit.io/vtbtnuxcb/Website/IMG20231012130539.jpg?updatedAt=1748898856530',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20230813_003218.jpg?updatedAt=1748898855493',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20230825_170221.jpg?updatedAt=1748898854581',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20230825_091010.jpg?updatedAt=1748898852269',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20230825_090909.jpg?updatedAt=1748898850960',

'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5513.JPG?updatedAt=1748898847267',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5510.JPG?updatedAt=1748898845024',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250212-WA0054.jpg?updatedAt=1748898841092',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250212-WA0052.jpg?updatedAt=1748898835582',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250212-WA0053.jpg?updatedAt=1748898835447',

'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250201-WA0012.jpg?updatedAt=1748898835414',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250201-WA0014.jpg?updatedAt=1748898834825',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250212-WA0051.jpg?updatedAt=1748898834811',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250130-WA0015.jpg?updatedAt=1748898829943',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250130-WA0019.jpg?updatedAt=1748898828632',

'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5480.JPG?updatedAt=1748898827876',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250201-WA0011.jpg?updatedAt=1748898825440',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250131-WA0016.jpg?updatedAt=1748898824466',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250122-WA0026.jpg?updatedAt=1748898824373',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20240815-WA0023.jpg?updatedAt=1748898816644',

'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20240815-WA0022.jpg?updatedAt=1748898815710',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20240802-WA0011.jpg?updatedAt=1748898815508',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20250122-WA0024.jpg?updatedAt=1748898815280',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20240509-WA0011.jpg?updatedAt=1748898811648',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230925-WA0044.jpg?updatedAt=1748898807122',

'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20231012-WA0028.jpg?updatedAt=1748898806657',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230925-WA0063.jpg?updatedAt=1748898805051',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20231012-WA0023.jpg?updatedAt=1748898804836',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_5023.JPG?updatedAt=1748898802185',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230925-WA0032.jpg?updatedAt=1748898797459',


'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230825-WA0045.jpg?updatedAt=1748898795447',
'https://ik.imagekit.io/vtbtnuxcb/Website/DSC_4828.JPG?updatedAt=1748898795040',
'https://ik.imagekit.io/vtbtnuxcb/Website/IMG-20230925-WA0031.jpg?updatedAt=1748898793519',
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
'https://ik.imagekit.io/vtbtnuxcb/Website/1717139124537.jpg?updatedAt=1748898738881'



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





export default function ProjectGallery() {
  const [zoomData, setZoomData] = useState({ src: null, index: 0, x: 0, y: 0 });

 const openZoom = (e, src, index) => {
  const rect = e.target.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  // ✅ Scroll to top when image is clicked
  window.scrollTo({ top: 0, behavior: 'smooth' });

  setZoomData({ src, index, x: clickX, y: clickY });
};


  const closeZoom = () => setZoomData({ src: null, index: 0, x: 0, y: 0 });

  const changeImage = (direction) => {
    const newIndex = (zoomData.index + direction + projectPhotos.length) % projectPhotos.length;
    setZoomData({
      ...zoomData,
      src: projectPhotos[newIndex],
      index: newIndex,
    });
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!zoomData.src) return;
      if (e.key === 'Escape') closeZoom();
      if (e.key === 'ArrowRight') changeImage(1);
      if (e.key === 'ArrowLeft') changeImage(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [zoomData]);

  useEffect(() => {
    AOS.init({ duration: 1100, once: true, easing: 'ease-in-out' });
  }, []);  return (
    <section className="bg-gradient-to-t from-blue-900 to-gray-950 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
      {/* Project Gallery */}
      <div data-aos="fade-up" className="rounded-3xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8">
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 border-b border-white/10 pb-6 tracking-tight">
          Project Gallery
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {projectPhotos.map((src, idx) => (
            <div
              key={idx}
              onClick={(e) => openZoom(e, src, idx)}
              className="relative group overflow-hidden rounded-xl aspect-[4/3] border border-white/10 shadow-md cursor-zoom-in"
              tabIndex={0}
            >
              <Image
                src={src}
                alt={Project photo ${idx + 1}}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
              />
            </div>
          ))}
        </div>

{zoomData.src && (
  <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm px-4">
    {/* Close Button */}
    <button
      onClick={closeZoom}
      className="absolute top-4 right-4 text-white text-3xl bg-black/50 hover:bg-black p-2 rounded-full z-[10000]"
      aria-label="Close Zoom"
    >
      ✕
    </button>

    {/* Zoom Container */}
    <div
      className=" h-full w-full max-w-screen"
      style={{
        transformOrigin: ${zoomData.x}px ${zoomData.y}px,
      }}
    >
      {/* Image Container */}
      <div className="relative w-full max-w-[95vw] sm:max-w-[80vw] h-[calc(100vh-100px)]">
        <Image
          src={zoomData.src}
          alt="Zoomed project"
          fill
          className="object-contain rounded-xl shadow-xl"
          onClick={(e) => e.stopPropagation()}
          unoptimized
          sizes="100vw"
          priority
        />
      </div>

      {/* Arrows below image */}
      <div className=" flex justify-center items-center md:mt-0 mt-[-100px] gap-8 h-[80px] ">
        <button
          onClick={() => changeImage(-1)}
          className="text-white text-3xl sm:text-4xl bg-black/50 hover:bg-black p-2 sm:p-3 rounded-full z-[10000] transition"
          aria-label="Previous Image"
        >
          ←
        </button>
        <button
          onClick={() => changeImage(1)}
          className="text-white text-3xl sm:text-4xl bg-black/50 hover:bg-black p-2 sm:p-3 rounded-full z-[10000] transition"
          aria-label="Next Image"
        >
          →
        </button>
      </div>
    </div>
  </div>
)}

  
  </div>
      {/* Industrial Visits */}
      <div
        className="rounded-3xl shadow-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-8"
        data-aos="fade-up"
        aria-label="Industrial Visits Details"
      >
        <h2 className="text-4xl font-extrabold text-center text-white mb-12 border-b border-white/10 pb-6 tracking-tight">
          Industrial Visits
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-white">
          {visits.map(({ place, location, year, linkedin }, idx) => (
            <article
              key={idx}
              tabIndex={0}
              className="group rounded-2xl p-6 shadow-lg border border-white/10 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
              aria-label={${place} visit in ${year} at ${location}}
            >
              <h3 className="text-2xl font-bold mb-2">{place}</h3>
              <div className="flex items-center mb-2 text-gray-300">
                <MdLocationOn className="text-blue-400 mr-2 text-xl" />
                <p className="text-md">{location}</p>
              </div>
              <p className="text-blue-300 font-medium mb-3">{year}</p>
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
                  aria-label={Visit ${place} LinkedIn Profile}
                >
                  <FaLinkedin className="mr-2" />
                  <span>LinkedIn</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
