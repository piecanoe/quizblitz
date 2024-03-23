import { useState, useEffect } from 'react';
import QuizDetails from '../components/QuizDetails';
import useFetch from '../useFetch';
import './QuizPage.css';

const QuizPage = ({ tags }) => {
  const url = `https://the-trivia-api.com/v2/questions?tags=${tags}`;
  const { data: quizData, error, isLoading } = useFetch(url);
  const [randomQuizData, setRandomQuizData] = useState([]);

  const formattedTags = tags.replace(/_/g, ' ');
  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const handleClick = (e) => {
    window.location.reload();
    console.log('clicked');
  };

  useEffect(() => {
    if (quizData) {
      setRandomQuizData(shuffleArray(quizData).slice(0, 5));
    }
  }, [quizData]);

  return (
    <div className="quiz-page">
      <h1 className="quiz-category">{formattedTags}</h1>
      {error && <div>Error: {error}</div>}
      {isLoading && <div>Loading...</div>}
      {randomQuizData &&
        randomQuizData.map((quiz) => (
          <div key={quiz.id} className="quiz">
            <QuizDetails quizData={quiz} error={error} isLoading={isLoading} />
          </div>
        ))}

      <button className="try-again" onClick={handleClick}>
        Start New Quiz
      </button>
    </div>
  );
};

export default QuizPage;
