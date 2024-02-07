import { useState, useEffect } from "react";
import QuestionList from "./components/QuestionList";

const Home = () => {
  const [questionSets, setQuestionSets] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function handleDelete(id) {
    const newQuestionSets = questionSets.filter(
      (questionSet) => questionSet.id !== id
    );
    setQuestionSets(newQuestionSets);
  }

  useEffect(() => {
    fetch("http://localhost:8000/questionsets")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuestionSets(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {questionSets && (
        <QuestionList questionSets={questionSets} title="All Questions" />
      )}
      {/* {questionSets && (
        <QuestionList
          questionSets={questionSets.filter(
            (question) => question.type == "movie"
          )}
          title="Movie Questions"
        />
      )} */}
    </div>
  );
};

export default Home;
