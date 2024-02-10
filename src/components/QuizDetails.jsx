import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const QuizDetails = () => {
  const { id } = useParams();
  const {
    data: quiz,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/quizzes/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/quizzes/" + quiz.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="quiz-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {quiz && (
        <article>
          <h2>Quiz: {quiz.title}</h2>
          <p>Category: {quiz.category}</p>
          <br />
          <div>
            <h3>{quiz.question}</h3>
            <p>{quiz.answer}</p>
            <button onClick={handleClick}>delete</button>
          </div>
        </article>
      )}
    </div>
  );
};

export default QuizDetails;
