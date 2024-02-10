import axios from "axios";
import { useEffect, useState } from "react";

const OpenTrivia = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=50")
      .then((res) => setData(res.data))
      .catch((err) => console.err("Error fetching data", err));
  }, []);

  return (
    <div>
      <h1>Trivia Qs</h1>
      <div> {data.question}</div>
    </div>
  );
};

export default OpenTrivia;
