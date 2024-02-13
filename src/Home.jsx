import QuizList from "./QuizList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: quizData,
    isLoading,
    error,
  } = useFetch("https://opentdb.com/api.php?amount=50&category=11");

  const quizzes = quizData && quizData.results;
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {quizzes && <QuizList quizzes={quizzes} title="All Quizzes" />}
    </div>
  );
};

export default Home;
