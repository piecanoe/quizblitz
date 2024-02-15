import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, { signal: abortCont.signal });

        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        if (!abortCont.signal.aborted) {
          const fetchedData = await res.json();
          setData(fetchedData);
          setIsLoading(false);
          setError(null);
        }
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error(err);
          if (!abortCont.signal.aborted) {
            setIsLoading(false);
            setError(err.message);
          }
        }
      }
    };

    fetchData();

    return () => {
      abortCont.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
