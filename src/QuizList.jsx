import React from "react";
import QuizList from "./QuizList";

const Quiz = ({ quizzes, title }) => {
  return (
    <div className="quiz">
      <h2>{title}</h2>
      <QuizList quizzes={quizzes} />
    </div>
  );
};

export default Quiz;
