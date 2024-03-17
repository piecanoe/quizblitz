import { useState, useEffect } from 'react';

const shuffleAnswers = (answers) => {
  return answers.slice().sort(() => Math.random() - 0.5);
};
const QuizDetails = ({ quizData, error, isLoading, isLastQuestion }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [answerChosen, setAnswerChosen] = useState(false);

  useEffect(() => {
    setShuffledAnswers(
      shuffleAnswers([quizData.correctAnswer, ...quizData.incorrectAnswers])
    );
  }, [quizData]);

  // useEffect(() => {
  //   console.log(score); // Log the updated score after it's been set
  // }, [score]); // Run this effect whenever score changes

  const handleAnswerClick = (selectedAnswer, event) => {
    event.preventDefault();
    setSelectedAnswer(selectedAnswer);
    // console.log('selected', selectedAnswer);
    // console.log('correct', quizData.correctAnswer);

    if (selectedAnswer === quizData.correctAnswer) {
      setFeedback('Correct!');
      setScore((prevScore) => prevScore + 1);
    } else {
      setFeedback('Incorrect!');
    }

    setAnswerChosen(true);
    console.log(score);
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
