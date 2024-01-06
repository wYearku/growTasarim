// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  FreeMode,
  Thumbs,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import Image from "next/image";
import { useState } from "react";
import Chip from "./Chip";

const DetailPage = ({
  title,
  content,
  subContent,
  thumbnail,
  thumbnailBg,
  images,
  populer,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [realIndex, setRealIndex] = useState(0)

  return (
    <div className="lg:w-[80%] mx-auto py-10 bg-[#1E2029] px-2 lg:px-16">
      <h3 className="text-2xl mb-5 font-bold flex justify-between items-center gap-3">
        {title}
        {populer ? <Chip text="popüler" /> : null}
      </h3>
      <div className="grid grid-cols-5 gap-5 lg:gap-10 select-none">
        <div className="col-span-5 lg:col-span-3">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            onSlideChange={(e) => setRealIndex(e.realIndex)}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Pagination, Navigation, Thumbs, Autoplay]}
            loop={true}
            className="mySwiper2"
          >
            {images?.map((image, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-[22rem]">
                  <Image
                    width={1000000}
                    height={1000000}
                    className="w-full h-full object-cover"
                    src={image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={7}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {images?.map((image, i) => (
              <SwiperSlide key={i}>
                <div className={`w-full h-[3rem]`}>
                  <Image
                    style={{ border: realIndex === i ? "1px solid #FFBA08" : null }}
                    width={1000000}
                    height={1000000}
                    className="w-full h-full object-cover cursor-pointer"
                    src={image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-5 relative lg:col-span-2 flex flex-col gap-5">
          <Image
            src={thumbnailBg}
            width={1000}
            height={1000}
            className="w-full h-48 object-cover object-top"
          />
          <Image
            src={thumbnail}
            width={1000}
            height={1000}
            alt="thumbnail"
            className="w-28 h-28 absolute top-28 left-10 object-cover shadow-2xl"
          />
          <p className="indent-5 mt-5 text-justify">{content}</p>
          <p className="text-justify uppercase">{subContent}</p>
          <a
            href="https://google.com"
            target="_blank"
            className="mt-auto ml-auto"
          >
            <button className="bg-[#FFBA08] px-7 py-1.5 hover:bg-[#d59d0d] transition-colors text-lg rounded-md text-white">
              Satın Al
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
