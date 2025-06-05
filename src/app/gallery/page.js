import IndustrialVisitsGallery from "@/components/NewCom/Gallery";
export const metadata = {
  title: "Projects Gallery & Educational Visits | Dr. Amarjeet Singh Chauhan",
  description:
    "Explore a comprehensive gallery of innovative student projects and academic-industrial visits guided by Dr. Amarjeet Singh Chauhan, including IoT Expo, Bharat Drone Shakti, Narora Atomic Power Plant, and more.",

  authors: [{ name: "Dr. Amarjeet Singh Chauhan" }],
  creator: "Dr. Amarjeet Singh Chauhan",
  publisher: "Dr. Amarjeet Singh Chauhan",


  alternates: {
    canonical: "https://www.amarjeetsinghchauhan.com/gallery",
  },

  openGraph: {
    title: "Projects Gallery & Educational Visits | Dr. Amarjeet Singh Chauhan",
    description:
      "Browse through featured student innovations and major educational visits, including IoT Expo, Drone Shakti, Narora Atomic Plant, and more—reflecting practical learning under the guidance of Dr. Amarjeet Singh Chauhan.",
    url: "https://www.amarjeetsinghchauhan.com/gallery",
    siteName: "Dr. Amarjeet Singh Chauhan",
    type: "article",
    images: [
      {
        url: "https://ik.imagekit.io/vtbtnuxcb/Website/SAVE_20221225_203309.jpg?updatedAt=1748899039420",
        width: 1200,
        height: 630,
        alt: "Projects and Visits by Dr. Amarjeet Singh Chauhan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects Gallery & Educational Visits | Dr. Amarjeet Singh Chauhan",
    description:
      "Discover student projects and academic-industrial visits curated by Dr. Amarjeet Singh Chauhan, including major expos, power plants, and innovation showcases.",
    images: [
      "https://ik.imagekit.io/vtbtnuxcb/Website/SAVE_20221225_203309.jpg?updatedAt=1748899039420",
    ],
    creator: "Dr. Amarjeet Singh Chauhan",
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