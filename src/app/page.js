

import Hero from '@/components/Hero'
import Head from "next/head";
export const metadata = {
  title: "Amarjeet Singh Chauhan - Lecturer at DEI Agra | Physics & Computer Science",
  description:
    "Dr. Amarjeet Singh Chauhan is a distinguished Lecturer in the Department of Physics and Computer Science at Dayalbagh Educational Institute (DEI), Agra. With a Ph.D. and M.Tech in Computer Science from DEI, and industry experience as a Systems Engineer at TCS, he combines academic excellence with real-world expertise.",
  authors: [{ name: "Dr. Amarjeet Singh Chauhan" }],
  creator: "Dr. Amarjeet Singh Chauhan",
  publisher: "Dayalbagh Educational Institute",

  openGraph: {
    title: "Amarjeet Singh Chauhan - Lecturer at DEI Agra | Physics & Computer Science",
    description:
      "Meet Dr. Amarjeet Singh Chauhan, expert in IoT, AI, and Physics at DEI Agra. Explore his research, patents, and teaching excellence.",
    url: "https://amarjeetsinghchauhan.com/", 
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Dr. Amarjeet Singh Chauhan - DEI Agra",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Amarjeet Singh Chauhan - DEI Agra",
    description:
      "Explore the academic and research contributions of Dr. Amarjeet Singh Chauhan at DEI Agra.",
    images: ["/opengraph-image.png"],
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
