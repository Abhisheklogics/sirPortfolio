import { CardSpotlightPublications } from "@/components/NewCom/Publication";
import { CardSpotlightBooks } from "@/components/NewCom/Publication";

export const metadata = {
  title: "Publications & Book Chapters by Dr. Amarjeet Singh Chauhan | IoT, AI, Precision Agriculture, Drones",
  description:
    "Explore Dr. Amarjeet Singh Chauhan's research contributions on Industry 4.0 & 5.0, IoT, AI, UAV swarm robotics, precision agriculture, smart farming, and sustainable tech.",
  authors: [{ name: "Dr. Amarjeet Singh Chauhan" }],
  creator: "Dr. Amarjeet Singh Chauhan",
  publisher: "Dayalbagh Educational Institute",
 
  openGraph: {
    title: "Research Publications & Book Chapters by Dr. Amarjeet Singh Chauhan | IoT, AI & Drones",
    description:
      "Discover peer-reviewed publications, book chapters, and upcoming books by Dr. Amarjeet Singh Chauhan on IoT, AI, drone tech, smart agriculture, and sustainable environmental solutions.",
    url: "https://www.amarjeetsinghchauhan.com/book",
    siteName: "Amarjeet Singh Chauhan - DEI Agra",
    type: "article",
    images: [
      {
        url: "https://ik.imagekit.io/vtbtnuxcb/Website/IMG_20250130_190120.jpg?updatedAt=1748898867298",
        width: 1200,
        height: 630,
        alt: "Dr. Amarjeet Singh Chauhan - Research Publications and Books",
      },
    ],
  },
};

export default function BooksPage() {
  return (
    <main className="space-y-16 bg-white px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <CardSpotlightBooks />
      </section>
      <section>
        
        <CardSpotlightPublications />
      </section>
    </main>
  );
}
