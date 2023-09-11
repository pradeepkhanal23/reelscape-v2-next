const TvInfo = () => {
  return (
    <article>
      <h1 className="font-extrabold text-center uppercase">TV Info</h1>
      <div className="my-1 mx-auto w-[98%]">
        <div>
          <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
            Number of Episodes: <strong className="text-white">228</strong>
          </span>

          <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
            Last Episode to Air:{" "}
            <strong className="text-white">The Last One, 2004-05-06</strong>
          </span>

          <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
            Status: <strong className="text-white">Ended</strong>
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
  );
};
export default TvInfo;
