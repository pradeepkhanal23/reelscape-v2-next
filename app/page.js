"use client";

import Loader from "./components/Loader";
import PopularMovies from "./components/PopularMovies";
import SearchBar from "./components/SearchBar";
import Slider from "./components/Slider";
import useFetch from "./utils/useFetch";

const Homepage = () => {
  const { data, error, loading } = useFetch("movie", "now_playing");

  if (loading) {
    return <Loader />;
  }
  return (
    <main className="h-full w-full">
      <Slider movies={data} />
      <SearchBar />
      <PopularMovies data={data} />
    </main>
  );
};
export default Homepage;
