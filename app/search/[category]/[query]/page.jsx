"use client";

// import SearchBar from "../../../components/SearchBar";
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
      <section className=" w-full p-10 ">
        {loading ? (
          <>
            <h4 className="text-center mb-10 text-4xl uppercase font-bold ">
              Searching <span className="text-yellow-200 mr-2">{query}</span>
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
          <button
            onClick={handlePrev}
            className="border-solid border-2 border-yellow-300 px-5 py-2 ml-4 rounded-md text-lg hover:scale-[1.04] transition duration-150 hover:ease-in"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="border-solid border-2 border-yellow-300 px-5 py-2 ml-4 rounded-md text-lg hover:scale-[1.04] transition duration-150 hover:ease-in"
          >
            Next
          </button>
        </div>
        <p className="text-xl mt-5">
          Page {page} of {total_pages}
        </p>
      </div>
    </>
  );
};
export default SearchPage;
