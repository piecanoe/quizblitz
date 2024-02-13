import { useState, useEffect } from "react";

const useFetch = (apiUrl) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.error(err);
          setIsLoading(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [apiUrl]);

  return { data, isLoading, error };
};

export default useFetch;
