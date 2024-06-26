import { useState, useEffect } from 'react';
import QuizDetails from '../components/QuizDetails';
import useFetch from '../useFetch';

const QuizPage = ({ tags }) => {
  const url = `https://the-trivia-api.com/v2/questions?`;
  const { data: quizData, error, isLoading } = useFetch(url);
  const [randomQuizData, setRandomQuizData] = useState([]);
  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const handleClick = (e) => {
    window.location.reload();
  };

  // Shuffle the quizData array and take the first 5 elements
  useEffect(() => {
    if (quizData) {
      setRandomQuizData(shuffleArray(quizData).slice(0, 5));
    }
  }, [quizData]);

  return (
    <div className="quiz-page">
      <h1>Random Quiz</h1>
      {error && <div>Error: {error}</div>}
      {isLoading && <div>Loading...</div>}
      {randomQuizData &&
        randomQuizData.map((quiz) => (
          <div key={quiz.id} className="quiz">
            <QuizDetails quizData={quiz} />
          </div>
        ))}

      <button className="try-again" onClick={handleClick}>
        Start New Quiz
      </button>
    </div>
  );
};

export default QuizPage;
