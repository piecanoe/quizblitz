import { useState, useEffect } from 'react';
import './QuizDetails.css';

const shuffleAnswers = (answers) => {
  return answers.slice().sort(() => Math.random() - 0.5);
};
const QuizDetails = ({ quizData, error, isLoading, isLastQuestion }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [answerChosen, setAnswerChosen] = useState(false);

  useEffect(() => {
    setShuffledAnswers(
      shuffleAnswers([quizData.correctAnswer, ...quizData.incorrectAnswers])
    );
  }, [quizData]);

  const handleAnswerClick = (selectedAnswer, event) => {
    event.preventDefault();
    setSelectedAnswer(selectedAnswer);

    if (selectedAnswer === quizData.correctAnswer) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }

    setAnswerChosen(true);
  };

  return (
    <div className="quiz-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {quizData && (
        <article className="quiz-set">
          <h2 className="quiz-question">{quizData.question.text}</h2>

          <form className="answers">
            {shuffledAnswers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer, event)}
                disabled={answerChosen}
                className="answer-button"
                style={{
                  height: '3rem',
                  fontWeight: '500',
                  fontSize: '1rem',
                  backgroundColor:
                    selectedAnswer === answer &&
                    selectedAnswer === quizData.correctAnswer &&
                    answerChosen
                      ? '#50C878' // Green background for correct and selected answer after choosing an answer
                      : selectedAnswer === answer &&
                        selectedAnswer !== quizData.correctAnswer
                      ? '#FF5733' // Red background for incorrect selected answer
                      : selectedAnswer !== answer &&
                        answer === quizData.correctAnswer &&
                        answerChosen
                      ? '#50C878' // Green background for correct answer after choosing an answer
                      : '',
                }}
              >
                {answer}
              </button>
            ))}
          </form>
          {selectedAnswer && <p className="feedback">{feedback}</p>}
        </article>
      )}
    </div>
  );
};

export default QuizDetails;
