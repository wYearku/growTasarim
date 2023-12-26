import { Poppins } from "next/font/google";

// * Components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import NextNProgress from 'nextjs-progressbar';

import "@/styles/globals.css";
import '@/styles/swiper.css';

const poppins = Poppins({ subsets: ["devanagari"] , weight: '400'});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.className} bg-[#292B37] min-h-[100vh] text-white flex flex-col`}>
      <NextNProgress color="#FFBA08" />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
