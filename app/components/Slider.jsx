import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <section className="  mx-auto min-h-[60vh]  py-10 my-10 relative w-full px-2">
      <h2 className="text-center text-xl uppercase font-bold pb-10 md:text-4xl">
        Now Playing
      </h2>
      <div>
        <Swiper
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-right": "auto",
            "--swiper-pagination-left": "auto",
            "--swiper-pagination-top": "90%",
            "--swiper-pagination-bottom": "0px",
          }}
          // install Swiper modules
          modules={[EffectCoverflow, Autoplay, Pagination]}
          autoHeight={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={100}
          slidesPerView={4}
          loop={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1.8,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="border border-red-300 w-72 h-72 flex items-center justify-center p-10">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-red-300 w-72 h-72 flex items-center justify-center">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-red-300 w-72 h-72 flex items-center justify-center">
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-red-300 w-72 h-72 flex items-center justify-center">
              Slide 4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-red-300 w-72 h-72 flex items-center justify-center">
              Slide 5
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-red-300 w-72 h-72 flex items-center justify-center">
              Slide 6
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-red-300 w-72 h-72 flex items-center justify-center">
              Slide 7
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-red-300 w-72 h-72 flex items-center justify-center">
              Slide 8
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-red-300 w-72 h-72 flex items-center justify-center">
              Slide 9
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-red-300 w-72 h-72 flex items-center justify-center">
              Slide 10
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Slider;
