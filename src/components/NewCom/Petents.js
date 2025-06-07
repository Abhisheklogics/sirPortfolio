'use client';

import { useEffect ,useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const patents = [
  // ye hai International Design Patents
  {
    title: "Device for Distribution and Monitoring of Nutrients for Hydroponics",
    designNumber: "6326599",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-right",
    images:['https://ik.imagekit.io/vtbtnuxcb/pettens/Hydroponic%20Patent%20Certificate%20.pdf?updatedAt=1749154630903']
  },
  {
    title: "Medi-Drone: Medicine Delivery Drone",
    designNumber: "6317960",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-left",
    images:['https://ik.imagekit.io/vtbtnuxcb/pettens/Medi-Drone%20%20Medicine%20Delivery%20dron.pdf?updatedAt=1749154630520']
  },
  {
    title: "Printed Circuit Board",
    designNumber: "6328234",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-right",
    images:['https://ik.imagekit.io/vtbtnuxcb/pettens/Printed%20Circuit%20board.pdf?updatedAt=1749154631050']
  },
  {
    title: "Light Weight Drone",
    designNumber: "6299404",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-left",
    images:['https://ik.imagekit.io/vtbtnuxcb/pettens/LIGHT%20WEIGHT%20DRONE.pdf?updatedAt=1749154630055']
  },
  {
    title: "16 Rotor High Payload Drone",
    designNumber: "6304506",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-right",
    images:['https://ik.imagekit.io/vtbtnuxcb/pettens/HIGH%20PAYLOAD%2016%20ROTORS%20AERIAL%20SYSTEM.pdf?updatedAt=1749154630368']
  },
  {
    title: "32 Rotor High Payload Drone",
    designNumber: "6312678",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-left",
    images:['https://ik.imagekit.io/vtbtnuxcb/pettens/32%20Rotor%20Patent%20Certificate%20.pdf?updatedAt=1749154630449']
  },
  {
    title: "Remote Controlled Helicopter Drone",
    designNumber: " 6309933",
    country: "United Kingdom",
    type: "International Design Patent",
    animation: "fade-right",
    images:['https://ik.imagekit.io/vtbtnuxcb/pettens/Remote%20Controlled%20Helicopter%20drone.pdf?updatedAt=1749154630190']
  },
  // ye hai national Design Patents
  {
    title: "IoT Based Smart Drip Irrigation System",
    applicationNumber: "202211058572",
    country: "India",
    status: "PUBLISHED",
    type: "National Patent",
    animation: "fade-left",
    images:['https://ik.imagekit.io/vtbtnuxcb/pettens/Drip%20Irrigation.pdf?updatedAt=1749154625225']
  },
  {
    title: "High Speed V.T.O.L. Drone",
    applicationNumber: "400661-001",
    country: "India",
    status: "GRANTED",
    type: "National Patent",
    animation: "fade-right",
    images:['https://ik.imagekit.io/vtbtnuxcb/pettens/400661-001.pdf?updatedAt=1749154630693']
  },
  {
    title: "Optimized Hybrid Drone Using Ionic Propulsion Along with Toroidal Propeller’s",
    applicationNumber: "202411018436",
    country: "India",
    status: "PUBLISHED",
    type: "National Patent",
    animation: "fade-left",
  },
];



export default function CardSpotlightPatents() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isImageLoading, setIsImageLoading] = useState(true);
const isMobile =  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const closeModal = () => {
    setSelectedImages([]);
    setIsImageLoading(true);
  };

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
     
      once: true, 
     
      easing: 'ease-in-out'
    
    });
  }, []);

  return (
    <section className="min-h-screen overflow-x-hidden px-4 md:px-16 py-16 bg-gradient-to-b from-white to-slate-50 text-black">
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
                <span
                  className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold
                    ${
                      patent.status === 'GRANTED'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                >
                  {patent.status}
                </span>
              </p>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              {patent.type}
            </span>

            {patent.images?.length > 0 && (
              <button
                onClick={() => setSelectedImages(patent.images)}
                className="cursor-pointer bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow transition duration-200"
              >
                View Patent
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>


  {selectedImages.length > 0 && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={closeModal}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative md:w-full w-fit md:ml-0   max-w-6xl max-h-[90vh] overflow-y-auto p-6 rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
       
        <button
          className="absolute top-3 cursor-pointer md:right-[300px] right-3 text-black bg-gray-300 hover:bg-gray-500 rounded-full w-8 h-8 text-xl flex items-center justify-center"
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>

      
        {isImageLoading && (
  <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 rounded-xl">
    <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
)}

<div
  className={`grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 ${
    isImageLoading ? 'opacity-0' : 'opacity-100'
  } transition-opacity duration-500`}
>
  {selectedImages.map((img, i) => (
    <div key={i} className="w-full flex justify-center">
      <iframe
        src={
          isMobile
            ? `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(img)}`
            : img
        }
        className="w-full max-w-[100%] md:ml-[800px] sm:max-w-[95%] md:w-[100%] xl:max-w-[800px] h-[70vh] rounded-xl border shadow-lg"
        onLoad={() => setIsImageLoading(false)}
        title={`Patent PDF ${i + 1}`}
      />
    </div>
  ))}
</div>

      </div>
    </div>
  )}
</section>
  );
}
