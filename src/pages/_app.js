import { Poppins } from "next/font/google";

// * Components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import NextNProgress from "nextjs-progressbar";

import "@/styles/globals.css";
import "@/styles/swiper.css";
import Snow from "@/components/Snow";

const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

export default function App({ Component, pageProps }) {
  const snow = () => {
    let animationDelay = "0s";
    let fontSize = "100px";
    let arr = Array.from(
      "Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!"
    );
    return arr.map((el, i) => {
      animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
      fontSize = `${Math.floor(Math.random() * 10) + 10}px`;
      let style = {
        animationDelay,
        fontSize,
      };
      return <Snow key={i} id={i} style={style} />;
    });
  };
  return (
    <div
      className={`${poppins.className} bg-[#292B37] min-h-[100vh] text-white flex flex-col`}
    >
      <div className="App w-full fixed top-0 z-50">{snow()}</div>
      <NextNProgress color="#FFBA08" />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
