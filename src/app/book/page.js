

import { CardSpotlightPublications } from "@/components/NewCom/Publication";
import {CardSpotlightBooks } from "@/components/NewCom/Publication";

 


export const metadata = {
  title: "Books & Publications by Dr. Amarjeet Singh Chauhan | IoT, AI, Smart Tech",
  description:
    "Explore scholarly books, chapters, and journal publications authored by Dr. Amarjeet Singh Chauhan in IoT, AI, Smart Agriculture, and Drone Technology. Published with CRC Press, Springer Nature & IEEE.",
  
  authors: [{ name: "Dr. Amarjeet Singh Chauhan" }],
  creator: "Dr. Amarjeet Singh Chauhan",
  publisher: "Dayalbagh Educational Institute",
 
  openGraph: {
   title: "Books & Publications by Dr. Amarjeet Singh Chauhan | IoT, AI & Smart Tech",
    description:
      "Access impactful books, chapters, and research publications in IoT, AI, Smart Agriculture, and Industry 5.0 by Dr. Amarjeet Singh Chauhan. Published under IEEE, CRC Press, and Springer.",
    url: "https://amarjeetsinghchauhan.com/", 
  type: "article",
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




export default function BooksPage() {
  

  return (
    <main className="space-y-16 px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <CardSpotlightBooks />
      </section>
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">📄 Research Publications</h2>
        <CardSpotlightPublications />
      </section>
    </main>
  );
}

