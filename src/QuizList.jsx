import React from "react";
import QuizDetails from "./components/QuizDetails";

const QuizList = ({ quizzes }) => {
  return (
    <div className="quiz-list">
      {quizzes.map((quiz) => (
        <div key={quiz.id} className="quiz">
          <h2>{quiz.question.text}</h2>
          <QuizDetails quizData={quiz} />
        </div>
      ))}
    </div>
  );
};

export default QuizList;
