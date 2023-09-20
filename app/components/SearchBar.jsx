"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SearchBar = () => {
  const [formInputs, setFormInputs] = useState({
    category: "movie",
    searchTerm: "",
  });

  const handleInputs = (e) => {
    let { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const router = useRouter();

  const search = async (e) => {
    e.preventDefault();
    if (formInputs.searchTerm !== "" && formInputs.searchTerm !== null) {
      router.push(`/search/${formInputs.category}/${formInputs.searchTerm}`);
    } else {
      alert("Please enter a search term");
    }
  };

  return (
    <>
      <form
        className="mx-auto my-10 w-[98%] p-3 flex flex-col items-center"
        onSubmit={search}
      >
        <div className="pt-5 text-center flex items-center" id="search-radio">
          <label htmlFor="movie" className="mr-2">
            Movies
          </label>
          <input
            type="radio"
            id="movie"
            name="category"
            value="movie"
            checked={formInputs.category === "movie"}
            onChange={handleInputs}
          />
          <span className="mx-2"></span>
          <label htmlFor="tv" className="mr-2">
            TV Shows
          </label>
          <input
            type="radio"
            id="tv"
            name="category"
            value="tv"
            checked={formInputs.category === "tv"}
            onChange={handleInputs}
          />
        </div>
        <div
          className="flex flex-col items-center w-screen gap-5 px-8 mt-5 mb-10 md:flex-row md:items-center md:justify-center"
          id="search-input"
        >
          <input
            required
            type="text"
            id="user-input"
            name="searchTerm"
            onChange={handleInputs}
            placeholder="Enter movie or tv name...."
            className="w-full px-4 py-2.5 border-2 rounded-md border-white bg-transparent focus:outline-yellow-100 md:w-[60%] lg:w-[40%]"
          />
          <button
            className="text-white  px-5 py-2.5 w-[30%] rounded-md border-2 border-white md:w-[20%] lg:w-[10%]"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};
export default SearchBar;
