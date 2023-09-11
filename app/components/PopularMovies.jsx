"use client";

import Image from "next/image";
// import { useState } from "react";
import PlaceholderImage from "../../public/No-Image-Placeholder.svg.png";
import Link from "next/link";

const PopularMovies = () => {
  //   const [popular, setPopular] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   const apiKey = "YOUR_API_KEY";
  //   const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

  //   useEffect(() => {
  //     async function fetchPopularMovies() {
  //       try {
  //         const response = await fetch(apiUrl);
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         const data = await response.json();
  //         setMovies(data.results);
  //         setLoading(false);
  //       } catch (error) {
  //         setError(error);
  //         setLoading(false);
  //       }
  //     }

  //     fetchPopularMovies();
  //   }, [apiUrl]);

  return (
    <section className="border border-white w-full p-10 ">
      <h2 className="text-center text-xl uppercase font-bold pb-10 md:text-2xl">
        Now Playing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 12 }, (_, i) => {
          return (
            <article key={i}>
              <Link href="/movie-details">
                <div className="w-full h-[30rem] flex flex-col ">
                  <Image
                    src={PlaceholderImage}
                    alt="movie-card"
                    width={300}
                    height={300}
                    className="object-cover h-full w-full rounded-lg shadow-lg"
                  />
                </div>
              </Link>

              <div className="text-center mt-4 tracking-tight">
                <h4>Movie title</h4>
                <p>Release Date</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default PopularMovies;
