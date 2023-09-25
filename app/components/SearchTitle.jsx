const SearchTitle = ({ results, total_results, category, query }) => {
  function removePercent20(string) {
    return string.replace(/%20/g, " ");
  }
  return (
    <h2 className="text-center text-xl uppercase font-bold pb-10 md:text-2xl">
      <div className="text-4xl ">
        {results?.length} of {total_results} results for{" "}
        <q className="text-green-300 mx-2">{category}</q>
        <q className="text-yellow-300 ">{removePercent20(query)}</q>
      </div>
    </h2>
  );
};
export default SearchTitle;
