import QuizDetails from "./components/QuizDetails";

const QuizList = ({ quizData }) => {
  return (
    <div className="quiz-list">
      {quizData.map((set) => (
        <div className="quiz-preview" key={set.id}>
          <Link to={`/questions`}>
            <h2>{set.question}</h2>
            <p>{set.category}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
