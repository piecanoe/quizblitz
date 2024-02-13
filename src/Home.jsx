import QuizList from "./QuizList";
import useFetch from "./useFetch";

const Home = () => {
  const apiUrl = `https://the-trivia-api.com/v2/questions`;
  const { data: quizData, error, isLoading } = useFetch(apiUrl);
  // } = useFetch("http://localhost:8000/results");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {quizData && <QuizList quizData={quizData} />}
      <h1>all quizzes</h1>
    </div>
  );
};

export default Home;
