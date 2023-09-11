const SearchBar = () => {
  return (
    <>
      <form
        className="mx-auto my-10 w-[98%] p-3 flex flex-col items-center "
        action="/search.html"
      >
        <div className="pt-5 text-center flex items-center" id="search-radio">
          <div>
            <label htmlFor="movie" className="mr-2">
              Movies
            </label>
            <input
              type="radio"
              id="movie"
              name="type"
              value="movie"
              defaultChecked
            />
          </div>
          <span className="mx-2"></span>
          <div>
            <label htmlFor="tv" className="mr-2">
              TV Shows
            </label>
            <input type="radio" id="tv" name="type" value="tv" />
          </div>
        </div>
        <div
          className="flex flex-col items-center w-screen gap-5 px-8 mt-5 mb-10 md:flex-row md:items-center md:justify-center"
          id="search-input"
        >
          <input
            required
            type="text"
            id="user-input"
            name="user-input"
            placeholder="Enter movie name...."
            className="w-[80%] px-4 py-2.5 border-2 rounded-md border-white bg-transparent focus:outline-yellow-100 md:w-[60%] lg:w-[40%]"
          />
          <button
            className="text-white bg-[#2b4259] px-5 py-2.5 w-[30%] rounded-md border-2 border-white md:w-[20%] lg:w-[10%]"
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
