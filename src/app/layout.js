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

export const metadata = {
  title: "Amarjeet Singh Chauhan - Lecturer | Physics & CS | DEI, Agra",
  description:
    "Dr. Amarjeet Singh Chauhan is a highly respected Lecturer in Physics and Computer Science at Dayalbagh Educational Institute, Agra. With a Ph.D. in Computer Science and prior experience as a Systems Engineer at TCS, he brings academic excellence and industry expertise.",
  keywords: [
    "Amarjeet Singh Chauhan",
    "Dr. Amarjeet Chauhan",
    "Lecturer at DEI Agra",
    "Physics Lecturer",
    "Computer Science DEI",
    "Dayalbagh Educational Institute",
    "Amarjeet Singh DEI",
    "DEI Agra faculty",
    "M.Tech PhD Lecturer",
  ],
  authors: [{ name: "Amarjeet Singh Chauhan" }],
  creator: "Amarjeet Singh Chauhan",
 
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
    
       <meta name="google-site-verification" content="q74cqb8_1rbbIDl01X6TFZBxOvbAxBpn9_6ueKfCfPM"/>
     
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased `}
      >
          <Header />
          <main>{children}</main>
      </body>
    </html>
  );
}
