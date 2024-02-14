import { useState, useEffect } from "react";
import QuizDetails from "./components/QuizDetails";
import useFetch from "./useFetch";

const QuizPage = () => {
  const url = `https://the-trivia-api.com/v2/questions`;
  const { data: quizData, error, isLoading } = useFetch(url);
  const [randomQuizData, setRandomQuizData] = useState([]);
  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  // Shuffle the quizData array and take the first 5 elements
  useEffect(() => {
    if (quizData) {
      setRandomQuizData(shuffleArray(quizData).slice(0, 5));
    }
  }, [quizData]);

  return (
    <div className="quiz-page">
      {error && <div>Error: {error}</div>}
      {isLoading && <div>Loading...</div>}
      {randomQuizData &&
        randomQuizData.map((quiz) => (
          <div key={quiz.id} className="quiz">
            <h2>{quiz.question.text}</h2>
            <QuizDetails quizData={quiz} />
          </div>
        ))}
    </div>
  );
};

export default QuizPage;
