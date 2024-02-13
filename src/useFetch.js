import { useState, useEffect } from "react";

<<<<<<< HEAD
const useFetch = (apiUrl) => {
=======
const useFetch = (url) => {
>>>>>>> e0a0e8a4eb6e864e586d68f762712a8ce7b1ed51
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
<<<<<<< HEAD
    fetch(apiUrl, { signal: abortCont.signal })
=======
    fetch(url)
>>>>>>> e0a0e8a4eb6e864e586d68f762712a8ce7b1ed51
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
<<<<<<< HEAD
  }, [apiUrl]);
=======
  }, [url]);
>>>>>>> e0a0e8a4eb6e864e586d68f762712a8ce7b1ed51

  return { data, isLoading, error };
};

export default useFetch;
