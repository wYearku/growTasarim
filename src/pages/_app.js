import { Poppins } from "next/font/google";

// * Components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import NextNProgress from "nextjs-progressbar";

import "@/styles/globals.css";
import "@/styles/swiper.css";

import Snowfall from 'react-snowfall'

const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${poppins.className} bg-[#292B37] min-h-[100vh] text-white flex flex-col`}
    >
      <Snowfall snowflakeCount={10000} speed={[0.5, 1, 1.5, 2]} style={{ position: 'fixed', top: 0, zIndex: '9999'}}/>
      <NextNProgress color="#FFBA08" />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
