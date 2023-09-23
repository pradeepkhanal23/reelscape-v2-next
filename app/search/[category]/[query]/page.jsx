"use client";

import SearchBar from "../../../components/SearchBar";
import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "../../../../public/No-Image-Placeholder.svg.png";
import PaginationButtons from "../../../components/PaginationButtons";
import { useParams } from "next/navigation";

import useSearchFetch from "@/app/utils/useSearchFetch";

const SearchPage = () => {
  const { category, query } = useParams();

  function removePercent20(string) {
    return string.replace(/%20/g, " ");
  }

  const searchedData = useSearchFetch(category, removePercent20(query));
  const { page, results, total_pages, total_results } = searchedData.data;

  console.log(searchedData);
  console.log(results);

  if (category === "tv") {
    return (
      <>
        <SearchBar />
        <section className=" w-full p-10 ">
          <h2 className="text-center text-xl uppercase font-bold pb-10 md:text-2xl">
            <q className="text-4xl text-yellow-300">
              {``} {results?.length} of {total_results} results for {category}
              {` `}
              {removePercent20(query)}
              {` `}
            </q>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-[1500px] mx-auto">
            {results &&
              results.map((item) => {
                const { name, id, first_air_date, poster_path } = item;

                const posterUrl = movie
                  ? `https://image.tmdb.org/t/p/original${poster_path}`
                  : PlaceholderImage;
                return (
                  <article key={id}>
                    <Link href={`/show-details/${id}`}>
                      <div className="max-w-lg h-84 mx-auto flex flex-col ">
                        <Image
                          src={posterUrl}
                          alt="movie-card"
                          width={300}
                          height={300}
                          className="object-cover h-full w-full rounded-lg shadow-lg border-2 border-white"
                        />
                      </div>
                    </Link>
                    <div className="text-center mt-2 tracking-tight uppercase font-bold">
                      <h4 className="uppercase text-yellow-300">{name}</h4>
                      <p>{first_air_date}</p>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
        <PaginationButtons page={page} total_pages={total_pages} />
      </>
    );
  }

  return (
    <>
      <SearchBar />
      <section className=" w-full p-10 ">
        <h2 className="text-center text-xl uppercase font-bold pb-10 md:text-2xl">
          <q className="text-4xl text-yellow-300">
            {``} {results?.length} of {total_results} results for {category}
            {` `}
            {removePercent20(query)}
            {` `}
          </q>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-[1500px] mx-auto">
          {results &&
            results.map((item) => {
              const { id, poster_path, title, release_date } = item;

              const posterUrl = movie
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : PlaceholderImage;
              return (
                <article key={id}>
                  <Link href={`/movie-details/${id}`}>
                    <div className="max-w-lg h-84 mx-auto flex flex-col ">
                      <Image
                        src={posterUrl}
                        alt="movie-card"
                        width={300}
                        height={300}
                        className="object-cover h-full w-full rounded-lg shadow-lg border-2 border-white"
                      />
                    </div>
                  </Link>
                  <div className="text-center mt-2 tracking-tight uppercase font-bold">
                    <h4 className="uppercase text-yellow-300">{title}</h4>
                    <p>{release_date}</p>
                  </div>
                </article>
              );
            })}
        </div>
      </section>
      <PaginationButtons page={page} total_pages={total_pages} />
    </>
  );
};
export default SearchPage;
