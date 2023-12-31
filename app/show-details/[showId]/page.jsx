"use client";

import TvInfo from "../../components/TvInfo";
import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "../../../public/No-Image-Placeholder.png";
import Star from "../../../public/star.png";
import { getAPIEndpointData } from "@/lib/getAPIEndpointData";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Modal from "@/app/components/Modal";

export default function TvDetails() {
  const [tvDetails, setTvDetails] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { showId } = useParams();

  useEffect(() => {
    // Fetch tv-details
    async function fetchTvDetails() {
      const response = await getAPIEndpointData(`tv/${showId}`);

      setTvDetails(response);
    }

    fetchTvDetails();
  }, [showId]);

  const {
    backdrop_path,
    poster_path,
    name,
    overview,
    first_air_date,
    vote_average,
    genres,
    homepage,
    number_of_episodes,
    status,
    last_episode_to_air,
    production_companies,
  } = tvDetails;

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : PlaceholderImage;

  const backdropUrl = tvDetails?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
    : "";

  return (
    <div>
      {tvDetails && (
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
            <Link href="/shows" className="self-start cta-btn">
              Back To TV Shows
            </Link>
          </div>
          <div>
            <article className=" p-3 mx-auto">
              <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-10">
                <div className="w-auto h-fit md:w-96">
                  <Image
                    src={imageUrl}
                    alt="image placeholder"
                    className="object-cover w-full h-full rounded-lg border-2 border-white"
                    width={800}
                    height={800}
                    priority
                  />
                </div>
                <div className="flex flex-col items-center w-full gap-2 lg:w-1/2 lg:items-start">
                  <h1 className="font-bold tracking-wider text-center uppercase">
                    {name}
                  </h1>
                  <div className="flex items-center mb-2">
                    <Image src={Star} alt="star" height={20} width={20} />
                    <span className="ml-2">
                      {vote_average?.toFixed(1)} / 10
                    </span>
                  </div>

                  <h2>First Air Date: {first_air_date}</h2>
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
              href={homepage || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start cta-btn "
              onClick={(e) => {
                if (!homepage) {
                  e.preventDefault();
                  setModalOpen(true);
                }
              }}
            >
              Visit Tv Homepage
            </Link>
          </div>
          <TvInfo
            status={status}
            number_of_episodes={number_of_episodes}
            last_episode_to_air={last_episode_to_air}
            production_companies={production_companies}
          />
        </section>
      )}
      {modalOpen && (
        <>
          <Modal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            message="The homepage for this tv show is currently not available."
            title="Homepage Not Available"
          />
        </>
      )}
    </div>
  );
}
