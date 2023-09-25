const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = "https://api.themoviedb.org/3";

export async function getSearchAPIData(type, query, page = 1) {
  const url = `${baseUrl}/search/${type}?query=${query}&api_key=${apiKey}&language=en-US&page=${page}`;
  const res = await fetch(url);

  if (!res.ok) return undefined;

  return res.json();
}
