import Main from "@/components/Main";
import Thumbnails from "@/components/Thumbnails";
import SpecialDesigns from "@/components/SpecialDesigns";
import About from "@/components/About";
import FeedBack from "@/components/FeedBack";
import Banners from "@/components/Banners";
import SocialMedia from "@/components/SocialMedia";
import OpenAnimation from "@/components/OpenAnimation";

export default function Home() {
  return (
    <>
      <Main />
      <Thumbnails />
      <Banners />
      {/* <SpecialDesigns /> */}
      {/* <About /> */}
      <FeedBack />
      <SocialMedia />
      <OpenAnimation/>
    </>
  );
}
