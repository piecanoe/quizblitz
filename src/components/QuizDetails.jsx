import { useState, useEffect } from 'react';

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
        <article className="quiz-set">
          {/* <h2>{quizData.category}</h2> */}
          <h2 className="quiz-question">{quizData.question.text}</h2>

          <div className="answers">
            {shuffledAnswers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                className="answer"
                style={{
                  height: '3rem',
                  fontWeight: '500',
                  fontSize: '1rem',
                  backgroundColor: selectedAnswer === answer ? '#04242E' : '',
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
