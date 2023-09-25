import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "../../././public/No-Image-Placeholder.svg.png";

const DisplayOutput = ({ results, category }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-5 max-w-[1500px] mx-auto">
      {results &&
        results.map((item) => {
          const { poster_path, id } = item;
          const posterUrl = item
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : PlaceholderImage;

          const releaseDate =
            category === "movie" ? item.release_date : item.first_air_date;

          const titleKey = category === "movie" ? "title" : "name";

          return (
            <article key={id} className="p-3">
              <Link href={`/${category}-details/${id}`}>
                <div className="max-w-lg h-84 mx-auto flex flex-col ">
                  <Image
                    src={posterUrl}
                    alt="show-card"
                    width={300}
                    height={300}
                    className="object-cover h-full w-full rounded-lg shadow-lg border-2 border-white hover:scale-[1.03] transition-all "
                    priority
                  />
                </div>
              </Link>

              <div className="text-center mt-4 ">
                <h4 className="uppercase text-yellow-300 tracking-wider font-bold">
                  {item[titleKey]}
                </h4>
                <p className="text-gray-200">{releaseDate}</p>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default DisplayOutput;
