import { useState, useEffect } from 'react';
import QuizDetails from '../components/QuizDetails';
import useFetch from '../useFetch';

const QuizPage = ({ tags }) => {
  const url = `https://the-trivia-api.com/v2/questions?tags=${tags}`;
  const { data: quizData, error, isLoading } = useFetch(url);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [randomQuizData, setRandomQuizData] = useState([]);
  const [score, setScore] = useState(null);
  const formattedTags = tags.replace(/_/g, ' ');
  // Function to shuffle an array
  const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const handleAnswerSelect = (selectedAnswer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [quizData.id]: selectedAnswer,
    }));
  };

  const handleSubmit = () => {
    // Check if all questions are answered before submitting
    if (Object.keys(selectedAnswers).length !== quizData.length) {
      console.log('Please answer all questions before submitting.');
      return;
    }

    // Compare submitted answers with correct answers
    const correctAnswers = quizData.map((question) => question.correctAnswer);
    const submittedAnswers = Object.values(selectedAnswers);

    // Count the number of correct answers
    const numCorrectAnswers = submittedAnswers.filter(
      (answer, index) => answer === correctAnswers[index]
    ).length;

    // Calculate the score (percentage)
    const percentageScore = (numCorrectAnswers / correctAnswers.length) * 100;

    // Update the score state
    setScore(percentageScore);

    // Additional logic for handling submission if needed
    console.log('Submitted Answers:', selectedAnswers);
    console.log('Number of Correct Answers:', numCorrectAnswers);
    console.log('Score:', percentageScore);
  };

  // Shuffle the quizData array and take the first 5 elements
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
            <QuizDetails
              quizData={quiz}
              error={error}
              isLoading={isLoading}
              onAnswerSelect={handleAnswerSelect}
            />
          </div>
        ))}
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
      {score !== null && <p>Your Score: {score}%</p>}
    </div>
  );
};

export default QuizPage;
