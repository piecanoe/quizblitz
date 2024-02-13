import QuizList from "./QuizList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: quizData,
    isLoading,
    error,
  } = useFetch("https://the-trivia-api.com/v2/questions");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {quizData && <QuizList quizzes={quizData} />}
    </div>
  );
};

export default Home;
