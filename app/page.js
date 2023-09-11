"use client";

import PopularMovies from "./components/PopularMovies";
import SearchBar from "./components/SearchBar";
import Slider from "./components/Slider";

const Homepage = () => {
  return (
    <main className="h-full w-full">
      <Slider />
      <SearchBar />
      <PopularMovies />
    </main>
  );
};
export default Homepage;
