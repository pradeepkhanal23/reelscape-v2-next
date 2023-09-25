"use client";

import PopularMovies from "./components/PopularMovies";
import Slider from "./components/Slider";
import SearchBar from "./components/SearchBar";

import { getAPIEndpointData } from "@/lib/getAPIEndpointData";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [sliderMovies, setSliderMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    // Fetch slider movies
    async function fetchSliderMovies() {
      const response = await getAPIEndpointData("movie/now_playing");
      setSliderMovies(response.results);
    }

    fetchSliderMovies();

    // Fetch popular movies
    async function fetchPopularMovies() {
      const response = await getAPIEndpointData("movie/popular");
      setPopularMovies(response.results);
    }

    fetchPopularMovies();
  }, []);
  return (
    <main className="h-full w-full">
      <Slider sliderMovies={sliderMovies} />
      <SearchBar />
      <PopularMovies popularMovies={popularMovies} />
    </main>
  );
};
export default Homepage;
