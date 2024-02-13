<<<<<<< HEAD
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
=======
import React from "react";
import QuizDetails from "./components/QuizDetails";

const QuizList = ({ quizzes }) => {
  return (
    <div className="quiz-list">
      {quizzes.map((quiz) => (
        <div key={quiz.id} className="quiz">
          <h2>{quiz.question.text}</h2>
          <QuizDetails quizData={quiz} />
>>>>>>> e0a0e8a4eb6e864e586d68f762712a8ce7b1ed51
        </div>
      ))}
    </div>
  );
};

export default QuizList;
