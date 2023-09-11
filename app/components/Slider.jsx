import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import PlaceholderImage from "../../public/No-Image-Placeholder.svg.png";
import Image from "next/image";
// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import Link from "next/link";

const Slider = () => {
  return (
    <section className="mx-auto min-h-[60vh]  py-10  relative w-full px-2 border border-white ">
      <h2 className="text-center text-xl uppercase font-bold pb-10 md:text-2xl">
        Now Playing
      </h2>
      <div>
        <Swiper
          // install Swiper modules
          modules={[EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            380: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1.8,
            slideShadows: false,
          }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {Array.from({ length: 12 }, (_, i) => {
            return (
              <SwiperSlide key={i}>
                <Link href="/movie-details">
                  <div className="w-full h-[30rem]  ">
                    <Image
                      src={PlaceholderImage}
                      alt="movie-card"
                      width={300}
                      height={300}
                      className="object-cover h-full w-full rounded-lg shadow-lg"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default Slider;
