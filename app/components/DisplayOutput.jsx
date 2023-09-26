import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "../../public/No-Image-Placeholder.png";

const DisplayItem = ({ item, category }) => {
  const { poster_path, id } = item;

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : "https://fakeimg.pl/600x900/dddddd/8f8b8b?text=Reelscape";

  const releaseDate =
    category === "movie" ? item.release_date : item.first_air_date;

  const titleKey = category === "movie" ? "title" : "name";

  return (
    <article key={id} className="p-3">
      <Link href={`/${category}-details/${id}`}>
        <div className="max-w-lg h-fit mx-auto flex flex-col">
          <Image
            src={imageUrl}
            alt={category === "movie" ? item.title : item.name}
            width={800}
            height={1200}
            className="object-cover h-full w-full rounded-lg shadow-lg border-2 border-white hover:scale-[1.03] transition-all"
          />
        </div>
      </Link>

      <div className="text-center mt-4">
        <h4 className="uppercase text-yellow-300 tracking-wider font-bold">
          {item[titleKey] || "No Title Available"}
        </h4>
        <p className="text-gray-200">{releaseDate || "Date Not Available"}</p>
      </div>
    </article>
  );
};

const DisplayOutput = ({ results, category }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 max-w-[1600px] mx-auto">
      {results &&
        results.map((item) => (
          <DisplayItem key={item.id} item={item} category={category} />
        ))}
    </div>
  );
};

export default DisplayOutput;
