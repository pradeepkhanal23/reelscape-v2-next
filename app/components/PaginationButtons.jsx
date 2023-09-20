const PaginationButtons = ({ page, total_pages }) => {
  return (
    <>
      <section>
        <div className=" flex flex-col items-center justify-center w-full mx-auto">
          <div>
            <button
              className="border-solid border-2 border-yellow-300 px-5 py-2 ml-4 rounded-md text-lg hover:scale-[1.04] transition duration-150 hover:ease-in"
              id="prev"
            >
              Prev
            </button>
            <button
              className="border-solid border-2 border-yellow-300 px-5 py-2 ml-4 rounded-md text-lg hover:scale-[1.04] transition duration-150 hover:ease-in"
              id="next"
            >
              Next
            </button>
          </div>
          <p className="text-xl mt-5">
            Page {page} of {total_pages}
          </p>
        </div>
      </section>
    </>
  );
};
export default PaginationButtons;
