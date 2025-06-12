

import Hero from '@/components/Hero'
import Head from "next/head";
export const metadata = {
  title: "Dr. Amarjeet Singh Chauhan – IoT, AI & CS Expert | Lecturer, Dayalbagh Educational Institute, Agra",
  description:
    "Dr. Amarjeet Singh Chauhan, Ph.D. in Computer Science from DEI Agra, is a distinguished lecturer and multidisciplinary researcher specializing in IoT, Drone Technologies, AI-driven Agriculture, Embedded Systems, and Cloud Computing. With multiple international publications and over 10 patents, he excels in teaching Big Data, Cognitive Robotics, Machine Learning, and more.",
  authors: [{ name: "Dr. Amarjeet Singh Chauhan" }],
  creator: "Dr. Amarjeet Singh Chauhan",
  publisher: "Dayalbagh Educational Institute (DEI), Agra",

  openGraph: {
    title: "Dr. Amarjeet Singh Chauhan - Lecturer & Researcher at DEI Agra",
    description:
      "Discover the research, patents, and academic expertise of Dr. Amarjeet Singh Chauhan, an IoT, AI, and Embedded Systems specialist at Dayalbagh Educational Institute, Agra.",
    url: "https://amarjeetsinghchauhan.com/",
    siteName: "Dr. Amarjeet Singh Chauhan | DEI Agra",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", // Replace with your actual OG image path or full URL
        width: 1200,
        height: 630,
        alt: "Dr. Amarjeet Singh Chauhan - Lecturer and Researcher at DEI Agra",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Amarjeet Singh Chauhan - DEI Agra Lecturer & Researcher",
    description:
      "Explore Dr. Amarjeet Singh Chauhan’s contributions to IoT, AI, drone tech, and computer science education at DEI Agra.",
    images: ["/opengraph-image.png"],
    creator: "@amarjeetmentor", 
  },
};


export default function Home() {
  

  return (
    <>
 <Head>

        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
        <meta name="author" content="Dr. Amarjeet Singh Chauhan" />
        <meta name="creator" content="Dr. Amarjeet Singh Chauhan" />
        <meta name="publisher" content="Dayalbagh Educational Institute" />
         </Head>
      <Hero />
      </>

  )
}
