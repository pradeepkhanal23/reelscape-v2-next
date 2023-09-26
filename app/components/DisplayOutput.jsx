import Link from "next/link";
import Image from "next/image";

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
            className="movie-card"
          />
        </div>
      </Link>

      <div className="text-center mt-4">
        <h4 className="title text-primary">
          {item[titleKey] || "No Title Available"}
        </h4>
        <p className="text-secondary font-bold">
          {releaseDate || "Date Not Available"}
        </p>
      </div>
    </article>
  );
};

const DisplayOutput = ({ results, category }) => {
  return (
    <div className="container">
      {results &&
        results.map((item) => (
          <DisplayItem key={item.id} item={item} category={category} />
        ))}
    </div>
  );
};

export default DisplayOutput;
