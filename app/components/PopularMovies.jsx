import Title from "./Title";
import Image from "next/image";
import PlaceholderImage from "../../public/No-Image-Placeholder.svg.png";
import Link from "next/link";

export const metadata = {
  title: "Reelscape Homepage",
  description: "Movie guide and rating website",
};

const PopularMovies = ({ popularMovies }) => {
  return (
    <>
      <section className=" w-full h-full p-10">
        <Title description="Popular Movies" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-5 max-w-[1500px] mx-auto">
          {popularMovies &&
            popularMovies.map((movie) => {
              const { poster_path, id, title, release_date } = movie;
              const posterUrl = movie
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : PlaceholderImage;
              return (
                <article key={id} className="p-3">
                  <Link href={`/movie-details/${id}`}>
                    <div className="max-w-lg h-84 mx-auto flex flex-col ">
                      <Image
                        src={posterUrl}
                        alt="movie-card"
                        width={300}
                        height={300}
                        className="object-cover h-full w-full rounded-lg shadow-lg border-2 border-white"
                        priority
                      />
                    </div>
                  </Link>

                  <div className="text-center mt-4 tracking-tight">
                    <h4 className="uppercase text-yellow-300">{title}</h4>
                    <p className="text-gray-200">{release_date}</p>
                  </div>
                </article>
              );
            })}
        </div>
      </section>
    </>
  );
};
export default PopularMovies;
