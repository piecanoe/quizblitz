import { useState, useEffect } from 'react';
import QuizDetails from '../components/QuizDetails';
import useFetch from '../useFetch';

const QuizPage = ({ tags }) => {
  const url = `https://the-trivia-api.com/v2/questions?tags=${tags}`;
  const { data: quizData, error, isLoading } = useFetch(url);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [randomQuizData, setRandomQuizData] = useState([]);
  const [score, setScore] = useState(null);
  const formattedTags = tags.replace(/_/g, ' ');
  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const handleAnswerSelect = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);
    console.log(selectedAnswer);

    if (selectedAnswer === quizData.question.correctAnswer) {
      console.log('nice!');
    } else {
      console.log('wrong');
    }
  };

  useEffect(() => {
    if (quizData) {
      setRandomQuizData(shuffleArray(quizData).slice(0, 1));
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
            <QuizDetails
              quizData={quiz}
              error={error}
              isLoading={isLoading}
              onAnswerSelect={handleAnswerSelect}
            />
          </div>
        ))}

      {score !== null && <p>Your Score: {score}%</p>}
    </div>
  );
};

export default QuizPage;
