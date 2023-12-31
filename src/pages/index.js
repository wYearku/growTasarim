import Main from "@/components/Main";
import Thumbnails from "@/components/Thumbnails";
import SpecialDesigns from "@/components/SpecialDesigns";
import About from "@/components/About";
import FeedBack from "@/components/FeedBack";
import Banners from "@/components/Banners";

export default function Home() {
  return (
    <>
      <Main />
      <Thumbnails />
      <Banners />
      {/* <SpecialDesigns /> */}
      {/* <About /> */}
      <FeedBack />
    </>
  );
}
