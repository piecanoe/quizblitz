const QuizDetails = ({ quizData, error, isLoading }) => {
  return (
    <div className="quiz-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {quizData && (
        <article>
          <h2>{quizData.category}</h2>
          <p>Question: {quizData.question.text}</p>
          <p>Correct Answer: {quizData.correctAnswer}</p>
          <p>Incorrect Answer: {quizData.incorrectAnswers}</p>
        </article>
      )}
    </div>
  );
};

export default QuizDetails;
