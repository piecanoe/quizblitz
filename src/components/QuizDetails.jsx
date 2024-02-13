const QuizDetails = ({ quizData, error, isLoading }) => {
  const shuffleAnswers = (answers) => {
    return answers.slice().sort(() => Math.random() - 0.5);
  };

  const handleAnswerClick = (selectedAnswer) => {
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
            {shuffleAnswers([
              quizData.correctAnswer,
              ...quizData.incorrectAnswers,
            ]).map((answer, index) => (
              <button key={index} onClick={() => handleAnswerClick(answer)}>
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
