import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import { getAPIEndpointData } from "@/lib/getAPIEndpointData";
import DisplayOutput from "../components/DisplayOutput";

export const metadata = {
  title: "TV Shows",
};

export default async function ShowsPage() {
  const response = await getAPIEndpointData("tv/popular");
  const popularShows = await response.results;

  return (
    <>
      <section className="w-full p-10">
        <SearchBar />
        <Title description="Popular TV" />
        <DisplayOutput results={popularShows} category="show" />
      </section>
    </>
  );
}
