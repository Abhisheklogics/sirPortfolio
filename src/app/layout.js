import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Amarjeet Singh Chauhan | DEI Agra | Lecturer - Physics & Computer Science",
  description:
    "Official profile of Dr. Amarjeet Singh Chauhan, Lecturer in Physics and Computer Science at Dayalbagh Educational Institute (DEI), Agra. Ph.D. in Computer Science, Ex-TCS Systems Engineer, expert in teaching, research, and innovation.",
  keywords: [
    "Dr. Amarjeet Singh Chauhan",
    "Amarjeet Singh DEI",
    "Physics Lecturer DEI",
    "Computer Science DEI",
    "Dayalbagh Educational Institute Faculty",
    "Top Lecturer in Agra",
    "PhD Computer Science Lecturer",
    "DEI Agra Amarjeet",
    "Systems Engineer TCS turned Lecturer",
    "Amarjeet Chauhan Physics CS Educator"
  ],
  authors: [{ name: "Dr. Amarjeet Singh Chauhan" }],
  creator: "Dr. Amarjeet Singh Chauhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} antialiased`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content="Dr. Amarjeet Singh Chauhan" />
        <meta name="creator" content="Dr. Amarjeet Singh Chauhan" />
        <meta name="publisher" content="Dayalbagh Educational Institute" />
        <meta name="google-site-verification" content="q74cqb8_1rbbIDl01X6TFZBxOvbAxBpn9_6ueKfCfPM" />
 <link rel="shortcut icon" href="/favicon.ico" />
      
       

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Dr. Amarjeet Singh Chauhan",
              url: "https://yourdomain.com",
              image: "https://yourdomain.com/images/amarjeet.jpg",
              jobTitle: "Lecturer in Physics and Computer Science",
              worksFor: {
                "@type": "Organization",
                name: "Dayalbagh Educational Institute",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Dayalbagh Educational Institute",
              },
              sameAs: [
                "https://www.linkedin.com/in/amarjeetchauhan",
                "https://scholar.google.com/citations?user=xyz",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
