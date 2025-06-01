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




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable} antialiased`}>
    
        <meta name="google-site-verification" content="q74cqb8_1rbbIDl01X6TFZBxOvbAxBpn9_6ueKfCfPM" />
 <link rel="shortcut icon" href="/favicon.ico" />
      
       <meta name="robots" content="index, follow" />


      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
