const MovieInfo = () => {
  return (
    <>
      <article>
        <h1 className="font-extrabold text-center uppercase">Movie Info</h1>
        <div className="my-1 mx-auto w-[98%]">
          <div>
            <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
              Budget: <strong className="text-white">$1,000,000</strong>
            </span>

            <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
              Revenue: <strong className="text-white">$1,000,000</strong>
            </span>

            <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
              Runtime: <strong className="text-white">90 minutes</strong>
            </span>
            <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
              Status: <strong className="text-white">Released</strong>
            </span>
          </div>
          <br />
          <div>
            <h3 className="pl-2 font-medium">Production Companies</h3>
            <span className="pl-2 text-md">Company1,</span>
            <span className="pl-2 text-md">Company2,</span>
            <span className="pl-2 text-md">Company3</span>
          </div>
        </div>
      </article>
    </>
  );
};
export default MovieInfo;
