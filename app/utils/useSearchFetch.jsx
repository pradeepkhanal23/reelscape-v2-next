import axios from "axios";
import { useState, useEffect } from "react";

export default function useSearchFetch(category, query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const url = `${baseUrl}/search/${category}?query=${query}&api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
        }
        throw new Error(response.statusText);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(true);
      }
    };

    fetchData();
  }, [category, query, url]);

  return { data, error, loading };
}
