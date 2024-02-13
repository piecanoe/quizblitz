import QuizPage from "./QuizPage";
import useFetch from "./useFetch";

const Home = () => {
  const url = `https://the-trivia-api.com/v2/questions`;
  const { data: quizData, error, isLoading } = useFetch(url);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {quizData && <QuizPage quizData={quizData} />}
      <h1>all quizzes</h1>
    </div>
  );
};

export default Home;
