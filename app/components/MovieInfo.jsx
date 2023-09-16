import { addCommas } from "../utils/addCommas";

const MovieInfo = ({
  budget,
  revenue,
  runtime,
  status,
  production_companies,
}) => {
  return (
    <>
      <article>
        <h1 className="font-extrabold text-center uppercase">Movie Info</h1>
        <div className="my-1 mx-auto w-[98%]">
          <div>
            <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
              Budget:{" "}
              <strong className="text-white">${addCommas(budget)}</strong>
            </span>

            <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
              Revenue:{" "}
              <strong className="text-white">${addCommas(revenue)}</strong>
            </span>

            <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
              Runtime: <strong className="text-white">{runtime} mins</strong>
            </span>
            <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
              Status: <strong className="text-white">{status}</strong>
            </span>
          </div>
          <br />
          <div className="pb-5">
            <h3 className="pl-2 font-medium">Production Companies</h3>
            {production_companies &&
              production_companies.map((company, i) => {
                return (
                  <span className="pl-2 text-md" key={i}>
                    {company.name},
                    <br />
                  </span>
                );
              })}
          </div>
        </div>
      </article>
    </>
  );
};
export default MovieInfo;
