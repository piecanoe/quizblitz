import QuizDetails from "./components/QuizDetails";

const QuizList = ({ quizData }) => {
  return (
    <div className="quiz-list">
      {quizData.map((quiz) => (
        <div key={quiz.id} className="quiz">
          <h2>{quiz.question.text}</h2>
          <QuizDetails quizData={quiz} />
        </div>
      ))}
    </div>
  );
};

export default QuizList;
