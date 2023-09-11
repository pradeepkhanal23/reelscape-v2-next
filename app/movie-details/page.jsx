import Image from "next/image";
import Link from "next/link";
import PlaceholderImage from "../../public/No-Image-Placeholder.svg.png";
import MovieInfo from "../components/MovieInfo";

const MovieDetails = () => {
  return (
    <section className="relative z-10 flex flex-col w-full h-full gap-10 pt-8 text-white bg-slate-800">
      <div>
        <Link
          href="/"
          className="self-start border-solid border-2 border-yellow-300 px-5 py-2 ml-4 rounded-md hover:scale-[1.04] transition duration-150 hover:ease-in"
        >
          Back To Movies
        </Link>
      </div>
      <div>
        <article className="container p-3 mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-10">
            <div className="w-full lg:w-1/2">
              <Image
                src={PlaceholderImage}
                alt="image placeholder"
                className="object-cover w-full h-full"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col items-center w-full gap-2 lg:w-1/2 lg:items-start">
              <h1 className="font-bold tracking-wider text-center uppercase">
                Movie Title
              </h1>

              <h2>Release Date: XX/XX/XXXX</h2>
              <p className="p-1 text-justify">
                For the geeky, for the nerdy, for the true cinema believers,
                this one’s for you. A mass of quite interesting factoids abut
                your favourite flicks that you can pass off in pubs up and down
                the land to either the choruses of cheers, hails of boos or the
                polite nod. The number of facts? Why, it’s a third of Frank
                Miller’s 300, a dozen mph short of the speed needed for DeLorean
                time travel and 8.3 times the number of Angry Men.
              </p>
              <h2 className="font-bold">Genres</h2>
              <h3>Genre 1</h3>
              <h3>Genre 2</h3>
              <h3>Genre 3</h3>
            </div>
          </div>
        </article>
      </div>

      <div>
        <Link
          href="/"
          className="self-start border-solid border-2 border-yellow-300 px-5 py-2 ml-4 rounded-md hover:scale-[1.04] transition duration-150 hover:ease-in"
        >
          Visit Movie Homepage
        </Link>
      </div>
      <MovieInfo />
    </section>
  );
};
export default MovieDetails;
