const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export async function fetchSearchAPIData(type, query) {
  const url = `${baseUrl}/search/${type}?query=${query}&api_key=${apiKey}&language=en-US`;
  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch the data");

  return res.json();
}
