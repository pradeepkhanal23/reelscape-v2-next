"use client";

import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "../../../public/No-Image-Placeholder.svg.png";
import MovieInfo from "../../components/MovieInfo";
import useFetch from "../../../app/utils/useFetch";
import { useParams } from "next/navigation";
import Star from "../../../public/star.png";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { data } = useFetch(`movie/${movieId}`);

  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    genres,
    homepage,
    budget,
    revenue,
    runtime,
    status,
    production_companies,
  } = data;

  const posterUrl = data
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : PlaceholderImage;

  const backdropUrl = data
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : ``;

  return (
    <section className="relative  flex flex-col w-full  h-full gap-10 pt-8 ">
      <div
        className="absolute inset-0 bg-red h-full w-full opacity-10 -z-10 "
        style={{
          backgroundImage: `url(${backdropUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div>
        <Link
          href="/"
          className="self-start border-solid border-2 border-yellow-300 px-5 py-2 ml-4 rounded-md hover:scale-[1.04] transition duration-150 hover:ease-in"
        >
          Back To Movies
        </Link>
      </div>
      <div>
        <article className="p-3 mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-10 p-5  ">
            <div className="w-auto h-fit md:w-96">
              <Image
                src={posterUrl}
                alt="image placeholder"
                className="object-cover w-full h-full rounded-lg border-2 border-white"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex flex-col items-center w-full gap-2 lg:w-1/2 lg:items-start">
              <h1 className="font-bold tracking-wider text-center uppercase">
                {title}
              </h1>
              <div className="flex items-center mb-2">
                <Image src={Star} alt="star" height={20} width={20} />
                <span className="ml-2">{vote_average?.toFixed(1)} / 10</span>
              </div>

              <h2>Release Date: {release_date}</h2>
              <p className="px-6 sm:p-1 text-justify">{overview}</p>
              <h2 className="font-bold">Genres</h2>
              {genres &&
                genres.map((genre, i) => {
                  return <h3 key={i}>{genre.name}</h3>;
                })}
            </div>
          </div>
        </article>
      </div>

      <div>
        <Link
          // onClick={`${homepage ? "" : alert("No homepage available.")};`}
          href={`${homepage ? homepage : "#"}`}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start border-solid border-2 border-yellow-300 px-5 py-2 ml-4 rounded-md hover:scale-[1.04] transition duration-150 hover:ease-in"
        >
          Visit Movie Homepage
        </Link>
      </div>
      <MovieInfo
        budget={budget}
        revenue={revenue}
        runtime={runtime}
        status={status}
        production_companies={production_companies}
      />
    </section>
  );
};
export default MovieDetails;
