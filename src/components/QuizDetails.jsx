import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

<<<<<<< HEAD
const QuizDetails = () => {
  const { id } = useParams();
  const apiUrl = `https://the-trivia-api.com/v2/questions/` + id;
  const { data: quizData, error, isLoading } = useFetch(apiUrl);

=======
const QuizDetails = ({ quizData, error, isLoading }) => {
>>>>>>> e0a0e8a4eb6e864e586d68f762712a8ce7b1ed51
  return (
    <div className="quiz-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {quizData && (
        <article>
          <h2>{quizData.category}</h2>
<<<<<<< HEAD
          <p>Question: {quizData.question}</p>
=======
          <p>Question: {quizData.question.text}</p>
>>>>>>> e0a0e8a4eb6e864e586d68f762712a8ce7b1ed51
          <p>Correct Answer: {quizData.correctAnswer}</p>
          <p>Incorrect Answer: {quizData.incorrectAnswers}</p>
        </article>
      )}
    </div>
  );
};

export default QuizDetails;

// const QuizDetails = ({ quiz }) => {
//   return (
//     <div className="quiz-details">
//       <h3>{quiz.question}</h3>
//       <p>Category: {quiz.category}</p>
//       <p>Difficulty: {quiz.difficulty}</p>
//     </div>
//   );
// };

// export default QuizDetails;
