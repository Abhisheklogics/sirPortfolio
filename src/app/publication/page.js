

import { Meteors } from "@/components/ui/meteors";
import CardSpotlightPatents from "@/components/NewCom/Petents";


// app/patents/page.tsx or layout.tsx (if using app directory structure)

export const metadata = {
  title: "Patents by Dr. Amarjeet Singh Chauhan | IoT, AI & VTOL Innovations",
  description:
    "Explore groundbreaking patents by Dr. Amarjeet Singh Chauhan, including smart air quality monitoring systems using IoT and AI, and VTOL drone technologies for advanced UAV solutions.",
  keywords: [
    "Amarjeet Singh Chauhan patents",
    "VTOL drone patent India",
    "IoT air monitoring patent",
    "AI UAV patent",
    "Smart drone inventions",
    "DEI Agra patents",
    "High-speed VTOL UAV",
  ],
  authors: [{ name: "Dr. Amarjeet Singh Chauhan" }],
  creator: "Dr. Amarjeet Singh Chauhan",
  publisher: "Dayalbagh Educational Institute",
  openGraph: {
    title: "Patents by Dr. Amarjeet Singh Chauhan | IoT, AI & UAV Innovations",
    description:
      "A collection of patents in IoT, AI, and drone technology by Dr. Amarjeet Singh Chauhan from DEI Agra. Explore smart UAV and air monitoring systems.",
    url: "https://yourdomain.com/patents",
    siteName: "Amarjeet Singh Chauhan - DEI Agra",
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen py-20 mt-[-40px] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Meteors number={40} />
      <section className="container mx-auto px-6 md:px-12">
        <h1
          className="text-2xl sm:text-4xl font-bold text-white tracking-wide text-center"
          data-aos="fade-down"
        >
          Patents by Dr. Amarjeet Singh Chauhan
        </h1>

        {/* Descriptive paragraph (optional but helpful for SEO) */}
        <p className="text-center mt-4 text-sm text-gray-300 max-w-3xl mx-auto">
          Discover cutting-edge innovations in IoT, AI, and UAVs including VTOL drone technology and smart environmental monitoring by Dr. Amarjeet Singh Chauhan.
        </p>

        {/* Patents Component */}
        <CardSpotlightPatents />
      </section>
    </main>
  );
}

