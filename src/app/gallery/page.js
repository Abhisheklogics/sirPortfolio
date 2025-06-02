import IndustrialVisitsGallery from "@/components/NewCom/Gallery";
export const metadata = {
  title: "Industrial & Educational Visits | My Organization",
  description:
    "Explore key industrial and educational visits from 2022 to 2023 including IoT Expo, Bharat Drone Shakti, Narora Atomic Power Plant, and more, reflecting technological and academic exposure.",
  
  authors: [{ name: "My Organization" }],
  creator: "My Organization",
  publisher: "My Organization",
  
  openGraph: {
    title: "Industrial & Educational Visits | My Organization",
    description:
      "Discover notable visits including IoT Expo, Drone Shakti, Narora Atomic Plant, and more, offering insights into advanced technology and education in India.",
    url: "https://www.amarjeetsinghchauhan.com/gallery", // Replace with actual page URL
    siteName: "My Organization",
    type: "article",
    images: [
      {
        url: "https://ik.imagekit.io/vtbtnuxcb/Website/SAVE_20221225_203309.jpg?updatedAt=1748899039420", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Industrial and Educational Visits",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Industrial & Educational Visits | My Organization",
    description:
      "A timeline of visits to leading expos, research centers, and industrial sites like IoT Expo, Drone Shakti, and more between 2022–2023.",
    images: ["https://yourdomain.com/images/visits-banner.jpg"], // Same or custom image
    creator: "@YourTwitterHandle", // Optional
  },
};

export default function Page()
{
  return(
    <>
    <IndustrialVisitsGallery/>
    </>
  )
}