import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizDetails from '../components/QuizDetails';
import useFetch from '../useFetch';

const QuizPage = ({ tags }) => {
  const navigate = useNavigate();
  const url = `https://the-trivia-api.com/v2/questions?tags=${tags}`;
  const { data: quizData, error, isLoading } = useFetch(url);
  const [randomQuizData, setRandomQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const formattedTags = tags.replace(/_/g, ' ');
  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (quizData) {
      setRandomQuizData(shuffleArray(quizData).slice(0, 5));
    }
  }, [quizData]);

  const handleLastQuestionAnswered = () => {
    navigate('/score');
  };
  return (
    <div className="quiz-page">
      <h1 className="quiz-category">{formattedTags}</h1>
      {error && <div>Error: {error}</div>}
      {isLoading && <div>Loading...</div>}
      {randomQuizData &&
        randomQuizData.map((quiz, index) => (
          <div key={quiz.id} className="quiz">
            <QuizDetails
              quizData={quiz}
              error={error}
              isLoading={isLoading}
              isLastQuestion={index === randomQuizData.length - 1}
              onLastQuestionAnswered={handleLastQuestionAnswered}
            />
          </div>
        ))}

      {/* {score !== null && <p>Your Score: {score}%</p>} */}
    </div>
  );
};

export default QuizPage;
