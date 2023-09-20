import PlaceholderImage from "../../public/No-Image-Placeholder.svg.png";
import Image from "next/image";
import useFetch from "../utils/useFetch";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Slider = () => {
  const { data } = useFetch("movie/now_playing");
  const nowPlaying = data.results;

  return (
    <section className="mx-auto min-h-[60vh] py-10  relative w-full px-3">
      <h2 className="text-center text-4xl uppercase  font-bold pb-10 ">
        <span className="text-yellow-300">Now</span> Playing
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

            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
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
          {nowPlaying &&
            nowPlaying.map((movie) => {
              const { poster_path, id } = movie;

              //constructing full url poster path
              const posterUrl = movie
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : PlaceholderImage;
              return (
                <SwiperSlide key={id} className="mb-5 ">
                  <Link href={`/movie-details/${id}`}>
                    <div className="w-auto h-fit mx-auto  ">
                      <Image
                        src={posterUrl}
                        alt="movie-card"
                        width={300}
                        height={300}
                        className="object-cover h-full w-full rounded-lg shadow-lg border-2 border-white "
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
