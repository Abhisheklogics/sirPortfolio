import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// app/layout.tsx

export const metadata = {
  title: {
    default: "Amarjeet Singh Chauhan - DEI Agra",
    template: "%s | Amarjeet Singh Chauhan",
  },
  description: "Official website of Dr. Amarjeet Singh Chauhan...",
  icons: {
    icon: "/favicon.ico",
  },
  robots: "index, follow",
  verification: {
    google: "q74cqb8_1rbbIDl01X6TFZBxOvbAxBpn9_6ueKfCfPM",
  },
  openGraph: {
    title: "Amarjeet Singh Chauhan - Lecturer at DEI Agra",
    description: "Meet Dr. Amarjeet Singh Chauhan...",
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
    description: "Explore the academic profile of Dr. Amarjeet...",
    images: ["/opengraph-image.png"],
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} antialiased`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
