import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import PlaceholderImage from "../../public/No-Image-Placeholder.svg.png";
import Image from "next/image";

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import Link from "next/link";

const Slider = ({ movies }) => {
  console.log(movies);

  return (
    <section className="mx-auto min-h-[60vh]  py-10  relative w-full px-2 ">
      <h2 className="text-center text-4xl uppercase font-bold pb-10 ">
        Now Playing
      </h2>
      <div>
        <Swiper
          // install Swiper modules
          modules={[EffectCoverflow, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            380: {
              slidesPerView: 1,
            },
            900: {
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
          {movies.map((movie) => {
            const { poster_path, id } = movie;

            //constructing full url poster path
            const posterUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
            return (
              <SwiperSlide key={id}>
                <Link href="/movie-details">
                  <div className="w-[30rem] h-auto  ">
                    <Image
                      src={posterUrl}
                      alt="movie-card"
                      width={300}
                      height={300}
                      className="object-cover h-full w-full rounded-lg shadow-lg border border-white"
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
