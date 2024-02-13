import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const QuizDetails = () => {
  const { id } = useParams();
  const {
    data: questions,
    error,
    isLoading,
  } = useFetch(`https://opentdb.com/api.php?amount=50&category=11`);

  const quiz = questions && questions.length > 0 ? questions[id] : null;
  return (
    <div className="quiz-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {quiz && (
        <article>
          <h2>{quiz.category}</h2>
          <p>Question: {quiz.question}</p>
          <p>Correct Answer: {quiz.correct_answer}</p>
          <p>Incorrect Answer: {quiz.incorrect_answers.join(",")}</p>
        </article>
      )}
    </div>
  );
};

export default QuizDetails;
