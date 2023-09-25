import Title from "./Title";
import DisplayOutput from "./DisplayOutput";

export const metadata = {
  title: "Reelscape Homepage",
  description: "Movie guide and rating website",
};

const PopularMovies = ({ popularMovies }) => {
  return (
    <>
      <section className=" w-full h-full p-10">
        <Title description="Popular Movies" />
        <DisplayOutput results={popularMovies} category="movie" />
      </section>
    </>
  );
};
export default PopularMovies;
