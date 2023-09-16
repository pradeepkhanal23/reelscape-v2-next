"use client";

import PlaceholderImage from "../../public/No-Image-Placeholder.svg.png";
import Image from "next/image";
import Link from "next/link";
import useFetch from "../utils/useFetch";

const Shows = () => {
  const { data } = useFetch("tv/popular");
  const popularShows = data.results;

  return (
    <>
      <section className=" w-full p-10 ">
        <h2 className="text-center text-4xl uppercase font-bold pb-10 ">
          Popular TV Shows
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-[1500px] mx-auto">
          {popularShows &&
            popularShows.map((show) => {
              const { name, id, first_air_date, poster_path } = show;
              const posterUrl = show
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : PlaceholderImage;

              return (
                <article key={id} className="p-3">
                  <Link href={`show-details/${id}`}>
                    <div className="max-w-lg h-84 mx-auto flex flex-col gap-2 ">
                      <Image
                        src={posterUrl}
                        alt={name}
                        width={300}
                        height={300}
                        className="object-cover h-full w-full rounded-lg shadow-lg border-2 border-white"
                      />
                    </div>
                  </Link>
                  <div className="text-center mt-2 tracking-tight uppercase font-bold">
                    <h4 className="uppercase text-yellow-300">{name}</h4>
                    <p className="text-gray-200">{first_air_date}</p>
                  </div>
                </article>
              );
            })}
        </div>
      </section>
    </>
  );
};
export default Shows;
