import { Link } from "react-router-dom";

const QuizList = ({ quizzes, title }) => {
  return (
    <div className="quiz-list">
      <h2>{title}</h2>
      {quizzes.map((quiz) => (
        <div className="quiz-preview" key={quiz.id}>
          <Link to={`/quizzes/${quiz.id}`}>
            <h2>{quiz.title}</h2>
            <p>{quiz.category}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
