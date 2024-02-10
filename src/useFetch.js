import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch("https://opentdb.com/api.php?amount=50&category=11")
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
          console.log(err);
          setIsLoading(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;
