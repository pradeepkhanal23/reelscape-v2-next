"use client";

import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "../../../public/No-Image-Placeholder.svg.png";
import Star from "../../../public/star.png";
import { getAPIEndpointData } from "@/lib/getAPIEndpointData";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import MovieInfo from "@/app/components/MovieInfo";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    // Fetch movie-details
    async function fetchTvDetails() {
      const response = await getAPIEndpointData(`movie/${movieId}`);
      setMovieDetails(response);
    }

    fetchTvDetails();
  }, [movieId]);

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
  } = movieDetails;

  const posterUrl = movieDetails
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : PlaceholderImage;

  const backdropUrl = movieDetails
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : ``;

  return (
    <div>
      <section className=" z-10 flex flex-col w-full h-full gap-10 pt-8 ">
        <div
          className="fixed w-screen h-screen inset-0 bg-red  opacity-10 -z-10 "
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
            className="self-start border-solid border-2 border-yellow-300 px-5 py-2 ml-4 rounded-md hover:scale-[1.04] transition-all"
          >
            Back To Movie
          </Link>
        </div>
        <div>
          <article className="container p-3 mx-auto">
            <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-10">
              <div className="w-auto h-fit md:w-96">
                <Image
                  src={posterUrl}
                  alt="image placeholder"
                  className="object-cover w-full h-full rounded-lg border-2 border-white"
                  width={800}
                  height={800}
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

                <h2>First Air Date: {release_date}</h2>
                <p className="p-1 text-justify">{overview}</p>
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
            href={`${homepage ? homepage : "#"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start border-solid border-2  border-yellow-300 px-5 py-2 ml-4 rounded-md hover:scale-[1.04] transition-all "
          >
            Visit Movie Homepage
          </Link>
        </div>
        <MovieInfo
          status={status}
          budget={budget}
          revenue={revenue}
          runtime={runtime}
          production_companies={production_companies}
        />
      </section>
    </div>
  );
}
