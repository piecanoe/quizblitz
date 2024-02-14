import { useState, useEffect } from "react";

const shuffleAnswers = (answers) => {
  return answers.slice().sort(() => Math.random() - 0.5);
};
const QuizDetails = ({ quizData, error, isLoading }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    setShuffledAnswers(
      shuffleAnswers([quizData.correctAnswer, ...quizData.incorrectAnswers])
    );
  }, [quizData]);

  const handleAnswerClick = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);
    console.log(`Selected Answer: ${selectedAnswer}`);
  };
  return (
    <div className="quiz-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {quizData && (
        <article>
          <h2>{quizData.category}</h2>
          <p>Question: {quizData.question.text}</p>

          <div className="answer-buttons">
            {shuffledAnswers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                style={{
                  backgroundColor:
                    selectedAnswer === answer ? "green" : "#f1356d",
                }}
              >
                {answer}
              </button>
            ))}
          </div>
        </article>
      )}
    </div>
  );
};

export default QuizDetails;
