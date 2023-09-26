"use client";

import SearchBar from "@/app/components/SearchBar";
import { useParams } from "next/navigation";
import { getSearchAPIData } from "@/lib/getSearchAPIData";
import { useState, useEffect } from "react";
import DisplayOutput from "@/app/components/DisplayOutput";
import SearchTitle from "@/app/components/SearchTitle";
import DisplayOutputSkeleton from "@/app/components/DisplayOutputSkeleton";

const SearchPage = () => {
  const { category, query } = useParams();

  const [searchedData, setSearchedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch search-details
    async function fetchSearchDetails() {
      const response = await getSearchAPIData(category, query, currentPage);
      setSearchedData(response);
      setLoading(false);
    }

    fetchSearchDetails();
  }, [category, query, currentPage]);

  const { page, results, total_pages, total_results } = searchedData;

  const handleNext = () => {
    if (page < total_pages) {
      setCurrentPage((oldState) => {
        return oldState + 1;
      });
    }
  };
  const handlePrev = () => {
    if (page !== 1) {
      setCurrentPage((prev) => {
        return prev - 1;
      });
    }
  };

  return (
    <>
      <SearchBar />
      {results && results.length === 0 && !loading ? (
        <div className="text-center text-3xl uppercase min-h-[60vh] pt-10 flex flex-col gap-3">
          <span className="text-red-200">Oops Sorry 😢 No results Found</span>
          <span>for</span> <q className="text-tertiary">{category}</q>{" "}
          <q className="text-primary">{query}</q>
          <p>Please try another movie 🎦 OR tv 📺 name....</p>
        </div>
      ) : (
        <>
          <section className=" w-full p-10 ">
            {loading ? (
              <>
                <h4 className="text-center mb-10 text-4xl uppercase font-bold ">
                  Searching{" "}
                  <span className="text-yellow-200 mr-2">{query}</span>
                  <span className="text-green-300">{category}.....</span>
                </h4>
                <DisplayOutputSkeleton results={results} />
              </>
            ) : (
              <>
                <SearchTitle
                  results={results}
                  total_results={total_results}
                  category={category}
                  query={query}
                />
                <DisplayOutput
                  results={results}
                  category={category === "tv" ? "show" : "movie"}
                />
              </>
            )}

            {}
          </section>
          <div className=" flex flex-col items-center justify-center w-full mx-auto">
            <div>
              <button onClick={handlePrev} className="pagination-btn">
                Prev
              </button>
              <button onClick={handleNext} className="pagination-btn">
                Next
              </button>
            </div>
            <p className="text-xl mt-5">
              Page {page ? page : "X"} of {total_pages ? total_pages : "X"}
            </p>
          </div>
        </>
      )}
    </>
  );
};
export default SearchPage;
