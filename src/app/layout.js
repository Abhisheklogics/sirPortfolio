import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amarjeet Singh Chauhan - Lecturer at Dayalbagh Educational Institute, Agra",
  description: "Amarjeet Singh Chauhan is a dedicated Lecturer in Physics and Computer Science at Dayalbagh Educational Institute, Agra, with an M.Tech and Ph.D. in Computer Science. Former Systems Engineer at TCS.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
          <Header />
          <main>{children}</main>
      </body>
    </html>
  );
}
