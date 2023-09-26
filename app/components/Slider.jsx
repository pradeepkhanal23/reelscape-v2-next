import PlaceholderImage from "../../public/No-Image-Placeholder.svg.png";
import Image from "next/image";
import Link from "next/link";
import Title from "./Title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Slider = ({ sliderMovies }) => {
  return (
    <>
      <section className="mx-auto min-h-[60vh] py-10 relative w-full p-5 ">
        {/* <div
          className="absolute inset-0 w-full h-full opacity-50 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.5) 100%)",
          }}
        ></div> */}
        <Title description="Now Playing" />
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
            {sliderMovies &&
              sliderMovies.map((movie) => {
                const { poster_path, id } = movie;

                //constructing full url poster path

                const imageUrl = movie
                  ? `https://image.tmdb.org/t/p/original${poster_path}`
                  : PlaceholderImage;
                return (
                  <SwiperSlide key={id} className="mb-5 ">
                    <Link href={`/movie-details/${id}`}>
                      <div className="w-auto h-fit mx-auto  ">
                        <Image
                          src={imageUrl}
                          alt="movie-card"
                          width={800}
                          height={800}
                          priority
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
    </>
  );
};
export default Slider;
