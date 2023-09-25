const TvInfo = ({
  production_companies,
  status,
  last_episode_to_air,
  number_of_episodes,
}) => {
  return (
    <article>
      <h1 className="font-extrabold text-center uppercase">TV Info</h1>
      <div className="my-1 mx-auto w-[98%]">
        <div>
          <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
            Number of Episodes:{" "}
            <strong className="text-white">{number_of_episodes}</strong>
          </span>

          <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
            Last Episode to Air:
            <strong className="text-white">
              {` `}
              {last_episode_to_air?.name}, {last_episode_to_air?.air_date}
            </strong>
          </span>

          <span className="block pb-2 pl-2 mt-2 font-medium text-center text-yellow-400 border-b-2 border-slate-10 md:text-left">
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
  );
};
export default TvInfo;
