// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Main = () => {
  return (
    <div className="h-[100vh] bg-[url('/img/grow-bg.jpg')] bg-cover bg-center flex justify-center items-center px-2">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        className="w-[350px] md:w-[500px] lg:w-[1000px]"
      >
        <SwiperSlide>
          <div className="w-full h-[10rem] md:h-[15rem] lg:h-[30rem]">
            <img
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              src={"/img/slide1.jpg"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[10rem] md:h-[15rem] lg:h-[30rem]">
            <img
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              src={"/img/slide2.jpg"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[10rem] md:h-[15rem] lg:h-[30rem]">
            <img
              className="w-full h-full object-cover border-4 border-white rounded-3xl"
              src={"/img/slide3.jpg"}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Main;
