import SearchBar from "../components/SearchBar";
import Link from "next/link";
import Image from "next/image";
import PlaceholderImage from "../../public/No-Image-Placeholder.svg.png";
import PaginationButtons from "../components/PaginationButtons";

const SearchPage = () => {
  return (
    <>
      <SearchBar />
      <section className=" w-full p-10 ">
        <h2 className="text-center text-xl uppercase font-bold pb-10 md:text-2xl">
          20 of 60 results for movie spiderman
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-[1500px] mx-auto">
          {Array.from({ length: 8 }, (_, i) => {
            return (
              <article key={i}>
                <Link href="/tv-details">
                  <div className="max-w-lg h-84 mx-auto  ">
                    <Image
                      src={PlaceholderImage}
                      alt="movie-card"
                      width={300}
                      height={300}
                      className="object-cover h-full w-full rounded-lg shadow-lg"
                    />
                  </div>
                </Link>
                <div className="text-center mt-2 tracking-tight uppercase font-bold">
                  <h4 className="uppercase text-yellow-300">Tv title</h4>
                  <p>Air Date</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <PaginationButtons />
    </>
  );
};
export default SearchPage;
