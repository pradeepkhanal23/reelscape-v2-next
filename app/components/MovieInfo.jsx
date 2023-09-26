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
            <span className="information">
              Budget:{" "}
              <strong className="text-white">
                {budget ? "$ " + addCommas(budget) : "N/A"}
              </strong>
            </span>

            <span className="information">
              Revenue:{" "}
              <strong className="text-white">
                {" "}
                {revenue ? "$ " + addCommas(revenue) : "N/A"}
              </strong>
            </span>

            <span className="information">
              Runtime: <strong className="text-white">{runtime} mins</strong>
            </span>
            <span className="information">
              Status: <strong className="text-white">{status}</strong>
            </span>
          </div>
          <br />
          <div className="pb-5">
            <h3 className="pl-2 font-bold">
              {production_companies && production_companies.length === 0
                ? "Production Details Not Available"
                : "Production Companies"}
            </h3>
            {production_companies &&
              production_companies.map((company, i) => {
                return (
                  <span className="pl-2 text-md font-bold" key={i}>
                    {company.name}
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
