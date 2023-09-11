import PlaceholderImage from "../../public/No-Image-Placeholder.svg.png";
import Image from "next/image";
import Link from "next/link";

const Shows = () => {
  return (
    <>
      <section className="border border-white w-full p-10 ">
        <h2 className="text-center text-xl uppercase font-bold pb-10 md:text-2xl">
          Popular TV Shows
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {Array.from({ length: 12 }, (_, i) => {
            return (
              <article key={i}>
                <Link href="/tv-details">
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
                <div className="text-center mt-2 tracking-tight">
                  <h4>Tv title</h4>
                  <p>Air Date</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Shows;
